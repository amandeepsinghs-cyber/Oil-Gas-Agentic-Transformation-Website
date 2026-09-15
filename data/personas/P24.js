/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P24"] = {
  "id": "P24",
  "title": "Well Logging Engineer",
  "aliases": [
    "Wireline Field Engineer",
    "Logging Engineer",
    "Field Engineer (Wireline & Perforating)",
    "Cased-Hole Logging Specialist",
    "Logging Unit Operator"
  ],
  "segment": "Wells & Rig Operations",
  "segmentLong": "Upstream — Wells & Live Drilling Operations",
  "setting": "Wireline Logging Unit (Offshore Cabin / Land Logging Truck): a sealed acquisition cabin at the wellsite holding the winch controls, depth panel and acquisition workstation, with the rig floor, the radioactive source pit and the explosives magazine all within walking distance",
  "tier": "Extended",
  "core20": false,
  "governingStandards": "API RP 66; API RP 67; SPWLA LQC",
  "agentFocus": "Wireline Log Quality Control & Field Operations Custody Squad (6 Agents)",
  "sourceFile": "P24_Well_Logging_Engineer.md",
  "person": "Tom Brennan",
  "avatar": "avatars/P24_persona.jpg",
  "thumb": "avatars/thumbs/P24_thumb.jpg",
  "initials": "WL",
  "headline": "The Well Logging Engineer is the last person who can prove a measurement is real while the tool is still in the hole — and the only one who can order the re-run before the window closes forever. When a triple- or quad-combo tool string finishes its pass across open hole, the rig is burning 10,000 to $40,000 per hour on standby and the engineer has roughly sixty minutes to decide whether the log is valid. Commercial acquisition platforms (SLB MAXWELL, Halliburton InSite, Warrior) faithfully record and plot every curve, but they do not adjudicate whether the recording is physically believable — they will plot a cycle-skipped sonic, a stretched depth track and a repeat section that disagrees with the main pass just as cleanly as good data. Shell's global operational audit found 15%to 20% of wireline jobs carried unrecognised quality defects. If the defect is caught while the tool is downhole, re-logging the interval costs 1.5 hours. If it is caught after pulling out of hole and casing over the interval, the data is gone permanently and the recovery attempt burns 36 to 72 hours of rig time. Compounding this, API RP 67 radio silence bans every electronic device on the rig floor during explosives and radioactive source handling, so the entire job tally is written by hand on a clipboard and keyed into SAP 45 to 60 minutes at a time by an engineer at the end of an 18 to 24 hour tour. Deploying a dedicated 6-agent wireline field operations squad saves 10.15 hours per logging run and post-job cycle, converting exhausted end-of-tour transcription and 3:00 AM curve-squinting into arithmetic that is finished before the tool reaches surface.",
  "confidence": {
    "Persona": "Well Logging Engineer (P24)",
    "Research Status": "Desk research grounded in wireline acquisition practice, SPWLA log quality control guidelines, API explosives and radioactive source protocols, and oilfield service ticketing literature",
    "Competency Standard Used": "API RP 66 (Exploration and Production Wireline Operations), API RP 67 (Oilfield Explosives Safety), SPWLA Wireline and LWD Log Quality Control Guidelines, CWLS LAS 2.0/3.0, and AERB / IAEA SSR-6 sealed source transport rules",
    "Standard Coverage": "10 of 10 wireline job-cycle stages mapped to operational actions, from pre-job tool string assembly through post-job ticket close-out",
    "Actions Cited": "15 of 15 actions trace to API RP 66/67 field procedures, SPWLA LQC acceptance criteria, sealed-source custody rules, or documented service-ticketing practice"
  },
  "role": {
    "oneLine": "Acquires the physical downhole measurement — rigs up the wireline unit, runs the tool string, controls depth, handles radioactive sources and perforating guns under explosives protocol, and certifies at the wellsite whether the recorded log is fit to deliver or must be re-run before the hole is lost.",
    "whyItMatters": "Every petrophysical interpretation, every reserves booking and every completion design downstream rests on curves this role recorded. A log accepted with an undetected defect propagates silently: a cycle-skipped sonic corrupts the mechanical earth model, a mis-tied depth reference shifts every formation top by the error, and a bad-hole density reading inflates porosity into a net pay figure that drives a multi-stage fracture design into rock that was never productive. Unlike almost any other upstream measurement, the open-hole opportunity is non-repeatable — once casing is run, the formation is behind steel and the data is gone for the life of the well. The role also carries the two most tightly regulated physical hazards on the wellsite: sealed radioactive sources and explosive perforating charges.",
    "notOwned": [
      {
        "task": "Petrophysical Interpretation — Vsh, porosity, water saturation, net pay cutoffs",
        "owner": "Petrophysicist (P04)"
      },
      {
        "task": "Real-Time Geosteering, Bed Dip Calculation and Formation Evaluation While Drilling",
        "owner": "Operations / Wellsite Geologist (unmapped; see persona_research/unmapped_personas/)"
      },
      {
        "task": "Overall Wellsite Operational Command, Rig Time Authority and Contractor Safety",
        "owner": "Wellsite Supervisor (\"Company Man\", P01)"
      },
      {
        "task": "Casing Design, Mud Programme and Wellbore Mechanical Engineering",
        "owner": "Drilling Engineer (P07)"
      },
      {
        "task": "Perforating Interval Selection and Completion Architecture",
        "owner": "Completions Engineer (P08)"
      },
      {
        "task": "Tool Physics, Inversion Algorithms and Sensor Design",
        "owner": "Service Company R&D / Acquisition Monolith"
      }
    ],
    "variants": [
      {
        "name": "Open-Hole Wireline Field Engineer",
        "detail": "Runs formation evaluation strings (gamma, resistivity, density-neutron, sonic, NMR, imaging) in open hole before casing. Owns the re-run decision under maximum time pressure, because the interval is about to be cased over."
      },
      {
        "name": "Cased-Hole & Perforating Engineer",
        "detail": "Runs production logging, cement bond and casing inspection tools, and executes perforating and plug-setting operations. Carries the explosives licence and enforces radio silence."
      },
      {
        "name": "LWD / MWD Field Specialist",
        "detail": "Embedded with the directional crew; owns memory-versus-real-time data reconciliation, tool health and mud-pulse telemetry quality rather than a wireline cable."
      },
      {
        "name": "Logging Unit Field Supervisor / Party Chief",
        "detail": "Coordinates multi-unit campaigns, signs the field ticket, and is the accountable authority for the source and explosives inventory on location."
      }
    ],
    "titleCheck": "Standard industry titles include Well Logging Engineer, Wireline Field Engineer, Field Engineer (Wireline), or Logging Engineer. This is a measurement acquisition role. Do not confuse it with the Petrophysicist (P04), who interprets the delivered curves from an office, or with the Wellsite / Operations Geologist, who evaluates formation while drilling and steers the bit. The distinction is sharp in practice: the logging engineer is judged on whether the recording is valid, not on what the rock means.",
    "whereTheWorkHappens": {
      "Work Setting": "Wireline Logging Unit: an acquisition cabin or truck body holding the winch and depth panel, tension readout, and the acquisition workstation. During perforating and source handling the engineer works on the rig floor under radio silence with no electronic device permitted.",
      "What They Can Reach": "Acquisition platforms (SLB MAXWELL, Halliburton InSite, Warrior), the depth and tension panel, calibration jigs and API test pits, the tool shop maintenance database, the sealed-source custody register, the explosives magazine log, and SAP PM/MM for service orders — the last of which is only reachable once back in an electronic-safe zone.",
      "Shift Pattern": "Call-out driven rather than rostered. A single job routinely runs 12 to 24+ continuous hours on location in extreme weather, followed by post-job close-out. Offshore hitches of 14/14 or 28/28.",
      "Where the Record Lives": "Field prints and LAS deliverables (CWLS 2.0/3.0), calibration certificates before and after survey, the depth-tie record against driller's depth, sealed-source custody documents, the explosives and detonator tally, and the SAP service order / field ticket."
    }
  },
  "standards": [
    {
      "key": "",
      "citation": "[API-RP66]: American Petroleum Institute, Recommended Practice for Exploration and Production Wireline Operations — rig-up, pressure control, calibration discipline and tool failure reporting."
    },
    {
      "key": "",
      "citation": "[API-RP67]: American Petroleum Institute, Oilfield Explosives Safety — radio silence / HERO protocol, gun arming sequence, detonator and charge accountability."
    },
    {
      "key": "",
      "citation": "[SPWLA-LQC]: SPWLA, Wireline and LWD Log Quality Control Guidelines — repeat-section acceptance criteria, curve validity thresholds and depth control tolerance."
    },
    {
      "key": "",
      "citation": "[CWLS-LAS]: Canadian Well Logging Society, Log ASCII Standard (LAS) 2.0 / 3.0 Specification — deliverable curve format, null conventions and header requirements."
    },
    {
      "key": "",
      "citation": "[AERB-Source]: Atomic Energy Regulatory Board / IAEA SSR-6 Regulations for the Safe Transport of Radioactive Material — sealed source custody chain, transport documentation and dose recording for Cs-137 and Am-241/Be."
    },
    {
      "key": "",
      "citation": "[SPE-177439]: Modernizing Oilfield Service Ticketing: Eliminating Administrative Friction and Billing Disputes, SPE-177439-MS — field ticket clerical error rates and billing cycle latency."
    },
    {
      "key": "",
      "citation": "[SPE-214478]: Wellsite Log Quality Control Under Operational Time Pressure — re-run economics and the cost asymmetry between downhole and post-POOH defect detection."
    }
  ],
  "vendorGaps": [
    {
      "product": "SLB MAXWELL / Halliburton InSite / Warrior",
      "module": "Wireline Acquisition & Recording",
      "solves": "Industry-standard acquisition, depth tracking, real-time curve plotting and LAS/DLIS export. Records everything faithfully at full sample rate.",
      "gap": "Records without adjudicating. The platform plots a cycle-skipped sonic, a stuck-tool depth stretch and a repeat section that fails the SPWLA 95% agreement threshold exactly as cleanly as valid data. It has no opinion on whether the recording should be accepted."
    },
    {
      "product": "SLB Techlog / Emerson Paradigm",
      "module": "Post-Acquisition Log QC",
      "solves": "Rich interactive QC displays, curve editing, splicing and environmental correction — the town office toolset.",
      "gap": "Arrives hours to days too late. By the time the data is loaded in town, the tool is out of the hole and often the interval is cased. The decision that mattered was made at the wellsite under fatigue with no computation available."
    },
    {
      "product": "Calibration Jigs & API Test Pits",
      "module": "Sensor Reference Verification",
      "solves": "Provide the physical primary standard for neutron, density and resistivity response.",
      "gap": "Produce paper certificates. Before-survey and after-survey values are recorded by hand or in isolated tool files; nothing automatically computes drift across the run or compares it against the tolerance band before the log is delivered."
    },
    {
      "product": "SAP PM / MM",
      "module": "Service Order, Billing & Asset Management",
      "solves": "Authoritative enterprise system for service orders, rental line items, tool serial masters and invoicing.",
      "gap": "Requires an electronic device and a functioning human. Radio silence bans devices on the rig floor, so the tally is handwritten; SAP then demands 45 to 60 minutes of accurate keying from an engineer at the end of a 24-hour tour. SPE-177439 measures the result: 22% of field tickets contain clerical errors."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Verify tool string combinability, pressure/temperature ratings & sensor spacing against the well programme",
      "source": "[API-RP66 §5]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Event",
      "time": "1–2 hrs",
      "friction": "consistency",
      "agentRef": 3,
      "owner": "agent",
      "agentLabel": "Agent 3: Calibration & Tool Readiness",
      "label": "Tool String Readiness and Calibration Traceability (B1, [API-RP66 §5, §7])",
      "today": "Engineer assembles the string against the well programme, runs master and before-survey calibrations, files the paper certificates, and repeats the exercise after survey — then eyeballs whether the two sets look close enough.",
      "failureMode": "A nuclear detector that drifted 4% across a hot, 14-hour run still produces a plausible-looking density curve. Nobody computes the before-versus-after delta against the tolerance band, so the drift is discovered months later during a reserves audit, if ever, and every porosity derived from that run is quietly wrong.",
      "agentNote": "→ See §4 (Agent 3: Wireline Calibration Traceability & Tool Readiness Verification Agent)."
    },
    {
      "code": "A02",
      "action": "Execute API master & before-survey calibrations for nuclear, resistivity and sonic sensors",
      "source": "[API-RP66 §7]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "1–2 hrs",
      "friction": "traceability",
      "agentRef": 3,
      "owner": "agent",
      "agentLabel": "Agent 3: Calibration & Tool Readiness",
      "label": "Tool String Readiness and Calibration Traceability (B1, [API-RP66 §5, §7])",
      "today": "Engineer assembles the string against the well programme, runs master and before-survey calibrations, files the paper certificates, and repeats the exercise after survey — then eyeballs whether the two sets look close enough.",
      "failureMode": "A nuclear detector that drifted 4% across a hot, 14-hour run still produces a plausible-looking density curve. Nobody computes the before-versus-after delta against the tolerance band, so the drift is discovered months later during a reserves audit, if ever, and every porosity derived from that run is quietly wrong.",
      "agentNote": "→ See §4 (Agent 3: Wireline Calibration Traceability & Tool Readiness Verification Agent)."
    },
    {
      "code": "A03",
      "action": "Verify after-survey calibration & compute sensor response drift across the completed run",
      "source": "[API-RP66 §7]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "1 hr",
      "friction": "traceability",
      "agentRef": 3,
      "owner": "agent",
      "agentLabel": "Agent 3: Calibration & Tool Readiness",
      "label": "Tool String Readiness and Calibration Traceability (B1, [API-RP66 §5, §7])",
      "today": "Engineer assembles the string against the well programme, runs master and before-survey calibrations, files the paper certificates, and repeats the exercise after survey — then eyeballs whether the two sets look close enough.",
      "failureMode": "A nuclear detector that drifted 4% across a hot, 14-hour run still produces a plausible-looking density curve. Nobody computes the before-versus-after delta against the tolerance band, so the drift is discovered months later during a reserves audit, if ever, and every porosity derived from that run is quietly wrong.",
      "agentNote": "→ See §4 (Agent 3: Wireline Calibration Traceability & Tool Readiness Verification Agent)."
    },
    {
      "code": "A04",
      "action": "Rig up the wireline unit, sheave assembly & pressure control equipment; pressure-test PCE to rated working pressure",
      "source": "[API-RP66 §6]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Event",
      "time": "2–3 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead / Rig Floor)",
      "label": "Wireline Rig-Up and Pressure Control Equipment Test (B3, [API-RP66 §6])",
      "today": "Crew spots the unit, strings up sheaves, makes up the PCE stack, and pressure-tests to rated working pressure with the Company Man witnessing.",
      "agentNote": "❌ No. Physical rig-floor assembly and a witnessed pressure barrier test; the accountable signature is human by regulation."
    },
    {
      "code": "A05",
      "action": "Maintain cable depth control: tie to driller's depth, apply stretch & temperature correction, monitor tension",
      "source": "[SPWLA-LQC §3]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Continuous",
      "time": "2–3 hrs",
      "friction": "calculation",
      "agentRef": 4,
      "owner": "agent",
      "agentLabel": "Agent 4: Depth Control & Stretch Correction",
      "label": "Cable Depth Control and Stretch Correction (B1, [SPWLA-LQC §3])",
      "today": "Engineer ties logger's depth to driller's depth at a casing shoe or known marker, then applies cable stretch correction from a lookup chart against tension and temperature, adjusting by feel as the string goes deeper.",
      "failureMode": "An uncorrected stretch error puts every curve a metre or more off true depth. The error is systematic and invisible on the plot — it surfaces when core will not tie to log, or when a perforating gun is run to a depth that misses the pay by the same offset.",
      "agentNote": "→ See §4 (Agent 4: Cable Depth Control, Stretch Correction & Depth-Tie Reconciliation Agent)."
    },
    {
      "code": "A06",
      "action": "Acquire the main logging pass & repeat section across the target reservoir interval",
      "source": "[SPWLA-LQC §2]",
      "scope": "well",
      "bucket": "B3",
      "freq": "Event",
      "time": "3–5 hrs",
      "friction": "execution",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead / Tool in Hole)",
      "label": "Main Pass and Repeat Section Acquisition (B3, [SPWLA-LQC §2])",
      "today": "Engineer runs the tool to total depth and logs up at controlled speed, then repeats a section of the interval for verification.",
      "agentNote": "❌ No. Live tool-in-hole operation with a cable under tension; the engineer controls the winch and owns the consequences."
    },
    {
      "code": "A07",
      "action": "QC recorded curves for tool sticking, cycle skips, washout artefacts & repeat disagreement, then call the re-run before POOH",
      "source": "[SPWLA-LQC §4]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Event",
      "time": "1–2 hrs",
      "friction": "judgment",
      "agentRef": 1,
      "owner": "agent",
      "agentLabel": "Agent 1: LQC & Re-Run Agent",
      "label": "Wellsite Log Quality Control, the Re-Run Call and Deliverable Sign-Off (B1, [SPWLA-LQC §4], [CWLS-LAS])",
      "today": "At 3:00 AM after a long tour, the engineer scrolls plots looking for cycle skips, sticking, washout artefacts and repeat-versus-main disagreement across roughly 150,000 data points on a kilometre of log, then argues the re-run question with the Company Man while the rig standby clock runs at 10k to $40k per hour.",
      "failureMode": "Shell's audit found 15% to 20% of jobs carry unrecognised defects. Caught downhole, a re-log of a 50 m interval costs 1.5 hours. Caught after POOH and rig-down, recovery burns 36 to 72 hours — and if the interval has been cased, the open-hole measurement is gone for the life of the well.",
      "agentNote": "→ See §4 (Agent 1: Real-Time Log Quality Control & Re-Run Agent)."
    },
    {
      "code": "A08",
      "action": "Maintain sealed radioactive source (Cs-137 / Am-241-Be) custody chain, transport papers, dose records & source pit reconciliation",
      "source": "[AERB-Source]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "1–2 hrs",
      "friction": "traceability",
      "agentRef": 5,
      "owner": "agent",
      "agentLabel": "Agent 5: Source & Explosives Custody",
      "label": "Sealed Radioactive Source Custody Chain (B1, [AERB-Source])",
      "today": "Engineer signs the source out of the pit, records serials and dose rates by hand, carries transport documents through customs or port control, and signs it back in — the paperwork trail spanning several authorities and a paper register.",
      "failureMode": "A source serial recorded wrong, or a transport document that does not match the physical inventory, is a regulatory event in its own right. A source that cannot be accounted for at the end of a campaign escalates immediately to the national regulator.",
      "agentNote": "→ See §4 (Agent 5: Sealed Source & Explosives Custody Chain Reconciliation Agent)."
    },
    {
      "code": "A09",
      "action": "Enforce API RP 67 radio silence & RF emitter shutdown across the installation before arming perforating guns",
      "source": "[API-RP67 §4.3]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Event",
      "time": "1–2 hrs",
      "friction": "integrity",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead / Party Chief)",
      "label": "API RP 67 Radio Silence Enforcement (B3, [API-RP67 §4.3])",
      "today": "Before guns are armed, every RF emitter on the installation is shut down — handheld radios, satcom, radar, welding sets, crane telemetry — and the Party Chief walks the location confirming each one before authorising arming.",
      "agentNote": "❌ No. A physical walk-round and a life-safety authorisation against stray RF detonation; the arming call stays with the licensed human on location."
    },
    {
      "code": "A10",
      "action": "Arm, run, fire & recover the perforating gun string; account for every shaped charge and detonator",
      "source": "[API-RP67 §7]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Event",
      "time": "2–4 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead / Explosives)",
      "label": "Perforating Gun Arming, Firing and Charge Accountability (B3, [API-RP67 §7])",
      "today": "Engineer arms the gun string, runs to depth, correlates on CCL, fires, and recovers the carrier — then counts fired versus recovered charges and detonators against the magazine issue.",
      "agentNote": "❌ No. Live explosives handling under licence. Every step is a human-signed, physically witnessed action."
    },
    {
      "code": "A11",
      "action": "Monitor cable head tension, weak point margin & differential sticking risk during descent",
      "source": "[SPWLA-LQC §5]",
      "scope": "task",
      "bucket": "B2",
      "freq": "Continuous",
      "time": "1–2 hrs",
      "friction": "computation",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Acquisition Monolith)",
      "label": "Cable Tension, Weak Point and Sticking Risk Monitoring (B2, [SPWLA-LQC §5])",
      "today": "The acquisition platform displays real-time cable head tension against the computed weak-point rating and flags overpull trends during descent and logging.",
      "agentNote": "❌ No. Native real-time function of the acquisition monolith, already instrumented and alarmed at the panel."
    },
    {
      "code": "A12",
      "action": "Triage downhole tool failures & telemetry loss; decide pull-out-of-hole versus continue the run",
      "source": "[API-RP66 §9]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Event",
      "time": "1–2 hrs",
      "friction": "recall",
      "agentRef": 6,
      "owner": "agent",
      "agentLabel": "Agent 6: Tool Failure Triage & Run History",
      "label": "Downhole Tool Failure Triage and Run History (B1, [API-RP66 §9])",
      "today": "When a sensor drops out mid-run, the engineer must decide within minutes whether to continue degraded or pull out of hole, drawing on whatever they personally remember about that tool serial's recent behaviour. Afterwards the serial tally and failure report are written up for the tool shop.",
      "failureMode": "The same tool serial fails the same way on three consecutive jobs across three different engineers, and nobody connects them because the run history lives in separate handwritten failure reports. Each crew pays the diagnostic cost from scratch.",
      "agentNote": "→ See §4 (Agent 6: Downhole Tool Failure Triage & Serial Run-History Agent)."
    },
    {
      "code": "A13",
      "action": "Maintain tool serial tally, maintenance records & field failure reporting back to the tool shop",
      "source": "[API-RP66 §9]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "1 hr",
      "friction": "assembly",
      "agentRef": 6,
      "owner": "agent",
      "agentLabel": "Agent 6: Tool Failure Triage & Run History",
      "label": "Downhole Tool Failure Triage and Run History (B1, [API-RP66 §9])",
      "today": "When a sensor drops out mid-run, the engineer must decide within minutes whether to continue degraded or pull out of hole, drawing on whatever they personally remember about that tool serial's recent behaviour. Afterwards the serial tally and failure report are written up for the tool shop.",
      "failureMode": "The same tool serial fails the same way on three consecutive jobs across three different engineers, and nobody connects them because the run history lives in separate handwritten failure reports. Each crew pays the diagnostic cost from scratch.",
      "agentNote": "→ See §4 (Agent 6: Downhole Tool Failure Triage & Serial Run-History Agent)."
    },
    {
      "code": "A14",
      "action": "Transcribe the handwritten field ticket, billable standby hours & explosives/source tally into SAP once clear of radio silence",
      "source": "[SPE-177439]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "45–60 mins",
      "friction": "assembly",
      "agentRef": 2,
      "owner": "agent",
      "agentLabel": "Agent 2: Radio-Silence Field Ticket Capture",
      "label": "Post-Radio-Silence Field Ticket and Tally Capture (B1, [SPE-177439])",
      "today": "Because radio silence banned every device on the rig floor, the whole job — operational hours, rig standby, tool rental lines, charge and source serials — exists only as handwritten notes on grease-smudged paper. The engineer keys it into SAP for 45 to 60 minutes after an 18 to 24 hour tour.",
      "failureMode": "SPE-177439 measures 22% of field tickets carrying clerical errors — transposed serials, omitted standby. Forgetting 4.5 hours of rig standby while waiting on mud circulation forfeits ₹3,00,000 to ₹10,00,000 of legitimate billing, and disputed lines stretch the invoice cycle to 14 days.",
      "agentNote": "→ See §4 (Agent 2: Radio-Silence Field Ticket & Explosives Tally Capture Agent)."
    },
    {
      "code": "A15",
      "action": "Deliver the witnessed field print, CWLS LAS deliverable & operator sign-off package",
      "source": "[CWLS-LAS]",
      "scope": "well",
      "bucket": "B1",
      "freq": "Event",
      "time": "1–2 hrs",
      "friction": "assembly",
      "agentRef": 1,
      "owner": "agent",
      "agentLabel": "Agent 1: LQC & Re-Run Agent",
      "label": "Wellsite Log Quality Control, the Re-Run Call and Deliverable Sign-Off (B1, [SPWLA-LQC §4], [CWLS-LAS])",
      "today": "At 3:00 AM after a long tour, the engineer scrolls plots looking for cycle skips, sticking, washout artefacts and repeat-versus-main disagreement across roughly 150,000 data points on a kilometre of log, then argues the re-run question with the Company Man while the rig standby clock runs at 10k to $40k per hour.",
      "failureMode": "Shell's audit found 15% to 20% of jobs carry unrecognised defects. Caught downhole, a re-log of a 50 m interval costs 1.5 hours. Caught after POOH and rig-down, recovery burns 36 to 72 hours — and if the interval has been cased, the open-hole measurement is gone for the life of the well.",
      "agentNote": "→ See §4 (Agent 1: Real-Time Log Quality Control & Re-Run Agent)."
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "Real-Time Log Quality Control & Re-Run Agent",
      "oneLine": "Computes SPWLA log quality criteria across every recorded curve the moment the pass completes — repeat-versus-main agreement, cycle skips, sticking signatures, washout-driven artefacts and depth consistency — and returns a pass/fail verdict per reservoir interval while the tool is still downhole and a re-run is still cheap.",
      "frictionSolved": "Eliminates 2.00 hours per wireline logging run of manual plot scrolling, repeat-curve overlay tracing and LQC questionnaire completion, and delivers the verdict before the decision window closes rather than after.",
      "reads": "The recorded curve set for main and repeat passes (gamma, resistivity, density, neutron, sonic, caliper), cable tension and line speed records, the depth channel, before-survey calibration values, and the well programme's declared target reservoir interval.",
      "does": "1. Computes repeat-section agreement against the main pass across the overlapping interval and tests it against the SPWLA 95% threshold; 2. Detects sonic cycle skips, density-neutron separation anomalies inconsistent with declared lithology, and caliper excursions indicating washout beyond the pad-contact envelope; 3. Screens the depth channel and tension record for sticking signatures — tension spikes with corresponding depth discontinuity — which manifest as compressed or stretched curve intervals; 4. Tests deep resistivity tracking within ±5% in non-permeable uninvaded zones as a telemetry and electrode integrity check; 5. Scores each curve independently over the target reservoir interval and separately over the full logged section, so a failure confined to a non-reservoir interval is not escalated as if it were pay; 6. Assembles the CWLS LAS deliverable and field print package with the QC verdict attached as a machine-readable certificate.",
      "returns": "Wellsite Log Quality Dossier stating a per-curve and per-interval pass/fail against named SPWLA criteria, the specific depth ranges and failure mechanism for every exception, the quantified repeat-section agreement percentage, and a costed re-run recommendation comparing downhole re-log time against post-POOH recovery.",
      "stopsAt": "Ordering the re-run. The agent proves the log is invalid and prices both options; the decision to spend rig time belongs to the Well Logging Engineer and the Company Man.",
      "failureModes": "In intervals where no repeat section was acquired, the agent cannot compute the primary agreement statistic and explicitly reports [No Repeat Section: Agreement Criterion Not Evaluable] rather than inferring a pass. In severely rugose or deviated hole where caliper indicates pad contact was never established, it flags the density and neutron curves as [Environmentally Invalid: Not a Tool Fault] so the crew does not re-run a tool that is working correctly in a hole that cannot be logged.",
      "agentId": "OG-P24-A01"
    },
    {
      "n": 2,
      "name": "Radio-Silence Field Ticket & Explosives Tally Capture Agent",
      "oneLine": "Converts the handwritten clipboard tally — the only record that can legally exist on a rig floor under API RP 67 radio silence — into a structured, reconciled SAP service order from a single photograph taken once the engineer is back in an electronic-safe zone.",
      "frictionSolved": "Eliminates 0.70 hours per job of end-of-tour manual SAP keying performed by an engineer who has been physically working for 18 to 24 hours, and independently recovers billable rig standby hours that fatigue routinely causes to be omitted.",
      "reads": "Photographs of the handwritten field ticket and explosives/source tally sheet, the rig activity time log, the contractual standby and allowable-window terms for the service order, the SAP tool serial and rental line masters, and the magazine issue record for charges and detonators.",
      "does": "1. Extracts handwritten operational time entries, tool serials, rental line items, charge and detonator counts and source serials from grease- and mud-marked paper; 2. Reconciles extracted tool and source serials against the SAP asset master, rejecting any serial that does not resolve rather than creating a new one; 3. Cross-checks the job time breakdown against the rig activity log and identifies waiting-on-operator intervals that qualify as billable standby under the contract terms; 4. Balances charges fired against charges issued and detonators returned, flagging any discrepancy as an explosives accountability exception before the ticket can close; 5. Assembles the draft SAP service order confirmation with every field traced back to a specific region of the source photograph for review.",
      "returns": "Draft SAP service order with line-by-line provenance back to the scanned tally, an explicit list of recovered billable standby hours with contractual justification, and a blocking exception list for any serial or explosives count that does not reconcile.",
      "stopsAt": "Submitting the service order or authorising the invoice. The engineer reviews and taps to authorise; the ticket is a commercial document carrying their name.",
      "failureModes": "Any explosives or radioactive source count that fails to balance produces a hard block — the agent will not emit a submittable ticket with an unreconciled charge, detonator or source serial, because that tally is a regulatory record and not a billing line. Where handwriting confidence falls below threshold on a serial number or time entry, the field is left empty and flagged [Illegible: Manual Entry Required] rather than guessed.",
      "agentId": "OG-P24-A02"
    },
    {
      "n": 3,
      "name": "Wireline Calibration Traceability & Tool Readiness Verification Agent",
      "oneLine": "Verifies before the string goes in hole that every tool is rated and combinable for the declared well conditions, and verifies after it comes out that each sensor's response has not drifted beyond tolerance across the run.",
      "frictionSolved": "Eliminates 2.60 hours per job of manual specification cross-checking and paper calibration certificate comparison, and converts before-versus-after drift from an impression into a computed number with a stated tolerance.",
      "reads": "The well programme's declared maximum temperature, pressure, hole size and mud properties; the tool catalogue's rating and sensor-spacing data; master calibration references and API test pit values; and the before-survey and after-survey calibration records for the run.",
      "does": "1. Checks each tool in the proposed string against declared well temperature and pressure ratings, flagging any component operating inside its margin; 2. Verifies mechanical and telemetry combinability across the string and confirms sensor spacing supports the required vertical resolution; 3. Compares before-survey calibration values against the master and API reference standards; 4. Computes per-sensor response drift between before-survey and after-survey calibration and tests it against the published tolerance band for that sensor type; 5. Assembles the calibration traceability record linking every delivered curve to the specific calibration events that bound it.",
      "returns": "Tool Readiness and Calibration Traceability Certificate listing per-tool rating margin against well conditions, per-sensor computed drift with pass/fail against tolerance, and an explicit statement of which delivered curves are affected by any out-of-tolerance sensor.",
      "stopsAt": "Releasing the string to run, or condemning a tool. Tool acceptance and rejection are the engineer's call and the tool shop's disposition.",
      "failureModes": "Where an after-survey calibration was not acquired — common when a tool is recovered damaged — the agent reports [Drift Not Evaluable: No After-Survey Reference] and marks the run's curves as calibration-unbounded rather than assuming the before-survey values held. It does not interpolate a missing calibration from an adjacent run on the same serial.",
      "agentId": "OG-P24-A03"
    },
    {
      "n": 4,
      "name": "Cable Depth Control, Stretch Correction & Depth-Tie Reconciliation Agent",
      "oneLine": "Computes cable stretch and thermal elongation continuously from tension, cable properties and temperature, and reconciles logger's depth against driller's depth and previous-run references so the depth channel behind every curve is defensible.",
      "frictionSolved": "Eliminates 1.70 hours per run of chart-lookup stretch correction, manual depth-tie arithmetic and after-the-fact reconciliation against the driller's record.",
      "reads": "Real-time cable head tension, line speed and measured depth; cable elastic and thermal constants for the deployed cable; borehole temperature profile; driller's depth reference and casing shoe tie points; and the depth channels of previous logging runs in the same wellbore.",
      "does": "1. Computes elastic stretch from tension and cable modulus continuously along the deployed length; 2. Applies thermal elongation using the borehole temperature profile rather than a surface constant; 3. Reconciles the corrected logger's depth against declared casing shoe and driller's depth tie points, quantifying residual offset; 4. Cross-correlates the gamma channel against previous runs in the same wellbore to detect run-to-run depth inconsistency independent of the cable model; 5. Produces the corrected depth channel with a stated uncertainty envelope that travels with the deliverable.",
      "returns": "Depth Control Record stating applied stretch and thermal corrections along the run, residual offset against each tie point, run-to-run gamma correlation offsets, and a depth uncertainty envelope for the logged interval.",
      "stopsAt": "Overwriting the recorded depth channel in the deliverable. It proposes the correction and its basis; applying it is the engineer's action.",
      "failureModes": "Where corrected depth still disagrees with driller's depth beyond the tolerance for the hole section, the agent reports [Depth Tie Unresolved] and refuses to state an uncertainty envelope, because a stretch model that cannot reproduce a known reference should not be trusted to bound an unknown one. Cable property constants that do not match the deployed cable serial produce a hard warning rather than a silent default.",
      "agentId": "OG-P24-A04"
    },
    {
      "n": 5,
      "name": "Sealed Source & Explosives Custody Chain Reconciliation Agent",
      "oneLine": "Maintains a continuously reconciled custody position for every sealed radioactive source and every explosive item on the location, matching physical movements against transport documents, magazine records and regulatory returns.",
      "frictionSolved": "Eliminates 1.25 hours per job of manual custody paperwork, serial transcription and inventory reconciliation across the source pit, magazine and transport documentation.",
      "reads": "Sealed source serials, activities and last-assay dates; source pit sign-out and sign-in records; dose rate measurements; transport and customs documentation; the explosives magazine issue and return log; and per-job charge, detonator and source utilisation records.",
      "does": "1. Maintains the current custody holder and physical location for every source and explosive item against its serial; 2. Reconciles each job's declared usage against magazine issue and return, surfacing any item neither returned nor accounted as expended; 3. Recomputes present source activity from the last assay and decay constant, flagging sources approaching regulatory re-assay or disposal thresholds; 4. Checks transport documentation completeness against the applicable AERB/IAEA requirements for the planned movement before the source leaves site; 5. Assembles the periodic regulatory inventory return from the reconciled position.",
      "returns": "Custody Position Report stating the current accounted location of every source and explosive item, a dated exception list for anything unreconciled, computed present activities with re-assay due dates, and a draft regulatory inventory return.",
      "stopsAt": "Signing the regulatory return or authorising a source movement. Both are licensed acts carrying named personal accountability.",
      "failureModes": "Any unaccounted sealed source produces an immediate [Source Unaccounted: Escalate to Radiation Protection Supervisor] and the agent will not emit a regulatory return containing an unresolved item. It never infers that an item was expended because a job is closed — expenditure must be evidenced by a return record.",
      "agentId": "OG-P24-A05"
    },
    {
      "n": 6,
      "name": "Downhole Tool Failure Triage & Serial Run-History Agent",
      "oneLine": "When a sensor drops out mid-run, retrieves what that specific tool serial has done across every previous job and every crew, so the pull-out-of-hole decision is made against evidence rather than one engineer's recollection.",
      "frictionSolved": "Eliminates 1.90 hours per event of failure diagnosis from memory and post-job failure report assembly, and breaks the pattern where the same serial fails the same way across consecutive crews without anyone connecting the runs.",
      "reads": "Real-time tool health and telemetry status for the running string, the tool shop maintenance and repair database, prior field failure reports keyed by serial, and the run history and operating conditions for each serial.",
      "does": "1. Matches the live failure signature against prior recorded failures for the same serial and the same tool type; 2. Retrieves maintenance and repair history for the serial, including time since last shop visit and components replaced; 3. Correlates prior failures against operating conditions — temperature, run duration, hole deviation — to identify whether the serial fails under a recurring condition; 4. Estimates the likelihood that continuing the run degrades further versus recovers, against the remaining interval to be logged; 5. Drafts the structured field failure report for the tool shop with the diagnosis and evidence pre-populated.",
      "returns": "Tool Failure Triage Brief stating the matched failure pattern with prior occurrences by date and serial, maintenance history, the conditions under which this serial has previously failed, and a drafted field failure report ready for review.",
      "stopsAt": "The pull-out-of-hole decision. Rig time and the remaining logging objective are the engineer's and the Company Man's to weigh.",
      "failureModes": "Where a serial has no prior recorded history — a newly built or newly repaired tool — the agent states [No Serial History: Type-Level Pattern Only] and restricts itself to tool-type patterns rather than presenting type statistics as if they described this unit. It does not recommend continuing a run on a tool whose failure signature it cannot classify.",
      "agentId": "OG-P24-A06"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating asset provides its own logging run count, rig day rate and campaign multipliers.",
    "rows": [
      {
        "agent": "Real-Time Log Quality Control & Re-Run Agent",
        "unit": "1 Wireline Logging Run",
        "beforeHours": 2.25,
        "afterHours": 0.25,
        "savedHours": 2.0,
        "frictionRemoved": "3:00 AM Manual Plot Scrolling & Repeat Overlay Tracing"
      },
      {
        "agent": "Radio-Silence Field Ticket & Explosives Tally Capture Agent",
        "unit": "1 Post-Job Ticket Cycle",
        "beforeHours": 0.75,
        "afterHours": 0.05,
        "savedHours": 0.7,
        "frictionRemoved": "End-of-Tour Manual SAP Keying from Handwritten Paper"
      },
      {
        "agent": "Wireline Calibration Traceability & Tool Readiness Verification Agent",
        "unit": "1 Job (Pre-Job & Post-Job)",
        "beforeHours": 3.0,
        "afterHours": 0.4,
        "savedHours": 2.6,
        "frictionRemoved": "Specification Cross-Checking & Paper Certificate Comparison"
      },
      {
        "agent": "Cable Depth Control, Stretch Correction & Depth-Tie Reconciliation Agent",
        "unit": "1 Wireline Logging Run",
        "beforeHours": 2.0,
        "afterHours": 0.3,
        "savedHours": 1.7,
        "frictionRemoved": "Chart-Lookup Stretch Correction & Depth-Tie Arithmetic"
      },
      {
        "agent": "Sealed Source & Explosives Custody Chain Reconciliation Agent",
        "unit": "1 Job (Source / Explosives Movement)",
        "beforeHours": 1.5,
        "afterHours": 0.25,
        "savedHours": 1.25,
        "frictionRemoved": "Manual Custody Paperwork & Serial Transcription"
      },
      {
        "agent": "Downhole Tool Failure Triage & Serial Run-History Agent",
        "unit": "1 Tool Failure Event",
        "beforeHours": 2.25,
        "afterHours": 0.35,
        "savedHours": 1.9,
        "frictionRemoved": "Diagnosis from Memory & Failure Report Assembly"
      }
    ],
    "total": {
      "unit": "Per Wireline Logging Run / Post-Job Cycle",
      "beforeHours": 11.75,
      "afterHours": 1.6,
      "savedHours": 10.15,
      "frictionRemoved": "86.4% reduction in wireline field operations administrative and verification drag",
      "label": "Total Operational Cycle Drag Reduction"
    }
  },
  "citations": [
    {
      "key": "[API-RP66]",
      "citation": "American Petroleum Institute, Recommended Practice for Exploration and Production Wireline Operations",
      "locator": "api.org",
      "type": "Industry Recommended Practice",
      "supports": "Rig-up and pressure control discipline, calibration procedure, tool failure reporting"
    },
    {
      "key": "[API-RP67]",
      "citation": "American Petroleum Institute, Oilfield Explosives Safety, RP 67",
      "locator": "api.org",
      "type": "Industry Recommended Practice",
      "supports": "Radio silence / HERO protocol, gun arming sequence, charge and detonator accountability"
    },
    {
      "key": "[SPWLA-LQC]",
      "citation": "SPWLA, Wireline and LWD Log Quality Control Guidelines",
      "locator": "spwla.org",
      "type": "Technical Standard",
      "supports": "Repeat-section agreement threshold, curve validity criteria, depth control tolerance"
    },
    {
      "key": "[CWLS-LAS]",
      "citation": "Canadian Well Logging Society, Log ASCII Standard (LAS) 2.0 / 3.0 Specification",
      "locator": "cwls.org",
      "type": "Data Exchange Standard",
      "supports": "Deliverable curve format, header requirements and null conventions"
    },
    {
      "key": "[AERB-Source]",
      "citation": "Atomic Energy Regulatory Board / IAEA, SSR-6 Regulations for the Safe Transport of Radioactive Material",
      "locator": "aerb.gov.in / iaea.org",
      "type": "Regulatory Standard",
      "supports": "Sealed source custody chain, transport documentation, dose recording and inventory returns"
    },
    {
      "key": "[SPE-177439]",
      "citation": "Modernizing Oilfield Service Ticketing: Eliminating Administrative Friction and Billing Disputes, SPE-177439-MS",
      "locator": "OnePetro",
      "type": "Technical Paper",
      "supports": "Field ticket clerical error rate (22%), dispute reduction and billing cycle latency"
    },
    {
      "key": "[SPE-214478]",
      "citation": "Wellsite Log Quality Control Under Operational Time Pressure, SPE-214478",
      "locator": "OnePetro",
      "type": "Technical Paper",
      "supports": "Re-run economics and the cost asymmetry between downhole and post-POOH defect detection"
    }
  ],
  "negativeSearch": {
    "searched": "SLB MAXWELL, Halliburton InSite and Warrior acquisition platform documentation for \"automated wellsite computation of SPWLA repeat-section agreement and per-curve quality verdict issued before pull-out-of-hole\".",
    "result": "Negative Search, 2026-09. Acquisition platforms record, plot and export curves faithfully and provide interactive QC displays, but none autonomously adjudicate curve validity against named SPWLA acceptance criteria and return a costed re-run recommendation while the tool remains downhole. The judgement is left entirely to a fatigued human reading plots inside the decision window."
  },
  "line": "\"The acquisition system will plot you a cycle-skipped sonic just as beautifully as a good one. It records; it does not have an opinion. The only person with an opinion is a man who has been awake for twenty hours, and he has about an hour before the interval is cased over and the measurement is gone for the life of the well.\"",
  "openQuestions": []
};
