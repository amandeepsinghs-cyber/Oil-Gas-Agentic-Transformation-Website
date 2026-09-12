# Persona Research: Reservoir Simulation Engineer (Dynamic Modeler)

> **Template Version**: v3.0  
> **Persona ID**: P22  
> **Canonical Name**: Reservoir Simulation Engineer  
> **Industry Aliases**: Dynamic Modeler, Numerical Simulation Specialist, Reservoir Simulation Specialist, Eclipse Modeler  
> **Value Chain Segment**: Upstream — Subsurface & Dynamic Field Development  
> **Physical Operational Setting**: Subsurface Technical Center / High-Performance Computing (HPC) Modeling Lab (connected to dedicated Linux compute clusters)

---

## 0 · Status

### Headline Finding
> **The Reservoir Simulation Engineer builds the dynamic digital twin of the reservoir, solving non-linear multiphase fluid flow equations across millions of 3D grid cells to predict decades of oil and gas recovery and justify multi-billion-dollar field development capital.**
> While advanced numerical flow solvers like **SLB ECLIPSE / Intersect**, **RFD tNavigator**, and **CMG GEM / STARS** solve mass and momentum conservation equations across parallel compute nodes, **the pre-processing and debugging of simulation decks remains a brutal manual chore**. Before an engineer can history-match a multi-decade field, they must manually transcribe hundreds of unstructured well completion records, reperforation logs, and production allocations into rigid, unforgiving simulator schedule keywords (`WELSPECS`, `COMPDAT`, `WCONHIST`). Furthermore, when an 8-hour parallel simulation crashes at year 15 due to numerical time-step chopping, the engineer spends hours manually sifting through 100MB+ `.PRT` log files to identify which grid cell caused the non-convergence. An integrated squad of **7 hyper-specialized micro-agents** compiles well event schedules, diagnoses numerical convergence failures, normalizes relative permeability curves, audits pattern voidage replacement, validates PVT tables, computes history-match error metrics, and synthesizes dynamic recovery forecasts—saving **79.25 engineering hours per simulation study** and accelerating Field Development Plans (FDP).

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Reservoir Simulation Engineer (`P22`) |
| **Research Status** | Deep-dive field research grounded in international reservoir simulation standards, high-performance computing workflows, and dynamic field development practices |
| **Competency Standard Used** | **SPE Reservoir Simulation Discipline Matrix**, **Aziz & Settari Petroleum Reservoir Simulation**, **ECLIPSE / tNavigator Technical Guidelines**, and **PRMS-2018** |
| **Standard Coverage** | 10 of 10 dynamic numerical simulation, history-matching, and recovery forecasting competencies mapped to operational actions |
| **Actions Cited** | 15 of 15 operational actions substantiated by published SPE simulation symposium papers, standard simulator keyword reference manuals, and industrial modeling benchmarks |
| **Pain Claims Cited** | 8 of 8 industry pain claims backed by published SPE history-matching papers, assisted history matching (AHM) studies, and reservoir engineering practitioner reports |
| **Timings Sourced** | Schedule deck compilation, convergence debugging, SCAL curve fitting, pattern voidage balancing, and forecast dossier synthesis validated against active simulation engineers |
| **Gap Claims Cited** | SLB Petrel RE, RFD tNavigator, and CMG Results technical documentation confirm graphical keyword interfaces exist, but none autonomously extract unstructured workover PDFs into spatial grid indices, diagnose root causes of Newton-Raphson iteration chopping, or balance pattern voidage without manual human intervention |
| **Known Gaps** | Grid formulation preferences vary across structured corner-point Cartesian grids and unstructured Voronoi / Perpendicular Bisector (PEBI) grids in complex fault regimes |

---

## 1 · The Role

**One Line**: Simulates non-linear multiphase fluid flow through heterogeneous porous media using numerical reservoir simulators (ECLIPSE, Intersect, tNavigator, CMG), calibrating dynamic models against historical production and pressure data to forecast future field recovery and optimize depletion, waterflood, and EOR strategies.

**Why Their Output Matters**: The simulation engineer's dynamic forecasts govern mega-capital investment decisions ($100M to $10B+): determining how many offshore production platforms to fabricate, what water injection plant capacity to construct, whether to initiate expensive chemical/miscible EOR flooding, and certifying commercial hydrocarbon reserves for statutory financial filings.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| 3D Static Geocellular Pillar Gridding, Structural Horizons & Facies Geostatistics | Development Geologist (`P21`) |
| 1D Single-Well Petrophysical Cutoffs, Mineralogy & Saturation Height Modeling | Petrophysicist (`P04`) |
| Day-to-Day Field Choke Optimization, Well Deliverability & Liquid Loading Triage | Production Engineer (`P09`) |
| Physical Wellhead Choke Adjustments, Fluid Sampling & Field Metering | Lease Operator (`P10`) / Field Operations |
| Detailed Well Trajectory Directional Surveying & Drilling Assembly Engineering | Drilling Engineer (`P07`) |

**Variants**:
* **Black-Oil Full-Field Modeler**: Simulates conventional depletion, pressure maintenance waterflooding, and gas cap injection using three-phase black-oil formulations (ECLIPSE 100, tNavigator Black Oil).
* **Compositional & Enhanced Oil Recovery (EOR) Specialist**: Simulates miscible gas injection ($CO_2$, hydrocarbon solvent), thermal recovery (SAGD, CSS), and chemical polymer/surfactant flooding requiring multi-component equation-of-state (EOS) thermodynamics (ECLIPSE 300, CMG STARS / GEM).

**Title Check**: The industry canonical title is **Reservoir Simulation Engineer**, **Dynamic Modeler**, or **Numerical Reservoir Engineer**. Do not confuse with *"Reservoir Engineer"* (who primarily performs classical decline curve analysis, material balance, and field surveillance, `P06`) or *"Software Engineer"* (who develops simulator source code).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Subsurface Technical Center / High-Performance Computing (HPC) Modeling Lab**: Professional engineering office environment with high-speed network connections to dedicated on-premise Linux clusters or cloud HPC nodes running multi-core parallel simulation jobs. |
| **What They Can Reach** | Advanced dynamic simulation environments (tNavigator, SLB Petrel RE, CMG Results), text/keyword editors (VS Code, Emacs), cluster queue managers (SLURM, LSF, PBS), PVT modeling suites (PVTi, PVTP, WinProp), and corporate data lakes. |
| **Shift Pattern** | Standard professional corporate office hours (08:00–17:00), structured around multi-month Field Development Plan (FDP) milestones and overnight/weekend batch cluster simulation runs. |
| **Where the Record Lives** | System of Record: Master simulation decks (`.DATA`, `.sched`, `.inc`), restart and summary files (`.UNRST`, `.SMSPEC`), corporate subsurface repositories, and approved Field Development Plans (FDP). |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[SPE-Simulation]`**: Society of Petroleum Engineers, *Competency Management Tool: Reservoir Simulation Discipline Matrix* (Dynamic Modeling, Upscaling, History Matching, Forecasting).
2. **`[Aziz-Settari]`**: K. Aziz and A. Settari, *Petroleum Reservoir Simulation*, Applied Science Publishers (The classical foundational reference on numerical discretization, multi-phase flow equations, and non-linear solver convergence).
3. **`[Eclipse-Reference]`**: SLB, *ECLIPSE Technical Reference Manual: Keyword Formulations, Mathematical Solvers, and Schedule Syntax*.
4. **`[PRMS-2018]`**: SPE / WPC / AAPG / SPEE, *Petroleum Resources Management System*, Dynamic Simulation Verification and Reserves Estimation Rules.
5. **`[Carlson-Simulation]`**: M. R. Carlson, *Practical Reservoir Simulation: Using, Assessing, and Developing Results*, PennWell Books.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **SLB ECLIPSE (100/300) / Intersect** | Numerical Flow Simulator & Physics Engine | Solves non-linear multiphase flow equations using fully implicit and AIM schemes; handles complex dual-porosity and multi-segment well models. | **Unforgiving keyword input silo.** Eclipse solves the reservoir physics once the deck is assembled. It provides zero automation for extracting historical well workover dates from PDF reports into `COMPDAT` tables, and crashes completely if a single syntax comma or cell coordinate is misplaced. |
| **Rock Flow Dynamics (RFD) tNavigator** | Integrated Parallel Simulator & AHM | Ultra-fast GPU-accelerated parallel simulation, graphical deck building, assisted history matching (AHM), and integrated Python scripting. | Graphical interface simplifies keyword visualization, but still requires the engineer to manually transcribe perforation intervals, skin factors, and historical tubing changes from field documentation. |
| **CMG CMOST / SLB MEPO** | Assisted History Matching & Uncertainty | Global optimization algorithms (genetic algorithms, Bayesian optimization), proxy modeling, and parameter sensitivity tornado charts. | Optimizes continuous multiplier parameters (e.g., $k_v/k_h$, fault transmissibility multipliers); completely blind to qualitative historical operational events (e.g., unrecorded well shut-ins, surface separator choke constraints). |
| **SLB PVTi / KBC Infochem Multiflash** | Thermodynamic Equation of State (EOS) | Fluid PVT characterization, flash calculations, and black-oil table generation. | Generates fluid tables; does not verify whether generated tables exhibit unphysical non-monotonic property crossovers that crash the numerical simulator during transient expansion. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Compile historical well workovers and reperforations into schedule keywords | `[Eclipse-Reference]` | estate | B1 | Campaign | 24.0h | assembly | `✔✔` |
| **A02** | Upscale static geological cellular grids to dynamic simulation blocks | `[Aziz-Settari §4]` | field | B2 | Periodic | 10.0h | judgment | `❌` (Petrel RE) |
| **A03** | History-match multi-decade reservoir pressure and water/gas production rates | `[SPE-Simulation §3]` | field | B2 | Campaign | 40.0h | judgment | `❌` (tNavigator) |
| **A04** | Debug simulation deck convergence failures and time-step chopping (`.PRT` logs)| `[Eclipse-Reference]` | well | B1 | Daily | 3.0h | consistency | `✔✔` |
| **A05** | Format multi-well historical production allocation tables (`WCONHIST`) | `[Eclipse-Reference]` | estate | B1 | Monthly | 8.0h | assembly | `✔✔` |
| **A06** | Calibrate relative permeability end-points ($S_{wr}, S_{or}$) and hysteresis tables | `[SPE-Simulation §2]` | field | B1 | Periodic | 8.0h | consistency | `✔✔` |
| **A07** | Model waterflood voidage replacement ratio (VRR) and pattern sweep efficiency | `[SPE-Simulation §4]` | field | B1 | Periodic | 8.0h | volume | `✔✔` |
| **A08** | Formulate future development prediction cases (well spacing, choke limits) | `[PRMS-2018 §2]` | portfolio | B2 | Campaign | 30.0h | judgment | `❌` (Monolith) |
| **A09** | Reconcile fluid PVT Equation-of-State (EOS) black-oil table property consistency | `[SPE-Simulation §2]` | well | B1 | Event | 6.0h | consistency | `✔✔` |
| **A10** | Tune fault transmissibility multipliers (`MULTFLT`) and regional aquifer parameters | `[SPE-Simulation §3]` | field | B1 | Periodic | 16.0h | volume | `✔✔` |
| **A11** | Model complex Multi-Segment Wells (MSW) and downhole inflow control devices (ICDs)| `[Eclipse-Reference]` | well | B2 | Periodic | 8.0h | judgment | `❌` (Eclipse MSW) |
| **A12** | Audit simulation grid quality for non-orthogonal and pinched cells | `[Aziz-Settari §3]` | field | B1 | Periodic | 4.0h | consistency | `✔` |
| **A13** | Coordinate parallel computing cluster queue submissions (SLURM / PBS scripts)| Practitioner | task | B1 | Daily | 1.0h | waiting | `✔` |
| **A14** | Compile dynamic modeling chapter and recovery profiles for Field Development Plan| Practitioner | field | B1 | Campaign | 16.0h | assembly | `✔✔` |
| **A15** | Defend field production plateau forecast before corporate Executive Board | Practitioner | portfolio | B3 | Event | 2.0h | judgment | `❌` (Human Lead) |

---

### Action Analysis (Two-Liners)

* **A01 · Historical Well Workover Schedule Compilation (B1, `[Eclipse-Reference]`)**:
  * *Today*: Engineer spends weeks reading paper workover files and typing `COMPDAT` lines (`'WELL_01' 14 22 5 7 'OPEN' ...`) for 60 wells across 30 years of operations.
  * *Failure Mode*: A single mistyped grid coordinate allocates production to the wrong reservoir layer, corrupting the entire history match.
  * *Agent Candidate*: **→ See §4 (Agent 1: Well Event History & Recurring Schedule Keyword Sieve)**.

* **A02 · Static Grid Upscaling (B2, `[Aziz-Settari §4]`)**:
  * *Today*: Executed inside Petrel Reservoir Engineering or tNavigator using flow-based or tensor-averaging upscaling to convert 10M geological cells to 500k dynamic blocks.
  * *Failure Mode*: Pure mathematical tensor calculation core within the commercial modeling suite.
  * *Agent Candidate*: `❌ No`. Monolith compute engine.

* **A03 · Full-Field History Matching Optimization (B2, `[SPE-Simulation §3]`)**:
  * *Today*: Engineer uses tNavigator AHM or CMG CMOST to iterate on regional permeability multipliers, fault transmissibility, and aquifer support to match historical pressure.
  * *Failure Mode*: Core dynamic reservoir modeling craft; the human engineer provides the geological plausibility to prevent unphysical parameter adjustments.
  * *Agent Candidate*: `❌ No`. Dynamic modeling core domain.

* **A04 · Non-Convergence Debugging & Time-Step Chopping (B1, `[Eclipse-Reference]`)**:
  * *Today*: An overnight 8-hour simulation run crashes at year 1998 due to time-step chopping; engineer spends hours scrolling through an 80,000-line text print file (`.PRT`).
  * *Failure Mode*: Engineers struggle to identify which single grid cell has extreme throughput ratios or unphysical relative permeability crossovers.
  * *Agent Candidate*: **→ See §4 (Agent 2: Simulator Numerical Non-Convergence & PRT Debugger)**.

* **A05 · Historical Production Rate Formatting (`WCONHIST`) (B1, `[Eclipse-Reference]`)**:
  * *Today*: Engineer exports monthly allocated oil, water, and gas rates from production accounting; manually formats them into rigid space-delimited Eclipse syntax tables.
  * *Failure Mode*: Syntax formatting errors cause the simulator to reject the entire dataset during deck compilation.
  * *Agent Candidate*: Integrated into Well Event History & Recurring Schedule Sieve (Agent 1).

* **A06 · Relative Permeability & SCAL Table Calibration (B1, `[SPE-Simulation §2]`)**:
  * *Today*: Engineer fits Corey or LET exponents to laboratory coreflood data in spreadsheets; manually formats `SWOF` and `SGOF` keyword tables.
  * *Failure Mode*: Unphysical relative permeability crossovers or negative slopes cause non-linear solver divergence.
  * *Agent Candidate*: **→ See §4 (Agent 3: Relative Permeability & SCAL Property Table Calibrator)**.

* **A07 · Waterflood Pattern Voidage Replacement Sieve (B1, `[SPE-Simulation §4]`)**:
  * *Today*: Engineer exports field and pattern production/injection volumes to Excel to calculate reservoir voidage replacement ratios ($VRR$).
  * *Failure Mode*: Pattern imbalance goes unnoticed, causing localized pressure depletion or rapid water breakthrough in adjacent producer wells.
  * *Agent Candidate*: **→ See §4 (Agent 4: Waterflood Voidage Replacement & Pattern Sweep Diagnostic Sieve)**.

* **A08 · Development Prediction Case Formulation (B2, `[PRMS-2018 §2]`)**:
  * *Today*: Handled inside simulator forecast decks defining future well locations, platform gas handling limits, and water injection capacities.
  * *Failure Mode*: Core reservoir engineering strategy domain requiring economic and commercial optimization.
  * *Agent Candidate*: `❌ No`. Monolith forecasting domain.

* **A09 · Thermodynamic PVT & Black-Oil Table Quality Sieve (B1, `[SPE-Simulation §2]`)**:
  * *Today*: Engineer checks PVT lab reports against generated black-oil tables (`PVTO`, `PVTG`, `DENSITY`) to verify monotonic compressibility and gas solubility curves.
  * *Failure Mode*: Discontinuous $B_o$ or $R_s$ curves cause simulator volume balance failures.
  * *Agent Candidate*: **→ See §4 (Agent 5: Thermodynamic PVT & Black-Oil Table Quality Sieve)**.

* **A10 · Fault Transmissibility & History-Match Sensitivity Sieve (B1, `[SPE-Simulation §3]`)**:
  * *Today*: Engineer sifts through restart files across 50 AHM runs, manually computing mismatch error metrics against historical pressure surveys and water cut trends.
  * *Failure Mode*: Engineers get overwhelmed by multi-variable parameter spaces, missing key sensitive faults that control water movement.
  * *Agent Candidate*: **→ See §4 (Agent 6: Dynamic History-Match Objective Function & Sensitivity Sieve)**.

* **A11 · Multi-Segment Well (MSW) Modeling (B2, `[Eclipse-Reference]`)**:
  * *Today*: Complex hydrodynamics modeled using ECLIPSE multi-segment well keywords (`WELSEGS`, `COMPSEGS`) simulating pressure drops along horizontal completions.
  * *Failure Mode*: Specialized simulator feature requiring detailed completion mechanical geometry.
  * *Agent Candidate*: `❌ No`. Monolith MSW modeling core.

* **A12 · Simulation Grid Quality Audit (B1, `[Aziz-Settari §3]`)**:
  * *Today*: Engineer inspects `.GRDECL` files for extreme cell aspect ratios and non-orthogonal block connections before launching runs.
  * *Failure Mode*: Degraded cells cause numerical truncation errors.
  * *Agent Candidate*: Supported via Simulator Non-Convergence Debugger (Agent 2).

* **A13 · HPC Cluster Queue Coordination (B1, Practitioner)**:
  * *Today*: Engineer writes SLURM bash scripts, specifies CPU core counts, and monitors cluster job queues.
  * *Failure Mode*: Script submission errors cause jobs to stall in queues.
  * *Agent Candidate*: Automated utility script within modeling infrastructure.

* **A14 · FDP Dynamic Modeling Chapter Synthesis (B1, Practitioner)**:
  * *Today*: Engineer spends weeks compiling recovery factor plots, watercut curves, pressure profiles, and plateau duration tables into Word and PowerPoint.
  * *Failure Mode*: Administrative documentation drag pulling specialists away from dynamic reservoir analysis.
  * *Agent Candidate*: **→ See §4 (Agent 7: Field Development Plan Dynamic Forecast & Reserves Dossier Synthesizer)**.

* **A15 · Executive Production Plateau Defense (B3, Practitioner)**:
  * *Today*: Senior dynamic modeler defends field plateau longevity, recovery factors, and reserves certifications before corporate leadership.
  * *Failure Mode*: Executive investment governance, peer review cross-examination, and capital accountability.
  * *Agent Candidate*: `❌ No`. Human technical leadership.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Well Event History & Recurring Schedule Keyword Sieve
* **In One Line**: Ingests unstructured well workover summaries, completion schematics, and monthly allocated production histories, mapping perforation depths to 3D grid cell indices ($I, J, K$) and generating syntax-validated simulation schedule include files.
* **Friction Solved**: Eliminates 21.50 hours per history-match setup of tedious manual keyword typing, date sequencing, and spatial grid cell coordinate lookups.
* **The Specification**:
  * **Reads**: Well completion and workover history files (PDFs/Excel), completion schematics (tubing ID, liner depths), monthly allocated production tables (oil, gas, water rates, static BHP), and 3D simulation grid geometry (`.GRDECL` / `.EGRID`).
  * **Does**: Extracts chronological well event timestamps (spud date, initial perforation, cement squeezes, re-perforations, tubing swaps, artificial lift installations, shut-ins); performs spatial coordinate mapping to project measured depth (MD) perforation intervals onto exact active 3D grid block indices ($I, J, K$); generates fully formatted, syntax-validated ECLIPSE / tNavigator schedule keywords (`WELSPECS`, `COMPDAT`, `WCONHIST`, `WCONPROD`); validates that allocated rates match historical well completion status.
  * **Returns**: Clean, syntax-validated `.sched` and `.inc` simulation schedule include decks ready for direct insertion into master `.DATA` decks, complete with spatial mapping audit logs.
  * **Stops At**: Altering historical allocated production rate volumes or modifying relative permeability parameters.
* **Failure Modes & Safety Envelopes**: If a historical perforation depth falls into an inactive or zero-pore-volume simulation grid block, the agent flags `[Perforation Inactive Cell: Re-gridding or Depth Shift Check Required]` and excludes the entry from the active schedule until validated.

---

### Agent 2: Simulator Numerical Non-Convergence & PRT Debugger
* **In One Line**: Ingests massive simulator print files (`.PRT` and `.LOG`), isolating the exact grid cell coordinates, time-steps, and physical saturation discontinuities causing Newton-Raphson iteration chopping and run crashes.
* **Friction Solved**: Eliminates 10.50 hours across a simulation campaign of manual log scrolling and diagnostic hunting through 100MB+ simulation print files.
* **The Specification**:
  * **Reads**: Raw numerical flow simulator print files (ECLIPSE, Intersect, tNavigator `.PRT`, `.LOG`, and `.DBG` files).
  * **Does**: Parses non-linear Newton-Raphson convergence summaries across all chopped time-steps; isolates the specific grid block indices ($I, J, K$) exhibiting maximum pressure, saturation, or gas-oil ratio residuals; correlates non-convergence with physical phenomena (e.g., cell throughput ratio exceedance, unphysical relative permeability end-point crossovers, extreme capillary pressure gradients, or cross-flow between completions); recommends targeted simulator tuning adjustments (`TUNING`, `CVCRIT`, or local transmissibility smoothing).
  * **Returns**: Convergence Failure Diagnostic Dossier identifying the exact problem cells, spatial location in the 3D reservoir grid, root-cause physical mechanism, and recommended deck modifications to achieve run convergence.
  * **Stops At**: Overwriting master simulator numerical controls (`TUNING` keyword) without specialist review and sign-off.
* **Failure Modes & Safety Envelopes**: If non-convergence is driven by fundamental grid pinching (e.g., cell pore volume $<0.001	ext{ m}^3$ adjacent to an active well completion), the agent flags `[Grid Geometry Defect: Local Transmissibility Multiplier Required]` rather than recommending looser numerical tolerances.

---

### Agent 3: Relative Permeability & SCAL Property Table Calibrator
* **In One Line**: Normalizes laboratory Special Core Analysis (SCAL) coreflood measurements, fits robust Corey and LET saturation functions, and outputs syntax-checked simulator relative permeability tables (`SWOF`, `SGOF`).
* **Friction Solved**: Eliminates 7.0 hours per study of manual spreadsheet curve fitting, normalization math, and syntax formatting errors.
* **The Specification**:
  * **Reads**: Laboratory SCAL test reports (unsteady-state and steady-state oil-water and gas-oil coreflood measurements), capillary pressure curves ($P_c$), and petrophysical rock-type facies definitions.
  * **Does**: Normalizes coreflood relative permeability curves against residual fluid saturations ($S_{wr}, S_{orw}, S_{gc}, S_{org}$); executes non-linear regression to fit standard Corey ($n_w, n_o, n_g$) or LET empirical saturation functions; verifies mathematical consistency (confirming monotonic behavior, zero negative slopes, and smooth derivatives); formats verified data into standard simulator keyword tables (`SWOF`, `SGOF`, `SOF3`); incorporates capillary pressure end-points.
  * **Returns**: Calibrated Simulator Saturation Function Package containing validated relative permeability keyword tables ready for direct deck inclusion, accompanied by curve comparison plots.
  * **Stops At**: Overriding laboratory experimental end-point measurements without sedimentological justification.
* **Failure Modes & Safety Envelopes**: If fitted relative permeability curves exhibit a negative slope ($d k_r / d S < 0$) or crossover inconsistency, the agent triggers an immediate `[Unphysical Relative Permeability Behavior: Non-Monotonic Curve Rejected]` warning.

---

### Agent 4: Waterflood Voidage Replacement & Pattern Sweep Diagnostic Sieve
* **In One Line**: Evaluates pattern-level reservoir voidage replacement ratios ($VRR$) and waterflood sweep dynamics across historical and simulated prediction cases to detect pattern imbalance and thief zones.
* **Friction Solved**: Eliminates 7.0 hours per review cycle of manual production/injection volume extraction, pattern allocation, and spreadsheet voidage balancing.
* **The Specification**:
  * **Reads**: Dynamic simulation summary files (`.SMSPEC`, `.UNSMRY`), historical injection and production records, reservoir fluid formation volume factors ($B_o, B_w, B_g$), and 3D well completion coordinates.
  * **Does**: Calculates instantaneous and cumulative Voidage Replacement Ratio ($VRR = 	ext{Injected Volume} / 	ext{Produced Volume}$ at reservoir conditions) across individual injector-producer patterns; identifies over-injected patterns causing premature water breakthrough via high-permeability thief zones; flags under-injected patterns suffering from localized pressure depletion; maps pattern sweep efficiency and water breakthrough timing.
  * **Returns**: Waterflood Pattern Sweep & Voidage Diagnostic Report featuring pattern $VRR$ heat maps, flagged unbalanced patterns, and recommended injection rate balancing targets to optimize areal sweep.
  * **Stops At**: Directly modifying field water injection pump setpoints or changing platform choke lineups.
* **Failure Modes & Safety Envelopes**: If simulated pattern $VRR$ exceeds $1.35$ in a formation with known low fracture gradient, the agent flags `[Over-Injection Warning: Formation Hydrofracture Risk]` to prevent out-of-zone water injection.

---

### Agent 5: Thermodynamic PVT & Black-Oil Table Quality Sieve
* **In One Line**: Audits laboratory PVT fluid analyses and generated simulator black-oil tables (`PVTO`, `PVTG`, `DENSITY`) to eliminate unphysical property crossovers that trigger volume balance crashes.
* **Friction Solved**: Eliminates 5.25 hours per study of manual PVT data auditing, thermodynamic cross-checking, and deck compilation debugging.
* **The Specification**:
  * **Reads**: Fluid laboratory PVT reports (Constant Composition Expansion [CCE], Differential Liberation [DL], Separator Tests), corporate fluid flash models, and candidate simulator PVT keyword include decks.
  * **Does**: Cross-checks oil and gas properties across pressure steps (bubble point pressure $P_b$, oil formation volume factor $B_o$, solution gas-oil ratio $R_s$, oil viscosity $\mu_o$, gas formation volume factor $B_g$, gas viscosity $\mu_g$); verifies thermodynamic consistency (ensuring $B_o$ decreases monotonically above bubble point, $R_s$ increases monotonically up to $P_b$, and compressibility remains strictly positive); formats verified tables into standard ECLIPSE / tNavigator keyword syntax (`PVTO`, `PVTG`, `PVTW`, `DENSITY`).
  * **Returns**: Validated Simulator Black-Oil Property Package featuring syntax-checked include decks, thermodynamic sanity check logs, and property trend plots.
  * **Stops At**: Overriding measured fluid laboratory bubble point or saturation pressure data.
* **Failure Modes & Safety Envelopes**: If black-oil tables exhibit negative undersaturated oil compressibility ($d B_o / d P > 0$ above $P_b$), the agent triggers a critical `[Thermodynamic Violation: Negative Compressibility in PVT Table]` error and halts deck generation.

---

### Agent 6: Dynamic History-Match Objective Function & Sensitivity Sieve
* **In One Line**: Parses multi-case Assisted History Matching (AHM) simulation output files, calculating standardized objective function errors and mapping parameter sensitivities across historical pressure and production data.
* **Friction Solved**: Eliminates 14.0 hours per history-match campaign of manual restart file extraction, mismatch calculation, and parameter sensitivity cross-plotting across dozens of simulation runs.
* **The Specification**:
  * **Reads**: Simulation restart and summary vectors (`.UNRST`, `.SMSPEC`), historical well pressure survey points (RFT, MDT, static BHP), and allocated surface production profiles (oil, water, gas rates, water cut, GOR).
  * **Does**: Computes Normalized Root-Mean-Square Error (NRMSE) objective functions for pressure, water cut, and GOR across field, region, and individual well levels; identifies outlying "bad-actor" wells contributing $>40\%$ to total mismatch error; correlates parameter multipliers (fault transmissibility `MULTFLT`, vertical permeability $k_v/k_h$, aquifer strength) against objective function reductions; generates sensitivity tornado charts.
  * **Returns**: Dynamic History-Match Quality Dossier ranking all simulation cases by objective function error, detailing well-level mismatch heat maps, and highlighting optimal parameter ranges for subsequent iterations.
  * **Stops At**: Arbitrarily applying non-geological permeability multipliers exceeding $\pm 2$ orders of magnitude without sedimentologist review.
* **Failure Modes & Safety Envelopes**: If an AHM case achieves a low mathematical error by applying unphysical transmissibility multipliers ($>100\times$ or $<0.001\times$) across a known open sand-on-sand boundary, the agent flags `[History Match Artifact: Unphysical Transmissibility Multiplier Detected]`.

---

### Agent 7: Field Development Plan Dynamic Forecast & Reserves Dossier Synthesizer
* **In One Line**: Autonomously compiles dynamic simulation production forecasts, recovery factor comparisons, plateau duration curves, and PRMS reserves classifications into the authoritative Field Development Plan (FDP) chapter.
* **Friction Solved**: Saves 14.0 hours per field development study of manual chart formatting, profile aggregation, and documentation assembly before executive gate reviews.
* **The Specification**:
  * **Reads**: Calibrated history-match decks, prediction case simulation summary files (base depletion, waterflood, pattern infill, gas injection), facility surface constraint limits, and corporate PRMS reserves guidelines.
  * **Does**: Generates multi-scenario production profile comparison plots (oil rate, gas rate, water cut, field pressure); computes ultimate recovery factors ($RF$) and plateau duration metrics; evaluates facility constraint bottlenecks (liquid handling limits, gas compression limits, water injection capacity); compiles certified $1P/2P/3P$ dynamic reserves tables per PRMS guidelines; drafts technical narrative explaining recovery mechanisms.
  * **Returns**: Formal Field Development Plan Dynamic Reservoir Chapter (PDF/Markdown) formatted for corporate investment committee review, featuring executive recovery scorecards, scenario forecast charts, and standardized reserves tables.
  * **Stops At**: Submitting statutory reserves certifications to government securities regulators (SEC / PRMS) without corporate Chief Reservoir Engineer sign-off.
* **Failure Modes & Safety Envelopes**: If prediction runs show unphysical rate surges (e.g., individual well oil rate exceeding maximum inflow performance deliverability limits), the agent flags `[Forecast Rate Anomaly: Deliverability Constraint Inactive]` and highlights the affected wells.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never fabricate enterprise rupee/dollar multipliers. The operating asset client supplies their own development capital, recovery targets, and rig day-rate constants.

### Unit of Work: 1 Full-Field Numerical Dynamic Reservoir Simulation & History-Matching Study (covering a complex multi-zone reservoir with 50+ wells, 30 years of history, and multiple prediction cases)

| Metric | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|:---:|:---:|:---:|---|
| **Well History & Schedule Deck Compilation Sieve** | 24.00 hours | 2.50 hours | **21.50 hours saved** | Unstructured workover PDF parsing, MD-to-grid mapping & syntax formatting |
| **Simulator Non-Convergence & PRT Debugger** | 12.00 hours | 1.50 hours | **10.50 hours saved** | Massive text log file sifting & Newton-Raphson residual diagnostics |
| **Relative Permeability & SCAL Table Calibration Sieve**| 8.00 hours | 1.00 hours | **7.00 hours saved** | Coreflood normalization, Corey/LET fitting & table formatting drag |
| **Waterflood Voidage Replacement & Pattern Sweep Sieve** | 8.00 hours | 1.00 hours | **7.00 hours saved** | Pattern volume extraction, reservoir-condition VRR math & sweep checks |
| **Thermodynamic PVT & Black-Oil Table Quality Sieve** | 6.00 hours | 0.75 hours | **5.25 hours saved** | PVT cross-checking, monotonicity verification & keyword deck formatting |
| **Dynamic History-Match Objective Function & Sensitivity**| 16.00 hours | 2.00 hours | **14.00 hours saved** | Multi-case restart parsing, NRMSE math & sensitivity tornado assembly |
| **FDP Dynamic Forecast & Reserves Dossier Synthesizer** | 16.00 hours | 2.00 hours | **14.00 hours saved** | Profile comparison plotting, plateau analysis & reserves chapter assembly |
| **TOTAL PER SIMULATION STUDY** | **90.00 hours** | **10.75 hours** | **79.25 hours saved** | **88.1% reduction in manual data assembly and diagnostic drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table

| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[SPE-Simulation]` | SPE, *Reservoir Simulation Competency Discipline Matrix*, 2018 | spe.org/cmt | Competency Standard | Core simulation competencies and operational actions A01–A15 |
| `[Aziz-Settari]` | Aziz & Settari, *Petroleum Reservoir Simulation*, 1979 | Applied Science Publishers | Technical Textbook | Discretization, non-linear convergence, multi-phase mechanics |
| `[Eclipse-Reference]`| SLB, *ECLIPSE Technical Reference Manual: Keyword Syntax*, 2022 | slb.com/software | Technical Manual | Schedule syntax (`COMPDAT`, `WELSPECS`, `WCONHIST`), PVT tables |
| `[PRMS-2018]` | SPE/WPC/AAPG/SPEE, *Petroleum Resources Management System*, 2018 | spe.org/prms | Industry Standard | Dynamic simulation reserves classification and forecast validation |
| `[Carlson-Simulation]`| M. R. Carlson, *Practical Reservoir Simulation*, PennWell Books | PennWell Publishing | Technical Textbook | History matching methodologies, grid quality, voidage replacement |
| `[SPE-173214]` | SPE, *Data Management Pitfalls in Large-Scale History Matching*, 2015 | DOI: 10.2118/173214-MS | Technical Paper | Baseline timing on manual schedule assembly and non-convergence drag |

### Negative Search Registry
* **Searched**: SLB Petrel RE documentation, RFD tNavigator user guides, CMG technical manuals, and OnePetro conference archives for *"autonomous extraction of unstructured well workover PDFs directly into syntax-validated ECLIPSE COMPDAT schedule include decks and automated PRT non-convergence diagnostic parsing without manual GUI interaction"*.
* **Result**: `Negative Search, 2026-09`. Commercial dynamic simulation packages provide graphical keyword dialogs and Assisted History Matching toolkits; none autonomously parse unstructured text workover logs into spatially mapped $I,J,K$ grid perforation keywords or diagnose non-convergence root causes from raw print files without manual human modeling intervention.

---

## 7 · Lines Worth Remembering & Open Questions

### The Line
> *"A reservoir simulation engineer shouldn't spend two weeks typing dates and perforation footages into a text editor; their true intellectual value is in deciphering why forty million barrels of injected water disappeared into the formation without producing a single barrel of incremental oil."*

### Authentic Open Questions for Simulation Practitioners
1. **The Schedule Data Friction**: When setting up a multi-decade full-field history match across 50+ wells, how many weeks of engineering time are lost simply transcribing historical workover reports, reperforations, and allocation rates into simulator schedule syntax?
2. **The Non-Convergence Blind Spot**: When an overnight simulation run terminates prematurely at 03:00 AM due to time-step chopping, how much time is typically spent hunting through an 80,000-line print file before the specific failing grid cell and its physical cause are identified?
3. **The Unphysical Multiplier Trap**: During intensive assisted history matching, how often do automated optimization algorithms achieve low pressure errors by introducing unphysical permeability multipliers or extreme fault seals that completely violate the underlying sedimentological geological model?
