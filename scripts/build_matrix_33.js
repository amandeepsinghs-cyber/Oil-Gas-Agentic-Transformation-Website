/* ─────────────────────────────────────────────────────────────────────────
   build_matrix_33.js — generates working_deck/data/matrix_33.js

   Feeds the rebuilt vulnerability board (page_07.html) from the persona
   research instead of the hand-written cells that predated it.

   33 personas x 15 operational actions = 495 cells.

   WHAT EACH FIELD COMES FROM
     row.name      persona title
     row.monolith  vendorGaps[0].product  -- the system of record that
                   already owns this work and still leaves the gap
     row.value     the three-savings model, recomputed here with the SAME
                   formulas dossier.html uses, from the SAME sheet
                   (data/value_model.js). Not copied, not re-derived.
     cell.name     action.action
     cell.vuln     action.failureMode
     cell.plug     the agent one-liner that addresses it
     cell.status   derived from action.friction (see FRICTION_CLASS)

   WHY THERE IS NO PER-CELL RUPEE FIGURE
     The old board put "Rs 35 Cr / yr" on every cell. That number cannot be
     derived: value rows are per AGENT (7 per persona) and cells are per
     ACTION (15 per persona), and only 57 of 495 actions carry an agentRef.
     Splitting a persona total 15 ways would be invention dressed as
     arithmetic. Money therefore sits on the ROW, where it is real and
     verified; the CELL carries the operational fact -- what fails, and what
     picks it up. That also matches what this slide is for: identifying and
     prioritising risk and friction, not pricing it cell by cell.

   Run:  node scripts/build_matrix_33.js
   ───────────────────────────────────────────────────────────────────────── */

"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

/* ── load the sheet and the corpus into a fake window ───────────────────── */
global.window = {};
require(path.join(ROOT, "data/value_model.js"));
require(path.join(ROOT, "data/personas/index.js"));

const INDEX = window.PERSONA_INDEX;
const VM     = window.VALUE_MODEL;
const SEATS  = window.VALUE_SEATS;
const ASSETS = window.ASSET_CAPITAL;
const RISKS  = window.ASSET_RISK;
const RECOV  = window.RESOURCE_RECOVERY || {};

const VALUE = {
  rate:      VM.rate      || 2500,
  yearHours: VM.yearHours || 1800,
  onTask:    VM.onTask    != null ? VM.onTask : 0.50,
  bblMargin: VM.bblMargin || 2500
};

INDEX.forEach(p => require(path.join(ROOT, "data/personas/" + p.id + ".js")));
const DETAIL = window.PERSONA_DETAIL;

/* ── the four levers — same formulas as dossier.html ────────────────────────
   PRODUCTIVITY / UPTIME / INTEGRITY / RECOVERY.

   These MUST stay identical to the engine in personas/dossier.html. If they
   drift, the board and the agent page quote different money for the same
   role, and the first person to notice will be in the room. */
function assetCapital(id) {            // UPTIME
  const a = ASSETS[id];
  if (!a) return 0;
  return a.form === "time"
    ? a.units * a.hoursPerYear * a.share * a.ratePerHour
    : a.qtyPerYear * a.share * a.ratePerQty;
}
function assetRisk(id) {               // INTEGRITY
  const r = RISKS[id];
  if (!r) return 0;
  return r.unitsPerYear * r.frequency * r.consequence * r.alpha * r.beta;
}
function resourceRecovery(id) {        // RECOVERY — the only upward term
  const r = RECOV[id];
  if (!r) return { inr: 0, bbl: 0 };
  const bbl = r.unitsPerYear * r.bblPerUnit * r.alpha * r.beta;
  return { inr: bbl * VALUE.bblMargin, bbl };
}
function squadValue(p) {
  const total = (p.valueModel && p.valueModel.total) || {};
  const seats = SEATS[p.id];
  if (!seats || !total.beforeHours) return null;
  const reduction = (total.beforeHours - total.afterHours) / total.beforeHours;
  const human = VALUE.yearHours * VALUE.onTask * reduction * seats * VALUE.rate;
  const asset = assetCapital(p.id);
  const risk  = assetRisk(p.id);
  const rec   = resourceRecovery(p.id);
  return {
    human, asset, risk,
    recov: rec.inr,
    bbl:   rec.bbl,
    total: human + asset + risk + rec.inr,
    seats, reduction
  };
}
const cr = n => Math.round((n / 1e7) * 10) / 10;

/* ── cell status from the friction tag ──────────────────────────────────────
   The board's semantic is OPERATIONAL RISK, so `judgment` is critical here
   even though dossier.html files it under "decision accuracy". Same data,
   two lenses -- the board legend states its own mapping so the two pages
   cannot silently disagree. */
const FRICTION_CLASS = {
  judgment:     "critical",
  traceability: "critical",
  integrity:    "critical",

  consistency:  "friction",
  calculation:  "friction",
  computation:  "friction",
  synthesis:    "friction",

  assembly:     "baseline",
  physical:     "baseline",
  volume:       "baseline",
  recall:       "baseline",
  waiting:      "baseline",
  execution:    "baseline"
};

/* ── who implements the step, after Gemini Enterprise ──────────────────────
   The research's own bucket, renamed into the language of the pitch. B1 is
   NOT "the agent does it" -- all 232 agents carry a stopsAt guard and every
   one of them hands the decision back. B1 means an agent does the assembly
   and the human still reviews and signs. */
const OWNER_OF   = { B1: "agentic", B2: "system", B3: "human" };
const OWNER_RANK = { agentic: 0, system: 1, human: 2 };
const OWNER_LABEL = {
  agentic: "Agent prepares, human decides",
  system:  "Existing system already runs it",
  human:   "Human, end to end"
};

/* ── six value-chain groups, matching the dossier filter chips ──────────── */
const GROUP_OF = {
  "Subsurface": "subsurface",
  "Wells & Rig Operations": "wells",
  "Field & Gathering": "field",
  "Midstream": "midstream",
  "Downstream Refining": "downstream"
};
function groupFor(seg) {
  if (!seg) return "crosscutting";
  const s = seg.toLowerCase();
  if (/subsurface|geoscience|reservoir|petrophys|geolog/.test(s)) return "subsurface";
  if (/well|rig|drilling|completion|intervention/.test(s))       return "wells";
  if (/field|gathering|production oper|surface/.test(s))         return "field";
  if (/midstream|pipeline|processing|marine|terminal/.test(s))   return "midstream";
  if (/downstream|refin|refinery|blend/.test(s))                 return "downstream";
  return "crosscutting";
}
const GROUP_LABEL = {
  subsurface:   "Subsurface",
  wells:        "Wells & Rig",
  field:        "Field & Gathering",
  midstream:    "Midstream",
  downstream:   "Downstream Refining",
  crosscutting: "Cross-Cutting"
};

/* ── shorten an action to something that survives a 15-column grid ──────── */
function shortAction(s) {
  if (!s) return "";
  return s.replace(/\s+/g, " ").trim();
}

/* ── who holds an action: an agent, or a human, by design ───────────────────
   This is the second dimension on the board, and the more credible one.

   The corpus does not merely fail to name an agent on some actions -- on 109
   of the 495 it returns an explicit verdict that begins "No." and then says
   why: life-safety authority, certified human sign-off, a closed control loop
   measured in milliseconds, or a scientific calculation the incumbent
   monolith already performs properly. Those are decisions, not gaps.

   Showing them is what stops the board reading as a vendor wishlist. A client
   who sees squares marked "a human holds this, deliberately" will believe the
   agented ones far more readily.

   Resolution order: agentRef -> "Agent N" leading agentLabel (any coverage
   marker such as a tick is skipped first) -> explicit refusal -> "Agent N"
   in agentNote -> unspecified.                                            */
function coverageFor(p, act) {
  const byN = n => (p.agents || []).find(a => a.n === Number(n)) || null;

  let hit = act.agentRef ? byN(act.agentRef) : null;

  if (!hit && act.agentLabel) {
    /* Skip any leading marker before the word "Agent". Labels arrive as
       "Agent 3", but also as "\u2714\u2714 Agent 3" -- the tick is a coverage
       marker, not prose. The old pattern anchored hard at "^Agent" and so
       could not see past the tick, which silently stranded 26 actions across
       P32 and P33. P32 Instrument Technician was the worst of it: 7 agents
       specified, 0 reachable from the board, on a Rs 239 Cr role.

       Still anchored, deliberately: [^A-Za-z]* permits markers and spaces but
       not words, so a label like "No, see Agent 3" cannot match here and is
       left to the refusal branch below. */
    const m = /^[^A-Za-z]*Agent\s+(\d+)/i.exec(act.agentLabel);
    if (m) hit = byN(m[1]);
  }

  const note = String(act.agentNote || "").trim();

  // an explicit refusal outranks a stray agent number later in the prose
  const refused = /^\s*(\u274C|\u2717|\u2718)?\s*No[.,\s]/i.test(note);

  if (!hit && !refused) {
    const m = /Agent\s+(\d+)/i.exec(note);
    if (m) hit = byN(m[1]);
  }

  /* "Covered in Agent 3", "Covered in Agent 1 / Agent 6" -- how the corpus
     says an action is folded into a squadmate instead of getting its own
     agent. The anchored pattern above cannot see these because the number
     does not lead, and the branch above reads agentNote rather than the
     label, so 13 actions across 9 personas resolved to nothing and rendered
     as "the research does not name an agent" on cells where it plainly does.

     Guarded on the label carrying no refusal marker, so "No, see Agent 3"
     and "\u274C (Monolith WELLPLAN)" still fall through to the branches below.
     Where the label names two ("Agent 1 / Agent 6") the first is taken --
     the action row keeps the full label, so the pair is still visible. */
  if (!hit && !refused && act.agentLabel) {
    const label = String(act.agentLabel);
    if (!/[\u274C\u2717\u2718]/.test(label) && !/^\s*No[.,\s]/i.test(label)) {
      const m = /Agent\s+(\d+)/i.exec(label);
      if (m) hit = byN(m[1]);
    }
  }

  if (refused) {
    return {
      coverage: "human",
      agent: null, agentN: null, plug: "",
      // strip the marker and the leading "No." so the page can show the reason
      because: note.replace(/^\s*(\u274C|\u2717|\u2718)?\s*No[.,]?\s*/i, "").trim()
    };
  }
  if (hit) {
    return {
      coverage: "agent",
      agent: hit.name, agentN: hit.n, plug: hit.oneLine || "",
      because: ""
    };
  }
  return { coverage: "open", agent: null, agentN: null, plug: "", because: "" };
}

/* ── build priority ─────────────────────────────────────────────────────────
   `status` above says how hard a step is. It says NOTHING about whether we
   should build for it, and conflating the two is what broke the board: of the
   126 cells the risk tag called critical, 94 sat on work we will never touch
   -- 60 already run inside the incumbent system of record, 34 are a person on
   a rig. Painting those red says "urgent" about somebody else's software.

   So priority is risk AND ownership. A cell earns colour only if it is ours
   to build (bucket B1). Everything else is uncoloured by construction, not by
   styling -- there is no combination of fields that can turn a monolith or a
   human step red.

     first   ours + critical   -> 32   build first
     next    ours + friction   -> 144  build next
     routine ours + baseline   -> 158  worth automating, not urgent
     ""      not ours          -> 161  never coloured

   The displacement argument -- "the incumbent is NOT doing a good job" -- is
   real but is a different claim, and it belongs to vendorGaps and the
   monolith column, not to this colour. Mixing the two is how we got here. */
const PRIO_OF = { critical: "first", friction: "next", baseline: "routine" };
const PRIO_LABEL = {
  first:   "Build first",
  next:    "Build next",
  routine: "Routine automation",
  "":      "Not a build target"
};

/* ── build ──────────────────────────────────────────────────────────────── */
const rows = [];
const tally = { critical: 0, friction: 0, baseline: 0 };
const prios = { first: 0, next: 0, routine: 0, "": 0 };
const cover  = { agent: 0, human: 0, open: 0 };
const owners = { agentic: 0, system: 0, human: 0 };
const unmapped = new Set();
let cellCount = 0;

INDEX.forEach((meta, i) => {
  const p = DETAIL[meta.id];
  const v = squadValue(p);
  const grp = groupFor(p.segment || meta.segment);

  const mix = { critical: 0, friction: 0, baseline: 0 };
  const cmix = { agent: 0, human: 0, open: 0 };
  const pmix = { first: 0, next: 0, routine: 0, "": 0 };

  const actions = (p.actions || []).map((act, j) => {
    const status = FRICTION_CLASS[act.friction] || (unmapped.add(act.friction), "baseline");
    mix[status]++; tally[status]++; cellCount++;
    const c = coverageFor(p, act);
    cmix[c.coverage]++; cover[c.coverage]++;

    /* Ownership gates priority. Only B1 -- ours to build -- can carry colour. */
    const own = OWNER_OF[act.bucket] || "human";
    const prio = own === "agentic" ? PRIO_OF[status] : "";
    pmix[prio]++; prios[prio]++;

    return {
      code:     act.code || "",
      name:     shortAction(act.action),
      status:   status,
      prio:     prio,
      friction: act.friction || "",
      /* what the step acts on: field 120 · well 118 · task 116 · estate 72 ·
         portfolio 27 · facility 20 · cargo 13 · battery 5 · lease 3 · asset 1.
         280 of 495 (57%) act on a physical thing, which is the evidence for
         "workflows", not just "workforce". */
      scope:    act.scope || "",
      own:      own,
      coverage: c.coverage,
      bucket:   act.bucket || "",
      freq:     act.freq || "",
      time:     act.time || "",
      today:    act.today || "",
      vuln:     act.failureMode || "",
      plug:     c.plug,
      agent:    c.agent || "",
      agentN:   c.agentN,
      because:  c.because,
      source:   act.source || ""
    };
  });

  /* Order every row the same way: what an agent prepares, then what the
     incumbent system already runs, then what stays human end to end.

     Safe to do -- the A01..A15 codes are an index and nothing more. No
     dossier states an ordering rule, and the corpus order is not
     chronological (P01's A10 is the pre-tour safety meeting, which happens
     before A01's end-of-shift report) nor grouped by owner (only 2 of the
     33 rows happen to run B1->B2->B3 already).

     The real A-code travels with the action and is shown in the detail
     panel, so nothing is lost by reordering. */
  actions.sort((x, y) => (OWNER_RANK[x.own] - OWNER_RANK[y.own]));
  const omix = { agentic: 0, system: 0, human: 0 };
  actions.forEach(a => { omix[a.own]++; owners[a.own]++; });

  rows.push({
    id:        meta.id,
    num:       meta.id.replace(/^P/, ""),
    name:      meta.title,
    person:    meta.person || "",
    aliases:   (meta.aliases || []).slice(0, 3),
    segment:   p.segment || meta.segment || "",
    group:     grp,
    groupLabel: GROUP_LABEL[grp],
    tier:      meta.tier || "",
    core20:    !!meta.core20,
    monolith:  (p.vendorGaps && p.vendorGaps[0] && p.vendorGaps[0].product) || "",
    thumb:     meta.thumb || "",
    agentCount: meta.agentCount || (p.agents ? p.agents.length : 0),
    unit:      (p.valueModel && p.valueModel.total && p.valueModel.total.unit) || "",
    savedHours: meta.savedHours || null,
    value: v ? {
      total: cr(v.total), human: cr(v.human),
      asset: cr(v.asset), risk: cr(v.risk), recov: cr(v.recov),
      bbl:   Math.round(v.bbl),
      seats: v.seats, reduction: Math.round(v.reduction * 100)
    } : null,
    mix: mix,
    cmix: cmix,
    pmix: pmix,
    omix: omix,
    actions: actions
  });
});

/* ── report ─────────────────────────────────────────────────────────────── */
if (unmapped.size) {
  console.error("UNMAPPED friction tags:", [...unmapped].join(", "));
  process.exitCode = 1;
}
const estate = rows.reduce((s, r) => s + (r.value ? r.value.total : 0), 0);
const pc = n => (n / cellCount * 100).toFixed(0) + "%";
console.log("rows           ", rows.length);
console.log("cells          ", cellCount);
console.log("risk status    ",
  `critical ${tally.critical} (${pc(tally.critical)}) · ` +
  `friction ${tally.friction} (${pc(tally.friction)}) · ` +
  `baseline ${tally.baseline} (${pc(tally.baseline)})`);
console.log("build queue    ",
  `first ${prios.first} · next ${prios.next} · ` +
  `routine ${prios.routine} · not ours ${prios[""]}`);
console.log("  (of ${n} critical, only the agentic ones are coloured)"
  .replace("${n}", tally.critical),
  `-> ${tally.critical - prios.first} reds suppressed as not ours`);
console.log("coverage       ",
  `agent ${cover.agent} (${pc(cover.agent)}) · ` +
  `human-held ${cover.human} (${pc(cover.human)}) · ` +
  `unspecified ${cover.open} (${pc(cover.open)})`);
console.log("implemented by ",
  `agentic ${owners.agentic} (${pc(owners.agentic)}) \u00b7 ` +
  `system ${owners.system} (${pc(owners.system)}) \u00b7 ` +
  `human ${owners.human} (${pc(owners.human)})`);
console.log("estate value   ", "Rs " + Math.round(estate) + " Cr/yr");
const byGroup = {};
rows.forEach(r => { byGroup[r.groupLabel] = (byGroup[r.groupLabel] || 0) + 1; });
console.log("groups         ", JSON.stringify(byGroup));

/* ── emit ───────────────────────────────────────────────────────────────── */
const banner =
`/* ─────────────────────────────────────────────────────────────────────────
   matrix_33.js — GENERATED. Do not hand-edit.
     source:    data/personas/*.js  +  data/value_model.js
     generator: scripts/build_matrix_33.js
     built:     ${new Date().toISOString()}

   ${rows.length} personas, ${cellCount} operational actions in total.
   Rows are ragged by design: each persona carries at least 15 actions, and
   some carry more. Column N is not comparable across rows -- every row is
   sorted by priority independently.
   status: critical ${tally.critical} · friction ${tally.friction} · baseline ${tally.baseline}
   estate: Rs ${Math.round(estate)} Cr/yr across the three savings

   Consumed by working_deck/pages/page_07.html via the pre-existing
   window.ENTERPRISE_MATRIX_DATA override hook.
   ───────────────────────────────────────────────────────────────────────── */

`;

const out = banner +
  "window.ENTERPRISE_MATRIX_DATA = " + JSON.stringify(rows, null, 1) + ";\n\n" +
  "window.ENTERPRISE_MATRIX_META = " + JSON.stringify({
    built: new Date().toISOString(),
    personas: rows.length,
    cells: cellCount,
    status: tally,
    prios: prios,
    prioLabel: PRIO_LABEL,
    owners: owners,
    ownerLabel: OWNER_LABEL,
    coverage: cover,
    estateCr: Math.round(estate),
    groups: GROUP_LABEL,
    frictionClass: FRICTION_CLASS
  }, null, 1) + ";\n";

const dest = path.join(ROOT, "working_deck/data/matrix_33.js");
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, out);
console.log("\nwrote          ", path.relative(ROOT, dest),
            "(" + (out.length / 1024).toFixed(0) + " KB)");
