# Europe Tour 2026 — Reference V1

Phone-first offline PWA built from the supplied `Tour Specification 2` PDF, using the interaction and information architecture lessons from Yin's Sweden PWA.

This is a separate Europe reference project. The existing Sweden trip repository was used as the product reference and was not modified.

## V1 deliverables

- Website source: this project root.
- Printable/mobile handout: `output/pdf/Europe-Tour-2026-Reference-V1.pdf` (62 A4 pages).
- Original input preserved at `docs/source/Tour-Specification-2.pdf`.
- Full extraction: `docs/SOURCE_EXTRACTION.md`.
- Fact-check decision record: `docs/FACT_CHECK_SUMMARY.md`.
- Final QA evidence: `docs/QA_REPORT.md`.
- Country research: `research/`.

V1 is complete locally but intentionally not deployed or uploaded. Publishing is a separate external action after user approval.

## Truth model

- `source`: printed in the travel-agent PDF.
- `verified`: checked against a current official source.
- `inference`: planning conclusion, visibly labelled.
- `unknown`: requires a booking record or travel-agent confirmation.

The app never promotes an alternative hotel, attraction, flight time, or Day 9 branch to “confirmed” without evidence.

## Local preview

```bash
python3 -m http.server 4174 --bind 127.0.0.1
```

Open `http://127.0.0.1:4174/`.

Deterministic time QA:

- Before trip: `?mockNow=2026-10-15T12:00:00%2B08:00`
- Amsterdam day: `?mockNow=2026-10-18T15:00:00%2B02:00`
- DST-change day: `?mockNow=2026-10-25T10:00:00%2B01:00`
- Switzerland morning: `?mockNow=2026-10-28T08:00:00%2B01:00`
- Oesterfestival cutoff: `?mockNow=2026-10-19T16:30:00%2B02:00`
- GoldenPass correction: `?mockNow=2026-10-27T10:22:00%2B01:00`
- Print/PDF mode: `?print=1`

## Source files

- `docs/SOURCE_EXTRACTION.md`: complete PDF transcription and contradiction register.
- `research/`: official-source verification by country.
- `data.js`: user-facing structured itinerary.
- `app.js`: renderer and deterministic date logic.
- `styles.css`: responsive visual system and print layout.

## QA commands

```bash
./scripts/qa-links.sh
python3 scripts/browser-smoke.py
python3 scripts/capture-screenshots.py
```
