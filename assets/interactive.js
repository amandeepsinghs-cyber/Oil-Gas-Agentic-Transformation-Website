/**
 * interactive.js — Interactive Controllers & Simulation Engine for Acts 00–04
 * Sovereign Oil & Gas Agentic Transformation Platform
 */

/* ==========================================================================
   ACT 00: COMMAND COCKPIT & DISCOVERY AGENT
   ========================================================================== */

function toggleHeroCockpitDemo() {
  const drawer = document.getElementById('hero-cockpit-drawer');
  if (!drawer) return;
  drawer.style.display = drawer.style.display === 'none' ? 'block' : 'none';
}

function setHeroQuery(type, e) {
  if (e) e.stopPropagation();
  const promptText = document.getElementById('hero-prompt-text');
  const drawer = document.getElementById('hero-cockpit-drawer');
  const drawerBody = document.getElementById('hero-drawer-body');
  const drawerStatus = document.getElementById('hero-drawer-status');
  const drawerTimestamp = document.getElementById('hero-drawer-timestamp');

  if (type === 'barmer') {
    if (promptText) promptText.innerText = '"Audit cross-pad NPT risk across Barmer Pad 4 and flag mudlog gas anomalies..."';
    if (drawerBody) drawerBody.innerHTML = 'Scanned 14 offset wells in Barmer Basin. Found <strong>2 undocumented gas kicks</strong> in legacy 1998 mudlogs. Alerted drilling engineer and updated pore-pressure model before spudding Pad 4. <strong>Avoided estimated ₹45 Cr sidetrack.</strong>';
    if (drawerStatus) drawerStatus.innerText = 'OFFSET MUDLOG SENTINEL // DRILLING RISK MITIGATED';
    if (drawerTimestamp) drawerTimestamp.innerText = 'LATENCY: 510ms · 14 WELLS RETRIEVED VIA VECTOR SEARCH';
  } else if (type === 'splicing') {
    if (promptText) promptText.innerText = '"Kansas Well A-12: Align Runs 1, 2, and 3 LAS wireline logs and verify overlap..."';
    if (drawerBody) drawerBody.innerHTML = 'Dispatched SciPy cross-correlation engine over Kansas Well A-12. Recovered <strong>-1.829m depth shift</strong> on Run 2 with Pearson <strong>r = 0.9899</strong>. Continuous 1,200m composite generated in <strong>3.2 seconds</strong> with zero manual fatigue.';
    if (drawerStatus) drawerStatus.innerText = 'PETROPHYSICAL SPLICING AGENT // SUB-SECOND CONVERGENCE';
    if (drawerTimestamp) drawerTimestamp.innerText = 'LATENCY: 3.2s · DETERMINISTIC NUMPY/SCIPY PROVENANCE';
  } else if (type === 'cdu') {
    if (promptText) promptText.innerText = '"Refinery CDU: Synchronize real-time crude assay with distillation cut schedule..."';
    if (drawerBody) drawerBody.innerHTML = 'Detected 36-hour delay in lab assay for incoming heavy sour parcel. Synthetic NIR agent projected true API gravity & sulfur content within 0.15% error, preventing <strong>₹12 Cr/month yield downgrade</strong> to atmospheric residue.';
    if (drawerStatus) drawerStatus.innerText = 'REFINERY BLEND OPTIMIZER // CDU YIELD RECOVERED';
    if (drawerTimestamp) drawerTimestamp.innerText = 'LATENCY: 280ms · CRUDE DISTILLATION UNIT STABILIZED';
  } else if (type === 'pipeline') {
    if (promptText) promptText.innerText = '"HVJ Gas Pipeline: Predict compressor station fuel gas optimization under peak draw..."';
    if (drawerBody) drawerBody.innerHTML = 'Hydraulic transient agent simulated 1,800 km HVJ pipeline network. Balanced linepack pressure at Vijaipur station, saving <strong>₹8.4 Cr annually</strong> in compression fuel consumption while honoring delivery pressure commitments.';
    if (drawerStatus) drawerStatus.innerText = 'PIPELINE HYDRAULICS SENTINEL // LINEPACK BALANCED';
    if (drawerTimestamp) drawerTimestamp.innerText = 'LATENCY: 340ms · TRANSIENT PRESSURE MODEL SOLVED';
  }

  if (drawer) drawer.style.display = 'block';
}

/* ==========================================================================
   ACT 01: MACRO-CAPITAL STAKES & COMPOUNDING MICRO-FRICTION
   ========================================================================== */

const act1DomainData = {
  upstream: {
    tag: "ACTIVE SPREAD TELEMETRY // OFFSHORE & DEEPWATER",
    risk: "CAPITAL BURN: CONTINUOUS",
    title: "Deepwater Asset Spread & Concession Gravity",
    desc: "Once an exploratory rig mobilizes (₹25–100 Cr/well) or an offshore concession PSC is executed, capital burn is continuous. A 12-hour analytical wait or 1.5m wireline misalignment immediately triggers tens of crores in rig standby and remedial cementing.",
    bg: "assets/media/retail_agentic/image10.png",
    m1Val: "14.2%", m1Sub: "Waiting on evaluations",
    m2Val: "36–48 Hrs", m2Sub: "Per multi-run log",
    m3Val: "₹500 Cr", m3Sub: "Per complex wildcat",
    seams: [
      {
        title: "1.5m Cable Stretch & Log Depth Misalignment", cost: "₹85 Cr Impact",
        desc: "Petrophysicist manually nudges tie-in curves under fatigue; casing seat selected 1.5m too shallow into permeable fracture.",
        s1: "Centimeter curve offset in Run 2 tie-in",
        s2: "Casing shoe set in permeable shale streak",
        s3: "Pressure test failure & remedial cement squeeze"
      },
      {
        title: "4-Hour Shift Handover Email Waiting Queue", cost: "$25,000 NPT Burn",
        desc: "Rig waiting on town office composite log confirmation; offshore spread sits in full idle standby during crew change.",
        s1: "Analyst exports DLIS to local drive at 18:00",
        s2: "Night superintendent halts drilling without sign-off",
        s3: "12 hours standby day-rate burned with zero footage"
      },
      {
        title: "Buried Mudlog Gas Ratio Anomalies in Scanned PDFs", cost: "₹45 Cr Sidetrack",
        desc: "Gas peak noted in 1994 well report missed during offset review; kick causes drillstring stuck in hole.",
        s1: "Mudlog PDF buried in unstructured archive folder",
        s2: "Underbalanced overpressure zone drilled unprepared",
        s3: "Kick influx, pipe stuck, forced mechanical sidetrack"
      },
      {
        title: "Uncalibrated Dual Induction Tool Gain Drift", cost: "₹120 Cr Hydrocarbon Bias",
        desc: "Tool environmental drift uncorrected across run boundaries; false high water saturation calculated.",
        s1: "0.91x tool gain drift ignored in legacy LAS file",
        s2: "Water saturation (Sw) calculated at 48% vs 24%",
        s3: "Commercial hydrocarbon pay zone bypassed and abandoned"
      }
    ]
  },
  midstream: {
    tag: "PIPELINE & LNG NETWORK TELEMETRY",
    risk: "THROUGHPUT DERATING RISK",
    title: "Cross-Country Pipeline & LNG Liquefaction Gravity",
    desc: "Gas transmission networks and cryogenic LNG trains run at razor-thin margins where compressor trip latencies or unpredicted hydrate plugs trigger massive downstream curtailments.",
    bg: "assets/media/retail_agentic/image8.png",
    m1Val: "4.8 hrs", m1Sub: "Hydrate detection lag",
    m2Val: "$180k/hr", m2Sub: "LNG train trip burn",
    m3Val: "₹45 Cr", m3Sub: "Pipeline curtailment fine",
    seams: [
      {
        title: "Unsynchronized Compressor Station Telemetry", cost: "₹38 Cr Trip",
        desc: "SCADA temperature spike at booster station 4 missed; vibration excursion trips main gas trunkline.",
        s1: "Bearing thermal drift unflagged by batched SCADA",
        s2: "Centrifugal compressor auto-trips on vibration high",
        s3: "Trunkline pressure wave forces upstream field choke"
      },
      {
        title: "LNG Boil-Off Gas (BOG) Optimization Lag", cost: "$65,000/Day",
        desc: "Ambient marine temperature shift unmodeled in real-time; re-liquefaction plant vents excess gas.",
        s1: "2°C diurnal ambient rise uncoupled from BOG model",
        s2: "Subcooler capacity lags cryogenic tank pressure",
        s3: "High-value methane flared to atmosphere"
      },
      {
        title: "Pipeline Nominations vs Gas Quality Mismatch", cost: "₹18 Cr Penalty",
        desc: "Off-spec CO2 slug enters distribution grid unnoticed due to 4-hour chromatograph lab latency.",
        s1: "Upstream sweetening unit amine breakthrough",
        s2: "City gate chromatograph flags out-of-spec delivery",
        s3: "Offtake contracts penalized and shut down"
      },
      {
        title: "Marine Vessel Loading Berth Deadweight Delay", cost: "$42,000 Demurrage",
        desc: "Customs manifest and tank level reconciliation performed via manual spreadsheet copy-paste.",
        s1: "Manual tank ullage calculation dispute",
        s2: "Vessel turnaround window missed by 90 minutes",
        s3: "Demurrage charges compound per charter party"
      }
    ]
  },
  downstream: {
    tag: "REFINING & PETROCHEMICAL OPTIMIZATION",
    risk: "MARGIN CRACK COMPRESSION",
    title: "Refinery Complex Turnaround & Margin Volatility",
    desc: "A 300,000 BPD refinery processes crude in continuous equilibrium. A 24-hour turnaround slippage burns ₹50-100 Cr, while uncoordinated crude assay shifts bleed millions in degraded yields.",
    bg: "assets/media/retail_agentic/image7.png",
    m1Val: "₹75 Cr/Day", m1Sub: "Turnaround slip burn",
    m2Val: "36 Hrs", m2Sub: "Crude assay lab lag",
    m3Val: "₹180 Cr", m3Sub: "Annual catalyst poisoning",
    seams: [
      {
        title: "Crude Assay Delay vs Distillation Cut Points", cost: "₹14 Cr/Month",
        desc: "Lab assay for incoming high-TAN crude delayed; CDU runs conservative cuts, shifting kerosene to gasoil.",
        s1: "Lab assay reports TAN and sulfur 36 hours late",
        s2: "Tower profile runs suboptimal tray temperatures",
        s3: "High-value jet fuel cracked into low-margin fuel oil"
      },
      {
        title: "FCCU Catalyst Poisoning from Heavy Metals", cost: "₹42 Cr Turnaround",
        desc: "Nickel and Vanadium ppm spikes in feed undetected; fluid catalytic cracking catalyst deactivates.",
        s1: "Transient vacuum gas oil slug contains 8 ppm Nickel",
        s2: "Catalyst micro-activity drops 15% in regenerator",
        s3: "Unplanned emergency shutdown for catalyst changeout"
      },
      {
        title: "Steam & Power Co-Generation Imbalance", cost: "₹8.5 Cr/Quarter",
        desc: "High-pressure steam header venting while auxiliary boilers fire natural gas under manual supervisory control.",
        s1: "Hydrogen plant trip vents 40 bar steam to atmosphere",
        s2: "Boiler dispatch logic not linked to real-time grid",
        s3: "Severe thermal fuel waste and carbon tax exposure"
      },
      {
        title: "Hydrotreater Bed Hotspot Hydrogen Quench Lag", cost: "₹28 Cr Excursion",
        desc: "Exothermic temperature excursion detected only after bed delta-T exceeds operating limits.",
        s1: "Coking precursor initiates local thermal runaway",
        s2: "Quench hydrogen valve modulation delayed by 4 minutes",
        s3: "Reactor emergency trip and coked catalyst bed"
      }
    ]
  },
  commercial: {
    tag: "GLOBAL COMMODITY & RISK ARBITRAGE",
    risk: "BALANCE SHEET PRICE EXPOSURE",
    title: "Crude Procurement & Cargo Arbitrage Gravity",
    desc: "Global energy trading desks commit hundreds of millions of dollars on single VLCC fixtures. Analytical latency in crack-spread visibility or freight demurrage erodes entire operating margins.",
    bg: "assets/media/wip/image78.png",
    m1Val: "$450k", m1Sub: "Per VLCC demurrage slip",
    m2Val: "1.8%", m2Sub: "Arbitrage margin decay",
    m3Val: "₹95 Cr", m3Sub: "FX & basis mismatch",
    seams: [
      {
        title: "Freight Optimization & Demurrage Exposure", cost: "$520,000/Cargo",
        desc: "Port congestion and terminal pumping rates unsynchronized with charter party laytime agreements.",
        s1: "Discharge berth queue extends past allowable laytime",
        s2: "Charter party dispute on weather delay clauses",
        s3: "Massive liquidated damages paid to shipowners"
      },
      {
        title: "Crack Spread Hedging Execution Lag", cost: "₹32 Cr Basis Loss",
        desc: "Refinery product slate adjustments not mirrored in paper derivative hedges due to batch ETRM sync.",
        s1: "Physical CDU yields adjusted for winter diesel demand",
        s2: "Risk management system updates ledger at end-of-day",
        s3: "Intraday crude price swing erodes crack margin"
      },
      {
        title: "Contractual Force Majeure & Deviation Claims", cost: "₹65 Cr Exposure",
        desc: "Geopolitical shipping lane rerouting costs calculated via manual legal review across 400-page contracts.",
        s1: "Red Sea freight diversion adds 14 sailing days",
        s2: "Contract clauses across multiple buyers conflict",
        s3: "Unrecovered bunker fuel surcharges and arbitration"
      },
      {
        title: "Carbon Offset & Tax Reconciliation Seams", cost: "₹15 Cr/Year",
        desc: "Scope 1 and Scope 2 emissions data reconciled in disparate spreadsheets, missing trading arbitrage.",
        s1: "Monthly flaring and venting logs batched late",
        s2: "Compliance carbon credits purchased at spot premium",
        s3: "Penalties for non-compliance with domestic mandates"
      }
    ]
  }
};

let act1CurrentDomain = 'upstream';

function switchAct1Domain(domain) {
  act1CurrentDomain = domain;
  const data = act1DomainData[domain];
  if (!data) return;

  const btnIds = ['upstream', 'midstream', 'downstream', 'commercial'];
  btnIds.forEach(id => {
    const btn = document.getElementById(`act1-btn-${id}`);
    if (btn) {
      if (id === domain) {
        btn.classList.add('active');
        btn.style.background = 'rgba(0,163,255,0.15)';
        btn.style.borderColor = 'var(--security-azure)';
        btn.style.color = '#FFF';
      } else {
        btn.classList.remove('active');
        btn.style.background = 'transparent';
        btn.style.borderColor = 'var(--border-hairline)';
        btn.style.color = 'var(--text-muted)';
      }
    }
  });

  const tagEl = document.getElementById('act1-badge-tag');
  const riskEl = document.getElementById('act1-risk-badge');
  const titleEl = document.getElementById('act1-domain-title');
  const descEl = document.getElementById('act1-domain-desc');
  const bgImg = document.getElementById('act1-bg-image');

  if (tagEl) tagEl.innerText = data.tag;
  if (riskEl) riskEl.innerText = data.risk;
  if (titleEl) titleEl.innerText = data.title;
  if (descEl) descEl.innerText = data.desc;
  if (bgImg) bgImg.src = data.bg;

  const m1V = document.getElementById('act1-m1-val');
  const m1S = document.getElementById('act1-m1-sub');
  const m2V = document.getElementById('act1-m2-val');
  const m2S = document.getElementById('act1-m2-sub');
  const m3V = document.getElementById('act1-m3-val');
  const m3S = document.getElementById('act1-m3-sub');

  if (m1V) m1V.innerText = data.m1Val;
  if (m1S) m1S.innerText = data.m1Sub;
  if (m2V) m2V.innerText = data.m2Val;
  if (m2S) m2S.innerText = data.m2Sub;
  if (m3V) m3V.innerText = data.m3Val;
  if (m3S) m3S.innerText = data.m3Sub;

  data.seams.forEach((seam, idx) => {
    const sTitle = document.getElementById(`act1-seam-${idx}-title`);
    const sCost = document.getElementById(`act1-seam-${idx}-cost`);
    const sDesc = document.getElementById(`act1-seam-${idx}-desc`);
    if (sTitle) sTitle.innerText = seam.title;
    if (sCost) sCost.innerText = seam.cost;
    if (sDesc) sDesc.innerText = seam.desc;
  });

  selectAct1Seam(0);
}

function selectAct1Seam(index) {
  const data = act1DomainData[act1CurrentDomain];
  if (!data || !data.seams[index]) return;

  for (let i = 0; i < 4; i++) {
    const card = document.getElementById(`act1-seam-${i}`) || document.getElementById(`s1-seam-${i}`);
    if (card) {
      if (i === index) {
        card.classList.add('active');
        card.style.background = 'rgba(0,163,255,0.08)';
        card.style.borderColor = 'var(--security-azure)';
      } else {
        card.classList.remove('active');
        card.style.background = 'rgba(255,255,255,0.02)';
        card.style.borderColor = 'var(--border-hairline)';
      }
    }
  }

  const seam = data.seams[index];
  const lbl = document.getElementById('act1-cascade-lbl') || document.getElementById('s1-cascade-lbl');
  const s1 = document.getElementById('act1-step-1') || document.getElementById('s1-step-1');
  const s2 = document.getElementById('act1-step-2') || document.getElementById('s1-step-2');
  const s3 = document.getElementById('act1-step-3') || document.getElementById('s1-step-3');

  if (lbl) lbl.innerText = `CASCADE EVENT TRACE // SEAM 0${index + 1}`;
  if (s1) s1.innerText = seam.s1;
  if (s2) s2.innerText = seam.s2;
  if (s3) s3.innerText = seam.s3;
}

function updateAct1Slider(val) {
  const hours = parseInt(val, 10);
  const hourlyRateLakhs = 12; // ₹12 Lakhs/hr avg deepwater spread rate
  const totalBurnLakhs = hours * hourlyRateLakhs;
  const sliderVal = document.getElementById('act1-slider-val') || document.getElementById('s1-slider-val');
  const sliderLoss = document.getElementById('act1-slider-loss') || document.getElementById('s1-slider-loss');

  if (sliderVal) sliderVal.innerText = `${hours} Hours Standby`;
  if (sliderLoss) {
    if (totalBurnLakhs >= 100) {
      const cr = (totalBurnLakhs / 100).toFixed(2);
      sliderLoss.innerText = `Estimated Spread Standby Burn: ₹${cr} Crores`;
    } else {
      sliderLoss.innerText = `Estimated Spread Standby Burn: ₹${totalBurnLakhs} Lakhs`;
    }
  }
}

// Aliases for Stage 01 naming (s1)
const s1DomainData = act1DomainData;
let s1CurrentDomain = 'upstream';

function switchS1Domain(domain) {
  s1CurrentDomain = domain;
  switchAct1Domain(domain);

  // Synchronize s1- buttons if present
  const btnIds = ['upstream', 'midstream', 'downstream', 'commercial'];
  btnIds.forEach(id => {
    const btn = document.getElementById(`s1-btn-${id}`);
    if (btn) {
      if (id === domain) {
        btn.classList.add('active');
        btn.style.background = 'rgba(0,163,255,0.15)';
        btn.style.borderColor = 'var(--security-azure)';
        btn.style.color = '#FFF';
      } else {
        btn.classList.remove('active');
        btn.style.background = 'transparent';
        btn.style.borderColor = 'var(--border-hairline)';
        btn.style.color = 'var(--text-muted)';
      }
    }
  });

  const data = act1DomainData[domain];
  if (!data) return;

  const tagEl = document.getElementById('s1-badge-tag');
  const riskEl = document.getElementById('s1-risk-badge');
  const titleEl = document.getElementById('s1-domain-title');
  const descEl = document.getElementById('s1-domain-desc');
  const bgImg = document.getElementById('s1-bg-image');

  if (tagEl) tagEl.innerText = data.tag;
  if (riskEl) riskEl.innerText = data.risk;
  if (titleEl) titleEl.innerText = data.title;
  if (descEl) descEl.innerText = data.desc;
  if (bgImg) bgImg.src = data.bg;

  const m1V = document.getElementById('s1-m1-val');
  const m1S = document.getElementById('s1-m1-sub');
  const m2V = document.getElementById('s1-m2-val');
  const m2S = document.getElementById('s1-m2-sub');
  const m3V = document.getElementById('s1-m3-val');
  const m3S = document.getElementById('s1-m3-sub');

  if (m1V) m1V.innerText = data.m1Val;
  if (m1S) m1S.innerText = data.m1Sub;
  if (m2V) m2V.innerText = data.m2Val;
  if (m2S) m2S.innerText = data.m2Sub;
  if (m3V) m3V.innerText = data.m3Val;
  if (m3S) m3S.innerText = data.m3Sub;

  data.seams.forEach((seam, idx) => {
    const sTitle = document.getElementById(`s1-seam-${idx}-title`);
    const sCost = document.getElementById(`s1-seam-${idx}-cost`);
    const sDesc = document.getElementById(`s1-seam-${idx}-desc`);
    if (sTitle) sTitle.innerText = seam.title;
    if (sCost) sCost.innerText = seam.cost;
    if (sDesc) sDesc.innerText = seam.desc;
  });

  selectS1Seam(0);
}

function selectS1Seam(index) {
  selectAct1Seam(index);
}

function updateS1Slider(val) {
  updateAct1Slider(val);
}


/* ==========================================================================
   ACT 02: 3D SWISS CHEESE BARRIER MODEL & SENTINEL FORTIFICATION
   ========================================================================== */

let act2CurrentState = 'legacy';
let act2SelectedLayer = 2;

const act2LayerData = {
  1: {
    tag: "INSPECTING TIER 01 // SENSORS & INGESTION",
    title: "Raw Sensor & Wireline Ingestion Seam",
    platform: "<strong>Schlumberger / Halliburton Wireline Trucks:</strong> Outputs gigabytes of raw DLIS/LAS files via satellite to base office. Formats differ by service contractor.",
    gap: "Tool environmental drift and temperature calibration curves uncorrected across vendor handoffs. Batch ingest ignores header curve mnemonic mismatches.",
    sol: "Cloud Storage Ingestion Sentinel automatically crawls incoming LAS files, standardizes SPWLA mnemonics, and validates parity before engineer download.",
    cost: "₹18 Cr Data Reprocessing & Standby",
    speed: "Sub-Second Ingestion"
  },
  2: {
    tag: "INSPECTING TIER 02 // PETROPHYSICS",
    title: "Multi-Run Curve Splicing Seam",
    platform: "<strong>Techlog (SLB) & OpenWorks (Halliburton):</strong> Premier specialized petrophysics suites. Outstanding for individual well analysis, but blind to unmonitored cross-system handovers.",
    gap: "Wireline runs 1 & 2 spliced manually by visual drag-and-drop. Cable stretch causes a 1.5-meter depth shift across the tie-in casing shoe. Unnoticed in batch review.",
    sol: "Autonomous Splicing Agent automatically executes SciPy multi-window cross-correlation. Aligns Run 2 within 2.9 cm variance in 3.2 seconds. Commits SHA-256 audit row to BigQuery.",
    cost: "₹85 Cr Remedial Casing Squeeze",
    speed: "3.2 Seconds"
  },
  3: {
    tag: "INSPECTING TIER 03 // GEOMODELING",
    title: "Seismic-to-Simulation Static Handover Seam",
    platform: "<strong>Petrel (SLB) & RMS (Roxar):</strong> Industry standard 3D earth modeling suites. Cellular grids contain tens of millions of cells.",
    gap: "Depth-shifted petrophysical logs fed directly into 3D structural grid. Fault blocks incorrectly correlated; structural closure overestimated by 8 meters.",
    sol: "Geomodel Sentinel runs multi-well closure verification against seismic horizons, automatically flagging depth discrepancies prior to dynamic simulation runs.",
    cost: "₹150 Cr Suboptimal Well Placement",
    speed: "Continuous Sentinel Audit"
  },
  4: {
    tag: "INSPECTING TIER 04 // DRILLING EXECUTION",
    title: "Wellsite Target & Casing Shoe Placement Seam",
    platform: "<strong>Landmark Compass & Sysdrill:</strong> Rig directional drilling guidance and bottom hole assembly monitoring.",
    gap: "Rig spuds targeting flawed casing shoe depth. Drill bit penetrates high-pressure permeable shale prematurely without weighted mud. Well kick forces sidetrack.",
    sol: "Drilling Advisory Agent monitors live real-time mud-log and MWD telemetry against offset wells, alerting company man 4 hours before high-pressure transition.",
    cost: "₹500 Cr Lost Wellbore / Sidetrack",
    speed: "Real-Time Telemetry Alarm"
  }
};

function setAct2State(state) {
  act2CurrentState = state;
  const btnLegacy = document.getElementById('act2-btn-legacy');
  const btnAgentic = document.getElementById('act2-btn-agentic');
  const laserBeam = document.getElementById('act2-laser-beam');
  const blockedBeam = document.getElementById('act2-blocked-beam');
  const liveStatus = document.getElementById('act2-live-status');
  const badgeRect = document.getElementById('act2-badge-rect');
  const badgeTitle = document.getElementById('act2-badge-title');
  const badgeSub = document.getElementById('act2-badge-sub');

  if (state === 'agentic') {
    if (btnAgentic) {
      btnAgentic.classList.add('active');
      btnAgentic.style.background = 'rgba(0,210,180,0.18)';
      btnAgentic.style.borderColor = 'var(--security-turquoise)';
      btnAgentic.style.color = '#FFF';
    }
    if (btnLegacy) {
      btnLegacy.classList.remove('active');
      btnLegacy.style.background = 'transparent';
      btnLegacy.style.borderColor = 'var(--border-hairline)';
      btnLegacy.style.color = 'var(--text-muted)';
    }

    if (laserBeam) laserBeam.style.display = 'none';
    if (blockedBeam) blockedBeam.style.display = 'block';

    for (let i = 1; i <= 4; i++) {
      const shield = document.getElementById(`act2-shield-${i}`);
      const shieldTxt = document.getElementById(`act2-shield-txt-${i}`);
      if (shield) shield.style.display = 'block';
      if (shieldTxt) shieldTxt.style.display = 'block';
    }

    if (liveStatus) {
      liveStatus.innerText = 'VULNERABILITY LEVEL: 0% RISK // AGENTIC SENTINELS ACTIVE';
      liveStatus.style.color = 'var(--security-mint)';
    }

    if (badgeRect) {
      badgeRect.setAttribute('fill', 'rgba(0,210,180,0.25)');
      badgeRect.setAttribute('stroke', '#00D2B4');
    }
    if (badgeTitle) {
      badgeTitle.setAttribute('fill', '#CCFBF1');
      badgeTitle.textContent = 'AUTONOMOUS SENTINEL INTERCEPTION';
    }
    if (badgeSub) {
      badgeSub.setAttribute('fill', '#FFFFFF');
      badgeSub.textContent = '100% Capital Margin Safeguarded';
    }

    const vulnPill = document.getElementById('act2-hud-vuln-pill');
    if (vulnPill) {
      vulnPill.innerText = 'SEAM SECURED';
      vulnPill.style.color = 'var(--security-mint)';
      vulnPill.style.background = 'rgba(0,210,180,0.15)';
      vulnPill.style.borderColor = 'rgba(0,210,180,0.4)';
    }
  } else {
    if (btnLegacy) {
      btnLegacy.classList.add('active');
      btnLegacy.style.background = 'rgba(239,68,68,0.18)';
      btnLegacy.style.borderColor = 'var(--nebula-crimson)';
      btnLegacy.style.color = '#FFF';
    }
    if (btnAgentic) {
      btnAgentic.classList.remove('active');
      btnAgentic.style.background = 'transparent';
      btnAgentic.style.borderColor = 'var(--border-hairline)';
      btnAgentic.style.color = 'var(--text-muted)';
    }

    if (laserBeam) laserBeam.style.display = 'block';
    if (blockedBeam) blockedBeam.style.display = 'none';

    for (let i = 1; i <= 4; i++) {
      const shield = document.getElementById(`act2-shield-${i}`);
      const shieldTxt = document.getElementById(`act2-shield-txt-${i}`);
      if (shield) shield.style.display = 'none';
      if (shieldTxt) shieldTxt.style.display = 'none';
    }

    if (liveStatus) {
      liveStatus.innerText = 'VULNERABILITY LEVEL: 100% EXPOSED // LATENT HOLES ALIGNED';
      liveStatus.style.color = 'var(--nebula-crimson)';
    }

    if (badgeRect) {
      badgeRect.setAttribute('fill', 'rgba(239,68,68,0.25)');
      badgeRect.setAttribute('stroke', '#EF4444');
    }
    if (badgeTitle) {
      badgeTitle.setAttribute('fill', '#FEE2E2');
      badgeTitle.textContent = 'UNNOTICED CUMULATIVE DRIFT';
    }
    if (badgeSub) {
      badgeSub.setAttribute('fill', '#FFFFFF');
      badgeSub.textContent = '₹100 Cr+ Capital Lost';
    }

    const vulnPill = document.getElementById('act2-hud-vuln-pill');
    if (vulnPill) {
      vulnPill.innerText = 'SEAM OPEN';
      vulnPill.style.color = 'var(--nebula-crimson)';
      vulnPill.style.background = 'rgba(239,68,68,0.15)';
      vulnPill.style.borderColor = 'rgba(239,68,68,0.3)';
    }
  }
}

function selectAct2Layer(tierNum) {
  act2SelectedLayer = tierNum;
  const data = act2LayerData[tierNum];
  if (!data) return;

  const tag = document.getElementById('act2-hud-layer-tag');
  const title = document.getElementById('act2-hud-layer-title');
  const platform = document.getElementById('act2-hud-platform');
  const gap = document.getElementById('act2-hud-gap');
  const sol = document.getElementById('act2-hud-sol');
  const cost = document.getElementById('act2-hud-cost');
  const speed = document.getElementById('act2-hud-speed');

  if (tag) tag.innerText = data.tag;
  if (title) title.innerText = data.title;
  if (platform) platform.innerHTML = data.platform;
  if (gap) gap.innerText = data.gap;
  if (sol) sol.innerText = data.sol;
  if (cost) cost.innerText = data.cost;
  if (speed) speed.innerText = data.speed;
}

/* ==========================================================================
   ACT 03: LIVING PROOF // WELL A-12 SPLICING STUDIO
   ========================================================================== */

function nudgeAct3Depth(val) {
  const offsetMeters = (val / 10).toFixed(3);
  const run2Group = document.getElementById('act3-run2-group');
  const res2Group = document.getElementById('act3-res2-group');
  const sonic2Group = document.getElementById('act3-sonic2-group');

  if (run2Group) run2Group.setAttribute('transform', `translate(0, ${val})`);
  if (res2Group) res2Group.setAttribute('transform', `translate(0, ${val})`);
  if (sonic2Group) sonic2Group.setAttribute('transform', `translate(0, ${val})`);

  const sliderDisplay = document.getElementById('act3-slider-display');
  const depthVal = document.getElementById('act3-depth-val');
  const pearsonVal = document.getElementById('act3-pearson-val');
  const termOffset = document.getElementById('act3-term-offset');
  const termR = document.getElementById('act3-term-r');

  if (sliderDisplay) sliderDisplay.innerText = `Offset: ${offsetMeters > 0 ? '+' : ''}${offsetMeters} m`;
  if (depthVal) depthVal.innerText = `${offsetMeters > 0 ? '+' : ''}${offsetMeters} m`;

  const distanceToPerfect = Math.abs(val - 0);
  let r = Math.max(0.65, 0.9899 - (distanceToPerfect * 0.015)).toFixed(4);

  if (pearsonVal) {
    pearsonVal.innerText = `r = ${r}`;
    pearsonVal.style.color = r > 0.95 ? 'var(--security-mint)' : (r > 0.85 ? 'var(--nebula-amber)' : 'var(--nebula-crimson)');
  }
  if (termOffset) termOffset.innerText = `${offsetMeters > 0 ? '+' : ''}${offsetMeters} m`;
  if (termR) {
    termR.innerText = `r = ${r}`;
    termR.style.color = r > 0.95 ? 'var(--security-mint)' : 'var(--nebula-crimson)';
  }
}

function autoCorrelateAct3() {
  const slider = document.getElementById('act3-depth-slider');
  if (!slider) return;

  slider.value = 0;
  nudgeAct3Depth(0);

  const termSha = document.getElementById('act3-term-sha');
  const depthVal = document.getElementById('act3-depth-val');
  if (depthVal) {
    depthVal.innerText = '0.029 m (2.9 cm)';
    depthVal.style.color = 'var(--security-mint)';
  }
  if (termSha) {
    termSha.innerHTML = '<span style="color: var(--security-mint);">SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 [VERIFIED_AUDIT_COMMIT]</span>';
  }
}

/* ==========================================================================
   ACT 04: ENTERPRISE FLEET & SOVEREIGN DISCOVERY WORKSHOP
   ========================================================================== */

let act4SelectedAsset = 'Barmer Basin (Onshore Rajasthan)';

function selectAct4Asset(assetKey) {
  const assets = ['barmer', 'mumbai', 'cambay'];
  assets.forEach(key => {
    const btn = document.getElementById(`act4-asset-${key}`);
    if (btn) {
      if (key === assetKey) {
        btn.classList.add('active');
        btn.style.background = 'rgba(0, 163, 255, 0.1)';
        btn.style.borderColor = 'var(--security-azure)';
      } else {
        btn.classList.remove('active');
        btn.style.background = 'rgba(255,255,255,0.02)';
        btn.style.borderColor = 'var(--border-hairline)';
      }
    }
  });
}

function authorizeAct4Pilot() {
  const btn = document.getElementById('act4-btn-auth');
  const statusPill = document.getElementById('act4-status-pill');
  const sigBlock = document.getElementById('act4-sig-block');
  const sigHash = document.getElementById('act4-sig-hash');

  if (btn) {
    btn.style.background = 'linear-gradient(90deg, #10B981 0%, #059669 100%)';
    btn.innerText = '✓ CHARTER AUTHORIZED & REGISTERED';
  }
  if (statusPill) {
    statusPill.innerText = 'STATUS: LIGHTHOUSE PILOT AUTHORIZED';
    statusPill.style.color = 'var(--security-mint)';
    statusPill.style.borderColor = 'var(--security-mint)';
    statusPill.style.background = 'rgba(16, 185, 129, 0.15)';
  }
  if (sigBlock) {
    sigBlock.style.display = 'block';
  }
  if (sigHash) {
    const hash = '0x' + Math.random().toString(16).substr(2, 8).toUpperCase() + '...' + Math.random().toString(16).substr(2, 6).toUpperCase();
    sigHash.innerText = `> AUTH_HASH: ${hash} [VERIFIED]`;
  }
}

/* ==========================================================================
   15-SLIDE MODULAR DECK INTERACTIVE CONTROLLERS
   ========================================================================== */

function updateS1Loss(hours) {
  const delayVal = document.getElementById('s1-delay-val');
  const rigCost = document.getElementById('s1-rig-cost');
  const prodLoss = document.getElementById('s1-prod-loss');
  const totalLoss = document.getElementById('s1-total-loss');

  const h = parseFloat(hours);
  if (delayVal) delayVal.innerText = `${h.toFixed(1)} Hours`;

  // $150k/day rig rate ~ Rs 1.25 Cr/day ~ Rs 5.2 Lakhs/hour
  const rigAmount = (h * 5.2).toFixed(1);
  const prodAmount = (h * 10.4).toFixed(1);
  const totalAmount = (h * 15.6).toFixed(1);

  if (rigCost) rigCost.innerText = `₹${rigAmount} Lakhs`;
  if (prodLoss) prodLoss.innerText = `₹${prodAmount} Lakhs`;
  if (totalLoss) totalLoss.innerText = `₹${totalAmount} Lakhs`;
}

const hazardData = {
  cable_stretch: {
    tag: "VULNERABILITY INSPECTOR // WIRELINE LOGGING",
    title: "Petrophysics: Wireline Cable Stretch Depth Offset",
    desc: "Multiple wireline logging runs have 0.5–1.5m depth offsets caused by cable tension and borehole drag. Splicing manually in Techlog takes 2–3 hours. Under fatigue, misaligned depths risk setting casing shoes in permeable water zones or missing pay zones.",
    exposure: "$150,000 / Day Rig NPT Standby + Risk of misplaced casing shoe point.",
    agent: "Autonomous Subsurface Log Splicing Agent (Google ADK on Cloud Run)"
  },
  offset_kick: {
    tag: "VULNERABILITY INSPECTOR // BASIN MODELING",
    title: "Geology: Unindexed Offset Well Gas Kicks",
    desc: "40 legacy offset well mudlogs remain trapped in dark PDF repositories. Geologists rely on personal memory to recall historical overpressure pockets, risking drilling into shallow gas kicks unprepared.",
    exposure: "₹45–80 Crore sidetrack and drillstring stuck-in-hole recovery.",
    agent: "Unstructured Subsurface Knowledge Retriever (Gemini Enterprise Multimodal)"
  },
  bit_wear: {
    tag: "VULNERABILITY INSPECTOR // REAL-TIME DRILLING",
    title: "Drilling Ops: Delayed Bit Dulling & ROP Degradation",
    desc: "Surface drilling telemetry arrives continuously, but detecting cutter loss and vibration dysfunction takes 2 to 4 hours of manual cross-referencing, causing premature bit destruction downhole.",
    exposure: "$300,000 extra round-trip pipe tripping time (36+ hours).",
    agent: "Real-Time Drilling Hydraulics & Mechanics Sentinel (Cloud Run Serverless)"
  },
  choke_latency: {
    tag: "VULNERABILITY INSPECTOR // WELLHEAD FLOW",
    title: "Production: Choke Nodal Stabilization Delay",
    desc: "When manifold pressure surges, calculating the optimal choke trim while preventing gas hydrate formation requires 90 minutes of manual nodal spreadsheet calculations, triggering slugging.",
    exposure: "Deferred production barrels (₹1.5–3 Cr/week) + hydrate risk.",
    agent: "Autonomous Production Flow Assurance Sentinel"
  },
  cdu_blend: {
    tag: "VULNERABILITY INSPECTOR // DOWNSTREAM REFINING",
    title: "Refining: CDU Heavy/Light Crude Blend Lag",
    desc: "Unpredictable crude parcel assay variations take 36 hours of lab tests to verify. Distillation unit runs sub-optimally, degrading high-value naphtha into atmospheric residue.",
    exposure: "₹25–100 Crore margin erosion per delayed turnaround cycle.",
    agent: "Synthetic Near-Infrared Crude Assay & CDU Optimizer"
  }
};

function selectHazard(key) {
  const data = hazardData[key];
  if (!data) return;

  const tag = document.getElementById('hazard-tag');
  const title = document.getElementById('hazard-title');
  const desc = document.getElementById('hazard-desc');
  const exp = document.getElementById('hazard-exposure');
  const agent = document.getElementById('hazard-agent');

  if (tag) tag.innerText = data.tag;
  if (title) title.innerText = data.title;
  if (desc) desc.innerText = data.desc;
  if (exp) exp.innerText = data.exposure;
  if (agent) agent.innerText = data.agent;
}

function updateSplicingManual(val) {
  const shift = parseFloat(val);
  const label = document.getElementById('s11-shift-label');
  const curveGroup = document.getElementById('s11-curve-group');
  const accVal = document.getElementById('s11-acc-val');
  const rVal = document.getElementById('s11-r-val');

  if (label) label.innerText = `${shift > 0 ? '+' : ''}${shift.toFixed(2)} m`;
  
  if (curveGroup) {
    const yPx = Math.round(shift * 15);
    curveGroup.setAttribute('transform', `translate(0, ${yPx})`);
  }

  const offsetFromOptimal = Math.abs(shift - 0);
  const r = Math.max(0.60, 0.9899 - (offsetFromOptimal * 0.12)).toFixed(4);
  const varianceCm = (offsetFromOptimal * 100 + 2.9).toFixed(1);

  if (accVal) accVal.innerText = `${varianceCm} cm`;
  if (rVal) {
    rVal.innerText = `r = ${r}`;
    rVal.style.color = r > 0.95 ? 'var(--security-mint)' : (r > 0.85 ? 'var(--nebula-amber)' : 'var(--nebula-crimson)');
  }
}

function triggerAutoSplicing() {
  const slider = document.getElementById('s11-shift-slider');
  if (slider) {
    slider.value = 0;
  }
  updateSplicingManual(0);

  const label = document.getElementById('s11-shift-label');
  const accVal = document.getElementById('s11-acc-val');
  const rVal = document.getElementById('s11-r-val');
  const timeVal = document.getElementById('s11-time-val');

  if (label) label.innerText = "0.00 m (Perfect)";
  if (accVal) {
    accVal.innerText = "2.9 cm";
    accVal.style.color = "var(--security-mint)";
  }
  if (rVal) {
    rVal.innerText = "r = 0.9899";
    rVal.style.color = "var(--security-mint)";
  }
  if (timeVal) {
    timeVal.innerText = "3.2 s";
    timeVal.style.color = "var(--security-azure)";
  }
}

function generateCharter() {
  const sel = document.getElementById('s14-asset-select');
  const asset = sel ? sel.options[sel.selectedIndex].text : 'Barmer Basin';
  alert(`Boardroom Charter Generated for ${asset}.\n\nScope: Sovereign Discovery Workshop\nTarget: Autonomous Wireline Splicing & Offset Risk Indexing\nResidency: 100% MeitY India Sovereign Cloud`);
}

/* Swiss Cheese Model State Controller (Slide 02) */
function setCheeseState(state) {
  const btnLegacy = document.getElementById('s2-btn-legacy');
  const btnAgentic = document.getElementById('s2-btn-agentic');
  const imgBaseline = document.getElementById('s2-img-baseline');
  const imgFortified = document.getElementById('s2-img-fortified');
  const headlineAccent = document.getElementById('s2-headline-accent');
  const statusPill = document.getElementById('s2-status-pill');
  const hudBadge = document.getElementById('s2-hud-badge');
  const plugOverlay = document.getElementById('s2-plug-overlay');
  const dominoStrip = document.getElementById('s2-domino-strip');
  const dominoText = document.getElementById('s2-domino-text');
  const dominoBadge = document.getElementById('s2-domino-badge');

  const tiers = [1, 2, 3, 4].map(i => ({
    card: document.getElementById(`s2-tier-${i}`),
    badge: document.getElementById(`s2-tier-${i}-badge`),
    title: document.getElementById(`s2-tier-${i}-title`),
    metric: document.getElementById(`s2-tier-${i}-metric`),
    desc: document.getElementById(`s2-tier-${i}-desc`)
  }));

  if (state === 'agentic') {
    if (btnAgentic) {
      btnAgentic.classList.add('active');
      btnAgentic.style.background = 'rgba(0, 210, 180, 0.25)';
      btnAgentic.style.borderColor = 'rgba(0, 210, 180, 0.6)';
      btnAgentic.style.color = '#FFF';
    }
    if (btnLegacy) {
      btnLegacy.classList.remove('active');
      btnLegacy.style.background = 'transparent';
      btnLegacy.style.borderColor = 'transparent';
      btnLegacy.style.color = 'var(--text-dim)';
    }
    if (imgFortified) imgFortified.style.opacity = '1';
    if (imgBaseline) imgBaseline.style.opacity = '0.12';
    if (plugOverlay) plugOverlay.style.display = 'flex';
    if (headlineAccent) {
      headlineAccent.style.color = 'var(--security-mint)';
      headlineAccent.innerText = 'Permanently sealed at source by deterministic physics plugs.';
    }
    if (statusPill) {
      statusPill.innerHTML = `
        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--security-mint); box-shadow: 0 0 12px var(--security-mint);"></span>
        <span style="color: var(--security-mint);">🛡 ACTIVE SOVEREIGN DEFENSE · RAY INTERCEPTED AT SOURCE · ZERO STUCK PIPE (0 NPT)</span>
      `;
    }
    if (hudBadge) {
      hudBadge.style.borderColor = 'rgba(0, 210, 180, 0.5)';
      hudBadge.innerHTML = `
        <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--security-mint); box-shadow: 0 0 8px var(--security-mint);"></span>
        <span style="color: #FFF; font-weight: 700;">VECTOR DEFENSE:</span>
        <span style="color: var(--security-mint);">DETERMINISTIC PLUGS ACTIVE ➔ FAILURE RAY INTERCEPTED (CENTIMETER-PERFECT SHOE · 0 NPT)</span>
      `;
    }
    if (dominoStrip) {
      dominoStrip.style.background = 'rgba(0, 210, 180, 0.08)';
      dominoStrip.style.borderColor = 'rgba(0, 210, 180, 0.3)';
    }
    if (dominoText) {
      dominoText.innerHTML = `
        <span style="color: var(--security-mint); font-weight: 900;">AGENTIC INTERCEPTION AT SOURCE:</span>
        <span style="color: #FFF;">01 PDF-TO-LAS & BQ AGENT</span>
        <span style="color: var(--security-mint);">➔</span>
        <span style="color: #FFF;">02 DETERMINISTIC SPLICE</span>
        <span style="color: var(--security-mint);">➔</span>
        <span style="color: #FFF;">03 LIVE RIG SENTINEL</span>
        <span style="color: var(--security-mint);">➔</span>
        <span style="color: var(--security-mint); font-weight: 900;">04 CENTIMETER-PERFECT CASING (0 NPT · ₹50+ CR SAVED)</span>
      `;
    }
    if (dominoBadge) {
      dominoBadge.style.color = 'var(--security-mint)';
      dominoBadge.style.background = 'rgba(0, 210, 180, 0.15)';
      dominoBadge.style.borderColor = 'rgba(0, 210, 180, 0.4)';
      dominoBadge.innerText = 'EVERY SEAM MATHEMATICALLY SEALED';
    }

    // Tier 1: PDF-to-BigQuery / LAS Ingestion Agent
    if (tiers[0].card) tiers[0].card.style.borderColor = 'rgba(0, 210, 180, 0.4)';
    if (tiers[0].badge) {
      tiers[0].badge.style.background = 'rgba(0, 210, 180, 0.18)';
      tiers[0].badge.style.borderColor = 'rgba(0, 210, 180, 0.5)';
      tiers[0].badge.style.color = 'var(--security-mint)';
      tiers[0].badge.innerText = 'PLUG 01: ACTIVE';
    }
    if (tiers[0].title) tiers[0].title.innerHTML = '<span style="color: var(--security-mint);">PDF-to-LAS & BigQuery Agent</span>';
    if (tiers[0].metric) {
      tiers[0].metric.style.color = 'var(--security-mint)';
      tiers[0].metric.innerText = '42ms Parse · GCS Bucket & BigQuery';
    }
    if (tiers[0].desc) tiers[0].desc.innerText = 'Extracts legacy 2004 PDF mudlogs into clean LAS format stored in GCS bucket and indexed in BigQuery—instantly alerting well planners of gas zones.';

    // Tier 2: Deterministic Splice Agent (Built)
    if (tiers[1].card) tiers[1].card.style.borderColor = 'rgba(0, 210, 180, 0.4)';
    if (tiers[1].badge) {
      tiers[1].badge.style.background = 'rgba(0, 210, 180, 0.18)';
      tiers[1].badge.style.borderColor = 'rgba(0, 210, 180, 0.5)';
      tiers[1].badge.style.color = 'var(--security-mint)';
      tiers[1].badge.innerText = 'PLUG 02: ACTIVE';
    }
    if (tiers[1].title) tiers[1].title.innerHTML = '<span style="color: var(--security-mint);">Deterministic Splice Agent (Built)</span>';
    if (tiers[1].metric) {
      tiers[1].metric.style.color = 'var(--security-mint)';
      tiers[1].metric.innerText = '3.2s Exec · SciPy Match (r = 0.9899)';
    }
    if (tiers[1].desc) tiers[1].desc.innerText = 'Pre-built deterministic SciPy engine calculates cable stretch dynamics, removing the 1.48m error with millimeter-precision curve correlation.';

    // Tier 3: Rig Handover Sentinel
    if (tiers[2].card) tiers[2].card.style.borderColor = 'rgba(0, 210, 180, 0.4)';
    if (tiers[2].badge) {
      tiers[2].badge.style.background = 'rgba(0, 210, 180, 0.18)';
      tiers[2].badge.style.borderColor = 'rgba(0, 210, 180, 0.5)';
      tiers[2].badge.style.color = 'var(--security-mint)';
      tiers[2].badge.innerText = 'PLUG 03: ACTIVE';
    }
    if (tiers[2].title) tiers[2].title.innerHTML = '<span style="color: var(--security-mint);">Live WITSML Rig Sentinel</span>';
    if (tiers[2].metric) {
      tiers[2].metric.style.color = 'var(--security-mint)';
      tiers[2].metric.innerText = 'Real-Time WITSML Push · 0ms Lag';
    }
    if (tiers[2].desc) tiers[2].desc.innerText = 'Streams live depth corrections directly to driller consoles across 3:00 AM shift changeovers, eliminating communication lag entirely.';

    // Tier 4: Zero-Defect Operational Barrier / 100% Protected
    if (tiers[3].card) tiers[3].card.style.borderColor = 'rgba(0, 210, 180, 0.6)';
    if (tiers[3].badge) {
      tiers[3].badge.style.background = 'rgba(0, 210, 180, 0.25)';
      tiers[3].badge.style.borderColor = 'rgba(0, 210, 180, 0.6)';
      tiers[3].badge.style.color = '#FFF';
      tiers[3].badge.innerText = '100% PROTECTED';
    }
    if (tiers[3].title) tiers[3].title.innerHTML = '<span style="color: var(--security-mint);">Governed Casing Barrier Gate</span>';
    if (tiers[3].metric) {
      tiers[3].metric.style.color = 'var(--security-mint)';
      tiers[3].metric.innerText = '0 NPT · Zero Blowout Risk';
    }
    if (tiers[3].desc) {
      tiers[3].desc.style.color = '#CBD5E1';
      tiers[3].desc.innerText = 'Failure ray intercepted at source. Casing shoe seats with millimeter precision in solid caprock—preventing kicks, stuck pipe, and saving ₹50+ Cr.';
    }

  } else {
    if (btnLegacy) {
      btnLegacy.classList.add('active');
      btnLegacy.style.background = 'rgba(239, 68, 68, 0.25)';
      btnLegacy.style.borderColor = 'rgba(239, 68, 68, 0.5)';
      btnLegacy.style.color = '#FFF';
    }
    if (btnAgentic) {
      btnAgentic.classList.remove('active');
      btnAgentic.style.background = 'transparent';
      btnAgentic.style.borderColor = 'transparent';
      btnAgentic.style.color = 'var(--text-dim)';
    }
    if (imgFortified) imgFortified.style.opacity = '0';
    if (imgBaseline) imgBaseline.style.opacity = '1';
    if (plugOverlay) plugOverlay.style.display = 'none';
    if (headlineAccent) {
      headlineAccent.style.color = 'var(--nebula-crimson)';
      headlineAccent.innerText = 'It’s the quiet alignment of invisible gaps.';
    }
    if (statusPill) {
      statusPill.innerHTML = `
        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: var(--nebula-crimson); box-shadow: 0 0 10px var(--nebula-crimson);"></span>
        <span>🔴 CRITICAL EXPOSURE · 4 LATENT GAPS ALIGNED TO CASING FAILURE</span>
      `;
    }
    if (hudBadge) {
      hudBadge.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      hudBadge.innerHTML = `
        <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--nebula-crimson); box-shadow: 0 0 8px var(--nebula-crimson);"></span>
        <span style="color: #FFF; font-weight: 700;">VECTOR PATH:</span>
        <span style="color: var(--nebula-crimson);">2004 MUDLOG ARCHIVE ➔ 1.48M SPLICING SHIFT ➔ 3:00 AM HANDOVER ➔ 2M CASING SHOE MISPLACEMENT ➔ ₹50+ CR NPT</span>
      `;
    }
    if (dominoStrip) {
      dominoStrip.style.background = 'rgba(239, 68, 68, 0.08)';
      dominoStrip.style.borderColor = 'rgba(239, 68, 68, 0.25)';
    }
    if (dominoText) {
      dominoText.innerHTML = `
        <span style="color: var(--nebula-crimson); font-weight: 900;">HOW DISASTER COMPOUNDS:</span>
        <span style="color: #FFF;">01 UNREAD PDF HAZARD</span>
        <span style="color: var(--nebula-crimson);">➔</span>
        <span style="color: #FFF;">02 1.5M CABLE STRETCH</span>
        <span style="color: var(--nebula-crimson);">➔</span>
        <span style="color: #FFF;">03 4-HR SHIFT EMAIL LAG</span>
        <span style="color: var(--nebula-crimson);">➔</span>
        <span style="color: var(--nebula-crimson); font-weight: 900;">04 SHOE IN FRACTURE ZONE (₹50+ CR NPT)</span>
      `;
    }
    if (dominoBadge) {
      dominoBadge.style.color = 'var(--nebula-amber)';
      dominoBadge.style.background = 'rgba(245, 158, 11, 0.15)';
      dominoBadge.style.borderColor = 'rgba(245, 158, 11, 0.3)';
      dominoBadge.innerText = 'UNMONITORED SEAM ALIGNMENT';
    }

    // Tier 1 Reset
    if (tiers[0].card) tiers[0].card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    if (tiers[0].badge) {
      tiers[0].badge.style.background = 'rgba(239, 68, 68, 0.15)';
      tiers[0].badge.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      tiers[0].badge.style.color = 'var(--nebula-crimson)';
      tiers[0].badge.innerText = 'LATENT GAP';
    }
    if (tiers[0].title) tiers[0].title.innerText = 'Scanned Mudlog in Dark PDF';
    if (tiers[0].metric) {
      tiers[0].metric.style.color = 'var(--nebula-amber)';
      tiers[0].metric.innerText = '2004 Offset Well · 0 Searchability';
    }
    if (tiers[0].desc) tiers[0].desc.innerText = 'A 2004 offset mudlog identified a high-pressure gas zone at 3,250m. Trapped in an unindexed PDF archive, it went unread during well planning.';

    // Tier 2 Reset
    if (tiers[1].card) tiers[1].card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    if (tiers[1].badge) {
      tiers[1].badge.style.background = 'rgba(239, 68, 68, 0.15)';
      tiers[1].badge.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      tiers[1].badge.style.color = 'var(--nebula-crimson)';
      tiers[1].badge.innerText = 'LATENT GAP';
    }
    if (tiers[1].title) tiers[1].title.innerText = 'Wireline Cable Stretch';
    if (tiers[1].metric) {
      tiers[1].metric.style.color = 'var(--nebula-amber)';
      tiers[1].metric.innerText = '1.48m Manual Approximation';
    }
    if (tiers[1].desc) tiers[1].desc.innerText = 'Wireline cable stretch shifted depth readings by 1.48m. Eyeballed manually, the protective caprock boundary was assumed 1.5m deeper than reality.';

    // Tier 3 Reset
    if (tiers[2].card) tiers[2].card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    if (tiers[2].badge) {
      tiers[2].badge.style.background = 'rgba(239, 68, 68, 0.15)';
      tiers[2].badge.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      tiers[2].badge.style.color = 'var(--nebula-crimson)';
      tiers[2].badge.innerText = 'LATENT GAP';
    }
    if (tiers[2].title) tiers[2].title.innerText = '3:00 AM Shift Changeover';
    if (tiers[2].metric) {
      tiers[2].metric.style.color = 'var(--nebula-amber)';
      tiers[2].metric.innerText = '4-Hour Communication Lag';
    }
    if (tiers[2].desc) tiers[2].desc.innerText = 'During the 3:00 AM shift swap, the updated hazard depth was lost in email. The rig crew continued drilling ahead for 4 hours without knowing the danger window.';

    // Tier 4 Reset
    if (tiers[3].card) tiers[3].card.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    if (tiers[3].badge) {
      tiers[3].badge.style.background = 'rgba(239, 68, 68, 0.25)';
      tiers[3].badge.style.borderColor = 'rgba(239, 68, 68, 0.5)';
      tiers[3].badge.style.color = '#FFF';
      tiers[3].badge.innerText = 'CRITICAL INCIDENT';
    }
    if (tiers[3].title) tiers[3].title.innerHTML = '<span style="color: var(--nebula-crimson);">Casing Shoe Landed in Gas Zone</span>';
    if (tiers[3].metric) {
      tiers[3].metric.style.color = 'var(--nebula-crimson)';
      tiers[3].metric.innerText = '₹50+ Cr Loss · Kick & Stuck Pipe';
    }
    if (tiers[3].desc) {
      tiers[3].desc.style.color = '#FCA5A5';
      tiers[3].desc.innerText = 'With a cumulative 2m error, the casing shoe landed directly into the fractured gas sand instead of solid rock—causing an uncontrollable kick and stuck drillstring.';
    }
  }
}


