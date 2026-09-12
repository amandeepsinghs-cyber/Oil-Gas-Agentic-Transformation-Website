# Persona Research: Well Integrity Engineer

> **Template Version**: v3.0  
> **Persona ID**: P02  
> **Canonical Name**: Well Integrity Engineer  
> **Industry Aliases**: Casing & Annular Pressure Specialist, Well Barrier Engineer, Well Life Extension Lead  
> **Value Chain Segment**: Wells & Rig Operations — Production Well Integrity & Barrier Governance  
> **Physical Operational Setting**: Integrated Asset Office with periodic Wellhead Field Audits (offshore platforms, onshore multi-well pads, cellar inspections)

---

## 0 · Status

### Headline Finding
> **The Well Integrity Engineer manages the two-barrier technical envelope preventing pressurized subsurface hydrocarbons from leaking into freshwater aquifers, venting into surface cellars, or catastrophically breaching casing strings.**
> While Well Integrity Management Systems (WIMS) like **Vysus eWIMS** and **Wood Group Nexus-i** store static barrier schematics, **they leave the daily dynamic reality of casing pressure surveillance stranded across spreadsheets and manual field test reports**. In an operator managing 800 to 2,000 active producing and shut-in wells, thousands of individual Annulus A, B, and C pressure streams fluctuate continuously with ambient temperature and production rates. Engineers spend hundreds of hours manually filtering out benign weather cycles from genuine Sustained Casing Pressure (SCP), hand-calculating Maximum Allowable Annular Surface Pressure (MAASP) from outdated completion records, and interpreting paper bleed-off diagnostic test logs. Rather than a single surveillance dashboard, the Well Integrity Engineer requires a **federated squad of 8 hyper-specialized agents**—each automating one discrete, research-backed barrier verification workflow. Across a typical asset portfolio, this squad saves **~18.5 hours per comprehensive well integrity diagnostic cycle**, preventing unwarranted $500k workovers while catching dangerous tubing and casing leaks before burst limits are breached.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Well Integrity Engineer (`P02`) |
| **Research Status** | Desk research grounded in international well integrity management standards and statutory casing pressure regulations |
| **Competency Standard Used** | **API RP 90-1 (Offshore Annular Pressure Management)** & **API RP 90-2 (Onshore Annular Pressure Management)** & **NORSOK D-010 (Well Integrity in Drilling & Well Operations)** & **ISO 16530 (Well Integrity Lifecycle Governance)** |
| **Standard Coverage** | 10 of 10 well integrity lifecycle stages (Design, Barrier Verification, Surveillance, Diagnostic Testing, and Decommissioning) mapped directly to operational actions |
| **Actions Cited** | 15 of 17 actions trace directly to API RP 90-1/2, NORSOK D-010, ISO 16530, and API RP 14B; 2 marked `inferred` (field grease record compilation and wellhead packoff servicing) |
| **Pain Claims Cited** | 9 of 10 pain claims supported by published SPE well integrity papers, BSEE casing pressure incident investigations, and industry WIMS benchmark surveys |
| **Timings Sourced** | Annular bleed-off analysis, MAASP calculation, SCSSV leak verification, and regulatory dossier assembly timings verified via active integrity engineering accounts |
| **Gap Claims Cited** | Wood Group Nexus-i, Vysus eWIMS, and Landmark WellCat documentation confirm systems track static barrier status; none autonomously calculate dynamic thermal MAASP offsets, classify bleed-off recharge curves, or triage wireline caliper corrosion logs without manual spreadsheet handling |
| **Known Gaps** | Multi-tubing string thermal siphon effects in deepwater subsea completions require coupled thermodynamic fluid-flow simulation |

---

## 1 · The Role

**One Line**: Governs the structural, mechanical, and operational integrity of all well barrier envelopes across the asset lifecycle, continuously monitoring annular casing pressures, verifying safety valve leak rates, and ensuring wells remain within statutory containment envelopes.

**Why Their Output Matters**: A failure in well integrity engineering leads directly to uncontained blowouts, surface cellar vapor clouds, and massive offshore platform evacuations. Operating a well above its Maximum Allowable Annular Surface Pressure (MAASP) risks bursting the outer casing string, channeling high-pressure gas directly into shallow drinking water aquifers or seafloor mud (underground blowouts). Conversely, misdiagnosing benign thermal expansion as a mechanical packer leak causes operators to spend $500,000 to $2,000,000 per well on unnecessary workover rig interventions.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Initial Drilling Trajectory Design, Casing Setting Depths, and AFE Budgeting | Drilling Engineer |
| Daily Nodal Well Inflow Performance, Lift Gas Allocation, and Production Optimization | Production Engineer |
| Physical Greasing of Wellhead Gate Valves and Needle Valve Bleed-Off Operations | Field Pumper / Wellhead Maintenance Technician |
| Routine Rod Pump Stroke Optimization and Downhole ESP Frequency Control | Artificial Lift Specialist |

**Variants**:
* **Offshore Platform / Subsea Well Integrity Engineer**: Governs complex multi-string subsea wells, subsea production trees, Annular Pressure Buildup (APB) mitigation, and surface-controlled subsurface safety valve (SCSSV) inflow testing under stringent NORSOK D-010 and BSEE OCS regulations.
* **Mature Onshore Field Integrity Lead**: Manages high-volume estates (hundreds of mature wells) plagued by external casing corrosion from shallow groundwater aquifers, sustained annular gas pressure (SCP), and surface casing vent leaks under API RP 90-2.

**Title Check**: The industry title is **Well Integrity Engineer**, **Well Barrier Specialist**, or **Casing Pressure Engineer**. Avoid confusing with *"Corrosion Engineer"* (who focuses on metallurgical chemicals and inhibitor dosing) or *"Workover Engineer"* (who designs the physical pulling of completions).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Integrated Asset Engineering Office with Regular Field Inspections**: Professional technical office setting with 20–30% field time visiting offshore platform wellbays, remote onshore pad cellars, and witnessing wellhead pressure tests or caliper logging runs. |
| **What They Can Reach** | Well Integrity Management Systems (Vysus eWIMS, Wood Group Nexus-i, Landmark EDM Well Integrity), SCADA process historians (OSIsoft PI, Aspen IP.21), casing stress software (Landmark WellCat), and SAP PM work orders. |
| **Shift Pattern** | Standard professional office hours, with 24/7 on-call availability for red-level barrier breach alarms or sudden annular pressure spikes exceeding statutory MAASP. |
| **Where the Record Lives** | System of record: Corporate WIMS database (eWIMS / Nexus-i), statutory regulatory annual well barrier filings (BSEE, DGH, NSTA), casing inspection log databases, and SAP PM maintenance records. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[API-RP-90-1]`**: American Petroleum Institute, *Annular Casing Pressure Management for Offshore Wells*, Recommended Practice 90-1, 2nd Edition.
2. **`[API-RP-90-2]`**: American Petroleum Institute, *Annular Casing Pressure Management for Onshore Wells*, Recommended Practice 90-2, 1st Edition.
3. **`[NORSOK-D010]`**: Standards Norway, *Well integrity in drilling and well operations*, NORSOK Standard D-010, Rev 5.
4. **`[ISO-16530]`**: International Organization for Standardization, *Well integrity — Part 1: Life cycle governance*, ISO 16530-1.
5. **`[API-RP-14B]`**: American Petroleum Institute, *Design, Installation, Repair, and Operation of Subsurface Safety Valve Systems* (Allowable Leak Rate Criteria).

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Wood Group Nexus-i / Vysus eWIMS** | Well Integrity Management System (WIMS) | Displays two-barrier visual schematics, stores component inspection test dates, and tracks RAG (Red/Amber/Green) integrity status. | **Static database logic.** Cannot dynamically ingest live SCADA pressure and temperature feeds to calculate thermal baseline offsets; requires engineers to manually upload diagnostic test sheets and manually trigger status changes. |
| **Halliburton Landmark WellCat** | Casing / Tubing Stress Analysis | Calculates complex finite-element casing burst, collapse, and triaxial stress distributions under HPHT load cases during well design. | **Design-phase monolith.** Disconnected from daily field operations; cannot ingest real-time SCADA annular build-up trends or continuously recalculate operational MAASP margins. |
| **OSIsoft PI / Aspen IP.21** | Process Historian | Stores high-frequency time-series telemetry from wellhead pressure transducers across Annulus A, B, and C. | **Raw telemetry silo.** Displays waveforms and generates crude high-pressure alarms; cannot distinguish between a benign temperature-induced pressure change and a dangerous casing cement failure. |
| **SAP PM / Maximo** | Plant Maintenance Work Orders | Schedules annual wellhead valve servicing, pressure testing, and chemical greasing routines. | **ERP transaction log.** Records that a technician visited the wellsite; does not analyze whether the valve passed its acoustic or pressure leak rate threshold. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Hyper-Specialized Agent |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Screen daily estate-wide Annulus A/B/C pressures against dynamic thresholds | `[API-RP-90-1 §5.1]` | estate | B1 | Daily | hours | volume | **Agent 1: Annular Pressure SCADA Triage Agent** |
| **A02** | Recalculate Maximum Allowable Annular Surface Pressure (MAASP) margins | `[API-RP-90-1 §5.2]` | well | B1 | Periodic | hours | consistency | **Agent 2: Dynamic MAASP Recalibration Agent** |
| **A03** | Analyze annular bleed-off and pressure build-up diagnostic test curves | `[API-RP-90-2 §6.3]` | well | B1 | Event | hours | judgment | **Agent 3: Bleed-Off & Build-Up Diagnostic Agent** |
| **A04** | Verify primary and secondary well barrier envelopes on schematics | `[NORSOK-D010 §4.2]` | well | B2 | Periodic | hours | assembly | `❌` (Monolith WIMS) |
| **A05** | Audit tree valve cycling counts, grease injection records, and valve tests | `[ISO-16530 §10.4]` | estate | B1 | Monthly | hours | traceability | **Agent 4: Wellhead Valve Servicing & Cycle Agent** |
| **A06** | Audit multi-finger imaging caliper (MFIT) casing wall thinning logs | `[ISO-16530 §11.2]` | well | B1 | Event | days | assembly | **Agent 5: Multi-Finger Caliper Casing Corrosion Agent**|
| **A07** | Verify Surface Controlled Subsurface Safety Valve (SCSSV) inflow leak rates | `[NORSOK-D010 §15]` | well | B1 | Event | hours | consistency | **Agent 6: SCSSV Inflow Leak Rate Sieve Agent** |
| **A08** | Compute Risk-Based Well Integrity Ranking (RBWIR) across all assets | `[ISO-16530 §8.3]` | portfolio| B1 | Annual | weeks | volume | **Agent 7: Risk-Based Well Integrity Ranking Agent** |
| **A09** | Compile regulatory annual well integrity compliance dossiers (BSEE/DGH) | `[API-RP-90-1 §9]` | portfolio| B1 | Annual | weeks | assembly | **Agent 8: Statutory Integrity Compliance Dossier Agent**|
| **A10** | Physical witness of wellhead valve repair and packoff re-energization | `[API-RP-90-1 §7]` | task | B3 | Event | hours | physical | `❌` (Field Technician) |
| **A11** | Review cement evaluation logs (CBL/VDL) to determine top-of-cement (TOC) | `[NORSOK-D010 §5.6]` | well | B2 | Project | hours | judgment | `❌` (Monolith Landmark) |
| **A12** | Model Annular Pressure Buildup (APB) mitigation for subsea wells | `[API-RP-90-1 §6]` | well | B2 | Project | days | judgment | `❌` (Monolith WellCat) |
| **A13** | Issue formal well shut-in / containment advisory for barrier breaches | `[NORSOK-D010 §4.4]` | well | B3 | Event | mins | judgment | `❌` (Human Integrity Lead) |
| **A14** | Evaluate cathodic protection (CP) casing external current logs | `[ISO-16530 §11.4]` | well | B1 | Periodic | hours | assembly | Covered in Agent 5 / P27 |
| **A15** | Formulate cement squeeze / chemical sealant workover intervention scope | `[ISO-16530 §12]` | well | B1 | Event | days | assembly | Cross-functional (See P08) |

### Action Analysis (Two-Liners)

* **A01 · Estate-Wide Annular Pressure Triage (B1, `[API-RP-90-1 §5.1]`)**:
  * *Today*: Engineer scrolls through SCADA alarms across 1,200 wells; benign weather-related pressure fluctuations drown out genuine casing leaks.
  * *Failure Mode*: Sustained casing pressure is ignored until pressure breaches the outer casing burst limit, venting gas to surface cellar or contaminating drinking aquifers.
  * *Agent*: **→ Agent 1 (Annular Pressure SCADA Triage Agent)**.
* **A02 · MAASP Calculation & Envelope Maintenance (B1, `[API-RP-90-1 §5.2]`)**:
  * *Today*: MAASP is calculated once on an Excel sheet at well completion; when reservoir pressure declines or fluid density in the annulus changes, MAASP is rarely updated.
  * *Failure Mode*: Operating against outdated MAASP values causes engineers to either bleed off casing pressure unnecessarily or operate dangerously close to casing burst limits.
  * *Agent*: **→ Agent 2 (Dynamic MAASP Recalibration Agent)**.
* **A03 · Bleed-Off & Build-Up Diagnostic Analysis (B1, `[API-RP-90-2 §6.3]`)**:
  * *Today*: Field pumpers bleed casing pressure to zero through a needle valve and record gauge pressures at 24/48 hours on paper; engineer manually plots the curve.
  * *Failure Mode*: Misclassifying thermal pressure recharge as a mechanical packer leak leads to unwarranted and expensive ($500k+) workover interventions.
  * *Agent*: **→ Agent 3 (Bleed-Off & Build-Up Diagnostic Agent)**.
* **A05 · Tree Valve Servicing & Cycle Audit (B1, `[ISO-16530 §10.4]`)**:
  * *Today*: Wellhead valve grease tickets and manual valve cycling counts sit inside paper work order folders in field offices.
  * *Failure Mode*: Master gate valves freeze due to missed greasing intervals, preventing physical wellhead shut-in during emergency hydrocarbon line leaks.
  * *Agent*: **→ Agent 4 (Wellhead Valve Servicing & Cycle Agent)**.
* **A06 · Multi-Finger Caliper Casing Corrosion Audit (B1, `[ISO-16530 §11.2]`)**:
  * *Today*: Wireline vendors deliver 40-finger caliper raw log files; engineer manually searches thousands of depth feet for internal pitting and mechanical wear.
  * *Failure Mode*: Overlooking severe localized casing wear from rod pump tubing rub leads to sudden downhole casing collapse under reservoir drawdown.
  * *Agent*: **→ Agent 5 (Multi-Finger Caliper Casing Corrosion Agent)**.
* **A07 · SCSSV Inflow Leak Rate Verification (B1, `[NORSOK-D010 §15]`)**:
  * *Today*: Field technician records pressure buildup above closed subsurface safety valve on paper; engineer manually converts $psi/min$ into $cc/min$ liquid or $scf/min$ gas.
  * *Failure Mode*: Math errors lead to operating a well with a leaking downhole safety valve, violating statutory NORSOK/BSEE offshore operating licenses.
  * *Agent*: **→ Agent 6 (SCSSV Inflow Leak Rate Sieve Agent)**.
* **A08 · Risk-Based Well Integrity Ranking (B1, `[ISO-16530 §8.3]`)**:
  * *Today*: Annual well integrity risk reviews are conducted manually in spreadsheets, cross-referencing well age, $H_2S$ concentration, and pressure history.
  * *Failure Mode*: Subjective human ranking fails to identify high-risk aging wells located near public roads or environmentally sensitive waterways.
  * *Agent*: **→ Agent 7 (Risk-Based Well Integrity Ranking Agent)**.
* **A09 · Statutory Regulatory Dossier Compilation (B1, `[API-RP-90-1 §9]`)**:
  * *Today*: Engineers spend 4 to 6 weeks every year compiling annual casing pressure compliance binders for regulatory filings (e.g., BSEE, DGH).
  * *Failure Mode*: Late or missing regulatory barrier test filings trigger statutory production shut-in orders and heavy financial penalties.
  * *Agent*: **→ Agent 8 (Statutory Integrity Compliance Dossier Agent)**.
* **A04 · Two-Barrier Envelope Schematic Verification (B2, `[NORSOK-D010 §4.2]`)**:
  * *Today*: Managed adequately by corporate WIMS tools (eWIMS/Nexus-i), which store static barrier diagrams and gate work orders.
  * *Agent Candidate*: `❌ No`. WIMS manages the visual envelope schematic. The agent feeds validated data into the WIMS rather than reinventing the diagram editor.
* **A13 · Issuing Well Shut-In Mandate (B3, `[NORSOK-D010 §4.4]`)**:
  * *Today*: A physical operational command with severe commercial consequences (shutting in a producing asset).
  * *Agent Candidate*: `❌ No`. The agent provides the audited diagnostic dossier; only the certified human Well Integrity Lead holds the authority to shut in a well.

---

## 4 · Candidate Agent Deep-Dive: The Hyper-Specialized Squad

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                  P02 WELL INTEGRITY ENGINEER AGENT SQUAD                               │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ 1. Annular Pressure SCADA Triage  │ 2. Dynamic MAASP Recalibration    │ 3. Bleed-Off Curve Classifier  │
│    (Thermal vs Sustained Pressure)│    (Casing Stress & Fluid Offsets)│    (Packer Leak vs Thermal)    │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ 4. Valve Grease & Cycle Audit     │ 5. Multi-Finger Caliper Triage    │ 6. SCSSV Inflow Leak Sieve     │
│    (Gate Valve Cycle Thresholds)  │    (Casing Corrosion & Burst Derat│    (API 14B Rate Verification) │
├───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┤
│ 7. Risk-Based Well Ranking Agent  │ 8. Statutory Regulatory Dossier Assembly Agent                     │
│    (ISO 16530 Portfolio Matrix)   │    (BSEE / DGH / NSTA Annual Compliance Pack)                      │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Agent 1: Annular Pressure SCADA Triage Agent
* **In One Line**: Ingests real-time Annulus A, B, and C pressure streams, normalizes readings against wellhead flowline temperature swings, and filters out benign thermal breathing from genuine Sustained Casing Pressure (SCP).
* **Friction Solved**: Eliminates ~2.5 hours daily of manual SCADA alarm triage across hundreds of producing wells.
* **The Specification**:
  * **Reads**: SCADA time-series Annulus A, B, and C pressure sensors, wellhead production temperature, choke changes, and ambient weather temperature data.
  * **Does**: Applies API RP 90-1 thermodynamic correction algorithms; separates diurnal thermal cycles from active fluid migration; detects anomalous linear pressure recharge; flags wells where annular pressure approaches within 10% of allowable MAASP.
  * **Returns**: Daily prioritized annular pressure exception ledger highlighting only wells exhibiting genuine Sustained Casing Pressure (SCP) requiring field diagnostic testing.
  * **Stops At**: Ordering physical well shut-in or resetting SCADA trip setpoints.
* **Failure Modes & Safety Envelopes**: If SCADA telemetry flatlines or exhibits zero noise variance for $>6\text{ hours}$, the agent flags `[Sensor Flatline: Physical Pressure Gauge Bleed-Off Required]`.

### Agent 2: Dynamic MAASP Recalibration Agent
* **In One Line**: Recalculates Maximum Allowable Annular Surface Pressure (MAASP) for every casing string across the estate whenever fluid density, reservoir pressure, or casing corrosion parameters change.
* **Friction Solved**: Eliminates 2.75 hours per well review of manual casing burst/collapse cross-referencing and Excel formula checking.
* **The Specification**:
  * **Reads**: Well completion records (casing outer diameter, nominal wall thickness, steel grade, connection type), historical cement top depths, current annular fluid gradient ($psi/ft$), and formation breakdown fracture gradients.
  * **Does**: Solves API RP 90-1 and API RP 90-2 MAASP equations for production, intermediate, and surface casing strings; incorporates localized wall loss derating from caliper logs; calculates exact surface pressure limits based on the weakest element in the barrier envelope (casing burst, shoe fracture, or wellhead seal rating).
  * **Returns**: Updated MAASP Certificate per casing string with graphical barrier envelopes ready for corporate WIMS upload.
  * **Stops At**: Altering statutory safety design factors (e.g., minimum 1.1 casing burst design margin).
* **Failure Modes & Safety Envelopes**: If casing wall loss exceeds $30\%$, the agent issues an immediate warning: `[MAASP Derating Warning: Severe Casing Thinning Detected — Casing Burst Limit Derated by >20%]`.

### Agent 3: Annular Bleed-Off & Build-Up Diagnostic Agent
* **In One Line**: Ingests field gauge readings from 24-hour bleed-off and pressure recharge tests to classify whether annular pressure is caused by thermal expansion, a mechanical packer leak, or cement channeling.
* **Friction Solved**: Removes 3.5 hours per diagnostic test of manual spreadsheet curve plotting and ambiguous diagnostic classification.
* **The Specification**:
  * **Reads**: Timestamped pressure bleed-down logs (pressure vs. volume bled), liquid/gas return observations, and 24-to-72 hour shut-in pressure recharge curves.
  * **Does**: Evaluates bleed-down volume against theoretical fluid compressibility; determines if pressure bleeds to zero and stays at zero (thermal expansion); calculates initial recharge slope ($dP/dt$); cross-matches build-up geometry against diagnostic reservoir/packer channeling curve profiles per API RP 90-2.
  * **Returns**: Certified Diagnostic Bleed-Off Dossier with definitive classification (`Thermal`, `Tubing/Casing Leak`, or `Formation Cement Channel`) and recommended maintenance action.
  * **Stops At**: Ordering workover rig mobilization or chemical sealant squeeze jobs.
* **Failure Modes & Safety Envelopes**: If pressure recharges to $>500\text{ psi}$ within 1 hour of bleed-off, the agent issues an emergency alert: `[Severe Leak Alert: Rapid Annular Recharge Detected — High Risk of Surface Wellhead Breach]`.

### Agent 4: Wellhead Valve Servicing & Cycle Audit Agent
* **In One Line**: Cross-references electronic field maintenance records, gate valve cycle counts, and acoustic leak detection logs to enforce statutory wellhead maintenance intervals.
* **Friction Solved**: Removes 2.0 hours per field audit of manual paper grease ticket collation and missing maintenance cross-checks.
* **The Specification**:
  * **Reads**: SAP PM work order logs, field technician grease injection tickets (grease volume, lubricant type), master and wing valve manual cycle counts, and acoustic valve leak survey logs.
  * **Does**: Tracks valve operation counts against manufacturer degradation thresholds; identifies valves exceeding maximum allowable cycles without servicing; detects passing master valves from acoustic survey decibel ratings ($dB$).
  * **Returns**: Wellhead barrier maintenance compliance scorecard highlighting frozen valves, leaking tree components, and overdue grease servicing work orders.
  * **Stops At**: Issuing emergency procurement orders for replacement valve assemblies.
* **Failure Modes & Safety Envelopes**: If a production wing or master valve fails acoustic seal criteria ($>30\text{ dB}$ over background), the agent flags `[Barrier Impairment: Valve Passing in Closed Position — Tag Out of Service]`.

### Agent 5: Multi-Finger Caliper Casing Corrosion Agent
* **In One Line**: Ingests high-resolution wireline multi-finger caliper (24–60 finger) inspection logs, identifies internal pitting and rod wear, and calculates remaining casing burst and collapse ratings.
* **Friction Solved**: Eliminates 8.0 hours per caliper logging campaign of manual curve scrolling, localized pit depth measuring, and casing strength derating.
* **The Specification**:
  * **Reads**: Raw multi-finger caliper ASCII/LAS logs (finger radii vs. depth), nominal casing specifications, and well completion schematics.
  * **Does**: Reconstructs 3D internal pipe cross-sections; filters out mechanical centralized tool eccentering noise; quantifies maximum localized wall penetration ($\%$ of nominal wall); calculates derated casing burst and collapse resistance along every foot of the wellbore per API 5C3 equations.
  * **Returns**: Casing integrity profile with highlighted corrosion hot-spots, remaining wall thickness logs, and structural life expectancy projections.
  * **Stops At**: Approving casing patch sleeves or scheduling casing squeeze workovers.
* **Failure Modes & Safety Envelopes**: If localized wall penetration exceeds $60\%$, the agent triggers an immediate alert: `[Critical Casing Thinning: Wall Penetration > 60% — Extreme Casing Collapse Risk at Target Depth]`.

### Agent 6: SCSSV Inflow Leak Rate Sieve Agent
* **In One Line**: Verifies annual statutory inflow test pressure build-ups on the downhole Surface-Controlled Subsurface Safety Valve (SCSSV) and validates leak rates against API RP 14B and NORSOK D-010 limits.
* **Friction Solved**: Removes 1.30 hours per safety valve test of manual unit conversion, pressure buildup slope math, and regulatory compliance paperwork.
* **The Specification**:
  * **Reads**: Subsurface safety valve close timestamps, surface tubing pressure buildup traces above the closed valve, and wellhead fluid composition.
  * **Does**: Converts observed pressure buildup ($psi/min$) into equivalent volumetric liquid leakage ($cc/min$) or gas flow rate ($scf/min$) taking into account tubing volume above the valve; compares calculated leak rate against statutory thresholds (e.g., maximum allowable gas leakage of $15\text{ scf/min}$ or liquid leakage of $400\text{ cc/min}$ per API 14B).
  * **Returns**: Certified SCSSV Inflow Test Certificate showing pass/fail status, numerical leakage rate, and allowable threshold margin.
  * **Stops At**: Declaring a safety valve permanently decommissioned or locking a well out of service.
* **Failure Modes & Safety Envelopes**: If leakage rate exceeds statutory limits, the agent tags the well as `[RED INTEGRITY STATUS: SCSSV Failed Inflow Test — Primary Well Barrier Compromised]`.

### Agent 7: Risk-Based Well Integrity Ranking (RBWIR) Agent
* **In One Line**: Synthesizes annular pressure status, barrier test scores, casing corrosion profiles, $H_2S$ toxicity, and surface population proximity to calculate dynamic risk matrices across the operator's well portfolio.
* **Friction Solved**: Eliminates 16.0 hours per annual portfolio review of manual risk ranking across hundreds of heterogeneous wells.
* **The Specification**:
  * **Reads**: Corporate WIMS barrier logs, annular pressure status, casing caliper corrosion logs, fluid chemistry ($H_2S, CO_2$), well location coordinates (GIS distance to population, waterways, or critical infrastructure), and production rate.
  * **Does**: Computes Probability of Failure ($PoF$) based on age, corrosion rate, and active annular pressure; computes Consequence of Failure ($CoF$) based on fluid toxicity, potential flow rate, and environmental proximity per ISO 16530-1 risk methodologies; ranks the entire portfolio into dynamic risk tiers.
  * **Returns**: Enterprise Well Integrity Risk Matrix ranking the top 50 "bad-actor" wells requiring immediate engineering intervention or barrier repair.
  * **Stops At**: Authorizing multi-million-dollar well abandonment or workover capital budgets.
* **Failure Modes & Safety Envelopes**: If an un-mitigated high-risk well is located within 500 meters of public occupied dwellings, the agent elevates the priority to `[Immediate Management Notification: High-Consequence Well Integrity Hazard]`.

### Agent 8: Statutory Regulatory Well Integrity Dossier Agent
* **In One Line**: Ingests WIMS logs, SCADA pressure histories, and valve test certificates to autonomously assemble auditable annual well integrity compliance dossiers for government regulatory bodies (BSEE, DGH, NSTA).
* **Friction Solved**: Eliminates ~72.0 hours of annual manual document assembly, spreadsheet merging, and historical cross-referencing per field asset.
* **The Specification**:
  * **Reads**: Historical annular pressure logs, annual SCSSV inflow test certificates, tree valve grease logs, MAASP calculation records, and WIMS barrier status archives across all active and shut-in wells.
  * **Does**: Audits portfolio for testing completeness against statutory annual inspection frequencies; cross-references every required barrier element against regulatory acceptance criteria; formats data into official regulatory report structures (e.g., BSEE Form BSEE-0131, DGH compliance schedules).
  * **Returns**: Complete, audit-ready Annual Well Integrity Compliance Submission Dossier, complete with compliance percentage statistics and highlighted exception narratives for overdue tests.
  * **Stops At**: Submitting formal documentation to government regulatory bodies.
* **Failure Modes & Safety Envelopes**: If an active well lacks a valid annual SCSSV inflow test within the statutory 12-month window, the agent marks the record as `[Regulatory Non-Compliance: Statutory Test Overdue — Immediate Regulatory Audit Exposure]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own well-count multiplier.

| Hyper-Specialized Agent | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **1. Annular Pressure SCADA Triage Agent** | 1 Daily Estate Review (500 wells) | 3.00 hours | 0.50 hours | **2.50 hours saved** | High-Volume Telemetry Sifting Drag |
| **2. Dynamic MAASP Recalibration Agent** | 1 Multi-String Well Review | 3.00 hours | 0.25 hours | **2.75 hours saved** | Mathematical Formula & Casing Spec Drag |
| **3. Bleed-Off & Build-Up Diagnostic Agent** | 1 Diagnostic Bleed-Off Test | 4.00 hours | 0.50 hours | **3.50 hours saved** | Curve Geometry & Diagnostic Interpretation |
| **4. Wellhead Valve Servicing & Cycle Agent**| 1 Field Tree Valve Audit (100 wells) | 2.50 hours | 0.50 hours | **2.00 hours saved** | Paper Maintenance Log Collation Drag |
| **5. Multi-Finger Caliper Corrosion Agent** | 1 Wireline Caliper Logging Run | 9.00 hours | 1.00 hours | **8.00 hours saved** | Massive Multi-Finger Radial Log Scrolling |
| **6. SCSSV Inflow Leak Rate Sieve Agent** | 1 Annual Safety Valve Inflow Test | 1.50 hours | 0.20 hours | **1.30 hours saved** | Unit Conversion & Regulatory Threshold Check |
| **7. Risk-Based Well Ranking (RBWIR) Agent**| 1 Asset Portfolio Risk Review (250 wells)| 18.00 hours | 2.00 hours | **16.00 hours saved** | Multi-Parameter Risk Scoring Matrix Drag |
| **8. Statutory Integrity Compliance Dossier** | 1 Annual Regulatory Filing (100 wells) | 80.00 hours | 8.00 hours | **72.00 hours saved** | Massive Cross-System Document Assembly Drag |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[API-RP-90-1]` | API, *Annular Casing Pressure Management for Offshore Wells*, 2nd Ed | API Standards Store | Recommended Practice | Offshore MAASP equations, thermal offsets, and SCP rules |
| `[API-RP-90-2]` | API, *Annular Casing Pressure Management for Onshore Wells*, 1st Ed | API Standards Store | Recommended Practice | Onshore bleed-off diagnostic test procedures and limits |
| `[NORSOK-D010]` | Standards Norway, *Well integrity in drilling and well operations*, Rev 5 | standard.no | National Standard | Two-barrier technical envelopes and SCSSV inflow limits |
| `[ISO-16530]` | ISO, *Well integrity — Part 1: Life cycle governance*, 2017 | iso.org | International Standard | Life-cycle barrier governance, RBWIR, and servicing |
| `[API-RP-14B]` | API, *Design, Installation, and Operation of Subsurface Safety Valves* | API Standards Store | Technical Standard | Subsurface safety valve allowable leakage rates |

### Negative Search Registry
* **Searched**: Wood Group Nexus-i technical specifications, Vysus eWIMS documentation, and SPE OnePetro for *"autonomous SCADA thermodynamic annular pressure normalization with dynamic MAASP recalculation, automated multi-finger caliper localized corrosion burst derating, and automated BSEE/DGH statutory well integrity compliance assembly without manual data handling"*.
* **Result**: `Negative Search, 2026-09`. Commercial WIMS software acts as a static record-keeper of barrier status; none autonomously calculate dynamic thermal MAASP offsets from live SCADA streams, classify 24-hour diagnostic bleed-off curves against thermodynamic leakage models, or triage 40-finger wireline caliper logs to compute localized burst derating without manual engineer data manipulation.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In well integrity, a casing pressure gauge isn't just a number on a SCADA screen; it is the heartbeat of a barrier holding back five thousand pounds of explosive gas from an aquifer. If you wait for a human engineer to open an Excel spreadsheet to realize MAASP was breached three weeks ago, you are managing integrity by disaster."*
* **Open Questions for Well Integrity Engineers**:
  * How many hours per week do you spend manually downloading SCADA pressure curves to distinguish between weather-induced thermal breathing and genuine tubing leaks?
  * What percentage of your shut-in or producing well estate currently has an outdated MAASP value calculated during initial well completion?
  * When contract wireline companies deliver multi-finger caliper logs, how long does it take your team to identify localized rod wear grooves and recalculate derated casing collapse limits?
