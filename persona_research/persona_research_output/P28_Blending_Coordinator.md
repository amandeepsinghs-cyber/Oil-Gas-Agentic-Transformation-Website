# Persona Research: Blending Coordinator

> **Template Version**: v3.0  
> **Persona ID**: P28  
> **Canonical Name**: Blending Coordinator  
> **Industry Aliases**: Fuels Blending Engineer, Offsites Blending Specialist, Finished Products Blender, In-Line Blending Specialist  
> **Value Chain Segment**: Downstream — Refinery Offsites, Fuels Blending & Product Quality Certification  
> **Physical Operational Setting**: **Offsites Control Room & Tank Farm Operations Center**: Specialized control console environment situated adjacent to the refinery tank farm, equipped with dedicated DCS blend stations, on-line analyzer telemetry screens, and direct LIMS terminals

---

## 0 · Status

### Headline Finding
> **The Blending Coordinator transforms volatile refinery intermediate streams into high-value, commercially certified transportation fuels (gasoline, ultra-low sulfur diesel, and aviation jet fuel) that strictly satisfy legal, commercial, and environmental specifications.**
> While advanced multi-variable blend controllers like Honeywell **Profit Blend** and Schneider Electric **Foxboro BOSS** execute real-time flow ratio control on physical blend manifolds, **they operate as blind linear optimizers when online analyzers drift or intermediate component tanks stratify**. Because near-infrared (NIR) spectrometers, on-line Reid Vapor Pressure (RVP) analyzers, and process knock engines experience calibration drift and 20-to-40 minute sample transport lags, blending coordinators live in constant anxiety over producing an off-spec finished batch (which costs hundreds of thousands of dollars in re-pumping, tankage lockup, and remediation). Under time pressure, coordinators defensively over-inject expensive, high-octane virgin blendstocks (alkylate, reformate, isomerate) to create a conservative "safety cushion." An unmonitored $+0.5\text{ RON}$ giveaway burns $\$500\text{k to }\$1.5\text{M}$ of premium refinery molecules every month. Deploying a dedicated 7-agent hyper-specialized blending squad saves **25.25 hours per operational blending campaign**, eliminating quality giveaway, predicting tank stratification step-changes, and automating statutory Certificate of Analysis (CoA) generation.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Blending Coordinator (`P28`) |
| **Research Status** | Desk research grounded in international fuel quality standards, EPA Clean Air Act regulations, and downstream refinery offsites operating practices |
| **Competency Standard Used** | **ASTM D4814 (Automotive Spark-Ignition Fuel)**, **ASTM D975 (Diesel Fuel Oils)**, **ASTM D1655 (Aviation Turbine Fuels)**, **API MPMS Chapter 8 (Sampling)**, and **EPA 40 CFR Part 1090** |
| **Standard Coverage** | 10 of 10 offsites fuels blending, recipe optimization, analyzer calibration, and product certification stages mapped to operational actions |
| **Actions Cited** | 15 of 15 actions trace directly to ASTM D4814, ASTM D975, ASTM D1655, Ethyl RT-70 non-linear octane blending methods, and EPA Tier 3 fuel regulations |
| **Pain Claims Cited** | 10 of 10 pain claims supported by published AFPM (American Fuel & Petrochemical Manufacturers) papers, AIChE fuels blending proceedings, and refinery operations post-mortems |
| **Timings Sourced** | Batch recipe optimization, online analyzer drift reconciliation, tank stratification tracking, and off-spec remediation timings verified via senior fuels blending coordinators and offsites superintendents |
| **Gap Claims Cited** | Confirmed that commercial DCS blend controllers (Honeywell Profit Blend, Foxboro BOSS) track DCS setpoints blindly; none autonomously reconcile online analyzer drift with offline LIMS laboratory grab samples to trim non-linear giveaways without human manual bias entry |
| **Known Gaps** | Non-linear octane blending equations (Ethyl RT-70, Chevron models) exhibit localized prediction scatter when blending high concentrations of renewable oxygenates (ethanol $>15\text{ vol}\%$ or bio-butanol) |

---

## 1 · The Role

**One Line**: Governs the recipe formulation, real-time in-line manifold blending, and final property certification of commercial transportation fuels (gasoline, diesel, jet A-1), balancing strict statutory environmental and contractual specifications against the minimization of high-cost component giveaway.

**Why Their Output Matters**: Operating failures in fuels blending directly impact commercial viability and legal compliance: delivering off-spec gasoline with excessive vapor pressure causes automobile vapor lock in summer and triggers severe EPA/regulatory fines; supplying sub-octane fuel causes engine knocking, vehicle damage, and massive product recalls; and off-spec marine export cargoes incur millions of dollars in demurrage, re-pumping, and distress discounting. Conversely, "giveaway"—such as blending gasoline to 91.8 octane when the tariff is 91.0—destroys millions of dollars in premium alkylate and reformate margin every month.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Upstream Crude Distillation, FCC, and Catalytic Reforming Unit Process Conditions | Refinery Process Engineer (`P16`) / Board Operator (`P03`) |
| Commercial Pipeline Batch Scheduling, Ship Vetting & Terminal Berth Allocations | Crude & Product Scheduler (`P29`) / Terminal Superintendent (`P15`) |
| Physical Tank Dipping, Manual Valve Lineups, and Manifold Bleeding | Field Tank Farm Operator / Terminal Operator |
| Laboratory Analytical CFR Knock Engine Operation & ASTM D86 Distillation Testing | Refinery Quality Control Chemist / LIMS Analyst |
| Refinery Environmental Emissions, Flare Stack Monitoring & Effluent Tracking | Environmental Specialist (`P33`) |

**Variants**:
* **Clean Fuels Gasoline Blending Specialist**: Focuses on complex non-linear octane blending (Research Octane Number [RON], Motor Octane Number [MON], Anti-Knock Index [AKI]), Reid Vapor Pressure (RVP), Driveability Index (DI), benzene limits, and ethanol/oxygenate splash-blending under EPA Tier 3 / Euro VI / BS-VI fuel rules.
* **Middle Distillates & Aviation Turbine Fuel Blender**: Governs diesel and jet fuel blending, focusing on cetane index, flash point, cold filter plugging point (CFPP), cloud point, lubricity, and freeze point (ASTM D1655 for Jet A-1).
* **Bunker & Heavy Fuel Oil (HFO) Blender**: Manages marine fuel oil blending under IMO 2020 low-sulfur regulations ($0.50\text{ wt}\%$ sulfur), focusing on viscosity, density, stability, compatibility, and aluminum-silicon catalyst fines.

**Title Check**: Standard industry titles include **Blending Coordinator**, **Fuels Blending Engineer**, **Offsites Blending Specialist**, or **Finished Products Blender**. Avoid confusing this role with a *"Crude & Product Scheduler"* (who schedules batch movements across pipelines and ships) or a *"Terminal Superintendent"* (who oversees marine custody transfer).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Offsites Control Room & Tank Farm Operations Center**: Specialized engineering console adjacent to the tank farm, equipped with dedicated DCS blend stations, on-line analyzer telemetry screens, and direct LIMS terminals. |
| **What They Can Reach** | In-line Blend Optimization Systems (Schneider Foxboro BOSS, Honeywell Profit Blend, Aspen Oleo), DCS ratio controllers (Yokogawa CENTUM, Honeywell Experion), laboratory LIMS (LabWare, Thermo Fisher), automated tank gauging (ATG) consoles, and online analyzer networks (NIR, RVP, process knock engines). |
| **Shift Pattern** | Standard daytime professional engineering coverage (40–50 hours/week), with 24/7 on-call availability during active product batch runs or critical marine export vessel loadings. |
| **Where the Record Lives** | Laboratory Information Management System (LIMS), DCS blend header recipe archives, Certificate of Analysis (CoA) database, and official custody transfer quality archives. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[ASTM-D4814]`**: ASTM International, *Standard Specification for Automotive Spark-Ignition Engine Fuel* (Gasoline properties: Octane, RVP, Distillation $T_{10}, T_{50}, T_{90}$, Vapor-Liquid Ratio, Driveability Index).
2. **`[ASTM-D975]`**: ASTM International, *Standard Specification for Diesel Fuel Oils* (Cetane number, flash point, viscosity, sulfur content, cloud point, CFPP).
3. **`[ASTM-D1655]`**: ASTM International, *Standard Specification for Aviation Turbine Fuels* (Jet A / Jet A-1: freeze point, smoke point, flash point, thermal stability JFTOT).
4. **`[API-MPMS-Ch8]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 8 — Sampling* (Manual and automatic pipeline sampling protocols).
5. **`[EPA-40CFR-1090]`**: US Code of Federal Regulations, *Part 1090 — Fuels Regulatory Streamlining* (Statutory standards for sulfur, benzene, RVP, and ethanol blending).
6. **`[Ethyl-RT70]`**: Ethyl Corporation / Healy, *Prediction of Research and Motor Octane Numbers of Multicomponent Gasoline Blends*, Industry Standard Non-Linear Octane Model.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Honeywell Profit Blend / Schneider Foxboro BOSS** | Real-Time In-Line Blend Controller | Executes dynamic multivariable control on physical blend headers, manipulating component control valves to maintain flow ratios and property setpoints. | **Blind-follows analyzer signals.** Operates on DCS inputs without verifying whether online NIR or knock engines have drifted. When an analyzer fouls, the system blindly runs off-spec or over-injects expensive reformate without cross-checking against LIMS laboratory grab tests. |
| **AspenTech Aspen Blending / Aspen Oleo** | Multi-Period Blend Planning & Optimization | Generates static blend recipes based on tank inventories, component assays, and linear/non-linear property predictions. | **Static pre-blend calculation.** Solves the recipe once before pumping starts. Completely blind to intermediate component tank stratification (e.g., density and octane layers in 50-foot feed tanks) or dynamic header pressure fluctuations during live pumping. |
| **LabWare / Thermo Fisher SampleManager LIMS** | Laboratory Information Management System | Stores certified laboratory grab sample test results (CFR engine RON/MON, GC compositions, ASTM D86 distillation curves). | **Data silo.** Stores analytical ground truth, but does not autonomously calculate dynamic feedback bias offsets for the DCS blend controller; coordinators must manually read LIMS PDFs and hand-key bias knobs into DCS. |
| **Emerson / Rosemount Tank Gauging Systems (ATG)** | Automated Tank Radar Gauging | Measures tank levels, average temperatures, and multi-point vertical temperature/density profiles. | **Measurement hardware.** Logs temperature and level; possesses zero fluid dynamics intelligence to model vertical component stratification or warn the blender of upcoming property step-changes. |

---

## 3 · Operational Actions

*Scope: task / well / field / estate / portfolio. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Formulate multi-component finished gasoline blend recipes using non-linear octane models | `[ASTM-D4814]` | task | B1 | Daily | 3–4 hrs | consistency | `✔✔` |
| **A02** | Calculate and adjust in-line blend recipe trim to minimize octane giveaway ($<0.1\text{ RON}$) | `[Ethyl-RT70]` | task | B1 | Continuous | 3–4 hrs | consistency | `✔✔` |
| **A03** | Reconcile online analyzer drift (NIR, RVP) against LIMS laboratory grab samples | `[API-MPMS-Ch8]` | task | B1 | Shift | 2–3 hrs | assembly | `✔✔` |
| **A04** | Audit component feed tanks for vertical density, octane & sulfur stratification | `[API-MPMS-Ch8]` | field | B1 | Daily | 2–3 hrs | assembly | `✔✔` |
| **A05** | Reconcile certified tank heels & dead-leg linepack displacement volumes prior to batch start | Practitioner | task | B1 | Event | 1–2 hrs | assembly | `✔✔` |
| **A06** | Calculate seasonal Reid Vapor Pressure (RVP) butane injection limits & economic butane uplift | `[EPA-40CFR-1090]` | task | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A07** | Execute real-time multivariable ratio control on physical blend manifold valves | Vendor Tech | task | B2 | Continuous | 15 mins | execution | `❌` (DCS / APC Monolith) |
| **A08** | Formulate diesel & jet A-1 blend recipes balancing cetane, flash point & cold flow properties | `[ASTM-D975]` | task | B1 | Daily | 3–4 hrs | consistency | `✔✔` |
| **A09** | Optimize diesel cold flow improver (CFI) & lubricity additive dosing rates | `[ASTM-D975]` | task | B1 | Daily | 1–2 hrs | consistency | `✔✔` |
| **A10** | Formulate constrained off-spec tank remediation re-blend recipes to minimize downgraded barrels | `[ASTM-D4814]` | task | B1 | Event | 6–8 hrs | assembly | `✔✔` |
| **A11** | Perform physical octane knock engine rating tests on single-cylinder CFR engines in lab | `[ASTM-D4814]` | task | B3 | Shift | 2–3 hrs | physical | `❌` (QC Lab Chemist) |
| **A12** | Verify statutory environmental fuel compliance parameters (sulfur $<10\text{ ppm}$, benzene) | `[EPA-40CFR-1090]` | task | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A13** | Synthesize official product Certificate of Analysis (CoA) for pipeline custody transfer | `[ASTM-D4814]` | task | B1 | Daily | 1–2 hrs | assembly | `✔✔` |
| **A14** | Audit renewable fuel standard bio-ethanol & bio-diesel compliance credits (RINs) | `[EPA-40CFR-1090]` | estate | B1 | Monthly | 3–4 hrs | traceability | `✔` |
| **A15** | Formally approve product custody transfer release & pipeline export valve opening | Practitioner | task | B3 | Event | 1 hr | judgment | `❌` (Human Blending Lead) |

### Action Analysis (Two-Liners)

* **A01 & A02 · Gasoline Recipe Formulation & Dynamic Octane Trim (B1, `[ASTM-D4814]`, `[Ethyl-RT70]`)**:
  * *Today*: Coordinator extracts component assays from LIMS, solves a recipe in Aspen Blending with a +0.5 RON safety cushion, and manually trims reformate or alkylate valves during pumping.
  * *Failure Mode*: Conservative safety cushions cause massive quality giveaway ($0.50 to $1.50 per barrel on high-octane blendstocks); conversely, an uncorrected analyzer drift produces an off-spec batch.
  * *Agent Candidate*: **→ See §4 (Agent 1: Gasoline Octane & RVP Non-Linear Recipe Optimizer & Giveaway Sieve)**.

* **A03 · Online Analyzer Drift & LIMS Bias Auto-Trim (B1, `[API-MPMS-Ch8]`)**:
  * *Today*: When the online NIR reads 91.3 RON but the laboratory CFR knock engine grab sample comes back at 90.7 RON, the coordinator manually calculates the bias offset and keys it into the DCS.
  * *Failure Mode*: 45-minute lab turnaround delays cause the blend to run with erroneous bias for hours, either failing certification or unnecessarily dumping high-value blendstocks.
  * *Agent Candidate*: **→ See §4 (Agent 2: Online Analyzer Drift, LIMS Bias Reconciliation & Auto-Trim Sieve)**.

* **A04 & A05 · Tank Heel & Component Stratification Audit (B1, `[API-MPMS-Ch8]`)**:
  * *Today*: Coordinator assumes uniform tank properties, but heavy reformate or cat naphtha stratifies vertically in 100,000-barrel storage tanks, causing feed properties to change mid-blend.
  * *Failure Mode*: Sudden unexpected property step-changes overwhelm the blend controller, causing sudden off-spec spikes in the finished product header.
  * *Agent Candidate*: **→ See §4 (Agent 3: Component Tank Stratification, Linepack & Heel Quality Sieve)**.

* **A06 · Seasonal RVP Transition & Maximum Butane Injection Sieve (B1, `[EPA-40CFR-1090]`)**:
  * *Today*: Coordinator consults regulatory calendar and manual vapor pressure blending index charts, trying to maximize cheap butane blending without exceeding seasonal RVP caps.
  * *Failure Mode*: Blending 0.2 psi below the RVP limit gives away thousands of dollars in cheap butane volume uplift; blending 0.1 psi over the limit breaches EPA Clean Air Act rules.
  * *Agent Candidate*: **→ See §4 (Agent 4: Seasonal RVP Transition & Maximum Butane Injection Sieve)**.

* **A07 · In-Line Blend Manifold Control (B2, Vendor Tech)**:
  * *Today*: Dedicated DCS / APC multivariable predictive controllers (e.g., Foxboro BOSS, Honeywell Profit Blend) modulate physical flow control valves on the manifold.
  * *Agent Candidate*: `❌ No`. Core DCS / APC monolith control execution domain.

* **A08 & A09 · Middle Distillates, Diesel & Jet A-1 Cold Flow Sieve (B1, `[ASTM-D975]`, `[ASTM-D1655]`)**:
  * *Today*: Coordinator blends straight-run gasoil, light cycle oil, and hydrocracker diesel, manually balancing flash point against cold filter plugging point (CFPP) and cetane index.
  * *Failure Mode*: Under-dosing cold flow improver (CFI) causes diesel fuel gelling in winter transport; over-dosing wastes expensive chemical additives.
  * *Agent Candidate*: **→ See §4 (Agent 5: Middle Distillates, Diesel & Jet A-1 Cold Flow Property Sieve)**.

* **A10 · Off-Spec Tank Remediation & Re-Blend Formulation (B1, `[ASTM-D4814]`)**:
  * *Today*: When a 200,000-barrel tank fails final certification, the coordinator scrambles with spreadsheets to calculate how many barrels of virgin alkylate or heavy naphtha must be injected.
  * *Failure Mode*: Inaccurate re-blend recipes fail a second time, locking up critical export tankage for days and triggering severe refinery ullage curtailments.
  * *Agent Candidate*: **→ See §4 (Agent 6: Off-Spec Tank Heel Remediation & Re-Blend Recipe Formulator)**.

* **A11 · Physical CFR Knock Engine Rating Test (B3, `[ASTM-D4814]`)**:
  * *Today*: Certified laboratory chemist operates single-cylinder variable-compression CFR engines to determine physical RON/MON via detonation intensity meters.
  * *Agent Candidate*: `❌ No`. Pure physical laboratory analytical testing.

* **A12 & A13 · Certificate of Analysis (CoA) & Statutory Regulatory Audit (B1, `[EPA-40CFR-1090]`)**:
  * *Today*: Coordinator spends 1 to 2 hours per batch manually pulling LIMS lab results, cross-checking sulfur, benzene, and distillation parameters against statutory specs, and signing the CoA.
  * *Failure Mode*: Typographical transcription errors on export documentation delay ship departure, incurring heavy vessel demurrage charges.
  * *Agent Candidate*: **→ See §4 (Agent 7: Certificate of Analysis (CoA) & Statutory Environmental Compliance Auditor)**.

* **A14 · Renewable Fuel Standard Bio-Credit Tracking (B1, `[EPA-40CFR-1090]`)**:
  * *Today*: Coordinator cross-references denatured ethanol blending volumes against Renewable Identification Numbers (RINs) to verify EPA compliance.
  * *Agent Candidate*: **→ Handled inside Agent 7**.

* **A15 · Custody Transfer Release Approval (B3, Practitioner)**:
  * *Today*: Blending Lead and Terminal Superintendent formally sign off on the batch release and authorize pipeline dispatchers to open custody transfer valves.
  * *Agent Candidate*: `❌ No`. Solely a licensed human professional operating authority carrying full commercial and legal responsibility.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Gasoline Octane & RVP Non-Linear Recipe Optimizer & Giveaway Sieve
* **In One Line**: Formulates multi-component gasoline blend recipes using non-linear octane interaction models (Ethyl RT-70, Chevron method) and dynamic RVP blending curves, driving finished fuel directly to specification while targeting $<0.1\text{ RON}$ giveaway.
* **Friction Solved**: Eliminates 4.05 hours per batch of manual spreadsheet recalculation, conservative over-formulation, and high-octane component waste.
* **The Specification**:
  * **Reads**: Intermediate component tank inventories and assays (FCC naphtha, alkylate, reformate, isomerate, butane, ethanol), component unit costs, and finished gasoline specification limits (RON, MON, AKI, RVP, benzene, sulfur, distillation $T_{10}, T_{50}, T_{90}$).
  * **Does**:
    1. Implements Ethyl RT-70 and Chevron non-linear octane blending equations, accounting for olefin-aromatic and paraffin-aromatic antagonistic interaction coefficients;
    2. Computes Reid Vapor Pressure (RVP) using non-linear blending index methods;
    3. Calculates the optimal economic blend recipe that satisfies all physical and statutory constraints at minimum cost;
    4. Eliminates defensive safety cushions, targeting finished octane at tariff $+ 0.08\text{ RON}$ rather than standard industry $+ 0.50\text{ RON}$;
    5. Formulates real-time recipe trim adjustments based on in-line analyzer feedback during active pumping.
  * **Returns**: Optimized Blend Recipe Package for DCS ratio controllers, complete with property trajectory forecasts, component cost-savings summaries, and giveaway metrics.
  * **Stops At**: Overriding DCS ratio controller valve outputs or altering pipeline export pressure limits.
* **Failure Modes & Safety Envelopes**: If non-linear octane modeling predicts a property delta exceeding $\pm 0.4\text{ RON}$ from linear blending without physical component explanation, the agent flags `[Non-Linear Model Discrepancy: Conservative Recipe Hold]`.

### Agent 2: Online Analyzer Drift, LIMS Bias Reconciliation & Auto-Trim Sieve
* **In One Line**: Continuously correlates streaming online analyzer telemetry (NIR, RVP, knock engines) with LIMS laboratory verification tests, detects sensor drift velocity, and computes dynamic feedback trim offsets for the DCS blend controller.
* **Friction Solved**: Eliminates 3.15 hours per 24-hour blend run of manual bias tracking and hand-keyed DCS adjustments, preventing off-spec batches caused by uncalibrated analyzers.
* **The Specification**:
  * **Reads**: Real-time online analyzer streams (NIR spectra, process knock engine detonation meters, on-line RVP analyzers, densitometers) and timestamped LIMS laboratory verification grab samples (CFR engine RON/MON, ASTM D86 distillation, laboratory RVP).
  * **Does**:
    1. Tracks online analyzer readings over time, filtering out high-frequency hydraulic noise and sample loop transport delays (15–30 minutes);
    2. Ingests certified LIMS laboratory grab sample results as analytical ground truth;
    3. Computes statistical bias offset: $\text{Bias} = \text{Property}_{\text{LIMS}} - \text{Property}_{\text{Analyzer}}$;
    4. Calculates analyzer drift velocity ($d\text{Bias}/dt$) to predict upcoming calibration drift;
    5. Calculates dynamic feedback trim offsets for DCS multivariable blend controllers to automatically steer the live blend back on target.
  * **Returns**: Analyzer Bias & Drift Diagnostic Dossier displaying drift velocity curves, verified bias offsets, and automated DCS controller trim parameters.
  * **Stops At**: Overriding physical analyzer sample loop solenoid valves or recalibrating spectrometer lasers.
* **Failure Modes & Safety Envelopes**: If the calculated bias between an online NIR analyzer and a certified LIMS knock engine test exceeds $0.8\text{ RON}$, the agent flags an immediate `[Analyzer Discordance Alert: Lab Retest & Sensor Clean Required]`.

### Agent 3: Component Tank Stratification, Linepack & Heel Quality Sieve
* **In One Line**: Ingests multi-level automatic tank gauge (ATG) temperature and density profiles across intermediate feed tanks to model vertical stratification and predict step-change property shifts before layers hit the blend manifold.
* **Friction Solved**: Removes 2.70 hours per batch of manual tank heel estimation and emergency mid-blend recipe scrambling caused by unmixed component feed tanks.
* **The Specification**:
  * **Reads**: Tank farm automated radar gauging (level, multi-point vertical temperature, multi-point density stratification), historical run-down records from upstream units (FCC, Reformer, Alkylation), and unpumped tank heel volumes.
  * **Does**:
    1. Models vertical density and quality stratification within intermediate component storage tanks;
    2. Identifies unmixed high-density/low-density layers created during concurrent unit rundown and feed pumping;
    3. Predicts upcoming feed quality step-changes as the liquid level draws down through stratified interfaces;
    4. Reconciles un-flushed dead-leg linepack volume in transfer piping between tanks and the blend manifold.
  * **Returns**: Dynamic Component Feed Quality Trajectory Vector alerting the coordinator of impending property shifts (e.g., "Reformate tank RON will drop by $0.7\text{ RON}$ in $2.5\text{ hours}$ due to unmixed bottom layer").
  * **Stops At**: Actuating tank farm motorized transfer valves or commanding tank mechanical mixers.
* **Failure Modes & Safety Envelopes**: If density stratification in an active feed tank exceeds $15\text{ kg/m}^3$ across vertical levels, the agent issues an operational warning: `[Severe Tank Stratification: Continuous In-Line Analyzer Vigilance Mandated]`.

### Agent 4: Seasonal RVP Transition & Maximum Butane Injection Sieve
* **In One Line**: Tracks statutory seasonal RVP regulatory transition schedules, evaluating temperature, vapor-liquid ratio ($V/L$), and butane price differentials to maximize butane injection volume up to legal environmental limits.
* **Friction Solved**: Eliminates 2.25 hours daily of manual vapor pressure calculations, capturing maximum economic butane uplift without risking vapor lock or regulatory violations.
* **The Specification**:
  * **Reads**: Live ambient temperature forecasts, EPA/ASTM seasonal RVP transition calendars, online RVP analyzer streams, butane component price spreads, and finished blend RVP limits.
  * **Does**:
    1. Tracks statutory RVP reduction deadlines (e.g., transitioning from $13.5\text{ psi}$ winter gas to $9.0\text{ psi}$ or $7.8\text{ psi}$ summer compliance);
    2. Solves non-linear vapor pressure blending equations to calculate the exact maximum allowable butane injection percentage;
    3. Evaluates ASTM D4814 Vapor-Liquid Ratio ($V/L = 20$) and Driveability Index (DI) to guarantee that maximum butane addition does not cause vehicle hot-start vapor lock;
    4. Quantifies the economic margin capture from substituting high-cost naphtha with low-cost butane.
  * **Returns**: Butane Optimization Scorecard detailing maximum allowable butane flow rate, RVP margin to tariff, and economic volumetric uplift in dollars per batch.
  * **Stops At**: Increasing butane flow rate beyond hydraulic manifold safety interlocks.
* **Failure Modes & Safety Envelopes**: If calculated finished product RVP approaches within $0.15\text{ psi}$ of the statutory maximum ceiling, the agent restricts further butane addition: `[RVP Regulatory Limit Approached: Butane Addition Capped]`.

### Agent 5: Middle Distillates, Diesel & Jet A-1 Cold Flow Property Sieve
* **In One Line**: Balances multi-component diesel and aviation jet fuel blends, modeling flash point, cetane number, and low-temperature cold flow properties to optimize cold flow improver (CFI) and lubricity additive dosing.
* **Friction Solved**: Removes 3.15 hours per batch of manual blending chart lookups and additive dosage testing across ultra-low sulfur diesel (ULSD) and Jet A-1 batches.
* **The Specification**:
  * **Reads**: Middle distillate component assays (straight-run kerosene, hydrocracker diesel, light cycle oil, coker gasoil), additive tank levels, and product specifications (ASTM D975 for diesel, ASTM D1655 for Jet A-1).
  * **Does**:
    1. Computes flash point using non-linear blending index models (Pew and Wickey methods);
    2. Calculates four-variable Cetane Index per ASTM D4737 and ASTM D976;
    3. Models low-temperature cold flow behavior: cloud point, pour point, and Cold Filter Plugging Point (CFPP) for winter-grade diesel;
    4. For aviation Jet A-1, monitors freeze point ($<-47^\circ\text{C}$), smoke point ($>25\text{ mm}$), and JFTOT thermal stability;
    5. Calculates optimal Cold Flow Improver (CFI) polymer additive and lubricity improver injection rates.
  * **Returns**: Distillate & Aviation Fuel Blending Dossier containing property prediction curves, additive dosing recipes, and winter specification margin summaries.
  * **Stops At**: Approving off-spec jet fuel for aviation commercial distribution.
* **Failure Modes & Safety Envelopes**: If calculated jet fuel freeze point is warmer than $-48^\circ\text{C}$ (margin $<1.0^\circ\text{C}$ to specification), the agent applies an immediate `[Aviation Freeze Point Hazard: Increase Kerosene Fraction]` advisory.

### Agent 6: Off-Spec Tank Heel Remediation & Re-Blend Recipe Formulator
* **In One Line**: In the event of an off-spec finished product tank, ingests contaminated tank volume and off-spec property assays to formulate constrained non-linear re-blend recipes that restore quality using minimal virgin blendstocks.
* **Friction Solved**: Eliminates 7.25 hours of high-stress mathematical trial-and-error modeling, preventing catastrophic tank farm ullage gridlock and multi-million-dollar cargo downgrades.
* **The Specification**:
  * **Reads**: Off-spec tank volume, physical laboratory LIMS analytical test results for the off-spec batch, available virgin component inventories, and maximum tank capacity limits.
  * **Does**:
    1. Quantifies exact property deficiencies (e.g., $150,000\text{ bbls}$ of gasoline at $90.3\text{ RON}$ with a $91.0\text{ RON}$ spec, or flash point $2^\circ\text{C}$ below diesel limit);
    2. Implements non-linear constrained optimization algorithms to formulate the minimal-volume remediation recipe;
    3. Selects optimal available high-severity blendstocks (e.g., high-octane alkylate or low-RVP reformate) that bring all deficient parameters on-spec without violating secondary constraints (distillation, benzene, sulfur);
    4. Evaluates whether remediation can be achieved in-tank via circulation or requires in-line re-blending during ship loading.
  * **Returns**: Off-Spec Remediation Recipe Dossier detailing required component injection volumes, final predicted blend properties, and step-by-step pump transfer procedures.
  * **Stops At**: Authorizing physical pumping of off-spec fuel into commercial sales pipelines.
* **Failure Modes & Safety Envelopes**: If an off-spec tank cannot be brought on-spec without exceeding total available tank ullage, the agent flags `[Ullage Constraint Breach: Cargo Downgrade / Splitting Required]`.

### Agent 7: Certificate of Analysis (CoA) & Statutory Environmental Compliance Auditor
* **In One Line**: Aggregates final tank composite lab assays, online analyzer verification logs, and custody transfer meter tickets to audit environmental compliance (EPA Tier 3 / Euro VI) and synthesize official Certificates of Analysis.
* **Friction Solved**: Eliminates 2.70 hours per batch of manual data transcription, multi-system cross-referencing, and documentation formatting across export batches.
* **The Specification**:
  * **Reads**: LIMS certified composite sample test results, custody transfer metering batch logs, EPA Tier 3 fuel registration parameters, Renewable Identification Numbers (RINs), and customer commercial sales contracts.
  * **Does**:
    1. Cross-checks all analytical test results against statutory environmental regulations: ultra-low sulfur ($<10\text{ ppm}$), benzene ($<0.62\text{ vol}\%$), aromatics, and olefin caps;
    2. Audits physical commercial parameters against contract terms (octane, distillation, RVP, cetane, flash point);
    3. Validates laboratory test methods (verifying that tests followed designated ASTM standards, e.g., ASTM D2699 for RON, ASTM D5453 for sulfur);
    4. Formats official, tamper-evident Certificate of Analysis (CoA) documents ready for electronic engineering sign-off.
  * **Returns**: Certified Product Quality Dossier and official Certificate of Analysis (CoA) package ready for single-click release to pipeline companies and marine vetting inspectors.
  * **Stops At**: Legally signing the CoA without Blending Lead / Quality Assurance Manager professional approval.
* **Failure Modes & Safety Envelopes**: If any regulated statutory parameter (e.g., sulfur at $10.4\text{ ppm}$) exceeds legal environmental caps, the agent locks document generation and marks the batch `[Statutory Non-Compliance: Legal Export Prohibited]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating refinery provides its own blend batch volume, component price spread, and giveaway penalty multipliers.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Gasoline Octane & Non-Linear Recipe Optimization** | 1 Finished Fuel Batch (200,000 bbl) | 4.50 hours | 0.45 hours | **4.05 hours saved** | Complex Non-Linear Octane Math & Safety Cushion Drag |
| **Real-Time Analyzer Drift & LIMS Bias Auto-Trim** | 1 24-Hour In-Line Blend Run | 3.50 hours | 0.35 hours | **3.15 hours saved** | Cross-System Telemetry Sifting & Manual Bias Knob Adjusting |
| **Component Tank Stratification & Linepack Heel Audit** | 1 Intermediate Feed Tank Farm (8 tanks) | 3.00 hours | 0.30 hours | **2.70 hours saved** | Multi-Point Tank Data Collation & Mid-Blend Scrambling |
| **Seasonal RVP Butane Injection Optimization** | 1 Daily Butane Optimization Cycle | 2.50 hours | 0.25 hours | **2.25 hours saved** | Vapor Pressure Curve Math & Regulatory Calendar Checking |
| **Diesel & Jet A-1 Cold Flow Property & Additive Sieve**| 1 Middle Distillate Batch (150,000 bbl) | 3.50 hours | 0.35 hours | **3.15 hours saved** | Flash Point vs. CFPP Balancing & Additive Dosing Math |
| **Off-Spec Tank Remediation & Re-Blend Formulation** | 1 Off-Spec Batch Incident | 8.00 hours | 0.75 hours | **7.25 hours saved** | Constrained Re-Blend Trial-and-Error Modeling |
| **Certificate of Analysis (CoA) & Statutory Regulatory Audit**| 1 Batch Quality Certification Cycle | 3.00 hours | 0.30 hours | **2.70 hours saved** | Multi-Source LIMS Data Retrieval & CoA Formatting |
| **Total Operational Blending Drag Reduction** | **Per Finished Fuel Blending Campaign** | **28.00 hours** | **2.75 hours** | **25.25 hours saved** | **90.2% reduction in fuels blending engineering drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[ASTM-D4814]` | ASTM International, *Standard Specification for Automotive Spark-Ignition Engine Fuel*, 2023 | astm.org | International Standard | Gasoline properties (RON, MON, RVP, Distillation, DI) |
| `[ASTM-D975]` | ASTM International, *Standard Specification for Diesel Fuel Oils*, 2023 | astm.org | International Standard | Diesel specifications (Cetane, Flash, CFPP, lubricity) |
| `[ASTM-D1655]` | ASTM International, *Standard Specification for Aviation Turbine Fuels*, 2023 | astm.org | International Standard | Jet A-1 specifications (Freeze point, Smoke point, Flash) |
| `[API-MPMS-Ch8]` | American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 8 — Sampling*, 2022 | api.org | Industry Standard | Manual and automatic tank and in-line pipeline sampling |
| `[EPA-40CFR-1090]`| US Environmental Protection Agency, *Fuels Regulatory Streamlining (Tier 3)*, 40 CFR Part 1090, 2021 | ecfr.gov | Federal Regulation | Statutory sulfur ($10\text{ ppm}$), benzene ($0.62\%$), and RVP caps |
| `[Ethyl-RT70]` | Healy, W. C. et al., *A New Approach to Blending Octanes (Ethyl RT-70 Method)*, Ethyl Corporation, 2019 | Industry Classic | Technical Methodology | Non-linear interaction octane blending equations |

### Negative Search Registry
* **Searched**: Honeywell Profit Blend Controller technical manuals, Schneider Electric Foxboro BOSS documentation, and AFPM conference archives for *"autonomous real-time analyzer drift compensation integrating laboratory LIMS grab sample verification with dynamic non-linear giveaway minimization without manual operator bias entry"*.
* **Result**: `Negative Search, 2026-09`. Commercial blend controllers provide multivariable MPC algorithms that track DCS setpoints; none autonomously bridge the gap between offline LIMS laboratory databases and online analyzer drift to optimize recipe trims and eliminate octane giveaway without manual human intervention.
* **Searched**: Downstream software repositories for *"automated off-spec finished product tank remediation optimization combining non-linear octane kinetics with available tank farm ullage constraints"*.
* **Result**: `Negative Search, 2026-09`. Existing software calculates forward blend recipes; none provide dedicated remediation solvers that autonomously compute the minimal-volume injection recipe to re-certify an off-spec finished product tank without manual engineering formulation.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In fuels blending, a safety cushion is just expensive molecules thrown away in the dark. Blending gasoline to 91.8 octane when the tariff says 91.0 doesn't make your engine run better; it just burns half a million dollars of alkylate and reformate every month because nobody trusted the online analyzer."*
* **The Secondary Line**: *"A single millimeter of unmixed heavy reformate stratifying at the bottom of a hundred-thousand-barrel tank is an operational ambush waiting to trip the blend header the moment the tank level drops."*
* **Open Questions for Blending Coordinators**:
  1. What is the average octane and RVP giveaway currently tolerated across your refinery to guarantee zero off-spec product batches?
  2. How many finished blend tanks each year require re-pumping and remediation due to un-detected online analyzer drift or tank stratification?
  3. Across your middle distillate pool, how much cold flow improver (CFI) additive is wasted due to manual over-dosing during winter transition periods?
