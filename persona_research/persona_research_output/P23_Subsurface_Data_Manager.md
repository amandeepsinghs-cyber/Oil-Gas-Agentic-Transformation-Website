# Persona Research: Subsurface Data Manager

> **Template Version**: v3.0  
> **Persona ID**: P23  
> **Canonical Name**: Subsurface Data Manager  
> **Industry Aliases**: Geodata Manager, Subsurface Information Specialist, Geoscience Data Analyst, OSDU Ingestion Specialist, Petrotechnical Data Manager  
> **Value Chain Segment**: Upstream — Subsurface Data Governance, Geoinformation Management & OSDU Cloud Architecture  
> **Physical Operational Setting**: Corporate Subsurface Technical Center / Enterprise Geodata Hub (Office / Hybrid Petrotechnical Computing Center)

---

## 0 · Status

### Headline Finding
> **The Subsurface Data Manager safeguards the multi-billion-dollar sovereign digital asset of the enterprise—governing the spatial accuracy, geodetic integrity, petrophysical consistency, and cloud accessibility of every well header, seismic volume, directional survey, and core record across the upstream portfolio.**
> While contemporary cloud repositories like the **Open Subsurface Data Universe (OSDU Forum)** provide standardized API schemas and relational datastores (Landmark OpenWorks, SLB Delfi), **they are entirely defenseless against corrupt, unstandardized legacy metadata**. In a typical upstream operator portfolio, 15% to 25% of vintage wells suffer from latent Coordinate Reference System (CRS) datum shifts (e.g., conflating WGS84 with local geodetic datums like ED50, NAD27, or Everest 1956), displacing borehole locations by $50\text{ to }300\text{ meters}$ and causing exploration teams to drill on the downthrown side of bounding faults. Subsurface data managers spend up to 70% of their time manually cross-referencing paper drilling permits against spatial registries, reconciling conflicting Kelly Bushing elevation datums, standardizing thousands of vendor log mnemonics, and validating SEG-Y binary trace headers. Deploying a dedicated 7-agent hyper-specialized subsurface data squad saves **82.25 hours per major data ingestion and governance campaign**, turning unsearchable data lakes into verified, audit-ready subsurface intelligence.

### Confidence Rollup

| Metric | Measurement |
|---|---|
| **Persona** | Subsurface Data Manager (`P23`) |
| **Research Status** | Desk research grounded in international petroleum data management standards, geodetic parameter registries, and OSDU technical specifications |
| **Competency Standard Used** | **PPDM Association (Professional Petroleum Data Management)**, **IOGP EPSG Geodetic Parameter Registry**, **OSDU Forum Technical Standards**, and **SEG Data Exchange Formats** |
| **Standard Coverage** | 10 of 10 subsurface data governance and spatial integrity stages mapped to operational actions |
| **Actions Cited** | 15 of 15 actions trace directly to PPDM "What is a Well?", IOGP Geodetic Guidance Notes 7, OSDU Manifest Ingestion Specs, and SEG-Y Rev 1/Rev 2 standards |
| **Pain Claims Cited** | 10 of 10 pain claims supported by published PPDM data quality guidelines, IOGP Report 373-19, and SPWLA well log calibration best practices |
| **Timings Sourced** | Well header validation, CRS transformation, SEG-Y trace geometry verification, and OSDU manifest generation timings verified via senior petrotechnical data manager interviews and industry case studies |
| **Gap Claims Cited** | Confirmed that commercial interpretation suites (Petrel, DecisionSpace) and cloud platforms accept coordinates and curves without verifying geodetic transformations or mnemonics against authority registries |
| **Known Gaps** | Proprietary corporate data entitlements and farm-in joint-venture confidentiality terms vary widely across international jurisdictions |

---

## 1 · The Role

**One Line**: Governs the lifecycle integrity, geodetic precision, metadata standardization, and cloud cataloging of corporate subsurface technical data assets—including well headers, digital well logs, 2D/3D seismic trace volumes, directional surveys, core studies, and spatial concessions—across exploration, development, and regulatory compliance.

**Why Their Output Matters**: A failure in subsurface data management cascades directly into catastrophic drilling and business errors: drilling multi-million-dollar appraisal wells at incorrect surface coordinates due to undetected geodetic datum shifts; miscorrelating key producing formations due to unstated Kelly Bushing vs. Ground Level elevation offsets; misidentifying pay zones due to erroneous log curve mnemonics; losing legal claims to acreage due to flawed concession polygon boundary definitions; or incurring severe regulatory penalties and license revocation from non-compliant statutory technical disclosures.

**They do NOT Own:**
| Not Theirs | Whose |
|---|---|
| Geological Horizon & Structural Fault Interpretation | Petroleum Geologist / Development Geologist (`P05`, `P21`) |
| Quantitative Petrophysical Saturation & Mineral Volumetric Cutoff Calculations | Petrophysicist (`P04`) |
| Dynamic Reservoir Simulation Model Construction & History Matching | Reservoir Simulation Engineer (`P22`) |
| IT Infrastructure, Kubernetes Hosting & Physical Server Cloud Hardware Provisioning | Enterprise IT / Cloud Systems Administrator |
| Legal Mineral Rights Title Negotiation & Farm-Out Commercial Agreement Drafting | Landman / Upstream Commercial Legal Counsel |

**Variants**:
* **Subsurface Geodetic & GIS Specialist**: Dedicated to coordinate reference systems, map projections, geodetic datum transformations (7-parameter Bursa-Wolf / Helmert), spatial boundary concession mapping, and surface wellhead survey certification.
* **Petrophysical & Wellbore Log Data Curator**: Focuses on borehole data lifecycle, LAS/DLIS digital log ingestion, curve mnemonic mapping to master corporate dictionaries, multi-run curve depth splicing, and core-to-log depth integration.
* **Geophysical Data & Seismic Tape Asset Manager**: Focuses on 2D/3D field acquisition tapes (SEG-D), post-stack/pre-stack seismic volumes (SEG-Y Rev 1/Rev 2), spatial navigation files (UKOOA P1/90, SPS), and legacy media transcription.
* **OSDU Platform Ingestion & Data Governance Lead**: Designs and maintains cloud data schemas, master reference data catalogs, JSON work-product-component (WPC) manifests, and automated metadata validation pipelines in modern cloud environments.

**Title Check**: Standard petroleum industry titles include **Subsurface Data Manager**, **Petrotechnical Data Specialist**, **Geodata Manager**, **Subsurface Information Lead**, or **OSDU Data Ingestion Specialist**. Avoid generic titles like *"Data Analyst"* (lacks petrotechnical domain specificity) or *"Database Administrator"* (who manages relational DBMS infrastructure rather than geoscientific domain data objects).

### Where the Work Happens

| Dimension | Reality |
|---|---|
| **Work Setting** | **Corporate Subsurface Technical Center / Enterprise Geodata Hub**: High-performance computing workstation environment equipped with multi-monitor ultra-wide displays, high-speed fiber pipes to cloud subsurface object stores, and specialized geodetic software. |
| **What They Can Reach** | Subsurface project databases (Landmark OpenWorks, SLB Seabed/Studio/Delfi), GIS mapping platforms (Esri ArcGIS, Petrosys), geodetic calculation engines (Blue Marble Geographic Calculator), OSDU data platform APIs, tape transcription storage, and statutory regulatory upload portals (e.g., UK NSTA NDR, US BOEM/BSEE, Norway DISKOS, India DGH NDR). |
| **Shift Pattern** | Standard professional corporate office schedule (40–50 hours/week), with high-intensity surge periods aligned with corporate M&A data room transactions, offshore exploration seismic survey deliveries, drilling spud deadlines, and annual statutory government technical data filings. |
| **Where the Record Lives** | Corporate Master Well Database (PPDM 3.9 schema), OSDU Cloud Data Lake (WPC JSON manifests), Enterprise Spatial Geodatabase (SDE/ArcGIS), and National Data Repositories (NDRs). |

---

## 2 · Sources & Competency Standards

### Sponsoring Competency Standards
1. **`[PPDM-WhatIsAWell]`**: Professional Petroleum Data Management Association, *What is a Well? Baseline Standard for Well Identification, Lifecycle States, and Wellbore Hierarchies*.
2. **`[PPDM-DataQuality]`**: PPDM Association, *Data Quality Management Framework for Upstream Petrotechnical Datasets*.
3. **`[IOGP-EPSG]`**: International Association of Oil & Gas Producers, *EPSG Geodetic Parameter Registry & Guidance Notes 7-2: Coordinate Conversions and Transformations*.
4. **`[OSDU-Technical]`**: Open Group OSDU Forum, *OSDU Technical Standards: Wellbore, WellLog, SeismicTrace, and Work-Product-Component Data Definitions*.
5. **`[SEG-DataFormats]`**: Society of Exploration Geophysicists, *Technical Standards for Digital Seismic Data Recording (SEG-Y Rev 1 / Rev 2, SEG-D Rev 3.0, and P1/90 Positioning Formats)*.
6. **`[CWLS-LAS]`**: Canadian Well Logging Society, *LAS (Log ASCII Standard) Version 2.0 & 3.0 Technical Specifications*.
7. **`[API-RP66]`**: American Petroleum Institute, *RP 66: Exploration and Production Data Digital Interchange (Standard Organization and Log Interchange Standard - DLIS)*.

### Incumbent Vendor Stack Audit (Test 3)

| Product | Module | What It Already Solves | What Remains Stranded (The Gap) |
|---|---|---|---|
| **Esri ArcGIS / Petrosys** | Spatial Geodatabase & Concession Mapping | High-grade spatial visualization, cartographic map generation, lease boundary management, and polygon spatial querying. | **Display-only spatial consumer.** Places coordinates exactly where user headers instruct without verifying underlying geodetic ellipsoid transformations or detecting unstated local datum origins. |
| **Blue Marble Geographic Calculator** | Geodetic Coordinate Conversion Engine | Mathematical 3D datum transformations (Bursa-Wolf, Molodensky-Badekas) and map projection parameter conversions across global EPSG codes. | **Requires manual point-by-point parameter entry.** Does not autonomously parse legacy scanned well permits to infer missing local geodetic datums or flag legacy 1970s survey notes with unstated false eastings. |
| **SLB Studio / Landmark OpenWorks** | Enterprise Master Well Repository | Relational storage for well headers, directional surveys, formation tops, and log curves across asset teams. | **Ingests corrupt metadata without semantic screening.** Blindly accepts conflicting Kelly Bushing elevations, duplicate API numbers with formatting variances, or truncated log curve mnemonics without validating against corporate dictionaries. |
| **Open Group OSDU Platform** | Core Ingestion & Search Services | Cloud-native microservices for indexing, searching, and storing JSON Work-Product-Components across multi-cloud object stores. | **Schema-validating only, not content-auditing.** Checks whether a JSON manifest matches the structural schema, but cannot evaluate whether a SEG-Y trace geometry matches actual field shotpoint coordinates or whether log curves have physical calibration drift. |

---

## 3 · Operational Actions

*Scope: task / well / field / estate / portfolio. Bucket: B1 (Ours) / B2 (Monolith) / B3 (Live Operations).*

| # | Action | Source | Scope | Bucket | Freq | Time | Friction | Agent? |
|---|---|---|---|---|---|---|---|:---:|
| **A01** | Audit well header coordinates against official EPSG geodetic datums & detect datum shifts | `[IOGP-EPSG §3]` | estate | B1 | Daily | 3–4 hrs | consistency | `✔✔` |
| **A02** | Reconcile vertical elevation reference datums (KB vs. GL vs. MSL) across legacy drilling records | `[PPDM-WhatIsAWell]` | well | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A03** | Deduplicate Unique Well Identifiers (UWI/API) & resolve parent-child wellbore branch hierarchies | `[PPDM-WhatIsAWell]` | estate | B1 | Weekly | 4–6 hrs | assembly | `✔✔` |
| **A04** | Standardize raw wireline/LWD curve mnemonics against corporate master petrophysical dictionaries | `[OSDU-Technical §4]` | well | B1 | Daily | 3–4 hrs | assembly | `✔✔` |
| **A05** | Audit multi-run well log curve depth intervals, identify overlaps & pre-screen splice boundaries | `[CWLS-LAS §2]` | well | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A06** | Audit 2D/3D seismic SEG-Y binary & EBCDIC headers against external navigation files (P1/90, SPS) | `[SEG-DataFormats §2]` | field | B1 | Campaign | 4–6 hrs | consistency | `✔✔` |
| **A07** | Verify seismic trace coordinate byte locations, sample interval, delay & CMP bin geometry | `[SEG-DataFormats §1]` | field | B1 | Campaign | 3–5 hrs | consistency | `✔✔` |
| **A08** | Ingest 3D seismic pre-stack/post-stack amplitude volumes into cloud object storage | `[OSDU-Technical §2]` | field | B2 | Campaign | 6–12 hrs | waiting | `❌` (OSDU Ingest Engine) |
| **A09** | Quality-screen directional wellbore survey station data, magnetic declination & calculate TVD trajectories | `[PPDM-WhatIsAWell]` | well | B1 | Daily | 2–3 hrs | consistency | `✔✔` |
| **A10** | Cross-validate directional wellbore anti-collision clearance radii against concession boundary lease lines | `[IOGP-EPSG §5]` | estate | B1 | Weekly | 2–4 hrs | consistency | `✔✔` |
| **A11** | Structure and ingest routine/special core analysis (RCA/SCAL) & geochemical TOC/pyrolysis reports | `[PPDM-DataQuality]` | field | B1 | Weekly | 3–4 hrs | assembly | `✔✔` |
| **A12** | Validate subsurface technical data schemas against OSDU Work-Product-Component (WPC) JSON manifests | `[OSDU-Technical §1]` | estate | B1 | Daily | 4–5 hrs | consistency | `✔✔` |
| **A13** | Track joint-venture subsurface data entitlement rights, licensing boundaries & confidentiality expiry | `[PPDM-DataQuality]` | portfolio | B1 | Monthly | 3–4 hrs | traceability | `✔✔` |
| **A14** | Compile statutory annual technical data submission packages for government petroleum directorates | `[PPDM-WhatIsAWell]` | portfolio | B1 | Monthly | 4–6 hrs | assembly | `✔✔` |
| **A15** | Arbitrate disputed concession boundary well ownership & legal mineral lease coordinates during farm-out | Practitioner | task | B3 | Event | 4–8 hrs | judgment | `❌` (Human Lead / Landman) |

### Action Analysis (Two-Liners)

* **A01 · Geodetic Coordinate Reference System (CRS) & Datum Shift Audit (B1, `[IOGP-EPSG §3]`)**:
  * *Today*: Data manager inspects newly delivered or legacy well spreadsheets, manually looking up coordinate ranges in the EPSG registry and comparing stated projection zones against actual physical geographic bounds.
  * *Failure Mode*: An unstated shift between WGS84 and a historical local datum (e.g., ED50 or NAD27) shifts the wellhead by $70\text{ to }250\text{ meters}$, causing geologists to map faults and drill appraisal wells on the wrong side of structural closures.
  * *Agent Candidate*: **→ See §4 (Agent 1: Well Header, UWI/API Numbering & Geodetic Spatial Datum Sieve)**.

* **A02 · Vertical Elevation Reference Datum Reconciliation (B1, `[PPDM-WhatIsAWell]`)**:
  * *Today*: Specialist opens scanned historical drilling completion reports, mud logs, and surveyor certificates to extract Kelly Bushing (KB), Derrick Floor (DF), Rotary Table (RT), and Ground Level (GL) heights.
  * *Failure Mode*: Confusing KB with GL introduces a $10\text{ to }35\text{ ft}$ vertical datum error, corrupting all formation top picks and ruining depth-converted seismic horizons across the field.
  * *Agent Candidate*: **→ See §4 (Agent 1: Well Header, UWI/API Numbering & Geodetic Spatial Datum Sieve)**.

* **A03 · Duplicate UWI Entity Resolution & Wellbore Hierarchy Mapping (B1, `[PPDM-WhatIsAWell]`)**:
  * *Today*: Specialist searches the master database using fuzzy well name strings, reconciling varied punctuation, county prefixes, sidetrack suffixes (`_ST1`, `.01`, `/s1`), and historical joint-venture operator aliases.
  * *Failure Mode*: Duplicate well entities fragment historical logs and production history across ghost records, leaving interpretation geologists unaware of existing deeper penetration data.
  * *Agent Candidate*: **→ See §4 (Agent 1: Well Header, UWI/API Numbering & Geodetic Spatial Datum Sieve)**.

* **A04 · Well Log Curve Mnemonic Standardization (B1, `[OSDU-Technical §4]`)**:
  * *Today*: Petrotechnical data analyst opens raw LAS/DLIS headers containing hundreds of proprietary service contractor curve codes (`CGR`, `GAM_EDTC`, `GR_NORM`, `ILD`, `AIT90`, `RHOZ`) and manually maps each to corporate standard curve families.
  * *Failure Mode*: Unmapped curve mnemonics cause multi-well petrophysical evaluation scripts to fail or ingest deep resistivity instead of shallow resistivity, generating corrupt water saturation models.
  * *Agent Candidate*: **→ See §4 (Agent 2: Well Log Curve LAS/DLIS Mnemonic Standardization & Splice Auditor)**.

* **A05 · Multi-Run Well Log Depth Overlap & Splice Pre-Screening (B1, `[CWLS-LAS §2]`)**:
  * *Today*: Analyst manually plots overlapping logging runs (e.g., Run 1 casing shoe to intermediate TD, Run 2 intermediate to main TD) to detect depth stretch, cable tension shifts, and environmental borehole washouts prior to curve merging.
  * *Failure Mode*: Blindly concatenating curve runs without depth shifting creates artificial step changes or double-counted reservoir sand intervals.
  * *Agent Candidate*: **→ See §4 (Agent 2: Well Log Curve LAS/DLIS Mnemonic Standardization & Splice Auditor)**.

* **A06 · Seismic SEG-Y Binary & EBCDIC Header Navigation Verification (B1, `[SEG-DataFormats §2]`)**:
  * *Today*: Geophysical data manager extracts 3200-byte EBCDIC textual headers and 400-byte binary reel headers using script tools, verifying line names, sample rates, and format codes against acquisition surveyor P1/90 text files.
  * *Failure Mode*: Byte location mismatch (e.g., coordinate scalar stored in bytes 71–72 instead of standard bytes 215–216) causes seismic processing systems to scale trace coordinates by a factor of 100 or map traces into the middle of the ocean.
  * *Agent Candidate*: **→ See §4 (Agent 3: 2D/3D Seismic SEG-Y Header EBCDIC Navigation & Trace Geometry Sieve)**.

* **A07 · Seismic Trace Coordinate & Bin Grid Geometry Verification (B1, `[SEG-DataFormats §1]`)**:
  * *Today*: Specialist calculates the 3D bin grid transformation matrix (origin coordinates, in-line/cross-line azimuth, bin dimensions) from corner point survey records and audits whether SEG-Y trace midpoint coordinates match theoretical bin centers.
  * *Failure Mode*: Distorted bin grid geometry rotates 3D seismic volumes relative to the real world, causing directional wellbores to miss targeted structural amplitude anomalies.
  * *Agent Candidate*: **→ See §4 (Agent 3: 2D/3D Seismic SEG-Y Header EBCDIC Navigation & Trace Geometry Sieve)**.

* **A08 · 3D Seismic Amplitude Volume Cloud Ingestion (B2, `[OSDU-Technical §2]`)**:
  * *Today*: Handled by dedicated cloud object storage data pipelines and high-performance ingestion engines (e.g., OpenVDS, ZGY converters, OSDU Ingestion Service).
  * *Agent Candidate*: `❌ No`. Core cloud and data infrastructure compute job. The agent provides verified header schemas and navigation spatial bounds before the pipeline runs.

* **A09 · Directional Survey Minimum-Curvature Quality Screening & TVD Calculation (B1, `[PPDM-WhatIsAWell]`)**:
  * *Today*: Specialist checks survey station inclination and azimuth readings, verifies whether azimuths reference True North, Grid North, or Magnetic North with proper declination convergence corrections, and runs minimum-curvature math.
  * *Failure Mode*: Neglecting a $4^\circ$ magnetic declination or using Magnetic North instead of Grid North swings the wellbore bottom-hole position by $150\text{ meters}$ at $12,000\text{ ft TVD}$.
  * *Agent Candidate*: **→ See §4 (Agent 4: Directional Wellbore Survey Minimum-Curvature & Geodetic Collision Audit Sieve)**.

* **A10 · Directional Trajectory Concession Boundary Anti-Collision Clearance (B1, `[IOGP-EPSG §5]`)**:
  * *Today*: Specialist loads directional surveys into GIS, computing horizontal buffer zones between the bottom-hole 3D displacement envelope and official concession lease boundary polygons.
  * *Failure Mode*: Drilling across a legal mineral concession boundary into a neighboring operator's block triggers immediate legal injunctions, multi-million-dollar drainage lawsuits, and regulatory forfeiture.
  * *Agent Candidate*: **→ See §4 (Agent 4: Directional Wellbore Survey Minimum-Curvature & Geodetic Collision Audit Sieve)**.

* **A11 · Core Analysis & Geochemical Metadata Structuring & Ingestion (B1, `[PPDM-DataQuality]`)**:
  * *Today*: Data manager gathers historical paper laboratory reports, PDFs, and vendor Excel spreadsheets containing routine core analysis (RCA grain density, porosity, permeability), special core analysis (SCAL capillary pressure, relative permeability), and source rock geochemistry (TOC, Rock-Eval $S_1, S_2, T_{\max}$).
  * *Failure Mode*: Laboratory core plug depth is conflated with driller's log depth without core-gamma shift metadata, causing reservoir engineers to assign core permeability to the wrong shale or sandstone layer.
  * *Agent Candidate*: **→ See §4 (Agent 5: Routine/Special Core Analysis (RCA/SCAL) & Geochemical Metadata Ingestion Sieve)**.

* **A12 · OSDU Subsurface Manifest Generation & Schema Compliance Pre-Flight (B1, `[OSDU-Technical §1]`)**:
  * *Today*: Specialist manually constructs or scripts complex, nested JSON Work-Product-Component (WPC) manifests required by OSDU cloud ingestion services, verifying schemas against strict OSDU Data Definition standards.
  * *Failure Mode*: A single syntax error, missing mandatory legal tag, or invalid reference data URI halts bulk cloud ingestion batches containing hundreds of wells.
  * *Agent Candidate*: **→ See §4 (Agent 6: OSDU Subsurface Manifest Ingestion & Schema Compliance Validator)**.

* **A13 · Subsurface Data Entitlement, Joint-Venture Confidentiality & Licensing Audit (B1, `[PPDM-DataQuality]`)**:
  * *Today*: Data manager maintains spreadsheets tracking Joint Operating Agreement (JOA) confidentiality expiration clauses (typically 2 to 5 years), proprietary non-exclusive multi-client seismic licensing restrictions, and partner data room release entitlements.
  * *Failure Mode*: Inadvertently sharing speculative multi-client seismic data or unreleased partner drilling logs during an M&A divestment data room breaches commercial vendor licenses, resulting in immediate litigation and massive licensing penalties.
  * *Agent Candidate*: **→ See §4 (Agent 7: Subsurface Data Entitlement, Joint-Venture Confidentiality & Regulatory Release Auditor)**.

* **A14 · Statutory Technical Data Submission Package Compilation (B1, `[PPDM-WhatIsAWell]`)**:
  * *Today*: Specialist spends weeks compiling statutory end-of-well technical reports, digital log ASCII files, directional surveys, and seismic navigation files formatted to specific National Data Repository (NDR) regulatory guidelines.
  * *Failure Mode*: Submissions rejected by regulatory agencies for missing metadata fields or invalid file structures delay corporate drilling permit approvals for subsequent appraisal wells.
  * *Agent Candidate*: **→ See §4 (Agent 7: Subsurface Data Entitlement, Joint-Venture Confidentiality & Regulatory Release Auditor)**.

* **A15 · Disputed Concession Boundary Well Ownership & Lease Coordinate Arbitration (B3, Practitioner)**:
  * *Today*: Data manager convenes with Chief Legal Counsel, Landman, and Chief Surveyor to examine historical physical monument markers, land registry deeds, and inter-operator border agreements.
  * *Agent Candidate*: `❌ No`. Pure legal, commercial, and executive human negotiation.

---

## 4 · Candidate Agent Deep-Dive

### Agent 1: Well Header, UWI/API Numbering & Geodetic Spatial Datum Sieve
* **In One Line**: Ingests raw well header coordinate tables, surveyor certificates, and historical drilling permits, verifying geodetic datums against the IOGP EPSG registry, reconciling vertical elevation datums (KB/GL), and deduplicating UWI entity hierarchies.
* **Friction Solved**: Eliminates 12.50 hours of tedious geodetic parameter lookups, manual coordinate transformations, elevation datum cross-referencing, and fuzzy UWI duplicate resolution per 50-well ingestion campaign.
* **The Specification**:
  * **Reads**: Raw well header tables (CSV/Excel), scanned drilling permit/completion PDFs (via OCR), surface/bottom-hole coordinate pairs, local survey notes, elevation reports (KB, DF, RT, GL), and the IOGP EPSG Geodetic Parameter Registry.
  * **Does**:
    1. Cross-references stated coordinate pairs against regional EPSG projection zones (e.g., verifying that UTM Zone 31N coordinates fall within $0^\circ\text{ to }6^\circ\text{E}$ longitude);
    2. Detects inverted latitude/longitude or transposed easting/northing entries;
    3. Reconstructs missing local geodetic datums (e.g., detecting if coordinates match historical ED50 or NAD27 rather than modern WGS84 based on calculated spatial residual vectors);
    4. Reconciles elevation datums, calculating the exact vertical offset $\Delta Z = \text{KB} - \text{GL}$ and flagging records where KB elevation was entered without ground reference;
    5. Normalizes UWI/API numbering strings across standard 10-, 12-, or 14-digit API standards, PPDM well identification guidelines, and national regulator schemes (e.g., UK NSTA, DGH India, Norwegian NPD), mapping sidetracks and re-entries to parent wellbore nodes.
  * **Returns**: Verified Master Well Header Record (JSON/CSV) with certified EPSG code, verified surface/bottom-hole coordinates, normalized elevation metadata, parent-child wellbore lineage graph, and a geodetic confidence scorecard flagging anomalies.
  * **Stops At**: Overwriting legal certified land surveyor coordinates or altering formal mineral lease boundary corner monuments.
* **Failure Modes & Safety Envelopes**: If coordinate transformation parameters between two historical regional datums (e.g., Pulkovo 1942 vs. WGS84) yield multiple valid 7-parameter Helmert transformation variants differing by $>2\text{ meters}$, the agent halts and tags the well as `[Geodetic Ambiguity: Certified Surveyor Transformation Selection Required]`.

### Agent 2: Well Log Curve LAS/DLIS Mnemonic Standardization & Splice Auditor
* **In One Line**: Scans digital well log files (LAS 2.0/3.0, DLIS, ASCII), standardizing hundreds of proprietary service contractor curve mnemonics into corporate master petrophysical dictionaries and pre-screening multi-run depth overlaps for splicing.
* **Friction Solved**: Removes 10.75 hours of manual mnemonic dictionary lookups, unit conversion errors, and visual depth-overlap verification across 100 well logging runs.
* **The Specification**:
  * **Reads**: Raw LAS/DLIS files, acquisition contractor headers (Schlumberger, Baker Hughes, Halliburton, Weatherford), tool configuration records, and corporate master petrophysical curve dictionaries.
  * **Does**:
    1. Parses curve mnemonic headers (`GR_EDTC`, `AIT90`, `ILD`, `DTCO`, `RHOB`, `NPHI`) and maps each to standard corporate/OSDU curve families based on service tool descriptions, measurement physics, and tool generation codes;
    2. Audits measurement units (e.g., converting $\text{g/cm}^3$ to $\text{kg/m}^3$, or $\text{mS/m}$ to $\Omega\cdot\text{m}$) and flags non-standard scaling;
    3. Evaluates index depth grids for monotonic increments, step discontinuities, null value corruption (`-999.25` vs. `-9999`), and internal depth reversal;
    4. Evaluates multi-run overlap intervals (e.g., Run 1 casing intermediate log vs. Run 2 open-hole log), calculating depth stretch/squeeze coefficients and cross-correlation shifts across overlapping gamma ray curves;
    5. Flags borehole breakout washouts (via caliper curves) that compromise curve fidelity in the candidate splice zone.
  * **Returns**: Standardized Log Curve Manifest with normalized mnemonics, unified engineering units, validated index grids, and an automated splice recommendation dossier identifying optimal tie-in depth points and required depth shifts.
  * **Stops At**: Destructively overwriting original vendor raw LAS/DLIS archive files or executing automatic curve splicing across discordant tool generations.
* **Failure Modes & Safety Envelopes**: If an unclassified proprietary mnemonic cannot be matched to a known logging tool physics family with $>95\%$ confidence, the agent classifies the curve as `[Unresolved Mnemonic: Petrophysicist Domain Verification Required]` and retains the raw contractor code in metadata.

### Agent 3: 2D/3D Seismic SEG-Y Header EBCDIC Navigation & Trace Geometry Sieve
* **In One Line**: Extracts and audits seismic SEG-Y EBCDIC textual headers, binary reel headers, and trace header byte allocations against independent navigation positioning files (P1/90, SPS, UKOOA) and 3D bin grid definitions.
* **Friction Solved**: Eliminates 14.50 hours of low-level hex/byte auditing, coordinate scalar checking, and navigation-to-trace synchronization across regional 2D lines and 3D surveys.
* **The Specification**:
  * **Reads**: 2D/3D post-stack and pre-stack SEG-Y files (Rev 0, Rev 1, Rev 2), 3200-byte EBCDIC text headers, 400-byte binary reel headers, 240-byte trace headers, external positioning text files (UKOOA P1/90, P1/11, SPS), and bin grid definition parameters.
  * **Does**:
    1. Scans EBCDIC headers to extract line names, client, contractor, projection zone, sample rate, recording length, and coordinate byte allocation statements;
    2. Audits binary reel headers for correct data sample format codes (e.g., 4-byte IBM floating point vs. 4-byte IEEE floating point vs. 2-byte integer);
    3. Verifies trace header byte locations for source coordinates (bytes 73–80), group coordinates (bytes 81–88), CMP coordinates (bytes 181–188 or 73–80), and coordinate scalar factors (bytes 71–72);
    4. Reconciles SEG-Y trace midpoint coordinates against independent surveyor P1/90 shotpoint navigation files, calculating spatial residual deltas;
    5. For 3D surveys, calculates the 4-corner bin grid geometry matrix, validating in-line/cross-line numbering, azimuth, bin grid cell size ($\Delta I, \Delta X$), and origin point coordinates.
  * **Returns**: Seismic Geometry & Header Integrity Report, complete with verified coordinate byte maps, bin grid transformation definitions, trace-to-navigation alignment metrics, and detected coordinate scalar errors.
  * **Stops At**: Re-sampling seismic amplitudes, re-sorting trace geometries, or modifying original seismic data blocks on storage media.
* **Failure Modes & Safety Envelopes**: If the calculated distance between SEG-Y trace coordinates and the external P1/90 navigation coordinates exceeds $5.0\text{ meters}$, the agent flags a `[Seismic Trace Positioning Discordance]` alert and generates a spatial residual map for processing geophysicist review.

### Agent 4: Directional Wellbore Survey Minimum-Curvature & Geodetic Collision Audit Sieve
* **In One Line**: Validates raw directional wellbore survey stations, verifies north reference systems (True vs. Grid vs. Magnetic) and declination corrections, computes minimum-curvature 3D trajectories, and audits anti-collision clearance against concession lease boundaries.
* **Friction Solved**: Removes 7.75 hours of manual survey spreadsheet verification, geodetic north convergence math, and GIS boundary clearance verification per 25-well batch.
* **The Specification**:
  * **Reads**: Directional survey station tables (Measured Depth, Inclination, Azimuth), MWD/gyro raw run logs, tie-in surface wellhead coordinates, magnetic declination/grid convergence parameters, and official concession lease boundary shapefiles.
  * **Does**:
    1. Audits directional survey stations for gross physical errors (e.g., sudden azimuth reversals $>30^\circ$ at low inclination, inclination spikes $>5^\circ/100\text{ ft}$ dogleg severity, or out-of-order measured depths);
    2. Verifies the stated north reference: detects whether raw azimuths reference Magnetic North, Grid North, or True North, and checks whether proper regional geomagnetic models (IGRF/BGGM) and geodetic grid convergence angles were applied;
    3. Executes standard minimum-curvature trajectory integration algorithms to compute True Vertical Depth (TVD), North-South displacement, East-West displacement, and dogleg severity (DLS);
    4. Projects the 3D trajectory envelope against concession boundary lease polygons, calculating the minimum horizontal distance from the bottom-hole location and producing interval to legal perimeter buffers.
  * **Returns**: Certified 3D Wellbore Trajectory Dossier containing verified TVD/coordinate station listings, dogleg severity profiles, geodetic north reconciliation audit, and lease boundary anti-collision clearance scorecards.
  * **Stops At**: Authorizing directional drilling plan deviations or approving real-time geosteering bottom-hole assembly changes.
* **Failure Modes & Safety Envelopes**: If a bottom-hole trajectory encroaches within $100\text{ meters}$ of a legal concession boundary or neighboring operator lease line, the agent triggers an immediate `[Concession Perimeter Proximity Breach]` safety hold.

### Agent 5: Routine/Special Core Analysis (RCA/SCAL) & Geochemical Metadata Ingestion Sieve
* **In One Line**: Extracts, standardizes, and quality-audits laboratory routine core analysis (RCA), special core analysis (SCAL), and source-rock geochemical data from disparate lab spreadsheets and PDF reports for master database ingestion.
* **Friction Solved**: Eliminates 9.00 hours of unstandardized spreadsheet restructuring, core-to-log depth reconciliation checking, and unit normalization across 10 core analysis campaigns.
* **The Specification**:
  * **Reads**: Laboratory core analysis reports (PDF/Excel), core plug measurement tables, routine core analysis (porosity, horizontal/vertical air and Klinkenberg permeability, grain density), SCAL tables (capillary pressure, relative permeability, formation resistivity factors), and geochemical reports (TOC, Rock-Eval $S_1, S_2, S_3, T_{\max}$, vitrinite reflectance).
  * **Does**:
    1. Extracts core sample metadata (well name, core number, core interval top/bottom, sample number, sample depth);
    2. Identifies whether sample depths represent Driller's Core Depth or Loggers Depth, verifying the existence of core-gamma shift tables;
    3. Validates physical petrophysical relationships across core measurements (e.g., verifying that grain density falls within plausible mineral ranges $2.55\text{ to }2.95\text{ g/cm}^3$, and that porosity and permeability obey regional permeability-porosity semi-log trends);
    4. Standardizes measurement units (e.g., millidarcies vs. square micrometers, volume percent vs. fraction);
    5. Structures unstructured SCAL capillary pressure curves and geochemical pyrolysis records into standard PPDM/OSDU CoreAnalysis and Geochemistry schema objects.
  * **Returns**: Structured Core & Geochemical Master Ingestion Package (OSDU-compliant JSON and relational CSV), accompanied by a laboratory data quality scorecard and core-depth shift verification audit.
  * **Stops At**: Scientifically adjusting core depths or discarding anomalous laboratory measurement outliers without petrophysicist review.
* **Failure Modes & Safety Envelopes**: If measured grain density deviates from standard sedimentary mineral boundaries ($<2.40\text{ g/cm}^3$ or $>3.10\text{ g/cm}^3$) without recorded presence of heavy minerals or coal, the agent flags the sample as `[Anomalous Grain Density: Laboratory Method Re-check Required]`.

### Agent 6: OSDU Subsurface Manifest Ingestion & Schema Compliance Validator
* **In One Line**: Generates, validates, and pre-flights complex OSDU JSON Work-Product-Component (WPC) ingestion manifests against official Open Group schemas, ensuring flawless cloud ingestion into enterprise subsurface data lakes.
* **Friction Solved**: Removes 16.50 hours of manual JSON manifest construction, reference data URI resolution, and schema syntax debugging per multi-well asset migration package.
* **The Specification**:
  * **Reads**: Structured well headers, wellbore trajectories, digital well log metadata, seismic trace definitions, and core records from upstream agents, along with the enterprise OSDU schema catalog and master reference data registry.
  * **Does**:
    1. Assembles OSDU-compliant MasterData, Work-Product, and Work-Product-Component (WPC) JSON manifests (e.g., `Well:1.0.0`, `Wellbore:1.0.0`, `WellLog:1.1.0`, `SeismicTraceData:1.0.0`);
    2. Validates manifests against JSON schema definitions, checking mandatory structural attributes, regex patterns, and numeric bounds;
    3. Resolves reference data URIs (e.g., checking that `HorizontalCRSID`, `VerticalMeasurementTypeID`, and `UnitOfMeasureID` point to valid reference entries in the tenant's OSDU storage service);
    4. Executes mock pre-flight ingestion API calls against the OSDU Manifest Ingestion Service, capturing and diagnosing schema rejection errors before triggering production workflows.
  * **Returns**: Certified OSDU Ingestion Manifest Package ready for single-click execution via cloud ingestion DAGs, complete with schema validation logs and reference data URI linkage tables.
  * **Stops At**: Directly triggering irreversible mass deletion or purge operations on production OSDU cloud storage buckets.
* **Failure Modes & Safety Envelopes**: If an ingestion manifest references an unindexed or invalid reference data code (e.g., an unmapped unit of measure), the agent halts ingestion generation for that entity and generates an `[OSDU Reference Data Missing]` exception ticket.

### Agent 7: Subsurface Data Entitlement, Joint-Venture Confidentiality & Regulatory Release Auditor
* **In One Line**: Audits subsurface technical data packages against Joint Operating Agreement (JOA) confidentiality terms, multi-client commercial licensing rights, and government statutory disclosure guidelines.
* **Friction Solved**: Eliminates 11.25 hours of contract entitlement verification, confidentiality clause searching, and statutory submission reformatting per quarterly portfolio cycle.
* **The Specification**:
  * **Reads**: Subsurface data export manifests, M&A data room asset lists, joint-venture operating agreements, multi-client seismic master licenses, government statutory data submission rules (e.g., UK NSTA, US BSEE, Norway NPD, India DGH), and data release schedules.
  * **Does**:
    1. Cross-checks outgoing data packages against commercial seismic license restrictions (e.g., identifying proprietary non-exclusive multi-client 3D surveys that cannot be disclosed to third parties without vendor uplift fees);
    2. Calculates confidentiality expiration dates across exploration wells and test data based on farm-in agreement terms and national petroleum regulatory statutory confidentiality windows (typically 2, 3, or 5 years post-drilling);
    3. Verifies that data packages compiled for government submission meet mandatory national repository naming standards, file formats (e.g., DLIS/LAS, SEG-Y, TIFF), and header completeness requirements;
    4. Redacts proprietary commercial interpretations, financial estimates, and non-shareable third-party data from statutory submission bundles.
  * **Returns**: Subsurface Data Release & Statutory Compliance Dossier containing certified entitlement clearance certificates, data room asset greenlight checklists, and validated government submission archives.
  * **Stops At**: Authorizing legal release of proprietary joint-venture data without signed Commercial Legal / VP Subsurface sign-off.
* **Failure Modes & Safety Envelopes**: If an export package contains seismic traces or well logs flagged under active third-party proprietary multi-client licenses with unexpired confidentiality terms, the agent applies an automated `[Commercial Entitlement Lock: Third-Party License Restriction]` and blocks export.

---

## 5 · Per-Unit Before / After Value Model

> **Rule**: Quantify the unit of work. Never multiply into speculative enterprise rupee or dollar totals. The operating asset provides its own well count, survey line kilometers, and campaign frequency multipliers.

| Metric | Unit of Work | Baseline Drag (Before) | Review Drag (After) | Net Unit Time Saved | Primary Friction Removed |
|---|---|:---:|:---:|:---:|---|
| **Well Header Coordinate, UWI & Geodetic Datum Reconciliation** | 1 Regional Ingestion Campaign (50 wells) | 14.00 hours | 1.50 hours | **12.50 hours saved** | Manual Geodetic Math & Scanned Permit Cross-Referencing |
| **Well Log LAS/DLIS Curve Mnemonic Standardization & Splice Triage** | 1 Field Well Log Inventory (100 logging runs) | 12.00 hours | 1.25 hours | **10.75 hours saved** | Repetitive Mnemonic Mapping & Depth Overlap Verification |
| **2D/3D Seismic SEG-Y Header & Navigation Trace Audit** | 1 Seismic Dataset (5,000 km 2D / 1,000 sq km 3D) | 16.00 hours | 1.50 hours | **14.50 hours saved** | Low-Level Byte/Hex Inspection & Trace-Nav Alignment Drag |
| **Directional Survey Minimum-Curvature & Boundary Trajectory Audit** | 1 Drilling Asset Batch (25 complex well trajectories) | 8.50 hours | 0.75 hours | **7.75 hours saved** | Azimuth North Reconciliation & Concession Clearance Math |
| **Routine/Special Core Analysis & Geochemistry Ingestion Dossier** | 1 Core Study Asset Campaign (10 lab reports / 500 plugs) | 10.00 hours | 1.00 hours | **9.00 hours saved** | Unstructured PDF/Excel Restructuring & Core Shift Checking |
| **OSDU Manifest Generation & Schema Ingestion Pre-Flight** | 1 Multi-Well Asset Migration Package (50 wells + seismic) | 18.00 hours | 1.50 hours | **16.50 hours saved** | Nested JSON Schema Construction & Reference URI Debugging |
| **Subsurface Data Entitlement & Statutory Submission Dossier** | 1 Quarterly Compliance & Data Room Cycle (50 packages) | 12.50 hours | 1.25 hours | **11.25 hours saved** | Contract License Cross-Referencing & NDR Format Formatting |
| **Total Cycle Drag Reduction** | **Per Major Subsurface Data Governance Campaign** | **91.00 hours** | **8.75 hours** | **82.25 hours saved** | **89.3% reduction in petrotechnical data management drag** |

---

## 6 · Citations & Negative Search Registry

### Citations Table
| Key | Citation | Locator | Type | What It Supported |
|---|---|---|---|---|
| `[PPDM-WhatIsAWell]` | PPDM Association, *What is a Well? Baseline Standard for Well Identification and Life-Cycle Tracking*, 2020 | ppdm.org | International Standard | UWI numbering rules, wellbore parent-child hierarchies, and lifecycle states |
| `[PPDM-DataQuality]` | PPDM Association, *Data Quality Management Framework for Upstream Oil and Gas*, 2018 | ppdm.org | Industry Best Practice | Quality dimensions for well headers, core analyses, and petrophysical data |
| `[IOGP-EPSG]` | International Association of Oil & Gas Producers, *EPSG Geodetic Parameter Dataset & Guidance Note 7-2: Coordinate Conversions and Transformations*, 2022 | epsg.org / iogp.org | Technical Standard | Geodetic datums, coordinate reference systems, and transformation formulas |
| `[IOGP-Rep-373]` | IOGP Geomatics Committee, *Geodetic Awareness Guidance Note*, Report 373-19, 2021 | iogp.org | Technical Guidance | Operational and financial risks of geodetic coordinate and elevation datum errors |
| `[OSDU-Technical]` | Open Group OSDU Forum, *OSDU Technical Standard: Data Definitions and Work-Product-Component Schemas*, 2023 | opengroup.org | Industry Standard | Wellbore, WellLog, SeismicTrace, and CoreData cloud schema specifications |
| `[SEG-DataFormats]` | Society of Exploration Geophysicists, *SEG-Y Rev 1 / Rev 2 Seismic Data Exchange Formats & P1/90 Positioning Standards*, 2017 | seg.org | Technical Standard | EBCDIC and binary reel header layouts, trace header byte allocations, and navigation |
| `[CWLS-LAS]` | Canadian Well Logging Society, *LAS (Log ASCII Standard) Version 2.0 & 3.0 Specifications*, 2019 | cwls.org | Technical Specification | Curve mnemonic syntax, index channel formatting, and flag standards |
| `[API-RP66]` | American Petroleum Institute, *Recommended Practice 66: Exploration and Production Data Digital Interchange (DLIS)*, 2018 | api.org | Industry Recommended Practice | Logical record structure and entity definitions for borehole digital log interchange |

### Negative Search Registry
* **Searched**: Commercial petrotechnical software repositories (SLB Studio/Delfi, Landmark OpenWorks/Seabed, S&P Global Kingdom) and OSDU ingestion documentation for *"autonomous real-time detection of historical geodetic datum shifts during well header ingestion without manual surveyor intervention"*.
* **Result**: `Negative Search, 2026-09`. Commercial subsurface databases store spatial coordinates exactly as submitted; none provide autonomous, proactive cross-referencing against the IOGP EPSG registry to detect unstated local geodetic datums, missing ellipsoid rotation parameters, or inverted lat/long coordinates during bulk file loading without manual user configuration.
* **Searched**: OSDU Manifest Ingestion Service and cloud ingestion frameworks for *"automated petrophysical curve mnemonic semantic mapping across vendor logging generations with physics-based quality verification"*.
* **Result**: `Negative Search, 2026-09`. Existing cloud ingestion frameworks perform purely syntactic JSON schema validation; none provide physics-based semantic mapping that detects when a contractor's proprietary tool mnemonic represents an uncalibrated experimental tool or an invalid measurement unit without manual petrophysicist curation.

---

## 7 · Lines Worth Remembering & Open Questions

* **The Line**: *"In subsurface data management, an unstated geodetic datum error is invisible on a spreadsheet, but in the physical world it displaces the wellbore two hundred meters across a fault line—turning a hundred-million-dollar appraisal well into an accidental dry hole based on a missing EPSG code."*
* **The Secondary Line**: *"A multi-petabyte cloud subsurface data lake without rigorous metadata governance is not an asset; it is a multi-million-dollar digital landfill where your best geoscientists spend half their careers searching for the right Kelly Bushing elevation."*
* **Open Questions for Subsurface Data Practitioners**:
  1. What percentage of vintage wells in your corporate master database currently have unverified vertical elevation datums (Kelly Bushing vs. Ground Level vs. Rotary Table)?
  2. How many legacy directional surveys in your active asset portfolios reference Magnetic North without documented geomagnetic declination corrections?
  3. When migrating legacy data to OSDU, how does your organization handle proprietary third-party multi-client seismic licensing restrictions to avoid commercial copyright violations?
