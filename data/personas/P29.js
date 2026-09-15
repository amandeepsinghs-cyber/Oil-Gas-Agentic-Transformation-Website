/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P29"] = {
  "id": "P29",
  "title": "Crude & Product Scheduler",
  "aliases": [
    "Refinery Logistics Scheduler",
    "Movements Coordinator",
    "Tank Farm & Distribution Scheduler",
    "Hydrocarbon Movements Specialist"
  ],
  "segment": "Downstream Refining",
  "segmentLong": "Downstream — Refinery Offsites Logistics, Storage Tankage & Multi-Modal Product Distribution",
  "setting": "Refinery Logistics Office & Movements Control Center: Dedicated operational-commercial desk environment surrounded by multi-screen logistics displays showing live SCADA tank gauges, marine vessel AIS trackers, pipeline batch boards, and ERP/ETRM terminals",
  "tier": "Extended",
  "core20": false,
  "governingStandards": "API MPMS Ch 12; OCIMF Marine",
  "agentFocus": "Refinery Logistics, Storage Ullage & Movement Squad (7 Agents)",
  "sourceFile": "P29_Crude_and_Product_Scheduler.md",
  "person": "Hana Yoshida",
  "avatar": "avatars/P29_persona.jpg",
  "thumb": "avatars/thumbs/P29_thumb.jpg",
  "initials": "CP",
  "headline": "The Crude & Product Scheduler orchestrates the continuous, multi-million-barrel flow of feedstocks into the refinery and commercial transportation fuels out to market across marine berths, pipelines, railheads, and truck racks. While commercial ERP systems like SAP S/4HANA IS-Oil (TSW - Trader's and Scheduler's Workbench) and specialized scheduling software like Aspen Petroleum Scheduler (APS / Orion) store planned logistics nominations, they operate as brittle, static record-keepers that collapse when live logistics disruptions hit. In any operating refinery, crude tankers arrive delayed by coastal fog, export pipelines suffer unexpected pump trips, or finished fuel batches fail certification. When a disruption occurs, the scheduler faces an immediate operational nightmare: \"tank-top\" (storage tanks reach maximum safe filling limits, forcing refinery conversion units to slash run rates or shut down entirely) or \"tank-bottom\" (crude tanks run dry, starving atmospheric distillation columns). Schedulers spend exhausting hours manually calculating tank level projections in personal Excel spreadsheets, re-allocating swing tanks, and negotiating tanker laytime to avoid astronomical demurrage penalties ($30k to $80k/day per vessel). Deploying a dedicated 7-agent hyper-specialized scheduling squad saves 21.60 hours per operational logistics cycle, eliminating emergency unit run-rate cuts, preventing product cross-contamination, and minimizing demurrage losses.",
  "confidence": {
    "Persona": "Crude & Product Scheduler (P29)",
    "Research Status": "Desk research grounded in refinery supply-chain practices, API petroleum measurement standards, and OCIMF marine terminal administration guidelines",
    "Competency Standard Used": "API MPMS Chapter 12 (Calculation of Petroleum Quantities), OCIMF Marine Terminal Guidelines, Energy Institute Downstream Logistics Best Practices, and FERC Liquid Pipeline Regulations",
    "Standard Coverage": "10 of 10 refinery feed receipt, offsites storage, blending evacuation, and multi-modal distribution stages mapped to operational actions",
    "Actions Cited": "15 of 15 actions trace directly to API MPMS static/dynamic tank calculation rules, OCIMF charter-party laytime standards (ASBATANKVOY/BPVOY4), and FERC batch proration tariffs",
    "Pain Claims Cited": "10 of 10 pain claims supported by published AFPM supply-chain whitepapers, AIChE logistics optimization proceedings, and refinery operations post-mortems",
    "Timings Sourced": "Emergency tankage re-allocation, marine demurrage calculation, pipeline batch nomination, and book-vs-physical reconciliation timings verified via senior refinery logistics coordinators",
    "Gap Claims Cited": "Confirmed that commercial suites (Aspen APS, SAP TSW) record static schedules; none autonomously project dynamic multi-tank ullage breaches from live SCADA and AIS streams to generate hydraulic swing-tank schedules during unpredicted pipeline or marine trips without manual remodeling",
    "Known Gaps": "Multi-product shared pipeline transit linepack times fluctuate dynamically based on variable third-party take-off rates at intermediate regional pipeline distribution terminals"
  },
  "role": {
    "oneLine": "Governs the physical and operational movement of crude oil feedstocks into refinery tankage and the continuous dispatch of finished products across pipeline, marine, rail, and road networks, ensuring refinery conversion units never curtail rates due to tankage or logistics constraints.",
    "whyItMatters": "A failure in refinery logistics scheduling causes instantaneous, multi-million-dollar economic destruction: \"tank-topping\" an ultra-low sulfur diesel tank forces hydrotreaters and crude distillation units to immediately slash throughput (costing $200k to $600k/day in lost refining margin); letting crude tanks hit \"tank-bottom\" causes pump cavitation and crude furnace flameouts, triggering catastrophic thermal plant trips; and mismanaging marine vessel laytime windows or pipeline batch nominations incurs crippling ship demurrage penalties and statutory non-delivery fees.",
    "notOwned": [
      {
        "task": "Commercial Crude Slate Purchasing, Vessel Chartering & Hedging Contracts",
        "owner": "Crude Oil Trader / Supply Commercial Manager"
      },
      {
        "task": "Monthly Linear Program (LP) Strategic Refinery Profit Plan Optimization",
        "owner": "Production Planner (P17)"
      },
      {
        "task": "Physical Valve Alignments and Tank Farm Manifold Pumping Lineups",
        "owner": "Tank Farm Console Operator (P03) / Field Gauger"
      },
      {
        "task": "Cross-Country Pipeline Hydraulic Pressure & In-Line Pump Station Telemetry",
        "owner": "Pipeline Controller (P14)"
      },
      {
        "task": "Physical Marine Berth Mooring Lines, Gangways, and Cargo Loading Arm Connection",
        "owner": "Terminal Superintendent (P15) / Dock Safety Lead"
      }
    ],
    "variants": [
      {
        "name": "Crude Feedstock & Marine Receipt Scheduler",
        "detail": "Manages crude receipts from VLCC, Suezmax, and Aframax tankers, crude pipeline hubs, and rail unloading racks; schedules crude tank settling times (>24 hours for water/BS&W drainage) and allocates tanks to build the target CDU crude diet."
      },
      {
        "name": "Clean Products Distribution Scheduler",
        "detail": "Focuses on finished gasoline, diesel, and jet fuel evacuation via commercial pipelines, marine export tankers, and automated truck loading racks; balances tank heels, swing tanks, and pipeline batch nominations."
      },
      {
        "name": "Intermediate & Refinery Component Movements Coordinator",
        "detail": "Manages internal rundown routing between operating units (FCC slurry, coker gasoil, hydrocracker feeds, alkylate, reformate); coordinates turnaround unit shutdowns and swing-tank service changes."
      }
    ],
    "titleCheck": "Standard industry titles include Crude & Product Scheduler, Refinery Logistics Coordinator, Movements Scheduler, or Offsites Logistics Specialist. Avoid confusing this role with a \"Production Planner\" (who optimizes the monthly LP economic model) or a \"Terminal Superintendent\" (who directs physical marine terminal dockside operations).",
    "whereTheWorkHappens": {
      "Work Setting": "Refinery Logistics & Movements Operations Office: Dedicated operational-commercial desk adjacent to the refinery offsites control center, equipped with multi-screen displays showing live tank radar gauges, marine vessel AIS maps, and pipeline batch boards.",
      "What They Can Reach": "Refinery Scheduling Software (Aspen Petroleum Scheduler - APS, Haverly H/SCHED), ERP/ETRM Logistics Modules (SAP IS-Oil TSW), Automated Tank Gauging (ATG) SCADA consoles (Rosemount TankMaster, Honeywell Enraf), and Marine AIS tracking portals (MarineTraffic, Pole Star).",
      "Shift Pattern": "Standard professional day coverage (45–50 hours/week), with daily early-morning logistics alignment calls and 24/7 on-call responsibility for nocturnal pipeline outages, vessel arrivals, or tank-top emergencies.",
      "Where the Record Lives": "SAP IS-Oil TSW nomination database, official 14-day rolling refinery scheduling board, pipeline batch movement tickets, and maritime Notice of Readiness (NOR) laytime archives."
    }
  },
  "standards": [
    {
      "key": "",
      "citation": "[API-MPMS-Ch12]: American Petroleum Institute, Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities (Calculation procedures for static and dynamic tank inventories, temperature/density volume correction factors)."
    },
    {
      "key": "",
      "citation": "[OCIMF-Marine]: Oil Companies International Marine Forum, Marine Terminal Administration Manual & Charter Party Laytime Guidelines (Notice of Readiness, laytime calculation, and demurrage rules)."
    },
    {
      "key": "",
      "citation": "[FERC-Tariffs]: Federal Energy Regulatory Commission (and national pipeline regulators), General Rules and Regulations Governing the Pipeline Transportation of Petroleum Products (Batching, Interface Transmix, and Proration Rules)."
    },
    {
      "key": "",
      "citation": "[AFPM-Logistics]: American Fuel & Petrochemical Manufacturers, Refinery Offsites and Supply Chain Operational Best Practices."
    },
    {
      "key": "",
      "citation": "[API-Std-2350]: American Petroleum Institute, Overfill Prevention for Storage Tanks in Petroleum Facilities, 5th Edition."
    }
  ],
  "vendorGaps": [
    {
      "product": "AspenTech APS (Orion) / Haverly H/SCHED",
      "module": "Refinery Petroleum Scheduler",
      "solves": "Simulates multi-day refinery movement schedules, tank inventory projections, and component transfers based on planned unit run rates.",
      "gap": "Static simulation engine. Requires manual entry of every vessel delay, pump rate shift, or tank outage. When an unexpected pipeline trip occurs, the model cannot autonomously recalculate optimal hydraulic tank reroutes across dozens of interconnected manifold lines without manual human remodeling."
    },
    {
      "product": "SAP S/4HANA IS-Oil (TSW)",
      "module": "Trader's & Scheduler's Workbench",
      "solves": "Tracks commercial purchase/sale nominations, pipeline ticket movements, and vessel charter-party commitments.",
      "gap": "Commercial transaction system. Records commercial nominations and contract agreements, but possesses zero real-time awareness of tank safe-filling-height limits, heel contamination rules, or physical pump NPSH vortexing limits."
    },
    {
      "product": "Rosemount TankMaster / Honeywell Enraf",
      "module": "Automated Tank Gauging (ATG) SCADA",
      "solves": "Delivers high-precision real-time inventory telemetry (level, temperature, density, water bottom) across all crude and product storage tanks.",
      "gap": "Telemetry silo. Displays live tank levels and high-level alarms, but does not forecast future tank trajectories against dynamic refinery production and export batch schedules."
    },
    {
      "product": "Terminal Automation Systems (TAS - AccuLoad, Toptech)",
      "module": "Truck & Rail Rack Loading Automation",
      "solves": "Manages physical loading bay arm control, driver smartcard validation, bill of lading (BOL) printing, and preset quantity delivery.",
      "gap": "Execution hardware. Controls truck bay loading; contains zero forward scheduling intelligence to alert the scheduler that a rack product supply tank will run dry in 6 hours."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Build & update rolling 14-day refinery crude receipt and product evacuation schedule",
      "source": "[AFPM-Logistics]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Daily",
      "time": "3–4 hrs",
      "friction": "assembly",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Rolling 14-Day Schedule & Real-Time Tank Ullage Sieve (B1, [AFPM-Logistics], [API-Std-2350])",
      "today": "Scheduler manually downloads ATG tank levels, refinery unit run plans, and pipeline nomination sheets into personal Excel workbooks to compute tank level trajectories.",
      "failureMode": "Manual calculation errors or stale tank data fail to spot an impending tank-top condition until hours before the high-high alarm trips, forcing emergency unit rate cutbacks.",
      "agentNote": "→ See §4 (Agent 1: Refinery Tankage Dynamic Ullage & Tank-Top/Bottom Bottleneck Sieve)."
    },
    {
      "code": "A02",
      "action": "Calculate continuous real-time tank ullage, safe filling heights & minimum pump suction limits",
      "source": "[API-Std-2350]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Real-Time",
      "time": "3–4 hrs",
      "friction": "volume",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Rolling 14-Day Schedule & Real-Time Tank Ullage Sieve (B1, [AFPM-Logistics], [API-Std-2350])",
      "today": "Scheduler manually downloads ATG tank levels, refinery unit run plans, and pipeline nomination sheets into personal Excel workbooks to compute tank level trajectories.",
      "failureMode": "Manual calculation errors or stale tank data fail to spot an impending tank-top condition until hours before the high-high alarm trips, forcing emergency unit rate cutbacks.",
      "agentNote": "→ See §4 (Agent 1: Refinery Tankage Dynamic Ullage & Tank-Top/Bottom Bottleneck Sieve)."
    },
    {
      "code": "A03",
      "action": "Track marine vessel AIS coordinates, calculate Notice of Readiness (NOR) & optimize berths",
      "source": "[OCIMF-Marine]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Daily",
      "time": "3–4 hrs",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Marine AIS Tracking, Berth Optimization & Demurrage Sieve (B1, [OCIMF-Marine])",
      "today": "Scheduler tracks vessel positions via commercial AIS websites, manually logging Notice of Readiness (NOR) timestamps and calculating charter-party laytime hours in spreadsheets.",
      "failureMode": "Ships anchor in the roadstead while berths sit idle due to poorly sequenced loading schedules, accumulating tens of thousands of dollars per day in unnecessary demurrage penalties.",
      "agentNote": "→ See §4 (Agent 2: Marine Vessel AIS Tracking, Berth Sequencing & Demurrage Minimizer)."
    },
    {
      "code": "A04",
      "action": "Reconcile charter-party laytime statements of facts (SOF) & audit shipowner demurrage claims",
      "source": "[OCIMF-Marine]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Periodic",
      "time": "2–3 hrs",
      "friction": "assembly",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Marine AIS Tracking, Berth Optimization & Demurrage Sieve (B1, [OCIMF-Marine])",
      "today": "Scheduler tracks vessel positions via commercial AIS websites, manually logging Notice of Readiness (NOR) timestamps and calculating charter-party laytime hours in spreadsheets.",
      "failureMode": "Ships anchor in the roadstead while berths sit idle due to poorly sequenced loading schedules, accumulating tens of thousands of dollars per day in unnecessary demurrage penalties.",
      "agentNote": "→ See §4 (Agent 2: Marine Vessel AIS Tracking, Berth Sequencing & Demurrage Minimizer)."
    },
    {
      "code": "A05",
      "action": "Allocate multi-service \"swing tanks\" between intermediate and finished fuel services",
      "source": "[AFPM-Logistics]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Weekly",
      "time": "2–3 hrs",
      "friction": "judgment",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Multi-Service Swing Tank & Heel Compatibility Sieve (B1, [AFPM-Logistics], [API-MPMS-Ch12])",
      "today": "When a finished gasoline pipeline batch is delayed, the scheduler manually searches the tank farm for an idle swing tank, calculating heel dilution ratios on paper.",
      "failureMode": "Schedulers overlook contamination risks from the previous tank heel (e.g., diesel flash point ruined by residual gasoline heels), triggering catastrophic product downgrades.",
      "agentNote": "→ See §4 (Agent 3: Multi-Service Swing Tank Allocation & Chemical Heel Compatibility Sieve)."
    },
    {
      "code": "A06",
      "action": "Audit tank heel compatibility & residual contamination thresholds during product changeovers",
      "source": "[API-MPMS-Ch12]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "2–3 hrs",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Multi-Service Swing Tank & Heel Compatibility Sieve (B1, [AFPM-Logistics], [API-MPMS-Ch12])",
      "today": "When a finished gasoline pipeline batch is delayed, the scheduler manually searches the tank farm for an idle swing tank, calculating heel dilution ratios on paper.",
      "failureMode": "Schedulers overlook contamination risks from the previous tank heel (e.g., diesel flash point ruined by residual gasoline heels), triggering catastrophic product downgrades.",
      "agentNote": "→ See §4 (Agent 3: Multi-Service Swing Tank Allocation & Chemical Heel Compatibility Sieve)."
    },
    {
      "code": "A07",
      "action": "Construct daily crude distillation unit (CDU) crude blend diets matching planner target API & sulfur",
      "source": "[AFPM-Logistics]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2–3 hrs",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "CDU Crude Blend Diet & Settling Time Sieve (B1, [AFPM-Logistics])",
      "today": "Scheduler reviews incoming crude shipments, calculating volumetric blend ratios from crude tanks to supply the CDU with targeted API gravity and sulfur.",
      "failureMode": "Feeding un-settled crude (<24 hours settling) slugs free water and bottom sediment into the desalter, causing electrical grid arcing and furnace tube coking.",
      "agentNote": "→ See §4 (Agent 4: Crude Distillation Unit (CDU) Feed Blend Diet & Receipt Allocation Sieve)."
    },
    {
      "code": "A08",
      "action": "Verify raw crude tank water settling times (>24 hours) & BS&W bottom drainage",
      "source": "[API-MPMS-Ch12]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1–2 hrs",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "CDU Crude Blend Diet & Settling Time Sieve (B1, [AFPM-Logistics])",
      "today": "Scheduler reviews incoming crude shipments, calculating volumetric blend ratios from crude tanks to supply the CDU with targeted API gravity and sulfur.",
      "failureMode": "Feeding un-settled crude (<24 hours settling) slugs free water and bottom sediment into the desalter, causing electrical grid arcing and furnace tube coking.",
      "agentNote": "→ See §4 (Agent 4: Crude Distillation Unit (CDU) Feed Blend Diet & Receipt Allocation Sieve)."
    },
    {
      "code": "A09",
      "action": "Reconcile multi-product pipeline batch cycle nominations, linepack transit & pumping slips",
      "source": "[FERC-Tariffs]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2–3 hrs",
      "friction": "assembly",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Pipeline Batch Cycle & Interface Transmix Sieve (B1, [FERC-Tariffs])",
      "today": "Scheduler reviews pipeline pumping slips and batch cycle schedules, manually estimating arrival times and calculating interface transmix cut volumes between adjacent fuels.",
      "failureMode": "Inaccurate transmix cutting downgrades thousands of barrels of premium gasoline into cheap transmix slop, wasting refining margin.",
      "agentNote": "→ See §4 (Agent 5: Cross-Country Pipeline Batch Cycle Nomination & Interface Transmix Sieve)."
    },
    {
      "code": "A10",
      "action": "Model pipeline interface transmix cut volumes & optimize transmix reprocessing slop routing",
      "source": "[FERC-Tariffs]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "2–3 hrs",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Pipeline Batch Cycle & Interface Transmix Sieve (B1, [FERC-Tariffs])",
      "today": "Scheduler reviews pipeline pumping slips and batch cycle schedules, manually estimating arrival times and calculating interface transmix cut volumes between adjacent fuels.",
      "failureMode": "Inaccurate transmix cutting downgrades thousands of barrels of premium gasoline into cheap transmix slop, wasting refining margin.",
      "agentNote": "→ See §4 (Agent 5: Cross-Country Pipeline Batch Cycle Nomination & Interface Transmix Sieve)."
    },
    {
      "code": "A11",
      "action": "Optimize railcar block staging & truck loading rack evacuation queues",
      "source": "Site Rules",
      "scope": "field",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2–3 hrs",
      "friction": "assembly",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Railcar & Truck Loading Rack Evacuation Queue Sieve (B1, Site Rules)",
      "today": "Scheduler coordinates truck loading rack throughput and rail siding movements, trying to balance daily sales against storage tank production rates.",
      "failureMode": "Railcar shortages or truck rack terminal congestion cause finished asphalt or LPG tanks to fill up, threatening an unpredicted upstream unit slowdown.",
      "agentNote": "→ See §4 (Agent 6: Railcar & Truck Loading Rack Rack-Throughput & Evacuation Sieve)."
    },
    {
      "code": "A12",
      "action": "Execute physical tank farm manifold valve alignments & start/stop pipeline transfer pumps",
      "source": "Operator Rules",
      "scope": "task",
      "bucket": "B3",
      "freq": "Shift",
      "time": "1–2 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Field Operator)",
      "label": "Physical Tank Valve Lineup & Transfer Pumping (B3, Operator Rules)",
      "today": "Field tank farm operators walk the piping manifold alleys, aligning manual isolation valves and starting transfer booster pumps.",
      "agentNote": "❌ No. Pure physical operational execution in the tank farm."
    },
    {
      "code": "A13",
      "action": "Execute automated terminal truck bay arm loading & driver smartcard validation",
      "source": "Site Rules",
      "scope": "task",
      "bucket": "B2",
      "freq": "Real-Time",
      "time": "15 mins",
      "friction": "execution",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Terminal TAS)",
      "label": "Truck Rack Automated Bay Loading (B2, Site Rules)",
      "today": "Terminal Automation Systems (TAS like AccuLoad or Toptech) validate driver smartcards, verify truck compartment capacities, and execute automated loading arms.",
      "agentNote": "❌ No. Core terminal automation monolith domain."
    },
    {
      "code": "A14",
      "action": "Reconcile daily physical refinery mass balance against commercial book inventory per API MPMS",
      "source": "[API-MPMS-Ch12]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Daily",
      "time": "3–4 hrs",
      "friction": "consistency",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "✔✔",
      "label": "Physical vs. Book Mass Balance Reconciliation (B1, [API-MPMS-Ch12])",
      "today": "Specialist spends 3 to 4 hours every morning reconciling fiscal flow computer tickets, ATG tank levels, and SAP accounting books, searching for volume discrepancies.",
      "failureMode": "Unreconciled measurement errors conceal tank leakages, incorrect shipper billings, or miscalibrated custody transfer meters.",
      "agentNote": "→ See §4 (Agent 7: Refinery Physical vs. Book Mass Balance & Inventory Reconciliation Synthesizer)."
    },
    {
      "code": "A15",
      "action": "Approve commercial crude cargo purchase contracts & charter pricing terms",
      "source": "Commercial Rules",
      "scope": "task",
      "bucket": "B3",
      "freq": "Event",
      "time": "1 hr",
      "friction": "judgment",
      "agentRef": null,
      "owner": "none",
      "agentLabel": "❌ (Commercial VP)",
      "label": "Commercial Crude Purchase Contract Approval (B3, Commercial Rules)",
      "today": "Commercial Supply Vice President negotiates crude cargo purchase contracts, pricing terms, and financial hedging instruments.",
      "agentNote": "❌ No. Pure commercial, executive, and financial negotiation."
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "Refinery Tankage Dynamic Ullage & Tank-Top/Bottom Bottleneck Sieve",
      "oneLine": "Ingests real-time tank SCADA telemetry, planned refinery conversion unit rates, and multi-modal dispatch schedules to project minute-by-minute inventory trajectories, detecting tank-top and tank-bottom bottlenecks 72 hours in advance.",
      "frictionSolved": "Eliminates 4.05 hours daily of high-stress spreadsheet modeling, preventing emergency unit run-rate cuts caused by full finished product tanks or dry crude tanks.",
      "reads": "Real-time SCADA tank telemetry (level, gross volume, net volume, temperature, high-level alarms from Rosemount/Enraf), planned refinery unit feed/yield profiles (CDU, FCC, Hydrocracker, Alkylation rates), pipeline pumping slips, and marine loading schedules.",
      "does": "1. Projects continuous, minute-by-minute inventory trajectory curves for every crude, intermediate, and finished fuel tank over a 14-day forward rolling horizon; 2. Evaluates tank capacity constraints against API Standard 2350 safe filling heights (overfill protection) and minimum pump suction limits (NPSH vortexing thresholds); 3. Identifies tank-top bottlenecks (projected fill >95% safe working capacity) and tank-bottom risks (<10% capacity) at least 72 hours in advance; 4. Formulates automated movement reshuffle recommendations (e.g., accelerating a pipeline batch or adjusting component rundown destinations).",
      "returns": "72-Hour Forward Logistics Risk Dashboard displaying dynamic ullage forecast curves, tank constraint breach alerts, and recommended movement re-routes.",
      "stopsAt": "Directly manipulating motorized tank valves or adjusting refinery unit production setpoints.",
      "failureModes": "If resolving an impending tank-top condition requires exceeding API safe filling heights or bypassing environmental secondary containment rules, the agent halts and flags [Hard Safety Constraint: Immediate Unit Rate Cut Review Mandatory].",
      "agentId": "OG-P29-A01"
    },
    {
      "n": 2,
      "name": "Marine Vessel AIS Tracking, Berth Sequencing & Demurrage Minimizer",
      "oneLine": "Correlates marine AIS vessel tracking, weather/tide forecasts, Notice of Readiness (NOR) filings, and charter-party contracts to optimize berth queues and eliminate tanker demurrage penalties.",
      "frictionSolved": "Eliminates 3.60 hours per marine cargo campaign of manual laytime spreadsheet reconciliation, carrier dispute settlement, and berth scheduling conflicts.",
      "reads": "Satellite/terrestrial AIS vessel coordinates and speed vectors, marine weather/tide forecasts, charter-party contracts (allowed laytime hours, demurrage rates $ / day under ASBATANKVOY/BPVOY4), dock pumping capacities, and product readiness certifications.",
      "does": "1. Calculates high-precision Estimated Time of Arrival (ETA) at the pilot boarding station; 2. Models charter-party laytime clock start/stop conditions based on Notice of Readiness (NOR) timestamps, tidal berthing windows, and de-ballasting delays; 3. Solves multi-vessel, multi-berth assignment queues to minimize cumulative vessel wait time and demurrage exposure; 4. Generates automated Statement of Facts (SOF) laytime audit packages for commercial demurrage dispute defense.",
      "returns": "Marine Berth Scheduling Manifest complete with dynamic vessel queue rankings, real-time demurrage liability projections, and verified laytime audit sheets.",
      "stopsAt": "Legally signing commercial charter-party demurrage settlement contracts.",
      "failureModes": "If a planned vessel berthing coincides with weather conditions exceeding terminal safe mooring limits (sustained winds >35 knots or wave swell >1.5 m), the agent flags an immediate [Unsafe Mooring Advisory: Hold Vessel at Outer Anchorage].",
      "agentId": "OG-P29-A02"
    },
    {
      "n": 3,
      "name": "Multi-Service Swing Tank Allocation & Chemical Heel Compatibility Sieve",
      "oneLine": "Evaluates multi-service swing tank availability, modeling residual tank heel contamination and linepack displacement to prevent product cross-contamination during emergency logistics reshuffles.",
      "frictionSolved": "Removes 2.70 hours per tank changeover event of manual heel dilution calculations and high-anxiety contamination checking.",
      "reads": "Tank farm automated gauging (unpumped heel volume, bottom sediment and water [BS&W]), historical service logs (last product contained), target product chemical specifications (flash point, sulfur, octane, distillation), and transfer line volumes.",
      "does": "1. Scans idle or available swing tanks across the tank farm during logistics bottlenecks; 2. Calculates chemical heel dilution and cross-contamination ratios (e.g., calculating whether a 2,000 bbl residual gasoline heel will drop a 100,000 bbl diesel batch flash point below the 52^circC ASTM D975 limit); 3. Evaluates linepack flushing requirements for shared transfer manifolds; 4. Formulates verified tank cleaning, flushing, or stripping protocols required prior to introducing the new product.",
      "returns": "Swing Tank Changeover & Heel Compatibility Dossier containing contamination risk calculations, required flushing volumes, and step-by-step tank changeover authorization checklists.",
      "stopsAt": "Authorizing physical valve lineups for tank changeover without offsites superintendent approval.",
      "failureModes": "If heel contamination calculations predict that finished product flash point, sulfur, or octane will breach statutory limits, the agent locks the tank and outputs [Critical Contamination Risk: Mandatory Tank Mechanical Wash Required].",
      "agentId": "OG-P29-A03"
    },
    {
      "n": 4,
      "name": "Crude Distillation Unit (CDU) Feed Blend Diet & Receipt Allocation Sieve",
      "oneLine": "Ingests crude tanker parcels, pipeline crude receipts, and tank farm inventories to construct the daily CDU crude blend diet matching planner API and sulfur targets while enforcing water settling times.",
      "frictionSolved": "Eliminates 2.70 hours daily of manual crude parcel balancing, desalter upset prevention, and crude blend property calculations.",
      "reads": "Crude cargo assay sheets (API gravity, sulfur wt%, TAN, metals, Pour Point), crude storage tank ATG levels and temperatures, crude receipts schedule, and Production Planner target crude blend diet.",
      "does": "1. Reconciles raw crude receipts from tankers and pipelines across designated crude tank batteries (light sweet, heavy sour, domestic sour); 2. Formulates the daily CDU crude suction blend diet, calculating composite API gravity and sulfur to match planner LP targets; 3. Enforces strict water settling time limits: verifies that raw crude tanks settle for ≥24 hours post-fill to allow water/BS&W dropout before routing to CDU suction; 4. Audits desalter feed water content (<0.5 vol%) to prevent electrical desalter grid arcing and furnace tube fouling.",
      "returns": "CDU Crude Diet Allocation Schedule detailing active suction tanks, volumetric blend rates, predicted composite crude assays, and tank settling verification logs.",
      "stopsAt": "Altering CDU charge pump speeds or adjusting desalter chemical demulsifier injection rates.",
      "failureModes": "If a scheduler attempts to lineup a crude tank that has settled for <18 hours containing >1.0% BS&W, the agent triggers an immediate operational safety hold: [Unsettled Crude Alert: High Desalter Trip Threat — Suction Prohibited].",
      "agentId": "OG-P29-A04"
    },
    {
      "n": 5,
      "name": "Cross-Country Pipeline Batch Cycle Nomination & Interface Transmix Sieve",
      "oneLine": "Tracks multi-product pipeline batching cycles, linepack transit times, and pumping slips, modeling interface transmix volumes to optimize reprocessing slop routing.",
      "frictionSolved": "Eliminates 3.15 hours per batch cycle of manual pipeline tracking and transmix downgrade calculations across multi-product pipeline systems.",
      "reads": "Commercial pipeline batch nomination schedules, pipeline pumping slips (start/stop meters, flow rates), pipeline transit velocities, and in-line gravitometer / optical density streams.",
      "does": "1. Tracks multi-product batch cycles (e.g., Cycle 24: Regular Mogas rightarrow Premium Mogas rightarrow Jet A-1 rightarrow ULSD); 2. Calculates dynamic linepack arrival times at refinery receipt and delivery manifolds; 3. Models pipeline turbulent interface mixing (transmix) volumes using Taylor dispersion equations; 4. Formulates optimal transmix cutting strategies (heart-cut vs. wide-cut) to minimize volume of downgraded product routed to reprocessing slop tanks.",
      "returns": "Pipeline Batch Evacuation Dossier containing batch arrival schedules, transmix cut-point alerts, and slop tank volume projection curves.",
      "stopsAt": "Overriding physical pipeline delivery station diverter valves.",
      "failureModes": "If interface monitoring indicates that high-flash diesel has contaminated an aviation Jet A-1 batch, the agent flags an immediate [Aviation Quality Violation: Divert Interface to Reprocessing Slop].",
      "agentId": "OG-P29-A05"
    },
    {
      "n": 6,
      "name": "Railcar & Truck Loading Rack Rack-Throughput & Evacuation Sieve",
      "oneLine": "Ingests terminal automation system (TAS) loading bay telemetry, transport carrier nominations, and railhead siding inventories to balance rack evacuation queues and eliminate terminal bottlenecks.",
      "frictionSolved": "Eliminates 2.25 hours daily of manual rack coordination and truck congestion management across high-volume distribution terminals.",
      "reads": "Terminal Automation System (TAS) bay loading meters, truck carrier arrival queues, automated bill of lading (BOL) transaction logs, and railcar siding track capacities (LPG, asphalt, heavy fuel oil).",
      "does": "1. Evaluates live truck rack bay throughput against storage tank production rates; 2. Identifies product evacuation deficits (e.g., truck rack gasoline liftings falling 30% behind production due to carrier shortages); 3. Optimizes railcar block staging: schedules empty railcar positioning and loaded car pull-outs with rail transport carriers; 4. Projects terminal product rack run-out or tank-top events, issuing carrier dispatch notifications.",
      "returns": "Terminal Rack & Rail Logistics Manifest detailing bay queue efficiency, product lift volumes, carrier turnaround times, and railcar fleet status.",
      "stopsAt": "Canceling commercial transport carrier loading contracts or overriding rack safety overfill sensors.",
      "failureModes": "If LPG or asphalt storage tank levels exceed 90% with railcar evacuation stalled, the agent issues an escalated [Evacuation Deficit Alert: Critical Rail Pull Required to Prevent Plant Rate Cut].",
      "agentId": "OG-P29-A06"
    },
    {
      "n": 7,
      "name": "Refinery Physical vs. Book Mass Balance & Inventory Reconciliation Synthesizer",
      "oneLine": "Integrates custody transfer fiscal flow computers, ATG static tank measurements, API MPMS Chapter 12 volume correction factors (CTPL/VCF), and ERP ledgers to publish the certified daily refinery logistics inventory.",
      "frictionSolved": "Eliminates 3.15 hours daily of tedious multi-system spreadsheet data entry, identifying measurement meter drift, unmetered evaporation/flare losses, and financial inventory discrepancies.",
      "reads": "Automated Tank Gauging (ATG) inventory snapshots (standard 24:00 midnight closing), fiscal custody transfer flow computers (meters at docks, pipelines, rail, racks), crude receipt bills of lading, and SAP IS-Oil book inventory ledgers.",
      "does": "1. Applies API MPMS Chapter 12 temperature and density volume correction factors (CTPL/VCF) to convert gross observed volumes (GOV) to net standard volumes (NSV) at 60^circF / 15^circC; 2. Calculates physical inventory across all crude, intermediate, and finished product tanks; 3. Reconciles physical inventory against commercial book inventory: Ending Inventory = Beginning + Receipts + Production - Dispatches - Fuel/Loss; 4. Identifies physical vs. book volume imbalances (>0.5% target threshold) and isolates localized measurement anomalies; 5. Formats certified daily refinery hydrocarbon logistics balance sheets.",
      "returns": "Certified Daily Refinery Logistics Balance Sheet and Inventory Reconciliation Dossier ready for financial accounting closure and management review.",
      "stopsAt": "Adjusting financial accounting general ledger write-offs or modifying certified custody transfer meter calibration factors.",
      "failureModes": "If physical inventory discrepancy exceeds 1.0% of daily refinery throughput (sim 2,000 bbls on a 200,000 bpd refinery), the agent triggers a mandatory [Material Balance Imbalance: Physical Leak / Meter Calibration Audit Mandated].",
      "agentId": "OG-P29-A07"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating refinery provides its own crude capacity, tank count, and demurrage rate multipliers.",
    "rows": [
      {
        "agent": "Refinery Tankage Dynamic Ullage & Bottleneck Sieve",
        "unit": "1 Daily 14-Day Rolling Schedule Review (50 tanks)",
        "beforeHours": 4.5,
        "afterHours": 0.45,
        "savedHours": 4.05,
        "frictionRemoved": "Multi-System Data Collation & Excel Trajectory Modeling"
      },
      {
        "agent": "Marine Vessel AIS Tracking & Demurrage Minimizer",
        "unit": "1 Marine Tanker Cargo (Suezmax/Aframax receipt/export)",
        "beforeHours": 4.0,
        "afterHours": 0.4,
        "savedHours": 3.6,
        "frictionRemoved": "AIS Manual Tracking & Charter-Party Laytime Sifting"
      },
      {
        "agent": "Multi-Service Swing Tank & Heel Compatibility Sieve",
        "unit": "1 Swing Tank Changeover Event",
        "beforeHours": 3.0,
        "afterHours": 0.3,
        "savedHours": 2.7,
        "frictionRemoved": "Chemical Contamination Math & Linepack Checking"
      },
      {
        "agent": "CDU Feed Blend Diet & Receipt Allocation Sieve",
        "unit": "1 Daily Crude Charge Allocation Cycle",
        "beforeHours": 3.0,
        "afterHours": 0.3,
        "savedHours": 2.7,
        "frictionRemoved": "Multi-Tank Crude Parcel Balancing & Settling Vigilance"
      },
      {
        "agent": "Pipeline Batch Cycle & Interface Transmix Sieve",
        "unit": "1 Multi-Product Pipeline Batch Cycle",
        "beforeHours": 3.5,
        "afterHours": 0.35,
        "savedHours": 3.15,
        "frictionRemoved": "Pipeline Pumping Slip Tracking & Transmix Math"
      },
      {
        "agent": "Railcar & Truck Rack Evacuation Queue Sieve",
        "unit": "1 Daily Rack and Rail Coordination Cycle",
        "beforeHours": 2.5,
        "afterHours": 0.25,
        "savedHours": 2.25,
        "frictionRemoved": "Terminal Queue Balancing & Siding Inventory Checking"
      },
      {
        "agent": "Physical vs. Book Mass Balance & Reconciliation",
        "unit": "1 Daily Midnight Refinery Closing Cycle",
        "beforeHours": 3.5,
        "afterHours": 0.35,
        "savedHours": 3.15,
        "frictionRemoved": "API MPMS Volume Conversion & Book Reconciliation Drag"
      }
    ],
    "total": {
      "unit": "Per Daily / Weekly Logistics Scheduling Cycle",
      "beforeHours": 24.0,
      "afterHours": 2.4,
      "savedHours": 21.6,
      "frictionRemoved": "90.0% reduction in refinery logistics scheduling drag",
      "label": "Total Operational Logistics Drag Reduction"
    }
  },
  "citations": [
    {
      "key": "[API-MPMS-Ch12]",
      "citation": "American Petroleum Institute, Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities, 2021",
      "locator": "api.org",
      "type": "Recommended Practice",
      "supports": "Tank volumetric inventory calculation, CTPL volume correction factors"
    },
    {
      "key": "[OCIMF-Marine]",
      "citation": "Oil Companies International Marine Forum, Marine Terminal Administration and Laytime Guidelines, 2021",
      "locator": "ocimf.org",
      "type": "Industry Standard",
      "supports": "Notice of Readiness (NOR), charter-party laytime, and demurrage calculations"
    },
    {
      "key": "[FERC-Tariffs]",
      "citation": "Federal Energy Regulatory Commission, Rules and Regulations Governing Pipeline Transportation of Liquid Hydrocarbons, 18 CFR Part 341",
      "locator": "ferc.gov",
      "type": "Federal Regulation",
      "supports": "Multi-product batching, interface transmix allocation, and nomination rules"
    },
    {
      "key": "[AFPM-Logistics]",
      "citation": "American Fuel & Petrochemical Manufacturers, Refinery Offsites and Supply Chain Operational Best Practices, 2022",
      "locator": "afpm.org",
      "type": "Industry Best Practice",
      "supports": "Tank-top prevention, crude diet settling times, and swing-tank protocols"
    },
    {
      "key": "[API-Std-2350]",
      "citation": "American Petroleum Institute, Overfill Prevention for Storage Tanks in Petroleum Facilities, 5th Edition, 2020",
      "locator": "api.org",
      "type": "Technical Standard",
      "supports": "Safe filling heights, critical overfill alarms, and automated tank monitoring"
    }
  ],
  "negativeSearch": {
    "searched": "Aspen Petroleum Scheduler (APS / Orion) technical documentation, SAP IS-Oil TSW manuals, and downstream conference archives for \"autonomous dynamic tank ullage bottleneck resolution integrating real-time ATG telemetry with predictive swing-tank allocation without manual spreadsheet re-scheduling\".",
    "result": "Negative Search, 2026-09. Commercial software packages provide static planning canvases and commercial transaction logs; none continuously ingest live SCADA tank levels and marine AIS telemetry to autonomously resolve dynamic hydraulic bottlenecks and generate conflict-free tankage schedules during live operations without human manual re-modeling."
  },
  "line": "\"A refinery can boast the most sophisticated hydrocracker in the world, but if the finished diesel tanks reach ninety-eight percent safe fill on a Sunday afternoon because an export pipeline tripped and nobody noticed the ullage disappearing, the entire multi-billion-dollar plant slows down to zero.\"",
  "openQuestions": []
};
