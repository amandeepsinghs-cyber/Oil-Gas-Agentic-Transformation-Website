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
    scale:     "combined ONGC + IOCL scale"
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
      counts:  "Production and throughput not lost",
      metric:  "NPT %, on-stream factor",
      unit:    "INR",
      term:    "ASSET_CAPITAL",
      built:   true,
      caution: "Only counts hours on an asset's critical path. 12 of 33 roles carry no term here, and those zeros are load-bearing."
    },

    integrity: {
      label:   "Integrity",
      counts:  "Expected loss avoided before it occurs",
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
           source: "~60 ONGC rigs under contract; blended offshore/onshore day rate ~US$35k = ~₹1.2 L/rig-hour. NPT typically runs 15-20% of rig time." },

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
           source: "IOCL 11 refineries, ~1.6 Mbbl/d. ₹25 L/refinery-hour is a deliberately discounted margin rate: some lost throughput is recovered later." },

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
           source: "ONGC ~154 Mbbl/yr. ₹2,900/bbl is a ~US$35 netback, not the crude price." },

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
           source: "~270 ONGC offshore platforms, most of them small and unmanned." },

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

})(window);
