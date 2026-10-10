/* ─────────────────────────────────────────────────────────────────────────
   value_model.js — the three savings, and every constant behind them.

   An agent returns value in three ways, and the deck has until now only
   counted the first:

     1. HUMAN CAPITAL   hours returned to a person        x loaded rate
     2. ASSET CAPITAL   NPT, downtime, giveaway, deferment recovered
     3. ASSET RISK      probability of a loss event       x its consequence

   Terms 1 and 2 are deterministic: you bank them every cycle. Term 3 is an
   expectation -- you bank it on average, over years. They are kept apart on
   the card for exactly that reason; a reader is entitled to discount the
   third one differently, and adding them together hides that choice.

   ── The rule that stops this being double counting ───────────────────────
   ASSET CAPITAL counts only hours that sit ON THE CRITICAL PATH of a
   physical asset. If a petrophysicist saves four hours and no rig is
   waiting, the asset term is ZERO and the value is already fully counted in
   human capital. If a wellsite supervisor saves four hours while the rig
   waits on the decision, those same four hours are also four RIG hours --
   and a rig hour is worth fifty to a hundred person hours.

   That rule is why 12 of the 33 roles carry no asset term at all. The zeros
   are load-bearing: they are what makes the non-zeros believable.

   ── Where these numbers come from ────────────────────────────────────────
   All 33 research dossiers carry a standing rule: "never fabricate
   enterprise rupee/dollar multipliers; the customer supplies their own well
   count and asset valuation multiplier." The dossiers therefore stop at
   hours per unit of work, and every multiplier below is OURS -- published
   industry anchors and estimates, not the research's claim. They live in
   this file, separate from the page, so an operator can replace them with
   their own and watch every figure move.

   Estate anchors used throughout:
     ONGC   ~26k staff, ~8,000 producing wells, ~550 wells drilled/yr,
            ~270 offshore platforms, ~11,000 km pipeline, ~154 Mbbl/yr oil
     IOCL   ~31k staff, 11 refineries (~80 MMTPA, ~1.6 Mbbl/d),
            ~20,000 km pipeline, ~120 terminals

   Override any of it before this file loads, or from the console:
     window.VALUE_MODEL   = { onTask: 0.35, rate: 3000 };
     window.VALUE_SEATS   = { P10: 900 };
     window.ASSET_CAPITAL = { ... };
     window.ASSET_RISK    = { ... };
   ───────────────────────────────────────────────────────────────────────── */

(function (w) {
  "use strict";

  function defaults(key, obj) {
    if (!w[key]) { w[key] = obj; return; }
    // A caller-supplied object wins per key, but does not wipe the sheet.
    Object.keys(obj).forEach(function (k) {
      if (!(k in w[key])) w[key][k] = obj[k];
    });
  }

  // ── 1. Global constants ────────────────────────────────────────────────
  defaults("VALUE_MODEL", {
    rate:      2500,    // INR per loaded technical-staff hour
    yearHours: 1800,    // productive hours per person per year
    onTask:    0.50,    // share of that year spent inside this workflow
    bblMargin: 2500,    // INR of contribution per incremental barrel
    scale:     "national-operator scale"
  });

  // ── 1b. The four levers ────────────────────────────────────────────────
  /* CANONICAL. Every agent moves exactly one of these four, and every number
     anywhere in this programme rolls up to one of them. Defined here, beside
     the terms that compute them, so the names cannot drift between the deck,
     the dossiers and the board.

     The order is deliberate and is the narrative arc: cost -> risk -> growth.

       PRODUCTIVITY  cheapest to prove, least interesting to a board
       UPTIME        the operator's own language
       INTEGRITY     the only term that prices a loss NOT happening
       RECOVERY      the only term that counts upward

     Note what the first three have in common: every rupee is money NOT SPENT.
     An arithmetic that can only count downward will always read as an
     efficiency pitch, however the slides are worded. RECOVERY is the fix.
     It is priced in rupees so it sums with the other three -- a lever in a
     different unit gets read as a footnote -- but it carries its barrel count
     everywhere, and the barrels are the harder number. Argue in barrels.

     `term` maps the lever to the object in this file that computes it. */
  defaults("VALUE_LEVERS", {
    order: ["productivity", "uptime", "integrity", "recovery"],

    productivity: {
      label:   "Productivity",
      counts:  "Expert hours redeployed onto work only they can do",
      metric:  "Opex, cost per barrel",
      unit:    "INR",
      term:    "VALUE_SEATS",     // human capital
      built:   true,
      /* Say "hours redeployed", never "headcount removed". For an NOC
         audience the second phrasing loses the room and is not what the
         model computes -- seats are an input, not an output. */
      caution: "Never state this as headcount reduction."
    },

    uptime: {
      label:   "Uptime",
      counts:  "Production not lost to waiting \u2014 the asset is fit, but idle",
      metric:  "NPT %, on-stream factor",
      unit:    "INR",
      term:    "ASSET_CAPITAL",
      built:   true,
      caution: "Only counts hours on an asset's critical path. 12 of 33 roles carry no term here, and those zeros are load-bearing."
    },

    integrity: {
      label:   "Integrity",
      counts:  "Expected loss avoided before a barrier fails",
      metric:  "Process safety events, loss of primary containment",
      unit:    "INR",
      term:    "ASSET_RISK",
      built:   true,
      caution: "An expectation, not a forecast. Alpha and beta are stated judgement."
    },

    recovery: {
      label:   "Recovery",
      counts:  "Barrels found, recovered and booked",
      metric:  "Reserves replacement ratio, recovery factor",
      unit:    "INR",            // priced, with the barrel count kept alongside
      term:    "RESOURCE_RECOVERY",
      built:   true,
      /* Priced in rupees so it sits on the same footing as the other three and
         sums into one estate number -- a lever quoted in a different unit gets
         read as a footnote, which is exactly what it must not be. The barrel
         count is carried alongside every figure and is the more defensible of
         the two: barrels come from stated well counts and per-unit volumes,
         the rupees come from one margin assumption (VALUE_MODEL.bblMargin).
         Quote barrels when challenged. */
      caution: "Rupees rest on a single margin assumption. The barrel count is the harder number -- lead with it if pressed."
    }
  });


  // ── 2. Human capital: headcount per role ───────────────────────────────
  /* ~7,700 people across these 33 technical roles, against ~57,000 combined
     payroll -- about 13%, which is the right order for the technical
     population. Headcount also caps the model for free: you cannot free more
     hours than the people in the role actually work. */
  defaults("VALUE_SEATS", {
    // Upstream — subsurface
    P04: 110, P05: 140, P06: 180, P18: 150, P21:  90, P22:  60, P23:  45,
    // Upstream — wells and rigs
    P01: 280, P02:  90, P07: 160, P08: 120, P24: 130,
    // Upstream — field and gathering
    P09: 260, P10: 1800, P11: 320, P25:  80,
    // Midstream
    P12: 200, P13:  70, P14: 140, P15: 130, P26: 110, P27:  85, P29:  70,
    // Downstream
    P03: 620, P16: 340, P17:  90, P28:  75,
    // Cross-cutting
    P19: 180, P20: 210, P30: 260, P31:  70, P32: 900, P33: 120
  });

  // ── 3. Asset capital ───────────────────────────────────────────────────
  /* Two shapes, because two kinds of asset value:

       form "time"    units x hoursPerYear x share x ratePerHour
                      an asset is idle or degraded, and the squad gives
                      some of those hours back  (rigs, refinery units,
                      turnarounds, compressors)

       form "volume"  qtyPerYear x share x ratePerQty
                      product is deferred, given away or spilled as margin
                      (barrels deferred, yield giveaway, demurrage)

     `share` is the honest weak point in every row: the fraction of the
     asset's exposure the squad actually recovers. It is deliberately small.
     Nothing here claims more than 1% of an asset's calendar hours. */
  defaults("ASSET_CAPITAL", {

    // ---- Rigs and wells under construction -----------------------------
    P01: { form: "time", asset: "Drilling rigs",
           units: 60, unitLabel: "rigs", hoursPerYear: 8760,
           share: 0.010, ratePerHour: 120000,
           basis: "1% of rig non-productive time removed",
           source: "~60 rigs under contract at a large national E&P operator; blended offshore/onshore day rate ~US$35k = ~₹1.2 L/rig-hour. NPT typically runs 15-20% of rig time." },

    P07: { form: "time", asset: "Drilling rigs",
           units: 60, unitLabel: "rigs", hoursPerYear: 8760,
           share: 0.008, ratePerHour: 120000,
           basis: "0.8% of rig time recovered through better well programmes",
           source: "Same rig population and day rate as P01; credited to programme quality rather than wellsite execution." },

    P24: { form: "time", asset: "Drilling rigs",
           units: 60, unitLabel: "rigs", hoursPerYear: 8760,
           share: 0.004, ratePerHour: 120000,
           basis: "0.4% of rig time recovered on real-time geosteering calls",
           source: "Operations geology sits on the critical path only while drilling the reservoir section." },

    P08: { form: "time", asset: "Completion spreads",
           units: 25, unitLabel: "spreads", hoursPerYear: 8760,
           share: 0.010, ratePerHour: 80000,
           basis: "1% of completion spread time recovered",
           source: "~25 concurrent completion spreads; spread cost ~₹2 Cr/day." },

    // ---- Refining ------------------------------------------------------
    P03: { form: "time", asset: "Refinery units",
           units: 11, unitLabel: "refineries", hoursPerYear: 8760,
           share: 0.003, ratePerHour: 2500000,
           basis: "0.3% of calendar time of unplanned downtime avoided (~26 h/refinery/yr)",
           source: "A large national refiner: ~11 refineries, ~1.6 Mbbl/d. ₹25 L/refinery-hour is a deliberately discounted margin rate: some lost throughput is recovered later." },

    P32: { form: "time", asset: "Refinery units, via instrumented loop health",
           units: 11, unitLabel: "refineries", hoursPerYear: 8760,
           share: 0.0015, ratePerHour: 2500000,
           basis: "0.15% of calendar time of instrument-caused downtime avoided",
           source: "Spurious trips and failed loops are a recognised contributor to unplanned outage; credited at half the board operator's share." },

    P16: { form: "volume", asset: "Refined product yield",
           qtyPerYear: 584000000, qtyLabel: "bbl processed", share: 0.0015,
           ratePerQty: 300,
           basis: "0.15% of yield giveaway recovered",
           source: "1.6 Mbbl/d x 365. Yield giveaway typically runs 0.5-2% of throughput value; this recovers under a fifth of the low end. ₹300/bbl is an incremental margin uplift, not gross refining margin." },

    P28: { form: "volume", asset: "Blended product quality",
           qtyPerYear: 400000000, qtyLabel: "bbl blended", share: 0.0010,
           ratePerQty: 300,
           basis: "0.10% of quality giveaway recovered on blend",
           source: "Finished-product blends only, not total throughput. Blending to spec rather than comfortably inside it is the most documented giveaway case in refining." },

    P17: { form: "volume", asset: "Refinery planning margin",
           qtyPerYear: 584000000, qtyLabel: "bbl planned", share: 0.0008,
           ratePerQty: 300,
           basis: "0.08% margin uplift from faster, more complete plan cycles",
           source: "Credited to plan quality and cycle count, not to yield -- the two are kept separate so P16 and P17 are not banking the same barrel." },

    P31: { form: "time", asset: "Turnaround critical path",
           units: 6, unitLabel: "major turnarounds/yr", hoursPerYear: 720,
           share: 0.05, ratePerHour: 2500000,
           basis: "1.5 days off the critical path of each 30-day turnaround",
           source: "~6 major turnarounds a year across the estate; a turnaround day carries the same margin loss as an unplanned down-day." },

    // ---- Producing field -----------------------------------------------
    P09: { form: "volume", asset: "Deferred production",
           qtyPerYear: 154000000, qtyLabel: "bbl produced", share: 0.0020,
           ratePerQty: 2900,
           basis: "0.20% of annual production deferment recovered",
           source: "A large national E&P operator: ~154 Mbbl/yr. ₹2,900/bbl is a ~US$35 netback, not the crude price." },

    P10: { form: "volume", asset: "Deferred production",
           qtyPerYear: 154000000, qtyLabel: "bbl produced", share: 0.0025,
           ratePerQty: 2900,
           basis: "0.25% of annual production deferment recovered",
           source: "Route-level detection of down wells is the single largest deferment lever in a mature field." },

    P25: { form: "volume", asset: "Artificial lift uptime",
           qtyPerYear: 154000000, qtyLabel: "bbl produced", share: 0.0015,
           ratePerQty: 2900,
           basis: "0.15% of production recovered through lift availability",
           source: "Pump failures and off-optimum lift settings; credited only to the lift-attributable share." },

    P11: { form: "volume", asset: "Gathering and facility throughput",
           qtyPerYear: 154000000, qtyLabel: "bbl produced", share: 0.0012,
           ratePerQty: 2900,
           basis: "0.12% of production recovered through fewer upsets",
           source: "Console-driven throughput stability upstream of the plant." },

    P13: { form: "volume", asset: "Flowline availability",
           qtyPerYear: 154000000, qtyLabel: "bbl produced", share: 0.0005,
           ratePerQty: 2900,
           basis: "0.05% of production recovered from hydrate and wax interventions",
           source: "Flow assurance events are infrequent but shut in whole flowlines when they occur." },

    // ---- Midstream and plant -------------------------------------------
    P20: { form: "time", asset: "Critical rotating equipment",
           units: 400, unitLabel: "critical machines", hoursPerYear: 8760,
           share: 0.002, ratePerHour: 60000,
           basis: "0.2% of machine availability recovered",
           source: "~400 critical trains across upstream and refining; ₹60k/machine-hour reflects the production each one gates." },

    P26: { form: "time", asset: "Gas processing plants",
           units: 8, unitLabel: "plants", hoursPerYear: 8760,
           share: 0.003, ratePerHour: 800000,
           basis: "0.3% of plant availability and recovery efficiency",
           source: "~8 major gas processing plants." },

    P12: { form: "time", asset: "Offshore platforms",
           units: 270, unitLabel: "platforms", hoursPerYear: 8760,
           share: 0.0005, ratePerHour: 150000,
           basis: "0.05% of platform uptime recovered",
           source: "~270 offshore platforms at a large national E&P operator, most of them small and unmanned." },

    P14: { form: "volume", asset: "Pipeline throughput",
           qtyPerYear: 400000000, qtyLabel: "bbl moved", share: 0.0020,
           ratePerQty: 150,
           basis: "0.20% of throughput value recovered on batch and interface efficiency",
           source: "~31,000 km of combined pipeline. ₹150/bbl is a tariff-and-interface-loss rate, not margin; interface downgrade alone typically costs more than this recovers." },

    P15: { form: "volume", asset: "Berth and terminal turnaround",
           qtyPerYear: 1200, qtyLabel: "vessel calls", share: 0.08,
           ratePerQty: 2500000,
           basis: "8% of demurrage exposure avoided",
           source: "~1,200 vessel calls a year; demurrage and waiting time ~₹25 L per exposed call." },

    P29: { form: "volume", asset: "Freight and demurrage",
           qtyPerYear: 1500, qtyLabel: "scheduled movements", share: 0.06,
           ratePerQty: 2000000,
           basis: "6% of freight and demurrage exposure avoided",
           source: "Schedule quality reduces waiting time and forced re-routing." }

    /* No asset term, deliberately: P02 P04 P05 P06 P18 P19 P21 P22 P23 P27
       P30 P33. Nothing physical waits on these roles inside the workflows
       the agents cover -- their value is human capital, and for several of
       them, risk. */
  });

  // ── 4. Asset risk ──────────────────────────────────────────────────────
  /*   value = unitsPerYear x frequency x consequence x alpha x beta

       frequency    events per exposure unit
       consequence  INR per event
       alpha        share of the event's CAUSATION that is information or
                    decision error -- the part an agent could touch at all
       beta         share of THAT slice the agent actually catches

     alpha and beta are judgement, not data, and the page says so. They are
     held deliberately low: no row claims an agent removes more than ~18% of
     a scenario's expected loss. */
  defaults("ASSET_RISK", {

    P01: { scenario: "Well control incident during drilling",
           unitsPerYear: 550, unitLabel: "wells drilled",
           frequency: 0.0008, consequence: 4000000000,
           alpha: 0.30, beta: 0.35,
           source: "~550 wells/yr. Consequence is a well-control event with loss of the hole, not a Macondo-class blowout." },

    P02: { scenario: "Loss of well integrity requiring workover",
           unitsPerYear: 8000, unitLabel: "producing wells",
           frequency: 0.005, consequence: 40000000,
           alpha: 0.30, beta: 0.45,
           source: "Sustained casing pressure and barrier failures needing intervention; ~₹4 Cr per workover. High beta because this is fundamentally a detection problem." },

    P07: { scenario: "Stuck pipe, fishing or sidetrack",
           unitsPerYear: 550, unitLabel: "wells drilled",
           frequency: 0.04, consequence: 120000000,
           alpha: 0.35, beta: 0.40,
           source: "Stuck-pipe events are common and expensive; consequence is lost rig time plus the sidetrack." },

    P08: { scenario: "Completion failure requiring re-entry",
           unitsPerYear: 550, unitLabel: "wells completed",
           frequency: 0.03, consequence: 80000000,
           alpha: 0.30, beta: 0.40,
           source: "Screen-outs, failed packers and premature water breakthrough traceable to completion design." },

    P03: { scenario: "Unplanned unit trip escalating to an outage",
           unitsPerYear: 11, unitLabel: "refineries",
           frequency: 0.8, consequence: 200000000,
           alpha: 0.25, beta: 0.35,
           source: "Low alpha on purpose: most trips are mechanical, not informational." },

    P19: { scenario: "Major loss of primary containment",
           unitsPerYear: 11, unitLabel: "refineries",
           frequency: 0.15, consequence: 1500000000,
           alpha: 0.30, beta: 0.35,
           source: "A low-frequency, high-consequence process safety event; consequence covers damage, outage and penalty." },

    P30: { scenario: "Integrity-driven leak or forced outage",
           unitsPerYear: 11, unitLabel: "refineries",
           frequency: 0.30, consequence: 800000000,
           alpha: 0.35, beta: 0.40,
           source: "Inspection findings missed or actioned late; higher alpha because this scenario is almost entirely a data and traceability failure." },

    P27: { scenario: "Pipeline leak or rupture",
           unitsPerYear: 31, unitLabel: "thousand km of pipeline",
           frequency: 0.08, consequence: 600000000,
           alpha: 0.35, beta: 0.40,
           source: "~31,000 km combined; consequence covers product loss, remediation, penalty and downtime." },

    P14: { scenario: "Surge or overpressure release",
           unitsPerYear: 31, unitLabel: "thousand km of pipeline",
           frequency: 0.05, consequence: 400000000,
           alpha: 0.30, beta: 0.40,
           source: "Control-room-initiated transients; a subset of total pipeline loss of containment." },

    P32: { scenario: "Safety instrumented function fails on demand",
           unitsPerYear: 12000, unitLabel: "SIF loops",
           frequency: 0.0005, consequence: 250000000,
           alpha: 0.40, beta: 0.45,
           source: "Frequency is the joint probability that a real demand arrives AND the loop is in a failed state. High alpha: proof-test record integrity is the whole control." },

    P20: { scenario: "Catastrophic machinery failure",
           unitsPerYear: 400, unitLabel: "critical machines",
           frequency: 0.01, consequence: 150000000,
           alpha: 0.35, beta: 0.40,
           source: "Consequence is repair plus the deferred production the train gates." },

    P12: { scenario: "Offshore facility equipment incident",
           unitsPerYear: 270, unitLabel: "platforms",
           frequency: 0.02, consequence: 250000000,
           alpha: 0.30, beta: 0.35,
           source: "Process equipment incidents on manned and unmanned platforms." },

    P11: { scenario: "Field upset escalating to a release",
           unitsPerYear: 30, unitLabel: "gathering stations",
           frequency: 0.30, consequence: 100000000,
           alpha: 0.30, beta: 0.35,
           source: "Console-managed upsets that reach a containment boundary." },

    P31: { scenario: "Turnaround schedule overrun",
           unitsPerYear: 6, unitLabel: "major turnarounds",
           frequency: 0.50, consequence: 500000000,
           alpha: 0.40, beta: 0.40,
           source: "Roughly half of major turnarounds overrun; consequence is the extended outage. High alpha: overruns are overwhelmingly a planning and information failure." },

    P33: { scenario: "Environmental exceedance or penalty",
           unitsPerYear: 40, unitLabel: "reporting sites",
           frequency: 0.25, consequence: 80000000,
           alpha: 0.40, beta: 0.45,
           source: "Consent exceedances, late or defective returns; largely a data completeness problem, hence the high alpha and beta." },

    P26: { scenario: "Gas release at a processing plant",
           unitsPerYear: 8, unitLabel: "gas plants",
           frequency: 0.10, consequence: 400000000,
           alpha: 0.30, beta: 0.35,
           source: "Loss of containment on a gas processing train." }

    /* No INTEGRITY term, deliberately: P04 P05 P06 P09 P10 P13 P15 P16 P17
       P18 P21 P22 P23 P24 P25 P28 P29. The subsurface roles are the pointed
       case -- a petrophysicist who mis-picks water saturation causes capital
       to be MISALLOCATED, not lost, and booking that as avoided expected
       loss would be the kind of claim that discredits the other 16 rows.

       These 17 zeros were never a gap in the research. They are RECOVERY,
       the fourth lever, seen from the other side. Misallocated capital is
       precisely a dry hole, a prospect ranked below a better one, a pay
       zone logged as water -- growth foregone rather than money lost.

       RESOURCE_RECOVERY below now carries 9 of these 17 rows (P04 P05 P06
       P09 P18 P21 P22 P23 P24), so the estate total is no longer composed
       entirely of money not spent.

       Note the structure, which fell out of the model rather than being
       imposed on it: every recovery role is drawn from this list, so NO
       ROLE CARRIES BOTH INTEGRITY AND RECOVERY. Roles whose errors
       misallocate capital are exactly the roles whose errors do not
       destroy it. Three levers is the ceiling for any one row.

       The 8 that remain zero in both columns (P10 P13 P15 P16 P17 P25 P28
       P29) are read correctly as "this role does not move that lever". */
  });

  // ── 5. Recovery: barrels found, recovered and booked ───────────────────
  /* The fourth lever, and the only one that counts upward.

     Shape is deliberately the same five factors as ASSET_RISK:

       barrels = unitsPerYear x bblPerUnit x alpha x beta
       rupees  = barrels x VALUE_MODEL.bblMargin

     alpha  what share of the outcome turns on information quality at all
     beta   what share of THAT the agents can credibly claim

     Both are judgement, exactly as in the risk term, and both are stated
     rather than buried. They are set low on purpose -- 0.03 to 0.075
     combined. The whole block lands ~4.0 Mbbl/yr against ONGC's ~154 Mbbl/yr,
     about 2.6% of production. A reader who thinks that is too generous can
     halve beta and watch every figure move.

     WHY THESE NINE ROLES. Seven of them (P04 P05 P06 P18 P21 P22 P23) carried
     Productivity and nothing else -- no rig waits on them, and a mis-picked
     saturation misallocates capital rather than destroying it, so they have
     no Integrity term either. That is not because their work is worth less.
     It is because the model had no upward-counting term until now. P09 and
     P24 already carry Uptime; recovery is additional to it, not instead.

     A role may move more than one lever. A single AGENT moves one. */
  defaults("RESOURCE_RECOVERY", {

    P04: { mechanism: "Pay intervals correctly identified rather than written off as water",
           unitsPerYear: 550, unitLabel: "wells logged per year",
           bblPerUnit: 25000, alpha: 0.20, beta: 0.25,
           source: "Depth-correct, mnemonic-correct curves change net pay at the margin on most wells. Vintage cut-offs and tool-response errors systematically under-call pay rather than over-call it." },

    P05: { mechanism: "Prospects ranked on defensible Pg rather than on advocacy",
           unitsPerYear: 40, unitLabel: "prospects matured per year",
           bblPerUnit: 400000, alpha: 0.15, beta: 0.20,
           source: "Value is in drilling the better prospect first, not in drilling more of them. Low alpha: ranking is a judgement call that data informs but does not settle." },

    P06: { mechanism: "Recovery factor defended by material balance that reconciles",
           unitsPerYear: 25, unitLabel: "major producing fields",
           bblPerUnit: 600000, alpha: 0.15, beta: 0.20,
           source: "A percentage point of recovery factor on a mature field is oil already discovered and already leased. Attribution is deliberately thin -- reservoir management is far more than its data layer." },

    P09: { mechanism: "Workover candidates selected on economics that hold up",
           unitsPerYear: 400, unitLabel: "workovers per year",
           bblPerUnit: 9000, alpha: 0.25, beta: 0.30,
           source: "The agent already emits estimated_uplift_bopd, payback_period_days and capital_efficiency_index. Higher alpha and beta than the exploration rows because the causal link from candidate screening to incremental barrels is short and measurable." },

    P18: { mechanism: "Depth conversion and fluid response the well logs actually agree with",
           unitsPerYear: 60, unitLabel: "exploration and appraisal wells",
           bblPerUnit: 150000, alpha: 0.25, beta: 0.30,
           source: "The velocity chain -- checkshot audit, datum harmonisation, synthetic tie, velocity model, mistie, GRV uncertainty. This is the worked example the pitch is built on, so alpha and beta should be defensible line by line." },

    P21: { mechanism: "Bypassed pay and infill targets located in fields already producing",
           unitsPerYear: 120, unitLabel: "infill and re-entry candidates screened per year",
           bblPerUnit: 80000, alpha: 0.25, beta: 0.30,
           source: "The agent returns ranked bottom-hole target coordinates and estimated un-drained HCPV. Barrels inside existing acreage with existing facilities -- the cheapest barrels an operator can add." },

    P22: { mechanism: "Plateau length and recovery tested against a forecast that history-matches",
           unitsPerYear: 15, unitLabel: "field development plans per year",
           bblPerUnit: 800000, alpha: 0.15, beta: 0.20,
           source: "FDP decisions set recovery for decades. Large per-unit volume, deliberately low attribution: the simulation is one input to a decision with many." },

    P23: { mechanism: "Subsurface data findable, so the other eight roles can act on it",
           unitsPerYear: 550, unitLabel: "well datasets curated per year",
           bblPerUnit: 8000, alpha: 0.15, beta: 0.20,
           source: "An enabler, priced as one. The smallest recovery figure in the block on purpose -- the barrels are realised by the interpreters downstream, and counting them fully here would double-count those rows." },

    P24: { mechanism: "Wellbores steered inside the pay they were planned to contact",
           unitsPerYear: 180, unitLabel: "horizontal and high-angle wells per year",
           bblPerUnit: 30000, alpha: 0.20, beta: 0.25,
           source: "Geosteering on correlations that hold keeps reservoir contact. Distinct from this role's uptime term, which counts rig hours rather than barrels." }

    /* No recovery term for the other 24 roles, deliberately. A board operator
       who prevents a column upset protects throughput -- that is Uptime, and
       it is already counted. A terminal superintendent moves barrels that are
       already produced. Only work that changes WHICH barrels are found or how
       many are ultimately recovered belongs here. Stretching this term across
       the estate to make the total larger is precisely the move that would
       make the other three levers unbelievable. */
  });


  // ── 6. Midstream & downstream expansion (P36–P55, added 2026-10-10) ────
  /* Twenty roles researched to the same template as the original 33, each
     proposed by a value analyst and reviewed line by line. Same shapes, same
     restraint: uptime shares <= 0.5% of calendar hours, alpha x beta <= 0.14 on
     every risk row, and no recovery term (none of these roles changes which
     barrels are found or recovered).

     Scale proxies -- INTERNAL sizing assumptions, never shown on the deck:
       midstream   a large national gas transmission & marketing operator
                   (~4,800 staff, ~16,000 km gas grid, ~120-130 MMSCMD)
       downstream  a large national refiner-marketer (~31,000 staff,
                   ~80 MMTPA, ~20,000 km pipeline, ~37,000 retail stations)

     Personas serving more than one domain carry a valueSplit in
     persona_research/persona_registry.json: value is computed once here at the
     full footprint and apportioned per domain tab on the persona map.

     `defaults()` only adds keys that are not already present, so calling it a
     second time per sheet extends the sheet without touching the 33. */
  defaults("VALUE_SEATS", {
    P36: 85, P37: 60, P38: 100, P39: 90, P40: 60, P41: 14, P42: 40, P43: 25, P44: 50, P45: 180, P46: 130, P47: 90, P48: 80, P49: 100, P50: 260, P51: 160, P52: 50, P53: 900, P54: 110, P55: 200
  });

  defaults("ASSET_CAPITAL", {
    P38: { form: "time", asset: "Mainline gas compressor trains", units: 36, unitLabel: "compressor trains", hoursPerYear: 8760, share: 0.002, ratePerHour: 80000, basis: "0.20% of machine availability recovered (~17.5 h/train/yr)", source: "~36 mainline gas compressor trains across ~16,000 km transmission network (averaging 3 trains across ~12 stations); ₹80,000/machine-hour reflects gated pipeline transmission tariff (~₹81/MMBTU unified tariff) and driver fuel/shrinkage costs during recycle or delayed startup." },

    P40: { form: "time", asset: "Marine jetty berths", units: 12, unitLabel: "berths", hoursPerYear: 8760, share: 0.005, ratePerHour: 180000, basis: "0.5% of marine berth calendar time recovered through streamlined pre-transfer protocols, cryogenic cooldown modeling, and faster custody reconciliation (~44 h/berth/yr)", source: "~12 dedicated marine berths across LNG regas, coastal LPG, crude SPM, and refined product jetties; blended berth idle opportunity cost and tanker demurrage ~₹1.8 L/hour (~US$50k/day). Recovers under 30 minutes of berth occupancy per vessel call across ~1,200 annual calls, well below the 1% cap." },

    P41: { form: "time", asset: "Underground gas storage facilities", units: 3, unitLabel: "facilities", hoursPerYear: 8760, share: 0.002, ratePerHour: 350000, basis: "0.20% of facility calendar hours recovered by compressing seasonal turnover shut-in testing and un-throttling peak withdrawal deliverability (~17.5 h/facility/yr)", source: "~3 underground gas storage and strategic cavern facilities across the transmission grid; ₹3.5 L/facility-hour reflects gated peak withdrawal and transmission capacity tariffs (~170,000 SCM/h at blended tariff and balancing margin). Seasonal turnover shut-in tests typically take 3-7 days per cycle; automated Horner stabilization picking and nodal deliverability modeling recover critical-path operating hours." },

    P42: { form: "volume", asset: "Gas transmission pipeline capacity", qtyPerYear: 1800000000, qtyLabel: "MMBtu transported", share: 0.0008, ratePerQty: 75, basis: "0.08% of throughput capacity recovered by avoiding confirmation cutbacks and dynamically re-routing around pipeline constraint notices", source: "~120-130 MMSCMD (~1.8B MMBtu/yr) transported across ~16,000 km network. ₹75/MMBtu reflects the blended two-zone unified national pipeline tariff (Zone 1 ₹54/MMBtu, Zone 2 ₹110/MMBtu) under statutory access codes. Recovering 0.08% of throughput via automated cycle matching and dynamic secondary pathing is well below typical 0.5-1.5% proration cut exposure." },

    P43: { form: "volume", asset: "System Use Gas (SUG) and pipeline fuel retention", qtyPerYear: 1800000000, qtyLabel: "MMBtu transported", share: 0.0001, ratePerQty: 750, basis: "0.010% of transported throughput recovered by eliminating commercial fuel retention under-recovery and unaccounted-for gas (UAF) slippage (~180,000 MMBtu/yr)", source: "~120-130 MMSCMD (~1.8B MMBtu/yr) transported across ~16,000 km network. Under statutory access codes and open-access tariff regulations, System Use Gas (compressor station fuel, line heaters) and normative transmission loss typically total 0.8-1.2% of throughput (~14.4-21.6M MMBtu/yr). Un-reconciled compressor station fuel telemetry, meter calibration drift, and delayed regulatory fuel tracker filings routinely create commercial under-recovery of 0.05-0.15% of throughput. ₹750/MMBtu reflects the blended commodity cost of gas (~US$9/MMBtu pooled domestic and imported LNG benchmark). Recovering 0.010% of throughput value represents under one-tenth of typical commercial fuel under-recovery exposure, strictly separated from P42's capacity scheduling tariff and P38's compressor driver efficiency." },

    P45: { form: "time", asset: "Refinery process units", units: 11, unitLabel: "refineries", hoursPerYear: 8760, share: 0.001, ratePerHour: 2500000, basis: "0.20% of refinery calendar hours recovered by compressing post-trip first-out diagnostic restart timelines and avoiding emergency throughput throttling during flare header excursions (~17.5 h/refinery/yr) (halved by review: the same unit hours are partly credited to the Board Operator)", source: "11 refineries, ~1.6 Mbbl/d total capacity (~80 MMTPA). ₹25 L/refinery-hour is the established value_model.js benchmark for discounted operational margin loss. Shaving 1-2 hours off restart critical path via automated sequence-of-events first-out isolation (Agent 7) and preventing precautionary unit feed curtailments during flare header backpressure events (Agent 4) recovers 17.5 hours per refinery annually, well below the 1% ceiling." },

    P46: { form: "volume", asset: "Advanced process control constraint margin", qtyPerYear: 584000000, qtyLabel: "bbl processed", share: 0.0008, ratePerQty: 300, basis: "0.08% margin uplift from sustained APC constraint tracking, dynamic model reconciliation, and inferential bias alignment", source: "~1.6 Mbbl/d x 365 = ~584 Mbbl/yr processed across 11 refineries. APC multivariable controllers (Aspen DMC3, Honeywell Profit Controller) push continuous units to hydraulic, thermal, and quality constraints. As crude diets shift and valves stick, degraded models cause operators to clamp manipulated variables or drop sub-controllers to manual, leaking an estimated $0.15-$0.40/bbl in uncaptured margin (Bauer & Craig, 2008). ₹300/bbl is the standard incremental refining margin uplift. Recovering 0.08% of throughput margin (~₹14.0 Cr/yr) captures a modest fraction of typical 1-3% APC benefits, while remaining strictly distinct from P16 (catalyst/yield), P17 (planning schedule), and P28 (blend giveaway)." },

    P47: { form: "volume", asset: "Refinery utility energy and fuel consumption", qtyPerYear: 584000000, qtyLabel: "bbl processed", share: 0.001, ratePerQty: 300, basis: "0.10% of utility and fuel energy giveaway recovered through closed-loop steam balancing, dynamic ASME PTC 4 sootblowing, and acoustic steam trap surveillance", source: "1.6 Mbbl/d x 365 (~584M bbl/yr). Refinery energy consumption and fuel loss typically account for 50-60% of operating cash costs (~6-8% of crude throughput, ~₹400-500/bbl). Credited to reduced steam letdown exergy destruction, dynamic sootblowing heat recovery, steam trap acoustic surveillance, and hydrogen purge optimization. ₹300/bbl is the standard incremental margin uplift used in P16/P17/P28, recovering ₹0.30/bbl." },

    P49: { form: "volume", asset: "Finished product secondary distribution and bridging", qtyPerYear: 584000000, qtyLabel: "bbl distributed", share: 0.0008, ratePerQty: 160, basis: "0.08% of secondary distribution freight and terminal handling value recovered by eliminating emergency road bridging, rack detention, and batch cycle misallocations", source: "~80 MMTPA (~584 Mbbl/yr) finished products distributed across ~120 terminals & depots and ~37,000 retail stations. ₹160/bbl reflects blended secondary distribution economics (~₹1,000/KL or ~₹3.50/tonne-km road/rail freight, terminal handling, and depot bridging premiums). Dynamic stockout horizon forecasting and secondary fleet balancing recover 0.08% in avoided logistics premiums and bay detention." },

    P51: { form: "volume", asset: "Refinery offsites transfers and rundown slop reduction", qtyPerYear: 584000000, qtyLabel: "bbl processed", share: 0.0006, ratePerQty: 300, basis: "0.06% of throughput value recovered by reducing offsites slop generation, manifold line flushing downgrade, and intermediate rundown rerun recycling", source: "~1.6 Mbbl/d x 365 = ~584 Mbbl/yr processed across 11 refineries. Slop oil generation from tank water draining, manifold flushes, and off-spec rundown cuts typically runs 0.5-1.5% of refinery throughput (~3-8M bbl/yr), incurring a reprocessing and downgrade penalty of $15-$30/bbl (backing out fresh crude and consuming desalter/distillation energy). Recovering 0.06% of throughput value (~350,000 bbl/yr estate-wide, or ~32,000 bbl/yr per refinery) via real-time manifold lineup verification (Agent 2) and permissive rundown sequencing (Agent 3) represents under a tenth of typical offsites slop volume. ₹300/bbl is the standard incremental margin uplift used in P16/P17/P28/P46/P47, keeping this term strictly distinct from unit yield giveaway (P16) and blend giveaway (P28)." },

    P52: { form: "volume", asset: "Prime polymer yield and grade transition scrap reduction", qtyPerYear: 3000000, qtyLabel: "tonnes polymer produced", share: 0.0012, ratePerQty: 25000, basis: "0.12% of polymer throughput recovered from grade transition scrap downgrades and additive giveaway through dynamic non-linear kinetic trajectory optimization", source: "~3.0 MMTPA (~3,000,000 tonnes/year) of polyolefin production (PP, LLDPE, HDPE) across ~9 polymerization and compounding trains at integrated petrochemical complexes. During grade transitions, reactors generate transitional off-spec or wide-spec resin (typically 1.5-3.0% of annual production across 150-200 grade switches/year) that is downgraded to scrap or near-prime utility resin at a ₹20,000-₹30,000/tonne discount against prime resin (~₹100,000-₹115,000/tonne). Dynamic multi-variable trajectory optimization (Agent 2) and gravimetric additive giveaway elimination (Agent 5) conservatively recover 0.12% of throughput value (recovering ~3,600 tonnes/yr from downgrade, or ~18-24 tonnes per transition event). ₹25,000/tonne reflects the net price differential between prime polymer and off-spec transition scrap." },

    P54: { form: "time", asset: "LPG bottling plants", units: 90, unitLabel: "bottling plants", hoursPerYear: 8760, share: 0.0015, ratePerHour: 80000, basis: "0.15% of bottling plant calendar hours recovered by eliminating carousel filling head drift stoppages, check-weigher reject bin jams, and manual test-weighing interruptions (~13.1 h/plant/yr)", source: "~90 LPG bottling plants packaging ~12 MMTPA across the national downstream network. ₹80,000/plant-hour reflects idle plant processing capacity (~25 MT/hr carousel throughput at ~₹1,100/MT benchmark bottling tariff), truck gantry detention across bulk and packed fleets, and distributor delivery bridging costs. 0.15% recovery (~13.1 h/plant/yr) is well below the 1% calendar hour ceiling." },

    P55: { form: "volume", asset: "Flight fuelling turnaround and delay exposure", qtyPerYear: 900000, qtyLabel: "flights refuelled", share: 0.0012, ratePerQty: 35000, basis: "0.12% of flight fuelling turnaround delay exposure avoided through automated meter-to-loadsheet density reconciliation and zero-drag paperwork closeout", source: "~120 aviation fuel stations refuelling ~2,500 flights per day (~900,000 flights/yr). Commercial airline ground delays carry benchmark direct operating costs of $65-$100+ per minute (~₹5,500-₹8,500/min). Under airline into-plane service level agreements (SLAs) and IATA model fuel supply agreements, fuelling-attributable delays exceeding scheduled turnaround buffers trigger SLA penalty chargebacks and handler dispute costs averaging ~₹35,000 per incident. Automated volume-to-mass conversion (Agent 6) and digital batch release (Agent 1) eliminate ~1,080 delayed fuelling handoffs annually (~₹3.78 Cr/yr)." }
  });

  defaults("ASSET_RISK", {
    P36: { unitLabel: "fiscal metering stations", source: "~450 major custody transfer stations across gas grid interconnects, gas plants, and downstream refinery/terminal receipt skids. Consequence (~₹8 Cr) covers multi-month retroactive true-up adjustments, expert determination, arbitration costs, and contractual imbalance penalties. High alpha and beta because custody dispute prevention is overwhelmingly an audit-trail, calibration-tracking, and calculation integrity problem.", scenario: "Fiscal measurement dispute or misallocation arbitration", unitsPerYear: 450, frequency: 0.03, consequence: 80000000, alpha: 0.35, beta: 0.4 },

    P37: { unitLabel: "thousand km of pipeline", source: "~16,000 km transmission network; frequency reflects SCADA blind spots, unrationalized alarm cascades, or corrupted RTU telemetry delaying emergency valve isolation during an operational upset. Consequence covers unmitigated product release escalation, emergency repairs, environmental remediation, and statutory penalties (benchmark ₹40 Cr / ~$4.8M per severe transmission incident).", scenario: "Alarm flood or telemetry failure masking a pipeline emergency", unitsPerYear: 16, frequency: 0.04, consequence: 400000000, alpha: 0.35, beta: 0.4 },

    P38: { unitLabel: "compressor trains", source: "~36 mainline compressor trains; frequency reflects ~1 catastrophic surge or scrubber liquid carryover wreck per 50 machine-years. ₹15 Cr consequence covers rotor/impeller bundle replacement, dry gas seal destruction, and emergency station outage. Alpha reflects operational causation (operating point drift, gas composition shifts, scrubber level neglect); beta reflects agent early warning.", scenario: "Compressor surge wreck or liquid carryover incident", unitsPerYear: 36, frequency: 0.02, consequence: 150000000, alpha: 0.35, beta: 0.35 },

    P39: { unitLabel: "thousand km of pipeline", source: "~36,000 km combined network (~16,000 km midstream gas transmission and ~20,000 km downstream liquid product and crude pipelines). Baseline corrosion failure frequency of 0.035 incidents per 1,000 km-year is grounded in the European Gas Pipeline Incident Data Group (EGIG 12th report, 1970-2022: 0.035/1,000 km-yr historical average for corrosion) and international hazardous liquid pipeline data (CONCAWE: ~0.03/1,000 km-yr). Consequence of INR 45 Cr reflects emergency sectional shutdown, line isolation, product loss and flaring, cut-out replacement welding, civil soil remediation, and statutory regulatory penalties. Alpha of 0.35 represents the share of corrosion failures caused by information, calculation, or surveillance errors (e.g., uncorrected soil IR-drop, missed coating shielding under disbonded tape, unmodeled AC inductive interference >30 A/m2, and unmitigated water dropout pooling). Beta of 0.40 reflects the agent squad's verified efficacy in flagging polarized potential violations (-850 mV criterion), AC/DC stray current spikes, and chemical inhibitor under-dosing.", scenario: "Corrosion-driven loss of primary containment", unitsPerYear: 36, frequency: 0.035, consequence: 450000000, alpha: 0.35, beta: 0.4 },

    P40: { unitLabel: "vessel calls", source: "~1,200 vessel transfers a year; frequency reflects loss of primary containment from loading arm overextension, surge pressure, or checklist failure (~1 event per 1,250 transfers). Consequence covers Tier-1/2 spill response, environmental remediation, berth downtime, and port penalties. Alpha reflects the operational/procedural causal share; beta reflects agent checklist, cooldown, and envelope surveillance efficacy.", scenario: "Marine cargo transfer spill or loading arm release", unitsPerYear: 1200, frequency: 0.0008, consequence: 350000000, alpha: 0.3, beta: 0.35 },

    P41: { unitLabel: "storage wells", source: "~160 injection/withdrawal and observation wells across 3 storage facilities. Consequence covers high-pressure snubbing workover, remedial casing squeeze/liner, barrier restoration, and localized venting mitigation under API RP 1171 / SIMP guidelines (~₹6 Cr per event). High beta because early detection via multi-finger caliper correlation and observation well pressure trending directly resolves the information barrier.", scenario: "Storage well barrier leak or subsurface containment failure", unitsPerYear: 160, frequency: 0.015, consequence: 60000000, alpha: 0.3, beta: 0.4 },

    P44: { unitLabel: "district regulating stations", source: "~450 district regulating stations (DRS) and city gate regulating skids across ~16-20 municipal geographical areas. Frequency of 0.008 events per station-year reflects ~1 significant pressure excursion, regulator seat lock-up failure, or relief valve venting challenge per 125 station-years, benchmarked against international distribution pipeline safety data (PHMSA 49 CFR Part 191 incident trends and NTSB accident reports). Consequence of INR 12 Cr (~$1.44M) covers emergency sectional shut-in, rapid street-by-street isolation, replacement of overpressurized domestic meters and customer service regulators, property and burner repairs, manual relighting sweeps across thousands of premises (averaging INR 15,000-25,000 per customer connection for labor-intensive relighting and safety checks across 4,000-6,000 premises), civil repair, and statutory regulatory penalties (under PNGRB T4S / ASME B31.8 / 49 CFR 192). Alpha (0.35) reflects the causal share attributable to engineering design errors, incorrect valve sizing coefficients, common-mode sense line routing, and inadequate relief capacity (as documented in NTSB pipeline accident investigations); beta (0.40) captures the agent squad's verified efficacy in automated regulator sizing (Agent 4), sense line independence auditing (Agent 5), and MAOP envelope validation (Agent 3).", scenario: "Distribution network overpressurization or regulator control failure", unitsPerYear: 450, frequency: 0.008, consequence: 120000000, alpha: 0.35, beta: 0.4 },

    P45: { unitLabel: "refineries", source: "11 refineries. Frequency reflects a major maintenance ignition or handover-related barrier failure once every ~5 operating years per refinery (~2.2 events/yr across the estate). Consequence of ₹50 Cr reflects direct fire/explosion asset repair, emergency shutdown margin loss, product contamination, and regulatory penalties under OISD-STD-105/154 frameworks. High alpha (0.35) and beta (0.40) because spatial permit clash detection and handover state synthesis directly eliminate the informational root cause; alpha*beta (0.14) remains well below the 0.18 ceiling.", scenario: "Maintenance SIMOPS clash or uncommunicated shift-handover barrier failure", unitsPerYear: 11, frequency: 0.2, consequence: 500000000, alpha: 0.35, beta: 0.4 },

    P46: { unitLabel: "refineries", source: "11 refineries. Frequency reflects ~1 alarm flood or severe loop-cycling induced emergency trip every 2.85 refinery-years. Consequence (₹18 Cr) covers emergency shutdown, flaring product loss, thermal shock stress, and 24-48 hours of unit restart downtime. Grounded in Abnormal Situation Management (ASM) Consortium data showing alarm floods (>10 alarms/10 min) cause 40-50% of operator cognitive failures during upsets, and EEMUA 191 / ISA-18.2 benchmarks. Alpha (0.35) reflects the causal share attributable to alarm configuration and loop tuning; beta (0.35) reflects the agent squad's verified efficacy in pre-upset rationalization and stiction detection.", scenario: "Alarm flood or runaway loop cycling escalating to an emergency unit trip", unitsPerYear: 11, frequency: 0.35, consequence: 180000000, alpha: 0.35, beta: 0.35 },

    P47: { unitLabel: "refineries", source: "~11 refineries; frequency reflects utility-initiated steam header collapses, unmonitored PRDS letdown failures, or sudden fuel gas Wobbe swings forcing multi-unit process shutdowns (~1 event every 4 years per site). Consequence covers 24-48 hours of deferred throughput margin across dependent conversion units, flaring loss, and restart costs (~₹35 Cr). Alpha reflects the informational, balancing, and detection share; beta reflects multi-tier steam and fuel gas agent surveillance efficacy.", scenario: "Severe steam header imbalance or utility disruption triggering multi-unit trips", unitsPerYear: 11, frequency: 0.25, consequence: 350000000, alpha: 0.3, beta: 0.35 },

    P48: { unitLabel: "refineries", source: "~10-11 refineries processing ~80 MMTPA (~1.6 Mbbl/d). Under national customs bonded warehousing regulations (Customs Act Chapter IX, Sec 72) and central excise rules governing petroleum manufacturing losses and duty-exempt internal fuel consumption, refineries must account for raw crude inputs and maintain auditable mass balances within statutory tolerance limits (typically <=0.5% to 1.0%). Frequency (0.20) reflects one major statutory excise/customs inventory audit dispute, show-cause notice (SCN), or shortage challenge per refinery every 5 years (~2.2 events/year across the estate). Consequence (₹16 Cr / ~US$1.9M) reflects differential excise/customs duty demands on unexplained material balance deficits (e.g., 0.2-0.3% unexplained loss on an average 7.5 MMTPA refinery = 15,000-22,500 MT, taxed at ₹15,000-₹20,000/MT), statutory interest under Sec 28AA/11AA, and adjudicated penalties under Sec 114A/11AC or appellate true-up settlements. Alpha (0.35) reflects the causal share attributable to information defects (unreconciled book-to-physical inventory lags, unverified flare/evaporative loss documentation per Energy Institute HM 31, and missing fuel gas mass totalizer logs); beta (0.40) reflects the 7-agent squad's efficacy in maintaining continuous automated mass balance closure, gross error detection, and certified excise audit packages.", scenario: "Statutory customs and excise inventory audit penalty or duty remission disallowance", unitsPerYear: 11, frequency: 0.2, consequence: 160000000, alpha: 0.35, beta: 0.4 },

    P50: { unitLabel: "refineries", source: "~10-11 refineries processing ~80 MMTPA (~1.6 Mbbl/d) delivering finished fuels into ~20,000 km of pipelines and ~120 terminals. Frequency (0.30) reflects ~1 significant off-specification batch release or multi-product pipeline contamination event per refinery every 3.3 years (~3.3 events/yr across the estate). Consequence (₹18 Cr / ~US$2.15M) covers: (1) product value downgrade margin loss (downgrading 40,000-80,000 bbl of contaminated prime gasoline/ULSD/ATF to slop oil or low-value fuel oil cutter stock at a ₹800-₹1,500/bbl price spread = ₹4-8 Cr); (2) off-spec slop re-refining, pump-out, and rail/truck logistics to return product to crude/hydrotreater feedstocks (₹4-6 Cr); (3) pipeline common-carrier tariff penalties, interface flushing, and transmix processing charges (₹2-4 Cr); and (4) statutory fuel specification non-compliance fines and customer/vehicle remediation claims under national standards (BIS IS 1460/2796, EPA 40 CFR Part 1090, OISD-RP-108) (₹2-4 Cr). Alpha (0.35) reflects the causal share attributable to analytical decision and data defects (undetected GC/XRF instrument drift, test results accepted within unflagged ASTM D6299/ISO 4259 guard-bands, missed thermodynamic property discordance between flash point and distillation, and delayed OOS investigations); beta (0.40) reflects the 7-agent squad's efficacy in autonomous ASTM D6299 SQC chart surveillance, thermodynamic screening, and structured ISO/IEC 17025 root-cause verification.", scenario: "Off-specification finished fuel release or batch contamination requiring pipeline downgrade, pump-out, or remediation", unitsPerYear: 11, frequency: 0.3, consequence: 180000000, alpha: 0.35, beta: 0.4 },

    P51: { unitLabel: "refineries", source: "~10-11 refineries processing ~80 MMTPA (~1.6 Mbbl/d). Across ~1,500-2,000 atmospheric storage tanks, an unmitigated tank overfill or major offsites manifold release represents a severe Tier 1 process safety event governed by API Standard 2350 (5th Edition) and OISD-STD-108/244. Frequency (0.15) reflects one significant overfill loss of primary containment (LOPC) event, tank rim-seal fire, or bund release per 6.7 refinery-years (~1.65 events/year across the estate). Consequence (₹50 Cr / ~$6M) covers secondary bund containment remediation, emergency foam suppression, damaged floating roof and tank shell structural repairs, product write-off, and statutory environmental penalties, held well below refinery-wide process safety catastrophes (P19 at ₹150 Cr). Alpha (0.35) reflects the causal share attributable to information and decision errors (manual ullage math, unmonitored pipeline receipt pump surges, safe response time calculation errors, and verbal shift handover gaps); beta (0.40) reflects the 7-agent squad's efficacy in real-time dynamic safe response time tracking (Agent 1), hydraulic integrity monitoring (Agent 5), and certified shift handover reconciliation (Agent 7).", scenario: "Atmospheric storage tank overfill or loss of primary containment", unitsPerYear: 11, frequency: 0.15, consequence: 500000000, alpha: 0.35, beta: 0.4 },

    P52: { unitLabel: "polymerization reactor trains", source: "9 world-scale polymerization reactor trains across integrated petrochemical complexes. Frequency (0.25/yr) reflects one major wall sheeting or bed chunking event every 4 reactor-years per train (~2.25 events/year across the estate), requiring emergency reactor depressuring, hydrocarbon evacuation, and manual confined-space de-chunking. Consequence (₹20 Cr / ~US$2.4M) reflects 7-10 days of forced outage on a ~350-500 KTA line (~8,000 MT lost production margin at ₹15,000/MT = ₹12 Cr), flared/dumped reaction bed inventory and startup off-spec scrap (~₹4 Cr), plus hydro-blasting mechanical cleanout and distributor grid remediation (~₹4 Cr). Alpha (0.35) reflects the causal share attributable to information and surveillance defects (electrostatic charge accumulation, sticky-point boundary violations in condensed mode, and delayed response to wall skin thermocouple cold-bands); beta (0.35) reflects the 7-agent squad's efficacy in real-time acoustic/thermal precursor detection and anti-static agent dosing optimization (alpha*beta = 0.1225, well within the <=0.18 limit).", scenario: "Fluidized-bed reactor wall sheeting or agglomeration chunking shutdown", unitsPerYear: 9, frequency: 0.25, consequence: 200000000, alpha: 0.35, beta: 0.35 },

    P53: { unitLabel: "retail fuel stations", source: "~37,000 retail fuel stations across the national downstream marketing network, housing ~110,000 underground storage tanks (USTs) and associated pressurized product pipework. Baseline failure frequency of 0.0004 incidents per station-year reflects ~1 significant subsurface hydrocarbon release penetrating the water table per 2,500 station-years (~14.8 events/yr across the estate), grounded in international UST release statistics (EPA 40 CFR Part 280 release reporting trends and CONCAWE retail environmental studies) and national statutory environmental audit data. Consequence of INR 6 Cr (~$720,000) reflects multi-well monitoring and plume delineation, hazardous soil excavation and off-site bio-remediation, long-term groundwater pump-and-treat / air sparging operations (typically 18-36 months), tank/pipework decommissioning and forecourt civil reconstruction, lost dealer throughput during prolonged excavation, and statutory environmental compensation penalties levied by environmental tribunals and state pollution control boards (e.g., CPCB/NGT guidelines for groundwater restitution). Alpha (0.35) reflects the causal share attributable to information, detection, and surveillance lag (e.g., slow 0.2 gal/hr pinhole leaks or line weeping masked beneath diurnal thermal expansion cycles, water ingress ignored due to faulty water-paste dips, and un-reconciled book-to-physical inventory variances under API RP 1621). Beta (0.40) reflects the 7-agent squad's efficacy in autonomous continuous temperature-compensated Statistical Inventory Reconciliation (SIR, Agent 1), automated meter drift isolation (Agent 4), and proactive mobile HSSE containment sump inspection auditing (Agent 3).", scenario: "Underground storage tank leak or pipework failure causing subsurface aquifer contamination", unitsPerYear: 37000, frequency: 0.0004, consequence: 60000000, alpha: 0.35, beta: 0.4 },

    P54: { unitLabel: "bottling plants", source: "~90 LPG bottling plants in the national downstream network. LPG is stored under 10-15 bar pressure and expands 250-270x into dense, flammable vapor clouds upon release. Governed by OISD-STD-144, OISD-STD-150, and PESO Gas Cylinders Rules (2016). Frequency (0.025) reflects one significant loss of primary containment, filling shed vapor cloud explosion (VCE), or bulk decanting fire every ~40 plant-years (~2.25 events/year across the estate). Consequence (₹35 Cr) covers carousel and conveyor equipment reconstruction, structural repairs, 3-6 months of statutory plant shutdown during PESO/OISD inquiry, emergency secondary bridging freight (~₹15-20 Cr to supply retail distributors from alternate plants), and regulatory penalties. Alpha (0.30) reflects causation attributable to information and monitoring failures (unmonitored carousel filling head drift, delayed sniffer PPM leak detection, unverified decanting earthing interlocks, and impaired fire deluge auto-start valves); beta (0.35) reflects the 7-agent squad's efficacy in real-time barrier surveillance; alpha*beta (0.105) remains well below the 0.18 portfolio ceiling.", scenario: "LPG bottling shed vapor cloud explosion or bulk decanting fire", unitsPerYear: 90, frequency: 0.025, consequence: 350000000, alpha: 0.3, beta: 0.35 },

    P55: { unitLabel: "aviation fuel stations", source: "~120 aviation fuel stations (AFS) across the national network. Baseline frequency of 0.05 events per station-year reflects ~1 off-spec fuel delivery incident every 20 station-years (~6 events/yr across ~900,000 annual fuelling uplifts, or ~6.7 per million operations). Consequence of ₹4.5 Cr (~US$540k) covers emergency airside defuelling, downgrading/disposal of contaminated Jet A-1, aircraft fuel manifold flushing and filter replacements, passenger compensation / flight rebooking, and airline SLA penalty chargebacks under IATA model agreements. Alpha (0.35) reflects the causal share attributable to informational and verification errors (missed CoA limits, uncorrected filter dP drops, misread chemical water detector capsules, or uncertified tank lineup); beta (0.40) reflects the agent squad's verified efficacy across continuous CoA auditing (Agent 1), flow-corrected dP trending (Agent 2), and digital water detection verification (Agent 5).", scenario: "Contaminated or off-spec aviation turbine fuel uplift requiring emergency aircraft defuelling, tank flushing, and flight cancellation", unitsPerYear: 120, frequency: 0.05, consequence: 45000000, alpha: 0.35, beta: 0.4 }
  });


})(window);
