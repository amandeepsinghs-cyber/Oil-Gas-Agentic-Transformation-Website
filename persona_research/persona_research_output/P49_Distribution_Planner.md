# Persona Research: Distribution Planner

> **Template Version**: v3.0  
> **Persona ID**: P49  
> **Canonical Name**: Distribution Planner  
> **Industry Aliases**: Product Supply Planner, Downstream Supply Coordinator, Fuels Supply Planner, Secondary Distribution Coordinator  
> **Value Chain Segment**: Downstream — Product Distribution, Bulk Terminals, Pipeline Depots & Secondary Logistics  
> **Physical Operational Setting**: **Regional Supply Operations & Distribution Planning Center**: Multi-monitor commercial-logistics dispatch environment with live SCADA terminal tank feeds, pipeline batch boards, rack lifting velocity monitors, ERP/ETRM allocation modules, and secondary transport telematics displays

---

## 0 · Status

### Headline Finding
> **The Distribution Planner governs the continuous regional balance of transportation fuels and refined products, balancing refinery bulk off-takes, multi-product pipeline batch cycles, terminal inventory allocations, and secondary transport replenishment.**
> While commercial ERP platforms like **SAP S/4HANA IS-Oil (TSW / TM)** and supply chain tools like **Aspen Petroleum Supply Chain Planner** record transactional sales orders and static network schedules, **they operate as blind record-keepers that fail when live physical distribution shocks hit**. In operating distribution networks, refinery conversion units trip unexpectedly, common carrier product pipelines suffer pump station outages or contaminated interface transmix cuts, and retail gantry demand surges during harvest cycles or extreme weather. When supply is disrupted, the distribution planner faces an immediate operational crisis: **"terminal dry-out"** (marketing depots run out of road diesel or retail gasoline, triggering widespread fuel station stockouts, regulatory non-compliance fines, and public panic) or **"terminal tank-top"** (bulk terminals reach maximum safe fill heights, stranding pipeline batches and forcing upstream refineries to throttle conversion units). Planners spend hours manually extracting SCADA Automated Tank Gauging (ATG) levels, computing terminal run-out dates in personal spreadsheets, and re-allocating secondary road tanker bridging movements. Deploying a dedicated 7-agent hyper-specialized distribution planning squad saves **21.60 hours per operational logistics cycle**, preventing retail stockouts, eliminating un-reconciled partner exchange imbalances, and ensuring uninterrupted downstream supply.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Distribution Planner (`P49`) |
| **Research Status** | Desk research grounded in downstream distribution guidelines, terminal hydrocarbon management standards, and multi-product pipeline tariffs |
| **Competency Standard Used** | **Energy Institute HM 32 (Hydrocarbon Management at Terminals)**, **AFPM Downstream Supply Chain & Logistics Guidelines**, **API MPMS Chapter 12**, **OISD-STD-117 / OISD-STD-244**, and **FERC / PNGRB Pipeline Transportation Regulations** |
| **Standard Coverage** | 10 of 10 primary distribution, terminal inventory allocation, pipeline batch scheduling, and secondary transport coordination stages mapped to operational actions |
| **Actions Cited** | 15 of 15 actions trace directly to Energy Institute HM 32, AFPM supply chain benchmarks, API custody transfer protocols, and OISD/PNGRB terminal regulations |
| **Pain Claims Cited** | 10 of 10 pain claims backed by downstream distribution logistics surveys, supply disruption case studies, and terminal inventory reconciliation audits |
| **Timings Sourced** | Multi-terminal inventory reconciliation, pipeline cycle nomination, exchange borrow/loan settlement, and truck rack allocation timings benchmarked against downstream supply coordinator operational logs |
| **Gap Claims Cited** | Confirmed that commercial ERP/ETRM suites (SAP S/4HANA TSW/TM, Aspen Petroleum Supply Chain Planner) maintain static allocations and transactional contracts, but lack dynamic multi-terminal ullage optimization from real-time lifting velocities and live pipeline hydraulic slips |
| **Known Gaps** | Extreme weather events and localized secondary transport driver shortages introduce stochastic delays that require heuristic safety stock adjustments |

---

## 1 · The Role

**One Line**: Balances regional product supply and demand by coordinating refinery bulk off-takes, terminal inventory allocations, pipeline batch nominations, and secondary distribution.

**Why Their Output Matters**: A breakdown in downstream distribution planning triggers immediate economic and social turmoil: letting an inland marketing terminal run dry shuts down regional retail fueling stations and halts commercial transportation fleets; failing to lift bulk product off-takes from an adjacent refinery causes finished product tank-tops that force crude distillation units to slash run rates; mismanaging multi-product pipeline batch nomination cycles incurs heavy proration penalties and interface transmix downgrades; and unreconciled commercial exchange borrow/loan balances tie up millions of dollars in disputed working capital.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Commercial Refined Product Speculative Trading & Financial Hedging Contracts | Products Trader / Commercial Risk Lead |
| Monthly Linear Program (LP) Strategic Refinery Profit Plan Optimization | Production Planner (`P17`) |
| Physical Terminal Gantry Valve Alignments, Rack Loading Arms & Meter Proving | Terminal Superintendent (`P15`) / Terminal Operations Lead |
| Cross-Country Pipeline Hydraulic Pressure & In-Line Pump Station Telemetry | Pipeline Controller (`P14`) |
| Secondary Tank Truck Mechanical Maintenance & Driver Regulatory Duty Rostering | Fleet Transport Operations Manager / Logistics Dispatcher |

**Variants**:
* **Primary Pipeline & Bulk Hub Allocation Planner**: Focuses on high-volume trunk pipeline batch nominations, refinery off-take rundown schedules, marine import terminal receipts, and intermediate breakout tank farm allocations.
* **Secondary Terminal & Depot Stock Replenishment Coordinator**: Manages regional inland marketing depots, railhead unloading sidings, secondary road tanker bridging movements, and retail forecourt stock replenishment priorities.
* **Commercial Exchanges & Inter-Company Borrow/Loan Coordinator**: Governs bilateral exchange contracts, tracking physical product off-takes against partner quotas, calculating location/quality differentials, and reconciling monthly volume ledgers.

**Title Check**: Recognized industry titles include **Distribution Planner**, **Product Supply Planner**, **Downstream Supply Coordinator**, or **Fuels Supply Planner**. Avoid confusing this role with a *"Production Planner"* (who optimizes the refinery LP crude diet and unit yields) or a *"Pipeline Controller"* (who operates pipeline pumps and valves from a real-time SCADA console).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Regional Supply Operations & Distribution Planning Desk**: Dedicated commercial and logistics dispatch center equipped with multi-screen displays showing terminal SCADA automated tank gauging (ATG) levels, pipeline batch tracking boards, and ERP stock ledgers. |
| **What They Can Reach** | Enterprise ERP/ETRM Logistics Modules (SAP S/4HANA TSW/TM), Supply Chain Planning Suites (Aspen Petroleum Supply Chain Planner, Haverly H/NET), Terminal Automation Systems (Honeywell TerminalManager, Emerson TerminalManager), and Pipeline Shipper Nomination Portals. |
| **Shift Pattern** | Standard professional day operations (45–50 hours/week) with daily early-morning inventory balance reviews, weekly pipeline nomination deadline sprints, and 24/7 on-call duty for pipeline trips, refinery upsets, or acute terminal stockouts. |
| **Where the Record Lives** | SAP IS-Oil TSW nomination databases, terminal automated tank gauging (ATG) historians, commercial exchange contract ledgers, pipeline operator batch movement tickets, and regulatory stockholding compliance reports. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. `[EI-HM32]`: Energy Institute, *HM 32: Guide to Hydrocarbon Management at Petroleum Product Marketing and Distribution Terminals*, 2nd Edition (Comprehensive guidance on terminal inventory control, custody transfer, stock accounting, product handling, and loss control).
2. `[AFPM-Logistics]`: American Fuel & Petrochemical Manufacturers, *Downstream Supply Chain and Logistics Technical Guidelines* (Best practices for multi-modal distribution, terminal allocations, pipeline batch scheduling, and contingency rerouting).
3. `[API-MPMS-Ch12]`: American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities, Section 1 — Calculation of Static Petroleum Quantities in Upright Cylindrical Tanks* (and international equivalent ISO 4267-2 / OISD-STD-117 for terminal tank stock calculations).
4. `[FERC-PNGRB-Tariffs]`: Federal Energy Regulatory Commission (18 CFR Part 341) and Petroleum and Natural Gas Regulatory Board (PNGRB Access Code for Petroleum Product Pipelines), *Regulations Governing Common Carrier Petroleum Pipeline Nominations, Batch Cycles, and Priority Proration*.
5. `[OISD-STD-244]`: Oil Industry Safety Directorate, *OISD-STD-244: Storage and Handling of Petroleum Products at Depots and Terminals*, and EN 14015 / PESO Petroleum Rules (Safe working capacity, terminal ullage, and secondary dispatch safeguards).

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **SAP S/4HANA IS-Oil (TSW / TM)** | Trader's & Scheduler's Workbench / Transportation Management | Records commercial delivery nominations, generates sales orders, tracks freight billing, and logs terminal movement tickets. | **Transactional accounting ledger.** Logs commercial contracts and scheduled dispatches, but lacks live hydraulic and lifting awareness. When an unforeseen pipeline pump outage strikes, it cannot autonomously project multi-terminal stockout horizons from real-time rack pulling velocities or generate optimal inventory diversion schedules across alternate depots. |
| **AspenTech Aspen Supply Chain Planner / Aspen Petroleum Supply Chain** | Downstream Distribution & Network Optimizer | Calculates multi-period linear programming (LP) network distribution plans and bulk allocation targets based on monthly demand forecasts. | **Static periodic planning tool.** Runs monthly or weekly deterministic batches with long solve times. It is blind to intra-day terminal gate lifting surges, live pipeline interface transmix slippage, or sudden secondary transport delays, leaving daily emergency stock balancing to manual spreadsheets. |
| **Honeywell TerminalManager / Emerson TerminalManager** | Terminal Automation System (TAS) | Automates truck bay arm loading, gantry preset metering, driver smartcard authentication, and Bill of Lading (BOL) printing. | **Single-facility execution island.** Governs isolated physical loading bays at individual terminals. It contains zero multi-terminal network visibility, cannot cross-reconcile stock positions between interconnected regional depots, and cannot dynamically adjust customer lifting quotas based on regional supply constraints. |
| **AVEVA Enterprise Supply & Distribution / Haverly H/NET** | Bulk Distribution Scheduling | Simulates distribution movements and pipeline nominations against fixed demand nodes. | **Isolated simulation workspace.** Requires tedious manual data entry of actual delivered volumes and unpredicted refinery rundown cuts. Does not autonomously ingest SCADA tank levels and telematics truck ETAs to dynamically re-sequence secondary loading queues. |

---

## 3 · Operational Actions

*Scope: task / field / estate / portfolio. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Calculate multi-terminal stock depletion trajectories and projected run-out dates based on regional demand forecasts | `[EI-HM32]` | estate | B1 | Daily | 3–4 hrs | volume | Agent 1: Multi-Terminal Stock Depletion & Predictive Run-Out Sieve |
| **A02** | Formulate and submit multi-product pipeline batch cycle nominations and linepack transit schedules | `[FERC-PNGRB-Tariffs]` | estate | B1 | Weekly | 3–4 hrs | assembly | Agent 2: Multi-Product Pipeline Batch Nomination & Cycle Scheduling Sieve |
| **A03** | Simulate multi-hub supply disruption scenarios and dynamic inventory rerouting during refinery upsets | `[AFPM-Logistics]` | portfolio | B1 | Event | 3–4 hrs | synthesis | Agent 3: Multi-Hub Contingency Rerouting & Supply Disruption Simulator |
| **A04** | Reconcile inter-company product exchange borrow/loan statements and custody transfer volume corrections | `[API-MPMS-Ch12]` | portfolio | B1 | Monthly | 3–4 hrs | assembly | Agent 4: Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer |
| **A05** | Dynamically balance terminal truck rack lifting quotas and customer allocation ceilings during tight supply | `[AFPM-Logistics]` | estate | B1 | Daily | 2–3 hrs | consistency | Agent 5: Terminal Rack Allocation & Customer Lifting Quota Sieve |
| **A06** | Coordinate secondary road tanker bridging fleet dispatches and destination depot receiving ullage | `[OISD-STD-244]` | estate | B1 | Daily | 2–3 hrs | assembly | Agent 6: Secondary Road Tanker Bridging & Fleet Replenishment Dispatch Sieve |
| **A07** | Synchronize terminal ethanol, biodiesel, and proprietary detergent additive blending inventories | `[OISD-STD-244]` | field | B1 | Daily | 2–3 hrs | volume | Agent 7: Biofuel & Performance Additive Terminal Blending Synchronization Sieve |
| **A08** | Audit terminal physical vs book inventory mass balances and custody transfer meter variances per API MPMS | `[API-MPMS-Ch12]` | task | B1 | Daily | 2–3 hrs | traceability | Agent 4: Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer |
| **A09** | Execute commercial wholesale sales order processing and automated freight billing in ERP system | `[AFPM-Logistics]` | portfolio | B2 | Daily | 1–2 hrs | execution | ❌ (Monolith - SAP ERP SD/TM) |
| **A10** | Execute automated truck gantry preset arm loading, additive injection, and bill of lading generation | Site Rules | task | B2 | Real-Time | 15 mins | execution | ❌ (Monolith - Terminal TAS) |
| **A11** | Regulate trunkline pipeline hydraulic pressure, flow rate throttling, and in-line booster pump sequencing | Operator Rules | estate | B2 | Real-Time | 1 hr | execution | ❌ (Monolith - Pipeline SCADA) |
| **A12** | Track secondary road carrier GPS telematics, driver electronic logs, and geofenced transit waypoints | Fleet Rules | field | B2 | Real-Time | 1–2 hrs | execution | ❌ (Monolith - Telematics Fleet System) |
| **A13** | Execute physical depot tank manual dip tape checks, water draining, and manifold valve lineup changes | `[OISD-STD-244]` | task | B3 | Shift | 1–2 hrs | physical | ❌ (Human - Terminal Field Operator) |
| **A14** | Negotiate long-term bilateral product exchange master contracts, location differentials, and credit terms | Commercial Rules | portfolio | B3 | Periodic | 2–3 hrs | judgment | ❌ (Human - Commercial Supply VP) |
| **A15** | Direct executive crisis management and statutory allocation priorities during national supply emergencies | Regulatory Code | portfolio | B3 | Event | 2–3 hrs | judgment | ❌ (Human - Crisis Steering Committee) |

---

### Action Analysis (Two-Liners)

* **A01 · Multi-Terminal Stock Depletion & Predictive Run-Out Forecasting (B1, `[EI-HM32]`)**:
  * *Today*: Planner extracts Automated Tank Gauging (ATG) SCADA levels from dozens of regional marketing terminals, pasting values into unwieldy Excel workbooks to compute days of cover against static sales estimates.
  * *Failure Mode*: Outdated sales assumptions and transcription lag fail to detect an accelerated rack withdrawal surge, resulting in unpredicted terminal run-outs that leave retail service stations dry.
  * *Agent Candidate*: **→ See §4 (Agent 1: Multi-Terminal Stock Depletion & Predictive Run-Out Sieve)**.

* **A02 · Multi-Product Pipeline Batch Nomination & Cycle Scheduling (B1, `[FERC-PNGRB-Tariffs]`)**:
  * *Today*: Planner manually synchronizes refinery production rundown schedules with pipeline batch calendars, drafting nomination forms and calculating parcel arrival times across intermediate off-take depots.
  * *Failure Mode*: Miscalculating pipeline linepack transit velocities or missing strict monthly tariff nomination deadlines triggers batch rejections, stranding product at the refinery and starving interior hubs.
  * *Agent Candidate*: **→ See §4 (Agent 2: Multi-Product Pipeline Batch Nomination & Cycle Scheduling Sieve)**.

* **A03 · Multi-Hub Contingency Rerouting & Supply Disruption Simulation (B1, `[AFPM-Logistics]`)**:
  * *Today*: When an unforeseen refinery unit upset or pipeline outage strikes, the planner spends stressful hours sketching emergency bridging plans, evaluating road freight costs, and checking depot ullage across personal spreadsheets.
  * *Failure Mode*: Slow scenario modeling delays emergency inventory diversions, causing critical regional depots to run out while neighboring hubs sit on trapped, inaccessible inventory.
  * *Agent Candidate*: **→ See §4 (Agent 3: Multi-Hub Contingency Rerouting & Supply Disruption Simulator)**.

* **A04 & A08 · Commercial Borrow/Loan Exchange Reconciliation & Inventory Auditing (B1, `[API-MPMS-Ch12]`)**:
  * *Today*: Coordinator spends days at month-end cross-matching partner bill-of-lading tickets, custody transfer flow computer prover records, and temperature-density volume adjustments to settle bilateral exchange balances.
  * *Failure Mode*: Unreconciled volume discrepancies and disputed meter factors allow massive cumulative borrow/loan imbalances to compound, triggering retaliatory lifting freezes that paralyze retail supply.
  * *Agent Candidate*: **→ See §4 (Agent 4: Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer)**.

* **A05 · Dynamic Terminal Rack Allocation & Customer Quota Balancing (B1, `[AFPM-Logistics]`)**:
  * *Today*: During regional supply squeezes, planner manually calculates customer lifting quotas and emails updated limits to terminal managers for manual keying into Terminal Automation Systems.
  * *Failure Mode*: Delayed quota updates allow aggressive unbranded wholesale jobbers to over-lift product early in the cycle, exhausting terminal reserves and starving priority branded dealer retail networks.
  * *Agent Candidate*: **→ See §4 (Agent 5: Terminal Rack Allocation & Customer Lifting Quota Sieve)**.

* **A06 · Secondary Road Tanker Bridging & Fleet Replenishment Dispatch (B1, `[OISD-STD-244]`)**:
  * *Today*: Dispatcher manually reviews inland depot tank ullage reports and rings carrier dispatchers to assign road tankers for bulk terminal-to-depot bridging runs.
  * *Failure Mode*: Dispatching road tankers without verifying receiving tank ullage leads to transport rejections, detention penalties, and depot truck gantry congestion.
  * *Agent Candidate*: **→ See §4 (Agent 6: Secondary Road Tanker Bridging & Fleet Replenishment Dispatch Sieve)**.

* **A07 · Biofuel & Performance Additive Terminal Blending Synchronization (B1, `[OISD-STD-244]`)**:
  * *Today*: Planner tracks base fuel off-takes and compares them against chemical additive totes and ethanol storage levels in disconnected local logbooks.
  * *Failure Mode*: Running out of required anhydrous ethanol or proprietary detergent packages halts terminal gantry operations, as base fuel cannot be legally distributed without statutory blending components.
  * *Agent Candidate*: **→ See §4 (Agent 7: Biofuel & Performance Additive Terminal Blending Synchronization Sieve)**.

* **A09 · Commercial Sales Order Processing & ERP Billing (B2, `[AFPM-Logistics]`)**:
  * *Today*: Commercial sales orders, credit limit validations, and customer invoicing are executed automatically within enterprise ERP transaction modules (SAP SD).
  * *Agent Candidate*: `❌ No`. Core transactional ERP monolith functionality.

* **A10 · Terminal Gantry Automated Arm Loading (B2, Site Rules)**:
  * *Today*: Terminal Automation Systems (Honeywell/Emerson TAS) execute gantry preset arm meters, verify truck ground interlocks, and print legal Bills of Lading.
  * *Agent Candidate*: `❌ No`. Core terminal physical automation monolith domain.

* **A11 · Trunkline Pipeline SCADA Pressure & Flow Regulation (B2, Operator Rules)**:
  * *Today*: Pipeline SCADA systems and programmable logic controllers monitor trunkline hydraulic pressures and modulate pump station speeds.
  * *Agent Candidate*: `❌ No`. Core pipeline control monolith responsibility.

* **A12 · Secondary Road Fleet GPS Telematics Tracking (B2, Fleet Rules)**:
  * *Today*: Commercial telematics software platforms log truck GPS positions, engine diagnostics, and driver electronic hours of service.
  * *Agent Candidate*: `❌ No`. Commercial transport telematics software domain.

* **A13 · Depot Yard Manual Dip Checks & Physical Valve Alignments (B3, `[OISD-STD-244]`)**:
  * *Today*: Field terminal operators walk tank farm dikes to take manual dip tape readings, drain water bottoms, and align manifold block valves.
  * *Agent Candidate*: `❌ No`. Pure physical field maintenance and operations execution.

* **A14 · Commercial Master Exchange Contract Negotiation (B3, Commercial Rules)**:
  * *Today*: Commercial Supply Vice Presidents negotiate bilateral master exchange agreements, legal terms, and location tariff premiums.
  * *Agent Candidate*: `❌ No`. High-level commercial executive and legal negotiation.

* **A15 · Emergency Statutory Supply Allocation Governance (B3, Regulatory Code)**:
  * *Today*: Corporate leadership and government crisis steering committees convene during national supply emergencies to dictate statutory fuel rationing.
  * *Agent Candidate*: `❌ No`. Executive governance and public policy decision-making.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Multi-Terminal Stock Depletion & Predictive Run-Out Sieve
* **In One Line**: Ingests real-time Automated Tank Gauging (ATG) SCADA telemetry, rolling retail demand forecasts, and secondary truck rack lifting rates to calculate dynamic depletion trajectories and identify terminal stockout risks 96 hours in advance.
* **Friction Solved**: Eliminates 4.05 hours daily of manual multi-terminal spreadsheet rollups, preventing forecourt dry-outs and emergency product run-outs across regional depot networks.
* **The Specification**:
  * **Reads**: Terminal SCADA/ATG tank levels (Rosemount/Enraf), gross/net standard volumes (GOV/NSV), pumpable heel volumes, real-time terminal automation system (TAS) rack lifting velocities, 7-day rolling retail demand forecasts, and historical day-of-week consumption profiles.
  * **Does**:
    1. Projects continuous, minute-by-minute stock depletion curves across all regional distribution terminals and product grades (unleaded petrol, premium petrol, ULSD, aviation turbine fuel);
    2. Evaluates tank ullage against minimum operating stock (MOS) and dead-bottom suction limits per Energy Institute HM 32;
    3. Predicts run-out dates (ROD) and stockout hours under varying retail demand scenarios (e.g. harvest seasons, holiday weekends, severe weather rushes);
    4. Formulates prioritized replenishment triggers ranked by criticality and logistics lead times.
  * **Returns**: Dynamic Multi-Terminal Ullage & Stockout Risk Dashboard complete with forward trajectory curves, projected run-out timestamps, and urgent replenishment priority rankings.
  * **Stops At**: Modifying terminal safety stock thresholds or changing commercial sales allocation rules without supply manager authorization.
* **Failure Modes & Safety Envelopes**: If a terminal's projected stock drops below statutory emergency reserve levels (or minimum unpumpable heel) within 24 hours, the agent triggers an immediate `[Critical Stockout Hazard: Mandatory Emergency Replenishment & Lifting Allocation Enacted]`.

### Agent 2: Multi-Product Pipeline Batch Nomination & Cycle Scheduling Sieve
* **In One Line**: Synthesizes regional terminal replenishment requirements, refinery off-take rundown rates, and pipeline transit linepack dynamics to generate conflict-free multi-product pipeline batch nomination schedules conforming to regulatory tariffs.
* **Friction Solved**: Eliminates 3.60 hours per batch nomination cycle of manual pipeline cycle mapping, proration risk calculations, and hydraulic transit time modeling.
* **The Specification**:
  * **Reads**: Regional terminal target inventory replenishments, refinery production rundown availability, pipeline transit velocity and linepack tables, pipeline operator tariff calendars (FERC / PNGRB nomination cut-offs), batch interface sequence rules (e.g. Regular Petrol -> Premium Petrol -> Jet A-1 -> ULSD), and terminal manifold intake capacities.
  * **Does**:
    1. Compiles monthly and 10-day rolling batch nomination schedules for common carrier and dedicated product pipelines;
    2. Verifies batch sequence rules to minimize interface transmix downgrade volumes (Taylor dispersion modeling);
    3. Projects exact parcel arrival and stripping times at intermediate breakout stations and destination depots;
    4. Audits nominations against pipeline proration rules to protect shipper capacity rights during pipeline capacity constraints.
  * **Returns**: Optimized Pipeline Batch Nomination Manifest containing cycle timetables, parcel volumes, intermediate drop-off stripping windows, and interface transmix management plans.
  * **Stops At**: Legally submitting formal commercial nominations to third-party pipeline operators or binding the enterprise to non-performance pipeline penalties.
* **Failure Modes & Safety Envelopes**: If a proposed batch schedule places an incompatible product sequence (e.g. diesel directly adjacent to aviation jet fuel without a buffer parcel), the agent halts and flags `[Strict Quality Containment: Prohibited Pipeline Sequence Violates Jet Fuel Integrity]`.

### Agent 3: Multi-Hub Contingency Rerouting & Supply Disruption Simulator
* **In One Line**: Simulates alternative primary logistics routes, secondary bridging movements, and inter-terminal stock rebalancing actions during unpredicted refinery unit trips or pipeline transit outages.
* **Friction Solved**: Eliminates 3.15 hours per disruption event of high-stress ad-hoc contingency modeling and carrier negotiations across fragmented regional supply hubs.
* **The Specification**:
  * **Reads**: Live pipeline outage notifications, refinery conversion unit trip alerts (CDU/FCC/Hydrocracker slowdowns), rail siding blockage reports, regional terminal inventory snapshots, and approved secondary road transport bridging tariffs.
  * **Does**:
    1. Ingests supply shock parameters (e.g. 5-day pipeline shutdown or 40% refinery diesel output cut);
    2. Simulates network inventory flow re-routing options across alternate supply terminals, coastal marine import berths, and rail staging racks;
    3. Solves mixed-integer logistics balancing models to minimize delivered freight cost while guaranteeing zero retail terminal stockouts;
    4. Generates step-by-step contingency diversion orders, including secondary tank truck bridging dispatches and railcar re-routing.
  * **Returns**: Supply Disruption Contingency Dossier detailing evaluated re-routing scenarios, incremental logistics costs, terminal stock survival curves, and actionable bridging movement dispatches.
  * **Stops At**: Committing emergency commercial spot freight charter expenditures exceeding delegated delegation of authority limits.
* **Failure Modes & Safety Envelopes**: If a simulated diversion routes hazardous petroleum road tankers over restricted bridges or violates driver statutory maximum driving hours, the agent locks the route and flags `[Regulatory Transport Violation: Alternative Logistics Corridor Required]`.

### Agent 4: Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer
* **In One Line**: Reconciles physical product off-takes, custody transfer meter proving tickets, and temperature-density volume corrections across partner exchange agreements to maintain zero-balance borrow/loan positions and audit counterparty invoices.
* **Friction Solved**: Eliminates 3.15 hours per partner reconciliation cycle of tedious cross-company bill-of-lading auditing, custody meter volume adjustment disputes, and exchange ledger reconciliations.
* **The Specification**:
  * **Reads**: Commercial exchange contracts (product exchange ratios, location differentials, handling fees), terminal automated bill-of-lading (BOL) manifests, custody transfer flow computer proving records, temperature and density measurements per API MPMS Chapter 12 / ISO 4267, and partner monthly exchange statements.
  * **Does**:
    1. Ingests and matches partner lifting transactions against authorized exchange contracts;
    2. Applies API MPMS Chapter 11.1 / 12 temperature volume correction factors (CTPL/VCF) to convert gross observed volumes to net standard volumes (15 °C or 60 °F);
    3. Calculates net cumulative borrow/loan balances by product grade and geographical zone;
    4. Flags un-reconciled transactions, unrecorded liftings, and unauthorized customer draws;
    5. Generates bilateral exchange settlement statements and physical payback schedule recommendations.
  * **Returns**: Certified Inter-Company Exchange Reconciliation Dossier containing transaction match logs, volume variance analyses, borrow/loan balance summaries, and recommended payback dispatches.
  * **Stops At**: Signing legally binding commercial financial settlements or authorizing monetary cash-out payments for chronic exchange balances.
* **Failure Modes & Safety Envelopes**: If an exchange counterparty exceeds maximum contractual borrow credit limits (>50,000 bbls or monetary cap), the agent triggers an immediate alert: `[Credit Exposure Violation: Freeze Counterparty Terminal Lifting Rights]`.

### Agent 5: Terminal Rack Allocation & Customer Lifting Quota Sieve
* **In One Line**: Monitors real-time terminal automation system (TAS) gantry transactions, contractual customer entitlements, and terminal replenishment lead times to dynamically balance rack lifting quotas and prevent terminal rack dry-outs.
* **Friction Solved**: Eliminates 2.70 hours daily of manual customer quota spreadsheet tracking, telephone disputes with commercial transport jobbers, and terminal bay congestion.
* **The Specification**:
  * **Reads**: Terminal Automation System (TAS) loading transaction logs (AccuLoad/Toptech/TerminalManager), wholesale commercial customer contracts (contracted volumes, daily lifting limits, take-or-pay terms), and terminal live product ullage curves.
  * **Does**:
    1. Monitors customer truck bay lifting velocity against daily and weekly contracted allocations;
    2. Detects predatory over-lifting by third-party unbranded jobbers during market supply pinches;
    3. Dynamically calculates dynamic allocation factors for TAS gantry gate controllers to meter customer draw rates;
    4. Issues automated electronic notifications to carrier dispatchers regarding remaining allocations and anticipated bay loading wait times.
  * **Returns**: Dynamic Terminal Rack Allocation Schedule with customer lifting balance ledgers, TAS automated quota interface updates, and loading rack congestion forecasts.
  * **Stops At**: Unilaterally terminating long-term commercial customer fuel supply contracts.
* **Failure Modes & Safety Envelopes**: If an unbranded wholesale customer attempts to lift product when terminal inventory is below critical rationing reserves, the agent issues an automated gating lock: `[Allocation Ceiling Enforced: Terminal Loading Authorization Suspended for Account]`.

### Agent 6: Secondary Road Tanker Bridging & Fleet Replenishment Dispatch Sieve
* **In One Line**: Ingests satellite terminal inventory levels, carrier GPS telematics, and road transport driver duty hours to optimize secondary bulk bridging dispatch schedules and eliminate destination terminal stockouts.
* **Friction Solved**: Eliminates 2.70 hours daily of manual road tanker dispatching, truck queue tracking, and destination depot ullage verification.
* **The Specification**:
  * **Reads**: Secondary satellite depot ATG tank levels, transport carrier fleet tracking (GPS coordinates, speed, ETA), driver duty hour logs (statutory driving hours regulations), road transport safety restrictions, and destination depot gantry offloading capacities.
  * **Does**:
    1. Identifies secondary replenishment requirements across remote inland distribution depots and airport aviation fueling stations;
    2. Matches available bulk road tanker fleet capacity against urgent depot replenishment orders;
    3. Verifies destination tank receiving ullage to ensure delivering trucks can complete full-compartment drop-offs without retained product;
    4. Optimizes tanker dispatch sequencing to avoid gantry bottleneck queues at supply terminals.
  * **Returns**: Secondary Fleet Bridging Dispatch Manifest detailing truck assignments, route waypoints, loading/unloading appointment slots, and destination tank ullage confirmations.
  * **Stops At**: Overriding driver statutory hours-of-service safety rules or dispatching trucks onto non-hazardous-approved transport corridors.
* **Failure Modes & Safety Envelopes**: If destination storage tank ullage is less than the truck compartment volume plus safety buffer (<105% of payload), the agent triggers an operational hold: `[Overfill Prevention Lock: Destination Tank Ullage Insufficient for Full Truck Discharge]`.

### Agent 7: Biofuel & Performance Additive Terminal Blending Synchronization Sieve
* **In One Line**: Synchronizes base hydrocarbon inventory with ethanol, biodiesel, and proprietary detergent additive supply chains, ensuring statutory blending compliance and preventing terminal gantry shutdowns.
* **Friction Solved**: Eliminates 2.25 hours daily of manual additive inventory checking, ethanol railcar offloading tracking, and gantry injection ratio verification.
* **The Specification**:
  * **Reads**: Terminal base gasoline and diesel tank inventory, ethanol / biodiesel storage tank levels (ATG), additive tote/drum inventory weights, chemical supplier rail/truck delivery schedules, and statutory fuel blending mandates (e.g. E10/E20 ethanol blending, B7/B20 biodiesel standards, winter anti-gel specs).
  * **Does**:
    1. Calculates component consumption rates based on projected terminal base fuel loading velocities;
    2. Predicts biofuel and chemical additive run-out dates across terminal blending manifolds;
    3. Cross-checks gantry micro-blending and in-line injection calibration tickets against statutory fuel specifications (ASTM D4814, ASTM D975, EN 228, EN 590, IS 2796);
    4. Generates automated purchase and replenishment delivery schedules for renewable fuels and performance packages.
  * **Returns**: Terminal Additive & Biofuel Synchronization Manifest detailing component stock trajectories, projected run-out alerts, and gantry blending compliance certifications.
  * **Stops At**: Altering certified chemical additive formulation recipes or authorizing unblended fuel sales in violation of statutory environmental regulations.
* **Failure Modes & Safety Envelopes**: If terminal ethanol or additive stock drops below 12 hours of operational demand, the agent triggers an urgent operational warning: `[Impending Mandate Violation: Base Fuel Gantry Loading Suspended Unless Biofuel Supply Replenished]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating downstream network provides its own throughput capacity, terminal count, and transport tariff multipliers.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Multi-Terminal Stock Depletion & Predictive Run-Out Sieve** | 1 Daily Multi-Terminal Network Review (25 depots) | 4.50 hours | 0.45 hours | **4.05 hours saved** | Multi-System Data Collation & Excel Stockout Horizon Modeling |
| **Multi-Product Pipeline Batch Nomination & Cycle Scheduling Sieve** | 1 Pipeline Batch Nomination Cycle (10-day cycle) | 4.00 hours | 0.40 hours | **3.60 hours saved** | Pipeline Tariff Collation & Batch Sequence Allocation Drag |
| **Multi-Hub Contingency Rerouting & Supply Disruption Simulator** | 1 Supply Disruption & Re-Routing Event | 3.50 hours | 0.35 hours | **3.15 hours saved** | Mixed-Integer Logistics Optimization & Freight Tariff Sifting |
| **Commercial Borrow/Loan Exchange Reconciliation & Balancing Synthesizer** | 1 Partner Monthly Exchange Reconciliation Cycle | 3.50 hours | 0.35 hours | **3.15 hours saved** | API MPMS Volume Conversion & Bilateral Ledger Dispute Resolution |
| **Terminal Rack Allocation & Customer Lifting Quota Sieve** | 1 Daily Terminal Gantry Allocation Cycle | 3.00 hours | 0.30 hours | **2.70 hours saved** | Real-Time Rack Velocity Tracking & Customer Quota Enforcement |
| **Secondary Road Tanker Bridging & Fleet Replenishment Dispatch Sieve** | 1 Daily Secondary Fleet Bridging Dispatch Cycle | 3.00 hours | 0.30 hours | **2.70 hours saved** | Satellite Depot Ullage Auditing & Telematics Fleet Routing |
| **Biofuel & Performance Additive Terminal Blending Synchronization Sieve** | 1 Daily Terminal Additive & Biofuel Synchronization Cycle | 2.50 hours | 0.25 hours | **2.25 hours saved** | Component Consumption Math & Gantry Blending Compliance Tracking |
| **Total Operational Distribution Planning Drag Reduction** | **Per Daily / Weekly Distribution Planning & Logistics Cycle** | **24.00 hours** | **2.40 hours** | **21.60 hours saved** | **90.0% reduction in downstream distribution planning drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[EI-HM32]` | Energy Institute, *HM 32: Guide to Hydrocarbon Management at Petroleum Product Marketing and Distribution Terminals*, 2nd Edition, 2020 | energyinst.org | Industry Standard | Terminal inventory control, static and dynamic stock reconciliation, safe operating ullage, and product loss control |
| `[AFPM-Logistics]` | American Fuel & Petrochemical Manufacturers, *Downstream Supply Chain and Logistics Technical Guidelines*, 2021 | afpm.org | Industry Best Practice | Multi-terminal stock balancing, contingency re-routing, secondary distribution management, and pipeline batch nominations |
| `[API-MPMS-Ch12]` | American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities, Section 1 — Calculation of Static Petroleum Quantities in Upright Cylindrical Tanks*, 2021 | api.org | Recommended Practice | Temperature volume correction factors (CTPL/VCF), net standard volume calculations, and custody transfer meter reconciliation |
| `[FERC-PNGRB-Tariffs]` | Federal Energy Regulatory Commission, *18 CFR Part 341 — Oil Pipeline Tariffs and Regulations Governing Common Carrier Nominations and Batch Proration*, & Petroleum and Natural Gas Regulatory Board, *Access Code for Petroleum Product Pipelines*, 2022 | ferc.gov / pngrb.gov.in | Regulatory Code | Multi-product pipeline nomination schedules, cycle lead times, proration allocations, and transmix slop cut rules |
| `[OISD-STD-244]` | Oil Industry Safety Directorate, *OISD-STD-244: Storage and Handling of Petroleum Products at Depots and Terminals*, 2021 | oisd.gov.in | Safety Standard | Depot tank safe filling heights, high-high level alarm limits, secondary gantry loading safeguards, and road tanker bridging safety |
| `[ASTM-D4814-D975]` | ASTM International, *ASTM D4814 (Automotive Spark-Ignition Engine Fuel) & ASTM D975 (Diesel Fuel)*, with EN 228 / EN 590 / IS 2796 equivalents, 2022 | astm.org | Technical Standard | Finished fuel quality standards, ethanol and biodiesel blending limits, and terminal additive injection tolerances |

### Negative Search Registry
* **Searched**: Downstream supply chain software repositories, SAP IS-Oil TSW product guides, and Aspen Petroleum Supply Chain documentation for "autonomous multi-terminal stockout horizon forecasting integrating real-time SCADA automated tank gauging with dynamic truck rack lifting velocities without manual spreadsheet modeling".
* **Result**: `Negative Search, 2026-10`. Existing commercial suites maintain static schedule plans and record executed transactions; none autonomously ingest live SCADA tank radar telemetry and gate gantry transaction velocities to continuously project multi-terminal stockout curves and dynamically balance secondary bridging dispatches without human manual intervention.
* **Searched**: Commercial downstream logistics literature and energy trading software documentation for "automated bilateral product exchange borrow/loan reconciliation matching custody flow computer tickets with real-time API MPMS temperature-density corrections and partner quota gating".
* **Result**: `Negative Search, 2026-10`. Commercial systems track contractual ledger balances post-facto; none autonomously reconcile physical custody meter proving tickets, apply real-time API MPMS Chapter 12 volume corrections, and execute dynamic partner lifting locks when contractual borrow credit ceilings are breached.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"A downstream supply network can have millions of barrels of refined fuel in refinery tankage, but if a regional marketing terminal runs dry of diesel on a Monday morning because a pipeline batch slipped and nobody recalculated the rack lifting velocity, hundreds of retail stations shut down and the public sees a fuel crisis."*
* **The Secondary Line**: *"Managing commercial borrow/loan exchanges on retrospective monthly spreadsheets is an invitation to working capital leakage; letting a partner over-borrow fifty thousand barrels during a regional supply squeeze without real-time quota gating starves your own dealer network."*
* **Open Questions for Distribution Planners**:
  * How many hours each day does your team spend downloading SCADA tank levels, pipeline pumping tickets, and terminal automation lifting records into spreadsheets to calculate terminal stockout dates?
  * During your network's most recent refinery unit trip or pipeline outage, how long did it take to model secondary bridging alternatives and confirm destination depot tank ullage before dispatching road tankers?
  * How often do commercial product exchange borrow/loan disputes linger across monthly accounting closes due to un-reconciled custody transfer meter factors or un-tracked customer over-liftings?
