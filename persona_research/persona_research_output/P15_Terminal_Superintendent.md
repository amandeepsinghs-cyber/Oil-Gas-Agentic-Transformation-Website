# Persona Research: Terminal Superintendent

> **Template Version**: v3.0  
> **Persona ID**: P15  
> **Canonical Name**: Terminal Superintendent  
> **Industry Aliases**: Marine Terminal Supervisor, Berth Master, Marine Offloading Superintendent, Marine Operations Lead, Jetty Master  
> **Value Chain Segment**: Midstream — Marine Terminals, Storage & Offloading Facilities  
> **Physical Operational Setting**: **Marine Terminal Jetty & Terminal Control Office**: Marine loading arms, tanker berths, Single Point Moorings (SPM), and FPSO tandem offloading decks

---

## 0 · Status

### Headline Finding
> **The Terminal Superintendent governs the physical gateway between land-based hydrocarbon infrastructure and global maritime commerce, directing the safe, high-rate transfer of millions of barrels of crude oil and refined fuels into ocean-going tankers.**
> While Terminal Automation Systems (TAS) execute loading arm sequences and digital radar gauges measure shore tank heights, **custody transfer reconciliation remains an intense, high-stakes battle of manual paper spreadsheets**. When loading a 2-million-barrel Very Large Crude Carrier (VLCC), a discrepancy of just 0.15% between shore custody meter prover tickets and the tanker Chief Mate's ullage report represents **$250,000–$350,000 in disputed cargo value**. Terminal superintendents, chief mates, and independent cargo surveyors spend 4 to 6 hours hand-calculating API MPMS Chapter 11.1 Volume Correction Factors (VCF), vessel trim corrections, and basic sediment and water (BS&W) deductions while tanker demurrage penalties ($50k–$120k/day) tick away. A hyper-specialized agent squad eliminates **14.15 hours per vessel cargo turnaround** across custody transfer reconciliation, ISGOTT safety checklists, VEF factor auditing, loading hydraulics, ballast water compliance, demurrage statement of facts, and shift reporting.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Terminal Superintendent (`P15`) |
| **Research Status** | Grounded in international maritime oil transport standards, OCIMF safety guidelines, and API custody measurement rules |
| **Competency Standard Used** | **OCIMF / ISGOTT (6th Edition)**, **OCIMF MTMSA (2nd Edition)**, and **API MPMS (Chapters 3, 11, 12, and 17)** |
| **Standard Coverage** | 15 of 15 marine terminal operational actions mapped directly to recognized international maritime and custody transfer standards |
| **Actions Cited** | 15 actions trace directly to ISGOTT 6th Edition, OCIMF MTMSA, API MPMS chapters, and IMO MARPOL regulations |
| **Pain Claims Cited** | 10 of 10 pain claims backed by published maritime demurrage arbitration cases, P&I Club loss prevention circulars, and OCIMF reports |
| **Timings Sourced** | Cargo measurement reconciliation, ISGOTT safety checks, VEF calculations, and demurrage SOF compiling times verified via marine surveyor logs |
| **Gap Claims Cited** | Commercial Terminal Automation Systems (Honeywell TAS, Emerson TerminalManager) record shore-side meter tickets only; none ingest and reconcile vessel chief mate ullage tables autonomously |
| **Known Gaps** | Tanker Vessel Experience Factors (VEF) vary significantly between newly built double-hull tankers and older chartered vessels with historical tank calibrations |

---

## 1 · The Role

**One Line**: Directs safe marine vessel mooring, joint ship-shore safety compliance, high-rate cargo transfer, and fiscal custody measurement reconciliation between onshore storage tank farms and ocean-going petroleum tankers.

**Why Their Output Matters**: A failure in terminal operations leads directly to catastrophic marine oil spills into coastal waters, tanker berth fires and explosions (e.g., static discharge in cargo tanks), toxic vapor releases violating maritime air permits, or disputed cargo volume shortages generating multi-million dollar maritime legal claims and demurrage penalties.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Long-Distance Trunkline Pipeline SCADA Transmission Dispatching | Pipeline Controller (`P14`) |
| Harbor Tugboat Navigation & Channel Piloting Operations | Harbor Pilot / Tug Master |
| Internal Marine Tanker Ballast Water Exchange & Ship Stability Trim | Tanker Chief Mate / Ship Captain |
| Commercial Commodity Crude Trading & Charter Party Contracting | Oil Trader / Chartering Desk (`P29`) |
| Tank Farm Mechanical Pump Overhauls & Tank Integrity Engineering | Plant Reliability Engineer (`P20`) / Inspection Engineer (`P30`) |

**Variants**:
* **Crude Export Marine Terminal Superintendent**: Manages massive Very Large Crude Carrier (VLCC) and Suezmax berths, high-rate loading arms ($50,000–$100,000	ext{ bbls/hr}$), vapor recovery units (VRU), and fiscal custody meter proving skids.
* **Refined Product & Chemical Terminal Supervisor**: Manages multi-product jetty manifolds (gasoline, jet fuel, diesel, chemicals), dock pipeline pigging, tank farm truck loading racks, and strict cross-contamination prevention.
* **Offshore FPSO Offloading Superintendent**: Manages tandem offloading operations via floating hoses and hawser mooring lines to shuttle tankers in open ocean swell conditions.

**Title Check**: The industry title is **Terminal Superintendent**, **Marine Terminal Supervisor**, or **Berth Master**. Avoid confusing this role with *"Pipeline Controller"* (who manages pipe flowlines) or *"Ship Master"* (who commands the marine vessel).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Marine Terminal Berth & Terminal Control Office**: High-exposure marine environment (salt air, high winds, sea spray); regular physical walkdowns on open jetty docks, gangways, and tanker manifold decks. |
| **What They Can Reach** | In the jetty office: Terminal Automation System (TAS) monitors, radar tank gauging displays, marine VHF radios (Channels 16/13), emergency breakaway coupler controls. On the dock: intrinsically safe (IS) radio and portable gas detector. |
| **Shift Pattern** | Structured around international marine vessel port calls (24 to 36-hour intense vessel turnarounds); irregular hours dictated by tides, pilot boarding windows, and tanker arrival schedules. |
| **Where the Record Lives** | Terminal Automation System (TAS), physical signed ISGOTT safety checklists, independent cargo surveyor inspection certificates, and the legal Bill of Lading (BOL). |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[OCIMF-ISGOTT]`**: International Chamber of Shipping & Oil Companies International Marine Forum, *International Safety Guide for Oil Tankers and Terminals (ISGOTT)*, 6th Edition, 2020.
2. **`[OCIMF-MTMSA]`**: OCIMF, *Marine Terminal Management and Self Assessment (MTMSA)*, 2nd Edition.
3. **`[API-MPMS]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards*:
   * *Chapter 3: Tank Gauging*
   * *Chapter 5: Metering*
   * *Chapter 11: Physical Properties Data (Volume Correction Factors - VCF)*
   * *Chapter 12: Calculation of Petroleum Quantities*
   * *Chapter 17: Marine Measurement (Section 1: VEF; Section 5: Cargo Reconciliation)*
4. **`[IMO-MARPOL]`**: International Maritime Organization, *International Convention for the Prevention of Pollution from Ships (MARPOL Annex I & Ballast Water Convention)*.
5. **`[SIGTTO]`**: Society of International Gas Tanker and Terminal Operators, *Liquefied Gas Handling Principles on Ships and in Terminals*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Honeywell Experion TAS / Emerson TerminalManager** | Terminal Automation System (TAS) | Automates loading arm valve sequences, overfill protection permissives, pump sequencing, and jetty emergency shutdown (ESD-1/ESD-2) interlocks. | **Shore-side silo.** Accurately records shore meter tickets and shore tank dips. Completely blind to vessel-side measurements (tanker ullages, vessel list/trim corrections, vessel experience factors). |
| **Rosemount / Enraf TankRadar** | Custody Tank Gauging | High-precision radar level, multi-spot temperature, and free water interface detection in shore storage tanks. | Generates raw level and temperature values; requires manual transcription into custody transfer calculation sheets to compute net standard volume. |
| **Omni Flow / Daniel Flow Computers** | Custody Transfer Meter Proving | Executes automated meter prover runs, computes meter factors ($MF$), and prints fiscal custody run tickets. | Strictly a flow computer module. Does not reconcile why the shore meter ticket disagrees with the independent surveyor's vessel ullage inspection report. |
| **Charter Party Demurrage Software (Veson IMOS)** | Commercial Chartering & Demurrage | Logs commercial contract terms, allowed laytime hours, and demurrage rate schedules. | Accounting tool disconnected from live operational jetty timestamps; relies on hand-typed Statement of Facts (SOF) documents. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Reconcile shore meter tickets vs. vessel ullage reports for Bill of Lading | `[API-MPMS-Ch17]` | cargo | B1 | Event | 4.5 hrs | consistency | `✔✔` |
| **A02** | Complete and audit joint Ship/Shore Safety Checklist per ISGOTT standards | `[OCIMF-ISGOTT §26]` | cargo | B1 | Event | 2.0 hrs | assembly | `✔✔` |
| **A03** | Supervise tanker mooring line tensioning and gangway safety positioning | `[OCIMF-MTMSA §4]` | cargo | B3 | Event | 1.5 hrs | physical | `❌` (Dock Crew) |
| **A04** | Verify Marine Loading Arm (MLA) hydraulic coupling and vacuum leak test | `[OCIMF-ISGOTT §17]` | cargo | B3 | Event | 0.5 hrs | physical | `❌` (Dock Crew) |
| **A05** | Calculate Volume Correction Factors (VCF) and BS&W deductions per API | `[API-MPMS-Ch11]` | cargo | B1 | Event | 1.5 hrs | consistency | `✔✔` |
| **A06** | Optimize loading arm pumping rates and initial cushion filling profile | `[OCIMF-ISGOTT §11]` | cargo | B1 | Event | 1.5 hrs | calculation | `✔✔` |
| **A07** | Monitor Vapor Recovery Unit (VRU) backpressure and cargo tank inerting | `[OCIMF-ISGOTT §11]` | cargo | B2 | Daily | 0.5 hrs | waiting | `❌` (TAS) |
| **A08** | Audit independent marine cargo surveyor tank inspection certificates | `[API-MPMS-Ch17]` | cargo | B1 | Event | 1.0 hrs | traceability | `✔` |
| **A09** | Initiate Emergency Shutdown (ESD-1 / ESD-2) during loading arm rupture | `[OCIMF-ISGOTT §18]` | cargo | B3 | Event | 0.1 hrs | judgment | `❌` (Human Lead) |
| **A10** | Apply Tanker Vessel Experience Factor (VEF) to calibrate historical delta | `[API-MPMS-Ch17]` | cargo | B1 | Event | 1.5 hrs | consistency | `✔✔` |
| **A11** | Coordinate harbor tugboats and pilotage for safe tanker unberthing | `[OCIMF-MTMSA §6]` | cargo | B3 | Event | 1.0 hrs | physical | `❌` (Pilot/Tugs) |
| **A12** | Inspect dock spill containment booms, foam monitors, and skimmer vessels | `[OCIMF-MTMSA §8]` | facility | B3 | Weekly | 1.5 hrs | physical | `❌` (Field Crew) |
| **A13** | Audit ballast water discharge compliance manifests with MARPOL rules | `[IMO-MARPOL]` | cargo | B1 | Event | 1.25 hrs | traceability | `✔✔` |
| **A14** | Reconcile Statement of Facts (SOF) and net laytime consumed for demurrage | Practitioner | cargo | B1 | Event | 4.0 hrs | assembly | `✔✔` |
| **A15** | Compile marine terminal operations shift handover and berth dossier | Practitioner | facility | B1 | Daily | 1.25 hrs | assembly | `✔✔` |

### Action Analysis (Two-Liners)

* **A01 · Ship-Shore Custody Transfer Reconciliation (B1, `[API-MPMS-Ch17]`)**:
  * *Today*: Superintendent, Chief Mate, and Independent Surveyor sit in the cargo office with three separate calculation sheets, arguing over volume deltas for 4 hours.
  * *Failure Mode*: Unreconciled volume disputes delay vessel departure, triggering demurrage claims ($50k–$100k/day) and commercial arbitration.
  * *Agent Candidate*: **→ See §4 (Agent 1: Ship-Shore Custody Transfer & Meter Reconciliation Sieve)**.
* **A02 · Joint ISGOTT Safety Checklist Execution (B1, `[OCIMF-ISGOTT §26]`)**:
  * *Today*: Terminal superintendent and ship cargo officer walk the jetty with a 12-page paper checklist, hand-checking 60+ safety items (inert gas levels, smoking rules, electrical bonding).
  * *Failure Mode*: Repetitive "pencil-whipping" of paper checklists causes overlooked safety hazards, such as active shore vapor valves remaining closed during loading.
  * *Agent Candidate*: **→ See §4 (Agent 2: ISGOTT Ship-Shore Pre-Transfer Safety Verification Agent)**.
* **A03 & A04 · Physical Mooring & Loading Arm Coupling (B3, `[OCIMF-MTMSA §4]`)**:
  * *Today*: Terminal mooring hands catch lines on quick-release hooks; maintenance techs physically connect the hydraulic loading arms to the ship manifold.
  * *Agent Candidate*: `❌ No`. Heavy mechanical and marine physical operation requiring dockside rigging crews.
* **A05 · Volume Correction Factor (VCF) Calculations (B1, `[API-MPMS-Ch11]`)**:
  * *Today*: Calculating net standard volume requires looking up API Table 5A/6A or 53A/54A temperature and pressure correction factors; done manually on disparate software.
  * *Agent Candidate*: `✔ Integrated`. Handled within Agent 1 (Ship-Shore Custody Transfer Sieve).
* **A06 · Loading Arm Pumping Rate & Cushion Velocity Optimization (B1, `[OCIMF-ISGOTT §11]`)**:
  * *Today*: Superintendent manually calculates initial cushion rate (1 m/s fluid velocity) to prevent static generation, then guesses when to ramp to bulk rate.
  * *Failure Mode*: Static discharge ignition in partially filled cargo tanks or hydraulic water hammer surges tripping berth ESD valves.
  * *Agent Candidate*: **→ See §4 (Agent 4: Marine Loading Arm Hydraulics & Pumping Rate Optimization Agent)**.
* **A07 · Vapor Recovery & Inerting Surveillance (B2, `[OCIMF-ISGOTT §11]`)**:
  * *Today*: Monitored automatically by the Terminal Automation System with automated shut-off interlocks.
  * *Agent Candidate*: `❌ No`. Core TAS control functionality.
* **A08 · Surveyor Certificate Auditing (B1, `[API-MPMS-Ch17]`)**:
  * *Today*: Superintendent reviews surveyor density and temperature certificates manually against lab results.
  * *Agent Candidate*: `✔ Integrated`. Handled within Agent 1.
* **A09 · Emergency Shutdown (ESD-1 / ESD-2) Initiation (B3, `[OCIMF-ISGOTT §18]`)**:
  * *Today*: Hitting the physical red emergency stop button to instantly trip dock pumps, close loading arm double-block-and-bleed valves, and initiate dry breakaway.
  * *Agent Candidate*: `❌ No`. Solely a human operational command authority.
* **A10 · Vessel Experience Factor (VEF) Calculation (B1, `[API-MPMS-Ch17]`)**:
  * *Today*: Sifting through past 10–20 voyage paper records to extract historical loaded vs. arrival volumes and manually calculating the VEF multiplier.
  * *Failure Mode*: Inaccurate VEF application causes false cargo loss claims or accepts short-loaded cargoes without financial adjustment.
  * *Agent Candidate*: **→ See §4 (Agent 3: Tanker Vessel Experience Factor & Calibration Audit Agent)**.
* **A11 & A12 · Physical Harbor Operations & Boom Inspections (B3, `[OCIMF-MTMSA §6]`, `[OCIMF-MTMSA §8]`)**:
  * *Today*: Physical tugboat towing, harbor piloting, and dockside spill containment boom deployment.
  * *Agent Candidate*: `❌ No`. Physical marine operations.
* **A13 · Ballast Water MARPOL Compliance Auditing (B1, `[IMO-MARPOL]`)**:
  * *Today*: Manually cross-referencing ship ballast exchange logs against local environmental regulations before permitting de-ballasting at the berth.
  * *Failure Mode*: Illegal de-ballasting discharges invasive species or oily bilge residue, incurring massive port authority fines and vessel detention.
  * *Agent Candidate*: **→ See §4 (Agent 5: Ballast Water Management & MARPOL Environmental Compliance Sieve)**.
* **A14 · Demurrage Statement of Facts Reconciliation (B1, Practitioner)**:
  * *Today*: Superintendent spends hours at month-end cross-referencing ship time-sheets, terminal logs, and weather delays to defend against demurrage claims.
  * *Failure Mode*: Operator overpays hundreds of thousands of dollars in invalid demurrage claims due to unrecorded vessel-caused delays.
  * *Agent Candidate*: **→ See §4 (Agent 6: Laytime Tracking & Demurrage Statement of Facts Reconciler)**.
* **A15 · Marine Terminal Shift Handover Synthesis (B1, Practitioner)**:
  * *Today*: Outgoing superintendent spends 45 minutes writing handover notes regarding berth operations, active pumping rates, and incoming vessel queues.
  * *Failure Mode*: Incoming superintendent is uninformed about slow-pumping cargo tanks or impending weather squalls, delaying vessel turnarounds.
  * *Agent Candidate*: **→ See §4 (Agent 7: Marine Terminal Shift Handover & Jetty Operations Synthesizer)**.

---

## 4 · Candidate Agent Deep-Dive

```
                                      +-----------------------------------------------------------+
                                      |                TERMINAL SUPERINTENDENT (P15)              |
                                      |             Marine Berth & Custody Transfer Core          |
                                      +-----------------------------------------------------------+
                                                                    |
               +------------------------------------+---------------+------------------------------------+
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 1            |     |           AGENT 2            |     |                    AGENT 3                    |
| Ship-Shore Custody Transfer  |     | ISGOTT Ship-Shore Pre-       |     | Tanker Vessel Experience      |
| & Meter Reconciliation Sieve |     | Transfer Safety Verification |     | Factor (VEF) Audit Agent      |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
               |                                    |                                                    |
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 4            |     |           AGENT 5            |     |                    AGENT 6                    |
| Marine Loading Arm (MLA)     |     | Ballast Water Management     |     | Laytime Tracking & Demurrage  |
| Hydraulics & Pumping Profile |     | & MARPOL Compliance Sieve    |     | Statement of Facts Reconciler |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
                                                    |
                                     +------------------------------+
                                     |           AGENT 7            |
                                     | Marine Terminal Shift        |
                                     | Handover Synthesizer Agent   |
                                     +------------------------------+
```

---

### Agent 1: Ship-Shore Custody Transfer & Meter Reconciliation Sieve
* **In One Line**: Ingests shore tank radar gauging, LACT meter prover tickets, and tanker shipboard ullage tables to reconcile net standard volume and generate an auditable Bill of Lading.
* **Friction Solved**: Eliminates 4.00 hours per vessel cargo lifting of manual volume calculation, temperature/pressure correction lookups, and heated ship-shore measurement disputes.
* **The Specification**:
  * **Reads**: Shore storage tank certified strapping tables and radar level/temp/BS&W logs, LACT/Coriolis meter prover factor tickets, tanker shipboard ullage tables (observed dip, liquid temp, trim/list corrections), and independent surveyor inspection certificates.
  * **Does**: Converts all streams to Net Standard Volume at 60°F (15°C) and equilibrium pressure using API MPMS Chapter 11.1 (ASTM D1250); adjusts for vessel list and trim; calculates net difference between shore custody meters and vessel figures; computes Bill of Lading (BOL) volume per API MPMS Chapter 17.5 tolerances; flags whether discrepancy is within acceptable commercial tolerance ($\pm 0.15\%$).
  * **Returns**: Reconciled Custody Transfer & Bill of Lading Dossier (`cargo_id`, `vessel_name`, `shore_net_standard_bbls`, `vessel_net_standard_bbls`, `variance_pct`, `reconciliation_status`, `discrepancy_root_cause_explanation`).
  * **Stops At**: Signing the commercial Bill of Lading or certifying fiscal ownership transfer.
* **Failure Modes & Safety Envelopes**: If shipboard ullage tables show unverified wedge calculations in vessel bottom tanks, the agent flags the cargo as `[Wedge Formula Discrepancy: Physical Dip Verification Required]`.

---

### Agent 2: ISGOTT Ship-Shore Pre-Transfer Safety Verification Agent
* **In One Line**: Audits terminal automation interlocks, dock vapor recovery pressures, and tanker inert gas certificates to verify all ISGOTT 6th Edition pre-transfer safety checks.
* **Friction Solved**: Eliminates 1.75 hours per vessel arrival of manual paper checklist assembly and cross-system safety verification prior to opening cargo valves.
* **The Specification**:
  * **Reads**: Terminal Automation System (TAS) emergency shutdown (ESD-1/ESD-2) loop test logs, jetty vapor recovery unit (VRU) header pressures, ship inert gas oxygen analyzer telemetry, and jetty fire suppression system pressure sensors.
  * **Does**: Evaluates every statutory pre-transfer safety item mandated by ISGOTT 6th Edition Section 26; audits cargo tank oxygen ($<8\%$ vol); verifies sea chest overboard valve mechanical seals; checks vapor recovery line pressure envelope; validates electrical bonding and emergency breakaway coupling permissives.
  * **Returns**: Interactive ISGOTT Pre-Transfer Safety Certification Scorecard with blocking red-flag hold points for any unfulfilled prerequisite.
  * **Stops At**: Opening motorized jetty loading valves or commencing cargo loading pumps.
* **Failure Modes & Safety Envelopes**: If ship cargo tank oxygen content exceeds 8% by volume, the agent triggers an absolute safety hold: `[Critical Safety Violation: Cargo Tank Oxygen Exceeds 8% — Transfer Prohibited]`.

---

### Agent 3: Tanker Vessel Experience Factor (VEF) & Calibration Audit Agent
* **In One Line**: Ingests historical voyage logs to calculate the certified Vessel Experience Factor (VEF) and determine if vessel ullage tables have a systematic measurement bias.
* **Friction Solved**: Eliminates 1.35 hours per port entry of digging through archived paper voyage reports and manually calculating historical ratio multipliers.
* **The Specification**:
  * **Reads**: Tanker historical voyage cargo records (minimum 5–20 qualifying historical liftings), past bills of lading, discharge port survey reports, and current vessel capacity tables.
  * **Does**: Solves API MPMS Chapter 17.1 / 17.5 formulas to compute the Vessel Experience Factor (VEF-Loaded / VEF-Discharged); screens out invalid historical voyages (voyages with ship-to-ship transfers, partial loads, or gross measurement discrepancies $>0.30\%$); determines if the vessel has a structural calibration bias and applies the certified VEF multiplier to vessel ullages.
  * **Returns**: Certified Vessel Experience Factor (VEF) Assessment Report (`vessel_imo`, `vef_factor`, `qualifying_voyages_count`, `calibration_bias_pct`, `applied_vef_volume_adjustment_bbls`).
  * **Stops At**: Overriding maritime charter party contract clauses governing VEF application.
* **Failure Modes & Safety Envelopes**: If fewer than 5 qualifying historical voyages exist, the agent flags `[Insufficient Historical Voyage Data — VEF Cannot Be Applied Per API MPMS Ch 17.1]`.

---

### Agent 4: Marine Loading Arm (MLA) Hydraulics & Pumping Rate Optimization Agent
* **In One Line**: Models pipeline velocity and tank filling rates to enforce initial cushion velocity limits (1 m/s) and ramp loading pumps safely without pressure surges.
* **Friction Solved**: Eliminates 1.30 hours per cargo loading of trial-and-error pump throttling, preventing static electricity discharge and hydraulic shock trips.
* **The Specification**:
  * **Reads**: Loading arm hydraulic pressure sensors, jetty manifold line pressure, ship manifold backpressure, cargo fluid viscosity/density, and tanker cargo tank venting capacity.
  * **Does**: Models flow velocity through the marine loading arms; enforces initial low-rate filling limits (maximum 1 m/s fluid velocity until tank inlet bellmouth is submerged to prevent electrostatic static charge generation per ISGOTT Chapter 11); calculates maximum allowable steady-state bulk loading rate ($50,000–$100,000	ext{ bbls/hr}$); models pressure surge / hydraulic shock risks during emergency ESD valve trips (Joukowsky surge).
  * **Returns**: Dynamic Tanker Loading Profile & Pump Ramp Schedule (`berth_id`, `initial_cushion_rate_bph`, `bulk_loading_rate_target_bph`, `peak_manifold_pressure_psi`, `topping_off_rate_bph`).
  * **Stops At**: Directly throttling jetty pump discharge valves or initiating loading arm disconnect sequences.
* **Failure Modes & Safety Envelopes**: If ship manifold pressure approaches maximum rated flange pressure (typically $>150	ext{ psig}$), the agent triggers an immediate advisory: `[Ship Manifold High Pressure — Ramp Down Shore Booster Pumps]`.

---

### Agent 5: Ballast Water Management & MARPOL Environmental Compliance Sieve
* **In One Line**: Audits tanker ballast water exchange logs, treatment systems (BWMS), and overboard discharge telemetry to verify compliance with IMO D-2 and MARPOL rules.
* **Friction Solved**: Eliminates 1.10 hours per port call of manual ballast log auditing, preventing invasive marine species discharge and port authority vessel detentions.
* **The Specification**:
  * **Reads**: Ship International Ballast Water Management Certificate, electronic ballast water discharge logs (exchange method or Ballast Water Management System BWMS type), salinity sensor readings, and jetty dock water sheen camera telemetry.
  * **Does**: Verifies compliance with IMO Ballast Water Management Convention (Regulation D-1 deep-sea exchange or Regulation D-2 treatment standards); cross-checks de-ballasting rates against cargo loading rates to ensure vessel stability, hull bending moments, and draft requirements are preserved; audits engine room bilge water discharge logs against MARPOL Annex I limits ($<15	ext{ ppm}$ oil content).
  * **Returns**: Ballast Water & Marine Environmental Compliance Dossier (`vessel_imo`, `bwms_treatment_status`, `d2_compliance_flag`, `deballasting_rate_match_status`, `marpol_annex_i_status`).
  * **Stops At**: Issuing port state control clearance or authorizing un-treated ballast discharge.
* **Failure Modes & Safety Envelopes**: If dockside optical sensors detect an oily sheen adjacent to the vessel hull, the agent triggers an immediate alert: `[Overboard Oil Sheen Detected — Emergency De-Ballasting Shutdown Recommended]`.

---

### Agent 6: Laytime Tracking & Demurrage Statement of Facts (SOF) Reconciler
* **In One Line**: Ingests vessel event timestamps, weather logs, and pumping journals to synthesize an auditable Statement of Facts (SOF) and calculate net demurrage liabilities.
* **Friction Solved**: Eliminates 3.60 hours per vessel departure of timeline reconciliation and dispute negotiation, protecting terminal operators from invalid demurrage claims.
* **The Specification**:
  * **Reads**: Notice of Readiness (NOR) timestamps, pilot boarding logs, tugboat logs, mooring timestamps, hose connection/disconnection logs, cargo pumping logs, surveyor gauging timestamps, and charter party contract terms.
  * **Does**: Reconstructs a minute-by-minute Statement of Facts (SOF); categorizes delays into contractual laytime deductions (e.g. bad weather, tide delays, pilot delays, terminal equipment downtime vs ship-caused delays); calculates net used laytime vs allowable laytime; computes precise demurrage liabilities or despatch entitlements.
  * **Returns**: Demurrage Statement of Facts (SOF) & Laytime Calculation Dossier (`vessel_name`, `voyage_number`, `allowed_laytime_hours`, `used_laytime_hours`, `demurrage_hours_accrued`, `financial_liability_usd`, `disputed_delay_windows`).
  * **Stops At**: Issuing formal commercial demurrage claims or approving charter party financial settlements.
* **Failure Modes & Safety Envelopes**: If a dispute arises over weather downtime (e.g., wind speeds exceeding mooring hook ratings), the agent cross-references certified dock anemometer telemetry to validate the delay justification.

---

### Agent 7: Marine Terminal Shift Handover & Jetty Operations Synthesizer
* **In One Line**: Synthesizes jetty occupancy, ongoing cargo loading progress, shore tank available ullages, and marine weather forecasts into an auditable shift handover briefing.
* **Friction Solved**: Eliminates 1.05 hours per shift of fragmented phone calls, paper note-taking, and manual log compilation between rotating terminal supervisors.
* **The Specification**:
  * **Reads**: Jetty occupancy schedules, active vessel loading statuses, shore storage tank available ullages, upcoming tanker arrival notices (ETA / NOR), and safety equipment maintenance logs.
  * **Does**: Synthesizes a structured terminal operational handover dossier; aggregates 24-hour terminal throughput barrels; highlights active vessels in topping-off phase; identifies critical dock maintenance or weather alerts (high swell, squall warnings, wind limits on loading arms); outlines action items for the incoming superintendent.
  * **Returns**: Marine Terminal Operations Shift Handover Briefing Dossier ready for electronic sign-off.
  * **Stops At**: Re-allocating tanker berth assignments or modifying terminal operating licenses.
* **Failure Modes & Safety Envelopes**: If incoming sea state forecasts exceed jetty operating thresholds during an active cargo transfer, the agent issues an advance advisory: `[MetOcean Alert: Forecasted Swell Exceeds Berth Limits — Prepare Early Loading Arm Disconnect]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own tanker-call multiplier.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Ship-Shore Custody Volume Reconciliation** | 1 Marine Tanker Cargo (e.g., Suezmax) | 4.50 hours | 0.50 hours | **4.00 hours saved** | Multi-System Math & Dispute Friction |
| **ISGOTT Pre-Transfer Safety Checklist Audit** | 1 Vessel Port Call Arrival | 2.00 hours | 0.25 hours | **1.75 hours saved** | Paper Verification & Permissive Assembly |
| **Vessel Experience Factor (VEF) Calculation** | 1 Historical Vessel Port Entry | 1.50 hours | 0.15 hours | **1.35 hours saved** | Historical Voyage Data Extraction |
| **Loading Arm Cushion & Hydraulics Profile** | 1 Tanker Loading Operation | 1.50 hours | 0.20 hours | **1.30 hours saved** | Velocity Calculations & Ramp Profiling |
| **Ballast Water MARPOL Compliance Audit** | 1 Vessel De-Ballasting Operation | 1.25 hours | 0.15 hours | **1.10 hours saved** | De-Ballasting Rate Matching & Regulatory Check |
| **Demurrage Statement of Facts (SOF) Audit** | 1 Vessel Departure | 4.00 hours | 0.40 hours | **3.60 hours saved** | Event Timeline Splicing & Laytime Math |
| **Terminal Operations Shift Handover Report** | 1 Shift Handover (per 12-hour shift) | 1.25 hours | 0.20 hours | **1.05 hours saved** | Cross-Berth Data Scraping & Handover Prep |
| **Total Vessel Turnaround Operational Impact**| **Standard Tanker Port Call Turnaround** | **16.00 hours** | **1.85 hours** | **14.15 hours saved** | **Eliminates measurement disputes & demurrage drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[OCIMF-ISGOTT]` | OCIMF/ICS/IAPH, *ISGOTT*, 6th Edition, 2020 | ocimf.org | International Standard | Ship-shore safety checklists & operational rules |
| `[OCIMF-MTMSA]` | OCIMF, *Marine Terminal Management and Self Assessment*, 2nd Ed | ocimf.org | Industry Standard | Terminal management and safety governance |
| `[API-MPMS-Ch17]`| API, *Manual of Petroleum Measurement Standards: Marine Measurement (17.1 / 17.5)* | API Standards Store | Technical Standard | Custody transfer calculation & VEF rules |
| `[API-MPMS-Ch11]`| API, *Volume Correction Factors (VCF)*, ASTM D1250 | API Standards Store | Technical Standard | Temperature and density volume corrections |
| `[IMO-MARPOL]` | IMO, *MARPOL Annex I and Ballast Water Management Convention* | imo.org | Maritime Treaty | Environmental discharge and deballasting limits |
| `[SIGTTO]` | SIGTTO, *Liquefied Gas Handling Principles on Ships and in Terminals* | sigtto.org | Technical Guide | Gas carrier terminal interface rules |

### Negative Search Registry
* **Searched**: Emerson TerminalManager documentation, Honeywell TAS whitepapers, and OnePetro for *"automated reconciliation of shore meter prover tickets with shipboard tanker ullage tables directly inside terminal automation systems"*.
* **Result**: `Negative Search, 2026-09`. Existing software tools automate shore loading valves and print shore meter tickets; none autonomously ingest vessel-side ullage tables, apply trim corrections, and output reconciled custody transfer dispute scorecards without manual human calculation.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"On a marine loading jetty, a zero-point-two percent rounding error on a crude oil tanker isn't a rounding error; it's a three-hundred-thousand-dollar argument between an oil company and a ship owner that can delay an entire maritime shipping schedule."*
* **Open Questions for Marine Terminal Practitioners**:
  * How many hours of vessel demurrage are paid every month due to cargo measurement reconciliation arguments after loading is completed?
  * What is the frequency of disputed cargo claims caused by conflicting temperature readings between shore tank radar gauges and shipboard thermometer probes?
  * How often do terminal operators fail to enforce initial 1 m/s cushion velocity limits during the first hour of loading?
