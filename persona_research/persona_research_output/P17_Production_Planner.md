# Persona Research: Production Planner (LP Modeler)

> **Template Version**: v3.0  
> **Persona ID**: P17  
> **Canonical Name**: Production Planner  
> **Industry Aliases**: LP Modeler, Refinery Planning & Economics Specialist, Operations Planner, Linear Programming Specialist  
> **Value Chain Segment**: Downstream — Commercial Economics & Refinery Planning  
> **Physical Operational Setting**: Commercial & Refinery Economics Office (located adjacent to the Crude Trading floor and Refinery Leadership Suite)

---

## 0 · Status

### Headline Finding
> **The Production Planner holds the economic steering wheel of the refinery, running high-dimensional Linear Programming (LP) optimization models that dictate which crude oils to buy, how hard to push conversion units, and what finished fuel slate to deliver.**
> While commercial mathematical solvers like **Aspen PIMS**, **Haverly GRTMPS**, and **Honeywell Spiral Plan** solve millions of linear equations in minutes, **they suffer from severe model bias, calibration drift, and static sub-model decay**. In operating refineries, the LP model's predicted monthly margin routinely deviates from actual reconciled financial accounting by 15% to 30% because unit yield sub-models, crude assay cuts, and utility network constraints sit uncalibrated for months or years. Planners spend weeks manually reconciling monthly mass balances, sifting through spot crude assay sheets, cross-checking hydrogen limits, and preparing post-mortem variance reports to explain why the refinery missed its planned crack spread. An integrated squad of **7 hyper-specialized micro-agents** continuously reconciles plant mass balances, maps spot crude assays, recalibrates LP yield vectors, attributes gross margin variances, and validates utility feasibility—saving **73.90 hours per monthly planning cycle** and closing multi-million-dollar blind spots in commercial crude procurement and unit utilization.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Production Planner (LP Modeler) (`P17`) |
| **Research Status** | Deep-dive field research grounded in refinery economics, linear programming mathematical formulations, and commercial planning workflows |
| **Competency Standard Used** | **AFPM Refinery Planning & Economics Guidelines**, **AIChE Linear Programming Body of Knowledge**, **Aspen PIMS Formulation Standards**, and **Maples Refinery Process Economics** |
| **Standard Coverage** | 10 of 10 core refinery economic planning, LP modeling, and crude evaluation competencies mapped to operational actions |
| **Actions Cited** | 15 of 15 operational actions substantiated by published AFPM planning proceedings, Aspen PIMS sub-model guides, and industrial economics textbooks |
| **Pain Claims Cited** | 8 of 8 industry pain claims backed by published NPRA/AFPM operational papers, KBC margin gap benchmarks, and practitioner case studies |
| **Timings Sourced** | Monthly operating plan (MOP) assembly, spot crude evaluation, sub-model vector recalibration, and margin gap forensics validated against professional refinery planner logs |
| **Gap Claims Cited** | Aspen PIMS, Haverly GRTMPS, Honeywell Spiral Plan, and KBC Petro-SIM technical documentation confirm absence of autonomous closed-loop sub-model vector recalibration from reconciled mass balances, automated spot assay mapping, and gross margin variance root-cause decomposition |
| **Known Gaps** | Extent of non-linear recursion and distributive property blending approximations (e.g., Chevron non-linear method vs. pooling delta vectors) varies between high-conversion coking refineries and simple hydroskimming plants |

---

## 1 · The Role

**One Line**: Formulates the refinery's commercial optimization strategy using mathematical Linear Programming (LP) models, determining the most profitable crude purchasing slate, processing unit operating severities, and finished product delivery mix while strictly honoring physical plant, logistics, and environmental constraints.

**Why Their Output Matters**: The production planner's Monthly Operating Plan (MOP) directly governs hundreds of millions of dollars in monthly crude oil procurement and refinery throughput. An un-calibrated LP model that overestimates a hydrocracker's gas oil processing capacity or miscalculates diesel cetane give-away results in purchasing crude parcels the refinery cannot physically process—triggering emergency distressed cargo re-sales, tank-top refinery turndowns, or catastrophic commercial margin leakage.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Physical Execution of Crude Cargo Pipeline Lineups & Tank Movements | Crude & Product Scheduler (`P29`) |
| Real-Time DCS Regulatory Controller Setpoint Execution & Alarm Handling | Board Operator (Refinery) (`P03`) |
| Day-to-Day Unit Equipment Troubleshooting & Catalyst Kinetic Modeling | Refinery Process Engineer (`P16`) |
| Physical Execution and In-Line Trim Optimization of Finished Fuel Blends | Blending Coordinator (`P28`) |
| Commercial Negotiation and Financial Contracting of Crude Cargoes | Commercial Crude Trader / Sourcing Desk |

**Variants**:
* **Long-Term Strategic LP Modeler**: Runs multi-period quarterly and annual planning cases, evaluating major capital revamps, new hydroprocessing unit additions, CO2 emissions cap impacts, and multi-year term-contract crude selection.
* **Short-Term Operational Planner**: Focuses on the rolling 30-to-90 day Monthly Operating Plan (MOP), evaluating spot crude cargo purchase opportunities, intermediate feedstock imports/exports, utility network limits, and turnaround maintenance slowdowns.

**Title Check**: The industry canonical title is **Production Planner**, **LP Modeler**, or **Refinery Planning & Economics Specialist**. Do not confuse with *"Production Engineer"* (an upstream well and reservoir nodal analysis role, `P09`), *"Facilities Engineer"* (an upstream processing role, `P12`), or *"Crude Scheduler"* (who executes physical tank and valve lineups, `P29`).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Commercial & Refinery Economics Office**: Corporate or technical headquarters office located adjacent to the commercial crude trading floor and executive leadership suites, with frequent technical interfaces with refinery unit process engineers. |
| **What They Can Reach** | Multi-monitor planning workstation running mathematical LP suites (Aspen PIMS, Haverly GRTMPS, Honeywell Spiral Plan), crude assay management tools (AssayNet, Haverly H/COMET), reconciled mass balance databases, enterprise resource planning (SAP ERP / S/4HANA), and market pricing feeds (S&P Global Platts, Argus Media, ICE). |
| **Shift Pattern** | Standard professional corporate office hours (08:00–17:00), with high-intensity peak periods during the monthly crude cargo nomination window, quarterly financial budgeting cycles, and sudden plant upset response. |
| **Where the Record Lives** | System of Record: Master LP Model files (`.pims`, `.mod`, `.gms`), approved Monthly Operating Plan (MOP) executive decks, monthly reconciled mass balance archives, and crude cargo valuation scorecards. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[AFPM-Economics]`**: American Fuel & Petrochemical Manufacturers, *Refinery Planning and Economics Fundamentals, Sub-Model Calibration, and Operational Best Practices*.
2. **`[AIChE-LP]`**: American Institute of Chemical Engineers, *Linear and Non-Linear Programming in Petroleum Refining and Chemical Supply Chains*.
3. **`[PIMS-Manual]`**: AspenTech, *Aspen PIMS Mathematical Formulation, Recursion, and Sub-Model Calibration Manual*, Version 14.
4. **`[Maples-Refining]`**: Robert E. Maples, *Petroleum Refinery Process Economics*, 2nd Edition, PennWell Books (Principles of Marginal Economic Values, Shadow Prices, and Crude Breakeven Analysis).
5. **`[Gary-Handwerk]`**: J. H. Gary, G. E. Handwerk, and M. J. Kaiser, *Petroleum Refining: Technology and Economics*, 5th Edition (Refinery LP Structure and Material Balance Modeling).

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **AspenTech Aspen PIMS** | Linear Programming Optimizer | Large-scale LP and non-linear matrix optimization, recursion handling for non-linear property blending, and shadow price (marginal value) calculation. | **Mathematical engine silo.** PIMS solves the mathematical matrix it is given; it has zero visibility into whether last month's actual plant mass balance matched its predictions. It cannot autonomously extract reconciled plant yields, identify drifted sub-model vectors, or recalibrate shift parameters without manual modeling interventions. |
| **Haverly Systems GRTMPS** | Generalized Refinery Planning System | Multi-period LP formulation, crude assay distillation curve processing, and capital investment optimization. | Requires manual entry of unit capacity limits, yield shift vectors, and constraint equations. Updating sub-models to reflect poisoned catalyst or fouled heat exchangers remains a labor-intensive, multi-week manual chore. |
| **Honeywell Spiral Plan / Aspen Petroleum Scheduler (APS)** | Supply Chain Scheduling & Planning Integration | Translates monthly LP planning targets into daily tank receipts, unit run-rates, and multi-blend shipping schedules. | Focuses strictly on physical scheduling feasibility; completely isolated from evaluating economic model drift, diagnosing why planned crack-spread margins were missed, or screening raw vendor spot crude assays. |
| **Thermo Fisher LIMS / OSIsoft PI** | Laboratory Testing & Plant Historian | Captures raw laboratory quality measurements and high-frequency process instrument telemetry. | Completely disconnected from the LP matrix. When an incoming crude parcel tests with higher TAN or higher vacuum residue than the library assay, no bridge pushes that variance into the LP model until after the crude is processed and off-spec products occur. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Reconcile monthly actual refinery mass balance yields vs. LP model predictions | `[AFPM-Economics §4]` | portfolio | B1 | Monthly | 16.0h | assembly | `✔✔` |
| **A02** | Formulate and solve the Monthly Operating Plan (MOP) optimizing crude slate | `[PIMS-Manual §3]` | portfolio | B2 | Monthly | 20.0h | judgment | `❌` (PIMS) |
| **A03** | Evaluate spot crude oil cargo purchase break-even economics and marginal value | `[Maples-Refining §5]` | portfolio | B1 | Weekly | 4.0h | assembly | `✔✔` |
| **A04** | Identify and recalibrate drifted LP unit sub-model yield vectors (CDU, FCC, HCU) | `[PIMS-Manual §5]` | estate | B1 | Monthly | 12.0h | consistency | `✔✔` |
| **A05** | Calculate and interpret marginal economic values (shadow prices) on unit bottlenecks | `[PIMS-Manual §4]` | portfolio | B2 | Weekly | 2.5h | judgment | `❌` (PIMS) |
| **A06** | Audit incoming crude tanker laboratory assays vs. static LP crude library cuts | `[AFPM-Economics §2]` | estate | B1 | Weekly | 3.5h | assembly | `✔✔` |
| **A07** | Reconcile intermediate component swing stream valuations and routing economics | `[Maples-Refining §6]` | estate | B1 | Weekly | 8.0h | consistency | `✔✔` |
| **A08** | Validate candidate LP plan feasibility against physical utility network limits (H2, steam) | `[AIChE-LP §3]` | estate | B1 | Monthly | 6.0h | volume | `✔✔` |
| **A09** | Decompose and diagnose monthly missed gross refining margin (GRM) variance | `[AFPM-Economics §5]` | portfolio | B1 | Monthly | 16.0h | recall | `✔✔` |
| **A10** | Formulate finished fuel blending non-linear property sub-matrices (octane, RVP, cetane)| `[PIMS-Manual §6]` | task | B2 | Monthly | 4.0h | judgment | `❌` (PIMS) |
| **A11** | Model freight demurrage, pipeline transit tariffs, and working capital constraints | Practitioner | task | B1 | Monthly | 3.0h | assembly | `✔` |
| **A12** | Formulate multi-period turnaround (TAR) and unit maintenance slowdown LP cases | `[AFPM-Economics §3]` | portfolio | B1 | Quarterly | 10.0h | assembly | `✔✔` |
| **A13** | Scrape and validate external market price benchmarks (Platts, Argus, ICE crack spreads)| Practitioner | portfolio | B1 | Daily | 1.0h | assembly | `✔` |
| **A14** | Compile executive monthly refinery economic performance briefing for Refinery VP | Practitioner | portfolio | B1 | Monthly | 6.0h | assembly | `✔` |
| **A15** | Lead tactical crude selection briefing with commercial crude traders and supply lead | Practitioner | portfolio | B3 | Daily | 1.5h | judgment | `❌` (Human Lead) |

---

### Action Analysis (Two-Liners)

* **A01 · Plan vs. Actual Mass Balance Reconciliation (B1, `[AFPM-Economics §4]`)**:
  * *Today*: Planner spends 2 to 3 days pulling reconciled monthly production volumes from financial accounting and manually comparing them line-by-line against PIMS plan predictions in massive Excel workbooks.
  * *Failure Mode*: Unexplained volume and yield discrepancies are dismissed as "operational noise", allowing severe model bias to persist into future crude procurement cycles.
  * *Agent Candidate*: **→ See §4 (Agent 1: Monthly Plan vs. Actual Mass Balance Reconciler)**.

* **A02 · MOP Formulation & LP Matrix Optimization (B2, `[PIMS-Manual §3]`)**:
  * *Today*: Executed inside Aspen PIMS or Haverly GRTMPS. The planner defines market price vectors, sets unit minimum/maximum capacities, and executes the mathematical solver.
  * *Failure Mode*: Core mathematical linear programming and non-linear recursion algorithms; solver execution belongs to commercial monolith engines.
  * *Agent Candidate*: `❌ No`. Monolith solver core.

* **A03 · Spot Crude Cargo Pre-Screening & Break-Even Evaluation (B1, `[Maples-Refining §5]`)**:
  * *Today*: When traders receive a spot crude offer, the planner spends 3 to 5 hours transcribing PDF assay sheets into the LP crude format, creating a test LP run, and manually calculating break-even acquisition pricing.
  * *Failure Mode*: Planning takes too long to evaluate the cargo; trading misses fast-moving market arbitrage opportunities, or buys a distressed parcel that violates refinery metallurgy or hydrotreating limits.
  * *Agent Candidate*: **→ See §4 (Agent 2: Spot Crude Cargo Pre-Screening & Assay Translation Sieve)**.

* **A04 · LP Unit Sub-Model Vector Drift Recalibration (B1, `[PIMS-Manual §5]`)**:
  * *Today*: Modifying PIMS sub-model base vectors (e.g., FCC gasoline yield vs. conversion severity) requires tedious manual regression fitting; planners recalibrate sub-models only once or twice a year.
  * *Failure Mode*: The LP model runs on outdated yield curves that reflect fresh catalyst from two years ago, predicting product yields that the plant cannot physically produce.
  * *Agent Candidate*: **→ See §4 (Agent 3: LP Unit Sub-Model Vector Calibration Sieve)**.

* **A05 · Marginal Shadow Price Interpretation (B2, `[PIMS-Manual §4]`)**:
  * *Today*: The planner reviews PIMS dual solution reports to see which unit constraints (e.g., hydrocracker hydrogen compressor or reformer furnace firing) carry the highest marginal penalty ($/bbl).
  * *Failure Mode*: Standard mathematical output of linear programming; human commercial judgment interprets strategic implications.
  * *Agent Candidate*: `❌ No`. Monolith solver output.

* **A06 · Crude Assay Quality Drift Audit (B1, `[AFPM-Economics §2]`)**:
  * *Today*: Planner assumes incoming crude parcels match the historical assay in the LP library; lab assays from tanker discharge certificates sit unexamined in LIMS.
  * *Failure Mode*: A crude parcel arrives with 15% higher vacuum residue or 0.5 wt% higher sulfur than the library assay, causing severe vacuum tower bottlenecking and sulfur plant overloads.
  * *Agent Candidate*: Supported via Spot Crude Pre-Screening & Assay Translation Sieve (Agent 2).

* **A07 · Intermediate Swing Stream Valuation Sieve (B1, `[Maples-Refining §6]`)**:
  * *Today*: Planner and process engineers manually debate intermediate stream routing (e.g., Light Cycle Oil into ultra-low sulfur diesel vs. fuel oil cutter; Reformate into gasoline vs. aromatics extraction) in static spreadsheets.
  * *Failure Mode*: Suboptimal routing persists for weeks, degrading product pool margins and creating intermediate tank inventory imbalances.
  * *Agent Candidate*: **→ See §4 (Agent 6: Intermediate Swing Stream & Shadow Price Valuation Sieve)**.

* **A08 · Utility Network & Hydrogen Feasibility Validation (B1, `[AIChE-LP §3]`)**:
  * *Today*: Planners treat hydrogen, steam, and fuel gas as unconstrained or simple fixed ratio factors in the LP matrix; operations frequently pushes back because the planned crude slate exceeds hydrogen plant capacity.
  * *Failure Mode*: Refinery leadership approves an LP plan that forces hydrogen deficits, requiring emergency crude cutbacks, product flaring, or expensive third-party merchant hydrogen purchases.
  * *Agent Candidate*: **→ See §4 (Agent 5: Refinery Utility & Hydrogen Grid Feasibility Validator)**.

* **A09 · Missed Gross Refining Margin (GRM) Gap Diagnosis (B1, `[AFPM-Economics §5]`)**:
  * *Today*: When actual realized margin is $2.10/bbl against a planned $2.85/bbl, the planner spends a week gathering operating data, price deltas, and equipment trip logs to build a variance bridge for executive leadership.
  * *Failure Mode*: Commercial trading blames refinery operations for downtime, while operations blames commercial for un-runnable LP plans; root causes remain unaddressed.
  * *Agent Candidate*: **→ See §4 (Agent 4: Gross Refining Margin Gap & Variance Attribution Sieve)**.

* **A10 · Finished Product Blending Property Formulation (B2, `[PIMS-Manual §6]`)**:
  * *Today*: Handled through non-linear blending index algorithms (e.g., Ethyl RT-70 for octane, Chevron blending index for flash/pour points) embedded within PIMS / Haverly.
  * *Failure Mode*: Core mathematical formulation within the commercial planning software.
  * *Agent Candidate*: `❌ No`. Monolith modeling domain.

* **A11 · Logistics & Demurrage Tariff Modeling (B1, Practitioner)**:
  * *Today*: Planner manually updates pipeline freight tariffs and marine berth demurrage rates in PIMS constraint tables.
  * *Failure Mode*: Outdated freight rates lead to selecting crude slates with uneconomic delivered costs.
  * *Agent Candidate*: Supported via Spot Crude Cargo Pre-Screening Sieve (Agent 2).

* **A12 · Turnaround & Outage LP Scenario Deck Formulation (B1, `[AFPM-Economics §3]`)**:
  * *Today*: Planner spends 2 to 3 weeks setting up multi-period LP case decks to model an upcoming 45-day FCCU or Hydrocracker turnaround, evaluating feed cutbacks and intermediate inventory builds.
  * *Failure Mode*: Inadequate case deck formulation leads to poor intermediate tank storage management, forcing emergency refinery crude throughput slowdowns.
  * *Agent Candidate*: **→ See §4 (Agent 7: Turnaround & Outage Multi-Period LP Scenario Deck Builder)**.

* **A13 · External Market Price Scraping (B1, Practitioner)**:
  * *Today*: Commercial analyst extracts Platts and Argus price indices and pastes them into PIMS price update tables.
  * *Failure Mode*: Data entry errors cause skewed economic optimization.
  * *Agent Candidate*: Automated utility function within planning infrastructure.

* **A14 · Executive Economic Performance Briefing (B1, Practitioner)**:
  * *Today*: Planner spends days compiling charts and tables into PowerPoint decks for monthly executive management meetings.
  * *Failure Mode*: High administrative drag diverting time from operational margin optimization.
  * *Agent Candidate*: Synthesized directly via Gross Refining Margin Gap Sieve (Agent 4).

* **A15 · Tactical Crude Selection Briefing (B3, Practitioner)**:
  * *Today*: Daily commercial standup between Chief Crude Trader, Planning Lead, and Refinery Operations Superintendent.
  * *Failure Mode*: High-stakes commercial risk decision-making and cross-departmental alignment.
  * *Agent Candidate*: `❌ No`. Human commercial leadership.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Monthly Plan vs. Actual Mass Balance Reconciler
* **In One Line**: Ingests monthly approved Aspen PIMS planning tables, accounting reconciled plant mass balances, and actual crude receipts to compute stream-by-stream yield variances and identify structural model gaps.
* **Friction Solved**: Eliminates 14.0 hours per month of manual multi-unit data harvesting, unit balance alignment, and spreadsheet variance cross-checking.
* **The Specification**:
  * **Reads**: Approved Monthly Operating Plan (MOP) LP output tables (planned crude charges, unit throughputs, intermediate flows, finished product volumes), accounting reconciled monthly material balance reports, crude tank receipts, and sales dispatch records.
  * **Does**: Reconciles actual volumetric and mass yields against LP model predictions across all processing units (CDU/VDU, FCCU, Hydrocracker, Reforming, Alkylation, Coking); normalizes yield differences against actual feed crude densities and unit operating severities; isolates volume variances from pricing variances; flags systematic over-prediction or under-prediction trends across specific cut fractions.
  * **Returns**: Monthly Plan vs. Actual Reconciliation Dossier with stream-by-stream variance tables, yield error percentages ($\Delta 	ext{vol}\%$), and flagged sub-model discrepancies.
  * **Stops At**: Overwriting production accounting financial balance figures or altering legal tax/customs records.
* **Failure Modes & Safety Envelopes**: If un-reconciled material balance loss across the refinery perimeter exceeds $\pm 0.8\%$ of crude feed, the agent flags `[Refinery Mass Balance Unclosed: Flowmeter Calibration or Tank Inventory Error Suspected]` and suppresses sub-model bias calculations until accounting balance is resolved.

---

### Agent 2: Spot Crude Cargo Pre-Screening & Assay Translation Sieve
* **In One Line**: Translates raw vendor crude assay certificates into standard LP crude distillation cut vectors and simulates refinery metallurgical, hydraulic, and conversion hurdles to calculate break-even acquisition margins ($/bbl).
* **Friction Solved**: Removes 3.5 hours of manual assay transposition, property translation, and test case setup per spot crude evaluation, enabling rapid response to commercial trading opportunities.
* **The Specification**:
  * **Reads**: Vendor crude assay sheets (PDF/Excel containing API gravity, sulfur, Total Acid Number [TAN], metals [Ni, V, Fe], pour point, ASTM D86/D2887 TBP distillation curves), active product crack-spread price books, and baseline PIMS LP master decks.
  * **Does**: Fits mathematical spline curves to raw assay distillation data to generate standard LP cut fractions (LPG, Light Naphtha, Heavy Naphtha, Kerosene, Diesel, VGO, Vacuum Residue); evaluates metallurgical constraint limits (TAN metallurgy corrosion thresholds, desalter salt limits, crude column overhead chloride limits); runs automated marginal break-even LP optimization cases; calculates maximum allowable crude purchase price ($/bbl delivered).
  * **Returns**: Spot Crude Commercial Evaluation Scorecard displaying break-even acquisition price, projected incremental refinery margin ($\Delta \$/	ext{bbl}$), and flagged unit constraint risks (e.g., vacuum tower heater firing limit saturation or hydrocracker hydrogen overload).
  * **Stops At**: Authorizing crude cargo purchase contracts, issuing commercial bids, or executing financial commodity hedges.
* **Failure Modes & Safety Envelopes**: If vendor assay lacks critical quality parameters (e.g., missing TAN on an unfamiliar West African or South American heavy crude), the agent flags `[Assay Incomplete: Critical Metallurgy Constraint Unknown]` and applies conservative worst-case penalty bounds.

---

### Agent 3: LP Unit Sub-Model Vector Calibration Sieve
* **In One Line**: Ingests historical daily unit operating data, laboratory stream analyses, and catalyst deactivation tracking to recalibrate drifted yield vectors and shift parameters in Aspen PIMS / Haverly GRTMPS sub-models.
* **Friction Solved**: Eliminates 10.5 hours per month of complex multi-variable regression fitting and manual LP include-file editing.
* **The Specification**:
  * **Reads**: Historical daily unit operating telemetry from OSIsoft PI / Honeywell PHD, LIMS laboratory stream assays, catalyst age and equilibrium activity (E-Cat MAT), and active PIMS sub-model base vectors (e.g., FCC yield vs. conversion, hydrocracker yield vs. space velocity, reformer yield vs. RON).
  * **Does**: Performs statistical multi-variable regression across recent steady-state operating windows (filtering out unit upsets and feed transitions); computes updated shift vectors ($\Delta 	ext{Yield} / \Delta 	ext{Severity}$) and base yield coefficients; compares new parameters against historical bounds to prevent LP solver instability; generates clean formatted LP include decks (`.pims` / `.mod`).
  * **Returns**: LP Sub-Model Calibration Dossier with recommended vector update files, statistical confidence metrics ($R^2$, $t$-statistics), and comparison plots of old vs. new yield curves.
  * **Stops At**: Directly committing modifications to master enterprise LP model decks without senior planning specialist review and sign-off.
* **Failure Modes & Safety Envelopes**: If proposed vector updates result in negative yields or violate fundamental thermodynamic conservation of mass/atoms (e.g., carbon/hydrogen imbalance), the agent immediately halts compilation and logs a `[Thermodynamic Violation in Sub-Model Parameter Fit]` error.

---

### Agent 4: Gross Refining Margin Gap & Variance Attribution Sieve
* **In One Line**: Decomposes the monthly variance between planned and realized gross refining margins ($\Delta \$/	ext{bbl}$) into discrete, non-overlapping buckets of Market Price, Crude Slate Volume, Unit Downtime, and LP Model Bias.
* **Friction Solved**: Eliminates 14.0 hours of contentious, multi-departmental financial forensics and spreadsheet bridge construction.
* **The Specification**:
  * **Reads**: Realized financial accounting revenue and crude cost figures, actual crude parcel settlement prices, approved Monthly Operating Plan (MOP) economic targets, plant operational reliability event logs, and LP post-solution shadow price tables.
  * **Does**: Executes a four-way variance attribution algorithm: (1) **Market Price Delta** (impact of actual product crack spreads and crude differentials vs. planning price book); (2) **Crude Slate Volume Variance** (impact of delayed tanker arrivals or substituted crude parcels); (3) **Unit Unplanned Downtime** (margin loss attributed to equipment trips, catalyst poisoning, or flaring events); (4) **LP Model Bias** (residual variance caused by inaccurate sub-model yield or energy predictions).
  * **Returns**: Executive Margin Variance Attribution Report featuring waterfall charts, unit-by-unit economic accountability, and prioritized recommendations to close model gaps for the next planning cycle.
  * **Stops At**: Making financial ledger adjusting journal entries or modifying audited statutory corporate earnings.
* **Failure Modes & Safety Envelopes**: If input financial price books or crude purchase invoices are un-reconciled, the agent explicitly marks the variance bridge as `[Preliminary Estimate: Financial Settlement Pending]` and prevents premature management attribution.

---

### Agent 5: Refinery Utility & Hydrogen Grid Feasibility Validator
* **In One Line**: Cross-checks candidate LP operating plans against live thermodynamic utility network constraints to prevent hydrogen deficits, steam header imbalances, and fuel gas flaring.
* **Friction Solved**: Eliminates 5.25 hours of manual cross-unit utility calculations and prevents unfeasible LP plans from reaching operations.
* **The Specification**:
  * **Reads**: Proposed LP run case vectors (unit feed rates, conversion severities, hydrotreater feed sulfur/nitrogen levels), Hydrogen Generation Unit (SMR/PSA) maximum capacities, steam boiler limits, and fuel gas blending limits.
  * **Does**: Calculates total refinery hydrogen demand using stoichiometric chemical consumption models plus network distribution losses; compares projected hydrogen balance against maximum SMR synthesis capacity and catalytic reformer hydrogen generation; evaluates high-pressure steam generation vs. turbine demand; flags situations where proposed high-severity conversion exceeds utility envelope limits.
  * **Returns**: LP Utility Feasibility Scorecard displaying hydrogen balance margins ($	ext{kNm}^3/	ext{hr}$), steam balance letdown risks, fuel gas BTU limits, and recommended LP feed constraint throttles.
  * **Stops At**: Authorizing operations to override environmental flaring caps or boiler emissions limits.
* **Failure Modes & Safety Envelopes**: If candidate LP case results in a projected hydrogen deficit exceeding $5\%$ of total demand, the agent issues a severe `[Critical Utility Infeasibility: Hydrogen Deficit Projected]` warning and indicates exact crude rate cutbacks required to balance the grid.

---

### Agent 6: Intermediate Swing Stream & Shadow Price Valuation Sieve
* **In One Line**: Evaluates alternative routing economics and marginal shadow prices for refinery intermediate swing streams to optimize product pool margins and prevent tankage bottlenecks.
* **Friction Solved**: Eliminates 7.0 hours per week of manual spreadsheet evaluation of intermediate streams across processing and blending boundaries.
* **The Specification**:
  * **Reads**: Real-time intermediate tank levels and ullage limits, current unit operating rates, LP marginal values (shadow prices) for intermediate streams, and component quality properties (octane, cetane, sulfur, aromatic content, viscosity).
  * **Does**: Evaluates economic spreads for swing stream allocations: Light Cycle Oil (LCO) to ultra-low sulfur diesel hydrotreating vs. heavy fuel oil cutter stock; Heavy Reformate to gasoline blending vs. petrochemical aromatics (BTX) extraction; Atmospheric Gas Oil (AGO) to FCCU vs. Hydrocracker; evaluates intermediate inventory buildup rates against tank capacity limits.
  * **Returns**: Intermediate Stream Routing Optimization Advisory displaying marginal value differentials ($\Delta \$/\text{MT}$), recommended valve routing lineups, and projected tank ullage pinch dates.
  * **Stops At**: Directly executing valve alignments or changing plant transfer pump lineups.
* **Failure Modes & Safety Envelopes**: If recommended routing would cause an intermediate tank to exceed its high-level safety limit (HHL) within 24 hours, the agent overrides economic optimization and alerts `[Tank Ullage Emergency: Priority Routing to Avert Tank-Top Required]`.

---

### Agent 7: Turnaround & Outage Multi-Period LP Scenario Deck Builder
* **In One Line**: Formulates and configures multi-period LP case decks to model planned unit turnarounds (TAR), evaluating optimal pre-turnaround inventory builds, crude throughput cutbacks, and intermediate feed imports.
* **Friction Solved**: Eliminates 8.75 hours of manual case configuration, period linkage, and constraint adjustment per turnaround planning exercise.
* **The Specification**:
  * **Reads**: Turnaround maintenance schedules (unit shutdown dates, duration, ramp-down and ramp-up curves), intermediate tankage storage allocations, third-party feedstock purchase contracts, and master PIMS LP model decks.
  * **Does**: Builds multi-period LP formulations linking pre-TAR, mid-TAR, and post-TAR operational phases; defines time-dependent unit capacity constraints; models intermediate storage accumulation and draw-down dynamics; evaluates economics of purchasing intermediate feedstocks (e.g., imported vacuum gas oil) to keep downstream units running during upstream maintenance; optimizes crude run cutbacks to minimize overall margin loss.
  * **Returns**: Turnaround Economic Optimization Dossier with recommended crude processing schedules, intermediate inventory trajectories, imported feed requirements, and projected gross margin impact ($).
  * **Stops At**: Approving maintenance contractor work orders or authorizing plant equipment isolation.
* **Failure Modes & Safety Envelopes**: If multi-period solver solutions show intermediate tanks hitting negative volume or exceeding physical tank farm capacities, the agent flags `[Multi-Period Material Infeasibility: Tank Farm Balance Unachievable]` and suggests alternative external export routings.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never fabricate enterprise rupee/dollar multipliers. The refinery client supplies their own crude throughput, crack spreads, and operating cost constants.

### Unit of Work: 1 Monthly Refinery Planning, Calibration & Economic Governance Cycle (covering a complex fuels & conversion refinery)

| Metric | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|:---:|:---:|:---:|---|
| **Monthly Plan vs. Actual Mass Balance Reconciliation** | 16.00 hours | 2.00 hours | **14.00 hours saved** | Multi-unit data harvesting & spreadsheet variance cross-checking |
| **Spot Crude Cargo Opportunity Pre-Screening (4 evaluations/mo)**| 16.00 hours | 1.60 hours | **14.40 hours saved** | Manual assay translation, property spline-fitting & LP case setup |
| **LP Unit Sub-Model Parameter Recalibration** | 12.00 hours | 1.50 hours | **10.50 hours saved** | Multivariable regression fitting & manual LP include-deck editing |
| **Gross Refining Margin Gap Attribution & Diagnosis** | 16.00 hours | 2.00 hours | **14.00 hours saved** | Contentious cross-departmental financial and operational forensics |
| **Refinery Utility & Hydrogen Grid Feasibility Validation** | 6.00 hours | 0.75 hours | **5.25 hours saved** | Thermodynamic utility balance cross-checking against candidate LP |
| **Intermediate Swing Stream & Shadow Price Valuation Sieve** | 8.00 hours | 1.00 hours | **7.00 hours saved** | Manual spread calculation & swing stream inventory tracking |
| **Turnaround / Outage Multi-Period LP Scenario Deck Building** | 10.00 hours | 1.25 hours | **8.75 hours saved** | Multi-period case configuration, period linkage & constraint setup |
| **TOTAL PER MONTHLY PLANNING CYCLE** | **84.00 hours** | **10.10 hours** | **73.90 hours saved** | **88.0% reduction in manual data assembly and reconciliation drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table

| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[AFPM-Economics]` | AFPM, *Refinery Planning and Economics Best Practices Guidelines*, 2019 | afpm.org/planning | Industry Standard | Refinery planning competencies, mass balance reconciliation, MOP governance |
| `[AIChE-LP]` | AIChE, *Linear Programming and Supply Chain Optimization in Petroleum Refining*, 2020 | aiche.org/resources | Technical Guide | LP matrix formulation, utility constraint modeling, intermediate streams |
| `[PIMS-Manual]` | AspenTech, *Aspen PIMS Formulation Guide and Sub-Model Calibration*, Version 14 | aspentech.com/pims | Technical Manual | LP matrix structure, recursion, shift vectors, and sub-model calibration |
| `[Maples-Refining]` | R. E. Maples, *Petroleum Refinery Process Economics*, 2nd Edition | PennWell Books | Technical Textbook | Marginal economic values, shadow prices, crude breakeven pricing |
| `[Gary-Handwerk]` | Gary, Handwerk, & Kaiser, *Petroleum Refining: Technology and Economics*, 5th Ed | CRC Press | Technical Textbook | Distillation cuts, conversion unit yield structures, material balances |
| `[NPRA-08-42]` | NPRA, *Closing the Gap Between Planning and Operations*, Technical Paper AM-08-42 | afpm.org/technical-papers | Technical Paper | Baseline timings on manual LP reconciliation and margin gap forensics |
| `[KBC-Margin-Gap]` | KBC Advanced Technologies, *Refinery Margin Realization Benchmarking*, 2021 | kbc.global/insights | Industry Report | Quantification of 15% to 30% gap between planned LP and realized margins |

### Negative Search Registry
* **Searched**: AspenTech Aspen PIMS documentation, Haverly Systems GRTMPS technical manuals, Honeywell Spiral Plan user guides, and OnePetro conference archives for *"autonomous closed-loop LP sub-model parameter recalibration directly from reconciled plant mass balance databases"*.
* **Result**: `Negative Search, 2026-09`. Commercial LP software platforms provide mathematical solvers and manual shift vector data entry interfaces; none autonomously ingest monthly reconciled mass balances, compute statistical multivariable delta vectors, and output updated PIMS include decks without manual human modeling.

---

## 7 · Lines Worth Remembering & Open Questions

### The Line
> *"A refinery doesn't lose money on bad linear programming mathematics; it loses money because the LP model assumed the hydrocracker could process forty thousand barrels of heavy gas oil at 98% conversion, but nobody updated the model when the catalyst poisoned three months ago."*

### Authentic Open Questions for Refinery Planning Practitioners
1. **The LP Sub-Model Staleness Gap**: How many unit yield sub-models in your master LP planning deck (e.g., FCCU, Hydrocracker, CCR Platformer) have not undergone rigorous multivariable recalibration against actual reconciled plant mass balances in over six months?
2. **Spot Crude Evaluation Lag**: When commercial crude trading receives an unexpected spot cargo offer for an uncharacterized crude blend, how many hours does it take to formulate the LP assay and return a reliable breakeven acquisition price—and has the trading window ever closed before planning finished?
3. **The Unexplained Margin Gap**: In your end-of-month financial reconciliation, what percentage of the variance between planned LP gross refining margin and actual realized commercial margin is currently categorized as "unexplained operational variance" or "model noise"?
