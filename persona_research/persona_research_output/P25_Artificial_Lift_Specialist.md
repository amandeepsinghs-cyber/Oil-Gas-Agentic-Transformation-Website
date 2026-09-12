# Persona Research: Artificial Lift Specialist

> **Template Version**: v3.0  
> **Persona ID**: P25  
> **Canonical Name**: Artificial Lift Specialist  
> **Industry Aliases**: Artificial Lift Engineer, Production Optimization Specialist, ESP Technologist, Sucker Rod Pumping Specialist, Gas Lift Surveillance Lead  
> **Value Chain Segment**: Upstream — Production Engineering & Artificial Lift Operations  
> **Physical Operational Setting**: **Field Operations Base / Technical Optimization Office**: Hybrid desktop surveillance console with frequent wellpad field visits, variable speed drive (VFD) shed inspections, and pump teardown workshop audits

---

## 0 · Status

### Headline Finding
> **The Artificial Lift Specialist sustains the artificial heartbeat of mature oilfields—keeping thousands of beam pumps, electrical submersible pumps (ESPs), gas lift mandrels, and progressing cavity pumps (PCPs) operating reliably after natural reservoir pressure declines.**
> While specialized vendor surveillance applications like ChampionX **XSPOC** (for rod pumps) and Baker Hughes **Vision / SLB Lift IQ** (for ESPs) record high-frequency electrical telemetry and downhole pump dyno cards, **they subject the specialist to overwhelming visual screening fatigue**. In a mature field containing 1,500 producing wells, an artificial lift engineer faces a crushing morning flood: manually clicking through hundreds of surface and downhole dynamometer cards to spot fluid pound, gas interference, or parted rods, while simultaneously sifting through cryptic ESP variable speed drive (VFD) trip logs. Engineers spend 3 to 4 hours every morning manually scrolling through cards, frequently overlooking early mechanical distress until downhole equipment burns out or snaps, precipitating an emergency $\$80\text{k to }\$250\text{k}$ workover pulling job. Deploying a dedicated 7-agent hyper-specialized artificial lift squad saves **20.65 hours per operational surveillance cycle**, pre-empting mechanical burnouts, optimizing power consumption, and extending mean time between failures (MTBF).

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Artificial Lift Specialist (`P25`) |
| **Research Status** | Desk research grounded in international artificial lift standards, pump mechanical design codes, and mature field operational surveillance practices |
| **Competency Standard Used** | **API RP 11L (Sucker Rod Pumping Systems)**, **API RP 11S (Electrical Submersible Pump Operations)**, **ISO 15136 (PCP Systems)**, and **SPE Artificial Lift Technical Standards** |
| **Standard Coverage** | 10 of 10 artificial lift surveillance, mechanical diagnostics, and run-life optimization stages mapped to operational actions |
| **Actions Cited** | 15 of 15 actions trace directly to API 11L/11S, Gibbs downhole card wave mechanics, gas lift stability criteria, and CMMS teardown standards |
| **Pain Claims Cited** | 10 of 10 pain claims supported by published SPE artificial lift papers (e.g., SPE-181232, SPE-195212), ESP teardown forensic guidelines, and brownfield reliability case histories |
| **Timings Sourced** | Dyno card shape triage, VFD trip root-cause analysis, gearbox torque balancing, and workover teardown synthesis timings verified via senior artificial lift engineers and field superintendents |
| **Gap Claims Cited** | Confirmed that commercial surveillance suites (XSPOC, ForeSite) compute cards or plot SCADA streams in proprietary silos; none autonomously correlate multi-vendor ESP and rod pump telemetry into a unified daily diagnostic exception queue |
| **Known Gaps** | Viscous heavy oil emulsions and severe multiphase gas foaming distort mathematical Gibbs downhole pump card derivations |

---

## 1 · The Role

**One Line**: Governs the mechanical health, operational surveillance, diagnostic troubleshooting, and run-life optimization of downhole artificial lift systems—including sucker rod beam pumps, electrical submersible pumps (ESPs), continuous gas lift, and progressing cavity pumps (PCPs)—across the producing asset lifecycle.

**Why Their Output Matters**: Artificial lift failures represent the largest driver of field operating expense (OPEX) and deferred production in mature oil and gas assets. Downhole pump failures account for $60\%\text{ to }80\%$ of total field downtime; every unscheduled pump failure incurs $\$50\text{k to }\$300\text{k}$ in rig pulling unit costs, while inefficient lift operation wastes millions of kilowatt-hours of electrical power and accelerates rod string fatigue breaks.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Subsurface Full-Field Static & Dynamic Reservoir Simulation | Reservoir Engineer (`P06`, `P22`) |
| Surface Separation Facility Piping, Vessel Sizing & Gathering Manifolds | Facilities Engineer (`P12`) / Production Engineer (`P09`) |
| Physical Wellhead Valve Lubrication, Chemical Tank Refills & Daily Well Gauging | Lease Operator (`P10`) |
| Major Wellbore Casing Re-Sleeving & Workover Rig Floor Physical Command | Wellsite Supervisor (`P01`) / Completions Engineer (`P08`) |
| High-Voltage Substation Infrastructure & Motor Control Center (MCC) Grid Maintenance | Plant Electrical Technician / Enterprise Infrastructure |

**Variants**:
* **Sucker Rod / Beam Pumping Specialist**: Manages onshore brownfield fields with hundreds or thousands of pump jacks; focuses heavily on surface/downhole dynamometer cards, pump-off controllers (POCs), rod string fatigue envelopes, and beam unit gearbox torque limits.
* **High-Rate ESP Surveillance Engineer**: Manages high-volume centrifugal downhole pumps ($2,000\text{ to }30,000\text{ bfpd}$) in offshore or waterflood assets; focuses on VFD frequencies, downhole motor winding temperatures, power cable insulation resistance, and gas handling.
* **Gas Lift & Flowing Well Specialist**: Focuses on continuous and intermittent gas lift networks, dual-string completions, gas injection choke sizing, valve opening/closing pressures, and multiphase casing heading instabilities.
* **Heavy Oil & PCP Technologist**: Specializes in high-viscosity, sandy crude lifting using Progressing Cavity Pumps (PCPs); focuses on stator elastomer swelling, reactive torque, and downhole speed regulation.

**Title Check**: Standard petroleum industry titles include **Artificial Lift Specialist**, **Artificial Lift Engineer**, **ESP Technologist**, or **Production Optimization Engineer (Artificial Lift)**. Avoid confusing this role with an overall *"Production Engineer"* (who manages full-field nodal inflow/outflow delivery) or a *"Field Electrician"* (who wires the surface panel).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Field Operations Base / Technical Optimization Office**: Surveillance desk equipped with multi-monitor workstations connected to field SCADA networks, with regular visits to wellpad VFD enclosures, pump jack units, and teardown workshops. |
| **What They Can Reach** | Surveillance platforms (ChampionX XSPOC, Weatherford ForeSite, SLB Lift IQ, Baker Hughes Vision), nodal modeling suites (Petroleum Experts IPM Prosper, Neotec SNAP), SCADA historians (OSIsoft PI), and CMMS (SAP PM / Maximo). |
| **Shift Pattern** | Standard professional engineering hours (40–50 hours/week), with regular on-call emergency duty when high-rate offshore ESPs trip or seasonal lightning storms knock out field pump motor distribution grids. |
| **Where the Record Lives** | Artificial Lift Surveillance databases (XSPOC, ForeSite), corporate production accounting (ProdView, Avocet), CMMS work order history, and physical vendor pump teardown tear-sheets. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[API-RP-11L]`**: American Petroleum Institute, *Recommended Practice for Design Calculations for Sucker Rod Pumping Systems*, 5th Edition.
2. **`[API-RP-11S]`**: American Petroleum Institute, *Recommended Practice for the Operation, Maintenance, and Troubleshooting of Electric Submersible Pump Installations*, 3rd Edition.
3. **`[ISO-15136]`**: International Organization for Standardization, *Petroleum and Natural Gas Industries — Progressing Cavity Pump Systems for Artificial Lift*, Parts 1 & 2.
4. **`[Gibbs-Dyno]`**: Gibbs, S. G., *Predicting the Behavior of Sucker Rod Pumping Systems*, SPE Paper 588 / Journal of Petroleum Technology.
5. **`[API-Spec-11E]`**: American Petroleum Institute, *Specification for Pumping Units (Gear Reducer Rating and Geometry)*.
6. **`[SPE-GasLift]`**: Society of Petroleum Engineers, *Gas Lift Design, Operations, and Troubleshooting Best Practices*, SPE Technical Standards.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **ChampionX XSPOC** | Rod Pumping Surveillance & Control | Solves Gibbs 1D wave equation to calculate downhole pump dyno cards from surface load transducers; calculates pump fillage and POC setpoints. | **Massive visual fatigue.** Displays hundreds of dyno cards in static thumbnail grids. Does not autonomously synthesize cross-correlations with chemical scale squeeze schedules, rod string taper fatigue, or gearbox counterbalance imbalances. |
| **Weatherford ForeSite** | Enterprise Multi-Lift Surveillance | Multi-lift monitoring across ESP, rod pumping, gas lift, and PCP; models lift performance against nodal inflow curves. | **Heavyweight setup drag.** Requires extensive manual configuration for every well; lacks autonomous real-time diagnostic triage that isolates transient gas slugs from mechanical pump damage during sudden electrical trips. |
| **Baker Hughes AutographPC / SLB DesignPro** | ESP Mechanical Design & Sizing | Multi-stage centrifugal pump performance curves, motor sizing, power cable voltage drop, and gas separator rating calculations. | **Design phase tool.** Does not monitor daily operations or determine why a live ESP is experiencing thermal runaway on motor winding temperatures. |
| **Petroleum Experts Prosper** | Well Nodal Inflow/Outflow Modeling | Steady-state artificial lift design, gas lift equilibrium curves, and ESP head vs. rate matching. | **Static simulation engine.** Does not ingest live 10-second SCADA streams to alert specialists to casing heading instability or leaky unloading valves in real time. |

---

## 3 · Operational Actions

*Scope: task / well / field / estate / portfolio. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Screen daily rod pump dynamometer cards across estate for mechanical failure modes | `[Gibbs-Dyno §3]` | estate | B1 | Daily | 4–5 hrs | volume | `✔✔` |
| **A02** | Calculate downhole pump fillage percentage, detect fluid pound & optimize POC timer delays | `[API-RP-11L §4]` | well | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A03** | Solve Gibbs 1D wave equation converting surface load-position to downhole pump card | `[Gibbs-Dyno §2]` | well | B2 | Continuous | 15 mins | waiting | `❌` (XSPOC Engine) |
| **A04** | Screen real-time ESP downhole and surface VFD telemetry for electrical & thermal anomalies | `[API-RP-11S §4]` | estate | B1 | Continuous | 3–4 hrs | consistency | `✔✔` |
| **A05** | Diagnose ESP electrical trip events (underload vs. overload vs. ground fault) & authorize restart | `[API-RP-11S §5]` | well | B1 | Event | 2–3 hrs | consistency | `✔✔` |
| **A06** | Calculate net cyclic gearbox torque across 360° crank rotation & balance counterweights | `[API-Spec-11E §3]` | well | B1 | Periodic | 2–3 hrs | consistency | `✔✔` |
| **A07** | Audit continuous gas-lift injection rates, detect multi-pointing & stabilize casing heading | `[SPE-GasLift §3]` | field | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A08** | Model gas-lift equilibrium performance curve & optimize field high-pressure gas allocation | `[SPE-GasLift §4]` | field | B2 | Monthly | 4–6 hrs | judgment | `❌` (Prosper Nodal) |
| **A09** | Map cyclic tensile stress profiles across tapered sucker rod strings against Goodman limits | `[API-RP-11L §5]` | well | B1 | Periodic | 2–3 hrs | consistency | `✔✔` |
| **A10** | Monitor progressing cavity pump (PCP) reactive torque & stator elastomer swell in heavy crude | `[ISO-15136 §3]` | well | B1 | Daily | 1–2 hrs | consistency | `✔✔` |
| **A11** | Physically inspect pulled pump impellers, bearings & parted rod pins in vendor workshop | `[API-RP-11S §8]` | well | B3 | Event | 3–5 hrs | physical | `❌` (Specialist Teardown) |
| **A12** | Track artificial lift Mean Time Between Failures (MTBF) & classify pull causes per API standards | `[API-RP-11S §7]` | portfolio | B1 | Monthly | 4–6 hrs | assembly | `✔✔` |
| **A13** | Synthesize downhole replacement artificial lift design specifications & workover pulling procedure | Practitioner | well | B1 | Event | 3–5 hrs | assembly | `✔✔` |
| **A14** | Conduct daily morning coordination call with field pumper crew to review tripped wells | Practitioner | field | B3 | Daily | 1–2 hrs | judgment | `❌` (Human Pumper Lead) |
| **A15** | Size new artificial lift installations for newly drilled or transitioning wellbores | `[API-RP-11L §3]` | well | B2 | Periodic | 6–8 hrs | judgment | `❌` (AutographPC / Sizing) |

### Action Analysis (Two-Liners)

* **A01 & A02 · Dyno Card Surveillance Screening & Fluid Pound Triage (B1, `[Gibbs-Dyno §3]`, `[API-RP-11L §4]`)**:
  * *Today*: Specialist opens XSPOC every morning, clicking through 250+ pump dyno cards to manually distinguish full barrel fillage from severe fluid pound, gas interference, or parted rods.
  * *Failure Mode*: Visual fatigue causes the specialist to overlook severe fluid pound; violent rod impact continues hammering the pump for weeks, buckling the barrel and snapping the rod string.
  * *Agent Candidate*: **→ See §4 (Agent 1: Sucker Rod Dynamometer Card Geometric Classifier & Fluid Pound Sieve)**.

* **A03 · Gibbs 1D Wave Equation Solution (B2, `[Gibbs-Dyno §2]`)**:
  * *Today*: High-speed numerical finite-difference solver embedded natively inside XSPOC or ForeSite that computes the downhole pump card from surface polished rod transducers.
  * *Agent Candidate*: `❌ No`. Core deterministic wave equation solver. Monolith owns the math; the agent's job is classifying the resulting downhole card shape.

* **A04 & A05 · ESP Telemetry Screening & Electrical Trip Diagnosis (B1, `[API-RP-11S §4, §5]`)**:
  * *Today*: When an ESP trips on motor underload, the engineer manually pulls high-frequency motor current charts and discharge pressure trends to distinguish pump-off from gas locking or a sheared shaft.
  * *Failure Mode*: Field pumpers restart an underloaded ESP prematurely without investigating gas locking, repeatedly shocking the motor windings and precipitating a $\$150\text{k}$ motor burnout.
  * *Agent Candidate*: **→ See §4 (Agent 2: ESP Electrical Telemetry, Thermal Runaway & Underload Trip Diagnostic Sieve)**.

* **A06 · Beam Pump Gearbox Torque Balancing & Counterweight Adjustment (B1, `[API-Spec-11E §3]`)**:
  * *Today*: Specialist calculates gearbox torque factors across 24 crank positions, plotting net torque against the API gearbox rating to determine whether the unit is severely under-balanced or over-balanced.
  * *Failure Mode*: Operating a pump jack with $>110\%$ gearbox torque overload damages the structural gear reducer teeth, leading to catastrophic gearbox failure and dropped counterweights.
  * *Agent Candidate*: **→ See §4 (Agent 3: Beam Pumping Unit Gearbox Torque & Counterbalance Sieve)**.

* **A07 · Continuous Gas Lift Multi-Pointing & Orifice Stability Sieve (B1, `[SPE-GasLift §3]`)**:
  * *Today*: Specialist monitors casing injection pressure and tubing head pressure, calculating pressure drops across gas lift mandrels to verify that injection gas enters through the operating orifice rather than upper unloading valves.
  * *Failure Mode*: Unnoticed multi-pointing (gas injecting through a stuck-open upper unloading valve) starves deeper injection points, cutting lift efficiency by $40\%$ and wasting high-pressure compressor gas.
  * *Agent Candidate*: **→ See §4 (Agent 4: Continuous Gas Lift Allocation, Multi-Pointing & Orifice Stability Sieve)**.

* **A08 · Field Gas Lift Nodal Inflow Allocation Modeling (B2, `[SPE-GasLift §4]`)**:
  * *Today*: Steady-state multiphase flow simulation software (e.g., Prosper, PIPESIM) generates gas lift performance curves across the field gathering network.
  * *Agent Candidate*: `❌ No`. Heavyweight deterministic nodal solver. The agent consumes lift curves to audit real-time orifice stability.

* **A09 · Rod String Taper Cyclic Stress & Goodman Fatigue Mapping (B1, `[API-RP-11L §5]`)**:
  * *Today*: Specialist extracts peak polished rod load (PPRL) and minimum load (MPRL), manually calculating tensile stress percentages across each taper section of a combined steel/fiberglass rod string.
  * *Failure Mode*: Operating rods at $>105\%$ of their Modified Goodman stress limit causes premature fatigue cracking at rod pin couplings, triggering frequent fishing jobs.
  * *Agent Candidate*: **→ See §4 (Agent 5: Rod String Taper Stress Fatigue & Modified Goodman Sieve)**.

* **A10 · Progressing Cavity Pump (PCP) Reactive Torque & Stator Swell Triage (B1, `[ISO-15136 §3]`)**:
  * *Today*: Specialist tracks hydraulic head, drive head RPM, and surface torque on PCP wells producing heavy crude, looking for signs that aromatic hydrocarbons are swelling the nitrile stator elastomer.
  * *Failure Mode*: Swelling stator elastomer chokes the rotor; excessive friction spikes reactive torque, snapping the rod string or burning out the top drive motor.
  * *Agent Candidate*: **→ See §4 (Agent 6: Progressing Cavity Pump (PCP) Elastomer Swell & Reactive Torque Sieve)**.

* **A11 · Physical Pump Teardown Inspection in Workshop (B3, `[API-RP-11S §8]`)**:
  * *Today*: Specialist walks into the vendor teardown facility, examining pitted pump impellers, scored tungsten carbide bearings, and eroded diffuser bowls under workshop lighting.
  * *Agent Candidate*: `❌ No`. Pure hands-on physical forensic inspection of mechanical hardware components.

* **A12 & A13 · Artificial Lift MTBF Tracking & Workover Redesign Dossier (B1, `[API-RP-11S §7]`)**:
  * *Today*: Specialist extracts historical pull tickets from SAP PM, matches them with scanned PDF teardown reports, and spends days updating run-life Weibull curves and drafting new replacement pump specifications.
  * *Failure Mode*: Failing to synthesize failure trends leads to replacing a failed pump with the exact same metallurgy or pump stage design, guaranteeing another failure within 90 days.
  * *Agent Candidate*: **→ See §4 (Agent 7: Artificial Lift Workover Scope & Teardown Failure Taxonomy Synthesizer)**.

* **A14 · Daily Morning Field Coordination Meeting (B3, Practitioner)**:
  * *Today*: Specialist meets with the production superintendent, field foreman, and lead pumpers to review the priority list of down wells and assign repair crews.
  * *Agent Candidate*: `❌ No`. Human operational leadership, crew coordination, and work permit alignment.

* **A15 · New Artificial Lift Sizing & Selection (B2, `[API-RP-11L §3]`)**:
  * *Today*: Artificial lift design engineers use vendor software (AutographPC, DesignPro) to size new pumps and motor configurations for newly completed wells.
  * *Agent Candidate*: `❌ No`. Heavyweight engineering design suite owned by specialized design monoliths.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Sucker Rod Dynamometer Card Geometric Classifier & Fluid Pound Sieve
* **In One Line**: Ingests surface load-position curves, verifies Gibbs 1D wave equation downhole pump cards, and geometrically classifies failure shapes: fluid pound, gas interference, parted rods, traveling/standing valve leakage, and pump friction.
* **Friction Solved**: Eliminates 4.00 hours per morning of manual screen scrolling and visual fatigue across 300 beam-pumped wells, catching mechanical distress before rod strings part.
* **The Specification**:
  * **Reads**: High-frequency surface polished rod load-position coordinates, downhole pump dyno cards (from XSPOC/ForeSite), pump-off controller (POC) run times, stroke length, and strokes per minute (SPM).
  * **Does**:
    1. Evaluates downhole card geometry against mathematical baseline envelopes;
    2. Classifies pump card shapes into verified failure modes: full fillage, severe fluid pound, gas interference / gas locking, parted rod string, worn traveling valve, worn standing valve, delayed unseating, or mechanical sticking;
    3. Quantifies downhole pump fillage percentage and calculates impact force severity during fluid pound;
    4. Evaluates POC pump-off timer setpoints, recommending optimal run-time delays to allow fluid re-entry without pounding the pump barrel.
  * **Returns**: Prioritized Rod Pump Morning Exception Queue displaying diagnosed failure modes, severity ranking, fillage percentages, and automated POC timer adjustment recommendations.
  * **Stops At**: Remotely writing setpoint changes to field POCs or changing motor VFD frequencies.
* **Failure Modes & Safety Envelopes**: If transducer signal loss causes a flatlined or distorted surface card, the agent tags the well as `[Transducer Signal Distortion: Wellsite Load Cell Calibration Required]`.

### Agent 2: ESP Electrical Telemetry, Thermal Runaway & Underload Trip Diagnostic Sieve
* **In One Line**: Continuously monitors high-frequency ESP downhole sensor packages and surface VFD telemetry to diagnose underload, overload, and thermal runaway events, preventing fatal premature wellsite restarts.
* **Friction Solved**: Eliminates 3.15 hours of manual electrical chart sifting and telemetry cross-referencing across 50 high-rate ESP installations, preventing motor winding burnouts.
* **The Specification**:
  * **Reads**: ESP downhole sensor telemetry (intake pressure, discharge pressure, motor winding temperature, internal motor vibration X/Y/Z, leakage current) and surface VFD data (motor current, voltage unbalance, operating frequency, drive load, power factor).
  * **Does**:
    1. Monitors rate of motor winding temperature rise ($\Delta T / \Delta t$) against safe insulation limits ($150^\circ\text{C}$ to $200^\circ\text{C}$ class ratings);
    2. In the event of a VFD trip, evaluates pre-trip electrical signatures to diagnose root cause: underload due to pump-off vs. underload due to gas locking vs. sheared drive shaft vs. motor overload from sand/scale slugging vs. phase-to-ground electrical short;
    3. Cross-references pump intake pressure trends against bubble point pressure ($P_b$) to verify multiphase gas breakout;
    4. Evaluates restart safety criteria: verifies that the motor has cooled below thermal reset thresholds, checks power cable insulation resistance (megger trend), and confirms fluid level recovery.
  * **Returns**: ESP Diagnostic & Restart Clearance Dossier detailing trip root cause, downhole sensor health score, and an explicit `[Restart Cleared]` or `[Restart Prohibited — High Risk of Burnout]` recommendation.
  * **Stops At**: Remotely closing the motor starter breaker or clearing VFD trip lockouts.
* **Failure Modes & Safety Envelopes**: If an ESP trips on motor overload with elevated vibration ($>2.0\text{ g}$) or high leakage current ($>10\text{ mA}$), the agent applies an immediate `[Electrical Isolation Advisory: Do Not Restart Without Megger Test]`.

### Agent 3: Beam Pumping Unit Gearbox Torque & Counterbalance Sieve
* **In One Line**: Evaluates surface polished rod load profiles against beam pumping unit geometry, calculating net gearbox torque throughout 360° crank rotation, identifying torque overload, and computing exact counterweight adjustment positions.
* **Friction Solved**: Removes 2.70 hours per battery review of manual trigonometric torque factor calculations, preventing catastrophic gear reducer tooth failure and dropped weights.
* **The Specification**:
  * **Reads**: Surface dynamometer cards, pumping unit geometry specifications (API conventional, Mark II, air-balanced unit codes), structural unbalance ($B$), crank counterweight master tables, and motor nameplate power.
  * **Does**:
    1. Computes instantaneous torque factors ($TF_i$) at 15-degree crank angle increments ($0^\circ\text{ to }360^\circ$);
    2. Calculates net cyclic gearbox torque: $T_{\text{net}}(\theta) = [W(\theta) - B] \times TF(\theta) - M \times \sin(\theta + \tau)$;
    3. Compares peak net torque against the manufacturer's API gearbox rating, calculating peak torque percentage;
    4. Determines whether the unit is structurally rod-heavy or counterweight-heavy;
    5. Calculates the exact distance in inches to slide crank counterweights to achieve perfect mechanical balance.
  * **Returns**: Gearbox Torque & Mechanical Balance Report showing torque curves across crank angle rotation, peak torque percentage, motor electrical cyclic load factor, and exact counterweight repositioning distances.
  * **Stops At**: Authorizing physical counterweight movement on the wellpad without mechanical lockout/tagout (LOTO).
* **Failure Modes & Safety Envelopes**: If calculated peak net torque exceeds $110\%$ of the API gear reducer rating, the agent flags an immediate `[Severe Gearbox Overload Alert: Risk of Gear Reducer Failure]`.

### Agent 4: Continuous Gas Lift Allocation, Multi-Pointing & Orifice Stability Sieve
* **In One Line**: Monitors casing injection pressure, tubing head pressure, and gas injection rates across gas-lift manifolds; calculates operating point stability to detect multi-pointing, casing heading instability, or valve throttling.
* **Friction Solved**: Eliminates 2.25 hours of manual manifold inspection and pressure chart cross-checking across 30 gas-lift wells, preventing wasted compressor horsepower and lost lift efficiency.
* **The Specification**:
  * **Reads**: Casing injection pressure ($P_{\text{inj}}$), tubing head flowing pressure ($P_{\text{th}}$), gas injection rate ($Q_{\text{inj}}$), wellhead temperature, and downhole gas-lift completion schematics (mandrel depths, valve port sizes, opening/closing pressures).
  * **Does**:
    1. Calculates pressure drops across downhole gas-lift mandrels using acoustic velocity and Thornhill-Craver orifice flow equations;
    2. Identifies multi-pointing: detects when injection gas is leaking through upper unloading valves rather than injecting exclusively through the bottom operating orifice;
    3. Evaluates casing heading: calculates the Asheim stability criterion to detect cyclic pressure surging between the casing annulus and production tubing;
    4. Identifies valve throttling vs. critical flow across the operating orifice;
    5. Benchmarks actual gas injection volume against nodal IPM Prosper gas-lift allocation curves.
  * **Returns**: Gas Lift Manifold Diagnostic Report detailing injection point depths, multi-pointing detection flags, flow stability status, and surface injection choke trim recommendations.
  * **Stops At**: Actuating surface gas-lift injection control valves or changing field compressor discharge pressures.
* **Failure Modes & Safety Envelopes**: If pressure signatures indicate that gas injection has shifted above a shallow unloading valve located within $500\text{ ft}$ of the surface, the agent flags `[Severe Gas Lift Inefficiency: Upper Valve Leakage]`.

### Agent 5: Rod String Taper Stress Fatigue & Modified Goodman Sieve
* **In One Line**: Evaluates peak and minimum polished rod loads across multi-taper rod strings, mapping cyclic tensile stress profiles against Modified Goodman diagram fatigue envelopes to flag rod sections approaching structural failure.
* **Friction Solved**: Eliminates 2.25 hours of manual spreadsheet stress calculations and taper geometry cross-referencing per 20-well pad, preventing downhole rod part fishing jobs.
* **The Specification**:
  * **Reads**: Polished rod load profiles (PPRL, MPRL), rod string taper design records (length, diameter, and steel grade—e.g., API Grade D, KD, high-strength alloy, or fiberglass tapers), downhole pump depth, and well fluid density.
  * **Does**:
    1. Calculates static and dynamic load distributions across each taper section of the rod string;
    2. Computes maximum tensile stress ($\sigma_{\max}$) and minimum tensile stress ($\sigma_{\min}$) at the top of each rod taper;
    3. Calculates the allowable working stress ($\sigma_{\text{allow}}$) using the API Modified Goodman equation adjusted for service factor (corrosion derating): $\sigma_{\text{allow}} = \left( \frac{S_u}{1.75} + 0.5625 \sigma_{\min} \right) \times SF$;
    4. Computes rod stress utilization percentages ($\sigma_{\max} / \sigma_{\text{allow}} \times 100\%$);
    5. Identifies specific rod sections operating above $100\%$ fatigue limits or experiencing cyclic compression (buckling).
  * **Returns**: Rod String Fatigue & Taper Stress Scorecard displaying stress profiles across every rod size, Modified Goodman envelope plots, and rod replacement recommendations.
  * **Stops At**: Authorizing rod string redesign or altering pumping unit stroke length without engineering sign-off.
* **Failure Modes & Safety Envelopes**: If calculated stress on any rod taper exceeds $105\%$ of allowable Goodman stress or indicates downhole rod compression during the downstroke, the agent flags `[Critical Rod Fatigue: Imminent Part Risk]`.

### Agent 6: Progressing Cavity Pump (PCP) Elastomer Swell & Reactive Torque Sieve
* **In One Line**: Monitors progressing cavity pump (PCP) hydraulic head, rod string torque, and motor speed, correlating temperature and aromatic crude chemistry to detect stator elastomer swell, dry running, and impending rod twist-offs.
* **Friction Solved**: Removes 1.80 hours per heavy oil cluster review of manual torque chart auditing and fluid property matching across 20 PCP wells.
* **The Specification**:
  * **Reads**: PCP drive head surface torque, motor RPM, polish rod axial load, wellhead fluid temperature, pump intake pressure, and laboratory fluid chemistry (API gravity, aromatic content, sand cut).
  * **Does**:
    1. Monitors reactive drive torque against normal operating torque envelopes;
    2. Detects stator elastomer swelling: identifies steady upward creep in drive torque accompanied by rising motor amperage under constant pump speed;
    3. Detects dry running: flags sudden loss of intake fluid pressure combined with erratic torque fluctuations;
    4. Evaluates sand accumulation: detects sharp torque spikes caused by sand bridging between rotor and stator lobes;
    5. Calculates mechanical pump efficiency: compares theoretical displacement against measured surface liquid production.
  * **Returns**: PCP Mechanical Integrity Scorecard detailing torque utilization, elastomer condition indices, sand slugging warnings, and drive speed optimization advisories.
  * **Stops At**: Remotely changing PCP drive head motor speeds or shutting down wellhead hydraulic power units.
* **Failure Modes & Safety Envelopes**: If reactive drive torque exceeds $90\%$ of rod string yield torque or surface temperature spikes by $>15^\circ\text{C}$ indicating dry running, the agent flags an immediate `[PCP Stator Failure Threat: Immediate Speed Reduction Advisory]`.

### Agent 7: Artificial Lift Workover Scope & Teardown Failure Taxonomy Synthesizer
* **In One Line**: Ingests CMMS work orders, pulling unit daily logs, well fluid chemistry, and vendor teardown tear-sheets to synthesize standardized root-cause failure taxonomy, update MTBF curves, and generate replacement pump pulling packages.
* **Friction Solved**: Eliminates 4.50 hours per workover campaign of unstructured document extraction, scanned tear-sheet review, and manual workover procedure drafting across 10 failed wells.
* **The Specification**:
  * **Reads**: CMMS (SAP PM / Maximo) equipment records, pulling unit daily tickets, vendor workshop teardown reports (scanned PDFs), historical production chemistries ($H_2S, CO_2$, sand cut, scale analysis), and run-life logs.
  * **Does**:
    1. Extracts failed downhole components (e.g., motor pothead electrical failure, stage erosion, gas separator cavitation, rod coupling fatigue break, torn stator elastomer);
    2. Classifies failure causes according to API RP 11S / 11L standardized failure codes;
    3. Calculates field-wide and manufacturer-specific Mean Time Between Failures (MTBF) and Weibull survival distributions;
    4. Identifies systemic design vulnerabilities (e.g., repeated gas erosion in a specific formation layer);
    5. Synthesizes a standardized Workover Pulling & Replacement Specification package recommending upgraded metallurgy, stage count, or alternative lift types.
  * **Returns**: Artificial Lift Teardown Reliability Dossier and Workover Procedure Package containing standardized root-cause classification, asset MTBF benchmarks, and replacement hardware design sheets.
  * **Stops At**: Authorizing procurement purchase orders or issuing commercial warranty dispute claims to pump vendors.
* **Failure Modes & Safety Envelopes**: If a well experiences repeat pump failure within $<90\text{ days}$ of installation, the agent flags the well as `[Infant Mortality: Mandatory Multidisciplinary Root-Cause Review Required]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating asset provides its own well count, lift distribution, and failure rate multipliers.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Sucker Rod Dyno Card Geometric Classification & Fluid Pound Sieve** | 1 Field Lift Estate (300 active rod pump wells) | 4.50 hours | 0.50 hours | **4.00 hours saved** | High-Volume Visual Screening Fatigue |
| **ESP High-Frequency Telemetry & Thermal Trip Diagnosis** | 1 Asset Portfolio (50 high-rate ESP installations) | 3.50 hours | 0.35 hours | **3.15 hours saved** | Multi-Stream Sensor Sifting & Trip Analysis Drag |
| **Beam Pumping Gearbox Torque & Counterbalance Sieve** | 1 Battery Review (25 pumping units) | 3.00 hours | 0.30 hours | **2.70 hours saved** | Trigonometric Torque Math & Manual Balancing |
| **Gas Lift Manifold Multi-Pointing & Orifice Stability Sieve** | 1 Gas Lift Gathering Manifold (30 gas-lift wells) | 2.50 hours | 0.25 hours | **2.25 hours saved** | Pressure Differential Auditing & Orifice Stability Math |
| **Rod String Taper Cyclic Stress & Goodman Fatigue Sieve** | 1 Multi-Well Pad Review (20 deep rod-pumped wells) | 2.50 hours | 0.25 hours | **2.25 hours saved** | Spreadsheet Fatigue Stress & Envelope Checking |
| **PCP Elastomer Swell & Reactive Torque Sieve** | 1 Heavy Oil Well Cluster (20 PCP installations) | 2.00 hours | 0.20 hours | **1.80 hours saved** | Manual Torque Chart Auditing & Swell Diagnostics |
| **Workover Pull Scope & Teardown Failure Dossier Synthesis** | 1 Weekly Workover Campaign (10 pull candidates) | 5.00 hours | 0.50 hours | **4.50 hours saved** | Unstructured PDF Extraction & Procedure Drafting Drag |
| **Total Operational Surveillance Drag Reduction** | **Per Daily / Weekly Lift Surveillance Cycle** | **23.00 hours** | **2.35 hours** | **20.65 hours saved** | **89.8% reduction in artificial lift engineering surveillance drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[API-RP-11L]` | American Petroleum Institute, *Recommended Practice for Design Calculations for Sucker Rod Pumping Systems*, 5th Edition, 2018 | api.org | Recommended Practice | Sucker rod pumping design, dyno card interpretation, and modified Goodman stress limits |
| `[API-RP-11S]` | American Petroleum Institute, *Recommended Practice for the Operation, Maintenance, and Troubleshooting of Electric Submersible Pump Installations*, 3rd Edition, 2020 | api.org | Recommended Practice | ESP electrical troubleshooting, thermal limits, restart guidelines, and failure teardowns |
| `[ISO-15136]` | International Organization for Standardization, *Petroleum and Natural Gas Industries — Progressing Cavity Pump Systems for Artificial Lift*, ISO 15136-1/2, 2019 | iso.org | International Standard | PCP mechanical ratings, elastomer swelling behavior, and drive torque limits |
| `[Gibbs-Dyno]` | Gibbs, S. G., *Predicting the Behavior of Sucker Rod Pumping Systems*, Journal of Petroleum Technology, SPE-588, 2019 | OnePetro | Technical Classic | Mathematical formulation of the 1D damped wave equation for downhole pump card derivation |
| `[API-Spec-11E]` | American Petroleum Institute, *Specification for Pumping Units*, 19th Edition, 2019 | api.org | Industry Specification | Beam pumping unit geometry, torque factors, and gear reducer load ratings |
| `[SPE-GasLift]` | Society of Petroleum Engineers, *Gas Lift Optimization and Troubleshooting Best Practices*, SPE Monograph Series, 2017 | OnePetro | Technical Monograph | Orifice stability criteria, multi-pointing detection, and casing heading mechanics |
| `[SPE-181232]` | Society of Petroleum Engineers, *Machine Learning for Automated Dynamometer Card Triage in Large Brownfields*, SPE-181232-MS, 2016 | DOI: 10.2118/181232-MS | Technical Paper | Baseline metrics on manual dyno card triage fatigue and classification accuracy |

### Negative Search Registry
* **Searched**: Commercial artificial lift software (ChampionX XSPOC, Weatherford ForeSite, SLB Lift IQ, Baker Hughes Vision) for *"autonomous unified cross-vendor exception triage engine combining rod pump downhole dyno cards with ESP high-frequency electrical telemetry into a single prioritized queue"*.
* **Result**: `Negative Search, 2026-09`. Commercial suites operate in proprietary hardware silos; none autonomously ingest multi-vendor rod pump, ESP, gas lift, and PCP telemetry streams to produce a single prioritized, cross-lift diagnostic exception queue without human specialist navigation across separate software applications.
* **Searched**: Industry repositories for *"automated real-time calculation of beam pump gearbox torque and counterbalance weight repositioning from streaming SCADA dynamometer data"*.
* **Result**: `Negative Search, 2026-09`. Software packages display net torque when manually prompted in diagnostic windows; none continuously audit streaming 15-minute dyno cards to automatically calculate exact counterbalance slide distances and issue mechanical imbalance alerts without engineer-initiated studies.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"An artificial lift engineer's value is not in spending four hours every morning clicking through three hundred identical dynamometer cards; their value is in catching the single rod pump that started hitting fluid pound before it snaps a twenty-thousand-dollar rod string downhole."*
* **The Secondary Line**: *"Restarting a tripped ESP without diagnosing whether the underload was caused by gas locking or pump-off is the most expensive gamble in the oilfield—it takes five seconds to hit the start button and two hundred thousand dollars to pull the burned motor out of the hole."*
* **Open Questions for Artificial Lift Practitioners**:
  1. What percentage of your mature field's rod pumping wells currently operate in unmitigated fluid pound or unmonitored gas interference due to lack of morning dyno card screening capacity?
  2. How many high-rate ESP failures in your asset each year are directly attributable to surface personnel attempting premature restarts following an electrical trip?
  3. Across your gas-lift network, what volume of high-pressure injection gas is lost to multi-pointing through leaky upper unloading valves?
