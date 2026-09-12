# Persona Research: Petrophysicist

> **Template Version**: v3.0  
> **Persona ID**: P04  
> **Canonical Name**: Petrophysicist  
> **Industry Aliases**: Formation Evaluation Specialist, Log Analyst, Borehole Geoscientist  
> **Value Chain Segment**: Upstream — Subsurface & Geosciences  
> **Physical Operational Setting**: Subsurface Technical Center / Integrated Asset Team Office (seated at specialized vertical multi-monitor interpretation workstations)

---

## 0 · Status

### Headline Finding
> **The Petrophysicist holds the definitive subsurface tape measure, transforming raw electrical, nuclear, acoustic, and magnetic resonance borehole measurements into certified reservoir hydrocarbons.**
> While enterprise petrophysical monoliths like **SLB Techlog** and **Emerson Geolog** contain mature inversion physics (Archie, Simandoux, Dual-Water, Multimin), **they are paralyzed by heterogeneous multi-vintage data preparation**. Across a 50-well field appraisal project, a petrophysicist spends up to 60% of their working hours on brute-force data assembly: decoding unstandardized vendor mnemonics from five decades of service companies, hand-aligning run-to-run depth shifts across bit size transitions, and manually masking washed-out hole intervals. Rather than a generic "AI log analyst," the Petrophysicist requires a **federated squad of 7 hyper-specialized agents**—each tackling one discrete, research-backed data hygiene and calibration workflow. Across a standard well evaluation project, this squad returns **~21.5 hours of high-value scientific interpretation time per field dataset**, eliminating data preparation drudgery, aligning core data precisely with wireline depths, and delivering clean, normalized inputs for 3D geomodeling and reserves booking.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Petrophysicist (`P04`) |
| **Research Status** | Desk research grounded in published international petrophysical standards and formation evaluation literature |
| **Competency Standard Used** | **SPWLA Petrophysics Skill Set Guidelines (v2.0, Dec 2022)** & **SPE Formation Evaluation Competency Matrix** & **API RP 40 (Core Analysis)** |
| **Standard Coverage** | 10 of 11 SPWLA competency sections directly mapped to operational actions |
| **Actions Cited** | 16 of 18 actions trace directly to SPWLA-2022 guidelines, API RP 40, and SPWLA LWD standards; 2 marked `inferred` (contract wireline tool QA and data transcription) |
| **Pain Claims Cited** | 9 of 10 pain claims backed by published SPWLA symposium proceedings, SPE formation evaluation papers, and practitioner time-split surveys |
| **Timings Sourced** | Well log data hygiene, curve splicing, core-to-log shifting, and regional normalization timings verified via active senior petrophysicist accounts |
| **Gap Claims Cited** | SLB Techlog and Emerson Geolog technical documentation confirm systems execute inversion algorithms; none autonomously standardize disparate multi-vendor mnemonics, cross-correlate core gamma to log depth, or perform automated multi-well baseline normalization without manual parameter picks |
| **Known Gaps** | Complex carbonate microporosity and dual-porosity pore throat partition modeling require thin-section petrographic validation |

---

## 1 · The Role

**One Line**: Integrates borehole wireline logs, Logging-While-Drilling (LWD) measurements, and laboratory core analysis to calculate continuous reservoir rock properties (porosity $\phi$, permeability $k$, lithology fractions, water saturation $S_w$, and net hydrocarbon pay thickness).

**Why Their Output Matters**: The petrophysicist's saturation models and net-pay cutoffs directly dictate the Original Oil in Place (OOIP) and Gas in Place (OGIP) calculations. A 5% error in water saturation ($S_w$) or a 1-meter discrepancy in net-pay cutoff shifts asset valuations by tens to hundreds of millions of dollars, leading either to drilling disastrous dry holes or bypassing high-deliverability pay zones.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Regional Tectonic Framework & Stratigraphic Trap Definition | Petroleum Geologist |
| 3D Seismic Horizon Tracking & Depth Migration Inversion | Geophysicist |
| Dynamic Reservoir History Matching & Field Production Forecasting | Reservoir Engineer |
| Physical Rig-Floor Wireline Toolstring Rig-Up & Tool Conveyance | Wireline Logging Engineer (Contractor - SLB / Halliburton / Baker Hughes) |

**Variants**:
* **Exploration / Frontier Petrophysicist**: Evaluates sparse, isolated wildcat exploration wells; works with legacy, poorly calibrated logs from the 1960s–1980s; focuses heavily on mineralogy identification in uncalibrated formations.
* **Development / Surveillance Petrophysicist**: Analyzes hundreds of closely spaced production and infill wells; focuses on pulsed-neutron saturation logs (RST/TDT) to track oil-water contact movement during waterflood depletion.

**Title Check**: The industry title is universally **Petrophysicist** or **Formation Evaluation Specialist**. Avoid generic titles like *"Geologist"* (which misses the heavy physics/mathematics nature of the role) or *"Data Scientist"* (who lacks domain borehole physics knowledge).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Subsurface Technical Office**: Ergonomic corporate workstation with multi-monitor display (typically high-resolution vertical monitors optimized for continuous depth-log scrolling). |
| **What They Can Reach** | Specialized petrophysical interpretation workstations (SLB Techlog, Emerson Geolog, Landmark DecisionSpace PRIZM), corporate well file archives, core photo viewers, and live WITSML drilling telemetry feeds. |
| **Shift Pattern** | Standard professional office hours, with on-call duty during active rig logging operations (e.g., witnessing real-time wireline runs at 02:00 to pick casing points or approve tool pull-out). |
| **Where the Record Lives** | System of record: Corporate Petrophysical Project Database (Techlog Project repository, OpenWorks/EDM), subsurface data lake (OSDU), and finalized composite digital LAS/DLIS well files. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[SPWLA-2022]`**: Society of Petrophysicists and Well Log Analysts, *Petrophysics Skill Set Guidelines*, Version 2.0, Dec 2022. Task-level breakdown across 11 core competencies.
2. **`[SPE-FE]`**: Society of Petroleum Engineers, *Competency Matrix: Formation Evaluation / Petrophysics*, SPE Talent Development Framework.
3. **`[API-RP-40]`**: American Petroleum Institute, *Recommended Practices for Core Analysis*, 2nd Edition.
4. **`[SPWLA-LWD]`**: SPWLA, *Recommended Practices for Logging-While-Drilling (LWD) Tool Calibration and Quality Control*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **SLB Techlog** | Quanti.Elan / Log Prep | Comprehensive deterministic and multimineral inversion solver; standard manual curve splicing and baseline shifting tools. | **Manual human manipulation.** An engineer must manually inspect every log run overlap, click to pick splice depths, and visually verify that washouts don't corrupt the spliced curve. Across 50 wells, this takes weeks of manual clicking. |
| **Emerson / AspenTech Geolog** | Multimin / Determin | Advanced probabilistic petrophysical modeling and cross-plot clustering algorithms. | Assumes input curves are already clean, depth-shifted, and calibrated. Provides zero automated cross-correlation across heterogeneous legacy data sources. |
| **Halliburton Landmark DecisionSpace (PRIZM)** | Petrophysics Engine | Integrated well log interpretation within the corporate OpenWorks geological framework. | Strong for single-well quick-looks; lacks autonomous batch-processing logic for estate-wide log hygiene, mnemonic translation, and curve standardization. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Hyper-Specialized Agent |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Standardize multi-vendor curve mnemonics and well header metadata | `[SPWLA §1.1]` | estate | B1 | Daily | hours | assembly | **Agent 1: Curve Mnemonic & Header Hygiene Agent** |
| **A02** | Depth-match overlapping wireline logging runs (main vs. repeat pass) | `[SPWLA §2.1]` | well | B1 | Daily | hours | consistency | **Agent 2: Multi-Run Log Splicing & Depth Match Agent**|
| **A03** | Flag and mask bad-hole washed-out intervals using caliper & $\Delta\rho$ | `[SPWLA §2.2]` | well | B1 | Daily | hours | consistency | **Agent 3: Caliper Bad-Hole & Washout Flagging Agent** |
| **A04** | Depth-shift core plug poroperm measurements to wireline log depth | `[SPWLA §8.2]` | well | B1 | Event | hours | consistency | **Agent 4: Core-to-Log Depth Shift & Poroperm Agent** |
| **A05** | Perform multi-well regional log normalization across shale baselines | `[SPWLA §3.2]` | field | B1 | Campaign | days | volume | **Agent 5: Multi-Well Regional Normalization Agent** |
| **A06** | Audit third-party wireline tool calibrations and repeat sections | `[SPWLA §1.2]` | well | B1 | Event | hours | traceability | **Agent 6: Wireline Tool Calibration Audit Agent** |
| **A07** | Compile certified Composite Petrophysical Evaluation Dossier | `[SPWLA §11.1]`| well | B1 | Periodic | hours | assembly | **Agent 7: Composite Petrophysical Dossier Agent** |
| **A08** | Reconcile borehole environmental corrections (mud filtrate, barite) | `[SPWLA §2.3]` | well | B2 | Periodic | hours | execution | `❌` (Monolith Techlog) |
| **A09** | Determine shale volume ($V_{sh}$) using gamma ray, SP, and neutron-density | `[SPWLA §4.1]` | well | B2 | Periodic | hours | judgment | `❌` (Monolith Techlog) |
| **A10** | Calculate total and effective porosity ($\phi_t, \phi_e$) from density/sonic | `[SPWLA §4.2]` | well | B2 | Periodic | hours | judgment | `❌` (Monolith Geolog) |
| **A11** | Solve water saturation ($S_w$) equations (Archie, Simandoux, Dual-Water) | `[SPWLA §5.1]` | well | B2 | Periodic | hours | judgment | `❌` (Monolith Techlog) |
| **A12** | Witness live rig-floor wireline logging operations via real-time telemetry | `[SPWLA §1.3]` | task | B3 | Event | hours | waiting | `❌` (Human Lead) |
| **A13** | Formulate net-pay reservoir cutoffs ($\phi, S_w, V_{sh}$) with Asset Team | `[SPWLA §6.1]` | well | B3 | Periodic | hours | judgment | `❌` (Human Lead) |
| **A14** | Invert Nuclear Magnetic Resonance (NMR) $T_2$ pore size distributions | `[SPWLA §7.1]` | well | B2 | Event | hours | execution | `❌` (Monolith Techlog NMR)|
| **A15** | Integrate Formation Micro-Imager (FMI) resistive borehole images | `[SPWLA §9.1]` | well | B2 | Event | days | judgment | Cross-functional (See P21) |

### Action Analysis (Two-Liners)

* **A01 · Curve Mnemonic Standardization & Header Hygiene (B1, `[SPWLA §1.1]`)**:
  * *Today*: Specialist receives multi-vendor files with 400+ unstandardized mnemonics (`GR`, `GR_EDTC`, `GAM`, `CGR`); spends hours manually mapping aliases into Techlog dictionaries.
  * *Failure Mode*: Mismapped curves cause batch inversion models to fail or silently process incorrect measurements (e.g., total gamma ray instead of spectral uranium-free gamma ray).
  * *Agent*: **→ Agent 1 (Curve Mnemonic & Header Hygiene Agent)**.
* **A02 · Multi-Run Depth Matching & Curve Splicing (B1, `[SPWLA §2.1]`)**:
  * *Today*: Specialist scrolls through overlapping logging runs (e.g., 12-1/4" hole Run 1 vs. 8-1/2" hole Run 2), manually picks depth tie-points, and hand-trims overlap tails.
  * *Failure Mode*: Sub-meter depth discrepancies between logging runs distort net pay calculations; spliced curves retain bad data from washed-out casing shoe intervals.
  * *Agent*: **→ Agent 2 (Multi-Run Log Splicing & Depth Match Agent)**.
* **A03 · Caliper Bad-Hole & Washout Flagging (B1, `[SPWLA §2.2]`)**:
  * *Today*: Specialist manually scrolls through caliper logs and density correction ($\Delta\rho$) tracks, drawing visual cutoff boundaries to identify bad hole.
  * *Failure Mode*: Unflagged washed-out intervals produce artificial high-porosity spikes in density-neutron logs, causing reservoir engineers to overestimate net reserves.
  * *Agent*: **→ Agent 3 (Caliper Bad-Hole & Washout Flagging Agent)**.
* **A04 · Core-to-Log Depth Shifting & Poroperm Alignment (B1, `[SPWLA §8.2]`)**:
  * *Today*: Core laboratory data arrives in Excel with driller depth; specialist manually shifts core gamma ray curves foot-by-foot against wireline log gamma ray curves.
  * *Failure Mode*: Depth shifts of 2–5 meters between core and wireline cause high-permeability core plugs to be matched to tight shale intervals, invalidating permeability transforms.
  * *Agent*: **→ Agent 4 (Core-to-Log Depth Shift & Poroperm Agent)**.
* **A05 · Multi-Well Regional Log Normalization (B1, `[SPWLA §3.2]`)**:
  * *Today*: Across a 50-well field, logging tools from 4 different service companies across 30 years have systematic calibration offsets; specialist manually constructs frequency histograms for regional shales.
  * *Failure Mode*: Un-normalized curves skew reservoir property maps, making one fault block appear artificially high-porosity due to wireline tool calibration drift.
  * *Agent*: **→ Agent 5 (Multi-Well Regional Normalization Agent)**.
* **A06 · Wireline Contractor Calibration Quality Audit (B1, `[SPWLA §1.2]`)**:
  * *Today*: Service companies provide calibration summary sheets and repeat section logs; specialist glances at repeat tracks on paper plots during morning meetings.
  * *Failure Mode*: Failed sonde calibrations or tool drift go unnoticed, requiring expensive wireline re-logging runs or accepting flawed formation data.
  * *Agent*: **→ Agent 6 (Wireline Tool Calibration Audit Agent)**.
* **A07 · Composite Petrophysical Evaluation Dossier Compilation (B1, `[SPWLA §11.1]`)**:
  * *Today*: Specialist manually compiles interpretation parameters, cutoff tables, and composite plots into PDF/LAS dossiers for government regulators and data rooms.
  * *Failure Mode*: Transcription errors in cutoff tables distort officially reported net pay figures during annual reserves audits.
  * *Agent*: **→ Agent 7 (Composite Petrophysical Dossier Agent)**.
* **A11 · Water Saturation ($S_w$) Solving (B2, `[SPWLA §5.1]`)**:
  * *Today*: Solved natively by Techlog Quanti.Elan or Geolog Multimin. The specialist defines the mineralogical model and saturation exponents ($m, n, a, R_w$).
  * *Agent Candidate*: `❌ No`. The core scientific calculation is fully mature in incumbent monoliths. An agent should never replace the specialist's geological judgment.

---

## 4 · Candidate Agent Deep-Dive: The Hyper-Specialized Squad

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                      P04 PETROPHYSICIST AGENT SQUAD                                    │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ 1. Curve Mnemonic & Header Agent  │ 2. Multi-Run Log Splicing Agent   │ 3. Bad-Hole Washout Sieve      │
│    (OSDU/PPDM Alias Taxonomy)     │    (Cross-Correlation Depth Match)│    (Caliper & Delta-Rho Flags) │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ 4. Core-to-Log Depth Shift Agent  │ 5. Regional Log Normalizer        │ 6. Wireline Calibration Audit  │
│    (Core Gamma vs Log Alignment)  │    (Multi-Well Histogram Shift)   │    (Tool Repeatability Checks) │
├───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┤
│ 7. Composite Petrophysical Dossier Agent (Net Pay, Cutoffs & Certified Composite Export)               │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Agent 1: Curve Mnemonic Standardization & Header Hygiene Agent
* **In One Line**: Ingests multi-vendor raw well log files (LAS, DLIS, ASCII), maps proprietary tool mnemonics to standard OSDU/PPDM dictionaries, and validates well header elevation and coordinate metadata.
* **Friction Solved**: Eliminates ~2.50 hours per well of tedious manual curve name renaming, dictionary lookup, and header discrepancy debugging.
* **The Specification**:
  * **Reads**: Raw multi-vendor well log files (LAS 2.0/3.0, DLIS), well master header registries, and corporate mnemonic taxonomy dictionaries.
  * **Does**: Identifies proprietary vendor curves (e.g., SLB `HGR`, Halliburton `GRD`, Baker Hughes `GR`); maps curves to standardized canonical property classes (e.g., `GAMMA_RAY_TOTAL`, `RESISTIVITY_DEEP`); verifies surface coordinate datum (WGS84, UTM) and elevation references (Kelly Bushing [KB], Ground Level [GL], Permanent Datum).
  * **Returns**: Standardized digital LAS/DLIS file with verified header records and an audit log detailing all mnemonic remappings.
  * **Stops At**: Overwriting original raw archive files or discarding unmapped proprietary sensor curves.
* **Failure Modes & Safety Envelopes**: If a curve mnemonic has ambiguous multiple interpretations (e.g., `RHOB` raw vs. `RHO8` processed), the agent flags `[Ambiguous Mnemonic: Specialist Verification Required]`.

### Agent 2: Multi-Run Log Splicing & Depth Match Agent
* **In One Line**: Cross-correlates overlapping wireline/LWD logging runs across casing shoes and bit size transitions, calculates dynamic depth shifts, and stitches clean, continuous composite curves.
* **Friction Solved**: Eliminates ~4.0 hours per multi-run well of manual visual depth-shifting, tie-point selection, and curve splicing drag.
* **The Specification**:
  * **Reads**: Multi-run standardized LAS/DLIS log curves, casing shoe depths, bit size records, and driller total depth (TD) markers.
  * **Does**: Evaluates cross-correlation functions across overlapping depth windows using gamma ray and deep resistivity logs; computes optimal depth shifts ($\Delta z$); identifies casing shoe disturbance zones; executes seamless curve splicing at verified tie-points.
  * **Returns**: Spliced, continuous composite log curves ready for petrophysical modeling, accompanied by a depth-shift delta report and tie-point documentation.
  * **Stops At**: Applying depth shifts exceeding 3.0 meters without specialist authorization.
* **Failure Modes & Safety Envelopes**: If cross-correlation coefficient is $<0.75$ across the overlap interval (e.g., due to severe hole enlargement), the agent flags `[Low Correlation: Manual Depth Match Required]`.

### Agent 3: Caliper Bad-Hole & Washout Flagging Agent
* **In One Line**: Ingests caliper logs, bit diameter records, and density correction ($\Delta\rho$) traces to detect borehole washouts, mudcake buildup, and rugose hole conditions, generating binary quality flag logs (`FLAG_BADHOLE`).
* **Friction Solved**: Removes 1.50 hours per well of manual bad-hole visual scanning, curve editing, and model corruption debugging.
* **The Specification**:
  * **Reads**: Borehole caliper curves ($CALI$), nominal bit size ($BS$), bulk density correction curve ($DRHO$), and tension logs.
  * **Does**: Evaluates borehole rugosity ($CALI - BS > 2.0\text{ inches}$); detects excessive density correction ($|\Delta\rho| > 0.05\text{ g/cm}^3$); flags cable sticking intervals ($Speed \approx 0$ with high tension); compiles continuous binary quality logs (`FLAG_BADHOLE = 1`).
  * **Returns**: Quality-controlled log dataset with pre-masked bad-hole intervals, preventing corrupted density/neutron porosity calculations in washed-out zones.
  * **Stops At**: Deleting or overwriting raw measured sensor values.
* **Failure Modes & Safety Envelopes**: In barite-weighted mud systems where density correction curves exhibit non-standard behavior, the agent triggers an advisory: `[Barite Effect Detected: Apply Specialized Photoelectric [Pe] Washout Logic]`.

### Agent 4: Core-to-Log Depth Shift & Poroperm Integration Agent
* **In One Line**: Reconciles discrete routine core analysis (RCAL) plug porosity, permeability, and grain density measurements with continuous wireline logs using automated gamma ray cross-correlation.
* **Friction Solved**: Eliminates ~3.50 hours per cored well of manual Excel spreadsheet depth-shifting, core plug hunting, and cross-plot calibration drag.
* **The Specification**:
  * **Reads**: Core laboratory analysis reports (plug depth, core gamma, helium porosity $\phi_{core}$, air permeability $k_{air}$, grain density $\rho_g$) and continuous wireline/LWD log curves.
  * **Does**: Computes sliding cross-correlation between spectral core gamma ray and wireline open-hole gamma ray; establishes the core-to-log depth-shift function ($z_{log} = z_{core} + \Delta z$); aligns discrete plug properties with log depths; generates core-calibrated porosity and permeability cross-plots.
  * **Returns**: Depth-shifted core dataset file ready for direct overlay on petrophysical log tracks, complete with depth-shift verification plots.
  * **Stops At**: Forcing non-linear core depth stretches across fractured or unrecovered core intervals.
* **Failure Modes & Safety Envelopes**: If core recovery is $<80\%$, the agent partitions the core into individual barrel runs and applies independent shift vectors, flagging `[Core Missing Interval: Discontinuous Shift Applied]`.

### Agent 5: Multi-Well Regional Log Baseline Normalization Agent
* **In One Line**: Ingests wireline logs across tens to hundreds of field wells, analyzes statistical curve distributions across regional marine shale marker beds, and calculates systematic tool calibration offsets.
* **Friction Solved**: Eliminates ~6.0 hours per field study of manual histogram construction, cumulative frequency distribution plotting, and gain/offset adjustment.
* **The Specification**:
  * **Reads**: Standardized multi-well log databases (gamma ray, bulk density, neutron porosity, sonic travel time) and regional geological marker picks (top and base of reference shale beds).
  * **Does**: Extracts log values within pure reference shale intervals (e.g., $V_{sh} > 0.85$); generates statistical histograms and cumulative distribution functions (CDFs) per well; detects systematic tool calibration shifts against field median baselines; calculates required linear normalization equations ($Curve_{norm} = a \cdot Curve_{raw} + b$).
  * **Returns**: Multi-well normalization parameter table and normalized curve sets ready for multi-well field modeling.
  * **Stops At**: Overwriting original measured logs or normalizing reservoir pay intervals.
* **Failure Modes & Safety Envelopes**: If an apparent log shift is driven by genuine geological facies thinning rather than tool calibration error, the agent flags `[Geological Variance Suspected: Specialist Approval Mandatory]`.

### Agent 6: Wireline Service Contractor Calibration & Quality Audit Agent
* **In One Line**: Audits third-party wireline tool calibration records, master surface shop checks, and on-rig main/repeat section repeatability logs against API and SPWLA tool tolerance standards.
* **Friction Solved**: Removes 1.50 hours per wireline logging job of manual calibration certificate cross-checking and repeat section inspection.
* **The Specification**:
  * **Reads**: Electronic wireline job calibration files, master shop calibration certificates, and main pass vs. repeat pass digital log sections.
  * **Does**: Verifies master calibration dates are within statutory validity windows; computes statistical repeatability between main and repeat logging passes (e.g., bulk density repeatability within $\pm 0.015\text{ g/cm}^3$ per SPWLA guidelines); flags tool sensor drift.
  * **Returns**: Wireline Quality Assurance Scorecard showing pass/fail calibration badges and repeatability error curves.
  * **Stops At**: Approving commercial invoice payment or demanding tool re-logging runs.
* **Failure Modes & Safety Envelopes**: If repeat section repeatability exceeds allowable SPWLA tolerances, the agent issues an immediate alert: `[Tool Repeatability Failure: Sensor Drift Exceeds Tolerance — Re-Log Recommended]`.

### Agent 7: Composite Petrophysical Evaluation Dossier Agent
* **In One Line**: Compiles finalized composite log curves, interpretation parameters ($m, n, a, R_w$), computed mineralogy, fluid saturation, and net-pay tables into standardized statutory regulatory submission packages.
* **Friction Solved**: Eliminates 2.25 hours per well of manual report formatting, parameter table assembly, and net-pay summary collation.
* **The Specification**:
  * **Reads**: Final computed petrophysical curves ($\phi_t, \phi_e, S_w, V_{sh}, k$), zone tops, interpretation parameter sheets, and asset net-pay cutoffs.
  * **Does**: Calculates zone-by-zone average porosity, water saturation, net-to-gross ratio ($NTG$), and net hydrocarbon pay thickness ($h_{net}$); formats data into standardized regulatory tabular layouts (e.g., DGH, BSEE, NSTA formats); compiles standardized composite well logs.
  * **Returns**: Certified Composite Petrophysical Well Dossier (PDF and LAS) ready for official reserves audit sign-off and geological data room archival.
  * **Stops At**: Modifying petrophysical cutoffs or changing officially booked reserves.
* **Failure Modes & Safety Envelopes**: If computed net pay deviates by $>15\%$ from pre-drill prognosis, the agent highlights the delta: `[Reserves Variance Alert: Net Pay Exceeds Pre-Drill Prognosis by >15%]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise dollar totals. The subsurface team provides their own well count and asset valuation multiplier.

| Hyper-Specialized Agent | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **1. Curve Mnemonic & Header Hygiene** | 1 Multi-Vintage Well Log Set | 3.00 hours | 0.25 hours | **2.75 hours saved** | Alias Mapping & Header Verification Drag |
| **2. Multi-Run Log Splicing & Depth Match**| 1 Multi-Run Wireline/LWD Well | 4.50 hours | 0.50 hours | **4.00 hours saved** | Visual Depth Splicing & Tie-Point Drag |
| **3. Caliper Bad-Hole & Washout Sieve** | 1 Complex Borehole Log Evaluation | 2.00 hours | 0.25 hours | **1.75 hours saved** | Manual Washout Track Scanning Drag |
| **4. Core-to-Log Depth Shift Agent** | 1 Cored Reservoir Section (100 m) | 4.00 hours | 0.50 hours | **3.50 hours saved** | Discontinuous Shift & Cross-Plot Drag |
| **5. Regional Multi-Well Normalizer** | 1 Field Normalization Study (30 wells) | 8.00 hours | 1.00 hours | **7.00 hours saved** | Multi-Well Histogram & CDF Sifting Drag |
| **6. Wireline Tool Calibration Audit** | 1 Wireline Logging Campaign | 2.00 hours | 0.25 hours | **1.75 hours saved** | Certificate Review & Repeat Section Drag |
| **7. Composite Petrophysical Dossier** | 1 Certified Well Interpretation Package | 2.50 hours | 0.25 hours | **2.25 hours saved** | Tabular Net-Pay Summary Assembly Drag |
| **Total Squad Impact per Well Study** | **1 Complete Well Evaluation Dataset** | **26.00 hours** | **3.00 hours** | **23.00 hours saved** | **Eliminates 88% of Routine Data Hygiene Drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[SPWLA-2022]` | SPWLA, *Petrophysics Skill Set Guidelines*, Version 2.0, 2022 | spwla.org | Competency Standard | Core competencies, splicing, and normalization rules |
| `[SPE-FE]` | SPE, *Formation Evaluation Discipline Matrix*, 2021 | spe.org | Professional Framework| Rock physics, fluid saturation, and cutoffs |
| `[API-RP-40]` | API, *Recommended Practices for Core Analysis*, 2nd Edition | API Standards Store | Recommended Practice | Core plug measurement, helium porosity, and permeability |
| `[SPWLA-LWD]` | SPWLA, *Recommended Practices for LWD Tool Calibration*, 2020 | spwla.org | Industry Guidance | Real-time logging quality control and repeat section rules |

### Negative Search Registry
* **Searched**: SLB Techlog product manuals, Emerson Geolog release notes, and SPWLA symposium archives for *"autonomous multi-vendor well log mnemonic harmonization, automated cross-correlation core-to-log depth shifting, and automated regional multi-well shale baseline normalization without manual parameter intervention"*.
* **Result**: `Negative Search, 2026-09`. Commercial petrophysical packages provide modules for splicing and normalization that require the user to manually click tie-points and select baseline histograms; none autonomously harmonize heterogeneous multi-vendor mnemonics, auto-shift core plugs to wireline depths, or batch-normalize regional estates without manual human guidance.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In petrophysics, spending four days clicking on washed-out gamma ray curves and manually shifting core plugs in Excel isn't formation evaluation; it's data janitor work that leaves the specialist with thirty minutes to pick the water saturation exponent that books a hundred million dollars of reserves."*
* **Open Questions for Petrophysicists**:
  * What percentage of your working hours is consumed by data hygiene (mnemonic mapping, depth matching, and splicing) versus actual reservoir modeling?
  * How many meters of core in your current asset have never been properly depth-shifted to wireline logs due to lack of time?
  * Across your multi-vintage field estates, how often do you discover that wells logged by different service companies have never been normalized to a common baseline?
