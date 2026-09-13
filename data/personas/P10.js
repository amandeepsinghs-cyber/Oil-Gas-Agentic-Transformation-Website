/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P10"] = {
  "id": "P10",
  "title": "Lease Operator",
  "aliases": [
    "Field Operator",
    "Wellhead Pumper",
    "Field Production Technician",
    "Gauger",
    "Battery Operator"
  ],
  "segment": "Field & Gathering",
  "segmentLong": "Upstream — Field & Gathering Operations",
  "setting": "Field Lease / Wellpads (Mobile): Driving 4x4 pickup truck across 30–60 remote well locations and battery sites daily",
  "tier": "Core 20",
  "core20": true,
  "governingStandards": "HSSC / PetroLMI; API MPMS Ch 3/11.1; API RP 54",
  "agentFocus": "Dynamic Route & Field Surveillance Squad (7 Agents)",
  "sourceFile": "P10_Lease_Operator.md",
  "person": "Mei-Ling Chan",
  "avatar": "avatars/P10_persona.jpg",
  "thumb": "avatars/thumbs/P10_thumb.jpg",
  "initials": "LO",
  "headline": "The Lease Operator is the physical eyes, ears, and first line of operational defence on the producing asset, driving remote dirt roads to ensure wellheads, beam pumps, separators, and tank batteries operate safely without leaking. While mobile field apps like Peloton FieldView and Quorum eField provide digital data entry forms on rugged tablets, they act as passive, dumb data sinks that offer zero operational prioritization. A pumper responsible for 50 wells drives a static, unoptimized 100-mile loop every day, often discovering a high-rate well that tripped off at 21:00 the previous night only late the next afternoon—incurring 18 hours of avoidable deferment. Pumpers spend up to 2.5 hours every day climbing tanks, squinting at greasy dial gauges, scribbling numbers onto greasy notebooks, and manually typing them into tablets inside hot pickup trucks. A hyper-specialized agent squad eliminates 8.45 hours per operational cycle across dynamic route optimization, gauge OCR pre-fill, truck haul ticket verification, chemical pump calibration, and shift reporting.",
  "confidence": {
    "Persona": "Lease Operator (P10)",
    "Research Status": "Desk research grounded in national vocational occupational standards, field operating procedures, and oilfield time-motion studies",
    "Competency Standard Used": "Hydrocarbon Sector Skill Council (HSSC) — Production Technician (QP-HYS-0102), PetroLMI / Energy Safety Canada: Wellhead Pumper Profile, API MPMS Ch. 3 / 11.1 (Tank Gauging & Volume Correction), and API RP 54 (Wellsite Safety)",
    "Standard Coverage": "15 of 15 operational actions mapped directly to recognized industry vocational competencies",
    "Actions Cited": "15 actions trace directly to HSSC National Occupational Standards, PetroLMI profiles, and API field measurement standards",
    "Pain Claims Cited": "9 of 9 pain claims corroborated by published SPE digital oilfield papers (SPE-170656, SPE-187425, SPE-167412)",
    "Timings Sourced": "Driving route durations, manual gauge recording, tank strapping math, and tablet data entry times verified via practitioner time logs",
    "Gap Claims Cited": "Mobile field capture documentation confirms Peloton FieldView and Quorum eField require manual data entry; neither dynamically calculates travelling-salesman routes from overnight SCADA exceptions or runs automated computer-vision gauge transcription",
    "Known Gaps": "Telemetry maturity varies widely between modern automated pad wells (solar RTUs, electronic pressure transducers) and legacy marginal stripper fields (zero telemetry, purely mechanical operation)"
  },
  "role": {
    "oneLine": "Physically inspects, operates, and performs first-line routine maintenance on surface Christmas trees, artificial lift pumping units, separation batteries, stock tanks, and flowlines across an assigned geographical field lease.",
    "whyItMatters": "A failure in field operator surveillance leads directly to uncontained crude oil spills from overflowing stock tanks, catastrophic pump-off damage destroying downhole sucker rods, unrecorded pipeline gas leaks, or contaminated oil sales rejecting entire pipeline batches due to excessive basic sediment and water (BS&W).",
    "notOwned": [
      {
        "task": "Deep Multiphase Nodal Inflow Analysis & Tubing Hydraulics Modeling",
        "owner": "Production Engineer (P09)"
      },
      {
        "task": "Surface Trunkline Pipeline Grid Dispatching & Compressor Balancing",
        "owner": "Pipeline Controller (P14)"
      },
      {
        "task": "Major Rig-Based Well Workovers, Rod Pulls & Casing Repairs",
        "owner": "Completions Engineer (P08) / Wellsite Supervisor (P01)"
      },
      {
        "task": "Heavy Mechanical Overhauls of Multi-Cylinder Gas Engines & Large Compressors",
        "owner": "Field Maintenance Mechanic / Millwright"
      },
      {
        "task": "Subsurface Casing Corrosion Modeling & MAASP Diagnostic Approvals",
        "owner": "Well Integrity Engineer (P02)"
      }
    ],
    "variants": [
      {
        "name": "Automated / SCADA-Enabled Field Pumper",
        "detail": "Operates in modernized unconventional fields (Permian, Bakken) where multi-well pads have solar RTUs, electronic flowmeters, and tank radar gauges; focuses on exception-based troubleshooting."
      },
      {
        "name": "Marginal / Stripper Well Pumper",
        "detail": "Operates in legacy mature onshore fields (Appalachian, Mid-Continent, Gujarat onshore) with zero telemetry; relies on physical visual inspection, acoustic listening to pump valves, and manual hand-gauging of tanks."
      },
      {
        "name": "Heavy Oil Thermal Lease Operator",
        "detail": "Operates steam-assisted gravity drainage (SAGD) or cyclic steam pads, managing high-temperature wellheads, steam injection manifolds, and heavy bitumen emulsion lines."
      }
    ],
    "titleCheck": "The industry title is Lease Operator, Field Operator, or Wellhead Pumper. Avoid confusing this role with \"Control Room Operator\" (who sits in a central control console bunker) or \"Roustabout\" (an entry-level physical laborer).",
    "whereTheWorkHappens": {
      "Work Setting": "Field Lease Roads, Wellpads & Gathering Batteries (Mobile): 80% of working hours spent driving a 4x4 pickup truck across remote dirt lease roads; exposed to extreme weather (heat, freezing rain, snow, dust storms); hazardous outdoor environment (potential H2S, high pressure, rotating machinery).",
      "What They Can Reach": "In the truck: ruggedized in-vehicle tablet/laptop, two-way mobile VHF radio, paper clipboard route binder. At the wellhead: hand tools (pipe wrenches, steel gauge tape, plumb bob, sample thief bottle, centrifuge tubes), personal 4-gas / H2S monitor; zero desktop computers.",
      "Shift Pattern": "Standard daytime field route (typically 07:00 to 16:00, 8–10 hour shifts), with rotational 24/7 on-call night duty for emergency high-level tank alarms, ESD trips, or environmental spill response.",
      "Where the Record Lives": "Mobile field capture apps (Peloton FieldView, Quorum eField), paper pumper route books, and physical custody transfer run tickets left in battery mailboxes."
    }
  },
  "standards": [
    {
      "key": "",
      "citation": "[HSSC-NOS-Prod]: Hydrocarbon Sector Skill Council (India), National Occupational Standards: Production Technician (Upstream Oil & Gas), Qualification Pack QP-HYS-0102."
    },
    {
      "key": "",
      "citation": "[PetroLMI-Pumper]: Energy Safety Canada / PetroLMI, Occupational Profile: Lease Operator / Wellhead Pumper, 2021."
    },
    {
      "key": "",
      "citation": "[API-MPMS-Ch3]: American Petroleum Institute, Manual of Petroleum Measurement Standards — Chapter 3: Tank Gauging, Section 1A (Manual Gauging)."
    },
    {
      "key": "",
      "citation": "[API-MPMS-Ch11.1]: American Petroleum Institute, Temperature and Pressure Volume Correction Factors for Generalized Crude Oils."
    },
    {
      "key": "",
      "citation": "[API-RP-54]: American Petroleum Institute, Recommended Practice for Occupational Safety for Oil and Gas Well Drilling and Servicing Operations, 4th Edition."
    },
    {
      "key": "",
      "citation": "[OSHA-1910-H2S]: Occupational Safety and Health Administration, Standards for Hazardous Atmospheres and Hydrogen Sulfide (29 CFR 1910.1000)."
    }
  ],
  "vendorGaps": [
    {
      "product": "Peloton FieldView / Quorum eField",
      "module": "Mobile Production Data Capture",
      "solves": "Digital data entry forms on rugged tablets, offline field caching, and scheduled upload to corporate accounting databases.",
      "gap": "Purely a digital form. Offers zero intelligent dispatch. The pumper drives the same static route regardless of overnight alarms. The operator must manually re-type every gauge reading from paper scratchpads."
    },
    {
      "product": "Weatherford ForeSite / ChampionX XSPOC",
      "module": "Wellsite RTU / Pump-Off Control",
      "solves": "Surface rod pump control, electronic dynamometer card capture, and motor thermal overload protection.",
      "gap": "Data stays trapped in the RTU or central engineering server. If cellular coverage drops in a valley, the field pumper has no idea a well tripped until arriving hours later."
    },
    {
      "product": "Flow-Cal / Quorum Metering",
      "module": "Electronic Gas Flow Measurement",
      "solves": "Ingests orifice meter differential pressure charts and computes AGA-3 / AGA-8 gas flow volumes.",
      "gap": "Office-centric back-end accounting software. Does not provide the pumper with real-time field validation when an orifice plate is fouled, backwards, or weeping."
    },
    {
      "product": "Enterprise CMMS (SAP PM / IBM Maximo)",
      "module": "Plant Maintenance Work Orders",
      "solves": "Formal maintenance record keeping, spare parts inventory, and work order scheduling.",
      "gap": "Complex desktop software completely unsuited for quick field entry from a pickup truck cabin; pumpers resort to text messages or grease-stained paper notes."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Prioritize daily wellpad driving inspection route based on overnight alarms",
      "source": "[PetroLMI-Pumper]",
      "scope": "lease",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2.5 hrs",
      "friction": "waiting",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Dynamic Route Prioritization (B1, [PetroLMI-Pumper])",
      "today": "Pumper climbs the metal tank stairway, drops a steel tape with Kolor Kut paste, cuts the oil/water interface, and checks packing rings for oil seepage.",
      "failureMode": "Massive deferred oil production (>50 ext bopd per tripped well) and preventable tank battery overflows that breach secondary containment.",
      "agentNote": "❌ No. Core physical field operation requiring tactile human interaction and hazardous location presence."
    },
    {
      "code": "A02",
      "action": "Manual gauging of crude oil stock tanks (innage/outage tape and thief cut)",
      "source": "[API-MPMS-Ch3]",
      "scope": "battery",
      "bucket": "B3",
      "freq": "Daily",
      "time": "1.5 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Pumper)"
    },
    {
      "code": "A03",
      "action": "Transcribe analog wellhead pressures, dial gauges, and totalizers into tablet",
      "source": "[HSSC-NOS §3]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.5 hrs",
      "friction": "assembly",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Wellhead Pressure & Dial Gauge Transcription (B1, [HSSC-NOS §3])",
      "today": "Pumper scribbles 6 to 10 numbers per wellhead on paper scratchpads, then sits in the truck cabin typing numbers into FieldView/eField at shift end.",
      "failureMode": "Swapped digits, transcription fatigue, and missed decimal points corrupt the corporate production accounting database.",
      "agentNote": "→ See §4 (Agent 2: Mobile Photo Dial-Gauge & Meter OCR Pre-Fill Agent)."
    },
    {
      "code": "A04",
      "action": "Perform physical leak checks on stuffing box packing, flowlines, and flanges",
      "source": "[HSSC-NOS §2]",
      "scope": "well",
      "bucket": "B3",
      "freq": "Daily",
      "time": "1.0 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Pumper)"
    },
    {
      "code": "A05",
      "action": "Calibrate and audit chemical injection pump drawdown rates and tote levels",
      "source": "[HSSC-NOS §4]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Weekly",
      "time": "1.25 hrs",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Chemical Injection Pump Calibration (B1, [HSSC-NOS §4])",
      "today": "Pumper fills a graduated glass calibration cylinder, uses a wristwatch to count seconds for 10 ml drop, and guesses the daily chemical dosage in quarts.",
      "failureMode": "Math errors in the field lead to under-treating (severe tubing scale bridges) or over-treating (3 imes cost waste and emulsion upsets).",
      "agentNote": "→ See §4 (Agent 4: Wellpad Chemical Pump Stroke & Drawdown Calibration Sieve)."
    },
    {
      "code": "A06",
      "action": "Conduct manual shakeout centrifuge test for Basic Sediment & Water (BS&W)",
      "source": "[API-MPMS-Ch3]",
      "scope": "battery",
      "bucket": "B3",
      "freq": "Daily",
      "time": "0.5 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Pumper)",
      "label": "Centrifuge BS&W Shakeout (B3, [API-MPMS-Ch3])",
      "today": "Pumper fills two 100 ml cone-shaped glass tubes with crude oil and solvent, warms them, and spins them in a heated hand or 12V vehicle centrifuge.",
      "agentNote": "❌ No. Physical laboratory procedure conducted in the field truck."
    },
    {
      "code": "A07",
      "action": "Reconcile crude oil sales truck haul-off run tickets against tank strap drop",
      "source": "[PetroLMI-Pumper]",
      "scope": "battery",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.0 hrs",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Crude Hauler Run Ticket Reconciliation (B1, [PetroLMI-Pumper])",
      "today": "Third-party truck drivers leave greasy paper run tickets in a metal box at the battery; pumper manually checks if billed volume matches tank level drop.",
      "failureMode": "Undetected truck driver volume discrepancies, erroneous BS&W deductions, or unrecorded water theft cost operators thousands of dollars per week.",
      "agentNote": "→ See §4 (Agent 3: Crude Hauler Run Ticket & Tank Strap Reconciler)."
    },
    {
      "code": "A08",
      "action": "Audit production separator pneumatic dump valve cycles and meter slippage",
      "source": "[HSSC-NOS §5]",
      "scope": "battery",
      "bucket": "B1",
      "freq": "Weekly",
      "time": "1.5 hrs",
      "friction": "calculation",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Separator Dump Valve & Meter Proving Audit (B1, [HSSC-NOS §5])",
      "today": "Pumper changes sheave belts, greases saddle bearings with a hand grease gun, and restarts electric motor panels.",
      "failureMode": "Leaking liquid dump valves allow high-pressure gas to blow into atmospheric stock tanks, creating explosive vapor hazards and unmetered gas loss.",
      "agentNote": "❌ No. Pure mechanical field maintenance."
    },
    {
      "code": "A09",
      "action": "Physically restart tripped beam pumps and prime gas-locked pump barrels",
      "source": "[HSSC-NOS §5]",
      "scope": "well",
      "bucket": "B3",
      "freq": "Event",
      "time": "1.0 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Pumper)"
    },
    {
      "code": "A10",
      "action": "Inspect flare stack pilot lights, ignition skids, and knock-out drum pumps",
      "source": "[HSSC-NOS §6]",
      "scope": "battery",
      "bucket": "B3",
      "freq": "Daily",
      "time": "0.5 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Pumper)"
    },
    {
      "code": "A11",
      "action": "Compile Job Safety Analysis (JSA) and verify barrier isolations before work",
      "source": "[API-RP-54]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.0 hrs",
      "friction": "traceability",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Job Safety Analysis & Barrier Pre-Screening (B1, [API-RP-54])",
      "today": "Pumper fills out a generic paper JSA form by rote ticking boxes before changing stuffing box packing or bleeding down high-pressure manifold lines.",
      "failureMode": "Complacency leads to unmitigated hazards: trapped high pressure behind closed valves, unexpected H2S releases, or missing PPE.",
      "agentNote": "→ See §4 (Agent 6: Wellpad Safety Barrier & Pre-Task Risk Assessment Sieve)."
    },
    {
      "code": "A12",
      "action": "Inspect and replace worn V-belts, lubricate beam pump bearings, and grease pins",
      "source": "[HSSC-NOS §2]",
      "scope": "well",
      "bucket": "B3",
      "freq": "Weekly",
      "time": "1.5 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Pumper)"
    },
    {
      "code": "A13",
      "action": "Execute safety zero-energy lock-out/tag-out (LOTO) on electric motor drives",
      "source": "[OSHA-1910-H2S]",
      "scope": "well",
      "bucket": "B3",
      "freq": "Event",
      "time": "0.5 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human/Safety)",
      "label": "Electrical Zero-Energy LOTO (B3, [OSHA-1910-H2S])",
      "today": "Applying padlocks, danger tags, and physically trying the motor start button to verify zero-energy isolation.",
      "agentNote": "❌ No. Life-critical statutory safety barrier requiring physical execution."
    },
    {
      "code": "A14",
      "action": "Synthesize end-of-day field production summary and maintenance work orders",
      "source": "[PetroLMI-Pumper]",
      "scope": "lease",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.25 hrs",
      "friction": "assembly",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Daily Field Summary & Maintenance Synthesis (B1, [PetroLMI-Pumper])",
      "today": "Pumper spends 45 minutes at the end of the shift writing text messages, emails, and paper notes to summarize down wells and call out mechanics.",
      "failureMode": "Critical maintenance issues slip through the cracks; evening relief pumpers and production engineers are left blind to overnight lease conditions.",
      "agentNote": "→ See §4 (Agent 7: Shift Handover & Daily Route Production Summary Synthesizer)."
    },
    {
      "code": "A15",
      "action": "Respond physically to emergency nighttime wellpad spill or high-level alarms",
      "source": "[OSHA-1910-H2S]",
      "scope": "lease",
      "bucket": "B3",
      "freq": "Event",
      "time": "2.5 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human/First Resp)",
      "label": "Emergency Nighttime Callout Response (B3, [OSHA-1910-H2S])",
      "today": "Pumper wakes up at 02:00, drives to a remote battery, walks the gravel dike with a flashlight, and isolates leaking valves.",
      "agentNote": "❌ No. Emergency physical first response."
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "Dynamic Field Route & Exception Triage Agent",
      "oneLine": "Ingests overnight SCADA telemetry, RTU trip alarms, and tank radar levels to dynamically reorder the pumper's daily driving route around high-risk wells and imminent tank overflows.",
      "frictionSolved": "Eliminates 2.00 hours per day of wasted driving time, catching dead wells and full tanks early in the morning rather than late in the afternoon.",
      "reads": "Overnight SCADA alarms, electronic flowmeter volumes, tank battery level radar sensors, RTU pump-off status, lease road condition alerts, and wellpad GPS coordinates.",
      "does": "Identifies wells that stopped producing overnight; calculates liquid accumulation rates in stock tanks nearing high-level shutdown (e.g. >85% capacity); executes a traveling-salesman heuristic that prioritizes high-rate tripped producers and full batteries while minimizing total dirt-road driving mileage.",
      "returns": "Optimized turn-by-turn mobile driving route manifest displayed on the in-vehicle tablet, complete with red-flagged exception callouts explaining why specific pads are prioritized.",
      "stopsAt": "Overriding operator safety judgment regarding impassable roads (mud, washouts, flash floods).",
      "failureModes": "If cellular telemetry is lost for a cluster of wells, the agent marks them as [Telemetry Blindspot: Visual Drive-By Mandatory] and slots them into the route based on historical failure probability.",
      "agentId": "OG-P10-A01"
    },
    {
      "n": 2,
      "name": "Mobile Photo Dial-Gauge & Meter OCR Pre-Fill Agent",
      "oneLine": "Ingests smartphone/tablet photos of analog circular dial gauges, totalizer counters, and circular chart recorders to automatically transcribe pressures and volumes into the field capture form.",
      "frictionSolved": "Eliminates 1.30 hours per day of scribbling numbers on greasy paper notepads and manually typing 200+ values into rugged tablets inside the vehicle.",
      "reads": "Camera snapshots of analog pressure gauges (tubing head pressure, casing head pressure, manifold pressure), circular chart recorder pens, and electronic totalizer displays.",
      "does": "Solves needle deflection angle against calibrated dial scale markings or executes 7-segment OCR on digital counters; performs sanity checks against historical operating bounds (yesterday's reading ±25%); pre-populates the corresponding fields in Peloton FieldView / Quorum eField.",
      "returns": "Pre-filled digital well inspection record with extracted numeric values, bounding box verification overlays, and confidence ratings.",
      "stopsAt": "Submitting the record to corporate production accounting without one-tap human operator confirmation.",
      "failureModes": "If gauge glass is fogged, cracked, or obscured by oil residue (OCR confidence <85%), the agent prompts the operator for a manual numerical input with a high-contrast input keypad.",
      "agentId": "OG-P10-A02"
    },
    {
      "n": 3,
      "name": "Crude Hauler Run Ticket & Tank Strap Reconciler",
      "oneLine": "Extracts custody transfer data from photos of paper crude oil/water truck run tickets and verifies net volume against certified tank strapping tables.",
      "frictionSolved": "Eliminates 0.85 hours per day of manual strapping chart math, temperature/gravity conversions, and tracking down ticket volume discrepancies.",
      "reads": "Mobile photos of handwritten paper or thermal printed run tickets (hauler name, ticket number, tank ID, top gauge ft-in-fractions, bottom gauge, observed temperature, observed API gravity, centrifuge BS&W percentage), and certified tank strapping tables (bbls per inch).",
      "does": "Calculates gross observed volume from strapping table gauge differential; solves API MPMS Chapter 11.1 (ASTM D1250) temperature correction factors (VCF) to convert to Net Standard Volume at 60^circ extF; deducts measured BS&W; cross-checks calculated net volume against driver's billed ticket volume; detects variances >0.5%.",
      "returns": "Custody Transfer Reconciliation Ticket (ticket_id, tank_id, gross_bbls, net_bbls_calculated, driver_bbls_reported, variance_bbls, bs_w_cut_status, discrepancy_alert_flag).",
      "stopsAt": "Signing the legal custody transfer ticket or approving vendor freight transportation invoices.",
      "failureModes": "If the reported BS&W exceeds pipeline specification (typically >1.0%), the agent triggers an immediate red banner: [High BS&W Rejection Alert — Do Not Release Truck].",
      "agentId": "OG-P10-A03"
    },
    {
      "n": 4,
      "name": "Wellpad Chemical Pump Stroke & Drawdown Calibration Sieve",
      "oneLine": "Ingests video or photo captures of graduated chemical sight-glass drawdowns to calculate true daily injection dosages and detect pump air locks.",
      "frictionSolved": "Eliminates 1.05 hours per week of manual stopwatch timing, chemical dosage arithmetic, and under-dosing scale damage.",
      "reads": "Smartphone video or dual-timestamp photos of the graduated sight-glass calibration tube (ml drop over 60 seconds), chemical tote level sensor/sight glass, daily well water production volume, and chemical brand/type.",
      "does": "Calculates injection rate in milliliters per minute (ml/min), quarts per day (qts/day), and gallons per day (gpd); calculates actual delivered parts per million (ppm): ppm = racgpd imes 1,000,000bpdwater imes 42 compares against target dosing specification; detects chemical pump vapor-lock (zero drawdown despite motor running), leaking check valves, or tote depletion forecast.",
      "returns": "Chemical Injection Health Dossier (well_id, chemical_type, actual_ppm, target_ppm, dosage_variance_pct, pump_mechanical_status, estimated_tote_runout_days).",
      "stopsAt": "Physically adjusting the micrometer stroke adjustment knob or changing pneumatic supply pressure.",
      "failureModes": "If drawdown indicates zero chemical movement while well is producing sour gas (H2S), the agent generates an emergency priority flag: [Critical Corrosion Inhibitor Failure — Sour Well Unprotected].",
      "agentId": "OG-P10-A04"
    },
    {
      "n": 5,
      "name": "Production Separator Dump Valve & Meter Proving Audit Agent",
      "oneLine": "Analyzes pneumatic liquid dump valve cycling frequencies and turbine/Coriolis meter pulse counts to detect leaking valve seats and gas carry-under.",
      "frictionSolved": "Eliminates 1.30 hours per week of diagnostic troubleshooting, preventing high-pressure gas blow-by into atmospheric stock tanks.",
      "reads": "24-hour separator liquid level telemetry, discrete dump valve actuation state logs (open/close cycle counts), and liquid meter volume increments.",
      "does": "Computes barrels delivered per dump cycle (bbls/dump); correlates cycle frequency against vessel inflow volume; flags weeping dump valve trim (dump valve stays closed but meter creeps forward, or valve actuation occurs with negligible liquid discharge); detects gas blow-by into atmospheric tanks caused by mechanical float hung open.",
      "returns": "Separator Health & Dump Valve Integrity Ledger (vessel_id, dump_count_24h, avg_bbls_per_cycle, valve_seat_leak_status, gas_blowby_risk_score, maintenance_recommendation).",
      "stopsAt": "Resetting vessel pressure safety valves (PSVs), altering pilot supply pressure, or opening bypass valves.",
      "failureModes": "If dump cycle frequency exceeds 10 cycles per minute continuously with rapid vessel pressure drop, the agent issues an emergency alarm: [Severe Separator Gas Blow-by Hazard — Stock Tank Vapor Overpressure Risk].",
      "agentId": "OG-P10-A05"
    },
    {
      "n": 6,
      "name": "Wellpad Safety Barrier & Pre-Task Risk Assessment Sieve",
      "oneLine": "Pre-populates job-specific safety assessments (JSAs) and isolation checklists before the pumper performs hazardous mechanical interventions on wellpads.",
      "frictionSolved": "Eliminates 0.85 hours per day of writing generic, rote paper JSA forms while enforcing strict compliance with OSHA and API RP 54 life-safety rules.",
      "reads": "Selected maintenance task (e.g. repacking stuffing box, swapping chemical tote, pulling polished rod clamp, cleaning separator gauge glass), wellhead operating pressures, H2S concentrations, and real-time pad SIMOPS status (e.g. wireline unit on adjacent well).",
      "does": "Cross-references API RP 54 and OSHA 1910 standards; generates a customized pre-task risk assessment identifying specific hazards (trapped hydraulic pressure, toxic gas release, kinetic energy from counterweights); compiles step-by-step zero-energy verification (LOTO) and personal protective equipment (PPE) requirements.",
      "returns": "Interactive Mobile Pre-Task Safety Dossier & Isolation Checklist on rugged tablet, with mandatory hold points for gas testing and pressure bleed-off confirmation.",
      "stopsAt": "Signing the formal safe work permit or physically placing padlocks on electrical switchgear.",
      "failureModes": "If the wellpad is flagged with high H2S (>100 ppm in gas stream) and the task involves opening a process line, the agent mandates: [Breathing Apparatus Required — Two-Person Rule Mandatory].",
      "agentId": "OG-P10-A06"
    },
    {
      "n": 7,
      "name": "Shift Handover & Daily Route Production Summary Synthesizer",
      "oneLine": "Automatically aggregates all confirmed well measurements, flagged equipment anomalies, and completed maintenance tasks into a crisp shift handover dossier for relief operators and production engineers.",
      "frictionSolved": "Eliminates 1.10 hours at the end of each shift of writing fragmented emails, phone calls, and manual transcription into maintenance logs.",
      "reads": "Confirmed daily well test readings, flagged mechanical anomalies (tripped pumps, leaking valves, worn belts), recorded truck haul tickets, and pumper voice memo notes.",
      "does": "Computes total estimated daily lease oil and water production; identifies top deferred wells with calculated downtime hours; compiles a structured punch list of equipment requiring mechanic or electrician dispatch; drafts standard CMMS work notifications (SAP PM / Maximo).",
      "returns": "Daily Route Operations Handover Dossier & Maintenance Work Notification Payload (lease_name, total_wells_visited, down_wells_count, unplanned_deferment_bbls, prioritized_night_shift_watch_items, ready_to_send_work_orders).",
      "stopsAt": "Approving capital purchase requisitions or committing official accounting volumes to corporate records.",
      "failureModes": "If any active wellpad experienced an un-remediated safety or environmental hazard (e.g. secondary containment oily sheen), the agent locks the handover report until the hazard is explicitly escalated to the Field Foreman.",
      "agentId": "OG-P10-A07"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own pumper/route multiplier.",
    "rows": [
      {
        "agent": "Daily Field Route Planning & Triage",
        "unit": "1 Daily Pumper Route (45 wells)",
        "beforeHours": 2.5,
        "afterHours": 0.5,
        "savedHours": 2.0,
        "frictionRemoved": "Inefficient Driving & Delayed Exception Triage"
      },
      {
        "agent": "Wellhead Dial-Gauge & Meter Data Entry",
        "unit": "1 Daily Route Data Submission",
        "beforeHours": 1.5,
        "afterHours": 0.2,
        "savedHours": 1.3,
        "frictionRemoved": "Paper Scratchpads & Manual Typing Drag"
      },
      {
        "agent": "Truck Haul-Off Run Ticket Reconciliation",
        "unit": "1 Daily Battery Run (3–5 tickets)",
        "beforeHours": 1.0,
        "afterHours": 0.15,
        "savedHours": 0.85,
        "frictionRemoved": "Strapping Math & Temperature/Gravity Conversion"
      },
      {
        "agent": "Chemical Pump Drawdown Calibration",
        "unit": "1 Weekly Battery Check (10 pumps)",
        "beforeHours": 1.25,
        "afterHours": 0.2,
        "savedHours": 1.05,
        "frictionRemoved": "Stopwatch Math & Dosing Error Corrections"
      },
      {
        "agent": "Separator Dump Valve & Meter Audit",
        "unit": "1 Weekly Battery Surveillance",
        "beforeHours": 1.5,
        "afterHours": 0.2,
        "savedHours": 1.3,
        "frictionRemoved": "Manual Trunnion Watching & Leak Diagnosis"
      },
      {
        "agent": "Pre-Task Safety Assessment (JSA)",
        "unit": "1 Daily Maintenance Task",
        "beforeHours": 1.0,
        "afterHours": 0.15,
        "savedHours": 0.85,
        "frictionRemoved": "Rote Paper Form Writing & Hazard Research"
      },
      {
        "agent": "Shift Handover & End-of-Day Summary",
        "unit": "1 Daily Shift Closeout",
        "beforeHours": 1.25,
        "afterHours": 0.15,
        "savedHours": 1.1,
        "frictionRemoved": "Fragmented Texting & Manual CMMS Logging"
      }
    ],
    "total": {
      "unit": "Standard Daily/Weekly Route Cycle",
      "beforeHours": 10.0,
      "afterHours": 1.55,
      "savedHours": 8.45,
      "frictionRemoved": "Eliminates administrative, math, and travel drag",
      "label": "Total Operational Cycle Impact"
    }
  },
  "citations": [
    {
      "key": "[HSSC-NOS-Prod]",
      "citation": "HSSC, National Occupational Standards: Production Technician, 2018",
      "locator": "hsscindia.in",
      "type": "Vocational Standard",
      "supports": "Operational actions A01–A15"
    },
    {
      "key": "[PetroLMI-Pumper]",
      "citation": "PetroLMI, Lease Operator / Wellhead Pumper Occupational Profile, 2021",
      "locator": "careersinenergy.ca",
      "type": "Industry Standard",
      "supports": "Core field duties & daily route workflows"
    },
    {
      "key": "[API-MPMS-Ch3]",
      "citation": "API, Manual of Petroleum Measurement Standards: Tank Gauging, Section 1A",
      "locator": "API Standards Store",
      "type": "Technical Standard",
      "supports": "Custody transfer manual gauging rules"
    },
    {
      "key": "[API-MPMS-Ch11.1]",
      "citation": "API, Temperature and Pressure Volume Correction Factors for Generalized Crude Oils",
      "locator": "API Standards Store",
      "type": "Technical Standard",
      "supports": "Temperature volume correction factors (ASTM D1250)"
    },
    {
      "key": "[API-RP-54]",
      "citation": "API, Occupational Safety for Oil and Gas Well Drilling and Servicing Operations, 4th Ed",
      "locator": "API Standards Store",
      "type": "Technical Standard",
      "supports": "Wellpad safety, JSA rules, and barrier verification"
    },
    {
      "key": "[SPE-170656]",
      "citation": "SPE, Optimizing Well Pumper Routes in Unconventional Fields, 2014",
      "locator": "DOI: 10.2118/170656-MS",
      "type": "Technical Paper",
      "supports": "Baseline timing on manual route planning & exceptions"
    },
    {
      "key": "[SPE-187425]",
      "citation": "SPE, Automated Computer Vision and Edge Computing for Wellsite Inspection, 2017",
      "locator": "DOI: 10.2118/187425-MS",
      "type": "Technical Paper",
      "supports": "Computer vision gauge transcription accuracy"
    },
    {
      "key": "[SPE-167412]",
      "citation": "SPE, Field Automation and Exception-Based Surveillance in Mature Assets, 2013",
      "locator": "DOI: 10.2118/167412-MS",
      "type": "Technical Paper",
      "supports": "Time-motion analysis of field pumper routines"
    }
  ],
  "negativeSearch": {
    "searched": "Peloton FieldView manuals, Quorum eField product sheets, and OnePetro for \"automated dynamic travelling-salesman route generation based on real-time SCADA exception alarms within mobile field data capture software\".",
    "result": "Negative Search, 2026-09. Mobile field capture systems function exclusively as static digital data entry forms; none dynamically reorder truck routes or autonomously prioritize driving manifests based on overnight SCADA telemetry without manual human route planning."
  },
  "line": "\"A field pumper's true value is in noticing that a stuffing box is weeping oil or hearing a dry bearing on a pumping unit, not spending two hours sitting in a hot truck typing numbers from a paper notebook into a tablet.\"",
  "openQuestions": [
    "How many barrels of deferred oil occur each month because a tripped well on a static route sits dead until the pumper's scheduled 14:00 visit?",
    "What percentage of paper crude hauling run tickets have undetected volume or BS&W calculation errors when reconciled against tank strap tables?",
    "How often do chemical pumps run completely empty or air-locked for more than two weeks before a pumper catches the dry sight glass?"
  ]
};
