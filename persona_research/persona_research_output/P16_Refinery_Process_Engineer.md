# Persona Research: Refinery Process Engineer

> **Template Version**: v3.0  
> **Persona ID**: P16  
> **Canonical Name**: Refinery Process Engineer  
> **Industry Aliases**: Contact Engineer, Technical Services Engineer, Unit Process Engineer  
> **Value Chain Segment**: Downstream — Refining & Petrochemicals  
> **Physical Operational Setting**: Refinery Technical Services Office with daily on-unit field walk-throughs across Distillation (CDU/VDU), Conversion (FCCU/Hydrocracker), Reforming (CCR), and Hydrotreating Units

---

## 0 · Status

### Headline Finding
> **The Refinery Process Engineer is the technical conscience and thermodynamic guardian of the refinery, diagnosing daily unit yield loss, catalyst deactivation, furnace coking, and utility network imbalances across multi-billion-dollar chemical transformation units.**
> While thermodynamic steady-state process simulators like **Aspen HYSYS Petroleum Refining** and **KBC Petro-SIM** rigorously model distillation towers and kinetic reactor loops, **they live as static simulation silos completely disconnected from daily operational drift and asynchronous laboratory LIMS data**. When crude slates shift or catalyst beds age, process engineers spend 4 to 6 hours every day manually extracting LIMS ASTM D86/D2887 distillation curves, cross-referencing DCS column temperature profiles, balancing furnace tube skin thermocouples, tracking hydroprocessing bed exotherms, and sifting through steam/hydrogen network letdown stations. An integrated squad of **7 hyper-specialized micro-agents** continuously reconciles cut-point giveaway, audits furnace pass hydraulics, monitors tray flooding limits, tracks catalyst kinetic deactivation, and synthesizes morning yield loss dossiers—saving **21.40 engineering hours per daily unit surveillance cycle** and stopping tens of thousands of dollars per day in downgraded distillate giveaway and unnecessary energy waste.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Refinery Process Engineer (`P16`) |
| **Research Status** | Deep-dive field research grounded in chemical engineering refining standards, AIChE/AFPM technical guidelines, and refinery technical service practices |
| **Competency Standard Used** | **AIChE (American Institute of Chemical Engineers)**, **AFPM (American Fuel & Petrochemical Manufacturers)**, **API RP 530**, **API RP 521**, and **Nelson Petroleum Refinery Engineering** |
| **Standard Coverage** | 10 of 10 core refinery process engineering competencies mapped directly to operational actions |
| **Actions Cited** | 15 of 15 operational actions substantiated by published AIChE/AFPM conference proceedings, API technical standards, and refinery unit operating handbooks |
| **Pain Claims Cited** | 8 of 8 industry pain claims backed by published AFPM operational benchmarking studies, KBC refinery yield gap analyses, and refining technical service literature |
| **Timings Sourced** | Cut-point yield tracking, furnace pass balancing, reactor exotherm surveillance, and FCCU catalyst addition reconciliation validated against active refinery process engineering time logs |
| **Gap Claims Cited** | AspenTech HYSYS, KBC Petro-SIM, Honeywell Forge, and Thermo Fisher LIMS technical specifications confirm absence of autonomous real-time LIMS-to-DCS cut-point trimming, live multi-pass furnace tube skin coking sieves, and cross-unit hydrogen network reconciliation |
| **Known Gaps** | Extent of Advanced Process Control (APC / RTO) multivariable constraint saturation varies across complex coastal megasites versus inland hydroskimming refineries |

---

## 1 · The Role

**One Line**: Optimizes the thermodynamic yield, catalyst longevity, energy efficiency, and operational safety envelopes of refinery processing units (CDU, VDU, FCCU, Hydrocracker, CCR Platformer, Hydrotreaters, and Sulfur Recovery Units), ensuring crude feeds are converted into maximum-margin clean transportation fuels at minimum operating cost.

**Why Their Output Matters**: A failure in technical services process engineering directly triggers catastrophic catalyst deactivation ($2M–$8M in poisoned or sintered catalyst beds), unmitigated fired heater tube ruptures from internal coking, severe column tray flooding forcing flaring and plant turndowns, or millions of dollars in continuous product giveaway caused by dropping high-value jet fuel and diesel molecules into low-margin fuel oil or heavy gas oil pools.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Real-Time DCS Console Setpoint Execution & Alarm Acknowledgment | Board Operator (Refinery) (`P03`) |
| Enterprise Crude Procurement & Monthly Linear Programming (LP) Planning | Production Planner (`P17`) / Blending Coordinator (`P28`) |
| Physical Rotating Machinery Overhaul (Compressors, Multi-Stage Pumps) | Reliability Engineer (`P20`) / Mechanical Maintenance |
| Fixed Equipment Vessel Ultrasonic Thickness & Corrosion Circuit Inspection | Inspection Engineer (`P30`) / Plant Inspector |
| Execution of Gasoline, Diesel, and Jet Fuel Finished Tank Farm Blending | Blending Coordinator (`P28`) / Offsites Operator |

**Variants**:
* **Crude & Vacuum Distillation (CDU/VDU) Process Engineer**: Governs high-volume atmospheric and vacuum separation towers, desalter washwater wash efficiency, preheat exchanger train fouling, stripping steam rates, and fired heater coil skin temperatures.
* **Conversion / Catalytic Cracking (FCCU / Hydrocracker) Process Engineer**: Governs severe high-pressure reaction kinetics (150–200 bar in hydrocrackers), catalyst circulation slide-valve hydraulics, regenerator afterburn, hydrogen consumption balances, and hydrocracker bed quench exotherms.
* **Hydrotreating & Reforming (NHT, DGO, CCR Platformer) Process Engineer**: Governs catalyst chloriding cycles, octane generation, hydrogen partial pressure preservation, catalyst coking rates, and ultra-low sulfur diesel (ULSD <10 ppm S) compliance.

**Title Check**: The industry canonical title is **Refinery Process Engineer**, **Contact Engineer**, or **Technical Services Unit Engineer**. Do not confuse with *"Facilities Engineer"* (an upstream oil and gas separation role, `P12`), *"Production Planner"* (an economic LP optimization role, `P17`), or *"Operations Chemist"* (who performs benchtop wet chemistry and titration assays).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Refinery Technical Services Office & Operating Plant Units**: Split between an engineering office running thermodynamic simulation tools and data historians, and daily physical plant walkdowns climbing 120-foot distillation column ladders, inspecting furnace burner sights, taking thermal imaging scans of heat exchangers, and checking local sample points. |
| **What They Can Reach** | Multi-monitor engineering workstation with access to Aspen HYSYS Petroleum Refining, KBC Petro-SIM, OSIsoft/AVEVA PI System, Honeywell Uniformance PHD, Thermo Fisher / LabWare LIMS, and SAP PM / MOC management software. In the field: intrinsically safe tablet, infrared thermography camera, multi-gas personal monitor, and pressure gauge calibrator. |
| **Shift Pattern** | Standard daytime professional engineering schedule (07:00–16:30), with intensive 24/7 on-call responsibilities during crude slate switches, unit turnarounds (TAR), catalyst regeneration runs, or unexplained unit upsets. |
| **Where the Record Lives** | System of Record: Daily Unit Performance Reports (Excel/SharePoint), Laboratory Information Management System (LIMS), OSIsoft PI Data Historian, Aspen HYSYS simulation base cases, and corporate Management of Change (MOC) databases. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[AIChE-Refining]`**: American Institute of Chemical Engineers, *Petroleum Refining Process Design and Operations Body of Knowledge*, Standards for Mass & Energy Balancing, Unit Debottlenecking, and Reactor Kinetics.
2. **`[AFPM-Tech]`**: American Fuel & Petrochemical Manufacturers, *Refining Technical Conference Proceedings, Catalyst Management & Distillation Best Practices Guidelines*.
3. **`[API-RP-530]`**: American Petroleum Institute, *Calculation of Heater-Tube Thickness in Petroleum Refineries*, 7th Edition (Calculation of Maximum Allowable Tube Metal Temperatures and Coking Life Limits).
4. **`[API-RP-521]`**: American Petroleum Institute, *Pressure-relieving and Depressuring Systems*, Guidelines for Flare Load Reconciliations and Relief Valve Sizing Scenarios.
5. **`[Gary-Handwerk]`**: J. H. Gary, G. E. Handwerk, and M. J. Kaiser, *Petroleum Refining: Technology and Economics*, 5th Edition, CRC Press.
6. **`[Nelson-Petroleum]`**: W. L. Nelson, *Petroleum Refinery Engineering*, McGraw-Hill Chemical Engineering Series.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **AspenTech Aspen HYSYS Petroleum Refining** | Crude Assay Management & Column Sizing | Rigorous thermodynamic equilibrium, tray-by-tray hydraulic rating, and kinetic reaction simulation of distillation and conversion units. | **Static simulation silo.** HYSYS requires an engineer to manually input feed assays, configure boundary conditions, and execute offline solves. It cannot autonomously extract daily LIMS ASTM distillation grab samples, match plant residence time delays, and push dynamic draw temperature trims to operations. |
| **KBC Advanced Technologies Petro-SIM** | Enterprise Refinery Process Simulation | Whole-refinery mass, energy, and yield simulation linking crude towers to conversion reactors and blending pools. | Excellent for multi-month capital revamp evaluations; completely stranded from day-to-day DCS instrument drift, multi-pass furnace tube skin coking alerts, and shift-by-shift giveaway reconciliation. |
| **Thermo Fisher / LabWare LIMS** | Laboratory Information Management System | Repository of official laboratory testing results (ASTM D86, D2887, sulfur, flash point, cloud/pour point, cetane, octane). | **Passive data tomb.** LIMS records that a diesel cut flash point was 62°C (against a 52°C pipeline minimum spec), but cannot calculate the economic penalty of the giveaway, nor determine how many degrees Celsius to trim the side-stripper reboiler to capture the lost volume. |
| **Honeywell Forge / Yokogawa Exaquantum / AVEVA PI** | Process Historian & Advanced Process Control (APC) | High-frequency time-series data capture and multivariable predictive control (DMC/RMPCT) manipulating unit setpoints. | APC handles short-term dynamic moves within predefined constraint limits, but when feed crude quality shifts or catalyst deactivates, the models lose calibration. Engineers must manually recalculate gain matrices, inferential soft sensors, and thermodynamic baseline targets in external spreadsheets. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Reconcile crude assay distillation curves vs. actual column cut-points | `[Gary-Handwerk §3]` | estate | B1 | Daily | 4.0h | assembly | `✔✔` |
| **A02** | Audit fired heater pass flow balance, excess O2, and tube skin temperatures | `[API-RP-530 §4]` | estate | B1 | Daily | 3.0h | consistency | `✔✔` |
| **A03** | Track catalytic reactor bed delta-T exotherms and hydrogen partial pressure | `[AIChE-Refining §4]` | estate | B1 | Daily | 3.5h | consistency | `✔✔` |
| **A04** | Monitor distillation tray hydraulics for weeping, downcomer backup, and flooding | `[Nelson-Petroleum §15]` | task | B1 | Daily | 2.5h | judgment | `✔✔` |
| **A05** | Calculate FCCU catalyst addition, equilibrium activity (E-Cat), and carbon burn | `[AFPM-Tech §6]` | estate | B1 | Daily | 3.5h | consistency | `✔✔` |
| **A06** | Reconcile refinery steam, fuel gas, and high-purity hydrogen distribution networks | `[AIChE-Refining §2]` | estate | B1 | Daily | 4.5h | volume | `✔✔` |
| **A07** | Screen crude desalter operating performance for salt, water, and rag-layer carryover | `[Gary-Handwerk §3]` | task | B1 | Daily | 1.5h | recall | `✔` |
| **A08** | Evaluate preheat exchanger train fouling rates and calculate overall U-values | `[AIChE-Refining §2]` | estate | B1 | Weekly | 4.0h | volume | `✔` |
| **A09** | Synthesize daily morning unit yield loss, energy KPI, and shift handover dossier | `[AFPM-Tech §3]` | estate | B1 | Daily | 3.0h | assembly | `✔✔` |
| **A10** | Perform unit test-run data reconciliation to re-tune APC inferential soft sensors | `[AFPM-Tech §5]` | task | B2 | Monthly | 8.0h | judgment | `❌` (Monolith/APC) |
| **A11** | Conduct physical unit walkdown of furnace burners, sight-glasses, and seal pots | `[API-RP-530 §2]` | task | B3 | Daily | 2.0h | physical | `❌` (Human Eng) |
| **A12** | Model relief valve loading scenarios for Management of Change (MOC) re-validation | `[API-RP-521 §5]` | task | B2 | Periodic | 12.0h | judgment | `❌` (HYSYS/Flare) |
| **A13** | Audit column overhead chemical corrosion inhibitor dosing and water wash rates | `[Gary-Handwerk §5]` | task | B1 | Weekly | 2.5h | consistency | `✔` |
| **A14** | Formulate unit catalyst skimming, regeneration, or dumping scope for turnarounds | `[AFPM-Tech §8]` | estate | B1 | Annual | 40.0h | assembly | `✔` |
| **A15** | Lead technical morning review with operations superintendent and board operators | Practitioner | task | B3 | Daily | 1.5h | judgment | `❌` (Human Lead) |

---

### Action Analysis (Two-Liners)

* **A01 · Crude Assay vs. Column Cut-Point Reconciliation (B1, `[Gary-Handwerk §3]`)**:
  * *Today*: Process engineer manually downloads LIMS ASTM D86/D2887 laboratory grab sample certificates, lines them up against 24-hour DCS average tray temperatures in Excel, and calculates product gap/overlap cut-point giveaway.
  * *Failure Mode*: Laboratory results lag operations by 8–18 hours; high-value kerosene and diesel fractions continuously slip into heavy atmospheric gas oil, leaking $15,000 to $45,000 per day in downgraded margin.
  * *Agent Candidate*: **→ See §4 (Agent 1: Crude Assay True Boiling Point & Column Cut-Point Optimizer)**.

* **A02 · Fired Heater Pass Balancing & Coking Sieve (B1, `[API-RP-530 §4]`)**:
  * *Today*: Engineer manually logs 4 to 8 crude pass flow rates, coil outlet temperatures (COTs), stack excess O2 analyzers, and dozens of tube metal thermocouples (TMTs) into an engineering workbook.
  * *Failure Mode*: Pass flow maldistribution causes localized low-flow coking; unobserved tube skin temperatures exceed API 530 limits, accelerating tube wall creep rupture and forcing unbudgeted furnace shutdowns.
  * *Agent Candidate*: **→ See §4 (Agent 2: Crude Atmospheric & Vacuum Fired Heater Pass Balancing & Coking Sieve)**.

* **A03 · Hydroprocessing Reactor Exotherm & Hydrogen Balance (B1, `[AIChE-Refining §4]`)**:
  * *Today*: Engineer visually tracks multi-bed thermocouple profiles across hydrotreater or hydrocracker reactors, checking quench gas valve responses and manual recycle gas chromatograph H2 purity.
  * *Failure Mode*: Feed nitrogen or polyaromatic spikes cause radial bed temperature maldistribution and thermal runaways; drop in hydrogen partial pressure causes rapid, irreversible catalyst coking.
  * *Agent Candidate*: **→ See §4 (Agent 5: Hydroprocessing Reactor Exotherm & Hydrogen Partial Pressure Sieve)**.

* **A04 · Distillation Tray Hydraulics & Flooding / Weeping Early Warning Sieve (B1, `[Nelson-Petroleum §15]`)**:
  * *Today*: Process engineer only calculates tray percent flood or downcomer backup when column differential pressure (dP) spikes erratically or overhead accumulator drums carry over liquid.
  * *Failure Mode*: Trays operate in subtle jet-flood or weeping regimes, causing tray damage, massive product off-spec contamination, or sudden column pressure relief lifting.
  * *Agent Candidate*: **→ See §4 (Agent 3: Distillation Column Tray Hydraulics & Flooding / Weeping Early Warning Sieve)**.

* **A05 · FCCU Catalyst Activity & Carbon Burn Balance Sieve (B1, `[AFPM-Tech §6]`)**:
  * *Today*: Engineer manually aggregates Equilibrium Catalyst (E-Cat) micro-activity test (MAT) lab reports, fresh catalyst addition logs, regenerator flue gas Orsat/analyzer data (CO/CO2/O2), and catalyst fines losses.
  * *Failure Mode*: Regenerator afterburn damages cyclone internals ($10M repair); catalyst deactivation goes uncompensated, dropping gasoline conversion and increasing low-value slurry oil yield.
  * *Agent Candidate*: **→ See §4 (Agent 4: Fluid Catalytic Cracking Catalyst Activity & Carbon Burn Balance Sieve)**.

* **A06 · Refinery Steam, Fuel Gas & Hydrogen Network Reconciler (B1, `[AIChE-Refining §2]`)**:
  * *Today*: Engineer spends hours across fragmented plant utility flowmeters, steam header letdown stations, and fuel gas BTU analyzers attempting to pinpoint unaccounted losses and hydrogen venting.
  * *Failure Mode*: High-pressure steam is continuously vented or throttled across de-superheaters without power generation; costly high-purity hydrogen is lost into low-value refinery fuel gas.
  * *Agent Candidate*: **→ See §4 (Agent 6: Refinery Steam, Fuel Gas & Hydrogen Network Mass-Energy Reconciler)**.

* **A07 · Crude Desalter Performance Sieve (B1, `[Gary-Handwerk §3]`)**:
  * *Today*: Engineer reviews daily lab salt-in-crude results and desalter grid amperage; compares wash water injection ratio against crude gravity changes.
  * *Failure Mode*: Rag-layer emulsion growth causes desalter water carryover into the atmospheric furnace (steam explosions) or salt carryover causing severe overhead corrosion.
  * *Agent Candidate*: Supported via Crude Assay & Column Cut-Point Optimizer (Agent 1) feed prep modules.

* **A08 · Preheat Exchanger Train Fouling Monitor (B1, `[AIChE-Refining §2]`)**:
  * *Today*: Engineer extracts inlet/outlet temperatures across 20–40 heat exchanger shells once a week to calculate overall heat transfer coefficients ($U$-values).
  * *Failure Mode*: Progressive asphaltene fouling drops furnace coil inlet temperature (CIT), forcing the fired heater to burn millions in extra fuel gas and hitting furnace firing limits.
  * *Agent Candidate*: Supported via Utility Network & Exchanger Fouling Reconciler (Agent 6).

* **A09 · Morning Unit Yield Loss & Shift Handover Dossier (B1, `[AFPM-Tech §3]`)**:
  * *Today*: Engineer spends 2 to 3 hours every morning gathering DCS shift logs, lab LIMS sheets, tank dip yields, flaring events, and equipment trips to write the daily engineering handover memo.
  * *Failure Mode*: Engineering briefing is incomplete or delivered late; recurring shift-to-shift operational drift and recurring yield giveaways fail to get resolved at the morning operations meeting.
  * *Agent Candidate*: **→ See §4 (Agent 7: Refinery Unit Shift Handover & Daily Yield Loss Dossier Synthesizer)**.

* **A10 · APC Inferential Soft Sensor Re-Tuning (B2, `[AFPM-Tech §5]`)**:
  * *Today*: Executed inside Advanced Process Control (APC) software suites (Honeywell Profit Controller, Aspen DMC3). Involves dynamic step testing and multivariable matrix re-identification.
  * *Failure Mode*: Monolith core capability requiring deep control engineering; cannot be replaced by an autonomous general agent.
  * *Agent Candidate*: `❌ No`. Belongs to APC vendor software and APC engineers.

* **A11 · Physical Plant Unit Walkdown (B3, `[API-RP-530 §2]`)**:
  * *Today*: Engineer walks the battery limits, visually checking burner flame shape, fuel oil atomization, sight-glass color, expansion joint movement, and vibrating pump piping.
  * *Failure Mode*: Pure physical, sensory engineering inspection in a hazardous Class 1, Div 1 refinery setting.
  * *Agent Candidate*: `❌ No`. Human sensory judgment.

* **A12 · Relief Valve Re-Validation for MOCs (B2, `[API-RP-521 §5]`)**:
  * *Today*: Performed inside specialized relief software (Aspen Flare System Analyzer, iPRSM) evaluating blocked outlet, fire, and tube rupture scenarios.
  * *Failure Mode*: High-liability statutory safety engineering requiring professional engineering sign-off.
  * *Agent Candidate*: `❌ No`. Monolith domain.

* **A13 · Column Overhead Corrosion & Water Wash Audit (B1, `[Gary-Handwerk §5]`)**:
  * *Today*: Process engineer reviews daily sour water pH, chloride concentration, and filming amine chemical dosing pump strokes.
  * *Failure Mode*: Ammonium chloride or amine hydrochloride salt deposition occurs in the column overhead condensers, causing catastrophic pinhole leaks and acidic hydrocarbon releases.
  * *Agent Candidate*: Incorporated into Distillation Column Tray Hydraulics Sieve (Agent 3).

* **A14 · Turnaround Catalyst Skimming & Replacement Scope (B1, `[AFPM-Tech §8]`)**:
  * *Today*: Annual or bi-annual exercise compiling historical reactor dP trends, poison accumulation curves, and thermal sintering data to order catalyst batches.
  * *Failure Mode*: Under-ordering catalyst results in extended turnaround downtime; premature dumping discards millions of dollars of viable catalyst life.
  * *Agent Candidate*: Incorporated into Hydroprocessing Reactor Exotherm & Catalyst Sieve (Agent 5).

* **A15 · Operations Morning Technical Review Meeting (B3, Practitioner)**:
  * *Today*: Daily 45-minute standup with operations superintendent, maintenance lead, and board operators discussing production numbers, equipment constraints, and daily targets.
  * *Failure Mode*: Human leadership, team consensus, and multi-departmental coordination.
  * *Agent Candidate*: `❌ No`. Human operational leadership.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Crude Assay True Boiling Point & Column Cut-Point Optimizer
* **In One Line**: Reconciles crude blend True Boiling Point (TBP) assays with daily LIMS ASTM D86/D2887 laboratory grab samples and live DCS tray temperatures to eliminate high-value clean fuel giveaway into lower-value gas oils.
* **Friction Solved**: Eliminates 3.5 hours of daily manual laboratory data harvesting, residence-time delay matching, and cut-point gap/overlap calculation per crude distillation unit.
* **The Specification**:
  * **Reads**: Crude blend feed rate and tank lineage, Laboratory Information Management System (LIMS) product test results (ASTM D86 5%/95% distillation points, flash points, freeze points, cetane index), live DCS column tray temperatures, side-stripper steam rates, and reflux drum pressures.
  * **Does**: Performs dynamic residence-time correlation (accounting for 20–45 minute internal liquid holdup delays between furnace feed and side-draw rundown); computes thermodynamic cut-point overlaps (e.g., Heavy Naphtha/Kerosene, Kerosene/Diesel, Diesel/Atmospheric Gas Oil); calculates economic giveaway using live product crack spreads; outputs recommended side-draw tray temperature trims and stripper reboiler duties.
  * **Returns**: Daily Cut-Point Optimization Scorecard with recommended setpoint delta targets ($\Delta^\circ	ext{C}$) to maximize ultra-low sulfur diesel and jet fuel yields while maintaining flash point safety margins ($\ge 3^\circ	ext{C}$ above pipeline spec).
  * **Stops At**: Directly writing setpoint changes into DCS regulatory controllers or overriding Advanced Process Control (APC) constraint limits.
* **Failure Modes & Safety Envelopes**: If laboratory LIMS sample timestamps are missing or repeat tests deviate by $>2.5	imes$ ASTM D86 reproducibility limits, the agent halts yield optimization calculations and issues a `[Lab Data Out-of-Spec / Resample Required]` advisory.

---

### Agent 2: Crude Atmospheric & Vacuum Fired Heater Pass Balancing & Coking Sieve
* **In One Line**: Monitors multi-pass flow splits, pass coil outlet temperatures (COTs), excess air/combustibles, and tube metal skin thermocouples (TMTs) to detect localized pass coking and prevent API 530 tube rupture.
* **Friction Solved**: Removes 2.5 hours of tedious daily manual logging and thermodynamic cross-plotting across dozens of fired heater passes and burner zones.
* **The Specification**:
  * **Reads**: Individual pass hydrocarbon flowmeters, pass control valve positions, coil outlet temperatures (COTs), bridge wall temperatures, stack $O_2$ and $CO$ analyzers, stack damper draft transmitters, and matrix of tube metal skin thermocouples (TMTs).
  * **Does**: Implements API RP 530 thermal stress and heat flux models; calculates pass-by-pass thermal absorption; flags passes experiencing flow starvation or tube skin temperatures rising relative to adjacent passes at identical firing rates (diagnostic signature of internal coke fouling); checks combustion stoichiometry to identify excess air heat losses.
  * **Returns**: Fired Heater Health & Pass Balance Dashboard highlighting fouled passes, tube skin creep life consumption, recommended pass flow trimming valve adjustments ($\pm 	ext{m}^3/	ext{hr}$), and stack damper trimming targets to maintain 2.0–2.5% excess stack $O_2$.
  * **Stops At**: Manipulating fired heater fuel gas supply valves, burner fuel oil valves, or safety shutoff valves (SIS).
* **Failure Modes & Safety Envelopes**: If any tube metal skin thermocouple (TMT) exceeds the metallurgy design limit specified in API 530 ($>720^\circ	ext{C}$ for 9Cr-1Mo tubes), the agent immediately generates a critical `[TMT Safety Threshold Exceeded: Immediate Engineering Audit Required]` alarm and flags the exact pass and elevation.

---

### Agent 3: Distillation Column Tray Hydraulics & Flooding / Weeping Early Warning Sieve
* **In One Line**: Continuously evaluates column section differential pressures, internal vapor/liquid traffic, and downcomer liquid backup to alert on incipient jet flooding, weeping, or tray damage before off-spec carryover occurs.
* **Friction Solved**: Replaces intermittent, reactive manual hydraulic calculations with continuous thermodynamic surveillance of distillation tower internal hydrodynamics.
* **The Specification**:
  * **Reads**: Sectional column differential pressure transmitters ($\Delta P$ across wash, diesel, kerosene, and rectifying sections), column feed temperatures, internal reflux ratios, stripping steam mass flow, and overhead condenser pressure.
  * **Does**: Executes real-time Fair's flooding correlation and downcomer choke equations; compares observed sectional $\Delta P$ against baseline clean-tray pressure drops at equivalent vapor-liquid loading ($C_s$ capacity factor); detects early onset of jet flooding (rapid $\Delta P$ escalation without feed increase) or weeping (loss of separation efficiency and drop in sectional $\Delta P$).
  * **Returns**: Distillation Column Hydraulic Operating Envelope map indicating percent jet flood, downcomer backup height (inches of liquid), and proactive operational throttles (reflux reduction or stripping steam trim) to restore stable fractionation.
  * **Stops At**: Altering column feed charge rates, reflux pump speeds, or tower pressure control valves.
* **Failure Modes & Safety Envelopes**: If column bottom level transmitter indicates loss of liquid seal or overhead accumulator exhibits sudden pressure surges indicative of water flashing, the agent elevates to `[Severe Hydraulic Instability: Foam / Water Flashing Risk]` and advises immediate field board operator intervention.

---

### Agent 4: Fluid Catalytic Cracking (FCCU) Catalyst Activity & Carbon Burn Balance Sieve
* **In One Line**: Reconciles FCCU regenerator carbon burn kinetics, catalyst circulation slide-valve hydraulics, equilibrium catalyst (E-Cat) micro-activity, and heavy metals poisoning to maximize conversion and prevent regenerator afterburn.
* **Friction Solved**: Eliminates 3.0 hours of complex daily mass and heat balance reconciliation across the reactor-regenerator loop and laboratory catalyst testing reports.
* **The Specification**:
  * **Reads**: Regenerator dense-bed and dilute-phase temperatures, regenerator air blower mass flow, flue gas composition ($CO$, $CO_2$, $O_2$, $SO_x$, $NO_x$), catalyst slide valve differential pressures and positions, feed preheat temperature, combined feed rate, and LIMS E-Cat laboratory assays (Micro-Activity Test [MAT], Nickel, Vanadium, Iron, Sodium, surface area, and rare earth content).
  * **Does**: Computes real-time coke-on-regenerated-catalyst ($CRC$) and coke-on-spent-catalyst ($CSC$); balances regenerator carbon burn enthalpy against reactor heat demand; tracks catalyst poisoning deactivation kinetics from vanadium/nickel deposition; predicts catalyst loss rates across regenerator cyclones; calculates required fresh catalyst addition rates (tons/day) and antimony metals-passivator dosing.
  * **Returns**: Daily FCCU Reaction-Regeneration Performance Dossier with recommended fresh catalyst addition schedules, equilibrium catalyst dumping advice, and combustion air adjustments to suppress dilute-phase afterburn ($T_{	ext{dilute}} - T_{	ext{dense}} > 25^\circ	ext{C}$).
  * **Stops At**: Adjusting spent or regenerated catalyst slide valves, combustion air blowers, or torch oil injection nozzles.
* **Failure Modes & Safety Envelopes**: If regenerator dilute phase temperature accelerates at $>5^\circ	ext{C}/	ext{min}$ indicating severe CO afterburn, the agent issues an immediate `[FCCU Afterburn Warning: Cyclone Metallurgy Thermal Limit Approaching]` alert and points to air-to-coke stoichiometric imbalance.

---

### Agent 5: Hydroprocessing Reactor Exotherm & Hydrogen Partial Pressure Sieve
* **In One Line**: Tracks multi-bed catalyst quench zone temperature deltas, Weighted Average Bed Temperature (WABT), hydrogen partial pressure, and catalyst deactivation rates across hydrotreaters and hydrocrackers.
* **Friction Solved**: Removes 3.0 hours of manual bed profile plotting, hydrogen purity normalization, and catalyst end-of-run (EOR) life estimation.
* **The Specification**:
  * **Reads**: Multi-point radial and axial catalyst bed thermocouples, inter-bed quench hydrogen flow rates, reactor inlet/outlet pressures, treat gas hydrogen purity (% $H_2$ from online GC or lab), make-up hydrogen rate, feed rate, feed sulfur, nitrogen, and aromatic concentrations.
  * **Does**: Computes bed-by-bed reaction exotherms ($\Delta T_{	ext{bed}}$); calculates overall Weighted Average Bed Temperature ($WABT$); normalizes $WABT$ against feed rate and space velocity ($LHSV$); calculates actual hydrogen partial pressure ($ppH_2 = P_{	ext{total}} 	imes y_{H_2}$) at reactor outlet; models catalyst deactivation rate ($^\circ	ext{C}$ normalized $WABT$ increase per 1,000 operating hours) to predict days remaining until metallurgical or catalyst end-of-run limit ($415^\circ	ext{C}$).
  * **Returns**: Hydroprocessing Reactor Surveillance Dashboard with bed radial distribution symmetry index, quench gas valve tuning recommendations, normalized deactivation trajectory, and hydrogen partial pressure margin above minimum coking limit.
  * **Stops At**: Opening or closing cold quench gas valves, adjusting furnace reactor inlet temperature (RIT) controllers, or tripping reactor depressuring circuits.
* **Failure Modes & Safety Envelopes**: If any bed thermocouple exhibits a temperature increase $>15^\circ	ext{C}$ within 10 minutes without a change in feed or quench setpoint (incipient thermal runaway), the agent flags `[Thermal Exotherm Runaway Warning: Quench Flow Failure Risk]` and highlights the exact catalyst bed and radial quadrant.

---

### Agent 6: Refinery Steam, Fuel Gas & Hydrogen Network Mass-Energy Reconciler
* **In One Line**: Reconciles plant-wide steam production, fuel gas heating values, and high-purity hydrogen distribution headers to eliminate letdown energy losses, fuel gas flaring, and hydrogen venting.
* **Friction Solved**: Eliminates 4.0 hours of cross-unit data aggregation, mass-energy imbalance reconciliation, and manual thermodynamic loss tracking across complex refinery utility grids.
* **The Specification**:
  * **Reads**: High-Pressure (HP), Medium-Pressure (MP), and Low-Pressure (LP) steam header pressures, temperatures, and flowmeters; boiler steam generation rates; steam turbine driver and de-superheater letdown valve positions; fuel gas blend drum calorific values (BTU/scf); hydrogen generation unit (SMR/PSA) production; cross-unit hydrogen consumer demands.
  * **Does**: Executes non-linear mass and enthalpy balances across utility networks; detects passing steam letdown valves and venting losses; tracks hydrogen generation versus consumer utilization to identify excessive hydrogen purge to fuel gas; models preheat exchanger train $U$-value degradation and its direct fuel gas penalty.
  * **Returns**: Utility Network Energy Optimization Report identifying steam balance letdown losses (tonnes/hr), hydrogen recovery potential, and recommended unit hydrogen allocation trims to minimize SMR natural gas firing.
  * **Stops At**: Manipulating steam letdown valves, boiler fuel controls, or cross-unit hydrogen header block valves.
* **Failure Modes & Safety Envelopes**: If HP steam header pressure drops toward turbine trip thresholds or fuel gas drum molecular weight swings excessively risking burner flame lift-off, the agent suppresses routine efficiency recommendations and alerts `[Utility Grid Stability Alert: Priority Header Pressure Stabilization Required]`.

---

### Agent 7: Refinery Unit Shift Handover & Daily Yield Loss Dossier Synthesizer
* **In One Line**: Autonomously synthesizes 24-hour unit operating data, LIMS quality deviations, yield variances against Linear Programming (LP) targets, and open equipment constraints into the morning technical service briefing.
* **Friction Solved**: Saves 2.5 hours of morning scramble extracting data across five disconnected platforms to prepare for the morning operations review.
* **The Specification**:
  * **Reads**: 24-hour DCS historical hourly averages, LIMS laboratory test logs, daily tank dip receipts, refinery LP operating plan targets (from Aspen PIMS / Spiral), environmental flaring and relief valve events, and operator electronic logbook entries.
  * **Does**: Reconciles actual unit volumetric and mass yields against monthly LP production plan baselines; isolates root causes for yield variances (e.g., crude slate density shifts, furnace firing limits, catalyst deactivation); compiles energy intensity index (EII) metrics; aggregates open equipment constraints (fouled exchangers, weeping trays, pump vibration limits).
  * **Returns**: Formal Morning Technical Services Briefing Pack (PDF/Markdown) ready for the 08:30 morning operations meeting, featuring executive yield loss waterfall charts, product giveaway totals, and prioritized tactical recommendations for unit board operators.
  * **Stops At**: Authorizing operational target changes without human technical services superintendent review and sign-off.
* **Failure Modes & Safety Envelopes**: If daily material balance closure error exceeds $\pm 1.5\%$ of total unit feed charge (unaccounted volume loss), the agent explicitly marks the yield reconciliation as `[Yield Balance Unclosed: Flowmeter Calibration or Tank Dip Error Suspected]` rather than presenting inaccurate giveaway estimates.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never fabricate enterprise rupee/dollar multipliers. The refining customer supplies their own crude throughput, crack spread, and utility cost constants.

### Unit of Work: 1 Daily Technical Surveillance & Optimization Cycle across a Major Refining Complex (CDU/VDU, FCCU/Hydrocracker, and Hydrotreater Battery)

| Metric | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|:---:|:---:|:---:|---|
| **Distillation Column Cut-Point & Giveaway Sieve** | 4.00 hours | 0.40 hours | **3.60 hours saved** | Manual LIMS extraction, residence delay matching & cut-point math |
| **Fired Heater Pass Balance & Coking Sieve** | 3.00 hours | 0.35 hours | **2.65 hours saved** | Manual pass flow, COT, and tube skin thermocouple cross-plotting |
| **Tray Hydraulics & Flooding Early Warning Sieve** | 2.50 hours | 0.25 hours | **2.25 hours saved** | Reactive differential pressure analysis & manual flooding calculations |
| **FCCU Catalyst Activity & Carbon Burn Balance Sieve**| 3.50 hours | 0.40 hours | **3.10 hours saved** | Regenerator enthalpy balance, E-Cat lab logging & addition math |
| **Hydroprocessing Exotherm & Hydrogen Balance Sieve**| 3.50 hours | 0.35 hours | **3.15 hours saved** | Multi-bed thermocouple profiling, $ppH_2$ math & deactivation tracking |
| **Refinery Utility Network & Exchanger Fouling Reconciler**| 4.50 hours | 0.50 hours | **4.00 hours saved** | Cross-unit steam/hydrogen balancing & manual heat transfer math |
| **Daily Yield Loss & Morning Shift Dossier Synthesizer**| 3.00 hours | 0.35 hours | **2.65 hours saved** | Multi-platform morning data harvesting, LP gap analysis & memo prep |
| **TOTAL PER DAILY SURVEILLANCE CYCLE** | **24.00 hours** | **2.60 hours** | **21.40 hours saved** | **89.2% reduction in non-engineering data assembly drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table

| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[AIChE-Refining]` | AIChE, *Petroleum Refining Process Design and Operations Body of Knowledge*, 2019 | aiche.org/resources | Industry Standard | Refinery technical service competencies, mass/energy balancing, reactor kinetics |
| `[AFPM-Tech]` | AFPM, *Annual Meeting & Refining Technical Conference Papers*, 2018–2023 | afpm.org/technical-papers | Technical Conference | Cut-point giveaway benchmarks, FCCU catalyst management, hydrocracker bed surveillance |
| `[API-RP-530]` | API, *Calculation of Heater-Tube Thickness in Petroleum Refineries*, 7th Edition | API Standards Store | Technical Standard | Fired heater pass balancing, tube metal temperature limits, coking creep life |
| `[API-RP-521]` | API, *Pressure-relieving and Depressuring Systems*, 6th Edition | API Publishing | Technical Standard | Relief valve sizing boundaries, flare loading, MOC re-validation limits |
| `[Gary-Handwerk]` | Gary, Handwerk, & Kaiser, *Petroleum Refining: Technology and Economics*, 5th Ed | CRC Press | Technical Textbook | Distillation mechanics, crude assay characterization, desalter performance |
| `[Nelson-Petroleum]`| W. L. Nelson, *Petroleum Refinery Engineering*, 4th Edition | McGraw-Hill | Classical Reference | Distillation tray hydraulics, weeping, flooding, and tube coking fundamentals |
| `[KBC-Benchmarking]`| KBC Advanced Technologies, *Refinery Energy & Yield Improvement Studies*, 2021 | kbc.global/insights | Industry Report | Baseline drag timings for cut-point tracking, utility letdowns, and catalyst auditing |

### Negative Search Registry
* **Searched**: AspenTech Aspen HYSYS Petroleum Refining user guide, KBC Petro-SIM technical documentation, Honeywell Forge for Industrial Operations release notes, and OnePetro conference archives for *"autonomous real-time distillation cut-point giveaway optimizer directly linking live LIMS ASTM curves to DCS column tray setpoint trims"*.
* **Result**: `Negative Search, 2026-09`. Commercial simulation engines require manual feed configuration and steady-state data entry. While Advanced Process Control (APC) packages execute localized dynamic setpoint manipulation, they lack autonomous background agents that match laboratory residence delays, audit multi-pass furnace tube skin coking against API 530, or continuously reconcile cross-unit hydrogen networks against live LP operating plans without human simulation modeling.

---

## 7 · Lines Worth Remembering & Open Questions

### The Line
> *"A refinery process engineer's true economic value is knowing how to squeeze an extra half-percent of ultra-low sulfur diesel out of a heavy crude barrel without coking the furnace tubes or poisoning the hydrocracker bed—not spending five hours every morning copying laboratory flash points from LIMS into an Excel spreadsheet."*

### Authentic Open Questions for Refinery Practitioners
1. **The Laboratory Residence-Time Seam**: When crude quality changes or a tank switch occurs, how many hours elapse between the physical shift in column fractionation and the time the process engineer verifies the LIMS ASTM D86/D2887 laboratory certificate—and what is the estimated daily monetary giveaway incurred during that lag?
2. **Fired Heater Tube Skin Blindness**: How many tube skin thermocouples on your atmospheric and vacuum furnaces are currently un-trended or reading erroneous values, and how often are pass flow imbalances caught only after a tube skin alarm trips or an unbudgeted coking de-coke pigging shutdown is required?
3. **Hydrogen Network Sinking**: In your refinery's fuel gas system, what percentage of high-purity hydrogen is currently being slipped or purged into the refinery fuel gas header due to lack of dynamic cross-unit consumer reconciliation, and what is the equivalent monthly natural gas cost burned at the steam methane reformer (SMR) to replace it?
