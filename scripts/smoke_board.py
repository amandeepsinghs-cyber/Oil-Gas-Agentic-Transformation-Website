#!/usr/bin/env python3
"""
smoke_board.py — structural check on the persona map board.

Renders persona_map.html headless and asserts the DOM matches
window.ENTERPRISE_MATRIX_DATA across each domain (upstream, midstream, downstream, all).

Defaults to --file mode using file:// URLs:
    python3 scripts/smoke_board.py

Or with a local server:
    python3 scripts/smoke_board.py --server
    python3 scripts/smoke_board.py --base http://127.0.0.1:8899
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGE = "/working_deck/persona_map.html"
DEFAULT_BASE = "http://127.0.0.1:8899"
DOMAINS = ["upstream", "midstream", "downstream", "all"]

STRIP = re.compile(r"<(script|style)\b.*?</\1>", re.S | re.I)


def dom(url: str) -> str:
    out = subprocess.run(
        [
            "google-chrome",
            "--headless",
            "--disable-gpu",
            "--no-sandbox",
            "--allow-file-access-from-files",
            "--virtual-time-budget=6000",
            "--dump-dom",
            url,
        ],
        capture_output=True,
        text=True,
        timeout=120,
    ).stdout
    return STRIP.sub("", out)


def load_matrix_data() -> list[dict]:
    """Read working_deck/data/matrix.js using node vm shim."""
    matrix_path = ROOT / "working_deck/data/matrix.js"
    cmd = [
        "node",
        "-e",
        """
        const fs = require("fs");
        const vm = require("vm");
        const matrixPath = process.argv[1];
        const code = fs.readFileSync(matrixPath, "utf8");
        const sandbox = { window: {} };
        vm.createContext(sandbox);
        vm.runInContext(code, sandbox);
        console.log(JSON.stringify(sandbox.window.ENTERPRISE_MATRIX_DATA));
        """,
        str(matrix_path),
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return json.loads(res.stdout)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Smoke test for persona_map.html")
    parser.add_argument(
        "--file",
        dest="use_file",
        action="store_true",
        default=True,
        help="Use file:// URLs (default)",
    )
    parser.add_argument(
        "--server",
        dest="use_file",
        action="store_false",
        help="Use HTTP server at BASE instead of file://",
    )
    parser.add_argument(
        "--base",
        default=DEFAULT_BASE,
        help=f"Server base URL (default: {DEFAULT_BASE})",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    data = load_matrix_data()
    fails: list[str] = []

    def check(label: str, got: object, want: object) -> None:
        ok = got == want
        print(
            f"  {'ok  ' if ok else 'FAIL'}  {label:<40} {got}"
            + ("" if ok else f"   (expected {want})")
        )
        if not ok:
            fails.append(label)

    if args.use_file:
        base_url = f"file://{ROOT}{PAGE}"
    else:
        base_url = f"{args.base.rstrip('/')}{PAGE}"

    for d in DOMAINS:
        print(f"\nboard domain={d}  {base_url}?domain={d}")
        html = dom(f"{base_url}?domain={d}")

        if d == "all":
            expected_rows = data
        else:
            expected_rows = [r for r in data if d in r.get("domains", [])]

        expected_row_count = len(expected_rows)
        expected_cell_count = sum(len(r.get("actions", [])) for r in expected_rows)

        check(f"[{d}] persona rows", html.count('class="brow"'), expected_row_count)
        check(
            f"[{d}] cells",
            len(re.findall(r'class="bcell own-[^"]*" type="button"', html)),
            expected_cell_count,
        )
        check(f"[{d}] axis label", html.count('class="colaxis"'), 1)
        check(
            f"[{d}] sticky row labels",
            html.count('class="rowlabel"'),
            expected_row_count + 1,  # +1 header
        )
        check(
            f"[{d}] dossier row links",
            len(re.findall(r'dossier\.html\?p=P\d\d"', html)),
            expected_row_count,
        )

        # Invariants: no rail on system and human cells
        for ow in ("system", "human"):
            check(
                f"[{d}] no rail on · {ow}",
                len(re.findall(rf'class="bcell own-{ow} prio-', html)),
                0,
            )

        # Brand: Gemini lockup and no stray spark decor
        check(f"[{d}] gemini lockups", html.count("gemini_enterprise_lockup"), 1)
        check(f"[{d}] stray spark decor", html.count("gemini_spark"), 0)

    # detail panel, agent case
    print(f"\ndetail · agent-held  ?domain=upstream&p=P01&a=3")
    d_html = dom(f"{base_url}?domain=upstream&p=P01&a=3")
    check("drawer populated", d_html.count('class="d-head"'), 1)
    check("owner stated", "Agent prepares, human decides" in d_html, True)
    check("text attribution only", d_html.count("Open in Gemini Enterprise"), 1)

    # detail panel, human-held case
    print(f"\ndetail · human-held  ?domain=upstream&p=P01&a=8")
    d_html = dom(f"{base_url}?domain=upstream&p=P01&a=8")
    check("owner stated (human)", "Human, end to end" in d_html or "Existing system" in d_html, True)
    check("reason given", "Why" in d_html, True)

    print()
    if fails:
        print(f"FAILED {len(fails)}: " + ", ".join(fails))
        return 1
    print("all green")
    return 0


if __name__ == "__main__":
    sys.exit(main())
