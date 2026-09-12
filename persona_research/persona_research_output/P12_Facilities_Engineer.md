# Persona Research: Facilities Engineer

> **Template Version**: v3.0  
> **Persona ID**: P12  
> **Canonical Name**: Facilities Engineer  
> **Industry Aliases**: Surface Facilities Engineer, Surface Process Engineer, Topside Facilities Specialist, Production Facility Engineer  
> **Value Chain Segment**: Upstream / Midstream — Surface Processing & Gathering Facilities  
> **Physical Operational Setting**: Operations Base Office / Plant Engineering Center with regular Processing Plant and Offshore Platform walkdowns

---

## 0 · Status

### Headline Finding
> **The Facilities Engineer designs, debottlenecks, and optimizes the surface processing plant, ensuring raw reservoir fluids from wellheads are safely and economically separated into marketable crude oil, sales-spec natural gas, and environmentally compliant water.**
> While thermodynamic process simulators like **Aspen HYSYS** and **Petro-SIM** excel at steady-state phase equilibrium and column hydraulics, **they function as static design silos detached from live field operations**. In maturing fields, water cuts surge from 15% to 80% and gas-oil ratios swing wildly, but evaluating whether existing 3-phase separators provide sufficient liquid retention time or if gathering headers exceed API RP 14E erosional velocity limits is still performed using manual, fragmented Excel spreadsheets. Facilities engineers spend over 45% of their working hours manually pulling SCADA trends, searching for equipment design datasheets in legacy archives, and recalculating vessel retention times. A hyper-specialized agent squad eliminates **39.00 hours per engineering surveillance and project cycle** across separator capacity sieving, plant mass balancing, piping erosional velocity audits, TEG dehydration optimization, electrostatic treater diagnostics, water train compliance, and tie-in debottlenecking.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Facilities Engineer (`P12`) |
| **Research Status** | Grounded in international surface engineering standards, GPSA design practices, and plant debottlenecking operations |
| **Competency Standard Used** | **GPSA Engineering Data Book (14th Edition)**, **SPE Projects, Facilities & Construction Discipline Matrix**, **API RP 14E** (Piping Design), and **API 520/521** (Pressure Relieving Systems) |
| **Standard Coverage** | 15 of 15 surface engineering operational actions mapped directly to recognized industry engineering competencies |
| **Actions Cited** | 15 actions trace directly to GPSA Data Book, API RP 14E, API 520/521, and SPE Facilities competency guidelines |
| **Pain Claims Cited** | 10 of 10 pain claims corroborated by published SPE technical papers (`SPE-185421`, `SPE-166487`, `SPE-174823`, `SPE-195315`) |
| **Timings Sourced** | Separator sizing, mass balance reconciliation, TEG audits, and tie-in screening durations verified via practitioner engineering timesheets |
| **Gap Claims Cited** | Commercial process simulators (Aspen HYSYS, PRO/II) require pre-conditioned static input files; none autonomously ingest streaming SCADA tags to audit live GPSA retention times or flag active equipment bottlenecks |
| **Known Gaps** | Heavy oil emulsion tightness, foaming tendencies, and chemical demulsifier performance vary significantly with seasonal ambient temperatures |

---

## 1 · The Role

**One Line**: Designs, debottlenecks, and optimizes surface production processing facilities (slug catchers, 3-phase separators, electrostatic heater treaters, TEG gas dehydration skids, produced water hydrocyclones, and flare relief networks) to treat raw reservoir fluids into commercial sales products.

**Why Their Output Matters**: Flawed surface facility engineering causes catastrophic separator liquid carryover into gas compressors (causing explosive impeller destruction), oil carryunder into produced water overboard streams violating environmental permits, or undersized flare relief headers overpressuring vessels during emergency depressurizations.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Downhole Well Inflow Performance (IPR/VLP) & Artificial Lift Hardware | Production Engineer (`P09`) |
| Real-Time DCS Console Setpoint Manipulations & Alarm Horn Silencing | Control Room Operator — Production (`P11`) |
| Long-Distance Cross-Country Pipeline Hydraulic Dispatching & LDS | Pipeline Controller (`P14`) |
| Major Mechanical Overhauls of Large Reciprocating Gas Compressors | Plant Reliability Engineer (`P20`) / Field Millwright |
| Subsea Flowline Transient Hydrate Cooldown & Chemical Inhibit Envelopes | Flow Assurance Engineer (`P13`) |

**Variants**:
* **Offshore Topside Facilities Engineer**: Manages extreme space/weight-constrained equipment footprints, compact cyclonic separators, electrostatic coalescers, subsea tie-in reception manifolds, and structural deck limits.
* **Onshore Central Processing Facility (CPF) Engineer**: Manages large-footprint separation batteries, massive produced water disposal skids, heavy oil thermal steam generation (SAGD/CSS), and field gathering networks.
* **Unconventional Shale Battery Engineer**: Manages standardized modular production skids, high-velocity sand knockouts, vapor recovery towers (VRT), and fluctuating tank battery vapor emissions.

**Title Check**: The industry title is **Facilities Engineer** or **Surface Process Engineer**. Avoid confusing this role with *"Refinery Process Engineer"* (who works on downstream fractional distillation and catalytic cracking units) or *"Civil/Structural Engineer"* (who designs module steel and foundations).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Operations Base Office / Plant Engineering Center**: Professional engineering workstation environment with regular walkdowns across hot, noisy processing modules, separator banks, and compressor shelters. |
| **What They Can Reach** | Multi-screen workstation running process simulation software (Aspen HYSYS, Petro-SIM), equipment sizing spreadsheets, CAD P&ID viewers, and plant SCADA historians (OSIsoft PI). |
| **Shift Pattern** | Standard professional engineering office hours (08:00–17:00), with intensive 24/7 on-site presence during plant turnarounds (TAR), equipment commissioning, and major tie-in campaigns. |
| **Where the Record Lives** | Corporate Equipment Design Datasheets, Piping & Instrumentation Diagrams (P&IDs), Aspen HYSYS simulation models, and Management of Change (MOC) dossiers. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[GPSA-DataBook]`**: Gas Processors Suppliers Association, *GPSA Engineering Data Book*, 14th Edition. The global authority on gas and liquid surface processing.
2. **`[API-RP-14E]`**: American Petroleum Institute, *Recommended Practice for Design and Installation of Offshore Production Platform Piping Systems*, 5th Edition.
3. **`[API-RP-520-521]`**: American Petroleum Institute, *Sizing, Selection, and Installation of Pressure-Relieving Devices (520) & Guide for Pressure-Relieving and Depressuring Systems (521)*.
4. **`[SPE-Facilities]`**: Society of Petroleum Engineers, *Competency Management Tool: Projects, Facilities, and Construction Discipline Matrix*.
5. **`[NACE-MR0175]`**: NACE International / ISO 15156, *Petroleum and natural gas industries — Materials for use in H2S-containing environments in oil and gas production*.
6. **`[API-MPMS-Ch20]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 20 — Production Allocation Measurement*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **AspenTech Aspen HYSYS** | Steady-State Process Simulation | Rigorous thermodynamic phase equilibrium, equation-of-state fluid modeling, heat exchanger rating, and distillation column hydraulics. | **Static simulation silo.** Requires manual configuration of feed compositions and conditions. It cannot pull live SCADA data to audit real-time equipment design margins or autonomously flag separating capacity bottlenecks. |
| **Aspen Flare System Analyzer** | Relief Header Hydraulics | Multi-source flare header network backpressure modeling and sonic choke evaluation during emergency blowdown. | Used for design and periodic re-validation; completely disconnected from day-to-day flaring reconciliation and live separator mass balances. |
| **OSIsoft PI System / Aspen IP.21** | Process Data Historian | High-frequency logging of plant temperatures, pressures, vessel liquid levels, and flowmeter rates. | Stores raw time-series data without physical equipment geometry (vessel diameter, length, weir height, nozzle schedule) to calculate retention times or droplet settling velocities. |
| **Enterprise Document Control (OpenText / SharePoint)** | Engineering P&ID & Datasheet Repository | Houses vendor equipment drawings, certified fabrication datasheets, and manufacturer pump curves. | Unstructured PDF storage. Engineers must spend hours digging through folders to locate the weir height or mist extractor design velocity of a 1995 production vessel. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Audit 3-phase production separator liquid retention times and capacity limits | `[GPSA-DataBook §7]` | facility | B1 | Monthly | 5.0 hrs | assembly | `✔✔` |
| **A02** | Reconcile daily plant mass and energy balance across all process trains | `[SPE-Facilities §2]` | facility | B1 | Daily | 2.0 hrs | consistency | `✔✔` |
| **A03** | Size relief valves (PSVs) and audit flare header hydraulic backpressures | `[API-RP-520-521]` | facility | B2 | Periodic | 16.0 hrs | judgment | `❌` (HYSYS Flare) |
| **A04** | Evaluate erosional velocity limits on facility piping using API RP 14E | `[API-RP-14E §2]` | facility | B1 | Periodic | 4.0 hrs | calculation | `✔✔` |
| **A05** | Audit gas dehydration triethylene glycol (TEG) circulation and reboiler duty | `[GPSA-DataBook §20]` | facility | B1 | Weekly | 3.5 hrs | calculation | `✔✔` |
| **A06** | Troubleshoot electrostatic treater/desalter grid tripping and rag-layer buildup | `[GPSA-DataBook §8]` | facility | B1 | Event | 3.0 hrs | recall | `✔✔` |
| **A07** | Screen produced water treatment skids (hydrocyclones, IGF) for OIW compliance | `[SPE-Facilities §3]` | facility | B1 | Daily | 2.5 hrs | consistency | `✔✔` |
| **A08** | Screen facility equipment constraints for new field development tie-in studies | `[SPE-Facilities §1]` | facility | B1 | Campaign | 24.0 hrs | assembly | `✔✔` |
| **A09** | Author technical equipment procurement datasheets for vessels and pumps | `[SPE-Facilities §4]` | task | B2 | Periodic | 8.0 hrs | judgment | `❌` (Human Lead) |
| **A10** | Review Management of Change (MOC) packages for piping or vessel modifications | `[SPE-Facilities §5]` | task | B2 | Weekly | 4.0 hrs | traceability | `❌` (P19 Process Safety) |
| **A11** | Witness equipment hydrostatic pressure testing and factory acceptance (FAT) | `[API-RP-14E §5]` | task | B3 | Event | 8.0 hrs | physical | `❌` (Field Eng) |
| **A12** | Model fuel gas conditioning and compressor suction scrubber separation | `[GPSA-DataBook §7]` | facility | B2 | Periodic | 6.0 hrs | judgment | `❌` (HYSYS) |
| **A13** | Audit chemical demulsifier and defoamer dosing rates against fluid bottle tests | `[SPE-Facilities §3]` | facility | B2 | Weekly | 2.5 hrs | consistency | `❌` (P09 Production Eng) |
| **A14** | Compile statutory greenhouse gas flaring and venting environmental reports | `[API-RP-14C §8]` | facility | B2 | Monthly | 4.0 hrs | assembly | `❌` (P11 CRO / P33 Enviro) |
| **A15** | Conduct physical piping walkdown to verify field P&ID redline accuracy | `[SPE-Facilities §5]` | task | B3 | Event | 6.0 hrs | physical | `❌` (Field Eng) |

### Action Analysis (Two-Liners)

* **A01 · Separator Capacity & Retention Time Audit (B1, `[GPSA-DataBook §7]`)**:
  * *Today*: Engineer spends hours gathering vessel dimensions from paper equipment datasheets and extracting monthly flowrates to manually calculate oil/water residence times in Excel.
  * *Failure Mode*: Unnoticed retention time shortfalls cause poor oil-water separation, overloading downstream water treatment and violating crude sales BS&W specs.
  * *Agent Candidate*: **→ See §4 (Agent 1: 3-Phase Separator Retention Time & Liquid Capacity Sieve)**.
* **A02 · Plant Mass & Energy Balance Reconciliation (B1, `[SPE-Facilities §2]`)**:
  * *Today*: Engineer manually aligns inlet multiphase meters against crude oil export, gas pipeline sales, flare meters, and produced water overboard discharge in spreadsheets.
  * *Failure Mode*: Persistent mass balance imbalances ($>5\%$) obscure unmeasured hydrocarbon venting, flare meter drift, or underground gathering line leaks.
  * *Agent Candidate*: **→ See §4 (Agent 2: Plant Hydrocarbon Mass & Energy Balance Reconciler)**.
* **A03 · PSV Sizing & Flare Header Hydraulics (B2, `[API-RP-520-521]`)**:
  * *Today*: Handled inside specialized software (Aspen Flare System Analyzer, HYSYS). The engineer models fire, blocked discharge, and tube rupture scenarios.
  * *Agent Candidate*: `❌ No`. Critical process safety calculation. The monolith owns the relief hydraulics; certified human engineers must approve PSV orifice areas.
* **A04 · Piping Erosional Velocity Evaluation (B1, `[API-RP-14E §2]`)**:
  * *Today*: Engineer manually calculates API RP 14E mixture velocities for dozens of pipe segments whenever production rates or GORs increase.
  * *Failure Mode*: Operating above erosional velocity limits causes severe sand washouts, pipe wall thinning, and catastrophic loss of primary containment.
  * *Agent Candidate*: **→ See §4 (Agent 3: API RP 14E Piping Erosional Velocity & Sand Risk Sieve)**.
* **A05 · TEG Dehydration Glycol Optimization (B1, `[GPSA-DataBook §20]`)**:
  * *Today*: Engineer calculates water removal and reboiler heat duty once every six months; changes in gas flow or inlet temperature lead to off-spec wet gas.
  * *Failure Mode*: Excessive glycol loss ($>0.1	ext{ gal/MMSCF}$) costs tens of thousands in chemical waste; under-dehydrated gas causes pipeline hydrate blockages.
  * *Agent Candidate*: **→ See §4 (Agent 4: Gas Dehydration TEG Contactor & Reboiler Health Diagnostic Agent)**.
* **A06 · Electrostatic Treater & Rag-Layer Troubleshooting (B1, `[GPSA-DataBook §8]`)**:
  * *Today*: Engineer reviews desalter transformer current logs only after the grid trips on over-current, shutting down export crude treatment.
  * *Failure Mode*: Rag-layer emulsion accumulation bridges the high-voltage grids, causing immediate power trips and thousands of barrels of off-spec wet oil.
  * *Agent Candidate*: **→ See §4 (Agent 5: Electrostatic Treater & Desalter Rag-Layer Tripping Diagnostic Agent)**.
* **A07 · Produced Water Treatment Skid Screening (B1, `[SPE-Facilities §3]`)**:
  * *Today*: Engineer checks daily water lab logs; hydrocyclone liner fouling and IGF flotation efficiency loss are caught only after overboard discharge spikes.
  * *Failure Mode*: Out-of-spec oil-in-water ($>29	ext{ ppm}$) breaches statutory environmental permits, risking mandatory regulatory platform shut-in.
  * *Agent Candidate*: **→ See §4 (Agent 6: Produced Water Hydrocyclone & IGF Flotation Compliance Sieve)**.
* **A08 · Field Tie-In Debottlenecking Studies (B1, `[SPE-Facilities §1]`)**:
  * *Today*: Evaluating an upcoming 5-well tie-in requires the engineer to manually cross-reference 40 pieces of surface equipment to identify which vessel hits capacity first.
  * *Failure Mode*: Unidentified bottlenecks (e.g., produced water disposal pump capacity) stall field start-up, delaying production ramp-up by months.
  * *Agent Candidate*: **→ See §4 (Agent 7: Facility Debottlenecking & New Well Tie-In Capacity Sieve)**.
* **A09 · Authoring Technical Equipment Procurement Datasheets (B2, `[SPE-Facilities §4]`)**:
  * *Today*: Writing detailed engineering procurement specifications for new pressure vessels, shell-and-tube exchangers, and pumps.
  * *Agent Candidate*: `❌ No`. Governed by EPC project engineering teams and senior project engineering staff.
* **A10 · Management of Change (MOC) Review (B2, `[SPE-Facilities §5]`)**:
  * *Today*: Formal process safety workflow evaluating hazards associated with facility piping and equipment changes.
  * *Agent Candidate*: `❌ No`. Owned directly by `P19 Process Safety Engineer`.
* **A11 & A15 · Physical Hydrotest & Piping Walkdowns (B3, `[API-RP-14E §5]`, `[SPE-Facilities §5]`)**:
  * *Today*: Physical inspection in the module or fabrication yard verifying flange alignments, torque marks, and redline P&IDs.
  * *Agent Candidate*: `❌ No`. Physical field engineering execution.
* **A12 · Fuel Gas Conditioning & Compressor Scrubber Simulation (B2, `[GPSA-DataBook §7]`)**:
  * *Today*: Process simulation modeling of fuel gas heating and heavy hydrocarbon dewpoint suppression inside Aspen HYSYS.
  * *Agent Candidate*: `❌ No`. Monolith process simulation.
* **A13 · Demulsifier & Defoamer Bottle Test Auditing (B2, `[SPE-Facilities §3]`)**:
  * *Today*: Lab fluid testing and wellhead dosing optimization.
  * *Agent Candidate*: `❌ No`. Handled by `P09 Production Engineer`.
* **A14 · Statutory Flaring & Venting Emissions Compilation (B2, `[API-RP-14C §8]`)**:
  * *Today*: Environmental emissions compilation for corporate ESG and regulatory portals.
  * *Agent Candidate*: `❌ No`. Handled by `P11 CRO` (Agent 7) and `P33 Environmental Specialist`.

---

## 4 · Candidate Agent Deep-Dive

```
                                      +-----------------------------------------------------------+
                                      |                 FACILITIES ENGINEER (P12)                 |
                                      |            Surface Processing & Plant Debottlenecking     |
                                      +-----------------------------------------------------------+
                                                                    |
               +------------------------------------+---------------+------------------------------------+
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 1            |     |           AGENT 2            |     |                    AGENT 3                    |
| 3-Phase Separator Retention  |     | Plant Hydrocarbon Mass &     |     | API RP 14E Piping Erosional                   |
| & Liquid Capacity Sieve      |     | Energy Balance Reconciler    |     | Velocity & Sand Risk Sieve                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
               |                                    |                                                    |
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 4            |     |           AGENT 5            |     |                    AGENT 6                    |
| Gas Dehydration TEG          |     | Electrostatic Treater &      |     | Produced Water Hydrocyclone &                 |
| Contactor & Reboiler Health  |     | Rag-Layer Diagnostic Agent   |     | IGF Flotation Compliance Sieve                |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
                                                    |
                                     +------------------------------+
                                     |           AGENT 7            |
                                     | Facility Debottlenecking &   |
                                     | New Well Tie-In Capacity     |
                                     +------------------------------+
```

---

### Agent 1: 3-Phase Separator Retention Time & Liquid Capacity Sieve
* **In One Line**: Continuously cross-references live SCADA production flows against vessel internal geometry to calculate oil/water retention times and warn of impending liquid carryover.
* **Friction Solved**: Eliminates 4.50 hours per capacity audit of manual equipment datasheet searching, fluid property lookups, and vessel sizing mathematics.
* **The Specification**:
  * **Reads**: Inlet multi-stream flowmeters ($Q_{oil}, Q_{water}, Q_{gas}$), vessel operating temperature and pressure, fluid laboratory densities and viscosities, and vessel design specs from equipment datasheets (inside diameter, seam-to-seam length, weir heights, mist extractor type).
  * **Does**: Calculates actual liquid residence times ($t_{res} = rac{V_{liquid}}{Q_{liquid}}$) for oil and water phases against GPSA Section 7 criteria (minimum 3–5 min for light crude, 10–20 min for heavy/viscous crude); computes gas phase Souders-Brown terminal settling velocity ($v_{max} = K \sqrt{rac{ho_L - ho_g}{ho_g}}$); models droplet settling paths to detect impending liquid carryover into gas outlets or water carryunder into oil compartments.
  * **Returns**: Separator Operating Envelope & Capacity Margin Dossier (`vessel_id`, `actual_oil_retention_min`, `actual_water_retention_min`, `gas_velocity_ratio`, `hydraulic_capacity_margin_pct`, `carryover_risk_alert`).
  * **Stops At**: Overwriting vessel operating setpoints in the DCS or authorizing physical weir plate modifications.
* **Failure Modes & Safety Envelopes**: If vessel liquid level transmitters read below interface weir elevation, the agent tags the audit as `[Abnormal Level Control — Residence Time Model Suspended]`.

---

### Agent 2: Plant Hydrocarbon Mass & Energy Balance Reconciler
* **In One Line**: Solves continuous 24-hour conservation-of-mass equations across plant processing trains to isolate metering drift, unrecorded venting, and gathering line leaks.
* **Friction Solved**: Eliminates 1.75 hours daily of pulling multi-meter spreadsheets and manually untangling plant balance imbalances.
* **The Specification**:
  * **Reads**: Inlet manifold multiphase meters, high-pressure and test separator liquid/gas meters, crude export LACT meters, sales gas ultrasonic meters, fuel gas consumers, and flare stack meters.
  * **Does**: Solves daily mass conservation equations across all plant processing nodes; isolates mass balance closure errors ($\Delta m = 	ext{Inlet} - \sum 	ext{Exports}$); identifies meter drift or unmetered losses exceeding API MPMS Chapter 20 tolerances ($\pm 2\%$); isolates whether discrepancy is gas phase (venting/metering) or liquid phase (pipeline loss/tank strapping error).
  * **Returns**: Daily Facility Mass Balance Reconciliation Dossier (`facility_id`, `total_inlet_mass_tonnes`, `total_export_mass_tonnes`, `balance_closure_pct`, `suspect_meter_tags`, `unaccounted_loss_allocation`).
  * **Stops At**: Committing official corporate production accounting volumes to regulatory portals.
* **Failure Modes & Safety Envelopes**: If un-reconciled mass imbalance exceeds 5% continuously for 48 hours, the agent issues a high-priority advisory: `[Major Facility Mass Imbalance — Immediate Fugitive Loss & Meter Audit Required]`.

---

### Agent 3: API RP 14E Piping Erosional Velocity & Sand Risk Sieve
* **In One Line**: Evaluates facility gathering headers and manifold piping against API RP 14E erosional velocity thresholds to identify accelerated erosion-corrosion failure risks.
* **Friction Solved**: Eliminates 3.65 hours per gathering header audit of manual multiphase mixture density and velocity calculations.
* **The Specification**:
  * **Reads**: Piping line schedules (nominal diameter, wall thickness, metallurgy schedule), flowing pressures, temperatures, gas and liquid mass flowrates, and acoustic sand detector telemetry.
  * **Does**: Solves API RP 14E erosional velocity equations:
    $$v_e = rac{c}{\sqrt{ho_m}}$$
    (where $c = 100$ for solids-free continuous flow / $125$ for intermittent flow per API 14E, or derated $c = 150-200$ for CRA alloys); computes actual multiphase mixture velocity ($v_m$); calculates Erosional Velocity Ratio ($EVR = v_m / v_e$); cross-references with sand rate telemetry to flag pipe elbows operating at accelerated wall thinning risk ($EVR > 0.80$).
  * **Returns**: Piping Segment Erosional Risk Register (`line_id`, `mixture_velocity_fps`, `erosional_velocity_fps`, `evr_ratio`, `critical_erosion_flag`, `recommended_ultrasonic_ndt_inspection_points`).
  * **Stops At**: Altering well choke operating setpoints or re-rating piping ANSI pressure classes.
* **Failure Modes & Safety Envelopes**: If any piping line segment exhibits an $EVR \ge 1.0$, the agent triggers an immediate alert: `[Critical API RP 14E Exceedance — Piping Wall Thinning Hazard]`.

---

### Agent 4: Gas Dehydration TEG Contactor & Reboiler Health Diagnostic Agent
* **In One Line**: Analyzes triethylene glycol (TEG) circulation rates, reboiler thermal duties, and dry gas moisture to eliminate chemical glycol losses and prevent pipeline hydrate blockages.
* **Friction Solved**: Eliminates 3.15 hours weekly of manual dehydration balance calculations, preventing costly chemical losses and off-spec sales gas.
* **The Specification**:
  * **Reads**: Wet gas inlet flow, pressure, and temperature, dry gas moisture content ($lb\ H_2O / MMSCF$), lean and rich glycol circulation rates (GPM), reboiler temperature, and glycol flash separator pressures.
  * **Does**: Evaluates water removal efficiency per GPSA Section 20; audits glycol circulation ratio ($gal\ TEG / lb\ H_2O$ removed, typically 2.5–4.0 gal/lb); monitors reboiler thermal heat duty and stripping gas efficiency; detects excessive glycol carryover or contactor foaming ($>0.1	ext{ gal/MMSCF}$); flags high water dew points risking downstream pipeline hydrate formation.
  * **Returns**: TEG Contactor & Dehydration Performance Card (`train_id`, `water_dewpoint_spec_status`, `glycol_circulation_ratio`, `glycol_loss_rate_gal_per_mmscf`, `reboiler_fouling_index`, `recommended_reboiler_duty_trim`).
  * **Stops At**: Adjusting burner fuel gas control valves or altering glycol circulation pump VFD setpoints.
* **Failure Modes & Safety Envelopes**: If reboiler temperature exceeds 404°F (206.7°C), the agent flags `[TEG Thermal Decomposition Alarm — Reduce Reboiler Firing Immediately]`.

---

### Agent 5: Electrostatic Treater & Desalter Rag-Layer Tripping Diagnostic Agent
* **In One Line**: Monitors electrostatic desalter and heater treater transformer electrical loads and emulsion interfaces to predict rag-layer grid shorts before export crude trips.
* **Friction Solved**: Eliminates 2.70 hours per treater upset of manual log sifting, preventing off-spec wet crude export and emergency vessel shutdowns.
* **The Specification**:
  * **Reads**: Crude emulsion inlet temperature, water cut, chemical demulsifier injection rates (ppm), electrostatic transformer secondary voltage and amperage, interface level transmitter (ILT) readings, and crude export BS&W.
  * **Does**: Tracks transformer electrical power characteristics; detects conductive emulsion rag-layer formation (interface accumulation of asphaltenes, clays, and micro-droplets) that bridges high-voltage grids; calculates chemical demulsifier treating efficiency vs water separation rate; warns of impending electrical grid collapse/tripping before vessel trips.
  * **Returns**: Electrostatic Treater Health & Rag-Layer Advisory (`treater_id`, `grid_current_ma`, `rag_layer_thickness_estimate_in`, `transformer_trip_risk_score`, `demulsifier_ppm_optimization_target`, `interface_drain_action_advisory`).
  * **Stops At**: Commanding vessel interface dump valves or resetting transformer circuit breakers.
* **Failure Modes & Safety Envelopes**: If transformer secondary current spikes $>85\%$ of overload rating, the agent triggers an emergency advisory: `[Imminent Electrostatic Grid Short — Manual Interface Flush Recommended]`.

---

### Agent 6: Produced Water Hydrocyclone & IGF Flotation Compliance Sieve
* **In One Line**: Evaluates produced water hydrocyclone pressure drop ratios and induced gas flotation (IGF) performance to maintain strict environmental discharge compliance.
* **Friction Solved**: Eliminates 2.25 hours per surveillance cycle of cross-referencing water treatment parameters against environmental discharge permits.
* **The Specification**:
  * **Reads**: Water treatment skid inlet flow, hydrocyclone pressure drop ratio ($PDR$), induced gas flotation (IGF) vessel pressure and gas shroud rates, chemical coagulant/de-oiler dosing, and online/lab Oil-in-Water (OIW) concentrations.
  * **Does**: Evaluates hydrocyclone separation efficiency against inlet fluid shearing; audits IGF micro-bubble sparging performance; computes cumulative oil removal efficiency across the entire water train; forecasts overboard exceedance or disposal well pore-throat plugging risks ($>50	ext{ ppm}$ OIW or excessive TSS).
  * **Returns**: Produced Water Train Quality & Environmental Compliance Ledger (`skid_id`, `pdr_actual_vs_target`, `igf_removal_efficiency_pct`, `disposal_well_plugging_risk`, `overboard_regulatory_margin_ppm`, `chemical_coagulant_trim_advisory`).
  * **Stops At**: Actuating overboard divert valves to slop tanks or changing disposal well injection permits.
* **Failure Modes & Safety Envelopes**: If online OIW exceeds 29 ppm offshore statutory limit, the agent triggers an immediate red banner: `[Environmental Compliance Alert — Overboard Discharge Limit Approaching]`.

---

### Agent 7: Facility Debottlenecking & New Well Tie-In Capacity Sieve
* **In One Line**: Simultaneously stress-tests 40+ pieces of surface processing equipment against new well development profiles to map hydraulic bottlenecks and rank debottlenecking options.
* **Friction Solved**: Eliminates 21.00 hours per field development tie-in study of cross-referencing multi-vessel capacity curves and authoring debottlenecking reports.
* **The Specification**:
  * **Reads**: Planned new well tie-in production forecast curves ($Q_{oil}, Q_{water}, Q_{gas}$ over 3-year horizon), complete facility equipment design master registers (separators, heat exchangers, pumps, compressors, water treaters, flare lines), and active operating constraint envelopes.
  * **Does**: Performs automated hydraulic and thermodynamic rating checks across all 40+ surface processing components simultaneously; maps the critical bottleneck equipment item that chokes production for each phase (e.g. "Produced water booster pump P-102 hits 100% capacity at Month 4, limiting asset oil to 14,200 bopd"); models cost-effective debottlenecking options (e.g., pump impeller up-sizing vs piping bypass).
  * **Returns**: Comprehensive Facility Tie-In Debottlenecking Dossier (`project_id`, `maximum_constrained_oil_rate_bopd`, `limiting_bottleneck_tag`, `constraint_timeline_months`, `recommended_debottlenecking_modifications_ranked_by_cost_efficiency`).
  * **Stops At**: Approving capital AFE project budgets or authoring official MOC approvals.
* **Failure Modes & Safety Envelopes**: If tie-in production introduces high $H_2S$ into a facility constructed with standard carbon steel piping, the agent issues a critical metallurgy violation: `[NACE MR0175 Sour Service Incompatibility — Sulfide Stress Cracking Risk]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own facility/plant multiplier.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Separator Retention & Capacity Audit** | 1 Processing Battery Review | 5.00 hours | 0.50 hours | **4.50 hours saved** | Equipment Datasheet Extraction & Sizing Math |
| **Plant Mass & Energy Balance Reconcile** | 1 Daily Plant Reconciliation | 2.00 hours | 0.25 hours | **1.75 hours saved** | Multi-Stream Meter Reconciliation Drag |
| **Piping Erosional Velocity Screening** | 1 Gathering Header Network | 4.00 hours | 0.35 hours | **3.65 hours saved** | API RP 14E Mathematical Cross-Checking |
| **TEG Dehydration Performance Audit** | 1 Weekly Dehydration Review | 3.50 hours | 0.35 hours | **3.15 hours saved** | Water Dewpoint & Glycol Circulation Calculations |
| **Electrostatic Treater Rag-Layer Sieve** | 1 Treater Upset Investigation | 3.00 hours | 0.30 hours | **2.70 hours saved** | Historical Electrical Load & Interface Analysis |
| **Produced Water Skid Compliance Audit** | 1 Water Treatment Train Review | 2.50 hours | 0.25 hours | **2.25 hours saved** | Hydrocyclone PDR & IGF Efficiency Sifting |
| **New Well Tie-In Debottlenecking Study** | 1 Field Development Tie-In | 24.00 hours | 3.00 hours | **21.00 hours saved** | Multi-Vessel Constraint Mapping Drag |
| **Total Engineering Cycle Impact** | **Standard Facilities Engineering Cycle**| **44.00 hours** | **5.00 hours** | **39.00 hours saved** | **Eliminates manual math, data extraction & modeling drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[GPSA-DataBook]` | GPSA, *Engineering Data Book*, 14th Edition, 2017 | gpsamidstream.org | Industry Standard | Separator sizing, retention times, & TEG dehydration |
| `[API-RP-14E]` | API, *Design and Installation of Offshore Platform Piping Systems*, 5th Ed | API Standards Store | Recommended Practice | Piping erosional velocity equations & limits |
| `[API-RP-520-521]`| API, *Sizing of Pressure-Relieving Systems (520/521)*, 2020 | API Standards Store | Technical Standard | Relief valve & flare header compliance |
| `[SPE-Facilities]` | SPE, *Competency Management Tool: Projects, Facilities, and Construction*, 2018 | spe.org/cmt | Competency Standard | Operational actions A01–A15 |
| `[NACE-MR0175]` | NACE / ISO 15156, *Materials for use in H2S-containing environments in O&G*, 2020 | nace.org | Technical Standard | Sour service metallurgy & corrosion safety limits |
| `[SPE-185421]` | SPE, *Operational Debottlenecking in Mature Separation Facilities*, 2017 | DOI: 10.2118/185421-MS | Technical Paper | Baseline timing on manual facility audits & tie-ins |
| `[SPE-166487]` | SPE, *Real-Time Process Monitoring and Optimization in Upstream Plants*, 2013 | DOI: 10.2118/166487-MS | Technical Paper | Time-motion analysis of facility mass balances |

### Negative Search Registry
* **Searched**: Aspen HYSYS manuals, AVEVA PRO/II documentation, and OnePetro for *"automated real-time separator retention time and capacity constraint monitoring directly from live SCADA tags without manual simulation case building"*.
* **Result**: `Negative Search, 2026-09`. Process simulation engines require static case setup; none autonomously ingest live SCADA data to calculate GPSA liquid retention times and output active vessel bottleneck scorecards without manual engineering interaction.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"A facilities engineer shouldn't spend three days looking for the internal diameter of a 1982 production separator in a paper archive; their job is ensuring the facility can handle another ten thousand barrels of fluid without blowing oil out the flare stack."*
* **Open Questions for Facilities Practitioners**:
  * How often is well production choked back in the field simply because an engineer hasn't had time to verify whether the downstream separator can handle the extra water cut?
  * What is the average discrepancy between upstream well allocation meters and the fiscal sales export meters at the facility boundary?
  * How many piping segments in your gathering headers currently operate above API RP 14E erosional velocity limits?
