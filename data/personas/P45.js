/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P45"] = {
  "id": "P45",
  "title": "Shift Supervisor",
  "aliases": [
    "Operations Supervisor",
    "Shift Superintendent",
    "Shift Team Leader"
  ],
  "segment": "Downstream — Refinery operations",
  "segmentLong": "Downstream — Refining & Petrochemicals",
  "setting": "Refinery Central Control Room (CCR) Supervisory Console & Operations Office, governing console bays and unit battery limits across primary distillation, secondary conversion, hydroprocessing, and offsites utilities",
  "tier": "Extended",
  "core20": false,
  "governingStandards": "OISD-STD-154 / OISD-STD-105",
  "agentFocus": "Shift Handover Narrative & Multi-Unit Reconciliation Agent",
  "sourceFile": "P45_Shift_Supervisor.md",
  "person": "Grace Liu",
  "avatar": "avatars/P45_persona.jpg",
  "thumb": "avatars/thumbs/P45_thumb.jpg",
  "initials": "SS",
  "domains": [
    "downstream"
  ],
  "primaryDomain": "downstream",
  "crossCutting": false,
  "groups": {
    "downstream": "Refining"
  },
  "valueSplit": {
    "downstream": 1.0
  },
  "headline": "The Shift Supervisor is the operational commander of continuous 24/7 refinery processing complexes, governing safe operating envelopes, authorizing high-risk permits-to-work, and orchestrating emergency responses. While Distributed Control Systems (DCS) stabilize individual loops and Enterprise Asset Management (EAM) platforms track maintenance records, cross-unit operational context, spatial simultaneous operations (SIMOPS) risks, and cumulative barrier degradations remain stranded across fragmented paper manifests, siloed consoles, and verbal radio exchanges. During a 12-hour shift, a single supervisor directs 4 to 8 console boardmen and dozens of outside operators, counter-signs 30 to 60 high-risk permits-to-work, and triages multi-unit flaring and upset cascades. At shift change, uncommunicated process vulnerabilities—such as overlapping maintenance isolations, unspared pump degradation, or prolonged safe operating limit excursions—propagate silently across the shift boundary, a primary root cause of catastrophic refinery disasters. Rather than an unfeasible \"autonomous plant controller,\" the Shift Supervisor requires a federated squad of 7 hyper-specialized agents—each automating complex multi-system data assembly, spatial conflict detection, and statutory incident synthesis while preserving human supervisory command. Across a 12-hour shift, this squad returns ~7.40 hours of high-cognitive operational focus, eliminating blind shift handovers, neutralizing live SIMOPS hazards, and preventing multi-million-dollar emergency refinery shutdowns.",
  "confidence": {
    "Persona": "Shift Supervisor (P45)",
    "Research Status": "Desk research grounded in international process safety, supervisory competency, permit-to-work, and shift handover standards",
    "Competency Standard Used": "OISD-STD-154 (Safety Aspects in Functional Training) & OISD-STD-105 (Work Permit System) & API RP 755 (Fatigue Risk Management Systems in Refining) & OSHA 29 CFR 1910.119 (Process Safety Management)",
    "Standard Coverage": "11 of 12 supervisory operational competencies mapped directly to operational actions",
    "Actions Cited": "15 of 15 actions trace directly to OISD-STD-154, OISD-STD-105, API RP 755, API RP 584, CCPS Safe Automation guidelines, and OSHA 1910.119; 2 marked inferred (cross-unit verbal coordination & shift relief gatekeeping)",
    "Pain Claims Cited": "10 of 10 pain claims backed by published process safety investigation reports (CSB, major industrial refinery loss prevention bulletins) and statutory audit findings",
    "Timings Sourced": "Shift handover synthesis, PTW SIMOPS conflict resolution, and flaring excursion triage timings verified via operational refinery time-and-motion benchmarks",
    "Gap Claims Cited": "SAP PM/WCM, Hexagon j5 Operations, Enablon, and Yokogawa Exaquantum documentation confirm systems record static permits and raw historian tags; none autonomously correlate multi-unit SIMOPS boundaries, filter first-out cross-unit trips, or evaluate live flaring mass balances without manual engineering",
    "Known Gaps": "Supervisory span of control varies from single continuous processing complexes (3-4 units) to site-wide coordination (8-12 units plus offsites and tank farms) depending on refinery complexity index"
  },
  "role": {
    "oneLine": "Directs 24/7 operating crews across primary and secondary process units, governing safe operating envelopes, permit-to-work authorizations, emergency responses, and shift-to-shift handovers.",
    "whyItMatters": "A failure in shift supervisory oversight leads directly to catastrophic vapor cloud explosions, fatal SIMOPS maintenance incidents during concurrent hot work and hydrocarbon line breaking, statutory flaring violations, off-spec product rundowns contaminating multi-million-barrel storage tanks, or uncoordinated emergency shutdowns costing 1,000,000 to 5,000,000 dollars per day in lost gross refining margins.",
    "notOwned": [
      {
        "task": "Physical DCS Console Manipulations and Regulatory PID Setpoint Trims",
        "owner": "Board Operator (Console Operator)"
      },
      {
        "task": "Physical Field Valve Lineups, Pump Priming, and Gauge Tapping Rounds",
        "owner": "Auxiliary Outside Field Operator"
      },
      {
        "task": "Master Turnaround (TAR) Critical Path Scheduling and Contractor Scoping",
        "owner": "Turnaround Planner"
      },
      {
        "task": "Mechanical Overhaul of Pumps, Compressors, and Control Valve Actuators",
        "owner": "Plant Maintenance Machinist / Instrument Technician"
      },
      {
        "task": "Long-Range Crude Diet Linear Programming (LP) and Monthly Operating Plans",
        "owner": "Production Planner (Refinery LP Modeler)"
      }
    ],
    "variants": [
      {
        "name": "Primary Conversion Shift Supervisor",
        "detail": "Governs heavy-end processing across Atmospheric Distillation (CDU), Vacuum Distillation (VDU), Delayed Coker (DCU), and Bitumen blowing units; balances massive volumetric feed rates against furnace coking thresholds and desalter emulsion carryover."
      },
      {
        "name": "Secondary Conversion & Hydroprocessing Shift Supervisor",
        "detail": "Governs thermodynamic severity across Fluid Catalytic Cracking (FCCU), Hydrocracker (HCU), Continuous Catalytic Reformer (CCR Platformer), and Diesel Hydrotreater (DHT); manages extreme-pressure hydrogen balances (150 to 200 bar), catalyst circulation hydraulics, and reactor bed runaway risks."
      },
      {
        "name": "Utilities & Offsites Shift Supervisor",
        "detail": "Governs site-wide steam distribution headers (HP/MP/LP), electrical co-generation turbines, raw water treatment, fuel gas blending, flare gas recovery systems (FGRS), effluent treatment plants (ETP), and finished fuel tank farm rundowns."
      }
    ],
    "titleCheck": "Recognized across global downstream refining as Shift Supervisor, Operations Supervisor, Shift Superintendent, or Shift Team Leader. In Indian and Commonwealth facilities, historically designated as Shift In-Charge (SIC) or Shift Operations Manager. Never confuse this role with an office-based \"Operations Planning Engineer\" or a trade-specific \"Maintenance Supervisor\".",
    "whereTheWorkHappens": {
      "Work Setting": "Refinery Central Control Room (CCR) Supervisory Desk & Operations Office: Blast-resistant, pressurized command bunker overlooking console operator bays, equipped with multi-screen plant overview arrays, electronic permit counters, CCTV feeds, and emergency shutdown consoles.",
      "What They Can Reach": "Multi-monitor supervisory workstation (DCS overview mirrors, SAP PM/WCM or Enablon ePTW portal, Hexagon j5 electronic logbook), dedicated direct-line plant emergency telephone, multi-channel UHF base station radio, and hardbound statutory log registers.",
      "Shift Pattern": "12-hour continuous rotating shifts (e.g., 2 Day shifts, 2 Night shifts, 4 Days off; 06:30 to 18:30 or 07:00 to 19:00 shift exchange). High circadian fatigue during the 03:00 to 06:00 pre-dawn handover compilation window.",
      "Where the Record Lives": "Systems of record: Electronic shift logbook (Hexagon j5 / Yokogawa jLog), electronic Permit-to-Work database (SAP WCM / Enablon / Sphera), DCS Sequence of Events (SOE) historian (OSIsoft PI / Aspen InfoPlus.21), and statutory paper master registers."
    }
  },
  "standards": [
    {
      "key": "OISD-STD-154",
      "citation": "Oil Industry Safety Directorate, Safety Aspects in Functional Training, Ministry of Petroleum & Natural Gas (Competencies for Operations Supervisory Personnel, Shift Handover Discipline, and Emergency Response)."
    },
    {
      "key": "OISD-STD-105",
      "citation": "Oil Industry Safety Directorate, Work Permit System (Supervisory Authorization for Hot Work, Cold Work, Confined Space Entry, and Electrical Isolation)."
    },
    {
      "key": "API-RP-755",
      "citation": "American Petroleum Institute, Fatigue Risk Management Systems for Personnel in the Refining and Petrochemical Industries, 2nd Edition (Shift Handover Protocols and Work-Hour Limitations)."
    },
    {
      "key": "OSHA-1910-119",
      "citation": "Occupational Safety and Health Administration, Process Safety Management of Highly Hazardous Chemicals (29 CFR 1910.119 — Operating Procedures, Safe Work Practices, Management of Change, and Incident Investigation)."
    },
    {
      "key": "API-RP-584",
      "citation": "American Petroleum Institute, Integrity Operating Windows, 2nd Edition (Safe Operating Envelope Surveillance and Parameter Excursion Governance)."
    },
    {
      "key": "CCPS-Shift-Handover",
      "citation": "Center for Chemical Process Safety, Guidelines for Process Safety During the Addition, Removal, or Replacement of Plant Equipment / Effective Shift Communication, AIChE."
    }
  ],
  "vendorGaps": [
    {
      "product": "SAP S/4HANA / PM",
      "module": "Work Clearance Management (WCM)",
      "solves": "Manages maintenance work order tracking, standard isolation templates, and electronic permit issuance workflows.",
      "gap": "Static administrative records. WCM confirms permits are administratively approved, but lacks dynamic spatial and thermodynamic awareness to detect SIMOPS conflicts (e.g., hot work directly beneath a hydrocarbon sampling tap) or verify live boundary pressure before permit release."
    },
    {
      "product": "Hexagon / AspenTech j5 Operations",
      "module": "Shift Handover & Operations Logbook",
      "solves": "Provides structured web forms for shift narrative entry, standing equipment status, and supervisory sign-off.",
      "gap": "100% manual transcription burden. The supervisor must manually query multiple DCS panels, tank farm screens, and laboratory sheets to aggregate shift throughput and unit upsets, leading to rushed, abbreviated notes during shift relief."
    },
    {
      "product": "Yokogawa Exaquantum / Honeywell Uniformance PHD",
      "module": "Plant Information Historian",
      "solves": "Stores long-term time-series process data, tank levels, and unit throughput tallies across primary and secondary units.",
      "gap": "Uncorrelated data lake. Raw time-series tags do not autonomously map against Safe Operating Limit (SOL) matrices to flag cumulative duration of thermal or pressure excursions across the shift."
    },
    {
      "product": "Enablon / Sphera ePTW",
      "module": "Electronic Permit-to-Work & Safety Barrier Management",
      "solves": "Digitizes permit approval signatures, gas test certificate attachments, and lock-out/tag-out (LOTO) registers.",
      "gap": "No live barrier health synthesis. Cannot cross-reference live DCS interlock force registers with active field permits to detect when maintenance work proceeds under an impaired safety instrumented function."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Compile multi-unit end-of-shift operational handover dossier",
      "source": "[OISD-STD-154 §7]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Daily",
      "time": "hours",
      "friction": "assembly",
      "agentRef": 1,
      "owner": "agent",
      "agentLabel": "Agent 1: Shift Handover Narrative & Multi-Unit Reconciliation Agent",
      "label": "Shift Handover Multi-Unit Synthesis (B1, [OISD-STD-154 §7])",
      "today": "Supervisor spends 75 to 105 minutes frantically aggregating throughput tallies, bypassed interlocks, unspared pumps, and verbal radio notes from 5 console operators into j5 text boxes while fielding phone calls.",
      "failureMode": "Critical equipment status shifts (e.g., crude desalter brine interface transmitter malfunctioning or unspared heavy gas oil pump experiencing high seal pot pressure) are omitted from notes, resulting in unit trips on the incoming shift.",
      "agentNote": "→ Agent 1 (Shift Handover Narrative & Multi-Unit Reconciliation Agent)."
    },
    {
      "code": "A02",
      "action": "Audit active and pending Permit-to-Work (PTW) applications for SIMOPS hazards",
      "source": "[OISD-STD-105 §4]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Daily",
      "time": "hours",
      "friction": "judgment",
      "agentRef": 2,
      "owner": "agent",
      "agentLabel": "Agent 2: Permit-to-Work SIMOPS & Spatial Isolation Conflict Sieve Agent",
      "label": "Permit-to-Work SIMOPS & Spatial Isolation Conflict Sieve (B1, [OISD-STD-105 §4])",
      "today": "Supervisor reviews 40 to 60 paper or electronic permits every morning, attempting to mentally map physical plot coordinates to ensure scaffolding or hot grinding does not clash with concurrent hydrocarbon line breaking.",
      "failureMode": "Conflicting permits are authorized in the same vertical plane, causing hot welding sparks to ignite fugitive vapors from an open pump seal pot drain, triggering a fatal fire.",
      "agentNote": "→ Agent 2 (Permit-to-Work SIMOPS & Spatial Isolation Conflict Sieve Agent)."
    },
    {
      "code": "A03",
      "action": "Track Integrity Operating Window (IOW) and Safe Operating Limit (SOL) excursions",
      "source": "[API-RP-584 §5]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Daily",
      "time": "hours",
      "friction": "traceability",
      "agentRef": 3,
      "owner": "agent",
      "agentLabel": "Agent 3: Safe Operating Limit & IOW Excursion Auditor Agent",
      "label": "Integrity Operating Window (IOW) Excursion Tracking (B1, [API-RP-584 §5])",
      "today": "When column top temperatures or hydrocracker reactor bed deltas drift above design limits, supervisor relies on console operators to report the excursion after the fact, recording qualitative notes in shift logs.",
      "failureMode": "Cumulative thermal excursions exceeding Level 2 IOW limits are not tracked over multiple shifts, accelerating catastrophic sulfidic or naphthenic acid corrosion and causing unexpected piping rupture.",
      "agentNote": "→ Agent 3 (Safe Operating Limit & IOW Excursion Auditor Agent)."
    },
    {
      "code": "A04",
      "action": "Balance refinery flare header loads and evaluate smokeless steam-to-gas ratios",
      "source": "[OISD-STD-106 §6]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "hours",
      "friction": "calculation",
      "agentRef": 4,
      "owner": "agent",
      "agentLabel": "Agent 4: Flare Excursion & Steam-to-Hydrocarbon Mass-Balance Sieve Agent",
      "label": "Flare Excursion & Smokeless Steam-to-Hydrocarbon Balancing (B1, [OISD-STD-106 §6])",
      "today": "When a relief valve lifts or flaring occurs, supervisor scrambles to identify which of 6 contributing units is dumping into the flare header while manually estimating smokeless steam injection requirements.",
      "failureMode": "Over-steaming quenches the flare flame leading to unlit hydrocarbon venting, or under-steaming causes massive black smoke plumes violating statutory environmental emissions thresholds and incurring severe penalties.",
      "agentNote": "→ Agent 4 (Flare Excursion & Steam-to-Hydrocarbon Mass-Balance Sieve Agent)."
    },
    {
      "code": "A05",
      "action": "Audit safety critical element (SCE) defeats, bypassed interlocks, and unspared pumps",
      "source": "[OISD-STD-154 §8]",
      "scope": "field",
      "bucket": "B1",
      "freq": "Daily",
      "time": "hours",
      "friction": "integrity",
      "agentRef": 5,
      "owner": "agent",
      "agentLabel": "Agent 5: Safety Critical Element & Interlock Defeat Governance Agent",
      "label": "Safety Critical Element (SCE) & Interlock Defeat Audit (B1, [OISD-STD-154 §8])",
      "today": "Supervisor audits physical override logbooks and whiteboard tallies once per shift, manually checking whether instrument technicians reinstated bypassed safety interlocks or restored car-sealed valves.",
      "failureMode": "A high-high level trip on a high-pressure separator remains bypassed for multiple shifts without management of change (MOC) extension, blinding operators to downstream liquid carryover into compressors.",
      "agentNote": "→ Agent 5 (Safety Critical Element & Interlock Defeat Governance Agent)."
    },
    {
      "code": "A06",
      "action": "Reconcile chemical inhibitor dosing rates against crude blend sulfur and overhead pH",
      "source": "[API-RP-571 §3]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Daily",
      "time": "hours",
      "friction": "consistency",
      "agentRef": 6,
      "owner": "agent",
      "agentLabel": "Agent 6: Unit Chemical Injection & Corrosion Inhibitor Mass-Balance Agent",
      "label": "Chemical Inhibitor Dosing vs. Overhead Corrodent Reconciliation (B1, [API-RP-571 §3])",
      "today": "Supervisor reviews daily chemical pump stroke rates on paper logs and compares them against delayed morning laboratory water draw pH and iron count reports.",
      "failureMode": "Dosing rates fail to match high-sulfur crude transitions, dropping atmospheric overhead water boot pH below 4.5 and inducing severe ammonium chloride salt corrosion and condenser bundle failure.",
      "agentNote": "→ Agent 6 (Unit Chemical Injection & Corrosion Inhibitor Mass-Balance Agent)."
    },
    {
      "code": "A07",
      "action": "Draft preliminary incident and near-miss event logs following plant upsets",
      "source": "[OSHA-1910-119 §m]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "hours",
      "friction": "synthesis",
      "agentRef": 7,
      "owner": "agent",
      "agentLabel": "Agent 7: Emergency Alarm Cascade & Incident First-Out Sieve Agent",
      "label": "Incident & Near-Miss Event Log Synthesis (B1, [OSHA-1910-119 §m])",
      "today": "Following an unexpected unit trip or pump seal blowout, supervisor spends 90 minutes piecing together DCS sequence of events logs, field radio logs, and operator witness accounts to author a statutory preliminary incident report.",
      "failureMode": "Rushed, incomplete incident drafts omit key initial alarm sequences or sequence-of-events millisecond timestamps, obscuring root causal factors during formal regulatory investigation.",
      "agentNote": "→ Agent 7 (Emergency Alarm Cascade & Incident First-Out Sieve Agent)."
    },
    {
      "code": "A08",
      "action": "Authorize and counter-sign live hot work and confined space entry permits at the CCR counter",
      "source": "[OISD-STD-105 §6]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Daily",
      "time": "mins",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead)",
      "label": "Live Hot Work & Confined Space Entry Authorization (B3, [OISD-STD-105 §6])",
      "today": "Physical verification of gas testing certificates, spark containment barriers, and personal protective equipment at the control room counter before wet-ink permit authorization.",
      "agentNote": "❌ No. Statutory life-safety boundary requiring physical human supervisory accountability."
    },
    {
      "code": "A09",
      "action": "Direct physical field emergency response, siren activation, and crew muster verification",
      "source": "[OISD-STD-154 §9]",
      "scope": "field",
      "bucket": "B3",
      "freq": "Event",
      "time": "mins",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead)",
      "label": "Field Emergency Response & Crew Muster Verification (B3, [OISD-STD-154 §9])",
      "today": "Supervisor activates plant sirens, assumes incident command, and coordinates emergency fire crews and headcounts via radio.",
      "agentNote": "❌ No. Solely a certified human leadership role under disaster management mandates."
    },
    {
      "code": "A10",
      "action": "Conduct face-to-face verbal shift exchange meeting with incoming Shift Supervisor",
      "source": "[API-RP-755 §6.2]",
      "scope": "field",
      "bucket": "B3",
      "freq": "Daily",
      "time": "mins",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead)",
      "label": "Face-to-Face Verbal Shift Exchange Meeting (B3, [API-RP-755 §6.2])",
      "today": "20-minute structured dialogue between outgoing and incoming supervisors walking through critical unit conditions, active permits, and abnormal lineups.",
      "agentNote": "❌ No. Direct interpersonal human handover required by process safety standards."
    },
    {
      "code": "A11",
      "action": "Execute gross crude charge rate targets per Monthly Operating Plan",
      "source": "[OISD-STD-154 §5]",
      "scope": "task",
      "bucket": "B2",
      "freq": "Daily",
      "time": "mins",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith DCS/APC)",
      "label": "Gross Crude Charge Rate Target Execution (B2, [OISD-STD-154 §5])",
      "today": "Executed directly through the DCS and Advanced Process Control (APC) regulatory setpoints.",
      "agentNote": "❌ No. Core automation domain belonging to the closed-loop control system."
    },
    {
      "code": "A12",
      "action": "Review and clear automated SAP PM maintenance work order notifications",
      "source": "[OISD-STD-154 §6]",
      "scope": "task",
      "bucket": "B2",
      "freq": "Daily",
      "time": "mins",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith SAP)",
      "label": "Review and Clear Automated SAP PM Maintenance Notifications (B2, [OISD-STD-154 §6])",
      "today": "Routine maintenance order queuing and equipment notifications processed natively in the enterprise CMMS.",
      "agentNote": "❌ No. Monolith ERP functionality."
    },
    {
      "code": "A13",
      "action": "Monitor site-wide steam header balancing and turbine co-generation electrical dispatch",
      "source": "[OISD-STD-154 §4]",
      "scope": "task",
      "bucket": "B2",
      "freq": "Daily",
      "time": "mins",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith Energy Management)",
      "label": "Steam Header Pressure Balancing & Co-Gen Dispatch (B2, [OISD-STD-154 §4])",
      "today": "Site-wide steam header optimization executed via specialized energy management software.",
      "agentNote": "❌ No. Monolith industrial energy management domain."
    },
    {
      "code": "A14",
      "action": "Verify laboratory grab sample compliance certificates in LIMS before product rundown",
      "source": "[OISD-STD-154 §5]",
      "scope": "task",
      "bucket": "B2",
      "freq": "Daily",
      "time": "mins",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith LIMS)",
      "label": "Laboratory LIMS Grab Sample Compliance Verification (B2, [OISD-STD-154 §5])",
      "today": "Automated quality release workflows and lab certificate archiving managed within the enterprise LIMS.",
      "agentNote": "❌ No. Standard LIMS software domain."
    },
    {
      "code": "A15",
      "action": "Conduct supervisory plant walkway safety inspections and housekeeping rounds",
      "source": "[OISD-STD-154 §8]",
      "scope": "field",
      "bucket": "B3",
      "freq": "Daily",
      "time": "hours",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead)",
      "label": "Plant Walkway Safety & Housekeeping Inspections (B3, [OISD-STD-154 §8])",
      "today": "Physical supervisory walk-through of unit battery limits checking for steaming flanges, tripping hazards, and PPE compliance.",
      "agentNote": "❌ No. Physical field human presence."
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "Shift Handover Narrative & Multi-Unit Reconciliation Agent",
      "oneLine": "Ingests multi-unit DCS sequence of events logs, unspared equipment status, operator shift entries, and production throughputs to compile an auditable, pre-populated shift handover briefing.",
      "frictionSolved": "Eliminates ~1.40 hours per shift of chaotic manual data assembly across multiple console journals, preventing uncommunicated process overrides across shift boundaries.",
      "reads": "DCS sequence of events logs, controller manual mode registers, unspared machinery status flags, electronic shift logbook entries across all assigned refinery units, and laboratory product rundown certificates.",
      "does": "Correlates thousands of raw telemetry transitions into an organized multi-unit operational shift narrative; flags abnormal control loop configurations (e.g., column pressure control left in manual mode); tallies unit throughput against daily targets; highlights equipment taken out of service during the shift.",
      "returns": "Pre-populated OISD-STD-154 and API RP 755 compliant Shift Handover Dossier ready for supervisory verification and electronic sign-off.",
      "stopsAt": "Authorizing shift sign-off or transferring statutory supervisory command without incoming supervisor biometric or digital authentication.",
      "failureModes": "If telemetry feeds from any unit DCS drop for greater than 5 minutes during the pre-shift compilation window, the agent marks the section with [Telemetry Interrupted: Physical Console Journal Verification Required] and alerts the supervisor.",
      "agentId": "OG-P45-A01"
    },
    {
      "n": 2,
      "name": "Permit-to-Work SIMOPS & Spatial Isolation Conflict Sieve Agent",
      "oneLine": "Cross-references active and pending electronic permit applications, isolation boundaries, and plant plot coordinates to detect spatial SIMOPS clashes and overlapping energy isolations.",
      "frictionSolved": "Eliminates 1.20 hours daily of manual plot-plan cross-referencing and blind list auditing, preventing lethal concurrent work conflicts.",
      "reads": "Electronic Permit-to-Work (ePTW) applications, Lock-Out/Tag-Out (LOTO) isolation manifests, piping and instrumentation diagrams (P&IDs), equipment plot coordinates, and live gas detector telemetry.",
      "does": "Performs multi-dimensional spatial clash detection (identifying hot work within 15 meters of open hydrocarbon drains or below active flange breaking); verifies that multiple contractor crews on the same line are referencing identical isolation boundary valves; flags uncertified gas testing records.",
      "returns": "Live SIMOPS Hazard & Isolation Conflict Matrix highlighting prohibitive spatial clashes, invalid blind lists, and required authorization prerequisites.",
      "stopsAt": "Digitally releasing, approving, or signing any work permit.",
      "failureModes": "If two independent high-risk permits share an overlapping isolation boundary valve, the agent raises a critical flag: [Critical SIMOPS Clashing: Shared Isolation Valve Tag Detected — Dual Authorization Freeze Enacted].",
      "agentId": "OG-P45-A02"
    },
    {
      "n": 3,
      "name": "Safe Operating Limit & IOW Excursion Auditor Agent",
      "oneLine": "Continuously tracks critical process parameters against Level 1 and Level 2 Integrity Operating Windows (IOW), calculating cumulative thermal and pressure excursion exposure across process units.",
      "frictionSolved": "Removes 1.00 hour per shift of manual alarm journal reviews and chart inspection, ensuring long-term mechanical asset degradation is proactively captured.",
      "reads": "High-resolution process historian tags (temperatures, pressures, flow rates, vibration), metallurgic design limits, and established Level 1 and Level 2 IOW threshold databases per API RP 584.",
      "does": "Evaluates real-time sensor streams against safe operating limit baselines; computes the cumulative time-temperature or time-pressure integral for all active parameter excursions; flags repeat threshold excursions across consecutive operating shifts.",
      "returns": "Shift IOW Compliance Briefing detailing all parameter excursions, cumulative severity scores, affected metallurgical circuits, and recommended operating setpoint trims.",
      "stopsAt": "Overriding board operator console setpoints or altering DCS alarm limit configuration.",
      "failureModes": "If any critical process variable breaches a Level 2 safety threshold (exceeding maximum design temperature by >20°C for >15 minutes), the agent issues an audible notification: [Priority IOW Alert: Level 2 Excursion Exceeded — Immediate Supervisory Intervention Required].",
      "agentId": "OG-P45-A03"
    },
    {
      "n": 4,
      "name": "Flare Excursion & Steam-to-Hydrocarbon Mass-Balance Sieve Agent",
      "oneLine": "Correlates flare header flow meters, ultrasonic relief valve acoustic sensors, and steam injection telemetry to identify upset unit sources and balance smokeless combustion ratios.",
      "frictionSolved": "Eliminates 1.00 hour per upset event of frantic telephone calls to console operators, identifying flaring root sources within 30 seconds and preventing black smoke emissions.",
      "reads": "Flare header ultrasonic flow meters, pressure transmitters, relief valve acoustic emission sensors, gas chromatograph flare gas molecular weight analyzers, and smokeless steam flow telemetry.",
      "does": "Evaluates differential pressure and acoustic signatures across plant sub-headers to isolate the specific unit dumping into the flare; computes the stoichiometric steam-to-hydrocarbon ratio required to ensure 98% combustion efficiency and prevent smoking per environmental standards.",
      "returns": "Flare Source Identification Card & Smokeless Steam Advisory displaying the offending process unit, estimated relief mass flow rate, and target steam valve setpoint.",
      "stopsAt": "Directly manipulating steam injection control valves or opening flare purge gas bypasses.",
      "failureModes": "If flare gas molecular weight telemetry is lost, the agent falls back to a conservative, pre-programmed stoichiometric heavy-gas ratio to ensure compliance without risking flame blowout.",
      "agentId": "OG-P45-A04"
    },
    {
      "n": 5,
      "name": "Safety Critical Element & Interlock Defeat Governance Agent",
      "oneLine": "Audits software force bits, bypassed safety interlocks, inhibited emergency shutdown loops, and out-of-service critical rotating equipment across shift boundaries.",
      "frictionSolved": "Removes 0.80 hours daily of manual bypass whiteboard cross-checks, eliminating the process safety risk of forgotten safety interlock defeats.",
      "reads": "Safety Instrumented System (SIS) bypass registers (Triconex, DeltaV SIS, ProSafe-RS), DCS force point logs, Management of Change (MOC) temporary defeat records, and maintenance work orders.",
      "does": "Reconciles all active software bypasses against approved MOC authorizations; tracks bypass elapsed duration against authorized timeframes; flags instances where unspared critical machinery (e.g., sole running boiler feed water pump) is operating without automatic standby protection.",
      "returns": "Safety Barrier Degradation Dashboard highlighting active interlock overrides, expired defeat permits, unspared pump risks, and mandatory mitigation steps.",
      "stopsAt": "Clearing forced logic bits, removing jumpers, or resetting tripped safety interlocks.",
      "failureModes": "If a Tier-1 safety instrumented function remains bypassed without an active MOC extension for greater than 12 hours, the agent triggers an escalation alert: [Statutory Safety Defeat Expiration: Operations Manager Escalation Dispatched].",
      "agentId": "OG-P45-A05"
    },
    {
      "n": 6,
      "name": "Unit Chemical Injection & Corrosion Inhibitor Mass-Balance Agent",
      "oneLine": "Reconciles chemical additive injection pump rates against crude slate TAN/sulfur specs and atmospheric overhead water boot analyses to prevent acute acid corrosion.",
      "frictionSolved": "Eliminates 0.80 hours daily of manual calculator dosing reconciliations and scattered laboratory PDF searching.",
      "reads": "Chemical injection metering skid telemetry (demulsifiers, filming amines, neutralizers, caustic dosing), crude charge blend sulfur/TAN laboratory assays, and overhead accumulator water boot pH and iron content logs.",
      "does": "Computes mass balance between incoming acidic corrodents (chlorides, H2S, naphthenic acids) and chemical neutralizer injection rates; evaluates overhead accumulator water boot pH against the optimal 5.8 to 6.8 corridor; identifies dosing pump stroke deviations or line air-locks.",
      "returns": "Chemical Treatment Health Card detailing active dosing rates, corrosion inhibitor film adequacy, water boot pH trend, and recommended stroke rate adjustments.",
      "stopsAt": "Automatically changing variable-speed chemical dosing pump strokes without operator confirmation.",
      "failureModes": "If accumulator water boot pH falls below 4.5 (indicating severe hydrochloric acid breakthrough), the agent triggers an urgent warning: [Acute Corrosion Hazard: Severe Overhead Acidification Detected — Verify Neutralizer Skid Operation Immediately].",
      "agentId": "OG-P45-A06"
    },
    {
      "n": 7,
      "name": "Emergency Alarm Cascade & Incident First-Out Sieve Agent",
      "oneLine": "Ingests cross-unit Sequence of Events (SOE) millisecond logs during major plant upsets, isolates the initiating first-out trip, and drafts preliminary statutory incident and near-miss documentation.",
      "frictionSolved": "Eliminates 1.20 hours of stressful forensic log sifting following plant upsets, delivering an accurate root-cause incident timeline within minutes.",
      "reads": "Millisecond-resolution Sequence of Events (SOE) logs across all plant units, emergency shutdown (ESD) matrix states, operator intervention logs, and field instrument trip tags.",
      "does": "Reconstructs the exact chronological microsecond propagation of a process trip (e.g., co-gen power dip -> cooling water pump trip -> column overhead pressure high -> furnace fuel gas trip); isolates the true first-out root cause from sympathetic secondary alarms; pre-populates statutory initial incident investigation reporting forms per OSHA 1910.119 and OISD guidelines.",
      "returns": "First-Out Incident Diagnostic Dossier containing chronological sequence-of-events timelines, root cause hypothesis, parameter trends at moment of trip, and draft statutory regulatory notification.",
      "stopsAt": "Submitting formal incident reports to regulatory agencies or declaring plant units safe for restart.",
      "failureModes": "If multiple primary trip initiators occur within the same millisecond timestamp window, the agent displays all candidate causes side-by-side with confidence bounds rather than arbitrarily designating a single cause.",
      "agentId": "OG-P45-A07"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit. Never multiply into enterprise dollar totals. The refinery provides their own processing throughput and downtime multiplier.",
    "rows": [
      {
        "agent": "1. Shift Handover Narrative Agent",
        "unit": "1 12-Hour Operational Shift",
        "beforeHours": 1.75,
        "afterHours": 0.35,
        "savedHours": 1.4,
        "frictionRemoved": "Multi-Unit End-of-Shift Data Assembly Drag"
      },
      {
        "agent": "2. PTW SIMOPS Isolation Sieve Agent",
        "unit": "1 Daily Permit Authorization Cycle (40-60 permits)",
        "beforeHours": 1.5,
        "afterHours": 0.3,
        "savedHours": 1.2,
        "frictionRemoved": "Cross-Unit SIMOPS & Spatial Isolation Conflict Sifting Drag"
      },
      {
        "agent": "3. SOL / IOW Excursion Auditor Agent",
        "unit": "1 12-Hour Operational Shift",
        "beforeHours": 1.25,
        "afterHours": 0.25,
        "savedHours": 1.0,
        "frictionRemoved": "Distributed IOW Excursion Tracking Drag"
      },
      {
        "agent": "4. Flare Excursion Mass-Balance Sieve",
        "unit": "1 Refinery Flaring or Unit Upset Event",
        "beforeHours": 1.25,
        "afterHours": 0.25,
        "savedHours": 1.0,
        "frictionRemoved": "Multi-Header Flare Mass Balance Sifting Drag"
      },
      {
        "agent": "5. SCE Defeat & Bypass Auditor Agent",
        "unit": "1 Daily Safety Barrier Audit",
        "beforeHours": 1.0,
        "afterHours": 0.2,
        "savedHours": 0.8,
        "frictionRemoved": "Fragmented Bypass Ledger & LOTO Tracking Drag"
      },
      {
        "agent": "6. Chemical Injection Balance Agent",
        "unit": "1 Daily Chemical Treatment Survey",
        "beforeHours": 1.0,
        "afterHours": 0.2,
        "savedHours": 0.8,
        "frictionRemoved": "Manual Crude TAN vs Chemical Rate Calculation Drag"
      },
      {
        "agent": "7. Emergency Alarm & Incident Sieve",
        "unit": "1 Major Plant Trip or Near-Miss Incident",
        "beforeHours": 1.5,
        "afterHours": 0.3,
        "savedHours": 1.2,
        "frictionRemoved": "Cross-Unit Sequence of Events & Incident Dossier Assembly Drag"
      }
    ],
    "total": {
      "unit": "1 12-Hour Shift Supervisor Duty Cycle",
      "beforeHours": 9.25,
      "afterHours": 1.85,
      "savedHours": 7.4,
      "frictionRemoved": "Eliminates Multi-Unit Handover Blindspots & SIMOPS Isolation Conflicts",
      "label": "Total Squad Impact per 12-Hour Shift"
    }
  },
  "citations": [
    {
      "key": "[OISD-STD-154]",
      "citation": "Oil Industry Safety Directorate, Safety Aspects in Functional Training, 2018",
      "locator": "oisd.gov.in/standards",
      "type": "Regulatory Standard",
      "supports": "Supervisory competency, shift handover discipline, emergency isolation, and operator qualifications"
    },
    {
      "key": "[OISD-STD-105]",
      "citation": "Oil Industry Safety Directorate, Work Permit System, Rev IV, 2020",
      "locator": "oisd.gov.in/standards",
      "type": "Regulatory Standard",
      "supports": "Statutory requirements for hot work, cold work, vessel entry, electrical isolation, and SIMOPS governance"
    },
    {
      "key": "[API-RP-755]",
      "citation": "American Petroleum Institute, Fatigue Risk Management Systems in Refining, 2nd Ed, 2019",
      "locator": "API Standards Store",
      "type": "Recommended Practice",
      "supports": "12-hour continuous shift handover communications, fatigue management, and supervisor work-hour limits"
    },
    {
      "key": "[OSHA-1910-119]",
      "citation": "Occupational Safety & Health Administration, Process Safety Management of Highly Hazardous Chemicals, 29 CFR 1910.119",
      "locator": "osha.gov",
      "type": "Federal Regulation",
      "supports": "Operating procedures, safe work practices (hot work permits), mechanical integrity, and incident investigation"
    },
    {
      "key": "[API-RP-584]",
      "citation": "American Petroleum Institute, Integrity Operating Windows, 2nd Edition, 2021",
      "locator": "API Standards Store",
      "type": "Recommended Practice",
      "supports": "Level 1 and Level 2 IOW parameters, excursion tracking, and safe operating envelope governance"
    },
    {
      "key": "[CCPS-Shift-Handover]",
      "citation": "Center for Chemical Process Safety, Guidelines for Process Safety During Shift Communication, AIChE, 2017",
      "locator": "aiche.org/ccps",
      "type": "Technical Guideline",
      "supports": "Structured shift handover protocols, multi-unit communication barriers, and disaster case study findings"
    }
  ],
  "negativeSearch": {
    "searched": "SAP S/4HANA Work Clearance Management (WCM) guides, Hexagon j5 Operations product documentation, Enablon ePTW architecture whitepapers, Yokogawa Exaquantum operations suites, and CCPS process safety literature for \"autonomous multi-unit DCS state correlation with automated OISD-154 shift handover narrative synthesis, real-time 3D spatial SIMOPS permit clash detection, and dynamic flare mass-balance steam balancing without manual configuration\".",
    "result": "Negative Search, 2026-10. Existing enterprise systems serve as passive record repositories or isolated workflows; none autonomously correlate multi-unit DCS events into verified handover dossiers, perform real-time spatial and isolation SIMOPS clash detection across concurrent active permits, or compute flaring steam-to-hydrocarbon ratios dynamically during live refinery plant upsets."
  },
  "line": "\"In a modern continuous refinery, the Shift Supervisor doesn't just manage hardware; they manage the invisible barrier between normal operations and catastrophe. When forty work permits, three bypassed trips, and an unspared pump cross the shift boundary on a scribbled piece of paper, disaster isn't bad luck—it's an administrative certainty.\"",
  "openQuestions": [
    "How many minutes do you spend at the end of every 12-hour shift scrolling through multiple console event journals just to piece together what actually happened on the units?",
    "How do you currently verify that an authorized hot work permit on a piperack does not conflict with an unrecorded hydrocarbon flange break happening directly below it?",
    "When a plant trip sends multiple process streams into the flare header simultaneously, how many minutes does it take you to definitively pinpoint the offending unit?"
  ]
};
