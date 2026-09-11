/**
 * ============================================================================
 * PERSONA NARRATIVE PACKS
 * ============================================================================
 * Companion narrative layer for `data/enterprise_matrix_300.js`.
 *
 * The matrix dataset holds the QUANTITATIVE record for all 20 personas:
 * 15 actions each, with vulnerability, agent plug, capital exposure and
 * decision latency. This file holds the QUALITATIVE record: what the role is
 * answerable for, how the day actually goes wrong in the operator's own words,
 * and the narrative of one high-consequence shift.
 *
 * Keyed by the same persona `id` used in ENTERPRISE_MATRIX_DATA (p01 - p20).
 *
 * ---------------------------------------------------------------------------
 * AUTHORING DISCIPLINE
 * ---------------------------------------------------------------------------
 * Nothing in this file is invented decoration. Every pain point, every journey
 * beat and every sign-off gate traces back to a specific `vuln` string and
 * `coord` already present in the matrix dataset, and cites that coordinate.
 *
 * ---------------------------------------------------------------------------
 * LIFECYCLE — `narrativeStatus`
 * ---------------------------------------------------------------------------
 *   "draft"      Written from the matrix record. Internally consistent and
 *                fully traceable, but NOT yet checked against the person who
 *                actually holds the role. The page renders an explicit amber
 *                provenance banner and quotes are deliberately unattributed.
 *                A draft is a hypothesis to be argued with in an interview.
 *
 *   "validated"  Reviewed and confirmed by a practitioner in that role.
 *                Quotes are attributed and the sign-off authority levels
 *                reflect how the organisation actually delegates. The page
 *                renders a turquoise banner.
 *
 *   (absent)     No pack at all. The page renders a "not yet authored" notice
 *                and shows only the quantitative record. Absence is shown,
 *                never hidden, and never filled with plausible invention.
 *
 * All 20 packs are currently "draft". None have been through SME interview.
 * Promoting a pack to "validated" without an interview would defeat the entire
 * point of the distinction.
 *
 * ---------------------------------------------------------------------------
 * WHY THE SIGN-OFF BLOCK MATTERS
 * ---------------------------------------------------------------------------
 * `signoffs` is the load-bearing block for the agentic argument. Each entry
 * names the decision, the agent that informs it, and the authority level at
 * which the agent is permitted to operate:
 *
 *   L1  Recommend only              — agent proposes, human decides and signs
 *   L2  Act with confirmation       — agent computes, human authorises the move
 *   L3  Autonomous with audit       — agent executes, immutable record, human reviews
 *   L4  Autonomous, safety-instrumented — event is faster than a human loop
 *
 * L4 is claimed only where the physics genuinely closes the human window
 * (milliseconds to a few seconds). Every L4 gate is a commitment to functional
 * safety evidence, not a convenience, and the `honestLimit` field for that
 * persona is expected to say so.
 * ============================================================================
 */

window.PERSONA_NARRATIVES = {

  /* =========================================================================
   * A // p01 — EXPLORATION GEOPHYSICIST
   * ========================================================================= */
  p01: {
    narrativeStatus: "draft",


    accountableFor:
      "The Exploration Geophysicist owns the conversion of a seismic wavefield into a drillable target. Everything the company spends before first oil rests on two outputs from this role: where the structure is in three dimensions, and how confident we are in that position. The role carries an asymmetry that no other subsurface discipline carries — a mistake is only ever discovered by spending a hundred crore to drill it. It also owns the top-hole hazard screen, which means the same person who justifies the well is the person answerable for whether the wellhead is set above shallow gas. The work comes down to two questions the role must answer before a rig is committed: whether there is a trap down there worth drilling, and whether the depth being quoted is the depth the bit will actually find it at.",

    painPoints: [
      {
        quote: "I extract the wavelet by eye and rotate the phase until the synthetic looks like the seismic. Everyone does it this way. Fifty metres of depth error starts right there.",
        coord: "A1"
      },
      {
        quote: "The anisotropic velocity model is the single largest source of error in the whole prospect, and I am building it from checkshots I hand-load two days after the well is drilled.",
        coord: "A2"
      },
      {
        quote: "Bright spots in the top hole are somebody else's problem until they are everybody's problem. Shallow gas screening is a slide in a deck, not a system.",
        coord: "A13"
      },
      {
        quote: "The pre-stack inversion takes fourteen days on the cluster. By the time it comes back the bid deadline has moved and I am defending last month's answer.",
        coord: "A8"
      },
      {
        quote: "Three days lost because a vendor wrote the CDP number in the wrong byte position and used a projection nobody documented.",
        coord: "A14"
      },
      {
        quote: "I tune ant-tracking parameters by trial and error until the fault network looks plausible. Plausible is not the same as correct, and the sub-seismic faults are the ones that seal.",
        coord: "A4"
      }
    ],

    journey: {
      title: "Top-Hole Hazard Screen — The Bright Spot Nobody Ran",
      summary: "A deepwater wildcat is three weeks from spud and the wellhead location is being finalised. The prospect work is done: the structure is mapped, the AVO response is Class III, the partners are committed. What has not been done with any rigour is the shallow section, because the shallow section holds no reserves and therefore holds no one's attention. Today that screen is a geophysicist scrolling the top 800 milliseconds looking for amplitude anomalies in the hours between other commitments, on a survey processed for deep imaging and never reprocessed for shallow resolution. The A13 hazard scanner inverts that default: it sweeps the top-hole volume systematically, maps every amplitude anomaly into a hazard cone referenced to the proposed wellhead, and returns a ranked exposure list in eight seconds instead of a day. On this well it flags a bright spot 140 m lateral to the planned template at 380 m below mudline. The wellhead moves 200 m. Nothing happens — which is the entire point, and the reason this touchpoint carries ₹65 Cr. The value of this agent is measured in events that never appear in any report.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "A13",
        gate: "Top-hole hazard clearance for wellhead location",
        authority: "L1 — Recommend only",
        note: "The agent maps and ranks hazard cones; the wellhead location is a drilling and marine warranty decision that stays with the human chain."
      },
      {
        coord: "A2",
        gate: "Depth conversion velocity model release",
        authority: "L2 — Act with confirmation",
        note: "Tomographic updates run continuously against incoming checkshots, but a model that moves the prospect crest requires explicit geophysicist confirmation before it reaches the well plan."
      },
      {
        coord: "A1",
        gate: "Synthetic well-tie acceptance",
        authority: "L3 — Autonomous with audit",
        note: "Phase rotation and cross-correlation QC execute autonomously with the correlation coefficient logged. Human review is triggered only when the tie quality falls below the configured floor."
      },
      {
        coord: "A15",
        gate: "P10/P50/P90 depth uncertainty volumes for bid submission",
        authority: "L1 — Recommend only",
        note: "Monte Carlo output feeds a commercial bid. The number that leaves the building is signed by a person."
      }
    ],

    honestLimit:
      "None of these agents create resolution that the seismic does not contain. A shallow gas scanner run on a survey processed only for deep imaging will miss anomalies that reprocessing would reveal, and an automated fault extractor will not find a fault below the seismic bandwidth. These agents remove the human variance in interpretation; they do not remove the physical limit of the data. Where the honest answer is 'reacquire or reprocess', these agents should be making that recommendation louder, not covering for it."
  },

  /* =========================================================================
   * B // p02 — STRUCTURAL & BASIN GEOLOGIST
   * ========================================================================= */
  p02: {
    narrativeStatus: "draft",


    accountableFor:
      "The Structural and Basin Geologist owns the charge and containment story: whether the source rock reached the oil window, where the hydrocarbon went when it was expelled, and whether the fault and caprock system can hold a column. The role also owns the pre-drill pore pressure prediction, which is the single most consequential number handed to the drilling organisation before spud — it sets the mud weight programme and therefore sets whether the well kicks. This is a role where the geological reasoning is sophisticated and the tooling is not: the analysis is world-class and it is being executed in spreadsheets. Three questions sit behind everything the role produces: whether hydrocarbon was generated, whether it migrated into this trap, and whether the trap and its seal will still hold when a bit is put through it.",

    painPoints: [
      {
        quote: "The Eaton exponent is a calibration constant that decides the mud weight. If I have it wrong the rig takes a kick, and I will have been wrong in a spreadsheet.",
        coord: "B7"
      },
      {
        quote: "Sand-on-sand juxtaposition across the bounding fault is the difference between a discovery and a dry hole, and I map it by hand on an Allan diagram over three days.",
        coord: "B2"
      },
      {
        quote: "I calculate shale gouge ratio with a constant shale volume because that is what the workflow allows. Then we underbook the column and leave hydrocarbon in the ground.",
        coord: "B3"
      },
      {
        quote: "Caprock breakthrough pressure sits in a mercury injection report in a lab archive. It is not linked to the mud density we are about to pump.",
        coord: "B13"
      },
      {
        quote: "Two weeks to restore the section and check whether the trap existed before the charge arrived. By the time I finish, the timing question has already been answered by somebody's assumption.",
        coord: "B8"
      },
      {
        quote: "I am matching vitrinite reflectance to heat flow curves in Excel. This is basin modelling in 2026.",
        coord: "B1"
      }
    ],

    journey: {
      title: "Pre-Drill Pore Pressure — From Compaction Trend to Mud Weight",
      summary: "A wildcat is being planned into a young, rapidly-loaded clastic section where undercompaction is expected but unquantified. Today the geologist picks a normal compaction trend on a log-resistivity plot by eye, applies an Eaton exponent inherited from a nearby field with a different burial history, and produces a pore pressure curve in a spreadsheet six hours later. That curve becomes the casing programme. If the exponent is optimistic by a small margin the well takes a kick in the twelve-and-a-quarter-inch section, and the well control event costs more than the entire subsurface study. The B7 pore pressure agent runs both Eaton and Bowers formulations simultaneously, cross-validates the predicted curve against every offset mud weight and every recorded kick and loss event in the basin, and returns the answer with an explicit uncertainty band in five seconds. The critical output is not the curve — it is the disagreement. Where Eaton and Bowers diverge, the agent flags an unloading signature that the single-method workflow silently averages away, and that flag is what changes the casing seat. The drilling engineer receives a pressure envelope with provenance instead of a line with a name on it.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "B7",
        gate: "Pre-drill pore pressure curve release to well planning",
        authority: "L1 — Recommend only",
        note: "This curve sets the mud weight programme and the casing seats. The agent produces it with an uncertainty band; a named geoscientist signs it and owns it."
      },
      {
        coord: "B13",
        gate: "Maximum sustainable column height for caprock",
        authority: "L2 — Act with confirmation",
        note: "Feeds both the volumetric case and the drilling margin. Agent computes seal capacity from capillary entry pressure; geologist confirms the lithological assumptions before it propagates."
      },
      {
        coord: "B2",
        gate: "Fault juxtaposition and seal risk map",
        authority: "L3 — Autonomous with audit",
        note: "Allan diagram generation is deterministic geometry and runs autonomously. The interpretation of what the juxtaposition means for charge remains a human call."
      },
      {
        coord: "B11",
        gate: "Gross rock volume and spill point for booking",
        authority: "L1 — Recommend only",
        note: "GRV drives reserves. The spill-point crawler proposes; the volumetric submission is signed."
      }
    ],

    honestLimit:
      "Pore pressure prediction is calibration-bound. In a basin with dense offset control these agents are reliable and fast; in a frontier basin with two wells and no direct pressure measurements they will produce a confident-looking curve from a thin evidence base, and the uncertainty band is doing all the work. The agent must be judged on whether it widens that band honestly in frontier settings rather than on how narrow it can make it in mature ones."
  },

  /* =========================================================================
   * C // p03 — DEVELOPMENT & RESERVOIR GEOLOGIST
   * ========================================================================= */
  p03: {
    narrativeStatus: "draft",


    accountableFor:
      "The Development and Reservoir Geologist builds the three-dimensional static model that every dynamic forecast, every infill well and every recovery estimate is computed on. The role sits between petrophysics and simulation and inherits problems from both directions: log-derived properties that must be upscaled without destroying flow behaviour, and a grid that must be geologically honest and numerically valid at the same time. It also owns institutional memory of the field — the offset well history, the old mudlogs, the reasons a previous well went wrong — which today lives in scanned archives that no model can read. The question the role has to keep asking of its own output is whether the static model being handed to the simulator is a description of this reservoir, or a description of the assumptions made about it.",

    painPoints: [
      {
        quote: "A 2004 mudlog in a scanned PDF recorded a gas kick at 3,250 metres. Nobody read it. We planned the infill well straight through it.",
        coord: "C6"
      },
      {
        quote: "The trajectory clipped a shale baffle we knew about but had not gridded properly. Initial rate came in sixty percent below forecast and the well is still there.",
        coord: "C12"
      },
      {
        quote: "We modelled the oil-water contact as a flat plane because the software wanted a plane. It is tilted, it is hydrodynamic, and we drilled the downdip well into water.",
        coord: "C8"
      },
      {
        quote: "Eighty wells of tops correlation. By well sixty I am not correlating any more, I am pattern-matching from fatigue, and the cross-fault misties prove it.",
        coord: "C1"
      },
      {
        quote: "Three weeks to compile a five-hundred-page static model handover document while the simulation engineer sits idle waiting for a deck.",
        coord: "C15"
      },
      {
        quote: "We upscale permeability with an arithmetic average. That single choice destroys the water breakthrough prediction for the entire field.",
        coord: "C10"
      }
    ],

    journey: {
      title: "The Archival Mudlog — Institutional Memory as a Queryable Asset",
      summary: "An infill producer is being planned into a mature field with a forty-year drilling history. The static model is current, the seismic is reprocessed, the team is experienced. What the team cannot do is read its own archive: several hundred mudlogs from the 1990s and 2000s exist only as scanned PDFs in a document management system with no depth-indexed content, and the engineers who drilled those wells have retired. The plan therefore proceeds on the model, which shows nothing unusual at 3,250 m — because the model was built from digital logs, and the 2004 gas kick at that depth was recorded only in a mudlogger's handwritten remarks column. Today the mitigation for this is that somebody remembers. The C6 Offset Hazard Mudlog Scout removes the dependency on memory: it OCRs the archival scans, extracts depth-referenced kick, loss and gas-show events, and projects them as hazard markers into the 3D model in five seconds against the four days a manual archive trawl would take. The infill plan gains a casing point it would not otherwise have had. The value here is not analytical sophistication — it is that forty years of hard-won operational knowledge stops being unreadable.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "C6",
        gate: "Offset hazard register for infill well plan",
        authority: "L2 — Act with confirmation",
        note: "OCR extraction from degraded scans requires human verification of each flagged event before it changes a casing programme. The agent must show the source page image alongside every flag."
      },
      {
        coord: "C12",
        gate: "Infill trajectory target corridor approval",
        authority: "L1 — Recommend only",
        note: "The optimiser proposes a path through P90 net pay; the well proposal is a capital commitment and is signed by the asset team."
      },
      {
        coord: "C8",
        gate: "Fluid contact surface for volumetrics",
        authority: "L2 — Act with confirmation",
        note: "A tilted contact changes booked volumes. Agent maps the potentiometric surface; the geologist confirms it against pressure data before it enters the model."
      },
      {
        coord: "C15",
        gate: "Static-to-dynamic model handover package",
        authority: "L3 — Autonomous with audit",
        note: "Deck generation and grid validity checking are mechanical and run autonomously with a full audit manifest of what was upscaled and how."
      }
    ],

    honestLimit:
      "The mudlog scout is only as good as the scan. Faded thermal paper, handwritten annotations in the margin and non-English remarks columns will defeat OCR, and the agent must report what it could not read as prominently as what it could. A hazard register that silently omits the illegible pages is more dangerous than no register at all, because it manufactures confidence. Coverage percentage must be a first-class output of this agent, not a footnote."
  },

  /* =========================================================================
   * D // p04 — DRILLING OPERATIONS ENGINEER
   * The highest-exposure row on the board: ₹740 Cr across 7 critical touchpoints.
   * ========================================================================= */
  p04: {
    narrativeStatus: "draft",


    accountableFor:
      "The Drilling Operations Engineer owns the safe envelope of a live well: the narrow corridor between pore pressure and fracture gradient, the separation from every offset wellbore, and the well control response if either is breached. This is the highest capital-exposure role on the board at ₹740 Cr per year across seven critical touchpoints, and the reason is structural — the role makes decisions in minutes that are irreversible for decades, on a rig burning lakhs an hour, with the primary safety barrier being a fluid column the role also controls. Every other subsurface discipline can be wrong and be corrected later. This one cannot. The role is judged on two questions asked continuously through every shift: whether the well is inside its pressure and collision envelope right now, and how many seconds remain if it leaves.",

    painPoints: [
      {
        quote: "The anti-collision scan lags the survey. We are drilling within an ellipse of uncertainty of a live producer and I am reading a report that describes where we were, not where we are.",
        coord: "D2"
      },
      {
        quote: "The driller has to decide whether the influx is inside kick tolerance in thirty minutes. If he is wrong, gas reaches surface. That is a spreadsheet decision made under a stopwatch.",
        coord: "D5"
      },
      {
        quote: "Eight hours to justify a casing seat. The shoe goes into a weak zone because the alternative was holding the rig, and we take the kick in the next section.",
        coord: "D1"
      },
      {
        quote: "Kill sheet arithmetic during a live kick. Panic math. I have watched a competent engineer transpose two digits with the annulus full of gas.",
        coord: "D12"
      },
      {
        quote: "Trip speed is a rule of thumb. We swabbed a kick in because pulling slower was going to cost us two hours.",
        coord: "D11"
      },
      {
        quote: "The three a.m. handover is verbal. A two-metre depth shift did not get passed on and the next crew tagged high pressure they did not know was there.",
        coord: "D6"
      }
    ],

    journey: {
      title: "Kick Tolerance at 3,400 Metres — Thirty Minutes Compressed to One Second",
      summary: "At 02:40 the mudlogger reports a 12-barrel pit gain in the twelve-and-a-quarter-inch section. The well is flowing. From this moment the operation is a race between the influx migrating up the annulus and the crew establishing whether the well can be safely shut in and circulated out. Today that determination is a kick tolerance calculation run against a static pre-drill assumption: the current open-hole fracture gradient, the current influx volume, the current mud weight, the maximum allowable annular surface pressure. It takes around thirty minutes and it is performed by people who have just been woken up. If the answer is wrong in the optimistic direction, shutting in fractures the shoe and the well becomes an underground blowout. The D5 dynamic kick tolerance agent maintains this envelope continuously against live PWD, flow-out and pit data rather than recomputing it under duress: at the instant of the gain it already knows the maximum tolerable influx for the current hole state and returns the shut-in decision in one second. In parallel D12 has the wait-and-weight kill sheet complete — kill mud weight, initial and final circulating pressures, the full step-down schedule — before the driller has finished closing the annular. The crew executes a plan instead of deriving one. ₹110 Cr and ₹85 Cr of exposure resolve into a procedure.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "D2",
        gate: "Anti-collision proximity alarm and drilling stop",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Closing on a live producer inside the error ellipse is outside human reaction time at the alert distances that matter. The agent alarms and can initiate a drilling stop; the human owns the resumption decision."
      },
      {
        coord: "D5",
        gate: "Shut-in decision support during an influx",
        authority: "L2 — Act with confirmation",
        note: "The agent computes and presents the kick tolerance envelope in real time. The shut-in is executed by the driller under the OIM's authority — this is deliberately not automated."
      },
      {
        coord: "D12",
        gate: "Well control kill sheet generation",
        authority: "L3 — Autonomous with audit",
        note: "Kill sheet arithmetic is deterministic and is the worst possible task for a human under stress. Generated autonomously and continuously; the driller verifies against the standpipe pressure at the first step."
      },
      {
        coord: "D1",
        gate: "Casing shoe seat selection",
        authority: "L1 — Recommend only",
        note: "The optimiser ranks seats by kick tolerance. The casing programme is a well engineering approval with regulatory weight."
      },
      {
        coord: "D11",
        gate: "Trip speed governor",
        authority: "L2 — Act with confirmation",
        note: "Agent computes the safe surge/swab velocity envelope and warns on exceedance. Enforcement against driller intent requires supervisory confirmation."
      }
    ],

    honestLimit:
      "Every one of these agents depends on the flow and pressure instrumentation being trustworthy. A kick tolerance envelope computed from a drifting pit volume totaliser or a fouled flow paddle is worse than a manual calculation, because it is believed faster. The correct sequencing on any rig is instrumentation integrity first, agent second — and the agent's own confidence output must degrade visibly when its inputs do. We should also be explicit that D2 is the only touchpoint in this row proposed for autonomous action, and that is because the geometry is unambiguous; the well control decisions deliberately keep a human in the loop even though the agent is faster."
  },

  /* =========================================================================
   * E // p05 — DRILLING FLUIDS & MUD CHEMIST
   * ========================================================================= */
  p05: {
    narrativeStatus: "draft",


    accountableFor:
      "The Drilling Fluids and Mud Chemist owns the primary well control barrier. Before the blowout preventer, before the casing, there is a column of engineered fluid whose density holds the formation back, whose rheology carries cuttings to surface, and whose chemistry stops reactive shale from collapsing the hole. The role is unusual in that its control loop runs on laboratory measurements taken by hand on a shift cycle while the property being controlled changes continuously downhole at temperature and pressure. It also owns the sour gas scavenger inventory, which makes it directly answerable for whether H2S reaches the shaker deck where people work. Everything the role does resolves to a single question: whether the fluid column is still doing its three jobs — holding the pressure back, carrying the cuttings out, and keeping the hole open.",

    painPoints: [
      {
        quote: "Scavenger consumption is tracked from a lab shift. If a sour zone eats the reserve between checks, deadly gas comes across the shaker deck and the first indicator is a person.",
        coord: "E13"
      },
      {
        quote: "Pit level drift gets masked by routine transfers. A fifteen-barrel kick sat in the active system for forty minutes and nobody saw it.",
        coord: "E2"
      },
      {
        quote: "Thick filter cake across a permeable sand and the string sticks differentially. We have known the mechanism for fifty years and we still do not predict it.",
        coord: "E7"
      },
      {
        quote: "At 180 degrees the mud thins, the barite drops out, and I lose hydrostatic head at exactly the depth where I need it most. I find out from a sample taken hours ago.",
        coord: "E1"
      },
      {
        quote: "The LCM pill particle size distribution is designed from a vague recipe. It fails to bridge the vugular zone and we lose another eight hundred barrels.",
        coord: "E11"
      },
      {
        quote: "Six dial readings off a Fann 35 viscometer, typed into a morning spreadsheet by hand. That is the input to my entire hydraulics model.",
        coord: "E14"
      }
    ],

    journey: {
      title: "Barite Sag at 180 °C — The Barrier Thinning in Real Time",
      summary: "An HPHT well is being drilled with an oil-base mud designed at surface conditions and verified twice a shift with a viscometer and a retort. At depth the fluid is at 180 °C. The yield stress that keeps weighting material in suspension falls with temperature; barite begins to settle out of the low-side of the high-angle section. The consequences arrive in sequence: a light column where the hydrostatic head was assumed constant, a heavy slug when it is finally circulated, and a swabbed influx at the moment the driller pulls out of hole. Today the chemist finds out from a sample retrieved at surface hours after the sag began, and the diagnosis is retrospective. The E1 HPHT rheology agent predicts the sag envelope instead of observing its aftermath: it models downhole yield stress against the real temperature profile continuously, and warns when the suspension margin is closing — in three seconds against a four-hour lab cycle. Running alongside it, the E2 mass-balanced pit sentinel filters rig heave and routine transfers out of the pit level signal, so a genuine 15-barrel gain declares itself in half a second rather than hiding inside operational noise for forty minutes. The primary barrier stops being something we sample and becomes something we watch.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "E13",
        gate: "H2S scavenger reserve depletion alarm",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "This is a personnel exposure risk on a manned deck. The consumption sentinel alarms autonomously and escalates directly; no discretionary suppression."
      },
      {
        coord: "E2",
        gate: "Pit gain influx declaration",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Feeds the well control response. Runs below the human loop for detection and annunciation; the shut-in decision belongs to the driller (see D5)."
      },
      {
        coord: "E1",
        gate: "Mud weight and rheology programme change",
        authority: "L2 — Act with confirmation",
        note: "Agent predicts the sag margin and proposes a treatment; changing the density of the primary barrier is confirmed by the mud engineer and the drilling supervisor."
      },
      {
        coord: "E11",
        gate: "LCM pill particle size design",
        authority: "L1 — Recommend only",
        note: "Ideal Packing Theory gives a designed distribution against the estimated fracture aperture. Aperture estimation carries real uncertainty, so the pill remains a human design decision."
      }
    ],

    honestLimit:
      "Downhole rheology is modelled, not measured. These agents predict fluid behaviour at temperature and pressure from surface measurements and a thermal profile, and where the temperature profile is poorly known the prediction inherits that error directly. On wells with downhole pressure-while-drilling and distributed temperature sensing the model can be continuously corrected and is trustworthy; on wells without them it is an informed extrapolation and should be presented as one. The scavenger sentinel is a mass balance and is only valid while the sour gas influx rate is within its calibrated range."
  },

  /* =========================================================================
   * F // p06 — DIRECTIONAL DRILLING & MWD LEAD
   * ========================================================================= */
  p06: {
    narrativeStatus: "draft",


    accountableFor:
      "The Directional Drilling and MWD Lead owns the position and the trajectory of the bit, and the telemetry link that is the only means of knowing either. The role operates under a permanent handicap: the survey sensor sits fifteen metres behind the cutting structure, the data arrives through pressure pulses in a noisy mud column, and the corrections must be applied to a four-kilometre steel string with its own torsional and lateral dynamics. Placement determines the productivity of the well for its entire life — a horizontal that exits the sweetspot does not get another attempt — and the same telemetry carries the vibration signature that determines whether the bottom-hole assembly survives the section. The role works against two questions it can never answer with certainty: where the bit is actually pointing right now, and whether it is still inside the pay.",

    painPoints: [
      {
        quote: "Forty-five minutes to know the boundary has moved. By then I have drilled forty-five minutes of shale and the sweetspot is above me.",
        coord: "F1"
      },
      {
        quote: "Stick-slip snapped a collar. Fifteen crore for a fishing job because the torsional oscillation was visible in the data and nobody was watching that channel.",
        coord: "F5"
      },
      {
        quote: "Drillstring magnetic interference biased the azimuth and the well wandered thirty metres off target. Multi-station analysis would have caught it — two hours after it mattered.",
        coord: "F4"
      },
      {
        quote: "Backward whirl destroys the PDC cutters in minutes. Minutes. The spectral signature is right there in the shock data and it is being reviewed after the trip.",
        coord: "F9"
      },
      {
        quote: "Pump noise swamps the pulses and the driller flies blind for three quarters of an hour. On a rotary steerable, in a two-metre target window.",
        coord: "F2"
      },
      {
        quote: "The WITSML feed to town drops because the rig and the office disagree on a schema. Thirty minutes of no data during a critical section.",
        coord: "F15"
      }
    ],

    journey: {
      title: "Geosteering the Two-Metre Window — Reacting Before the Boundary Is Behind You",
      summary: "A horizontal producer is being landed in a two-metre pay window with a shale above and water below. The geosteering decision is continuous: every metre drilled either stays in the sweetspot or spends reservoir contact on rock that will never produce. Today the loop is roughly forty-five minutes long — azimuthal gamma sectors arrive by mud pulse, get manually phased and plotted, get compared against the pre-drill model, and a steering instruction is passed to the driller. In a formation with real structural dip the boundary has moved before the correction lands, and the well saw-tooths through the target. The F1 deep azimuthal resistivity inversion agent closes that loop to two seconds: it inverts the boundary distance and direction continuously and steers to hold the bit in the top metre of pay, where the drainage is best. Concurrently F2 pulls the telemetry itself out of the pump noise with adaptive cancellation so the data keeps arriving at all, and F5 and F9 watch the torsional and lateral vibration spectra in the same stream — the stick-slip sentinel acting in a tenth of a second, well inside the window in which a collar fails. One telemetry channel, three agents, three different failure modes closed at once.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "F5",
        gate: "Stick-slip mitigation — surface RPM/WOB decoupling",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Torsional failure develops faster than a human can be informed and respond. The agent adjusts surface parameters within a bounded envelope and logs every intervention."
      },
      {
        coord: "F1",
        gate: "Geosteering steering instruction",
        authority: "L2 — Act with confirmation",
        note: "Agent computes the boundary inversion and proposes toolface and build rate; the directional driller executes. Well placement stays a human-owned decision."
      },
      {
        coord: "F4",
        gate: "Survey azimuth acceptance after multi-station correction",
        authority: "L3 — Autonomous with audit",
        note: "Geomagnetic correction is deterministic. Runs autonomously with the correction magnitude logged; anything beyond the configured threshold escalates for survey re-run."
      },
      {
        coord: "F12",
        gate: "Relief well magnetic ranging solution",
        authority: "L1 — Recommend only",
        note: "Used only in blowout intervention. The ranging solution informs the intercept plan; the decision is taken by the well control incident command."
      }
    ],

    honestLimit:
      "Geosteering inversion is non-unique. Deep azimuthal resistivity can be matched by more than one earth model, and in low-contrast or thinly-laminated sequences the agent's boundary solution can be confidently wrong in a way that a sceptical human geosteerer would question. The agent must publish the alternative solutions it rejected and the confidence separating them, not just the answer it preferred. Vibration mitigation is bounded by what surface parameters can influence — where the source is bottom-hole assembly design, the honest recommendation is a BHA change, not a setpoint change."
  },

  /* =========================================================================
   * G // p07 — WELL INTEGRITY & CASING DESIGN ENGINEER
   * ========================================================================= */
  p07: {
    narrativeStatus: "draft",


    accountableFor:
      "The Well Integrity and Casing Design Engineer owns the steel and cement envelope that separates reservoir pressure from the environment for the entire life of the well and beyond its abandonment. The role's distinguishing feature is the timescale: a casing design decision is committed the day the cement sets and cannot be revised for thirty years, while the loads it must withstand — thermal cycling, annular pressure buildup, wear from a rotating string, corrosion — accumulate slowly and invisibly for that whole period. It is also the role that must produce evidence to DGMS and OISD that the barriers exist and are intact, which makes auditability part of the engineering rather than an afterthought. Two questions define the role: whether the barriers in this well will still hold for the next thirty years, and whether that can be proven to the regulator today.",

    painPoints: [
      {
        quote: "Trapped fluid in the A-annulus expands when the well heats up and bursts the casing from the inside. The calculation takes a day and it is done once, at design.",
        coord: "G2"
      },
      {
        quote: "Vortex-induced vibration is cracking the subsea wellhead weld one cycle at a time and we are accounting for it in a spreadsheet updated after each campaign.",
        coord: "G9"
      },
      {
        quote: "The evacuation case during a gas kick is the load that shears the casing, and the triaxial check takes eight hours to run properly, so it does not always get run properly.",
        coord: "G1"
      },
      {
        quote: "A micro-annulus reads as a good bond on the CBL. The shoe passes the test and gas is at surface eighteen months later.",
        coord: "G4"
      },
      {
        quote: "Mud channel left in an eccentric annulus. We simulate the displacement with a concentric assumption because that is what the tool does.",
        coord: "G3"
      },
      {
        quote: "The field operator bleeds the casing pressure down and walks away. Nobody records the recharge rate, so we cannot tell a thermal effect from a live leak.",
        coord: "G7"
      }
    ],

    journey: {
      title: "Annular Pressure Buildup — The Load That Arrives After Everyone Has Left",
      summary: "A high-rate subsea producer is brought online. Production fluid at reservoir temperature heats the completion, and the fluid trapped in the sealed A-annulus — which cannot expand and cannot be bled down subsea — begins to pressurise. This is annular pressure buildup, it is entirely predictable, and it has burst casing on producing wells. Today it is evaluated once during design, in a transient thermal simulation that takes a day to set up, against an assumed production profile that the well will not actually follow. If the real ramp-up is more aggressive than the design case, the burst disc sizing that was correct on paper is not correct in the water. The G2 transient thermal-hydraulic agent moves this from a one-time design check to a live calculation: it runs the APB model against the actual production temperature profile in six seconds and continuously verifies that the installed mitigation still covers the load the well is really seeing. Alongside it G9 accumulates fatigue damage on the wellhead weld from real riser motion rather than from a design sea-state, and G7 classifies every sustained casing pressure bleed-off as thermal or genuine leak from the recharge signature. The common thread across this row is the same: integrity stops being a design-time assertion and becomes a continuously evidenced position that a regulator can be shown on any given day.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "G1",
        gate: "Casing design triaxial safety factor certification",
        authority: "L1 — Recommend only",
        note: "API TR 5C3 verification is computed by the agent; the casing design is a signed engineering deliverable with regulatory standing and a named engineer against it."
      },
      {
        coord: "G7",
        gate: "Sustained casing pressure diagnosis — thermal vs true leak",
        authority: "L2 — Act with confirmation",
        note: "Agent classifies the bleed-off and buildup signature and proposes the diagnosis; declaring a well to have a barrier failure triggers regulatory notification and is a human decision."
      },
      {
        coord: "G4",
        gate: "Cement bond acceptance at the shoe",
        authority: "L2 — Act with confirmation",
        note: "Micro-annulus discrimination is the exact failure the agent exists to catch. It flags; the integrity engineer accepts or calls for a pressure-pass re-log."
      },
      {
        coord: "G15",
        gate: "Plug and abandonment barrier certification to DGMS/OISD",
        authority: "L3 — Autonomous with audit",
        note: "The barrier ledger is assembled autonomously into an immutable record. The regulatory submission itself is counter-signed by the integrity authority."
      }
    ],

    honestLimit:
      "These models are only as good as the load history they are fed. A fatigue accumulator started midway through a well's life cannot recover the cycles it did not see, and an APB model run against an incomplete temperature record will understate the load. For legacy wells the honest position is that the agent establishes a baseline from today forward and explicitly declares the unmeasured history as unknown — it must not extrapolate backwards and present the result as a life-of-well number. Cement evaluation also remains an inference from acoustics; the agent narrows the ambiguity between micro-annulus and true channel, it does not eliminate it."
  },

  /* =========================================================================
   * H // p08 — RESERVOIR SIMULATION ENGINEER
   * ========================================================================= */
  p08: {
    narrativeStatus: "draft",


    accountableFor:
      "The Reservoir Simulation Engineer produces the production forecast that the entire investment case rests on: how much comes out, how fast, and what happens if we drill here instead of there. The role's central difficulty is that history matching is an underdetermined inverse problem — many different parameter sets reproduce the observed data equally well, and only one of them resembles the reservoir. The work is therefore both computationally heavy and epistemically fragile, and it runs on a cycle measured in months while the asset team makes decisions on a cycle measured in weeks. The result is that forecasts are frequently delivered after the decision they were meant to inform. The question the role is ultimately answering is whether the model reproduces the past well enough that anyone should believe what it says about the future.",

    painPoints: [
      {
        quote: "Six months of manually tweaking relative permeability endpoints to match watercut. Six months. And I cannot tell you the match is unique.",
        coord: "H1"
      },
      {
        quote: "The gas cap coned into the perforations and the reservoir pressure collapsed years early. The critical rate calculation existed; it was just not part of anyone's daily loop.",
        coord: "H13"
      },
      {
        quote: "High mobility ratio, early water breakthrough, forty percent of the oil bypassed. We model the sweep after the flood, not during it.",
        coord: "H6"
      },
      {
        quote: "We matched against gauge pressure without correcting the fluid gradient to datum and manufactured an aquifer that does not exist.",
        coord: "H8"
      },
      {
        quote: "Four weeks to run the realisations for P10, P50 and P90. The budget submission does not wait four weeks, so the budget gets a single deterministic case.",
        coord: "H5"
      },
      {
        quote: "A syntax error in the data file crashed a twelve-hour run at ninety-five percent. That is a day gone to a missing slash.",
        coord: "H15"
      }
    ],

    journey: {
      title: "History Matching — Six Months of Manual Tuning Against an Ensemble",
      summary: "A mature waterflood needs a revised forecast to support an infill drilling campaign. The model has fifty producers with twenty years of rate, pressure and watercut history. Today the engineer begins the match by hand: adjust relative permeability endpoints, adjust aquifer strength, adjust fault transmissibility multipliers, submit the run, wait, compare, repeat. Over six months this converges to a match that reproduces the history acceptably — and the engineer knows, and will say if asked directly, that a dozen other parameter sets would have matched just as well and would forecast differently. The single deterministic answer that reaches the investment committee carries none of that. The H1 ensemble Kalman filter agent restructures the problem rather than accelerating the drudgery: it perturbs the uncertain parameters across an ensemble, assimilates the production history simultaneously across all fifty wells, and returns a matched ensemble in hours. What the asset team receives is not one history-matched model but a distribution of them, which is an honest representation of what the data actually constrains. Coupled with H5 running the probabilistic profiles on cloud-distributed compute in seconds rather than four weeks, the forecast arrives before the decision instead of after it — and it arrives with its uncertainty intact.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "H1",
        gate: "History-matched model acceptance",
        authority: "L2 — Act with confirmation",
        note: "The agent produces a matched ensemble with quality metrics per well. The engineer confirms the physical plausibility of the parameter distributions before the ensemble is used — a good statistical match with unphysical parameters is a failure, not a result."
      },
      {
        coord: "H5",
        gate: "P10/P50/P90 reserves profile for booking",
        authority: "L1 — Recommend only",
        note: "Feeds reserves disclosure. Computed autonomously, signed by the reservoir engineering authority."
      },
      {
        coord: "H13",
        gate: "Critical rate limit to avoid gas coning",
        authority: "L2 — Act with confirmation",
        note: "Agent computes the maximum rate; constraining a producer is a production decision taken with the asset (see Row I)."
      },
      {
        coord: "H15",
        gate: "Simulation deck pre-flight validation",
        authority: "L3 — Autonomous with audit",
        note: "Purely mechanical syntax and grid-table compatibility checking. Runs autonomously before every submission."
      }
    ],

    honestLimit:
      "Automated history matching solves the labour problem, not the uniqueness problem. An ensemble method will converge faster and cover the parameter space more honestly than a human tuning by hand, but if the model is structurally wrong — a missing fault, an absent aquifer connection, the wrong depositional architecture — it will produce a confident, well-matched ensemble that forecasts incorrectly with narrow error bars. That failure mode is more dangerous than a slow manual match, because it looks rigorous. The agent must be paired with structural scepticism from the geologist in Row C, and it must report when a match is only achievable with parameter values outside physically reasonable bounds."
  },

  /* =========================================================================
   * I // p09 — PRODUCTION & ARTIFICIAL LIFT TECHNOLOGIST
   * ========================================================================= */
  p09: {
    narrativeStatus: "draft",


    accountableFor:
      "The Production and Artificial Lift Technologist owns the daily production rate of the field and the survival of the equipment that delivers it. The role is a continuous constrained optimisation performed across hundreds of wells that interact through a shared gathering network: push a well harder and it may produce sand that erodes the manifold, gas-lock the pump that lifts it, or raise the backpressure that kills a marginal well two kilometres away. The constraints are physical and unforgiving, several of them destroy capital equipment in seconds, and the surveillance loop that is supposed to catch them runs on well tests performed monthly. The question runs across every well every day: whether each one is producing at the highest rate it can sustain without destroying itself or the equipment lifting it.",

    painPoints: [
      {
        quote: "Ultrasonic sand detectors alarm and get acknowledged. Sand cut erodes the choke manifold from the inside until it lets go.",
        coord: "I9"
      },
      {
        quote: "A gas slug reaches the pump intake and cavitation burns out a three-crore ESP motor. From onset to failure is not long enough for anybody to intervene.",
        coord: "I2"
      },
      {
        quote: "Wellhead temperature drops below the wax appearance point overnight and the flowline is a solid plug by morning.",
        coord: "I6"
      },
      {
        quote: "The gas well falls below critical velocity, loads up with water and dies. Nobody notices until the allocation is short.",
        coord: "I4"
      },
      {
        quote: "Lift gas is distributed evenly because even is defensible. It starves the wells that would actually pay for it.",
        coord: "I3"
      },
      {
        quote: "We bring A-14 online and two marginal wells on the same manifold quietly stop flowing. We find that out in next month's allocation.",
        coord: "I14"
      }
    ],

    journey: {
      title: "Sand Breakthrough at the Choke — Half a Second Against a Manifold Rupture",
      summary: "A high-rate producer in an unconsolidated sand is being drawn down near its limit because the field is behind target for the month. Sand production is rate-dependent and non-linear: below the critical drawdown the formation holds, above it the sand arch collapses and solids enter the stream. Once solids are moving at velocity through a choke, erosion is measured in hours, and the failure mode at the end of it is a rupture of a high-pressure manifold in a manned area. Today the defence is an ultrasonic sand detector wired to an alarm that operators have learned to acknowledge, because it also fires on slugging and on start-up transients, and a monthly well test that reports the sand cut long after the erosion has occurred. The I9 erosion velocity sentinel replaces alarm-acknowledgement with a control loop: it interprets the acoustic signature against the current flow regime to distinguish genuine solids from hydraulic noise, computes accumulated erosion against the API RP 14E velocity limit, and closes the drawdown back to the sand-free rate in half a second. The well produces slightly less today and continues producing next year, and the manifold stays intact. In the same network I2 watches motor current and intake pressure for the gas fraction that destroys ESP motors, acting in two tenths of a second — a window in which no human intervention is possible at all.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "I9",
        gate: "Automatic drawdown reduction on sand detection",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Manifold erosion leading to a high-pressure release in a manned area. The agent chokes back autonomously and notifies; restoring rate requires human authorisation."
      },
      {
        coord: "I2",
        gate: "ESP shutdown on gas-lock detection",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Motor burn-out occurs inside the detection-to-failure window. Agent trips the pump; the restart decision and the root cause review are human."
      },
      {
        coord: "I3",
        gate: "Field-wide lift gas reallocation",
        authority: "L2 — Act with confirmation",
        note: "Agent computes the equal-marginal optimum across the field; reallocating lift gas changes multiple wells at once and is confirmed by the production supervisor."
      },
      {
        coord: "I1",
        gate: "Choke bean size change",
        authority: "L2 — Act with confirmation",
        note: "Nodal optimum computed continuously; the setpoint move is confirmed against the current sand and water constraints before execution."
      },
      {
        coord: "I11",
        gate: "SSSV leak-rate certification to DGMS",
        authority: "L3 — Autonomous with audit",
        note: "Deterministic pressure-buildup evaluation written to an immutable regulatory ledger. Exceptions escalate to the integrity engineer in Row G."
      }
    ],

    honestLimit:
      "Acoustic sand detection cannot cleanly separate solids from slugging in every flow regime, and an agent tuned to be sensitive enough to catch genuine breakthrough will choke back wells during transients that were not dangerous. That trade-off is real and it costs production. It should be set deliberately, with the false-positive rate reported openly, rather than tuned quietly until the alarms stop. Virtual flow metering has the same character: it is a good fallback when a multiphase meter fails, and it is not a substitute for one — its accuracy degrades as the well drifts away from the conditions its model was calibrated against, and it must report that drift rather than continue quoting rates with unchanged confidence."
  },

  /* =========================================================================
   * J // p10 — LEAD PETROPHYSICIST
   * The proven benchmark. J8 is the one touchpoint in all 300 that is
   * already running autonomously in production (Slide 06, Kansas Well A-12).
   * ========================================================================= */
  p10: {
    narrativeStatus: "draft",


    accountableFor:
      "The Lead Petrophysicist converts raw wireline and logging-while-drilling measurements into the two numbers the entire asset is built on: porosity and water saturation. Every reserves booking, every casing-shoe depth, every completion interval and every economic model downstream inherits those numbers. The role sits at the seam between the logging contractor's raw acquisition and the reservoir team's static model — which means it also inherits every depth error, every tool calibration drift and every vendor-format inconsistency that occurs upstream of it. When this role is wrong, nobody finds out for months, and by then the casing is cemented. Three questions have to be answered before the rig moves: whether the hydrocarbon is actually there, how much of it is moveable, and whether that number can be defended to the drilling committee.",

    painPoints: [
      {
        quote: "Two hours of my day is spent dragging one log curve up and down against another until the wiggles line up. That is not petrophysics. That is manual labour with a mouse.",
        coord: "J8"
      },
      {
        quote: "Cable stretch on the second pass put me out by nearly a metre and a half. If I had not caught it, we would have set the casing shoe inside a gas sand.",
        coord: "J8"
      },
      {
        quote: "I picked the free water level off a supercharged MDT pressure point. The appraisal well came in dry. That number was mine.",
        coord: "J13"
      },
      {
        quote: "Forty offset wells, four different vendors, three decades of calibration drift. Normalising that set takes me the better part of a month and I still cannot prove it is right.",
        coord: "J14"
      },
      {
        quote: "The T2 cutoff is set at 33 milliseconds because that is what it has always been set at. Nobody in this building can tell me why.",
        coord: "J9"
      },
      {
        quote: "I am asked to defend a saturation number to three decimal places that came out of a spreadsheet nobody has version-controlled since 2019.",
        coord: "J7"
      }
    ],

    journey: {
      title: "Multi-Pass Wireline Splice — Cable Stretch to Casing Point",
      summary:
        "The logging contractor delivers three passes on a deepwater appraisal well at 02:40. The passes do not align: differential cable stretch between the main pass and the repeat section has introduced a depth offset that grows with hole depth. Historically the Lead Petrophysicist would spend the next two and a half hours dragging curves in Techlog by eye, landing somewhere within a metre and calling it good — an error band wide enough to place the 9-5/8\" casing shoe inside the gas sand rather than below it. On this well the splicing agent (J8) runs instead: cross-correlation across the overlap interval resolves the offset to 2.9 cm at r=0.9899, in seconds, with an automated sanity audit written to an immutable BigQuery record. The petrophysicist reviews the correlation coefficient and the residual plot, accepts the splice, and moves directly to the formation pressure gradient. The casing point is set on a defensible depth. The 07:00 drilling committee gets a number with a provenance trail attached — not an opinion with a timestamp.",
      provenAgent: "J8"
    },

    signoffs: [
      {
        coord: "J8",
        gate: "Composite splice acceptance",
        authority: "L3 — Autonomous with audit",
        note: "Agent executes and writes an immutable audit record. Petrophysicist reviews the correlation coefficient; intervention required only when r falls below the configured floor."
      },
      {
        coord: "J13",
        gate: "Free water level declaration",
        authority: "L1 — Recommend only",
        note: "Contact depth drives reserves booking and appraisal spend. The agent filters supercharging artefacts and proposes the FWL; the declaration itself stays with the human."
      },
      {
        coord: "J5",
        gate: "Shear-sonic acceptance for geomechanics handoff",
        authority: "L2 — Act with confirmation",
        note: "Distorted shear arrivals propagate silently into the wellbore stability model. Requires explicit petrophysicist confirmation before release to the drilling engineer."
      }
    ],

    honestLimit:
      "The splicing agent is proven on wireline depth alignment in clastic sequences at Kansas Well A-12. It has not yet been run against LWD memory data, against carbonate sequences with severe borehole rugosity, or against passes where the overlap interval is shorter than the correlation window. Those are extensions, not entitlements, and each needs its own validation well before it is claimed."
  },

  /* =========================================================================
   * K // p11 — FACILITIES & SEPARATION ENGINEER
   * ========================================================================= */
  p11: {
    narrativeStatus: "draft",


    accountableFor:
      "The Facilities and Separation Engineer owns the process plant between the wellhead and the export point: separation, dehydration, sweetening, compression, produced water treatment and flare. The role's characteristic problem is coupling — the plant is a single hydraulic and thermal system in which a change at the inlet separator propagates to the compressor, the glycol contactor and the flare within minutes, and the specifications it must hold are simultaneously commercial (sales gas dewpoint), environmental (29 ppm oil in water) and safety-critical (flare knockout, anti-surge). Several of these envelopes are defended on a timescale of milliseconds by machinery that costs tens of crores to replace. The role answers two questions at once: whether every stream leaving the facility is on specification, and whether every rotating and pressure-containing machine is still inside its safe operating envelope.",

    painPoints: [
      {
        quote: "If liquid carries over into the flare, we rain fire onto a manned platform. The knockout drum level is a trip, and a trip is not a control system.",
        coord: "K6"
      },
      {
        quote: "The compressor is fifty milliseconds from surge and the anti-surge controller is tuned to a curve from commissioning, on a machine whose impellers have been fouling for six years.",
        coord: "K7"
      },
      {
        quote: "Wet gas leaves the contactor and forms hydrates twenty kilometres down the pipeline. I find out from the dewpoint analyser four hours later.",
        coord: "K2"
      },
      {
        quote: "Rich amine loading is a laboratory number. Get it wrong in one direction and H2S slips into sales gas; get it wrong in the other and the column corrodes.",
        coord: "K5"
      },
      {
        quote: "Interface level in the three-phase separator is a manual weir setting. Oil carries into the gas line and water carries into the crude, and both are somebody's spec failure.",
        coord: "K1"
      },
      {
        quote: "The corrosion inhibitor pump was underdosing for a month. We found out from an iron count, by which time the manifold wall was thinner.",
        coord: "K14"
      }
    ],

    journey: {
      title: "Flare Knockout Slug — Two Tenths of a Second Between a Trip and Burning Rain",
      summary: "An upset upstream sends a liquid slug toward the flare header. The flare knockout drum exists precisely for this: it is the last device between liquid hydrocarbon and an open flame ninety metres above a manned offshore platform. If liquid carries past it, the flare tip sprays burning rain across the facility. Today the defence is a high-high level switch wired to a trip — a binary device that acts when the level has already arrived, with no notion of how fast it is arriving or how much more is coming. The engineer's real protection is that upsets large enough to overwhelm the drum are rare. The K6 interception sentinel replaces a level switch with a vapour disengagement calculation: it tracks the liquid arrival rate against the drum's actual separation capacity at the current gas rate and intercepts in two tenths of a second, before the level reaches the trip, diverting and reducing the header load rather than waiting to fail. In the same plant K7 tracks the compressor's real distance to its surge line in fifty milliseconds against a curve that is re-identified as the machine fouls, rather than the commissioning curve it has been defending since installation. Both are cases where the correct human response time is zero and the honest conclusion is that the loop must close without us.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "K6",
        gate: "Flare header load reduction on liquid carryover",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Burning liquid over a manned platform. Acts autonomously within the SIS envelope; every intervention is logged for PSM review (Row T)."
      },
      {
        coord: "K7",
        gate: "Anti-surge valve control",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Surge develops in tens of milliseconds. Fully autonomous by necessity; the human decision is the surge-line re-identification schedule, not the valve."
      },
      {
        coord: "K5",
        gate: "Amine circulation rate change",
        authority: "L2 — Act with confirmation",
        note: "Agent balances loading against sales gas H2S spec and column corrosion risk; the setpoint move is confirmed by the panel engineer."
      },
      {
        coord: "K3",
        gate: "Produced water discharge compliance (29 ppm)",
        authority: "L3 — Autonomous with audit",
        note: "Hydrocyclone control runs autonomously against the statutory limit with an immutable discharge record. Exceedance escalates immediately to the environmental authority."
      },
      {
        coord: "K15",
        gate: "Greenhouse gas and flare accounting for ESG filing",
        authority: "L3 — Autonomous with audit",
        note: "Continuous ledger replaces monthly spreadsheet tallies. The external disclosure is signed by the reporting officer."
      }
    ],

    honestLimit:
      "Anti-surge and flare protection agents operate inside a safety instrumented system, and that boundary must be respected rather than blurred. An agent that advises the SIS is a different regulatory object from an agent that is part of it, and the second requires IEC 61511 functional safety assessment, proven-in-use evidence and a SIL rating that none of these agents currently carry. The honest sequencing is: deploy as an advisory and diagnostic layer above the existing instrumented protection, demonstrate the detection record, and only then open the conversation about whether the agent becomes part of the protective function. Claiming SIL capability before that work is done would be indefensible."
  },

  /* =========================================================================
   * L // p12 — FLOW ASSURANCE & HYDRATE SPECIALIST
   * ========================================================================= */
  p12: {
    narrativeStatus: "draft",


    accountableFor:
      "The Flow Assurance and Hydrate Specialist keeps a multiphase mixture flowing through kilometres of steel on a cold seabed. The threats are all phase-change events — hydrates, wax, asphaltenes, slugging — and they share a common character: they are slow to develop, effectively irreversible once formed, and remediated at enormous cost. A hydrate plug in a deepwater flowline can shut in a field for weeks. The role therefore operates almost entirely in the predictive domain, defending margins against curves computed from fluid models, and it owns the single most time-critical piece of operational knowledge on a subsea system: the cooldown window after a shutdown. Two questions govern the work: whether what is inside the pipeline will still be flowing tomorrow morning, and how long there is before it plugs if the system shuts down tonight.",

    painPoints: [
      {
        quote: "After a shutdown we have about six hours before the fluid enters the hydrate region. That clock is in somebody's head and in a procedure document, not on a screen.",
        coord: "L11"
      },
      {
        quote: "A terrain slug forms in the riser base overnight, arrives at the platform as a wall of liquid, and trips the whole field.",
        coord: "L2"
      },
      {
        quote: "Cooling on shutdown drops the fluid straight into the hydrate zone and the line seals solid. Remediation is weeks and the MEG dose was a table lookup.",
        coord: "L1"
      },
      {
        quote: "Joule-Thomson cooling during depressurisation takes the pipe to minus fifty. That is below the minimum design metal temperature and the pipe can shatter under stress.",
        coord: "L3"
      },
      {
        quote: "Asphaltene onset pressure is a laboratory curve in a report. The well is crossing it right now in the near-wellbore and I will know when the tubing blocks.",
        coord: "L8"
      },
      {
        quote: "Fifteen millimetres of wax and the pig sticks halfway. That stops export for the entire field and the pigging frequency was chosen by habit.",
        coord: "L4"
      }
    ],

    journey: {
      title: "The Cooldown Clock — Six Hours Nobody Is Counting",
      summary: "A subsea production system shuts down at 21:40 on an unplanned trip. From that moment the insulated flowline begins losing heat to seawater at four degrees, and the fluid inside is moving steadily toward the hydrate stability region. There is a window — typically several hours — during which the system can be restarted normally or safely displaced with inhibitor. After it closes, the correct action changes completely, and taking the wrong one plugs the line. Today this window is a number in the flow assurance operating philosophy: a static figure computed at design for a nominal shutdown condition, sitting on page 340 of a 600-page document, while the control room works the restart. Nobody is counting, and the number would be wrong anyway, because the real cooldown depends on the liquid inventory and ambient conditions at the moment of the trip. The L11 cooldown agent puts the clock on the screen: a live transient thermal model of this shutdown, in this line, with this inventory, counting down the actual no-touch window in real time and escalating as it closes. Alongside it L1 tracks the hydrate equilibrium curve continuously and computes the MEG dose the current conditions actually require rather than the table value, and L15 checks live DCS restart commands against the operating envelope buried in that same document. The philosophy stops being a document and becomes a running constraint.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "L11",
        gate: "Cooldown window escalation and inhibitor displacement trigger",
        authority: "L2 — Act with confirmation",
        note: "Agent maintains the live clock and recommends displacement before the window closes; committing a subsea inhibitor displacement is an operations decision with cost consequences."
      },
      {
        coord: "L2",
        gate: "Subsea choke adjustment for slug mitigation",
        authority: "L3 — Autonomous with audit",
        note: "Slug interception must act before arrival at the riser and is too fast for a confirmation loop. Operates autonomously within a bounded choke authority with every move logged."
      },
      {
        coord: "L3",
        gate: "Depressurisation rate limit for low-temperature embrittlement",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Taking carbon steel below its minimum design metal temperature is a brittle fracture risk. The rate governor is a hard limit, not a recommendation."
      },
      {
        coord: "L6",
        gate: "MEG/methanol injection rate",
        authority: "L2 — Act with confirmation",
        note: "Hammerschmidt dosage computed continuously; the injection rate change is confirmed because underdosing plugs the line and overdosing is expensive."
      }
    ],

    honestLimit:
      "Every agent in this row is a fluid model wearing an operational interface, and fluid models are calibrated against a PVT sample that may be years old and may not represent what the reservoir is producing today. As water cut rises, as a new well is tied back, as the gas-oil ratio changes, the hydrate curve and the wax appearance temperature move — and an agent that keeps computing against the original characterisation will be confidently wrong in a direction that plugs pipelines. The correct discipline is that the agent tracks the age and representativeness of its fluid characterisation as a first-class input and degrades its own stated confidence as that ages. Recharacterisation is a sampling programme, not a software feature."
  },

  /* =========================================================================
   * M // p13 — GAS PIPELINE GRID DISPATCHER
   * ========================================================================= */
  p13: {
    narrativeStatus: "draft",


    accountableFor:
      "The Gas Pipeline Grid Dispatcher operates national transmission infrastructure as a single hydraulic system with enormous stored inventory and long time constants. The role balances three obligations that pull against each other: physical integrity of the pipe, contractual delivery to every offtake, and the cost of the compression fuel used to move the gas. It also carries a public safety responsibility that is unique on this board — the odorant that makes a leak detectable to a member of the public in a city is dosed by a pump under this role's control, and the consequence of an undetected transmission leak is measured in lives rather than in rupees. The role is held to two questions every day: whether the gas that entered the grid is still in the grid, and whether every city gate can be met tomorrow morning without breaching a pressure limit.",

    painPoints: [
      {
        quote: "A one-point-two percent volumetric drop over forty kilometres is inside SCADA noise. That is a hazardous leak that the mass balance cannot see.",
        coord: "M1"
      },
      {
        quote: "If the odorant pump fails, high-pressure gas goes into a city with no smell. Nobody knows until something ignites. We verify it with a lab audit.",
        coord: "M13"
      },
      {
        quote: "Close the rupture valve too fast and the surge wave bursts the joints upstream. The valve is protecting the pipeline and it can also destroy it.",
        coord: "M9"
      },
      {
        quote: "A cold snap draws the linepack down below city gate minimums. I am forecasting inventory by feel across a national grid.",
        coord: "M2"
      },
      {
        quote: "The MFL tool returns two thousand corrosion anomalies and an engineer sorts them in Excel for two weeks before we know which one matters.",
        coord: "M7"
      },
      {
        quote: "We run whichever compressors are lined up. Twenty-five crore a month of fuel gas goes to units that are not the efficient choice.",
        coord: "M3"
      }
    ],

    journey: {
      title: "The Leak Inside the Noise — 1.2% Over Forty Kilometres",
      summary: "A transmission line develops a leak at a corroded girth weld in an agricultural district. It is not a rupture; it is a slow release amounting to roughly one and a quarter percent of throughput. Today the grid's leak detection is a volumetric mass balance across metering stations forty kilometres apart, and the measurement uncertainty of those meters, combined with the effect of linepack changes as pressure and temperature vary through the day, is comfortably larger than the leak. The balance therefore shows nothing anomalous. It stays undetected until somebody smells it or vegetation dies above the line, and the interval is measured in hours or days with hazardous gas accumulating in the meantime. The M1 sentinel attacks this from two directions at once: it runs the mass balance as a transient calculation that accounts for real linepack changes rather than a steady-state assumption, which alone shrinks the detection floor substantially, and it simultaneously watches for the negative pressure wave signature that a release generates and propagates at the speed of sound. The acoustic transient is a fundamentally different observable from the volume balance, and correlating the two is what allows the agent to declare a leak in 1.2 seconds where the volumetric method needs four hours and would still have missed this one. On the same grid M13 turns odorant compliance from a periodic lab audit into a closed-loop mass-flow validation at the grid tips.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "M1",
        gate: "Leak declaration and emergency isolation",
        authority: "L2 — Act with confirmation",
        note: "Agent detects and localises; isolating a national transmission segment has enormous downstream supply consequences and is authorised by the grid control manager."
      },
      {
        coord: "M13",
        gate: "Odorant injection failure alarm",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Un-odorised gas in a distribution network is a direct public safety hazard. Alarms and escalates autonomously; no discretionary acknowledgement."
      },
      {
        coord: "M9",
        gate: "Emergency shutdown valve stroke timing",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "The surge governor is a hard constraint on the ESD stroke. It cannot be overridden in the moment because the override would burst the line it is closing to protect."
      },
      {
        coord: "M3",
        gate: "Compressor dispatch and fuel optimisation",
        authority: "L2 — Act with confirmation",
        note: "Purely economic. The optimiser proposes a dispatch; the dispatcher confirms against maintenance state and contractual constraints the model does not see."
      },
      {
        coord: "M15",
        gate: "Daily nomination versus actual reconciliation",
        authority: "L3 — Autonomous with audit",
        note: "Deterministic reconciliation into a verified ledger. Imbalance penalties are commercially settled by the transmission business."
      }
    ],

    honestLimit:
      "Negative pressure wave detection is excellent for a sudden release and progressively weaker for a slow seep that never generates a sharp transient. The transient mass balance covers part of that gap but remains bounded by meter accuracy over long segments. The honest characterisation is that this agent moves the detectable leak threshold down substantially and shortens detection from hours to seconds for the events it can see — it does not make the pipeline leak-proof, and small chronic seeps will still require in-line inspection and survey. Publishing the actual detection threshold per segment, rather than a single headline figure for the grid, is the difference between a trustworthy system and a reassuring one."
  },

  /* =========================================================================
   * N // p14 — MARINE TERMINAL & OFFLOADING SUPERINTENDENT
   * ========================================================================= */
  p14: {
    narrativeStatus: "draft",


    accountableFor:
      "The Marine Terminal and Offloading Superintendent owns the interface where custody, safety and commercial value converge on a single flange. Every parcel that crosses it is a legal transfer of ownership measured to a fraction of a percent, executed under time pressure created by demurrage that accrues by the hour. The role also owns the largest concentrated hydrocarbon inventory on the site — a tank farm whose failure modes, overfill and floating roof seal failure, are the direct mechanism of some of the worst industrial accidents in the sector, and which are defended by level instruments that can and do fail silently. Three questions attach to every parcel: whether the cargo is moving safely, whether the quantity being paid for is the quantity that actually crossed the flange, and whether the tank is going to hold it.",

    painPoints: [
      {
        quote: "A radar gauge froze during a receipt. That is exactly how Buncefield happened, and the only thing between us and it is an instrument that stopped reporting without saying so.",
        coord: "N12"
      },
      {
        quote: "Surge on an emergency shutdown shears the loading arm and crude goes into the harbour. The breakaway coupling is the last defence and it is passive.",
        coord: "N3"
      },
      {
        quote: "Uneven draw tilts the floating roof and opens the rim seal. There is an explosive vapour space under that roof and we find it on the next inspection.",
        coord: "N7"
      },
      {
        quote: "Shore gauge and ship ullage disagree by three tenths of a percent. That is a six crore cargo claim and it is argued between two surveyors with clipboards.",
        coord: "N2"
      },
      {
        quote: "Fifteen lakh a day in demurrage ticking while the Notice of Readiness works its way through the process.",
        coord: "N1"
      },
      {
        quote: "Eighteen paper manifests physically carried between customs and the surveyor. Eight hours, for documents.",
        coord: "N15"
      }
    ],

    journey: {
      title: "The Frozen Gauge — Overfill Prevention as an Independent Layer",
      summary: "A crude receipt is running into a large floating-roof tank overnight. The tank level is monitored by a servo radar gauge that also drives the control room mimic, the alarm and the operator's understanding of how much room is left. At 01:20 the gauge freezes: it continues to report a plausible, slowly-rising level that is no longer connected to reality. Every downstream indication remains green because every downstream indication derives from the same instrument. This is the precise failure geometry of Buncefield — not a missing alarm, but a single point of measurement trusted by every layer that was supposed to be independent. The N12 overfill intercept exists to break that dependency: it maintains an independent optical and float-based determination of level, continuously cross-checks it against the primary gauge and against the volumetric inflow integrated from the receiving line meter, and treats disagreement between the three as the alarm condition rather than waiting for any one of them to reach a setpoint. A frozen gauge declares itself within seconds because the inflow says the level must be rising and the gauge says it is not. At half a second, the agent closes the upstream valves. ₹120 Cr of exposure, and a category of accident that the industry has already had, closed by insisting that agreement between independent measurements is the thing being monitored.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "N12",
        gate: "Tank overfill intercept — upstream valve closure",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Independent of the primary level instrument by design. Acts autonomously; any bypass requires PSM (Row T) counter-signature and time-limited re-authorisation."
      },
      {
        coord: "N3",
        gate: "Loading arm surge relief and breakaway arming",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Surge propagates faster than any human loop. Autonomous within the marine ESD hierarchy."
      },
      {
        coord: "N2",
        gate: "Custody transfer quantity certification",
        authority: "L1 — Recommend only",
        note: "ASTM volume correction and reconciliation are computed by the agent; the bill of lading quantity is a legal instrument signed by the superintendent and the independent surveyor."
      },
      {
        coord: "N7",
        gate: "Floating roof tilt and seal gap alarm",
        authority: "L3 — Autonomous with audit",
        note: "Continuous optical monitoring replaces periodic inspection. Detection is autonomous; the decision to stop the draw is operational."
      },
      {
        coord: "N13",
        gate: "Multi-product manifold isolation verification",
        authority: "L3 — Autonomous with audit",
        note: "Block-and-bleed verification is deterministic valve-state logic and runs autonomously before every transfer, with the verification record attached to the parcel."
      }
    ],

    honestLimit:
      "Independent overfill protection is only genuinely independent if the second measurement chain shares no common-mode failure with the first — not the same power supply, not the same I/O card, not the same calibration technician on the same day. An agent that reads two instruments through one gateway has recreated the single point of failure it was deployed to remove, and it will report healthy while doing so. Verifying that independence is a physical and electrical audit of the installation, not something the agent can assert about itself, and it must be re-verified after every instrumentation change. On the commercial side, no agent resolves a ship-shore quantity dispute — it narrows the discrepancy and makes both positions auditable, which is worth a great deal and is not the same as agreement."
  },

  /* =========================================================================
   * O // p15 — CDU/VDU DISTILLATION LEAD
   * ========================================================================= */
  p15: {
    narrativeStatus: "draft",


    accountableFor:
      "The CDU/VDU Distillation Lead runs the first and largest unit in the refinery: every barrel the refinery processes passes through this column, and the cut points set here determine the feed quality and quantity for every downstream unit. The role holds an unusual pairing of risks. On one side is a fired heater whose tube metal temperature is the most dangerous number in the refinery — a tube rupture is an inferno. On the other is a continuous economic optimisation, because crude assays vary cargo to cargo and product prices move daily, so the correct cut point is never the same two days running and the cost of running yesterday's cut point is invisible. The role holds two questions in tension: whether the furnace is safe, and whether the crude is being cut at the point that makes the most money today rather than the point set last month.",

    painPoints: [
      {
        quote: "A hot spot on a furnace tube ends in a rupture and a refinery fire. We are watching that with thermocouples and an operator's judgement about tube colour.",
        coord: "O2"
      },
      {
        quote: "The high-TAN blend ratio was slightly off. The desalter upset without warning and the column flooded.",
        coord: "O1"
      },
      {
        quote: "Salt slips past the desalter and we get hydrochloric acid corrosion in the tower overhead. That is a pipe leak in a live unit.",
        coord: "O3"
      },
      {
        quote: "Ammonium chloride deposits just above the water dewpoint and perforates the line underneath the deposit. There is no warning at all.",
        coord: "O6"
      },
      {
        quote: "Two hours for the lab distillation. For two hours I am leaving high-value kerosene in the heavy gas oil because I cannot see the flashpoint yet.",
        coord: "O4"
      },
      {
        quote: "Excess oxygen too high and we waste eighteen crore of fuel gas; too low and we make carbon monoxide in a firebox. The trim is manual.",
        coord: "O7"
      }
    ],

    journey: {
      title: "The Fired Heater Hot Spot — Watching Tube Metal Instead of Stack Temperature",
      summary: "A crude furnace is operating at design throughput on a heavier blend than usual. Inside the radiant section, one pass is receiving marginally less flow than its neighbours because of a partially fouled orifice. That pass runs hotter, the higher film temperature accelerates coke laydown on the inside of the tube, the coke layer insulates, and the tube metal temperature climbs further. This is a positive feedback loop that ends in a tube rupture and a fire, and it develops over days. Today the defence is a set of skin thermocouples at fixed locations — which may not be where the hot spot is — supplemented by an operator with an infrared pyrometer walking the firebox peepholes on a routine. The gap between measurements is where the failure lives. The O2 agent builds a spatial thermal model of the coil rather than reading isolated points: it fuses the fixed thermocouples with pyrometer readings and pass flow and outlet temperature data to estimate the full tube wall temperature field, identify where the coking is actually progressing, and flag the developing hot spot while it is still a maldistribution problem with a cheap fix. Detection moves from a walk-round to one second. Downstream in the same unit O1 re-optimises the crude blend cut points against live prices in four seconds rather than eight hours, so the column is cutting for today's economics — the same instrumentation stream defending against a fire and recovering margin.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "O2",
        gate: "Furnace hot spot escalation and firing rate reduction",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Tube rupture is a fatality and asset-loss event. The agent can reduce firing autonomously within a bounded envelope; returning to full rate requires engineering authorisation."
      },
      {
        coord: "O1",
        gate: "Crude blend ratio and cut point change",
        authority: "L2 — Act with confirmation",
        note: "Economic optimisation with real operational consequences downstream. Agent proposes; the unit lead confirms against desalter and downstream unit constraints."
      },
      {
        coord: "O3",
        gate: "Desalter demulsifier dosing and grid voltage",
        authority: "L3 — Autonomous with audit",
        note: "Closed-loop control against the salt-in-crude target runs autonomously; sustained inability to hold below 1.0 ptb escalates as a process issue rather than being silently absorbed."
      },
      {
        coord: "O7",
        gate: "Combustion excess oxygen trim",
        authority: "L3 — Autonomous with audit",
        note: "Autonomous within a hard low-oxygen floor. The floor is a safety constraint and is not available to the optimiser."
      }
    ],

    honestLimit:
      "The tube wall temperature field is inferred, not measured. The agent fuses a small number of real thermocouples with a thermal model, and in the region between instruments it is producing an estimate whose error grows with distance from the nearest measurement. On a well-instrumented furnace this is a genuine and substantial improvement over a periodic pyrometer walk; on a furnace with three working thermocouples it is an interpolation dressed as a field, and the agent must publish the confidence map alongside the temperature map so nobody mistakes one for the other. The right first output of this agent on many units will be a recommendation to add thermocouples."
  },

  /* =========================================================================
   * P // p16 — FCCU PROCESS ENGINEER
   * ========================================================================= */
  p16: {
    narrativeStatus: "draft",


    accountableFor:
      "The FCCU Process Engineer runs the refinery's conversion engine and its most dynamically coupled unit: a reactor and a regenerator exchanging tonnes of hot catalyst per minute, thermally locked to each other so that any disturbance in one immediately propagates to the other. The unit is also the refinery's largest margin generator, which creates constant pressure to push it. Two of its failure modes are among the most severe on the board — catalyst circulation reversal admits air into a hydrocarbon riser, and regenerator afterburn melts cyclones — and both develop faster than a human operator can diagnose, let alone correct. The role watches two questions continuously: whether catalyst is still circulating in the right direction, and whether the regenerator is burning where it is supposed to burn.",

    painPoints: [
      {
        quote: "If the slide valve hunts and circulation reverses, air enters the riser. That is an explosion, and the differential pressure that predicts it is a trend on a screen nobody is staring at.",
        coord: "P1"
      },
      {
        quote: "Afterburn moves the combustion out of the bed and into the plenum. Above eight hundred degrees the cyclones melt, and by then it is a turnaround.",
        coord: "P6"
      },
      {
        quote: "A cyclone flapper hung open and eight crore of catalyst went out of the stack in two hours. Two hours.",
        coord: "P2"
      },
      {
        quote: "The slurry exchanger plugs with fines, heat removal stops, and the unit trips. Every time, we knew the pressure drop was climbing.",
        coord: "P5"
      },
      {
        quote: "Feed nickel spikes and we find out from the equilibrium catalyst lab result. By then the dehydrogenation has already made gas we did not want.",
        coord: "P4"
      },
      {
        quote: "Propylene versus gasoline is the highest-value lever I have and I move it on a six-hour lab cycle against yesterday's prices.",
        coord: "P8"
      }
    ],

    journey: {
      title: "Slide Valve Hunting — A Tenth of a Second Before Air Meets Hydrocarbon",
      summary: "The regenerated catalyst slide valve begins to hunt. The differential pressure across it — the hydraulic seal that guarantees catalyst and air flow from the regenerator toward the riser and never the reverse — starts to oscillate as the standpipe partially defluidises. If that differential collapses, air from the regenerator can travel backwards into a riser full of hydrocarbon vapour at five hundred degrees. There is no version of that event that is recoverable. Today this is defended by a low differential pressure interlock at a fixed setpoint and by an experienced operator who recognises the hunting signature on a trend. Both act on the amplitude of the excursion, and neither acts on its trajectory. The P1 sentinel reads the differential pressure at high frequency and treats the oscillation itself as the signal: it detects the onset of instability from the frequency and growth rate of the hunting, well before the interlock setpoint is approached, and governs the valve in a tenth of a second. In the same unit P6 holds the combustion front in the bed by trimming the air blower against the flue gas CO/O2 ratio in half a second, and P7 keeps the wet gas compressor off its surge line in fifty milliseconds as riser pressure swings. ₹115 Cr, ₹95 Cr and ₹75 Cr of exposure, all three in a time domain where the honest answer is that a human cannot be the controller — the human is the person who decides what the controller is allowed to do.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "P1",
        gate: "Catalyst slide valve governing on circulation instability",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Air ingress into a hydrocarbon riser. Fully autonomous within the SIS envelope; every intervention triggers a mandatory engineering review."
      },
      {
        coord: "P6",
        gate: "Combustion air trim to suppress afterburn",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Cyclone metallurgy limit. Acts autonomously against the temperature constraint; the operating target is set by the process engineer."
      },
      {
        coord: "P7",
        gate: "Wet gas compressor anti-surge control",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Fifty-millisecond domain. Autonomous by physical necessity."
      },
      {
        coord: "P8",
        gate: "Reactor temperature target for propylene/gasoline split",
        authority: "L2 — Act with confirmation",
        note: "Pure margin optimisation against the crack spread. Agent computes the optimum; changing severity is confirmed by the unit engineer against catalyst and downstream constraints."
      },
      {
        coord: "P15",
        gate: "Daily conversion and yield mass reconciliation",
        authority: "L3 — Autonomous with audit",
        note: "Deterministic mass balance written to an immutable record; unreconciled gaps are escalated rather than distributed across streams."
      }
    ],

    honestLimit:
      "Four of the five sign-off gates in this row are proposed as autonomous safety actions, and that concentration should be scrutinised rather than celebrated. Each one requires the same evidence: an IEC 61511 functional safety assessment, a demonstrated failure rate, and a defined behaviour when the agent's own inputs are bad. An agent that trips an FCCU on a false positive has not made the unit safer — it has moved the loss from a rare catastrophic event to a frequent expensive one, and the unit engineers will lose confidence in it and find a way to bypass it, which is the worst outcome available. The deployment sequence must be shadow mode first, with the detection record published against real events, before any of these agents is given an actuator."
  },
  /* =========================================================================
   * Q // p17 — HYDROCRACKER SPECIALIST
   * The single highest-exposure persona on the board. Q1 alone carries
   * ₹130 Cr/yr — the largest capital-at-risk figure in the entire matrix.
   * ========================================================================= */
  p17: {
    narrativeStatus: "draft",


    accountableFor:
      "The Hydrocracker Specialist operates the most energetic and least forgiving unit in the refinery: a 150-bar hydrogen-rich reactor train running strongly exothermic reactions across fixed catalyst beds. The role owns conversion, product specification and — above all — the thermal stability of the beds. A hydrocracker does not degrade gracefully. The gap between normal operation and a runaway that breaches the reactor is measured in tens of seconds, and every mitigating action (quench gas, depressuring, feed cut) trades against the others. The role simultaneously owns the slow-moving economics: hydrogen purity, catalyst life, guard-bed poisoning and hydrogen accounting, each of which quietly erodes margin for months before it becomes visible. Two questions sit under every shift: whether the reactor bed is stable right now, and whether a runaway would be recognised in time to quench it.",

    painPoints: [
      {
        quote: "The bed can go from normal to unrecoverable inside a minute. I am watching thermocouples on a DCS screen and hoping I catch the slope before it catches me.",
        coord: "Q1"
      },
      {
        quote: "If that level valve fails open, 150 bar of hydrogen goes straight into a low-pressure tower. There is no procedure for what happens next.",
        coord: "Q9"
      },
      {
        quote: "Recycle purity drifts down over weeks. By the time the lab report tells me, the catalyst has already coked and I have lost cycle length I cannot get back.",
        coord: "Q2"
      },
      {
        quote: "Ammonium bisulfide salts sublime out in the air coolers and eat the tubes from the inside. I am setting the wash-water rate off a correlation from a handbook printed before I joined.",
        coord: "Q3"
      },
      {
        quote: "I find out silicon has poisoned the guard bed when the lab report comes back, which is three weeks after the defoamer upstream started slipping.",
        coord: "Q14"
      },
      {
        quote: "Hydrogen consumption is estimated. Estimated. On a unit where hydrogen is the single largest variable cost in the plant.",
        coord: "Q15"
      }
    ],

    journey: {
      title: "Exothermic Bed Excursion — Rate-of-Rise to Quench",
      summary:
        "At 03:12 the feed slate shifts as a heavier VGO cut reaches the unit. Bed 2 inlet temperature begins to climb. In the current operating mode the board operator sees an absolute temperature that is still inside its alarm limit and takes no action — the alarm is set on value, not on slope, and the slope is what kills. Over the next forty seconds the exothermic reaction feeds itself; by the time the absolute high-temperature alarm annunciates above 450 °C the specialist has seconds to make a call that trades quench gas availability against depressuring rate against feed cut, with no time to model any of them. The Q1 thermal runaway guard changes the shape of this event entirely: a multi-point rate-of-rise sentinel reads every bed thermocouple continuously, detects the divergence in the slope while the absolute value is still nominal, and initiates a graded high-speed quench in 0.1 seconds — before the excursion becomes self-sustaining. The specialist arrives to a unit that is stable, a quench that has already been logged, and a decision about feed slate rather than a decision about survival. ₹130 Cr of capital exposure resolves into a shift note.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "Q1",
        gate: "High-speed thermal quench initiation",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Human reaction time is physically outside the window for this event. The agent acts and notifies; the specialist owns the post-event review and the feed-slate decision that follows."
      },
      {
        coord: "Q9",
        gate: "HP separator gas blowby interlock",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Dual independent level sensors with voting logic. Operates below the human loop by design; any bypass requires PSM (Row T) counter-signature."
      },
      {
        coord: "Q3",
        gate: "Wash-water injection rate change",
        authority: "L2 — Act with confirmation",
        note: "Agent computes the salt crystallisation margin and proposes a rate; specialist confirms before the setpoint moves."
      },
      {
        coord: "Q6",
        gate: "Catalyst skim turnaround date recommendation",
        authority: "L1 — Recommend only",
        note: "Drives turnaround scheduling and capital commitment. Recommendation feeds the planning cycle; the date is a management decision."
      }
    ],

    honestLimit:
      "Rate-of-rise detection is only as good as the thermocouple grid it reads. On beds with sparse or degraded instrumentation the agent will detect a runaway later than the physics allows, and the honest answer is that the instrumentation must be upgraded first. This agent does not compensate for a blind bed — it makes an instrumented bed safe, and it makes the uninstrumented ones visible as the gap they already are."
  },

  /* =========================================================================
   * R // p18 — PETROCHEMICAL REFORMING & AROMATICS CHEMIST
   * ========================================================================= */
  p18: {
    narrativeStatus: "draft",


    accountableFor:
      "The Reforming and Aromatics Chemist owns the refinery's most chemically delicate asset: a precious metal catalyst whose activity depends on a chloride and moisture balance measured in parts per million, and which can be permanently destroyed by a contaminant that arrives from three units upstream. The role is also the refinery's principal hydrogen producer, which makes every other hydroprocessing unit dependent on it, and it holds the fuel-versus-chemical decision — whether reformate becomes gasoline blendstock or paraxylene — which is one of the largest recurring margin levers in the complex and is currently exercised on a monthly planning cycle against daily-moving prices. The role answers a technical question and a commercial one in the same breath: whether the platinum is still doing its job, and whether a given molecule should leave the unit as a fuel or as a chemical.",

    painPoints: [
      {
        quote: "If the lift gas surges and catalyst circulation stops, the regenerator over-temps and melts the screens. That is the whole CCR loop.",
        coord: "R1"
      },
      {
        quote: "Chloride strips off the platinum and we get acid corrosion and permanent deactivation. That balance is parts per million and it is checked on a four-hour lab cycle.",
        coord: "R3"
      },
      {
        quote: "Arsenic slips past the guard bed and the platinum is dead. Not degraded — dead. And the guard bed saturation is a calculation nobody is running.",
        coord: "R11"
      },
      {
        quote: "The knock engine result comes back four hours later. For four hours I am making barrels at the wrong octane, in one direction or the other.",
        coord: "R2"
      },
      {
        quote: "My net gas rate drops and the hydrocrackers downstream have to cut rate. I am the hydrogen supply for the whole complex and that coupling is managed by phone.",
        coord: "R8"
      },
      {
        quote: "Gasoline blendstock or paraxylene. That is the biggest margin decision I influence and it is revisited monthly against prices that move daily.",
        coord: "R15"
      }
    ],

    journey: {
      title: "Arsenic Through the Guard Bed — Poisoning You Only See in the Lab Report",
      summary: "A crude slate change introduces a naphtha stream carrying elevated arsenic. The naphtha hydrotreater guard bed exists to capture exactly this, and it does, until its capacity is consumed. Beyond that point arsenic passes through and reaches the platinum reforming catalyst downstream, where it adsorbs irreversibly onto the active metal sites. The catalyst is not fouled and cannot be regenerated; it is poisoned, and the loss is permanent and expensive. Today the first indication is a lab result on the reformer catalyst showing arsenic on metal — after the damage. The guard bed is changed on a time-based schedule that assumes a nominal feed contaminant level, and a feed change that violates that assumption is invisible to the schedule. The R11 contaminant mass accumulator makes the invisible quantity explicit: it integrates the actual arsenic and lead mass entering the guard bed from feed analyses and flow, tracks cumulative loading against the bed's known capacity, and reports remaining life as a live number that responds to the crude slate rather than to the calendar. When a heavier or dirtier cargo arrives, the projected changeout date moves immediately and visibly. Alongside it R3 holds the water-chloride balance continuously instead of on a four-hour lab cycle, and R1 governs the catalyst lift gas velocity in two tenths of a second to protect the regenerator. The unifying idea across this row is that catalyst life is a slowly-consumed asset, and every one of these agents exists to make its consumption visible while there is still time to act.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "R1",
        gate: "CCR catalyst lift gas velocity governing",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Circulation halt leads to regenerator over-temperature and mechanical damage in seconds. Autonomous within a bounded envelope."
      },
      {
        coord: "R3",
        gate: "Organic chloride injection rate",
        authority: "L3 — Autonomous with audit",
        note: "Closed-loop against the measured moisture balance. Runs autonomously; sustained inability to hold the balance escalates as a catalyst health issue."
      },
      {
        coord: "R11",
        gate: "Guard bed changeout scheduling",
        authority: "L1 — Recommend only",
        note: "Drives a maintenance and inventory commitment. The agent projects remaining capacity; the changeout is a planning decision."
      },
      {
        coord: "R8",
        gate: "Hydrogen header allocation between consumers",
        authority: "L2 — Act with confirmation",
        note: "Prioritising hydrogen affects multiple units including the hydrocracker (Row Q). Confirmed at complex level, not by the reformer alone."
      },
      {
        coord: "R15",
        gate: "Fuel versus chemical production split",
        authority: "L1 — Recommend only",
        note: "A commercial decision on market exposure. The linear program advises daily; the split is set by planning and economics."
      }
    ],

    honestLimit:
      "The contaminant accumulator is a mass balance and inherits the sampling frequency of the feed analysis that drives it. If arsenic is measured weekly, a slug arriving on a single cargo can pass through between samples and the accumulator will under-report the loading with complete confidence. This agent therefore makes a strong case for online or higher-frequency contaminant measurement, and it should be deployed alongside that argument rather than as a substitute for it. Inferential octane prediction has the same dependency in a different form: the soft sensor is only valid while the feed PONA stays within the range it was trained on, and a genuinely novel naphtha requires the knock engine and a model update, not extrapolation."
  },

  /* =========================================================================
   * S // p19 — REFINERY BLENDING & OFFSITE LOGISTICS LEAD
   * ========================================================================= */
  p19: {
    narrativeStatus: "draft",


    accountableFor:
      "The Refinery Blending and Offsite Logistics Lead converts intermediate streams into the finished products the refinery actually sells, and owns the last quality gate before a product reaches a customer. The role's economics are counter-intuitive: the objective is to hit specification precisely, because every octane point or cetane number given away above the minimum is margin donated to the customer, at a scale of crores per month. Simultaneously it owns the one product on this board with a direct aviation safety consequence — Jet A-1 released with free water or particulate is a flight safety issue, which is why this touchpoint carries the single largest capital exposure of any cell in the matrix at ₹150 Cr. Two questions decide whether the role has done its job: whether every finished product is exactly on specification and not one point better, and whether the jet fuel is clean.",

    painPoints: [
      {
        quote: "Free water or particulate in jet fuel is an engine icing event at altitude. That is the release I sign, and the last check before it is a visual jar test.",
        coord: "S10"
      },
      {
        quote: "Density stratification in a large tank can roll over and vent. It is a slow process and nobody is watching the gradient.",
        coord: "S4"
      },
      {
        quote: "We blend ninety-three RON to meet ninety-one because it is safe. Twelve crore a month of octane simply given away.",
        coord: "S1"
      },
      {
        quote: "Off-spec flashpoint diesel went into an export tank. Two hundred and fifty thousand barrels quarantined because of a property we could not see in real time.",
        coord: "S2"
      },
      {
        quote: "The interface between diesel and gasoline in the export line gets cut by feel. Transmix downgrades both products.",
        coord: "S5"
      },
      {
        quote: "Three weeks for finance to explain a zero-point-eight percent volumetric loss. Nobody can say whether it is a leak or a meter.",
        coord: "S15"
      }
    ],

    journey: {
      title: "Jet A-1 Release — The Largest Single Exposure on the Board",
      summary: "A batch of Jet A-1 is ready for release to the aviation fuel farm. The specification concerns are not octane or density; they are free water and particulate contamination, because at altitude free water freezes and can restrict fuel flow to an engine. The defences today are a filter-water separator, a periodic differential pressure check on that separator, and a visual jar test performed by a technician. Every one of these is a point measurement, and the filter coalescer's degradation between checks — the mechanism by which water actually gets through — is precisely what none of them observes continuously. The S10 agent monitors the release path rather than sampling it: a continuous laser particle counter on the line, live differential pressure and efficiency tracking on the coalescer, and an interlock that holds the release when either the particulate count or the separator performance leaves the envelope, acting in half a second. It also produces something the jar test never could — a continuous quality record for the whole batch rather than a snapshot of one jar, which is the difference between believing the batch was clean and being able to demonstrate it. In the same system S1 stops the octane giveaway by trimming the blend to specification in one second instead of three hours, and S4 watches the density gradient in the finished product tanks for the stratification that precedes a rollover. One row, and it holds both the highest safety exposure and one of the clearest recurring margin recoveries in the refinery.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "S10",
        gate: "Jet A-1 batch release hold on contamination",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Aviation safety. The agent holds the release autonomously; only the quality authority can override, and the override is recorded permanently against the batch."
      },
      {
        coord: "S2",
        gate: "Off-spec diverter valve actuation",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "Diverting on a near-infrared reading prevents the contamination of an entire export tank. Autonomous; the disposition of the diverted material is a human decision."
      },
      {
        coord: "S4",
        gate: "Tank stratification and rollover alarm",
        authority: "L3 — Autonomous with audit",
        note: "Continuous density and temperature gradient monitoring. Detection autonomous; mixing or transfer action is operational."
      },
      {
        coord: "S1",
        gate: "In-line blend recipe trim",
        authority: "L2 — Act with confirmation",
        note: "Optimiser trims toward specification continuously; the blend recipe and the giveaway target are confirmed by the blending lead, who owns the margin against the risk of a rack failure."
      },
      {
        coord: "S15",
        gate: "Refinery gain/loss mass reconciliation",
        authority: "L3 — Autonomous with audit",
        note: "Plant-wide mass balance runs autonomously and isolates physical loss from meter drift; the accounting treatment stays with finance."
      }
    ],

    honestLimit:
      "Blend property optimisation depends on non-linear blending models for octane and RVP, and those models are correlations fitted to historical component data. Introduce a genuinely new component — a different ethanol source, a new cracked stock, an unfamiliar cutter — and the correlation is extrapolating, which is exactly the circumstance in which a confident optimiser will trim too close to the limit and produce an off-spec batch. The right behaviour is for the agent to widen its own safety margin automatically when the blend recipe moves outside its validated component envelope, and to say so, rather than to hold the same aggressive target on unfamiliar ground. On jet fuel the honest position is stricter still: the agent adds continuous evidence to the release decision and it does not remove the requirement for the specified test regime."
  },

  /* =========================================================================
   * T // p20 — PROCESS SAFETY (PSM) & TECHNICAL INTEGRITY LEAD
   * The board's conscience: ₹773 Cr, and the only row whose subject matter
   * is the health of the protective layers every other row depends on.
   * ========================================================================= */
  p20: {
    narrativeStatus: "draft",


    accountableFor:
      "The Process Safety and Technical Integrity Lead owns the health of every protective layer across the site — the instrumented trips, the relief devices, the gas detection, the permit system, the management of change process and the physical integrity of static equipment. The role is distinguished from every other row on this board by its subject: it does not operate a process, it operates the defences that stop other processes from causing harm. Its central difficulty is that major accidents are almost never caused by the failure of one barrier. They are caused by the simultaneous degradation of several, each individually tolerable, none of them visible to the same person on the same day. The question the role exists to answer is how many protective barriers are degraded right now, at the same time — and whether anybody knows.",

    painPoints: [
      {
        quote: "A critical trip was bypassed for maintenance and stayed bypassed for fourteen days. The plant ran unguarded and the bypass was on a paper register.",
        coord: "T1"
      },
      {
        quote: "Three independent protection layers degraded at the same time on the same scenario. Each one was individually acceptable. Nobody was looking at the combination.",
        coord: "T2"
      },
      {
        quote: "A hot work permit was issued ten metres from an open hydrocarbon drain. Both approvals were correct in isolation.",
        coord: "T6"
      },
      {
        quote: "A gas detector drifted and failed silently. Two-out-of-three voting means nothing when one of the three has quietly stopped detecting.",
        coord: "T5"
      },
      {
        quote: "A pipe diameter change was approved by mechanical without anyone checking the relief capacity it invalidated.",
        coord: "T4"
      },
      {
        quote: "Incident action items sit open for eighteen months and the same near-miss happens again.",
        coord: "T14"
      }
    ],

    journey: {
      title: "Three Holes Line Up — Making the Swiss Cheese Visible While It Is Still Cheese",
      summary: "On a Tuesday, a level transmitter on a critical trip is bypassed for instrument maintenance. On Wednesday, a relief valve on the same vessel goes past its recertification date and stays in service under a temporary deferral. On Thursday, a gas detector in the same fire zone begins to drift low and does not annunciate. Each of these has a legitimate owner, a legitimate process, and an individually defensible justification. No single one is an emergency. Together they are three independent protection layers removed from the same accident scenario, and no document, screen or person in the organisation is currently looking at them as a set — the bypass lives in the DCS, the relief deferral in the maintenance system, and the detector health in the fire and gas panel. This is the anatomy of every major process accident in the industry's history, and the reason it recurs is not negligence but the absence of a single view. The T2 dynamic bow-tie monitor is that view: it maintains the barrier model for each major accident scenario as a live object, subscribes to the real state of every barrier from the systems that hold it, and computes cumulative risk per scenario in real time instead of at the next audit. When the third barrier degrades on Thursday, the scenario changes state and escalates — not because anything failed, but because too much has been removed at once. Alongside it T1 replaces the paper bypass register with a tracker that enforces eight-hourly executive re-authorisation, so a bypass expires by default rather than persisting by default. This row is worth ₹773 Cr on the board, and its real product is not a number: it is that the organisation can answer the question 'what is degraded right now' on any given afternoon.",
      provenAgent: null
    },

    signoffs: [
      {
        coord: "T1",
        gate: "SIS bypass authorisation and expiry",
        authority: "L3 — Autonomous with audit",
        note: "The agent enforces the expiry clock autonomously and escalates on lapse. Granting and extending a bypass is always a named human authorisation — the agent's role is to make forgetting impossible."
      },
      {
        coord: "T2",
        gate: "Cumulative barrier degradation escalation",
        authority: "L2 — Act with confirmation",
        note: "Agent computes live scenario risk and escalates when combined degradation crosses the threshold; the decision to constrain or shut down a unit belongs to the site leadership."
      },
      {
        coord: "T6",
        gate: "Hot work permit spatial deconfliction",
        authority: "L2 — Act with confirmation",
        note: "The GIS engine detects co-located hazardous work clashes and blocks issuance pending review. The permit itself is signed by the issuing authority."
      },
      {
        coord: "T5",
        gate: "Gas detector health and voting integrity",
        authority: "L4 — Autonomous, safety-instrumented",
        note: "A silently failed detector degrades the voting logic without any indication. Health monitoring alarms autonomously and marks the affected voting group as degraded."
      },
      {
        coord: "T15",
        gate: "DGMS/OISD regulatory audit package",
        authority: "L3 — Autonomous with audit",
        note: "Assembled autonomously into a cryptographically verifiable record. The submission is counter-signed by the site's technical authority."
      }
    ],

    honestLimit:
      "A dynamic bow-tie is only as truthful as its barrier model and its data feeds. If a barrier is not represented in the model it will never be reported as degraded, and the system will show green while the real gap sits outside its field of view — which is a more dangerous failure than the paper process it replaces, because the paper process never claimed completeness. Two disciplines are therefore non-negotiable: the model's coverage must be stated explicitly and reviewed as part of every PHA cycle, and the agent must distinguish clearly between a barrier that is confirmed healthy and a barrier from which it has simply received no data. Those are not the same state and must never be rendered the same colour."
  }

  /* =========================================================================
   * COVERAGE: 20 / 20 narrative packs authored.
   * -------------------------------------------------------------------------
   * All packs are DRAFTS grounded in the quantitative matrix — every pain
   * point and every sign-off gate cites a real coord in ENTERPRISE_MATRIX_DATA,
   * and the operator voice is written from the documented `vuln` for that
   * coord. They have NOT yet been validated against the real personas.
   *
   * Next step in the authoring lifecycle: SME interview per persona, then
   * replace drafted quotes with attributed ones and correct the sign-off
   * authority levels against how each organisation actually delegates.
   * ========================================================================= */

};
