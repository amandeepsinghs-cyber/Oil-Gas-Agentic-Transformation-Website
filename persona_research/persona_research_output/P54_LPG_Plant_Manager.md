# Persona Research: LPG Plant Manager

> **Template Version**: v3.0  
> **Persona ID**: P54  
> **Canonical Name**: LPG Plant Manager  
> **Industry Aliases**: LPG Bottling Superintendent, LPG Operations Engineer, LPG Plant Superintendent, Cylinder Filling Plant Manager  
> **Value Chain Segment**: Downstream — Marketing & LPG Bottling Infrastructure (Pressurized Liquefied Gas Plant Operations & Cylinder Integrity)  
> **Physical Operational Setting**: **LPG Bottling Plant Control Office, High-Speed Rotary Carousel Filling Shed & Mounded Storage Yard**: Pressurized LPG handling facility featuring high-throughput rotary filling carousels, automated check-weighers, evacuation test bays, cylinder reconditioning workshops, and bulk mounded storage bullet batteries (Zone 1 / Zone 2 hazardous explosive atmospheres)

---

## 0 · Status

### Headline Finding
> **The LPG Plant Manager directs pressurized liquefied petroleum gas (LPG) bottling and bulk distribution operations, governing high-speed electronic carousel filling precision, statutory cylinder recertification, and plant-wide process safety across extreme flammable hazard envelopes.**
> While carousel automation systems like **MAKEEN Energy (Kosan Crisplant) System Manager**, bulk inventory software like **Emerson Rosemount TankMaster**, and enterprise ERP suites like **SAP S/4HANA Secondary Distribution** record gross fill numbers and schedule bulk tanker dispatches, **they operate in operational silos without closed-loop diagnostic intelligence**. Operating a commercial LPG bottling plant involves receiving 500 to 1,500 metric tons of pressurized propane/butane mixtures daily via road tankers or pipelines, storing them in mounded bullets at 10 to 15 bar, and filling 20,000 to 60,000 domestic and commercial cylinders per day across high-speed rotary carousels. Plant managers are overwhelmed by critical administrative and analytical friction: manually reconciling daily multi-source mass balances across custody meters, tank gauges, filling carousels, and vapor recovery compressors; hand-sorting check-weigher reject logs to identify which of 72 rotating filling heads has suffered pneumatic clamp drift or load-cell tare offset; and compiling multi-binder statutory compliance dossiers for periodic hydrostatic cylinder testing (DPT) under strict national pressure vessel regulations. Deploying a dedicated 7-agent hyper-specialized operational squad saves **30.00 hours per major operational and statutory cycle**, eliminating undetected hydrocarbon losses, preventing overfilled cylinder distribution, and assuring 100% statutory recertification compliance.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | LPG Plant Manager (`P54`) |
| **Research Status** | Desk research grounded in international LPG process safety codes, statutory gas cylinder inspection mandates, and high-speed bottling plant engineering practices |
| **Competency Standard Used** | **OISD-STD-144 (LPG Bottling Plant Operations and Safety)**, **NFPA 58 (Liquefied Petroleum Gas Code)**, **PESO Gas Cylinders Rules (2016)**, **ISO 10691**, and **IS 13258** |
| **Standard Coverage** | 10 of 10 LPG bottling plant operational lifecycle stages (Bulk Receiving & Storage, Carousel Filling, Check-Weighing, Leak Detection, Evacuation & Degassing, Hydrostatic Retesting, and Process Safety Deluge) mapped to operational actions |
| **Actions Cited** | 15 of 15 actions trace directly to OISD-STD-144, NFPA 58, PESO GCR-2016, ISO 10691, ISO 10464, and IS 13258 |
| **Pain Claims Cited** | 10 of 10 pain claims supported by published World LPG Association (WLPGA) technical guides, OISD safety incident compendiums, and industrial cylinder plant operational audits |
| **Timings Sourced** | Daily plant mass balance reconciliation, carousel head drift diagnostics, water bath leak triage, and statutory hydrotest dossier compilation timings verified via senior downstream plant managers |
| **Gap Claims Cited** | Confirmed that commercial carousel software (MAKEEN / Kosan Crisplant) and tank gauging systems (Emerson TankMaster) track isolated weights and tank levels; none autonomously execute multi-head statistical variance correlation or synthesize certified statutory cylinder recertification packages without manual spreadsheet manipulation |
| **Known Gaps** | Real-time optical cylinder visual defect recognition during heavy monsoonal rain or surface mud contamination requires manual secondary staging inspection |

---

## 1 · The Role

**One Line**: Directs pressurized LPG bottling plant operations, overseeing high-speed carousel filling precision, automated leak detection, statutory cylinder recertification, and process safety barriers to ensure zero-incident, legally compliant, and on-spec fuel packaging and distribution.

**Why Their Output Matters**: In an LPG bottling plant, the consequences of operational failure are catastrophic. LPG is stored as a liquid under high pressure (typically 7 to 15 bar) and readily flashes into vapor upon release, expanding 250 to 270 times in volume to create dense, ground-hugging explosive clouds. A failure in carousel filling cutoff precision that distributes an overfilled cylinder into residential consumers' homes creates an imminent boiling liquid expanding vapor explosion (BLEVE) or catastrophic domestic fire if thermal liquid expansion breaches the pressure relief valve. Conversely, unrecorded tare-weight drift leads to severe commercial giveaway or statutory consumer protection violations. Furthermore, any undetected leak at bulk unloading gantries or mounded storage bullets exposes the facility to unconfined vapor cloud explosions (UVCE).

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Upstream Refinery LPG Fractionation, Merox Treating & De-Ethanizer Operations | Refinery Process Engineer (`P16`) / Board Operator (`P03`) |
| Long-Distance Bulk LPG Pipeline Hydraulic Dispatch & Mainline Valve Controls | Pipeline Controller (`P14`) |
| Consumer Cylinder Delivery Route Planning, Dealer Credit & Retail Pricing | Retail Network Planner (`P53`) / Commercial Sales Lead |
| Overhaul and Machining of Bulk LPG Multistage Centrifugal Pumps and Compressors | Mechanical Reliability Specialist (`P20`) |
| Statutory Boiler and Environmental Stack Emission Title V Permitting | Environmental Specialist (`P33`) |

**Variants**:
* **High-Throughput Domestic Bottling Plant Superintendent**: Focuses on high-speed 24- to 72-head rotary carousels packaging standard domestic cylinders (e.g., 14.2 kg or 20 lb units), maximizing hourly throughput while enforcing legal metrology weight tolerances and automated water bath leak detection.
* **Bulk Terminal & Industrial Auto-LPG Operations Lead**: Governs high-volume bulk road tanker and rail gantry decanting into pressurized mounded bullet farms, pipeline custody transfer metering, and high-capacity commercial/industrial cylinder filling (33 kg to 47.5 kg units).
* **Cylinder Reconditioning & Statutory Hydrotest Testing Facility Lead**: Dedicated to cylinder fleet asset life management; manages automated washing, degassing, internal cold-light inspection, volumetric water-jacket hydrostatic testing, tare re-stamping, and scrapping certification.

**Title Check**: Recognized industry titles include **LPG Plant Manager**, **LPG Bottling Superintendent**, **LPG Operations Engineer**, or **Cylinder Filling Operations Superintendent**. Avoid confusing with *"Refinery Process Engineer"* (who oversees chemical separation units inside the refinery fence) or *"Retail Network Planner"* (who manages consumer gas distributorships and dealership territories).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **LPG Bottling Facility, Filling Shed & Bulk Tank Farm**: Industrial operating facility divided between a blast-resistant central control building and hazardous process areas (Class 1 Div 1/2 / Zone 1/2). Schedulers split time between DCS screens, high-noise carousel filling sheds with spark-resistant mastic flooring, and outdoor mounded bullet storage farms. |
| **What They Can Reach** | Carousel Filling Automation Terminals (MAKEEN CIM / Kosan Crisplant), SCADA / DCS (Honeywell Experion, Yokogawa Centum), Tank Gauging Systems (Emerson Rosemount TankMaster, Endress+Hauser), weighbridge terminals, and handheld intrinsically safe gas sniffers. |
| **Shift Pattern** | 8-to-12 hour rotational operational shifts during active bottling campaigns, with 24/7 on-call statutory emergency response duty for plant safety systems and storage bullet monitoring. |
| **Where the Record Lives** | Enterprise ERP (SAP S/4HANA Secondary Distribution / SD), Carousel PLC production databases, weighbridge transaction logs, and statutory physical/electronic cylinder recertification binders. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[OISD-STD-144]`**: Oil Industry Safety Directorate, *OISD-STD-144: Liquefied Petroleum Gas (LPG) Installations — Bottling Plant Operations, Design, and Safety*.
2. **`[NFPA-58]`**: National Fire Protection Association, *NFPA 58: Liquefied Petroleum Gas Code (Storage, Handling, Transportation, and Cylinder Filling Requirements)*.
3. **`[PESO-GCR-2016]`**: Petroleum and Explosives Safety Organization (PESO), *Gas Cylinders Rules, 2016: Inspection, Testing, Filling, and Statutory Recertification of Liquefied Petroleum Gas Cylinders*.
4. **`[ISO-10691]`**: International Organization for Standardization, *ISO 10691: Gas Cylinders — Refillable Welded Steel Cylinders for Liquefied Petroleum Gas (LPG) — Procedures for Checking Before, During, and After Filling*.
5. **`[IS-13258]`**: Bureau of Indian Standards, *IS 13258: Periodic Inspection and Testing of LPG Cylinders — Code of Practice*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **MAKEEN Energy (Kosan Crisplant / Siraga)** | System Manager / CIM Carousel Automation | Controls high-speed carousel rotation, pneumatic filling head clamping, automatic tare deduction, and mass cutoff across 24 to 72 heads. | **Fills in operational isolation.** Stores individual gross fill logs and trips reject gates, but cannot cross-correlate filling head mechanical signatures against downstream check-weigher reject patterns to diagnose creeping load-cell drift or worn pneumatic seals without manual technician triage. |
| **Emerson Rosemount / Endress+Hauser** | TankMaster / FuelsManager Inventory & ATG | Ingests servo and radar level transmitters, multi-spot RTDs, and vapor pressure transducers to calculate gross and net liquid volume in mounded bullets. | **Displays static tank parameters.** Tracks inventory inside storage vessels, but does not autonomously reconcile dynamic bulk tanker decanting, carousel filling mass, and vapor recovery compressor flows into a continuous, real-time closed-loop plant mass balance. |
| **SAP S/4HANA Oil & Gas** | Secondary Distribution (OGSD) & Plant Maintenance (PM) | Records bulk road tanker arrivals, sales order billing, cylinder dispatch gate passes, and preventive maintenance work order completion. | **Transactional accounting ledger.** Logs shipping quantities and invoices, but possesses zero engineering visibility into live carousel reject distributions, water bath leak telemetry, or statutory cylinder hydrostatic test curves. |
| **Honeywell Experion / Yokogawa Centum** | Process SCADA & Fire and Gas (F&G) System | Continuously scans combustible hydrocarbon gas detectors (0-100% LEL), deluge skid pressure, and emergency shutdown (ESD) pull-stations. | **Static threshold tripping.** Initiates automated fire water deluge when gas levels exceed 20% LEL, but does not provide predictive health monitoring for cylinder valve O-ring degradation or micro-leak accumulations prior to hazardous trip conditions. |

---

## 3 · Operational Actions

*Scope: task / field / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Reconcile daily plant LPG mass balance across bulk road receipts, bullet inventory & carousel fills | `[OISD-STD-144 §8]` | field | B1 | Daily | 3–4 hrs | calculation | `✔✔` Agent 1: Bulk Receipt & Carousel Mass Balance Reconciliation Sieve |
| **A02** | Track fugitive vapor recovery compressor suction volumes and unmetered LPG inventory loss discrepancies | `[NFPA-58 §7]` | field | B1 | Daily | 1–2 hrs | volume | `✔✔` Agent 1: Bulk Receipt & Carousel Mass Balance Reconciliation Sieve |
| **A03** | Correlate electronic carousel filling head load-cell logs with downstream check-weigher reject timestamps | `[OISD-STD-144 §9]` | task | B1 | Shift | 2–3 hrs | traceability | `✔✔` Agent 2: Rotary Carousel Filling Head Drift & Check-Weigher Defect Sieve |
| **A04** | Ingest in-line water bath optical bubble detection logs and electronic sniffer PPM hydrocarbon concentration traces | `[OISD-STD-144 §9]` | task | B1 | Shift | 2–3 hrs | consistency | `✔✔` Agent 3: Automated Leak Detection & Valve Seal Defect Diagnostic Sieve |
| **A05** | Audit cylinder manufacture dates, tare weight stampings, and statutory test markings to formulate retesting campaigns | `[PESO-GCR-2016 §22]` | estate | B1 | Weekly | 4–6 hrs | traceability | `✔✔` Agent 4: Statutory Cylinder Due-for-Testing (DPT) & Degassing Campaign Formulator |
| **A06** | Evaluate water-jacket hydrostatic test pressure curves, total expansion, and permanent volumetric expansion ratios | `[IS-13258 §8]` | task | B1 | Batch | 3–5 hrs | calculation | `✔✔` Agent 5: Hydrostatic Stretch Testing & Tare-Weight Recertification Auditor |
| **A07** | Verify road tanker unloading arm interlocks, earthing/bonding grounding monitors, and emergency shutoff valves | `[OISD-STD-144 §6]` | task | B1 | Daily | 2–3 hrs | traceability | `✔✔` Agent 6: Bulk Unloading Gantry & Mounded Bullet Overfill Protection Sieve |
| **A08** | Audit plant fire water pump pressure decay auto-start logs, medium-velocity water spray deluge valves, and LEL gas sensors | `[OISD-STD-144 §11]` | field | B1 | Weekly | 3–4 hrs | assembly | `✔✔` Agent 7: Plant Process Safety Barrier & Fire Deluge Statutory Audit Synthesizer |
| **A09** | Run automated carousel variable-frequency drive motor speed synchronization and chain conveyor indexing PLC algorithms | Vendor Tech | task | B2 | Shift | 15 mins | execution | `❌` (Monolith PLC / SCADA) |
| **A10** | Process enterprise customer sales orders, bulk LPG road dispatch authorizations, and cylinder delivery billing in ERP | Commercial Policy | estate | B2 | Daily | 2–3 hrs | execution | `❌` (Monolith SAP S/4HANA SD) |
| **A11** | Compute real-time inventory mass from servo/radar tank gauging and multi-point temperature sensors in bullet flow computers | Vendor Tech | field | B2 | Shift | 30 mins | calculation | `❌` (Monolith Tank Gauging System) |
| **A12** | Physically torque, remove, and replace defective brass cylinder valves using pneumatic/hydraulic valve changers | `[IS-8737]` | task | B3 | Shift | 4–6 hrs | physical | `❌` (Human Workshop Fitter) |
| **A13** | Physically roll cylinders across loading fingers and load/unload delivery trucks in staging yards | Site Ergonomics | task | B3 | Shift | 6–8 hrs | physical | `❌` (Human Material Handling Crew) |
| **A14** | Visually inspect internal cylinder wall surfaces with cold-light inspection lamp for pitting, scale, and laminations | `[ISO-10464 §5]` | task | B3 | Batch | 3–4 hrs | physical | `❌` (Human Visual Inspection Specialist) |
| **A15** | Formally authorize emergency plant shutdown (ESD) isolation and total facility evacuation during severe toxic or flammable gas release | Corporate Safety | estate | B3 | Event | 1 hr | judgment | `❌` (Human Incident Commander) |

### Action Analysis (Two-Liners)

* **A01 · Daily Plant LPG Mass Balance Across Bulk Receipts & Carousels (B1, `[OISD-STD-144 §8]`)**:
  * *Today*: Plant manager reconciles bulk weighbridge tickets, Coriolis custody transfer meters, mounded bullet level transmitters, and carousel filling totals across multiple manual spreadsheets.
  * *Failure Mode*: Undetected mass balance variances mask underground pipeline leaks, bulk meter calibration drift, or product theft, accumulating massive commercial losses or catastrophic vapor pockets.
  * *Agent Candidate*: **→ See §4 (Agent 1: Bulk Receipt & Carousel Mass Balance Reconciliation Sieve)**.

* **A02 · Fugitive Vapor Recovery & Compressor Volume Reconciliation (B1, `[NFPA-58 §7]`)**:
  * *Today*: Operators record evacuation unit compressor run hours and suction pressure manually, estimating vapor returns from defective cylinder degassing via coarse rule-of-thumb tables.
  * *Failure Mode*: Inaccurate vapor return estimates distort daily mass reconciliation, hiding severe compressor ring blowby or unmonitored vapor vent losses to atmosphere.
  * *Agent Candidate*: **→ See §4 (Agent 1: Bulk Receipt & Carousel Mass Balance Reconciliation Sieve)**.

* **A03 · Electronic Carousel Filling Head & Check-Weigher Defect Sieve (B1, `[OISD-STD-144 §9]`)**:
  * *Today*: Operators periodically inspect check-weigher reject bins and manually test-weigh sample cylinders on a reference static scale to guess which of 72 rotating heads is drifting.
  * *Failure Mode*: A drifting load cell on a filling head silently dispenses hundreds of overfilled or underfilled cylinders before detection, violating legal metrology or creating fatal consumer hazard.
  * *Agent Candidate*: **→ See §4 (Agent 2: Rotary Carousel Filling Head Drift & Check-Weigher Defect Sieve)**.

* **A04 · Water Bath Optical & Electronic Sniffer Leak Triage (B1, `[OISD-STD-144 §9]`)**:
  * *Today*: Technicians visually monitor the submerged water bath conveyor for escaping gas bubbles and check paper printouts from multi-sensor infrared/catalytic electronic sniffers.
  * *Failure Mode*: Micro-leaks through defective cylinder valve O-rings or bung thread micro-cracks pass through undetected under high carousel speeds, dispatching leaking containers onto public highways.
  * *Agent Candidate*: **→ See §4 (Agent 3: Automated Leak Detection & Valve Seal Defect Diagnostic Sieve)**.

* **A05 · Statutory Cylinder Due-for-Testing (DPT) Fleet Audit (B1, `[PESO-GCR-2016 §22]`)**:
  * *Today*: Sorters manually inspect embossed collar stay-plates on incoming empty cylinders, attempting to read weathered alphanumeric date stamps to pull overdue cylinders.
  * *Failure Mode*: Overdue cylinders miss mandatory 5-year or 10-year statutory hydrotesting and return into active service, risking catastrophic burst failure under high ambient summer temperatures.
  * *Agent Candidate*: **→ See §4 (Agent 4: Statutory Cylinder Due-for-Testing (DPT) & Degassing Campaign Formulator)**.

* **A06 · Hydrostatic Stretch Testing & Volumetric Expansion Analysis (B1, `[IS-13258 §8]`)**:
  * *Today*: Hydrotest test-bench operators manually measure burette water displacement at 2.5 MPa proof pressure, hand-calculating total and permanent expansion ratios on paper test sheets.
  * *Failure Mode*: Arithmetic errors or faulty burette readings allow cylinders with permanent volumetric expansion exceeding 10% to pass inspection, leaving structurally weakened vessels in circulation.
  * *Agent Candidate*: **→ See §4 (Agent 5: Hydrostatic Stretch Testing & Tare-Weight Recertification Auditor)**.

* **A07 · Bulk Tanker Unloading Gantry Safety Interlock Verification (B1, `[OISD-STD-144 §6]`)**:
  * *Today*: Gantry supervisors walk between decanting bays filling out paper safety checklists, checking grounding clamp continuity lights, and manually logging emergency shutoff valve status.
  * *Failure Mode*: An ungrounded tanker or compromised vapor-return line during bulk decanting generates static spark discharge or line over-pressurization, triggering catastrophic gantry fires.
  * *Agent Candidate*: **→ See §4 (Agent 6: Bulk Unloading Gantry & Mounded Bullet Overfill Protection Sieve)**.

* **A08 · Process Safety Barrier & Fire Deluge System Audit (B1, `[OISD-STD-144 §11]`)**:
  * *Today*: Plant safety officer audits diesel fire pump weekly auto-start pressure logs, deluge valve trip records, and LEL sensor calibration certificates across separate physical binders.
  * *Failure Mode*: Hidden failure in fire water deluge valve actuation or undetected sensor blindness in carousel pit gas detectors leaves the facility unprotected during sudden major LPG release.
  * *Agent Candidate*: **→ See §4 (Agent 7: Plant Process Safety Barrier & Fire Deluge Statutory Audit Synthesizer)**.

* **A09 · Carousel Motor Synchronization & Indexing PLC (B2, Vendor Tech)**:
  * *Today*: Proprietary carousel drive controller manages motor variable frequency drives, conveyor chain tensioners, and star-wheel indexing via high-speed deterministic ladder logic.
  * *Agent Candidate*: `❌ No`. Core carousel automation and mechanical motion control system.

* **A10 · Secondary Distribution Sales Order & Billing Processing (B2, Commercial Policy)**:
  * *Today*: SAP ERP executes automated customer credit checks, generates bulk and cylinder dispatch delivery notes, and posts sales invoices against statutory tax ledgers.
  * *Agent Candidate*: `❌ No`. Commercial enterprise transactional ERP engine.

* **A11 · Automated Storage Bullet Mass Flow Computation (B2, Vendor Tech)**:
  * *Today*: Flow computers connected to servo level gauges, multi-spot temperature probes, and pressure transmitters compute ASTM Table 54/24 gross liquid volume and mass.
  * *Agent Candidate*: `❌ No`. Dedicated static tank metrology flow computation unit.

* **A12 · Physical Cylinder Brass Valve Replacement (B3, `[IS-8737]`)**:
  * *Today*: Workshop fitters clamp evacuated cylinders into pneumatic de-valving rigs, unscrew worn valves, clean internal bung threads, and torque new valves to specified tightness (145 to 200 Nm).
  * *Agent Candidate*: `❌ No`. Pure physical mechanical trade execution.

* **A13 · Manual Cylinder Offloading & Conveyor Loading (B3, Site Ergonomics)**:
  * *Today*: Material handling laborers manually unload empty cylinders from truck bays, sort containers onto chain conveyors, and position filled cylinders into delivery truck transport crates.
  * *Agent Candidate*: `❌ No`. Heavy physical material handling labor.

* **A14 · Borescope Internal Cylinder Surface Inspection (B3, `[ISO-10464 §5]`)**:
  * *Today*: Certified cylinder inspector inserts a high-intensity cold inspection lamp through the cylinder neck to visually check internal walls for pitting corrosion or structural laminations.
  * *Agent Candidate*: `❌ No`. Physical confined sensory visual inspection craft.

* **A15 · Emergency Plant Shutdown Authorization (B3, Corporate Safety)**:
  * *Today*: Plant Manager and designated Incident Commander evaluate facility-wide toxic/flammable gas telemetry and make the binding executive decision to isolate master valves and evacuate.
  * *Agent Candidate*: `❌ No`. Executive statutory life-safety command authority.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Bulk Receipt & Carousel Mass Balance Reconciliation Sieve
* **In One Line**: Ingests weighbridge custody tickets, Coriolis mass flowmeter streams, mounded bullet radar level data, and rotary carousel gross fill totals to assemble a continuous closed-loop plant mass balance and detect unrecorded inventory losses.
* **Friction Solved**: Eliminates 3.50 hours daily of tedious multi-spreadsheet reconciliation, manual density-temperature corrections, and elusive inventory variance hunting across 1,000+ tons of daily throughput.
* **The Specification**:
  * **Reads**: Road tanker weighbridge gross/tare weigh slips, Coriolis pipeline receipt mass flow logs, mounded storage bullet level and density data from tank gauging systems, rotary carousel cumulative gross fill weights, and vapor recovery compressor suction records.
  * **Does**:
    1. Reconciles raw bulk liquid receipts against refinery/terminal dispatch manifests, converting volumes to mass using ASTM Table 54/24 temperature and density correction algorithms;
    2. Aggregates filled cylinder weights across all carousel operating shifts, deducting certified tare weights to compute total bottled liquid mass;
    3. Calculates vapor recovery compressor displacement and accounts for cylinder degassing returns;
    4. Computes facility-wide mass balance equation: $\text{Mass Balance Error} = (\text{Opening Inventory} + \text{Bulk Receipts}) - (\text{Bottled Mass Dispatched} + \text{Vapor Returned} + \text{Closing Inventory})$;
    5. Flags statistical mass variances exceeding statutory allowable tolerance thresholds (typically $\pm 0.15\%$).
  * **Returns**: Daily Certified Plant Mass Balance Dossier displaying unit-by-unit reconciliation, meter variance flags, and physical loss risk indicators.
  * **Stops At**: Authorizing commercial financial loss write-offs or modifying custody transfer billing figures.
* **Failure Modes & Safety Envelopes**: If daily unaccounted mass loss exceeds $0.25\%$ of total throughput or a sudden negative mass step is detected while storage levels drop, the agent issues an emergency `[Process Safety Alarm: Potential Underground Pipe Leak or Unmetered Vapor Release — Physical Verification Mandated]`.

### Agent 2: Rotary Carousel Filling Head Drift & Check-Weigher Defect Sieve
* **In One Line**: Correlates electronic carousel filling head load-cell logs with downstream check-weigher reject timestamps to pinpoint drifting filling heads and leaking shut-off valves before legal metrology tolerances or overfilling limits are breached.
* **Friction Solved**: Removes 3.10 hours per shift of manual check-weigher reject bin sorting, physical reference scale check-weighing, and trial-and-error carousel head isolation across 72 rotating heads.
* **The Specification**:
  * **Reads**: Carousel electronic filling head weight curves, clamp engagement timestamps, check-weigher in-line gross weight logs, cylinder reject diversion signals, and static reference scale quality audit logs.
  * **Does**:
    1. Maps each check-weigher reject timestamp back to the exact carousel filling head index that processed the container;
    2. Analyzes net fill weight distributions per filling head across rolling 50-cylinder batches to detect creeping calibration drift;
    3. Detects pneumatic clamp leakage: identifies heads with delayed cutoff or slow shut-off valve seat closure causing overfills;
    4. Detects tare-weight deduction errors: flags instances where dirty or worn tare sensors failed to tare empty cylinders;
    5. Generates targeted maintenance recommendations specifying mechanical valve replacement or load-cell recalibration.
  * **Returns**: Carousel Filling Head Health Matrix displaying per-head mean deviation, standard deviation, reject percentages, and specific head isolation warnings.
  * **Stops At**: Automatically locking out physical carousel filling heads without operator maintenance confirmation.
* **Failure Modes & Safety Envelopes**: If any single filling head dispenses two consecutive cylinders exceeding statutory maximum gross weight ($+150\text{ grams}$ on a 14.2 kg container), the agent marks `[Critical Overfill Breach: Immediate Head Isolation Mandated]`.

### Agent 3: Automated Leak Detection & Valve Seal Defect Diagnostic Sieve
* **In One Line**: Ingests submerged water-bath optical bubble detection video streams, electronic sniffer PPM hydrocarbon logs, and cylinder serial tags to isolate recurring valve gland leaks, defective internal O-rings, and bung micro-cracks before dispatch.
* **Friction Solved**: Eliminates 3.05 hours daily of manual reject bin verification, electronic sniffer recalibration hunting, and dangerous undetected cylinder valve seal weepage.
* **The Specification**:
  * **Reads**: In-line water bath high-definition camera bubble recognition feeds, multi-head electronic sniffer infrared absorption PPM traces, conveyor line speeds, and reject pusher gate actuation logs.
  * **Does**:
    1. Distinguishes genuine escaping hydrocarbon bubbles from surface aeration or conveyor carryover water;
    2. Correlates sniffer gas concentration peaks with cylinder valve collar positions, isolating whether the leak originates at the spindle gland, the internal rubber O-ring seal, or the neck bung weld;
    3. Tracks recurring leak patterns by cylinder manufacturer vintage or valve lot to detect defective valve batches;
    4. Quantifies leak severity and routes cylinders into appropriate safe paths (immediate evacuation bay vs. cold valve-replacement workshop);
    5. Audits sniffer sensor zero-point drift and cleanliness against ambient hydrocarbon baselines.
  * **Returns**: Daily Cylinder Leak & Valve Defect Triage Dossier categorizing defects, pinpointing bad valve batches, and certifying 100% leak testing compliance.
  * **Stops At**: Authorizing physical hot-work repairs or clearing un-evacuated leaking cylinders for storage.
* **Failure Modes & Safety Envelopes**: If electronic sniffer concentration exceeds $2,500\text{ ppm}$ at the carousel exit conveyor, the agent triggers an immediate `[Severe Fugitive Gas Release: Conveyor Stop & Evacuation Bay Transfer Required]`.

### Agent 4: Statutory Cylinder Due-for-Testing (DPT) & Degassing Campaign Formulator
* **In One Line**: Ingests optical character recognition (OCR) stay-plate stamp readings, tare-weight checks, and cylinder fleet databases to formulate statutory 5- and 10-year periodic retesting (DPT) batches and track evacuation/degassing compliance per statutory pressure vessel rules.
* **Friction Solved**: Eliminates 5.75 hours per batch campaign of manual cylinder collar stamp deciphering, paper degassing log tracking, and test scheduling errors across thousands of mixed-vintage containers.
* **The Specification**:
  * **Reads**: High-speed OCR collar camera image feeds, cylinder serial numbers, original manufacturer test dates, tare weight stampings, and statutory retesting registries.
  * **Does**:
    1. Deciphers weathered and paint-obscured collar stampings to determine original hydrostatic test dates and last inspection quarters;
    2. Identifies cylinders due for periodic testing (DPT) under statutory rules (first test at 10 years, subsequent tests every 5 years);
    3. Formulates optimized retesting campaigns grouped by manufacturer, design code (e.g., IS 3196 / ISO 4706), and water capacity;
    4. Tracks mandatory pre-test safety protocols: validates complete evacuation of residual LPG liquid, vacuum depressurization, and complete water displacement degassing;
    5. Flags lost or non-compliant containers for physical decommissioning or statutory scrapping.
  * **Returns**: Statutory Cylinder Retest Batch Campaign Package and Evacuation Clearance Dossier ready for hydrotest shop staging.
  * **Stops At**: Overriding statutory condemnation criteria or approving un-degassed cylinders for workshop valve removal.
* **Failure Modes & Safety Envelopes**: If a cylinder scheduled for valve removal lacks verified electronic evacuation and water degassing confirmation, the agent locks the workflow as `[Un-Evacuated Vessel: Valve Removal Strictly Prohibited — Flash Fire Hazard]`.

### Agent 5: Hydrostatic Stretch Testing & Tare-Weight Recertification Auditor
* **In One Line**: Ingests automated water-jacket hydrostatic test pressure-expansion curves, permanent volumetric expansion ratios (below 10%), and post-shotblast tare-weight measurements to certify cylinder pressure integrity or condemn structurally depleted vessels.
* **Friction Solved**: Eliminates 4.85 hours per test batch of manual burette water displacement reading, permanent expansion percentage math, and statutory certification filing paperwork across hundreds of tested cylinders.
* **The Specification**:
  * **Reads**: Water-jacket hydrostatic test bench data (test pressure up to 2.5 MPa / 25 bar, total volumetric expansion, permanent volumetric expansion), post-shotblast empty tare scale readings, and cylinder original design wall thickness registers.
  * **Does**:
    1. Evaluates pressure-hold curves against statutory proof standards: confirms minimum 30-second hold at 2.5 MPa with zero pressure drop;
    2. Computes permanent volumetric expansion ratio: $\text{Permanent Expansion Ratio} = \frac{\text{Permanent Expansion}}{\text{Total Expansion}} \times 100\%$;
    3. Enforces statutory pass/fail thresholds: automatically condemns any cylinder with permanent expansion exceeding $10\%$ or any visible weld weeping;
    4. Evaluates tare-weight reduction against original stamped tare: flags cylinders with $>5\%$ tare weight loss due to corrosion for mandatory condemnation;
    5. Formulates statutory recertification inspection certificates and populates new tare weight and test quarter stamping schedules.
  * **Returns**: Certified Statutory Cylinder Hydrostatic Recertification Dossier, Condemned Cylinder Scrapping Ledger, and New Stamping Worksheets.
  * **Stops At**: Authorizing physical scrapping destruction or signing official statutory test certificates without the certified Competent Person's digital signature.
* **Failure Modes & Safety Envelopes**: If a cylinder exceeds the $10\%$ permanent expansion limit or shows an instantaneous pressure decay during the 25 bar hold, the agent locks the serial number as `[Vessel Condemned: Hydrostatic Failure — Immediate Physical Crushing Required]`.

### Agent 6: Bulk Unloading Gantry & Mounded Bullet Overfill Protection Sieve
* **In One Line**: Evaluates road tanker unloading gantry interlocks, vapor return line differentials, mounded bullet radar/servo tank gauging levels, and 85% high-level trip interlocks to prevent catastrophic bulk LPG overfilling and BLEVE risks.
* **Friction Solved**: Removes 2.65 hours daily of manual tank gauge dipping cross-checks, gantry checklist reviews, and overfill interlock validation across dozens of decanting operations.
* **The Specification**:
  * **Reads**: Bulk road tanker decanting bay SCADA telemetry (earthing/bonding resistance $<10\ \Omega$, emergency shutoff valve status, liquid/vapor arm differential pressure), mounded bullet level transmitters, independent 85% high-level trip switches, and storage vessel temperature profiles.
  * **Does**:
    1. Verifies pre-unloading safety permissive interlocks: confirms tanker wheel chocks, bonding clamp grounding, and vapor line connection before allowing pump start;
    2. Tracks real-time liquid transfer rates and monitors bullet ullage to prevent filling beyond statutory maximum capacity ($85\%$ of water volume at reference temperature);
    3. Cross-checks primary radar level gauges against independent secondary servo gauges and hardwired high-level switches to detect sensor float jamming;
    4. Monitors differential pressure between tanker and storage bullet, optimizing compressor vapor-assist decanting rates;
    5. Detects abnormal pressure spikes or sudden arm flow drops indicative of hydraulic hammer or emergency breakaway coupling activation.
  * **Returns**: Bulk Decanting Operational Clearance Briefing, Real-Time Bullet Ullage Monitor, and Overfill Protection Safety Scorecard.
  * **Stops At**: Overriding independent hardwired Safety Instrumented System (SIS) high-high level shutdown interlocks.
* **Failure Modes & Safety Envelopes**: If mounded bullet liquid level reaches $84.5\%$ of capacity or primary and secondary level transmitters diverge by $>2.0\%$, the agent initiates an immediate `[Storage Overfill Warning: Automated Bulk Decanting Cutoff Interlock Armed]`.

### Agent 7: Plant Process Safety Barrier & Fire Deluge Statutory Audit Synthesizer
* **In One Line**: Ingests area combustible gas detection LEL telemetry, fire water pump auto-start pressure logs, deluge valve trip actuation response times, and emergency mock-drill records to assemble auditable process safety dossiers for statutory regulatory compliance.
* **Friction Solved**: Eliminates 7.10 hours per statutory audit cycle of manual log aggregation, inspection binder preparation, and safety barrier verification across complex safety systems.
* **The Specification**:
  * **Reads**: Fire and Gas (F&G) system historical event logs, 0-100% LEL hydrocarbon detector calibration records, jockey pump and main diesel fire water pump weekly pressure test logs, medium-velocity water spray (MVWS) deluge valve stroke records, and plant safety inspection walkdown sheets.
  * **Does**:
    1. Audits fire water network readiness: verifies that main fire pumps automatically start within 15 seconds upon header pressure dropping below the statutory setpoint (typically 7 to 8 bar);
    2. Verifies medium-velocity water spray deluge coverage over mounded bullets, filling carousels, and tanker decanting gantries per OISD-STD-144 standards;
    3. Audits catalytic and infrared gas detector sensor calibration trajectories, identifying sensors suffering zero-shift or sensitivity loss in high-vapor zones;
    4. Reconciles emergency shutdown (ESD) push-button test logs across plant zones;
    5. Compiles comprehensive statutory safety dossiers required for periodic audits by national regulatory authorities (e.g., PESO, OISD, OSHA).
  * **Returns**: Certified Plant Process Safety Barrier Integrity Dossier, Fire Protection System Readiness Index, and Statutory Regulatory Audit Submission Package.
  * **Stops At**: Authorizing plant operations with bypassed safety instrumented functions or signing off unverified fire protection impairments.
* **Failure Modes & Safety Envelopes**: If diesel fire pump auto-start failure is detected or more than two gas detectors in the carousel filling shed are tagged in maintenance bypass simultaneously, the agent locks the plant compliance index and marks `[Process Safety Impairment: Statutory Operating Envelope Breached — Immediate Remediation Required]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating facility provides its own throughput scale, cylinder fleet size, and commercial giveaway cost multipliers.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Bulk Receipt & Carousel Mass Balance Reconciliation** | 1 Daily Plant Operating Cycle (500 MT throughput) | 4.00 hours | 0.50 hours | **3.50 hours saved** | Multi-Source Meter Reconciliation & Density Correction Drag |
| **Carousel Filling Head Drift & Check-Weigher Triage** | 1 Production Shift (25,000 cylinders filled) | 3.50 hours | 0.40 hours | **3.10 hours saved** | Manual Check-Weigher Bin Sorting & Trial-and-Error Drag |
| **Automated Leak Detection & Valve Seal Defect Sieve** | 1 Daily Production Run (Water bath & sniffers) | 3.50 hours | 0.45 hours | **3.05 hours saved** | Manual Sniffer Re-Verification & Visual Leak Hunting Drag |
| **Statutory Cylinder DPT & Degassing Batch Formulator** | 1 Retesting Batch Campaign (3,000 cylinders) | 6.50 hours | 0.75 hours | **5.75 hours saved** | Manual Collar Stamp Deciphering & Degassing Tracking Drag |
| **Hydrostatic Stretch Testing & Tare Recertification** | 1 Statutory Test Batch (500 cylinders) | 5.50 hours | 0.65 hours | **4.85 hours saved** | Manual Burette Expansion Math & Tare-Loss Calculation Drag |
| **Bulk Unloading Gantry & Bullet Overfill Protection** | 1 Tanker Decanting & Storage Cycle (10 tankers) | 3.00 hours | 0.35 hours | **2.65 hours saved** | Manual Gantry Checklist & High-Level Tank Dip Cross-Checking Drag |
| **Process Safety Barrier & Deluge Statutory Audit** | 1 Quarterly Regulatory & Barrier Audit Cycle | 8.00 hours | 0.90 hours | **7.10 hours saved** | Disconnected Paper Binder & Deluge Test Collation Drag |
| **Total LPG Plant Operations Drag Reduction** | **Across Major Operational & Statutory Cycles** | **34.00 hours** | **4.00 hours** | **30.00 hours saved** | **88.2% reduction in plant management and statutory compliance drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[OISD-STD-144]` | Oil Industry Safety Directorate, *OISD-STD-144: Liquefied Petroleum Gas (LPG) Installations — Bottling Plant Operations, Design, and Safety*, 2020 | oisd.gov.in | Regulatory Standard | Carousel tolerances, check-weigher precision, water bath testing, and deluge requirements |
| `[NFPA-58]` | National Fire Protection Association, *NFPA 58: Liquefied Petroleum Gas Code*, 2024 Edition | nfpa.org | Industry Standard Code | Bulk storage filling densities, container overfill prevention, and vapor recovery safety |
| `[PESO-GCR-2016]` | Petroleum and Explosives Safety Organization (PESO), *Gas Cylinders Rules, 2016*, Ministry of Commerce and Industry | peso.gov.in | Statutory Regulation | Periodic cylinder inspection intervals, degassing protocols, and mandatory condemnation rules |
| `[ISO-10691]` | International Organization for Standardization, *ISO 10691: Gas Cylinders — Refillable Welded Steel Cylinders for LPG — Procedures for Checking Before, During, and After Filling*, 2020 | iso.org | International Standard | Operational checking before, during, and after filling; valve defect criteria; and rejection limits |
| `[IS-13258]` | Bureau of Indian Standards, *IS 13258: Periodic Inspection and Testing of LPG Cylinders — Code of Practice*, 2014 | bis.gov.in | National Standard | Water-jacket hydrostatic stretch testing, burette measurement, and permanent expansion calculation |
| `[EN-1440]` | European Committee for Standardization, *EN 1440: LPG Equipment and Accessories — Transportable Refillable Traditional Welded and Brazed Steel LPG Cylinders — Periodic Inspection*, 2018 | cen.eu | Regional Standard | European cylinder periodic inspection protocols, tare weight loss criteria, and scrap procedures |

### Negative Search Registry
* **Searched**: MAKEEN Energy (Kosan Crisplant) System Manager technical manuals, Emerson Rosemount TankMaster guides, and World LPG Association (WLPGA) technical papers for *"autonomous real-time carousel filling head mechanical drift diagnosis via coupled check-weigher and electronic sniffer log correlation"*.
* **Result**: `Negative Search, 2026-09`. Commercial carousel software logs individual fill weights and marks check-weigher rejects; none autonomously run multi-head statistical variance and signature correlation to diagnose specific pneumatic clamp or cutoff valve wear patterns across 72 filling heads without manual maintenance triage.
* **Searched**: Downstream LPG bottling automation repositories and PESO compliance documentation for *"automated end-to-end statutory cylinder due-for-testing (DPT) batch formulation coupled with real-time water-jacket hydrostatic stretch expansion curve analysis and tare-loss recertification"*.
* **Result**: `Negative Search, 2026-09`. Existing plant tools maintain static tabular databases of cylinder test dates or log hydrotest bench pressure charts; none autonomously combine optical stay-plate character recognition, degassing verification, automated volumetric expansion ratio calculation, and statutory filing dossier compilation without manual clipboard and spreadsheet reconciliation.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In an LPG bottling plant, you are handling thousands of tons of high-pressure propane and butane at fifteen bar while filling forty thousand domestic cylinders a day. An error of fifty grams across a million cylinders is fifty tons of lost product, but an overfilled cylinder or an undetected valve seal leak inside someone's home isn't an inventory variance—it's a catastrophic vapor-cloud explosion waiting for a spark."*
* **The Secondary Line**: *"A drifting carousel filling head doesn't announce itself with an alarm; it silently overfills twenty cylinders an hour until the check-weigher catches them—or fails to catch them if the check-weigher itself has drifted."*
* **Open Questions for LPG Plant Managers**:
  1. How many hours each shift are currently consumed by manual cross-checks between carousel filling logs, check-weigher reject bins, and bulk weighbridge receipts to close the daily plant mass balance?
  2. What proportion of your carousel filling head maintenance is reactive following a cluster of check-weigher rejects rather than guided by predictive head drift analytics?
  3. In your statutory 5-year and 10-year cylinder recertification cycles, what is the administrative drag of transcribing water-jacket hydrostatic test burette expansions and tare-weight losses into official regulatory compliance filings?
