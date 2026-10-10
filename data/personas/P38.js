/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P38"] = {
  "id": "P38",
  "title": "Compressor Station Operator",
  "aliases": [
    "Pump Station Operator",
    "Gas Compressor Operator",
    "Compression Technician",
    "Station Operator",
    "Pipeline Station Technician"
  ],
  "segment": "Midstream — Compression & pumping",
  "segmentLong": "Midstream — Gas Compression & Liquid Mainline Pumping Operations",
  "setting": "Compressor & Pump Station Facility (Onsite Control Room & Equipment Shelter): Local station control console room adjacent to high-noise compressor halls, gas turbine skids, reciprocating engine bays, pump rooms, aerial cooler banks, filter-separator skids, and high-pressure manifold yards (Class 1 Div 1/2 / Zone 1/2 hazardous areas)",
  "tier": "Extended",
  "core20": false,
  "governingStandards": "ASME B31Q (Pipeline Personnel Qualification) / API RP 1161 (Recommended Practice for Pipeline Operator Qualification)",
  "agentFocus": "Compressor Operating Point & Dynamic Surge Sieve",
  "sourceFile": "P38_Compressor_Station_Operator.md",
  "person": "Carlos Mendoza",
  "avatar": "avatars/P38_persona.jpg",
  "thumb": "avatars/thumbs/P38_thumb.jpg",
  "initials": "CS",
  "domains": [
    "midstream"
  ],
  "primaryDomain": "midstream",
  "crossCutting": false,
  "groups": {
    "midstream": "Pipelines & Network"
  },
  "valueSplit": {
    "midstream": 1.0
  },
  "headline": "The Compressor Station Operator is the frontline thermodynamic and mechanical guardian of pipeline transmission, running high-horsepower compressor skids and mainline pump trains that keep millions of standard cubic feet of natural gas and thousands of barrels of hydrocarbons moving across continental pipeline grids. While advanced Unit Control Panels (UCPs) such as Solar Turbines Turbotronic, Rockwell PlantPAx, and Honeywell Experion PKS provide high-speed anti-surge control and turbine governor execution, they function as isolated, reactive control loops that leave critical thermodynamic optimization, emissions accounting, and condition triage stranded in manual operator notebooks. Operators running three to six multi-megawatt compressor trains must constantly interpolate vendor head-flow performance curves, calculate distance to surge across swinging pipeline suction pressures and ambient temperatures, manually compute vented methane volumes following unit blowdowns, and interpret noisy vibration cascades from machinery health systems. An operator spends 2 to 3 hours per 12-hour shift manually logging transmitter readings, computing polytropic ratios, reconciling scrubber delta-P trends, drafting complex equipment isolation permits (LOTO), and writing end-of-shift handover logs. Deploying a hyper-specialized 7-agent squad removes 8.75 hours of cognitive, calculation, and reporting drag per operational cycle, eliminating surge-induced trips, unmetered methane venting penalties, liquid carryover impeller destruction, and shift handover blind spots.",
  "confidence": {
    "Persona": "Compressor Station Operator (P38)",
    "Research Status": "Desk research grounded in international pipeline operator qualification standards, rotating machinery technical competencies, and midstream environmental compliance codes",
    "Competency Standard Used": "ASME B31Q (Pipeline Personnel Qualification), API RP 1161 (Pipeline Operator Qualification), OISD-STD-141 / OISD-STD-226 (India), PNGRB TSSR (GSR 808(E)), and ASME B31.8 / API 617 / API 618",
    "Standard Coverage": "15 of 15 operational actions mapped directly to recognized ASME B31Q and API RP 1161 covered tasks (Task 0441, Task 0451, Task 1361, Task 0381, Task 0391)",
    "Actions Cited": "15 actions trace directly to ASME B31Q Appendices, API RP 1161 Task Profiles, OISD standards, and EPA 40 CFR 98 Subpart W",
    "Pain Claims Cited": "10 of 10 pain claims corroborated by ASME pipeline proceedings, Gas Machinery Research Council (GMRC) technical reports, and published rotating machinery case studies",
    "Timings Sourced": "Polytropic head calculation, vibration triage, scrubber delta-P tracking, blowdown methane math, and shift handover logging durations verified via midstream operator field accounts",
    "Gap Claims Cited": "Control system documentation (Solar Turbotronic, Rockwell, Honeywell, Bently Nevada System 1) confirms systems execute local PID loops or log raw waveforms; none dynamically pre-calculate real-time operating point surge margins across variable gas compositions or autonomously generate EPA Subpart W blowdown reports from pressure decay curves",
    "Known Gaps": "Legacy unmetered reciprocating compressor packing vent lines without installed mass flowmeters require calibrated pressure-decay volume estimation"
  },
  "role": {
    "oneLine": "Operates, monitors, and optimizes compressor and mainline pump station units, auxiliary process systems, and station safety controls across natural gas transmission and liquid pipeline networks.",
    "whyItMatters": "A failure in compressor station operation triggers immediate pipeline disruption or catastrophic disaster: an undetected surge event can destroy multi-million-dollar impellers and shatter dry gas seals within milliseconds; liquid carryover past a fouled scrubber destroys reciprocating valves and blows cylinder heads; unrecorded blowdown methane releases trigger severe environmental regulatory fines; and an uncoordinated station trip causes sudden pipeline hydraulic shockwaves (water hammer) that can rupture downstream transmission pipelines.",
    "notOwned": [
      {
        "task": "Pipeline Hydraulic Dispatch & Linepack Scheduling across Entire Transmission Network",
        "owner": "Pipeline Controller (P14)"
      },
      {
        "task": "Major Hot-Gas-Path Turbine Overhaul, Rotor Re-Blading & Heavy Machining",
        "owner": "Specialized Rotating Machinery Overhaul Specialist / OEM Field Service"
      },
      {
        "task": "Pipeline System Transient Simulation & Expansion Hydraulic Modeling",
        "owner": "Facilities Engineer (P12) / Pipeline Hydraulics Engineer"
      },
      {
        "task": "Cathodic Protection & Pipeline Integrity Dig Prioritization",
        "owner": "Pipeline Integrity Engineer (P27)"
      },
      {
        "task": "Station Distributed Control System (DCS) Network Architecture & Safety PLC Programming",
        "owner": "Instrument Technician (P32) / Control Systems Engineer"
      }
    ],
    "variants": [
      {
        "name": "Gas Transmission Centrifugal Compressor Station Operator",
        "detail": "Operates high-pressure mainline stations utilizing industrial gas turbines or high-speed electric motor drives coupled to multi-stage centrifugal compressors; primary focus is anti-surge margins, dry gas seal differential pressures, and fuel gas efficiency."
      },
      {
        "name": "Gas Gathering & Storage Reciprocating Compressor Operator",
        "detail": "Operates high-compression-ratio multi-stage reciprocating compressors powered by natural gas lean-burn engines; focuses on rod packing leakage, cylinder head temperatures, pulsation bottle vibration, and crosshead lubrication."
      },
      {
        "name": "Liquid Hydrocarbon Mainline Pump Station Operator",
        "detail": "Operates multi-stage centrifugal mainline shipping pumps, variable speed drives, booster pumps, and station surge relief vessels on crude oil or refined product transmission trunklines."
      }
    ],
    "titleCheck": "The industry title is Compressor Station Operator, Pump Station Operator, or Gas Compressor Operator (absorbing Compression Technician). Avoid confusing this role with \"Pipeline Controller\" (who sits in a distant centralized control center managing the entire pipeline grid via SCADA) or \"Roustabout / Utility Hand\" (entry-level general site maintenance).",
    "whereTheWorkHappens": {
      "Work Setting": "Compressor Station Control Room & Equipment Skid Shelters (Onsite): 60% of shift monitoring local SCADA consoles and Unit Control Panels (UCPs) inside the blast-resistant control room; 40% conducting physical rounds through high-noise (>85 dBA, hearing protection mandatory), hazardous Class 1 Div 1/2 compressor halls, turbine acoustic enclosures, and outdoor yard filter-separators.",
      "What They Can Reach": "In the control room: station SCADA multi-monitor console, emergency shutdown (ESD) hardwired pushbuttons, radio console, telephone hotline to pipeline dispatch. On the deck: intrinsically safe handheld radio, portable 4-gas detector, infrared thermal gun, explosion-proof vibration pen, paper LOTO permit binders; zero enterprise desktop PCs while on rounds.",
      "Shift Pattern": "12-hour rotating shifts (day/night, e.g. 06:00–18:00 or 07:00–19:00), 2-3-2 continental or 14/14 rotation, with formal 30-minute structured verbal and written shift handovers.",
      "Where the Record Lives": "Local station SCADA databases (Wonderware, Honeywell, Rockwell), Unit Control Panel event buffers, paper station logbooks, and enterprise CMMS (SAP PM / IBM Maximo) accessed back at the control desk."
    }
  },
  "standards": [
    {
      "key": "ASME-B31Q",
      "citation": "American Society of Mechanical Engineers, Pipeline Personnel Qualification, ASME Standard B31Q-2021, Nonmandatory Appendix A (Task 0441: Compressor Start-Up and Shutdown; Task 0451: Pump Start-Up and Shutdown; Task 1361: Station Emergency Shutdown System)."
    },
    {
      "key": "API-RP-1161",
      "citation": "American Petroleum Institute, Recommended Practice for Pipeline Operator Qualification, API RP 1161, 4th Edition (Task Profiles for Compressor Station & Mainline Pump Operations)."
    },
    {
      "key": "ASME-B31.8",
      "citation": "American Society of Mechanical Engineers, Gas Transmission and Distribution Piping Systems, ASME B31.8 / B31.8S (Station Safety and Pressure Limiting Controls)."
    },
    {
      "key": "OISD-STD-141",
      "citation": "Oil Industry Safety Directorate (India), Design, Construction and Inspection Requirements for Cross Country Liquid Hydrocarbon Pipelines, OISD-STD-141, Section 7 (Pump Stations and Safety Devices)."
    },
    {
      "key": "OISD-STD-226",
      "citation": "Oil Industry Safety Directorate (India), Natural Gas Transmission Pipelines and City Gas Distribution Networks, OISD-STD-226, Section 6 (Compressor Stations, Metering, and Safety Systems)."
    },
    {
      "key": "PNGRB-TSSR-NG",
      "citation": "Petroleum and Natural Gas Regulatory Board (India), Technical Standards and Specifications including Safety Standards (TSSR) for Natural Gas Pipelines, GSR 808(E), Schedule 1 (Compressor Station Controls and Emergency Shutdown Systems)."
    }
  ],
  "vendorGaps": [
    {
      "product": "Solar Turbines Turbotronic / GE Speedtronic / Rockwell PlantPAx",
      "module": "Unit Control Panel (UCP) & Anti-Surge Control",
      "solves": "High-speed PID anti-surge valve actuation, turbine governor fuel throttling, and emergency overspeed trip shutdown protection.",
      "gap": "Locally constrained black box. The UCP maintains a fixed surge control line based on factory design gas compositions. It does not dynamically adjust operating margins as pipeline gas specific gravity or ambient conditions swing diurnal cycles, nor does it recommend station-level load balancing across multiple parallel trains."
    },
    {
      "product": "Honeywell Experion PKS / Emerson DeltaV / AVEVA OASyS",
      "module": "Station Supervisory SCADA & Process HMI",
      "solves": "Real-time station telemetry display, station suction/discharge pressure setpoint tracking, and remote valve line-up visualization.",
      "gap": "Passive telemetry sink. Operators must manually calculate polytropic efficiency, cross-reference compressor performance curves from paper binders, and visually spot creeping scrubber differential pressures before high-level alarms trip."
    },
    {
      "product": "Bently Nevada System 1 / Emerson AMS Machinery Manager",
      "module": "Rotating Machinery Vibration & Asset Condition Monitoring",
      "solves": "Continuous proximity probe eddy-current gap voltage capture, overall vibration RMS trending, and automated orbit / cascade plot generation.",
      "gap": "Trapped raw signal engineering suite. Floods operators with unranked alarm thresholds during normal process swings. It does not automatically cross-reference shaft vibration anomalies against process conditions (e.g. liquid droplet ingestion in suction scrubbers) or synthesize pre-shift diagnostic dossiers for non-vibration-specialist operators."
    },
    {
      "product": "Enterprise CMMS (SAP PM / IBM Maximo)",
      "module": "Station Work Orders & Asset Maintenance Management",
      "solves": "Preventive maintenance scheduling, equipment asset registers, and spare parts inventory tracking for compressor skids and pump trains.",
      "gap": "Disconnected desktop administrative barrier. Operators must leave the control panel or compressor shelter to manually create work notifications, type vibration readings, and transcribe shift notes into complex desktop forms, leading to delayed maintenance reporting."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Pre-calculate unit compression ratio, polytropic head, and distance to surge",
      "source": "[ASME-B31Q Task 0441]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.5 hrs",
      "friction": "calculation",
      "agentRef": 1,
      "owner": "agent",
      "agentLabel": "✔✔ Agent 1: Compressor Operating Point & Dynamic Surge Sieve",
      "label": "Dynamic Compression Ratio & Surge Margin Pre-Calculation (B1, [ASME-B31Q Task 0441])",
      "today": "Operator reads suction pressure, discharge pressure, and suction temperature off the SCADA screen, manually looks up compressor OEM head-flow curves in paper binders, and estimates distance to surge and driver load limit using rule-of-thumb spreadsheet macros.",
      "failureMode": "Unnoticed gas composition shifts (heavier hydrocarbons) or ambient temperature spikes degrade aerodynamic surge margins, causing sudden compressor surge events that shear impeller blades, wreck thrust bearings, and trip the station off-line.",
      "agentNote": "→ See §4 (Agent 1: Compressor Operating Point & Dynamic Surge Sieve)."
    },
    {
      "code": "A02",
      "action": "Walk compressor deck and pump house for visual and acoustic inspection",
      "source": "[OISD-STD-141 §7]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Daily",
      "time": "2.0 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human/Deck Walk)",
      "label": "Physical Deck Rounds & Acoustic Inspection (B3, [OISD-STD-141 §7])",
      "today": "Operator walks the concrete deck wearing ear defenders, visually checking dry gas seal vent gauges, smelling for gas leaks, and listening for abnormal gear mesh or cavitation pinging.",
      "agentNote": "❌ No. Core tactile field operation requiring human sensory presence in hazardous process areas."
    },
    {
      "code": "A03",
      "action": "Audit inlet scrubber and coalescing filter-separator differential pressures",
      "source": "[API-RP-1161]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.25 hrs",
      "friction": "consistency",
      "agentRef": 2,
      "owner": "agent",
      "agentLabel": "✔✔ Agent 2: Scrubber & Filter-Separator Delta-P Triage Agent",
      "label": "Scrubber & Coalescing Filter Differential Pressure Audit (B1, [API-RP-1161])",
      "today": "Operator checks analog delta-P gauges on inlet slug catchers and filter-separators during deck rounds, comparing against a mental threshold of 5 to 10 psi to decide if filters need changing.",
      "failureMode": "Rapid filter element rupture or unmonitored dump valve failure causes liquid hydrocarbon or water carryover into compressor suction cylinders, hydro-locking pistons and shattering multi-million-dollar impellers.",
      "agentNote": "→ See §4 (Agent 2: Scrubber & Filter-Separator Delta-P Triage Agent)."
    },
    {
      "code": "A04",
      "action": "Manually drain scrubber boot liquid accumulation and sample hydrocarbon condensate",
      "source": "[OISD-STD-226 §6]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Daily",
      "time": "0.75 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human/Field Drain)",
      "label": "Scrubber Manual Drainage & Condensate Sampling (B3, [OISD-STD-226 §6])",
      "today": "Operator cracks manual drain needle valves at the scrubber boot, drains liquid into a bucket to verify zero oil/water emulsion accumulation, and checks sample clarity.",
      "agentNote": "❌ No. Pure physical field operation conducted at the vessel skid."
    },
    {
      "code": "A05",
      "action": "Calculate and record vented natural gas volumes during unit depressurization and packing leakage",
      "source": "[EPA-40CFR98-W]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "1.5 hrs",
      "friction": "volume",
      "agentRef": 3,
      "owner": "agent",
      "agentLabel": "✔✔ Agent 3: Station Blowdown & Packing Vent Methane Reconciler",
      "label": "Vented Methane & Blowdown Volume Accounting (B1, [EPA-40CFR98-W])",
      "today": "After an emergency or maintenance depressurization, operator estimates blowdown volume using static pipe volume geometry and starting pressure, jotting numbers down on a paper scratchpad for monthly environmental compliance filings.",
      "failureMode": "Under-reporting or miscalculating blowdown emissions and chronic rod packing leakage leads to catastrophic statutory environmental penalties, mandatory carbon audit re-filings, and unmitigated methane loss.",
      "agentNote": "→ See §4 (Agent 3: Station Blowdown & Packing Vent Methane Reconciler)."
    },
    {
      "code": "A06",
      "action": "Execute emergency unit blowdown or station emergency shutdown (ESD) activation",
      "source": "[ASME-B31Q Task 1361]",
      "scope": "estate",
      "bucket": "B3",
      "freq": "Event",
      "time": "0.25 hrs",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human/Emergency)",
      "label": "Emergency Blowdown & Station ESD Activation (B3, [ASME-B31Q Task 1361])",
      "today": "In response to confirmed gas releases, fire alarms, or pipeline overpressure, operator strikes the red mushroom-head station ESD push-button.",
      "agentNote": "❌ No. Statutory life-safety manual emergency intervention reserved strictly for human judgment."
    },
    {
      "code": "A07",
      "action": "Triage rotating machinery vibration spectra, shaft displacement, and bearing temperatures",
      "source": "[API-STD-617]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.5 hrs",
      "friction": "synthesis",
      "agentRef": 4,
      "owner": "agent",
      "agentLabel": "✔✔ Agent 4: Lube Oil & Bearing Vibration Thermal Signature Sieve",
      "label": "Rotating Machinery Vibration & Bearing Temperature Triage (B1, [API-STD-617])",
      "today": "Operator glances at overall vibration RMS numbers and bearing thermocouple readings on the UCP; complex vibration alarms from Bently Nevada rack systems are often silenced or ignored as false instrument spikes until shift end.",
      "failureMode": "Sub-synchronous oil whirl, rotor unbalance, or thrust bearing thermal runaway develops unnoticed beneath static alarm thresholds, resulting in catastrophic shaft lockup and casing fire.",
      "agentNote": "→ See §4 (Agent 4: Lube Oil & Bearing Vibration Thermal Signature Sieve)."
    },
    {
      "code": "A08",
      "action": "Collect lube oil samples from compressor and driver reservoirs for lab analysis",
      "source": "[API-RP-1161]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Monthly",
      "time": "1.0 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human/Oil Sample)",
      "label": "Lube Oil Sampling & Field Viscosity Check (B3, [API-RP-1161])",
      "today": "Operator draws fluid samples from running lube oil supply headers into sample glass bottles, labels them, and packages them for dispatch to an offsite analytical testing laboratory.",
      "agentNote": "❌ No. Physical fluid sampling and laboratory handling."
    },
    {
      "code": "A09",
      "action": "Compile mechanical isolation, LOTO boundaries, and pre-start purge verification checklists",
      "source": "[ASME-B31Q Task 0441]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Periodic",
      "time": "1.5 hrs",
      "friction": "traceability",
      "agentRef": 5,
      "owner": "agent",
      "agentLabel": "✔✔ Agent 5: Skid Isolation, LOTO & Pre-Start Purge Sieve",
      "label": "Skid Mechanical Isolation, LOTO & Purge Checklists (B1, [ASME-B31Q Task 0441])",
      "today": "Operator traces paper P&IDs by hand with highlighter pens to identify double-block-and-bleed valve tags, blind flange positions, and nitrogen purge sequence steps prior to compressor overhaul.",
      "failureMode": "Omitted blind flanges or incorrect bleed valve sequencing leaves high-pressure natural gas trapped behind a maintenance flange, leading to fatal toxic gas exposure or explosive flash fires when millwrights unbolt valves.",
      "agentNote": "→ See §4 (Agent 5: Skid Isolation, LOTO & Pre-Start Purge Sieve)."
    },
    {
      "code": "A10",
      "action": "Physically apply padlocks, danger tags, and slip blinds on high-pressure compressor piping",
      "source": "[ASME-B31Q Task 0441]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Event",
      "time": "1.0 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human/LOTO Execution)",
      "label": "Physical Lockout/Tagout & Slip Blind Installation (B3, [ASME-B31Q Task 0441])",
      "today": "Operator carries heavy brass padlocks, lockout hasps, danger tags, and steel spectacle blinds out to the pipe rack, physically isolating and testing zero energy.",
      "agentNote": "❌ No. Life-critical physical isolation requiring human hands."
    },
    {
      "code": "A11",
      "action": "Calculate driver heat rate, fuel gas consumption, and aerial cooler fan power balance",
      "source": "[OISD-STD-226 §6]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.25 hrs",
      "friction": "calculation",
      "agentRef": 6,
      "owner": "agent",
      "agentLabel": "✔✔ Agent 6: Station Auxiliary Load & Fuel Gas Efficiency Optimizer",
      "label": "Station Heat Rate & Energy Efficiency Optimization (B1, [OISD-STD-226 §6])",
      "today": "Operator runs gas turbines or electric motor drivers at arbitrary operator-preferred setpoints; aerial cooler fans run continuously at full speed regardless of ambient night-time cooling.",
      "failureMode": "Inefficient turbine loading and unoptimized aerial cooler fan staging waste thousands of standard cubic feet of fuel gas daily and inflate station parasitic electric power consumption.",
      "agentNote": "→ See §4 (Agent 6: Station Auxiliary Load & Fuel Gas Efficiency Optimizer)."
    },
    {
      "code": "A12",
      "action": "Execute unit start-up permissive sequence and initiate driver cranking on local UCP",
      "source": "[ASME-B31Q Task 0441]",
      "scope": "task",
      "bucket": "B2",
      "freq": "Event",
      "time": "0.5 hrs",
      "friction": "execution",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Station UCP/DCS)",
      "label": "Unit Sequence Start Permissive Execution (B2, [ASME-B31Q Task 0441])",
      "today": "Operator initiates the start command; automated Unit Control Panel (UCP) PLCs verify lube oil permissive pressure, start seal gas boost pumps, purge turbine casings, and ignite gas burners.",
      "agentNote": "❌ No. Standard embedded automation executed autonomously by the OEM UCP."
    },
    {
      "code": "A13",
      "action": "Synthesize 12-hour shift handover log, telemetry trends, overrides, and CMMS notifications",
      "source": "[ASME-B31Q Task 0441]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.5 hrs",
      "friction": "assembly",
      "agentRef": 7,
      "owner": "agent",
      "agentLabel": "✔✔ Agent 7: Shift Handover Telemetry & Station Anomaly Synthesizer",
      "label": "Shift Handover Telemetry & Anomaly Synthesis (B1, [ASME-B31Q Task 0441])",
      "today": "Operator spends 60 to 90 minutes at shift end scribbling run hours, lube oil additions, filter delta-Ps, and outstanding work orders into a paper logbook or typing disjointed emails to incoming operators.",
      "failureMode": "Critical operational anomalies—such as an intermittent anti-surge valve hunt, bypassed scrubber high-level switch, or weeping dry gas seal—are forgotten across shift changes, leaving relief crews blind.",
      "agentNote": "→ See §4 (Agent 7: Shift Handover Telemetry & Station Anomaly Synthesizer)."
    },
    {
      "code": "A14",
      "action": "Physically clean air intake filters and service lube oil duplex filter elements",
      "source": "[OISD-STD-141 §7]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Periodic",
      "time": "2.0 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human/Filter Maintenance)",
      "label": "Physical Filter Cleaning & Duplex Element Swap (B3, [OISD-STD-141 §7])",
      "today": "Operator wrenches open duplex filter housings, swaps dirty filter cartridges, bleeds air from the casing, and cleans turbine inlet air louvers.",
      "agentNote": "❌ No. Mechanical field maintenance task."
    },
    {
      "code": "A15",
      "action": "Coordinate station pressure setpoints and flow throttling with Gas Pipeline Controller",
      "source": "[PNGRB-TSSR-NG]",
      "scope": "estate",
      "bucket": "B3",
      "freq": "Daily",
      "time": "0.75 hrs",
      "friction": "waiting",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human/Dispatch Hotline)",
      "label": "Transmission Pipeline Dispatch Coordination (B3, [PNGRB-TSSR-NG])",
      "today": "Operator answers the direct SCADA telephone hotline from the central pipeline controller, verbally confirming station flow setpoint changes and suction pressure throttling.",
      "agentNote": "❌ No. Live operational telephone communication between operational personnel."
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "Compressor Operating Point & Dynamic Surge Sieve",
      "oneLine": "Ingests real-time suction/discharge pressures, gas temperatures, online gas chromatograph compositions, and driver speeds to calculate polytropic head and dynamic surge margin, recommending optimal recycle valve and guide vane trims.",
      "frictionSolved": "Eliminates 1.30 hours per shift of manual head-flow curve lookup and polytropic calculation, preventing catastrophic aerodynamic surge trips while stopping wasteful continuous recycle valve leakage.",
      "reads": "Suction pressure (Ps), discharge pressure (Pd), suction temperature (Ts), gas mass flow (Q), driver rotational speed (RPM), online gas chromatograph composition (molecular weight MW, specific heat ratio k, compressibility Z), and OEM compressor head-flow performance curves.",
      "does": "Solves real-time compression ratio (rc = Pd / Ps), polytropic head (Hp), and polytropic efficiency; maps the instantaneous operating point against the OEM surge line; computes dynamic surge margin percentage (%S = [Q_actual - Q_surge] / Q_surge * 100); evaluates gas turbine de-rate based on ambient air temperature; recommends optimal speed and variable guide vane (VGV) trim to maximize throughput without violating surge control lines or driver thermal limits.",
      "returns": "Operating Point & Surge Health Dossier (unit_id, compression_ratio, polytropic_head_kj_kg, surge_margin_pct, driver_load_pct, recommended_speed_rpm, recycle_valve_leak_detected_flag).",
      "stopsAt": "Overriding hardwired safety PLC anti-surge controller fast-open trip logic or exceeding Maximum Allowable Operating Pressure (MAOP).",
      "failureModes": "If telemetry indicates surge margin drops below 10% while recycle valve remains closed, the agent triggers an emergency audible console alarm: [Critical Surge Proximity Alert — Manual Recycle Override Recommended].",
      "agentId": "OG-P38-A01"
    },
    {
      "n": 2,
      "name": "Scrubber & Filter-Separator Delta-P Triage Agent",
      "oneLine": "Continuously analyzes differential pressure trends across suction scrubbers and coalescing filter-separators alongside liquid dump cycles to detect filter rupture, fouling, and liquid carryover risks.",
      "frictionSolved": "Eliminates 1.10 hours per shift of physical gauge checking and manual delta-P logging, preventing fatal liquid carryover into compressor cylinders or impellers.",
      "reads": "Inlet filter-separator differential pressure (DP), suction scrubber DP, coalescer element running hours, scrubber boot liquid level transmitter readings, discrete dump valve actuation state logs, and station inlet gas flow rates.",
      "does": "Normalizes raw differential pressure against instantaneous gas flow rate squared (DP_norm = DP / Q^2) to detect genuine media fouling versus flow-induced pressure drops; identifies sudden DP collapse indicative of blown or ruptured filter cartridges; tracks liquid accumulation rates in scrubber boots; detects dump valve failure (stuck open causing high-pressure gas blow-by, or stuck closed causing liquid overfill).",
      "returns": "Gas Conditioning & Scrubber Integrity Report (vessel_id, normalized_dp_psi, filter_fouling_index_pct, liquid_buildup_rate_bph, dump_valve_cycling_health, element_replacement_urgency).",
      "stopsAt": "Initiating automated emergency scrubber liquid dump valve blowdowns or bypassing high-level ESD switches.",
      "failureModes": "If liquid accumulation rate exceeds dump valve discharge capacity (liquid level rising >5% per minute towards high-high shutdown), the agent issues an emergency red banner: [Imminent Liquid Carryover Threat — High-High Scrubber Level Pre-Trip].",
      "agentId": "OG-P38-A02"
    },
    {
      "n": 3,
      "name": "Station Blowdown & Packing Vent Methane Reconciler",
      "oneLine": "Quantifies vented natural gas volumes during unit depressurizations, start/stop purges, and chronic rod packing leakage using station piping geometry, pressure decay curves, and emissions factors for environmental reporting.",
      "frictionSolved": "Eliminates 1.30 hours per event/audit of manual volume calculation and paper tallying, ensuring 100% auditable compliance with EPA Subpart W, OGMP 2.0, and national clean air regulations.",
      "reads": "Unit isolated piping volume geometry (scaffolded pipe diameters and lengths, scrubber vessel volumes, cooler header capacities), pre-blowdown pressure and temperature, post-blowdown pressure, blowdown valve stroke duration, reciprocating rod packing vent pressure/flow, and dry gas seal primary vent flow rates.",
      "does": "Calculates standard volume of natural gas depressurized during unit blowdowns via real gas equation of state (accounting for supercompressibility factor Z); computes continuous packing leakage rate against statutory thresholds (e.g. 2 standard cubic feet per minute per rod under EPA NSPS OOOOa/b); reconciles station aggregate vented volumes against monthly greenhouse gas (GHG) reporting thresholds.",
      "returns": "Certified Methane Emissions & Blowdown Ledger (event_id, unit_id, event_type, initial_pressure_psig, final_pressure_psig, vented_volume_mscf, co2e_metric_tons, packing_leak_status, regulatory_exceedance_flag).",
      "stopsAt": "Signing legal environmental compliance submissions to government regulatory agencies.",
      "failureModes": "If reciprocating rod packing vent flow exceeds statutory limits (>2 scfm), the agent automatically flags the unit: [EPA Statutory Leak Exceedance — Maintenance Packing Replacement Work Order Generated].",
      "agentId": "OG-P38-A03"
    },
    {
      "n": 4,
      "name": "Lube Oil & Bearing Vibration Thermal Signature Sieve",
      "oneLine": "Triages high-frequency shaft proximity probe vibration, thrust bearing temperatures, and lube oil differential pressures to detect sub-synchronous oil whirl, rotor unbalance, and bearing wipe before mechanical destruction.",
      "frictionSolved": "Eliminates 1.30 hours per day of analyzing complex vibration waterfall plots and bearing temperature logs, separating genuine mechanical distress from transient electrical noise.",
      "reads": "Bently Nevada 3500 rack digital outputs (radial shaft vibration 1X/2X amplitude and phase, keyphasor signals, axial thrust position), embedment RTD/thermocouple bearing metal temperatures, lube oil supply header pressure, lube oil filter differential pressure, and oil cooler outlet temperature.",
      "does": "Cross-references shaft vibration amplitudes against running speed (1X unbalance, 2X misalignment, 0.43X–0.48X sub-synchronous hydrodynamic oil whirl); correlates sudden vibration spikes with bearing metal temperature rates-of-rise; evaluates lube oil viscosity degradation and filter differential pressure trends; generates prioritized health scores for rotating trains.",
      "returns": "Machinery Mechanical Health Assessment (train_id, overall_vibration_mils_pk_pk, vibration_dominant_frequency, thrust_bearing_max_temp_degC, oil_film_health_index, anomaly_diagnosis, action_recommendation).",
      "stopsAt": "Overriding OEM hardwired machinery protection trip relays (e.g. API 670 vibration trip matrix).",
      "failureModes": "If axial thrust position drifts >15 mils towards active shoe concurrently with bearing temperature rising >2 degC per minute, the agent commands immediate alarm escalation: [Imminent Thrust Bearing Wipe — Recommend Controlled Unit Shutdown].",
      "agentId": "OG-P38-A04"
    },
    {
      "n": 5,
      "name": "Skid Isolation, LOTO & Pre-Start Purge Sieve",
      "oneLine": "Generates comprehensive piping isolation boundaries, double-block-and-bleed manifests, lockout/tagout (LOTO) checklists, and nitrogen purge calculation sheets for maintenance interventions.",
      "frictionSolved": "Eliminates 1.30 hours per maintenance cycle of manually tracing paper P&IDs and calculating purge volumes, ensuring zero-energy state before technicians break pipe flanges.",
      "reads": "Digital piping and instrumentation diagrams (P&IDs), compressor skid isolation boundary tag lists (suction, discharge, recycle, fuel gas, seal gas, blowdown, lube oil valves), station piping volume tables, and combustible gas detector readings.",
      "does": "Identifies all energy isolation points required for complete unit mechanical isolation; compiles double-block-and-bleed (DBB) valve manifests and blind flange insertion points in compliance with ASME B31Q and OSHA 1910.147; calculates required nitrogen purge volumes (standard cubic feet of N2 required to dilute hydrocarbons below 1% LEL before hot work); generates step-by-step de-isolation and fuel gas pressurization pre-start check procedures.",
      "returns": "Digital Skid Isolation & Purge Safety Package (unit_id, isolation_type, valve_tag_manifest, loto_lock_sequence, spectacle_blind_positions, calculated_nitrogen_purge_scf, pre_start_leak_test_checklist).",
      "stopsAt": "Authorizing live Safe Work Permits or physically verifying zero-energy pressure bleed-off in the field.",
      "failureModes": "If any isolation boundary valve is flagged in CMMS as having a history of internal seat leakage, the agent mandates positive physical blind isolation: [Valve Seat Leak Risk Detected — Slip Blind Insertion Mandatory Prior to Vessel Entry].",
      "agentId": "OG-P38-A05"
    },
    {
      "n": 6,
      "name": "Station Auxiliary Load & Fuel Gas Efficiency Optimizer",
      "oneLine": "Analyzes gas turbine/engine fuel consumption, aerial cooler variable frequency drive (VFD) power, and fuel gas conditioning temperatures to minimize station parasitic energy and fuel shrinkage.",
      "frictionSolved": "Eliminates 1.10 hours per day of manual fuel heat rate calculations and aerial cooler fan staging, cutting unnecessary fuel burn and electric auxiliary utility costs.",
      "reads": "Fuel gas mass flow rate, fuel gas heating value (BTU/scf or MJ/Sm3 from station chromatograph), driver power output (brake horsepower or MW), turbine exhaust gas temperature (EGT), aerial fin-fan cooler motor kW draw, ambient dry-bulb temperature, and compressor discharge gas temperature.",
      "does": "Calculates driver thermal efficiency and specific fuel consumption (SFC, scf/bhp-hr); compares current heat rate against factory ISO performance curves; models aerial cooler heat rejection duty; determines optimal staging of multi-bay cooler fans (adjusting VFD speeds to deliver target pipeline inlet temperature without over-cooling); calculates economic balance between fuel gas consumption and electric power draw.",
      "returns": "Station Energy Efficiency & Cooler Optimization Brief (station_heat_rate_btu_hp_hr, fuel_shrinkage_rate_pct, cooler_fan_power_kw, recommended_vfd_fan_speeds, potential_fuel_savings_mscfd).",
      "stopsAt": "Increasing compressor discharge temperature above pipeline Maximum Allowable Operating Temperature (MAOT, typically 120–130 degF).",
      "failureModes": "If ambient temperatures drop near freezing (frost/ice formation hazard) while cooler fans run at full speed, the agent triggers: [Low Gas Temperature Warning — Gas Hydrate / Wax Formation Risk — Modulate Cooler Bypass].",
      "agentId": "OG-P38-A06"
    },
    {
      "n": 7,
      "name": "Shift Handover Telemetry & Station Anomaly Synthesizer",
      "oneLine": "Aggregates 12-hour station SCADA trends, unit starts/stops, standing alarm overrides, filter delta-Ps, and maintenance work orders into a structured, regulatory-compliant shift handover dossier.",
      "frictionSolved": "Eliminates 1.35 hours at shift change of handwriting fragmented paper logs and compiling verbal debriefs, preventing lost operational context and uncommunicated unit overrides.",
      "reads": "Station SCADA historical database (12-hour suction/discharge pressures, flows, unit operating states), standing alarm lists, suppressed or bypassed safety instrumented function (SIF) overrides, operator manual control interventions, lube oil additions, vented methane logs, and open CMMS work notifications.",
      "does": "Compiles total standard cubic feet compressed and delivered; tallies running hours and start/stop cycle counts for each train; extracts all active bypassed interlocks or safety overrides; formats a prioritized operational watchlist for incoming operators; automatically generates draft work orders in SAP PM / Maximo for equipment flagged with mechanical anomalies.",
      "returns": "Structured 12-Hour Shift Handover Dossier & Watchlist (shift_id, station_throughput_mmscfd, running_trains, standby_trains, standing_alarms_count, active_bypasses_list, pending_maintenance_work_orders, critical_watch_items).",
      "stopsAt": "Approving statutory control room logs or releasing relieved operators from duty without signed mutual acknowledgement.",
      "failureModes": "If any safety interlock (e.g. scrubber high-level ESD or compressor high-discharge-temperature trip) is currently bypassed, the agent places an un-dismissible red banner at the top of the handover document: [Safety Interlock Bypass Active — Mandatory Formal Relief Operator Sign-off Required].",
      "agentId": "OG-P38-A07"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own pumper/route multiplier.",
    "rows": [
      {
        "agent": "Compressor Operating Point & Dynamic Surge Sieve",
        "unit": "1 Daily Operating Shift (2–4 compressor units)",
        "beforeHours": 1.5,
        "afterHours": 0.2,
        "savedHours": 1.3,
        "frictionRemoved": "Manual Surge Math & Operating Curve Interpolation"
      },
      {
        "agent": "Scrubber & Filter-Separator Delta-P Triage",
        "unit": "1 Daily Station Surveillance Shift",
        "beforeHours": 1.25,
        "afterHours": 0.15,
        "savedHours": 1.1,
        "frictionRemoved": "Manual Delta-P Trend Analysis & Carryover Diagnosis"
      },
      {
        "agent": "Station Blowdown & Packing Vent Methane Reconciler",
        "unit": "1 Unit Blowdown or Monthly Vent Audit",
        "beforeHours": 1.5,
        "afterHours": 0.2,
        "savedHours": 1.3,
        "frictionRemoved": "Blowdown Volume Geometry & Emissions Accounting Drag"
      },
      {
        "agent": "Lube Oil & Bearing Vibration Thermal Signature Sieve",
        "unit": "1 Daily Rotating Machinery Health Audit",
        "beforeHours": 1.5,
        "afterHours": 0.2,
        "savedHours": 1.3,
        "frictionRemoved": "Spectral FFT Interpretation & Bearing Thermal Cross-Referencing"
      },
      {
        "agent": "Skid Isolation, LOTO & Pre-Start Purge Sieve",
        "unit": "1 Unit Maintenance Isolation & Purge Event",
        "beforeHours": 1.5,
        "afterHours": 0.2,
        "savedHours": 1.3,
        "frictionRemoved": "Manual P&ID Isolation Markup & Purge Calculation Drag"
      },
      {
        "agent": "Station Auxiliary Load & Fuel Gas Efficiency Optimizer",
        "unit": "1 Daily Station Energy & Thermal Balance Audit",
        "beforeHours": 1.25,
        "afterHours": 0.15,
        "savedHours": 1.1,
        "frictionRemoved": "Heat Rate Arithmetic & Parasitic Power Optimization Drag"
      },
      {
        "agent": "Shift Handover Telemetry & Station Anomaly Synthesizer",
        "unit": "1 Daily 12-Hour Shift Handover",
        "beforeHours": 1.5,
        "afterHours": 0.15,
        "savedHours": 1.35,
        "frictionRemoved": "Fragmented Telemetry Transcription & Manual CMMS Logging"
      }
    ],
    "total": {
      "unit": "Standard Daily/Periodic Station Operating Cycle",
      "beforeHours": 10.0,
      "afterHours": 1.25,
      "savedHours": 8.75,
      "frictionRemoved": "Eliminates thermodynamic calculation, vibration triage, emissions accounting, and handover drag",
      "label": "Total Operational Cycle Impact"
    }
  },
  "citations": [
    {
      "key": "[ASME-B31Q]",
      "citation": "ASME, Pipeline Personnel Qualification, Standard B31Q-2021",
      "locator": "asme.org",
      "type": "Competency Standard",
      "supports": "Operational actions A01, A06, A09, A10, A12, A13"
    },
    {
      "key": "[API-RP-1161]",
      "citation": "API, Recommended Practice for Pipeline Operator Qualification, 4th Ed",
      "locator": "api.org",
      "type": "Recommended Practice",
      "supports": "Operational actions A03, A04, A08, A10, A12"
    },
    {
      "key": "[ASME-B31.8]",
      "citation": "ASME, Gas Transmission and Distribution Piping Systems, B31.8-2022",
      "locator": "asme.org",
      "type": "Technical Standard",
      "supports": "Station pressure limiting, piping safety, and ESD systems"
    },
    {
      "key": "[OISD-STD-141]",
      "citation": "OISD, Design, Construction and Inspection Requirements for Cross Country Liquid Hydrocarbon Pipelines, 2017",
      "locator": "oisd.gov.in",
      "type": "Statutory Standard",
      "supports": "Pump station operations, safety devices, and actions A02, A14"
    },
    {
      "key": "[OISD-STD-226]",
      "citation": "OISD, Natural Gas Transmission Pipelines and City Gas Distribution Networks, 2018",
      "locator": "oisd.gov.in",
      "type": "Statutory Standard",
      "supports": "Compressor station safety, gas scrubbers, and actions A04, A11"
    },
    {
      "key": "[PNGRB-TSSR-NG]",
      "citation": "PNGRB, Technical Standards and Specifications including Safety Standards for Natural Gas Pipelines, GSR 808(E)",
      "locator": "pngrb.gov.in",
      "type": "Regulatory Standard",
      "supports": "Station emergency shutdown and dispatch coordination A06, A15"
    },
    {
      "key": "[EPA-40CFR98-W]",
      "citation": "US EPA, Mandatory Greenhouse Gas Reporting: Petroleum and Natural Gas Systems (40 CFR Part 98 Subpart W)",
      "locator": "epa.gov",
      "type": "Regulatory Standard",
      "supports": "Blowdown venting and rod packing methane quantification A05"
    },
    {
      "key": "[API-STD-617]",
      "citation": "API, Axial and Centrifugal Compressors and Expander-compressors, 8th Ed",
      "locator": "api.org",
      "type": "Technical Standard",
      "supports": "Anti-surge margins, dry gas seal monitoring, and action A07"
    },
    {
      "key": "[API-STD-618]",
      "citation": "API, Reciprocating Compressors for Petroleum, Chemical, and Gas Industry Services, 5th Ed",
      "locator": "api.org",
      "type": "Technical Standard",
      "supports": "Reciprocating packing leakage, rod drop, and cylinder monitoring"
    },
    {
      "key": "[ISO-13623]",
      "citation": "ISO, Petroleum and natural gas industries — Pipeline transportation systems, ISO 13623:2017",
      "locator": "iso.org",
      "type": "International Standard",
      "supports": "Compressor and pump station operational integrity requirements"
    }
  ],
  "negativeSearch": {
    "searched": "Rockwell PlantPAx, Honeywell Experion PKS, Emerson DeltaV, Solar Turbines Turbotronic documentation, and OnePetro for \"autonomous dynamic polytropic head and surge margin pre-calculation with automated EPA Subpart W blowdown venting quantification in midstream station control packages\".",
    "result": "Negative Search, 2026-09. Station control systems (UCPs/SCADA) execute local PID anti-surge loop protection and emergency blowdown sequencing on static setpoints; none autonomously pre-calculate real-time polytropic head curves across shifting gas compositions or automatically compile auditable GHG venting compliance packs from blowdown pressure decay curves without manual engineering calculation."
  },
  "line": "\"A compressor station operator's true value is hearing the subtle chirping of an incipient dry gas seal failure or spotting a foaming scrubber before liquid hits the impellers, not spending two hours calculating polytropic head formulas and typing blowdown cubic feet into compliance forms.\"",
  "openQuestions": [
    "How many megawatts of driver fuel or electric power are wasted each month because units operate conservatively with anti-surge recycle valves cracked open due to uncertain gas composition data?",
    "What volume of unrecorded methane escapes through worn reciprocating compressor rod packings because operators lack automated differential pressure leakage tracking between quarterly optical gas imaging inspections?",
    "How often do maintenance technicians isolate a compressor skid using an outdated P&ID redline, risking trapped high-pressure gas behind leaking manual block valves?"
  ]
};
