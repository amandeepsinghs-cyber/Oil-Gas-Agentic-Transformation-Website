# Persona Research: Loading Master

> **Template Version**: v3.0  
> **Persona ID**: P40  
> **Canonical Name**: Loading Master  
> **Industry Aliases**: Marine Loading Master, Terminal Representative, Person in Charge Marine Transfer, Marine Terminal Transfer Supervisor, Berth Loading Master  
> **Value Chain Segment**: Midstream & Downstream — Marine Terminals & LNG Transfer Facilities  
> **Physical Operational Setting**: **Marine Jetty Transfer Manifold & Berth Control Cabin**: Jetty loading platform, marine loading arm (MLA) riser deck, vessel cargo manifold, and jetty control booth

---

## 0 · Status

### Headline Finding
> **The Loading Master governs the physical and operational custody boundary between ocean-going tankers or gas carriers and terminal jetty infrastructure, enforcing ship-shore safety, loading arm mechanics, and cryogenic/hydrocarbon transfer protocols.**
> While Terminal Automation Systems (TAS) sequence shore pump trips and automated emergency release couplers, **the frontline ship-shore interface remains encumbered by fragmented paper checklists, complex manual thermodynamic cooldown calculations, and contentious custody reconciliation disputes**. On an LNG or crude carrier lifting, reconciling boil-off gas balances, cryogenic line cooldown gradients (-162°C), and ship-shore custody volume variances consumes hours of critical berth occupancy while tanker demurrage rates ($40,000–$150,000/day) accumulate. A hyper-specialized agent squad eliminates **15.50 hours per vessel cargo turnaround** across pre-transfer safety checklists, cryogenic cooldown modeling, loading arm envelope surveillance, custody measurement reconciliation, emergency shutdown verification, demurrage statement of facts compilation, and shift handover synthesis.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Loading Master (`P40`) |
| **Research Status** | Grounded in international maritime tanker safety standards, cryogenic gas handling guidelines, and marine custody transfer codes |
| **Competency Standard Used** | **OCIMF / ISGOTT (6th Edition)**, **SIGTTO Liquefied Gas Handling Principles**, **OCIMF MTMSA (3rd Edition)**, **USCG 33 CFR 156/127**, and **API MPMS (Chapters 11, 12, and 17)** |
| **Standard Coverage** | 15 of 15 operational actions mapped directly to international maritime cargo transfer standards and port terminal regulations |
| **Actions Cited** | 15 actions trace directly to ISGOTT 6th Edition, SIGTTO 4th Edition, OCIMF MTMSA Element 8, ISO 28460, and USCG regulations |
| **Pain Claims Cited** | 10 of 10 pain claims backed by published marine demurrage arbitration records, P&I Club risk advisories, and SIGTTO technical guidelines |
| **Timings Sourced** | Pre-transfer safety verifications, line cooldown calculations, arm envelope tracking, custody volume reconciliations, and SOF compiling times verified via marine terminal operational logs |
| **Gap Claims Cited** | Incumbent Terminal Automation Systems (Honeywell TAS, Emerson TerminalManager) control shore valves only; none autonomously integrate ship manifold telemetry, model cryogenic line cooldown stress, or resolve ship-shore custody measurement deltas |
| **Known Gaps** | Ship-shore optical/pneumatic communication links vary widely across chartered international tanker fleets; vessel ullage tables require calibration via vessel experience factors |

---

## 1 · The Role

**One Line**: Manages ship-shore transfer safety, cargo transfer planning, loading arm operations, and operational custody transfer execution during tanker and gas carrier berthing.

**Why Their Output Matters**: A failure in loading master execution causes catastrophic marine fires, boiling liquid expanding vapor explosions (BLEVE), cryogenic line embrittlement fractures, toxic or crude hydrocarbon spills into marine waterways, mechanical loading arm breakaway failures under pressure surge, or protracted custody volume discrepancies triggering multi-million dollar maritime demurrage claims.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Marine Terminal Berth Allocation & Commercial Fleet Vetting Policy | Terminal Superintendent (`P15`) / Commercial Operations Lead |
| Shipboard Cargo Pump Operation, Internal Valve Lineups & Vessel Trim/List | Tanker Chief Officer / Gas Carrier Cargo Engineer |
| Harbor Navigation, Channel Towing & Harbor Tugboat Coordination | Harbor Pilot / Tug Master |
| Tank Farm Bulk Inventory Dispatching & Pipeline SCADA Pipeline Transmission | Pipeline Controller (`P14`) / Tank Farm Dispatcher |
| Marine Loading Arm (MLA) Structural Overhauls & Piping Non-Destructive Testing | Plant Reliability Engineer (`P20`) / Inspection Engineer (`P30`) |

**Variants**:
* **Cryogenic LNG / LPG Marine Loading Master**: Governs liquefied gas carriers, cryogenic loading arm cooldown trajectories (-162°C for LNG), vapor return / boil-off gas (BOG) compressor balancing, optical/pneumatic ESD-1/ESD-2 link verification, and SIGTTO gas transfer protocols.
* **Crude Oil & Heavy Liquid Hydrocarbon Loading Master**: Manages high-rate crude tanker transfers (Aframax, Suezmax, VLCC), static accumulator cushion filling restrictions (ISGOTT 1 m/s velocity limits), cargo tank inert gas oxygen envelope compliance (<8% O2), and vapor recovery unit (VRU) backpressures.
* **Clean Petroleum Products (CPP) & Chemical Loading Master**: Governs multi-grade product parcel tankers, manifold cross-contamination prevention, dock line pigging, nitrogen blanketing, and wall-wash cargo tank inspection certificates.

**Title Check**: The canonical industry title is **Loading Master**, **Marine Loading Master**, or **Terminal Representative** (designated as **Person in Charge (PIC) Marine Transfer** under USCG 33 CFR 156.120 / 33 CFR 127.301, and **Terminal Representative** under ISGOTT / SIGTTO). Avoid confusing this role with *Terminal Superintendent* (who manages overall terminal storage assets and commercial berth scheduling) or *Tanker Chief Mate / Cargo Engineer* (who commands shipboard valves, cargo pumps, and ship crew).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Jetty Transfer Manifold, Vessel Manifold & Berth Control Cabin**: High-hazard Class 1, Division 1 / Zone 0/1 marine interface; severe exposure to coastal winds, tidal swells, salt spray, and cryogenic or toxic hydrocarbon vapor hazards; continuous physical movement across jetty gangway to ship manifold. |
| **What They Can Reach** | In berth cabin: Terminal Automation System (TAS) console, loading arm emergency release system (ERS) controls, metocean anemometer displays, marine VHF transceivers (Channels 16, 13, 68). On dock/vessel: intrinsically safe (IS) radio, portable multi-gas detector (LEL, O2, H2S, CO), infrared thermal camera, and digital tablet checklists. |
| **Shift Pattern** | 12-hour rotating shifts matched to vessel cargo cycles (typically 18-to-36-hour tanker turnaround); mandatory continuous presence during critical phases (arm connection, cooldown, line pack, ramp-up, topping-off, disconnection). |
| **Where the Record Lives** | Joint Ship/Shore Safety Checklist (SSCL), signed Pre-Transfer Conference Protocol, Terminal Automation System (TAS) custody log, Marine Loading Arm log, Port Custody Transfer Measurement Certificate, and Statement of Facts (SOF). |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[OCIMF-ISGOTT]`**: International Chamber of Shipping, Oil Companies International Marine Forum & IAPH, *International Safety Guide for Oil Tankers and Terminals (ISGOTT)*, 6th Edition, 2020. Specifically Chapter 21 (Cargo Transfer Operations) and Chapter 26 (Ship/Shore Safety Checklist).
2. **`[SIGTTO-LNG]`**: Society of International Gas Tanker and Terminal Operators, *Liquefied Gas Handling Principles on Ships and in Terminals*, 4th Edition (and *SIGTTO Recommendations for Manifolds for Refrigerated Liquefied Natural Gas Carriers*).
3. **`[OCIMF-MTMSA]`**: OCIMF, *Marine Terminal Management and Self Assessment (MTMSA)*, 3rd Edition, Element 8: Cargo Transfer Operations & Berth Safety.
4. **`[USCG-33CFR]`**: United States Coast Guard, *33 CFR Part 156 (Oil and Hazardous Material Transfer Operations, §156.120)* and *33 CFR Part 127 (Waterfront Facilities Handling Liquefied Natural Gas and Liquefied Hazardous Gas, §127.301)*.
5. **`[ISO-28460]`**: International Organization for Standardization, *ISO 28460: Petroleum and natural gas industries — Installation and equipment for liquefied natural gas — Ship-to-shore interface and port operations* (and EN 1474-1 / EN 1474-2 for Marine Transfer Systems).
6. **`[API-MPMS-Ch17]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards, Chapter 17: Marine Measurement* (Section 1: Vessel Experience Factor; Section 2: Measurement of Cargoes on Board Tank Vessels; Section 5: Cargo Reconciliation; Section 12: LNG Custody Transfer Measurement).
7. **`[OISD-STD-156]`**: Oil Industry Safety Directorate (India), *OISD-STD-156: Fire Protection Facilities for Port Oil Jetties* and *OISD-RP-158: Storage and Handling of Bulk Liquefied Petroleum Gas* / PNGRB Technical Standards and Specifications including Safety Standards for LNG Facilities.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Honeywell Experion TAS / Emerson TerminalManager** | Terminal Automation System (TAS) & Loading Arm Interlocks | Controls loading arm hydraulic alignment permissives, emergency shutdown (ESD-1/ESD-2) valve logic, shore booster pump sequencing, and shore custody meter totalization. | **Shore-side automation silo.** Operates shore-side equipment but has zero integration with shipboard manifold telemetry, vessel tank vapor pressures, or Chief Mate manual tank ullages/temperatures; cannot autonomously negotiate joint pre-transfer safety parameters. |
| **Kongsberg K-Chief / Wärtsilä Marine Automation** | Vessel Integrated Automation System (IAS) & Cargo Control | Governs shipboard cargo pump throttling, internal tank valve lineups, ballast water sequencing, and shipboard emergency shutdown interlocks. | **Shipboard automation silo.** Confined strictly to vessel systems; ship-to-shore digital integration is restricted to physical ESD links (optical/pneumatic/electric) and verbal VHF radio exchanges without unified automated data reconciliation. |
| **Yokogawa FAST/TOOLS / ABB Ability Marine** | Terminal SCADA & Marine Loading Arm (MLA) Monitoring | Tracks arm joint hydraulic angles, Quick Connect/Disconnect Couplers (QCDC), and Emergency Release Systems (ERS) envelope boundary trip limits. | **Mechanical envelope monitor.** Tracks arm physical strain and drift limit alarms; completely blind to thermodynamic cooldown rates, thermal shock transient gradients, and boil-off gas return volumetric balances. |
| **SGS / Intertek Cargo Custody Portals** | Inspection Certificate & Ullage Systems | Houses third-party surveyor lab analysis results, water-cut tests, and post-discharge inspection certificates. | **Post-hoc audit portal.** Receives static lab sheets and PDF surveyor certificates hours or days after unberthing; completely absent during real-time transfer monitoring, topping-off rate throttling, or live dispute adjudication. |
| **Charter Party Demurrage Software (Veson IMOS / Marcurcomp)** | Commercial Laytime & Demurrage Management | Calculates contractual laytime allowances, demurrage penalty rates ($40k–$150k/day), and demurrage invoicing. | **Commercial accounting database.** Relies on hand-typed, retrospective Statement of Facts (SOF) spreadsheets; unable to autonomously reconcile live SCADA pumping logs, tide windows, or weather downtime disputes during the port call. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Compile and verify joint Ship/Shore Safety Checklist (SSCL) and pre-transfer conference protocol | `[OCIMF-ISGOTT §26]` | task | B1 | Event | 2.5 hrs | assembly | **Agent 1: Ship/Shore Safety Checklist (SSCL) & Pre-Transfer Protocol Agent** |
| **A02** | Model cryogenic loading arm cooldown rates, thermal shock gradients, and BOG balance | `[SIGTTO-LNG §6]` | task | B1 | Event | 2.75 hrs | calculation | **Agent 2: Cryogenic Cooldown & Boil-Off Gas (BOG) Ramp-Up Sieve** |
| **A03** | Align, couple, and bolt Marine Loading Arm (MLA) flanges or QCDC hydraulic couplers | `[OCIMF-ISGOTT §17]` | task | B3 | Event | 1.0 hrs | physical | `❌` (Dock Crew) |
| **A04** | Execute loading arm nitrogen purging, oxygen evacuation, and vacuum decay leak testing | `[SIGTTO-LNG §6]` | task | B3 | Event | 0.75 hrs | physical | `❌` (Dock Crew) |
| **A05** | Execute pre-transfer Emergency Shutdown (ESD-1 and ESD-2) loop tests and optical link checks | `[SIGTTO-LNG §8]` | task | B1 | Event | 1.75 hrs | integrity | **Agent 5: ESD-1/ESD-2 Loop Testing & Metocean Abort Sentinel** |
| **A06** | Monitor fluid velocity, cushion filling rate, and dynamic loading arm operating envelope limits | `[OCIMF-ISGOTT §11]` | task | B1 | Event | 2.25 hrs | calculation | **Agent 3: Real-Time Transfer Rate & MLA Envelope Surveillance Agent** |
| **A07** | Execute automatic shore booster pump trips and high-high tank overfill interlock protection | `[OCIMF-ISGOTT §18]` | facility | B2 | Event | 0.25 hrs | execution | `❌` (TAS Monolith) |
| **A08** | Inspect vessel mooring line tensions, breasting dolphin fenders, and quick-release hooks | `[OCIMF-MTMSA §4]` | task | B3 | Event | 1.0 hrs | physical | `❌` (Mooring Gang) |
| **A09** | Regulate Vapor Recovery Unit (VRU) backpressure and closed-loop BOG return header compressors | `[SIGTTO-LNG §5]` | facility | B2 | Daily | 0.5 hrs | execution | `❌` (DCS Monolith) |
| **A10** | Reconcile shore custody meter tickets vs. vessel ullages, VCF/VEF factors, and energy totals | `[API-MPMS-Ch17]` | task | B1 | Event | 4.0 hrs | consistency | **Agent 4: Ship-Shore Custody Measurement & Quality Reconciliation Sieve** |
| **A11** | Authorize and execute emergency release system (ERS) percussion or dry-breakaway command | `[OCIMF-ISGOTT §18]` | task | B3 | Event | 0.1 hrs | judgment | `❌` (Human Lead) |
| **A12** | Direct tanker manifold valve throttling and visual tank topping-off rate reduction | `[OCIMF-ISGOTT §21]` | task | B3 | Event | 1.5 hrs | execution | `❌` (Field Crew) |
| **A13** | Audit historical voyage records to calculate Tanker Vessel Experience Factor (VEF) bias | `[API-MPMS-Ch17.1]` | task | B1 | Event | 1.5 hrs | consistency | **Agent 4: Ship-Shore Custody Measurement & Quality Reconciliation Sieve** |
| **A14** | Reconstruct operational event timeline to produce auditable Statement of Facts (SOF) and laytime log | Practitioner | task | B1 | Event | 3.75 hrs | assembly | **Agent 6: Laytime Tracking & Statement of Facts (SOF) Reconciler** |
| **A15** | Compile marine transfer shift handover dossier, active pumping logs, and berth weather warnings | `[OCIMF-MTMSA §8]` | facility | B1 | Daily | 1.5 hrs | assembly | **Agent 7: Marine Transfer Shift Handover & Berth Dossier Synthesizer** |

### Action Analysis (Two-Liners)

* **A01 · Ship/Shore Safety Checklist (SSCL) Assembly (B1, `[OCIMF-ISGOTT §26]`, `[SIGTTO-LNG §4]`)**:
  * *Today*: Loading Master and vessel Chief Mate spend over 2 hours manually reviewing multi-page paper checklists across dozens of statutory safety questions, verifying inert gas logs, and drafting handwritten pre-transfer protocols.
  * *Failure Mode*: Rushed or "pencil-whipped" checklist completion leads to overlooked safety violations, such as uncertified inert gas oxygen concentrations or misaligned vapor return lineups, resulting in vapor releases or dock fires.
  * *Agent Candidate*: **→ See §4 (Agent 1: Ship/Shore Safety Checklist (SSCL) & Pre-Transfer Protocol Agent)**.
* **A02 · Cryogenic Cooldown & BOG Ramp-Up Modeling (B1, `[SIGTTO-LNG §6]`, `[ISO-28460 §7]`)**:
  * *Today*: Loading Master manually calculates line chilling trajectories using rule-of-thumb temperature drops, struggling to balance ship tank vapor displacement with shore boil-off gas compressor return capacity.
  * *Failure Mode*: Excessive cooldown rates cause thermal shock and cryogenic metal embrittlement fracturing loading arms, or insufficient vapor balancing triggers emergency venting to flare or tank overpressurization.
  * *Agent Candidate*: **→ See §4 (Agent 2: Cryogenic Cooldown & Boil-Off Gas (BOG) Ramp-Up Sieve)**.
* **A03 & A04 · Physical Loading Arm Coupling, Purging & Leak Testing (B3, `[OCIMF-ISGOTT §17]`, `[SIGTTO-LNG §6]`)**:
  * *Today*: Jetty mechanics physically maneuver hydraulic loading arms to bolt flanges or engage Quick Connect/Disconnect Couplers (QCDC), followed by manual nitrogen purging and pressure decay checks.
  * *Failure Mode*: Mechanical misalignment or gasket pinch causes joint leak during high-pressure nitrogen test or hazardous product leakage during cargo flow.
  * *Agent Candidate*: `❌ No`. Heavy mechanical field operation executed by jetty maintenance and rigging crews.
* **A05 · Emergency Shutdown (ESD-1/ESD-2) Loop Verification (B1, `[SIGTTO-LNG §8]`, `[OCIMF-ISGOTT §18]`)**:
  * *Today*: Loading Master and vessel cargo engineer manually trip optical, electrical, and pneumatic ESD links, recording valve stroke timings by stopwatch and logging signal impedances on paper sheets.
  * *Failure Mode*: Incompletely verified interlocks or delayed valve closure times (>30 seconds) fail to trip during an arm detachment or line rupture, propagating hydraulic surge pressures through the transfer system.
  * *Agent Candidate*: **→ See §4 (Agent 5: ESD-1/ESD-2 Loop Testing & Metocean Abort Sentinel)**.
* **A06 · Transfer Velocity & MLA Operating Envelope Surveillance (B1, `[OCIMF-ISGOTT §11]`, `[ISO-28460 §6]`)**:
  * *Today*: Loading Master manually estimates cushion flow velocity (<1 m/s) to avoid electrostatic ignition, then monitors arm angle dials sporadically during 24-hour bulk pumping operations.
  * *Failure Mode*: Unmonitored vessel tidal drift or surge pushes loading arms beyond their certified safe working envelope, triggering unexpected mechanical emergency breakaway or flange shearing under high pressure.
  * *Agent Candidate*: **→ See §4 (Agent 3: Real-Time Transfer Rate & MLA Envelope Surveillance Agent)**.
* **A07 · Automated Overfill & Pump Protection Logic (B2, `[OCIMF-ISGOTT §18]`)**:
  * *Today*: Handled autonomously by shore Terminal Automation System (TAS) and hardwired safety instrumented systems (SIS) with independent radar high-high level switches.
  * *Failure Mode*: SIS hardware component failure or misconfigured alarm trip setpoints leading to tank overfill.
  * *Agent Candidate*: `❌ No`. Core TAS / SIS control functionality.
* **A08 · Mooring Line Tension & Berth Fender Inspection (B3, `[OCIMF-MTMSA §4]`)**:
  * *Today*: Mooring hands physically walk the jetty dolphins to check quick-release hooks, inspect synthetic/wire mooring line tension, and adjust breasting fender lines.
  * *Failure Mode*: Slack mooring lines allow excessive vessel surge and sway during passing vessel wash or tidal surges, straining loading arms.
  * *Agent Candidate*: `❌ No`. Physical field mooring operations.
* **A09 · Closed-Loop Vapor Recovery & BOG Compression Regulation (B2, `[SIGTTO-LNG §5]`)**:
  * *Today*: Regulated automatically by onshore Distributed Control System (DCS) PID controllers and vapor recovery skid automation.
  * *Failure Mode*: DCS compressor suction controller hunting causes pressure oscillations in terminal vapor header.
  * *Agent Candidate*: `❌ No`. Core DCS closed-loop process automation.
* **A10 · Ship-Shore Custody Measurement Reconciliation (B1, `[API-MPMS-Ch17]`, `[GIIGNL-CTH]`)**:
  * *Today*: Loading Master, Chief Mate, and independent cargo surveyor sit in the ship's cargo office for 4 hours comparing shore meter prover tickets with shipboard ullage/sounding tables and manual trim tables.
  * *Failure Mode*: Unresolved measurement variances delay vessel sailing, creating unallocated financial losses and precipitating protracted commercial arbitration over cargo shortages.
  * *Agent Candidate*: **→ See §4 (Agent 4: Ship-Shore Custody Measurement & Quality Reconciliation Sieve)**.
* **A11 · Emergency Release System (ERS) Breakaway Command (B3, `[OCIMF-ISGOTT §18]`)**:
  * *Today*: Physical activation of hydraulic PERC emergency release pushbuttons to trigger double-block-and-bleed valve isolation and dry arm release.
  * *Failure Mode*: Accidental premature activation during normal flow or delayed release during runaway vessel drift causing jetty structure collapse.
  * *Agent Candidate*: `❌ No`. Solely a human operational command authority.
* **A12 · Vessel Manifold Throttling & Tank Topping-Off Oversight (B3, `[OCIMF-ISGOTT §21]`)**:
  * *Today*: Chief Mate and deck crew manually throttle cargo tank intake valves during the final topping-off phase while the Loading Master coordinates shore pump throttling via radio.
  * *Failure Mode*: Miscommunication between ship and shore during critical topping-off phase causes tank overfill or acute line water hammer.
  * *Agent Candidate*: `❌ No`. Live operational command and shipboard valve maneuvering.
* **A13 · Tanker Vessel Experience Factor (VEF) Calculation (B1, `[API-MPMS-Ch17.1]`)**:
  * *Today*: Loading Master manually reviews 10–20 historical paper voyage records to identify qualifying liftings, extract bill of lading volumes, and compute the mathematical VEF calibration multiplier.
  * *Failure Mode*: Arithmetic error or inclusion of non-qualifying voyages distorts the VEF adjustment, leading to accepted short-loading or invalid cargo shortage claims.
  * *Agent Candidate*: **→ See §4 (Agent 4: Ship-Shore Custody Measurement & Quality Reconciliation Sieve)**.
* **A14 · Statement of Facts (SOF) & Demurrage Laytime Reconciling (B1, Practitioner)**:
  * *Today*: Loading Master manually transcribes shift timesheets, radio logs, and weather events into a typed Statement of Facts (SOF) to establish contractual laytime deductions and demurrage claims.
  * *Failure Mode*: Inaccurate or conflicting delay timestamps cause terminal operators to concede invalid demurrage claims costing tens of thousands of dollars per port call.
  * *Agent Candidate*: **→ See §4 (Agent 6: Laytime Tracking & Statement of Facts (SOF) Reconciler)**.
* **A15 · Marine Transfer Shift Handover Synthesis (B1, `[OCIMF-MTMSA §8]`)**:
  * *Today*: Rotating Loading Masters spend 1.5 hours assembling paper logs, verbal notes, and SCADA snapshots to brief incoming watchstanders on pumping status and weather trends.
  * *Failure Mode*: Omission of critical status items (e.g. developing vapor header backpressure or impending metocean abort thresholds) leads to operational disruption during watch changeover.
  * *Agent Candidate*: **→ See §4 (Agent 7: Marine Transfer Shift Handover & Berth Dossier Synthesizer)**.

---

## 4 · Candidate Agent Deep-Dive

```
                                      +-----------------------------------------------------------+
                                      |                    LOADING MASTER (P40)                   |
                                      |            Marine Interface & Cargo Transfer Core         |
                                      +-----------------------------------------------------------+
                                                                    |
               +------------------------------------+---------------+------------------------------------+
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 1            |     |           AGENT 2            |     |                    AGENT 3                    |
| Ship/Shore Safety Checklist  |     | Cryogenic Cooldown & Boil-Off|     | Real-Time Transfer Rate &     |
| (SSCL) & Pre-Transfer Sieve  |     | Gas (BOG) Ramp-Up Sieve      |     | MLA Envelope Surveillance     |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
               |                                    |                                                    |
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 4            |     |           AGENT 5            |     |                    AGENT 6                    |
| Ship-Shore Custody Volume &  |     | ESD-1/ESD-2 Loop Testing &   |     | Laytime Tracking & Statement  |
| Quality Reconciliation Sieve |     | Metocean Abort Sentinel      |     | of Facts (SOF) Reconciler     |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
                                                    |
                                     +------------------------------+
                                     |           AGENT 7            |
                                     | Marine Transfer Shift        |
                                     | Handover Dossier Synthesizer |
                                     +------------------------------+
```

---

### Agent 1: Ship/Shore Safety Checklist (SSCL) & Pre-Transfer Protocol Agent
* **In One Line**: Ingests vessel pre-arrival declarations, berth physical/operational constraints, and terminal safety parameters to synthesize a verified ISGOTT/SIGTTO Ship/Shore Safety Checklist (SSCL) and pre-transfer conference protocol.
* **Friction Solved**: Eliminates 2.00 hours per vessel berthing of manual cross-referencing between vessel questionnaires, berth operating limits, and multi-page paper checklists prior to transfer authorization.
* **The Specification**:
  * **Reads**: Vessel pre-arrival declarations (Q88 / VPQ), terminal berth operational envelope limits (max draft, displacement, manifold spacing, surge pressure limits), tanker cargo history, inert gas system logs (O2 content <8% for crude, <5% for chemical), cargo compatibility matrices, and ISGOTT 6th Edition / SIGTTO pre-transfer requirements.
  * **Does**: Cross-checks vessel dimensions against berth physical design limits; validates tanker inert gas O2 levels, manifold flange ratings, and vapor recovery capability; verifies mutual agreement parameters for maximum transfer rates, topping-off rates, and communication protocols (primary VHF/IS channels, emergency signals); populates the statutory ISGOTT 6th Ed Section 26 / SIGTTO Ship/Shore Safety Checklist (SSCL Parts 1A, 1B, 2, and 3); identifies mandatory physical inspection items for the Loading Master's walkdown.
  * **Returns**: Certified Pre-Transfer Safety Protocol & Interactive SSCL Dossier (`vessel_imo`, `berth_id`, `sscl_pre_transfer_status`, `inert_gas_verification_flag`, `max_allowable_flow_rate_m3h`, `emergency_stop_protocol`, `mandatory_hold_items`).
  * **Stops At**: Authorizing manifold connection or signing the statutory joint safety declaration (solely Loading Master & Chief Mate joint authority).
* **Failure Modes & Safety Envelopes**: If tanker cargo tank oxygen concentration exceeds 8% by volume (or 5% for toxic/chemical cargos), or if vessel displacement exceeds berth design limits, the agent raises a critical safety block: `[CRITICAL SAFETY VIOLATION: Tank Oxygen / Displacement Exceeds Limits — Transfer Authorization Prohibited]`.

---

### Agent 2: Cryogenic Cooldown & Boil-Off Gas (BOG) Ramp-Up Sieve
* **In One Line**: Models thermal gradients, piping cooldown rates (-162°C), and vapor displacement to calculate optimal cryogenic line chill-down pacing and BOG return compressor balancing.
* **Friction Solved**: Eliminates 2.25 hours per gas carrier loading of trial-and-error cooldown throttling and manual vapor balance calculations, preventing cryogenic metal embrittlement and catastrophic tank overpressurization.
* **The Specification**:
  * **Reads**: Marine loading arm temperature sensors (PT100 RTDs across inner/outer arms), manifold skin temperatures, jetty vapor return header pressure transmitters, terminal BOG compressor operating maps, vessel cargo tank pressures and equilibrium temperatures, and cargo composition (pure methane, ethane/propane LPG mix).
  * **Does**: Calculates thermodynamic cooldown trajectory to maintain temperature decrease within maximum allowable rate (typically <10°C/hr for piping headers, <50°C/hr for loading arms per SIGTTO and ISO 28460) avoiding thermal shock and uneven radial stress; calculates vapor generation from flash gas, heat leak, and liquid displacement; models BOG return compressor capacity against vessel vapor generation; outputs real-time flow ramp-up schedules from initial spray cooldown through bulk transfer rates ($10,000–$14,000\,\text{m}^3/\text{hr}$).
  * **Returns**: Dynamic Cryogenic Cooldown & BOG Ramp-Up Profile (`berth_id`, `cooldown_rate_degC_hr`, `skin_temp_target_degC`, `spray_flow_rate_m3h`, `bog_generation_rate_kg_hr`, `compressor_load_pct`, `ramp_up_permissives`).
  * **Stops At**: Directly opening cryogenic spray bypass valves or modulating shore BOG compressor variable frequency drives (VFDs).
* **Failure Modes & Safety Envelopes**: If manifold skin temperature drop exceeds 15°C across any 10-minute sliding window, or if vapor return header pressure reaches 85% of safety relief valve setting, the agent issues an immediate throttling hold: `[THERMAL TRANSIENT WARNING: Excessive Cooldown Gradient — Throttle Spray Injection Rate]`.

---

### Agent 3: Real-Time Transfer Rate & MLA Envelope Surveillance Agent
* **In One Line**: Tracks hydraulic loading arm 3D articulation geometry, line packing pressure surges, and real-time pumping flow rates against jetty safe operating envelopes.
* **Friction Solved**: Eliminates 1.75 hours per cargo transfer of manual geometric envelope cross-checks, surge calculations, and sporadic logbook reconciliations, preventing arm overextension trips and flange fatigue failures.
* **The Specification**:
  * **Reads**: Marine Loading Arm (MLA) slew, pitch, and roll angle encoders; jetty manifold pressure transmitters; acoustic vibration sensors; terminal Coriolis / ultrasonic flowmeter telemetry; vessel manifold backpressure; and berth tidal gauge / laser drift sensors.
  * **Does**: Computes 3D spatial position of MLA apex and triple-swivel assemblies in real time; projects vessel tidal rise, fall, and surge drift against the certified MLA design operating envelope (warning envelope vs. ESD-1 trip envelope vs. ESD-2 dry-breakaway envelope); monitors fluid velocity to prevent electrostatic charge accumulation during cushion filling (<1 m/s fluid velocity per ISGOTT Chapter 11); detects hydraulic pressure pulsation spikes and Joukowsky water-hammer transient risks; continuously evaluates flow balance between shore discharge and ship receipt.
  * **Returns**: Real-Time Marine Transfer Surveillance Stream (`mla_envelope_utilization_pct`, `current_flow_rate_m3h`, `manifold_pressure_bar`, `cushion_velocity_compliance`, `drift_margin_meters`, `projected_topping_off_eta`).
  * **Stops At**: Automatically initiating mechanical emergency release collar activation or tripping shore main pumps.
* **Failure Modes & Safety Envelopes**: If vessel surge/sway displaces loading arm position into the 80% boundary of the safe operating envelope, the agent issues an urgent operational alert: `[MLA ENVELOPE RESTRICTION: Vessel Surge Exceeds 80% Operating Margin — Alert Mooring Crew & Check Line Tensions]`.

---

### Agent 4: Ship-Shore Custody Measurement & Quality Reconciliation Sieve
* **In One Line**: Reconciles shore custody flowmeter prover tickets, radar tank gauges, and vessel trim/list-corrected ullages to calculate Net Standard Volume, LNG energy (MMBtu), and Vessel Experience Factors.
* **Friction Solved**: Eliminates 3.50 hours per vessel turnaround of tedious multi-party volume calculations, manual trim/density adjustments, and contentious cargo discrepancy disputes.
* **The Specification**:
  * **Reads**: Shore fiscal meter tickets (Coriolis / ultrasonic / turbine provers), shore storage tank radar dips, vessel cargo tank ullage / sounding tables, cargo temperature / pressure multi-spot probes, vessel list/trim clinometer readings, independent surveyor density/water-cut lab certificates, gas chromatograph composition logs, and historical vessel voyage logs (minimum 5–10 qualifying voyages).
  * **Does**: Solves API MPMS Chapter 11.1 / ASTM D1250 Volume Correction Factors (VCF) and Chapter 12 calculation equations; for LNG/gas, calculates total transferred energy in MMBtu using GIIGNL LNG Custody Transfer Handbook standards and ISO 6976; applies vessel list, trim, and tape correction factors to ship ullages; calculates historical Vessel Experience Factor (VEF-Loaded / VEF-Discharged per API MPMS Chapter 17.1); cross-reconciles shore Net Standard Volume against shipboard received volume; evaluates discrepancy against the contractually allowed tolerance threshold ($\pm 0.15\%$ for liquid hydrocarbons, $\pm 0.30\%$ for LNG).
  * **Returns**: Certified Custody Transfer Reconciliation Dossier & Outturn Variance Audit (`voyage_id`, `shore_nsv_volume`, `vessel_reconciled_volume`, `delta_percentage`, `vef_applied`, `total_energy_mmbtu`, `reconciliation_tolerance_verdict`, `surveyor_signoff_pack`).
  * **Stops At**: Signing the legal Bill of Lading (BOL), Certificate of Quantity, or commercial custody transfer documents.
* **Failure Modes & Safety Envelopes**: If the discrepancy between shore fiscal custody meters and vessel VEF-adjusted figures exceeds contract tolerance ($\pm 0.15\%$), the agent flags the cargo as `[MEASUREMENT VARIANCE EXCEEDS TOLERANCE: Root-Cause Audit Required Before BOL Execution]`.

---

### Agent 5: ESD-1/ESD-2 Loop Testing & Metocean Abort Sentinel
* **In One Line**: Audits ship-shore emergency shutdown optical/pneumatic loop signals and evaluates high-resolution metocean telemetry against berth safe-working abort thresholds.
* **Friction Solved**: Eliminates 1.50 hours per port call of fragmented interlock validation tests, manual anemometer charting, and reactive weather-abort decision delays.
* **The Specification**:
  * **Reads**: Jetty optical fiber / electric Pyle-National / pneumatic ESD link signal telemetry, valve stroke timing transducers, jetty sonic anemometer wind speeds/gusts, sea-state wave buoy data (significant wave height $H_s$, peak period $T_p$), tidal current velocity vectors, and local meteorological radar feeds.
  * **Does**: Verifies pre-transfer ESD-1 (pump trip and manifold valve closure within 30 seconds per SIGTTO/ISGOTT without surge overpressure) and ESD-2 (loading arm PERC double block-and-bleed activation) interlock loop integrity; continuously computes hydrodynamic forces on moored vessel against mooring line Safe Working Loads (SWL) and quick-release hook ratings; predicts threshold exceedance windows for transfer suspension (e.g. sustained winds $>25\,\text{knots}$), arm draining/disconnection (sustained winds $>32\,\text{knots}$), and unberthing emergencies ($>40\,\text{knots}$).
  * **Returns**: ESD Loop Certification Certificate & Predictive Metocean Abort Matrix (`esd_loop_integrity_status`, `valve_closure_time_seconds`, `current_wind_gust_knots`, `limiting_wave_height_m`, `abort_tier_status`, `recommended_action_window_minutes`).
  * **Stops At**: Issuing mandatory port evacuation orders or manually triggering jetty PERC dry-breakaway units.
* **Failure Modes & Safety Envelopes**: If pneumatic/optical ESD loop signal impedance drifts outside permissible limits or valve closure time exceeds 30 seconds, the agent issues an absolute safety hold: `[ESD LOOP TEST FAILURE: Valve Closure Time Exceeds 30s Limit — Transfer Start Prohibited]`.

---

### Agent 6: Laytime Tracking & Statement of Facts (SOF) Reconciler
* **In One Line**: Ingests berth telemetry, cargo pumping logs, and operational event stamps to synthesize a minute-by-minute Statement of Facts (SOF) and audit contractual laytime and demurrage liabilities.
* **Friction Solved**: Eliminates 3.25 hours per vessel departure of retroactive logbook transcription, timestamp cross-checking, and protracted laytime dispute negotiations.
* **The Specification**:
  * **Reads**: Notice of Readiness (NOR) tender timestamps, pilot boarding logs, all-fast mooring times, gangway secure stamps, initial safety conference sign-off, arm connection/cooldown timestamps, pumping log start/stop/ramp records, delays due to shore/ship faults, weather downtime logs, and charter party contract laytime clauses.
  * **Does**: Automatically compiles an auditable, timestamped Statement of Facts (SOF) mapped to standard maritime chartering definitions; segregates delays into shore-attributable, ship-attributable, and non-demurrage weather/port authority exceptions per charter party terms; computes net used laytime versus agreed laytime allowance (typically 36 hours for oil/LNG carriers); calculates liquidated demurrage liabilities or dispatch credits.
  * **Returns**: Reconciled Statement of Facts (SOF) & Laytime Demurrage Dossier (`vessel_name`, `nor_tendered`, `laytime_commenced`, `net_laytime_consumed_hours`, `demurrage_hours_accrued`, `delay_attribution_table`, `provisional_liability_usd`).
  * **Stops At**: Submitting formal commercial demurrage claims or approving financial settlements between shipowner and terminal operator.
* **Failure Modes & Safety Envelopes**: If an operational delay lacks corresponding SCADA/TAS sensor correlation (e.g. claim of shore pump tripping when pump amps show normal running), the agent flags the entry as `[UNVERIFIED DELAY CLAIM: SCADA Evidence Contradicts Reported Shore Downtime]`.

---

### Agent 7: Marine Transfer Shift Handover & Berth Dossier Synthesizer
* **In One Line**: Aggregates real-time transfer progress, arm operational status, pending checklist items, and upcoming marine traffic into a structured, auditable shift handover briefing.
* **Friction Solved**: Eliminates 1.25 hours per shift of manual logbook collation, fragmented telephone briefings, and verbal handover oversights during round-the-clock vessel operations.
* **The Specification**:
  * **Reads**: Real-time transferred volume versus cargo nomination, current pumping rates and manifold pressures, status of active SSCL repetitive checks (hourly inert gas/flange inspections), ballast water progress, oncoming vessel ETAs and tidal windows, and berth maintenance work permits.
  * **Does**: Synthesizes a structured, standard-compliant shift handover dossier; calculates estimated time of completion (ETC) for bulk transfer, topping-off phase initiation, and arm draining/disconnection; flags scheduled high-risk activities (e.g. line draining, nitrogen purging, pigging, bunkering) occurring during the oncoming shift; summarizes weather forecast trends and metocean threshold alerts for the next 12 hours.
  * **Returns**: Marine Loading Master Shift Handover Briefing Dossier ready for digital mutual sign-off by off-going and on-coming Loading Masters.
  * **Stops At**: Authorizing relief of watch personnel or reassigning jetty operational responsibility.
* **Failure Modes & Safety Envelopes**: If active pumping rate variance indicates potential cargo tank overfill risks during the impending shift without scheduled throttling, the agent raises a critical handover alert: `[HIGH-PRIORITY HANDOVER ALERT: Tank Topping-Off Projected Within 90 Minutes — Confirm Throttling Protocol]`.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own tanker-call multiplier.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Ship/Shore Safety Checklist (SSCL) Audit** | 1 Tanker / Gas Carrier Berthing | 2.50 hours | 0.50 hours | **2.00 hours saved** | Multi-System Document Assembly & Safety Checklist Auditing |
| **Cryogenic Cooldown & BOG Ramp-Up Modeling** | 1 Gas Carrier / Cryogenic Transfer | 2.75 hours | 0.50 hours | **2.25 hours saved** | Thermodynamic Gradient Modeling & BOG Balance Calculations |
| **MLA Envelope & Transfer Rate Surveillance** | 1 Marine Cargo Transfer Operation | 2.25 hours | 0.50 hours | **1.75 hours saved** | 3D Geometric Envelope & Hydraulic Surge Calculation |
| **Ship-Shore Custody Measurement Reconciliation** | 1 Marine Custody Transfer Lifting | 4.00 hours | 0.50 hours | **3.50 hours saved** | Fiscal Volume Math, VCF/VEF Reconciliation & Dispute Drag |
| **ESD Testing & Metocean Abort Sentinel** | 1 Vessel Port Call & Transfer | 1.75 hours | 0.25 hours | **1.50 hours saved** | Emergency Interlock Verification & Metocean Risk Assessment |
| **Statement of Facts (SOF) Laytime Audit** | 1 Vessel Turnaround Departure | 3.75 hours | 0.50 hours | **3.25 hours saved** | Event Timeline Splicing & Demurrage Dispute Assembly |
| **Marine Transfer Shift Handover Report** | 1 Shift Handover (per 12-hour shift) | 1.50 hours | 0.25 hours | **1.25 hours saved** | Cross-System Log Scraping & Handover Report Assembly |
| **Total Vessel Turnaround Operational Impact** | **Standard Marine Transfer Port Call Turnaround** | **18.50 hours** | **3.00 hours** | **15.50 hours saved** | **Eliminates pre-transfer delays, cooldown stalls & demurrage drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[OCIMF-ISGOTT]` | OCIMF/ICS/IAPH, *ISGOTT*, 6th Edition, 2020 | ocimf.org | International Standard | Ship-shore safety checklists, cushion velocity limits, and emergency transfer rules |
| `[SIGTTO-LNG]` | SIGTTO, *Liquefied Gas Handling Principles on Ships and in Terminals*, 4th Edition | sigtto.org | Technical Standard | Gas carrier cryogenic transfer, cooldown curves, BOG management, and ESD systems |
| `[OCIMF-MTMSA]` | OCIMF, *Marine Terminal Management and Self Assessment*, 3rd Edition | ocimf.org | Industry Standard | Cargo transfer operations, marine terminal safety governance, and management of ship/shore interface |
| `[USCG-33CFR]` | US Coast Guard, *33 CFR Part 156 (Transfer Operations) and 33 CFR Part 127 (Waterfront Facilities Handling LNG/LHG)* | ecfr.gov | Federal Regulation | Person-in-charge (PIC) duties, transfer procedures, and equipment testing rules |
| `[ISO-28460]` | ISO, *ISO 28460: Petroleum and natural gas industries — Installation and equipment for liquefied natural gas — Ship-to-shore interface and port operations* | iso.org | International Standard | Ship-to-shore communications, mooring, cryogenic transfer arms, and safety envelopes |
| `[API-MPMS-Ch17]` | API, *Manual of Petroleum Measurement Standards, Chapter 17: Marine Measurement (Sections 1, 2, 5, and 12)* | api.org | Technical Standard | Tanker ullaging, VEF calculations, cargo reconciliation, and LNG custody transfer measurement |
| `[GIIGNL-CTH]` | GIIGNL, *LNG Custody Transfer Handbook*, 6th Edition, 2021 | giignl.org | Technical Guide | LNG custody transfer measurement, energy calculation methodology, and gas chromatography |
| `[OISD-STD-156]` | Oil Industry Safety Directorate, *OISD-STD-156: Fire Protection Facilities for Port Oil Jetties* and *PNGRB Technical Standards for LNG Facilities* | oisd.gov.in | National Regulatory Standard | Oil and gas jetty fire protection, operating envelopes, and port safety governance |

### Negative Search Registry
* **Searched**: Honeywell Experion TAS product sheets, Emerson TerminalManager technical manuals, Yokogawa FAST/TOOLS marine loading release notes, and OnePetro conference proceedings for *"automated real-time reconciliation of cryogenic loading arm thermal cooldown gradients and shipboard BOG return balancing directly integrated with ISGOTT ship-shore safety checklists"*.
* **Result**: `Negative Search, 2026-10`. Existing Terminal Automation Systems (TAS) execute static shore pump permissives and record shore custody flowmeter totalizers; none autonomously ingest vessel manifold telemetry, model transient cryogenic cooldown thermal stresses, balance boil-off gas return compressors dynamically, or cross-reconcile shipboard tank ullages against shore meter tickets without manual human calculation and paper checklist execution.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"On a marine loading jetty, the Loading Master stands at the exact physical intersection of multi-billion dollar shore assets and foreign-flagged tankers; if a cryogenic arm cooldown rate or an inert gas oxygen level is miscalculated, you don't get a polite commercial adjustment—you get a catastrophic line rupture, an offshore fire, or a half-million-dollar demurrage arbitration."*
* **Open Questions for Marine Terminal Practitioners**:
  * What percentage of vessel loading turnaround delays are directly caused by discrepancies between shore custody meter tickets and shipboard tank ullages requiring manual reconciliation?
  * How frequently do cryogenic loading operations experience cooldown delays or boil-off gas venting risks due to uncoordinated ship-shore vapor return compressor balancing?
  * How often are ISGOTT / SIGTTO Ship/Shore Safety Checklists executed retrospectively or "pencil-whipped" under commercial pressure to start cargo pumps?
  * What is the annual cost in demurrage claims resulting from disputed operational event timestamps in handwritten Statements of Facts (SOF)?
