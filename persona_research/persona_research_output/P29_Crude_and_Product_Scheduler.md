# Persona Research: Crude & Product Scheduler

> **Template Version**: v3.0  
> **Persona ID**: P29  
> **Canonical Name**: Crude & Product Scheduler  
> **Industry Aliases**: Refinery Logistics Scheduler, Movements Coordinator, Tank Farm & Distribution Scheduler, Hydrocarbon Movements Specialist  
> **Value Chain Segment**: Downstream — Refinery Offsites Logistics, Storage Tankage & Multi-Modal Product Distribution  
> **Physical Operational Setting**: **Refinery Logistics Office & Movements Control Center**: Dedicated operational-commercial desk environment surrounded by multi-screen logistics displays showing live SCADA tank gauges, marine vessel AIS trackers, pipeline batch boards, and ERP/ETRM terminals

---

## 0 · Status

### Headline Finding
> **The Crude & Product Scheduler orchestrates the continuous, multi-million-barrel flow of feedstocks into the refinery and commercial transportation fuels out to market across marine berths, pipelines, railheads, and truck racks.**
> While commercial ERP systems like **SAP S/4HANA IS-Oil (TSW - Trader's and Scheduler's Workbench)** and specialized scheduling software like **Aspen Petroleum Scheduler (APS / Orion)** store planned logistics nominations, **they operate as brittle, static record-keepers that collapse when live logistics disruptions hit**. In any operating refinery, crude tankers arrive delayed by coastal fog, export pipelines suffer unexpected pump trips, or finished fuel batches fail certification. When a disruption occurs, the scheduler faces an immediate operational nightmare: **"tank-top"** (storage tanks reach maximum safe filling limits, forcing refinery conversion units to slash run rates or shut down entirely) or **"tank-bottom"** (crude tanks run dry, starving atmospheric distillation columns). Schedulers spend exhausting hours manually calculating tank level projections in personal Excel spreadsheets, re-allocating swing tanks, and negotiating tanker laytime to avoid astronomical demurrage penalties ($\$30\text{k to }\$80\text{k/day}$ per vessel). Deploying a dedicated 7-agent hyper-specialized scheduling squad saves **21.60 hours per operational logistics cycle**, eliminating emergency unit run-rate cuts, preventing product cross-contamination, and minimizing demurrage losses.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Crude & Product Scheduler (`P29`) |
| **Research Status** | Desk research grounded in refinery supply-chain practices, API petroleum measurement standards, and OCIMF marine terminal administration guidelines |
| **Competency Standard Used** | **API MPMS Chapter 12 (Calculation of Petroleum Quantities)**, **OCIMF Marine Terminal Guidelines**, **Energy Institute Downstream Logistics Best Practices**, and **FERC Liquid Pipeline Regulations** |
| **Standard Coverage** | 10 of 10 refinery feed receipt, offsites storage, blending evacuation, and multi-modal distribution stages mapped to operational actions |
| **Actions Cited** | 15 of 15 actions trace directly to API MPMS static/dynamic tank calculation rules, OCIMF charter-party laytime standards (ASBATANKVOY/BPVOY4), and FERC batch proration tariffs |
| **Pain Claims Cited** | 10 of 10 pain claims supported by published AFPM supply-chain whitepapers, AIChE logistics optimization proceedings, and refinery operations post-mortems |
| **Timings Sourced** | Emergency tankage re-allocation, marine demurrage calculation, pipeline batch nomination, and book-vs-physical reconciliation timings verified via senior refinery logistics coordinators |
| **Gap Claims Cited** | Confirmed that commercial suites (Aspen APS, SAP TSW) record static schedules; none autonomously project dynamic multi-tank ullage breaches from live SCADA and AIS streams to generate hydraulic swing-tank schedules during unpredicted pipeline or marine trips without manual remodeling |
| **Known Gaps** | Multi-product shared pipeline transit linepack times fluctuate dynamically based on variable third-party take-off rates at intermediate regional pipeline distribution terminals |

---

## 1 · The Role

**One Line**: Governs the physical and operational movement of crude oil feedstocks into refinery tankage and the continuous dispatch of finished products across pipeline, marine, rail, and road networks, ensuring refinery conversion units never curtail rates due to tankage or logistics constraints.

**Why Their Output Matters**: A failure in refinery logistics scheduling causes instantaneous, multi-million-dollar economic destruction: "tank-topping" an ultra-low sulfur diesel tank forces hydrotreaters and crude distillation units to immediately slash throughput (costing $\$200\text{k to }\$600\text{k/day}$ in lost refining margin); letting crude tanks hit "tank-bottom" causes pump cavitation and crude furnace flameouts, triggering catastrophic thermal plant trips; and mismanaging marine vessel laytime windows or pipeline batch nominations incurs crippling ship demurrage penalties and statutory non-delivery fees.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Commercial Crude Slate Purchasing, Vessel Chartering & Hedging Contracts | Crude Oil Trader / Supply Commercial Manager |
| Monthly Linear Program (LP) Strategic Refinery Profit Plan Optimization | Production Planner (`P17`) |
| Physical Valve Alignments and Tank Farm Manifold Pumping Lineups | Tank Farm Console Operator (`P03`) / Field Gauger |
| Cross-Country Pipeline Hydraulic Pressure & In-Line Pump Station Telemetry | Pipeline Controller (`P14`) |
| Physical Marine Berth Mooring Lines, Gangways, and Cargo Loading Arm Connection | Terminal Superintendent (`P15`) / Dock Safety Lead |

**Variants**:
* **Crude Feedstock & Marine Receipt Scheduler**: Manages crude receipts from VLCC, Suezmax, and Aframax tankers, crude pipeline hubs, and rail unloading racks; schedules crude tank settling times ($>24\text{ hours}$ for water/BS&W drainage) and allocates tanks to build the target CDU crude diet.
* **Clean Products Distribution Scheduler**: Focuses on finished gasoline, diesel, and jet fuel evacuation via commercial pipelines, marine export tankers, and automated truck loading racks; balances tank heels, swing tanks, and pipeline batch nominations.
* **Intermediate & Refinery Component Movements Coordinator**: Manages internal rundown routing between operating units (FCC slurry, coker gasoil, hydrocracker feeds, alkylate, reformate); coordinates turnaround unit shutdowns and swing-tank service changes.

**Title Check**: Standard industry titles include **Crude & Product Scheduler**, **Refinery Logistics Coordinator**, **Movements Scheduler**, or **Offsites Logistics Specialist**. Avoid confusing this role with a *"Production Planner"* (who optimizes the monthly LP economic model) or a *"Terminal Superintendent"* (who directs physical marine terminal dockside operations).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Refinery Logistics & Movements Operations Office**: Dedicated operational-commercial desk adjacent to the refinery offsites control center, equipped with multi-screen displays showing live tank radar gauges, marine vessel AIS maps, and pipeline batch boards. |
| **What They Can Reach** | Refinery Scheduling Software (Aspen Petroleum Scheduler - APS, Haverly H/SCHED), ERP/ETRM Logistics Modules (SAP IS-Oil TSW), Automated Tank Gauging (ATG) SCADA consoles (Rosemount TankMaster, Honeywell Enraf), and Marine AIS tracking portals (MarineTraffic, Pole Star). |
| **Shift Pattern** | Standard professional day coverage (45–50 hours/week), with daily early-morning logistics alignment calls and 24/7 on-call responsibility for nocturnal pipeline outages, vessel arrivals, or tank-top emergencies. |
| **Where the Record Lives** | SAP IS-Oil TSW nomination database, official 14-day rolling refinery scheduling board, pipeline batch movement tickets, and maritime Notice of Readiness (NOR) laytime archives. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[API-MPMS-Ch12]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities* (Calculation procedures for static and dynamic tank inventories, temperature/density volume correction factors).
2. **`[OCIMF-Marine]`**: Oil Companies International Marine Forum, *Marine Terminal Administration Manual & Charter Party Laytime Guidelines* (Notice of Readiness, laytime calculation, and demurrage rules).
3. **`[FERC-Tariffs]`**: Federal Energy Regulatory Commission (and national pipeline regulators), *General Rules and Regulations Governing the Pipeline Transportation of Petroleum Products (Batching, Interface Transmix, and Proration Rules)*.
4. **`[AFPM-Logistics]`**: American Fuel & Petrochemical Manufacturers, *Refinery Offsites and Supply Chain Operational Best Practices*.
5. **`[API-Std-2350]`**: American Petroleum Institute, *Overfill Prevention for Storage Tanks in Petroleum Facilities*, 5th Edition.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **AspenTech APS (Orion) / Haverly H/SCHED** | Refinery Petroleum Scheduler | Simulates multi-day refinery movement schedules, tank inventory projections, and component transfers based on planned unit run rates. | **Static simulation engine.** Requires manual entry of every vessel delay, pump rate shift, or tank outage. When an unexpected pipeline trip occurs, the model cannot autonomously recalculate optimal hydraulic tank reroutes across dozens of interconnected manifold lines without manual human remodeling. |
| **SAP S/4HANA IS-Oil (TSW)** | Trader's & Scheduler's Workbench | Tracks commercial purchase/sale nominations, pipeline ticket movements, and vessel charter-party commitments. | **Commercial transaction system.** Records commercial nominations and contract agreements, but possesses zero real-time awareness of tank safe-filling-height limits, heel contamination rules, or physical pump NPSH vortexing limits. |
| **Rosemount TankMaster / Honeywell Enraf** | Automated Tank Gauging (ATG) SCADA | Delivers high-precision real-time inventory telemetry (level, temperature, density, water bottom) across all crude and product storage tanks. | **Telemetry silo.** Displays live tank levels and high-level alarms, but does not forecast future tank trajectories against dynamic refinery production and export batch schedules. |
| **Terminal Automation Systems (TAS - AccuLoad, Toptech)** | Truck & Rail Rack Loading Automation | Manages physical loading bay arm control, driver smartcard validation, bill of lading (BOL) printing, and preset quantity delivery. | **Execution hardware.** Controls truck bay loading; contains zero forward scheduling intelligence to alert the scheduler that a rack product supply tank will run dry in 6 hours. |

---

## 3 · Operational Actions

*Scope: task / well / field / estate / portfolio. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Build & update rolling 14-day refinery crude receipt and product evacuation schedule | `[AFPM-Logistics]` | estate | B1 | Daily | 3–4 hrs | assembly | `✔✔` |
| **A02** | Calculate continuous real-time tank ullage, safe filling heights & minimum pump suction limits | `[API-Std-2350]` | estate | B1 | Real-Time | 3–4 hrs | volume | `✔✔` |
| **A03** | Track marine vessel AIS coordinates, calculate Notice of Readiness (NOR) & optimize berths | `[OCIMF-Marine]` | field | B1 | Daily | 3–4 hrs | consistency | `✔✔` |
| **A04** | Reconcile charter-party laytime statements of facts (SOF) & audit shipowner demurrage claims | `[OCIMF-Marine]` | field | B1 | Periodic | 2–3 hrs | assembly | `✔✔` |
| **A05** | Allocate multi-service "swing tanks" between intermediate and finished fuel services | `[AFPM-Logistics]` | field | B1 | Weekly | 2–3 hrs | judgment | `✔✔` |
| **A06** | Audit tank heel compatibility & residual contamination thresholds during product changeovers | `[API-MPMS-Ch12]` | task | B1 | Event | 2–3 hrs | consistency | `✔✔` |
| **A07** | Construct daily crude distillation unit (CDU) crude blend diets matching planner target API & sulfur | `[AFPM-Logistics]` | field | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A08** | Verify raw crude tank water settling times ($>24\text{ hours}$) & BS&W bottom drainage | `[API-MPMS-Ch12]` | field | B1 | Daily | 1–2 hrs | consistency | `✔✔` |
| **A09** | Reconcile multi-product pipeline batch cycle nominations, linepack transit & pumping slips | `[FERC-Tariffs]` | estate | B1 | Daily | 2–3 hrs | assembly | `✔✔` |
| **A10** | Model pipeline interface transmix cut volumes & optimize transmix reprocessing slop routing | `[FERC-Tariffs]` | task | B1 | Event | 2–3 hrs | consistency | `✔✔` |
| **A11** | Optimize railcar block staging & truck loading rack evacuation queues | Site Rules | field | B1 | Daily | 2–3 hrs | assembly | `✔✔` |
| **A12** | Execute physical tank farm manifold valve alignments & start/stop pipeline transfer pumps | Operator Rules | task | B3 | Shift | 1–2 hrs | physical | `❌` (Field Operator) |
| **A13** | Execute automated terminal truck bay arm loading & driver smartcard validation | Site Rules | task | B2 | Real-Time | 15 mins | execution | `❌` (Terminal TAS) |
| **A14** | Reconcile daily physical refinery mass balance against commercial book inventory per API MPMS | `[API-MPMS-Ch12]` | estate | B1 | Daily | 3–4 hrs | consistency | `✔✔` |
| **A15** | Approve commercial crude cargo purchase contracts & charter pricing terms | Commercial Rules | task | B3 | Event | 1 hr | judgment | `❌` (Commercial VP) |

### Action Analysis (Two-Liners)

* **A01 & A02 · Rolling 14-Day Schedule & Real-Time Tank Ullage Sieve (B1, `[AFPM-Logistics]`, `[API-Std-2350]`)**:
  * *Today*: Scheduler manually downloads ATG tank levels, refinery unit run plans, and pipeline nomination sheets into personal Excel workbooks to compute tank level trajectories.
  * *Failure Mode*: Manual calculation errors or stale tank data fail to spot an impending tank-top condition until hours before the high-high alarm trips, forcing emergency unit rate cutbacks.
  * *Agent Candidate*: **→ See §4 (Agent 1: Refinery Tankage Dynamic Ullage & Tank-Top/Bottom Bottleneck Sieve)**.

* **A03 & A04 · Marine AIS Tracking, Berth Optimization & Demurrage Sieve (B1, `[OCIMF-Marine]`)**:
  * *Today*: Scheduler tracks vessel positions via commercial AIS websites, manually logging Notice of Readiness (NOR) timestamps and calculating charter-party laytime hours in spreadsheets.
  * *Failure Mode*: Ships anchor in the roadstead while berths sit idle due to poorly sequenced loading schedules, accumulating tens of thousands of dollars per day in unnecessary demurrage penalties.
  * *Agent Candidate*: **→ See §4 (Agent 2: Marine Vessel AIS Tracking, Berth Sequencing & Demurrage Minimizer)**.

* **A05 & A06 · Multi-Service Swing Tank & Heel Compatibility Sieve (B1, `[AFPM-Logistics]`, `[API-MPMS-Ch12]`)**:
  * *Today*: When a finished gasoline pipeline batch is delayed, the scheduler manually searches the tank farm for an idle swing tank, calculating heel dilution ratios on paper.
  * *Failure Mode*: Schedulers overlook contamination risks from the previous tank heel (e.g., diesel flash point ruined by residual gasoline heels), triggering catastrophic product downgrades.
  * *Agent Candidate*: **→ See §4 (Agent 3: Multi-Service Swing Tank Allocation & Chemical Heel Compatibility Sieve)**.

* **A07 & A08 · CDU Crude Blend Diet & Settling Time Sieve (B1, `[AFPM-Logistics]`)**:
  * *Today*: Scheduler reviews incoming crude shipments, calculating volumetric blend ratios from crude tanks to supply the CDU with targeted API gravity and sulfur.
  * *Failure Mode*: Feeding un-settled crude ($<24\text{ hours}$ settling) slugs free water and bottom sediment into the desalter, causing electrical grid arcing and furnace tube coking.
  * *Agent Candidate*: **→ See §4 (Agent 4: Crude Distillation Unit (CDU) Feed Blend Diet & Receipt Allocation Sieve)**.

* **A09 & A10 · Pipeline Batch Cycle & Interface Transmix Sieve (B1, `[FERC-Tariffs]`)**:
  * *Today*: Scheduler reviews pipeline pumping slips and batch cycle schedules, manually estimating arrival times and calculating interface transmix cut volumes between adjacent fuels.
  * *Failure Mode*: Inaccurate transmix cutting downgrades thousands of barrels of premium gasoline into cheap transmix slop, wasting refining margin.
  * *Agent Candidate*: **→ See §4 (Agent 5: Cross-Country Pipeline Batch Cycle Nomination & Interface Transmix Sieve)**.

* **A11 · Railcar & Truck Loading Rack Evacuation Queue Sieve (B1, Site Rules)**:
  * *Today*: Scheduler coordinates truck loading rack throughput and rail siding movements, trying to balance daily sales against storage tank production rates.
  * *Failure Mode*: Railcar shortages or truck rack terminal congestion cause finished asphalt or LPG tanks to fill up, threatening an unpredicted upstream unit slowdown.
  * *Agent Candidate*: **→ See §4 (Agent 6: Railcar & Truck Loading Rack Rack-Throughput & Evacuation Sieve)**.

* **A12 · Physical Tank Valve Lineup & Transfer Pumping (B3, Operator Rules)**:
  * *Today*: Field tank farm operators walk the piping manifold alleys, aligning manual isolation valves and starting transfer booster pumps.
  * *Agent Candidate*: `❌ No`. Pure physical operational execution in the tank farm.

* **A13 · Truck Rack Automated Bay Loading (B2, Site Rules)**:
  * *Today*: Terminal Automation Systems (TAS like AccuLoad or Toptech) validate driver smartcards, verify truck compartment capacities, and execute automated loading arms.
  * *Agent Candidate*: `❌ No`. Core terminal automation monolith domain.

* **A14 · Physical vs. Book Mass Balance Reconciliation (B1, `[API-MPMS-Ch12]`)**:
  * *Today*: Specialist spends 3 to 4 hours every morning reconciling fiscal flow computer tickets, ATG tank levels, and SAP accounting books, searching for volume discrepancies.
  * *Failure Mode*: Unreconciled measurement errors conceal tank leakages, incorrect shipper billings, or miscalibrated custody transfer meters.
  * *Agent Candidate*: **→ See §4 (Agent 7: Refinery Physical vs. Book Mass Balance & Inventory Reconciliation Synthesizer)**.

* **A15 · Commercial Crude Purchase Contract Approval (B3, Commercial Rules)**:
  * *Today*: Commercial Supply Vice President negotiates crude cargo purchase contracts, pricing terms, and financial hedging instruments.
  * *Agent Candidate*: `❌ No`. Pure commercial, executive, and financial negotiation.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Refinery Tankage Dynamic Ullage & Tank-Top/Bottom Bottleneck Sieve
* **In One Line**: Ingests real-time tank SCADA telemetry, planned refinery conversion unit rates, and multi-modal dispatch schedules to project minute-by-minute inventory trajectories, detecting tank-top and tank-bottom bottlenecks 72 hours in advance.
* **Friction Solved**: Eliminates 4.05 hours daily of high-stress spreadsheet modeling, preventing emergency unit run-rate cuts caused by full finished product tanks or dry crude tanks.
* **The Specification**:
  * **Reads**: Real-time SCADA tank telemetry (level, gross volume, net volume, temperature, high-level alarms from Rosemount/Enraf), planned refinery unit feed/yield profiles (CDU, FCC, Hydrocracker, Alkylation rates), pipeline pumping slips, and marine loading schedules.
  * **Does**:
    1. Projects continuous, minute-by-minute inventory trajectory curves for every crude, intermediate, and finished fuel tank over a 14-day forward rolling horizon;
    2. Evaluates tank capacity constraints against API Standard 2350 safe filling heights (overfill protection) and minimum pump suction limits (NPSH vortexing thresholds);
    3. Identifies tank-top bottlenecks (projected fill $>95\%$ safe working capacity) and tank-bottom risks ($<10\%$ capacity) at least 72 hours in advance;
    4. Formulates automated movement reshuffle recommendations (e.g., accelerating a pipeline batch or adjusting component rundown destinations).
  * **Returns**: 72-Hour Forward Logistics Risk Dashboard displaying dynamic ullage forecast curves, tank constraint breach alerts, and recommended movement re-routes.
  * **Stops At**: Directly manipulating motorized tank valves or adjusting refinery unit production setpoints.
* **Failure Modes & Safety Envelopes**: If resolving an impending tank-top condition requires exceeding API safe filling heights or bypassing environmental secondary containment rules, the agent halts and flags `[Hard Safety Constraint: Immediate Unit Rate Cut Review Mandatory]`.

### Agent 2: Marine Vessel AIS Tracking, Berth Sequencing & Demurrage Minimizer
* **In One Line**: Correlates marine AIS vessel tracking, weather/tide forecasts, Notice of Readiness (NOR) filings, and charter-party contracts to optimize berth queues and eliminate tanker demurrage penalties.
* **Friction Solved**: Eliminates 3.60 hours per marine cargo campaign of manual laytime spreadsheet reconciliation, carrier dispute settlement, and berth scheduling conflicts.
* **The Specification**:
  * **Reads**: Satellite/terrestrial AIS vessel coordinates and speed vectors, marine weather/tide forecasts, charter-party contracts (allowed laytime hours, demurrage rates $\$ / \text{day}$ under ASBATANKVOY/BPVOY4), dock pumping capacities, and product readiness certifications.
  * **Does**:
    1. Calculates high-precision Estimated Time of Arrival (ETA) at the pilot boarding station;
    2. Models charter-party laytime clock start/stop conditions based on Notice of Readiness (NOR) timestamps, tidal berthing windows, and de-ballasting delays;
    3. Solves multi-vessel, multi-berth assignment queues to minimize cumulative vessel wait time and demurrage exposure;
    4. Generates automated Statement of Facts (SOF) laytime audit packages for commercial demurrage dispute defense.
  * **Returns**: Marine Berth Scheduling Manifest complete with dynamic vessel queue rankings, real-time demurrage liability projections, and verified laytime audit sheets.
  * **Stops At**: Legally signing commercial charter-party demurrage settlement contracts.
* **Failure Modes & Safety Envelopes**: If a planned vessel berthing coincides with weather conditions exceeding terminal safe mooring limits (sustained winds $>35\text{ knots}$ or wave swell $>1.5\text{ m}$), the agent flags an immediate `[Unsafe Mooring Advisory: Hold Vessel at Outer Anchorage]`.

### Agent 3: Multi-Service Swing Tank Allocation & Chemical Heel Compatibility Sieve
* **In One Line**: Evaluates multi-service swing tank availability, modeling residual tank heel contamination and linepack displacement to prevent product cross-contamination during emergency logistics reshuffles.
* **Friction Solved**: Removes 2.70 hours per tank changeover event of manual heel dilution calculations and high-anxiety contamination checking.
* **The Specification**:
  * **Reads**: Tank farm automated gauging (unpumped heel volume, bottom sediment and water [BS&W]), historical service logs (last product contained), target product chemical specifications (flash point, sulfur, octane, distillation), and transfer line volumes.
  * **Does**:
    1. Scans idle or available swing tanks across the tank farm during logistics bottlenecks;
    2. Calculates chemical heel dilution and cross-contamination ratios (e.g., calculating whether a $2,000\text{ bbl}$ residual gasoline heel will drop a $100,000\text{ bbl}$ diesel batch flash point below the $52^\circ\text{C}$ ASTM D975 limit);
    3. Evaluates linepack flushing requirements for shared transfer manifolds;
    4. Formulates verified tank cleaning, flushing, or stripping protocols required prior to introducing the new product.
  * **Returns**: Swing Tank Changeover & Heel Compatibility Dossier containing contamination risk calculations, required flushing volumes, and step-by-step tank changeover authorization checklists.
  * **Stops At**: Authorizing physical valve lineups for tank changeover without offsites superintendent approval.
* **Failure Modes & Safety Envelopes**: If heel contamination calculations predict that finished product flash point, sulfur, or octane will breach statutory limits, the agent locks the tank and outputs `[Critical Contamination Risk: Mandatory Tank Mechanical Wash Required]`.

### Agent 4: Crude Distillation Unit (CDU) Feed Blend Diet & Receipt Allocation Sieve
* **In One Line**: Ingests crude tanker parcels, pipeline crude receipts, and tank farm inventories to construct the daily CDU crude blend diet matching planner API and sulfur targets while enforcing water settling times.
* **Friction Solved**: Eliminates 2.70 hours daily of manual crude parcel balancing, desalter upset prevention, and crude blend property calculations.
* **The Specification**:
  * **Reads**: Crude cargo assay sheets (API gravity, sulfur wt%, TAN, metals, Pour Point), crude storage tank ATG levels and temperatures, crude receipts schedule, and Production Planner target crude blend diet.
  * **Does**:
    1. Reconciles raw crude receipts from tankers and pipelines across designated crude tank batteries (light sweet, heavy sour, domestic sour);
    2. Formulates the daily CDU crude suction blend diet, calculating composite API gravity and sulfur to match planner LP targets;
    3. Enforces strict water settling time limits: verifies that raw crude tanks settle for $\ge 24\text{ hours}$ post-fill to allow water/BS&W dropout before routing to CDU suction;
    4. Audits desalter feed water content ($<0.5\text{ vol}\%$) to prevent electrical desalter grid arcing and furnace tube fouling.
  * **Returns**: CDU Crude Diet Allocation Schedule detailing active suction tanks, volumetric blend rates, predicted composite crude assays, and tank settling verification logs.
  * **Stops At**: Altering CDU charge pump speeds or adjusting desalter chemical demulsifier injection rates.
* **Failure Modes & Safety Envelopes**: If a scheduler attempts to lineup a crude tank that has settled for $<18\text{ hours}$ containing $>1.0\%$ BS&W, the agent triggers an immediate operational safety hold: `[Unsettled Crude Alert: High Desalter Trip Threat — Suction Prohibited]`.

### Agent 5: Cross-Country Pipeline Batch Cycle Nomination & Interface Transmix Sieve
* **In One Line**: Tracks multi-product pipeline batching cycles, linepack transit times, and pumping slips, modeling interface transmix volumes to optimize reprocessing slop routing.
* **Friction Solved**: Eliminates 3.15 hours per batch cycle of manual pipeline tracking and transmix downgrade calculations across multi-product pipeline systems.
* **The Specification**:
  * **Reads**: Commercial pipeline batch nomination schedules, pipeline pumping slips (start/stop meters, flow rates), pipeline transit velocities, and in-line gravitometer / optical density streams.
  * **Does**:
    1. Tracks multi-product batch cycles (e.g., Cycle 24: Regular Mogas $\rightarrow$ Premium Mogas $\rightarrow$ Jet A-1 $\rightarrow$ ULSD);
    2. Calculates dynamic linepack arrival times at refinery receipt and delivery manifolds;
    3. Models pipeline turbulent interface mixing (transmix) volumes using Taylor dispersion equations;
    4. Formulates optimal transmix cutting strategies (heart-cut vs. wide-cut) to minimize volume of downgraded product routed to reprocessing slop tanks.
  * **Returns**: Pipeline Batch Evacuation Dossier containing batch arrival schedules, transmix cut-point alerts, and slop tank volume projection curves.
  * **Stops At**: Overriding physical pipeline delivery station diverter valves.
* **Failure Modes & Safety Envelopes**: If interface monitoring indicates that high-flash diesel has contaminated an aviation Jet A-1 batch, the agent flags an immediate `[Aviation Quality Violation: Divert Interface to Reprocessing Slop]`.

### Agent 6: Railcar & Truck Loading Rack Rack-Throughput & Evacuation Sieve
* **In One Line**: Ingests terminal automation system (TAS) loading bay telemetry, transport carrier nominations, and railhead siding inventories to balance rack evacuation queues and eliminate terminal bottlenecks.
* **Friction Solved**: Eliminates 2.25 hours daily of manual rack coordination and truck congestion management across high-volume distribution terminals.
* **The Specification**:
  * **Reads**: Terminal Automation System (TAS) bay loading meters, truck carrier arrival queues, automated bill of lading (BOL) transaction logs, and railcar siding track capacities (LPG, asphalt, heavy fuel oil).
  * **Does**:
    1. Evaluates live truck rack bay throughput against storage tank production rates;
    2. Identifies product evacuation deficits (e.g., truck rack gasoline liftings falling $30\%$ behind production due to carrier shortages);
    3. Optimizes railcar block staging: schedules empty railcar positioning and loaded car pull-outs with rail transport carriers;
    4. Projects terminal product rack run-out or tank-top events, issuing carrier dispatch notifications.
  * **Returns**: Terminal Rack & Rail Logistics Manifest detailing bay queue efficiency, product lift volumes, carrier turnaround times, and railcar fleet status.
  * **Stops At**: Canceling commercial transport carrier loading contracts or overriding rack safety overfill sensors.
* **Failure Modes & Safety Envelopes**: If LPG or asphalt storage tank levels exceed $90\%$ with railcar evacuation stalled, the agent issues an escalated `[Evacuation Deficit Alert: Critical Rail Pull Required to Prevent Plant Rate Cut]`.

### Agent 7: Refinery Physical vs. Book Mass Balance & Inventory Reconciliation Synthesizer
* **In One Line**: Integrates custody transfer fiscal flow computers, ATG static tank measurements, API MPMS Chapter 12 volume correction factors (CTPL/VCF), and ERP ledgers to publish the certified daily refinery logistics inventory.
* **Friction Solved**: Eliminates 3.15 hours daily of tedious multi-system spreadsheet data entry, identifying measurement meter drift, unmetered evaporation/flare losses, and financial inventory discrepancies.
* **The Specification**:
  * **Reads**: Automated Tank Gauging (ATG) inventory snapshots (standard 24:00 midnight closing), fiscal custody transfer flow computers (meters at docks, pipelines, rail, racks), crude receipt bills of lading, and SAP IS-Oil book inventory ledgers.
  * **Does**:
    1. Applies API MPMS Chapter 12 temperature and density volume correction factors (CTPL/VCF) to convert gross observed volumes (GOV) to net standard volumes (NSV) at $60^\circ\text{F} / 15^\circ\text{C}$;
    2. Calculates physical inventory across all crude, intermediate, and finished product tanks;
    3. Reconciles physical inventory against commercial book inventory: $\text{Ending Inventory} = \text{Beginning} + \text{Receipts} + \text{Production} - \text{Dispatches} - \text{Fuel/Loss}$;
    4. Identifies physical vs. book volume imbalances ($>0.5\%$ target threshold) and isolates localized measurement anomalies;
    5. Formats certified daily refinery hydrocarbon logistics balance sheets.
  * **Returns**: Certified Daily Refinery Logistics Balance Sheet and Inventory Reconciliation Dossier ready for financial accounting closure and management review.
  * **Stops At**: Adjusting financial accounting general ledger write-offs or modifying certified custody transfer meter calibration factors.
* **Failure Modes & Safety Envelopes**: If physical inventory discrepancy exceeds $1.0\%$ of daily refinery throughput ($\sim 2,000\text{ bbls}$ on a $200,000\text{ bpd}$ refinery), the agent triggers a mandatory `[Material Balance Imbalance: Physical Leak / Meter Calibration Audit Mandated]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating refinery provides its own crude capacity, tank count, and demurrage rate multipliers.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Refinery Tankage Dynamic Ullage & Bottleneck Sieve** | 1 Daily 14-Day Rolling Schedule Review (50 tanks) | 4.50 hours | 0.45 hours | **4.05 hours saved** | Multi-System Data Collation & Excel Trajectory Modeling |
| **Marine Vessel AIS Tracking & Demurrage Minimizer** | 1 Marine Tanker Cargo (Suezmax/Aframax receipt/export)| 4.00 hours | 0.40 hours | **3.60 hours saved** | AIS Manual Tracking & Charter-Party Laytime Sifting |
| **Multi-Service Swing Tank & Heel Compatibility Sieve** | 1 Swing Tank Changeover Event | 3.00 hours | 0.30 hours | **2.70 hours saved** | Chemical Contamination Math & Linepack Checking |
| **CDU Feed Blend Diet & Receipt Allocation Sieve** | 1 Daily Crude Charge Allocation Cycle | 3.00 hours | 0.30 hours | **2.70 hours saved** | Multi-Tank Crude Parcel Balancing & Settling Vigilance |
| **Pipeline Batch Cycle & Interface Transmix Sieve** | 1 Multi-Product Pipeline Batch Cycle | 3.50 hours | 0.35 hours | **3.15 hours saved** | Pipeline Pumping Slip Tracking & Transmix Math |
| **Railcar & Truck Rack Evacuation Queue Sieve** | 1 Daily Rack and Rail Coordination Cycle | 2.50 hours | 0.25 hours | **2.25 hours saved** | Terminal Queue Balancing & Siding Inventory Checking |
| **Physical vs. Book Mass Balance & Reconciliation** | 1 Daily Midnight Refinery Closing Cycle | 3.50 hours | 0.35 hours | **3.15 hours saved** | API MPMS Volume Conversion & Book Reconciliation Drag |
| **Total Operational Logistics Drag Reduction** | **Per Daily / Weekly Logistics Scheduling Cycle** | **24.00 hours** | **2.40 hours** | **21.60 hours saved** | **90.0% reduction in refinery logistics scheduling drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[API-MPMS-Ch12]` | American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities*, 2021 | api.org | Recommended Practice | Tank volumetric inventory calculation, CTPL volume correction factors |
| `[OCIMF-Marine]` | Oil Companies International Marine Forum, *Marine Terminal Administration and Laytime Guidelines*, 2021 | ocimf.org | Industry Standard | Notice of Readiness (NOR), charter-party laytime, and demurrage calculations |
| `[FERC-Tariffs]` | Federal Energy Regulatory Commission, *Rules and Regulations Governing Pipeline Transportation of Liquid Hydrocarbons*, 18 CFR Part 341 | ferc.gov | Federal Regulation | Multi-product batching, interface transmix allocation, and nomination rules |
| `[AFPM-Logistics]` | American Fuel & Petrochemical Manufacturers, *Refinery Offsites and Supply Chain Operational Best Practices*, 2022 | afpm.org | Industry Best Practice | Tank-top prevention, crude diet settling times, and swing-tank protocols |
| `[API-Std-2350]` | American Petroleum Institute, *Overfill Prevention for Storage Tanks in Petroleum Facilities*, 5th Edition, 2020 | api.org | Technical Standard | Safe filling heights, critical overfill alarms, and automated tank monitoring |

### Negative Search Registry
* **Searched**: Aspen Petroleum Scheduler (APS / Orion) technical documentation, SAP IS-Oil TSW manuals, and downstream conference archives for *"autonomous dynamic tank ullage bottleneck resolution integrating real-time ATG telemetry with predictive swing-tank allocation without manual spreadsheet re-scheduling"*.
* **Result**: `Negative Search, 2026-09`. Commercial software packages provide static planning canvases and commercial transaction logs; none continuously ingest live SCADA tank levels and marine AIS telemetry to autonomously resolve dynamic hydraulic bottlenecks and generate conflict-free tankage schedules during live operations without human manual re-modeling.
* **Searched**: Downstream logistics software repositories for *"automated cross-system pipeline interface transmix cut optimization coupled with tank heel contamination prediction directly from live SCADA gravitometers"*.
* **Result**: `Negative Search, 2026-09`. Commercial systems log batch delivery tickets post-movement; none autonomously evaluate upstream linepack transmix dispersion to calculate real-time diverter valve timing and verify destination tank heel compatibility without manual operator supervision.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"A refinery can boast the most sophisticated hydrocracker in the world, but if the finished diesel tanks reach ninety-eight percent safe fill on a Sunday afternoon because an export pipeline tripped and nobody noticed the ullage disappearing, the entire multi-billion-dollar plant slows down to zero."*
* **The Secondary Line**: *"Letting a crude tanker sit idle at the outer anchorage for twelve hours because a berth wasn't sequenced properly burns fifty thousand dollars of demurrage; letting that same crude into the refinery without twenty-four hours of settling time destroys a desalter and costs two million."*
* **Open Questions for Refinery Logistics Schedulers**:
  1. How many hours per day do you spend manually extracting tank gauging data from SCADA consoles and email nominations into scheduling spreadsheets?
  2. What has been the single largest demurrage loss or throughput curtailment your refinery experienced in the past year due to unexpected storage tank bottlenecks or marine berth sequencing conflicts?
  3. How frequently do multi-service swing tank product changeovers result in off-spec product due to un-quantified heel contamination or linepack displacement errors?
