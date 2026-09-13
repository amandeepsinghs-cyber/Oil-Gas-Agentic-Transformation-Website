#!/usr/bin/env python3
"""
extract_persona_research.py — turn the persona research dossiers into deck data.

Reads:   persona_research/persona_research_output/P*.md   (33 dossiers)
         persona_research/persona_research_output/HOLISTIC_PERSONA_LIST.md
Writes:  data/persona_research.json   (inspectable)
         data/persona_research.js     (window.PERSONA_RESEARCH, consumed by the deck)

This script is ADDITIVE and NON-DESTRUCTIVE. It reads the research corpus and
writes two new files. It never touches an existing deck file, and it never
writes back into persona_research/.

Phase 1 (profile pages) consumes `agents` and `valueModel`.
Phase 2 (chessboard)    consumes `actions` — 15 per persona, the same
                        cardinality as today's 20x15 matrix.

Usage
-----
    python3 scripts/extract_persona_research.py --only P04        # pilot
    python3 scripts/extract_persona_research.py                   # all 33
    python3 scripts/extract_persona_research.py --only P04 --report
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
RESEARCH_DIR = REPO / "persona_research" / "persona_research_output"
ROSTER_FILE = RESEARCH_DIR / "HOLISTIC_PERSONA_LIST.md"
OUT_JSON = REPO / "data" / "persona_research.json"
OUT_JS = REPO / "data" / "persona_research.js"

EXPECTED_ACTIONS = 15

# Portraits are named by research id -- P04 -> personas/avatars/P04_persona.jpg.
# There is deliberately no lookup table: the filename IS the id, so nothing can
# drift out of sync with the dataset. A role with no portrait simply has no
# file, and the page falls back to a monogram.

# ──────────────────────────────────────────────────────────────────────────
# Persona names
#
# A human name per persona, chosen to match the person in that persona's
# portrait. These are illustrative -- they give the deck a face and a name to
# talk about, nothing more. This dict is the single place to edit them.
# ──────────────────────────────────────────────────────────────────────────
PERSONA_PEOPLE: dict[str, str] = {
    "P01": "Mark Dawson",        "P02": "Priya Raghavan",
    "P03": "Elena Duarte",       "P04": "Karim Haddad",
    "P05": "Arjun Nair",         "P06": "Daniel Chen",
    "P07": "Marcus Boateng",     "P08": "Leila Nasser",
    "P09": "Nia Okafor",         "P10": "Mei-Ling Chan",
    "P11": "Jun Park",           "P12": "Rina Suryani",
    "P13": "Claire Whitfield",   "P14": "Samuel Adeyemi",
    "P15": "Tariq Rahman",       "P16": "Rohit Menon",
    "P17": "Yvonne Mensah",      "P18": "Soraya Khalil",
    "P19": "Peter Lindqvist",    "P20": "Hannah Reid",
    "P21": "Ananya Deshpande",   "P22": "Kenji Nakamura",
    "P23": "Thandiwe Mokoena",   "P24": "Tom Brennan",
    "P25": "Diego Ferreira",     "P26": "Nadia Farouk",
    "P27": "Sanjay Iyer",        "P28": "Gloria Baptiste",
    "P29": "Hana Yoshida",       "P30": "Ian MacLeod",
    "P31": "André Laurent",      "P32": "Ridwan Santoso",
    "P33": "Sophie Larsen",
}



# ──────────────────────────────────────────────────────────────────────────
# Text normalisation
# ──────────────────────────────────────────────────────────────────────────

# The corpus uses inline LaTeX heavily ($\phi$, $S_w$, $\Delta\rho$). Rendered
# raw in HTML that reads as literal dollar signs and backslashes, so we convert
# the symbols that actually occur and strip the delimiters from the rest.
_MATH_SYMBOLS = {
    r"\phi": "φ", r"\Phi": "Φ", r"\rho": "ρ", r"\Delta": "Δ", r"\delta": "δ",
    r"\sigma": "σ", r"\mu": "μ", r"\lambda": "λ", r"\alpha": "α", r"\beta": "β",
    r"\gamma": "γ", r"\theta": "θ", r"\omega": "ω", r"\pi": "π", r"\eta": "η",
    r"\tau": "τ", r"\epsilon": "ε", r"\times": "×", r"\pm": "±", r"\approx": "≈",
    r"\leq": "≤", r"\geq": "≥", r"\le": "≤", r"\ge": "≥", r"\neq": "≠",
    r"\cdot": "·", r"\to": "→",
    r"\%": "%", r"\,": " ", r"\;": " ", r"\ ": " ",
}


def _demath(fragment: str) -> str:
    """Convert one inside-dollars LaTeX fragment to readable unicode."""
    s = fragment
    # Flatten braced sub/superscripts FIRST. \frac{P_{down}}{P_{up}} has nested
    # braces, which a non-greedy {([^}]*)} pair cannot match; collapsing
    # P_{down} -> Pdown first leaves \frac{Pdown}{Pup}, which it can.
    s = re.sub(r"_\{([^{}]*)\}", r"\1", s)
    s = re.sub(r"\^\{([^{}]*)\}", r"^\1", s)
    s = re.sub(r"\\frac\{([^{}]*)\}\{([^{}]*)\}", r"\1 / \2", s)
    s = re.sub(r"\\text\{([^{}]*)\}", r"\1", s)
    s = re.sub(r"\\mathrm\{([^{}]*)\}", r"\1", s)
    # Longest key first so e.g. \Delta is never shadowed by a shorter prefix.
    # The trailing \s? absorbs the space LaTeX needs after a command name, so
    # "$\Delta z$" becomes "Δz" rather than "Δ z".
    for tex in sorted(_MATH_SYMBOLS, key=len, reverse=True):
        s = re.sub(re.escape(tex) + r"\s?", _MATH_SYMBOLS[tex], s)
    # subscripts / superscripts: S_w -> Sw, \phi_{core} -> φcore, 10^{-3} -> 10^-3
    s = re.sub(r"_\{([^}]*)\}", r"\1", s)
    s = re.sub(r"_([A-Za-z0-9])", r"\1", s)
    s = re.sub(r"\^\{([^}]*)\}", r"^\1", s)
    s = s.replace("{", "").replace("}", "")
    s = re.sub(r"\\([A-Za-z]+)", r"\1", s)  # any unmapped command -> bare word
    return s.strip()


# The corpus writes literal currency as an escaped dollar: "\$80k to \$250k".
# Those must be hidden before we scan for $...$ math spans, or the scanner
# reads the money as a delimiter pair and mangles the sentence.
_DOLLAR_SENTINEL = "\u0000USD\u0000"


def demath(text: str) -> str:
    """Replace every $...$ span in a string with readable unicode.

    Six dossiers (P07, P08, P09, P11, P16, P20) contain an odd number of `$`
    delimiters -- malformed LaTeX in the source. Left alone, the pairing slips
    and swallows characters mid-sentence. So if anything is still unconverted
    after the paired pass, drop the stray delimiter and clean what remains.
    """
    if not text or "$" not in text:
        return text
    protected = text.replace(r"\$", _DOLLAR_SENTINEL)
    converted = re.sub(r"\$([^$]+)\$", lambda m: _demath(m.group(1)), protected)
    if "$" in converted or re.search(r"\\[A-Za-z]", converted):
        converted = _demath(converted.replace("$", ""))
    return converted.replace(_DOLLAR_SENTINEL, "$")


def clean(text: str) -> str:
    """Normalise a cell or sentence for display: demath, unwrap, collapse space."""
    if text is None:
        return ""
    s = text.replace("\r", "")
    s = demath(s)
    s = s.replace("`", "")
    s = re.sub(r"\*\*(.+?)\*\*", r"\1", s)      # bold
    s = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"\1", s)  # italic
    s = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", s)  # md links -> label
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def strip_md(text: str) -> str:
    """Lighter clean: keep the text, drop only the decoration."""
    return clean(text)


# ──────────────────────────────────────────────────────────────────────────
# Markdown helpers
# ──────────────────────────────────────────────────────────────────────────

def split_cells(line: str) -> list[str]:
    """Split a markdown table row into cells, honouring escaped pipes."""
    body = line.strip()
    if body.startswith("|"):
        body = body[1:]
    if body.endswith("|"):
        body = body[:-1]
    parts, buf, esc = [], [], False
    for ch in body:
        if esc:
            buf.append(ch)
            esc = False
        elif ch == "\\":
            esc = True
            buf.append(ch)
        elif ch == "|":
            parts.append("".join(buf))
            buf = []
        else:
            buf.append(ch)
    parts.append("".join(buf))
    return [p.strip() for p in parts]


def is_separator(line: str) -> bool:
    return bool(re.match(r"^\s*\|[\s:\-|]+\|\s*$", line))


def parse_table(lines: list[str], start: int) -> tuple[list[list[str]], int]:
    """Read a contiguous markdown table starting at `start`. Returns rows, next index."""
    rows, i = [], start
    while i < len(lines) and lines[i].lstrip().startswith("|"):
        if not is_separator(lines[i]):
            rows.append(split_cells(lines[i]))
        i += 1
    return rows, i


def find_tables(block: str) -> list[list[list[str]]]:
    """Return every markdown table in a block of text, as lists of raw rows."""
    lines = block.split("\n")
    tables, i = [], 0
    while i < len(lines):
        if lines[i].lstrip().startswith("|"):
            rows, i = parse_table(lines, i)
            if len(rows) >= 2:
                tables.append(rows)
        else:
            i += 1
    return tables


def sections(text: str, level: int = 2) -> dict[str, str]:
    """Split markdown into {heading: body} at the given heading level."""
    marker = "#" * level
    pattern = re.compile(rf"^{marker} (?!#)(.*)$", re.M)
    out, matches = {}, list(pattern.finditer(text))
    for idx, m in enumerate(matches):
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        out[m.group(1).strip()] = text[m.end():end]
    return out


def section_like(secs: dict[str, str], *needles: str) -> str:
    """Fetch a section whose heading contains all needles (case-insensitive)."""
    for heading, body in secs.items():
        low = heading.lower()
        if all(n.lower() in low for n in needles):
            return body
    return ""


def labelled(block: str, label: str) -> str:
    """Extract `**Label**: value` (value may wrap until the next blank line/bullet)."""
    pattern = re.compile(
        rf"^\s*\*?\s*\*\*{re.escape(label)}\*\*\s*:?\s*(.*?)(?=\n\s*\n|\n\s*\*\s*\*\*|\n#{{1,4}} |\Z)",
        re.S | re.M,
    )
    m = pattern.search(block)
    return clean(m.group(1)) if m else ""


# ──────────────────────────────────────────────────────────────────────────
# Roster
# ──────────────────────────────────────────────────────────────────────────

def parse_roster() -> dict[str, dict]:
    """Read HOLISTIC_PERSONA_LIST.md -> {P04: {tier, standards, agentFocus, ...}}."""
    if not ROSTER_FILE.exists():
        print(f"  ! roster not found: {ROSTER_FILE}", file=sys.stderr)
        return {}

    text = ROSTER_FILE.read_text(encoding="utf-8", errors="replace")
    roster: dict[str, dict] = {}
    header: list[str] | None = None

    for line in text.split("\n"):
        if not line.lstrip().startswith("|") or is_separator(line):
            continue
        cells = split_cells(line)
        if header is None and cells and cells[0].strip().upper() == "ID":
            header = [c.strip().lower() for c in cells]
            continue
        if header is None or not re.match(r"^\*\*P\d+\*\*$", cells[0].strip()):
            continue

        row = {header[i]: cells[i] for i in range(min(len(header), len(cells)))}
        pid = clean(row.get("id", ""))
        tier = clean(row.get("tier", ""))
        roster[pid] = {
            "id": pid,
            "title": clean(row.get("canonical persona", "")),
            "segment": clean(row.get("segment", "")),
            "tier": tier,
            "core20": tier.lower().startswith("core"),
            "standards": clean(row.get("governing standards", "")),
            "agentFocus": clean(row.get("candidate agent focus", "")),
        }
    return roster


# ──────────────────────────────────────────────────────────────────────────
# Dossier sections
# ──────────────────────────────────────────────────────────────────────────

def parse_frontmatter(text: str) -> dict:
    """The leading blockquote: Persona ID, Canonical Name, Aliases, Segment, Setting."""
    head = text.split("\n## ", 1)[0]
    out = {}
    for key, field in [
        ("Persona ID", "id"),
        ("Canonical Name", "title"),
        ("Industry Aliases", "aliases"),
        ("Value Chain Segment", "segment"),
        ("Physical Operational Setting", "setting"),
    ]:
        m = re.search(rf"\*\*{re.escape(key)}\*\*\s*:\s*(.+)", head)
        out[field] = clean(m.group(1)) if m else ""
    out["aliases"] = [a.strip() for a in out["aliases"].split(",") if a.strip()]
    m = re.match(r"^#\s+Persona Research:\s*(.+)", text.strip())
    if m and not out["title"]:
        out["title"] = clean(m.group(1))
    return out


def parse_status(block: str) -> dict:
    """§0 — headline finding + confidence rollup."""
    sub = sections(block, 3)
    headline_raw = section_like(sub, "headline")
    headline = " ".join(
        clean(ln.lstrip("> ").strip())
        for ln in headline_raw.split("\n")
        if ln.strip().startswith(">")
    ).strip()

    rollup = {}
    for table in find_tables(section_like(sub, "confidence")):
        for row in table[1:]:
            if len(row) >= 2:
                rollup[clean(row[0])] = clean(row[1])
    return {"headline": headline, "confidence": rollup}


def parse_role(block: str) -> dict:
    """§1 — one line, why it matters, boundaries, variants, where the work happens."""
    before_sub = block.split("\n### ", 1)[0]

    not_owned = []
    for table in find_tables(before_sub):
        head = [clean(c).lower() for c in table[0]]
        if head and "not" in head[0]:
            not_owned = [
                {"task": clean(r[0]), "owner": clean(r[1])}
                for r in table[1:] if len(r) >= 2
            ]
            break

    variants = []
    vm = re.search(r"\*\*Variants\*\*\s*:?\s*\n((?:\s*\*\s+.*\n?)+)", block)
    if vm:
        for ln in vm.group(1).split("\n"):
            if not ln.strip().startswith("*"):
                continue
            # Strip ONLY the bullet marker. lstrip("* ") would also eat the
            # "**" that opens the variant name, losing the name entirely.
            item = re.sub(r"^\s*\*\s+", "", ln).strip()
            nm = re.match(r"\*\*(.+?)\*\*\s*:?\s*(.*)", item)
            variants.append(
                {"name": clean(nm.group(1)), "detail": clean(nm.group(2))}
                if nm else {"name": "", "detail": clean(item)}
            )

    where = {}
    for table in find_tables(section_like(sections(block, 3), "where the work")):
        for row in table[1:]:
            if len(row) >= 2:
                where[clean(row[0])] = clean(row[1])

    return {
        "oneLine": labelled(before_sub, "One Line"),
        "whyItMatters": labelled(before_sub, "Why Their Output Matters"),
        "notOwned": not_owned,
        "variants": variants,
        "titleCheck": labelled(before_sub, "Title Check"),
        "whereTheWorkHappens": where,
    }


def parse_standards(block: str) -> dict:
    """§2 — sponsoring standards + the incumbent vendor gap table."""
    sub = sections(block, 3)

    standards = []
    for ln in section_like(sub, "sponsoring").split("\n"):
        m = re.match(r"^\s*\d+\.\s*(.+)", ln)
        if not m:
            continue
        item = m.group(1)
        km = re.match(r"`\[([^\]]+)\]`\s*:?\s*(.*)", item.strip())
        standards.append(
            {"key": km.group(1), "citation": clean(km.group(2))}
            if km else {"key": "", "citation": clean(item)}
        )

    vendors = []
    for table in find_tables(section_like(sub, "vendor")):
        for row in table[1:]:
            if len(row) >= 4:
                vendors.append({
                    "product": clean(row[0]),
                    "module": clean(row[1]),
                    "solves": clean(row[2]),
                    "gap": clean(row[3]),
                })
    return {"standards": standards, "vendorGaps": vendors}


def _parse_agent_ref(cell: str) -> tuple[int | None, str, str]:
    """Agent column -> (agent number | None, owner class, raw label)."""
    raw = clean(cell)
    m = re.search(r"Agent\s+(\d+)\s*:", raw)
    if m:
        return int(m.group(1)), "agent", raw
    low = raw.lower()
    if "cross-functional" in low:
        return None, "cross-functional", raw
    if "human" in low:
        return None, "human", raw
    if "monolith" in low:
        return None, "monolith", raw
    return None, "none", raw


def parse_actions(block: str) -> tuple[list[dict], dict]:
    """§3 — the 15 operational actions, plus the Today/Failure two-liners."""
    detail: dict[str, dict] = {}
    analysis = section_like(sections(block, 3), "action analysis")
    if analysis:
        current = None
        for ln in analysis.split("\n"):
            top = re.match(r"^\s*\*\s+\*\*(A\d+)\s*·\s*(.+?)\*\*\s*:?\s*$", ln)
            if top:
                current = top.group(1)
                detail[current] = {"label": clean(top.group(2))}
                continue
            if current:
                sub = re.match(r"^\s+\*\s+\*(Today|Failure Mode|Agent|Agent Candidate)\*\s*:?\s*(.*)", ln)
                if sub:
                    key = {
                        "Today": "today",
                        "Failure Mode": "failureMode",
                        "Agent": "agentNote",
                        "Agent Candidate": "agentNote",
                    }[sub.group(1)]
                    detail[current][key] = clean(sub.group(2))

    actions = []
    for table in find_tables(block):
        head = [clean(c).lower() for c in table[0]]
        if not (len(head) >= 8 and "action" in head[1]):
            continue
        for row in table[1:]:
            if len(row) < 9 or not re.match(r"^\*\*A\d+\*\*$", row[0].strip()):
                continue
            code = clean(row[0])
            ref, owner, label = _parse_agent_ref(row[8])
            entry = {
                "code": code,
                "action": clean(row[1]),
                "source": clean(row[2]),
                "scope": clean(row[3]),
                "bucket": clean(row[4]),
                "freq": clean(row[5]),
                "time": clean(row[6]),
                "friction": clean(row[7]),
                "agentRef": ref,
                "owner": owner,
                "agentLabel": label,
            }
            entry.update(detail.get(code, {}))
            actions.append(entry)
        if actions:
            break
    return actions, detail


def parse_agents(block: str) -> list[dict]:
    """§4 — the hyper-specialised squad."""
    agents = []
    pattern = re.compile(r"^### Agent (\d+)\s*:\s*(.+)$", re.M)
    matches = list(pattern.finditer(block))
    for idx, m in enumerate(matches):
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(block)
        body = block[m.end():end]
        agents.append({
            "n": int(m.group(1)),
            "name": clean(m.group(2)),
            "oneLine": labelled(body, "In One Line"),
            "frictionSolved": labelled(body, "Friction Solved"),
            "reads": labelled(body, "Reads"),
            "does": labelled(body, "Does"),
            "returns": labelled(body, "Returns"),
            "stopsAt": labelled(body, "Stops At"),
            "failureModes": labelled(body, "Failure Modes & Safety Envelopes"),
        })
    return agents


def _hours(cell: str) -> float | None:
    m = re.search(r"([\d.]+)\s*hours?", clean(cell), re.I)
    return float(m.group(1)) if m else None


def _col_index(head: list[str], *needles: str) -> int | None:
    """First column whose header contains any needle."""
    for i, h in enumerate(head):
        for n in needles:
            if n in h:
                return i
    return None


def parse_value_model(block: str) -> dict:
    """§5 — per-unit before/after.

    The corpus uses two column shapes and three total-row styles:
      * 26 dossiers have a 'Unit of Work' column; P16-P22 do not.
      * the first column is headed 'Hyper-Specialized Agent' (P01-P08)
        or 'Metric' (P09-P33).
      * the total row is labelled 'Total ...', 'TOTAL PER ...' or 'Squad Total'
        -- and P02 has no total row at all.
    So columns are located by header name, never by position.
    """
    rows, total = [], None

    for table in find_tables(block):
        head = [clean(c).lower() for c in table[0]]
        if len(head) < 5:
            continue
        i_before = _col_index(head, "baseline", "before")
        i_after = _col_index(head, "review", "after")
        i_saved = _col_index(head, "net unit", "saved")
        if i_before is None or i_after is None or i_saved is None:
            continue
        i_unit = _col_index(head, "unit of work")
        i_friction = _col_index(head, "friction")

        def cell(row: list[str], idx: int | None) -> str:
            return row[idx] if idx is not None and idx < len(row) else ""

        for row in table[1:]:
            if len(row) < 5:
                continue
            entry = {
                "agent": clean(row[0]),
                "unit": clean(cell(row, i_unit)),
                "beforeHours": _hours(cell(row, i_before)),
                "afterHours": _hours(cell(row, i_after)),
                "savedHours": _hours(cell(row, i_saved)),
                "frictionRemoved": clean(cell(row, i_friction)),
            }
            if "total" in entry["agent"].lower():
                entry["label"] = entry.pop("agent")
                total = entry
            else:
                rows.append(entry)
        break

    # P02 ships no total row. Derive one so every persona has a squad figure,
    # and mark it so the page can label it as computed rather than authored.
    if total is None and rows:
        def _sum(key: str) -> float | None:
            vals = [r[key] for r in rows if r[key] is not None]
            return round(sum(vals), 2) if vals else None

        total = {
            "label": "Total Squad Impact",
            "unit": "",
            "beforeHours": _sum("beforeHours"),
            "afterHours": _sum("afterHours"),
            "savedHours": _sum("savedHours"),
            "frictionRemoved": "",
            "derived": True,
        }

    rule = ""
    rm = re.search(r"^>\s*\*\*Rule\*\*\s*:?\s*(.+)$", block, re.M)
    if rm:
        rule = clean(rm.group(1))
    return {"rule": rule, "rows": rows, "total": total}


def parse_citations(block: str) -> dict:
    """§6 — citations table + negative search registry."""
    sub = sections(block, 3)

    citations = []
    for table in find_tables(section_like(sub, "citations")):
        for row in table[1:]:
            if len(row) >= 5:
                citations.append({
                    "key": clean(row[0]),
                    "citation": clean(row[1]),
                    "locator": clean(row[2]),
                    "type": clean(row[3]),
                    "supports": clean(row[4]),
                })

    neg = section_like(sub, "negative search")
    return {
        "citations": citations,
        "negativeSearch": {
            "searched": labelled(neg, "Searched"),
            "result": labelled(neg, "Result"),
        },
    }


def parse_lines(block: str) -> dict:
    """§7 — the quotable line + open questions for practitioners.

    Two layouts exist in the corpus:
      A (P01-P17, P23-P33):  * **The Line**: *"..."*
                             * **Open Questions ...**:  with `*` sub-bullets
      B (P18-P22):           ### The Line
                             > *"..."*
                             ### Authentic Open Questions ...   numbered list
    """
    sub = sections(block, 3)

    # --- the line -------------------------------------------------------
    line = labelled(block, "The Line")
    if not line:
        line_block = section_like(sub, "the line")
        quoted = " ".join(
            ln.lstrip("> ").strip()
            for ln in line_block.split("\n")
            if ln.strip().startswith(">")
        ).strip()
        line = clean(quoted)

    # --- open questions -------------------------------------------------
    questions: list[str] = []
    qm = re.search(r"\*\*Open Questions[^*]*\*\*\s*:?\s*\n((?:\s+\*\s+.*\n?)+)", block)
    if qm:
        questions = [
            clean(re.sub(r"^\s*\*\s+", "", ln).strip())
            for ln in qm.group(1).split("\n")
            if ln.strip().startswith("*")
        ]
    if not questions:
        q_block = section_like(sub, "open questions")
        for ln in q_block.split("\n"):
            m = re.match(r"^\s*\d+\.\s+(.*)", ln)
            if m:
                questions.append(clean(m.group(1)))
            elif re.match(r"^\s*\*\s+", ln):
                questions.append(clean(re.sub(r"^\s*\*\s+", "", ln)))

    return {"line": line, "openQuestions": [q for q in questions if q]}


# ──────────────────────────────────────────────────────────────────────────
# Dossier driver
# ──────────────────────────────────────────────────────────────────────────

# 12 dossiers were written with "\t" interpreted as a literal tab, so LaTeX
# commands beginning \t arrived corrupted: "\text{ bopd}" is stored on disk as
# TAB + "ext{ bopd}". 90 occurrences: \text (70), \times (18), \theta (2).
# Repair only those three; any other tab is left alone.
_TAB_MANGLED = re.compile(r"\t(ext|imes|heta)\b")


def repair_source(raw: str) -> str:
    """Undo the tab-for-backslash-t corruption in the research markdown."""
    return _TAB_MANGLED.sub(lambda m: "\\t" + m.group(1), raw)


def parse_dossier(path: Path, roster: dict[str, dict]) -> dict:
    text = path.read_text(encoding="utf-8", errors="replace").replace("\r\n", "\n")
    text = repair_source(text)
    secs = sections(text, 2)

    front = parse_frontmatter(text)
    pid = front["id"] or path.name.split("_")[0]
    meta = roster.get(pid, {})

    actions, _ = parse_actions(section_like(secs, "Operational Actions"))
    agents = parse_agents(section_like(secs, "Candidate Agent Deep-Dive"))

    # A stable handle for each agent -- OG-P04-A02. Deterministic, so it stays
    # put across regenerations and can be quoted in a review or a backlog.
    for a in agents:
        a["agentId"] = f"OG-{pid}-A{a['n']:02d}"

    title = front["title"] or meta.get("title", "")
    initials = "".join(w[0] for w in re.findall(r"[A-Za-z]+", title)[:2]).upper()

    record = {
        "id": pid,
        "title": title,
        "aliases": front["aliases"],
        "segment": meta.get("segment", "") or front["segment"],
        "segmentLong": front["segment"],
        "setting": front["setting"],
        "tier": meta.get("tier", ""),
        "core20": meta.get("core20", False),
        "governingStandards": meta.get("standards", ""),
        "agentFocus": meta.get("agentFocus", ""),
        "sourceFile": path.name,
        "person": PERSONA_PEOPLE.get(pid, ""),
        "avatar": f"avatars/{pid}_persona.jpg",
        "thumb": f"avatars/thumbs/{pid}_thumb.jpg",
        "initials": initials,
        **parse_status(section_like(secs, "Status")),
        "role": parse_role(section_like(secs, "The Role")),
        **parse_standards(section_like(secs, "Sources", "Competency")),
        "actions": actions,
        "agents": agents,
        "valueModel": parse_value_model(section_like(secs, "Value Model")),
        **parse_citations(section_like(secs, "Citations")),
        **parse_lines(section_like(secs, "Lines Worth Remembering")),
    }
    return record


def validate(rec: dict) -> list[str]:
    """Return a list of problems. Empty list means the record looks complete."""
    problems = []
    pid = rec["id"]

    if not rec["title"]:
        problems.append(f"{pid}: missing title")
    if len(rec["actions"]) != EXPECTED_ACTIONS:
        problems.append(f"{pid}: {len(rec['actions'])} actions, expected {EXPECTED_ACTIONS}")
    if not rec["agents"]:
        problems.append(f"{pid}: no agents parsed")

    for a in rec["agents"]:
        for field in ("oneLine", "frictionSolved", "reads", "does", "returns", "stopsAt", "failureModes"):
            if not a.get(field):
                problems.append(f"{pid}: agent {a['n']} missing {field}")

    vm = rec["valueModel"]
    if not vm["rows"]:
        problems.append(f"{pid}: no value-model rows")
    if vm["total"] is None:
        problems.append(f"{pid}: no value-model total row")
    if len(vm["rows"]) != len(rec["agents"]):
        problems.append(
            f"{pid}: {len(vm['rows'])} value rows vs {len(rec['agents'])} agents"
        )

    refs = {a["agentRef"] for a in rec["actions"] if a["agentRef"]}
    declared = {a["n"] for a in rec["agents"]}
    if refs - declared:
        problems.append(f"{pid}: actions reference undeclared agents {sorted(refs - declared)}")

    if not rec.get("line"):
        problems.append(f"{pid}: missing 'The Line'")
    if not rec.get("citations"):
        problems.append(f"{pid}: no citations")

    # Nothing should reach the page still carrying markdown or LaTeX.
    def strings(o):
        if isinstance(o, dict):
            for v in o.values():
                yield from strings(v)
        elif isinstance(o, list):
            for v in o:
                yield from strings(v)
        elif isinstance(o, str):
            yield o

    residual = [s for s in strings(rec) if re.search(r"\*\*|\\[A-Za-z]+|[{}]", s)]
    if residual:
        problems.append(
            f"{pid}: {len(residual)} field(s) still contain markup, e.g. "
            f"{residual[0][:90]!r}"
        )
    return problems


def summarise(rec: dict) -> str:
    vm = rec["valueModel"]
    total = vm["total"] or {}
    buckets: dict[str, int] = {}
    for a in rec["actions"]:
        buckets[a["bucket"]] = buckets.get(a["bucket"], 0) + 1
    bucket_str = " ".join(f"{k}:{v}" for k, v in sorted(buckets.items()))
    return (
        f"  {rec['id']}  {rec['title'][:34]:34s} "
        f"actions={len(rec['actions']):2d} [{bucket_str}]  "
        f"agents={len(rec['agents'])}  "
        f"saved={total.get('savedHours')}h{'*' if total.get('derived') else ''}  "
        f"{'CORE20' if rec['core20'] else 'ext'}"
    )


# ──────────────────────────────────────────────────────────────────────────
# Split output
#
# The combined file is ~1.3 MB, which makes a one-dossier edit produce an
# unreviewable diff and forces the page to download all 33 personas to show
# one. So we also emit an index plus one file per persona.
#
# These are .js, not .json, on purpose: parts of this deck are opened straight
# from disk, and fetch() is blocked by CORS on file:// while a script tag is
# not. The .json twins are written alongside purely to be read and diffed.
# ──────────────────────────────────────────────────────────────────────────

# Fields the rail, search and persona switcher need before any persona is
# chosen. Everything else is deferred to the per-persona file.
INDEX_FIELDS = (
    "id", "title", "person", "segment", "segmentLong", "tier", "core20",
    "aliases", "avatar", "thumb", "initials", "agentFocus", "governingStandards",
)


def _index_entry(rec: dict) -> dict:
    entry = {k: rec.get(k) for k in INDEX_FIELDS}
    total = (rec.get("valueModel") or {}).get("total") or {}
    entry["agentCount"] = len(rec.get("agents") or [])
    entry["savedHours"] = total.get("savedHours")
    # Agent names travel with the index so the rail stays searchable by agent
    # without pulling 33 detail files.
    entry["agentNames"] = [a.get("name", "") for a in (rec.get("agents") or [])]
    return entry


def write_split(records: list[dict], outdir: Path, prune: bool = True) -> None:
    outdir.mkdir(parents=True, exist_ok=True)

    banner = (
        "/* GENERATED FILE, DO NOT EDIT BY HAND.\n"
        " * Source:     persona_research/persona_research_output/*.md\n"
        " * Regenerate: python3 scripts/extract_persona_research.py\n"
        " */\n"
    )

    index = [_index_entry(r) for r in records]
    (outdir / "index.js").write_text(
        banner
        + "window.PERSONA_INDEX = "
        + json.dumps(index, indent=2, ensure_ascii=False)
        + ";\n",
        encoding="utf-8",
    )
    (outdir / "index.json").write_text(
        json.dumps(index, indent=2, ensure_ascii=False), encoding="utf-8"
    )

    for rec in records:
        pid = rec["id"]
        blob = json.dumps(rec, indent=2, ensure_ascii=False)
        (outdir / f"{pid}.js").write_text(
            banner
            + "window.PERSONA_DETAIL = window.PERSONA_DETAIL || {};\n"
            + f"window.PERSONA_DETAIL[{json.dumps(pid)}] = "
            + blob
            + ";\n",
            encoding="utf-8",
        )
        (outdir / f"{pid}.json").write_text(blob, encoding="utf-8")

    # A persona deleted from the corpus must not leave a stale file behind --
    # but only when this was a full run. On --only, the others are not stale,
    # they simply were not regenerated.
    stale: list[Path] = []
    if prune:
        keep = {"index.js", "index.json"} | {
            f"{r['id']}{ext}" for r in records for ext in (".js", ".json")
        }
        stale = [p for p in outdir.iterdir() if p.is_file() and p.name not in keep]
        for p in stale:
            p.unlink()

    largest = max((outdir / f"{r['id']}.js").stat().st_size for r in records)
    print(
        f"wrote {outdir}/  ({len(records)} personas + index, "
        f"index {(outdir / 'index.js').stat().st_size:,} B, "
        f"largest persona {largest:,} B"
        + (f", removed {len(stale)} stale" if stale else "")
        + ")"
    )


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--only", nargs="*", metavar="Pnn", help="limit to these persona ids, e.g. --only P04")
    ap.add_argument("--report", action="store_true", help="print the parsed record for each persona")
    ap.add_argument("--out-json", type=Path, default=OUT_JSON)
    ap.add_argument("--out-js", type=Path, default=OUT_JS)
    args = ap.parse_args()

    if not RESEARCH_DIR.is_dir():
        print(f"research directory not found: {RESEARCH_DIR}", file=sys.stderr)
        return 2

    roster = parse_roster()
    print(f"roster: {len(roster)} personas ({sum(1 for r in roster.values() if r['core20'])} Core 20)")

    wanted = {p.upper() for p in args.only} if args.only else None
    files = sorted(f for f in RESEARCH_DIR.glob("P*.md") if re.match(r"^P\d+_", f.name))
    if wanted:
        files = [f for f in files if f.name.split("_")[0].upper() in wanted]
    if not files:
        print("no dossiers matched", file=sys.stderr)
        return 2

    records, problems = [], []
    for path in files:
        rec = parse_dossier(path, roster)
        records.append(rec)
        problems.extend(validate(rec))
        print(summarise(rec))

    if problems:
        print(f"\n{len(problems)} problem(s):", file=sys.stderr)
        for p in problems:
            print(f"  ! {p}", file=sys.stderr)
    else:
        print("\nall records complete — no missing fields")

    payload = {
        "generatedBy": "scripts/extract_persona_research.py",
        "source": "persona_research/persona_research_output/",
        "personaCount": len(records),
        "personas": records,
    }

    args.out_json.parent.mkdir(parents=True, exist_ok=True)
    args.out_json.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")

    js = (
        "/* Persona research data — GENERATED FILE, DO NOT EDIT BY HAND.\n"
        " * Source:    persona_research/persona_research_output/*.md\n"
        " * Regenerate: python3 scripts/extract_persona_research.py\n"
        " *\n"
        " * Shape: window.PERSONA_RESEARCH = { personas: [ { id, title, agents[], actions[], ... } ] }\n"
        " * Also exposes window.PERSONA_RESEARCH_BY_ID for direct lookup, e.g. ...BY_ID.P04\n"
        " */\n"
        "window.PERSONA_RESEARCH = "
        + json.dumps(payload, indent=2, ensure_ascii=False)
        + ";\n\n"
        "window.PERSONA_RESEARCH_BY_ID = (window.PERSONA_RESEARCH.personas || [])\n"
        "  .reduce(function (acc, p) { acc[p.id] = p; return acc; }, {});\n"
    )
    args.out_js.parent.mkdir(parents=True, exist_ok=True)
    args.out_js.write_text(js, encoding="utf-8")

    write_split(records, args.out_json.parent / "personas", prune=not args.only)

    def show(p: Path) -> str:
        try:
            return str(p.relative_to(REPO))
        except ValueError:
            return str(p)

    print(f"\nwrote {show(args.out_json)}  ({args.out_json.stat().st_size:,} bytes)")
    print(f"wrote {show(args.out_js)}  ({args.out_js.stat().st_size:,} bytes)")

    if args.report:
        for rec in records:
            print("\n" + "=" * 78)
            print(json.dumps(rec, indent=2, ensure_ascii=False))

    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
