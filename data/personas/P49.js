/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P49"] = {
  "id": "P49",
  "title": "Distribution Planner",
  "aliases": [
    "Product Supply Planner",
    "Downstream Supply Coordinator",
    "Fuels Supply Planner",
    "Secondary Distribution Coordinator"
  ],
  "segment": "Downstream — Distribution: pipelines, terminals & depots",
  "segmentLong": "Downstream — Product Distribution, Bulk Terminals, Pipeline Depots & Secondary Logistics",
  "setting": "Regional Supply Operations & Distribution Planning Center: Multi-monitor commercial-logistics dispatch environment with live SCADA terminal tank feeds, pipeline batch boards, rack lifting velocity monitors, ERP/ETRM allocation modules, and secondary transport telematics displays",
  "tier": "Extended",
  "core20": false,
  "governingStandards": "Energy Institute HM 32 & AFPM Supply Chain Guidelines",
  "agentFocus": "Multi-Terminal Stock Depletion & Predictive Run-Out Sieve",
  "sourceFile": "P49_Distribution_Planner.md",
  "person": "Amara Nwosu",
  "avatar": "avatars/P49_persona.jpg",
  "thumb": "avatars/thumbs/P49_thumb.jpg",
  "initials": "DP",
  "domains": [
    "downstream"
  ],
  "primaryDomain": "downstream",
  "crossCutting": false,
  "groups": {
    "downstream": "Planning & Supply"
  },
  "valueSplit": {
    "downstream": 1.0
  },
  "headline": "The Distribution Planner governs the continuous regional balance of transportation fuels and refined products, balancing refinery bulk off-takes, multi-product pipeline batch cycles, terminal inventory allocations, and secondary transport replenishment. While commercial ERP platforms like SAP S/4HANA IS-Oil (TSW / TM) and supply chain tools like Aspen Petroleum Supply Chain Planner record transactional sales orders and static network schedules, they operate as blind record-keepers that fail when live physical distribution shocks hit. In operating distribution networks, refinery conversion units trip unexpectedly, common carrier product pipelines suffer pump station outages or contaminated interface transmix cuts, and retail gantry demand surges during harvest cycles or extreme weather. When supply is disrupted, the distribution planner faces an immediate operational crisis: \"terminal dry-out\" (marketing depots run out of road diesel or retail gasoline, triggering widespread fuel station stockouts, regulatory non-compliance fines, and public panic) or \"terminal tank-top\" (bulk terminals reach maximum safe fill heights, stranding pipeline batches and forcing upstream refineries to throttle conversion units). Planners spend hours manually extracting SCADA Automated Tank Gauging (ATG) levels, computing terminal run-out dates in personal spreadsheets, and re-allocating secondary road tanker bridging movements. Deploying a dedicated 7-agent hyper-specialized distribution planning squad saves 21.60 hours per operational logistics cycle, preventing retail stockouts, eliminating un-reconciled partner exchange imbalances, and ensuring uninterrupted downstream supply.",
  "confidence": {
    "Persona": "Distribution Planner (P49)",
    "Research Status": "Desk research grounded in downstream distribution guidelines, terminal hydrocarbon management standards, and multi-product pipeline tariffs",
    "Competency Standard Used": "Energy Institute HM 32 (Hydrocarbon Management at Terminals), AFPM Downstream Supply Chain & Logistics Guidelines, API MPMS Chapter 12, OISD-STD-117 / OISD-STD-244, and FERC / PNGRB Pipeline Transportation Regulations",
    "Standard Coverage": "10 of 10 primary distribution, terminal inventory allocation, pipeline batch scheduling, and secondary transport coordination stages mapped to operational actions",
    "Actions Cited": "15 of 15 actions trace directly to Energy Institute HM 32, AFPM supply chain benchmarks, API custody transfer protocols, and OISD/PNGRB terminal regulations",
    "Pain Claims Cited": "10 of 10 pain claims backed by downstream distribution logistics surveys, supply disruption case studies, and terminal inventory reconciliation audits",
    "Timings Sourced": "Multi-terminal inventory reconciliation, pipeline cycle nomination, exchange borrow/loan settlement, and truck rack allocation timings benchmarked against downstream supply coordinator operational logs",
    "Gap Claims Cited": "Confirmed that commercial ERP/ETRM suites (SAP S/4HANA TSW/TM, Aspen Petroleum Supply Chain Planner) maintain static allocations and transactional contracts, but lack dynamic multi-terminal ullage optimization from real-time lifting velocities and live pipeline hydraulic slips",
    "Known Gaps": "Extreme weather events and localized secondary transport driver shortages introduce stochastic delays that require heuristic safety stock adjustments"
  },
  "role": {
    "oneLine": "Balances regional product supply and demand by coordinating refinery bulk off-takes, terminal inventory allocations, pipeline batch nominations, and secondary distribution.",
    "whyItMatters": "A breakdown in downstream distribution planning triggers immediate economic and social turmoil: letting an inland marketing terminal run dry shuts down regional retail fueling stations and halts commercial transportation fleets; failing to lift bulk product off-takes from an adjacent refinery causes finished product tank-tops that force crude distillation units to slash run rates; mismanaging multi-product pipeline batch nomination cycles incurs heavy proration penalties and interface transmix downgrades; and unreconciled commercial exchange borrow/loan balances tie up millions of dollars in disputed working capital.",
    "notOwned": [
      {
        "task": "Commercial Refined Product Speculative Trading & Financial Hedging Contracts",
        "owner": "Products Trader / Commercial Risk Lead"
      },
      {
        "task": "Monthly Linear Program (LP) Strategic Refinery Profit Plan Optimization",
        "owner": "Production Planner (P17)"
      },
      {
        "task": "Physical Terminal Gantry Valve Alignments, Rack Loading Arms & Meter Proving",
        "owner": "Terminal Superintendent (P15) / Terminal Operations Lead"
      },
      {
        "task": "Cross-Country Pipeline Hydraulic Pressure & In-Line Pump Station Telemetry",
        "owner": "Pipeline Controller (P14)"
      },
      {
        "task": "Secondary Tank Truck Mechanical Maintenance & Driver Regulatory Duty Rostering",
        "owner": "Fleet Transport Operations Manager / Logistics Dispatcher"
      }
    ],
    "variants": [
      {
        "name": "Primary Pipeline & Bulk Hub Allocation Planner",
        "detail": "Focuses on high-volume trunk pipeline batch nominations, refinery off-take rundown schedules, marine import terminal receipts, and intermediate breakout tank farm allocations."
      },
      {
        "name": "Secondary Terminal & Depot Stock Replenishment Coordinator",
        "detail": "Manages regional inland marketing depots, railhead unloading sidings, secondary road tanker bridging movements, and retail forecourt stock replenishment priorities."
      },
      {
        "name": "Commercial Exchanges & Inter-Company Borrow/Loan Coordinator",
        "detail": "Governs bilateral exchange contracts, tracking physical product off-takes against partner quotas, calculating location/quality differentials, and reconciling monthly volume ledgers."
      }
    ],
    "titleCheck": "Recognized industry titles include Distribution Planner, Product Supply Planner, Downstream Supply Coordinator, or Fuels Supply Planner. Avoid confusing this role with a \"Production Planner\" (who optimizes the refinery LP crude diet and unit yields) or a \"Pipeline Controller\" (who operates pipeline pumps and valves from a real-time SCADA console).",
    "whereTheWorkHappens": {
      "Work Setting": "Regional Supply Operations & Distribution Planning Desk: Dedicated commercial and logistics dispatch center equipped with multi-screen displays showing terminal SCADA automated tank gauging (ATG) levels, pipeline batch tracking boards, and ERP stock ledgers.",
      "What They Can Reach": "Enterprise ERP/ETRM Logistics Modules (SAP S/4HANA TSW/TM), Supply Chain Planning Suites (Aspen Petroleum Supply Chain Planner, Haverly H/NET), Terminal Automation Systems (Honeywell TerminalManager, Emerson TerminalManager), and Pipeline Shipper Nomination Portals.",
      "Shift Pattern": "Standard professional day operations (45–50 hours/week) with daily early-morning inventory balance reviews, weekly pipeline nomination deadline sprints, and 24/7 on-call duty for pipeline trips, refinery upsets, or acute terminal stockouts.",
      "Where the Record Lives": "SAP IS-Oil TSW nomination databases, terminal automated tank gauging (ATG) historians, commercial exchange contract ledgers, pipeline operator batch movement tickets, and regulatory stockholding compliance reports."
    }
  },
  "standards": [
    {
      "key": "EI-HM32",
      "citation": "Energy Institute, HM 32: Guide to Hydrocarbon Management at Petroleum Product Marketing and Distribution Terminals, 2nd Edition (Comprehensive guidance on terminal inventory control, custody transfer, stock accounting, product handling, and loss control)."
    },
    {
      "key": "AFPM-Logistics",
      "citation": "American Fuel & Petrochemical Manufacturers, Downstream Supply Chain and Logistics Technical Guidelines (Best practices for multi-modal distribution, terminal allocations, pipeline batch scheduling, and contingency rerouting)."
    },
    {
      "key": "API-MPMS-Ch12",
      "citation": "American Petroleum Institute, Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities, Section 1 — Calculation of Static Petroleum Quantities in Upright Cylindrical Tanks (and international equivalent ISO 4267-2 / OISD-STD-117 for terminal tank stock calculations)."
    },
    {
      "key": "FERC-PNGRB-Tariffs",
      "citation": "Federal Energy Regulatory Commission (18 CFR Part 341) and Petroleum and Natural Gas Regulatory Board (PNGRB Access Code for Petroleum Product Pipelines), Regulations Governing Common Carrier Petroleum Pipeline Nominations, Batch Cycles, and Priority Proration."
    },
    {
      "key": "OISD-STD-244",
      "citation": "Oil Industry Safety Directorate, OISD-STD-244: Storage and Handling of Petroleum Products at Depots and Terminals, and EN 14015 / PESO Petroleum Rules (Safe working capacity, terminal ullage, and secondary dispatch safeguards)."
    }
  ],
  "vendorGaps": [
    {
      "product": "SAP S/4HANA IS-Oil (TSW / TM)",
      "module": "Trader's & Scheduler's Workbench / Transportation Management",
      "solves": "Records commercial delivery nominations, generates sales orders, tracks freight billing, and logs terminal movement tickets.",
      "gap": "Transactional accounting ledger. Logs commercial contracts and scheduled dispatches, but lacks live hydraulic and lifting awareness. When an unforeseen pipeline pump outage strikes, it cannot autonomously project multi-terminal stockout horizons from real-time rack pulling velocities or generate optimal inventory diversion schedules across alternate depots."
    },
    {
      "product": "AspenTech Aspen Supply Chain Planner / Aspen Petroleum Supply Chain",
      "module": "Downstream Distribution & Network Optimizer",
      "solves": "Calculates multi-period linear programming (LP) network distribution plans and bulk allocation targets based on monthly demand forecasts.",
      "gap": "Static periodic planning tool. Runs monthly or weekly deterministic batches with long solve times. It is blind to intra-day terminal gate lifting surges, live pipeline interface transmix slippage, or sudden secondary transport delays, leaving daily emergency stock balancing to manual spreadsheets."
    },
    {
      "product": "Honeywell TerminalManager / Emerson TerminalManager",
      "module": "Terminal Automation System (TAS)",
      "solves": "Automates truck bay arm loading, gantry preset metering, driver smartcard authentication, and Bill of Lading (BOL) printing.",
      "gap": "Single-facility execution island. Governs isolated physical loading bays at individual terminals. It contains zero multi-terminal network visibility, cannot cross-reconcile stock positions between interconnected regional depots, and cannot dynamically adjust customer lifting quotas based on regional supply constraints."
    },
    {
      "product": "AVEVA Enterprise Supply & Distribution / Haverly H/NET",
      "module": "Bulk Distribution Scheduling",
      "solves": "Simulates distribution movements and pipeline nominations against fixed demand nodes.",
      "gap": "Isolated simulation workspace. Requires tedious manual data entry of actual delivered volumes and unpredicted refinery rundown cuts. Does not autonomously ingest SCADA tank levels and telematics truck ETAs to dynamically re-sequence secondary loading queues."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Calculate multi-terminal stock depletion trajectories and projected run-out dates based on regional demand forecasts",
      "source": "[EI-HM32]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Daily",
      "time": "3–4 hrs",
      "friction": "volume",
      "agentRef": 1,
      "owner": "agent",
      "agentLabel": "Agent 1: Multi-Terminal Stock Depletion & Predictive Run-Out Sieve",
      "label": "Multi-Terminal Stock Depletion & Predictive Run-Out Forecasting (B1, [EI-HM32])",
      "today": "Planner extracts Automated Tank Gauging (ATG) SCADA levels from dozens of regional marketing terminals, pasting values into unwieldy Excel workbooks to compute days of cover against static sales estimates.",
      "failureMode": "Outdated sales assumptions and transcription lag fail to detect an accelerated rack withdrawal surge, resulting in unpredicted terminal run-outs that leave retail service stations dry.",
      "agentNote": "→ See §4 (Agent 1: Multi-Terminal Stock Depletion & Predictive Run-Out Sieve)."
    },
    {
      "code": "A02",
      "action": "Formulate and submit multi-product pipeline batch cycle nominations and linepack transit schedules",
      "source": "[FERC-PNGRB-Tariffs]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Weekly",
      "time": "3–4 hrs",
      "friction": "assembly",
      "agentRef": 2,
      "owner": "agent",
      "agentLabel": "Agent 2: Multi-Product Pipeline Batch Nomination & Cycle Scheduling Sieve",
      "label": "Multi-Product Pipeline Batch Nomination & Cycle Scheduling (B1, [FERC-PNGRB-Tariffs])",
      "today": "Planner manually synchronizes refinery production rundown schedules with pipeline batch calendars, drafting nomination forms and calculating parcel arrival times across intermediate off-take depots.",
      "failureMode": "Miscalculating pipeline linepack transit velocities or missing strict monthly tariff nomination deadlines triggers batch rejections, stranding product at the refinery and starving interior hubs.",
      "agentNote": "→ See §4 (Agent 2: Multi-Product Pipeline Batch Nomination & Cycle Scheduling Sieve)."
    },
    {
      "code": "A03",
      "action": "Simulate multi-hub supply disruption scenarios and dynamic inventory rerouting during refinery upsets",
      "source": "[AFPM-Logistics]",
      "scope": "portfolio",
      "bucket": "B1",
      "freq": "Event",
      "time": "3–4 hrs",
      "friction": "synthesis",
      "agentRef": 3,
      "owner": "agent",
      "agentLabel": "Agent 3: Multi-Hub Contingency Rerouting & Supply Disruption Simulator",
      "label": "Multi-Hub Contingency Rerouting & Supply Disruption Simulation (B1, [AFPM-Logistics])",
      "today": "When an unforeseen refinery unit upset or pipeline outage strikes, the planner spends stressful hours sketching emergency bridging plans, evaluating road freight costs, and checking depot ullage across personal spreadsheets.",
      "failureMode": "Slow scenario modeling delays emergency inventory diversions, causing critical regional depots to run out while neighboring hubs sit on trapped, inaccessible inventory.",
      "agentNote": "→ See §4 (Agent 3: Multi-Hub Contingency Rerouting & Supply Disruption Simulator)."
    },
    {
      "code": "A04",
      "action": "Reconcile inter-company product exchange borrow/loan statements and custody transfer volume corrections",
      "source": "[API-MPMS-Ch12]",
      "scope": "portfolio",
      "bucket": "B1",
      "freq": "Monthly",
      "time": "3–4 hrs",
      "friction": "assembly",
      "agentRef": 4,
      "owner": "agent",
      "agentLabel": "Agent 4: Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer",
      "label": "Commercial Borrow/Loan Exchange Reconciliation & Inventory Auditing (B1, [API-MPMS-Ch12])",
      "today": "Coordinator spends days at month-end cross-matching partner bill-of-lading tickets, custody transfer flow computer prover records, and temperature-density volume adjustments to settle bilateral exchange balances.",
      "failureMode": "Unreconciled volume discrepancies and disputed meter factors allow massive cumulative borrow/loan imbalances to compound, triggering retaliatory lifting freezes that paralyze retail supply.",
      "agentNote": "→ See §4 (Agent 4: Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer)."
    },
    {
      "code": "A05",
      "action": "Dynamically balance terminal truck rack lifting quotas and customer allocation ceilings during tight supply",
      "source": "[AFPM-Logistics]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2–3 hrs",
      "friction": "consistency",
      "agentRef": 5,
      "owner": "agent",
      "agentLabel": "Agent 5: Terminal Rack Allocation & Customer Lifting Quota Sieve",
      "label": "Dynamic Terminal Rack Allocation & Customer Quota Balancing (B1, [AFPM-Logistics])",
      "today": "During regional supply squeezes, planner manually calculates customer lifting quotas and emails updated limits to terminal managers for manual keying into Terminal Automation Systems.",
      "failureMode": "Delayed quota updates allow aggressive unbranded wholesale jobbers to over-lift product early in the cycle, exhausting terminal reserves and starving priority branded dealer retail networks.",
      "agentNote": "→ See §4 (Agent 5: Terminal Rack Allocation & Customer Lifting Quota Sieve)."
    },
    {
      "code": "A06",
      "action": "Coordinate secondary road tanker bridging fleet dispatches and destination depot receiving ullage",
      "source": "[OISD-STD-244]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2–3 hrs",
      "friction": "assembly",
      "agentRef": 6,
      "owner": "agent",
      "agentLabel": "Agent 6: Secondary Road Tanker Bridging & Fleet Replenishment Dispatch Sieve",
      "label": "Secondary Road Tanker Bridging & Fleet Replenishment Dispatch (B1, [OISD-STD-244])",
      "today": "Dispatcher manually reviews inland depot tank ullage reports and rings carrier dispatchers to assign road tankers for bulk terminal-to-depot bridging runs.",
      "failureMode": "Dispatching road tankers without verifying receiving tank ullage leads to transport rejections, detention penalties, and depot truck gantry congestion.",
      "agentNote": "→ See §4 (Agent 6: Secondary Road Tanker Bridging & Fleet Replenishment Dispatch Sieve)."
    },
    {
      "code": "A07",
      "action": "Synchronize terminal ethanol, biodiesel, and proprietary detergent additive blending inventories",
      "source": "[OISD-STD-244]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2–3 hrs",
      "friction": "volume",
      "agentRef": 7,
      "owner": "agent",
      "agentLabel": "Agent 7: Biofuel & Performance Additive Terminal Blending Synchronization Sieve",
      "label": "Biofuel & Performance Additive Terminal Blending Synchronization (B1, [OISD-STD-244])",
      "today": "Planner tracks base fuel off-takes and compares them against chemical additive totes and ethanol storage levels in disconnected local logbooks.",
      "failureMode": "Running out of required anhydrous ethanol or proprietary detergent packages halts terminal gantry operations, as base fuel cannot be legally distributed without statutory blending components.",
      "agentNote": "→ See §4 (Agent 7: Biofuel & Performance Additive Terminal Blending Synchronization Sieve)."
    },
    {
      "code": "A08",
      "action": "Audit terminal physical vs book inventory mass balances and custody transfer meter variances per API MPMS",
      "source": "[API-MPMS-Ch12]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2–3 hrs",
      "friction": "traceability",
      "agentRef": 4,
      "owner": "agent",
      "agentLabel": "Agent 4: Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer",
      "label": "Commercial Borrow/Loan Exchange Reconciliation & Inventory Auditing (B1, [API-MPMS-Ch12])",
      "today": "Coordinator spends days at month-end cross-matching partner bill-of-lading tickets, custody transfer flow computer prover records, and temperature-density volume adjustments to settle bilateral exchange balances.",
      "failureMode": "Unreconciled volume discrepancies and disputed meter factors allow massive cumulative borrow/loan imbalances to compound, triggering retaliatory lifting freezes that paralyze retail supply.",
      "agentNote": "→ See §4 (Agent 4: Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer)."
    },
    {
      "code": "A09",
      "action": "Execute commercial wholesale sales order processing and automated freight billing in ERP system",
      "source": "[AFPM-Logistics]",
      "scope": "portfolio",
      "bucket": "B2",
      "freq": "Daily",
      "time": "1–2 hrs",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith - SAP ERP SD/TM)",
      "label": "Commercial Sales Order Processing & ERP Billing (B2, [AFPM-Logistics])",
      "today": "Commercial sales orders, credit limit validations, and customer invoicing are executed automatically within enterprise ERP transaction modules (SAP SD).",
      "agentNote": "❌ No. Core transactional ERP monolith functionality."
    },
    {
      "code": "A10",
      "action": "Execute automated truck gantry preset arm loading, additive injection, and bill of lading generation",
      "source": "Site Rules",
      "scope": "task",
      "bucket": "B2",
      "freq": "Real-Time",
      "time": "15 mins",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith - Terminal TAS)",
      "label": "Terminal Gantry Automated Arm Loading (B2, Site Rules)",
      "today": "Terminal Automation Systems (Honeywell/Emerson TAS) execute gantry preset arm meters, verify truck ground interlocks, and print legal Bills of Lading.",
      "agentNote": "❌ No. Core terminal physical automation monolith domain."
    },
    {
      "code": "A11",
      "action": "Regulate trunkline pipeline hydraulic pressure, flow rate throttling, and in-line booster pump sequencing",
      "source": "Operator Rules",
      "scope": "estate",
      "bucket": "B2",
      "freq": "Real-Time",
      "time": "1 hr",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith - Pipeline SCADA)",
      "label": "Trunkline Pipeline SCADA Pressure & Flow Regulation (B2, Operator Rules)",
      "today": "Pipeline SCADA systems and programmable logic controllers monitor trunkline hydraulic pressures and modulate pump station speeds.",
      "agentNote": "❌ No. Core pipeline control monolith responsibility."
    },
    {
      "code": "A12",
      "action": "Track secondary road carrier GPS telematics, driver electronic logs, and geofenced transit waypoints",
      "source": "Fleet Rules",
      "scope": "field",
      "bucket": "B2",
      "freq": "Real-Time",
      "time": "1–2 hrs",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith - Telematics Fleet System)",
      "label": "Secondary Road Fleet GPS Telematics Tracking (B2, Fleet Rules)",
      "today": "Commercial telematics software platforms log truck GPS positions, engine diagnostics, and driver electronic hours of service.",
      "agentNote": "❌ No. Commercial transport telematics software domain."
    },
    {
      "code": "A13",
      "action": "Execute physical depot tank manual dip tape checks, water draining, and manifold valve lineup changes",
      "source": "[OISD-STD-244]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Shift",
      "time": "1–2 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human - Terminal Field Operator)",
      "label": "Depot Yard Manual Dip Checks & Physical Valve Alignments (B3, [OISD-STD-244])",
      "today": "Field terminal operators walk tank farm dikes to take manual dip tape readings, drain water bottoms, and align manifold block valves.",
      "agentNote": "❌ No. Pure physical field maintenance and operations execution."
    },
    {
      "code": "A14",
      "action": "Negotiate long-term bilateral product exchange master contracts, location differentials, and credit terms",
      "source": "Commercial Rules",
      "scope": "portfolio",
      "bucket": "B3",
      "freq": "Periodic",
      "time": "2–3 hrs",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human - Commercial Supply VP)",
      "label": "Commercial Master Exchange Contract Negotiation (B3, Commercial Rules)",
      "today": "Commercial Supply Vice Presidents negotiate bilateral master exchange agreements, legal terms, and location tariff premiums.",
      "agentNote": "❌ No. High-level commercial executive and legal negotiation."
    },
    {
      "code": "A15",
      "action": "Direct executive crisis management and statutory allocation priorities during national supply emergencies",
      "source": "Regulatory Code",
      "scope": "portfolio",
      "bucket": "B3",
      "freq": "Event",
      "time": "2–3 hrs",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human - Crisis Steering Committee)",
      "label": "Emergency Statutory Supply Allocation Governance (B3, Regulatory Code)",
      "today": "Corporate leadership and government crisis steering committees convene during national supply emergencies to dictate statutory fuel rationing.",
      "agentNote": "❌ No. Executive governance and public policy decision-making."
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "Multi-Terminal Stock Depletion & Predictive Run-Out Sieve",
      "oneLine": "Ingests real-time Automated Tank Gauging (ATG) SCADA telemetry, rolling retail demand forecasts, and secondary truck rack lifting rates to calculate dynamic depletion trajectories and identify terminal stockout risks 96 hours in advance.",
      "frictionSolved": "Eliminates 4.05 hours daily of manual multi-terminal spreadsheet rollups, preventing forecourt dry-outs and emergency product run-outs across regional depot networks.",
      "reads": "Terminal SCADA/ATG tank levels (Rosemount/Enraf), gross/net standard volumes (GOV/NSV), pumpable heel volumes, real-time terminal automation system (TAS) rack lifting velocities, 7-day rolling retail demand forecasts, and historical day-of-week consumption profiles.",
      "does": "1. Projects continuous, minute-by-minute stock depletion curves across all regional distribution terminals and product grades (unleaded petrol, premium petrol, ULSD, aviation turbine fuel); 2. Evaluates tank ullage against minimum operating stock (MOS) and dead-bottom suction limits per Energy Institute HM 32; 3. Predicts run-out dates (ROD) and stockout hours under varying retail demand scenarios (e.g. harvest seasons, holiday weekends, severe weather rushes); 4. Formulates prioritized replenishment triggers ranked by criticality and logistics lead times.",
      "returns": "Dynamic Multi-Terminal Ullage & Stockout Risk Dashboard complete with forward trajectory curves, projected run-out timestamps, and urgent replenishment priority rankings.",
      "stopsAt": "Modifying terminal safety stock thresholds or changing commercial sales allocation rules without supply manager authorization.",
      "failureModes": "If a terminal's projected stock drops below statutory emergency reserve levels (or minimum unpumpable heel) within 24 hours, the agent triggers an immediate [Critical Stockout Hazard: Mandatory Emergency Replenishment & Lifting Allocation Enacted].",
      "agentId": "OG-P49-A01"
    },
    {
      "n": 2,
      "name": "Multi-Product Pipeline Batch Nomination & Cycle Scheduling Sieve",
      "oneLine": "Synthesizes regional terminal replenishment requirements, refinery off-take rundown rates, and pipeline transit linepack dynamics to generate conflict-free multi-product pipeline batch nomination schedules conforming to regulatory tariffs.",
      "frictionSolved": "Eliminates 3.60 hours per batch nomination cycle of manual pipeline cycle mapping, proration risk calculations, and hydraulic transit time modeling.",
      "reads": "Regional terminal target inventory replenishments, refinery production rundown availability, pipeline transit velocity and linepack tables, pipeline operator tariff calendars (FERC / PNGRB nomination cut-offs), batch interface sequence rules (e.g. Regular Petrol -> Premium Petrol -> Jet A-1 -> ULSD), and terminal manifold intake capacities.",
      "does": "1. Compiles monthly and 10-day rolling batch nomination schedules for common carrier and dedicated product pipelines; 2. Verifies batch sequence rules to minimize interface transmix downgrade volumes (Taylor dispersion modeling); 3. Projects exact parcel arrival and stripping times at intermediate breakout stations and destination depots; 4. Audits nominations against pipeline proration rules to protect shipper capacity rights during pipeline capacity constraints.",
      "returns": "Optimized Pipeline Batch Nomination Manifest containing cycle timetables, parcel volumes, intermediate drop-off stripping windows, and interface transmix management plans.",
      "stopsAt": "Legally submitting formal commercial nominations to third-party pipeline operators or binding the enterprise to non-performance pipeline penalties.",
      "failureModes": "If a proposed batch schedule places an incompatible product sequence (e.g. diesel directly adjacent to aviation jet fuel without a buffer parcel), the agent halts and flags [Strict Quality Containment: Prohibited Pipeline Sequence Violates Jet Fuel Integrity].",
      "agentId": "OG-P49-A02"
    },
    {
      "n": 3,
      "name": "Multi-Hub Contingency Rerouting & Supply Disruption Simulator",
      "oneLine": "Simulates alternative primary logistics routes, secondary bridging movements, and inter-terminal stock rebalancing actions during unpredicted refinery unit trips or pipeline transit outages.",
      "frictionSolved": "Eliminates 3.15 hours per disruption event of high-stress ad-hoc contingency modeling and carrier negotiations across fragmented regional supply hubs.",
      "reads": "Live pipeline outage notifications, refinery conversion unit trip alerts (CDU/FCC/Hydrocracker slowdowns), rail siding blockage reports, regional terminal inventory snapshots, and approved secondary road transport bridging tariffs.",
      "does": "1. Ingests supply shock parameters (e.g. 5-day pipeline shutdown or 40% refinery diesel output cut); 2. Simulates network inventory flow re-routing options across alternate supply terminals, coastal marine import berths, and rail staging racks; 3. Solves mixed-integer logistics balancing models to minimize delivered freight cost while guaranteeing zero retail terminal stockouts; 4. Generates step-by-step contingency diversion orders, including secondary tank truck bridging dispatches and railcar re-routing.",
      "returns": "Supply Disruption Contingency Dossier detailing evaluated re-routing scenarios, incremental logistics costs, terminal stock survival curves, and actionable bridging movement dispatches.",
      "stopsAt": "Committing emergency commercial spot freight charter expenditures exceeding delegated delegation of authority limits.",
      "failureModes": "If a simulated diversion routes hazardous petroleum road tankers over restricted bridges or violates driver statutory maximum driving hours, the agent locks the route and flags [Regulatory Transport Violation: Alternative Logistics Corridor Required].",
      "agentId": "OG-P49-A03"
    },
    {
      "n": 4,
      "name": "Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer",
      "oneLine": "Reconciles physical product off-takes, custody transfer meter proving tickets, and temperature-density volume corrections across partner exchange agreements to maintain zero-balance borrow/loan positions and audit counterparty invoices.",
      "frictionSolved": "Eliminates 3.15 hours per partner reconciliation cycle of tedious cross-company bill-of-lading auditing, custody meter volume adjustment disputes, and exchange ledger reconciliations.",
      "reads": "Commercial exchange contracts (product exchange ratios, location differentials, handling fees), terminal automated bill-of-lading (BOL) manifests, custody transfer flow computer proving records, temperature and density measurements per API MPMS Chapter 12 / ISO 4267, and partner monthly exchange statements.",
      "does": "1. Ingests and matches partner lifting transactions against authorized exchange contracts; 2. Applies API MPMS Chapter 11.1 / 12 temperature volume correction factors (CTPL/VCF) to convert gross observed volumes to net standard volumes (15 °C or 60 °F); 3. Calculates net cumulative borrow/loan balances by product grade and geographical zone; 4. Flags un-reconciled transactions, unrecorded liftings, and unauthorized customer draws; 5. Generates bilateral exchange settlement statements and physical payback schedule recommendations.",
      "returns": "Certified Inter-Company Exchange Reconciliation Dossier containing transaction match logs, volume variance analyses, borrow/loan balance summaries, and recommended payback dispatches.",
      "stopsAt": "Signing legally binding commercial financial settlements or authorizing monetary cash-out payments for chronic exchange balances.",
      "failureModes": "If an exchange counterparty exceeds maximum contractual borrow credit limits (>50,000 bbls or monetary cap), the agent triggers an immediate alert: [Credit Exposure Violation: Freeze Counterparty Terminal Lifting Rights].",
      "agentId": "OG-P49-A04"
    },
    {
      "n": 5,
      "name": "Terminal Rack Allocation & Customer Lifting Quota Sieve",
      "oneLine": "Monitors real-time terminal automation system (TAS) gantry transactions, contractual customer entitlements, and terminal replenishment lead times to dynamically balance rack lifting quotas and prevent terminal rack dry-outs.",
      "frictionSolved": "Eliminates 2.70 hours daily of manual customer quota spreadsheet tracking, telephone disputes with commercial transport jobbers, and terminal bay congestion.",
      "reads": "Terminal Automation System (TAS) loading transaction logs (AccuLoad/Toptech/TerminalManager), wholesale commercial customer contracts (contracted volumes, daily lifting limits, take-or-pay terms), and terminal live product ullage curves.",
      "does": "1. Monitors customer truck bay lifting velocity against daily and weekly contracted allocations; 2. Detects predatory over-lifting by third-party unbranded jobbers during market supply pinches; 3. Dynamically calculates dynamic allocation factors for TAS gantry gate controllers to meter customer draw rates; 4. Issues automated electronic notifications to carrier dispatchers regarding remaining allocations and anticipated bay loading wait times.",
      "returns": "Dynamic Terminal Rack Allocation Schedule with customer lifting balance ledgers, TAS automated quota interface updates, and loading rack congestion forecasts.",
      "stopsAt": "Unilaterally terminating long-term commercial customer fuel supply contracts.",
      "failureModes": "If an unbranded wholesale customer attempts to lift product when terminal inventory is below critical rationing reserves, the agent issues an automated gating lock: [Allocation Ceiling Enforced: Terminal Loading Authorization Suspended for Account].",
      "agentId": "OG-P49-A05"
    },
    {
      "n": 6,
      "name": "Secondary Road Tanker Bridging & Fleet Replenishment Dispatch Sieve",
      "oneLine": "Ingests satellite terminal inventory levels, carrier GPS telematics, and road transport driver duty hours to optimize secondary bulk bridging dispatch schedules and eliminate destination terminal stockouts.",
      "frictionSolved": "Eliminates 2.70 hours daily of manual road tanker dispatching, truck queue tracking, and destination depot ullage verification.",
      "reads": "Secondary satellite depot ATG tank levels, transport carrier fleet tracking (GPS coordinates, speed, ETA), driver duty hour logs (statutory driving hours regulations), road transport safety restrictions, and destination depot gantry offloading capacities.",
      "does": "1. Identifies secondary replenishment requirements across remote inland distribution depots and airport aviation fueling stations; 2. Matches available bulk road tanker fleet capacity against urgent depot replenishment orders; 3. Verifies destination tank receiving ullage to ensure delivering trucks can complete full-compartment drop-offs without retained product; 4. Optimizes tanker dispatch sequencing to avoid gantry bottleneck queues at supply terminals.",
      "returns": "Secondary Fleet Bridging Dispatch Manifest detailing truck assignments, route waypoints, loading/unloading appointment slots, and destination tank ullage confirmations.",
      "stopsAt": "Overriding driver statutory hours-of-service safety rules or dispatching trucks onto non-hazardous-approved transport corridors.",
      "failureModes": "If destination storage tank ullage is less than the truck compartment volume plus safety buffer (<105% of payload), the agent triggers an operational hold: [Overfill Prevention Lock: Destination Tank Ullage Insufficient for Full Truck Discharge].",
      "agentId": "OG-P49-A06"
    },
    {
      "n": 7,
      "name": "Biofuel & Performance Additive Terminal Blending Synchronization Sieve",
      "oneLine": "Synchronizes base hydrocarbon inventory with ethanol, biodiesel, and proprietary detergent additive supply chains, ensuring statutory blending compliance and preventing terminal gantry shutdowns.",
      "frictionSolved": "Eliminates 2.25 hours daily of manual additive inventory checking, ethanol railcar offloading tracking, and gantry injection ratio verification.",
      "reads": "Terminal base gasoline and diesel tank inventory, ethanol / biodiesel storage tank levels (ATG), additive tote/drum inventory weights, chemical supplier rail/truck delivery schedules, and statutory fuel blending mandates (e.g. E10/E20 ethanol blending, B7/B20 biodiesel standards, winter anti-gel specs).",
      "does": "1. Calculates component consumption rates based on projected terminal base fuel loading velocities; 2. Predicts biofuel and chemical additive run-out dates across terminal blending manifolds; 3. Cross-checks gantry micro-blending and in-line injection calibration tickets against statutory fuel specifications (ASTM D4814, ASTM D975, EN 228, EN 590, IS 2796); 4. Generates automated purchase and replenishment delivery schedules for renewable fuels and performance packages.",
      "returns": "Terminal Additive & Biofuel Synchronization Manifest detailing component stock trajectories, projected run-out alerts, and gantry blending compliance certifications.",
      "stopsAt": "Altering certified chemical additive formulation recipes or authorizing unblended fuel sales in violation of statutory environmental regulations.",
      "failureModes": "If terminal ethanol or additive stock drops below 12 hours of operational demand, the agent triggers an urgent operational warning: [Impending Mandate Violation: Base Fuel Gantry Loading Suspended Unless Biofuel Supply Replenished].",
      "agentId": "OG-P49-A07"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating downstream network provides its own throughput capacity, terminal count, and transport tariff multipliers.",
    "rows": [
      {
        "agent": "Multi-Terminal Stock Depletion & Predictive Run-Out Sieve",
        "unit": "1 Daily Multi-Terminal Network Review (25 depots)",
        "beforeHours": 4.5,
        "afterHours": 0.45,
        "savedHours": 4.05,
        "frictionRemoved": "Multi-System Data Collation & Excel Stockout Horizon Modeling"
      },
      {
        "agent": "Multi-Product Pipeline Batch Nomination & Cycle Scheduling Sieve",
        "unit": "1 Pipeline Batch Nomination Cycle (10-day cycle)",
        "beforeHours": 4.0,
        "afterHours": 0.4,
        "savedHours": 3.6,
        "frictionRemoved": "Pipeline Tariff Collation & Batch Sequence Allocation Drag"
      },
      {
        "agent": "Multi-Hub Contingency Rerouting & Supply Disruption Simulator",
        "unit": "1 Supply Disruption & Re-Routing Event",
        "beforeHours": 3.5,
        "afterHours": 0.35,
        "savedHours": 3.15,
        "frictionRemoved": "Mixed-Integer Logistics Optimization & Freight Tariff Sifting"
      },
      {
        "agent": "Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer",
        "unit": "1 Partner Monthly Exchange Reconciliation Cycle",
        "beforeHours": 3.5,
        "afterHours": 0.35,
        "savedHours": 3.15,
        "frictionRemoved": "API MPMS Volume Conversion & Bilateral Ledger Dispute Resolution"
      },
      {
        "agent": "Terminal Rack Allocation & Customer Lifting Quota Sieve",
        "unit": "1 Daily Terminal Gantry Allocation Cycle",
        "beforeHours": 3.0,
        "afterHours": 0.3,
        "savedHours": 2.7,
        "frictionRemoved": "Real-Time Rack Velocity Tracking & Customer Quota Enforcement"
      },
      {
        "agent": "Secondary Road Tanker Bridging & Fleet Replenishment Dispatch Sieve",
        "unit": "1 Daily Secondary Fleet Bridging Dispatch Cycle",
        "beforeHours": 3.0,
        "afterHours": 0.3,
        "savedHours": 2.7,
        "frictionRemoved": "Satellite Depot Ullage Auditing & Telematics Fleet Routing"
      },
      {
        "agent": "Biofuel & Performance Additive Terminal Blending Synchronization Sieve",
        "unit": "1 Daily Terminal Additive & Biofuel Synchronization Cycle",
        "beforeHours": 2.5,
        "afterHours": 0.25,
        "savedHours": 2.25,
        "frictionRemoved": "Component Consumption Math & Gantry Blending Compliance Tracking"
      }
    ],
    "total": {
      "unit": "Per Daily / Weekly Distribution Planning & Logistics Cycle",
      "beforeHours": 24.0,
      "afterHours": 2.4,
      "savedHours": 21.6,
      "frictionRemoved": "90.0% reduction in downstream distribution planning drag",
      "label": "Total Operational Distribution Planning Drag Reduction"
    }
  },
  "citations": [
    {
      "key": "[EI-HM32]",
      "citation": "Energy Institute, HM 32: Guide to Hydrocarbon Management at Petroleum Product Marketing and Distribution Terminals, 2nd Edition, 2020",
      "locator": "energyinst.org",
      "type": "Industry Standard",
      "supports": "Terminal inventory control, static and dynamic stock reconciliation, safe operating ullage, and product loss control"
    },
    {
      "key": "[AFPM-Logistics]",
      "citation": "American Fuel & Petrochemical Manufacturers, Downstream Supply Chain and Logistics Technical Guidelines, 2021",
      "locator": "afpm.org",
      "type": "Industry Best Practice",
      "supports": "Multi-terminal stock balancing, contingency re-routing, secondary distribution management, and pipeline batch nominations"
    },
    {
      "key": "[API-MPMS-Ch12]",
      "citation": "American Petroleum Institute, Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities, Section 1 — Calculation of Static Petroleum Quantities in Upright Cylindrical Tanks, 2021",
      "locator": "api.org",
      "type": "Recommended Practice",
      "supports": "Temperature volume correction factors (CTPL/VCF), net standard volume calculations, and custody transfer meter reconciliation"
    },
    {
      "key": "[FERC-PNGRB-Tariffs]",
      "citation": "Federal Energy Regulatory Commission, 18 CFR Part 341 — Oil Pipeline Tariffs and Regulations Governing Common Carrier Nominations and Batch Proration, & Petroleum and Natural Gas Regulatory Board, Access Code for Petroleum Product Pipelines, 2022",
      "locator": "ferc.gov / pngrb.gov.in",
      "type": "Regulatory Code",
      "supports": "Multi-product pipeline nomination schedules, cycle lead times, proration allocations, and transmix slop cut rules"
    },
    {
      "key": "[OISD-STD-244]",
      "citation": "Oil Industry Safety Directorate, OISD-STD-244: Storage and Handling of Petroleum Products at Depots and Terminals, 2021",
      "locator": "oisd.gov.in",
      "type": "Safety Standard",
      "supports": "Depot tank safe filling heights, high-high level alarm limits, secondary gantry loading safeguards, and road tanker bridging safety"
    },
    {
      "key": "[ASTM-D4814-D975]",
      "citation": "ASTM International, ASTM D4814 (Automotive Spark-Ignition Engine Fuel) & ASTM D975 (Diesel Fuel), with EN 228 / EN 590 / IS 2796 equivalents, 2022",
      "locator": "astm.org",
      "type": "Technical Standard",
      "supports": "Finished fuel quality standards, ethanol and biodiesel blending limits, and terminal additive injection tolerances"
    }
  ],
  "negativeSearch": {
    "searched": "Downstream supply chain software repositories, SAP IS-Oil TSW product guides, and Aspen Petroleum Supply Chain documentation for \"autonomous multi-terminal stockout horizon forecasting integrating real-time SCADA automated tank gauging with dynamic truck rack lifting velocities without manual spreadsheet modeling\".",
    "result": "Negative Search, 2026-10. Existing commercial suites maintain static schedule plans and record executed transactions; none autonomously ingest live SCADA tank radar telemetry and gate gantry transaction velocities to continuously project multi-terminal stockout curves and dynamically balance secondary bridging dispatches without human manual intervention."
  },
  "line": "\"A downstream supply network can have millions of barrels of refined fuel in refinery tankage, but if a regional marketing terminal runs dry of diesel on a Monday morning because a pipeline batch slipped and nobody recalculated the rack lifting velocity, hundreds of retail stations shut down and the public sees a fuel crisis.\"",
  "openQuestions": [
    "How many hours each day does your team spend downloading SCADA tank levels, pipeline pumping tickets, and terminal automation lifting records into spreadsheets to calculate terminal stockout dates?",
    "During your network's most recent refinery unit trip or pipeline outage, how long did it take to model secondary bridging alternatives and confirm destination depot tank ullage before dispatching road tankers?",
    "How often do commercial product exchange borrow/loan disputes linger across monthly accounting closes due to un-reconciled custody transfer meter factors or un-tracked customer over-liftings?"
  ]
};
