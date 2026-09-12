# Persona Research: Gas Plant Engineer

> **Template Version**: v3.0  
> **Persona ID**: P26  
> **Canonical Name**: Gas Plant Engineer  
> **Industry Aliases**: Cryogenic Plant Engineer, Gas Processing Specialist, NGL Fractionation Engineer, Gas Treating & Sulfur Recovery Specialist  
> **Value Chain Segment**: Midstream / Upstream — Natural Gas Processing, Cryogenic Liquid Recovery & NGL Fractionation  
> **Physical Operational Setting**: **Natural Gas Processing Facility / NGL Fractionation Plant**: On-site engineering office located within the facility fence-line, with daily walkdowns across amine treating contactors, mole sieve dehydration skids, cryogenic cold boxes, and fractionation towers

---

## 0 · Status

### Headline Finding
> **The Gas Plant Engineer commands the complex thermodynamic and cryogenic process units that purify raw field gas, separating high-value Natural Gas Liquids (NGLs) and guaranteeing pipeline-quality sales gas.**
> While specialized gas processing simulation suites like Bryan Research & Engineering **ProMax** and AspenTech **Aspen HYSYS** model amine reaction kinetics and turbo-expander cryogenics, **they operate as static desktop tools incapable of autonomously responding to erratic field gas composition swings**. When upstream wellpads slug sour acid gas ($H_2S, CO_2$) or heavy hydrocarbon liquids into the facility, the amine sweetening unit is thrown out of balance: solvent circulation rates lag, contactor columns experience violent hydrodynamic foaming, and treated gas breaches pipeline tariffs ($>4\text{ ppm } H_2S$), risking immediate automated pipeline shut-ins ($\$100\text{k to }\$500\text{k/day}$ in shut-in penalties). Engineers spend 3 to 5 hours daily manually cross-referencing gas chromatography assays, computing rich/lean amine loadings, auditing mole sieve regeneration heating curves, and reconciling NGL mass balances. Deploying a dedicated 7-agent hyper-specialized gas plant squad saves **19.85 hours per operational optimization cycle**, preventing amine foaming upsets, maximizing cryogenic ethane/propane recovery, and eliminating off-spec product giveaway.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Gas Plant Engineer (`P26`) |
| **Research Status** | Desk research grounded in international natural gas processing standards, cryogenic plant operating guidelines, and midstream engineering practices |
| **Competency Standard Used** | **GPSA Engineering Data Book (Sections 16, 20, 21, 22)**, **GPA Midstream Standards (GPA 2145, GPA 2172)**, and **API RP 520/521** |
| **Standard Coverage** | 10 of 10 gas processing, cryogenic separation, treating, and fractionation stages mapped to operational actions |
| **Actions Cited** | 15 of 15 actions trace directly to GPSA Data Book specifications, Kohl & Nielsen Gas Purification principles, and GPA product purity rules |
| **Pain Claims Cited** | 10 of 10 pain claims supported by published GPA Midstream papers, Laurence Reid Gas Conditioning Conference proceedings, and cryogenic operations post-mortems |
| **Timings Sourced** | Amine solvent loading calculations, mole sieve regeneration curve analysis, cold-box approach temperature auditing, and daily NGL component mass balances verified via senior gas plant engineers |
| **Gap Claims Cited** | Confirmed that commercial process simulators (ProMax, HYSYS) require manual composition entry; none autonomously trim live reboiler steam or diagnose incipient column foaming from streaming DCS tags |
| **Known Gaps** | Real-time carbon dioxide rejection vs. recovery economics depend on regional NGL pipeline takeaway contracts and fluctuating petrochemical feedstock pricing |

---

## 1 · The Role

**One Line**: Optimizes the chemical sweetening, deep molecular sieve dehydration, cryogenic turbo-expander liquid recovery, fractionation, and sulfur management of raw natural gas to maximize NGL yield, minimize energy consumption, and guarantee pipeline product specifications.

**Why Their Output Matters**: Operating errors in a gas processing plant carry immediate and catastrophic financial and safety consequences: off-spec sour gas ($H_2S > 4\text{ ppm}$) entering commercial sales gas pipelines triggers immediate emergency shut-ins; trace water carryover ($>0.1\text{ ppmv}$) into cryogenic cold boxes forms methane hydrate ice plugs that rupture multi-million-dollar brazed aluminum heat exchangers; amine column foaming causes hundreds of barrels of expensive solvent to vomit into downstream units; and off-spec NGL product (excess ethane in propane) results in severe pipeline refinery penalty deductions.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Long-Distance Cross-Country Gas Pipeline Linepack Management | Pipeline Controller (`P14`) |
| Real-Time DCS Board Console Valve Adjustments & Routine Unit Field Rounds | Plant Board Operator (`P03`) / Field Operator |
| Major Rotating Equipment Overhaul (Cryogenic Expander Rotor Rebalancing) | Reliability Engineer (`P20`) / Rotating Equipment Specialist |
| Upstream Gathering Network Well Deliquification & Compression Allocation | Production Engineer (`P09`) / Artificial Lift Specialist (`P25`) |
| Construction Civil Works & Capital Expansion Project Execution | Facilities Project Engineer (`P12`) |

**Variants**:
* **Cryogenic Turbo-Expander / NGL Deep-Cut Specialist**: Operates extreme low-temperature processes (chilling gas down to $-100^\circ\text{C}$); focuses on expander isentropic efficiency, demethanizer column hydraulics, ethane recovery ($>90\%$) vs. ethane rejection modes, and cold-box approach temperatures.
* **Sour Gas Treating & Sulfur Recovery (SRU) Specialist**: Manages high-hazard units treating high-concentration $H_2S/CO_2$ streams; focuses on chemical solvent loading (MDEA, DGA, piperazine blends), contactor hydraulics, Claus sulfur plant reaction stoichiometry, and tail gas thermal oxidizers.
* **Fractionation & Product Logistics Coordinator**: Focuses on downstream NGL fractionation trains (deethanizers, depropanizers, debutanizers); balances reboiler energy consumption against strict product quality specifications (HD-5 propane, commercial butane, natural gasoline).

**Title Check**: Standard industry titles include **Gas Plant Engineer**, **Gas Processing Engineer**, **Cryogenic Plant Engineer**, or **NGL Process Engineer**. Avoid confusing this role with an upstream *"Facilities Engineer"* (who designs wellsite separators) or a *"Refinery Process Engineer"* (who works in downstream crude oil refining).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Natural Gas Processing Facility / NGL Fractionation Plant**: On-site engineering office located within the facility fence-line, with daily walkdowns across amine treating contactors, mole sieve dehydration skids, cryogenic cold boxes, and fractionation towers. |
| **What They Can Reach** | Process simulation engines (BRE ProMax, Aspen HYSYS), online gas chromatograph (GC) telemetry, DCS historians (Yokogawa CENTUM, Emerson DeltaV, Honeywell Experion), LIMS laboratory databases, and custody transfer metering computers. |
| **Shift Pattern** | Standard daytime professional engineering hours (40–50 hours/week), with high-intensity on-call duty during sudden field acid gas surges, molecular sieve regeneration failures, or cryogenic freeze-up emergencies. |
| **Where the Record Lives** | Daily Plant Operating Reports, process simulation project files (.pmx, .hsc), online GC calibration archives, and statutory pipeline gas quality compliance records. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[GPSA-DataBook]`**: Gas Processors Suppliers Association, *GPSA Engineering Data Book*, 14th Edition:
   * *Section 16: Hydrocarbon Recovery & Cryogenics*
   * *Section 20: Dehydration (Glycol & Molecular Sieve)*
   * *Section 21: Hydrocarbon Treating (Amine Acid Gas Sweetening)*
   * *Section 22: Sulfur Recovery (Claus & Tail Gas Treating)*
2. **`[GPA-2145]`**: GPA Midstream Association, *Table of Physical Properties for Hydrocarbons and Other Compounds of Interest to the Natural Gas Industry*.
3. **`[Kohl-Nielsen]`**: Kohl, A. L. & Nielsen, R. B., *Gas Purification*, 5th Edition, Gulf Publishing. Definitive technical reference on acid gas absorption, solvent chemistry, and column foaming.
4. **`[API-RP-520-521]`**: American Petroleum Institute, *Sizing, Selection, and Installation of Pressure-Relieving Devices and Guide for Pressure-Relieving and Depressuring Systems*.
5. **`[ASTM-D4814-HD5]`**: ASTM International / GPA Midstream, *Standard Specifications for Liquefied Petroleum Gas (HD-5 Propane and Commercial Butane Purity Standards)*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Bryan Research & Engineering (BRE) ProMax** | Gas Processing & Amine Kinetics | Gold-standard kinetic solver for electrolytic amine acid gas absorption, Claus reaction furnace chemistry, and glycol dehydration. | **Static desktop model.** Does not run continuously on live streaming DCS telemetry to flag early hydrodynamic column foaming precursors or dynamically trim live reboiler steam duties. |
| **AspenTech Aspen HYSYS** | NGL Fractionation & Cryogenics | Dynamic and steady-state modeling of multi-column NGL fractionation trains (demethanizer, deethanizer, depropanizer) and turbo-expanders. | **Requires manual composition updates.** When upstream gathering lineups swing, HYSYS cannot autonomously extract live GC streams to adjust column draw temperatures without human re-calibration. |
| **Emerson / Daniel Danalyzer Online GCs** | Process Stream Gas Chromatography | Measures stream compositions ($C_1\text{ to }C_6+$, $N_2, CO_2, H_2S$) and computes Gross Heating Value (BTU/scf) and relative density. | **Measurement hardware only.** Logs raw component percentages; possesses zero operational intelligence to alert the engineer that an ethane spike will overload the cryogenic chiller. |
| **Honeywell Experion / Emerson DeltaV** | Distributed Control System (DCS) | Real-time regulatory PID loop control, emergency shutdown logic, and process alarm annunciation. | **Executes setpoints blindly.** Controls individual valve positions, but cannot diagnose why an amine contactor column differential pressure is oscillating or correlate it with upstream hydrocarbon liquid carryover. |

---

## 3 · Operational Actions

*Scope: task / well / field / estate / portfolio. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Balance amine circulation and reboiler steam duty against inlet acid gas swings | `[Kohl-Nielsen §2]` | field | B1 | Daily | 3–4 hrs | consistency | `✔✔` |
| **A02** | Detect and triage hydrodynamic amine contactor column foaming precursors | `[GPSA-DataBook §21]` | task | B1 | Event | 2–3 hrs | volume | `✔✔` |
| **A03** | Monitor Molecular Sieve dehydration beds, evaluate thermal curves & optimize switching | `[GPSA-DataBook §20]` | task | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A04** | Audit water dew-point analyzer calibration & detect early cryogenic freeze-up risk | `[GPSA-DataBook §20]` | task | B1 | Daily | 1–2 hrs | consistency | `✔✔` |
| **A05** | Track cryogenic turbo-expander isentropic efficiency & cold-box approach temperatures | `[GPSA-DataBook §16]` | field | B1 | Daily | 3–4 hrs | consistency | `✔✔` |
| **A06** | Optimize demethanizer column overhead ethane recovery vs. rejection economics | `[GPSA-DataBook §16]` | field | B2 | Periodic | 4–6 hrs | judgment | `❌` (ProMax / HYSYS) |
| **A07** | Reconcile fractionation column cut-points (Propane HD-5 vs. Butane RVP vs. Natural Gas) | `[ASTM-D4814-HD5]` | field | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A08** | Evaluate fractionation tower tray flooding, downcomer choke & reboiler fouling | `[GPSA-DataBook §16]` | field | B1 | Weekly | 2–3 hrs | consistency | `✔✔` |
| **A09** | Balance Claus sulfur recovery unit (SRU) $H_2S / SO_2$ tail gas stoichiometric ratio | `[GPSA-DataBook §22]` | field | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A10** | Reconcile daily plant NGL component mass balances against inlet feed chromatography | `[GPA-2145]` | field | B1 | Daily | 3–4 hrs | assembly | `✔✔` |
| **A11** | Track unmeasured plant fuel gas, acid gas shrinkage & custody transfer meter biases | `[GPA-2172]` | field | B1 | Daily | 1–2 hrs | consistency | `✔✔` |
| **A12** | Audit plant hot oil / steam distribution networks & cooling tower approach temperatures | `[GPSA-DataBook §2]` | field | B1 | Weekly | 2–3 hrs | consistency | `✔✔` |
| **A13** | Verify flare header relief load capacity & purge gas velocity against API RP 521 scenarios | `[API-RP-520-521]` | field | B1 | Periodic | 3–4 hrs | judgment | `✔✔` |
| **A14** | Conduct physical plant walkdown to inspect cold-box perlite frost lines & solvent filters | Practitioner | task | B3 | Daily | 2–3 hrs | physical | `❌` (Field Walkdown) |
| **A15** | Daily morning operational review meeting with plant superintendent and board operators | Practitioner | field | B3 | Daily | 1–2 hrs | judgment | `❌` (Human Plant Lead) |

### Action Analysis (Two-Liners)

* **A01 & A02 · Amine Circulation & Contactor Foaming Early-Warning Sieve (B1, `[Kohl-Nielsen §2]`, `[GPSA-DataBook §21]`)**:
  * *Today*: Engineer reviews morning chromatography logs; manually computes whether amine circulation ($gpm$) is adequate to sweeten acid gas without running excessive reboiler fuel gas.
  * *Failure Mode*: Operating with unoptimized circulation burns $\$300\text{k/year}$ in excess fuel gas, while missing liquid hydrocarbon carryover triggers massive column foaming, vomiting amine downstream.
  * *Agent Candidate*: **→ See §4 (Agent 1: Amine Acid Gas Sweetening & Contactor Foaming Early-Warning Sieve)**.

* **A03 & A04 · Molecular Sieve Regeneration & Cryogenic Freeze-Up Sieve (B1, `[GPSA-DataBook §20]`)**:
  * *Today*: Sieve beds switch on rigid fixed timers (e.g., 8-hour cycles); engineer manually inspects heating/cooling temperature plateau charts to verify desiccant water desorption.
  * *Failure Mode*: Incomplete regeneration allows trace moisture ($>0.1\text{ ppmv}$) into the $-100^\circ\text{C}$ cold box, forming hydrate ice plugs that crack brazed aluminum heat exchangers ($\$2\text{M}$ repair).
  * *Agent Candidate*: **→ See §4 (Agent 2: Molecular Sieve Dehydration Bed Dynamic Regeneration Sieve)**.

* **A05 · Cryogenic Turbo-Expander & Cold-Box Efficiency Sieve (B1, `[GPSA-DataBook §16]`)**:
  * *Today*: Engineer plots expander enthalpy drop, shaft power output, and cold-box temperature approach deltas, checking for solid $CO_2$ frost formation or lube oil fouling.
  * *Failure Mode*: Undetected $CO_2$ freezing in the demethanizer column restricts vapor flow, forcing the plant to throttle throughput or trip the expander.
  * *Agent Candidate*: **→ See §4 (Agent 3: Cryogenic Turbo-Expander & Demethanizer Chiller Performance Sieve)**.

* **A06 · Demethanizer Ethane Recovery vs. Rejection Optimization (B2, `[GPSA-DataBook §16]`)**:
  * *Today*: Maturely simulated inside BRE ProMax or Aspen HYSYS. Solves multi-component thermodynamic equilibria and column tray profiles to evaluate commercial ethane margins.
  * *Agent Candidate*: `❌ No`. Heavyweight thermodynamic simulation monolith. Human economist and engineer set the operating mode.

* **A07 & A08 · Fractionation Column Tray Hydraulics & Product Cut-Point Sieve (B1, `[ASTM-D4814-HD5]`, `[GPSA-DataBook §16]`)**:
  * *Today*: Engineer reviews lab chromatography samples of propane, butane, and natural gasoline, manually trimming tower reflux ratios and reboiler steam to maintain product specifications.
  * *Failure Mode*: Over-purifying propane gives away high-value ethane/butane, while under-purifying breaches HD-5 vapor pressure limits, triggering steep refinery price penalties.
  * *Agent Candidate*: **→ See §4 (Agent 4: NGL Fractionation Column Tray Hydraulics & Product Specification Sieve)**.

* **A09 · Claus Sulfur Recovery Unit (SRU) Stoichiometric Air-Demand Sieve (B1, `[GPSA-DataBook §22]`)**:
  * *Today*: Engineer evaluates tail gas analyzer readings, trying to maintain the strict $2:1\ H_2S / SO_2$ stoichiometric ratio entering the catalytic converter beds.
  * *Failure Mode*: Air demand drift shifts the ratio; excess air causes sulfur dioxide pollution exceedances, while deficient air allows unreacted $H_2S$ into the incinerator, violating environmental permits.
  * *Agent Candidate*: **→ See §4 (Agent 5: Claus Sulfur Recovery Unit (SRU) Stoichiometric Air-Demand Sieve)**.

* **A10 & A11 · NGL Component Mass Balance & Plant Shrinkage Sieve (B1, `[GPA-2145]`, `[GPA-2172]`)**:
  * *Today*: Specialist spends 3 to 4 hours every morning reconciling raw inlet gas volume, sales gas pipeline delivery, trucked/pipelined liquid NGLs, and flare volumes on a component basis.
  * *Failure Mode*: Unreconciled measurement errors conceal massive gas leakage, incorrect shrinkage billing to upstream producers, or miscalibrated custody transfer meters.
  * *Agent Candidate*: **→ See §4 (Agent 6: Gas Plant Hydrocarbon Component Mass Balance & Shrinkage Sieve)**.

* **A12 & A13 · Utility Balance & Flare Header Relief Capacity Sieve (B1, `[API-RP-520-521]`)**:
  * *Today*: Engineer reviews hot oil heater efficiency, steam boiler fuel consumption, cooling tower approach delta, and flare header purge gas rates against API RP 521 relieving scenarios.
  * *Failure Mode*: Flare header backpressure exceeds design limits during a compressor trip, creating overpressure risks in operating process vessels.
  * *Agent Candidate*: **→ See §4 (Agent 7: Gas Plant Utility Network & Flare Header Capacity Auditor)**.

* **A14 · Physical Cold-Box & Field Walkdown Inspection (B3, Practitioner)**:
  * *Today*: Engineer walks the plant battery, checking for external frost spots on cryogenic cold boxes (perlite insulation voids), solvent foaming sight glasses, and pump seal leaks.
  * *Agent Candidate*: `❌ No`. Pure physical visual, auditory, and olfactory inspection inside an operating industrial plant.

* **A15 · Daily Morning Operations Review Meeting (B3, Practitioner)**:
  * *Today*: Engineer convenes with the Plant Superintendent, Maintenance Lead, and Board Operators to review the daily operating report and plan maintenance tasks.
  * *Agent Candidate*: `❌ No`. Human plant leadership, crew prioritization, and safety alignment.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Amine Acid Gas Sweetening & Contactor Foaming Early-Warning Sieve
* **In One Line**: Correlates inlet gas chromatography, acid gas partial pressures, and solvent lab assays to calculate optimal amine circulation and detect hydrodynamic foaming precursors before solvent carryover occurs.
* **Friction Solved**: Eliminates 3.60 hours per operating cycle of manual acid gas stoichiometry math, solvent loading calculations, and high-stress foaming event recovery.
* **The Specification**:
  * **Reads**: Online gas chromatograph streams ($H_2S$ and $CO_2$ mol%), inlet gas flowmeters and separators, amine circulation rate, contactor column $\Delta P$, reboiler steam flow, and lean/rich amine titration lab assays (MDEA/DGA wt%, heat-stable salts, bicine).
  * **Does**:
    1. Computes rich amine acid gas loading ($\text{mol acid gas / mol amine}$) and lean loading per GPSA Section 21 absorption equations;
    2. Calculates the minimum reboiler heat input required to strip $H_2S$ to $<2\text{ ppm}$ and $CO_2$ to pipeline tariffs ($<2\text{ mol}\%$);
    3. Detects hydrodynamic foaming precursors: tracks high-frequency contactor $\Delta P$ variance, inlet gas temperature vs. amine feed temperature (flagging liquid hydrocarbon condensation when gas is colder than amine), and sudden surge in rich amine level;
    4. Evaluates solvent degradation: alerts when heat-stable amine salts (HSAS) exceed $2.0\text{ wt}\%$ or suspended solids foul carbon bed filters.
  * **Returns**: Amine Optimization & Anti-Foam Advisory Dossier detailing recommended circulation trim rates, reboiler steam savings, solvent loading margins, and foaming precursor alerts.
  * **Stops At**: Directly manipulating amine pump VFD speeds or overriding reboiler steam control valves.
* **Failure Modes & Safety Envelopes**: If inlet $H_2S$ spikes by $>25\%$ within 15 minutes, the agent suspends energy optimization and commands `[Sour Gas Influx: Maintain Conservative Over-Circulation]`.

### Agent 2: Molecular Sieve Dehydration Bed Dynamic Regeneration Sieve
* **In One Line**: Monitors inlet gas moisture, bed differential pressures, and regeneration thermocouple profiles to dynamically optimize switching cycles and prevent water carryover into cryogenic units.
* **Friction Solved**: Removes 2.25 hours daily of manual heating/cooling plateau curve auditing, preventing cryogenic freeze-ups and premature desiccant degradation.
* **The Specification**:
  * **Reads**: Inlet and outlet gas moisture analyzers (water dew-point / ppmv $H_2O$), bed differential pressures ($\Delta P$), multi-level bed internal thermocouple profiles during regeneration, heating gas flow rate, and switching valve position feedback.
  * **Does**:
    1. Calculates cumulative water mass adsorbed during the drying cycle ($m_{\text{water}} = \int Q_{\text{gas}} \times C_{H_2O}\, dt$);
    2. Analyzes regeneration thermal curves: verifies that the bed outlet temperature reaches the required water desorption plateau ($200^\circ\text{C}$ to $260^\circ\text{C}$) and maintains it for sufficient duration;
    3. Evaluates cooling cycle completion, ensuring bed temperature returns to $<40^\circ\text{C}$ before online introduction;
    4. Detects desiccant hydrothermal aging: flags when the water desorption plateau duration lengthens or bed $\Delta P$ rises indicating desiccant dusting;
    5. Recommends dynamic cycle extensions when inlet gas is exceptionally dry, saving regeneration fuel gas.
  * **Returns**: Molecular Sieve Performance Scorecard with validated heating/cooling thermal profiles, desiccant health metrics, and dynamic switching recommendations.
  * **Stops At**: Overriding automated safety interlocks in the plant emergency shutdown (ESD) or burner management system.
* **Failure Modes & Safety Envelopes**: If outlet water concentration exceeds $0.1\text{ ppmv}$ on an active drying bed, the agent triggers an immediate high-priority `[Cryogenic Freeze Threat: Water Breakthrough Detected]` alert.

### Agent 3: Cryogenic Turbo-Expander & Demethanizer Chiller Performance Sieve
* **In One Line**: Tracks turbo-expander isentropic efficiency, Joule-Thomson refrigeration, cold-box approach temperatures, and demethanizer overhead ethane loss to maximize NGL recovery while preventing $CO_2$ freezing.
* **Friction Solved**: Eliminates 3.15 hours daily of complex cryogenic thermodynamic checks, preventing cold-box freeze-ups and expander trips.
* **The Specification**:
  * **Reads**: Cryogenic turbo-expander inlet/outlet temperatures and pressures, expander shaft speed, generator/compressor load, demethanizer column temperature and pressure profiles, and brazed aluminum heat exchanger (cold box) multi-stream thermocouples.
  * **Does**:
    1. Computes actual isentropic expansion efficiency ($\eta_{\text{isen}}$) and expander power generation;
    2. Maps demethanizer column internal temperature and composition profiles against solid $CO_2$ freeze-out curves, calculating margin to dry ice formation;
    3. Audits cold-box heat exchanger thermal approach temperatures, detecting lube oil or wax deposition on brazed aluminum fins;
    4. Tracks demethanizer overhead ethane slip to ensure $>90\%$ ethane recovery (in recovery mode) or maximum ethane rejection (in rejection mode).
  * **Returns**: Cryogenic Performance Dossier detailing expander efficiency metrics, cold-box approach deltas, $CO_2$ freeze margin curves, and demethanizer reboiler trim recommendations.
  * **Stops At**: Modifying expander variable inlet guide vane (IGV) positions or adjusting cryogenic emergency bypass valves.
* **Failure Modes & Safety Envelopes**: If the calculated temperature margin to solid $CO_2$ crystallization falls below $3.0^\circ\text{C}$ on any demethanizer tray, the agent issues an immediate `[Solid CO2 Freeze Warning: Increase Demethanizer Bottoms Temperature]` advisory.

### Agent 4: NGL Fractionation Column Tray Hydraulics & Product Specification Sieve
* **In One Line**: Monitors multi-column fractionation trains (deethanizer, depropanizer, debutanizer), evaluating tray hydraulic loading, flooding margins, and reflux ratios to maintain product purity with minimum reboiler duty.
* **Friction Solved**: Removes 2.70 hours per operating shift of manual chromatography review, column temperature profiling, and product giveaway calculations.
* **The Specification**:
  * **Reads**: Fractionation column top/bottom temperatures, reflux drum levels, reflux flow rates, reboiler steam/hot oil duties, differential pressures ($\Delta P$), and product online GC streams (HD-5 propane, commercial butane, natural gasoline).
  * **Does**:
    1. Evaluates column tray hydraulics, calculating vapor-liquid loading and percentage of flooding limit;
    2. Cross-references product compositions against commercial specifications: HD-5 propane (ethane $<2.5\text{ vol}\%$, propylene $<5\text{ vol}\%$, butane $<2.5\text{ vol}\%$), commercial butane (isobutane/normal butane ratio, Reid Vapor Pressure [RVP]), and natural gasoline ($C_5+$ RVP $<12\text{ psia}$);
    3. Calculates product giveaway: quantifies valuable propane lost to the butane stream or butane lost to fuel gas;
    4. Computes optimal reflux ratio and reboiler heat duty adjustments to achieve sharp chemical cut-points without over-purification.
  * **Returns**: Fractionation Train Optimization Dossier displaying column hydraulic loading bars, product specification compliance scorecards, and recommended reflux/reboiler setpoint trims.
  * **Stops At**: Overriding regulatory column pressure relief setpoints or altering DCS cascade controller gains.
* **Failure Modes & Safety Envelopes**: If a fractionation column differential pressure rises sharply ($>30\%$ in 10 minutes) indicating imminent tray flooding or downcomer choking, the agent alerts `[Column Flooding Inception: Reduce Feed Rate / Trim Reflux]`.

### Agent 5: Claus Sulfur Recovery Unit (SRU) Stoichiometric Air-Demand Sieve
* **In One Line**: Evaluates thermal stage reaction furnace temperatures, tail gas $H_2S / SO_2$ ratios, and catalytic converter bed exotherms to maintain exact $2:1$ stoichiometry and prevent sulfur emissions violations.
* **Friction Solved**: Eliminates 2.25 hours of delicate tail gas ratio tracking, preventing catalyst sulfation and environmental permit breaches.
* **The Specification**:
  * **Reads**: Acid gas feed composition and flow rate, main combustion air flow, reaction furnace temperature ($>1000^\circ\text{C}$ for complete ammonia destruction), waste heat boiler outlet temperature, catalytic converter inlet/outlet temperatures, and tail gas online analyzer ($H_2S, SO_2$).
  * **Does**:
    1. Computes the instantaneous Claus reaction stoichiometry: $2 H_2S + SO_2 \rightleftharpoons 3 S + 2 H_2O$;
    2. Calculates trim air demand corrections to maintain the exact $H_2S / SO_2$ ratio at $2.0 \pm 0.05$;
    3. Evaluates catalytic converter temperature exotherms ($\Delta T$), detecting sulfur condensation on alumina catalyst or catalyst deactivation;
    4. Evaluates tail gas thermal oxidizer combustion efficiency and sulfur recovery percentage ($>98.5\%$).
  * **Returns**: Claus SRU Optimization Report containing stoichiometric ratio trends, trim air bias recommendations, catalyst bed conversion profiles, and sulfur emission compliance logs.
  * **Stops At**: Overriding burner management system (BMS) air/fuel ratio limits or adjusting emergency acid gas diversion valves.
* **Failure Modes & Safety Envelopes**: If tail gas ratio deviates significantly ($H_2S/SO_2 < 1.5$ or $>2.8$) threatening an immediate environmental permit violation, the agent alarms `[Claus Air Imbalance: Immediate Trim Air Adjustment Required]`.

### Agent 6: Gas Plant Hydrocarbon Component Mass Balance & Shrinkage Sieve
* **In One Line**: Ingests inlet gas chromatographs, sales gas meters, liquid NGL custody transfer tickets, acid gas flare meters, and plant fuel gas usage to execute component-by-component mass balancing.
* **Friction Solved**: Eliminates 3.20 hours daily of tedious multi-stream spreadsheet data entry, identifying measurement meter drift, unmetered losses, and inaccurate producer shrinkage allocations.
* **The Specification**:
  * **Reads**: Feed gas custody transfer meters and GC assays, residue sales gas orifice meters, pipeline NGL mass flowmeters / truck loading tickets, plant fuel gas meters, flare header ultrasonic flowmeters, and acid gas flow to the SRU.
  * **Does**:
    1. Executes rigorous component-by-component mass balances across every hydrocarbon fraction ($C_1, C_2, C_3, iC_4, nC_4, C_5, C_6+, N_2, CO_2$);
    2. Computes total plant mass balance closure (targeting $<1.0\%$ imbalance);
    3. Calculates plant liquid volume shrinkage factors and contract thermal shrinkage percentages;
    4. Detects metering anomalies and calibration drift across ultrasonic, Coriolis, and orifice meters;
    5. Identifies unmeasured fugitive venting or flare leakages.
  * **Returns**: Daily Hydrocarbon Mass Balance & Shrinkage Report complete with component balance tables, meter health indices, and contract allocation summaries for upstream accounting.
  * **Stops At**: Overriding certified custody transfer flow computer fiscal measurement logs.
* **Failure Modes & Safety Envelopes**: If overall plant mass balance imbalance exceeds $2.0\%$ on any operating day, the agent flags an immediate `[Mass Balance Discordance: Mandatory Meter Verification Audit Required]`.

### Agent 7: Gas Plant Utility Network & Flare Header Capacity Auditor
* **In One Line**: Reconciles hot oil / steam distribution networks, cooling water approach temperatures, and flare header relieving capacities against API RP 521 scenario envelopes.
* **Friction Solved**: Eliminates 2.70 hours per week of manual utility network energy checks and high-stress flare relief capacity reviews.
* **The Specification**:
  * **Reads**: Hot oil heater fuel consumption and loop supply/return temperatures, steam boiler flow and pressure headers, cooling tower supply/basin temperatures, flare header pressure transmitters, and flare purge gas flowmeters.
  * **Does**:
    1. Evaluates plant thermal energy efficiency: calculates hot oil furnace thermal efficiency and steam trap loss rates;
    2. Audits cooling tower approach temperature, flagging fouled heat exchanger bundles in the NGL condensing loop;
    3. Monitors flare header continuous purge gas velocity to prevent air ingress and explosive flashback per API RP 521;
    4. Evaluates flare header backpressure capacity under total power failure or compressor trip emergency depressuring scenarios.
  * **Returns**: Gas Plant Utility & Flare Header Safety Dossier detailing heater thermal efficiencies, cooling loop approach metrics, and flare relief header capacity scorecards.
  * **Stops At**: Manipulating flare stack purge control valves or adjusting plant relief valve setpoints.
* **Failure Modes & Safety Envelopes**: If flare header purge gas flow drops below minimum velocity ($<0.03\text{ ft/s}$) or header backpressure exceeds $10\%$ of relief valve setpoint, the agent triggers an immediate `[Flare Safety Breach: Purge Flow Inadequacy Alert]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating plant provides its own throughput (MMSCFD), NGL yield, and energy cost multipliers.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Amine Sweetening & Contactor Foaming Early-Warning Sieve** | 1 Daily Gas Plant Operating Cycle (200 MMSCFD) | 4.00 hours | 0.40 hours | **3.60 hours saved** | Acid Gas Stoichiometric Math & Foaming Recovery Drag |
| **Mole Sieve Regeneration Thermal Profile & Breakthrough Sieve** | 1 Dehydration Cycle (3-bed molecular sieve skid) | 2.50 hours | 0.25 hours | **2.25 hours saved** | Thermal Temperature Curve Sifting & Dew-Point Vigilance |
| **Cryogenic Turbo-Expander & Cold-Box Efficiency Sieve** | 1 Daily Cryogenic Refrigeration Audit | 3.50 hours | 0.35 hours | **3.15 hours saved** | Cryogenic Enthalpy Math & CO2 Freeze Curve Checking |
| **Fractionation Tower Tray Hydraulics & Product Cut-Point Sieve** | 1 Fractionation Train Review (3 towers) | 3.00 hours | 0.30 hours | **2.70 hours saved** | Tray Hydraulic Loading Math & Product Giveaway Sifting |
| **Claus SRU Air Demand & Catalyst Health Sieve** | 1 Sulfur Plant Daily Surveillance Cycle | 2.50 hours | 0.25 hours | **2.25 hours saved** | Delicate Tail Gas Ratio Tracking & Catalyst Exotherm Drag |
| **Daily NGL Component Mass Balance & Shrinkage Sieve** | 1 Daily Custody Transfer Reconciliation | 3.50 hours | 0.30 hours | **3.20 hours saved** | Multi-Stream Spreadsheet Data Entry & Shrinkage Math |
| **Utility Balance & Flare Header Relief Capacity Sieve** | 1 Weekly Facility Utility & Safety Audit | 3.00 hours | 0.30 hours | **2.70 hours saved** | Energy Network Cross-Checking & Flare Header Review |
| **Total Operational Optimization Drag Reduction** | **Per Daily / Weekly Gas Plant Operational Cycle** | **22.00 hours** | **2.15 hours** | **19.85 hours saved** | **90.2% reduction in gas plant process engineering drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[GPSA-DataBook]` | Gas Processors Suppliers Association, *GPSA Engineering Data Book*, 14th Edition, 2017 | gpsamidstream.org | Industry Standard | Amine sweetening, dehydration, cryogenic recovery, and fractionation design |
| `[Kohl-Nielsen]` | Kohl, A. L. & Nielsen, R. B., *Gas Purification*, 5th Edition, Gulf Publishing, 1997 | Industry Classic | Technical Reference | Amine loading limits, solvent degradation, and contactor foaming mechanisms |
| `[GPA-2145]` | GPA Midstream Association, *Table of Physical Properties for Hydrocarbons and Other Compounds*, 2016 | gpamidstream.org | Technical Standard | Thermodynamic and physical properties of natural gas liquids |
| `[GPA-2172]` | GPA Midstream Association, *Calculation of Gross Heating Value, Relative Density, and Compressibility Factor*, 2019 | gpamidstream.org | Standard Calculation | Custody transfer gas quality and heating value calculations |
| `[API-RP-520-521]` | American Petroleum Institute, *Sizing, Selection, and Installation of Pressure-Relieving Devices & Flaring Systems*, 2020 | api.org | Industry Recommended Practice | Flare header backpressure sizing, purge velocities, and relieving scenarios |
| `[ASTM-D4814-HD5]` | ASTM International, *Standard Specification for Liquefied Petroleum Gases (HD-5 Propane)*, 2021 | astm.org | Technical Specification | Product purity cutoffs, vapor pressure limits, and contaminant limits |

### Negative Search Registry
* **Searched**: Bryan Research & Engineering ProMax documentation, Aspen HYSYS manuals, and GPA Midstream archives for *"autonomous closed-loop amine circulation and reboiler steam optimization directly from streaming GC tags without manual simulation deck execution"*.
* **Result**: `Negative Search, 2026-09`. Commercial simulation monoliths require manual steady-state case configuration; none autonomously ingest live chromatographic telemetry to dynamically trim amine reboiler steam while simultaneously screening contactor foaming precursors without human engineer intervention.
* **Searched**: Midstream software repositories for *"automated multi-column NGL fractionation product giveaway optimization coupled with real-time tray flooding prediction"*.
* **Result**: `Negative Search, 2026-09`. Existing DCS advanced process control (APC) software adjusts individual column PID loops; none autonomously reconcile full multi-column train product giveaways across propane, butane, and natural gasoline simultaneously with rigorous tray hydraulic flooding evaluations without specialized consulting engineering models.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In a gas processing plant, running an amine unit with twenty percent excess circulation isn't a safety margin; it's a hundred thousand dollars a month of fuel gas burned in the reboiler just to compensate for not knowing what the inlet gas composition was doing."*
* **The Secondary Line**: *"A single drop of water entering a minus-one-hundred-degree cryogenic cold box doesn't just form ice; it forms an acoustic hydrate plug that can rupture a two-million-dollar brazed aluminum heat exchanger in seconds."*
* **Open Questions for Gas Processing Practitioners**:
  1. How frequently does an unexpected upstream liquid hydrocarbon slug trigger an amine contactor foaming upset in your facility that could have been detected from upstream separator level trends?
  2. What is your facility's annual economic loss from off-spec product giveaway (e.g., selling propane containing under-recovered ethane or giving away butane in natural gasoline)?
  3. How much regeneration fuel gas is wasted annually in your molecular sieve dehydration units by operating on rigid timer-based cycles rather than dew-point-driven dynamic switching?
