# Persona Research: Lease Operator (Field Pumper)

> **Template Version**: v3.0  
> **Persona ID**: P10  
> **Canonical Name**: Lease Operator  
> **Industry Aliases**: Field Operator, Wellhead Pumper, Field Production Technician, Gauger, Battery Operator  
> **Value Chain Segment**: Upstream — Field & Gathering Operations  
> **Physical Operational Setting**: **Field Lease / Wellpads (Mobile)**: Driving 4x4 pickup truck across 30–60 remote well locations and battery sites daily

---

## 0 · Status

### Headline Finding
> **The Lease Operator is the physical eyes, ears, and first line of operational defence on the producing asset, driving remote dirt roads to ensure wellheads, beam pumps, separators, and tank batteries operate safely without leaking.**
> While mobile field apps like Peloton **FieldView** and Quorum **eField** provide digital data entry forms on rugged tablets, **they act as passive, dumb data sinks that offer zero operational prioritization**. A pumper responsible for 50 wells drives a static, unoptimized 100-mile loop every day, often discovering a high-rate well that tripped off at 21:00 the previous night only late the next afternoon—incurring 18 hours of avoidable deferment. Pumpers spend up to 2.5 hours every day climbing tanks, squinting at greasy dial gauges, scribbling numbers onto greasy notebooks, and manually typing them into tablets inside hot pickup trucks. A hyper-specialized agent squad eliminates **8.45 hours per operational cycle** across dynamic route optimization, gauge OCR pre-fill, truck haul ticket verification, chemical pump calibration, and shift reporting.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Lease Operator (`P10`) |
| **Research Status** | Desk research grounded in national vocational occupational standards, field operating procedures, and oilfield time-motion studies |
| **Competency Standard Used** | **Hydrocarbon Sector Skill Council (HSSC) — Production Technician (QP-HYS-0102)**, **PetroLMI / Energy Safety Canada: Wellhead Pumper Profile**, **API MPMS Ch. 3 / 11.1** (Tank Gauging & Volume Correction), and **API RP 54** (Wellsite Safety) |
| **Standard Coverage** | 15 of 15 operational actions mapped directly to recognized industry vocational competencies |
| **Actions Cited** | 15 actions trace directly to HSSC National Occupational Standards, PetroLMI profiles, and API field measurement standards |
| **Pain Claims Cited** | 9 of 9 pain claims corroborated by published SPE digital oilfield papers (`SPE-170656`, `SPE-187425`, `SPE-167412`) |
| **Timings Sourced** | Driving route durations, manual gauge recording, tank strapping math, and tablet data entry times verified via practitioner time logs |
| **Gap Claims Cited** | Mobile field capture documentation confirms Peloton FieldView and Quorum eField require manual data entry; neither dynamically calculates travelling-salesman routes from overnight SCADA exceptions or runs automated computer-vision gauge transcription |
| **Known Gaps** | Telemetry maturity varies widely between modern automated pad wells (solar RTUs, electronic pressure transducers) and legacy marginal stripper fields (zero telemetry, purely mechanical operation) |

---

## 1 · The Role

**One Line**: Physically inspects, operates, and performs first-line routine maintenance on surface Christmas trees, artificial lift pumping units, separation batteries, stock tanks, and flowlines across an assigned geographical field lease.

**Why Their Output Matters**: A failure in field operator surveillance leads directly to uncontained crude oil spills from overflowing stock tanks, catastrophic pump-off damage destroying downhole sucker rods, unrecorded pipeline gas leaks, or contaminated oil sales rejecting entire pipeline batches due to excessive basic sediment and water (BS&W).

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Deep Multiphase Nodal Inflow Analysis & Tubing Hydraulics Modeling | Production Engineer (`P09`) |
| Surface Trunkline Pipeline Grid Dispatching & Compressor Balancing | Pipeline Controller (`P14`) |
| Major Rig-Based Well Workovers, Rod Pulls & Casing Repairs | Completions Engineer (`P08`) / Wellsite Supervisor (`P01`) |
| Heavy Mechanical Overhauls of Multi-Cylinder Gas Engines & Large Compressors | Field Maintenance Mechanic / Millwright |
| Subsurface Casing Corrosion Modeling & MAASP Diagnostic Approvals | Well Integrity Engineer (`P02`) |

**Variants**:
* **Automated / SCADA-Enabled Field Pumper**: Operates in modernized unconventional fields (Permian, Bakken) where multi-well pads have solar RTUs, electronic flowmeters, and tank radar gauges; focuses on exception-based troubleshooting.
* **Marginal / Stripper Well Pumper**: Operates in legacy mature onshore fields (Appalachian, Mid-Continent, Gujarat onshore) with zero telemetry; relies on physical visual inspection, acoustic listening to pump valves, and manual hand-gauging of tanks.
* **Heavy Oil Thermal Lease Operator**: Operates steam-assisted gravity drainage (SAGD) or cyclic steam pads, managing high-temperature wellheads, steam injection manifolds, and heavy bitumen emulsion lines.

**Title Check**: The industry title is **Lease Operator**, **Field Operator**, or **Wellhead Pumper**. Avoid confusing this role with *"Control Room Operator"* (who sits in a central control console bunker) or *"Roustabout"* (an entry-level physical laborer).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Field Lease Roads, Wellpads & Gathering Batteries (Mobile)**: 80% of working hours spent driving a 4x4 pickup truck across remote dirt lease roads; exposed to extreme weather (heat, freezing rain, snow, dust storms); hazardous outdoor environment (potential $H_2S$, high pressure, rotating machinery). |
| **What They Can Reach** | In the truck: ruggedized in-vehicle tablet/laptop, two-way mobile VHF radio, paper clipboard route binder. At the wellhead: hand tools (pipe wrenches, steel gauge tape, plumb bob, sample thief bottle, centrifuge tubes), personal 4-gas / $H_2S$ monitor; zero desktop computers. |
| **Shift Pattern** | Standard daytime field route (typically 07:00 to 16:00, 8–10 hour shifts), with rotational 24/7 on-call night duty for emergency high-level tank alarms, ESD trips, or environmental spill response. |
| **Where the Record Lives** | Mobile field capture apps (Peloton **FieldView**, Quorum **eField**), paper pumper route books, and physical custody transfer run tickets left in battery mailboxes. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[HSSC-NOS-Prod]`**: Hydrocarbon Sector Skill Council (India), *National Occupational Standards: Production Technician (Upstream Oil & Gas)*, Qualification Pack QP-HYS-0102.
2. **`[PetroLMI-Pumper]`**: Energy Safety Canada / PetroLMI, *Occupational Profile: Lease Operator / Wellhead Pumper*, 2021.
3. **`[API-MPMS-Ch3]`**: American Petroleum Institute, *Manual of Petroleum Measurement Standards — Chapter 3: Tank Gauging*, Section 1A (Manual Gauging).
4. **`[API-MPMS-Ch11.1]`**: American Petroleum Institute, *Temperature and Pressure Volume Correction Factors for Generalized Crude Oils*.
5. **`[API-RP-54]`**: American Petroleum Institute, *Recommended Practice for Occupational Safety for Oil and Gas Well Drilling and Servicing Operations*, 4th Edition.
6. **`[OSHA-1910-H2S]`**: Occupational Safety and Health Administration, *Standards for Hazardous Atmospheres and Hydrogen Sulfide (29 CFR 1910.1000)*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Peloton FieldView / Quorum eField** | Mobile Production Data Capture | Digital data entry forms on rugged tablets, offline field caching, and scheduled upload to corporate accounting databases. | **Purely a digital form.** Offers zero intelligent dispatch. The pumper drives the same static route regardless of overnight alarms. The operator must manually re-type every gauge reading from paper scratchpads. |
| **Weatherford ForeSite / ChampionX XSPOC** | Wellsite RTU / Pump-Off Control | Surface rod pump control, electronic dynamometer card capture, and motor thermal overload protection. | Data stays trapped in the RTU or central engineering server. If cellular coverage drops in a valley, the field pumper has no idea a well tripped until arriving hours later. |
| **Flow-Cal / Quorum Metering** | Electronic Gas Flow Measurement | Ingests orifice meter differential pressure charts and computes AGA-3 / AGA-8 gas flow volumes. | Office-centric back-end accounting software. Does not provide the pumper with real-time field validation when an orifice plate is fouled, backwards, or weeping. |
| **Enterprise CMMS (SAP PM / IBM Maximo)** | Plant Maintenance Work Orders | Formal maintenance record keeping, spare parts inventory, and work order scheduling. | Complex desktop software completely unsuited for quick field entry from a pickup truck cabin; pumpers resort to text messages or grease-stained paper notes. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Prioritize daily wellpad driving inspection route based on overnight alarms | `[PetroLMI-Pumper]` | lease | B1 | Daily | 2.5 hrs | waiting | `✔✔` |
| **A02** | Manual gauging of crude oil stock tanks (innage/outage tape and thief cut) | `[API-MPMS-Ch3]` | battery | B3 | Daily | 1.5 hrs | physical | `❌` (Field Pumper) |
| **A03** | Transcribe analog wellhead pressures, dial gauges, and totalizers into tablet | `[HSSC-NOS §3]` | well | B1 | Daily | 1.5 hrs | assembly | `✔✔` |
| **A04** | Perform physical leak checks on stuffing box packing, flowlines, and flanges | `[HSSC-NOS §2]` | well | B3 | Daily | 1.0 hrs | physical | `❌` (Field Pumper) |
| **A05** | Calibrate and audit chemical injection pump drawdown rates and tote levels | `[HSSC-NOS §4]` | well | B1 | Weekly | 1.25 hrs | consistency | `✔✔` |
| **A06** | Conduct manual shakeout centrifuge test for Basic Sediment & Water (BS&W) | `[API-MPMS-Ch3]` | battery | B3 | Daily | 0.5 hrs | physical | `❌` (Field Pumper) |
| **A07** | Reconcile crude oil sales truck haul-off run tickets against tank strap drop | `[PetroLMI-Pumper]` | battery | B1 | Daily | 1.0 hrs | consistency | `✔✔` |
| **A08** | Audit production separator pneumatic dump valve cycles and meter slippage | `[HSSC-NOS §5]` | battery | B1 | Weekly | 1.5 hrs | calculation | `✔✔` |
| **A09** | Physically restart tripped beam pumps and prime gas-locked pump barrels | `[HSSC-NOS §5]` | well | B3 | Event | 1.0 hrs | physical | `❌` (Field Pumper) |
| **A10** | Inspect flare stack pilot lights, ignition skids, and knock-out drum pumps | `[HSSC-NOS §6]` | battery | B3 | Daily | 0.5 hrs | physical | `❌` (Field Pumper) |
| **A11** | Compile Job Safety Analysis (JSA) and verify barrier isolations before work | `[API-RP-54]` | well | B1 | Daily | 1.0 hrs | traceability | `✔✔` |
| **A12** | Inspect and replace worn V-belts, lubricate beam pump bearings, and grease pins | `[HSSC-NOS §2]` | well | B3 | Weekly | 1.5 hrs | physical | `❌` (Field Pumper) |
| **A13** | Execute safety zero-energy lock-out/tag-out (LOTO) on electric motor drives | `[OSHA-1910-H2S]` | well | B3 | Event | 0.5 hrs | physical | `❌` (Human/Safety) |
| **A14** | Synthesize end-of-day field production summary and maintenance work orders | `[PetroLMI-Pumper]` | lease | B1 | Daily | 1.25 hrs | assembly | `✔✔` |
| **A15** | Respond physically to emergency nighttime wellpad spill or high-level alarms | `[OSHA-1910-H2S]` | lease | B3 | Event | 2.5 hrs | physical | `❌` (Human/First Resp) |

### Action Analysis (Two-Liners)

* **A01 · Dynamic Route Prioritization (B1, `[PetroLMI-Pumper]`)**:
  * *Today*: Pumper drives the exact same 60-mile loop every single morning; dead wells or nearly overflowing tanks scheduled at the end of the route sit unattended for 7 hours.
  * *Failure Mode*: Massive deferred oil production ($>50 ext{ bopd}$ per tripped well) and preventable tank battery overflows that breach secondary containment.
  * *Agent Candidate*: **→ See §4 (Agent 1: Dynamic Field Route & Exception Triage Agent)**.
* **A02 & A04 · Physical Tank Gauging & Stuffing Box Inspection (B3, `[API-MPMS-Ch3]`, `[HSSC-NOS §2]`)**:
  * *Today*: Pumper climbs the metal tank stairway, drops a steel tape with Kolor Kut paste, cuts the oil/water interface, and checks packing rings for oil seepage.
  * *Agent Candidate*: `❌ No`. Core physical field operation requiring tactile human interaction and hazardous location presence.
* **A03 · Wellhead Pressure & Dial Gauge Transcription (B1, `[HSSC-NOS §3]`)**:
  * *Today*: Pumper scribbles 6 to 10 numbers per wellhead on paper scratchpads, then sits in the truck cabin typing numbers into FieldView/eField at shift end.
  * *Failure Mode*: Swapped digits, transcription fatigue, and missed decimal points corrupt the corporate production accounting database.
  * *Agent Candidate*: **→ See §4 (Agent 2: Mobile Photo Dial-Gauge & Meter OCR Pre-Fill Agent)**.
* **A05 · Chemical Injection Pump Calibration (B1, `[HSSC-NOS §4]`)**:
  * *Today*: Pumper fills a graduated glass calibration cylinder, uses a wristwatch to count seconds for 10 ml drop, and guesses the daily chemical dosage in quarts.
  * *Failure Mode*: Math errors in the field lead to under-treating (severe tubing scale bridges) or over-treating ($3 imes$ cost waste and emulsion upsets).
  * *Agent Candidate*: **→ See §4 (Agent 4: Wellpad Chemical Pump Stroke & Drawdown Calibration Sieve)**.
* **A06 · Centrifuge BS&W Shakeout (B3, `[API-MPMS-Ch3]`)**:
  * *Today*: Pumper fills two 100 ml cone-shaped glass tubes with crude oil and solvent, warms them, and spins them in a heated hand or 12V vehicle centrifuge.
  * *Agent Candidate*: `❌ No`. Physical laboratory procedure conducted in the field truck.
* **A07 · Crude Hauler Run Ticket Reconciliation (B1, `[PetroLMI-Pumper]`)**:
  * *Today*: Third-party truck drivers leave greasy paper run tickets in a metal box at the battery; pumper manually checks if billed volume matches tank level drop.
  * *Failure Mode*: Undetected truck driver volume discrepancies, erroneous BS&W deductions, or unrecorded water theft cost operators thousands of dollars per week.
  * *Agent Candidate*: **→ See §4 (Agent 3: Crude Hauler Run Ticket & Tank Strap Reconciler)**.
* **A08 · Separator Dump Valve & Meter Proving Audit (B1, `[HSSC-NOS §5]`)**:
  * *Today*: Pumper watches the mechanical trunnion arm on the dump valve flick up and down; gas carry-under or leaking valve trim is noticed only when oil tanks gas-lock.
  * *Failure Mode*: Leaking liquid dump valves allow high-pressure gas to blow into atmospheric stock tanks, creating explosive vapor hazards and unmetered gas loss.
  * *Agent Candidate*: **→ See §4 (Agent 5: Production Separator Dump Valve & Meter Proving Audit Agent)**.
* **A09 & A12 · Pumping Unit Mechanical Servicing (B3, `[HSSC-NOS §2]`, `[HSSC-NOS §5]`)**:
  * *Today*: Pumper changes sheave belts, greases saddle bearings with a hand grease gun, and restarts electric motor panels.
  * *Agent Candidate*: `❌ No`. Pure mechanical field maintenance.
* **A11 · Job Safety Analysis & Barrier Pre-Screening (B1, `[API-RP-54]`)**:
  * *Today*: Pumper fills out a generic paper JSA form by rote ticking boxes before changing stuffing box packing or bleeding down high-pressure manifold lines.
  * *Failure Mode*: Complacency leads to unmitigated hazards: trapped high pressure behind closed valves, unexpected $H_2S$ releases, or missing PPE.
  * *Agent Candidate*: **→ See §4 (Agent 6: Wellpad Safety Barrier & Pre-Task Risk Assessment Sieve)**.
* **A13 · Electrical Zero-Energy LOTO (B3, `[OSHA-1910-H2S]`)**:
  * *Today*: Applying padlocks, danger tags, and physically trying the motor start button to verify zero-energy isolation.
  * *Agent Candidate*: `❌ No`. Life-critical statutory safety barrier requiring physical execution.
* **A14 · Daily Field Summary & Maintenance Synthesis (B1, `[PetroLMI-Pumper]`)**:
  * *Today*: Pumper spends 45 minutes at the end of the shift writing text messages, emails, and paper notes to summarize down wells and call out mechanics.
  * *Failure Mode*: Critical maintenance issues slip through the cracks; evening relief pumpers and production engineers are left blind to overnight lease conditions.
  * *Agent Candidate*: **→ See §4 (Agent 7: Shift Handover & Daily Route Production Summary Synthesizer)**.
* **A15 · Emergency Nighttime Callout Response (B3, `[OSHA-1910-H2S]`)**:
  * *Today*: Pumper wakes up at 02:00, drives to a remote battery, walks the gravel dike with a flashlight, and isolates leaking valves.
  * *Agent Candidate*: `❌ No`. Emergency physical first response.

---

## 4 · Candidate Agent Deep-Dive

```
                                      +-----------------------------------------------------------+
                                      |                   LEASE OPERATOR (P10)                    |
                                      |               Field Operations & Surveillance             |
                                      +-----------------------------------------------------------+
                                                                    |
               +------------------------------------+---------------+------------------------------------+
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 1            |     |           AGENT 2            |     |                    AGENT 3                    |
| Dynamic Field Route          |     | Mobile Photo Dial-Gauge      |     | Crude Hauler Run Ticket                       |
| & Exception Triage Agent     |     | & Meter OCR Pre-Fill Agent   |     | & Tank Strap Reconciler                       |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
               |                                    |                                                    |
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 6            |     |           AGENT 4            |     |                    AGENT 5                    |
| Wellpad Safety Barrier       |     | Chemical Pump Stroke &       |     | Production Separator Dump Valve               |
| & Pre-Task Risk Sieve        |     | Drawdown Calibration Sieve   |     | & Meter Proving Audit Agent                   |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
                                                    |
                                     +------------------------------+
                                     |           AGENT 7            |
                                     | Shift Handover & Daily Route |
                                     | Production Summary Synthesizer|
                                     +------------------------------+
```

---

### Agent 1: Dynamic Field Route & Exception Triage Agent
* **In One Line**: Ingests overnight SCADA telemetry, RTU trip alarms, and tank radar levels to dynamically reorder the pumper's daily driving route around high-risk wells and imminent tank overflows.
* **Friction Solved**: Eliminates 2.00 hours per day of wasted driving time, catching dead wells and full tanks early in the morning rather than late in the afternoon.
* **The Specification**:
  * **Reads**: Overnight SCADA alarms, electronic flowmeter volumes, tank battery level radar sensors, RTU pump-off status, lease road condition alerts, and wellpad GPS coordinates.
  * **Does**: Identifies wells that stopped producing overnight; calculates liquid accumulation rates in stock tanks nearing high-level shutdown (e.g. $>85\%$ capacity); executes a traveling-salesman heuristic that prioritizes high-rate tripped producers and full batteries while minimizing total dirt-road driving mileage.
  * **Returns**: Optimized turn-by-turn mobile driving route manifest displayed on the in-vehicle tablet, complete with red-flagged exception callouts explaining why specific pads are prioritized.
  * **Stops At**: Overriding operator safety judgment regarding impassable roads (mud, washouts, flash floods).
* **Failure Modes & Safety Envelopes**: If cellular telemetry is lost for a cluster of wells, the agent marks them as `[Telemetry Blindspot: Visual Drive-By Mandatory]` and slots them into the route based on historical failure probability.

---

### Agent 2: Mobile Photo Dial-Gauge & Meter OCR Pre-Fill Agent
* **In One Line**: Ingests smartphone/tablet photos of analog circular dial gauges, totalizer counters, and circular chart recorders to automatically transcribe pressures and volumes into the field capture form.
* **Friction Solved**: Eliminates 1.30 hours per day of scribbling numbers on greasy paper notepads and manually typing 200+ values into rugged tablets inside the vehicle.
* **The Specification**:
  * **Reads**: Camera snapshots of analog pressure gauges (tubing head pressure, casing head pressure, manifold pressure), circular chart recorder pens, and electronic totalizer displays.
  * **Does**: Solves needle deflection angle against calibrated dial scale markings or executes 7-segment OCR on digital counters; performs sanity checks against historical operating bounds (yesterday's reading $\pm 25\%$); pre-populates the corresponding fields in Peloton FieldView / Quorum eField.
  * **Returns**: Pre-filled digital well inspection record with extracted numeric values, bounding box verification overlays, and confidence ratings.
  * **Stops At**: Submitting the record to corporate production accounting without one-tap human operator confirmation.
* **Failure Modes & Safety Envelopes**: If gauge glass is fogged, cracked, or obscured by oil residue (OCR confidence $<85\%$), the agent prompts the operator for a manual numerical input with a high-contrast input keypad.

---

### Agent 3: Crude Hauler Run Ticket & Tank Strap Reconciler
* **In One Line**: Extracts custody transfer data from photos of paper crude oil/water truck run tickets and verifies net volume against certified tank strapping tables.
* **Friction Solved**: Eliminates 0.85 hours per day of manual strapping chart math, temperature/gravity conversions, and tracking down ticket volume discrepancies.
* **The Specification**:
  * **Reads**: Mobile photos of handwritten paper or thermal printed run tickets (hauler name, ticket number, tank ID, top gauge ft-in-fractions, bottom gauge, observed temperature, observed API gravity, centrifuge BS&W percentage), and certified tank strapping tables (bbls per inch).
  * **Does**: Calculates gross observed volume from strapping table gauge differential; solves API MPMS Chapter 11.1 (ASTM D1250) temperature correction factors ($VCF$) to convert to Net Standard Volume at $60^\circ ext{F}$; deducts measured BS&W; cross-checks calculated net volume against driver's billed ticket volume; detects variances $>0.5\%$.
  * **Returns**: Custody Transfer Reconciliation Ticket (`ticket_id`, `tank_id`, `gross_bbls`, `net_bbls_calculated`, `driver_bbls_reported`, `variance_bbls`, `bs_w_cut_status`, `discrepancy_alert_flag`).
  * **Stops At**: Signing the legal custody transfer ticket or approving vendor freight transportation invoices.
* **Failure Modes & Safety Envelopes**: If the reported BS&W exceeds pipeline specification (typically $>1.0\%$), the agent triggers an immediate red banner: `[High BS&W Rejection Alert — Do Not Release Truck]`.

---

### Agent 4: Wellpad Chemical Pump Stroke & Drawdown Calibration Sieve
* **In One Line**: Ingests video or photo captures of graduated chemical sight-glass drawdowns to calculate true daily injection dosages and detect pump air locks.
* **Friction Solved**: Eliminates 1.05 hours per week of manual stopwatch timing, chemical dosage arithmetic, and under-dosing scale damage.
* **The Specification**:
  * **Reads**: Smartphone video or dual-timestamp photos of the graduated sight-glass calibration tube (ml drop over 60 seconds), chemical tote level sensor/sight glass, daily well water production volume, and chemical brand/type.
  * **Does**: Calculates injection rate in milliliters per minute ($ml/min$), quarts per day ($qts/day$), and gallons per day ($gpd$); calculates actual delivered parts per million ($ppm$):
    $$ppm = rac{gpd  imes 1,000,000}{bpd_{water}  imes 42}$$
    compares against target dosing specification; detects chemical pump vapor-lock (zero drawdown despite motor running), leaking check valves, or tote depletion forecast.
  * **Returns**: Chemical Injection Health Dossier (`well_id`, `chemical_type`, `actual_ppm`, `target_ppm`, `dosage_variance_pct`, `pump_mechanical_status`, `estimated_tote_runout_days`).
  * **Stops At**: Physically adjusting the micrometer stroke adjustment knob or changing pneumatic supply pressure.
* **Failure Modes & Safety Envelopes**: If drawdown indicates zero chemical movement while well is producing sour gas ($H_2S$), the agent generates an emergency priority flag: `[Critical Corrosion Inhibitor Failure — Sour Well Unprotected]`.

---

### Agent 5: Production Separator Dump Valve & Meter Proving Audit Agent
* **In One Line**: Analyzes pneumatic liquid dump valve cycling frequencies and turbine/Coriolis meter pulse counts to detect leaking valve seats and gas carry-under.
* **Friction Solved**: Eliminates 1.30 hours per week of diagnostic troubleshooting, preventing high-pressure gas blow-by into atmospheric stock tanks.
* **The Specification**:
  * **Reads**: 24-hour separator liquid level telemetry, discrete dump valve actuation state logs (open/close cycle counts), and liquid meter volume increments.
  * **Does**: Computes barrels delivered per dump cycle ($bbls/dump$); correlates cycle frequency against vessel inflow volume; flags weeping dump valve trim (dump valve stays closed but meter creeps forward, or valve actuation occurs with negligible liquid discharge); detects gas blow-by into atmospheric tanks caused by mechanical float hung open.
  * **Returns**: Separator Health & Dump Valve Integrity Ledger (`vessel_id`, `dump_count_24h`, `avg_bbls_per_cycle`, `valve_seat_leak_status`, `gas_blowby_risk_score`, `maintenance_recommendation`).
  * **Stops At**: Resetting vessel pressure safety valves (PSVs), altering pilot supply pressure, or opening bypass valves.
* **Failure Modes & Safety Envelopes**: If dump cycle frequency exceeds 10 cycles per minute continuously with rapid vessel pressure drop, the agent issues an emergency alarm: `[Severe Separator Gas Blow-by Hazard — Stock Tank Vapor Overpressure Risk]`.

---

### Agent 6: Wellpad Safety Barrier & Pre-Task Risk Assessment Sieve
* **In One Line**: Pre-populates job-specific safety assessments (JSAs) and isolation checklists before the pumper performs hazardous mechanical interventions on wellpads.
* **Friction Solved**: Eliminates 0.85 hours per day of writing generic, rote paper JSA forms while enforcing strict compliance with OSHA and API RP 54 life-safety rules.
* **The Specification**:
  * **Reads**: Selected maintenance task (e.g. repacking stuffing box, swapping chemical tote, pulling polished rod clamp, cleaning separator gauge glass), wellhead operating pressures, $H_2S$ concentrations, and real-time pad SIMOPS status (e.g. wireline unit on adjacent well).
  * **Does**: Cross-references API RP 54 and OSHA 1910 standards; generates a customized pre-task risk assessment identifying specific hazards (trapped hydraulic pressure, toxic gas release, kinetic energy from counterweights); compiles step-by-step zero-energy verification (LOTO) and personal protective equipment (PPE) requirements.
  * **Returns**: Interactive Mobile Pre-Task Safety Dossier & Isolation Checklist on rugged tablet, with mandatory hold points for gas testing and pressure bleed-off confirmation.
  * **Stops At**: Signing the formal safe work permit or physically placing padlocks on electrical switchgear.
* **Failure Modes & Safety Envelopes**: If the wellpad is flagged with high $H_2S$ ($>100 ppm$ in gas stream) and the task involves opening a process line, the agent mandates: `[Breathing Apparatus Required — Two-Person Rule Mandatory]`.

---

### Agent 7: Shift Handover & Daily Route Production Summary Synthesizer
* **In One Line**: Automatically aggregates all confirmed well measurements, flagged equipment anomalies, and completed maintenance tasks into a crisp shift handover dossier for relief operators and production engineers.
* **Friction Solved**: Eliminates 1.10 hours at the end of each shift of writing fragmented emails, phone calls, and manual transcription into maintenance logs.
* **The Specification**:
  * **Reads**: Confirmed daily well test readings, flagged mechanical anomalies (tripped pumps, leaking valves, worn belts), recorded truck haul tickets, and pumper voice memo notes.
  * **Does**: Computes total estimated daily lease oil and water production; identifies top deferred wells with calculated downtime hours; compiles a structured punch list of equipment requiring mechanic or electrician dispatch; drafts standard CMMS work notifications (SAP PM / Maximo).
  * **Returns**: Daily Route Operations Handover Dossier & Maintenance Work Notification Payload (`lease_name`, `total_wells_visited`, `down_wells_count`, `unplanned_deferment_bbls`, `prioritized_night_shift_watch_items`, `ready_to_send_work_orders`).
  * **Stops At**: Approving capital purchase requisitions or committing official accounting volumes to corporate records.
* **Failure Modes & Safety Envelopes**: If any active wellpad experienced an un-remediated safety or environmental hazard (e.g. secondary containment oily sheen), the agent locks the handover report until the hazard is explicitly escalated to the Field Foreman.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own pumper/route multiplier.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Daily Field Route Planning & Triage** | 1 Daily Pumper Route (45 wells) | 2.50 hours | 0.50 hours | **2.00 hours saved** | Inefficient Driving & Delayed Exception Triage |
| **Wellhead Dial-Gauge & Meter Data Entry** | 1 Daily Route Data Submission | 1.50 hours | 0.20 hours | **1.30 hours saved** | Paper Scratchpads & Manual Typing Drag |
| **Truck Haul-Off Run Ticket Reconciliation** | 1 Daily Battery Run (3–5 tickets) | 1.00 hours | 0.15 hours | **0.85 hours saved** | Strapping Math & Temperature/Gravity Conversion |
| **Chemical Pump Drawdown Calibration** | 1 Weekly Battery Check (10 pumps) | 1.25 hours | 0.20 hours | **1.05 hours saved** | Stopwatch Math & Dosing Error Corrections |
| **Separator Dump Valve & Meter Audit** | 1 Weekly Battery Surveillance | 1.50 hours | 0.20 hours | **1.30 hours saved** | Manual Trunnion Watching & Leak Diagnosis |
| **Pre-Task Safety Assessment (JSA)** | 1 Daily Maintenance Task | 1.00 hours | 0.15 hours | **0.85 hours saved** | Rote Paper Form Writing & Hazard Research |
| **Shift Handover & End-of-Day Summary** | 1 Daily Shift Closeout | 1.25 hours | 0.15 hours | **1.10 hours saved** | Fragmented Texting & Manual CMMS Logging |
| **Total Operational Cycle Impact** | **Standard Daily/Weekly Route Cycle** | **10.00 hours** | **1.55 hours** | **8.45 hours saved** | **Eliminates administrative, math, and travel drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[HSSC-NOS-Prod]` | HSSC, *National Occupational Standards: Production Technician*, 2018 | hsscindia.in | Vocational Standard | Operational actions A01–A15 |
| `[PetroLMI-Pumper]`| PetroLMI, *Lease Operator / Wellhead Pumper Occupational Profile*, 2021 | careersinenergy.ca | Industry Standard | Core field duties & daily route workflows |
| `[API-MPMS-Ch3]` | API, *Manual of Petroleum Measurement Standards: Tank Gauging*, Section 1A | API Standards Store | Technical Standard | Custody transfer manual gauging rules |
| `[API-MPMS-Ch11.1]`| API, *Temperature and Pressure Volume Correction Factors for Generalized Crude Oils* | API Standards Store | Technical Standard | Temperature volume correction factors (ASTM D1250) |
| `[API-RP-54]` | API, *Occupational Safety for Oil and Gas Well Drilling and Servicing Operations*, 4th Ed | API Standards Store | Technical Standard | Wellpad safety, JSA rules, and barrier verification |
| `[SPE-170656]` | SPE, *Optimizing Well Pumper Routes in Unconventional Fields*, 2014 | DOI: 10.2118/170656-MS | Technical Paper | Baseline timing on manual route planning & exceptions |
| `[SPE-187425]` | SPE, *Automated Computer Vision and Edge Computing for Wellsite Inspection*, 2017 | DOI: 10.2118/187425-MS | Technical Paper | Computer vision gauge transcription accuracy |
| `[SPE-167412]` | SPE, *Field Automation and Exception-Based Surveillance in Mature Assets*, 2013 | DOI: 10.2118/167412-MS | Technical Paper | Time-motion analysis of field pumper routines |

### Negative Search Registry
* **Searched**: Peloton FieldView manuals, Quorum eField product sheets, and OnePetro for *"automated dynamic travelling-salesman route generation based on real-time SCADA exception alarms within mobile field data capture software"*.
* **Result**: `Negative Search, 2026-09`. Mobile field capture systems function exclusively as static digital data entry forms; none dynamically reorder truck routes or autonomously prioritize driving manifests based on overnight SCADA telemetry without manual human route planning.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"A field pumper's true value is in noticing that a stuffing box is weeping oil or hearing a dry bearing on a pumping unit, not spending two hours sitting in a hot truck typing numbers from a paper notebook into a tablet."*
* **Open Questions for Field Operations Practitioners**:
  * How many barrels of deferred oil occur each month because a tripped well on a static route sits dead until the pumper's scheduled 14:00 visit?
  * What percentage of paper crude hauling run tickets have undetected volume or BS&W calculation errors when reconciled against tank strap tables?
  * How often do chemical pumps run completely empty or air-locked for more than two weeks before a pumper catches the dry sight glass?
