/* GENERATED FILE, DO NOT EDIT BY HAND.
 * Source:     persona_research/persona_research_output/*.md
 * Regenerate: python3 scripts/extract_persona_research.py
 */
window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};
window.PERSONA_DETAIL["P37"] = {
  "id": "P37",
  "title": "SCADA Engineer",
  "aliases": [
    "Pipeline SCADA Engineer",
    "Pipeline Automation Engineer",
    "Control Systems Engineer (Midstream)",
    "Telemetry & SCADA Specialist"
  ],
  "segment": "Midstream — Transmission & network control",
  "segmentLong": "Midstream — Transmission & Network Control",
  "setting": "Pipeline Control Center & OT Systems Engineering Lab: High-security server rooms, OT control networks, staging test racks, and remote field telemetry sites",
  "tier": "Extended",
  "core20": false,
  "governingStandards": "API RP 1167 / API Std 1164 / ISA-18.2",
  "agentFocus": "SCADA Alarm Rationalization & Nuisance Sieve",
  "sourceFile": "P37_SCADA_Engineer.md",
  "person": "Aisha Bello",
  "avatar": "avatars/P37_persona.jpg",
  "thumb": "avatars/thumbs/P37_thumb.jpg",
  "initials": "SE",
  "domains": [
    "midstream"
  ],
  "primaryDomain": "midstream",
  "crossCutting": false,
  "groups": {
    "midstream": "Pipelines & Network"
  },
  "valueSplit": {
    "midstream": 1.0
  },
  "headline": "The SCADA Engineer designs, maintains, and secures the continent-spanning telemetry and control fabric that connects thousands of remote valve stations, compressor sites, and pump manifolds to the central pipeline control room. While enterprise SCADA platforms (Schneider OASyS, AVEVA Enterprise SCADA, Honeywell Experion SCADA, Emerson OpenEnterprise) poll millions of field telemetry points and log events, SCADA engineers drown in operational friction around alarm flooding, manual point-to-point commissioning verification, telemetry dropouts, and OT cybersecurity compliance auditing. Chattering and fleeting alarms desensitize pipeline controllers and violate API RP 1167 / ISA-18.2 standards; newly installed RTU I/O points require hours of tedious radio checkouts; and telemetry outages force blind operation across remote pipeline corridors. An agentic squad that autonomously rationalizes nuisance alarms, validates RTU database configurations, pinpoints telemetry degradation causes, and audits IEC 62443 / API Std 1164 cybersecurity postures saves 18.10 hours per weekly maintenance cycle, ending operational drag and protecting critical energy transport infrastructure.",
  "confidence": {
    "Persona": "SCADA Engineer (P37)",
    "Research Status": "Grounded in statutory pipeline control standards, international alarm management lifecycles, and OT cybersecurity regulations",
    "Competency Standard Used": "API RP 1167 (Pipeline SCADA Alarm Management), API Std 1164 (Pipeline Control Systems Security), ANSI/ISA-18.2 / IEC 62682 (Alarm Systems Management), API RP 1165 / ISO 11064 (SCADA Displays), and IEC 62443 (Security for Industrial Automation and Control Systems)",
    "Standard Coverage": "15 of 15 telemetry, alarm lifecycle, HMI design, MOC, and cybersecurity competencies mapped to operational actions",
    "Actions Cited": "15 actions trace directly to API RP 1167, API Std 1164, ISA-18.2, IEC 62443, IEEE 1815 (DNP3), and 49 CFR Part 192/195 CRM / PNGRB T4S mandates",
    "Pain Claims Cited": "10 of 10 pain claims corroborated by pipeline operator incident investigations, regulatory control room inspection audits, and ISA alarm management benchmarks",
    "Timings Sourced": "Alarm rationalization workshops, point-to-point I/O checkouts, radio/VSAT telemetry troubleshooting, and firewall rule auditing durations verified via pipeline automation engineering benchmarks",
    "Gap Claims Cited": "Enterprise SCADA platforms and alarm historians record raw logs; none autonomously rationalize nuisance alarms, correlate intermittent radio packet loss with environmental fading, or auto-generate point-to-point commissioning MOC proof packages",
    "Known Gaps": "Legacy RTU serial protocols (Modbus RTU, DF1) lack standardized cryptographic integrity checks compared to modern DNP3 Secure Authentication (SAv5)"
  },
  "role": {
    "oneLine": "Designs, configures, maintains, and hardens the supervisory control and data acquisition (SCADA) host servers, wide-area telemetry networks, remote terminal units (RTUs), alarm management systems, and operator HMI consoles across midstream pipeline networks.",
    "whyItMatters": "Telemetry failures blind pipeline controllers to line pressure drops; poorly rationalized alarm cascades cause cognitive overload during critical upsets; and insecure SCADA networks expose national critical energy infrastructure to ransomware and cyber-physical sabotage.",
    "notOwned": [
      {
        "task": "Real-Time 24/7 Hydraulic Dispatching & Remote Mainline Valve Operations",
        "owner": "Pipeline Controller (P14)"
      },
      {
        "task": "Physical Wiring, Conduit Pulling & Transmitter Calibration at Remote Stations",
        "owner": "Instrument Technician (P32) / Field Electrician"
      },
      {
        "task": "Hydraulic Transient Simulation & Dynamic Water Hammer Surge Analysis",
        "owner": "Flow Assurance Engineer (P13) / Hydraulic Modeler"
      },
      {
        "task": "Pipeline Physical Excavation, Metal Loss Assessment & Smart Pigging",
        "owner": "Pipeline Integrity Engineer (P27)"
      },
      {
        "task": "Enterprise IT ERP Corporate Network Administration & Accounting Systems",
        "owner": "Corporate IT Infrastructure Team"
      }
    ],
    "variants": [
      {
        "name": "Pipeline Telemetry & Communications Engineer",
        "detail": "Focuses on long-distance wide-area SCADA communications infrastructure—microwave radio towers, licensed UHF/VHF, VSAT satellite links, cellular APNs, and serial-to-IP terminal servers across remote rights-of-way."
      },
      {
        "name": "Control Room Systems & HMI/Alarm Engineer",
        "detail": "Specializes in API RP 1165 console graphics, situational awareness display hierarchy, API RP 1167 / ISA-18.2 alarm rationalization, and master alarm database synchronization."
      },
      {
        "name": "Pipeline OT Cybersecurity Engineer",
        "detail": "Focuses on IEC 62443 / API Std 1164 industrial control system hardening, demilitarized zone (DMZ) firewalls, RTU firmware validation, and unidirectional security gateways (data diodes)."
      }
    ],
    "titleCheck": "The industry title is SCADA Engineer, Pipeline Automation Engineer, or Control Systems Engineer (Midstream). Do not confuse this role with \"DCS Engineer\" (who configures distributed control systems in continuous refining or chemical processing units) or \"Enterprise IT Network Engineer\" (who manages corporate office LAN/WAN and cloud servers).",
    "whereTheWorkHappens": {
      "Work Setting": "Pipeline Control Center & OT Systems Engineering Lab: Primary base in engineering offices adjacent to the central control room, OT server rooms (PDC/datacenter racks), with periodic travel to remote pump/compressor station RTU shelters.",
      "What They Can Reach": "Multi-monitor engineering workstation with dual NICs (isolated corporate IT and control OT networks), SCADA staging sandbox virtual machines, RTU test benches, protocol analyzers (Wireshark), and serial test sets.",
      "Shift Pattern": "Standard business hours (Monday–Friday) with rotational on-call 24/7 tier-3 escalation support for pipeline control room emergencies, network outages, and planned cutovers.",
      "Where the Record Lives": "Enterprise SCADA tag databases, Master Alarm Databases (MADB), Management of Change (MOC) software, version-controlled PLC/RTU logic repositories, network switch configs, and OT asset management inventories."
    }
  },
  "standards": [
    {
      "key": "",
      "citation": "[API-RP-1167]: American Petroleum Institute, Recommended Practice for Pipeline SCADA Alarm Management, 2nd Edition."
    },
    {
      "key": "",
      "citation": "[API-STD-1164]: American Petroleum Institute, Standard for Pipeline Control Systems Security, 3rd Edition."
    },
    {
      "key": "",
      "citation": "[ISA-18-2]: International Society of Automation / IEC, ANSI/ISA-18.2-2016 / IEC 62682: Management of Alarm Systems for the Process Industries."
    },
    {
      "key": "",
      "citation": "[API-RP-1165]: American Petroleum Institute, Recommended Practice for Pipeline SCADA Displays, 2nd Edition (incorporating ISO 11064 ergonomic display principles)."
    },
    {
      "key": "",
      "citation": "[IEC-62443]: International Electrotechnical Commission, IEC 62443: Security for Industrial Automation and Control Systems (parts 2-1, 3-2, 3-3, 4-2)."
    },
    {
      "key": "",
      "citation": "[IEEE-1815-DNP3]: IEEE / DNP Users Group, IEEE Standard for Electric Power Systems Communications — Distributed Network Protocol (DNP3) (including DNP3 Secure Authentication SAv5)."
    },
    {
      "key": "",
      "citation": "[DOT-CRM-49CFR]: US Department of Transportation PHMSA, 49 CFR Part 192.631 and Part 195.446 Control Room Management (CRM); and international equivalents: PNGRB GSR 196(E) T4S Regulations, and OISD OISD-STD-138 / OISD-STD-163 (Inspection and Safety of SCADA & Telemetry Systems)."
    }
  ],
  "vendorGaps": [
    {
      "product": "Schneider Electric OASyS / AVEVA Enterprise SCADA",
      "module": "Core Telemetry & Alarm Engine",
      "solves": "Real-time telemetry polling (DNP3, Modbus), high-availability dual-server failover, historical data logging, and console display runtime.",
      "gap": "Logs millions of raw events but does not diagnose root causes. When polling timeouts spike or 50 alarms trip simultaneously during a pump trip, it displays red icons without isolating whether the root cause is microwave radio atmospheric fading, RTU serial buffer overflow, or transducer chatter."
    },
    {
      "product": "Honeywell Experion SCADA / Emerson OpenEnterprise",
      "module": "RTU Management & Point Database",
      "solves": "Centralized tag configuration, remote RTU firmware flashing, and graphic display editing.",
      "gap": "Point-to-point checkout requires manual pair-checking. Validating 500 newly wired I/O points between field RTUs and SCADA database still requires technicians calling over radio to force bits while engineers manually check every engineering unit and alarm limit."
    },
    {
      "product": "exida SILAlarm / Hexagon PAS PlantState Suite",
      "module": "Master Alarm Database (MADB) & Rationalization",
      "solves": "Repository for rationalized alarm setpoints, priority matrix documentation, and statistical alarm rate reporting (EEMUA 191 / ISA-18.2).",
      "gap": "Static audit repository disconnected from dynamic operational context. Identifies chattering tags in weekly reports after controllers have already suffered thousands of nuisance alarms; cannot dynamically synthesize suppressions or auto-draft compliant MOC change packages."
    },
    {
      "product": "Claroty xDome / Nozomi Networks Guardian",
      "module": "OT Network Security & Asset Intelligence",
      "solves": "Passive deep packet inspection (DPI) of industrial protocols, asset inventory tracking, and anomaly detection.",
      "gap": "Passive sensor that flags alerts without resolving engineering vulnerabilities. Flags outdated RTU firmware CVEs or unauthorized Modbus function codes, but leaves the manual burden of verifying firewall rule matrices, verifying cryptographic certificates, and drafting compliance evidence on the engineer."
    }
  ],
  "actions": [
    {
      "code": "A01",
      "action": "Audit SCADA sequence-of-events logs for chattering, fleeting, and stale alarms",
      "source": "[API-RP-1167 §5]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Daily",
      "time": "2.0 hrs",
      "friction": "volume",
      "agentRef": 1,
      "owner": "agent",
      "agentLabel": "Agent 1: SCADA Alarm Rationalization & Nuisance Sieve",
      "label": "SCADA Alarm SOE Log Audit & Rationalization (B1, [API-RP-1167 §5])",
      "today": "Engineer manually queries alarm event databases in spreadsheets to find chattering instruments (alarms cycling dozens of times an hour), calculating average alarm rates to satisfy regulatory benchmarks.",
      "failureMode": "Un-rationalized chattering alarms trigger alarm floods (>10 alarms in 10 minutes) during operational upsets, masking genuine pressure loss events and inducing controller cognitive overload.",
      "agentNote": "→ See §4 (Agent 1: SCADA Alarm Rationalization & Nuisance Sieve)."
    },
    {
      "code": "A02",
      "action": "Verify point-to-point I/O scaling and engineering units for newly commissioned RTUs",
      "source": "[API-RP-1167 §7]",
      "scope": "task",
      "bucket": "B1",
      "freq": "Event",
      "time": "4.0 hrs",
      "friction": "consistency",
      "agentRef": 2,
      "owner": "agent",
      "agentLabel": "Agent 2: RTU/PLC Point-to-Point Commissioning Sieve",
      "label": "RTU/PLC Point-to-Point Commissioning Verification (B1, [API-RP-1167 §7])",
      "today": "Engineer and field technician spend hours on radios during commissioning, forcing individual analog/digital inputs at terminal blocks to verify raw counts, engineering units, and alarm thresholds in the SCADA database.",
      "failureMode": "Transcription mistakes in tag address or zero/span multiplier cause critical pipeline suction pressure to display 50 psi off true value, risking overpressure damage or false shutdowns.",
      "agentNote": "→ See §4 (Agent 2: RTU/PLC Point-to-Point Commissioning Sieve)."
    },
    {
      "code": "A03",
      "action": "Diagnose remote telemetry polling latency, packet drops, and radio/VSAT link degradations",
      "source": "[IEEE-1815-DNP3]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Daily",
      "time": "1.5 hrs",
      "friction": "synthesis",
      "agentRef": 3,
      "owner": "agent",
      "agentLabel": "Agent 3: Telemetry Link Health & Polling Latency Sieve",
      "label": "Telemetry Link Health & Polling Latency Diagnostic (B1, [IEEE-1815-DNP3])",
      "today": "Engineer manually sifts through communication front-end processor (FEP) error logs when controllers report frozen data, checking cyclic redundancy check (CRC) errors and retry counters across radio base stations.",
      "failureMode": "Unnoticed gradual RF link degradation or carrier failover looping causes intermittent telemetry dropouts during emergency shutdown situations.",
      "agentNote": "→ See §4 (Agent 3: Telemetry Link Health & Polling Latency Sieve)."
    },
    {
      "code": "A04",
      "action": "Audit OT firewall rules, access control lists, and RTU firmware CVEs against cybersecurity benchmarks",
      "source": "[API-STD-1164 §6]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Monthly",
      "time": "4.0 hrs",
      "friction": "traceability",
      "agentRef": 4,
      "owner": "agent",
      "agentLabel": "Agent 4: SCADA OT Cybersecurity & Hardening Sieve",
      "label": "SCADA OT Cybersecurity & Hardening Audit (B1, [API-STD-1164 §6])",
      "today": "Engineer manually checks switch access control lists, jump server RDP session logs, and RTU firmware versions against vendor CVE advisories to satisfy annual pipeline security audits.",
      "failureMode": "Unpatched remote code execution vulnerabilities in legacy RTUs or overly permissive firewall ports allow lateral network pivot from corporate IT into pipeline control OT.",
      "agentNote": "→ See §4 (Agent 4: SCADA OT Cybersecurity & Hardening Sieve)."
    },
    {
      "code": "A05",
      "action": "Audit SCADA console HMI graphics and alarm displays against situational awareness standards",
      "source": "[API-RP-1165 §4]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Periodic",
      "time": "2.5 hrs",
      "friction": "consistency",
      "agentRef": 5,
      "owner": "agent",
      "agentLabel": "Agent 5: API RP 1165 HMI Graphic Hierarchy Auditor",
      "label": "SCADA Console HMI Graphics Audit (B1, [API-RP-1165 §4])",
      "today": "Engineer visually reviews hundreds of graphic screens for color standard compliance, orphaned tags, and display density following system upgrades.",
      "failureMode": "Non-standard bright background colors or conflicting alarm priority palettes obscure high-criticality hydraulic surge alarms during nighttime shifts.",
      "agentNote": "→ See §4 (Agent 5: API RP 1165 HMI Graphic Hierarchy Auditor)."
    },
    {
      "code": "A06",
      "action": "Reconcile live SCADA tag alarm setpoints and deadbands against the Master Alarm Database (MADB)",
      "source": "[ISA-18-2 §8]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Weekly",
      "time": "2.0 hrs",
      "friction": "integrity",
      "agentRef": 6,
      "owner": "agent",
      "agentLabel": "Agent 6: SCADA Tag Parameter MOC Drift Sieve",
      "label": "SCADA Tag Setpoint MOC Drift Reconciliation (B1, [ISA-18-2 §8])",
      "today": "Engineer periodically cross-references running SCADA tag dictionaries against the approved Master Alarm Database (MADB) to verify unauthorized alarm limit adjustments.",
      "failureMode": "Temporary operator alarm limit overrides left undocumented after an equipment turnaround disable safety interlocks, leaving the pipeline unprotected against high pressure.",
      "agentNote": "→ See §4 (Agent 6: SCADA Tag Parameter MOC Drift Sieve)."
    },
    {
      "code": "A07",
      "action": "Audit remote EFM flow computer telemetry logs, audit trails, and clock sync against SCADA volume totals",
      "source": "[DOT-CRM-49CFR]",
      "scope": "estate",
      "bucket": "B1",
      "freq": "Weekly",
      "time": "2.5 hrs",
      "friction": "calculation",
      "agentRef": 7,
      "owner": "agent",
      "agentLabel": "Agent 7: Flow Computer Telemetry & EFM Audit Sieve",
      "label": "Flow Computer Telemetry & EFM Audit Reconciliation (B1, [DOT-CRM-49CFR])",
      "today": "Engineer manually verifies that hourly electronic flow measurement (EFM) archive logs, gas chromatograph heating value registers, and flow computer internal clocks match SCADA host records.",
      "failureMode": "Clock drift between remote custody transfer flow computers and SCADA NTP servers corrupts hourly mass balances and triggers false pipeline leak alarms in CPM models.",
      "agentNote": "→ See §4 (Agent 7: Flow Computer Telemetry & EFM Audit Sieve)."
    },
    {
      "code": "A08",
      "action": "Execute high-availability SCADA host server pair failover and database synchronization",
      "source": "[API-STD-1164 §5]",
      "scope": "estate",
      "bucket": "B2",
      "freq": "Periodic",
      "time": "0.5 hrs",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith SCADA Redundancy Engine)",
      "label": "SCADA Server Pair Failover & Sync (B2, [API-STD-1164 §5])",
      "today": "High-availability dual-server heartbeat monitors and database replication managers handle live primary-to-backup server cutover automatically.",
      "agentNote": "❌ No. Core SCADA platform infrastructure automation."
    },
    {
      "code": "A09",
      "action": "Poll remote RTU telemetry channels via cyclic DNP3 and Modbus scanning protocols",
      "source": "[IEEE-1815-DNP3]",
      "scope": "estate",
      "bucket": "B2",
      "freq": "Daily",
      "time": "0.2 hrs",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith Front-End Processor)",
      "label": "Telemetry Channel Cyclic Polling (B2, [IEEE-1815-DNP3])",
      "today": "SCADA Front-End Processors (FEP) continuously execute DNP3 Class 0/1/2/3 and Modbus register scan cycles across communication channels.",
      "agentNote": "❌ No. Deterministic real-time polling protocol engine."
    },
    {
      "code": "A10",
      "action": "Archive raw 1-second telemetry time-series tags into high-speed enterprise historian",
      "source": "[API-RP-1167 §6]",
      "scope": "estate",
      "bucket": "B2",
      "freq": "Daily",
      "time": "0.1 hrs",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith Process Historian)",
      "label": "Raw Time-Series Telemetry Historization (B2, [API-RP-1167 §6])",
      "today": "Dedicated process historian servers stream and compress raw telemetry tags into circular disk archives.",
      "agentNote": "❌ No. Enterprise time-series storage monolith."
    },
    {
      "code": "A11",
      "action": "Execute automated PLC ladder logic and interlock safety shutdown trips at remote stations",
      "source": "[IEC-62443 §3]",
      "scope": "task",
      "bucket": "B2",
      "freq": "Event",
      "time": "0.1 hrs",
      "friction": "execution",
      "agentRef": null,
      "owner": "monolith",
      "agentLabel": "❌ (Monolith Station PLC Logic Solver)",
      "label": "Remote Station PLC Safety Interlock Logic (B2, [IEC-62443 §3])",
      "today": "Deterministic PLC ladder logic and Safety Instrumented Systems (SIS) execute hard-wired station emergency trip routines.",
      "agentNote": "❌ No. Certified safety logic solver."
    },
    {
      "code": "A12",
      "action": "Replace physical telemetry hardware, antennas, and serial modems on remote communication towers",
      "source": "[OISD-STD-138]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Event",
      "time": "6.0 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Field Telemetry Crew)",
      "label": "Physical Telemetry Tower & Antenna Maintenance (B3, [OISD-STD-138])",
      "today": "Field telecommunications technicians climb microwave masts, align Yagi antennas, and replace solar charge controllers.",
      "agentNote": "❌ No. Physical field rigging trade."
    },
    {
      "code": "A13",
      "action": "Lead statutory alarm rationalization and management of change (MOC) review committee",
      "source": "[API-RP-1167 §4]",
      "scope": "estate",
      "bucket": "B3",
      "freq": "Periodic",
      "time": "3.0 hrs",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Lead SCADA Committee)",
      "label": "Statutory Alarm Rationalization Committee Leadership (B3, [API-RP-1167 §4])",
      "today": "Interdisciplinary engineering committee reviews contested alarm priorities and approves baseline alarm changes.",
      "agentNote": "❌ No. Human governance authority."
    },
    {
      "code": "A14",
      "action": "Coordinate emergency response triage with pipeline controllers during catastrophic telemetry blackout",
      "source": "[DOT-CRM-49CFR]",
      "scope": "estate",
      "bucket": "B3",
      "freq": "Event",
      "time": "2.0 hrs",
      "friction": "judgment",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Incident Command)",
      "label": "Emergency Telemetry Blackout Incident Coordination (B3, [DOT-CRM-49CFR])",
      "today": "Senior SCADA engineer coordinates with chief pipeline controller and field operations to safely manage pipelines during widespread communications failure.",
      "agentNote": "❌ No. High-stakes operational emergency command."
    },
    {
      "code": "A15",
      "action": "Conduct physical security and perimeter access audit at unmanned RTU block valve shelters",
      "source": "[API-STD-1164 §7]",
      "scope": "task",
      "bucket": "B3",
      "freq": "Periodic",
      "time": "4.0 hrs",
      "friction": "physical",
      "agentRef": null,
      "owner": "human",
      "agentLabel": "❌ (Human Field Security Specialist)",
      "label": "Remote Unmanned Shelter Physical Security Audit (B3, [API-STD-1164 §7])",
      "today": "Field technicians inspect physical door interlocks, tamper switches, and security cameras at unmanned pipeline mainline valve sites.",
      "agentNote": "❌ No. Physical site inspection and physical lock auditing."
    }
  ],
  "agents": [
    {
      "n": 1,
      "name": "SCADA Alarm Rationalization & Nuisance Sieve",
      "oneLine": "Ingests SCADA sequence-of-events logs to isolate chattering, fleeting, and stale alarms and generates parameter suppression recommendations aligned with API RP 1167 / ISA-18.2.",
      "frictionSolved": "Eliminates 3.00 hours per weekly audit of manual log sorting, curing chronic alarm flooding and keeping control room alarm rates within the statutory 1-to-2 alarms per 10-minute target.",
      "reads": "SCADA historical sequence-of-events (SOE) logs, operator alarm journal records, Master Alarm Database (MADB) tag parameters, and analog deadband tables.",
      "does": "Evaluates alarm activation frequency, duration, and transition counts; flags chattering tags (>3 transitions in 1 minute), fleeting alarms (<3 seconds duration), and stale alarms standing >24 hours; computes rolling 10-minute alarm flood rates; computes recommended on/off delay timers and deadband expansion margins to eliminate nuisance chatter.",
      "returns": "Prioritized Alarm Rationalization Dossier (tag_id, alarm_type, event_count_24h, chatter_ratio_pct, recommended_deadband_adjustment, suggested_on_delay_sec, isa_priority_classification).",
      "stopsAt": "Applying automated setpoint changes or suppressing safety-critical pipeline high-pressure shutdown alarms without engineering sign-off.",
      "failureModes": "If an instrument exhibiting chatter is configured as a Safety Critical Element (SCE) or MAOP protection sensor, the agent forbids automatic suppression and generates an urgent maintenance advisory: [Critical Safety Sensor Chatter Detected — Immediate Field Transmitter Inspection Required].",
      "agentId": "OG-P37-A01"
    },
    {
      "n": 2,
      "name": "RTU/PLC Point-to-Point Commissioning Sieve",
      "oneLine": "Reconciles field RTU/PLC memory register maps with the central SCADA host point database to validate raw counts, engineering units, and alarm thresholds in seconds.",
      "frictionSolved": "Eliminates 3.40 hours per RTU commissioning checkout of manual radio verification, catching scaling errors and inverted discrete states before cutover.",
      "reads": "PLC/RTU exported address configuration files (Modbus register maps, DNP3 point tables, IEC 60870-5-104 I/O lists), instrumentation loop sheets, and SCADA host point configuration tables.",
      "does": "Cross-references field memory offsets against SCADA database addresses; verifies raw count scaling math (e.g., 4-20mA represented as 0-4095 or 0-32767 counts converted to 0-1440 psig); checks engineering unit string consistency; verifies discrete alarm state polarity (normally open vs normally closed); generates automated loop check simulation scripts.",
      "returns": "RTU Point-to-Point Commissioning Audit Report (rtu_id, point_index, signal_tag, field_address, scada_address, scaling_match_status, polarity_status, discrepancy_flag).",
      "stopsAt": "Overwriting live SCADA database schemas or forcing live control output bits on pressurized pipeline valves.",
      "failureModes": "If an analog scaling discrepancy could mask a high-pressure overpressure scenario by under-reporting line pressure, the agent flags an immediate commissioning block: [Critical Scaling Mismatch Detected — Point Commissioning Blocked].",
      "agentId": "OG-P37-A02"
    },
    {
      "n": 3,
      "name": "Telemetry Link Health & Polling Latency Sieve",
      "oneLine": "Correlates Front-End Processor polling statistics across microwave, radio, cellular, and VSAT channels to diagnose intermittent communication packet drops and link degradations.",
      "frictionSolved": "Eliminates 2.20 hours per corridor review of manual protocol log parsing, identifying fading telemetry links before complete site dropouts blind controllers.",
      "reads": "SCADA Front-End Processor (FEP) communication logs, DNP3/Modbus polling retry counters, round-trip latency timers, serial-to-IP terminal server error records, and remote radio receiver signal strength (RSSI) telemetry.",
      "does": "Tracks polling success rates across multi-drop radio channels; computes packet error rates (PER) and cyclic redundancy check (CRC) failures; isolates link degradation patterns (atmospheric microwave fading vs hardware buffer exhaustion vs radio interference); monitors automatic primary-to-VSAT backup failovers.",
      "returns": "Telemetry Infrastructure Health Ledger (channel_id, rtu_id, polling_success_rate_pct, avg_latency_ms, crc_error_count, failing_carrier_type, root_cause_diagnostic).",
      "stopsAt": "Modifying radio base station transmission power or switching physical communication router gateways.",
      "failureModes": "If telemetry latency on a mainline block valve station exceeds maximum safety thresholds (>15 seconds), the agent issues an operational warning: [Excessive Polling Latency Warning — Telemetry Degraded on Critical Valve Station].",
      "agentId": "OG-P37-A03"
    },
    {
      "n": 4,
      "name": "SCADA OT Cybersecurity & Hardening Sieve",
      "oneLine": "Audits SCADA host server configurations, DMZ firewall access control lists, and RTU firmware versions against API Std 1164 and IEC 62443 cybersecurity benchmarks.",
      "frictionSolved": "Eliminates 3.40 hours per monthly audit cycle of manual firewall rule cross-referencing and CVE vulnerability matching across hundreds of remote controllers.",
      "reads": "OT network firewall access control lists (ACLs), network switch port security configurations, active SCADA user account registries, jump host RDP/SSH authentication logs, and RTU/PLC firmware build metadata.",
      "does": "Cross-references active open network ports against industrial protocol baselines (DNP3 port 20000, Modbus TCP port 502, NTP port 123); checks for unauthorized dual-homed machine connections bridging IT and OT zones per IEC 62443-3-2; matches field RTU firmware versions against national vulnerability databases (NVD) for unpatched CVEs; verifies DNP3 Secure Authentication key rotation intervals.",
      "returns": "API Std 1164 Pipeline OT Cybersecurity Compliance Scorecard (asset_id, zone_id, cve_vulnerabilities, non_compliant_acl_rules, unauthorized_account_flags, hardening_action_items).",
      "stopsAt": "Terminating live SCADA operator accounts or executing active firewall rule drops during pipeline operations.",
      "failureModes": "If an unencrypted remote administration protocol (e.g. Telnet, HTTP) is detected traversing the perimeter DMZ from an external IP, the agent issues an emergency security alert: [Critical OT Security Perimeter Violation — Unauthorized Protocol Detected in DMZ].",
      "agentId": "OG-P37-A04"
    },
    {
      "n": 5,
      "name": "API RP 1165 HMI Graphic Hierarchy Auditor",
      "oneLine": "Scans SCADA console screen definitions to detect non-standard color palettes, high-density screen clutter, and broken faceplate links against API RP 1165 and ISO 11064 standards.",
      "frictionSolved": "Eliminates 2.15 hours per HMI review of manual visual inspection, ensuring pipeline controllers receive clear, ergonomic situational awareness displays.",
      "reads": "SCADA graphic display export files (XAML, SVG, XML), color definition files, dynamic animation tag bindings, and graphic navigation hierarchy trees.",
      "does": "Evaluates screen background contrast and color usage against API RP 1165 guidelines (reserving saturated red/amber/yellow solely for abnormal alarm conditions); detects unmapped or orphaned tag variables; validates analog dynamic range bar indicators and high-high alarm tick marks; checks navigation links across Level 1 (pipeline overview) to Level 4 (station diagnostic) screens.",
      "returns": "HMI Ergonomic Compliance Audit Dossier (screen_id, display_level, color_palette_violations, orphaned_tags_count, visual_density_score, navigation_integrity_status).",
      "stopsAt": "Directly modifying runtime graphic display files on the active pipeline controller consoles.",
      "failureModes": "If a critical safety alarm dynamic symbol on a primary pipeline overview screen is configured without an audible or visual blink binding, the agent flags an immediate design flaw: [API RP 1165 Ergonomic Defect — Safety Alarm Dynamic Binding Missing on Overview Display].",
      "agentId": "OG-P37-A05"
    },
    {
      "n": 6,
      "name": "SCADA Tag Parameter MOC Drift Sieve",
      "oneLine": "Continuously reconciles live SCADA host point databases against the authorized Master Alarm Database to detect unauthorized alarm setpoint overrides and MOC drift.",
      "frictionSolved": "Eliminates 1.75 hours per weekly sync of manual parameter comparison, ensuring 100% traceability for statutory Management of Change compliance audits.",
      "reads": "Live SCADA host tag database exports, approved Master Alarm Database (MADB) baseline tables, and electronic Management of Change (MOC) work orders.",
      "does": "Compares operating alarm setpoints, deadbands, time delays, and alarm priority classifications between live SCADA and the approved MADB; identifies unauthorized changes made by console operators or maintenance staff; validates whether active parameter changes match an authorized, open MOC ticket number.",
      "returns": "SCADA Parameter Drift & MOC Audit Ledger (tag_name, parameter_type, live_value, baseline_madb_value, unauthorized_drift_flag, associated_moc_ticket_id).",
      "stopsAt": "Automatically reverting live operational parameters without confirmation from the pipeline SCADA administrator.",
      "failureModes": "If a high-pressure shutdown setpoint has been raised above the certified pipeline Maximum Allowable Operating Pressure (MAOP) without an approved engineering MOC, the agent triggers an immediate emergency notification: [Statutory MAOP Violation — Alarm Setpoint Exceeds Certified Engineering Limit].",
      "agentId": "OG-P37-A06"
    },
    {
      "n": 7,
      "name": "Flow Computer Telemetry & EFM Audit Sieve",
      "oneLine": "Reconciles remote electronic flow measurement (EFM) archive logs and clock drift against SCADA volume totals to eliminate custody billing mismatches.",
      "frictionSolved": "Eliminates 2.20 hours per audit cycle of manual meter archive extraction, preventing commercial billing disputes and false CPM leak alarms caused by timestamp skew.",
      "reads": "Remote flow computer EFM historical log records (API 21.1 / API 21.2), gas chromatograph component heating values, flow computer internal real-time clocks, and central SCADA volume accumulator registers.",
      "does": "Extracts hourly and daily flow transaction archives; computes volumetric differences between remote meter totals and central SCADA polling accumulators; detects clock synchronization drift between field RTU/flow computers and SCADA master NTP servers; audits configuration event logs for unrecorded orifice plate size changes.",
      "returns": "EFM Custody Telemetry Reconciliation Dossier (meter_station_id, scada_volume_total, efm_archive_volume, variance_bbls_or_mscf, clock_drift_seconds, configuration_event_flags).",
      "stopsAt": "Adjusting fiscal custody transfer settlement volumes or modifying orifice plate calculation constants.",
      "failureModes": "If clock drift between a custody transfer flow computer and the central SCADA system exceeds 60 seconds, the agent issues an audit warning: [Custody Clock Synchronization Skew Detected — EFM Reconciliation Required].",
      "agentId": "OG-P37-A07"
    }
  ],
  "valueModel": {
    "rule": "Quantify the unit. Never multiply into enterprise rupee totals. The operator provides their own pipeline-mileage multiplier.",
    "rows": [
      {
        "agent": "SCADA Alarm Rationalization & Nuisance Sieve",
        "unit": "1 Weekly Alarm System Audit (100k events)",
        "beforeHours": 3.5,
        "afterHours": 0.5,
        "savedHours": 3.0,
        "frictionRemoved": "SOE Log Filtering & Chattering Alarm Identification"
      },
      {
        "agent": "RTU/PLC Point-to-Point Commissioning Sieve",
        "unit": "1 RTU Commissioning I/O Checkout (150 points)",
        "beforeHours": 4.0,
        "afterHours": 0.6,
        "savedHours": 3.4,
        "frictionRemoved": "Manual Point-by-Point Forcing & Scaling Verification"
      },
      {
        "agent": "Telemetry Link Health & Polling Latency Sieve",
        "unit": "1 Corridor Telemetry Health Review (50 remote links)",
        "beforeHours": 2.5,
        "afterHours": 0.3,
        "savedHours": 2.2,
        "frictionRemoved": "Multi-Channel Polling Timeout & Packet Drop Triage"
      },
      {
        "agent": "SCADA OT Cybersecurity & Hardening Sieve",
        "unit": "1 Monthly API Std 1164 / IEC 62443 Security Audit",
        "beforeHours": 4.0,
        "afterHours": 0.6,
        "savedHours": 3.4,
        "frictionRemoved": "Firewall ACL Cross-Referencing & CVE Firmware Matching"
      },
      {
        "agent": "API RP 1165 HMI Graphic Hierarchy Auditor",
        "unit": "1 HMI Console Display Audit (20 schematic screens)",
        "beforeHours": 2.5,
        "afterHours": 0.35,
        "savedHours": 2.15,
        "frictionRemoved": "Color Palette, Tag Binding & Ergonomic Clutter Sifting"
      },
      {
        "agent": "SCADA Tag Parameter MOC Drift Sieve",
        "unit": "1 Weekly Master Alarm Database (MADB) Sync Run",
        "beforeHours": 2.0,
        "afterHours": 0.25,
        "savedHours": 1.75,
        "frictionRemoved": "Discrepancy Reconciliation Across SCADA Tags and MADB"
      },
      {
        "agent": "Flow Computer Telemetry & EFM Audit Sieve",
        "unit": "1 Weekly Custody Telemetry & Clock Audit (30 meter runs)",
        "beforeHours": 2.5,
        "afterHours": 0.3,
        "savedHours": 2.2,
        "frictionRemoved": "Flow Archive Extraction & Clock Drift Cross-Checking"
      }
    ],
    "total": {
      "unit": "Standard Weekly SCADA Maintenance & Audit Cycle",
      "beforeHours": 21.0,
      "afterHours": 2.9,
      "savedHours": 18.1,
      "frictionRemoved": "Eliminates alarm sifting, point validation drag, RF packet triage & audit overhead",
      "label": "Total SCADA Engineering Squad Impact"
    }
  },
  "citations": [
    {
      "key": "[API-RP-1167]",
      "citation": "American Petroleum Institute, Pipeline SCADA Alarm Management, 2nd Edition, 2016",
      "locator": "API Standards Store",
      "type": "Recommended Practice",
      "supports": "Alarm rationalization, chattering thresholds & flood metrics"
    },
    {
      "key": "[API-STD-1164]",
      "citation": "American Petroleum Institute, Pipeline Control Systems Security, 3rd Edition, 2021",
      "locator": "API Standards Store",
      "type": "Technical Standard",
      "supports": "Pipeline OT cybersecurity, DMZ zoning & access control"
    },
    {
      "key": "[ISA-18-2]",
      "citation": "ANSI/ISA, Management of Alarm Systems for the Process Industries, ANSI/ISA-18.2-2016 / IEC 62682",
      "locator": "isa.org",
      "type": "International Standard",
      "supports": "Master alarm database, lifecycle stages & suppression rules"
    },
    {
      "key": "[IEC-62443]",
      "citation": "International Electrotechnical Commission, Security for Industrial Automation and Control Systems, Parts 2-1, 3-2, 3-3, 4-2",
      "locator": "iec.ch",
      "type": "Technical Standard",
      "supports": "Industrial network segmentation, zone conduits & hardening"
    },
    {
      "key": "[API-RP-1165]",
      "citation": "American Petroleum Institute, Recommended Practice for Pipeline SCADA Displays, 2nd Edition, 2022",
      "locator": "API Standards Store",
      "type": "Recommended Practice",
      "supports": "HMI display hierarchy, color palettes & situational awareness"
    },
    {
      "key": "[IEEE-1815-DNP3]",
      "citation": "IEEE, Standard for Electric Power Systems Communications — Distributed Network Protocol (DNP3), 2012 / 2019",
      "locator": "IEEE Xplore",
      "type": "Technical Standard",
      "supports": "Telemetry polling, unsolicited responses & Secure Authentication"
    },
    {
      "key": "[DOT-CRM-49CFR]",
      "citation": "US PHMSA, Control Room Management Regulations, 49 CFR Part 192.631 & Part 195.446; and Indian PNGRB T4S Regulations",
      "locator": "ecfr.gov / pngrb.gov.in",
      "type": "Statutory Regulation",
      "supports": "Point-to-point checkout, alarm review & MOC compliance mandates"
    }
  ],
  "negativeSearch": {
    "searched": "Schneider Electric OASyS release notes, AVEVA Enterprise SCADA technical manuals, Honeywell Experion SCADA knowledge base, and IEEE/OnePetro literature for \"autonomous telemetry link degradation root-cause isolation cross-referencing RF fading with SCADA polling timeouts without human protocol capture analysis\".",
    "result": "Negative Search, 2026-09. Commercial SCADA front-end processors log communication failure counters and retry timeouts as raw error codes; none autonomously correlate atmospheric microwave fading profiles, RTU buffer limits, and serial transceiver telemetry to classify root causes or prescribe antenna alignment versus hardware replacement without manual protocol analyzer inspection."
  },
  "line": "\"A SCADA engineer's worst nightmare isn't a dead telemetry channel that flags red instantly; it is an intermittent, unrationalized alarm flood that quietly blinds the controller five minutes before a pipeline rupture.\"",
  "openQuestions": [
    "What percentage of weekly SCADA alarm volume across transmission corridors is generated by the top 10 chattering or fleeting instrument tags?",
    "How many hours are typically expended by field technicians and SCADA engineers per RTU station during point-to-point commissioning checkouts?",
    "What proportion of remote block valve telemetry dropouts across remote rights-of-way are caused by RF fading versus local solar/battery power depletion?"
  ]
};
