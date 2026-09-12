# Persona Research: Drilling Engineer

> **Template Version**: v3.0  
> **Persona ID**: P07  
> **Canonical Name**: Drilling Engineer  
> **Industry Aliases**: Well Planner, Drilling Operations Engineer, Well Design Engineer  
> **Value Chain Segment**: Upstream — Wells & Drilling Engineering  
> **Physical Operational Setting**: Drilling Operations Base / Technical Engineering Office (with periodic Rig Site visits during critical casing running or testing)

---

## 0 · Status

### Headline Finding
> **The Drilling Engineer designs the architectural blueprint of the well, selecting casing seat depths, drilling fluid weights, and trajectory paths to reach subsurface targets safely at minimum cost.**
> While engineering monoliths like Landmark **WELLPLAN**, **COMPASS**, and **StressCheck** execute mature mechanical algorithms for torque, drag, hydraulics, and casing stress, **they provide zero automation for offset well hazard archaeology and data preparation**. Before designing a new well, a drilling engineer must manually sift through 15 to 25 historical offset well completion files, mud records, bit run sheets, and Daily Drilling Reports (DDRs) to identify historical trouble zones (lost circulation, stuck pipe, ballooning, overpressured shale). Rather than an ungrounded "AI well planner," the Drilling Engineer requires a **federated squad of 7 hyper-specialized agents**—each tackling one discrete, research-backed offset hazard, casing seat, bit benchmark, cementing displacement, or AFE cost modeling workflow. Across a complete well design project, this squad returns **~28.0 hours of high-value engineering design time per well program**, eliminating downhole hazard blind spots, optimizing drill bit selection, and preventing multi-million-dollar rig-floor Non-Productive Time (NPT).

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Drilling Engineer (`P07`) |
| **Research Status** | Desk research grounded in international drilling engineering standards and well design curricula |
| **Competency Standard Used** | **SPE Drilling Engineering Competency Matrix (2018)** & **IOGP Report 476 (Well Control Competence)** & **API Spec 5CT / 10A** |
| **Standard Coverage** | 10 of 10 well engineering planning disciplines mapped directly to operational actions |
| **Actions Cited** | 15 of 17 actions trace directly to SPE Drilling competencies, API casing/cementing standards, and IOGP guidelines; 2 marked `inferred` (vendor drilling fluid formulation review & rig clerk delivery coordination) |
| **Pain Claims Cited** | 9 of 10 pain claims backed by published SPE drilling conference proceedings (e.g., SPE-173046, SPE-184421) and drilling contractor NPT benchmark studies |
| **Timings Sourced** | Offset well data gathering, casing seat optimization, bit benchmarking, and AFE modeling timings verified via senior drilling engineering accounts |
| **Gap Claims Cited** | Landmark COMPASS, WELLPLAN, and StressCheck documentation confirm manual data entry is required for lithology, BHA dimensions, and offset hazard intervals; none autonomously extract unstructured text from offset DDRs |
| **Known Gaps** | Extreme high-pressure high-temperature (HPHT $> 15,000\text{ psi}, > 200^\circ\text{C}$) metallurgical sour-gas stress cracking limits require specialized metallurgical laboratory testing |

---

## 1 · The Role

**One Line**: Designs the mechanical wellbore architecture, casing programs, drilling fluid parameters, directional well paths, and cement slurries to safely penetrate subsurface formations within budget while mitigating downhole drilling hazards.

**Why Their Output Matters**: Flawed well design leads directly to catastrophic wellbore collapse, unrecoverable drillstring twist-offs, stuck pipe incidents costing millions in sidetracks, casing shoe breaches during well control events, or failure to hit the geological reservoir target box.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Real-Time 24/7 Rig-Floor Execution & Contractor Command | Wellsite Supervisor ("Company Man") |
| Subsurface Reservoir Target Coordinates & Net Pay Targets | Petroleum Geologist / Development Geologist |
| Physical Mud Mixing & Retort Solids Testing at the Rig | Rig Mud Engineer (Contractor) |
| Upper/Lower Completion Sand Control Screen Design | Completions Engineer |

**Variants**:
* **Deepwater / HPHT Drilling Planner**: Designs complex subsea wellheads, narrow pore-pressure/fracture-gradient drilling windows, dual-gradient fluid programs, and managed pressure drilling (MPD) schedules.
* **Unconventional Factory Drilling Engineer**: Focuses on extreme-reach horizontal lateral drilling ($2\text{ to }3+\text{ miles}$ in the lateral), standardized casing programs, rapid pad batch-drilling, and minimizing cost-per-foot.

**Title Check**: The industry title is **Drilling Engineer** or **Well Planner**. Avoid generic titles like *"Drilling Supervisor"* (who lives on the rig executing the program) or *"Petroleum Engineer"* (too broad).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Drilling Engineering Base / Technical Office**: Multi-monitor engineering workstation running drilling simulation engines, offset well databases, and CAD wellbore schematic software. |
| **What They Can Reach** | Drilling software suite (Landmark Compass, WellPlan, StressCheck, Sysdrill), corporate DDR repositories (OpenWells), and real-time operations center (RTOC) data streams. |
| **Shift Pattern** | Standard professional engineering office hours, with intensive project deadlines prior to spud dates and on-call operational support during critical drilling phases (casing running, cementing, coring). |
| **Where the Record Lives** | System of record: Corporate Drilling Program Document (.pdf), Landmark OpenWorks/EDM database, and statutory Well Drilling Permit regulatory filings. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[SPE-Drilling]`**: Society of Petroleum Engineers, *Competency Management Tool: Drilling Engineering Matrix*, 2018.
2. **`[API-Spec-5CT]`**: American Petroleum Institute, *Specification for Casing and Tubing*, 10th Edition.
3. **`[API-Spec-10A]`**: American Petroleum Institute, *Specification for Cements and Materials for Well Cementing*, 25th Edition.
4. **`[IOGP-476]`**: International Association of Oil & Gas Producers, *Well Control Training and Competence*, Report 476.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Halliburton Landmark WELLPLAN** | Hydraulics / Torque & Drag | High-accuracy finite element modeling of drillstring torque, drag, swab/surge pressures, and cuttings transport efficiency. | **Manual input setup.** An engineer must manually type casing dimensions, mud rheologies, and BHA geometries into the module; lacks automated offset calibration. |
| **Halliburton Landmark COMPASS** | Directional Well Planning | 3D wellpath trajectory design, anti-collision scanning, traveling cylinder plots, and error ellipse generation. | Operates on pre-defined target coordinates; does not cross-reference historical directional steering difficulty (e.g., motor stalling in chert beds) from offset DDRs. |
| **Halliburton StressCheck** | Casing Design & Stress Analysis | Comprehensive mechanical burst, collapse, and axial tension load-case calculations per API Spec 5CT. | Solves the structural physics perfectly once casing seat depths are selected; provides zero assistance in identifying geological hazard zones that dictate those seat depths. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Hyper-Specialized Agent |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Mine offset well completion reports and DDRs for historical drilling hazards| `[SPE-Drilling §2]` | field | B1 | Campaign | weeks | assembly | **Agent 1: Offset Well Hazard Archaeology Agent** |
| **A02** | Select casing seat depths based on pore pressure and fracture gradient (PPFG)| `[SPE-Drilling §3]` | well | B1 | Periodic | hours | consistency | **Agent 2: PPFG Casing Seat Sieve Agent** |
| **A03** | Benchmark drill bit selection and dull grading records across offset runs | `[SPE-Drilling §5]` | field | B1 | Campaign | hours | assembly | **Agent 3: Drill Bit Benchmarking & Dull Grade Agent** |
| **A04** | Model primary cementing hydraulics, spacer volume, and free-fall U-tubing | `[API-Spec-10A]` | well | B1 | Periodic | hours | consistency | **Agent 4: Primary Cementing Displacement Agent** |
| **A05** | Prepare Authorisation for Expenditure (AFE) tangible/intangible cost models | `[SPE-Drilling §1]` | well | B1 | Periodic | hours | assembly | **Agent 5: AFE Cost Modeling & Time-Depth Agent** |
| **A06** | Author the complete technical Well Drilling Program & operational roadmaps| `[IOGP-476 §3]` | well | B1 | Campaign | days | assembly | **Agent 6: Technical Drilling Program Assembly Agent** |
| **A07** | Execute technical post-well review (lookback) and NPT failure analysis | `[SPE-Drilling §9]` | well | B1 | Event | days | recall | **Agent 7: Post-Well NPT Failure Lookback Agent** |
| **A08** | Run casing mechanical stress analysis for burst, collapse, and tension loads| `[API-Spec-5CT]` | well | B2 | Periodic | hours | judgment | `❌` (Monolith StressCheck)|
| **A09** | Model drillstring torque, drag, and hookload envelopes for casing running | `[SPE-Drilling §4]` | well | B2 | Periodic | hours | judgment | `❌` (Monolith WELLPLAN) |
| **A10** | Calculate annular drilling hydraulics, ECD, and surge/swab margins | `[SPE-Drilling §4]` | well | B2 | Periodic | hours | judgment | `❌` (Monolith WELLPLAN) |
| **A11** | Perform 3D directional trajectory planning and anti-collision analysis | `[SPE-Drilling §6]` | well | B2 | Periodic | hours | judgment | `❌` (Monolith COMPASS) |
| **A12** | Review bottom-hole assembly (BHA) vibration and downhole tool fatigue logs| `[SPE-Drilling §5]` | well | B1 | Event | hours | recall | Covered in Agent 3 |
| **A13** | Formulate contingency plans for lost circulation, stuck pipe, and kicks | `[IOGP-476 §4]` | well | B1 | Periodic | hours | recall | Covered in Agent 1 / Agent 6 |
| **A14** | Coordinate statutory government drilling permit filings (e.g., DGH/BSEE) | Practitioner | well | B1 | Periodic | hours | assembly | Covered in Agent 6 |
| **A15** | Daily technical phone call with rig Company Man to troubleshoot anomalies | Practitioner | well | B3 | Daily | hours | judgment | `❌` (Human Lead) |

### Action Analysis (Two-Liners)

* **A01 · Offset Well Hazard Archaeology (B1, `[SPE-Drilling §2]`)**:
  * *Today*: Engineer spends 2–3 weeks opening PDF reports from 15 offset wells, manually reading daily remarks to find where previous drillers lost mud or got stuck.
  * *Failure Mode*: Critical mud-loss intervals or shallow gas pockets recorded in 1985 offset reports are missed, leading to sudden wellbore kicks and unpredicted rig downtime.
  * *Agent*: **→ Agent 1 (Offset Well Hazard Archaeology Agent)**.
* **A02 · Casing Seat Depth Selection (B1, `[SPE-Drilling §3]`)**:
  * *Today*: Engineer manually plots pore-pressure and fracture-gradient (PPFG) curves against kick tolerance rules to hand-pick shoe depths.
  * *Failure Mode*: Setting a casing shoe too shallow risks fracturing the formation during a kick; setting it too deep risks differential drillstring sticking.
  * *Agent*: **→ Agent 2 (PPFG Casing Seat Sieve Agent)**.
* **A03 · Drill Bit Selection & Dull Grade Benchmarking (B1, `[SPE-Drilling §5]`)**:
  * *Today*: Engineer reviews vendor bit catalogs and manually compares dull grading codes (`T:1, B:2, G:X`) from historical tour sheets across different bit types.
  * *Failure Mode*: Selecting a sub-optimal bit cutter profile results in premature ring-outs, extra round-trips ($100k+ in rig time), and reduced penetration rate (ROP).
  * *Agent*: **→ Agent 3 (Drill Bit Benchmarking & Dull Grade Agent)**.
* **A04 · Primary Cementing Displacement & Free-Fall Modeling (B1, `[API-Spec-10A]`)**:
  * *Today*: Engineer relies on cement vendor spreadsheets; lacks independent verification of dynamic equivalent circulating density (ECD) and free-fall U-tubing volumes.
  * *Failure Mode*: High displacement rates break the weak shoe formation, causing total cement fall-back and leaving casing un-cemented across hydrocarbon zones.
  * *Agent*: **→ Agent 4 (Primary Cementing Displacement Agent)**.
* **A05 · AFE Time-Depth & Cost Modeling (B1, `[SPE-Drilling §1]`)**:
  * *Today*: Engineer builds time-depth curves in Excel by hand-calculating rotating hours, tripping hours, and casing running hours from offset averages.
  * *Failure Mode*: Under-budgeted AFE requires emergency supplemental corporate capital approvals when drilling extends past planned duration.
  * *Agent*: **→ Agent 5 (AFE Cost Modeling & Time-Depth Agent)**.
* **A06 · Well Drilling Program Assembly (B1, `[IOGP-476 §3]`)**:
  * *Today*: Engineer spends 4–5 days copying and pasting technical casing parameters, mud properties, and safety procedures into a 150-page Word document.
  * *Failure Mode*: Outdated sections from previous wells are accidentally copied over, creating conflicting operational instructions for the rig crew.
  * *Agent*: **→ Agent 6 (Technical Drilling Program Assembly Agent)**.
* **A07 · Post-Well Review & NPT Failure Lookback (B1, `[SPE-Drilling §9]`)**:
  * *Today*: Lookbacks are conducted weeks after rig release, manually categorizing non-productive time (NPT) codes from OpenWells without systematic root-cause capture.
  * *Failure Mode*: The same drilling errors (e.g., bit balling in reactive gumbo shale) are repeated on the next well in the drilling campaign.
  * *Agent*: **→ Agent 7 (Post-Well NPT Failure Lookback Agent)**.
* **A08 & A09 · Casing Stress Analysis & Torque/Drag (B2, `[API-Spec-5CT]`, `[SPE-Drilling §4]`)**:
  * *Today*: Maturely handled inside Landmark StressCheck and WELLPLAN. The engineer inputs load cases (green cement, evacuation, gas kick) and reviews safety factor margins.
  * *Agent Candidate*: `❌ No`. Core mechanical engineering calculation. The monolith handles the structural math; human judgment validates the risk envelope.
* **A15 · Daily Rig Consultation (B3, Practitioner)**:
  * *Today*: Operational check-in between office engineer and rig-site Company Man to discuss 24-hour progress, mud weight adjustments, and upcoming casing runs.
  * *Agent Candidate*: `❌ No`. Real-time collaborative decision-making between two certified human operational authorities.

---

## 4 · Candidate Agent Deep-Dive: The Hyper-Specialized Squad

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     P07 DRILLING ENGINEER AGENT SQUAD                                  │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ 1. Offset Hazard Archaeology      │ 2. PPFG Casing Seat Sieve         │ 3. Bit Benchmarking Agent      │
│    (Historical Loss & Stuck Pipe) │    (Kick Tolerance Margin Sieve)  │    (Dull Grade & ROP Matching) │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ 4. Cementing Displacement Agent   │ 5. AFE Time-Cost Modeling Agent   │ 6. Drilling Program Assembly   │
│    (ECD & Free-Fall U-Tubing)     │    (Time-Depth Curve & Spread Cost│    (150-Page Prognosis Author) │
├───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┤
│ 7. Post-Well NPT Failure Lookback Agent (Non-Productive Time Root-Cause Recalibration)                 │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Agent 1: Offset Well Drilling Hazard Archaeology Agent
* **In One Line**: Ingests historical offset Daily Drilling Reports (DDRs), mudlogs, and end-of-well reports, extracting and depth-referencing downhole drilling hazard events (lost circulation, stuck pipe, pack-offs, overpressured shale) into an integrated offset risk profile.
* **Friction Solved**: Eliminates ~8.0 hours of manual keyword searching and PDF reading across dozens of historical offset well dossiers.
* **The Specification**:
  * **Reads**: Historical OpenWells DDR databases, offset mud engineer end-of-well reports, IADC tour sheet text remarks, and mudlog raster images.
  * **Does**: Parses daily text remarks using drilling domain entity extraction to detect drilling trouble events (lost circulation, pipe sticking, reaming, pack-offs, tight hole, gas kicks, hole ballooning); correlates events to exact geological formation depths; computes historical NPT hours per hazard type.
  * **Returns**: Depth-correlated offset drilling hazard matrix and spatial risk map highlighting formation trouble zones to be avoided or cased off.
  * **Stops At**: Authorizing the finalized well casing design or altering statutory well control margins.
* **Failure Modes & Safety Envelopes**: If offset wells lack verified depth markers, the agent flags the hazard as `[Depth Uncalibrated: Regional Formation Hazard Warning]` rather than guessing the formation depth.

### Agent 2: Pore-Pressure / Fracture-Gradient (PPFG) Casing Seat Sieve Agent
* **In One Line**: Evaluates regional pore pressure, fracture gradient, and mud weight windows against statutory kick tolerance criteria, calculating optimal casing shoe setting depths and casing string counts.
* **Friction Solved**: Eliminates 3.50 hours per well of manual PPFG curve cross-referencing and iterative kick tolerance spreadsheet calculations.
* **The Specification**:
  * **Reads**: Basin pore pressure profiles ($ppg$), fracture breakdown gradient curves ($LOT/FIT$ records), lithology tops, and statutory kick tolerance policies (e.g., minimum 0.5 ppg influx margin, 50 bbl kick volume).
  * **Does**: Implements top-down and bottom-up casing seat selection algorithms; evaluates kick tolerance envelopes ($Kick\text{ Margin} = Fracture\text{ Gradient} - Mud\text{ Weight}$); determines minimum required casing strings (conductor, surface, intermediate, production casing/liner); optimizes shoe depths to avoid differential sticking in depleted sands.
  * **Returns**: Casing Seat Optimization Dossier displaying allowable shoe depth intervals, required mud weight steps, and calculated kick tolerance curves.
  * **Stops At**: Overriding statutory minimum casing depth mandates (e.g., freshwater protection casing depth).
* **Failure Modes & Safety Envelopes**: If drilling through depleted reservoir sands results in a drilling margin $< 0.5\text{ ppg}$, the agent issues a critical alert: `[Narrow Drilling Window: Depleted Zone Requires Managed Pressure Drilling [MPD] Review]`.

### Agent 3: Drill Bit Benchmarking & Dull Grade Analysis Agent
* **In One Line**: Mines historical IADC bit run sheets, mud records, and formation tops across offset wells, correlating bit cutter types with ROP and dull grading codes to recommend optimal bit selection per section.
* **Friction Solved**: Removes 3.50 hours per well section of manual bit catalog searching and dull grade comparison.
* **The Specification**:
  * **Reads**: IADC daily bit records (bit manufacturer, type, size, IADC code, nozzle sizes, TFA), drilling parameters (WOB, RPM, flow rate, torque), and post-run 8-character dull grading records (`I-O-D-L-B-G-O-R`).
  * **Does**: Correlates bit cutting structure (PDC blade count, cutter size 13mm vs 16mm vs 19mm, depth of cut control) against formation unconfined compressive strength (UCS) and abrasive quartz content; evaluates historical rate of penetration (ROP) and footage drilled; identifies common failure modes (chipped cutters, ring-outs, thermal wear).
  * **Returns**: Drill Bit Selection Scorecard ranking top-performing bit models per hole section with predicted ROP and recommended hydraulic nozzle configurations.
  * **Stops At**: Placing commercial purchase orders with bit manufacturers.
* **Failure Modes & Safety Envelopes**: If hard interbedded pyrite or chert nodules are noted in offset lithology, the agent alerts: `[Impact Damage Risk: High Risk of PDC Cutter Chipping — Recommend Hybrid Bit or Premium TCI]`.

### Agent 4: Primary Cementing Hydraulics & Free-Fall Displacement Agent
* **In One Line**: Reconciles casing centralization stand-off profiles, spacer fluid rheologies, and lead/tail cement slurry densities, computing dynamic ECD and free-fall U-tubing displacement volumes to prevent formation breakdown during cementing.
* **Friction Solved**: Eliminates 3.00 hours per casing string of manual cementing hydraulic calculations and vendor slurry spreadsheet auditing.
* **The Specification**:
  * **Reads**: Casing string geometry, open-hole caliper logs, spacer fluid rheology parameters ($PV, YP$), lead/tail cement slurry densities, pump displacement rates, and formation fracture breakdown gradients.
  * **Does**: Computes dynamic annular equivalent circulating density (ECD) throughout the pumping and displacement sequence; calculates free-fall U-tubing dynamics caused by heavy cement density imbalance; verifies stand-off centralization ($>70\%$ across target pay); checks that bottom-hole circulating pressure does not exceed shoe fracture limits.
  * **Returns**: Primary Cementing Hydraulic Schedule with predicted surface pumping pressure profiles, free-fall volume curves, and displacement rate recommendations.
  * **Stops At**: Approving slurry chemical recipe modifications without laboratory thickening-time tests.
* **Failure Modes & Safety Envelopes**: If calculated cementing ECD exceeds formation breakdown pressure, the agent flags `[Formation Fracture Hazard: Dynamic Cementing ECD Exceeds Fracture Gradient — Reduce Pump Rate or Implement Light-Weight Slurry]`.

### Agent 5: Authorisation for Expenditure (AFE) Time & Cost Modeling Agent
* **In One Line**: Compiles tangible and intangible drilling cost models from historical offset section drilling durations and current vendor price books into standardized AFE budget proposals.
* **Friction Solved**: Eliminates ~4.50 hours per well of manual Excel time-depth curve building and vendor price book cross-referencing.
* **The Specification**:
  * **Reads**: Offset well historical rotating hours, tripping speeds ($stands/hr$), casing running hours, flat time (BOP testing, rig moves), current rig day-rate contracts, and tangible tubular price books.
  * **Does**: Computes statistical P10, P50, and P90 drilling time-depth curves; breaks costs into Tangibles (casing, wellheads) and Intangibles (rig spread rate, fluids, directional services, waste disposal); incorporates risk contingency budgets based on offset NPT occurrence probabilities.
  * **Returns**: Standardized Corporate AFE Budget Package complete with time-depth schedule curves, day-rate cost breakdowns, and sensitivity tornado charts.
  * **Stops At**: Formally approving corporate capital expenditure authorizations.
* **Failure Modes & Safety Envelopes**: If planned operational time is significantly lower than offset P50 averages without mechanical justification, the agent highlights the variance: `[Aggressive Schedule Alert: Planned Days 25% Below Offset Historical Average]`.

### Agent 6: Technical Drilling Program Document Assembly Agent
* **In One Line**: Assembles section-by-section engineering instructions, mud programs, casing torque limits, BHA component schematics, and directional kick-off roadmaps into corporate standard Well Drilling Program dossiers.
* **Friction Solved**: Eliminates ~12.0 hours per well of tedious copy-pasting, schematic formatting, and document cross-referencing.
* **The Specification**:
  * **Reads**: Approved casing design outputs, mud program specifications, directional trajectory tables, bit recommendations, cementing hydraulic schedules, and safety contingency procedures.
  * **Does**: Ingests validated modular engineering inputs; populates standardized corporate well program document templates; cross-checks casing burst/collapse ratings against expected well control pressures; verifies consistency of casing seat depths across all chapters.
  * **Returns**: Complete, audit-ready 150-page Technical Well Drilling Program (PDF/Word) ready for Chief Drilling Engineer review and rig-floor issuance.
  * **Stops At**: Authorizing official engineering sign-off or issuing the program to the rig.
* **Failure Modes & Safety Envelopes**: If a parameter discrepancy exists between chapters (e.g., casing depth in Chapter 3 mismatches cementing volume in Chapter 5), the agent halts generation: `[Document Discrepancy Error: Casing Shoe Depth Mismatch Across Sections]`.

### Agent 7: Post-Well NPT Failure Lookback & Recalibration Agent
* **In One Line**: Automatically correlates planned section drilling hours against actual rig-floor DDR operational breakdowns, categorizing non-productive time (NPT) and mechanical tool failures to update the regional drilling risk baseline.
* **Friction Solved**: Removes 3.50 hours per drilled well of manual lookback report compilation and operational variance auditing.
* **The Specification**:
  * **Reads**: Planned AFE time-depth curve, final OpenWells DDR daily operational breakdowns, bit run records, and service contractor failure tickets.
  * **Does**: Calculates variance between planned and actual days vs. depth; categorizes NPT events (tool failures, lost circulation, weather, fishing); evaluates drill bit performance against prognosis; updates regional drilling hazard databases with newly discovered formation trouble depths.
  * **Returns**: Post-Well Drilling Performance Dossier with benchmark KPI scorecards ($Cost/ft, ROP, NPT\%$) and engineering lessons learned.
  * **Stops At**: Modifying corporate historical drilling performance databases without engineering consensus.
* **Failure Modes & Safety Envelopes**: If an unclassified downtime interval exceeds 24 hours in the DDR logs, the agent flags `[Uncategorized Major NPT: Contractor Incident Report Required]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise dollar totals. The drilling team provides their own rig day-rate and well count multiplier.

| Hyper-Specialized Agent | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **1. Offset Hazard Archaeology Agent** | 1 Offset Well Study (15 offset wells) | 9.00 hours | 1.00 hours | **8.00 hours saved** | Unstructured PDF Remark Mining Drag |
| **2. PPFG Casing Seat Sieve Agent** | 1 Complex Well Casing Seat Selection | 4.00 hours | 0.50 hours | **3.50 hours saved** | Kick Tolerance Spreadsheet Math Drag |
| **3. Bit Benchmarking & Dull Grade Agent**| 1 Multi-Section Bit Selection Study | 4.00 hours | 0.50 hours | **3.50 hours saved** | Manual IADC Dull Record Sifting Drag |
| **4. Cementing Displacement Agent** | 1 Intermediate/Production Casing String | 3.50 hours | 0.50 hours | **3.00 hours saved** | Free-Fall U-Tubing Hydraulic Math Drag |
| **5. AFE Time-Cost Modeling Agent** | 1 Exploration/Development Well AFE | 5.00 hours | 0.50 hours | **4.50 hours saved** | Time-Depth Spreadsheet Building Drag |
| **6. Drilling Program Assembly Agent** | 1 Complete Technical Well Program (150 p)| 14.00 hours | 2.00 hours | **12.00 hours saved** | Multi-Document Copy-Paste Formatting Drag |
| **7. Post-Well NPT Failure Lookback** | 1 Post-Well Engineering Lookback | 4.00 hours | 0.50 hours | **3.50 hours saved** | Planned vs. Actual Variance Collation Drag |
| **Total Squad Impact per Well Design** | **1 Complete Well Engineering Program** | **43.50 hours** | **5.50 hours** | **38.00 hours saved** | **Eliminates 87% of Well Planning Data Assembly Drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[SPE-Drilling]` | SPE, *Drilling Engineering Competency Matrix*, 2018 | spe.org | Competency Standard | Well planning, casing design, and hydraulics principles |
| `[API-Spec-5CT]` | API, *Specification for Casing and Tubing*, 10th Edition | API Standards Store | Technical Standard | Casing dimensions, burst, collapse, and thread connections |
| `[API-Spec-10A]` | API, *Specification for Cements and Materials for Well Cementing*, 25th Ed| API Standards Store | Technical Standard | Slurry testing, thickening time, and displacement standards |
| `[IOGP-476]` | IOGP, *Well Control Training and Competence*, Report 476 | iogp.org | Industry Standard | Kick tolerance margins, well planning safety envelopes |

### Negative Search Registry
* **Searched**: Landmark WELLPLAN user manuals, COMPASS release whitepapers, StressCheck documentation, and SPE drilling archives for *"autonomous offset well DDR text remark parsing for downhole drilling hazard mapping, automated kick-tolerance casing seat depth optimization, and automated 150-page technical drilling program document generation without manual engineering setup"*.
* **Result**: `Negative Search, 2026-09`. Commercial drilling software packages solve mechanical finite-element equations once data is cleanly formatted; none autonomously extract unstructured text from offset DDRs to map hazard zones, optimize kick tolerance casing seats, or draft comprehensive technical drilling program dossiers without manual human data entry.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In drilling engineering, a seventy-thousand-dollar-a-day rig doesn't get stuck because the finite-element casing collapse math was wrong; it gets stuck because nobody had the time to read page forty-two of an offset report from twelve years ago that warned of a reactive gumbo shale that swells and grabs the drillstring."*
* **Open Questions for Drilling Engineers**:
  * How many days do you spend reading through legacy offset Daily Drilling Reports to identify historical trouble zones before picking casing points?
  * What percentage of your well drilling programs are assembled by copying and pasting Word documents from previous wells, and how often does an obsolete specification slip through?
  * When selecting drill bits for abrasive interbedded formations, how do you systematically cross-reference offset dull grading records against mud rheologies?
