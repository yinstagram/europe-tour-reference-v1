# Europe Tour PWA V1 — Tour Specification source extraction

Source PDF: `Tour Specification 2` (7 pages, supplied by Yin on 2026-08-13)

## Scope and date inference

- The PDF does not print a year.
- `16-Oct (Fri)` through `31-Oct (Sat)` matches calendar year **2026**.
- Website V1 therefore treats **2026-10-16 to 2026-10-31** as an inference, not a confirmed booking fact.
- Every item below is a transcription of the PDF. Official verification belongs in the research files and website source layer.

## Day-by-day source itinerary

| Day | Date | PDF itinerary |
|---|---|---|
| 0 | Fri 16 Oct | 10:00 arrive airport/check baggage; 00:40 depart Hong Kong; 13:15 arrive Amsterdam |
| 1 | Sat 17 Oct | Check in Amsterdam hotel; Royal Coster Diamonds **or** House of GASSAN; Madame Tussauds; dinner; Amsterdam hotel |
| 2 | Sun 18 Oct | Zaanse Schans / Heerlijck Slaapen op de Zaanse Schans; afternoon canal cruise; dusk/evening De Wallen & Zeedijk; Amsterdam hotel |
| 3 | Mon 19 Oct | Cube Houses, Blaaktoren and Markthal; stated 30-minute drive; Noordeinde Palace; The Pier SkyView; stated 1.5-hour drive; Oesterij Yerseke; stated 1-hour drive; Rotterdam hotel |
| 4 | Tue 20 Oct | Stated 2-hour drive; Twaalf Apostelenhofje Maastricht; lunch; stated 45-minute drive; Designer Outlet Roermond; Roermond hotel |
| 5 | Wed 21 Oct | Stated 2-hour drive; Grand-Place; Atomium; Waterloo; Brussels horse-carriage experience; Brussels hotel |
| 6 | Thu 22 Oct | Stated 3-hour drive; lunch; Eiffel Tower (visit time pending); dinner at Café de la Paix; Paris hotel |
| 7 | Fri 23 Oct | Musée de l'Orangerie; lunch; Pierre Hermé Paris Opéra dessert; extra Paris sights allowed within a ten-hour day, examples: Breizh Café and perfume museum; dinner; Paris hotel |
| 8 | Sat 24 Oct | Paris to Dijon; stated 4-hour drive; Palais des Ducs de Bourgogne; Dijon historic centre; Dijon hotel |
| 9 | Sun 25 Oct | Option 1 Route des Grands Crus: Gevrey-Chambertin, Vosne-Romanée, Beaune. Option 2 Lyon: Vieux Lyon, Fresque des Lyonnais, Basilique Notre-Dame de Fourvière |
| 10 | Mon 26 Oct | Enter Switzerland after a stated 3–4-hour drive; “Lavaux Vineyards Montreux”; Montreux hotel |
| 11 | Tue 27 Oct | “Golden train” Montreux to Interlaken; PDF simultaneously says `09:32–10:22` and `3h15`; driver meets at final stop; lunch; Interlaken; stated 1-hour drive; Lucerne hotel |
| 12 | Wed 28 Oct | Lucerne city tour; lunch; stated 1-hour drive; Mount Titlis; dinner at Hotel Château Gütsch; Lucerne hotel |
| 13 | Thu 29 Oct | Stated 1-hour drive; Lindenhof Hill; Augustinergasse; Bahnhofstrasse; Zurich hotel |
| 14 | Fri 30 Oct | 12:30 arrive airport/check baggage; 15:30 depart Zurich |
| 15 | Sat 31 Oct | 14:45 arrive Hong Kong |

## Flights printed in the PDF

| Flight | PDF date / route | PDF time | PDF duration / layover |
|---|---|---|---|
| EK381 | 17 Oct HKG → DXB | 00:40–04:25 | 7h45 |
| — | Dubai connection | — | 3h40 |
| EK147 | 17 Oct DXB → AMS | 08:05–13:15 | 7h10 |
| EK86 | 30 Oct ZRH → DXB | 21:50–07:05 +1 | 6h15 |
| — | Dubai connection | — | 3h35 |
| EK380 | 31 Oct DXB → HKG | 10:40–21:50 | 7h10 |

## Hotels printed in the PDF

| City | Hotel | PDF status / note |
|---|---|---|
| Amsterdam | Grand Hotel Amrâth Amsterdam | 5 stars deluxe |
| Rotterdam | Suite Hotel Pincoffs Rotterdam | 4 stars superior; twin room and family suite mentioned |
| Roermond | Hotel Dux | 4 stars; PDF says no twin room |
| Roermond | Het Arresthuis | Alternative; 5 stars; converted prison; twin room mentioned |
| Brussels | Hotel Le Plaza Brussels | Alternative 1; 4 stars superior |
| Brussels | Warwick Brussels Grand-Place | Alternative 2; 4 stars |
| Paris | Terrass'' Hotel | 4 stars |
| Dijon | Not specified | “Dijon Hotel” only |
| Montreux | Hotel du Grand Lac Excelsior | 4 stars |
| Lucerne | ART DECO HOTEL MONTANA | 4.5 stars |
| Zurich | Hotel Adler | 3 stars |

## Source contradictions and unresolved decisions

1. **Outbound day/date wording:** Day 0 is 16 Oct, but the first flight departs at 00:40 on 17 Oct. The PDF's `10:00` airport time is ambiguous and likely not a usable check-in time.
2. **Return departure:** Day 14 says depart Zurich at 15:30, while the flight table says EK86 departs at 21:50.
3. **Hong Kong arrival:** Day 15 says arrive at 14:45, while the flight table says EK380 arrives at 21:50.
4. **GoldenPass timing:** `09:32–10:22` is 50 minutes, not the stated 3h15. Exact 2026 timetable must be confirmed.
5. **Hotel alternatives are not confirmed bookings:** Royal Coster vs GASSAN, Hotel Dux vs Het Arresthuis, and Hotel Le Plaza vs Warwick are explicit alternatives. Dijon accommodation is absent.
6. **Day 9 is unresolved:** Burgundy wine route and Lyon are mutually exclusive options.
7. **Eiffel Tower visit time is pending.**
8. **“Lavaux Vineyards Montreux” is not a precise attraction or meeting point.**
9. **Some English names are misspelled in the PDF:** `Olyster`, `Bainhof`, `Augustine Lane`, and the hotel typography `Terrass”` need normalization without hiding the source wording.

## Website truth model

- `source`: exactly what the PDF says.
- `verified`: current official fact with source and verification date.
- `inference`: useful planning conclusion derived from source facts.
- `unknown`: not verifiable yet; must remain visibly unresolved.
- No alternative becomes “confirmed” without a booking record or Yin's explicit confirmation.
