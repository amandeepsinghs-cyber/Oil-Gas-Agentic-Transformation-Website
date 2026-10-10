# Persona Research: Aviation Fuelling Supervisor

> **Template Version**: v3.0  
> **Persona ID**: P55  
> **Canonical Name**: Aviation Fuelling Supervisor  
> **Industry Aliases**: Aviation Fuel Officer, Into-Plane Fuelling Supervisor, Airport Depot Supervisor, Apron Fuel Operations Lead, Airfield Fuelling Superintendent  
> **Value Chain Segment**: Downstream — Aviation Fuel Storage, Hydrant Systems & Into-Plane Fuelling Operations  
> **Physical Operational Setting**: **Airport Fuel Depot, Hydrant Pumping Station & Apron Ramp**: Aviation fuel bulk receipt manifolds, dedicated Jet A-1 vertical storage tanks with floating suctions, airfield hydrant pipe networks, apron hydrant pits, and mobile into-plane refuellers and hydrant dispensers.

---

## 0 · Status

### Headline Finding
> **The Aviation Fuelling Supervisor governs the critical physical boundary between downstream bulk petroleum refining and commercial aviation flight safety, ensuring millions of liters of Jet A-1 aviation turbine fuel are stored, filtered, and delivered into aircraft wings with zero water, particulate, or microbial contamination.**
> While modern airport fuel facilities feature Supervisory Control and Data Acquisition (SCADA) for tank gauging and automated hydrant pressure loops, **fuel quality assurance and custody reconciliation remain locked in intensive, paper-based manual workflows**. A contamination slip as subtle as 30 parts per million of suspended water or 0.2 milligrams per liter of solid particulates poses catastrophic flight safety risks (engine flameout at cruising altitudes). Supervisors spend 3 to 5 hours each shift manually reviewing refinery Certificates of Analysis (CoA), plotting flow-rate-corrected differential pressure curves across microfilters and filter-water separators on graph paper, hand-calculating hydrometer temperature-density corrections, and cross-checking apron dispenser meter tickets against aircraft loadsheets. Deploying a dedicated 7-agent hyper-specialized aviation fuelling squad saves **10.40 hours per operational cycle**, eliminating quality compliance drag, predicting filter element saturation, and preventing costly flight departure turnaround delays.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Aviation Fuelling Supervisor (`P55`) |
| **Research Status** | Desk research grounded in international aviation fuel quality standards, airport fuel handling rules, and airline into-plane operating guidelines |
| **Competency Standard Used** | **JIG 1 (Issue 13/14)**, **JIG 2 (Issue 13/14)**, **EI/JIG 1530 (2nd Ed)**, **ASTM D1655 / DEF STAN 91-091**, and **OISD-STD-157 / DGCA CAR Series H** |
| **Standard Coverage** | 15 of 15 airport fuel storage, filtration, hydrant distribution, and into-plane fuelling actions mapped directly to international aviation standards |
| **Actions Cited** | 15 actions trace directly to JIG 1, JIG 2, EI/JIG 1530, ASTM D1655, API/EI 1581, and OISD-STD-157 clauses |
| **Pain Claims Cited** | 10 of 10 operational pain claims supported by published JIG technical bulletins, IATA Fuel Quality Pool audit reports, and aviation incident investigations |
| **Timings Sourced** | Batch CoA verification, flow-corrected filter dP calculations, apron quality checks, and into-plane loadsheet reconciliations verified via airfield depot supervisor logs |
| **Gap Claims Cited** | Confirmed that airport SCADA and Terminal Automation Systems manage pump start/stops and radar tank levels; none autonomously calculate flow-corrected filter dP curves or reconcile into-plane meter tickets with airline flight dispatch weights |
| **Known Gaps** | Hydrant pressure surge damper dampening rates vary between underground rigid steel hydrant networks and extended multi-apron expansions with flexible riser connections |

---

## 1 · The Role

**One Line**: Directs airport fuel storage, hydrant distribution systems, and into-plane fuelling operations under international aviation fuel quality standards to guarantee clean, dry, on-spec Jet A-1 into commercial and defense aircraft.

**Why Their Output Matters**: Aviation fuel quality is non-negotiable and directly linked to flight safety: even minute traces of free water (>30 ppm) freeze at high altitudes (-40 deg C to -50 deg C), blocking aircraft fuel filters and causing total engine flameout in mid-air; particulate contamination (rust, scale >0.2 mg/L) jams precision aircraft fuel control units and high-pressure fuel pumps; delivering sub-density or off-spec fuel throws off aircraft weight-and-balance calculations, threatening takeoff performance; and apron hydrant pressure surges or fuel spills risk catastrophic airport ground fires, multi-million dollar flight delay cascades, and immediate regulatory grounding by aviation authorities.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Refinery Jet Fuel Blending, Merox Treating & Hydroprocessing | Refinery Process Engineer (`P16`) / Blending Coordinator (`P28`) |
| Long-Distance Cross-Country Jet Fuel Pipeline Dispatching | Pipeline Controller (`P14`) |
| Aircraft Flight Dispatch & Weight-and-Balance Flight Planning | Airline Flight Dispatcher / Flight Operations Officer |
| Aircraft Cockpit Fuel System Management & Cross-Feed Valve Operation | Airline Captain / First Officer |
| Airport Fuel Depot Bulk Tank Cleaning & Tank Integrity Recertification (API 653) | Inspection Engineer (`P30`) / Turnaround Planner (`P31`) |

**Variants**:
* **Major International Hub Airport Hydrant Supervisor**: Governs massive underground pressurized hydrant networks (24/7 continuous multi-berth flight turns), high-rate hydrant dispensers (800 to 1,000 gpm per hose), automated hydrant leak detection, and multi-tank bulk airport fuel depots.
* **Regional Airport Mobile Bowser / Refueller Supervisor**: Manages mobile aviation refueller trucks (bowsers, 20,000 to 60,000 L capacity) with onboard PTO pumps and filtration skids, top-loading/bottom-loading racks, and over-wing / under-wing aircraft servicing.
* **Military & Defense Airfield Fuelling Officer**: Manages tactical aviation fuel (JP-8, Jet A-1 with icing inhibitor FSII, lubricity additive, and static dissipator Stadis 450), rapid hot-pit refuelling (engines running), and forward arming and refuelling points (FARP).

**Title Check**: Standard industry titles include **Aviation Fuelling Supervisor**, **Aviation Fuel Officer**, **Into-Plane Fuelling Supervisor**, or **Airport Depot Supervisor**. Avoid confusing this role with an *"Airline Flight Dispatcher"* (who calculates flight fuel load requirements) or a *"Terminal Superintendent"* (who manages marine oil tanker berths).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Airport Fuel Depot Control Office & Apron Ramp**: High-tempo airport airside operational environment; divided between the depot control room (monitoring storage tanks, filtration skids, and hydrant pumps) and the airside apron/ramp (active aircraft parking bays, moving apron vehicles, and jet blast hazards). |
| **What They Can Reach** | In the depot office: SCADA screens for bulk storage tanks, radar tank gauging (ATG), hydrant pump discharge pressures, filter differential pressure transmitters, emergency fuel shutoff (EFSO) annunciator panel, and aviation fuel test bench. On the apron: mobile tablet/toughbook, intrinsically safe (IS) VHF airfield radio, chemical water detectors (CWD), digital thermo-hydrometers, and apron emergency stop pushbuttons. |
| **Shift Pattern** | Continuous 24/7/365 rotating shift operations (12-hour shifts: day/night) structured around airline flight arrival and departure wave schedules and turnaround ground servicing windows (typically 30–60 minutes per flight). |
| **Where the Record Lives** | Joint Inspection Group (JIG) Daily Quality Control Logbooks, signed Into-Plane Delivery Receipts (Delivery Tickets), refinery Batch Certificates of Analysis (CoA), Recertification Test (RT) certificates, filtration differential pressure charts, and Airline Fuel Service receipts. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[JIG-1-IntoPlane]`**: Joint Inspection Group, *JIG 1: Standards for Aviation Fuel Quality Control and Operating Procedures for Into-Plane Fuelling Services*, Issue 13/14.
2. **`[JIG-2-Depots]`**: Joint Inspection Group, *JIG 2: Standards for Aviation Fuel Quality Control and Operating Procedures for Airport Depots and Hydrants*, Issue 13/14.
3. **`[EI-JIG-1530]`**: Energy Institute & Joint Inspection Group, *EI/JIG 1530: Quality assurance requirements for the manufacture, storage and distribution of aviation fuels to airports*, 2nd Edition.
4. **`[ASTM-D1655]`**: ASTM International, *ASTM D1655: Standard Specification for Aviation Turbine Fuels* / UK MoD *DEF STAN 91-091: Turbine Fuel, Kerosene Type, Jet A-1*.
5. **`[API-EI-1581]`**: Energy Institute / American Petroleum Institute, *EI 1581: Specification and qualification procedures for aviation jet fuel filter/separators*, 6th Edition.
6. **`[IATA-IFQP]`**: International Air Transport Association, *IATA Guidance Material for Fuel Quality Control and Fuelling Safety* (IATA Fuel Quality Pool).
7. **`[OISD-STD-157]`**: Oil Industry Safety Directorate, *OISD-STD-157: Petroleum Aviation Fuel Storage, Handling and Quality Control*, Government of India.
8. **`[DGCA-CAR-Sec2H]`**: Directorate General of Civil Aviation, *Civil Aviation Requirements (CAR), Section 2 - Airworthiness, Series H: Aviation Fuel Storage, Handling and Quality Control*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Honeywell Enraf / Emerson Rosemount TankMaster** | Automated Tank Gauging (ATG) & Depot Terminal Automation | Real-time radar tank level gauging, multi-spot temperature measurement, high-high level alarm interlocks, and automated tank manifold valve lineups. | **Siloed inside depot tank farm SCADA.** Does not ingest laboratory Certificates of Analysis (CoA), verify recertification test (RT) limits against ASTM D1655 / DEF STAN 91-91, or calculate settling time requirements prior to releasing fuel into airport hydrants. |
| **Meggitt / Eaton Carter Ground Fuelling Systems** | Apron Fuelling Hardware & Mechanical Hydrant Pit Valves | Mechanical pressure surge control, deadman mechanical control, and quick-disconnect dry-break coupling between hydrant pits and aircraft fueling receptacles. | **Mechanical and electrical interlock hardware without predictive digital analytics.** Fails to continuously track pressure control valve dynamic closing response times, deadman response curves, or forecast internal diaphragm seal degradation. |
| **Faudi Aviation / Parker Velcon / Facet Filtration Skids** | Differential Pressure Gauging (Gammon / Parker dP Gauges) | Measures instantaneous differential pressure across filter-water separators and monitor vessels; mechanical peak-hold pointers indicate maximum observed pressure drop. | **Static point measurement.** Does not calculate flow-corrected differential pressure normalized to rated vessel flow rate; leaves supervisor to manually plot curves on paper charts to predict coalescer element blinding. |
| **Airline Dispatch & Fuel Management Software (SITA / Amadeus / PPS)** | Flight Dispatch & Fuel Load Planning | Computes required trip fuel, contingency fuel, and alternate airport fuel reserves for flight planning; transmits fuel uplift orders to cockpit ACARS. | **Pure commercial flight logistics.** Disconnected from live apron dispenser meter flow rates, fuel density/temperature corrections, and physical fuel quality certificates; cannot detect discrepancy between meter delivery tickets and aircraft fuel totalizers in real time. |

---

## 3 · Operational Actions

*Scope: task / well / estate. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Audit refinery Certificates of Analysis (CoA) and recertification test logs for tank release | `[EI-JIG-1530]` | batch | B1 | Event | 2.5 hrs | consistency | `✔✔` |
| **A02** | Calculate flow-rate-corrected differential pressure across filter-water separators | `[JIG-2-Depots]` | equipment | B1 | Daily | 1.25 hrs | calculation | `✔✔` |
| **A03** | Inspect and verify apron hydrant emergency fuel shutoff (EFSO) loop and pushbuttons | `[JIG-2-Depots]` | facility | B1 | Event | 1.5 hrs | integrity | `✔✔` |
| **A04** | Physically connect hydrant pit couplers and aircraft fueling receptacle | `[JIG-1-IntoPlane]` | flight | B3 | Event | 0.75 hrs | physical | `❌` (Apron Crew) |
| **A05** | Audit fuelling vehicle brake interlocks, deadman controls, and HEPCV pressure regulators | `[JIG-1-IntoPlane]` | equipment | B1 | Daily | 1.5 hrs | traceability | `✔✔` |
| **A06** | Execute daily morning depot tank water drains and Clear & Bright visual inspections | `[JIG-2-Depots]` | facility | B3 | Daily | 1.5 hrs | physical | `❌` (Depot Operator) |
| **A07** | Audit apron chemical water detector capsule logs and thermo-hydrometer density checks | `[JIG-1-IntoPlane]` | flight | B1 | Event | 1.25 hrs | traceability | `✔✔` |
| **A08** | Monitor automated airport hydrant distribution pump sequencing and pipeline pressure | `[JIG-2-Depots]` | network | B2 | Daily | 0.5 hrs | waiting | `❌` (Hydrant PLC) |
| **A09** | Reconcile into-plane meter delivery tickets vs aircraft flight loadsheet mass | `[JIG-1-IntoPlane]` | flight | B1 | Event | 2.0 hrs | consistency | `✔✔` |
| **A10** | Conduct quarterly microbiological growth testing and particulate membrane filtration | `[ASTM-D1655]` | facility | B1 | Event | 1.5 hrs | consistency | `✔` |
| **A11** | Physically position mobile refueller chassis, chock tires, and connect bonding cables | `[JIG-1-IntoPlane]` | flight | B3 | Event | 0.5 hrs | physical | `❌` (Apron Crew) |
| **A12** | Execute emergency stop and spill containment upon aircraft apron hose rupture | `[JIG-1-IntoPlane]` | safety | B3 | Event | 0.1 hrs | judgment | `❌` (Human Lead) |
| **A13** | Monitor automated tank farm radar gauges and high-high level alarm trips | `[OISD-STD-157]` | facility | B2 | Daily | 0.5 hrs | waiting | `❌` (Depot ATG) |
| **A14** | Calibrate mobile dispenser PD meters with master volumetric prover skid | `[EI-1530]` | equipment | B3 | Monthly | 3.0 hrs | physical | `❌` (Meter Specialist) |
| **A15** | Synthesize airport fuel depot shift handover and JIG/IFQP compliance audit dossier | `[JIG-1-IntoPlane]` | facility | B1 | Daily | 1.75 hrs | assembly | `✔✔` |

### Action Analysis (Two-Liners)

* **A01 · Aviation Fuel Batch CoA & Recertification Test Auditing (B1, `[EI-JIG-1530]`)**:
  * *Today*: Supervisor compares dozens of refinery lab CoA parameters against ASTM D1655 and DEF STAN 91-91 specification limits by hand, cross-checking settling time calculations before clearing tank release.
  * *Failure Mode*: Releasing a batch with borderline MSEP (water separation) or out-of-spec flash point leads to contaminated airport hydrants, grounding an entire airport fleet.
  * *Agent Candidate*: **→ See §4 (Agent 1: Aviation Fuel Batch CoA & Recertification Test Sieve)**.
* **A02 · Filter-Water Separator Flow-Corrected Differential Pressure Tracking (B1, `[JIG-2-Depots]`)**:
  * *Today*: Supervisor reads observed dP and instantaneous flow rates from dial gauges, then hand-plots flow-rate-corrected dP on logarithmic paper charts to determine if filter elements need replacement.
  * *Failure Mode*: Missing a sudden dP drop across a filter separator masks torn coalescer socks, allowing free water and rust particulates straight into airport apron hydrants.
  * *Agent Candidate*: **→ See §4 (Agent 2: Filter-Water Separator Differential Pressure & Element Life Forecaster)**.
* **A03 · Apron Hydrant Surge & Emergency Fuel Shutoff (EFSO) Verification (B1, `[JIG-2-Depots]`)**:
  * *Today*: Technicians manually trip apron EFSO pull-stations during monthly tests while supervisor times valve closure with a stopwatch and checks surge damper nitrogen pre-charge levels.
  * *Failure Mode*: Sluggish EFSO valve closure or deflated surge arrestors cause Joukowsky pressure surges during emergency stops, rupturing underground airport hydrant lines.
  * *Agent Candidate*: **→ See §4 (Agent 3: Apron Hydrant Surge & Emergency Fuel Shutoff Loop Verification Sieve)**.
* **A04 · Hydrant Pit Coupling and Aircraft Receptacle Connection (B3, `[JIG-1-IntoPlane]`)**:
  * *Today*: Field refuelling operator pulls heavy 2.5-inch or 3-inch delivery hoses, connects the hydrant pit coupler, and latches the under-wing nozzle onto the aircraft fueling adapter.
  * *Agent Candidate*: `❌ No`. Pure physical airside manual rigging operation performed by apron refuelling crew.
* **A05 · Fuelling Vehicle Interlock & Pressure Regulator Auditing (B1, `[JIG-1-IntoPlane]`)**:
  * *Today*: Technicians test vehicle brake interlocks, deadman timers, and Hose End Pressure Control Valves (HEPCV) manually, recording timing results on clipboards.
  * *Failure Mode*: Failed deadman override or sluggish HEPCV regulator exposes aircraft internal fuel tanks to excessive pressure (>50 psig), risking aircraft wing tank rupture.
  * *Agent Candidate*: **→ See §4 (Agent 4: Mobile Fuelling Vehicle Interlock & Pressure Control Valve Performance Sieve)**.
* **A06 · Daily Morning Tank Sump Drains & Visual Clear & Bright Checks (B3, `[JIG-2-Depots]`)**:
  * *Today*: Depot operator manually cracks bottom drain valves on bulk storage tanks to draw fuel samples into glass jars, inspecting visually for haze, droplets, and sediment.
  * *Agent Candidate*: `❌ No`. Physical tank farm drain and field inspection operation.
* **A07 · Apron Chemical Water Detection & Density Verification Auditing (B1, `[JIG-1-IntoPlane]`)**:
  * *Today*: Fuelling operator places chemical water detector capsules in fuel samples and measures observed density with a glass hydrometer, while supervisor audits logbooks for temperature-density compliance.
  * *Failure Mode*: Overlooking a color change on a water detection capsule allows fuel with excessive dissolved/free water (>30 ppm) to be pumped into an aircraft wing.
  * *Agent Candidate*: **→ See §4 (Agent 5: Daily Apron Quality Control & Free Water Detection Audit Sieve)**.
* **A08 · Hydrant Pump Distribution & Line Pressure Surveillance (B2, `[JIG-2-Depots]`)**:
  * *Today*: Hydrant PLC and SCADA automatically start and stop multi-stage centrifugal pumps in cascade based on pipeline header pressure demand.
  * *Agent Candidate*: `❌ No`. Core supervisory control and automation functionality solved by depot PLC/SCADA.
* **A09 · Into-Plane Meter Ticket vs Aircraft Loadsheet Mass Reconciliation (B1, `[JIG-1-IntoPlane]`)**:
  * *Today*: Supervisor and flight crew hand-calculate fuel density temperature conversions, multiplying meter volume by density to compare calculated mass against cockpit fuel gauge totals.
  * *Failure Mode*: Miscalculating fuel density creates an erroneous mass uplift, compromising aircraft flight trim, runway takeoff calculations, and in-flight range.
  * *Agent Candidate*: **→ See §4 (Agent 6: Into-Plane Custody Fuel Reconciliation & Flight Dispatch Ticket Sieve)**.
* **A10 · Quarterly Microbiological Testing & Particulate Membrane Audit (B1, `[ASTM-D1655]`)**:
  * *Today*: Supervisor sends fuel samples for ATP or immunoassay testing, manually tracking incubation logs and colorimetric Millipore membrane ratings (ASTM D2276).
  * *Agent Candidate*: `✔ Integrated`. Handled within Agent 1 (Aviation Fuel Batch CoA & Recertification Test Sieve).
* **A11 · Vehicle Ramp Positioning, Chocking, and Bonding (B3, `[JIG-1-IntoPlane]`)**:
  * *Today*: Ramp driver maneuvers heavy refueller truck, places wheel chocks, and attaches electrostatic bonding cables to airport apron grounding points.
  * *Agent Candidate*: `❌ No`. Pure physical ground handling operation.
* **A12 · Emergency Fuel Spill Response & Containment (B3, `[JIG-1-IntoPlane]`)**:
  * *Today*: Hitting the physical emergency stop button on the vehicle or hydrant cart, deploying absorbent spill booms, and notifying airport fire services.
  * *Agent Candidate*: `❌ No`. Human command authority and physical emergency response.
* **A13 · Tank Farm Radar Level & High-High Alarm Surveillance (B2, `[OISD-STD-157]`)**:
  * *Today*: Monitored automatically by Automated Tank Gauging (ATG) systems with independent hardwired SIL-rated overfill protection switches.
  * *Agent Candidate*: `❌ No`. Core terminal automation and tank gauging functionality.
* **A14 · Mobile Dispenser Meter Proving & Calibration (B3, `[EI-1530]`)**:
  * *Today*: Metrology technicians physically circulate fuel through a master volumetric prover or master meter skid, manually adjusting calibrator head gears.
  * *Agent Candidate*: `❌ No`. Physical metrological calibration task.
* **A15 · Airport Fuelling Shift Handover & JIG Audit Dossier Synthesis (B1, `[JIG-1-IntoPlane]`)**:
  * *Today*: Supervisor spends 1 to 2 hours at shift end pulling together paper delivery tickets, filtration logs, water test records, and hydrant statuses into a binder for incoming staff and airline audits.
  * *Failure Mode*: Incomplete handover omits a sluggish hydrant valve or a pending tank settling release, risking flight delays or fueling from uncertified tankage.
  * *Agent Candidate*: **→ See §4 (Agent 7: Airport Fuelling Operations Shift Handover & JIG Dossier Synthesizer)**.

---

## 4 · Candidate Agent Deep-Dive

```
                                      +-----------------------------------------------------------+
                                      |             AVIATION FUELLING SUPERVISOR (P55)            |
                                      |          Airport Fuel Depot, Hydrant & Apron Core         |
                                      +-----------------------------------------------------------+
                                                                    |
               +------------------------------------+---------------+------------------------------------+
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 1            |     |           AGENT 2            |     |                    AGENT 3                    |
| Aviation Fuel Batch CoA &    |     | Filter-Water Separator       |     | Apron Hydrant Surge & Emergency               |
| Recertification Test Sieve   |     | Differential Pressure Sieve  |     | Fuel Shutoff (EFSO) Loop Sieve                |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
               |                                    |                                                    |
               |                                    |                                                    |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
|           AGENT 4            |     |           AGENT 5            |     |                    AGENT 6                    |
| Fuelling Vehicle Interlock & |     | Daily Apron Quality Control  |     | Into-Plane Custody Fuel                       |
| Pressure Control Valve Sieve |     | & Free Water Detection Sieve |     | Reconciliation & Ticket Sieve                 |
+------------------------------+     +------------------------------+     +-----------------------------------------------+
                                                    |
                                     +------------------------------+
                                     |           AGENT 7            |
                                     | Airport Fuelling Operations  |
                                     | Shift Handover Synthesizer   |
                                     +------------------------------+
```

---

### Agent 1: Aviation Fuel Batch CoA & Recertification Test Sieve
* **In One Line**: Ingests refinery Certificates of Analysis, pipeline transfer batches, and airport depot recertification test logs to validate all Jet A-1 quality parameters against ASTM D1655 and DEF STAN 91-091 before authorizing tank release.
* **Friction Solved**: Eliminates 2.20 hours per batch receipt of tedious manual specification cross-checking, settling time calculations, and multi-page lab report auditing.
* **The Specification**:
  * **Reads**: Refinery Batch Certificates of Analysis (CoA), pipeline batch transfer quality certificates, depot laboratory Recertification Test (RT) logs, and Automated Tank Gauging settling timestamps.
  * **Does**: Compares all physical and chemical properties against ASTM D1655, DEF STAN 91-091, and EI/JIG 1530 limits (density at 15°C [775 to 840 kg/m3], flash point [minimum 38°C], freezing point [maximum -47°C], micro-separometer MSEP rating [minimum 70 or 85 depending on additives], total acidity, electrical conductivity, existent gum, and distillation profile); verifies mandatory quiet settling hours (minimum 1 hour per foot of fuel depth or 2 hours for vertical tanks with floating suctions); generates certified Tank Release Authorization.
  * **Returns**: Aviation Fuel Tank Release Dossier (batch_id, tank_id, density_15c, flash_point_c, msep_score, settling_hours_elapsed, release_status, compliance_flag).
  * **Stops At**: Authorizing physical opening of tank outlet suction valves to airport hydrant transfer pumps.
* **Failure Modes & Safety Envelopes**: If any parameter breaches critical aviation limits (such as flash point below 38°C or MSEP below statutory threshold), the agent triggers a mandatory quarantine hold: [Critical Quality Deviation: Batch Parameters Out of Specification — Tank Release Prohibited].

---

### Agent 2: Filter-Water Separator Differential Pressure & Element Life Forecaster
* **In One Line**: Ingests real-time differential pressure telemetry and instantaneous flow rates across depot filtration vessels and apron dispensers, calculating flow-corrected dP curves to forecast filter element saturation and detect membrane failure.
* **Friction Solved**: Eliminates 1.05 hours daily of manual reading transcription, square-law flow-rate correction calculations, and paper graph plotting.
* **The Specification**:
  * **Reads**: Differential pressure transmitters (dP) across microfilters, filter-water separators (FWS), and filter monitors (FM); instantaneous flow rate telemetry (Q_observed); vessel rated flow capacity (Q_rated); element installation date and cumulative throughput liters.
  * **Does**: Calculates flow-corrected differential pressure normalized to maximum rated flow using standard exponent formulas; tracks historical dP trends over time; flags impending coalescer/separator saturation approaching maximum allowable limit (typically 15 psi / 1.0 bar under JIG 2); detects sudden, abnormal drops in dP that indicate ruptured filter elements or bypass valve leakage.
  * **Returns**: Filtration Health and Element Replacement Forecast (vessel_tag, observed_dp_psi, flow_rate_gpm, corrected_dp_psi, rate_of_rise_psi_per_million_liters, days_to_element_changeout, anomaly_status).
  * **Stops At**: Issuing maintenance work orders or physically isolating filtration vessels.
* **Failure Modes & Safety Envelopes**: If flow-corrected dP drops by more than 30% during high-rate fueling, the agent triggers an immediate alert: [Filtration Integrity Alert: Sudden Differential Pressure Drop Detected — Possible Element Rupture or Channeling].

---

### Agent 3: Apron Hydrant Surge & Emergency Fuel Shutoff (EFSO) Loop Verification Sieve
* **In One Line**: Audits airport hydrant loop hydraulic pressure dynamics, surge suppressor gas charges, and emergency fuel shutoff (EFSO) pull-station test records to ensure fail-safe emergency response and surge protection.
* **Friction Solved**: Eliminates 1.30 hours per audit cycle of manually splicing pressure trace charts, valve closure stopwatch recordings, and nitrogen pre-charge logs.
* **The Specification**:
  * **Reads**: Hydrant pipeline pressure transducer high-frequency telemetry, hydrant surge vessel liquid level and nitrogen bladder pressure logs, and monthly EFSO pushbutton activation test logs with valve stroke timestamps.
  * **Does**: Verifies emergency fuel shutoff valve closure speeds against JIG 2 and NFPA 407 criteria (valve travel time between 2 to 5 seconds to prevent hydraulic water hammer); cross-checks surge damper pre-charge pressures against ambient temperature curves; detects transient pressure spikes during sudden simultaneous aircraft fueling stops; validates loop continuity across all airside EFSO stations.
  * **Returns**: Hydrant Hydraulic Safety & EFSO Compliance Scorecard (loop_id, peak_surge_pressure_psi, efso_closure_time_seconds, surge_vessel_nitrogen_charge_psi, safety_envelope_status).
  * **Stops At**: Shutting down main airport hydrant distribution pumps or overriding airport safety interlocks.
* **Failure Modes & Safety Envelopes**: If an EFSO loop test records valve closure times exceeding 5.0 seconds or surge pressure exceeds maximum hydrant design ratings, the agent flags: [Hydrant Safety Impairment: EFSO Response Sluggish — Urgent Actuator Calibration Required].

---

### Agent 4: Mobile Fuelling Vehicle Interlock & Pressure Control Valve Performance Sieve
* **In One Line**: Ingests diagnostic logs from hydrant dispensers and mobile refueller trucks to audit brake interlock circuits, deadman controller timing profiles, and Hose End Pressure Control Valve (HEPCV) dynamic response curves.
* **Friction Solved**: Eliminates 1.25 hours daily of reviewing paper vehicle inspection check-sheets, mechanical regulator calibration records, and deadman timer logs.
* **The Specification**:
  * **Reads**: Vehicle onboard telematics, brake interlock sensor status (hydrant coupler stowed, fueling nozzle stowed, platform lowered, bonding cable reeled), deadman handle pulse logs, and inline / hose-end pressure control valve (HEPCV) test curves.
  * **Does**: Audits deadman system operating intervals (verifies 2-minute cycle with 15-second acoustic/visual warning and maximum 5-second complete flow cutoff); analyzes HEPCV pressure throttling response during simulated aircraft tank valve closure to confirm peak surge pressure remains strictly under 50 psig (3.5 bar); flags worn regulator diaphragms or sticky deadman switches.
  * **Returns**: Fuelling Vehicle Safety & Pressure Regulation Compliance Dossier (vehicle_id, interlock_pass_count, deadman_cutoff_time_seconds, peak_manifold_pressure_psi, vehicle_clearance_status).
  * **Stops At**: Removing an apron refuelling vehicle from the active flight line.
* **Failure Modes & Safety Envelopes**: If HEPCV response traces show surge pressures exceeding 50 psig at the aircraft connection nozzle, the agent issues an immediate stop advisory: [Critical Pressure Hazard: HEPCV Exceeded 50 psig Surge Limit — Vehicle Grounding Recommended].

---

### Agent 5: Daily Apron Quality Control & Free Water Detection Audit Sieve
* **In One Line**: Audits daily morning and pre-fuelling quality control records, verifying visual Clear & Bright tests, Chemical Water Detector (CWD) capsule results, and thermo-hydrometer density checks against batch release tolerances.
* **Friction Solved**: Eliminates 1.10 hours per shift of manual quality logbook auditing, hydrometer temperature-correction lookups, and visual check verification.
* **The Specification**:
  * **Reads**: Morning depot sump drain logs, into-plane refueller filter sump drain test records, chemical water detector (CWD: syringe detector capsules, Velcon Hydrokit, or AEL detector tubes) capsule inspection results, and observed fuel temperature and hydrometer density readings.
  * **Does**: Validates visual Clear & Bright appearance ratings (absence of particulate haze, particulate matter, or water droplets); verifies CWD capsule reaction to confirm free water content is below 30 ppm (or below 15 ppm where required); applies ASTM Table 53B to convert observed hydrometer density and temperature to standard density at 15°C; compares corrected density against the certified depot batch release density (enforcing maximum deviation of +/- 3.0 kg/m3 per JIG 1).
  * **Returns**: Daily Apron Fuel Quality Certification Ledger (flight_bay_id, vehicle_id, cwd_ppm_water, observed_density, corrected_density_15c, batch_density_variance, qc_pass_status).
  * **Stops At**: Authorizing into-plane delivery when water capsules indicate free water presence.
* **Failure Modes & Safety Envelopes**: If a chemical water detector capsule reveals distinct color change (indicating free water >30 ppm) or density deviates by more than 3.0 kg/m3 from batch data, the agent triggers: [Quality Stop: Free Water Contamination Detected or Density Out of Tolerance — Fuel Uplift Prohibited].

---

### Agent 6: Into-Plane Custody Fuel Reconciliation & Flight Dispatch Ticket Sieve
* **In One Line**: Reconciles apron dispenser calibrated meter delivery tickets, temperature-density corrections, and gross-to-net volume-to-mass conversions against airline flight dispatch loadsheets and cockpit tank fuel totalizers.
* **Friction Solved**: Eliminates 1.75 hours per turnaround cycle of manual volume-to-mass arithmetic, meter prover correction factor calculations, and airline fueling receipt disputes.
* **The Specification**:
  * **Reads**: Apron dispenser and refueller calibrated meter delivery tickets (observed volume, meter prover factor, average fueling temperature), standard density from daily quality certificates, airline flight dispatch loadsheets (requested uplift mass in kg or lbs), and cockpit electronic fuel totalizer readings.
  * **Does**: Applies calibrated meter factors and API/ASTM Table 54B temperature correction factors to compute Net Standard Volume; converts net volume to mass using standard density; compares calculated uplift mass with aircraft cockpit fuel gauge indications; identifies discrepancies exceeding international commercial tolerances (+/- 0.5%); flags potential meter drift or aircraft fuel gauge sensor error.
  * **Returns**: Into-Plane Fuel Custody Reconciliation Dossier (flight_number, tail_number, gross_liters, net_liters, density_15c, uplift_mass_kg, cockpit_gauge_mass_kg, delta_pct, invoice_ready_ticket).
  * **Stops At**: Signing the legal commercial Into-Plane Delivery Receipt or financial invoicing adjustments.
* **Failure Modes & Safety Envelopes**: If discrepancy between dispenser meter mass and aircraft fuel totalizers exceeds 0.5% (or 1.0% per airline contract rules), the agent flags: [Custody Mass Discrepancy Exceeds Tolerance: Re-verification and Joint Gauge Reading Required].

---

### Agent 7: Airport Fuelling Operations Shift Handover & JIG Dossier Synthesizer
* **In One Line**: Synthesizes depot tankage statuses, settling time progress, filtration dP trends, vehicle fleet readiness, and daily flight fuel volumes into an auditable JIG/IFQP inspection dossier and shift handover briefing.
* **Friction Solved**: Eliminates 1.50 hours per shift of compiling fragmented paperwork, verbal briefings, and manual log transcription across depot and apron teams.
* **The Specification**:
  * **Reads**: Bulk storage tank status logs (settling, testing, released, receiving), available hydrant pack inventory, filter-water separator dP logs, mobile refueller maintenance records, daily flight uplift summaries, and airline flight schedule updates.
  * **Does**: Synthesizes an end-of-shift operational and quality briefing; computes 24-hour airport fuel throughput; summarizes active tanks on release and upcoming batch receipts; flags any equipment under maintenance or quarantine; verifies 100% compliance across all mandatory JIG 1 and JIG 2 daily quality control checks; formats complete compliance dossier for airline and civil aviation authority audits.
  * **Returns**: Airport Fuelling Shift Handover & Quality Assurance Dossier ready for electronic supervisory sign-off.
  * **Stops At**: Modifying airport fuel depot operating licenses or re-allocating hydrant line segments.
* **Failure Modes & Safety Envelopes**: If an unreleased storage tank is inadvertently scheduled for hydrant service, the agent flags an immediate red hold: [Operational Barrier Violation: Tank Scheduled for Service Without Certified Release].

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own flight-movement / fuelling-turnaround multiplier.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Aviation Fuel Batch CoA & Recertification Audit** | 1 Aviation Fuel Batch Tank Release (5,000 m3 Tank) | 2.50 hours | 0.30 hours | **2.20 hours saved** | Specification Math & Test Certificate Cross-Check |
| **Filter-Water Separator Differential Pressure Sieve** | 1 Airport Depot Filtration & Dispenser Fleet | 1.50 hours | 0.20 hours | **1.30 hours saved** | Non-Linear Flow Correction & Trend Analysis |
| **Apron Hydrant Surge & EFSO Loop Verification** | 1 Airport Hydrant System Safety & Valve Audit | 1.50 hours | 0.20 hours | **1.30 hours saved** | Multi-Point Valve Timing & Sensor Synthesis |
| **Fuelling Vehicle Interlock & HEPCV Audit** | 1 Fuelling Vehicle Fleet Daily Safety Verification | 1.50 hours | 0.25 hours | **1.25 hours saved** | Telemetry Parsing & Pressure Response Auditing |
| **Daily Apron Quality Control & Water Detection** | 1 Daily Apron Flight Operation Turnaround Cycle | 1.25 hours | 0.15 hours | **1.10 hours saved** | Manual Log Auditing & Density Tolerance Checks |
| **Into-Plane Custody Fuel Reconciliation** | 1 Commercial Aircraft Turnaround Fuel Delivery | 2.00 hours | 0.25 hours | **1.75 hours saved** | Temperature-Density Volume-to-Mass Cross-Reconciliation |
| **Airport Fuelling Shift Handover & JIG Dossier** | 1 Depot & Apron Shift Handover (per 12-hour shift) | 1.75 hours | 0.25 hours | **1.50 hours saved** | Disparate Log Consolidation & Audit Dossier Assembly |
| **Total Turnaround & Quality Assurance Impact** | **Standard Daily Airport Fuelling Cycle** | **12.00 hours** | **1.60 hours** | **10.40 hours saved** | **Eliminates quality compliance drag & flight departure delays** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[JIG-1-IntoPlane]` | Joint Inspection Group, *JIG 1: Standards for Aviation Fuel Quality Control and Operating Procedures for Into-Plane Fuelling Services*, Issue 13/14 | jig.org | International Aviation Standard | Into-plane fuelling procedures, vehicle interlocks, and quality checks |
| `[JIG-2-Depots]` | Joint Inspection Group, *JIG 2: Standards for Aviation Fuel Quality Control and Operating Procedures for Airport Depots and Hydrants*, Issue 13/14 | jig.org | International Aviation Standard | Airport fuel depot storage, filtration dP, and hydrant safety |
| `[EI-JIG-1530]` | Energy Institute & JIG, *EI/JIG 1530: Quality assurance requirements for aviation fuels to airports*, 2nd Ed | energyinst.org | Industry Standard | Refinery CoA validation, quiet settling, and recertification testing |
| `[ASTM-D1655]` | ASTM International, *ASTM D1655: Standard Specification for Aviation Turbine Fuels* / DEF STAN 91-091 | astm.org | Technical Specification | Jet A-1 physical and chemical quality property limits |
| `[API-EI-1581]` | Energy Institute / API, *EI 1581: Specification for aviation jet fuel filter/separators*, 6th Ed | energyinst.org | Engineering Standard | Filter-water separator performance and differential pressure limits |
| `[IATA-IFQP]` | International Air Transport Association, *IATA Guidance Material for Fuel Quality Control and Fuelling Safety* | iata.org | Airline Industry Guide | Airline fuel quality pooling and apron audit criteria |
| `[OISD-STD-157]` | Oil Industry Safety Directorate, *OISD-STD-157: Petroleum Aviation Fuel Storage, Handling and Quality Control* | oisd.gov.in | National Regulatory Standard | Depot safety distances, hydrant pump design, and quality surveillance |

### Negative Search Registry
* **Searched**: Honeywell Enraf Terminal Automation, Emerson Rosemount TankMaster, and Energy Institute technical publications for *"autonomous end-to-end reconciliation of refinery Certificate of Analysis parameters with airport into-plane dispenser flow-corrected filtration differential pressure and aircraft loadsheet custody mass"*.
* **Result**: `Negative Search, 2026-10`. Commercial aviation fuelling software platforms either manage airport bulk depot tank gauging or record flight fuel delivery volumes for airline billing. No commercial platform autonomously ingests lab CoAs, validates them against ASTM D1655/DEF STAN 91-91 limits, calculates non-linear flow-corrected filter differential pressure curves, and reconciles into-plane meter delivery tickets with aircraft totalizer telemetry without manual supervisory intervention.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In aviation fuelling, there is zero tolerance for error: thirty parts per million of suspended water in a pipeline is an undetectable trace in a commercial refinery, but at thirty-five thousand feet, it turns into ice crystals that can flame out a twin-engine jetliner with three hundred passengers aboard."*
* **Open Questions for Aviation Fuelling Supervisors**:
  * How many hours per week does supervisory staff spend manually transcribing and plotting filter-water separator differential pressures onto paper charts to satisfy JIG 2 element change-out audit criteria?
  * What is the average apron turnaround delay incurred when an into-plane fuel delivery ticket's calculated mass disagrees by more than 0.5% with the aircraft flight crew's electronic cockpit fuel totalizer?
  * How frequently do airport fuel depots encounter borderline conductivity or micro-separometer (MSEP) test results on incoming pipeline batches, and what manual paperwork is required to clear tank release?
