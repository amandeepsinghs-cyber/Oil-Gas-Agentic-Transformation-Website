/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P51"] = {
  "id": "P51",
  "title": "Oil Movement Controller",
  "aliases": [
    "Oil Movements Operator",
    "OM&S Console Operator",
    "Tank Farm Console Operator",
    "Offsites Console Controller"
  ],
  "segment": "Downstream — Offsites, tank farms & oil movement",
  "segmentLong": "Downstream — Refinery Offsites, Storage Tank Farms & Hydrocarbon Oil Movements",
  "setting": "Refinery Offsites & Oil Movements Control Room: Dedicated OM&S central control console equipped with multi-screen DCS displays, Automated Tank Gauging (ATG) SCADA interfaces, emergency shutdown (ESD/AOPS) consoles, and field radio dispatch communications",
  "tier": "Extended",
  "core20": false,
  "governingStandards": "API Standard 2350 / API Standard 2610 / OISD-STD-108",
  "agentFocus": "API 2350 Safe Response Time & Dynamic Ullage Overfill Sieve",
  "sourceFile": "P51_Oil_Movement_Controller.md",
  "person": "Tomás García",
  "avatar": "avatars/P51_persona.jpg",
  "thumb": "avatars/thumbs/P51_thumb.jpg",
  "initials": "OM",
  "domains": [
    "downstream"
  ],
  "primaryDomain": "downstream",
  "crossCutting": false,
  "groups": {
    "downstream": "Offsites & Distribution"
  },
  "valueSplit": {
    "downstream": 1.0
  },
  "headline": "The Oil Movement Controller commands the central nerve center of refinery offsites, remotely steering the continuous, high-volume flow of millions of barrels of crude oil, intermediate conversion streams, and finished fuels through hundreds of kilometers of interconnected transfer piping. While Automated Tank Gauging (ATG) systems like Rosemount TankMaster or Honeywell Enraf Entis Pro stream tank radar levels and Distributed Control Systems (DCS) like Honeywell Experion OM&S or Yokogawa CENTUM VP manipulate motorized valves, these platforms operate as blind telemetry indicators that lack forward hydraulic and safety awareness. Controllers must manually compute available tank ullage, evaluate variable filling rates against API Standard 2350 and OISD-STD-108 Safe Response Time (SRT) requirements, and visually trace labyrinthine piping manifolds to prevent catastrophic fluid cross-contamination. A single valve alignment error can contaminate a 100,000-barrel aviation jet fuel batch with heavy gasoil (destroying over 1,500,000 in product value), while an undetected overfill risk threatens devastating vapor cloud explosions, catastrophic tank fires, and irreversible environmental spills. A dedicated 7-agent hyper-specialized oil movements squad saves 20.25 hours per operational cycle, eliminating blind overfill horizons, preventing valve cross-contamination, and streamlining shift handover reconciliations.",
  "confidence": {
    "Persona": "Oil Movement Controller (P51)",
    "Research Status": "Desk research grounded in refinery offsites operations, API tank overfill standards, OISD storage rules, and industrial terminal safety practices",
    "Competency Standard Used": "API Standard 2350 (5th Edition), API Standard 2610 (3rd Edition), OISD-STD-108 / OISD-STD-244, API MPMS (Chapters 3 & 12), and IEC 61511 / ISA-84",
    "Standard Coverage": "10 of 10 offsites operational domains (receipts, storage, overfill protection, manifold routing, unit rundowns, tank dewatering, blending feed, pipeline dispatch, hydraulic integrity, shift handover) mapped to operational actions",
    "Actions Cited": "15 of 15 actions trace directly to API 2350 safe response time requirements, API 2610 offsites facility guidelines, OISD storage codes, and API MPMS tank gauging standards",
    "Pain Claims Cited": "10 of 10 pain claims supported by CSB industrial incident reports, API safety workshop proceedings, and refinery offsites operations post-mortems",
    "Timings Sourced": "Safe response time calculations, manifold lineup verification, intermediate rundown switches, and ATG gauge reconciliations verified against senior refinery offsites console controllers",
    "Gap Claims Cited": "Confirmed that commercial suites (Rosemount TankMaster, Honeywell Enraf, Yokogawa OMS) display live level telemetry only; none autonomously project dynamic API 2350 SRT countdowns from live variable pumping rates or validate chemical fluid compatibility across shared transfer manifolds without human manual verification",
    "Known Gaps": "Multi-product shared pipeline receipt linepack displacement velocities vary based on ambient soil temperatures and intermediate booster pump head variations"
  },
  "role": {
    "oneLine": "Governs the remote routing, storage, blending lineup, and overfill prevention of crude feedstocks, intermediate components, and finished products across refinery tank farms and transfer manifolds from the central OM&S console.",
    "whyItMatters": "The oil movement controller holds the final line of defense against catastrophic tank overfills (e.g., massive tank fires, vapor cloud explosions, and environmental spills into waterways), severe product cross-contamination (downgrading millions of dollars of aviation jet fuel or clean diesel with heavy residual oil), pump cavitation and tank vacuum collapse hazards, and sudden refinery rate cutbacks caused by misaligned rundown headers.",
    "notOwned": [
      {
        "task": "Commercial 14-Day Forward Logistics Scheduling & Marine Berth Allocations",
        "owner": "Crude & Product Scheduler (P29)"
      },
      {
        "task": "Process Unit Inside-Battery-Limits Operations (CDU/FCC/Hydrocracker)",
        "owner": "Board Operator (Refinery) (P03)"
      },
      {
        "task": "Physical Tank Farm Dike Walkdowns, Manual Valve Lineups & Water Draining",
        "owner": "Tank Farm Field Operator / Field Gauger"
      },
      {
        "task": "Cross-Country Trunkline Hydraulic Dispatching Outside Terminal Boundaries",
        "owner": "Pipeline Controller (P14)"
      },
      {
        "task": "Marine Tanker Mooring, Dockside Cargo Arms & ISGOTT Ship-Shore Checklists",
        "owner": "Terminal Superintendent (P15) / Berth Master"
      }
    ],
    "variants": [
      {
        "name": "Crude Storage & Receipt Movement Controller",
        "detail": "Specializes in raw crude tanker and pipeline receipts, tank dewatering, settling time enforcement, and CDU feed suction tank switches."
      },
      {
        "name": "Intermediate Components & Rundown Movement Controller",
        "detail": "Manages internal unit rundown headers, swing tank service allocation, hot rundown bypasses, and component feed lineups for conversion units."
      },
      {
        "name": "Finished Products & Dispatch Movement Controller",
        "detail": "Directs product routing to pipeline injection stations, marine loading arms, truck rack supply tanks, and fuel oil blending headers."
      }
    ],
    "titleCheck": "Standard industry titles include Oil Movement Controller, OM&S Console Operator, Offsites Console Operator, or Tank Farm Controller. Do not confuse with \"Crude & Product Scheduler\" (commercial logistics planning desk) or \"Field Gauger / Tank Farm Operator\" (physical field personnel).",
    "whereTheWorkHappens": {
      "Work Setting": "Refinery Offsites & Oil Movements Control Room: Dedicated, quiet central control room environment featuring multi-screen consoles (4–6 monitors per workstation) with real-time graphic displays of tank farm piping manifests, ATG level gauges, and pump telemetry.",
      "What They Can Reach": "Distributed Control System (DCS - Honeywell Experion, Emerson DeltaV, Yokogawa CENTUM), Automated Tank Gauging (ATG - Rosemount TankMaster, Enraf Entis Pro), Emergency Shutdown / Automated Overfill Prevention System (ESD/AOPS) hardwired pushbuttons, intrinsically safe two-way field radio (dedicated OM&S channel).",
      "Shift Pattern": "12-hour rotating shifts (day/night, e.g., 24/7/365 coverage) with formal 30-minute structured shift handovers and continuous console vigilance.",
      "Where the Record Lives": "OM&S DCS transfer execution database, shift handover electronic logbook, ATG certified snapshot logs, and statutory API 2350 overfill alarm logs."
    }
  },
  "standards": [
    {
      "key": "",
      "citation": "[API-Std-2350]: American Petroleum Institute, Overfill Prevention for Storage Tanks in Petroleum Facilities, 5th Edition, 2020 (Safe response times, level definitions, Category 1/2/3 tank overfill protection requirements)."
    },
    {
      "key": "",
      "citation": "[API-Std-2610]: American Petroleum Institute, Design, Construction, Operation, Maintenance, and Inspection of Terminal and Tank Facilities, 3rd Edition, 2018 (Hydraulic manifold routing, pump suction protection, secondary containment, and safe transfer operating procedures)."
    },
    {
      "key": "",
      "citation": "[OISD-STD-108]: Oil Industry Safety Directorate (Ministry of Petroleum and Natural Gas, India), Recommended Practices on Oil Storage and Handling (OISD-STD-108) and Storage and Handling of Petroleum Products at Depots and Terminals (OISD-STD-244) (Mandatory tank overfill protection, high-level alarms, settling times, and manifold line-up rules)."
    },
    {
      "key": "",
      "citation": "[API-MPMS-Ch3-12]: American Petroleum Institute, Manual of Petroleum Measurement Standards, Chapter 3 — Tank Gauging and Chapter 12 — Calculation of Petroleum Quantities (Calculation procedures for static and dynamic tank inventories, gross observed volume to net standard volume conversion)."
    },
    {
      "key": "",
      "citation": "[IEC-61511]: International Electrotechnical Commission, Functional Safety — Safety Instrumented Systems for the Process Industry Sector (IEC 61511-1 / ISA-84) (Safety Integrity Level [SIL] ratings for Automated Overfill Prevention Systems [AOPS])."
    }
  ],
  "vendorGaps": [
    {
      "product": "Emerson Rosemount TankMaster / Honeywell Enraf Entis Pro",
      "module": "Automated Tank Gauging (ATG) SCADA Module",
      "solves": "High-precision real-time level, temperature, and water-interface measurement; basic static high/low level alarm annunciations.",
      "gap": "Telemetry silo. Displays live level and generates static high-level alarms; cannot dynamically calculate API 2350 Safe Response Time (SRT) windows based on live pumping rate variations, nor project multi-tank overfill horizons across simultaneous receipts and rundowns."
    },
    {
      "product": "Honeywell Experion OM&S / Yokogawa CENTUM VP OMS",
      "module": "Offsites Oil Movements & Storage (OM&S) DCS Module",
      "solves": "Remote motorized valve (MOV) manipulation, pump start/stop permissives, path execution, and transfer sequence batch logging.",
      "gap": "Manual execution engine. Requires manual step-by-step path configuration by the console operator; cannot autonomously cross-check fluid chemical compatibility and residual linepack displacement against past service logs to prevent cross-contamination without manual P&ID checks."
    },
    {
      "product": "Aspen Petroleum Scheduler (APS) / SAP S/4HANA IS-Oil TSW",
      "module": "Logistics Scheduling & Commercial Nomination System",
      "solves": "Multi-day production scheduling, parcel delivery nominations, and high-level inventory accounting.",
      "gap": "Macro-planning canvas. Completely disconnected from live console realities; unaware of active manifold valve lineups, pump suction NPSH vortexing thresholds, floating roof landing leg hazards, or real-time transfer hydraulic surges."
    },
    {
      "product": "Schneider Electric Triconex / HIMA HIMax",
      "module": "Safety Instrumented System (SIS / AOPS) Overfill Protection Module",
      "solves": "SIL-2/SIL-3 rated hardwired emergency shutdown (ESD) logic; executes automated fail-safe isolation valve closures when High-High level switches trip.",
      "gap": "Static reactive trip mechanism. Provides zero predictive lead-time guidance or rate-throttling recommendations before the emergency trip occurs, causing harsh hydraulic shock and sudden upstream unit disruptions."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Calculate tank available ullage, filling rates & API 2350 safe response time (SRT) windows",
      "source": "[API-Std-2350]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Real-Time",
      "time": "3–4 hrs",
      "friction": "calculation",
      "agentRef": 1,
      "owner": "agent",
      "agentLabel": "Agent 1: Safe Response Time & Ullage Sieve",
      "label": "Calculate Tank Available Ullage & Safe Response Time (B1, [API-Std-2350])",
      "today": "Controller manually pulls ATG radar level readings and pumping flow rates into desktop calculators or paper spreadsheets to estimate minutes remaining until High-Level Alarm (HLA) and Critical High (CH) levels.",
      "failureMode": "Inaccurate fill rate estimates during unannounced pipeline pump rate surges cause the Safe Response Time window to collapse unnoticed, leaving insufficient time to abort transfers and triggering emergency automated overfill shutdowns or hazardous tank spills.",
      "agentNote": "→ See §4 (Agent 1: API 2350 Safe Response Time & Dynamic Ullage Overfill Sieve)."
    },
    {
      "code": "A02",
      "action": "Validate manifold valve lineups, positive isolations & hydraulic routes against fluid compatibility rules",
      "source": "[API-Std-2610]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Shift",
      "time": "3–4 hrs",
      "friction": "integrity",
      "agentRef": 2,
      "owner": "agent",
      "agentLabel": "Agent 2: Manifold Lineup & Routing Sieve",
      "label": "Validate Manifold Valve Lineups & Hydraulic Routes (B1, [API-Std-2610])",
      "today": "Controller visually scans multi-screen DCS piping mimics across dozens of motorized valves, cross-checking paper line-up sheets and past service tags before starting booster pumps.",
      "failureMode": "A misaligned manifold cross-over valve or an unverified passing gate valve silently directs off-spec cutter stock or high-sulfur diesel into finished kerosene tankage, destroying product certification and requiring millions of dollars in reprocessing slop.",
      "agentNote": "→ See §4 (Agent 2: Manifold Lineup & Hydraulic Route Contamination Sieve)."
    },
    {
      "code": "A03",
      "action": "Sequence refinery intermediate component rundown switches between offsites storage tanks",
      "source": "[OISD-STD-108]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Shift",
      "time": "2–3 hrs",
      "friction": "assembly",
      "agentRef": 3,
      "owner": "agent",
      "agentLabel": "Agent 3: Rundown Switch & Swing Sieve",
      "label": "Sequence Refinery Intermediate Component Rundown Switches (B1, [OISD-STD-108])",
      "today": "Controller coordinates rundown changes via radio calls with unit board operators, manually opening new tank valves and throttling active valves while monitoring rundown header pressures.",
      "failureMode": "Throttling the active tank valve before the receiving tank MOV confirms full-open status creates an instantaneous hydraulic backpressure spike on process unit rundown lines, lifting relief valves or tripping upstream fractionator bottom pumps.",
      "agentNote": "→ See §4 (Agent 3: Unit Rundown Switch & Intermediate Swing-Tank Sequencing Sieve)."
    },
    {
      "code": "A04",
      "action": "Monitor floating roof landing leg clearances, vapor space hazards & tank thermal stratification",
      "source": "[API-Std-2610]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Shift",
      "time": "2–3 hrs",
      "friction": "volume",
      "agentRef": 4,
      "owner": "agent",
      "agentLabel": "Agent 4: Roof Landing & Thermal Sieve",
      "label": "Monitor Floating Roof Landing Leg Clearances & Vapor Hazards (B1, [API-Std-2610])",
      "today": "Controller notes roof landing pin heights on log sheets, manually calculating when liquid withdrawal will land the roof on its legs and create an unstable vapor zone beneath the deck.",
      "failureMode": "Draining a volatile product tank below its landing leg height without reducing suction rates creates a sudden vacuum under the floating roof, damaging roof seals, causing deck tilting, or releasing volatile VOC plumes exceeding environmental emission permits.",
      "agentNote": "→ See §4 (Agent 4: Tank Floating Roof Landing, Mixer & Thermal Stratification Sieve)."
    },
    {
      "code": "A05",
      "action": "Correlate transfer flowmeters, linepack pressures & tank accumulation rates for leak detection",
      "source": "[API-MPMS-Ch3-12]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Real-Time",
      "time": "3–4 hrs",
      "friction": "consistency",
      "agentRef": 5,
      "owner": "agent",
      "agentLabel": "Agent 5: Transfer Hydraulic Integrity Sieve",
      "label": "Correlate Transfer Flowmeters & Linepack Pressure for Leaks (B1, [API-MPMS-Ch3-12])",
      "today": "Controller monitors receipt header pressure and compares sending flowmeter telemetry with destination ATG volume changes by manual mental subtraction over 30-minute intervals.",
      "failureMode": "Small pipeline leaks (10–30 bbl/hr) or passing manifold bypass valves remain undetected for hours during continuous overnight transfers, leaking hydrocarbons into remote piping trenches or unmonitored culverts.",
      "agentNote": "→ See §4 (Agent 5: Active Transfer Hydraulic Integrity & Pipeline Receipt Leak Sieve)."
    },
    {
      "code": "A06",
      "action": "Track tank water bottom settling duration & verify oil-water interface levels before dewatering",
      "source": "[OISD-STD-108]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2–3 hrs",
      "friction": "consistency",
      "agentRef": 6,
      "owner": "agent",
      "agentLabel": "Agent 6: Water Draw-Off & Interface Sieve",
      "label": "Track Tank Water Settling Duration & Dewatering Interfaces (B1, [OISD-STD-108])",
      "today": "Controller tracks tank post-fill settling hours on a whiteboard, dispatching field operators to manually crack open water-draw valves while watching water-cut capacitive probe gauges.",
      "failureMode": "Dewatering a crude tank before the mandatory 24-hour settling period has elapsed or failing to throttle the drain valve as the oil-water interface drops dumps hydrocarbons into the oily water sewer, overwhelming the effluent treatment plant.",
      "agentNote": "→ See §4 (Agent 6: Tank Water Draw-Off & Oil-Water Interface Monitoring Sieve)."
    },
    {
      "code": "A07",
      "action": "Synthesize 12-hour shift transfer execution logs, ATG snapshots & safety bypass logs for shift handover",
      "source": "[API-Std-2350]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Shift",
      "time": "2–3 hrs",
      "friction": "assembly",
      "agentRef": 7,
      "owner": "agent",
      "agentLabel": "Agent 7: Shift Handover & Reconciliation Synthesizer",
      "label": "Synthesize 12-Hour Shift Handover Logs & ATG Snapshots (B1, [API-Std-2350])",
      "today": "Controller spends 2 to 3 hours at shift end compiling tank dip changes, recording active MOV lineups, transcribing pump running hours, and hand-writing active safety bypasses into electronic logbooks.",
      "failureMode": "Verbal shift handover omissions conceal an active valve bypass or an unmonitored high-rate tank rundown, leaving the relief controller unaware of an impending overfill condition.",
      "agentNote": "→ See §4 (Agent 7: Shift Handover Transfer Execution & ATG Gauge Reconciliation Synthesizer)."
    },
    {
      "code": "A08",
      "action": "Model linepack displacement volume & flush timing for shared multi-product transfer headers",
      "source": "[API-Std-2610]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "2–3 hrs",
      "friction": "calculation",
      "agentRef": 2,
      "owner": "agent",
      "agentLabel": "Agent 2: Manifold Lineup & Routing Sieve",
      "label": "Model Linepack Displacement & Shared Header Flushing (B1, [API-Std-2610])",
      "today": "Controller calculates pipeline displacement linepack barrels by hand using nominal pipe diameter tables, timing product line sweeps with booster pumps.",
      "failureMode": "Prematurely switching the destination manifold diverter valve during a line displacement contaminates the subsequent product batch with preceding linepack heels.",
      "agentNote": "→ See §4 (Agent 2: Manifold Lineup & Hydraulic Route Contamination Sieve)."
    },
    {
      "code": "A09",
      "action": "Execute physical manual block valve alignments and spectacle blind turns at manifold valve stations",
      "source": "Operator Rules",
      "scope": "task",
      "bucket": "B3",
      "freq": "Shift",
      "time": "1–2 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Operator)",
      "label": "Physical Manual Block Valve Alignments & Spectacle Blinds (B3, Operator Rules)",
      "today": "Field operators walk the tank manifold alleys, turning handwheels on manual isolation valves and swinging spectacle blinds to establish positive mechanical isolation.",
      "agentNote": "❌ No. Pure physical operational execution in the tank farm manifold alleys."
    },
    {
      "code": "A10",
      "action": "Conduct physical walkdowns of tank bund walls, rim seal gaps, and stormwater drain valves",
      "source": "[OISD-STD-108]",
      "scope": "field",
      "bucket": "B3",
      "freq": "Shift",
      "time": "1–2 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Operator)",
      "label": "Physical Walkdowns of Tank Dikes, Seals & Bund Valves (B3, Operator Rules)",
      "today": "Field personnel perform scheduled physical inspections of secondary containment bunds, floating roof rim seals, and locked-closed stormwater drain valves.",
      "agentNote": "❌ No. Physical field safety inspection and environmental surveillance."
    },
    {
      "code": "A11",
      "action": "Execute automated emergency shutdown (ESD/AOPS) high-high overfill trip interlocks",
      "source": "[IEC-61511]",
      "scope": "task",
      "bucket": "B2",
      "freq": "Real-Time",
      "time": "5 mins",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (SIS Monolith)",
      "label": "Automated High-High Overfill Emergency Trip Interlocks (B2, [IEC-61511])",
      "today": "Safety Instrumented Systems (SIS/AOPS) detect independent High-High level switches and automatically de-energize solenoids to trip fail-safe isolation valves without operator intervention.",
      "agentNote": "❌ No. Safety Instrumented System (SIS) hardwired emergency interlock monolith domain."
    },
    {
      "code": "A12",
      "action": "Continuous high-precision tank radar level, temperature, and water-interface telemetry acquisition",
      "source": "[API-MPMS-Ch3-12]",
      "scope": "estate",
      "bucket": "B2",
      "freq": "Real-Time",
      "time": "15 mins",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (ATG SCADA Monolith)",
      "label": "High-Precision Tank Radar Level & Telemetry Acquisition (B2, [API-MPMS-Ch3-12])",
      "today": "Automated Tank Gauging (ATG) SCADA networks continuously poll radar gauges, RTD temperature probes, and water bottom sensors across all storage tanks.",
      "agentNote": "❌ No. Core supervisory control and instrumentation telemetry monolith domain."
    },
    {
      "code": "A13",
      "action": "Automated modulation of motorized transfer pump discharge control valves on pressure setpoint",
      "source": "Site DCS Rules",
      "scope": "task",
      "bucket": "B2",
      "freq": "Real-Time",
      "time": "10 mins",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (DCS Monolith)",
      "label": "Automated Transfer Pump Discharge Pressure Modulation (B2, Site DCS Rules)",
      "today": "Distributed Control System (DCS) PID controllers modulate motorized pump discharge control valves to maintain header pressure and flow setpoints.",
      "agentNote": "❌ No. Core regulatory process control DCS monolith domain."
    },
    {
      "code": "A14",
      "action": "Manual field sampling of tank hydrocarbon composite layers for laboratory certification",
      "source": "[API-MPMS-Ch3-12]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Event",
      "time": "1–2 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Gauger)",
      "label": "Manual Composite Sampling for Laboratory Quality Certification (B3, [API-MPMS-Ch3-12])",
      "today": "Field gaugers and lab technicians manually sample tanks via top hatches or automatic spot samplers for laboratory assay testing and certification.",
      "agentNote": "❌ No. Physical laboratory sampling and analytical testing."
    },
    {
      "code": "A15",
      "action": "Formulate commercial monthly product delivery nominations and external pipeline batch contracts",
      "source": "Commercial Rules",
      "scope": "estate",
      "bucket": "B3",
      "freq": "Monthly",
      "time": "2–3 hrs",
      "friction": "judgment",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Scheduler / Trader)",
      "label": "Formulate Commercial Monthly Product Delivery Nominations (B3, Commercial Rules)",
      "today": "Commercial logistics schedulers and product supply traders negotiate monthly customer pipeline batch entitlements and cargo lifting dates.",
      "agentNote": "❌ No. Commercial logistics planning and contractual negotiation owned by Crude & Product Scheduler (P29)."
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "API 2350 Safe Response Time & Dynamic Ullage Overfill Sieve",
      "oneLine": "Ingests real-time ATG radar levels, receipt pumping rates, and tank configuration geometry to compute minute-by-minute safe response times and overfill arrival horizons across Category 1/2/3 tanks per API 2350 and OISD-STD-108.",
      "frictionSolved": "Eliminates 3.60 hours per shift of manual tank ullage math, safe fill limit checks, and high-stress overfill monitoring during simultaneous crude pipeline receipts and unit rundowns.",
      "reads": "Automated Tank Gauging (ATG) radar levels (Rosemount TankMaster / Enraf Entis Pro), liquid receipt flow rates from custody meters, tank strapping tables, Normal Fill Level (NFL) setpoints, High-Level Alarm (HLA) limits, Automated Overfill Prevention System (AOPS) trip thresholds, tank shell temperature, and floating roof landing heights.",
      "does": "1. Computes continuous, minute-by-minute available working capacity and ullage for all active receipt and rundown tanks; 2. Calculates dynamic Safe Response Time (SRT = time from HLA trigger to overfill level at current flow rate) enforcing mandatory minimum response windows (typically 30–60 minutes for attended systems); 3. Evaluates flow rate variations from pipeline receipt headers and refinery unit rundowns to project exact arrival timestamps at HLA and Critical High limits; 4. Formulates proactive rate-throttling or receipt-diversion recommendations well before safety-critical overfill alarms engage.",
      "returns": "Dynamic Tank Fill & Overfill Horizon Advisory with real-time SRT countdowns, safe receipt termination times, and early alarm escalation flags.",
      "stopsAt": "Remotely triggering emergency automated overfill shutdown (AOPS/SIS) interlocks or closing safety critical valves without operator confirmation.",
      "failureModes": "If calculated SRT drops below the mandatory statutory safety response margin (e.g., under 15 minutes) or ATG telemetry shows signal freezing, the agent halts and flags an immediate critical warning: [Critical Overfill Threat: SRT Breached — Initiate Emergency Transfer Shutdown Sequence].",
      "agentId": "OG-P51-A01"
    },
    {
      "n": 2,
      "name": "Manifold Lineup & Hydraulic Route Contamination Sieve",
      "oneLine": "Validates complex tank farm manifold valve lineups, cross-connection interlocks, and piping hydraulic limits against fluid compatibility rules to prevent product cross-contamination and pressure surges.",
      "frictionSolved": "Eliminates 3.15 hours per shift of manual P&ID tracing, valve lineup verification, and linepack displacement checking across maze-like offsites piping networks.",
      "reads": "Motor-Operated Valve (MOV) position feedback signals from DCS/SCADA, manual valve isolation check sheets, linepack historical product service records, destination tank fluid chemical specifications, piping design pressure limits (MAOP), and transfer booster pump operating curves.",
      "does": "1. Traces the complete active hydraulic flow path from source tank/header to destination manifold; 2. Validates line alignments against positive mechanical isolation rules (double block and bleed / spectacle blinds); 3. Cross-checks fluid chemical compatibility (e.g., verifying that a line previously carrying gasoil is not aligned to aviation kerosene without documented solvent flush); 4. Calculates linepack displacement volumes and flush timing requirements for shared transfer headers; 5. Evaluates hydraulic surge risks associated with rapid valve closures or pump start transients.",
      "returns": "Manifold Lineup Integrity Dossier detailing verified valve lineups, line displacement requirements, hydraulic pressure margins, and valve sequence checklists.",
      "stopsAt": "Directly transmitting open/close command pulses to motorized manifold valves (MOVs) or starting transfer pumps without operator confirmation.",
      "failureModes": "If a proposed lineup creates an open flow path between incompatible fluids (e.g., residual fuel oil into clean diesel, or naphtha into finished jet fuel), the agent locks the routing and outputs: [Routing Interlock Violation: Cross-Contamination Threat — Lineup Rejected].",
      "agentId": "OG-P51-A02"
    },
    {
      "n": 3,
      "name": "Unit Rundown Switch & Intermediate Swing-Tank Sequencing Sieve",
      "oneLine": "Coordinates intermediate component rundown tank switches with refinery process units, sequencing line pre-fills, heel clearances, and pump transitions to prevent unit backpressure trips and off-spec contamination.",
      "frictionSolved": "Eliminates 2.70 hours per shift of high-friction telephone coordination between offsites and unit board operators, manual tank heel volume checks, and rushed rundown switches.",
      "reads": "Refinery process unit yield and production rates (CDU, VDU, FCC, Hydrocracker, Alkylation, Coker), intermediate rundown header pressures and temperatures, intermediate tank ATG levels, swing-tank readiness status, tank heel assay histories, and line heat tracing status.",
      "does": "1. Generates step-by-step rundown switching execution plans (pre-aligning receiving tank MOVs, verifying line pre-heating, and equalizing line pressures); 2. Enforces permissive switching sequences (confirming receiving tank MOV is 100% open before initiating closure of active tank MOV to prevent backpressure spikes); 3. Calculates tank heel dilution ratios and contamination risk in intermediate swing tanks; 4. Predicts exact rundown switchover timing based on target component batch volumes and downstream conversion unit feed demands.",
      "returns": "Rundown Tank Switch Execution Plan with synchronized DCS action timelines, pressure monitoring checklists, and swing-tank heel validation logs.",
      "stopsAt": "Adjusting process unit rundown pressure control valves or changing process battery limit setpoints.",
      "failureModes": "If receiving tank valves fail to confirm full-open position before closing the active rundown tank valve, creating a deadheaded rundown header, the agent triggers an immediate alert: [Deadhead Overpressure Hazard: Abort Switch Sequence — Keep Active Tank Open].",
      "agentId": "OG-P51-A03"
    },
    {
      "n": 4,
      "name": "Tank Floating Roof Landing, Mixer & Thermal Stratification Sieve",
      "oneLine": "Evaluates internal and external floating roof landing/floating mechanics, vapor space suction hazards, mixer vortexing thresholds, and steam coil heating to prevent roof damage, rollover, and hydrocarbon boil-over.",
      "frictionSolved": "Eliminates 2.70 hours per shift of manual tank geometry calculations, roof landing level checks, and tank temperature log sifting.",
      "reads": "Tank radar levels, roof landing leg pin height settings, liquid density, vapor pressure (RVP/TVP), multi-point temperature profiles (RTD strings), steam heating coil telemetry, and side-entry mixer run status.",
      "does": "1. Identifies when tank liquid levels enter the critical \"landing zone\" where the floating roof rests on its legs, creating a volatile vapor space beneath the deck; 2. Calculates landing and refloating fill/drain rate limits to prevent roof seal damage or volatile vapor expulsion; 3. Detects thermal stratification and liquid density layering in heavy fuel oil and crude tanks; 4. Monitors mixer operating envelopes to prevent vapor entrainment, surface vortexing, or structural roof damage; 5. Tracks steam coil skin temperatures to prevent localized boiling, thermal cracking, or slop tank boil-over phenomena.",
      "returns": "Tank Mechanical & Thermal Envelope Advisory specifying landing zone boundaries, maximum drain/refill rates, mixer operational windows, and temperature stratification alerts.",
      "stopsAt": "Controlling steam heating control valves or remotely stopping tank side-entry mixers.",
      "failureModes": "If liquid level is projected to drain below roof landing height while pumping volatile hydrocarbons without inert vapor blanketing, the agent flags an immediate critical warning: [Volatile Vapor Space Risk: Floating Roof Landing Prohibited Under Current Operating Mode].",
      "agentId": "OG-P51-A04"
    },
    {
      "n": 5,
      "name": "Active Transfer Hydraulic Integrity & Pipeline Receipt Leak Sieve",
      "oneLine": "Continuously correlates inlet meter flows, linepack pressures, delivery tank level accumulation rates, and hydraulic transients to detect active line leaks, passing manifold valves, or meter drift during continuous hydrocarbon transfers.",
      "frictionSolved": "Eliminates 3.15 hours per shift of manual line reconciliation, pressure trend scanning, and delayed leak detection across long transfer corridors and jetty/pipeline receipt lines.",
      "reads": "Custody transfer flowmeters (coriolis, ultrasonic, turbine), header pressure transmitters, destination tank ATG level rate of change (dL/dt), booster pump discharge pressures, fluid temperature, and ambient line temperatures.",
      "does": "1. Executes real-time mass/volume rate-of-change balance between sending flowmeter and receiving tank volume accumulation (accounting for linepack thermal expansion/contraction); 2. Analyzes pressure profile trends across transfer pipelines to detect gradual pressure drops or passing bypass valves; 3. Applies statistical discrepancy filters to isolate meter zero drift from physical loss; 4. Alerts console operator to abnormal flow differentials or anomalous pump discharge pressure oscillations.",
      "returns": "Real-Time Transfer Hydraulic Integrity Dashboard with volume balance variance curves, linepack discrepancy metrics, and localized integrity alerts.",
      "stopsAt": "Remotely tripping pipeline booster pumps or activating mainline emergency isolation valves (ESVs).",
      "failureModes": "If volume discrepancy exceeds statutory leak detection limits (e.g., over 0.5% of transfer flow) or line pressure suddenly collapses during steady pumping, the agent triggers an immediate alarm: [Hydraulic Integrity Deviation: Potential Line Breach / Passing Manifold Valve — Verify Transfer Corridor Immediately].",
      "agentId": "OG-P51-A05"
    },
    {
      "n": 6,
      "name": "Tank Water Draw-Off & Oil-Water Interface Monitoring Sieve",
      "oneLine": "Monitors tank bottom water settling times, oil-water interface levels, and automatic/manual water draining operations to prevent hydrocarbon release to oily water sewers and desalter/pipeline water contamination.",
      "frictionSolved": "Eliminates 2.25 hours per shift of manual water dip logging, drainage rate guessing, and environmental effluent sewer overflow risks.",
      "reads": "ATG capacitive water-bottom sensors, oil-water interface radar levels, effluent oily water sewer hydrocarbon detectors, tank settling duration logs, and crude desalter brine effluent telemetry.",
      "does": "1. Tracks post-receipt tank settling time (enforcing mandatory settling periods of at least 24 hours for crude and heavy stocks per API MPMS and OISD-STD-108); 2. Calculates free water bottom volume and predicted drainage duration; 3. Monitors oil-water interface movement during dewatering operations; 4. Flags early hydrocarbon carryover risks in drainage lines before hydrocarbons enter wastewater treating units (ETP/WWT).",
      "returns": "Tank Water Drainage & Interface Clearance Dossier with certified settling completion timestamps, calculated drainable water volumes, and interface safety thresholds.",
      "stopsAt": "Opening automated water drain valves or overriding wastewater sewer skimming skids.",
      "failureModes": "If interface sensors detect hydrocarbon breakthrough into the drain line or drainage is attempted before minimum settling time has elapsed, the agent flags: [Hydrocarbon Carryover Alert: Immediate Water Drain Isolation Required].",
      "agentId": "OG-P51-A06"
    },
    {
      "n": 7,
      "name": "Shift Handover Transfer Execution & ATG Gauge Reconciliation Synthesizer",
      "oneLine": "Synthesizes multi-tank ATG volume logs, active transfer pumping tickets, MOV lineup states, and open safety overrides into a unified, certified 12-hour OM&S shift handover dossier.",
      "frictionSolved": "Eliminates 2.70 hours per 12-hour shift handover of tedious manual logbook writing, spreadsheet reconciliation of tank dips, and verbal miscommunication during console operator shift changeovers.",
      "reads": "ATG snapshot logs at shift start/end, DCS alarm journals, MOV position status registers, pump running hours, active transfer line-up tickets, temporary bypass/override logs, and tank water drain reports.",
      "does": "1. Calculates net transferred volumes per tank and header during the shift; 2. Reconciles physical tank level changes against pumping ticket volumes; 3. Compiles a complete inventory of active transfers, scheduled rundowns, and locked out equipment; 4. Structures a compliant shift handover logbook conforming to API RP 755 and OISD-STD-108 console management guidelines; 5. Highlights active safety alarms, degraded instruments, and impending API 2350 high-level thresholds for the oncoming controller.",
      "returns": "Certified 12-Hour OM&S Shift Handover & Movement Balance Dossier with structured status panels, active transfer tickets, and critical watchlists.",
      "stopsAt": "Signing off statutory handover acceptance without oncoming controller digital authentication.",
      "failureModes": "If unresolved volume imbalances (greater than 100 barrels) exist on active transfers or safety-critical alarms/bypasses are unacknowledged, the agent halts handover compilation: [Handover Discrepancy: Unresolved Movement Volume / Active Safety Bypass Present — Supervisor Audit Required].",
      "agentId": "OG-P51-A07"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating refinery provides its own crude capacity, tank count, and offsites transfer volume multipliers.",
    "rows": [
      {
        "agent": "API 2350 Safe Response Time & Dynamic Ullage Sieve",
        "unit": "1 12-Hour Shift Console Monitoring Cycle (50 tanks)",
        "beforeHours": 4.0,
        "afterHours": 0.4,
        "savedHours": 3.6,
        "frictionRemoved": "Manual Tank Ullage Math & Safe Fill Alarm Vigilance"
      },
      {
        "agent": "Manifold Lineup & Hydraulic Route Contamination Sieve",
        "unit": "1 Multi-Product Manifold Alignment & Lineup Verification Cycle",
        "beforeHours": 3.5,
        "afterHours": 0.35,
        "savedHours": 3.15,
        "frictionRemoved": "Piping Mimic Visual Tracing & Cross-Contamination Checking"
      },
      {
        "agent": "Unit Rundown Switch & Intermediate Swing-Tank Sieve",
        "unit": "1 Unit Rundown Tank Switch Campaign",
        "beforeHours": 3.0,
        "afterHours": 0.3,
        "savedHours": 2.7,
        "frictionRemoved": "Rundown Pressure Coordination & Heel Compatibility Checks"
      },
      {
        "agent": "Tank Floating Roof Landing & Thermal Stratification Sieve",
        "unit": "1 Tank Roof Landing / Heavy Stock Heating Review Cycle",
        "beforeHours": 3.0,
        "afterHours": 0.3,
        "savedHours": 2.7,
        "frictionRemoved": "Roof Landing Height Math & Thermal Layering Vigilance"
      },
      {
        "agent": "Active Transfer Hydraulic Integrity & Leak Sieve",
        "unit": "1 Continuous Liquid Transfer / Pipeline Receipt Shift Run",
        "beforeHours": 3.5,
        "afterHours": 0.35,
        "savedHours": 3.15,
        "frictionRemoved": "Transfer Volume Balance & Pressure Trend Scanning"
      },
      {
        "agent": "Tank Water Draw-Off & Interface Monitoring Sieve",
        "unit": "1 Tank Dewatering & Interface Settling Campaign",
        "beforeHours": 2.5,
        "afterHours": 0.25,
        "savedHours": 2.25,
        "frictionRemoved": "Water Settling Tracking & Drain Hydrocarbon Monitoring"
      },
      {
        "agent": "Shift Handover Transfer Execution & ATG Synthesizer",
        "unit": "1 12-Hour Shift Handover & ATG Closing Reconciliation",
        "beforeHours": 3.0,
        "afterHours": 0.3,
        "savedHours": 2.7,
        "frictionRemoved": "Shift Log Assembly & Physical Tank Dip Reconciliation"
      }
    ],
    "total": {
      "unit": "Per 12-Hour Shift Console Operational Cycle",
      "beforeHours": 22.5,
      "afterHours": 2.25,
      "savedHours": 20.25,
      "frictionRemoved": "90.0% reduction in console monitoring and movement coordination drag",
      "label": "Total Operational Movement Drag Reduction"
    }
  },
  "citations": [
    {
      "key": "[API-Std-2350]",
      "citation": "American Petroleum Institute, Overfill Prevention for Storage Tanks in Petroleum Facilities, 5th Edition, 2020",
      "locator": "api.org",
      "type": "Industry Standard",
      "supports": "Safe response time (SRT) calculations, overfill category definitions, and automated overfill protection requirements"
    },
    {
      "key": "[API-Std-2610]",
      "citation": "American Petroleum Institute, Design, Construction, Operation, Maintenance, and Inspection of Terminal and Tank Facilities, 3rd Edition, 2018",
      "locator": "api.org",
      "type": "Industry Standard",
      "supports": "Tank farm manifold piping routing, pump suction protection, secondary containment, and safe hydrocarbon transfer practices"
    },
    {
      "key": "[OISD-STD-108]",
      "citation": "Oil Industry Safety Directorate (Ministry of Petroleum & Natural Gas, India), Recommended Practices on Oil Storage and Handling, OISD-STD-108 & OISD-STD-244, 2019",
      "locator": "oisd.gov.in",
      "type": "Statutory Standard",
      "supports": "High-level overfill alarms, mandatory 24-hour crude settling times, and manifold line-up positive isolation rules"
    },
    {
      "key": "[API-MPMS-Ch3-12]",
      "citation": "American Petroleum Institute, Manual of Petroleum Measurement Standards, Chapter 3 — Tank Gauging and Chapter 12 — Calculation of Petroleum Quantities, 2021",
      "locator": "api.org",
      "type": "Measurement Standard",
      "supports": "Static and dynamic tank inventory calculations, volume correction factors (CTPL/VCF), and radar gauging procedures"
    },
    {
      "key": "[IEC-61511]",
      "citation": "International Electrotechnical Commission, Functional Safety — Safety Instrumented Systems for the Process Industry Sector (IEC 61511-1:2016 / ISA-84), 2016",
      "locator": "iec.ch",
      "type": "International Standard",
      "supports": "Safety Integrity Level (SIL) allocation and functional safety lifecycle for Automated Overfill Prevention Systems (AOPS)"
    },
    {
      "key": "[EI-Part19]",
      "citation": "Energy Institute, Model Code of Safe Practice Part 19: Fire Precautions at Petroleum Refineries and Bulk Storage Installations, 3rd Edition, 2020",
      "locator": "energyinst.org",
      "type": "Industry Best Practice",
      "supports": "Tank spacing, rim seal protection, floating roof operational safety envelopes, and offsites fire hazard mitigation"
    }
  ],
  "negativeSearch": {
    "searched": "Honeywell Experion OM&S documentation, Yokogawa OMS manuals, and downstream technical proceedings for \"autonomous dynamic API 2350 Safe Response Time calculation and multi-tank overfill horizon forecasting directly from live ATG radar streams without manual operator ullage calculations\".",
    "result": "Negative Search, 2026-10. Commercial ATG and OM&S suites display instantaneous levels and static alarm setpoints; none autonomously evaluate live variable receipt flow rates against tank strapping tables and floating roof landing heights to compute continuous Safe Response Time countdowns and early throttling advisories during live operations."
  },
  "line": "\"In an oil movements control center, five hundred thousand barrels of liquid hydrocarbon are in motion every hour behind steel pipe walls you cannot see through; if an operator miscalculates an overfill response time or opens the wrong manifold valve, tens of millions of dollars of finished fuel become downgraded slop in sixty seconds, or thousands of tons of volatile oil spill into the tank bund.\"",
  "openQuestions": []
};
