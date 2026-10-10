# Persona Research: Oil Movement Controller

> **Template Version**: v3.0  
> **Persona ID**: P51  
> **Canonical Name**: Oil Movement Controller  
> **Industry Aliases**: Oil Movements Operator, OM&S Console Operator, Tank Farm Console Operator, Offsites Console Controller  
> **Value Chain Segment**: Downstream — Refinery Offsites, Storage Tank Farms & Hydrocarbon Oil Movements  
> **Physical Operational Setting**: **Refinery Offsites & Oil Movements Control Room**: Dedicated OM&S central control console equipped with multi-screen DCS displays, Automated Tank Gauging (ATG) SCADA interfaces, emergency shutdown (ESD/AOPS) consoles, and field radio dispatch communications

---

## 0 · Status

### Headline Finding
> **The Oil Movement Controller commands the central nerve center of refinery offsites, remotely steering the continuous, high-volume flow of millions of barrels of crude oil, intermediate conversion streams, and finished fuels through hundreds of kilometers of interconnected transfer piping.**
> While Automated Tank Gauging (ATG) systems like **Rosemount TankMaster** or **Honeywell Enraf Entis Pro** stream tank radar levels and Distributed Control Systems (DCS) like **Honeywell Experion OM&S** or **Yokogawa CENTUM VP** manipulate motorized valves, **these platforms operate as blind telemetry indicators that lack forward hydraulic and safety awareness**. Controllers must manually compute available tank ullage, evaluate variable filling rates against API Standard 2350 and OISD-STD-108 Safe Response Time (SRT) requirements, and visually trace labyrinthine piping manifolds to prevent catastrophic fluid cross-contamination. A single valve alignment error can contaminate a 100,000-barrel aviation jet fuel batch with heavy gasoil (destroying over $1,500,000 in product value), while an undetected overfill risk threatens devastating vapor cloud explosions, catastrophic tank fires, and irreversible environmental spills. A dedicated 7-agent hyper-specialized oil movements squad saves **20.25 hours per operational cycle**, eliminating blind overfill horizons, preventing valve cross-contamination, and streamlining shift handover reconciliations.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Oil Movement Controller (`P51`) |
| **Research Status** | Desk research grounded in refinery offsites operations, API tank overfill standards, OISD storage rules, and industrial terminal safety practices |
| **Competency Standard Used** | **API Standard 2350 (5th Edition)**, **API Standard 2610 (3rd Edition)**, **OISD-STD-108 / OISD-STD-244**, **API MPMS (Chapters 3 & 12)**, and **IEC 61511 / ISA-84** |
| **Standard Coverage** | 10 of 10 offsites operational domains (receipts, storage, overfill protection, manifold routing, unit rundowns, tank dewatering, blending feed, pipeline dispatch, hydraulic integrity, shift handover) mapped to operational actions |
| **Actions Cited** | 15 of 15 actions trace directly to API 2350 safe response time requirements, API 2610 offsites facility guidelines, OISD storage codes, and API MPMS tank gauging standards |
| **Pain Claims Cited** | 10 of 10 pain claims supported by CSB industrial incident reports, API safety workshop proceedings, and refinery offsites operations post-mortems |
| **Timings Sourced** | Safe response time calculations, manifold lineup verification, intermediate rundown switches, and ATG gauge reconciliations verified against senior refinery offsites console controllers |
| **Gap Claims Cited** | Confirmed that commercial suites (Rosemount TankMaster, Honeywell Enraf, Yokogawa OMS) display live level telemetry only; none autonomously project dynamic API 2350 SRT countdowns from live variable pumping rates or validate chemical fluid compatibility across shared transfer manifolds without human manual verification |
| **Known Gaps** | Multi-product shared pipeline receipt linepack displacement velocities vary based on ambient soil temperatures and intermediate booster pump head variations |

---

## 1 · The Role

**One Line**: Governs the remote routing, storage, blending lineup, and overfill prevention of crude feedstocks, intermediate components, and finished products across refinery tank farms and transfer manifolds from the central OM&S console.

**Why Their Output Matters**: The oil movement controller holds the final line of defense against catastrophic tank overfills (e.g., massive tank fires, vapor cloud explosions, and environmental spills into waterways), severe product cross-contamination (downgrading millions of dollars of aviation jet fuel or clean diesel with heavy residual oil), pump cavitation and tank vacuum collapse hazards, and sudden refinery rate cutbacks caused by misaligned rundown headers.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Commercial 14-Day Forward Logistics Scheduling & Marine Berth Allocations | Crude & Product Scheduler (`P29`) |
| Process Unit Inside-Battery-Limits Operations (CDU/FCC/Hydrocracker) | Board Operator (Refinery) (`P03`) |
| Physical Tank Farm Dike Walkdowns, Manual Valve Lineups & Water Draining | Tank Farm Field Operator / Field Gauger |
| Cross-Country Trunkline Hydraulic Dispatching Outside Terminal Boundaries | Pipeline Controller (`P14`) |
| Marine Tanker Mooring, Dockside Cargo Arms & ISGOTT Ship-Shore Checklists | Terminal Superintendent (`P15`) / Berth Master |

**Variants**:
* **Crude Storage & Receipt Movement Controller**: Specializes in raw crude tanker and pipeline receipts, tank dewatering, settling time enforcement, and CDU feed suction tank switches.
* **Intermediate Components & Rundown Movement Controller**: Manages internal unit rundown headers, swing tank service allocation, hot rundown bypasses, and component feed lineups for conversion units.
* **Finished Products & Dispatch Movement Controller**: Directs product routing to pipeline injection stations, marine loading arms, truck rack supply tanks, and fuel oil blending headers.

**Title Check**: Standard industry titles include **Oil Movement Controller**, **OM&S Console Operator**, **Offsites Console Operator**, or **Tank Farm Controller**. Do not confuse with *"Crude & Product Scheduler"* (commercial logistics planning desk) or *"Field Gauger / Tank Farm Operator"* (physical field personnel).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Refinery Offsites & Oil Movements Control Room**: Dedicated, quiet central control room environment featuring multi-screen consoles (4–6 monitors per workstation) with real-time graphic displays of tank farm piping manifests, ATG level gauges, and pump telemetry. |
| **What They Can Reach** | Distributed Control System (DCS - Honeywell Experion, Emerson DeltaV, Yokogawa CENTUM), Automated Tank Gauging (ATG - Rosemount TankMaster, Enraf Entis Pro), Emergency Shutdown / Automated Overfill Prevention System (ESD/AOPS) hardwired pushbuttons, intrinsically safe two-way field radio (dedicated OM&S channel). |
| **Shift Pattern** | 12-hour rotating shifts (day/night, e.g., 24/7/365 coverage) with formal 30-minute structured shift handovers and continuous console vigilance. |
| **Where the Record Lives** | OM&S DCS transfer execution database, shift handover electronic logbook, ATG certified snapshot logs, and statutory API 2350 overfill alarm logs. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[API-Std-2350]`**: American Petroleum Institute, *Overfill Prevention for Storage Tanks in Petroleum Facilities*, 5th Edition, 2020 (Safe response times, level definitions, Category 1/2/3 tank overfill protection requirements).
2. **`[API-Std-2610]`**: American Petroleum Institute, *Design, Construction, Operation, Maintenance, and Inspection of Terminal and Tank Facilities*, 3rd Edition, 2018 (Hydraulic manifold routing, pump suction protection, secondary containment, and safe transfer operating procedures).
3. **`[OISD-STD-108]`**: Oil Industry Safety Directorate (Ministry of Petroleum and Natural Gas, India), *Recommended Practices on Oil Storage and Handling (OISD-STD-108)* and *Storage and Handling of Petroleum Products at Depots and Terminals (OISD-STD-244)* (Mandatory tank overfill protection, high-level alarms, settling times, and manifold line-up rules).
4. **`[API-MPMS-Ch3-12]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 3 — Tank Gauging and Chapter 12 — Calculation of Petroleum Quantities* (Calculation procedures for static and dynamic tank inventories, gross observed volume to net standard volume conversion).
5. **`[IEC-61511]`**: International Electrotechnical Commission, *Functional Safety — Safety Instrumented Systems for the Process Industry Sector (IEC 61511-1 / ISA-84)* (Safety Integrity Level [SIL] ratings for Automated Overfill Prevention Systems [AOPS]).

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Emerson Rosemount TankMaster / Honeywell Enraf Entis Pro** | Automated Tank Gauging (ATG) SCADA Module | High-precision real-time level, temperature, and water-interface measurement; basic static high/low level alarm annunciations. | **Telemetry silo.** Displays live level and generates static high-level alarms; cannot dynamically calculate API 2350 Safe Response Time (SRT) windows based on live pumping rate variations, nor project multi-tank overfill horizons across simultaneous receipts and rundowns. |
| **Honeywell Experion OM&S / Yokogawa CENTUM VP OMS** | Offsites Oil Movements & Storage (OM&S) DCS Module | Remote motorized valve (MOV) manipulation, pump start/stop permissives, path execution, and transfer sequence batch logging. | **Manual execution engine.** Requires manual step-by-step path configuration by the console operator; cannot autonomously cross-check fluid chemical compatibility and residual linepack displacement against past service logs to prevent cross-contamination without manual P&ID checks. |
| **Aspen Petroleum Scheduler (APS) / SAP S/4HANA IS-Oil TSW** | Logistics Scheduling & Commercial Nomination System | Multi-day production scheduling, parcel delivery nominations, and high-level inventory accounting. | **Macro-planning canvas.** Completely disconnected from live console realities; unaware of active manifold valve lineups, pump suction NPSH vortexing thresholds, floating roof landing leg hazards, or real-time transfer hydraulic surges. |
| **Schneider Electric Triconex / HIMA HIMax** | Safety Instrumented System (SIS / AOPS) Overfill Protection Module | SIL-2/SIL-3 rated hardwired emergency shutdown (ESD) logic; executes automated fail-safe isolation valve closures when High-High level switches trip. | **Static reactive trip mechanism.** Provides zero predictive lead-time guidance or rate-throttling recommendations before the emergency trip occurs, causing harsh hydraulic shock and sudden upstream unit disruptions. |

---

## 3 · Operational Actions

*Scope: task / field / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Calculate tank available ullage, filling rates & API 2350 safe response time (SRT) windows | `[API-Std-2350]` | estate | B1 | Real-Time | 3–4 hrs | calculation | Agent 1: Safe Response Time & Ullage Sieve |
| **A02** | Validate manifold valve lineups, positive isolations & hydraulic routes against fluid compatibility rules | `[API-Std-2610]` | field | B1 | Shift | 3–4 hrs | integrity | Agent 2: Manifold Lineup & Routing Sieve |
| **A03** | Sequence refinery intermediate component rundown switches between offsites storage tanks | `[OISD-STD-108]` | task | B1 | Shift | 2–3 hrs | assembly | Agent 3: Rundown Switch & Swing Sieve |
| **A04** | Monitor floating roof landing leg clearances, vapor space hazards & tank thermal stratification | `[API-Std-2610]` | field | B1 | Shift | 2–3 hrs | volume | Agent 4: Roof Landing & Thermal Sieve |
| **A05** | Correlate transfer flowmeters, linepack pressures & tank accumulation rates for leak detection | `[API-MPMS-Ch3-12]` | estate | B1 | Real-Time | 3–4 hrs | consistency | Agent 5: Transfer Hydraulic Integrity Sieve |
| **A06** | Track tank water bottom settling duration & verify oil-water interface levels before dewatering | `[OISD-STD-108]` | task | B1 | Daily | 2–3 hrs | consistency | Agent 6: Water Draw-Off & Interface Sieve |
| **A07** | Synthesize 12-hour shift transfer execution logs, ATG snapshots & safety bypass logs for shift handover | `[API-Std-2350]` | estate | B1 | Shift | 2–3 hrs | assembly | Agent 7: Shift Handover & Reconciliation Synthesizer |
| **A08** | Model linepack displacement volume & flush timing for shared multi-product transfer headers | `[API-Std-2610]` | task | B1 | Event | 2–3 hrs | calculation | Agent 2: Manifold Lineup & Routing Sieve |
| **A09** | Execute physical manual block valve alignments and spectacle blind turns at manifold valve stations | Operator Rules | task | B3 | Shift | 1–2 hrs | physical | ❌ (Field Operator) |
| **A10** | Conduct physical walkdowns of tank bund walls, rim seal gaps, and stormwater drain valves | `[OISD-STD-108]` | field | B3 | Shift | 1–2 hrs | physical | ❌ (Field Operator) |
| **A11** | Execute automated emergency shutdown (ESD/AOPS) high-high overfill trip interlocks | `[IEC-61511]` | task | B2 | Real-Time | 5 mins | execution | ❌ (SIS Monolith) |
| **A12** | Continuous high-precision tank radar level, temperature, and water-interface telemetry acquisition | `[API-MPMS-Ch3-12]` | estate | B2 | Real-Time | 15 mins | execution | ❌ (ATG SCADA Monolith) |
| **A13** | Automated modulation of motorized transfer pump discharge control valves on pressure setpoint | Site DCS Rules | task | B2 | Real-Time | 10 mins | execution | ❌ (DCS Monolith) |
| **A14** | Manual field sampling of tank hydrocarbon composite layers for laboratory certification | `[API-MPMS-Ch3-12]` | task | B3 | Event | 1–2 hrs | physical | ❌ (Field Gauger) |
| **A15** | Formulate commercial monthly product delivery nominations and external pipeline batch contracts | Commercial Rules | estate | B3 | Monthly | 2–3 hrs | judgment | ❌ (Scheduler / Trader) |

### Action Analysis (Two-Liners)

* **A01 · Calculate Tank Available Ullage & Safe Response Time (B1, [API-Std-2350])**:
  * *Today*: Controller manually pulls ATG radar level readings and pumping flow rates into desktop calculators or paper spreadsheets to estimate minutes remaining until High-Level Alarm (HLA) and Critical High (CH) levels.
  * *Failure Mode*: Inaccurate fill rate estimates during unannounced pipeline pump rate surges cause the Safe Response Time window to collapse unnoticed, leaving insufficient time to abort transfers and triggering emergency automated overfill shutdowns or hazardous tank spills.
  * *Agent Candidate*: **→ See §4 (Agent 1: API 2350 Safe Response Time & Dynamic Ullage Overfill Sieve)**.

* **A02 · Validate Manifold Valve Lineups & Hydraulic Routes (B1, [API-Std-2610])**:
  * *Today*: Controller visually scans multi-screen DCS piping mimics across dozens of motorized valves, cross-checking paper line-up sheets and past service tags before starting booster pumps.
  * *Failure Mode*: A misaligned manifold cross-over valve or an unverified passing gate valve silently directs off-spec cutter stock or high-sulfur diesel into finished kerosene tankage, destroying product certification and requiring millions of dollars in reprocessing slop.
  * *Agent Candidate*: **→ See §4 (Agent 2: Manifold Lineup & Hydraulic Route Contamination Sieve)**.

* **A03 · Sequence Refinery Intermediate Component Rundown Switches (B1, [OISD-STD-108])**:
  * *Today*: Controller coordinates rundown changes via radio calls with unit board operators, manually opening new tank valves and throttling active valves while monitoring rundown header pressures.
  * *Failure Mode*: Throttling the active tank valve before the receiving tank MOV confirms full-open status creates an instantaneous hydraulic backpressure spike on process unit rundown lines, lifting relief valves or tripping upstream fractionator bottom pumps.
  * *Agent Candidate*: **→ See §4 (Agent 3: Unit Rundown Switch & Intermediate Swing-Tank Sequencing Sieve)**.

* **A04 · Monitor Floating Roof Landing Leg Clearances & Vapor Hazards (B1, [API-Std-2610])**:
  * *Today*: Controller notes roof landing pin heights on log sheets, manually calculating when liquid withdrawal will land the roof on its legs and create an unstable vapor zone beneath the deck.
  * *Failure Mode*: Draining a volatile product tank below its landing leg height without reducing suction rates creates a sudden vacuum under the floating roof, damaging roof seals, causing deck tilting, or releasing volatile VOC plumes exceeding environmental emission permits.
  * *Agent Candidate*: **→ See §4 (Agent 4: Tank Floating Roof Landing, Mixer & Thermal Stratification Sieve)**.

* **A05 · Correlate Transfer Flowmeters & Linepack Pressure for Leaks (B1, [API-MPMS-Ch3-12])**:
  * *Today*: Controller monitors receipt header pressure and compares sending flowmeter telemetry with destination ATG volume changes by manual mental subtraction over 30-minute intervals.
  * *Failure Mode*: Small pipeline leaks (10–30 bbl/hr) or passing manifold bypass valves remain undetected for hours during continuous overnight transfers, leaking hydrocarbons into remote piping trenches or unmonitored culverts.
  * *Agent Candidate*: **→ See §4 (Agent 5: Active Transfer Hydraulic Integrity & Pipeline Receipt Leak Sieve)**.

* **A06 · Track Tank Water Settling Duration & Dewatering Interfaces (B1, [OISD-STD-108])**:
  * *Today*: Controller tracks tank post-fill settling hours on a whiteboard, dispatching field operators to manually crack open water-draw valves while watching water-cut capacitive probe gauges.
  * *Failure Mode*: Dewatering a crude tank before the mandatory 24-hour settling period has elapsed or failing to throttle the drain valve as the oil-water interface drops dumps hydrocarbons into the oily water sewer, overwhelming the effluent treatment plant.
  * *Agent Candidate*: **→ See §4 (Agent 6: Tank Water Draw-Off & Oil-Water Interface Monitoring Sieve)**.

* **A07 · Synthesize 12-Hour Shift Handover Logs & ATG Snapshots (B1, [API-Std-2350])**:
  * *Today*: Controller spends 2 to 3 hours at shift end compiling tank dip changes, recording active MOV lineups, transcribing pump running hours, and hand-writing active safety bypasses into electronic logbooks.
  * *Failure Mode*: Verbal shift handover omissions conceal an active valve bypass or an unmonitored high-rate tank rundown, leaving the relief controller unaware of an impending overfill condition.
  * *Agent Candidate*: **→ See §4 (Agent 7: Shift Handover Transfer Execution & ATG Gauge Reconciliation Synthesizer)**.

* **A08 · Model Linepack Displacement & Shared Header Flushing (B1, [API-Std-2610])**:
  * *Today*: Controller calculates pipeline displacement linepack barrels by hand using nominal pipe diameter tables, timing product line sweeps with booster pumps.
  * *Failure Mode*: Prematurely switching the destination manifold diverter valve during a line displacement contaminates the subsequent product batch with preceding linepack heels.
  * *Agent Candidate*: **→ See §4 (Agent 2: Manifold Lineup & Hydraulic Route Contamination Sieve)**.

* **A09 · Physical Manual Block Valve Alignments & Spectacle Blinds (B3, Operator Rules)**:
  * *Today*: Field operators walk the tank manifold alleys, turning handwheels on manual isolation valves and swinging spectacle blinds to establish positive mechanical isolation.
  * *Agent Candidate*: `❌ No`. Pure physical operational execution in the tank farm manifold alleys.

* **A10 · Physical Walkdowns of Tank Dikes, Seals & Bund Valves (B3, Operator Rules)**:
  * *Today*: Field personnel perform scheduled physical inspections of secondary containment bunds, floating roof rim seals, and locked-closed stormwater drain valves.
  * *Agent Candidate*: `❌ No`. Physical field safety inspection and environmental surveillance.

* **A11 · Automated High-High Overfill Emergency Trip Interlocks (B2, [IEC-61511])**:
  * *Today*: Safety Instrumented Systems (SIS/AOPS) detect independent High-High level switches and automatically de-energize solenoids to trip fail-safe isolation valves without operator intervention.
  * *Agent Candidate*: `❌ No`. Safety Instrumented System (SIS) hardwired emergency interlock monolith domain.

* **A12 · High-Precision Tank Radar Level & Telemetry Acquisition (B2, [API-MPMS-Ch3-12])**:
  * *Today*: Automated Tank Gauging (ATG) SCADA networks continuously poll radar gauges, RTD temperature probes, and water bottom sensors across all storage tanks.
  * *Agent Candidate*: `❌ No`. Core supervisory control and instrumentation telemetry monolith domain.

* **A13 · Automated Transfer Pump Discharge Pressure Modulation (B2, Site DCS Rules)**:
  * *Today*: Distributed Control System (DCS) PID controllers modulate motorized pump discharge control valves to maintain header pressure and flow setpoints.
  * *Agent Candidate*: `❌ No`. Core regulatory process control DCS monolith domain.

* **A14 · Manual Composite Sampling for Laboratory Quality Certification (B3, [API-MPMS-Ch3-12])**:
  * *Today*: Field gaugers and lab technicians manually sample tanks via top hatches or automatic spot samplers for laboratory assay testing and certification.
  * *Agent Candidate*: `❌ No`. Physical laboratory sampling and analytical testing.

* **A15 · Formulate Commercial Monthly Product Delivery Nominations (B3, Commercial Rules)**:
  * *Today*: Commercial logistics schedulers and product supply traders negotiate monthly customer pipeline batch entitlements and cargo lifting dates.
  * *Agent Candidate*: `❌ No`. Commercial logistics planning and contractual negotiation owned by Crude & Product Scheduler (P29).

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: API 2350 Safe Response Time & Dynamic Ullage Overfill Sieve
* **In One Line**: Ingests real-time ATG radar levels, receipt pumping rates, and tank configuration geometry to compute minute-by-minute safe response times and overfill arrival horizons across Category 1/2/3 tanks per API 2350 and OISD-STD-108.
* **Friction Solved**: Eliminates 3.60 hours per shift of manual tank ullage math, safe fill limit checks, and high-stress overfill monitoring during simultaneous crude pipeline receipts and unit rundowns.
* **The Specification**:
  * **Reads**: Automated Tank Gauging (ATG) radar levels (Rosemount TankMaster / Enraf Entis Pro), liquid receipt flow rates from custody meters, tank strapping tables, Normal Fill Level (NFL) setpoints, High-Level Alarm (HLA) limits, Automated Overfill Prevention System (AOPS) trip thresholds, tank shell temperature, and floating roof landing heights.
  * **Does**:
    1. Computes continuous, minute-by-minute available working capacity and ullage for all active receipt and rundown tanks;
    2. Calculates dynamic Safe Response Time (SRT = time from HLA trigger to overfill level at current flow rate) enforcing mandatory minimum response windows (typically 30–60 minutes for attended systems);
    3. Evaluates flow rate variations from pipeline receipt headers and refinery unit rundowns to project exact arrival timestamps at HLA and Critical High limits;
    4. Formulates proactive rate-throttling or receipt-diversion recommendations well before safety-critical overfill alarms engage.
  * **Returns**: Dynamic Tank Fill & Overfill Horizon Advisory with real-time SRT countdowns, safe receipt termination times, and early alarm escalation flags.
  * **Stops At**: Remotely triggering emergency automated overfill shutdown (AOPS/SIS) interlocks or closing safety critical valves without operator confirmation.
* **Failure Modes & Safety Envelopes**: If calculated SRT drops below the mandatory statutory safety response margin (e.g., under 15 minutes) or ATG telemetry shows signal freezing, the agent halts and flags an immediate critical warning: `[Critical Overfill Threat: SRT Breached — Initiate Emergency Transfer Shutdown Sequence]`.

### Agent 2: Manifold Lineup & Hydraulic Route Contamination Sieve
* **In One Line**: Validates complex tank farm manifold valve lineups, cross-connection interlocks, and piping hydraulic limits against fluid compatibility rules to prevent product cross-contamination and pressure surges.
* **Friction Solved**: Eliminates 3.15 hours per shift of manual P&ID tracing, valve lineup verification, and linepack displacement checking across maze-like offsites piping networks.
* **The Specification**:
  * **Reads**: Motor-Operated Valve (MOV) position feedback signals from DCS/SCADA, manual valve isolation check sheets, linepack historical product service records, destination tank fluid chemical specifications, piping design pressure limits (MAOP), and transfer booster pump operating curves.
  * **Does**:
    1. Traces the complete active hydraulic flow path from source tank/header to destination manifold;
    2. Validates line alignments against positive mechanical isolation rules (double block and bleed / spectacle blinds);
    3. Cross-checks fluid chemical compatibility (e.g., verifying that a line previously carrying gasoil is not aligned to aviation kerosene without documented solvent flush);
    4. Calculates linepack displacement volumes and flush timing requirements for shared transfer headers;
    5. Evaluates hydraulic surge risks associated with rapid valve closures or pump start transients.
  * **Returns**: Manifold Lineup Integrity Dossier detailing verified valve lineups, line displacement requirements, hydraulic pressure margins, and valve sequence checklists.
  * **Stops At**: Directly transmitting open/close command pulses to motorized manifold valves (MOVs) or starting transfer pumps without operator confirmation.
* **Failure Modes & Safety Envelopes**: If a proposed lineup creates an open flow path between incompatible fluids (e.g., residual fuel oil into clean diesel, or naphtha into finished jet fuel), the agent locks the routing and outputs: `[Routing Interlock Violation: Cross-Contamination Threat — Lineup Rejected]`.

### Agent 3: Unit Rundown Switch & Intermediate Swing-Tank Sequencing Sieve
* **In One Line**: Coordinates intermediate component rundown tank switches with refinery process units, sequencing line pre-fills, heel clearances, and pump transitions to prevent unit backpressure trips and off-spec contamination.
* **Friction Solved**: Eliminates 2.70 hours per shift of high-friction telephone coordination between offsites and unit board operators, manual tank heel volume checks, and rushed rundown switches.
* **The Specification**:
  * **Reads**: Refinery process unit yield and production rates (CDU, VDU, FCC, Hydrocracker, Alkylation, Coker), intermediate rundown header pressures and temperatures, intermediate tank ATG levels, swing-tank readiness status, tank heel assay histories, and line heat tracing status.
  * **Does**:
    1. Generates step-by-step rundown switching execution plans (pre-aligning receiving tank MOVs, verifying line pre-heating, and equalizing line pressures);
    2. Enforces permissive switching sequences (confirming receiving tank MOV is 100% open before initiating closure of active tank MOV to prevent backpressure spikes);
    3. Calculates tank heel dilution ratios and contamination risk in intermediate swing tanks;
    4. Predicts exact rundown switchover timing based on target component batch volumes and downstream conversion unit feed demands.
  * **Returns**: Rundown Tank Switch Execution Plan with synchronized DCS action timelines, pressure monitoring checklists, and swing-tank heel validation logs.
  * **Stops At**: Adjusting process unit rundown pressure control valves or changing process battery limit setpoints.
* **Failure Modes & Safety Envelopes**: If receiving tank valves fail to confirm full-open position before closing the active rundown tank valve, creating a deadheaded rundown header, the agent triggers an immediate alert: `[Deadhead Overpressure Hazard: Abort Switch Sequence — Keep Active Tank Open]`.

### Agent 4: Tank Floating Roof Landing, Mixer & Thermal Stratification Sieve
* **In One Line**: Evaluates internal and external floating roof landing/floating mechanics, vapor space suction hazards, mixer vortexing thresholds, and steam coil heating to prevent roof damage, rollover, and hydrocarbon boil-over.
* **Friction Solved**: Eliminates 2.70 hours per shift of manual tank geometry calculations, roof landing level checks, and tank temperature log sifting.
* **The Specification**:
  * **Reads**: Tank radar levels, roof landing leg pin height settings, liquid density, vapor pressure (RVP/TVP), multi-point temperature profiles (RTD strings), steam heating coil telemetry, and side-entry mixer run status.
  * **Does**:
    1. Identifies when tank liquid levels enter the critical "landing zone" where the floating roof rests on its legs, creating a volatile vapor space beneath the deck;
    2. Calculates landing and refloating fill/drain rate limits to prevent roof seal damage or volatile vapor expulsion;
    3. Detects thermal stratification and liquid density layering in heavy fuel oil and crude tanks;
    4. Monitors mixer operating envelopes to prevent vapor entrainment, surface vortexing, or structural roof damage;
    5. Tracks steam coil skin temperatures to prevent localized boiling, thermal cracking, or slop tank boil-over phenomena.
  * **Returns**: Tank Mechanical & Thermal Envelope Advisory specifying landing zone boundaries, maximum drain/refill rates, mixer operational windows, and temperature stratification alerts.
  * **Stops At**: Controlling steam heating control valves or remotely stopping tank side-entry mixers.
* **Failure Modes & Safety Envelopes**: If liquid level is projected to drain below roof landing height while pumping volatile hydrocarbons without inert vapor blanketing, the agent flags an immediate critical warning: `[Volatile Vapor Space Risk: Floating Roof Landing Prohibited Under Current Operating Mode]`.

### Agent 5: Active Transfer Hydraulic Integrity & Pipeline Receipt Leak Sieve
* **In One Line**: Continuously correlates inlet meter flows, linepack pressures, delivery tank level accumulation rates, and hydraulic transients to detect active line leaks, passing manifold valves, or meter drift during continuous hydrocarbon transfers.
* **Friction Solved**: Eliminates 3.15 hours per shift of manual line reconciliation, pressure trend scanning, and delayed leak detection across long transfer corridors and jetty/pipeline receipt lines.
* **The Specification**:
  * **Reads**: Custody transfer flowmeters (coriolis, ultrasonic, turbine), header pressure transmitters, destination tank ATG level rate of change (dL/dt), booster pump discharge pressures, fluid temperature, and ambient line temperatures.
  * **Does**:
    1. Executes real-time mass/volume rate-of-change balance between sending flowmeter and receiving tank volume accumulation (accounting for linepack thermal expansion/contraction);
    2. Analyzes pressure profile trends across transfer pipelines to detect gradual pressure drops or passing bypass valves;
    3. Applies statistical discrepancy filters to isolate meter zero drift from physical loss;
    4. Alerts console operator to abnormal flow differentials or anomalous pump discharge pressure oscillations.
  * **Returns**: Real-Time Transfer Hydraulic Integrity Dashboard with volume balance variance curves, linepack discrepancy metrics, and localized integrity alerts.
  * **Stops At**: Remotely tripping pipeline booster pumps or activating mainline emergency isolation valves (ESVs).
* **Failure Modes & Safety Envelopes**: If volume discrepancy exceeds statutory leak detection limits (e.g., over 0.5% of transfer flow) or line pressure suddenly collapses during steady pumping, the agent triggers an immediate alarm: `[Hydraulic Integrity Deviation: Potential Line Breach / Passing Manifold Valve — Verify Transfer Corridor Immediately]`.

### Agent 6: Tank Water Draw-Off & Oil-Water Interface Monitoring Sieve
* **In One Line**: Monitors tank bottom water settling times, oil-water interface levels, and automatic/manual water draining operations to prevent hydrocarbon release to oily water sewers and desalter/pipeline water contamination.
* **Friction Solved**: Eliminates 2.25 hours per shift of manual water dip logging, drainage rate guessing, and environmental effluent sewer overflow risks.
* **The Specification**:
  * **Reads**: ATG capacitive water-bottom sensors, oil-water interface radar levels, effluent oily water sewer hydrocarbon detectors, tank settling duration logs, and crude desalter brine effluent telemetry.
  * **Does**:
    1. Tracks post-receipt tank settling time (enforcing mandatory settling periods of at least 24 hours for crude and heavy stocks per API MPMS and OISD-STD-108);
    2. Calculates free water bottom volume and predicted drainage duration;
    3. Monitors oil-water interface movement during dewatering operations;
    4. Flags early hydrocarbon carryover risks in drainage lines before hydrocarbons enter wastewater treating units (ETP/WWT).
  * **Returns**: Tank Water Drainage & Interface Clearance Dossier with certified settling completion timestamps, calculated drainable water volumes, and interface safety thresholds.
  * **Stops At**: Opening automated water drain valves or overriding wastewater sewer skimming skids.
* **Failure Modes & Safety Envelopes**: If interface sensors detect hydrocarbon breakthrough into the drain line or drainage is attempted before minimum settling time has elapsed, the agent flags: `[Hydrocarbon Carryover Alert: Immediate Water Drain Isolation Required]`.

### Agent 7: Shift Handover Transfer Execution & ATG Gauge Reconciliation Synthesizer
* **In One Line**: Synthesizes multi-tank ATG volume logs, active transfer pumping tickets, MOV lineup states, and open safety overrides into a unified, certified 12-hour OM&S shift handover dossier.
* **Friction Solved**: Eliminates 2.70 hours per 12-hour shift handover of tedious manual logbook writing, spreadsheet reconciliation of tank dips, and verbal miscommunication during console operator shift changeovers.
* **The Specification**:
  * **Reads**: ATG snapshot logs at shift start/end, DCS alarm journals, MOV position status registers, pump running hours, active transfer line-up tickets, temporary bypass/override logs, and tank water drain reports.
  * **Does**:
    1. Calculates net transferred volumes per tank and header during the shift;
    2. Reconciles physical tank level changes against pumping ticket volumes;
    3. Compiles a complete inventory of active transfers, scheduled rundowns, and locked out equipment;
    4. Structures a compliant shift handover logbook conforming to API RP 755 and OISD-STD-108 console management guidelines;
    5. Highlights active safety alarms, degraded instruments, and impending API 2350 high-level thresholds for the oncoming controller.
  * **Returns**: Certified 12-Hour OM&S Shift Handover & Movement Balance Dossier with structured status panels, active transfer tickets, and critical watchlists.
  * **Stops At**: Signing off statutory handover acceptance without oncoming controller digital authentication.
* **Failure Modes & Safety Envelopes**: If unresolved volume imbalances (greater than 100 barrels) exist on active transfers or safety-critical alarms/bypasses are unacknowledged, the agent halts handover compilation: `[Handover Discrepancy: Unresolved Movement Volume / Active Safety Bypass Present — Supervisor Audit Required]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating refinery provides its own crude capacity, tank count, and offsites transfer volume multipliers.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **API 2350 Safe Response Time & Dynamic Ullage Sieve** | 1 12-Hour Shift Console Monitoring Cycle (50 tanks) | 4.00 hours | 0.40 hours | **3.60 hours saved** | Manual Tank Ullage Math & Safe Fill Alarm Vigilance |
| **Manifold Lineup & Hydraulic Route Contamination Sieve** | 1 Multi-Product Manifold Alignment & Lineup Verification Cycle | 3.50 hours | 0.35 hours | **3.15 hours saved** | Piping Mimic Visual Tracing & Cross-Contamination Checking |
| **Unit Rundown Switch & Intermediate Swing-Tank Sieve** | 1 Unit Rundown Tank Switch Campaign | 3.00 hours | 0.30 hours | **2.70 hours saved** | Rundown Pressure Coordination & Heel Compatibility Checks |
| **Tank Floating Roof Landing & Thermal Stratification Sieve** | 1 Tank Roof Landing / Heavy Stock Heating Review Cycle | 3.00 hours | 0.30 hours | **2.70 hours saved** | Roof Landing Height Math & Thermal Layering Vigilance |
| **Active Transfer Hydraulic Integrity & Leak Sieve** | 1 Continuous Liquid Transfer / Pipeline Receipt Shift Run | 3.50 hours | 0.35 hours | **3.15 hours saved** | Transfer Volume Balance & Pressure Trend Scanning |
| **Tank Water Draw-Off & Interface Monitoring Sieve** | 1 Tank Dewatering & Interface Settling Campaign | 2.50 hours | 0.25 hours | **2.25 hours saved** | Water Settling Tracking & Drain Hydrocarbon Monitoring |
| **Shift Handover Transfer Execution & ATG Synthesizer** | 1 12-Hour Shift Handover & ATG Closing Reconciliation | 3.00 hours | 0.30 hours | **2.70 hours saved** | Shift Log Assembly & Physical Tank Dip Reconciliation |
| **Total Operational Movement Drag Reduction** | **Per 12-Hour Shift Console Operational Cycle** | **22.50 hours** | **2.25 hours** | **20.25 hours saved** | **90.0% reduction in console monitoring and movement coordination drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table

| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[API-Std-2350]` | American Petroleum Institute, *Overfill Prevention for Storage Tanks in Petroleum Facilities*, 5th Edition, 2020 | api.org | Industry Standard | Safe response time (SRT) calculations, overfill category definitions, and automated overfill protection requirements |
| `[API-Std-2610]` | American Petroleum Institute, *Design, Construction, Operation, Maintenance, and Inspection of Terminal and Tank Facilities*, 3rd Edition, 2018 | api.org | Industry Standard | Tank farm manifold piping routing, pump suction protection, secondary containment, and safe hydrocarbon transfer practices |
| `[OISD-STD-108]` | Oil Industry Safety Directorate (Ministry of Petroleum & Natural Gas, India), *Recommended Practices on Oil Storage and Handling*, OISD-STD-108 & OISD-STD-244, 2019 | oisd.gov.in | Statutory Standard | High-level overfill alarms, mandatory 24-hour crude settling times, and manifold line-up positive isolation rules |
| `[API-MPMS-Ch3-12]` | American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 3 — Tank Gauging and Chapter 12 — Calculation of Petroleum Quantities*, 2021 | api.org | Measurement Standard | Static and dynamic tank inventory calculations, volume correction factors (CTPL/VCF), and radar gauging procedures |
| `[IEC-61511]` | International Electrotechnical Commission, *Functional Safety — Safety Instrumented Systems for the Process Industry Sector (IEC 61511-1:2016 / ISA-84)*, 2016 | iec.ch | International Standard | Safety Integrity Level (SIL) allocation and functional safety lifecycle for Automated Overfill Prevention Systems (AOPS) |
| `[EI-Part19]` | Energy Institute, *Model Code of Safe Practice Part 19: Fire Precautions at Petroleum Refineries and Bulk Storage Installations*, 3rd Edition, 2020 | energyinst.org | Industry Best Practice | Tank spacing, rim seal protection, floating roof operational safety envelopes, and offsites fire hazard mitigation |

### Negative Search Registry

* **Searched**: Honeywell Experion OM&S documentation, Yokogawa OMS manuals, and downstream technical proceedings for *"autonomous dynamic API 2350 Safe Response Time calculation and multi-tank overfill horizon forecasting directly from live ATG radar streams without manual operator ullage calculations"*.
* **Result**: `Negative Search, 2026-10`. Commercial ATG and OM&S suites display instantaneous levels and static alarm setpoints; none autonomously evaluate live variable receipt flow rates against tank strapping tables and floating roof landing heights to compute continuous Safe Response Time countdowns and early throttling advisories during live operations.
* **Searched**: Offsites automation vendor libraries for *"automated manifold lineup valve path validation with chemical fluid compatibility checking and linepack displacement volume calculation integrated with real-time transfer mass balance leak detection"*.
* **Result**: `Negative Search, 2026-10`. Existing DCS and OM&S packages enforce hardwired interlocks between predefined valves; none dynamically cross-reference historical line service logs against destination fluid specifications and live hydraulic pressure differentials to prevent cross-contamination and detect passing manifold valves during live transfer execution.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In an oil movements control center, five hundred thousand barrels of liquid hydrocarbon are in motion every hour behind steel pipe walls you cannot see through; if an operator miscalculates an overfill response time or opens the wrong manifold valve, tens of millions of dollars of finished fuel become downgraded slop in sixty seconds, or thousands of tons of volatile oil spill into the tank bund."*
* **The Secondary Line**: *"A process unit trip costs an operator hundreds of thousands of dollars in lost throughput, but an offsites manifold cross-contamination or a tank overfill reaches into the tens of millions in environmental penalties, fire hazards, and statutory plant shutdowns."*
* **Open Questions for Oil Movement Controllers**:
  1. How many minutes before reaching the critical high alarm does your current console tooling provide actionable overfill lead time during high-rate pipeline receipts or simultaneous unit rundowns?
  2. How do you currently verify that a complex manifold lineup is free from cross-contamination risks and that shared transfer lines are properly flushed when switching between incompatible products?
  3. How frequently do valve lineup disputes or volume discrepancies between ATG tank dips and transfer pump meters consume valuable time during a 12-hour shift handover?
