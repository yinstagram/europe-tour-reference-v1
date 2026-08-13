# Europe Tour Reference V1 — QA report

Final QA date: 2026-08-13

## Acceptance results

| Check | Result |
|---|---|
| Source PDF | 7/7 pages rendered and visually reviewed; transcription saved |
| Itinerary | 16/16 days render |
| Address index | 58 navigable itinerary entries; the unknown canal pier and Dijon hotel deliberately have no Maps CTA |
| Hotels | 11 proposals/alternatives render; none falsely marked confirmed |
| Official links | 57/57 final URLs returned HTTP 200 |
| JavaScript/manifest | Syntax and JSON validation pass |
| Mobile overflow | Pass at 390 × 844 CSS px |
| Desktop overflow | Pass at 1440 × 1000 CSS px |
| Deterministic time | Before-trip, DST day, Oesterfestival cutoff, GoldenPass 10:22 and Switzerland morning pass |
| Flight guardrail | Unknown flight times do not trigger the live reminder panel |
| Offline app shell | Service worker controls page and serves cached `data.js` with network offline |
| Print mode | 16 day sections and the complete source index render |

Automated smoke result:

`PASS before-trip mock time | 16-day itinerary | day detail | route and address index | hotel alternatives | verification centre | unverified-flight reminder guard | Oesterfestival cutoff mock | DST-change mock time | Switzerland morning mock time | GoldenPass corrected-time mock | offline app shell | print mode | desktop layout`

## Visual review

Final screenshots were captured after integration:

- `tmp/final-screens/01-home-mobile.png`
- `tmp/final-screens/02-days-mobile.png`
- `tmp/final-screens/03-oesterfestival-mobile.png`
- `tmp/final-screens/04-goldenpass-alert-mobile.png`
- `tmp/final-screens/05-verify-mobile.png`
- `tmp/final-screens/06-home-desktop.png`

Reviewed for typography, contrast, overflow, navigation visibility, badges, warning hierarchy and responsive layout. No blocking visual defect remains.

## PDF review

- Output: `output/pdf/Europe-Tour-2026-Reference-V1.pdf`
- Format: A4, 62 pages, tagged, unencrypted.
- Fonts: all PDF font resources report embedded.
- Text extraction: Traditional Chinese and the critical GoldenPass/Oesterfestival/TITLIS/ETIAS strings are present.
- Visual review: all 62 final pages rendered to PNG and reviewed in four contact sheets; cover, a mid-itinerary page and the final source page were also inspected at full size.
- Final SHA-256: `7029061cdf1465408b678f96cbcc327c92e8fce5487f0680f77b52be0a0151e8`.

## Known limits by design

- This is a static PWA. In-app/browser notifications are best-effort; it does not claim reliable closed-app push.
- Google Maps actions need network access; itinerary content and app shell work offline.
- V1 has not been uploaded or deployed. Publishing remains a separate user-approved action.
- Unknown bookings, exact dated exceptions and live mountain/weather status stay visibly unresolved until evidence arrives.
