#!/usr/bin/env python3
"""
validate_dossier.py — Validate persona research dossiers against template v3 standards.

Usage:
    python3 scripts/validate_dossier.py <path.md> [<path.md> ...] [--strict-names]

Imports parsing functions from scripts/extract_persona_research.py (via importlib)
so the validator parses dossiers exactly as the extractor does.
"""

from __future__ import annotations

import argparse
import importlib.util
import re
import sys
from collections import Counter
from pathlib import Path

# Locate repo root and extractor
REPO_ROOT = Path(__file__).resolve().parent.parent
EXTRACTOR_PATH = REPO_ROOT / "scripts" / "extract_persona_research.py"

# Deny list of company, site, and brand names (case-sensitive whole-word match)
DENY_LIST = [
    "ONGC", "GAIL", "IOCL", "Indian Oil", "BPCL", "HPCL", "Reliance",
    "Nayara", "Cairn", "Vedanta", "Petronet", "Indane", "SERVO", "Shell",
    "ExxonMobil", "Exxon", "Chevron", "BP p.l.c.", "TotalEnergies", "Aramco",
    "ADNOC", "Equinor", "Petronas", "ConocoPhillips", "Dabhol", "Dahej",
    "Jamnagar", "Panipat", "Paradip", "Pata",
]

# Regex pattern for case-sensitive whole-word boundary
_SORTED_DENY = sorted(DENY_LIST, key=len, reverse=True)
_DENY_PATTERN = re.compile(r"(?<!\w)(" + "|".join(re.escape(t) for t in _SORTED_DENY) + r")(?!\w)")


def load_extractor():
    """Dynamically import extract_persona_research using importlib."""
    spec = importlib.util.spec_from_file_location("extract_persona_research", EXTRACTOR_PATH)
    if spec is None or spec.loader is None:
        raise ImportError(f"Cannot load extractor from {EXTRACTOR_PATH}")
    mod = importlib.util.module_from_spec(spec)
    sys.modules["extract_persona_research"] = mod
    spec.loader.exec_module(mod)
    return mod


epr = load_extractor()


def _parse_hours_loose(cell: str) -> float | None:
    """Extract numeric hours, accepting both 'hours' and 'hrs' abbreviations.

    In the existing corpus (P32), baseline was authored as '9.00 hrs', which
    strict r'hours?' would miss.
    """
    if not cell:
        return None
    cleaned = epr.clean(cell)
    m = re.search(r"([\d.]+)\s*(?:hours?|hrs?)", cleaned, re.I)
    return float(m.group(1)) if m else None


def validate_file(path: Path, strict_names: bool = False, roster: dict | None = None) -> tuple[bool, list[str], list[str]]:
    """Validate a single persona research dossier markdown file.

    Returns:
        (passed: bool, errors: list[str], warnings: list[str])
    """
    errors: list[str] = []
    warnings: list[str] = []

    if not path.is_file():
        return False, [f"File not found: {path}"], []

    raw_text = path.read_text(encoding="utf-8", errors="replace").replace("\r\n", "\n")
    repaired_text = epr.repair_source(raw_text)

    # 1. Company name deny-list check
    matches = _DENY_PATTERN.findall(raw_text)
    if matches:
        counts = Counter(matches)
        detail = ", ".join(f"{k}: {v}" for k, v in sorted(counts.items()))
        msg = f"Deny-list brand/site name(s) found ({len(matches)} total): {detail}"
        if strict_names:
            errors.append(msg)
        else:
            warnings.append(msg)

    # 2. Section parsing via extractor
    secs = epr.sections(repaired_text, 2)
    sub_secs = epr.sections(repaired_text, 3)

    if roster is None:
        roster = epr.parse_roster()

    try:
        rec = epr.parse_dossier(path, roster)
    except Exception as exc:
        return False, [f"Extractor failed to parse dossier: {exc}"], warnings

    # 3. Check required sections presence
    status_sec = epr.section_like(secs, "Status")
    if not status_sec:
        errors.append("Missing required section: '0 · Status'")
    elif not rec.get("headline"):
        errors.append("Missing Status headline finding")

    role_sec = epr.section_like(secs, "Role")
    if not role_sec:
        errors.append("Missing required section: '1 · The Role'")
    elif not rec.get("role", {}).get("oneLine"):
        errors.append("Missing Role 'One Line' definition")

    standards_sec = epr.section_like(secs, "Sources") or epr.section_like(secs, "Competency")
    if not standards_sec:
        errors.append("Missing required section: '2 · Sources & Competency Standards'")
    elif len(rec.get("standards", [])) < 1:
        errors.append("Missing governing standards in §2 (expected >= 1)")

    actions_sec = epr.section_like(secs, "Actions") or epr.section_like(secs, "Operational Actions")
    if not actions_sec:
        errors.append("Missing required section: '3 · Operational Actions'")

    agents_sec = (
        epr.section_like(secs, "Agent")
        or epr.section_like(secs, "Squad")
        or epr.section_like(secs, "Deep-Dive")
    )
    if not agents_sec:
        errors.append("Missing required section: '4 · Candidate Agent Deep-Dive'")

    vm_sec = epr.section_like(secs, "Value Model")
    if not vm_sec:
        errors.append("Missing required section: '5 · Per-Unit Before / After Value Model'")

    cit_sec = epr.section_like(secs, "Citations")
    if not cit_sec:
        errors.append("Missing required section: '6 · Citations & Negative Search Registry'")

    # Negative search check
    neg = rec.get("negativeSearch", {})
    if not neg.get("searched") or not neg.get("result"):
        errors.append("Missing negative search registry entry ('Searched' or 'Result')")

    # 4. Check actions (>= 15 actions with required fields)
    actions = rec.get("actions", [])
    if len(actions) < 15:
        errors.append(f"Insufficient actions: found {len(actions)}, expected >= 15")
    else:
        for idx, act in enumerate(actions, 1):
            code = act.get("code") or f"row {idx}"
            if not act.get("action"):
                errors.append(f"Action {code}: missing action description")
            bucket = act.get("bucket", "")
            if bucket not in ("B1", "B2", "B3"):
                errors.append(f"Action {code}: invalid bucket '{bucket}' (expected B1, B2, or B3)")
            if not act.get("freq"):
                errors.append(f"Action {code}: missing frequency")
            if not act.get("time"):
                errors.append(f"Action {code}: missing time estimate")
            if not act.get("friction"):
                errors.append(f"Action {code}: missing friction tag")

        # Failure mode check:
        # In the 33 gold-standard dossiers, failure modes are authored in Action Analysis
        # for candidate agent workflows (B1 / assigned agents). B2 (system) and B3 (human)
        # steps state 'Solved by...' or 'Pure physical...' without a failure mode.
        # We verify that failure modes exist across the candidate agent actions.
        actions_with_fm = sum(1 for a in actions if a.get("failureMode"))
        if actions_with_fm < min(len(rec.get("agents", [])), 6):
            errors.append(
                f"Insufficient action failure modes: found {actions_with_fm} actions with failure modes, "
                f"expected at least {min(len(rec.get('agents', [])), 6)} for candidate agent workflows"
            )

    # 5. Check agents (5..9 agents, each with required subfields)
    agents = rec.get("agents", [])
    if not (5 <= len(agents) <= 9):
        errors.append(f"Agent count out of range: found {len(agents)}, expected between 5 and 9")
    for a in agents:
        n = a.get("n", "?")
        for fld in ("name", "oneLine", "reads", "does", "returns", "stopsAt"):
            if not a.get(fld):
                errors.append(f"Agent {n}: missing '{fld}' field")

    # 6. Check value model (numeric beforeHours > afterHours >= 0, plus total)
    vm = rec.get("valueModel", {})
    vm_rows = vm.get("rows", [])
    if not vm_rows:
        errors.append("Value model: missing per-agent rows")
    else:
        if len(vm_rows) != len(agents):
            errors.append(f"Value model rows ({len(vm_rows)}) do not match agent count ({len(agents)})")

        # Also inspect raw table rows in value model block to handle 'hrs' abbreviations
        raw_tables = epr.find_tables(vm_sec)
        raw_rows = raw_tables[0][1:] if raw_tables else []

        for idx, r in enumerate(vm_rows):
            name = r.get("agent", f"row {idx + 1}")
            b = r.get("beforeHours")
            a = r.get("afterHours")

            # Fallback loose parse if extractor's strict 'hours?' missed 'hrs'
            if b is None and idx < len(raw_rows):
                for cell in raw_rows[idx]:
                    val = _parse_hours_loose(cell)
                    if val is not None and (a is None or val != a):
                        b = val
                        break

            if b is None:
                errors.append(f"Value model row '{name}': non-numeric beforeHours")
            elif a is None:
                errors.append(f"Value model row '{name}': non-numeric afterHours")
            elif not (b > a >= 0):
                errors.append(f"Value model row '{name}': invalid hours condition: not ({b} > {a} >= 0)")

    if not vm.get("total"):
        errors.append("Value model: missing squad total row")

    # 7. Check citations and governing standards
    # Existing dossiers P04, P05, P06, P07 have 4 citations in the citations table + 4 governing standards in §2.
    # We require >= 4 citations in §6, with combined citations + standards >= 5.
    cits = rec.get("citations", [])
    stds = rec.get("standards", [])
    if len(cits) < 4:
        errors.append(f"Insufficient citations: found {len(cits)}, expected at least 4 in citations table")
    elif len(cits) + len(stds) < 5:
        errors.append(f"Insufficient combined evidence: {len(cits)} citations + {len(stds)} standards < 5")

    passed = len(errors) == 0
    return passed, errors, warnings


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Validate persona research dossiers against template v3 standards."
    )
    parser.add_argument("paths", nargs="+", type=Path, help="Dossier markdown file path(s)")
    parser.add_argument(
        "--strict-names",
        action="store_true",
        help="Fail if any company/site/brand name from the deny-list is found",
    )
    args = parser.parse_args()

    roster = epr.parse_roster()
    any_failed = False

    for path in args.paths:
        passed, errors, warnings = validate_file(path, strict_names=args.strict_names, roster=roster)
        if passed:
            warn_str = f" ({len(warnings)} warning(s): {'; '.join(warnings)})" if warnings else ""
            print(f"PASS: {path.name}{warn_str}")
        else:
            any_failed = True
            err_str = "; ".join(errors)
            warn_str = f" | Warnings: {'; '.join(warnings)}" if warnings else ""
            print(f"FAIL: {path.name} — {err_str}{warn_str}")

    return 1 if any_failed else 0


if __name__ == "__main__":
    sys.exit(main())
