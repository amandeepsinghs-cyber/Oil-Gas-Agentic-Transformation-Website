# Slide 07 Build Narrative: Architecture of an Autonomous AI Agent

## 1. Executive Purpose & Boardroom Positioning

### The Transition from "Petrophysical Outcome" to the "Higher Plane"
In Stage 06, the board witnessed the tangible proof of an autonomous agent on a live operational well: the Petrophysical AI Agent executing wireline depth-splicing within seconds on Kansas Well A-12 with $r = 0.9899$ accuracy.

However, the strategic message of this transformation is **not** merely that we automated wireline log splicing. 

**On a higher plane, Stage 07 unveils the repeatable, sovereign enterprise blueprint:**
1. **Central Command & Multimodal Discovery (Gemini Enterprise)**: The agent is registered and controlled in a central enterprise plane. An executive or engineer uses plain English to immediately identify and triage assets across siloed databases without manual folder hunting.
2. **Headless & Omnichannel ("Two Surfaces, One Brain")**: The agent is headless. It does not force users into a single proprietary UI. It can be invoked from the central Gemini Enterprise cockpit, an interactive specialist GUI (Subsurface Studio on Cloud Run), or headless batch pipelines (Cloud Composer / Airflow, Petrel / Techlog monoliths).
3. **Governed Sovereign Ingestion**: The agent operates under strict enterprise IAM boundaries (`splice-agent@og-agentic-ecosystem`). It accesses only authorized block/joint-venture partitions with zero cross-tenant contamination.
4. **Deterministic Scientific Compute**: The large language model (Gemini 2.5) acts purely as the cognitive reasoning orchestrator. All physics calculations (signal cross-correlation, Z-score normalization, gain drift matching) are handed off to compiled, deterministic scientific solvers (`app/engine.py`). Zero generative hallucination on reservoir curves.
5. **Authorized Persistence & Immutable Audit**: With explicit, bounded write grants, the agent commits standardized composites (LAS 2.0/3.0) and SPWLA inspection reports to Cloud Storage, while writing every mathematical shift, Pearson $r$ value, and petrophysicist sign-off into BigQuery (`petro.splice_audit`) for a 30-year regulatory paper trail.

### The Boardroom Provocation
At the conclusion of this slide, the presenter turns the mirror onto the executive team:
> *"Where else do your engineers pull data from Database A, run standard calculation X, and write to System B? That is where your next autonomous agent belongs."*

---

## 2. Architecture Diagram Breakdown (Google Cloud Well-Architected Reference)

The visual core of Slide 07 is an official Google Cloud Reference Architecture diagram structured into three distinct horizontal tiers:

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ STAGE 07 // SOVEREIGN REFERENCE ARCHITECTURE // AUTONOMOUS AGENT & CONTROL PLANE                       │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                        │
│  HEADING: Architecture of an Autonomous AI Agent                                                       │
│  SUBHEADING: Built on Google Agent Development Kit (ADK), deployed on Vertex AI Agent Runtime, and     │
│              centrally governed in Gemini Enterprise Agent Registry—delivering deterministic physics.  │
│                                                                                                        │
│  ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 1. ENTERPRISE CONSUMPTION SURFACES ("TWO SURFACES, ONE BRAIN")                                   │  │
│  │  [Card 1: Gemini Enterprise]        [Card 2: Subsurface Studio]        [Card 3: Pipelines/Airflow]│  │
│  │   Central Command Cockpit            Specialist Petrophysics UI         Autonomous Batch          │  │
│  │   Natural Language Discovery         4-Track WebGL Log Viewer           Techlog / Petrel Sidecar │  │
│  └──────────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                     │ (1)                             │ (2)                             │ (3)          │
│                     ▼                                 ▼                                 ▼              │
│  ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 2. CENTRAL CONTROL PLANE & DETERMINISTIC EXECUTION RUNTIME                                       │  │
│  │  ┌────────────────────────┐  ┌────────────────────────────────────────────────────────────────┐  │  │
│  │  │ Gemini Enterprise      │  │ Vertex AI Reasoning Engine • Google ADK Root Agent             │  │  │
│  │  │ Agent Registry         │  │ Gemini 2.5 Flash/Pro • A2A Protocol • Distributed Session      │  │  │
│  │  ├────────────────────────┤  ├────────────────────────────────────────────────────────────────┤  │  │
│  │  │ Cloud IAM Service Id   │  │ Deterministic Mathematics & Tool Execution (`app/engine.py`)    │  │  │
│  │  │ `splice-agent@...`     │  │ 1. Overlap Detect  2. Cross-Corr  3. Gain Match  4. Ground QC  │  │  │
│  │  │ Least-Privilege Bounded│  │ (Zero LLM Guesswork • Pure SciPy Physics • SPWLA Compliance)   │  │  │
│  │  └────────────────────────┘  └────────────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                     │ (4)                             │ (5)                             │ (6)          │
│                     ▼                                 ▼                                 ▼              │
│  ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 3. DATA PERSISTENCE & SOVEREIGN GOVERNANCE                                                       │  │
│  │  [Google Cloud Storage (GCS)]      [Enterprise Redis (Memorystore)]   [BigQuery Immutable Ledger]│  │
│  │   gs://og-agentic-petrophysics/     Session State & Subsurface Cache   `petro.splice_audit`      │  │
│  │   Raw Runs, Spliced LAS, Reports    Zero 429 Quota Exhaustion          100% Traceable Custody    │  │
│  └──────────────────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                                        │
│  [ WELL-ARCHITECTED PILLARS: Operational Excellence • Performance • Security • Reliability • Cost ]    │
│                                                                                                        │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐             │
│  │  01 SURGICAL  │ │ 02 AUTONOMOUS │ │ 03 INTELLIGENT│ │  04 GOVERNED  │ │05 DETERMINISTIC│             │
│  └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘             │
│                                                                                                        │
│  ⚡ THE HIGHER PLANE // A REPEATABLE ENTERPRISE BLUEPRINT:                                              │
│  Where else do your engineers pull data from Database A, run standard calculation X, and write to      │
│  System B? That is where your next autonomous agent belongs.           [ Next: 10×10 Fleet Matrix → ]  │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. The 5 Core Attributes Mapped to Technical Reality

| Attribute | Slide 03/04 Requisite | Technical Implementation in Slide 07 Reference Architecture |
| :--- | :--- | :--- |
| **01 Surgical** | Targets the exact seam without touching surrounding monoliths. | Intervenes strictly at the log splicing seam: scans LAS header depth bounds, identifies casing shoe overlap windows, calculates curve shift, and outputs clean LAS without modifying geological models. |
| **02 Autonomous** | Event-triggered 24/7 execution without manual human handoffs. | Executes end-to-end in 3.2 seconds upon arrival of wireline files or API webhook. Handles multi-run wells autonomously with zero idle rig wait time. |
| **03 Intelligent** | Understands unstructured domain context and siloed metadata. | Leverages Gemini 2.5 to parse messy vendor headers, harmonize disparate naming conventions (e.g., `GR_EDTC` vs `CGR`), and discover wells via natural language queries. |
| **04 Governed** | Centrally cataloged, permission-bounded, and completely audited. | Cataloged in **Gemini Enterprise Agent Registry**; bounded by dedicated IAM Service Identity (`splice-agent@og-agentic-ecosystem`); mathematical shifts and sign-offs logged to **BigQuery**. |
| **05 Deterministic** | Zero generative hallucination; exact mathematical solvers. | Decoupled architecture: Gemini orchestrates; compiled SciPy algorithms compute cross-correlation ($r(\delta)$) and amplitude gain matching. Physical laws remain inviolable. |

---

## 4. Spoken Boardroom Script (45 Seconds, Executive Cadence)

> *"Chairman, Members of the Board:
> 
> What you just witnessed in Kansas Well A-12 was not an isolated software trick. On a higher plane, it represents the foundational architecture of an Autonomous AI Agent.
> 
> Notice how this works:
> At the top, we have 'Two Surfaces, One Brain.' The agent is completely headless. An asset director can discover, query, and command it directly inside Gemini Enterprise using plain English. A specialist petrophysicist can interact with it inside Subsurface Studio with 4-track visual depth synchronization. And your overnight batch pipelines or legacy Petrel monoliths can call it via standard APIs.
> 
> In the center is the control plane: built on Google's Agent Development Kit, deployed on Vertex AI Agent Runtime, and registered in Gemini Enterprise.
> 
> Crucially, look at how we enforce trust:
> First, governance is non-negotiable. The agent has its own dedicated IAM service identity—it cannot access any basin or block it isn't licensed for.
> Second, it never hallucinates. The language model orchestrates the workflow, but compiled scientific algorithms in Python and SciPy calculate the physics.
> And third, every single depth shift and correlation coefficient is permanently committed to BigQuery for a 30-year audit ledger.
> 
> So here is the question every executive in this room should now ask:
> Where else in your organisation do engineers pull data from Database A, perform a standard calculation or rule check, and write the result to System B?
> 
> That is where your next autonomous agent belongs."*

---

## 5. Technical Grounding & Source Artifacts

The architectural components and code patterns on Slide 07 are 100% grounded in the production repository:
- **Architecture Specification**: [`/usr/local/google/home/amandeepsinghs/o&g agentic transformation/Petrophysicist/splice_agent/SOLUTION_ARCHITECTURE.md`](file:///usr/local/google/home/amandeepsinghs/o&g%20agentic%20transformation/Petrophysicist/splice_agent/SOLUTION_ARCHITECTURE.md)
- **Mental Model ("Two Surfaces, One Brain")**: [`/usr/local/google/home/amandeepsinghs/o&g agentic transformation/Petrophysicist/splice_agent/mental_model_of_GE_AP_pitch.md`](file:///usr/local/google/home/amandeepsinghs/o&g%20agentic%20transformation/Petrophysicist/splice_agent/mental_model_of_GE_AP_pitch.md)
- **Official SVG Architecture Vectors**: [`/usr/local/google/home/amandeepsinghs/o&g agentic transformation/Petrophysicist/splice_agent/architecture_diagram.svg`](file:///usr/local/google/home/amandeepsinghs/o&g%20agentic%20transformation/Petrophysicist/splice_agent/architecture_diagram.svg)
- **ADK Agent Definition**: `agent/agent.py` (`depth_match_splice_agent`)
- **Deterministic Math Engine**: `app/engine.py` (SciPy `signal.correlate`, Z-score normalization, gain ratio)
- **State & Caching Service**: `app_utils/redis_session_service.py` (`EnterpriseRedisSessionService`, `RedisCurveCache`)
- **Audit Ledger**: `og-agentic-ecosystem.petro.splice_audit` (BigQuery table partition)
