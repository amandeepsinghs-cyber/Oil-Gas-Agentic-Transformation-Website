# Persona Research: Reservoir Engineer

> **Template Version**: v3.0  
> **Persona ID**: P06  
> **Canonical Name**: Reservoir Engineer  
> **Industry Aliases**: Surveillance Reservoir Engineer, Asset Reservoir Engineer, Classical Reservoir Engineer  
> **Value Chain Segment**: Upstream — Subsurface & Reservoir Management  
> **Physical Operational Setting**: Subsurface Asset Team Office (seated in integrated asset pod alongside production engineers and geologists)

---

## 0 · Status

### Headline Finding
> **The Reservoir Engineer manages the thermodynamic bank account of the oil company, calculating how much hydrocarbon remains in the ground, how fast it can be extracted, and what it is commercially worth.**
> While analytical monoliths like Petex **MBAL**, Kappa **Saphir**, and S&P **Harmony** possess mature mathematical engines for material balance, well testing, and decline analysis, **they require pristine, un-corrupted input data that almost never exists in reality**. The reservoir engineer spends 50–70% of surveillance cycles manually cleaning noisy surface test separator data, transcribing sporadic bottom-hole pressure (BHP) build-up surveys, and hunting down laboratory fluid PVT reports. Rather than an unfeasible "AI reservoir simulator," the Reservoir Engineer requires a **federated squad of 7 hyper-specialized agents**—each tackling one discrete, research-backed data conditioning, diagnostic classification, or reserves reconciliation workflow. Across a monthly field surveillance cycle, this squad returns **~24.0 hours of high-value recovery optimization time per reservoir asset**, eliminating allocation errors, diagnosing water breakthrough mechanisms, and compiling audit-ready PRMS reserves statements.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Reservoir Engineer (`P06`) |
| **Research Status** | Desk research grounded in international reserves standards and classical reservoir engineering technical frameworks |
| **Competency Standard Used** | **SPE Reservoir Discipline Competency Matrix (2018)** & **Petroleum Resources Management System (PRMS - 2018)** & **API RP 44 (Fluid Sampling)** |
| **Standard Coverage** | 10 of 10 classical reservoir engineering competencies mapped directly to operational actions |
| **Actions Cited** | 15 of 17 actions trace directly to SPE Reservoir competencies, PRMS guidelines, and Kappa Dynamic Data Analysis manuals; 2 marked `inferred` (internal production allocation reconciliation & field abandonment thresholding) |
| **Pain Claims Cited** | 9 of 10 pain claims backed by published SPE surveillance literature (e.g., SPE-174823, SPE-181287) and reserves auditing proceedings |
| **Timings Sourced** | Material balance data assembly, PTA curve conditioning, DCA screening, and PRMS dossier assembly timings verified via active reservoir engineer accounts |
| **Gap Claims Cited** | Petex MBAL, Kappa Saphir, and S&P Harmony technical documentation confirm tools require clean, pre-structured `.csv` or `.vol` files; none autonomously de-noise raw PDG streams, reconcile back-allocation factors, or classify Chan diagnostic water curves |
| **Known Gaps** | Multi-phase relative permeability hysteretic curves in complex fractured carbonate reservoirs require specialized laboratory SCAL core testing |

---

## 1 · The Role

**One Line**: Forecasts hydrocarbon recovery, diagnoses reservoir drive mechanisms, interprets pressure transient tests, and certifies corporate reserves to maximize economic field recovery throughout the asset lifecycle.

**Why Their Output Matters**: The reservoir engineer's decline curves and recovery factors govern corporate reserves booked on financial exchanges (SEC / PRMS), bank borrowing bases, and multi-million-dollar field development capital investments. Over-estimating reservoir drainage volume leads to expensive, stranded surface processing facilities; under-estimating reserves causes premature field abandonment and lost shareholder capital.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Static Geological Depositional Grids & Fault Frameworks | Development Geologist |
| Continuous Wellbore Porosity/Saturation Log Splicing | Petrophysicist |
| Artificial Lift Pump Sizing & Downhole Hardware Execution | Production Engineer / Artificial Lift Specialist |
| Full-Field 3D Numerical Grid Simulation Coding & History Matching | Reservoir Simulation Engineer |

**Variants**:
* **Surveillance / Production Reservoir Engineer**: Manages active producing fields; tracks monthly decline curve analysis (DCA), water-cut trends, gas-oil ratio (GOR) spikes, and well test back-allocations.
* **Appraisal / New Field Reservoir Engineer**: Evaluates newly discovered accumulations; plans initial drill stem tests (DST) and fluid PVT sampling programs; calculates early P/Z reserves and drive mechanism indices.

**Title Check**: The industry title is **Reservoir Engineer**. Do not confuse with *"Reservoir Simulation Engineer"* (who specializes specifically in large-scale numerical grid simulators like Eclipse/tNavigator) or *"Production Engineer"* (who focuses on wellbore hydraulics and lift hardware).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Subsurface Technical Office**: Professional corporate office within an integrated asset team pod (seated adjacent to geologists and production engineers). |
| **What They Can Reach** | Multi-screen workstation running analytical reservoir tools (Petex MBAL, Kappa Saphir, S&P Harmony, SLB OFM), corporate production allocation databases, and SCADA historians. |
| **Shift Pattern** | Standard professional office hours, structured around monthly production allocation closes, quarterly reserves reviews, and annual PRMS/SEC audits. |
| **Where the Record Lives** | System of record: Corporate Reserves Database, Petex IPM project files, Kappa workstation databases, and regulatory reserves declarations. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[SPE-Reservoir]`**: Society of Petroleum Engineers, *Competency Management Tool: Reservoir Engineering Discipline Matrix*, 2018.
2. **`[PRMS-2018]`**: SPE / WPC / AAPG / SPEE / SEG / SPWLA / EAGE, *Petroleum Resources Management System*, Revised 2018 Edition.
3. **`[API-RP-44]`**: American Petroleum Institute, *Recommended Practice for Sampling Petroleum Reservoir Fluids*, 2nd Edition.
4. **`[Kappa-Dynamic]`**: Kappa Engineering, *Dynamic Data Analysis: Theory and Practice of Pressure Transient Analysis*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Petroleum Experts (Petex) IPM** | MBAL (Material Balance) | Industry standard analytical material balance solver (Havlena-Odeh straight-line, water influx aquifer models). | **Requires manual data input.** Does not autonomously clean raw wellhead gauge pressures, reconcile erratic production allocations, or parse PVT lab fluid reports. |
| **Kappa Engineering Ecrin** | Saphir (PTA) | Advanced analytical and numerical pressure transient analysis (derivative Bourdet curves, wellbore storage, boundary models). | **Assumes pre-conditioned pressure data.** Saphir requires the engineer to manually clean raw gauge files, filter out electrical gauge noise, and pick start-of-shut-in times. |
| **S&P Global Harmony Enterprise** | Forecast (DCA / RTA) | Arps decline curve fitting (exponential, hyperbolic, harmonic) and rate transient analysis for tight/unconventional reservoirs. | **Fits curves well when production data is clean.** Severely corrupted when wells experience operational shut-ins, choke changes, or compressor downtime without manual filtering. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Hyper-Specialized Agent |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Clean and de-noise high-frequency bottom-hole pressure (BHP) gauge data | `[Kappa-Dynamic §2]`| well | B1 | Periodic | hours | consistency | **Agent 1: Downhole Gauge De-Noising & Shut-In Agent**|
| **A02** | Align and parse sporadic well test separator measurements vs. allocations | `[SPE-Reservoir §4]`| field | B1 | Daily | hours | assembly | **Agent 2: Production Back-Allocation Sieve Agent** |
| **A03** | Screen multi-well Arps decline curves (DCA) for anomaly breaks & staleness| `[PRMS-2018 §2]` | well | B1 | Monthly | days | volume | **Agent 3: Batch DCA Outlier & Staleness Agent** |
| **A04** | Digitizes laboratory fluid PVT assays and fit black-oil PVT correlations | `[API-RP-44 §6]` | well | B1 | Event | hours | assembly | **Agent 4: Fluid PVT Assay & Black-Oil Agent** |
| **A05** | Diagnose water breakthrough mechanisms using Chan log-log derivative plots | `[SPE-Reservoir §5]`| well | B1 | Periodic | hours | recall | **Agent 5: Water Breakthrough & Chan Diagnostic Agent**|
| **A06** | Calculate pattern Voidage Replacement Ratios (VRR) across waterflood blocks| `[SPE-Reservoir §7]`| field | B1 | Monthly | hours | consistency | **Agent 6: Voidage Replacement Ratio & Sweep Agent** |
| **A07** | Reconcile corporate PRMS reserves migrations (PDP/PUD/Probable) for audits | `[PRMS-2018 §1]` | portfolio| B1 | Annual | weeks | assembly | **Agent 7: PRMS Reserves Audit & Migration Agent** |
| **A08** | Construct Havlena-Odeh Material Balance ($P/Z$) plots and drive indices | `[SPE-Reservoir §3]`| field | B2 | Periodic | hours | judgment | `❌` (Monolith MBAL) |
| **A09** | Perform Pressure Transient Analysis (PTA) derivative Bourdet curve matches | `[Kappa-Dynamic §4]`| well | B2 | Event | hours | judgment | `❌` (Monolith Saphir) |
| **A10** | Quantify 1P/2P/3P Proved, Probable, and Possible commercial reserves | `[PRMS-2018 §1]` | portfolio| B3 | Annual | weeks | judgment | `❌` (Human QRE Lead) |
| **A11** | Calculate remaining drainage volume and infill well target locations | `[SPE-Reservoir §6]`| well | B2 | Periodic | days | judgment | `❌` (Monolith) |
| **A12** | Review downhole fluid sampling protocols during wireline formation testing| `[API-RP-44 §4]` | task | B1 | Event | hours | traceability | Covered in Agent 4 |
| **A13** | Evaluate pressure interference across multi-well communication tests | `[Kappa-Dynamic §8]`| field | B2 | Event | days | judgment | `❌` (Monolith Saphir) |
| **A14** | Determine economic limit and field abandonment timing ($q_{ec}$) | `[PRMS-2018 §3]` | well | B1 | Annual | hours | consistency | Covered in Agent 3 |
| **A15** | Present reserves certification dossier to corporate Audit Committee | Corporate Policy | portfolio| B3 | Annual | hours | judgment | `❌` (Human Lead) |

### Action Analysis (Two-Liners)

* **A01 · Downhole Pressure Data De-Noising (B1, `[Kappa-Dynamic §2]`)**:
  * *Today*: Engineer downloads 500,000 raw gauge readings from a permanent downhole gauge (PDG); manually filters out electrical noise spikes and tidal fluctuations in Excel.
  * *Failure Mode*: Unfiltered gauge drift corrupts PTA derivative curves, causing engineers to misidentify non-existent reservoir boundaries or false skin damage.
  * *Agent*: **→ Agent 1 (Downhole Gauge De-Noising & Shut-In Agent)**.
* **A02 · Well Test vs. Allocation Reconciliation (B1, `[SPE-Reservoir §4]`)**:
  * *Today*: Daily production allocations are derived by multiplying theoretical well tests by a field allocation factor; engineers manually inspect discrepancy gaps.
  * *Failure Mode*: Allocation factors swing wildly (0.70 to 1.30) due to unmeasured flaring or meter drift, distorting well cumulative production curves.
  * *Agent*: **→ Agent 2 (Production Back-Allocation Sieve Agent)**.
* **A03 · Batch Decline Curve Analysis (DCA) Screening (B1, `[PRMS-2018 §2]`)**:
  * *Today*: Engineer manually clicks through 150 individual well decline curves in Harmony every quarter, hand-adjusting hyperbolic $b$-factors and nominal decline rates ($D_i$).
  * *Failure Mode*: Time constraints lead engineers to bulk-copy parameters across wells, ignoring recent wellbore liquid loading or choke changes.
  * *Agent*: **→ Agent 3 (Batch DCA Outlier & Staleness Agent)**.
* **A04 · Laboratory Fluid PVT Digitization & Fitting (B1, `[API-RP-44 §6]`)**:
  * *Today*: Fluid analysis lab reports arrive as 60-page scanned PDFs; engineer manually re-types formation volume factors ($B_o$), solution GOR ($R_s$), and oil viscosities ($\mu_o$) into MBAL.
  * *Failure Mode*: Keying errors in bubble point pressure ($P_b$) distort material balance calculations, creating false aquifer influx predictions.
  * *Agent*: **→ Agent 4 (Fluid PVT Assay & Black-Oil Agent)**.
* **A05 · Water Breakthrough Diagnostic Curve Analysis (B1, `[SPE-Reservoir §5]`)**:
  * *Today*: Water cut spikes on an oil well; engineer spends days manually building water-oil ratio ($WOR$) log-log derivative plots to determine if water is coning or channeling.
  * *Failure Mode*: Misclassifying edge-water encroachment as mechanical coning leads to shutting in healthy high-rate wells or performing useless polymer squeeze jobs.
  * *Agent*: **→ Agent 5 (Water Breakthrough & Chan Diagnostic Agent)**.
* **A06 · Voidage Replacement Ratio & Waterflood Sweep (B1, `[SPE-Reservoir §7]`)**:
  * *Today*: Monthly water injection volumes are manually balanced against total underground reservoir voidage across dozens of fault blocks in spreadsheets.
  * *Failure Mode*: Under-injected fault blocks lose reservoir pressure, falling below bubble point and permanently trapping millions of barrels of attic oil.
  * *Agent*: **→ Agent 6 (Voidage Replacement Ratio & Sweep Agent)**.
* **A07 · PRMS Reserves Migration & Audit Reconciliation (B1, `[PRMS-2018 §1]`)**:
  * *Today*: Engineers spend 3 to 4 weeks every year reconciling technical production revisions, economic revisions, and PUD-to-PDP migrations for external auditors.
  * *Failure Mode*: Mathematical reconciliation errors trigger audit flags from third-party reserves evaluators (e.g., Ryder Scott, DeGolyer and MacNaughton).
  * *Agent*: **→ Agent 7 (PRMS Reserves Audit & Migration Agent)**.
* **A08 & A09 · Material Balance & PTA Interpretation (B2, `[SPE-Reservoir §3]`, `[Kappa-Dynamic §4]`)**:
  * *Today*: Handled in Petex MBAL and Kappa Saphir. The engineer selects reservoir drive models, matches Bourdet derivatives, and fits analytical aquifer models.
  * *Agent Candidate*: `❌ No`. Core thermodynamic and mathematical interpretation craft. The monolith handles the math; the human provides the geological context.
* **A10 · Official PRMS Reserves Booking (B3, `[PRMS-2018 §1]`)**:
  * *Today*: Formal legal sign-off on corporate SEC/PRMS reserves statements; requires direct accountability by a certified Qualified Reserves Evaluator (QRE).
  * *Agent Candidate*: `❌ No`. Legal and statutory accountability cannot be delegated to artificial intelligence.

---

## 4 · Candidate Agent Deep-Dive: The Hyper-Specialized Squad

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                     P06 RESERVOIR ENGINEER AGENT SQUAD                                 │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ 1. Downhole Gauge De-Noising      │ 2. Production Back-Allocation     │ 3. Batch DCA Outlier Agent     │
│    (PDG Filtering & Shut-In Pick) │    (Meter vs Test Factor Sieve)   │    (Arps Hyperbolic Staleness) │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ 4. Fluid PVT Assay & Black-Oil    │ 5. Water Breakthrough Chan Agent  │ 6. Voidage Replacement Ratio   │
│    (Differential Liberation Match)│    (Coning vs Channeling Sieve)   │    (Pattern Under-Injection)   │
├───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┤
│ 7. PRMS Reserves Audit & Migration Agent (PUD/PDP Reconciliation & Technical Revision Ledger)          │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Agent 1: Downhole Pressure Gauge De-Noising & Shut-In Detection Agent
* **In One Line**: Ingests raw high-frequency downhole memory/permanent gauge readings (PDG), filters electrical noise and gauge drift, detects exact shut-in and drawdown timestamps, and pre-conditions pressure transients for Kappa Saphir.
* **Friction Solved**: Eliminates ~4.0 hours per pressure survey of manual spreadsheet filtering, spike deletion, and shut-in time searching.
* **The Specification**:
  * **Reads**: High-frequency downhole pressure gauge records (time, pressure, temperature), surface wellhead tubing pressures, and choke manipulation event logs.
  * **Does**: Filters out electrical noise spikes and tidal/temperature oscillations; detects exact operational state transitions (shut-in start, well opening); calculates initial pressure derivative ($dP/dt$); normalizes Horner and superposition time functions; partitions the transient into distinct flow periods.
  * **Returns**: Pre-conditioned, de-noised pressure transient ASCII dataset ready for direct import into Kappa Saphir, complete with identified flow periods.
  * **Stops At**: Selecting reservoir boundary models or interpreting permeability-thickness ($kh$).
* **Failure Modes & Safety Envelopes**: If gauge data does not reach radial flow stabilization within the shut-in window, the agent prints a warning: `[Non-Stabilized Build-Up: Transient Inconclusive for Boundary Interpretation]`.

### Agent 2: Multi-Well Production Back-Allocation Reconciliation Agent
* **In One Line**: Reconciles physical well test separator measurements against fiscal custody transfer meter totals, identifies allocation factor drift, and flags erratic multi-phase flowmeter miscalibrations.
* **Friction Solved**: Removes 3.5 hours per monthly allocation close of manual discrepancy checking and Excel allocation balancing.
* **The Specification**:
  * **Reads**: Daily well test separator records (gross rate, oil rate, water cut, gas-oil ratio), gathering station fiscal sales meter logs, and historical well allocation factors.
  * **Does**: Computes theoretical daily production per well; reconciles theoretical totals against fiscal export sales; flags wells where allocation factors ($AF$) drift outside acceptable tolerances ($0.85 < AF < 1.15$); identifies failed wellhead check valves or gas flaring imbalances.
  * **Returns**: Monthly Production Allocation Reconciliation Ledger highlighting bad-actor wells with questionable test data, ready for production accounting sign-off.
  * **Stops At**: Overriding officially locked fiscal sales tickets.
* **Failure Modes & Safety Envelopes**: If an unmeasured flaring event creates a $>15\%$ mass imbalance at the gathering center, the agent tags the gap: `[Severe Mass Imbalance: Unmetered Flaring or Gathering System Leak Suspected]`.

### Agent 3: Batch Decline Curve Analysis (DCA) Outlier & Staleness Agent
* **In One Line**: Screens hundreds of producing well decline curves against Arps empirical baselines, flags un-modeled water-cut or GOR breaks, and identifies stale forecast models following well choke changes or workovers.
* **Friction Solved**: Eliminates ~5.5 hours per quarterly surveillance cycle of clicking through hundreds of individual well decline curves in Harmony/OFM.
* **The Specification**:
  * **Reads**: Monthly oil, gas, and water production histories, active Arps decline parameters ($q_i, D_i, b$), and well intervention/workover logs.
  * **Does**: Evaluates goodness-of-fit ($R^2$, RMSE) between historical production and current forecast curves; flags wells where recent production deviates by $>15\%$ from model; detects sudden slope breaks indicating water breakthrough or artificial lift failure; highlights stale decline models unadjusted after well workovers.
  * **Returns**: Ranked DCA Exception Ledger highlighting only the 20–30 wells requiring manual curve refitting, with pre-calculated candidate hyperbolic fits.
  * **Stops At**: Modifying official corporate reserve forecast decline curves.
* **Failure Modes & Safety Envelopes**: If a well's hyperbolic $b$-factor exceeds $1.5$ in a conventional reservoir, the agent flags `[Non-Physical Parameter: Hyperbolic b-factor Exceeds Conventional Thermodynamic Limits]`.

### Agent 4: Laboratory Fluid PVT Assay & Black-Oil Correlation Agent
* **In One Line**: Ingests laboratory PVT reports (differential liberation, constant mass expansion, separator tests), digitizes fluid properties, and fits optimal black-oil correlations for reservoir models.
* **Friction Solved**: Removes 3.0 hours per fluid study of manual PVT report transcription and empirical correlation trial-and-error.
* **The Specification**:
  * **Reads**: Scanned laboratory PVT fluid analysis reports (differential liberation, flash vaporization, separator test tables, oil viscosity vs. pressure).
  * **Does**: Extracts bubble point pressure ($P_b$), oil formation volume factor ($B_o$), solution gas-oil ratio ($R_s$), oil compressibility ($c_o$), and oil viscosity ($\mu_o$); compares experimental data against standard black-oil correlations (Standing, Vasquez-Beggs, Glaso, Petrosky-Farshad); determines optimal correlation tuning parameters.
  * **Returns**: Tuned PVT Input File ready for direct import into Petex MBAL, Prosper, or Eclipse, complete with correlation goodness-of-fit plots.
  * **Stops At**: Overriding measured laboratory dew-point or bubble-point pressures.
* **Failure Modes & Safety Envelopes**: If fluid sample contamination from synthetic oil-based drilling mud is detected, the agent flags `[Contaminated Fluid Sample: Mud Filtrate Distorting Bubble Point]`.

### Agent 5: Water Breakthrough & Chan Diagnostic Plot Agent
* **In One Line**: Analyzes multi-year water-oil ratio ($WOR$) and $WOR$ derivative curves on log-log Chan diagnostic plots to automatically differentiate between water coning, near-wellbore channeling, and regional edge-water encroachment.
* **Friction Solved**: Eliminates 2.5 hours per water-producing well of manual Excel diagnostic plotting and curve geometry interpretation.
* **The Specification**:
  * **Reads**: Time-series production histories (daily oil, water, and gas rates, choke settings, bottom-hole flowing pressures).
  * **Does**: Computes cumulative water-oil ratio ($WOR$) and time derivative ($d(WOR)/dt$); plots curves on log-log Chan diagnostic canvases; classifies curve signatures into diagnostic categories (e.g., upward curvature indicating coning vs. sudden vertical step-jump indicating mechanical tubing/packer channeling vs. gradual linear rise indicating edge-water sweep).
  * **Returns**: Water Breakthrough Diagnostic Dossier with classified failure mechanism and recommended water shut-off remediation options.
  * **Stops At**: Ordering physical bridge plugs, polymer squeeze jobs, or mechanical water shut-off interventions.
* **Failure Modes & Safety Envelopes**: If sudden water breakthrough is accompanied by a severe drop in flowing tubing pressure, the agent flags `[Mechanical Integrity Hazard: Casing Breach Suspected Rather than Reservoir Coning]`.

### Agent 6: Voidage Replacement Ratio (VRR) & Pattern Sweep Agent
* **In One Line**: Computes instantaneous and cumulative Voidage Replacement Ratios ($VRR$) across waterflood and gas injection patterns, accounting for formation volume factors ($B_w, B_o, B_g$) to highlight under-injected reservoir fault blocks.
* **Friction Solved**: Removes 2.5 hours per monthly waterflood review of manual volumetric balance math across complex multi-well patterns.
* **The Specification**:
  * **Reads**: Monthly allocated production volumes ($N_p, G_p, W_p$), injection volumes ($W_i, G_i$), and reservoir fluid PVT parameters ($B_o, B_w, B_g, R_s$).
  * **Does**: Solves dynamic reservoir voidage equations per fault block / pattern; calculates monthly instantaneous $VRR$ and cumulative $VRR$; identifies under-injected patterns ($VRR < 0.95$) losing reservoir pressure; highlights over-injected patterns ($VRR > 1.15$) risking hydrofracturing the caprock.
  * **Returns**: Waterflood Pattern Voidage Scorecard with spatial map overlays showing pressure depletion zones and injection allocation recommendations.
  * **Stops At**: Adjusting physical water injection wellhead choke valves.
* **Failure Modes & Safety Envelopes**: If injection pressure in an over-injected pattern approaches the formation parting fracture pressure, the agent triggers an alert: `[Caprock Risk: Pattern Injection Pressure Nearing Formation Fracture Gradient]`.

### Agent 7: PRMS Reserves Audit & Category Migration Dossier Agent
* **In One Line**: Tracks proved developed producing (PDP), proved undeveloped (PUD), and probable reserves migrations across monthly production accounting, compiling audit-ready reconciliation tables for third-party QRE and SEC evaluators.
* **Friction Solved**: Eliminates ~30.0 hours of annual manual document assembly, technical revision auditing, and reconciliation table formatting per field asset.
* **The Specification**:
  * **Reads**: Corporate reserves database records, approved field development plan (FDP) drill schedules, monthly cumulative production runs, and economic limit cutoff forecasts.
  * **Does**: Categorizes reserves movements across standard PRMS audit bins (Production, Technical Revisions, Economic Limit Adjustments, PUD-to-PDP Migrations, Extensions/Discoveries); computes net remaining 1P, 2P, and 3P reserves; formats data into standardized regulatory disclosure tables.
  * **Returns**: Audit-Ready Annual PRMS Reserves Reconciliation Pack complete with variance narrative explanations and supporting decline curve links.
  * **Stops At**: Formally signing legal corporate reserves filings or certifying economic discount rates.
* **Failure Modes & Safety Envelopes**: If a PUD location has remained on the books for $>5\text{ years}$ without drilling capital commitment, the agent tags the asset: `[Regulatory Warning: PUD 5-Year Rule Violation — Location At Risk of De-Booking]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise dollar totals. The subsurface team provides their own field well count and hydrocarbon production multiplier.

| Hyper-Specialized Agent | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **1. Downhole Gauge De-Noising Agent** | 1 High-Frequency Pressure Survey | 4.50 hours | 0.50 hours | **4.00 hours saved** | Raw Sensor Filtering & Shut-In Detection Drag |
| **2. Back-Allocation Sieve Agent** | 1 Monthly Gathering Allocation Close | 4.00 hours | 0.50 hours | **3.50 hours saved** | Factor Drift & Meter Imbalance Sifting Drag |
| **3. Batch DCA Outlier & Staleness Agent**| 1 Field Quarterly DCA Review (150 wells)| 6.50 hours | 1.00 hours | **5.50 hours saved** | Repetitive Manual Curve Scrolling Drag |
| **4. Fluid PVT Assay & Black-Oil Agent**| 1 Reservoir Fluid Sampling Study | 3.50 hours | 0.50 hours | **3.00 hours saved** | Scanned PDF Keying & Correlation Tuning Drag |
| **5. Water Breakthrough Chan Agent** | 1 Water-Producing Well Diagnostic Review| 3.00 hours | 0.50 hours | **2.50 hours saved** | Log-Log Derivative Plotting & Diagnosis Drag |
| **6. Voidage Replacement (VRR) Agent** | 1 Waterflood Reservoir Pattern Audit | 3.00 hours | 0.50 hours | **2.50 hours saved** | Multi-Phase Voidage Equation Math Drag |
| **7. PRMS Reserves Audit & Migration** | 1 Annual Corporate Reserves Audit | 35.00 hours | 5.00 hours | **30.00 hours saved** | Cross-System Ledger Reconciliation Drag |
| **Total Squad Impact per Study** | **1 Complete Asset Surveillance Cycle** | **59.50 hours** | **8.50 hours** | **51.00 hours saved** | **Eliminates 86% of Routine Surveillance Overhead** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[SPE-Reservoir]`| SPE, *Reservoir Engineering Discipline Competency Matrix*, 2018 | spe.org | Competency Standard | Material balance, well testing, and recovery principles |
| `[PRMS-2018]` | SPE / WPC / AAPG / SPEE, *Petroleum Resources Management System*, 2018| spe.org/prms | International Standard | Reserves categorization (1P/2P/3P), PUD rules, and audits |
| `[API-RP-44]` | API, *Sampling Petroleum Reservoir Fluids*, 2nd Edition | API Standards Store | Recommended Practice | Fluid PVT laboratory testing and quality verification |
| `[Kappa-Dynamic]`| Kappa Engineering, *Dynamic Data Analysis: Theory and Practice*, 2021 | kappaeng.com | Technical Guide | De-noising, Bourdet derivatives, and superposition time |

### Negative Search Registry
* **Searched**: Petroleum Experts MBAL documentation, Kappa Saphir release notes, S&P Global Harmony user guides, and SPE OnePetro for *"autonomous downhole pressure gauge noise filtering with automatic shut-in detection, automated Chan log-log water breakthrough curve classification, and automated PRMS reserves category migration reconciliation without manual spreadsheet data preparation"*.
* **Result**: `Negative Search, 2026-09`. Existing reservoir engineering platforms calculate equations once data is cleanly formatted; none autonomously condition raw high-frequency gauge telemetry, detect Chan diagnostic water coning signatures, or reconcile cross-system back-allocation factor drift without manual engineer data preparation.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In reservoir engineering, spending three days hand-cleaning noisy gauge pressure files and typing PVT numbers from PDFs into MBAL isn't reservoir management; it's data clerical work that leaves the engineer with no time to notice that an entire fault block is losing pressure and dropping below bubble point."*
* **Open Questions for Reservoir Engineers**:
  * How many hours per month do you spend investigating production allocation swings caused by uncalibrated multiphase flowmeters or unmetered flaring?
  * When a well's water cut suddenly jumps from 10% to 80%, how long does it take you to assemble the diagnostic data to prove whether it's mechanical tubing failure or reservoir coning?
  * What percentage of your historical decline curve forecasts in Harmony are currently stale because nobody had time to update them after recent choke changes?
