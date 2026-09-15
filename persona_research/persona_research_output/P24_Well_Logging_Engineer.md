# Persona Research: Well Logging Engineer

> **Template Version**: v3.0  
> **Persona ID**: P24  
> **Canonical Name**: Well Logging Engineer  
> **Industry Aliases**: Wireline Field Engineer, Logging Engineer, Field Engineer (Wireline & Perforating), Cased-Hole Logging Specialist, Logging Unit Operator  
> **Value Chain Segment**: Upstream — Wells & Live Drilling Operations  
> **Physical Operational Setting**: **Wireline Logging Unit (Offshore Cabin / Land Logging Truck)**: a sealed acquisition cabin at the wellsite holding the winch controls, depth panel and acquisition workstation, with the rig floor, the radioactive source pit and the explosives magazine all within walking distance

---

## 0 · Status

### Headline Finding

> **The Well Logging Engineer is the last person who can prove a measurement is real while the tool is still in the hole — and the only one who can order the re-run before the window closes forever.**
> When a triple- or quad-combo tool string finishes its pass across open hole, the rig is burning $10{,}000\text{ to }\$40{,}000$ per hour on standby and the engineer has roughly sixty minutes to decide whether the log is valid. Commercial acquisition platforms (SLB **MAXWELL**, Halliburton **InSite**, **Warrior**) faithfully record and plot every curve, but **they do not adjudicate whether the recording is physically believable** — they will plot a cycle-skipped sonic, a stretched depth track and a repeat section that disagrees with the main pass just as cleanly as good data. Shell's global operational audit found $15\%\text{ to }20\%$ of wireline jobs carried unrecognised quality defects. If the defect is caught while the tool is downhole, re-logging the interval costs $1.5$ hours. If it is caught after pulling out of hole and casing over the interval, the data is gone permanently and the recovery attempt burns $36\text{ to }72$ hours of rig time. Compounding this, API RP 67 radio silence bans every electronic device on the rig floor during explosives and radioactive source handling, so the entire job tally is written by hand on a clipboard and keyed into SAP $45\text{ to }60$ minutes at a time by an engineer at the end of an $18\text{ to }24$ hour tour. Deploying a dedicated 6-agent wireline field operations squad saves **10.15 hours per logging run and post-job cycle**, converting exhausted end-of-tour transcription and 3:00 AM curve-squinting into arithmetic that is finished before the tool reaches surface.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Well Logging Engineer (`P24`) |
| **Research Status** | Desk research grounded in wireline acquisition practice, SPWLA log quality control guidelines, API explosives and radioactive source protocols, and oilfield service ticketing literature |
| **Competency Standard Used** | **API RP 66 (Exploration and Production Wireline Operations)**, **API RP 67 (Oilfield Explosives Safety)**, **SPWLA Wireline and LWD Log Quality Control Guidelines**, **CWLS LAS 2.0/3.0**, and **AERB / IAEA SSR-6** sealed source transport rules |
| **Standard Coverage** | 10 of 10 wireline job-cycle stages mapped to operational actions, from pre-job tool string assembly through post-job ticket close-out |
| **Actions Cited** | 15 of 15 actions trace to API RP 66/67 field procedures, SPWLA LQC acceptance criteria, sealed-source custody rules, or documented service-ticketing practice |

---

## 1 · The Role

**One Line**: Acquires the physical downhole measurement — rigs up the wireline unit, runs the tool string, controls depth, handles radioactive sources and perforating guns under explosives protocol, and certifies at the wellsite whether the recorded log is fit to deliver or must be re-run before the hole is lost.

**Why Their Output Matters**: Every petrophysical interpretation, every reserves booking and every completion design downstream rests on curves this role recorded. A log accepted with an undetected defect propagates silently: a cycle-skipped sonic corrupts the mechanical earth model, a mis-tied depth reference shifts every formation top by the error, and a bad-hole density reading inflates porosity into a net pay figure that drives a multi-stage fracture design into rock that was never productive. Unlike almost any other upstream measurement, the open-hole opportunity is **non-repeatable** — once casing is run, the formation is behind steel and the data is gone for the life of the well. The role also carries the two most tightly regulated physical hazards on the wellsite: sealed radioactive sources and explosive perforating charges.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Petrophysical Interpretation — $V_{sh}$, porosity, water saturation, net pay cutoffs | Petrophysicist (`P04`) |
| Real-Time Geosteering, Bed Dip Calculation and Formation Evaluation While Drilling | Operations / Wellsite Geologist (unmapped; see `persona_research/unmapped_personas/`) |
| Overall Wellsite Operational Command, Rig Time Authority and Contractor Safety | Wellsite Supervisor ("Company Man", `P01`) |
| Casing Design, Mud Programme and Wellbore Mechanical Engineering | Drilling Engineer (`P07`) |
| Perforating Interval Selection and Completion Architecture | Completions Engineer (`P08`) |
| Tool Physics, Inversion Algorithms and Sensor Design | Service Company R&D / Acquisition Monolith |

**Variants**:
* **Open-Hole Wireline Field Engineer**: Runs formation evaluation strings (gamma, resistivity, density-neutron, sonic, NMR, imaging) in open hole before casing. Owns the re-run decision under maximum time pressure, because the interval is about to be cased over.
* **Cased-Hole & Perforating Engineer**: Runs production logging, cement bond and casing inspection tools, and executes perforating and plug-setting operations. Carries the explosives licence and enforces radio silence.
* **LWD / MWD Field Specialist**: Embedded with the directional crew; owns memory-versus-real-time data reconciliation, tool health and mud-pulse telemetry quality rather than a wireline cable.
* **Logging Unit Field Supervisor / Party Chief**: Coordinates multi-unit campaigns, signs the field ticket, and is the accountable authority for the source and explosives inventory on location.

**Title Check**: Standard industry titles include **Well Logging Engineer**, **Wireline Field Engineer**, **Field Engineer (Wireline)**, or **Logging Engineer**. This is a *measurement acquisition* role. Do not confuse it with the **Petrophysicist** (`P04`), who interprets the delivered curves from an office, or with the **Wellsite / Operations Geologist**, who evaluates formation while drilling and steers the bit. The distinction is sharp in practice: the logging engineer is judged on whether the recording is valid, not on what the rock means.

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Wireline Logging Unit**: an acquisition cabin or truck body holding the winch and depth panel, tension readout, and the acquisition workstation. During perforating and source handling the engineer works on the rig floor under radio silence with no electronic device permitted. |
| **What They Can Reach** | Acquisition platforms (SLB MAXWELL, Halliburton InSite, Warrior), the depth and tension panel, calibration jigs and API test pits, the tool shop maintenance database, the sealed-source custody register, the explosives magazine log, and SAP PM/MM for service orders — the last of which is only reachable once back in an electronic-safe zone. |
| **Shift Pattern** | Call-out driven rather than rostered. A single job routinely runs 12 to 24+ continuous hours on location in extreme weather, followed by post-job close-out. Offshore hitches of 14/14 or 28/28. |
| **Where the Record Lives** | Field prints and LAS deliverables (CWLS 2.0/3.0), calibration certificates before and after survey, the depth-tie record against driller's depth, sealed-source custody documents, the explosives and detonator tally, and the SAP service order / field ticket. |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[API-RP66]`**: American Petroleum Institute, *Recommended Practice for Exploration and Production Wireline Operations* — rig-up, pressure control, calibration discipline and tool failure reporting.
2. **`[API-RP67]`**: American Petroleum Institute, *Oilfield Explosives Safety* — radio silence / HERO protocol, gun arming sequence, detonator and charge accountability.
3. **`[SPWLA-LQC]`**: SPWLA, *Wireline and LWD Log Quality Control Guidelines* — repeat-section acceptance criteria, curve validity thresholds and depth control tolerance.
4. **`[CWLS-LAS]`**: Canadian Well Logging Society, *Log ASCII Standard (LAS) 2.0 / 3.0 Specification* — deliverable curve format, null conventions and header requirements.
5. **`[AERB-Source]`**: Atomic Energy Regulatory Board / IAEA *SSR-6 Regulations for the Safe Transport of Radioactive Material* — sealed source custody chain, transport documentation and dose recording for Cs-137 and Am-241/Be.
6. **`[SPE-177439]`**: *Modernizing Oilfield Service Ticketing: Eliminating Administrative Friction and Billing Disputes*, SPE-177439-MS — field ticket clerical error rates and billing cycle latency.
7. **`[SPE-214478]`**: *Wellsite Log Quality Control Under Operational Time Pressure* — re-run economics and the cost asymmetry between downhole and post-POOH defect detection.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **SLB MAXWELL / Halliburton InSite / Warrior** | Wireline Acquisition & Recording | Industry-standard acquisition, depth tracking, real-time curve plotting and LAS/DLIS export. Records everything faithfully at full sample rate. | **Records without adjudicating.** The platform plots a cycle-skipped sonic, a stuck-tool depth stretch and a repeat section that fails the SPWLA 95% agreement threshold exactly as cleanly as valid data. It has no opinion on whether the recording should be accepted. |
| **SLB Techlog / Emerson Paradigm** | Post-Acquisition Log QC | Rich interactive QC displays, curve editing, splicing and environmental correction — the town office toolset. | **Arrives hours to days too late.** By the time the data is loaded in town, the tool is out of the hole and often the interval is cased. The decision that mattered was made at the wellsite under fatigue with no computation available. |
| **Calibration Jigs & API Test Pits** | Sensor Reference Verification | Provide the physical primary standard for neutron, density and resistivity response. | **Produce paper certificates.** Before-survey and after-survey values are recorded by hand or in isolated tool files; nothing automatically computes drift across the run or compares it against the tolerance band before the log is delivered. |
| **SAP PM / MM** | Service Order, Billing & Asset Management | Authoritative enterprise system for service orders, rental line items, tool serial masters and invoicing. | **Requires an electronic device and a functioning human.** Radio silence bans devices on the rig floor, so the tally is handwritten; SAP then demands 45 to 60 minutes of accurate keying from an engineer at the end of a 24-hour tour. SPE-177439 measures the result: 22% of field tickets contain clerical errors. |

---

## 3 · Operational Actions

*Scope: task / well / field / estate / portfolio. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Verify tool string combinability, pressure/temperature ratings & sensor spacing against the well programme | `[API-RP66 §5]` | well | B1 | Event | 1–2 hrs | consistency | **Agent 3: Calibration & Tool Readiness** |
| **A02** | Execute API master & before-survey calibrations for nuclear, resistivity and sonic sensors | `[API-RP66 §7]` | task | B1 | Event | 1–2 hrs | traceability | **Agent 3: Calibration & Tool Readiness** |
| **A03** | Verify after-survey calibration & compute sensor response drift across the completed run | `[API-RP66 §7]` | task | B1 | Event | 1 hr | traceability | **Agent 3: Calibration & Tool Readiness** |
| **A04** | Rig up the wireline unit, sheave assembly & pressure control equipment; pressure-test PCE to rated working pressure | `[API-RP66 §6]` | task | B3 | Event | 2–3 hrs | physical | `❌` (Human Lead / Rig Floor) |
| **A05** | Maintain cable depth control: tie to driller's depth, apply stretch & temperature correction, monitor tension | `[SPWLA-LQC §3]` | well | B1 | Continuous | 2–3 hrs | calculation | **Agent 4: Depth Control & Stretch Correction** |
| **A06** | Acquire the main logging pass & repeat section across the target reservoir interval | `[SPWLA-LQC §2]` | well | B3 | Event | 3–5 hrs | execution | `❌` (Human Lead / Tool in Hole) |
| **A07** | QC recorded curves for tool sticking, cycle skips, washout artefacts & repeat disagreement, then call the re-run before POOH | `[SPWLA-LQC §4]` | well | B1 | Event | 1–2 hrs | judgment | **Agent 1: LQC & Re-Run Agent** |
| **A08** | Maintain sealed radioactive source (Cs-137 / Am-241-Be) custody chain, transport papers, dose records & source pit reconciliation | `[AERB-Source]` | task | B1 | Event | 1–2 hrs | traceability | **Agent 5: Source & Explosives Custody** |
| **A09** | Enforce API RP 67 radio silence & RF emitter shutdown across the installation before arming perforating guns | `[API-RP67 §4.3]` | task | B3 | Event | 1–2 hrs | integrity | `❌` (Human Lead / Party Chief) |
| **A10** | Arm, run, fire & recover the perforating gun string; account for every shaped charge and detonator | `[API-RP67 §7]` | task | B3 | Event | 2–4 hrs | physical | `❌` (Human Lead / Explosives) |
| **A11** | Monitor cable head tension, weak point margin & differential sticking risk during descent | `[SPWLA-LQC §5]` | task | B2 | Continuous | 1–2 hrs | computation | `❌` (Acquisition Monolith) |
| **A12** | Triage downhole tool failures & telemetry loss; decide pull-out-of-hole versus continue the run | `[API-RP66 §9]` | well | B1 | Event | 1–2 hrs | recall | **Agent 6: Tool Failure Triage & Run History** |
| **A13** | Maintain tool serial tally, maintenance records & field failure reporting back to the tool shop | `[API-RP66 §9]` | task | B1 | Event | 1 hr | assembly | **Agent 6: Tool Failure Triage & Run History** |
| **A14** | Transcribe the handwritten field ticket, billable standby hours & explosives/source tally into SAP once clear of radio silence | `[SPE-177439]` | task | B1 | Event | 45–60 mins | assembly | **Agent 2: Radio-Silence Field Ticket Capture** |
| **A15** | Deliver the witnessed field print, CWLS LAS deliverable & operator sign-off package | `[CWLS-LAS]` | well | B1 | Event | 1–2 hrs | assembly | **Agent 1: LQC & Re-Run Agent** |

### Action Analysis (Two-Liners)

* **A01, A02 & A03 · Tool String Readiness and Calibration Traceability (B1, `[API-RP66 §5, §7]`)**:
  * *Today*: Engineer assembles the string against the well programme, runs master and before-survey calibrations, files the paper certificates, and repeats the exercise after survey — then eyeballs whether the two sets look close enough.
  * *Failure Mode*: A nuclear detector that drifted 4% across a hot, 14-hour run still produces a plausible-looking density curve. Nobody computes the before-versus-after delta against the tolerance band, so the drift is discovered months later during a reserves audit, if ever, and every porosity derived from that run is quietly wrong.
  * *Agent Candidate*: **→ See §4 (Agent 3: Wireline Calibration Traceability & Tool Readiness Verification Agent)**.

* **A04 · Wireline Rig-Up and Pressure Control Equipment Test (B3, `[API-RP66 §6]`)**:
  * *Today*: Crew spots the unit, strings up sheaves, makes up the PCE stack, and pressure-tests to rated working pressure with the Company Man witnessing.
  * *Agent Candidate*: `❌ No`. Physical rig-floor assembly and a witnessed pressure barrier test; the accountable signature is human by regulation.

* **A05 · Cable Depth Control and Stretch Correction (B1, `[SPWLA-LQC §3]`)**:
  * *Today*: Engineer ties logger's depth to driller's depth at a casing shoe or known marker, then applies cable stretch correction from a lookup chart against tension and temperature, adjusting by feel as the string goes deeper.
  * *Failure Mode*: An uncorrected stretch error puts every curve a metre or more off true depth. The error is systematic and invisible on the plot — it surfaces when core will not tie to log, or when a perforating gun is run to a depth that misses the pay by the same offset.
  * *Agent Candidate*: **→ See §4 (Agent 4: Cable Depth Control, Stretch Correction & Depth-Tie Reconciliation Agent)**.

* **A06 · Main Pass and Repeat Section Acquisition (B3, `[SPWLA-LQC §2]`)**:
  * *Today*: Engineer runs the tool to total depth and logs up at controlled speed, then repeats a section of the interval for verification.
  * *Agent Candidate*: `❌ No`. Live tool-in-hole operation with a cable under tension; the engineer controls the winch and owns the consequences.

* **A07 & A15 · Wellsite Log Quality Control, the Re-Run Call and Deliverable Sign-Off (B1, `[SPWLA-LQC §4]`, `[CWLS-LAS]`)**:
  * *Today*: At 3:00 AM after a long tour, the engineer scrolls plots looking for cycle skips, sticking, washout artefacts and repeat-versus-main disagreement across roughly 150,000 data points on a kilometre of log, then argues the re-run question with the Company Man while the rig standby clock runs at $10\text{k}\text{ to }\$40\text{k}$ per hour.
  * *Failure Mode*: Shell's audit found 15% to 20% of jobs carry unrecognised defects. Caught downhole, a re-log of a 50 m interval costs 1.5 hours. Caught after POOH and rig-down, recovery burns 36 to 72 hours — and if the interval has been cased, the open-hole measurement is gone for the life of the well.
  * *Agent Candidate*: **→ See §4 (Agent 1: Real-Time Log Quality Control & Re-Run Agent)**.

* **A08 · Sealed Radioactive Source Custody Chain (B1, `[AERB-Source]`)**:
  * *Today*: Engineer signs the source out of the pit, records serials and dose rates by hand, carries transport documents through customs or port control, and signs it back in — the paperwork trail spanning several authorities and a paper register.
  * *Failure Mode*: A source serial recorded wrong, or a transport document that does not match the physical inventory, is a regulatory event in its own right. A source that cannot be accounted for at the end of a campaign escalates immediately to the national regulator.
  * *Agent Candidate*: **→ See §4 (Agent 5: Sealed Source & Explosives Custody Chain Reconciliation Agent)**.

* **A09 · API RP 67 Radio Silence Enforcement (B3, `[API-RP67 §4.3]`)**:
  * *Today*: Before guns are armed, every RF emitter on the installation is shut down — handheld radios, satcom, radar, welding sets, crane telemetry — and the Party Chief walks the location confirming each one before authorising arming.
  * *Agent Candidate*: `❌ No`. A physical walk-round and a life-safety authorisation against stray RF detonation; the arming call stays with the licensed human on location.

* **A10 · Perforating Gun Arming, Firing and Charge Accountability (B3, `[API-RP67 §7]`)**:
  * *Today*: Engineer arms the gun string, runs to depth, correlates on CCL, fires, and recovers the carrier — then counts fired versus recovered charges and detonators against the magazine issue.
  * *Agent Candidate*: `❌ No`. Live explosives handling under licence. Every step is a human-signed, physically witnessed action.

* **A11 · Cable Tension, Weak Point and Sticking Risk Monitoring (B2, `[SPWLA-LQC §5]`)**:
  * *Today*: The acquisition platform displays real-time cable head tension against the computed weak-point rating and flags overpull trends during descent and logging.
  * *Agent Candidate*: `❌ No`. Native real-time function of the acquisition monolith, already instrumented and alarmed at the panel.

* **A12 & A13 · Downhole Tool Failure Triage and Run History (B1, `[API-RP66 §9]`)**:
  * *Today*: When a sensor drops out mid-run, the engineer must decide within minutes whether to continue degraded or pull out of hole, drawing on whatever they personally remember about that tool serial's recent behaviour. Afterwards the serial tally and failure report are written up for the tool shop.
  * *Failure Mode*: The same tool serial fails the same way on three consecutive jobs across three different engineers, and nobody connects them because the run history lives in separate handwritten failure reports. Each crew pays the diagnostic cost from scratch.
  * *Agent Candidate*: **→ See §4 (Agent 6: Downhole Tool Failure Triage & Serial Run-History Agent)**.

* **A14 · Post-Radio-Silence Field Ticket and Tally Capture (B1, `[SPE-177439]`)**:
  * *Today*: Because radio silence banned every device on the rig floor, the whole job — operational hours, rig standby, tool rental lines, charge and source serials — exists only as handwritten notes on grease-smudged paper. The engineer keys it into SAP for 45 to 60 minutes after an 18 to 24 hour tour.
  * *Failure Mode*: SPE-177439 measures 22% of field tickets carrying clerical errors — transposed serials, omitted standby. Forgetting 4.5 hours of rig standby while waiting on mud circulation forfeits ₹3,00,000 to ₹10,00,000 of legitimate billing, and disputed lines stretch the invoice cycle to 14 days.
  * *Agent Candidate*: **→ See §4 (Agent 2: Radio-Silence Field Ticket & Explosives Tally Capture Agent)**.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Real-Time Log Quality Control & Re-Run Agent
* **In One Line**: Computes SPWLA log quality criteria across every recorded curve the moment the pass completes — repeat-versus-main agreement, cycle skips, sticking signatures, washout-driven artefacts and depth consistency — and returns a pass/fail verdict per reservoir interval while the tool is still downhole and a re-run is still cheap.
* **Friction Solved**: Eliminates 2.00 hours per wireline logging run of manual plot scrolling, repeat-curve overlay tracing and LQC questionnaire completion, and delivers the verdict before the decision window closes rather than after.
* **The Specification**:
  * **Reads**: The recorded curve set for main and repeat passes (gamma, resistivity, density, neutron, sonic, caliper), cable tension and line speed records, the depth channel, before-survey calibration values, and the well programme's declared target reservoir interval.
  * **Does**:
    1. Computes repeat-section agreement against the main pass across the overlapping interval and tests it against the SPWLA 95% threshold;
    2. Detects sonic cycle skips, density-neutron separation anomalies inconsistent with declared lithology, and caliper excursions indicating washout beyond the pad-contact envelope;
    3. Screens the depth channel and tension record for sticking signatures — tension spikes with corresponding depth discontinuity — which manifest as compressed or stretched curve intervals;
    4. Tests deep resistivity tracking within $\pm 5\%$ in non-permeable uninvaded zones as a telemetry and electrode integrity check;
    5. Scores each curve independently over the target reservoir interval and separately over the full logged section, so a failure confined to a non-reservoir interval is not escalated as if it were pay;
    6. Assembles the CWLS LAS deliverable and field print package with the QC verdict attached as a machine-readable certificate.
  * **Returns**: Wellsite Log Quality Dossier stating a per-curve and per-interval pass/fail against named SPWLA criteria, the specific depth ranges and failure mechanism for every exception, the quantified repeat-section agreement percentage, and a costed re-run recommendation comparing downhole re-log time against post-POOH recovery.
  * **Stops At**: Ordering the re-run. The agent proves the log is invalid and prices both options; the decision to spend rig time belongs to the Well Logging Engineer and the Company Man.
* **Failure Modes & Safety Envelopes**: In intervals where no repeat section was acquired, the agent cannot compute the primary agreement statistic and explicitly reports `[No Repeat Section: Agreement Criterion Not Evaluable]` rather than inferring a pass. In severely rugose or deviated hole where caliper indicates pad contact was never established, it flags the density and neutron curves as `[Environmentally Invalid: Not a Tool Fault]` so the crew does not re-run a tool that is working correctly in a hole that cannot be logged.

### Agent 2: Radio-Silence Field Ticket & Explosives Tally Capture Agent
* **In One Line**: Converts the handwritten clipboard tally — the only record that can legally exist on a rig floor under API RP 67 radio silence — into a structured, reconciled SAP service order from a single photograph taken once the engineer is back in an electronic-safe zone.
* **Friction Solved**: Eliminates 0.70 hours per job of end-of-tour manual SAP keying performed by an engineer who has been physically working for 18 to 24 hours, and independently recovers billable rig standby hours that fatigue routinely causes to be omitted.
* **The Specification**:
  * **Reads**: Photographs of the handwritten field ticket and explosives/source tally sheet, the rig activity time log, the contractual standby and allowable-window terms for the service order, the SAP tool serial and rental line masters, and the magazine issue record for charges and detonators.
  * **Does**:
    1. Extracts handwritten operational time entries, tool serials, rental line items, charge and detonator counts and source serials from grease- and mud-marked paper;
    2. Reconciles extracted tool and source serials against the SAP asset master, rejecting any serial that does not resolve rather than creating a new one;
    3. Cross-checks the job time breakdown against the rig activity log and identifies waiting-on-operator intervals that qualify as billable standby under the contract terms;
    4. Balances charges fired against charges issued and detonators returned, flagging any discrepancy as an explosives accountability exception before the ticket can close;
    5. Assembles the draft SAP service order confirmation with every field traced back to a specific region of the source photograph for review.
  * **Returns**: Draft SAP service order with line-by-line provenance back to the scanned tally, an explicit list of recovered billable standby hours with contractual justification, and a blocking exception list for any serial or explosives count that does not reconcile.
  * **Stops At**: Submitting the service order or authorising the invoice. The engineer reviews and taps to authorise; the ticket is a commercial document carrying their name.
* **Failure Modes & Safety Envelopes**: Any explosives or radioactive source count that fails to balance produces a hard block — the agent will not emit a submittable ticket with an unreconciled charge, detonator or source serial, because that tally is a regulatory record and not a billing line. Where handwriting confidence falls below threshold on a serial number or time entry, the field is left empty and flagged `[Illegible: Manual Entry Required]` rather than guessed.

### Agent 3: Wireline Calibration Traceability & Tool Readiness Verification Agent
* **In One Line**: Verifies before the string goes in hole that every tool is rated and combinable for the declared well conditions, and verifies after it comes out that each sensor's response has not drifted beyond tolerance across the run.
* **Friction Solved**: Eliminates 2.60 hours per job of manual specification cross-checking and paper calibration certificate comparison, and converts before-versus-after drift from an impression into a computed number with a stated tolerance.
* **The Specification**:
  * **Reads**: The well programme's declared maximum temperature, pressure, hole size and mud properties; the tool catalogue's rating and sensor-spacing data; master calibration references and API test pit values; and the before-survey and after-survey calibration records for the run.
  * **Does**:
    1. Checks each tool in the proposed string against declared well temperature and pressure ratings, flagging any component operating inside its margin;
    2. Verifies mechanical and telemetry combinability across the string and confirms sensor spacing supports the required vertical resolution;
    3. Compares before-survey calibration values against the master and API reference standards;
    4. Computes per-sensor response drift between before-survey and after-survey calibration and tests it against the published tolerance band for that sensor type;
    5. Assembles the calibration traceability record linking every delivered curve to the specific calibration events that bound it.
  * **Returns**: Tool Readiness and Calibration Traceability Certificate listing per-tool rating margin against well conditions, per-sensor computed drift with pass/fail against tolerance, and an explicit statement of which delivered curves are affected by any out-of-tolerance sensor.
  * **Stops At**: Releasing the string to run, or condemning a tool. Tool acceptance and rejection are the engineer's call and the tool shop's disposition.
* **Failure Modes & Safety Envelopes**: Where an after-survey calibration was not acquired — common when a tool is recovered damaged — the agent reports `[Drift Not Evaluable: No After-Survey Reference]` and marks the run's curves as calibration-unbounded rather than assuming the before-survey values held. It does not interpolate a missing calibration from an adjacent run on the same serial.

### Agent 4: Cable Depth Control, Stretch Correction & Depth-Tie Reconciliation Agent
* **In One Line**: Computes cable stretch and thermal elongation continuously from tension, cable properties and temperature, and reconciles logger's depth against driller's depth and previous-run references so the depth channel behind every curve is defensible.
* **Friction Solved**: Eliminates 1.70 hours per run of chart-lookup stretch correction, manual depth-tie arithmetic and after-the-fact reconciliation against the driller's record.
* **The Specification**:
  * **Reads**: Real-time cable head tension, line speed and measured depth; cable elastic and thermal constants for the deployed cable; borehole temperature profile; driller's depth reference and casing shoe tie points; and the depth channels of previous logging runs in the same wellbore.
  * **Does**:
    1. Computes elastic stretch from tension and cable modulus continuously along the deployed length;
    2. Applies thermal elongation using the borehole temperature profile rather than a surface constant;
    3. Reconciles the corrected logger's depth against declared casing shoe and driller's depth tie points, quantifying residual offset;
    4. Cross-correlates the gamma channel against previous runs in the same wellbore to detect run-to-run depth inconsistency independent of the cable model;
    5. Produces the corrected depth channel with a stated uncertainty envelope that travels with the deliverable.
  * **Returns**: Depth Control Record stating applied stretch and thermal corrections along the run, residual offset against each tie point, run-to-run gamma correlation offsets, and a depth uncertainty envelope for the logged interval.
  * **Stops At**: Overwriting the recorded depth channel in the deliverable. It proposes the correction and its basis; applying it is the engineer's action.
* **Failure Modes & Safety Envelopes**: Where corrected depth still disagrees with driller's depth beyond the tolerance for the hole section, the agent reports `[Depth Tie Unresolved]` and refuses to state an uncertainty envelope, because a stretch model that cannot reproduce a known reference should not be trusted to bound an unknown one. Cable property constants that do not match the deployed cable serial produce a hard warning rather than a silent default.

### Agent 5: Sealed Source & Explosives Custody Chain Reconciliation Agent
* **In One Line**: Maintains a continuously reconciled custody position for every sealed radioactive source and every explosive item on the location, matching physical movements against transport documents, magazine records and regulatory returns.
* **Friction Solved**: Eliminates 1.25 hours per job of manual custody paperwork, serial transcription and inventory reconciliation across the source pit, magazine and transport documentation.
* **The Specification**:
  * **Reads**: Sealed source serials, activities and last-assay dates; source pit sign-out and sign-in records; dose rate measurements; transport and customs documentation; the explosives magazine issue and return log; and per-job charge, detonator and source utilisation records.
  * **Does**:
    1. Maintains the current custody holder and physical location for every source and explosive item against its serial;
    2. Reconciles each job's declared usage against magazine issue and return, surfacing any item neither returned nor accounted as expended;
    3. Recomputes present source activity from the last assay and decay constant, flagging sources approaching regulatory re-assay or disposal thresholds;
    4. Checks transport documentation completeness against the applicable AERB/IAEA requirements for the planned movement before the source leaves site;
    5. Assembles the periodic regulatory inventory return from the reconciled position.
  * **Returns**: Custody Position Report stating the current accounted location of every source and explosive item, a dated exception list for anything unreconciled, computed present activities with re-assay due dates, and a draft regulatory inventory return.
  * **Stops At**: Signing the regulatory return or authorising a source movement. Both are licensed acts carrying named personal accountability.
* **Failure Modes & Safety Envelopes**: Any unaccounted sealed source produces an immediate `[Source Unaccounted: Escalate to Radiation Protection Supervisor]` and the agent will not emit a regulatory return containing an unresolved item. It never infers that an item was expended because a job is closed — expenditure must be evidenced by a return record.

### Agent 6: Downhole Tool Failure Triage & Serial Run-History Agent
* **In One Line**: When a sensor drops out mid-run, retrieves what that specific tool serial has done across every previous job and every crew, so the pull-out-of-hole decision is made against evidence rather than one engineer's recollection.
* **Friction Solved**: Eliminates 1.90 hours per event of failure diagnosis from memory and post-job failure report assembly, and breaks the pattern where the same serial fails the same way across consecutive crews without anyone connecting the runs.
* **The Specification**:
  * **Reads**: Real-time tool health and telemetry status for the running string, the tool shop maintenance and repair database, prior field failure reports keyed by serial, and the run history and operating conditions for each serial.
  * **Does**:
    1. Matches the live failure signature against prior recorded failures for the same serial and the same tool type;
    2. Retrieves maintenance and repair history for the serial, including time since last shop visit and components replaced;
    3. Correlates prior failures against operating conditions — temperature, run duration, hole deviation — to identify whether the serial fails under a recurring condition;
    4. Estimates the likelihood that continuing the run degrades further versus recovers, against the remaining interval to be logged;
    5. Drafts the structured field failure report for the tool shop with the diagnosis and evidence pre-populated.
  * **Returns**: Tool Failure Triage Brief stating the matched failure pattern with prior occurrences by date and serial, maintenance history, the conditions under which this serial has previously failed, and a drafted field failure report ready for review.
  * **Stops At**: The pull-out-of-hole decision. Rig time and the remaining logging objective are the engineer's and the Company Man's to weigh.
* **Failure Modes & Safety Envelopes**: Where a serial has no prior recorded history — a newly built or newly repaired tool — the agent states `[No Serial History: Type-Level Pattern Only]` and restricts itself to tool-type patterns rather than presenting type statistics as if they described this unit. It does not recommend continuing a run on a tool whose failure signature it cannot classify.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating asset provides its own logging run count, rig day rate and campaign multipliers.

> **Stated assumptions**: Agent 1 is anchored to the source specification's own published figure of 2.0 hours removed per wireline logging run. Agent 2 is anchored to the conservative end of the documented 45-to-60-minute post-shift transcription burden, taken as 0.75 hours rather than the 1.0 hour implied by that specification's 450-hours-across-450-runs annualisation. Agents 3 through 6 carry no published figure and are estimated from the action-level time bands in §3, taken at the conservative end of each range. Every one of these is a yardstick for the operator to replace with its own measured numbers, not a claim about their operation.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Real-Time Log Quality Control & Re-Run Agent** | 1 Wireline Logging Run | 2.25 hours | 0.25 hours | **2.00 hours saved** | 3:00 AM Manual Plot Scrolling & Repeat Overlay Tracing |
| **Radio-Silence Field Ticket & Explosives Tally Capture Agent** | 1 Post-Job Ticket Cycle | 0.75 hours | 0.05 hours | **0.70 hours saved** | End-of-Tour Manual SAP Keying from Handwritten Paper |
| **Wireline Calibration Traceability & Tool Readiness Verification Agent** | 1 Job (Pre-Job & Post-Job) | 3.00 hours | 0.40 hours | **2.60 hours saved** | Specification Cross-Checking & Paper Certificate Comparison |
| **Cable Depth Control, Stretch Correction & Depth-Tie Reconciliation Agent** | 1 Wireline Logging Run | 2.00 hours | 0.30 hours | **1.70 hours saved** | Chart-Lookup Stretch Correction & Depth-Tie Arithmetic |
| **Sealed Source & Explosives Custody Chain Reconciliation Agent** | 1 Job (Source / Explosives Movement) | 1.50 hours | 0.25 hours | **1.25 hours saved** | Manual Custody Paperwork & Serial Transcription |
| **Downhole Tool Failure Triage & Serial Run-History Agent** | 1 Tool Failure Event | 2.25 hours | 0.35 hours | **1.90 hours saved** | Diagnosis from Memory & Failure Report Assembly |
| **Total Operational Cycle Drag Reduction** | **Per Wireline Logging Run / Post-Job Cycle** | **11.75 hours** | **1.60 hours** | **10.15 hours saved** | **86.4% reduction in wireline field operations administrative and verification drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[API-RP66]` | American Petroleum Institute, *Recommended Practice for Exploration and Production Wireline Operations* | api.org | Industry Recommended Practice | Rig-up and pressure control discipline, calibration procedure, tool failure reporting |
| `[API-RP67]` | American Petroleum Institute, *Oilfield Explosives Safety*, RP 67 | api.org | Industry Recommended Practice | Radio silence / HERO protocol, gun arming sequence, charge and detonator accountability |
| `[SPWLA-LQC]` | SPWLA, *Wireline and LWD Log Quality Control Guidelines* | spwla.org | Technical Standard | Repeat-section agreement threshold, curve validity criteria, depth control tolerance |
| `[CWLS-LAS]` | Canadian Well Logging Society, *Log ASCII Standard (LAS) 2.0 / 3.0 Specification* | cwls.org | Data Exchange Standard | Deliverable curve format, header requirements and null conventions |
| `[AERB-Source]` | Atomic Energy Regulatory Board / IAEA, *SSR-6 Regulations for the Safe Transport of Radioactive Material* | aerb.gov.in / iaea.org | Regulatory Standard | Sealed source custody chain, transport documentation, dose recording and inventory returns |
| `[SPE-177439]` | *Modernizing Oilfield Service Ticketing: Eliminating Administrative Friction and Billing Disputes*, SPE-177439-MS | OnePetro | Technical Paper | Field ticket clerical error rate (22%), dispute reduction and billing cycle latency |
| `[SPE-214478]` | *Wellsite Log Quality Control Under Operational Time Pressure*, SPE-214478 | OnePetro | Technical Paper | Re-run economics and the cost asymmetry between downhole and post-POOH defect detection |

### Negative Search Registry
* **Searched**: SLB MAXWELL, Halliburton InSite and Warrior acquisition platform documentation for *"automated wellsite computation of SPWLA repeat-section agreement and per-curve quality verdict issued before pull-out-of-hole"*.
* **Result**: `Negative Search, 2026-09`. Acquisition platforms record, plot and export curves faithfully and provide interactive QC displays, but none autonomously adjudicate curve validity against named SPWLA acceptance criteria and return a costed re-run recommendation while the tool remains downhole. The judgement is left entirely to a fatigued human reading plots inside the decision window.
* **Searched**: SAP PM/MM and oilfield service ticketing vendors for *"vision capture of handwritten rig-floor explosives and source tally reconciled against asset master and magazine issue before ticket submission"*.
* **Result**: `Negative Search, 2026-09`. Mobile ticketing products assume an electronic device is usable at the point of work, which API RP 67 radio silence specifically prohibits during explosives and source handling. None capture the handwritten artefact that the protocol forces into existence, and none block ticket submission on an unreconciled detonator or sealed source count.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"The acquisition system will plot you a cycle-skipped sonic just as beautifully as a good one. It records; it does not have an opinion. The only person with an opinion is a man who has been awake for twenty hours, and he has about an hour before the interval is cased over and the measurement is gone for the life of the well."*
* **The Secondary Line**: *"Radio silence is why the tally is on paper. We ban every device on the floor so stray RF cannot fire a detonator — and then we ask the engineer to retype all of it into SAP at the end of a twenty-four hour tour, and act surprised that twenty-two percent of tickets have errors in them."*
* **Open Questions for Wireline Practitioners**:
  1. What proportion of your logging runs are re-run, and of those, how many were ordered while the tool was still downhole versus after pulling out of hole?
  2. How many open-hole intervals were cased over in the past year carrying a log defect that was only recognised later in town, and what was the interpretation consequence?
  3. What is your current measured field ticket clerical error rate, and how much billable rig standby do you estimate goes uncaptured per campaign?
  4. Do you compute before-survey to after-survey sensor drift as a number against a tolerance band, or is it assessed by inspection of the two certificates?
