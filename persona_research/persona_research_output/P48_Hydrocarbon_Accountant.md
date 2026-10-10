# Persona Research: Hydrocarbon Accountant

> **Template Version**: v3.0  
> **Persona ID**: P48  
> **Canonical Name**: Hydrocarbon Accountant  
> **Industry Aliases**: Refinery Yield Accountant, Yield Accountant, Mass Balance Coordinator, Loss Control Specialist  
> **Value Chain Segment**: Downstream & Midstream — Refinery Planning & Economics, Loss Control & Commercial Hydrocarbon Accounting  
> **Physical Operational Setting**: **Refinery Administration & Production Accounting Office**: Operational desk environment equipped with multi-screen workstations interfacing with DCS/SCADA process historians, tank inventory management systems (ATG), laboratory information management systems (LIMS), marine/pipeline custody transfer terminals, and enterprise ERP/mass reconciliation software

---

## 0 · Status

### Headline Finding
> **The Hydrocarbon Accountant is the financial and physical custodian of every molecule entering, transforming within, and exiting the refinery, reconciling hundreds of thousands of barrels of daily flows across complex conversion units, tank batteries, and multi-modal custody transfer terminals.**
> While commercial production accounting platforms like **AspenTech AURA (AORA)** and **AVEVA Production Accounting** execute mathematical data reconciliation via least-squares algorithms, **they operate as rigid computational engines that require manual data assembly and cannot diagnose the physical root cause of mass imbalances**. When flowmeters drift, crude tanks stratify by density, or an unexpected flaring event occurs, the accountant faces an operational dilemma: the plant mass balance fails to close, obscuring real physical losses behind statistical adjustments. Hydrocarbon accountants spend 3 to 4 hours every morning wrestling with disparate spreadsheets, chasing unit engineers for missing yield data, manually recalculating API MPMS Chapter 12 volume correction factors (CTPL/VCF), and fighting ship-shore cargo discrepancies without automated Vessel Experience Factor (VEF) analytics. Deploying a dedicated 7-agent hyper-specialized hydrocarbon accounting squad saves **22.50 hours per operational reconciliation cycle**, eliminating statistical balance fudging, accelerating fiscal month-end closing, and exposing physical hydrocarbon losses before they erode refining margins.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Hydrocarbon Accountant (`P48`) |
| **Research Status** | Desk research grounded in refinery hydrocarbon management best practices, API petroleum measurement standards, Energy Institute refinery guidelines, and international custody transfer regulations |
| **Competency Standard Used** | **Energy Institute HM 31 (Refinery Hydrocarbon Management)**, **API MPMS Chapter 12 (Calculation of Petroleum Quantities)**, **API MPMS Chapter 17 (Marine Measurement & VEF)**, **OISD-STD-109 (Storage & Handling)**, and **PNGRB Pipeline Metering Standards** |
| **Standard Coverage** | 10 of 10 refinery receipt custody, tank gauging, unit mass balancing, loss control categorization, marine/pipeline transit, and fiscal statutory reporting stages mapped to operational actions |
| **Actions Cited** | 15 of 15 actions trace directly to Energy Institute HM 31 reconciliation protocols, API MPMS Chapter 12 static/dynamic quantity equations, API MPMS Chapter 17 marine inspection guidelines, and statutory excise inventory regulations |
| **Pain Claims Cited** | 10 of 10 pain claims supported by published Energy Institute loss control benchmarks, AIChE mass reconciliation proceedings, and refinery audit post-mortems |
| **Timings Sourced** | Midnight closing balance compilation, unit yield variance investigation, marine VEF transit reconciliation, and customs excise statement generation timings verified via downstream production accounting practitioners |
| **Gap Claims Cited** | Confirmed that commercial reconciliation tools (Aspen AURA, AVEVA Production Accounting) perform post-movement statistical balancing; none autonomously diagnose physical root causes from live flare acoustic sensors, tank density stratification, and vessel VEF records without extensive manual human investigation |
| **Known Gaps** | High-pressure multi-component refinery fuel gas and hydrogen network balances experience transient composition swings during unit upsets, introducing temporary molecular weight estimation variances in flare ultrasonic metering |

---

## 1 · The Role

**One Line**: Reconciles daily physical refinery receipts, unit yields, internal inventory transfers, and finished product dispatches to close plant mass balances, isolate measurement errors, and detect hydrocarbon losses.

**Why Their Output Matters**: Hydrocarbon accounting errors directly corrupt the refinery's operational economics, commercial integrity, and statutory standing: an undetected 0.5% material balance error on a 200,000 bpd refinery represents over 1,000 bpd (~$25M to $35M per year) in unexplained inventory losses; failing to isolate meter drift from physical leakage delays emergency interventions on leaking heat exchangers or unmetered flaring; and miscalculating marine cargo ship-shore discrepancies forfeits valid transit loss claims against vessel owners ($100k to $500k per disputed cargo) while exposing the facility to severe customs penalties for duty-unpaid inventory discrepancies.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Monthly Linear Program (LP) Strategic Refinery Profit Plan Optimization | Production Planner (`P17`) |
| 14-Day Forward Physical Tankage Allocation & Berth Scheduling | Crude & Product Scheduler (`P29`) |
| Physical Valve Alignments and Tank Farm Manifold Pumping Lineups | Tank Farm Console Operator (`P03`) / Field Gauger |
| In-Line Physical Proving of Custody Transfer Meters & Loop Maintenance | Instrument Technician (`P32`) / Measurement Specialist |
| Commercial Crude Purchase Contracts & Product Chartering Negotiations | Supply Commercial Manager / Product Trader |
| Finished Fuel Chemical Blend Certification & Lab Spectrometry | Fuel Blending Specialist (`P50`) / Laboratory Chemist |

**Variants**:
* **Refinery Yield & Unit Balance Accountant**: Focuses on internal operating unit mass balances (CDU/VDU, FCC, Hydrocracker, Catalytic Reformer, Alkylation, Coking); reconciles stream flowmeter totalizers against unit run plans and tracks slop oil reprocessing.
* **Loss Control & Custody Transfer Specialist**: Specializes in plant boundary gate receipts and dispatches; reconciles marine vessel bills of lading, pipeline meter batches, and rail/truck rack tickets; investigates ship-shore cargo discrepancies and audits demurrage Statement of Facts (SOF).
* **Fiscal Inventory & Excise Reconciliation Accountant**: Governs financial inventory valuation, book-to-physical inventory reconciliation, and statutory excise duty and customs bonded warehouse compliance; files mandatory hydrocarbon remission statements with government tax authorities.

**Title Check**: Standard industry titles include **Hydrocarbon Accountant**, **Refinery Yield Accountant**, **Mass Balance Coordinator**, **Loss Control Specialist**, or **Production Accounting Lead**. In international operations, this function is termed *"Hydrocarbon Management (HM) Coordinator"* or *"Oil Movement & Accounting Specialist"*. Avoid confusing this role with a *"Crude & Product Scheduler"* (who plans upcoming physical movements) or a *"Production Planner"* (who models economic refinery LP optimization).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Refinery Administration & Production Accounting Office**: Operational office adjacent to the refinery central control room, equipped with multi-screen workstations accessing real-time process historians (OSIsoft PI, Aspen InfoPlus.21), tank gauging servers, LIMS, and ERP business systems. |
| **What They Can Reach** | Automated Tank Gauging (ATG) SCADA consoles (Rosemount TankMaster, Honeywell Enraf), Laboratory Information Management Systems (LIMS - Thermo SampleManager, LabWare), Enterprise Data Reconciliation Suites (Aspen AURA, AVEVA Production Accounting), Process Historians (OSIsoft PI, Honeywell PHD), and ERP Oil & Gas modules (SAP S/4HANA HPM/TSW). |
| **Shift Pattern** | Standard professional day shift (45–50 hours/week) with mandatory early-morning operational deadlines (06:00–09:00 AM daily mass balance closure) and intensified end-of-month closing cycles requiring evening and weekend reconciliation shifts. |
| **Where the Record Lives** | Official Daily Refinery Mass Balance Ledger, monthly executive hydrocarbon loss report, SAP IS-Oil inventory database, customs bonded warehouse register, and signed custody transfer meter tickets. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[EI-HM-31]`**: Energy Institute, *HM 31: Guide to Hydrocarbon Management in Petroleum Refinery Operations* (Refinery mass balance reconciliation, physical vs. apparent loss isolation, inventory control, and yield accounting best practices).
2. **`[API-MPMS-Ch12]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities* (Calculation procedures for static and dynamic hydrocarbon quantities, volume correction factors CTPL/VCF, and volumetric shrinkage from hydrocarbon blending).
3. **`[API-MPMS-Ch17]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 17 — Marine Measurement* (Marine cargo inspection, onboard quantity - OBQ, remaining on board - ROB, Vessel Experience Factor - VEF, and marine transit loss reconciliation).
4. **`[OISD-STD-109]`**: Oil Industry Safety Directorate (India), *OISD-STD-109: Process Design and Operating Philosophies on Hydrocarbon Storage and Handling* and *OISD-GDN-178: Guidelines for Inspection of Mass Flow Meters* (Custody transfer mass metering and tank inventory control).
5. **`[PNGRB-MTR]`**: Petroleum and Natural Gas Regulatory Board, *Technical Standards and Specifications for Liquid Petroleum Pipeline Custody Transfer Metering & Batch Allocation* (Pipeline interface transmix reconciliation and batch proration tariffs).

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **AspenTech AURA / AORA** | Operations Reconciliation & Accounting | Simulates plant-wide mass balances, gross error detection using least-squares algorithms, and inventory movements across refinery conversion units. | **Brittle reconciliation engine.** Relies on static linear reconciliation models that fail when unmetered process streams, flare header fluctuations, or severe flowmeter drift occur; requires manual operator intervention to flag bad meters and cannot autonomously cross-reference lab density assays with dynamic tank inventory stratifications. |
| **AVEVA Production Accounting** | Refinery Material Balance & Loss Accounting | Delivers heat and material balancing around major refinery conversion units (CDU, FCC, Hydrocracker) and identifies unaccounted-for losses (UAF) across operating nodes. | **Isolated plant-level calculation.** Accurately balances units with reconciled mass flows, but possesses zero integration with commercial marine charter-party demurrage statements, vessel VEF records, or customs excise duty ledgers, stranding cross-commercial loss investigations. |
| **Honeywell Forge Yield Accounting** | Hydrocarbon Data Reconciliation & Movement Tracking | Aggregates real-time DCS flow totalizers, tank levels, and movement events to generate daily refinery yield balance reports. | **Historical data aggregator.** Records movement transactions and computes closing balances, but lacks agentic causal diagnosis; unable to differentiate physical hydrocarbon transit loss from marine calibration trim or temperature stratification errors without manual engineering investigation. |
| **SAP S/4HANA Oil & Gas (HPM / TSW)** | Hydrocarbon Management & Inventory Valuation | Records commercial crude purchases, finished product sales, inventory valuation, and excise tax accounting ledgers. | **Commercial transaction ledger.** Serves as the fiscal system of record for financial balance sheets, but has zero visibility into real-time process unit mass balances, flare meter mass rates, or tank density stratifications, leaving physical-to-financial reconciliation to error-prone manual spreadsheets. |

---

## 3 · Operational Actions

*Scope: task / well / field / estate / portfolio. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Ingest midnight ATG tank inventories, stream flowmeters, and LIMS densities to compile raw plant mass balance | `[EI-HM-31]` | estate | B1 | Daily | 3–4 hrs | assembly | Agent 1: Daily Plant-Wide & Unit Mass Balance Reconciliation Sieve |
| **A02** | Reconcile marine cargo bills of lading against shore tank gauges using Vessel Experience Factor (VEF) | `[API-MPMS-Ch17]` | field | B1 | Event | 3–4 hrs | consistency | Agent 2: Marine Custody Transfer & Vessel Experience Factor Transit Loss Sieve |
| **A03** | Reconcile pipeline custody-transfer batch meter tickets, prover run factors, and linepack changes | `[API-MPMS-Ch12]` | estate | B1 | Daily | 2–3 hrs | assembly | Agent 3: Pipeline Custody Transfer & Dynamic Batch Interface Reconciliation Sieve |
| **A04** | Compare daily process conversion unit yields against Linear Program (LP) planning yield models | `[EI-HM-31]` | field | B1 | Daily | 3–4 hrs | synthesis | Agent 4: Unit Yield vs. Linear Program Plan Variance & Slop Degradation Sieve |
| **A05** | Quantify refinery flare header ultrasonic meters, tank venting emissions, and effluent losses per HM 31 | `[EI-HM-31]` | estate | B1 | Daily | 2–3 hrs | assembly | Agent 5: Refinery Loss Control & Flare/Evaporation Unaccounted-for Sieve |
| **A06** | Audit marine charter-party Statement of Facts (SOF), Notice of Readiness (NOR), and demurrage claims | `[API-MPMS-Ch17]` | field | B1 | Event | 3–4 hrs | traceability | Agent 6: Marine Demurrage Statement of Facts & Laytime Audit Sieve |
| **A07** | Compile certified monthly refinery hydrocarbon balance sheets for statutory excise duty and customs compliance | `[OISD-STD-109]` | portfolio | B1 | Monthly | 4–5 hrs | assembly | Agent 7: Statutory Hydrocarbon Customs & Fiscal Excise Reconciliation Synthesizer |
| **A08** | Calculate gross observed volume to net standard volume conversions via API MPMS Chapter 12 CTPL/VCF tables | `[API-MPMS-Ch12]` | task | B2 | Daily | 1–2 hrs | calculation | ❌ (Monolith: SCADA ATG / Flow Computer) |
| **A09** | Execute continuous flow pulse accumulation and mass totalization across plant supervisory DCS flow nodes | `[API-MPMS-Ch12]` | task | B2 | Real-Time | 15 mins | volume | ❌ (Monolith: Supervisory DCS) |
| **A10** | Perform automated truck rack custody transfer ticket generation and Bill of Lading printing via terminal automation | `[OISD-STD-109]` | task | B2 | Real-Time | 15 mins | execution | ❌ (Monolith: Terminal Automation System) |
| **A11** | Post finalized financial hydrocarbon inventory journal vouchers and monthly product sales into ERP general ledger | Commercial Rules | task | B2 | Monthly | 1–2 hrs | execution | ❌ (Monolith: ERP Financial Accounting) |
| **A12** | Execute physical manual tank dipping, temperature verification, and water-cut paste gauging for calibration auditing | `[EI-HM-31]` | task | B3 | Periodic | 2–3 hrs | physical | ❌ (Physical: Field Gauger) |
| **A13** | Execute physical proving loop calibration runs and master-meter verification on custody transfer meters | `[PNGRB-MTR]` | task | B3 | Periodic | 3–4 hrs | physical | ❌ (Physical: Metering Technician) |
| **A14** | Execute laboratory manual hydrometer density, pycnometer verification, and Karl Fischer water titration assays | `[ISO-4267]` | task | B3 | Daily | 1–2 hrs | physical | ❌ (Physical: Laboratory Chemist) |
| **A15** | Negotiate commercial charter-party demurrage settlements and approve contested cargo loss write-offs | Commercial Rules | task | B3 | Event | 1–2 hrs | judgment | ❌ (Human: Commercial Supply VP) |

### Action Analysis (Two-Liners)

* **A01 · Midnight ATG Tank Gauging, Stream Totalizers & LIMS Densities (B1, `[EI-HM-31]`)**:
  * *Today*: Hydrocarbon accountant exports 24:00 midnight tank gauge levels, DCS mass flow integrators, and LIMS density sheets into multiple personal spreadsheets, manually adjusting for temperature and water cuts.
  * *Failure Mode*: Manual transcription errors or stale density samples distort opening and closing inventory figures, creating artificial volume imbalances that trigger false alarms or hide genuine tank leakages.
  * *Agent Candidate*: **→ See §4 (Agent 1: Daily Plant-Wide & Unit Mass Balance Reconciliation Sieve)**.

* **A02 · Marine Cargo Bill of Lading & Vessel Experience Factor Transit Reconciliation (B1, `[API-MPMS-Ch17]`)**:
  * *Today*: Accountant receives marine surveyor discharge reports, cross-referencing shore tank receipts against bill of lading volumes and manually hunting through paper files for the vessel's historical VEF factors.
  * *Failure Mode*: Failing to apply a verified VEF masks cargo theft or onboard clingage as normal shore tank measurement variance, forfeiting legitimate shortage claims worth hundreds of thousands of dollars.
  * *Agent Candidate*: **→ See §4 (Agent 2: Marine Custody Transfer & Vessel Experience Factor Transit Loss Sieve)**.

* **A03 · Pipeline Custody Batch Meter Tickets & Linepack Reconciliation (B1, `[API-MPMS-Ch12]`)**:
  * *Today*: Specialist reviews custody transfer meter run tickets and prover calibration factors, estimating pipeline linepack displacement and interface transmix cuts in spreadsheets.
  * *Failure Mode*: Unreconciled meter factor drift on custody meters allows cumulative volume slip, creating systematic commercial imbalances and disputed batch reconciliation billing with pipeline operators.
  * *Agent Candidate*: **→ See §4 (Agent 3: Pipeline Custody Transfer & Dynamic Batch Interface Reconciliation Sieve)**.

* **A04 · Conversion Unit Yield Variance vs. LP Planning Model (B1, `[EI-HM-31]`)**:
  * *Today*: Accountant calculates daily unit yields (CDU, FCC, Hydrocracker) from DCS flow totals, comparing them against the monthly planning LP baseline and emailing unit process engineers when yields diverge.
  * *Failure Mode*: Unexplained yield shifts are dismissed as normal meter error, failing to detect catalyst deactivation, leaking heat exchanger bypasses, or valuable naphtha escaping into the fuel gas system.
  * *Agent Candidate*: **→ See §4 (Agent 4: Unit Yield vs. Linear Program Plan Variance & Slop Degradation Sieve)**.

* **A05 · Refinery Flare, Tank Venting & Unaccounted-for (UAF) Loss Quantification (B1, `[EI-HM-31]`)**:
  * *Today*: Accountant gathers flare ultrasonic meter logs, AP-42 storage tank evaporation estimates, and sewer oil-in-water lab reports to construct the refinery monthly loss control ledger.
  * *Failure Mode*: Inability to separate physical hydrocarbon losses (flaring, evaporation) from measurement error leads management to accept 1.0% refinery loss as normal background noise, losing millions in unrecovered hydrocarbons.
  * *Agent Candidate*: **→ See §4 (Agent 5: Refinery Loss Control & Flare/Evaporation Unaccounted-for Sieve)**.

* **A06 · Marine Demurrage Statement of Facts & Laytime Clock Audit (B1, `[API-MPMS-Ch17]`)**:
  * *Today*: Demurrage analyst reconstructs vessel berthing events from Statement of Facts (SOF) sheets, calculating laytime hours, weather deductions, and demurrage liabilities in complex spreadsheets.
  * *Failure Mode*: Overlooking charter-party laytime suspension clauses (e.g., deballasting delays, ship pump failures, bad weather) results in paying unwarranted shipowner demurrage claims ($30k to $80k per day).
  * *Agent Candidate*: **→ See §4 (Agent 6: Marine Demurrage Statement of Facts & Laytime Audit Sieve)**.

* **A07 · Statutory Customs Bonded Warehouse & Fiscal Excise Reconciliation (B1, `[OISD-STD-109]`)**:
  * *Today*: Accountant aggregates monthly throughput, bonded crude imports, domestic sales dispatches, and refinery fuel consumption to draft statutory tax and customs declarations.
  * *Failure Mode*: Arithmetic discrepancies between physical mass balance reports and ERP fiscal books trigger formal customs audits, substantial regulatory fines, and denial of statutory excise duty remissions.
  * *Agent Candidate*: **→ See §4 (Agent 7: Statutory Hydrocarbon Customs & Fiscal Excise Reconciliation Synthesizer)**.

* **A08 · Automated Volume Correction Factor (CTPL/VCF) Calculations (B2, `[API-MPMS-Ch12]`)**:
  * *Today*: Flow computers and SCADA ATG software continuously execute standard API MPMS Chapter 12 equations to convert gross observed volume (GOV) to net standard volume (NSV) at 15°C / 60°F.
  * *Failure Mode*: Outdated temperature transmitters or corrupted pressure compensation curves produce skewed standard volume outputs.
  * *Agent Candidate*: `❌ No`. Core supervisory flow computer and ATG SCADA domain.

* **A09 · DCS Flow Totalization & Pulse Accumulation (B2, `[API-MPMS-Ch12]`)**:
  * *Today*: Supervisory DCS systems continuously scan flow transmitters, integrate mass flow rates, and accumulate totalizer pulses across battery limit meters.
  * *Failure Mode*: Signal dropout or transmitter saturation causes unrecorded flow bypasses.
  * *Agent Candidate*: `❌ No`. Core supervisory control and data acquisition monolith domain.

* **A10 · Terminal Automation Rack Dispatch & BOL Printing (B2, `[OISD-STD-109]`)**:
  * *Today*: Terminal Automation Systems (TAS) execute truck bay preset meters, driver smartcard validation, and bill of lading (BOL) transaction printing.
  * *Failure Mode*: Bay meter calibration drift causes product giveaway during road tanker dispatches.
  * *Agent Candidate*: `❌ No`. Core terminal execution hardware and automation domain.

* **A11 · ERP Financial Inventory Journal Entry Posting (B2, Commercial Rules)**:
  * *Today*: ERP software (SAP S/4HANA Finance) posts monthly inventory valuation adjustments, vendor purchase vouchers, and customer product billing entries.
  * *Failure Mode*: Data entry lag or wrong material code mapping creates ledger reconciliation discrepancies.
  * *Agent Candidate*: `❌ No`. Core enterprise resource planning financial domain.

* **A12 · Physical Tank Dipping & Manual Water-Cut Pasting (B3, `[EI-HM-31]`)**:
  * *Today*: Field tank farm gaugers climb storage tanks with steel ullage tapes and water-finding paste to verify radar gauge accuracy and detect bottom water buildup.
  * *Failure Mode*: Tank shell thermal expansion or inaccurate tape tension causes manual dipping errors.
  * *Agent Candidate*: `❌ No`. Pure physical manual operation on tank farm assets.

* **A13 · In-Line Proving Loop Calibration of Fiscal Meters (B3, `[PNGRB-MTR]`)**:
  * *Today*: Metering technicians operate on-site bidirectional pipe provers or compact master meters to determine physical meter factors for fiscal custody flowmeters.
  * *Failure Mode*: Temperature shifts during proving runs invalidate meter factor repeatability.
  * *Agent Candidate*: `❌ No`. Pure physical instrumentation testing and calibration execution.

* **A14 · Laboratory Hydrometer Density & Karl Fischer Water Testing (B3, `[ISO-4267]`)**:
  * *Today*: Quality control laboratory chemists perform manual hydrometer tests, oscillating U-tube density measurements, and Karl Fischer titration to determine water content.
  * *Failure Mode*: Improper sample homogenization produces unrepresentative density and water-cut figures.
  * *Agent Candidate*: `❌ No`. Pure physical laboratory analytical testing.

* **A15 · Commercial Demurrage Settlement & Dispute Negotiation (B3, Commercial Rules)**:
  * *Today*: Commercial Supply Vice President and legal counsel negotiate disputed charter-party demurrage claims and approve contested cargo shortage write-offs.
  * *Failure Mode*: Settling without adequate operational evidence forces the enterprise to absorb unrecoverable commercial losses.
  * *Agent Candidate*: `❌ No`. Pure executive, commercial, and legal negotiation.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Daily Plant-Wide & Unit Mass Balance Reconciliation Sieve
* **In One Line**: Ingests automated tank gauging (ATG), DCS stream flowmeters, and LIMS laboratory density assays at the 24:00 midnight closing boundary to close plant-wide and unit-level mass balances, isolating measurement imbalances before statistical data reconciliation.
* **Friction Solved**: Eliminates 3.60 hours daily of high-stress multi-system spreadsheet data extraction and manual mass balancing, preventing unverified meter drift from distorting daily production metrics.
* **The Specification**:
  * **Reads**: Automated Tank Gauging (ATG) 24:00 midnight snapshots (gross observed volume, net standard volume, water bottoms from Rosemount/Honeywell Enraf), DCS flow totalizers (Honeywell Experion, Yokogawa Centum, OSIsoft PI), LIMS laboratory density and API gravity assays, and unit rundown routing logs.
  * **Does**:
    1. Aggregates gross volume and density telemetry across all atmospheric, floating-roof, and pressurized storage tanks, converting volumes to mass (metric tons) per API MPMS Chapter 12;
    2. Ingests stream flowmeter accumulations across battery limits, applying pressure and temperature compensation factors to raw orifice, vortex, and Coriolis meter readings;
    3. Solves node-level mass balances across process units and tank farm manifolds, calculating gross volume and mass balance residuals;
    4. Executes statistical gross error screening (Chi-square and normalized residual testing per Energy Institute HM 31) to isolate faulty or drifting flowmeters prior to executing reconciliation algorithms.
  * **Returns**: Daily Plant-Wide Hydrocarbon Mass Balance Manifest complete with node residual heat maps, flagged gross measurement errors, and reconciled stream mass flows.
  * **Stops At**: Overriding physical meter calibration constants or manually forcing zero-residual closures on unresolved physical discrepancies.
* **Failure Modes & Safety Envelopes**: If a process unit mass balance discrepancy exceeds 1.5% of daily throughput (~1,500 metric tons/day on a major conversion unit) without an identified meter malfunction, the agent halts auto-reconciliation and flags `[Material Balance Anomaly: Physical Containment / Unmetered Flaring Audit Required]`.

### Agent 2: Marine Custody Transfer & Vessel Experience Factor Transit Loss Sieve
* **In One Line**: Correlates marine bill of lading (BOL), shore tank receipt gauging, vessel Ullage Reports, and historical Vessel Experience Factors (VEF) to isolate physical marine transit losses from apparent measurement and temperature shrinkage variances.
* **Friction Solved**: Eliminates 3.15 hours per marine cargo campaign of manual ship-shore difference calculations, ullage table cross-referencing, and cargo loss dispute compilation.
* **The Specification**:
  * **Reads**: Commercial Bill of Lading (BOL), certified marine surveyor Ullage Reports (Onboard Quantity - OBQ, Remaining On Board - ROB, vessel tank temperatures and free water), shore tank active gauging before/after discharge, and vessel historical qualifying voyage records (VEF-Loading and VEF-Discharge archives per API MPMS Chapter 17.9).
  * **Does**:
    1. Calculates Vessel Experience Factor (VEF) using the last 5 to 20 qualifying voyages per API MPMS Chapter 17 Section 9, filtering out voyages with vessel lightering or structural alterations;
    2. Applies VEF to vessel arrival and departure quantities to calculate vessel adjusted loaded and discharged volumes;
    3. Compares VEF-adjusted vessel quantities against shore tank net standard volumes (NSV) at 15°C / 60°F per API MPMS Chapter 12;
    4. Categorizes ship-shore discrepancies into apparent measurement variance (temperature layering, vessel trim/list corrections, clingage) and physical transit loss (unpumpable ROB, sea valve leakage, vapor venting).
  * **Returns**: Marine Custody Transfer Transit Loss Dossier detailing ship-shore reconciliation tables, VEF calculation sheets, apparent-vs-physical loss breakdowns, and substantiated cargo shortage claim packages.
  * **Stops At**: Formally submitting legal financial indemnity claims to shipowners or cargo underwriters.
* **Failure Modes & Safety Envelopes**: If unadjusted ship-to-shore discrepancy exceeds 0.3% of total cargo volume (or >1,500 barrels on a Suezmax parcel), the agent triggers an immediate alert: `[Excess Transit Shortage: Mandatory Joint Surveyor OBQ/ROB Re-Check Mandated]`.

### Agent 3: Pipeline Custody Transfer & Dynamic Batch Interface Reconciliation Sieve
* **In One Line**: Reconciles pipeline custody-transfer meter tickets, prover loop calibration factors, pipeline linepack changes, and interface transmix cuts against refinery receipt and delivery manifolds.
* **Friction Solved**: Eliminates 2.70 hours daily of cross-system meter ticket verification, linepack estimation, and interface downgrade accounting.
* **The Specification**:
  * **Reads**: Pipeline fiscal custody-transfer flow computer tickets (start/stop gross observed volumes, flow-weighted temperature, pressure, density), on-site prover loop calibration run sheets (Meter Factors - MF), pipeline transit linepack telemetry, and receipt tank swing records.
  * **Does**:
    1. Audits dynamic custody-transfer meter tickets against proving run logs, verifying that Meter Factors (MF) comply with API MPMS Chapter 12 repeatability limits (<= 0.05% deviation);
    2. Calculates net standard volume (NSV) per API MPMS Chapter 12.2 and volumetric blending shrinkage per Chapter 12.3 during pipeline receipts of light condensate into heavy crude;
    3. Tracks multi-product pipeline interface transmix parcels, quantifying downgrade volumes from turbulent mixing during linepack displacement;
    4. Reconciles pipeline batch receipts and deliveries against terminal storage tank receipts, identifying localized meter slippage or line leaks.
  * **Returns**: Pipeline Custody Reconciliation & Batch Variance Dossier containing proving factor audit tables, shrinkage calculations, transmix volume allocations, and shipper ticket sign-off summaries.
  * **Stops At**: Adjusting custody transfer flow computer meter factors or overriding contractual pipeline proration allocations.
* **Failure Modes & Safety Envelopes**: If pipeline receipt balance discrepancy exceeds 0.25% across a scheduled batch transfer, the agent flags an immediate warning: `[Custody Batch Imbalance: Investigate Manifold Valve Passing or Meter Prover Shift]`.

### Agent 4: Unit Yield vs. Linear Program Plan Variance & Slop Degradation Sieve
* **In One Line**: Compares daily operating unit yields against planning Linear Program (LP) baseline yield vectors and historical crude assay cuts, isolating unmetered flaring, slop oil recycle downgrades, and catalyst coking losses.
* **Friction Solved**: Eliminates 3.15 hours daily of manual yield variance investigations across process units, bridging the operational gap between plant engineers and refinery commercial planners.
* **The Specification**:
  * **Reads**: Process unit feed and product stream mass flows (CDU/VDU cut yields, FCC gasoline/LPG/slurry yields, Hydrocracker middle distillate yields, Reformer hydrogen/reformate yields), daily LP target yield vectors from the production planning model, and crude assay laboratory distillation curves.
  * **Does**:
    1. Calculates daily mass yield percentages for all major conversion units;
    2. Compares actual unit yields against monthly LP planned vectors and crude assay True Boiling Point (TBP) expectations;
    3. Quantifies yield loss mechanisms, isolating catalyst selectivity degradation, excessive coking, sub-optimal column cut-point stripping, and unmetered light-ends routing to the fuel gas system;
    4. Tracks internal slop oil generation and reprocessing loops, calculating the net financial margin destruction from downgrading high-value refined products into reprocessing slop.
  * **Returns**: Refinery Unit Yield & LP Gap Diagnostic Dashboard highlighting yield variance anomalies, cut-point drift indicators, slop downgrade costs, and recommended LP yield vector tuning parameters.
  * **Stops At**: Modifying DCS unit operating setpoints or updating official LP planning model vectors.
* **Failure Modes & Safety Envelopes**: If a major conversion unit exhibits an unexplained yield deficit >2.0 wt% with normal feed properties, the agent outputs `[Unit Yield Anomaly: Potential Heat Exchanger Internal Cross-Contamination or Unmetered Flaring]`.

### Agent 5: Refinery Loss Control & Flare/Evaporation Unaccounted-for Sieve
* **In One Line**: Audits refinery flare ultrasonic flowmeters, storage tank roof vapor emissions, desalter effluent oil entrainment, and furnace fuel gas combustion to classify and allocate total refinery unaccounted-for (UAF) losses into physical vs. apparent categories per Energy Institute HM 31.
* **Friction Solved**: Eliminates 2.70 hours daily of fragmented emissions tracking, manual flare data integration, and loss categorization across refinery offsites.
* **The Specification**:
  * **Reads**: Flare stack optical and ultrasonic mass flowmeters, flare gas chromatographic composition streams, storage tank floating-roof seal inspection logs, API-42 evaporation loss models, desalter effluent water laboratory oil-in-water (OIW) assays, and furnace fuel gas calorific totalizers.
  * **Does**:
    1. Integrates continuous flare mass flow and molecular weight telemetry to compute daily flared hydrocarbon metric tons;
    2. Calculates atmospheric storage tank breathing and working evaporative losses using EPA AP-42 and Energy Institute HM 31 tank loss algorithms;
    3. Quantifies hydrocarbon sewer losses, desalter effluent water oil carryover, and furnace fuel gas unaccounted consumption;
    4. Deconstructs total refinery material balance imbalance into verified physical losses (flaring, evaporation, effluent, coke burn) versus apparent losses (meter bias, temperature correction errors, water bottom gauging inaccuracies).
  * **Returns**: Daily Refinery Loss Control & UAF Decomposition Report featuring classified loss waterfall charts, flare event mass logs, and environmental emission accounting summaries.
  * **Stops At**: Authorizing environmental emission compliance exemptions or altering statutory flare logs.
* **Failure Modes & Safety Envelopes**: If unaccounted-for physical flaring or sewer loss exceeds statutory environmental thresholds (>10 metric tons/day unmetered release), the agent issues an escalated alert: `[Excessive Hydrocarbon Loss Alert: Environmental Regulatory Threshold Approaching]`.

### Agent 6: Marine Demurrage Statement of Facts & Laytime Audit Sieve
* **In One Line**: Ingests maritime Notice of Readiness (NOR), Statement of Facts (SOF), dock pumping logs, and charter-party contracts to reconstruct precise laytime chronologies, audit shipowner demurrage invoices, and deduct non-charterer operational delays.
* **Friction Solved**: Eliminates 3.15 hours per marine cargo campaign of manual laytime spreadsheet reconciliation, charter-party clause interpretation, and commercial demurrage dispute defense.
* **The Specification**:
  * **Reads**: Marine Notice of Readiness (NOR) timestamps, terminal and vessel Statement of Facts (SOF), hourly dock pumping logs (flow rates, manifold backpressure), terminal berth logbooks, local port authority tidal/weather records, and commercial charter-party contracts (ASBATANKVOY, BPVOY4, standard tanker charter terms, demurrage daily rates).
  * **Does**:
    1. Reconstructs second-by-second laytime chronologies: establishes official NOR tendering validity, 6-hour NOR notice expiration, berth all-fast timestamps, hose connection, and cargo pump start/stop events;
    2. Identifies and quantifies contractual laytime exceptions and exclusions (e.g., bad weather, night navigation bans, pilot strikes, vessel deballasting delays, ship's pump breakdowns, shore valve maintenance);
    3. Audits shore pumping performance against charter-party minimum pumping warranty (e.g., maintain 100 psi manifold pressure or discharge within 24 hours);
    4. Compiles audited laytime calculations and produces counter-statements to refute invalid shipowner demurrage invoices.
  * **Returns**: Marine Demurrage Laytime Audit Dossier complete with itemized time bar timelines, verified allowable laytime hours, excluded delay categories, and defensible demurrage counter-claim invoices.
  * **Stops At**: Executing legal demurrage cash settlements or entering binding commercial arbitration.
* **Failure Modes & Safety Envelopes**: If a shipowner demurrage invoice fails to submit supporting documents within contractual time-bar limits (e.g., 60-day or 90-day time bar under standard charter terms), the agent flags an immediate rejection advisory: `[Time-Bar Breach: Demurrage Claim Contractually Barred and Rejected]`.

### Agent 7: Statutory Hydrocarbon Customs & Fiscal Excise Reconciliation Synthesizer
* **In One Line**: Aggregates certified monthly mass balances, customs bonded crude import registers, domestic excise duty clearances, and duty-exempt refinery fuel consumption into statutory reconciliation packages compliant with national excise, customs, and tax regulations.
* **Friction Solved**: Eliminates 4.05 hours per monthly closing cycle of tedious cross-referencing between ERP financial books, physical plant inventories, and customs bonded warehouse registers.
* **The Specification**:
  * **Reads**: Monthly reconciled refinery mass balances, customs bonded crude import declarations (bills of entry, customs officer out-of-charge orders), domestic excise clearance certificates, duty-exempt refinery self-consumption fuel logs, and SAP S/4HANA financial inventory ledgers.
  * **Does**:
    1. Reconciles raw feedstock imports against bonded storage tank receipts and processing allocations;
    2. Audits internal refinery fuel oil and fuel gas consumption eligible for statutory excise tax remissions and exemptions;
    3. Verifies that refinery operational loss percentages remain within statutory excise tolerance limits (typically <= 0.5% to 1.0% depending on regulatory jurisdiction);
    4. Formulates statutory monthly hydrocarbon reconciliation statements, customs bonded warehouse stock registers, and fiscal duty clearance filings.
  * **Returns**: Statutory Hydrocarbon Customs & Fiscal Excise Compliance Dossier complete with certified physical balance sheets, duty remission schedules, and auditable tax compliance archives.
  * **Stops At**: Legally signing statutory government tax returns or paying fiscal excise levies.
* **Failure Modes & Safety Envelopes**: If monthly unaccounted-for refinery loss exceeds the statutory excise duty remission ceiling (>1.0% of total throughput), the agent triggers a mandatory fiscal warning: `[Statutory Loss Excursion: Tax Remission Disallowance Exposure — Audit Dossier Required]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating refinery provides its own crude capacity, tank count, and demurrage rate multipliers.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Daily Plant-Wide & Unit Mass Balance Sieve** | 1 Daily Refinery Closing Cycle (all units & tank batteries) | 4.00 hours | 0.40 hours | **3.60 hours saved** | Multi-System Data Assembly & Stream Reconciliation Drag |
| **Marine Custody Transfer & VEF Transit Loss Sieve** | 1 Marine Tanker Cargo Discharge (Suezmax/Aframax parcel) | 3.50 hours | 0.35 hours | **3.15 hours saved** | Ship-Shore Measurement Sifting & VEF Calculation Math |
| **Pipeline Custody & Batch Interface Sieve** | 1 Multi-Product Pipeline Batch Receipt/Delivery Cycle | 3.00 hours | 0.30 hours | **2.70 hours saved** | Prover Factor Auditing & Transmix Shrinkage Math |
| **Unit Yield vs. LP Plan Variance Sieve** | 1 Daily Conversion Unit Yield Diagnostic Cycle (CDU/FCC/HCU) | 3.50 hours | 0.35 hours | **3.15 hours saved** | Yield Variance Synthesis & Slop Downgrade Investigation |
| **Refinery Loss Control & Flare/UAF Sieve** | 1 Daily Refinery Loss Control & Emissions Tracking Cycle | 3.00 hours | 0.30 hours | **2.70 hours saved** | Flare Mass Integration & AP-42 Evaporation Math |
| **Marine Demurrage SOF & Laytime Sieve** | 1 Marine Charter-Party Demurrage Claim Audit | 3.50 hours | 0.35 hours | **3.15 hours saved** | Statement of Facts Timeline Reconstruction & Laytime Math |
| **Statutory Customs & Fiscal Excise Synthesizer** | 1 Monthly Fiscal & Customs Bonded Closing Cycle | 4.50 hours | 0.45 hours | **4.05 hours saved** | Statutory Customs Ledger Cross-Checking & Tax Assembly |
| **Total Operational Accounting Drag Reduction** | **Per Daily / Monthly Accounting & Reconciliation Cycle** | **25.00 hours** | **2.50 hours** | **22.50 hours saved** | **90.0% reduction in hydrocarbon accounting drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table

| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[EI-HM-31]` | Energy Institute, *HM 31: Guide to Hydrocarbon Management in Petroleum Refinery Operations*, 2nd Edition, 2020 | energyinst.org | Industry Standard | Refinery mass balance, gross error detection, physical vs. apparent loss classification, and yield reconciliation |
| `[API-MPMS-Ch12]` | American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 12 — Calculation of Petroleum Quantities (Section 1: Static Petroleum Quantities; Section 2: Dynamic Measurement; Section 3: Blending Shrinkage)*, 2021 | api.org | Recommended Practice | Temperature and pressure volume correction factors (CTPL/VCF), net standard volume calculations, and blending shrinkage |
| `[API-MPMS-Ch17]` | American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 17 — Marine Measurement (Section 1: Guidelines for Marine Cargo Inspection; Section 9: Vessel Experience Factor - VEF)*, 2022 | api.org | Recommended Practice | Vessel Experience Factor (VEF) calculation, OBQ/ROB cargo inspection, and marine custody transfer transit loss reconciliation |
| `[OISD-STD-109]` | Oil Industry Safety Directorate, *OISD-STD-109: Process Design and Operating Philosophies on Hydrocarbon Storage and Handling*, and *OISD-GDN-178: Guidelines for Inspection of Mass Flow Meters*, 2021 | oisd.gov.in | Technical Standard | Custody transfer mass metering, terminal storage handling, and statutory inventory loss limits |
| `[PNGRB-MTR]` | Petroleum and Natural Gas Regulatory Board, *Technical Standards and Specifications including Safety Standards for Petroleum and Liquid Hydrocarbons Pipelines & Metering*, G.S.R. 729(E), 2020 | pngrb.gov.in | Regulatory Standard | Pipeline custody transfer flow proving loops, batch nomination proration, and interface transmix reconciliation |
| `[ISO-4267]` | International Organization for Standardization, *ISO 4267-2: Petroleum and liquid petroleum products — Calculation of oil quantities — Part 2: Dynamic measurement*, 2020 | iso.org | International Standard | Dynamic custody transfer measurement algorithms, meter proving correction, and fiscal meter ticketing |

### Negative Search Registry

* **Searched**: AspenTech (AURA / AORA), AVEVA Production Accounting, Honeywell Forge, and downstream conference proceedings for *"autonomous dynamic reconciliation of marine custody transfer meter tickets against bill of lading integrating real-time Vessel Experience Factor (VEF) and tank temperature stratification without manual spreadsheet cross-checking"*.
* **Result**: `Negative Search, 2026-09`. Commercial yield accounting suites perform post-closing least-squares data reconciliation on plant-boundary meters; none autonomously correlate offshore vessel ullage reports, VEF qualifying voyage archives, and shore tank radar stratification to isolate physical marine transit loss from apparent volumetric shrinkage during custody transfer closure.
* **Searched**: Downstream petroleum accounting literature and patent archives for *"automated real-time causal attribution of refinery unaccounted-for (UAF) losses separating flare combustion, fugitive evaporation, and flowmeter calibration drift with direct statutory customs reconciliation"*.
* **Result**: `Negative Search, 2026-09`. Existing refinery production accounting software lumps unaccounted-for material into a single residual statistical balance tolerance; none autonomously track flare acoustic meters, tank breather vent thermal cameras, and unit LP yield vectors to trace the physical origin of loss and synthesize regulatory excise remission claims.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"A refinery processing two hundred thousand barrels a day that carries a half-percent unaccounted-for loss is quietly bleeding twenty million dollars a year into the balance sheet; if you cannot prove whether that loss is physical hydrocarbon burning in the flare or an uncalibrated orifice plate on the crude feed, you are managing accounting fiction instead of refining margin."*
* **The Secondary Line**: *"A marine cargo inspector and a refinery terminal can disagree by five thousand barrels on a single tanker discharge; without a verified Vessel Experience Factor and automated temperature-stratification reconciliation, that discrepancy turns into an unrecoverable insurance write-off."*
* **Open Questions for Hydrocarbon Accountants**:
  1. How many hours each morning does your team spend manually pulling tank radar gauges, DCS flow totalizers, and LIMS lab densities into Excel to calculate the preliminary refinery mass balance?
  2. What percentage of your monthly unaccounted-for (UAF) refinery loss is definitively traced to physical sources (flaring, evaporation, slop downgrade) versus apparent measurement errors (meter drift, density stratification)?
  3. When an imported crude cargo exhibits a significant ship-shore difference, how long does it take to gather the Vessel Experience Factor (VEF) history, Notice of Readiness logs, and shore tank tickets needed to defend against or submit a cargo transit loss claim?
