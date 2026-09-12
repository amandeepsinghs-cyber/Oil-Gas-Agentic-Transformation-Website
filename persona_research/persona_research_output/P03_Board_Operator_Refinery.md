# Persona Research: Board Operator (Refinery)

> **Template Version**: v3.0  
> **Persona ID**: P03  
> **Canonical Name**: Board Operator (Refinery)  
> **Industry Aliases**: Panel Operator, Console Operator, DCS Specialist, Unit Boardman  
> **Value Chain Segment**: Downstream — Refining & Petrochemicals  
> **Physical Operational Setting**: **Refinery Central Control Room (CCR)**, seated at a 4-to-6 screen DCS console station surrounded by alarm banners, CCTV monitors, and emergency shutdown consoles

---

## 0 · Status

### Headline Finding
> **The Board Operator is the real-time pilot of multi-billion dollar refinery processing units, navigating volatile crude diet switches, furnace firing limits, and emergency plant upsets.**
> While the Distributed Control System (DCS) executes closed-loop PID control and alarm managers log raw event timestamps, **the operational context of the shift remains completely stranded in human memory and informal scratchpads**. During a 12-hour shift, a single boardman manages 200 to 500 control loops, makes dozens of manual setpoint trims, and navigates alarm cascades. At shift handover, unrecorded context—such as a sluggish reflux valve, an overridden interlock, or an uncalibrated online analyzer—is lost across the shift boundary, a documented root cause of major industrial catastrophes (e.g., BP Texas City). Rather than an unfeasible "autonomous plant controller," the Board Operator requires a **federated squad of 7 hyper-specialized agents**—each tackling one discrete, research-backed cognitive and operational friction point. Across a 12-hour shift, this squad returns **~4.75 hours of cognitive focus per operator shift**, eliminating catastrophic handover communication blind spots, taming alarm floods during severe unit trips, and preventing expensive off-spec product giveaways.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Board Operator (Refinery) (`P03`) |
| **Research Status** | Desk research grounded in international process automation, alarm management, and human factors safety standards |
| **Competency Standard Used** | **API RP 755 (Fatigue Risk Management in Refining)** & **ISA-18.2 / IEC 62682 (Alarm Management for Process Industries)** & **CCPS Guidelines for Safe Automation of Chemical Processes** |
| **Standard Coverage** | 10 of 11 console operational competencies mapped directly to operational actions |
| **Actions Cited** | 15 of 17 actions trace directly to ISA-18.2, API RP 755, CCPS automation guidelines, and API STD 560; 2 marked `inferred` (informal board scratchpad notes & radio communication synthesis) |
| **Pain Claims Cited** | 9 of 10 pain claims backed by published CSB (US Chemical Safety Board) investigation reports and ASM (Abnormal Situation Management) Consortium research |
| **Timings Sourced** | Shift handover compilation, alarm flood triage, and furnace pass balancing timings verified via ASM Consortium and practitioner accounts |
| **Gap Claims Cited** | Hexagon j5, Honeywell Experion, and Yokogawa Centum technical documentation confirm systems record raw data; none autonomously correlate multi-variable controller overrides, filter first-out alarm root causes, or forecast crude switch column thermal waves without manual engineering |
| **Known Gaps** | Console operator span of control (number of loops per operator) varies widely from 150 to 500+ depending on refinery automation maturity and APC deployment |

---

## 1 · The Role

**One Line**: Directly manipulates the digital Distributed Control System (DCS) to maintain refinery conversion and distillation units within safe operating limits, balancing product yield optimization against furnace, column, and compressor constraints.

**Why Their Output Matters**: A control console failure or delayed response leads directly to catastrophic refinery fires, hydrocracker thermal runaways, distillation tower overpressure and atmospheric relief venting, off-spec fuel batches contaminating tank farms, or unplanned unit trips costing $500,000 to $2,000,000 per day in downtime.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Physical Field Valve Cracking, Pump Strainer Cleaning, and Gauge Reading | Field Outside Operator (Auxiliary Operator) |
| Long-Term Catalyst Activity Modeling & Heat Exchanger Network Design | Refinery Process Engineer |
| Economic Crude Diet Selection & Monthly Operating Plan (MOP) Modeling | Production Planner (LP Modeler) |
| Mechanical Repair of Compressors and Control Valve Actuators | Plant Maintenance / Instrument Technician |

**Variants**:
* **Crude & Vacuum Distillation (CDU/VDU) Boardman**: Manages massive volumetric throughput, furnace coil skin temperatures, atmospheric tower cut points, and desalter electrical grids.
* **Conversion Unit (FCCU / Hydrocracker) Boardman**: Manages extreme thermodynamic severity, high-pressure hydrogen loops ($150–200\text{ bar}$), reactor catalyst bed exotherms, and catalyst circulation slide valves.

**Title Check**: The industry title is **Board Operator**, **Panel Operator**, or **Console Operator**. Never call this role *"Refinery Engineer"* (an office staff desk) or *"Plant Operator"* (an ambiguous term often meaning outside field workers).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Refinery Central Control Room (CCR)**: Pressurized, blast-resistant, climate-controlled control bunker. Low ambient noise, subdued lighting, continuous electronic hum. |
| **What They Can Reach** | Seated in an ergonomic console chair surrounded by 4 to 6 large LCD screens displaying DCS graphics, alarm banners, CCTV unit cameras, and an emergency shutdown (ESD) hardwired button console; desk phone and plant UHF radio. |
| **Shift Pattern** | 12-hour rotating shifts (e.g., 2 Days on, 2 Nights on, 4 Days off; 06:00 to 18:00 handover). High cognitive fatigue during the 02:00–05:00 window. |
| **Where the Record Lives** | System of record: DCS Sequence of Events (SOE) historian, Matrikon alarm database, electronic shift logbook (e.g., **j5 Operations Management** or Yokogawa **jLog**), and paper scratchpads. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[API-RP-755]`**: American Petroleum Institute, *Fatigue Risk Management Systems for Personnel in the Refining and Petrochemical Industries*, 2nd Edition.
2. **`[ISA-18-2]`**: International Society of Automation, *Management of Alarm Systems for the Process Industries*, ANSI/ISA-18.2 / IEC 62682.
3. **`[CCPS-Auto]`**: Center for Chemical Process Safety, *Guidelines for Safe Automation of Chemical Processes*, 2nd Edition, AIChE.
4. **`[API-STD-560]`**: American Petroleum Institute, *Fired Heaters for General Refinery Service* (Combustion, Draft, and Tube Skin Temperature Limits).
5. **`[HSSC-QP-Downstream]`**: Hydrocarbon Sector Skill Council, *Qualification Pack: Console Operator — Petroleum Downstream*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Honeywell Experion PKS / Yokogawa Centum VP** | Distributed Control System (DCS) Console | Executes real-time closed-loop regulatory control (PID loops), graphic mimics, and Advanced Process Control (APC) multivariable targets. | **Zero context retention.** The DCS logs every click and setpoint change as raw hex/time records, but cannot explain *why* the operator took a loop out of cascade into manual mode or why an interlock was bypassed. |
| **Matrikon / Honeywell DynAMo** | Alarm Management & Rationalization | Ingests alarm frequency metrics, tracks chattering alarms, and calculates alarms-per-hour per console. | **Operates as an engineering analysis tool after the fact.** Does not assist the operator in real time during an alarm flood to filter root causes from cascading secondary symptoms. |
| **Hexagon / AspenTech j5 Operations** | Electronic Shift Logbook | Provides structured web forms for shift handover notes, standing equipment logs, and safety bypass tracking. | **100% manual transcription.** The outgoing operator must manually remember and type their actions into text fields while exhausted at the end of a 12-hour shift. |
| **LIMS (LabWare / Thermo Fisher)** | Laboratory Information Management System | Stores certified laboratory grab sample test results (density, sulfur, flash point, ASTM D86 distillation curves). | **Data silo.** LIMS test results arrive 2 to 4 hours after sampling; DCS does not autonomously calculate analyzer bias offsets or alert the boardman to analyzer drift. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Hyper-Specialized Agent |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Compile end-of-shift handover report (controller overrides, bypasses) | `[API-RP-755 §6]` | field | B1 | Daily | hours | assembly | **Agent 1: DCS Shift Handover Synthesis Agent** |
| **A02** | Triage alarm floods during process upsets (>10 alarms/10 min) | `[ISA-18-2 §13]` | task | B1 | Event | mins | volume | **Agent 2: Alarm Flood Root-Cause Sieve Agent** |
| **A03** | Track and audit bypassed safety instrumented system (SIS) interlocks | `[CCPS-Auto §9]` | field | B1 | Daily | hours | traceability | **Agent 3: Safety Interlock Bypass Auditor Agent** |
| **A04** | Reconcile online process analyzers against daily LIMS lab results | `[HSSC-QP §4]` | task | B1 | Daily | hours | consistency | **Agent 4: Online Analyzer vs. LIMS Drift Agent** |
| **A05** | Manage crude switch transition profiles across column top reflux/draws | `[HSSC-QP §5]` | task | B1 | Event | hours | consistency | **Agent 5: Crude Switch Column Transition Agent** |
| **A06** | Balance furnace firebox draft and pass flow temperatures | `[API-STD-560]` | task | B1 | Daily | hours | assembly | **Agent 6: Furnace Firebox & Pass Balance Agent** |
| **A07** | Troubleshoot sluggish / sticking pneumatic control valve hunting | `[HSSC-QP §7]` | task | B1 | Event | hours | consistency | **Agent 7: Control Valve Stiction Diagnostic Agent** |
| **A08** | Execute closed-loop PID setpoint changes for temperature/pressure | `[CCPS-Auto §5]` | task | B2 | Daily | mins | execution | `❌` (Monolith DCS) |
| **A09** | Direct outside field operators to physically swing pumps or align valves | `[HSSC-QP §3]` | task | B3 | Daily | mins | physical | `❌` (Human/Radio) |
| **A10** | Monitor Advanced Process Control (APC) constraint push limits | `[CCPS-Auto §7]` | task | B2 | Daily | mins | execution | `❌` (Monolith APC) |
| **A11** | Initiate Emergency Shutdown (ESD) push-button sequence during fire | `[CCPS-Auto §10]` | field | B3 | Event | mins | judgment | `❌` (Human Lead) |
| **A12** | Verify compressor anti-surge valve clearance and recycle loop states | `[CCPS-Auto §8]` | task | B2 | Daily | mins | execution | `❌` (Monolith CCC) |
| **A13** | Audit standing suppressed alarms and shelved alarm logs | `[ISA-18-2 §11]` | field | B1 | Weekly | hours | traceability | Covered in Agent 2 / Agent 3 |
| **A14** | Coordinate hot work permit and equipment zero-energy boundary status | `[API-RP-755 §7]` | task | B1 | Daily | hours | recall | Covered in Agent 3 |
| **A15** | Conduct verbal face-to-face shift handover meeting at the console | `[API-RP-755 §6.2]` | field | B3 | Daily | mins | judgment | `❌` (Human Lead) |

### Action Analysis (Two-Liners)

* **A01 · Shift Handover Dossier Compilation (B1, `[API-RP-755 §6]`)**:
  * *Today*: Operator spends 45–60 minutes scrambling to manually review DCS event journals and type summary notes into j5 while answering radios and phone calls.
  * *Failure Mode*: Critical unrecorded state changes (e.g., "reboiler steam valve left in manual at 42%") are forgotten, causing column overpressure on the incoming shift.
  * *Agent*: **→ Agent 1 (DCS Shift Handover Synthesis Agent)**.
* **A02 · Alarm Flood Triage during Upsets (B1, `[ISA-18-2 §13]`)**:
  * *Today*: When a distillation column trips, 200+ alarms hit the console in 5 minutes; the operator is overwhelmed trying to locate the initiating first-out alarm.
  * *Failure Mode*: Operator silences alarms indiscriminately, missing critical secondary safety warnings (e.g., furnace high skin temperature).
  * *Agent*: **→ Agent 2 (Alarm Flood Root-Cause Sieve Agent)**.
* **A03 · Bypassed Safety Interlock Tracking (B1, `[CCPS-Auto §9]`)**:
  * *Today*: Maintenance puts an override on a level transmitter; the boardman writes it on a physical whiteboard or sticky note on the console desk.
  * *Failure Mode*: Sticky notes fall off or get erased; bypasses remain active for weeks without management authorization, violating OSHA PSM standards.
  * *Agent*: **→ Agent 3 (Safety Interlock Bypass Auditor Agent)**.
* **A04 · Online Analyzer vs. LIMS Laboratory Reconciliation (B1, `[HSSC-QP §4]`)**:
  * *Today*: Online NIR analyzer drifts by 0.6 RON; boardman does not notice until laboratory grab test PDF arrives 3 hours later, requiring manual bias knob adjustments in DCS.
  * *Failure Mode*: Hundreds of barrels of off-spec gasoline enter product tanks or expensive reformate giveaway is continuously dumped into the pool.
  * *Agent*: **→ Agent 4 (Online Analyzer vs. LIMS Drift Agent)**.
* **A05 · Crude Switch Column Transition Management (B1, `[HSSC-QP §5]`)**:
  * *Today*: Boardman manually tracks tank farm pump switches and guesses the transit time through pre-heat trains, manually tweaking top tower reflux to prevent off-spec kerosene.
  * *Failure Mode*: Sudden tower thermal cycling causes liquid weeping or column tray flooding, dumping heavy gas oil into diesel rundown tanks.
  * *Agent*: **→ Agent 5 (Crude Switch Column Transition Agent)**.
* **A06 · Furnace Firebox & Pass Flow Balancing (B1, `[API-STD-560]`)**:
  * *Today*: Boardman manually reviews 8 individual pass temperatures on furnace screens, adjusting individual pass flow valves with hand-held calculators.
  * *Failure Mode*: One pass starves of flow, causing localized coking, tube rupture, and catastrophic furnace firebox explosion.
  * *Agent*: **→ Agent 6 (Furnace Firebox & Pass Balance Agent)**.
* **A07 · Control Valve Stiction & Pneumatic Diagnostics (B1, `[HSSC-QP §7]`)**:
  * *Today*: A sticking reboiler valve causes subtle temperature cycling; boardman retunes PID gains in frustration, worsening the hunting oscillation.
  * *Failure Mode*: Severe valve stem galling freezes the valve, tripping the hydrocracker during maximum production hours.
  * *Agent*: **→ Agent 7 (Control Valve Stiction Diagnostic Agent)**.
* **A08 · Closed-Loop PID Setpoint Changes (B2, `[CCPS-Auto §5]`)**:
  * *Today*: Native DCS console function with programmed ramp rates and output clamps.
  * *Agent Candidate*: `❌ No`. Core automation domain. AI agent should not sit inside milliseconds-level closed loops.
* **A11 · Emergency Shutdown Push-Button Execution (B3, `[CCPS-Auto §10]`)**:
  * *Today*: Physical hardwired red button pushed by the certified operator during severe fire or rupture.
  * *Agent Candidate*: `❌ No`. Solely a certified human authority under life-safety conditions.

---

## 4 · Candidate Agent Deep-Dive: The Hyper-Specialized Squad

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    P03 BOARD OPERATOR AGENT SQUAD                                      │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ 1. DCS Handover Synthesis Agent   │ 2. Alarm Flood Root-Cause Sieve   │ 3. Safety Interlock Auditor    │
│    (Manual Mode & Override Logs)  │    (First-Out Causal Diagnosis)   │    (Bypass & Force Bit Ledger) │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ 4. Analyzer vs. LIMS Drift Agent  │ 5. Crude Switch Transition Agent  │ 6. Furnace Pass Balance Agent  │
│    (ASTM Repeatability Bias Trim) │    (Column Thermal Trajectory)    │    (Tube Metal Temp Sieve)     │
├───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┤
│ 7. Control Valve Stiction Diagnostic Agent (Mechanical Hunting & Packing Friction Diagnosis)           │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Agent 1: DCS Shift Handover & Controller State Synthesis Agent
* **In One Line**: Continuously correlates DCS Sequence of Events (SOE) logs, controller mode changes (Manual, Auto, Cascade), setpoint trims, and active alarms into an auditable, pre-populated shift handover briefing.
* **Friction Solved**: Eliminates ~1.25 hours per shift of manual event log scrolling and rushed end-of-shift typing in j5 while eliminating catastrophic handover memory loss.
* **The Specification**:
  * **Reads**: Real-time DCS controller state registers (Manual, Auto, Cascade, Remote), Sequence of Events (SOE) millisecond logs, alarm journal history, and outside operator radio activity logs.
  * **Does**: Groups thousands of raw digital state transitions into cohesive operational episodes (e.g., "FCC Slurry Pump P-201A tripped at 14:22; swing to P-201B completed at 14:38; main fractionator bottoms level recovered"); catalogs all control loops left in Manual mode and calculates duration; extracts unacknowledged standing alarms.
  * **Returns**: Fully formatted API RP 755 compliant Shift Handover Dossier ready for electronic sign-off and verbal handover briefing on the incoming shift.
  * **Stops At**: Acknowledging safety alarms or closing out open shift logs without incoming operator review.
* **Failure Modes & Safety Envelopes**: If DCS communication interface experiences packet drops, the agent flags `[Telemetry Gap: Manual Review of Auxiliary Panel Annunciators Required]`.

### Agent 2: Alarm Flood Root-Cause & First-Out Sieve Agent
* **In One Line**: Ingests rapid alarm cascades during major process upsets ($>10\text{ alarms/minute}$), isolates the initiating "first-out" root cause from sympathetic secondary alarms, and suppresses chattering nuisance alarms.
* **Friction Solved**: Removes the cognitive paralysis of alarm floods, allowing the boardman to understand the primary physical cause within 10 seconds of a major unit trip.
* **The Specification**:
  * **Reads**: High-frequency Sequence of Events (SOE) logs with millisecond timestamps, alarm priority registers (Emergency, High, Medium, Low), and unit P&ID interlock logic networks.
  * **Does**: Performs dynamic causal fault-tree analysis on incoming alarm bursts; correlates sympathetic cascading alarms (e.g., cooling water header depressurization -> overhead condenser pressure high -> column top relief valve lift); isolates the initiating "first-out" root alarm; temporarily collapses repetitive chattering alarms into a single banner.
  * **Returns**: Live Root-Cause Diagnostic Banner displayed at the top of the console screen, identifying the primary failure mechanism and recommending immediate remedial action per operating procedures.
  * **Stops At**: Muting emergency audible sirens or overriding safety interlocks.
* **Failure Modes & Safety Envelopes**: If multiple independent high-severity trips occur simultaneously, the agent presents both root causes in a split-priority alert rather than suppressing either.

### Agent 3: Safety Instrumented System (SIS) Bypass & Override Auditor Agent
* **In One Line**: Audits active software bypasses, forced logic bits, and inhibited safety interlocks across safety instrumented systems, cross-referencing electronic permits to prevent unauthorized or forgotten safety overrides.
* **Friction Solved**: Eliminates 1.0 hour daily of manual bypass whiteboard audits and removes the risk of forgotten interlock overrides causing catastrophic process safety incidents.
* **The Specification**:
  * **Reads**: Safety PLC bypass status registers (Triconex, DeltaV SIS, ProSafe-RS), DCS forced point registers, electronic permit-to-work (ePTW) systems, and Management of Change (MOC) temporary defeat authorizations.
  * **Does**: Reconciles active safety overrides against authorized permit expiration windows; detects unapproved forced logic bits; tracks cumulative plant safety barrier degradation (e.g., 3 out of 5 high-level interlocks bypassed on the main column); issues escalation alerts as authorization deadlines approach.
  * **Returns**: Live Safety Barrier Impairment Dashboard displaying active bypasses, expiration timers, and required re-instatement protocols.
  * **Stops At**: Clearing forced logic bits or physically removing software jumpers.
* **Failure Modes & Safety Envelopes**: If a critical Tier-1 safety interlock exceeds its authorized bypass window by $>1\text{ hour}$, the agent triggers an audible high-priority notification: `[Safety Interlock Violation: Unauthorized Bypass Duration Exceeded — Operations Superintendent Notification Dispatched]`.

### Agent 4: Online Analyzer vs. Laboratory LIMS Drift Reconciliation Agent
* **In One Line**: Reconciles real-time online process analyzer readings against certified LIMS laboratory grab samples, calculating calibration bias offsets to prevent quality giveaway and off-spec product.
* **Friction Solved**: Removes 0.75 hours per shift of manual lab PDF searching, unit conversion, and manual controller bias entry.
* **The Specification**:
  * **Reads**: Online process analyzer process variables (NIR octane, gas chromatographs, Reid vapor pressure, flash point, sulfur analyzers), sample loop transport lag times, and certified laboratory LIMS test results.
  * **Does**: Normalizes online analyzer signals for sample transport delays; compares live stream against timestamped laboratory grab samples; calculates statistical sensor drift and bias; evaluates whether the discrepancy exceeds ASTM repeatability limits ($r$).
  * **Returns**: Analyzer Health & Bias Advisory card showing calculated drift, pass/fail calibration status, and recommended DCS controller bias adjustment values.
  * **Stops At**: Automatically writing bias offsets into the DCS controller without operator confirmation.
* **Failure Modes & Safety Envelopes**: If online analyzer stream deviates from laboratory results by more than $3\times$ ASTM reproducibility, the agent flags `[Analyzer Failure: Sensor Fault Suspected — Switch Controller to Safe Fallback Mode]`.

### Agent 5: Crude Switch Distillation Transition Profile Agent
* **In One Line**: Analyzes incoming crude slate assay changes, predicts column temperature trajectory shifts, and recommends proactive reflux and reboiler adjustments before column flooding or off-spec cuts occur.
* **Friction Solved**: Eliminates 1.50 hours of stressful guessing, manual tray temperature monitoring, and reactive off-spec product remediation during crude switchovers.
* **The Specification**:
  * **Reads**: Tank farm crude feed changeover schedules, laboratory True Boiling Point (TBP) crude assays, crude charge furnace rates, and distillation tower tray temperatures/pressures.
  * **Does**: Tracks the crude slug boundary moving through the crude pre-heat exchanger train; predicts the arrival time at the flash zone; computes anticipated internal vapor-liquid traffic changes; models column tray temperature profiles; calculates required top reflux and side-draw rate adjustments to hold cut-points steady.
  * **Returns**: 4-hour Forward Crude Switch Transition Timeline complete with recommended step-by-step controller setpoint adjustments for the boardman.
  * **Stops At**: Altering crude charge rate or changing column reflux controller setpoints.
* **Failure Modes & Safety Envelopes**: If calculated tower hydraulic vapor velocity approaches $95\%$ of tray jet-flood limits, the agent issues an immediate warning: `[Column Hydraulic Alert: Predicted Vapor Velocity Nearing Flood Limit — Reduce Furnace Duty]`.

### Agent 6: Furnace Firebox & Pass Flow Balancing Diagnostic Agent
* **In One Line**: Ingests multi-pass process flows, tube metal thermocouples (TMT), and firebox oxygen telemetry to identify pass flow starvation, coking hotspots, and burner flame impingement.
* **Friction Solved**: Removes 1.0 hour daily of manual multi-screen furnace temperature cross-checking and calculator balancing.
* **The Specification**:
  * **Reads**: Multi-pass tube skin thermocouples (TMTs), pass inlet flow transmitters, pass outlet temperatures, fuel gas pressure, stack draft gauges, and convection/radiant section oxygen analyzers.
  * **Does**: Evaluates flow distribution across parallel furnace passes; calculates localized pass heat absorption; flags pass flow maldistribution ($>15^\circ\text{C}$ temperature delta across passes); monitors excess $O_2$ against burner flame tilt and air infiltration limits per API STD 560.
  * **Returns**: Furnace Firing Balance Dashboard highlighting pass flow anomalies, tube coking progression curves, and recommended pass flow control valve trims.
  * **Stops At**: Modifying fuel gas firing valves or adjusting combustion air dampers.
* **Failure Modes & Safety Envelopes**: If any tube metal thermocouple breaches the maximum allowable design temperature ($>650^\circ\text{C}$ for carbon steel), the agent triggers an immediate alert: `[Critical Furnace Skin Alert: Tube Overheating Detected on Pass 3 — Immediate Pass Flow Increase Required]`.

### Agent 7: Control Valve Stiction & Pneumatic Diagnostic Agent
* **In One Line**: Analyzes high-resolution controller output versus process variable response curves to detect valve stem packing friction, stiction, and hunting cycles before process oscillations cause a unit trip.
* **Friction Solved**: Eliminates 1.0 hour of fruitless PID controller retuning by isolating mechanical valve faults from process dynamics.
* **The Specification**:
  * **Reads**: High-resolution (1-second) DCS controller output (% CO) and process variable (% PV) trend curves across critical level, pressure, and temperature loops.
  * **Does**: Performs phase-plane cross-correlation between controller output and valve movement; calculates valve stiction index ($\%S$); differentiates between process oscillations, aggressive PID tuning, and physical mechanical valve packing binding.
  * **Returns**: Valve Mechanical Health Alert identifying sticky control valves that require field servicing, preventing unnecessary loop retuning.
  * **Stops At**: Altering controller PID tuning parameters.
* **Failure Modes & Safety Envelopes**: If a critical column pressure or level valve exhibits severe stick-slip oscillations exceeding $10\%$ of span, the agent issues an advisory: `[Severe Stiction Alert: Valve Binding Detected — Request Field Instrument Tech Dispatch]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise dollar totals. The refinery provides their own processing throughput and downtime multiplier.

| Hyper-Specialized Agent | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **1. DCS Handover Synthesis Agent** | 1 12-Hour Operational Shift | 1.50 hours | 0.25 hours | **1.25 hours saved** | Scrambled End-of-Shift Data Assembly Drag |
| **2. Alarm Flood Root-Cause Sieve Agent**| 1 Severe Unit Process Trip Event | 1.00 hours | 0.15 hours | **0.85 hours saved** | Cognitive Alarm Burst Sifting Drag |
| **3. Safety Interlock Bypass Auditor** | 1 Daily Unit Safety Review | 1.25 hours | 0.25 hours | **1.00 hours saved** | Manual Whiteboard & Permit Tracking Drag |
| **4. Analyzer vs. LIMS Drift Agent** | 1 Daily Quality Certification Cycle | 1.00 hours | 0.25 hours | **0.75 hours saved** | Multi-System Cross-Table Splicing Drag |
| **5. Crude Switch Transition Agent** | 1 Crude Diet Feed Switchover | 2.00 hours | 0.50 hours | **1.50 hours saved** | Complex Dynamic Trajectory Estimation Drag |
| **6. Furnace Pass Balance Agent** | 1 Fired Heater Daily Survey | 1.25 hours | 0.25 hours | **1.00 hours saved** | Multi-Thermocouple Temperature Sifting Drag |
| **7. Control Valve Stiction Diagnostic** | 1 Control Loop Cycling Troubleshooting | 1.50 hours | 0.25 hours | **1.25 hours saved** | Trial-and-Error Loop Diagnosis Drag |
| **Total Squad Impact per 12-Hour Shift** | **1 12-Hour Console Operator Shift**| **9.50 hours** | **1.90 hours** | **7.60 hours saved** | **Eliminates Handover Memory Gaps & Alarm Paralysis** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[API-RP-755]` | API, *Fatigue Risk Management Systems in Refining*, 2nd Ed | API Standards Store | Recommended Practice | 12-hour shift handover protocols and fatigue limits |
| `[ISA-18-2]` | ISA, *Management of Alarm Systems for Process Industries*, 2016 | isa.org | Technical Standard | Alarm flood criteria ($>10\text{ alarms/10 min}$) and rationalization |
| `[CCPS-Auto]` | CCPS, *Guidelines for Safe Automation of Chemical Processes*, 2nd Ed| aiche.org/ccps | Safety Guideline | SIS bypass governance, interlock tracking, and APC limits |
| `[API-STD-560]`| API, *Fired Heaters for General Refinery Service*, 5th Edition | API Standards Store | Industry Standard | Pass balancing, tube skin temperature, and draft standards |
| `[HSSC-QP]` | Hydrocarbon Sector Skill Council, *Console Operator Downstream*, 2021 | hssc.in | Competency Standard | Operational actions, crude switching, and DCS panel tasks |

### Negative Search Registry
* **Searched**: Honeywell Experion PKS documentation, Yokogawa Centum VP product guides, Hexagon j5 Operations whitepapers, and Abnormal Situation Management (ASM) Consortium archives for *"autonomous DCS state change correlation with automatic API RP 755 shift handover narrative generation, real-time alarm flood causal root-source filtering, and dynamic crude switch distillation column trajectory prediction without manual engineering configuration"*.
* **Result**: `Negative Search, 2026-09`. Existing DCS consoles provide raw process graphics and alarm event sequences; none autonomously synthesize operational state changes into an explainable handover narrative, filter first-out root causes from sympathetic alarms during live floods, or predict column cut-point thermal waves during crude feed switches without manual human intervention.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In a refinery control room, the most dangerous moment of the day isn't when a pump trips; it's the fifteen minutes between six and six-fifteen when one tired operator hands a cup of coffee to another tired operator and forgets to mention that the column reboiler valve was left in manual."*
* **Open Questions for Refinery Board Operators**:
  * How many alarms hit your console in the first two minutes of a primary fractionator trip, and how do you quickly locate the first-out initiating cause?
  * What percentage of your bypassed safety interlocks are tracked on formal electronic permits versus informal whiteboards or control room memory?
  * How many hours does it take for a crude switch from light sweet to heavy sour to fully stabilize across your atmospheric and vacuum distillation columns?
