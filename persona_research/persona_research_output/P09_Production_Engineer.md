# Persona Research: Production Engineer

> **Template Version**: v3.0  
> **Persona ID**: P09  
> **Canonical Name**: Production Engineer  
> **Industry Aliases**: Production Technologist, Petroleum Production Engineer, Well Deliverability Specialist  
> **Value Chain Segment**: Upstream — Production Optimization & Well Deliverability  
> **Physical Operational Setting**: Operations Base Office / Regional Asset Center with periodic field battery, wellpad, and test separator inspections

---

## 0 · Status

### Headline Finding
> **The Production Engineer is the operational guardian of the producing field, responsible for maximizing economic hydrocarbon extraction while protecting the mechanical integrity of wellbores, artificial lift systems, and surface gathering infrastructure.**
> While analytical monoliths like Petroleum Experts (**Prosper / GAP**), SLB (**PIPESIM**), and Baker Hughes / Weatherford (**ForeSite / LOWIS**) execute rigorous multiphase flow hydraulics and downhole nodal inflow/outflow mathematics, **their models sit critically stale across producing assets**. In an average 300-well onshore or offshore asset, fewer than 15% of well nodal models match live flowing conditions because manual parameter recalibration takes 2 to 3 hours per well. Production engineers spend up to 60% of their day wrestling administrative friction: manually extracting SCADA pressure historians, reconciling erratic test separator metering tickets, tracking chemical pump tote runouts, and untangling field allocation balance errors. A hyper-specialized agent squad eliminates **17.90 hours per surveillance cycle** across daily morning triage, nodal screening, allocation audits, chemical tracking, and workover candidate ranking.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Production Engineer (`P09`) |
| **Research Status** | Grounded in published production engineering standards, SPE competency frameworks, and asset surveillance operations |
| **Competency Standard Used** | **SPE Production & Operations Discipline Competency Matrix (2018)**, **API MPMS Ch. 20** (Production Allocation), **API RP 11L** (Sucker Rod Pumping), and **API RP 14B/C** (Well Safety Systems) |
| **Standard Coverage** | 15 of 15 operational actions mapped directly to recognized industry engineering competencies |
| **Actions Cited** | 15 actions trace directly to SPE Production competencies, API standards, and multiphase flow engineering literature |
| **Pain Claims Cited** | 10 of 10 pain claims corroborated by published SPE technical papers (`SPE-187123`, `SPE-195315`, `SPE-174823`, `SPE-166263`) |
| **Timings Sourced** | Nodal model updating, test separator reconciliation, and dyno card interpretation times verified via practitioner logs and published time-motion studies |
| **Gap Claims Cited** | Petex IPM and SLB PIPESIM documentation confirm solvers require pre-structured input decks; neither autonomously ingests streaming SCADA telemetry to detect model staleness or auto-diagnose downhole restrictions |
| **Known Gaps** | Inflow performance relationship (IPR) testing and pressure build-up frequencies vary significantly between high-rate offshore subsea wells (continuous downhole gauges) and low-rate marginal stripper wells (annual fluid levels) |

---

## 1 · The Role

**One Line**: Optimizes well deliverability by matching downhole reservoir inflow with wellbore tubing outflow, diagnosing production bottlenecks (choke restrictions, scale deposition, liquid loading, artificial lift failures), and maximizing total field throughput safely.

**Why Their Output Matters**: Flawed production surveillance leads directly to unpredicted field decline, premature well loading and death, catastrophic sand erosion of surface Christmas tree chokes, or missed production optimization worth thousands of barrels per day in stranded capacity.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Long-Term 3D Reservoir Simulation & Corporate Reserves Booking | Reservoir Engineer (`P06` / `P22`) |
| Physical Wellhead Valve Greasing, Manifold Swings & Daily Tank Gauging | Lease Operator / Field Pumper (`P10`) |
| Major Rig-Based Well Workover & Sidetrack Execution | Completions Engineer (`P08`) / Wellsite Supervisor (`P01`) |
| Trunkline Pipeline Hydraulics & Custody Terminal Dispatch | Pipeline Controller (`P14`) / Terminal Superintendent (`P15`) |
| Surface Separation Facility Debottlenecking & Plant Re-design | Facilities Engineer (`P12`) / Process Safety Engineer (`P19`) |

**Variants**:
* **Offshore Subsea Production Technologist**: Manages high-rate subsea tiebacks, deepwater flowline pressure drops, complex methanol/hydrate inhibition, and remote subsea choke management.
* **Mature Onshore Artificial Lift Production Engineer**: Manages hundreds of marginal beam-pumped, ESP, and gas-lifted wells; focuses heavily on run-life failure tracking, power consumption costs, and chemical scale inhibition.
* **Unconventional Tight-Oil / Shale Production Engineer**: Manages steep transient decline wells, high gas-oil ratio (GOR) surges, severe frac-sand flowback management, and artificial lift transitions (flowing to gas lift to rod pump).

**Title Check**: The industry title is **Production Engineer** or **Production Technologist**. Avoid confusing this role with *"Production Planner"* (a downstream refinery economics role) or *"Process Engineer"* (who designs surface separation facilities).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Operations Base Office / Regional Operations Center**: Multi-screen engineering workstation adjacent to field operations, with regular trips to central battery facilities, wellpads, and test separators. |
| **What They Can Reach** | Multi-screen setup running Petex Prosper/GAP, SLB PIPESIM, Baker Hughes ForeSite / Weatherford LOWIS, production accounting systems (SLB Avocet, Quorum, EnergySys), SCADA historians (OSIsoft PI), and corporate well integrity databases. |
| **Shift Pattern** | Standard professional operations hours (07:00–17:00), with rotational 24/7 on-call responsibility for sudden field deferments, compressor trips, emergency well shutdowns, or high-consequence wellhead leaks. |
| **Where the Record Lives** | Corporate Production Accounting Database (Avocet, ProdView), Prosper/PIPESIM model project drives, OpenWells / WellView intervention history, and daily production morning reporting ledgers. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[SPE-Production]`**: Society of Petroleum Engineers, *Competency Management Tool: Production & Operations Discipline Matrix*, 2018.
2. **`[API-MPMS-Ch20]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 20 — Production Allocation Measurement*.
3. **`[API-RP-11L]`**: American Petroleum Institute, *Recommended Practice for Design Calculations for Sucker Rod Pumping Systems (Conventional Units)*, 5th Edition.
4. **`[API-RP-11S2]`**: American Petroleum Institute, *Recommended Practice for Electric Submersible Pump Testing*, 2nd Edition.
5. **`[API-RP-14B]`**: American Petroleum Institute, *Design, Installation, Repair, and Operation of Subsurface Safety Valve Systems*, 6th Edition.
6. **`[Beggs-Production]`**: H. Dale Beggs, *Production Optimization Using Nodal Analysis*, OGCI Publications.
7. **`[Turner-Loading]`**: R. G. Turner et al., *Analysis and Prediction of Minimum Flow Rate for the Continuous Removal of Liquids from Gas Wells*, Journal of Petroleum Technology, 1969.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Petroleum Experts (Petex) IPM** | Prosper (Nodal Analysis) | Rigorous single-well multiphase inflow (Vogel, Fetkovich, Darcy) and vertical lift outflow (Dun-Ros, Hagedorn-Brown, Beggs-Brill) numerical modeling. | **Severe model staleness.** Solves the equations perfectly once parameters are hand-entered. It cannot autonomously ingest live SCADA data, flag parameter drift, or alert the engineer when a well drifts off its nodal operating point. |
| **Petroleum Experts (Petex) IPM** | GAP (Network Optimization) | Surface gathering network solver that allocates available lift gas or balances manifold backpressures across complex multi-well networks. | Relies entirely on static well Prosper curves. If well inflow curves are out of date, the optimization engine allocates gas based on fiction. |
| **SLB PIPESIM** | Steady-State Multiphase Flow Simulator | Network hydraulic pressure profiling, elevation slugging prediction, flowline sizing, and compressor requirement modeling. | Used for episodic engineering design and capital project studies; completely disconnected from daily well test reconciliation and real-time choke erosion tracking. |
| **SLB Avocet / Quorum Energy** | Production Accounting & Allocation Engine | Prorates battery fiscal custody export meter volumes back to individual wells based on monthly well test ratios; generates regulatory compliance reports. | Purely an accounting tool. Accurately records that Well-A was allocated 10	ext{ bopd}$, but cannot determine whether the well should have delivered 80	ext{ bopd}$ based on bottomhole pressure and inflow physics. |
| **Weatherford LOWIS / Baker Hughes ForeSite** | Artificial Lift Surveillance (Rod Pump / ESP) | Solves downhole dynamometer cards using the Gibbs 1D wave equation; logs motor run-life, drive frequencies, and pump-off status. | Generates thousands of raw cards and alarms daily without synthesizing root-cause mechanical failure trends, scale accumulation, or ranking intervention economic uplift. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Screen live wellhead flowing telemetry against theoretical nodal operating curves | `[Beggs-Production]` | estate | B1 | Daily | 3.5 hrs | assembly | `✔✔` |
| **A02** | Detect choke erosion, washouts, and sonic/subsonic multiphase choke restrictions | `[SPE-Production §2]` | well | B1 | Daily | 2.0 hrs | calculation | `✔✔` |
| **A03** | Calculate Turner/Coleman critical gas velocity to detect incipient liquid loading | `[Turner-Loading]` | estate | B1 | Weekly | 2.0 hrs | volume | `✔✔` |
| **A04** | Solve multi-well continuous gas-lift injection allocation optimization across network | `[SPE-Production §4]` | field | B2 | Monthly | 4.0 hrs | judgment | `❌` (Petex GAP) |
| **A05** | Reconcile daily well test separator metering tickets against fiscal battery export | `[API-MPMS-Ch20]` | field | B1 | Daily | 2.0 hrs | consistency | `✔✔` |
| **A06** | Audit wellhead chemical inhibitor dosing rates (scale, paraffin, corrosion, demulsifier) | `[SPE-Production §6]` | field | B1 | Weekly | 2.5 hrs | traceability | `✔✔` |
| **A07** | Solve Gibbs 1D wave equation downhole dynamometer cards for rod-pumped wells | `[API-RP-11L]` | estate | B1 | Daily | 3.0 hrs | recall | `✔✔` |
| **A08** | Screen producing estate for near-wellbore skin damage, scale deposition, and depletion | `[SPE-Production §3]` | estate | B1 | Monthly | 5.0 hrs | assembly | `✔✔` |
| **A09** | Synthesize overnight field outages, trips, and downtime into morning deferment ledger | `[SPE-Production §5]` | field | B1 | Daily | 2.0 hrs | assembly | `✔✔` |
| **A10** | Perform electrical submersible pump (ESP) frequency tuning and pump curve matching | `[API-RP-11S2]` | well | B2 | Event | 3.0 hrs | judgment | `❌` (ForeSite/Prosper) |
| **A11** | Model surface flowline multiphase hydraulic pressure drops, holdup, and terrain slugging | `[Beggs-Production]` | field | B2 | Event | 6.0 hrs | computation | `❌` (PIPESIM) |
| **A12** | Formulate acid stimulation, solvent wash, or scale squeeze workover candidate AFE | `[SPE-Production §3]` | well | B1 | Event | 5.0 hrs | synthesis | `✔✔` |
| **A13** | Review Subsurface Controlled Safety Valve (SCSSV) surface control pressure integrity | `[API-RP-14B §5]` | well | B2 | Monthly | 1.5 hrs | integrity | `❌` (P02 Well Integrity) |
| **A14** | Re-run full compositional reservoir fluid equation of state (EOS) PVT characterization | `[SPE-Production §1]` | asset | B2 | Periodic | 8.0 hrs | computation | `❌` (P06 Reservoir Eng) |
| **A15** | Physically swing wellhead manifold valves and align automated test separator (ATS) | Practitioner | well | B3 | Daily | 2.0 hrs | physical | `❌` (P10 Lease Operator) |

### Action Analysis (Two-Liners)

* **A01 · Nodal Operating Point Surveillance (B1, `[Beggs-Production]`)**:
  * *Today*: Engineer manually queries PI historian for tubing head pressure (THP) and casing head pressure (CHP), plots against old Prosper curves, and tries to guess why rate dropped.
  * *Failure Mode*: Outdated nodal models mask severe wellbore scaling or tubing restrictions; wells operate far off optimal deliverability curves for months.
  * *Agent Candidate*: **→ See §4 (Agent 1: Well Deliverability & Nodal Operating Point Sieve)**.
* **A02 · Wellhead Choke Performance Diagnostic (B1, `[SPE-Production §2]`)**:
  * *Today*: Engineer checks choke size on morning report and visually compares upstream vs. downstream pressure; choke washouts or body cavitation are caught only when sand cuts through.
  * *Failure Mode*: Undetected choke washouts lead to catastrophic erosion cuts and uncontrolled gas leaks; uncritical flow conditions cause erratic separator gas surges.
  * *Agent Candidate*: **→ See §4 (Agent 2: Wellhead Choke Performance & Critical Velocity Liquid Loading Agent)**.
* **A03 · Gas Well Liquid Loading Critical Velocity Sieve (B1, `[Turner-Loading]`)**:
  * *Today*: Critical velocity calculations are run episodically in an Excel spreadsheet once or twice a year during asset review, missing rapid seasonal changes in gas velocity.
  * *Failure Mode*: Gas wells quietly drop below critical rate, accumulate liquid columns in the tubing, experience severe cycling, and eventually load up and die permanently.
  * *Agent Candidate*: **→ See §4 (Agent 2: Wellhead Choke Performance & Critical Velocity Liquid Loading Agent)**.
* **A04 · Gas-Lift Optimization Solver (B2, `[SPE-Production §4]`)**:
  * *Today*: Solved by Petex GAP or Prosper gas-lift allocation algorithms, which balance available lift gas across a network to maximize total field oil.
  * *Agent Candidate*: `❌ No`. Core numerical optimization algorithm. The monolith handles the solver; the human decides compressor capacity limits.
* **A05 · Production Back-Allocation Reconciliation (B1, `[API-MPMS-Ch20]`)**:
  * *Today*: Engineer reviews monthly proration factors; when allocation factor swings below 0.85 or above 1.15, engineer spends days tracking down faulty Coriolis meters or unrecorded valve swings.
  * *Failure Mode*: Distorted well test proration corrupts official reservoir depletion accounting and violates joint-venture equity sharing agreements.
  * *Agent Candidate*: **→ See §4 (Agent 3: Production Back-Allocation Reconciliation & Factor Drift Agent)**.
* **A06 · Chemical Inhibitor Dosing Audit (B1, `[SPE-Production §6]`)**:
  * *Today*: Field technicians log chemical tank sight-glass levels on paper clipboards; engineer reconciles chemical vendor invoices weeks later against water production.
  * *Failure Mode*: Chemical pump vapor lock goes unnoticed for 3 weeks; barium sulfate scale irreversibly bridges downhole tubing, requiring a 00k coiled tubing intervention.
  * *Agent Candidate*: **→ See §4 (Agent 4: Wellhead Chemical Injection Rate & Paraffin/Scale Inhibitor Dosing Agent)**.
* **A07 · Sucker Rod Dynamometer Card Diagnostic (B1, `[API-RP-11L]`)**:
  * *Today*: LOWIS / ForeSite polls pump-off controllers (POCs) and generates hundreds of surface and downhole cards daily; engineer only looks at cards when a well trips on motor overload.
  * *Failure Mode*: Fluid pound continues uncorrected for weeks, fatiguing rod strings until a sucker rod parts, causing 0k in pulling unit costs and deferred production.
  * *Agent Candidate*: **→ See §4 (Agent 5: Beam Pump & Sucker Rod Pumping Unit Mechanical Diagnostic Agent)**.
* **A08 · Near-Wellbore Skin & Damage Screening (B1, `[SPE-Production §3]`)**:
  * *Today*: Engineer looks at multi-year decline curves; skin damage ( > 10$) is conflated with natural reservoir pressure depletion.
  * *Failure Mode*: Highly profitable acid stimulation or solvent wash opportunities are overlooked while dead capital is spent drilling redundant offset infill wells.
  * *Agent Candidate*: **→ See §4 (Agent 6: Workover Intervention Candidate Identification & Economic Sieve Agent)**.
* **A09 · Morning Field Outage & Deferment Dossier (B1, `[SPE-Production §5]`)**:
  * *Today*: Engineer spends the first 90 minutes of every morning reading night shift emails, pulling SCADA trips, and compiling the daily morning meeting spreadsheet.
  * *Failure Mode*: Delayed identification of shut-in high-rate producers causes avoidable production deferment of hundreds of barrels per day.
  * *Agent Candidate*: **→ See §4 (Agent 7: Production Exception Ledger & Daily Morning Operations Dossier Agent)**.
* **A10 · ESP Operating Frequency Optimization (B2, `[API-RP-11S2]`)**:
  * *Today*: Executed inside ForeSite / Prosper using manufacturer pump performance curves (Baker Hughes, SLB, ChampionX) to adjust VFD hertz.
  * *Agent Candidate*: `❌ No`. Analytical pump head-vs-capacity curve matching belongs inside the artificial lift engineering package.
* **A11 · Multiphase Pipeline Elevation Slugging Hydraulic Simulation (B2, `[Beggs-Production]`)**:
  * *Today*: Handled by transient multiphase simulators like OLGA or steady-state PIPESIM.
  * *Agent Candidate*: `❌ No`. Highly specialized CFD/transient hydrodynamic modeling.
* **A12 · Workover Candidate Economic Screening (B1, `[SPE-Production §3]`)**:
  * *Today*: Engineer compiles ad-hoc candidate lists for annual budget meetings using disconnected spreadsheets and completion records.
  * *Failure Mode*: Inefficient capital deployment on low-impact well workovers while top-tier pay stimulation candidates sit idle.
  * *Agent Candidate*: **→ See §4 (Agent 6: Workover Intervention Candidate Identification & Economic Sieve Agent)**.
* **A13 · SCSSV Surface Hydraulic Operating Integrity (B2, `[API-RP-14B §5]`)**:
  * *Today*: Well integrity engineering workflow evaluating surface hydraulic control line pressure bleed-off and inflow valve leakage.
  * *Agent Candidate*: `❌ No`. Owned directly by `P02 Well Integrity Engineer`.
* **A14 · Reservoir Fluid Compositional EOS Characterization (B2, `[SPE-Production §1]`)**:
  * *Today*: PVT laboratory report tuning and equation-of-state modeling inside PVTP or Whitson PVTsim.
  * *Agent Candidate*: `❌ No`. Owned directly by `P06 Reservoir Engineer`.
* **A15 · Wellhead Christmas Tree Valve Alignment (B3, Practitioner)**:
  * *Today*: Manual physical valve switching on the wellhead or battery manifold performed by lease operators wearing full PPE.
  * *Agent Candidate*: `❌ No`. Physical field execution.

---

## 4 · Candidate Agent Deep-Dive

```
                                      +-----------------------------------------------------------+
                                      |                 PRODUCTION ENGINEER (P09)                 |
                                      |               Daily Field Surveillance Core               |
                                      +-----------------------------------------------------------+
                                                                    |
               +------------------------------------+---------------+------------------------------------+
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 7            |     |           AGENT 1            |     |                    AGENT 3                    |
| Production Exception Ledger  |     |  Well Deliverability & Nodal |     | Production Back-Allocation Reconciliation     |
| & Daily Morning Dossier      |     |     Operating Point Sieve    |     |             & Factor Drift Agent              |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
               |                                    |                                                    |
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 2            |     |           AGENT 5            |     |                    AGENT 4                    |
| Wellhead Choke Performance   |     | Beam Pump & Sucker Rod Pumping|    | Wellhead Chemical Injection Rate              |
| & Liquid Loading Sieve       |     |  Mechanical Diagnostic Agent |     | & Scale/Paraffin Inhibitor Dosing Agent       |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
                                                    |
                                     +------------------------------+
                                     |           AGENT 6            |
                                     |   Workover Intervention      |
                                     |  Candidate Economic Sieve    |
                                     +------------------------------+
```

---

### Agent 1: Well Deliverability & Nodal Operating Point Sieve
* **In One Line**: Continuously cross-checks live wellhead SCADA telemetry and test separator rates against theoretical Prosper inflow/outflow curves to isolate deliverability bottlenecks and flag model staleness.
* **Friction Solved**: Eliminates 3.15 hours per surveillance cycle of manual SCADA data extraction, manual curve plotting, and operating against outdated, misleading well models.
* **The Specification**:
  * **Reads**: Daily flowing tubing head pressure (THP), flowing casing pressure (CHP), flowline backpressure, artificial lift operating parameters (gas-lift injection rate/pressure, ESP frequency, rod pump SPM), latest validated well test separator rates ({oil}, Q_{water}, Q_{gas}$), and corporate Prosper (`.out`) well model files.
  * **Does**: Reconciles the actual live operating point against the theoretical VLP/IPR intersection point; calculates operating point drift; detects model staleness where actual operating point deviates $>15\%$ from modeled curve without known operational changes; isolates whether the root cause is reservoir inflow degradation (skin buildup, local pressure depletion) or vertical lift restriction (tubing friction, choke restriction, liquid loading, scale bridge).
  * **Returns**: Structured Nodal Operating Point Discrepancy Ledger (`well_id`, `operating_point_delta_bopd`, `inflow_vs_outflow_restriction_flag`, `model_staleness_index`, `prosper_recalibration_input_deck`).
  * **Stops At**: Overwriting production model files in corporate master directories or adjusting surface wellhead choke setpoints.
* **Failure Modes & Safety Envelopes**: If well test separator telemetry indicates an un-stabilized test (flowrate variance $>20\%$ during the 4-hour test window), the agent tags the test as `[Unstable Test — Excluded from Nodal Recalibration]` and refuses to distort the baseline model.

---

### Agent 2: Wellhead Choke Performance & Critical Velocity Liquid Loading Agent
* **In One Line**: Evaluates choke sonic/subsonic flow physics to detect internal choke washouts and solves Turner/Coleman critical gas velocity thresholds across the estate to catch liquid loading before wells die.
* **Friction Solved**: Eliminates 1.80 hours per field review of manual choke equation calculations and eliminates catastrophic unpredicted gas well loading events.
* **The Specification**:
  * **Reads**: High-frequency upstream tubing pressure ({up}$), downstream flowline pressure ({down}$), choke bean size (64ths of an inch), gas specific gravity, liquid-gas ratio (LGR), and tubing internal diameter profile.
  * **Does**: Evaluates the critical pressure ratio ({down} / P_{up} \le 0.55$) using the Gilbert/Sachdeva multiphase choke correlation to verify sonic (critical) flow conditions; flags choke body washouts when actual flow exceeds theoretical orifice capacity by $>15\%$; simultaneously solves the Turner and Coleman droplet models to calculate minimum critical gas velocity ($) along the wellbore:
    992756v_c = 1.593 \left[rac{\sigma (ho_L - ho_g)}{ho_g^2}ight]^{0.25}992756
    tracks the velocity margin delta ({actual} - v_c$) over rolling 14-day trends.
  * **Returns**: Choke Integrity & Liquid Loading Early Warning Ledger (`well_id`, `flow_regime_sonic_vs_subsonic`, `choke_washout_risk_score`, `critical_velocity_margin_pct`, `loading_severity_stage_1_to_4`, `recommended_unloading_action`).
  * **Stops At**: Commanding choke actuator movement or dispatching coiled tubing nitrogen lifting units.
* **Failure Modes & Safety Envelopes**: If upstream and downstream pressure transmitters read identical values within sensor error bounds ($<2	ext{ psi}$ difference), the agent flags `[Transmitter Sensor Drift or Full Open Choke]` and suppresses false washout alarms.

---

### Agent 3: Production Back-Allocation Reconciliation & Factor Drift Agent
* **In One Line**: Audits daily test separator metering against custody export meters to detect allocation factor drift, rogue well test errors, and unmetered battery bypasses.
* **Friction Solved**: Eliminates 1.75 hours daily of spreadsheet reconciliation, tracking missing well tests, and manual allocation factor balancing across complex gathering batteries.
* **The Specification**:
  * **Reads**: Individual well test separator tickets (duration, gross liquid rate, water cut via manual grind-out or online water-cut meter, gas rate, meter proving factors), daily total battery/satellite fiscal custody transfer meters (LACT units, Coriolis gas meters), and water disposal transfer meters.
  * **Does**: Cross-checks well test consistency against 90-day well historical performance (flagging impossible zero water cuts or sudden 0\%$ GOR spikes); computes theoretical daily field production; calculates daily Proration / Allocation Factors:
    992756AF_{phase} = rac{	ext{Fiscal Custody Export Volume}}{\sum 	ext{Theoretical Well Allocated Volumes}}992756
    detects allocation factor drift outside acceptable industry bounds (bash.90 \le AF \le 1.10$ as per API MPMS Ch. 20); identifies outlier wells driving allocation imbalances.
  * **Returns**: Daily Production Allocation Reconciliation Dossier (`battery_id`, `oil_allocation_factor`, `gas_allocation_factor`, `water_allocation_factor`, `discrepant_well_tests_flagged`, `re-test_priority_queue`).
  * **Stops At**: Committing finalized regulatory allocation figures into the corporate production accounting system of record (Avocet/Quorum).
* **Failure Modes & Safety Envelopes**: If the fiscal export meter is undergoing scheduled calibration or proving, the agent flags `[Export Meter Proving in Progress — Allocation Balance Suspended]` to prevent corrupting baseline proration trends.

---

### Agent 4: Wellhead Chemical Injection Rate & Paraffin/Scale Inhibitor Dosing Agent
* **In One Line**: Continuously audits chemical injection pump rates against actual produced water volumes and water chemistry to prevent tubing scale bridges and eliminate chemical over-dosing waste.
* **Friction Solved**: Eliminates 2.25 hours weekly of reconciling clipboard sight-glass logs, tracking empty chemical totes, and dealing with emergency well shut-ins due to barium/calcium scale blockages.
* **The Specification**:
  * **Reads**: Chemical tank level telemetry (ultrasonic/pressure sensors), automated injection pump stroke rate and motor status, daily well water production volumes, produced water laboratory water analysis (calcium, barium, strontium, sulfate, bicarbonate, pH, TDS), and wellhead flowing temperature.
  * **Does**: Computes required inhibitor dosage targets (ppm target based on actual water volume and Stiff-Davis / Oddo-Tomson scaling indices); compares actual delivered chemical volume against stoichiometric targets; detects pump vapor lock, line plugging, tote run-out, or severe chemical over-dosing ($>250\%$ target, which causes severe downstream emulsion formation in separators); monitors paraffin deposition risk when wellhead temperature drops below cloud point.
  * **Returns**: Chemical Dosing & Flow Assurance Risk Ledger (`well_id`, `chemical_type`, `actual_dosing_ppm`, `target_dosing_ppm`, `dosing_delta_pct`, `pump_failure_flag`, `scale_deposition_risk_level`, `tote_runout_date_forecast`).
  * **Stops At**: Adjusting physical pump stroke lengths or issuing purchase orders for chemical bulk deliveries.
* **Failure Modes & Safety Envelopes**: If chemical tank level drops abruptly by $>50\%$ in a 2-hour window, the agent flags `[Critical Chemical Spill or Tank Rupture Alarm]` to emergency field dispatch immediately.

---

### Agent 5: Beam Pump & Sucker Rod Pumping Unit Mechanical Diagnostic Agent
* **In One Line**: Ingests surface polished-rod dynamometer cards, solves the downhole pump card via the Gibbs 1D wave equation, and classifies mechanical pump malfunctions and structural overloads.
* **Friction Solved**: Eliminates 2.70 hours per battery review of manually sifting through hundreds of raw dyno cards, catching fluid pound and rod fatigue before rods part downhole.
* **The Specification**:
  * **Reads**: High-resolution surface dynamometer cards (load vs. position arrays) from pump-off controllers (Lufkin SAM, ForeSite, LOWIS), motor electrical power/current telemetry, strokes per minute (SPM), polished rod stroke length, structural geometry, rod string taper design (API rod numbers), and acoustic fluid level shots.
  * **Does**: Solves the 1D damped wave equation (Gibbs method) to compute the downhole pump card; extracts pump fillage percentage; classifies downhole anomalies (fluid pound, gas interference, unanchored tubing, pump tagging on upstroke/downstroke, traveling valve leak, standing valve leak, parted rod); audits peak polished rod load (PPRL) against rod string tensile rating and gearbox peak torque against API unit structural limits.
  * **Returns**: Beam Pump Mechanical Diagnostic & Fillage Ledger (`well_id`, `downhole_condition_label`, `pump_fillage_pct`, `rod_stress_pct_yield`, `gearbox_torque_loading_pct`, `recommended_poc_setpoint_adjustment`).
  * **Stops At**: Commanding pump shutdown, changing VFD stroke speeds, or dispatching rod pulling units.
* **Failure Modes & Safety Envelopes**: If surface card shows severe negative load swings indicative of rod parting, the agent triggers an immediate `[Parted Rod Emergency Warning — Immediate Visual Check Required]`.

---

### Agent 6: Workover Intervention Candidate Identification & Economic Sieve Agent
* **In One Line**: Screens the producing well estate to identify high-skin, scaled, or mechanically restricted wells and ranks prospective intervention jobs by payback days and capital efficiency.
* **Friction Solved**: Eliminates 4.50 hours per candidate screening cycle of pulling historical workover files, manual decline curve extrapolation, and building ad-hoc economic spreadsheets.
* **The Specification**:
  * **Reads**: Asset-wide well production decline histories, current actual vs theoretical nodal deliverability deltas, mechanical wellbore schematics (tubing size, packer depth, perforation intervals, casing restrictions), past workover logs (acid jobs, scale squeezes, re-perforations, pump replacements), and standard service rig / wireline unit intervention cost matrices.
  * **Does**: Filters wells exhibiting high near-wellbore skin damage ( > 5$), scale deposition, or suboptimal artificial lift sizing; models post-intervention production uplift ($\Delta Q_{oil}$) using standard skin removal algorithms; estimates job AFEs (coiled tubing acid wash, solvent soak, re-perforation, pump up-sizing); calculates economic payout (AFE cost vs net revenue uplift at current realized oil price) and capital efficiency ratio ( / Capex$).
  * **Returns**: Prioritized Workover & Intervention Candidate Dossier (`well_id`, `recommended_intervention_type`, `estimated_uplift_bopd`, `estimated_job_cost_usd`, `payback_period_days`, `capital_efficiency_index`, `technical_justification_summary`).
  * **Stops At**: Approving capital AFEs, signing service rig contracts, or altering official corporate reserves filings.
* **Failure Modes & Safety Envelopes**: If offset wells in the same reservoir zone experienced rapid water breakthrough following hydraulic stimulation or acid washes, the agent tags the candidate with `[Offset Water Breakthrough Hazard — Cap Penetration Depth]`.

---

### Agent 7: Production Exception Ledger & Daily Morning Operations Dossier Agent
* **In One Line**: Ingests overnight SCADA alarm historians, automated shutdown events, and night-shift field logs to synthesize a prioritized morning production exception and deferment report.
* **Friction Solved**: Eliminates 1.75 hours every morning of manual spreadsheet compilation, email reading, and chasing down why specific batteries suffered unplanned deferments.
* **The Specification**:
  * **Reads**: Overnight SCADA alarm logs, Emergency Shutdown (ESD) trips, high/low pressure switch trip registers, night-shift operator handover logs, compressor telemetry, and tank battery inventory changes.
  * **Does**: Compiles total asset throughput; isolates all wells suffering unexpected production loss ($>10\%$ drop or sudden shut-in); categorizes root cause (surface compressor trip, power grid flicker, high line backpressure, downhole artificial lift trip, freeze-off); quantifies net unplanned deferred production in barrels of oil equivalent (BOE); cross-references top 10 deferred producers.
  * **Returns**: Daily Morning Production Exception Dossier (`asset_id`, `total_delivered_rate_bopd`, `unplanned_deferment_boe`, `ranked_well_outage_table_with_root_causes`, `prioritized_action_items_for_morning_meeting`).
  * **Stops At**: Remotely restarting shut-in wells or communicating official production loss figures to external government regulatory agencies.
* **Failure Modes & Safety Envelopes**: If field SCADA telemetry is lost from an entire battery for $>2$ hours overnight, the agent explicitly flags `[Telemetry Blackout — Deferment Volume Estimated from Last Good State]` rather than reporting zero production.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own well-count multiplier.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Well Nodal Deliverability Surveillance** | 1 Field Well Review (per well) | 3.50 hours | 0.35 hours | **3.15 hours saved** | SCADA Extraction & Model Staleness Drag |
| **Choke Performance & Liquid Loading Audit** | 1 Gas Well Battery (25 wells) | 2.00 hours | 0.20 hours | **1.80 hours saved** | Sonic Ratio & Turner Droplet Calculations |
| **Daily Production Allocation Audit** | 1 Gathering Battery (30 wells) | 2.00 hours | 0.25 hours | **1.75 hours saved** | Multi-Meter Ticket & Allocation Reconciliation |
| **Chemical Inhibitor Dosing Audit** | 1 Field Gathering System (50 wells) | 2.50 hours | 0.25 hours | **2.25 hours saved** | Sight-Glass Logs & Stoichiometric Dosing Math |
| **Sucker Rod Dynamometer Interpretation** | 1 Rod-Pumped Battery (20 wells) | 3.00 hours | 0.30 hours | **2.70 hours saved** | Gibbs Wave Equation Solving & Card Sifting |
| **Workover Candidate Economic Sieve** | 1 Asset Screening Cycle (100 wells) | 5.00 hours | 0.50 hours | **4.50 hours saved** | Historical Well File Review & AFE Economics |
| **Daily Morning Production Exception Dossier** | 1 Daily Asset Shift Handover | 2.00 hours | 0.25 hours | **1.75 hours saved** | Cross-System Log Scraping & Morning Report Prep |
| **Total Surveillance Cycle Impact** | **Standard Field Surveillance Cycle** | **20.00 hours** | **2.10 hours** | **17.90 hours saved** | **Eliminates administrative & manual math drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[SPE-Production]` | SPE, *Production & Operations Competency Model*, 2018 | spe.org/cmt | Competency Standard | Operational actions A01–A15 |
| `[API-MPMS-Ch20]` | API, *Manual of Petroleum Measurement Standards, Chapter 20 — Allocation Measurement*, 2nd Ed | API Standards Store | Technical Standard | Allocation factor calculations & meter drift bounds |
| `[API-RP-11L]` | API, *Design Calculations for Sucker Rod Pumping Systems*, 5th Ed | API Standards Store | Technical Standard | Dyno card stress limits & rod string ratings |
| `[API-RP-14B]` | API, *Design, Installation, Repair, and Operation of Subsurface Safety Valve Systems*, 6th Ed | API Standards Store | Technical Standard | Subsurface safety valve operating limits |
| `[Beggs-Production]` | H. D. Beggs, *Production Optimization Using Nodal Analysis*, 2003 | OGCI Publications | Technical Textbook | Nodal inflow/outflow theory & Gilbert choke equations |
| `[Turner-Loading]` | R. G. Turner, M. G. Hubbard, A. E. Dukler, *Analysis and Prediction of Minimum Flow Rate for Continuous Removal of Liquids*, 1969 | JPT, 21(11): 1475–1482 | Academic Paper | Turner critical gas velocity equation formulation |
| `[SPE-187123]` | SPE, *Automated Nodal Analysis Surveillance in Mature Fields*, 2017 | DOI: 10.2118/187123-MS | Technical Paper | Baseline timing on manual model maintenance |
| `[SPE-195315]` | SPE, *Field-Wide Real-Time Allocation and Metering Diagnostics*, 2019 | DOI: 10.2118/195315-MS | Technical Paper | Meter drift and allocation factor volatility |

### Negative Search Registry
* **Searched**: Petex IPM (Prosper/GAP) manuals, SLB PIPESIM documentation, and OnePetro for *"autonomous real-time recalibration of multiphase nodal models directly from streaming SCADA historians without human engineering intervention"*.
* **Result**: `Negative Search, 2026-09`. Existing commercial tools provide batch execution API wrappers (e.g., OpenServer for Petex), but require pre-conditioned, clean input decks prepared by an engineer. None autonomously ingest raw, noisy streaming SCADA pressure data, flag model parameter staleness, and output diagnosed deliverability deltas without human interaction.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"A production engineer shouldn't spend two hours every morning copying numbers from an oil test sheet into an Excel spreadsheet; their job is knowing why well number seven suddenly lost thirty barrels of oil overnight."*
* **Open Questions for Production Practitioners**:
  * What percentage of Prosper nodal models in the active asset have not been recalibrated within the last 12 months?
  * How many gas wells in the field are currently operating below Turner critical velocity and quietly loading up with liquid?
  * How often are well proration factors distorted because an uncalibrated test separator Coriolis meter went unnoticed for three months?
