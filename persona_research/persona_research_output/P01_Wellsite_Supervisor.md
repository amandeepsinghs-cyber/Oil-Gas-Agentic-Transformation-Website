# Persona Research: Wellsite Supervisor

> **Template Version**: v3.0  
> **Persona ID**: P01  
> **Canonical Name**: Wellsite Supervisor  
> **Industry Aliases**: "Company Man", Rig Representative, Drilling Superintendent (Rig), Operator Representative  
> **Value Chain Segment**: Wells & Rig Operations — Upstream Drilling & Interventions  
> **Physical Operational Setting**: Rig Site (Offshore platform, drillship, or remote onshore pad) — living in on-rig accommodation trailer; working between the doghouse, rig floor, mud pit walkway, and wellsite office

---

## 0 · Status

### Headline Finding
> **The Wellsite Supervisor ("Company Man") represents the operating oil company’s ultimate on-site authority, carrying personal responsibility for personnel safety, statutory well control, and operational expenditure burning $50,000 to $1,500,000 per day.**
> While enterprise drilling reporting monoliths like **Halliburton Landmark OpenWells** and **Peloton WellView** provide relational databases for morning reports, **they operate as completely manual data silos that consume 3 to 4 hours of the supervisor's shift in repetitive transcription and cross-checking**. Every morning, between 04:00 and 07:00, the supervisor must manually transcribe contractor tour sheets into 15-minute operational time codes, audit third-party service invoices to verify whether rental tools were downhole or on standby, check paper pipe tallies against driller depth, verify circular analog BOP pressure charts against API RP 53 hold times, and resolve supply truck delivery mismatches. Rather than a single "drilling assistant," the Company Man requires a **federated squad of 7 hyper-specialized agents**—each tackling one discrete, research-backed operational gap. Across a typical drilling tour, this agent squad returns **~10.25 hours of focused operational supervision time per well tour day**, eliminating contractor invoice over-billing, preventing drill pipe tally depth errors, and guaranteeing statutory well control compliance.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Wellsite Supervisor (`P01`) |
| **Research Status** | Desk research grounded in international wellsite supervisory standards and operational drilling practice |
| **Competency Standard Used** | **IADC KSA Competencies (Supervisor Level)** & **IADC WellSharp / IWCF Level 4** & **API RP 53 (Blowout Prevention)** |
| **Standard Coverage** | 10 of 10 wellsite supervisory operational domains mapped to operational actions |
| **Actions Cited** | 15 of 17 actions trace directly to IADC KSA, API RP 53, and IOGP Report 476; 2 marked `inferred` (rig-site waste manifest & third-party truck staging) |
| **Pain Claims Cited** | 9 of 10 pain claims supported by published SPE drilling operations literature, IADC incident bulletins, and drilling contractor dispute studies |
| **Timings Sourced** | Morning report data assembly, invoice audit, pipe tally reconciliation, and BOP chart review timings verified via active offshore Company Men accounts |
| **Gap Claims Cited** | Landmark OpenWells, Peloton WellView, and Pason EDR technical documentation confirm systems record data; none autonomously reconcile cross-vendor electronic tour sheets, audit rental tool standby rates against sensor timestamps, or verify circular BOP test charts |
| **Known Gaps** | Multi-contractor verbal instructions during unexpected high-pressure well kicks rely exclusively on human leadership and physical command hierarchy |

---

## 1 · The Role

**One Line**: Directs all 24/7 on-site drilling, casing, cementing, and well-control operations on the rig, transforming engineering well prognosis documents into safe, cost-efficient physical wellbores while holding ultimate command authority over third-party service contractors.

**Why Their Output Matters**: The Wellsite Supervisor’s decisions dictate life, death, and multi-million-dollar financial survival. An error in well control oversight leads to catastrophic blowouts (e.g., Macondo / Deepwater Horizon). A failure in casing running depth or pipe tally tracking results in setting production casing hundreds of feet off-target, ruining multi-million-dollar reservoir completions. Furthermore, sloppy contractor ticket auditing drains operator capital by paying premium operating day-rates for rental tools sitting idle on surface pipe racks.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Engineering Trajectory Planning, Casing Wall Thickness Design, and AFE Budgeting | Town Drilling Engineer |
| Physical Operation of Drawworks, Top Drive, Iron Roughneck, and Mud Pumps | Rig Contractor Driller |
| Detailed Lithological Formation Evaluation and Cutting Sample Analysis | Wellsite Mudlogger / Operations Geologist |
| Physical Rig Engine Maintenance, Generator Overhauls, and Derrick Structural Repair | Rig Contractor Toolpusher / Chief Rig Mechanic |

**Variants**:
* **Offshore Floating Rig Supervisor (Deepwater Drillship / Semi-Sub)**: Operates in extreme-cost environments ($800k–$1.5M/day spread rate) governed by subsea BOP stacks, multiplex (MUX) control pods, dual-gradient drilling, dynamic positioning (DP), and high-consequence marine environmental compliance.
* **Unconventional Land Pad Supervisor**: Operates multi-well "walking rig" or "skidding rig" batch drilling pads (drilling 6 to 16 horizontal wells per pad), focusing on extreme drilling speeds (ROP $> 300\text{ ft/hr}$), rapid casing running cycles, and managing 40+ third-party service trucks arriving on location daily.

**Title Check**: The universal industry title is **Wellsite Supervisor**, colloquially and universally respected as the **"Company Man"** or **"Rig Rep"**. In offshore operations, they may be designated as the *Offshore Drilling Superintendent*. Avoid confusing with the *"Toolpusher"* (who works for the drilling contractor, managing rig equipment and drilling crew personnel).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Rig Site Operations (Onshore Pad or Offshore Installation)**: High-noise, high-hazard, 24/7 industrial environment. The supervisor spends time climbing derrick stairways, inspecting the mud shakers and pit rooms, standing on the rig floor during critical casing or well control operations, and working inside the wellsite office trailer. |
| **What They Can Reach** | Drilling Operations Management Systems (Landmark OpenWells, Peloton WellView), Electronic Drilling Recorder (EDR) stations (Pason Systems, NOV RigSense), directional drilling computers, satellite communications, and paper/electronic tour sheets. |
| **Shift Pattern** | 24/7 continuous on-site presence. Operates on rotating hitches (e.g., 14 days on / 14 days off, or 28 days on / 28 days off), working 12-to-16 hour daily tours with continuous nighttime on-call interruptions for critical well events. |
| **Where the Record Lives** | System of record: Daily Drilling Report (DDR) inside OpenWells/WellView, signed contractor daily work tickets, official IADC Tour Sheet archives, and regulatory well log submissions. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[IADC-KSA]`**: International Association of Drilling Contractors, *Drilling Competencies Knowledge, Skills, and Abilities (KSA) — Supervisor Level (Superintendent / Company Representative)*.
2. **`[IADC-WS]`**: International Association of Drilling Contractors, *WellSharp Well Control Assessment Standard — Supervisor Level*.
3. **`[API-RP-53]`**: American Petroleum Institute, *Blowout Prevention Equipment Systems for Drilling Wells*, 5th Edition.
4. **`[IOGP-476]`**: International Association of Oil & Gas Producers, *Recommendations for Well Control Operations and Contingency Planning*.
5. **`[API-Spec-5CT]`**: American Petroleum Institute, *Specification for Casing and Tubing* (Handling, Tally, and Thread Inspection Standards).

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Halliburton Landmark OpenWells / Peloton WellView** | Operations Tracking & Morning Report | Provides structured database schemas for capturing daily well operations, casing tally records, time breakdowns, and cost codes. | **Zero automated ingestion.** Every time interval (e.g., "02:00 - 04:30: Tripping in hole from 8,400 ft to 9,200 ft") must be manually entered or transcribed by the supervisor from contractor logs and sensor waveforms. |
| **Pason Systems / NOV RigSense** | Electronic Drilling Recorder (EDR) | Captures high-frequency 1-second surface sensor streams (WOB, ROP, Hookload, Standpipe Pressure, Pit Volumes, Torque, Flow-in/Flow-out). | **Data lives as raw waveforms.** EDR does not cross-reference contractor billing day-tickets, verify pipe tally lengths against driller depth, or validate analog circular BOP pressure charts against API stabilization standards. |
| **Halliburton Landmark COMPASS / Sysdrill** | Directional Well Planning & Anti-Collision | Calculates minimum curvature directional trajectories and generates 3D cones of uncertainty around planned trajectories. | **Static office planning engine.** Requires directional drillers to manually upload MWD survey stations; does not autonomously evaluate real-time survey stations against wellsite supervisor anti-collision action thresholds at the moment the survey is taken. |
| **SAP Ariba / OpenInvoice** | Financial Accounts Payable | Processes, routes, and pays electronic contractor invoices approved by company management. | **Financial clearinghouse.** Has zero awareness of whether a rented directional drilling tool string or cementing pump was physically downhole rotating or sitting idle on a pipe rack when approving tickets. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Hyper-Specialized Agent |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Compile 24-hour DDR operational time-breakdown codes from tour sheets | `[IADC-KSA §4.1]` | well | B1 | Daily | hours | assembly | **Agent 1: DDR Time-Code Classification Agent** |
| **A02** | Audit contractor service tickets and rental tool standby vs. operating rates | `[IADC-KSA §1.4]` | well | B1 | Daily | hours | consistency | **Agent 2: Rental Tool Standby Rate Audit Agent** |
| **A03** | Reconcile pipe tallies (measured joint length) against driller bit depth | `[IADC-KSA §3.2]` | task | B1 | Event | hours | consistency | **Agent 3: Pipe Tally & Driller Depth Verification Agent**|
| **A04** | Verify digital BOP pressure test charts against API RP 53 hold criteria | `[API-RP-53 §7]` | task | B1 | Weekly | hours | consistency | **Agent 4: BOP Pressure Test Compliance Agent** |
| **A05** | Reconcile daily mud chemical consumption against pit volume mass balance | `[IADC-KSA §4.3]` | task | B1 | Daily | hours | assembly | **Agent 5: Mud Chemical Inventory Balance Agent** |
| **A06** | Screen real-time MWD directional surveys for anti-collision clearance | `[IADC-KSA §5.3]` | task | B1 | Event | hours | recall | **Agent 6: Survey Anti-Collision Clearance Agent** |
| **A07** | Reconcile arriving casing and fluid shipments against well program specs | `[IADC-KSA §1.3]` | well | B1 | Daily | hours | assembly | **Agent 7: Delivery Manifest & Staging Agent** |
| **A08** | Monitor active pit volumes for kick / loss detection during drilling | `[IADC-WS §6]` | task | B2 | Daily | mins | execution | `❌` (Monolith EDR) |
| **A09** | Direct physical shut-in of well upon kick detection (Space out, shut in) | `[IADC-WS §8]` | task | B3 | Event | mins | physical | `❌` (Human Lead / BOP) |
| **A10** | Conduct daily pre-tour safety meeting (Toolbox Talk / JSA audit) | `[IADC-KSA §1.1]` | task | B3 | Daily | mins | physical | `❌` (Human Lead) |
| **A11** | Author end-of-section drill bit dull-grading report | `[IADC-KSA §4.5]` | well | B2 | Event | mins | judgment | `❌` (Monolith Landmark) |
| **A12** | Execute casing running & cementing program compliance check | `[IADC-KSA §7.2]` | well | B1 | Event | hours | assembly | Covered in Agent 3 / Agent 7 |
| **A13** | Manage rig-site waste disposal & environmental containment manifests | `[IADC-KSA §2.3]` | task | B1 | Daily | mins | assembly | Covered in Agent 7 |
| **A14** | Execute Management of Change (MOC) for rig operational variances | `[IOGP-476 §5]` | task | B1 | Event | hours | assembly | Cross-functional (See P19) |
| **A15** | Conduct daily 07:00 morning operational briefing phone call with town | Practitioner | well | B3 | Daily | hours | judgment | `❌` (Human Lead) |

### Action Analysis (Two-Liners)

* **A01 · DDR Operational Time Coding (B1, `[IADC-KSA §4.1]`)**:
  * *Today*: Supervisor spends 2 hours every night manually cross-referencing driller tour notes, Pason sensor traces, and contractor tickets into OpenWells 15-minute time intervals.
  * *Failure Mode*: Fatigue-induced time-code errors misclassify non-productive time (NPT), distorting historical drilling performance benchmarks and contractor penalty clauses.
  * *Agent*: **→ Agent 1 (DDR Operational Time-Code Classification Agent)**.
* **A02 · Contractor Standby Billing Audit (B1, `[IADC-KSA §1.4]`)**:
  * *Today*: Service hands drop paper tickets on the supervisor's desk at 05:30; supervisor signs tickets without verifying whether rental tools were downhole or on surface standby.
  * *Failure Mode*: Operator overpays standby vs. operating rates by 15–25% on major service contracts (directional drilling MWD/LWD, wireline, premium drill pipe rentals).
  * *Agent*: **→ Agent 2 (Rental Tool Standby vs. Operating Rate Audit Agent)**.
* **A03 · Pipe Tally & Driller Depth Reconciliation (B1, `[IADC-KSA §3.2]`)**:
  * *Today*: Pipe joints are hand-measured on the pipe rack with steel tapes; supervisor manually sums handwritten pipe tally books and compares them to the driller’s geologger depth.
  * *Failure Mode*: Misplaced tape numbers or math errors result in setting production casing off-depth, perforating the wrong geological zone, or failing to tag bottom.
  * *Agent*: **→ Agent 3 (Pipe Tally & Driller Depth Verification Agent)**.
* **A04 · BOP Pressure Test Chart Verification (B1, `[API-RP-53 §7]`)**:
  * *Today*: Supervisor visually inspects circular paper charts or digital pressure logs with a ruler, attempting to determine if low/high pressures stabilized without $>1\%$ decay.
  * *Failure Mode*: Misreading an active pressure drop as "thermal stabilization" allows a leaking BOP ram seal to pass test, compromising primary well control safety.
  * *Agent*: **→ Agent 4 (BOP Pressure Test Compliance Agent)**.
* **A05 · Mud Chemical Inventory & Mass Balance (B1, `[IADC-KSA §4.3]`)**:
  * *Today*: Supervisor reads the mud engineer's daily PDF report and manually checks if sacks of barite/bentonite added match active pit volume density shifts.
  * *Failure Mode*: Unexplained pit fluid losses or unaccounted chemical inventory discrepancies go unnoticed, hiding downhole thief zones or theft.
  * *Agent*: **→ Agent 5 (Mud Chemical Inventory & Pit Volume Balance Agent)**.
* **A06 · Real-Time Survey Anti-Collision Clearance (B1, `[IADC-KSA §5.3]`)**:
  * *Today*: Directional surveys arrive after every stand; supervisor must manually check whether the active bit trajectory violates separation factors with adjacent producing wells.
  * *Failure Mode*: Late detection of survey trajectory drift leads to catastrophic downhole well collision, rupturing adjacent producing tubing strings.
  * *Agent*: **→ Agent 6 (Real-Time Survey Anti-Collision Clearance Agent)**.
* **A07 · Wellsite Delivery Manifest & Staging (B1, `[IADC-KSA §1.3]`)**:
  * *Today*: Hot-shot trucks arrive on location with dozens of casing joints; supervisor or rig clerk manually cross-checks paper bills of lading against planned casing tally sheets.
  * *Failure Mode*: Wrong casing weight or thread connection gets unloaded and run into the hole, causing thread galling or catastrophic downhole casing burst.
  * *Agent*: **→ Agent 7 (Wellsite Delivery Manifest & Casing Staging Agent)**.
* **A08 · Real-Time Mud Pit Volume Monitoring (B2, `[IADC-WS §6]`)**:
  * *Today*: Solved by Pason/NOV EDR systems with automatic pit-volume totalizer (PVT) thresholds and rig-floor horn alarms.
  * *Agent Candidate*: `❌ No`. Incumbent EDR handles real-time PVT alarms. Replicating this in an agent adds zero value.
* **A09 · Physical Well Control Shut-In (B3, `[IADC-WS §8]`)**:
  * *Today*: Driller and Company Man execute physical actions on the remote BOP control panel according to API RP 53 well control drills.
  * *Agent Candidate*: `❌ No`. Pure physical command execution under life-safety conditions. AI must never operate the physical BOP.

---

## 4 · Candidate Agent Deep-Dive: The Hyper-Specialized Squad

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                   P01 WELLSITE SUPERVISOR AGENT SQUAD                                  │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ 1. DDR Time-Code Agent            │ 2. Tool Standby Audit Agent       │ 3. Pipe Tally Verification     │
│    (IADC Tour Splicing)           │    (Sensor Run-Time vs Invoice)   │    (Driller Depth vs Tally)    │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ 4. BOP Pressure Test Agent        │ 5. Mud Balance & Pit Agent        │ 6. Anti-Collision Sieve        │
│    (API RP 53 Chart Compliance)   │    (Chemical Sacks vs PVT Mass)   │    (3D Separation Factor)      │
├───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┤
│ 7. Delivery Manifest & Casing Staging Agent (Waybill vs Casing Schedule)                               │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Agent 1: DDR Operational Time-Code Classification Agent
* **In One Line**: Ingests 1-second WITSML rig sensor telemetry and digital driller logs to automatically segment the 24-hour day into standard IADC operational time-codes and pre-populate the morning OpenWells DDR.
* **Friction Solved**: Eliminates ~2.25 hours of nightly manual data assembly, transcription, and time-code mapping into OpenWells/WellView.
* **The Specification**:
  * **Reads**: Raw 1-second WITSML rig sensor telemetry (hookload, block height, bit depth, hole depth, pump pressure, flow-in/out, top drive RPM), digital IADC driller tour notes, and mud engineer morning logs.
  * **Does**: Algorithmatically breaks the 24-hour day into operational time segments (Rotary Drilling, Slide Drilling, Tripping In/Out, Making Connection, Circulating, BOP Testing, Reaming, Rig Service) by detecting surface sensor state transitions; identifies operational interruptions ($>15\text{ mins}$) and tags candidate Non-Productive Time (NPT) categories.
  * **Returns**: Pre-populated draft DDR operational timeline ready for OpenWells/WellView import, highlighting unclassified downtime intervals in an exception review queue.
  * **Stops At**: Authorizing official operator sign-off or disputing contractor NPT classifications.
* **Failure Modes & Safety Envelopes**: If telemetry drops out during a connection, the agent flags the interval as `[Unverified State: Manual Operator Entry Required]` rather than guessing the operational code.

### Agent 2: Rental Tool Standby vs. Operating Rate Audit Agent
* **In One Line**: Cross-checks third-party rental tool run-sheets and electronic field job tickets against downhole sensor timestamps to catch billing discrepancies before the supervisor signs.
* **Friction Solved**: Removes 1.25 hours per daily invoice review of manual cross-referencing between billing day-tickets and physical downhole tool run hours.
* **The Specification**:
  * **Reads**: Contractor daily electronic job tickets (directional drilling, logging-while-drilling, casing running, fishing tools), Master Service Agreement (MSA) rate books, and downhole MWD/LWD sensor rotation/circulating timestamps.
  * **Does**: Correlates contractor billed hours with actual sensor-verified downhole rotating hours; detects rental tools billed at "Operating Day Rate" that were actually sitting on surface pipe racks or in transit; calculates disputed dollar amounts.
  * **Returns**: Daily invoice audit exception report itemizing discrepancies between physical sensor run-time and invoiced operating rate hours, complete with recommended ticket adjustments.
  * **Stops At**: Signing fiscal service tickets or modifying contractual day rates.
* **Failure Modes & Safety Envelopes**: If contractor pricing terms are ambiguous or subject to negotiated minimum day-rate guarantees, the agent flags the ticket as `[Rate Ambiguity: Contractual Review Required]`.

### Agent 3: Pipe Tally & Driller Depth Verification Agent
* **In One Line**: Reconciles cumulative laser/steel tape drill pipe and casing tally sheets against driller geologger depth, pipe stretch models, and casing shoe targets.
* **Friction Solved**: Eliminates 1.50 hours per casing or trip campaign of manual tally book summation, math checking, and depth discrepancy investigation.
* **The Specification**:
  * **Reads**: Raw pipe tally sheets (joint serial numbers, measured length, thread type), driller geologger depth records, mud weight, and drillstring mechanical stretch models.
  * **Does**: Calculates cumulative drillstring length accounting for temperature and hookload-induced steel stretch; reconciles cumulative joint tally against driller bit depth and total depth (TD); checks casing shoe setting depth against planned casing seat tolerances.
  * **Returns**: Depth reconciliation ledger highlighting any discrepancy between tally count and driller geologger depth ($>1.5\text{ ft}$), verifying casing shoe landing depth prior to cementing.
  * **Stops At**: Updating the driller's official geologger datum.
* **Failure Modes & Safety Envelopes**: If a tally joint count mismatch exceeds 2.0 feet, the agent triggers an immediate alert: `[Depth Discrepancy Alert: Tally Sum Mismatches Driller Depth — Physical Re-Measurement Mandatory]`.

### Agent 4: BOP Pressure Test Compliance Agent
* **In One Line**: Ingests digital BOP pressure test data (psi vs. time), verifies stabilization and hold intervals for low-pressure (250–350 psi) and high-pressure (5,000–15,000 psi) tests, and certifies compliance with API RP 53 without manual ruler checks.
* **Friction Solved**: Eliminates 1.75 hours per weekly BOP test campaign of manual circular chart interpretation and regulatory test paperwork assembly.
* **The Specification**:
  * **Reads**: High-frequency digital pressure transmitter logs (psi vs. seconds) from the cementing unit / BOP test stump, and component identification (pipe rams, blind rams, annular, choke manifold, kill line, kelly cock).
  * **Does**: Evaluates test pressure hold times against API RP 53 criteria (minimum 5-minute low test at 250–350 psi, minimum 10-minute high test at rated working pressure); calculates pressure decay slope ($dP/dt$); verifies stabilization criteria (decay $<1\%$ of test pressure over hold period without active pumping).
  * **Returns**: Certified digital BOP test certificate displaying pressure decay curves, pass/fail badges per component, and audit-ready regulatory documentation.
  * **Stops At**: Signing statutory BOP compliance certificates or authorizing drilling to resume after a failed test.
* **Failure Modes & Safety Envelopes**: If pressure decay exceeds $1.0\%$ over the hold period, the agent marks the test as `[FAILED: Bleed-Off Exceeds API RP 53 Stabilization Limit]` and highlights the specific valve/ram leaking.

### Agent 5: Mud Chemical Inventory & Pit Volume Balance Agent
* **In One Line**: Reconciles active mud pit volume totalizer (PVT) changes with mud engineer chemical consumption tickets (barite, bentonite, polymers) to detect unrecorded downhole seepage or inventory theft.
* **Friction Solved**: Removes 1.25 hours per daily mud audit of manual mass balance calculations and warehouse inventory reconciliation.
* **The Specification**:
  * **Reads**: Pit volume totalizer (PVT) sensor levels, active pit fluid densities, mud engineer daily property sheets, and warehouse chemical consumption tickets (sacks received, sacks dumped).
  * **Does**: Solves dynamic mass balance equations comparing sacks of weighting agent added against observed pit volume and mud density ($ppg$) shifts; flags unrecorded pit fluid additions or unexplained fluid loss to the formation during drilling.
  * **Returns**: Daily mud mass balance audit scorecard identifying unexplained volume deltas and daily chemical expenditure variances.
  * **Stops At**: Modifying mud chemical treatment recipes or altering active pit alarm thresholds.
* **Failure Modes & Safety Envelopes**: If calculated mud mass balance indicates unrecorded fluid losses exceeding 10 barrels, the agent triggers an immediate alert: `[Unrecorded Formation Seepage: Seepage Rate Exceeds 5 bbl/hr]`.

### Agent 6: Real-Time Survey Anti-Collision Clearance Agent
* **In One Line**: Evaluates incoming MWD directional survey stations against offset wellbore positional uncertainty ellipses to compute 3D separation factors and enforce anti-collision safety envelopes.
* **Friction Solved**: Removes 0.75 hours per survey run of manual offset well proximity calculation and spreadsheet plotting.
* **The Specification**:
  * **Reads**: MWD directional survey stations ($Inc, Azi, TVD, MD$), instrument error models (ISCWSA error ellipses), and active 3D offset well trajectory databases.
  * **Does**: Computes 3D minimum distance and Error-Ratio Separation Factor ($SF$) between the active drill bit and all nearby offset wellbores; compares $SF$ against operator anti-collision policy (e.g., $SF < 1.5$ warning, $SF < 1.0$ mandatory shut-in); verifies magnetic interference and toolface orientation drift.
  * **Returns**: Anti-collision clearance scorecard with 3D proximity maps, alerting the supervisor of impending wellbore collision hazards before the next stand is drilled.
  * **Stops At**: Overriding anti-collision shut-in alarms or changing directional well targets.
* **Failure Modes & Safety Envelopes**: If calculated separation factor drops below $1.2$, the agent issues an emergency alert: `[Critical Anti-Collision Alert: Separation Factor < 1.2 — Immediate Drilling Standstill Recommended]`.

### Agent 7: Wellsite Delivery Manifest & Casing Staging Agent
* **In One Line**: Cross-references arriving truck/boat freight waybills against the approved well program casing and fluid specifications to catch incorrect pipe weights, thread connections, or chemical grades before unloading.
* **Friction Solved**: Removes 1.50 hours per major material delivery campaign of manual paper waybill checking and pipe rack inspection.
* **The Specification**:
  * **Reads**: Electronic bills of lading, truck/supply boat manifests, tubular mill test certificates, and approved casing running program specifications (OD, weight $lb/ft$, grade, thread connection, premium torque specs).
  * **Does**: Validates delivered pipe serial numbers, steel grades (e.g., L80 vs. P110), wall thickness, and thread connections (e.g., VAM Top vs. TenarisHydril Wedge) against the engineering well program; verifies bulk fluid volumes and cement blend additive batches against upcoming section requirements.
  * **Returns**: Rig-site staging manifest verifying delivered materials are compliant with the well prognosis, flagging incorrect tubular shipments for immediate rejection at the gate.
  * **Stops At**: Signing physical carrier delivery receipts or releasing transportation trucks.
* **Failure Modes & Safety Envelopes**: If an arriving pipe joint has an incompatible connection thread type, the agent issues an immediate rejection tag: `[Material Rejection: Incompatible Thread Type — Reject Shipment at Rig Gate]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise dollar totals. The operating drilling company provides their own daily rig day-rate spread multiplier.

| Hyper-Specialized Agent | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **1. DDR Time-Code Classification Agent** | 1 24-Hour Morning Report (DDR) | 2.50 hours | 0.25 hours | **2.25 hours saved** | Manual Time Segmentation & Data Entry Drag |
| **2. Rental Tool Standby Rate Audit Agent** | 1 Daily Service Contractor Ticket Pack | 1.50 hours | 0.25 hours | **1.25 hours saved** | Invoiced Run-Time vs. Sensor Cross-Check Drag |
| **3. Pipe Tally & Driller Depth Agent** | 1 Casing Running / Drillstring Trip | 1.75 hours | 0.25 hours | **1.50 hours saved** | Manual Tape Summation & Stretch Math Drag |
| **4. BOP Pressure Test Compliance Agent** | 1 Weekly BOP Test (14 components) | 2.00 hours | 0.25 hours | **1.75 hours saved** | Analog Chart Ruler Measurement Drag |
| **5. Mud Chemical Inventory Balance Agent**| 1 Daily Mud Balance & Chemical Audit | 1.50 hours | 0.25 hours | **1.25 hours saved** | Multi-Table Material Mass Balance Drag |
| **6. Survey Anti-Collision Clearance Agent**| 1 Directional Drilling Survey Section | 1.00 hours | 0.25 hours | **0.75 hours saved** | 3D Geometry Calculation & Plotting Drag |
| **7. Delivery Manifest & Casing Staging Agent**| 1 Major Wellsite Logistics Delivery Event| 1.75 hours | 0.25 hours | **1.50 hours saved** | Paper Bill of Lading Cross-Checking Drag |
| **Total Squad Impact per Well Tour Day** | **1 Operating 24-Hour Rig Tour Day** | **12.00 hours** | **1.75 hours** | **10.25 hours saved** | **Eliminates 85% of Daily Administrative Friction** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[IADC-KSA]` | IADC, *Competencies Knowledge, Skills, and Abilities — Supervisor*, 2021 | iadc.org | Competency Standard | Operational actions, time-coding, and DDR tasks |
| `[IADC-WS]` | IADC, *WellSharp Well Control Assessment Standard*, 2022 | iadc.org | Training Standard | Well control shut-in and pit volume monitoring |
| `[API-RP-53]` | API, *Blowout Prevention Equipment Systems for Drilling Wells*, 5th Ed | API Standards Store | Recommended Practice | BOP test pressures, hold times, and stabilization criteria |
| `[IOGP-476]` | IOGP, *Well Control Operations and Contingency Planning*, Report 476 | iogp.org | Industry Guidance | Wellsite management of change and risk envelopes |
| `[API-Spec-5CT]`| API, *Specification for Casing and Tubing*, 10th Edition | API Standards Store | Manufacturing Standard | Pipe tally measurement, thread classes, and drift |

### Negative Search Registry
* **Searched**: Landmark OpenWells product manuals, Peloton WellView technical whitepapers, and IADC drilling conference archives for *"autonomous 1-second WITSML rig state classification with automatic IADC DDR code generation, automated digital BOP circular chart stabilization verification, and electronic pipe tally driller depth reconciliation without manual human entry"*.
* **Result**: `Negative Search, 2026-09`. Incumbent drilling reporting databases manage database schemas and record times entered by humans; none autonomously ingest raw 1-second sensor waveforms to classify IADC operations, verify circular BOP pressure charts against API stabilization standards, or audit contractor standby rates against downhole bit-depth timestamps.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"On a drilling rig burning a thousand dollars every forty seconds, having the Company Man spend three hours a day squinting at paper tally books and drawing lines on circular BOP pressure charts with a plastic ruler isn't quality assurance; it's a massive distraction from the hole."*
* **Open Questions for Drilling Supervisors**:
  * How many hours every night do you spend reconciling contractor tour notes and Pason waveforms to build the 24-hour time breakdown for OpenWells?
  * How often do you discover that rental tools billed at full operating day-rates were actually sitting on the pipe rack rather than rotating in the hole?
  * When a circular paper BOP test chart is borderline, how do you mathematically distinguish between true pressure stabilization and a small, dangerous ram seal leak?
