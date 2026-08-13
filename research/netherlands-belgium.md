# Europe Tour PWA V1 — 荷蘭／比利時官方資料核查

核查範圍：PDF Day 1–5（Amsterdam → Zaanse Schans → Rotterdam／The Hague／Yerseke → Maastricht／Roermond → Brussels／Waterloo）。核查日：2026-08-13。

> 重要：呢份係網站內容底稿。`V1 可用 copy` 先係旅途中顯示俾用家睇嘅語氣；FACT／INFERENCE／UNKNOWN 標籤只供 build 同 QA，唔應原樣搬上網站。

## 證據規則

- `FACT`：有官方 attraction、酒店、政府、官方 DMO／transport source 支持。
- `INFERENCE`：按官方時間、地理同 PDF 排程作出嘅操作判斷；唔係官方承諾。
- `UNKNOWN`：截至核查日，官方未公布／未能驗證，V1 必須顯示「出發前確認」。
- 信心百分比只反映資料是否足以支持該句，唔代表 2026-10 當日一定冇臨時改動。
- 所有列出嘅 official URL 同 Google Maps deterministic search URL，均於 2026-08-13 用 `curl -sIL` 驗到最終 HTTP `200`。冇通過 200／301 gate 嘅頁面冇用作證據。
- 荷蘭座標來自官方政府 PDOK Locatieserver 嘅 exact-address result；Brussels 座標來自 Brussels UrbIS localization service。服務說明：[PDOK Locatieserver](https://www.pdok.nl/pdok-locatieserver) `[curl -sIL: 200]`；[Brussels UrbIS Localization](https://geoservices.irisnet.be/localization/) `[curl -sIL: 200]`。`FACT · 97%`
- Google Maps 連結只係 deterministic `search/?api=1&query=...` 導航入口，唔當成事實來源。

## 日期／年份 verdict

- `INFERENCE · 99%` PDF 本身冇喺 Day 1–5 標示年份；「17 Oct = Saturday、18 Oct = Sunday、19 Oct = Monday、20 Oct = Tuesday、21 Oct = Wednesday」完整對應 **2026-10-17 至 2026-10-21**，所以本文件以 2026 年處理。
- `UNKNOWN · 75%` 航班、租車、酒店是否已出票／已落實，未有 booking confirmation 作證；V1 唔應將 PDF 候選項目寫成「已預訂」。

## 一眼 verdict

| 日子 | PDF 項目 | V1 verdict | 最重要限制 |
|---|---|---|---|
| D1 | Royal Coster／GASSAN | 二選一，唔好兩間都塞入 | 公開 tour 約 17:00 前結束；落機日 buffer 太薄 |
| D1 | Madame Tussauds | 保留，但要 time slot | 2026-10-17 exact hours 未公布；星期六較繁忙 |
| D2 | Zaanse Schans | 保留 | 村區全年可行，但每間風車／museum 各自開門 |
| D2 | Heerlijck Slaapen | 從「住宿／景點」改成外觀點 | 現時官方列為有人居住嘅住宅，不可入內 |
| D2 | Canal cruise | 保留成未指定 operator 嘅活動卡 | 未揀 operator 就冇可靠碼頭、班次或夜航承諾 |
| D2 | De Wallen／Zeedijk | 保留成自助步行 | 「大蔴街」錯名；唔好影／拍攝性工作者 |
| D3 | Cube Houses | 外觀保底；室內 conditional | 官方 Visit 頁自相矛盾，唔可硬寫室內已開 |
| D3 | Blaaktoren | 只列外觀 | 住宅塔樓，唔係可入內 attraction |
| D3 | Markthal | 保留 | 各檔營業時間可以唔同 |
| D3 | Noordeinde Palace | 改成外觀 | 宮殿係國王工作場所，10 月不對一般訪客開放 |
| D3 | SkyView de Pier | 保留 | 天氣／維修可影響營運；要留尾班前 buffer |
| D3 | Oesterij | 保留並升為硬時段 | 2026-10-19 正值 Oesterfestival，12:00–18:00，要入場 ticket |
| D4 | Twaalf Apostelenhofje | 外觀／入口保底 | 住宅 monument；冇官方訪客開放資料 |
| D4 | Designer Outlet Roermond | 保留 | 2026 corporate hours 有資料，但當日 special hours 仍要覆核 |
| D5 | Grand-Place | 保留 | 公共廣場；City Hall 入內係另一個 ticketed visit |
| D5 | Atomium | 保留 | 現行 last entry 17:30；要同 Waterloo 作取捨／排先後 |
| D5 | Waterloo 1815 | 保留，但預留半日 | 位於 Braine-l’Alleud，唔係 Brussels 市內；完整參觀至少半日 |

---

## Day 1 — Saturday, 2026-10-17 — Amsterdam

### 1A. Royal Coster Diamonds

- **Verdict：二選一候選；唔同 GASSAN 同日全做。** `INFERENCE · 95%`
- **正式名稱：Royal Coster Diamonds。** `FACT · 99%`
- **地址：Paulus Potterstraat 2, 1071 CZ Amsterdam, Netherlands。** `FACT · 99%`
- **座標：52.35957789, 4.88318291（lat, lng）。** `FACT · 97%`
- **2026-10 到訪限制：**boutique 官方現行時間每日 09:00–17:00，17:00 後只可預約；Diamond Factory Tour 官方列約 30 分鐘並提供預約。官方頁面未提供 2026-10-17 特別時間表，所以要出發前再核。`FACT · 96%`（現行規則）；`UNKNOWN · 60%`（當日例外）
- **預約／無障礙：**tour 頁有 booking 流程，並列明 tour 不適合輪椅進入。`FACT · 98%`
- **約需時間：30 分鐘 tour；連 check-in／等候建議留 45–60 分鐘。** 前半為 `FACT · 98%`；buffer 為 `INFERENCE · 90%`。
- **PDF 修正：**如果 PDF／舊資料仍寫免費，唔可沿用；現行 standard factory tour 係收費產品，但 V1 可省略易變價錢。`FACT · 95%`
- **Official sources：**[Visit our boutique](https://www.royalcoster.com/en/about/visit-our-boutique) `[curl -sIL: 200]`；[Diamond Factory Tour](https://www.royalcoster.com/en/tours-and-workshops/diamond-factory-tour/) `[curl -sIL: 200]`。
- **Maps：**[Paulus Potterstraat 2](https://www.google.com/maps/search/?api=1&query=Paulus+Potterstraat+2%2C+1071+CZ+Amsterdam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Royal Coster 係 Museumplein 一帶嘅鑽石工場。Factory Tour 約 30 分鐘；公開時段到 17:00 左右。落機後如果未能喺 15:45 前到酒店，今日就唔勉強塞入，直接保留 Madame Tussauds／晚餐時間。

Copy evidence：正式資料 `FACT · 96%`；15:45 cutoff `INFERENCE · 85%`。

### 1B. HOUSE of GASSAN

- **Verdict：二選一候選；若想減少 D1 橫跨城市，GASSAN 地理上較接近 Amsterdam Centraal／酒店一帶。** 地址事實 `FACT · 99%`；路線判斷 `INFERENCE · 92%`。
- **正式名稱：HOUSE of GASSAN；tour 名稱為 Diamond Experience Tour。** `FACT · 99%`
- **地址：Nieuwe Uilenburgerstraat 173–175, 1011 LN Amsterdam, Netherlands。** `FACT · 99%`
- **座標：52.36958740, 4.90406648（以門牌 173 作 anchor）。** `FACT · 96%`
- **2026-10 到訪限制：**HQ 現行每日 09:00–17:30；Diamond Experience Tour 全年每週 7 日、09:00–17:00，約 1 小時。官方未公布 2026-10-17 特別例外。`FACT · 97%`（現行）；`UNKNOWN · 60%`（當日例外）
- **預約：**官方提供 tour 預約流程；V1 應視落機日為「預約優先」，但唔應聲稱 walk-in 必定有位。`FACT · 95%`；walk-in `UNKNOWN · 45%`。
- **約需時間：1 小時；連等候建議留 75 分鐘。** 前者 `FACT · 98%`；buffer `INFERENCE · 90%`。
- **Official sources：**[HOUSE of GASSAN HQ](https://www.gassan.com/en/stores/house-of-gassan-hq) `[curl -sIL: 200]`；[Diamond Experience Tour](https://www.gassan.com/en/tours/diamond-experience-tour) `[curl -sIL: 200]`。
- **Maps：**[Nieuwe Uilenburgerstraat 173–175](https://www.google.com/maps/search/?api=1&query=Nieuwe+Uilenburgerstraat+173-175%2C+1011+LN+Amsterdam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> GASSAN Diamond Experience 約 1 小時，公開 tour 一般最遲 17:00。呢日只揀 GASSAN 或 Royal Coster 其中一個；確認到達時間同 booking slot 先落實。

Copy evidence：`FACT · 97%`；二選一 `INFERENCE · 95%`。

### 2. Madame Tussauds Amsterdam

- **Verdict：保留，但當成要揀 time slot 嘅 ticketed attraction。** `FACT · 97%`
- **正式名稱：Madame Tussauds Amsterdam。** PDF 所寫「The Amazing Wax Museum」唔係正式名稱。`FACT · 99%`
- **地址：Dam 20, 1012 NP Amsterdam, Netherlands。** `FACT · 99%`
- **座標：52.37263113, 4.89243263。** `FACT · 97%`
- **2026-10-17 營業時間：未能驗證。** 官方 opening-hours 頁目前顯示現行日曆／當日時間，但未提供可鎖定 2026-10-17 嘅穩定時間表。`UNKNOWN · 100%`
- **預約：**官方 FAQ 建議預先揀 time slot；現場售票唔保證即時入場；weekend 較繁忙。`FACT · 98%`
- **約需時間：平均約 1 小時；官方 opening-hours 頁亦提示最後時段要預留約 1.5 小時。V1 建議留 75–90 分鐘。** 官方平均 `FACT · 97%`；V1 buffer `INFERENCE · 92%`。
- **路線：**官方稱由 Amsterdam Centraal 步行約 10 分鐘。`FACT · 95%`
- **Official sources：**[Opening hours](https://www.madametussauds.com/amsterdam/en/plan-your-visit/opening-hours-location-directions/opening-hours/) `[curl -sIL: 200]`；[FAQ](https://www.madametussauds.com/amsterdam/en/plan-your-visit/information/faq/) `[curl -sIL: 200]`；[Location & directions](https://www.madametussauds.com/amsterdam/en/plan-your-visit/opening-hours-location-directions/location-directions/) `[curl -sIL: 200]`。
- **Maps：**[Dam 20](https://www.google.com/maps/search/?api=1&query=Dam+20%2C+1012+NP+Amsterdam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Madame Tussauds Amsterdam 喺 Dam 20。星期六通常較多人，先揀入場時段；如果航班、行李或酒店 check-in 延誤，先睇 ticket 可否改期，唔好硬趕。

Copy evidence：位置／繁忙／time slot `FACT · 97%`；延誤處理 `INFERENCE · 95%`。

### Day 1 動線壓力測試

- `UNKNOWN · 70%` PDF 寫 13:15 落地，但未以航空公司 confirmation 驗證；入境、行李、交通、check-in 所需時間亦未知。
- `INFERENCE · 95%` 兩間鑽石場公開 tour 都約 17:00 截止；Madame Tussauds 又係星期六 time-slot attraction。**三項全做唔係穩健 V1。**
- `INFERENCE · 92%` Default：只揀一間鑽石場；如果酒店到達／寄存行李明顯延誤，就砍鑽石場，保留一個可控嘅 evening slot。

---

## Day 2 — Sunday, 2026-10-18 — Zaanse Schans／Amsterdam

### 3. Zaanse Schans

- **Verdict：保留，但要分清「村區」同「每個收費景點」。** `FACT · 99%`
- **正式名稱：Zaanse Schans。** `FACT · 99%`
- **導航／停車地址：Schansend 7, 1509 AW Zaandam, Netherlands。** `FACT · 98%`
- **座標：52.47363268, 4.82232391。** `FACT · 97%`
- **2026-10 到訪限制：**公共村區全年 365 日可到訪、無整區入場費；多數 attraction 一般約 09:00–17:00，但每間風車、museum、shop 各自開放，亦唔保證每日全開。官方有逐日 calendar，但 2026-10-18 各 venue 最終狀態要臨近再核。`FACT · 98%`；當日細節 `UNKNOWN · 65%`。
- **住戶私隱：**區內有真實住戶，住宅不可入內。`FACT · 99%`
- **交通：**官方 visitor info 指 Amsterdam Centraal 至 Zaandijk–Zaanse Schans 火車約 17 分鐘，再步行約 15 分鐘；目前巴士有改道，所以官方建議火車。巴士狀況到 2026-10 可能變，V1 要用出發當日 public-transport planner。`FACT · 94%`（現行）；2026 路線 `UNKNOWN · 60%`。
- **季節限制：**官方列出嘅 bicycle taxi 只營運 4 月 1 日至 10 月 1 日，10 月 18 日唔可當成接駁。`FACT · 97%`
- **約需時間：2.5–4 小時。** `INFERENCE · 90%`，取決於入幾多個場館。
- **Official sources：**[Official contact／visitor info](https://www.zaanseschans.com/en/contact/) `[curl -sIL: 200]`；[Official opening-hours calendar](https://www.dezaanseschans.nl/en/plan-your-visit/opening-hours/) `[curl -sIL: 200]`。
- **Maps：**[Schansend 7](https://www.google.com/maps/search/?api=1&query=Schansend+7%2C+1509+AW+Zaandam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Zaanse Schans 村區全年可行，但每間風車同 museum 有自己時間。出發前一晚睇官方逐日 calendar；交通 default 揀火車去 Zaandijk–Zaanse Schans，再步行約 15 分鐘。10 月冇 bicycle taxi。

Copy evidence：`FACT · 96%`；「前一晚再睇」係操作建議 `INFERENCE · 98%`。

### 4. Het Noorderhuis（PDF：Heerlijck Slaapen op de Zaanse Schans）

- **Verdict：從住宿／可入內景點改成「只可遠觀嘅歷史住宅」。** `FACT · 99%`
- **目前官方識別：Kalverringdijk 17／Het Noorderhuis；官方分類為 residential house。** `FACT · 98%`
- **地址：Kalverringdijk 17, 1509 BT Zaandam, Netherlands。** 地址 register 座標以 17A 作 anchor。`FACT · 95%`
- **座標：52.47264396, 4.81598386。** `FACT · 95%`
- **開放／預約：**有人居住，**不可參觀內部**；冇訪客時段，亦唔係 V1 可預約 attraction。`FACT · 99%`
- **約需時間：外觀 5–10 分鐘。** `INFERENCE · 95%`
- **PDF 風險：**「Heerlijck Slaapen」屬舊／混淆名稱，容易令人以為仍可住宿或參觀；V1 唔應顯示 booking CTA。`FACT · 96%`；移除 CTA `INFERENCE · 99%`。
- **Official source：**[Official Zaanse Schans property page](https://www.zaanseschans.com/en/peaceful-slumber-in-the-zaanse-schans/) `[curl -sIL: 200]`。
- **Maps：**[Kalverringdijk 17](https://www.google.com/maps/search/?api=1&query=Kalverringdijk+17%2C+1509+BT+Zaandam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Het Noorderhuis 係有人住嘅歷史屋，只可以喺公共路段望外觀。唔好入院、敲門或當成民宿景點。

Copy evidence：`FACT · 99%`。

### 5. Amsterdam canal cruise（未指定 operator）

- **Verdict：保留活動，但 V1 唔可以擅自揀船公司、碼頭或夜航班次。** `INFERENCE · 100%`
- **正式名稱／地址／座標：未有單一答案。** I amsterdam 官方 visitor ticket 包含多個 participating operators／departure points；未選 operator 前，碼頭地址、無障礙、洗手間、班次都係 `UNKNOWN · 100%`。
- **現行一般資料：**官方 generic canal-cruise ticket 最少約 1 小時；揀參與 operator 同出發點，班次因 operator 而異。該 generic product 現行寫明毋須預約，但呢個規則不可推論到任何其他晚間船公司。`FACT · 96%`
- **如用 I amsterdam City Card：**官方現行 included cruise 時段每日 10:00–18:00，毋須預約，按參與碼頭下一班；**PDF 所講黃昏／夜晚如果超過 18:00，就唔可假設 City Card cruise 適用。** `FACT · 96%`；2026-10 exact operator schedule `UNKNOWN · 65%`。
- **約需時間：船程至少 1 小時；連報到／等候留 90 分鐘。** 前者 `FACT · 97%`；buffer `INFERENCE · 92%`。
- **Official sources：**[I amsterdam canal-cruise ticket](https://www.iamsterdam.com/en/tickets/canal-cruise-ticket) `[curl -sIL: 200]`；[City Card canal cruise](https://www.iamsterdam.com/en/tickets/i-amsterdam-city-card/canal-cruise-with-the-i-amsterdam-city-card) `[curl -sIL: 200]`。
- **Maps：N/A。** 未揀 operator／departure point，刻意唔提供假碼頭。

**V1 可用 copy**

> 運河船未揀船公司，所以碼頭同班次暫未鎖定。如果用 City Card，現行 included cruise 係 10:00–18:00；想坐黃昏／夜航，就要另揀有夜班嘅 operator，再確認出發碼頭同報到時間。

Copy evidence：`FACT · 96%`；「另揀 operator」`INFERENCE · 100%`。

### 6. De Wallen／Zeedijk

- **Verdict：保留成自助步行區；唔好叫「大蔴街」。** `FACT · 98%`
- **正式名稱：De Wallen（neighbourhood）及 Zeedijk（street），Amsterdam, Netherlands。** 兩者都冇單一完整門牌地址或可靠單點座標，所以刻意省略 lat/lng。`FACT · 99%`
- **開放／預約：**公共街區本身冇 attraction opening hours，兩人自助步行毋須預約；商戶各自營業。`FACT · 95%`
- **行為提示：**Amsterdam 市府資料指出拍攝／錄影性工作者會損害私隱，現場亦有「唔好拍攝」標示；V1 應直接提示唔好影／拍。官方 council letter 同時解釋過全面公共空間攝影禁令執法上不可行，所以唔應寫成一條無例外嘅「全區刑事禁攝法」。`FACT · 96%`
- **如係 guided group：**市府規則列 guided groups 上限 15 人；5–15 人要 exemption；guided tours 08:00–22:00，亦不可經過 sex-work windows。兩人自助步行唔等同 guided group。`FACT · 95%`
- **約需時間：45–60 分鐘。** `INFERENCE · 88%`
- **PDF 修正／風險：**Zeedijk 唔係「大蔴街」；夜間人多，V1 應提示保持一齊、保管電話銀包、尊重住戶同工作者。名稱 `FACT · 99%`；安全提示 `INFERENCE · 95%`。
- **Official sources：**[I amsterdam — De Wallen](https://www.iamsterdam.com/en/explore/neighbourhoods/centrum/things-to-do-in-de-wallen-red-light-district) `[curl -sIL: 200]`；[City of Amsterdam guided-tour rules PDF](https://assets.amsterdam.nl/publish/pages/935967/flyer_with_rules_for_guided_tours.pdf) `[curl -sIL: 200]`；[City council information letter on prostitution／photography](https://assets.amsterdam.nl/publish/pages/1046724/council_information_letter_prostitution.pdf) `[curl -sIL: 200]`。
- **Maps：**[De Wallen area](https://www.google.com/maps/search/?api=1&query=De+Wallen%2C+Amsterdam%2C+Netherlands) `[curl -sIL: 200]`；[Zeedijk](https://www.google.com/maps/search/?api=1&query=Zeedijk%2C+Amsterdam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> 今晚係 De Wallen／Zeedijk 自助步行，唔係「大蔴街」景點。唔好影或拍攝性工作者；人多時一齊行、手機銀包放好。想離開就直接沿 Zeedijk／Damrak 返回中央區，唔需要完成固定路線。

Copy evidence：名稱／拍攝 `FACT · 97%`；安全／退出路線 `INFERENCE · 90%`。

---

## Day 3 — Monday, 2026-10-19 — Rotterdam／Yerseke／The Hague

### 7. Kijk-Kubus（Cube Houses interior）

- **Verdict：外觀保底；室內 only after reconfirmation。** `FACT · 99%`
- **正式名稱：Kijk-Kubus (Show-Cube)／Kijk-Kubus Museum-house；建築群俗稱 Cube Houses。** `FACT · 98%`
- **地址：Overblaak 70, 3011 MH Rotterdam, Netherlands。** `FACT · 99%`
- **座標：51.92018545, 4.49056880。** `FACT · 97%`
- **2026-10-19 opening／booking：未能可靠驗證。** 官方 Visit 頁同一頁同時殘留 COVID closed 文案、10:00–18:00、11:00–17:00 同 reservation-by-email 等互相衝突內容。任何一組都唔應硬寫入 V1。`UNKNOWN · 100%`
- **約需時間：外觀 10–15 分鐘；如室內證實開放，合計約 30 分鐘。** `INFERENCE · 92%`
- **Official source：**[Kijk-Kubus official Visit page](https://www.kubuswoning.nl/en/visit.html) `[curl -sIL: 200]`。注意：HTTP 200 只證明 URL 可開，唔解決頁內資料衝突。
- **Maps：**[Overblaak 70](https://www.google.com/maps/search/?api=1&query=Overblaak+70%2C+3011+MH+Rotterdam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Cube Houses 外觀一定放入路線；Kijk-Kubus 室內暫時唔承諾，因官方 Visit 頁時間互相矛盾。到訪前再核一次；未核到就影外觀，直接行去 Markthal。

Copy evidence：`FACT · 99%`；fallback `INFERENCE · 100%`。

### 8. Blaaktoren／Het Potlood

- **Verdict：只列建築外觀，唔設入場 CTA。** `FACT · 98%`
- **正式名稱：Blaaktoren；別稱 Het Potlood／Schreierstoren；建築師 Piet Blom。** `FACT · 97%`
- **導航 anchor：Kolk 46, 3011 MD Rotterdam, Netherlands。** 呢個係官方地址 register anchor，唔代表公共入口。`FACT · 94%`
- **座標：51.92063156, 4.49041511。** `FACT · 96%`
- **開放／預約：**住宅塔樓，未有官方 visitor interior／opening hours；V1 只顯示外觀。`FACT · 95%`；任何入內可能性 `UNKNOWN · 100%`。
- **約需時間：5–10 分鐘外觀。** `INFERENCE · 95%`
- **Official source：**[Municipality of Rotterdam planning document](https://tile.gis.rotterdam.nl/gw2data/data/dsv/bestemmingsplannen_vig/voorschriften/1054.pdf) `[curl -sIL: 200]`。
- **Maps：**[Blaaktoren／Kolk search](https://www.google.com/maps/search/?api=1&query=Blaaktoren%2C+Kolk%2C+Rotterdam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Blaaktoren（Het Potlood）係住宅建築，只睇外觀。佢同 Cube Houses、Markthal 係同一個步行 cluster，唔使駕車逐點跳。

Copy evidence：住宅／名稱 `FACT · 96%`；步行 cluster `INFERENCE · 98%`。

### 9. Markthal Rotterdam

- **Verdict：保留，連同 Cube Houses／Blaaktoren 一次步行完成。** `INFERENCE · 99%`
- **正式名稱：Markthal Rotterdam。** PDF「Market Hall／拱形廣場」唔準確；佢係室內 market／住宅拱形建築，唔係「廣場」。`FACT · 98%`
- **地址：Ds. Jan Scharpstraat 298, 3011 GZ Rotterdam, Netherlands。** `FACT · 99%`
- **座標：51.91977096, 4.48625924。** `FACT · 97%`
- **現行時間：星期一至四 10:00–20:00；星期五 10:00–21:00；星期六 10:00–20:00；星期日 12:00–18:00。2026-10-19 係星期一，所以若無特別安排就係 10:00–20:00；各檔可有自己時間。** `FACT · 96%`（現行）；當日例外 `UNKNOWN · 65%`。
- **預約：**進入市場公共範圍唔需要一般入場預約；個別餐廳另計。`FACT · 94%`
- **約需時間：30–60 分鐘；三個 Blaak cluster 合計約 45–90 分鐘。** `INFERENCE · 92%`
- **Official source：**[Markthal official site](https://markthal.nl/) `[curl -sIL: 200]`。
- **Maps：**[Ds. Jan Scharpstraat 298](https://www.google.com/maps/search/?api=1&query=Ds.+Jan+Scharpstraat+298%2C+3011+GZ+Rotterdam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Markthal 星期一現行時間係 10:00–20:00，各檔可以早收。Cube Houses → Blaaktoren → Markthal 全部步行做；如果 Kijk-Kubus 室內未確認，就將時間留俾市場食嘢。

Copy evidence：時間／檔戶差異 `FACT · 96%`；route `INFERENCE · 99%`。

### 10. Noordeinde Palace

- **Verdict：改成宮殿外觀；10 月唔可安排入內。** `FACT · 99%`
- **正式名稱：Noordeinde Palace（Paleis Noordeinde）。** `FACT · 99%`
- **地址：Noordeinde 68, 2514 GL Den Haag (The Hague), Netherlands。** `FACT · 99%`
- **座標：52.08100521, 4.30667075。** `FACT · 97%`
- **開放：**Royal House 官方指宮殿係國王工作場所，只喺少數夏季日子公開；The Hague 官方 visitor page 亦列明一般唔對個人參觀開放。2026-10-19 只可由公共空間睇外觀。`FACT · 99%`
- **預約：**10 月冇一般 interior reservation。Palace Garden 係另一個公共空間，當日 exact garden hours 要再核。`FACT · 97%`；garden exact hours `UNKNOWN · 100%`。
- **約需時間：外觀 10–15 分鐘；如加 Palace Garden 留 30–45 分鐘。** `INFERENCE · 93%`
- **PDF 風險：**若寫成 palace visit／tour，會令人誤以為可入內。`INFERENCE · 100%`
- **Official sources：**[Royal House — Noordeinde Palace](https://www.royal-house.nl/topics/palaces/noordeinde-palace) `[curl -sIL: 200]`；[Royal House — Palaces/public opening](https://www.royal-house.nl/topics/palaces) `[curl -sIL: 200]`；[The Hague official visitor page](https://denhaag.com/en/palace-noordeinde) `[curl -sIL: 200]`。
- **Maps：**[Noordeinde 68](https://www.google.com/maps/search/?api=1&query=Noordeinde+68%2C+2514+GL+The+Hague%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Noordeinde Palace 係國王工作場所，10 月唔開放一般室內參觀。今站只睇門面；想散步先再睇 Palace Garden 當日時間，唔需要為宮殿留一個 tour slot。

Copy evidence：`FACT · 99%`。

### 11. SkyView de Pier

- **Verdict：保留，放喺日尾比 Oesterij 更穩健。** 正式資料 `FACT · 98%`；排序 `INFERENCE · 96%`。
- **正式名稱：SkyView de Pier。** `FACT · 99%`
- **地址：Strandweg 156, 2586 JW Scheveningen, Den Haag, Netherlands。** `FACT · 99%`
- **座標：52.11554259, 4.28338569。** `FACT · 97%`
- **現行時間：星期一至四／星期日 11:00–21:00；星期五、六 11:00–22:00。2026-10-19 係星期一，所以若無例外就到 21:00；ticket desk 早約 10 分鐘關。** `FACT · 96%`；2026 當日例外 `UNKNOWN · 65%`。
- **季節／天氣：**官方寫全年 365 日營運，車廂密閉及有 climate control；但天氣、安全檢查或維修仍可能造成臨時停運，出發前要睇 live notice。`FACT · 96%`；臨時狀態 `UNKNOWN · 100%`。
- **預約：**可網上或現場買票；官方 Pier 頁稱一般等候通常少於 10 分鐘，但唔係到訪日保證。`FACT · 94%`
- **約需時間：一圈 12–15 分鐘；連 Pier 步行／排隊留 30–45 分鐘。** 前者 `FACT · 98%`；buffer `INFERENCE · 94%`。
- **Official sources：**[SkyView official home](https://skyviewdepier.nl/) `[curl -sIL: 200]`；[SkyView opening hours](https://skyviewdepier.nl/products/opening-hours/) `[curl -sIL: 200]`；[De Pier official page](https://pier.nl/reuzenrad-op-de-pier/) `[curl -sIL: 200]`。
- **Maps：**[Strandweg 156](https://www.google.com/maps/search/?api=1&query=Strandweg+156%2C+2586+JW+The+Hague%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> SkyView 一圈約 12–15 分鐘，星期一現行營業到 21:00，售票處會早少少關。出發前睇天氣同營運消息；如果臨時停駛，就留喺 Scheveningen 海邊散步，唔需要等。

Copy evidence：時間／車程 `FACT · 96%`；Plan B `INFERENCE · 99%`。

### 12. Oesterij／Oesterfestival 2026

- **Verdict：保留，並升格為 Day 3 唯一硬 closing-time 活動。** `FACT · 100%`
- **正式名稱：Oesterij；2026-10-17 至 19 活動名為 Oesterfestival。** PDF「Yerseke Olyster Farm」有錯字；`Olyster` 應為 oyster，而 visitable product 唔應籠統寫成「farm tour」。`FACT · 99%`
- **地址：Havendijk 12, 4401 NS Yerseke, Netherlands。** `FACT · 100%`
- **座標：51.49300474, 4.05318787。** `FACT · 97%`
- **2026-10-19 exact event：Oesterfestival 12:00–18:00，入場需要 ticket。** `FACT · 100%`
- **一般 Oesterij：**shop／tasting 現行每日 10:00–18:00；tasting room 不接受餐桌 reservation。`FACT · 98%`
- **季節限制：**一般 Oesterij Experience 只在 4–9 月、而且係荷蘭語，10 月 19 日不可當成 drop-in experience；全年 grounds tour 需另行安排，唔等同 festival ticket。`FACT · 98%`
- **停車：**festival 官方建議用 Zaetepolder car park 並跟 festival signs。`FACT · 96%`
- **約需時間：festival 建議 1.5–2.5 小時。** `INFERENCE · 90%`
- **cutoff：**建議最遲約 16:30 到先保留基本體驗 buffer；呢個唔係官方 last admission，而係行程安全線。`INFERENCE · 88%`
- **Official sources：**[Address & opening hours](https://www.oesterij.nl/adres-openingstijden) `[curl -sIL: 200]`；[Official 2026 calendar](https://www.oesterij.nl/en/visit-us/calender) `[curl -sIL: 200]`；[Oesterfestival practical info](https://www.oesterij.nl/oesterfestival/info) `[curl -sIL: 200]`。
- **Maps：**[Havendijk 12](https://www.google.com/maps/search/?api=1&query=Havendijk+12%2C+4401+NS+Yerseke%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> 今日 Oesterij 正值 Oesterfestival：12:00–18:00，入場要有 ticket。呢個係今日硬時段，唔係隨時到嘅 oyster farm tour；最遲約 16:30 未到，就唔再壓縮其他車程。泊車跟現場牌去 Zaetepolder。

Copy evidence：event／ticket／地址 `FACT · 100%`；16:30 cutoff `INFERENCE · 88%`。

### Day 3 動線壓力測試／建議排序

- `UNKNOWN · 100%` PDF 寫「Rotterdam → Noordeinde 30 分鐘、The Pier → Yerseke 1.5 小時、Yerseke → Rotterdam 1 小時」，但冇官方 route/timestamp 證據；交通、泊車、星期一狀況會令數字浮動，V1 唔應顯示為保證。
- `INFERENCE · 98%` 原順序「Rotterdam → The Hague／Scheveningen → Yerseke → Rotterdam」將唯一 18:00 hard-close 嘅 Oesterfestival 放喺後段，仲有來回折返，風險最高。
- `INFERENCE · 95%` 建議 V1 default：**Amsterdam → Rotterdam Blaak cluster → Oesterij／Oesterfestival → Noordeinde exterior → SkyView → Rotterdam hotel。** Oesterij 先鎖死 18:00 cutoff；SkyView 現行星期一去到 21:00，適合放日尾。
- `INFERENCE · 97%` 如果早段延誤：Kijk-Kubus 室內首先砍；Noordeinde 只留 10 分鐘外觀；Oesterfestival ticket 同 SkyView live status 決定最後取捨。

---

## Day 4 — Tuesday, 2026-10-20 — Maastricht／Roermond

### 13. HUIS der Twaalf Apostelen, genaamd De Belick

- **Verdict：外觀／入口保底，唔承諾入 courtyard。** `FACT · 98%`
- **正式登錄名稱：HUIS der Twaalf Apostelen, genaamd De Belick；常用稱呼 Twaalf Apostelenhofje。** `FACT · 99%`
- **導航地址：Bogaardenstraat 1M-09, 6211 SM Maastricht, Netherlands。** 呢個係 monument/address-register anchor；建築由多個住宅單元組成。`FACT · 96%`
- **座標：50.85277868, 5.68801989。** `FACT · 96%`
- **開放／預約：未能搵到官方訪客 opening hours 或公開入內安排。** 官方 monument register 列原始功能為住宅。V1 應當成 residential monument，只由公共路段望入口；冇清楚現場邀請就唔入內。`FACT · 97%`；公開進入 `UNKNOWN · 100%`。
- **約需時間：10–15 分鐘外觀。** `INFERENCE · 95%`
- **PDF 風險：**「Twelve Apostles’ Courtyard」似一個正式開放 attraction，但官方證據唔支持。`INFERENCE · 99%`
- **Official source：**[Dutch Cultural Heritage Agency monument register](https://monumentenregister.cultureelerfgoed.nl/monumenten/26722) `[curl -sIL: 200]`。
- **Maps：**[Bogaardenstraat 1M-09](https://www.google.com/maps/search/?api=1&query=Bogaardenstraat+1M-09%2C+6211+SM+Maastricht%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Twaalf Apostelenhofje 係住宅 monument，官方冇公布訪客開放時間。今日只睇 Bogaardenstraat 入口同外觀；閘門冇明確開放指示就唔入內。

Copy evidence：`FACT · 97%`。

### 14. Designer Outlet Roermond

- **Verdict：保留；shopping 時間按興趣伸縮。** `INFERENCE · 98%`
- **正式名稱：Designer Outlet Roermond。** `FACT · 100%`
- **地址：Stadsweide 2, 6041 TD Roermond, Netherlands。** `FACT · 99%`
- **座標：51.19981865, 5.98982457（address register 以 2A 作 anchor）。** `FACT · 96%`
- **2026 official portfolio hours：星期一至五 10:00–20:00；星期六、日 09:00–21:00。2026-10-20 係星期二，所以 base schedule 10:00–20:00。** `FACT · 98%`
- **2026-10-20 special hours：官方 outlet live page 暫時只突出當前／夏季時間，未能驗證該日有冇特別安排；出發前覆核。** `UNKNOWN · 100%`
- **預約：**進入 outlet 本身冇一般 reservation requirement；個別服務／餐廳另計。`FACT · 93%`
- **約需時間：2–4 小時。** `INFERENCE · 90%`
- **Official sources：**[Designer Outlet Roermond official page](https://www.mcarthurglen.com/en/outlets/nl/designer-outlet-roermond/) `[curl -sIL: 200]`；[McArthurGlen 2026 Tourism Portfolio update PDF](https://www.mcarthurglen.com/globalassets-v12/tourism/download-docs/788430-2026-updates-to-tourism-portfolio-guide-2.pdf) `[curl -sIL: 200]`。
- **Maps：**[Stadsweide 2](https://www.google.com/maps/search/?api=1&query=Stadsweide+2%2C+6041+TD+Roermond%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Designer Outlet Roermond 2026 平日 base hours 係 10:00–20:00。今日係星期二；到訪前再睇 special hours。預留 2–4 小時，想早返酒店就直接提早收尾。

Copy evidence：hours `FACT · 98%`；duration／early exit `INFERENCE · 92%`。

---

## Day 5 — Wednesday, 2026-10-21 — Brussels／Braine-l’Alleud

### 15. Grand-Place of Brussels

- **Verdict：保留，適合放夜晚；唔好將廣場同 City Hall 室內參觀混埋。** `FACT · 97%`；排序 `INFERENCE · 97%`。
- **正式名稱：Grand-Place of Brussels／Grand-Place。** `FACT · 100%`
- **地址：Grand-Place, 1000 Brussels, Belgium。** `FACT · 99%`
- **座標：50.84669370, 4.35252339（UrbIS street/square centroid，唔係單一門口）。** `FACT · 96%`
- **開放／預約：**公共廣場冇一般 admission／opening hours；活動、保安或工程可臨時影響部分範圍。`FACT · 96%`；2026-10-21 event restriction `UNKNOWN · 100%`。
- **City Hall：**係獨立 visit，唔應由「去 Grand-Place」推論已包室內參觀。`FACT · 99%`
- **約需時間：30–60 分鐘；餐飲另計。** `INFERENCE · 93%`
- **Official sources：**[City of Brussels — Grand-Place](https://www.brussels.be/grand-place-brussels) `[curl -sIL: 200]`；[City of Brussels — City Hall](https://www.brussels.be/city-hall) `[curl -sIL: 200]`。
- **Maps：**[Grand-Place](https://www.google.com/maps/search/?api=1&query=Grand-Place%2C+1000+Brussels%2C+Belgium) `[curl -sIL: 200]`。

**V1 可用 copy**

> Grand-Place 係公共廣場，唔需要一般入場預約，適合留到黃昏／夜晚。City Hall 入內係另一個 visit，今日冇另訂就只睇外觀。

Copy evidence：`FACT · 97%`。

### 16. Atomium

- **Verdict：保留，但要守 last-entry cutoff。** `FACT · 98%`
- **正式名稱：Atomium。** `FACT · 100%`
- **地址：Place de l’Atomium 1 / Atomiumplein 1, 1020 Brussels (Laeken), Belgium。** `FACT · 99%`
- **座標：50.89491797, 4.34151922。** `FACT · 97%`
- **現行 2026 時間：官方 home 目前列每日 10:00–18:00，ticket office／last entry 17:30；已列出嘅例外包括 10 月 1 日延遲開門，但未列 10 月 21 日例外。** `FACT · 97%`
- **2026-10-21 即日狀態：仍可能因 exceptional closure／活動改動，出發前再核。** `UNKNOWN · 100%`
- **預約：**係 ticketed attraction，官方網站有 online ticket link；為守 17:30 cutoff，預先買指定日期／時段係 V1 建議，但唔應聲稱網購係法律上必須。`FACT · 95%`；建議 `INFERENCE · 97%`。
- **約需時間：1.5–2 小時，繁忙時另加排隊。** `INFERENCE · 91%`
- **Official sources：**[Atomium official home](https://atomium.be/home/cover?lang=en) `[curl -sIL: 200]`；[City of Brussels publication containing official address](https://www.brussels.be/sites/default/files/bxl/Brusseleir_149_accFR.pdf) `[curl -sIL: 200]`。第二來源只用作地址交叉核對，唔用佢嘅舊營業時間。
- **Maps：**[Place de l’Atomium 1](https://www.google.com/maps/search/?api=1&query=Place+de+l%27Atomium+1%2C+1020+Brussels%2C+Belgium) `[curl -sIL: 200]`。

**V1 可用 copy**

> Atomium 現行每日 10:00–18:00，最遲 17:30 入場。今日如果 Waterloo 離開得遲，就唔好賭最後一刻；先決定保 Atomium 定保完整 Waterloo，再出發。

Copy evidence：hours `FACT · 97%`；取捨 `INFERENCE · 99%`。

### 17. Domaine de la Bataille de Waterloo 1815

- **Verdict：保留，但當成半日活動；地點唔係 Brussels 市中心。** `FACT · 99%`
- **正式名稱：Domaine de la Bataille de Waterloo 1815／Domain of the Battle of Waterloo 1815。** `FACT · 99%`
- **地址：Route du Lion 1815, 1420 Braine-l’Alleud, Belgium。** **行政位置係 Braine-l’Alleud，唔係 Waterloo municipality 或 Brussels。** `FACT · 100%`
- **座標：省略。** 官方 Wallonia geocoder 對門牌 1815 只回傳 street geometry，未有足夠可靠 exact point；唔用推測值。`UNKNOWN · 100%`
- **現行 9–10 月時間：site 每日 10:00–18:30；Hougoumont 11:00–18:00。2026-10-21 exact exception 未公布。** `FACT · 96%`；當日例外 `UNKNOWN · 100%`。
- **範圍：**individual ticket 涵蓋 Memorial 1815、Lion’s Mound、Panorama、Hougoumont；官方建議完整參觀用半日至全日。`FACT · 98%`
- **季節／預約：**官方 visitor info 列 4–10 月平日有 guided tours，但語言、時間同是否要預約要再確認；自助 ticket 同 guided tour 唔應混為一談。`FACT · 94%`；2026-10-21 tour slot `UNKNOWN · 100%`。
- **無障礙：**大部分 site 可達，但 Lion’s Mound 同 Hougoumont 有限制。`FACT · 97%`
- **約需時間：最少半日；如果只影 Lion’s Mound 外觀則屬被壓縮版本，唔等同完整參觀。** 前者 `FACT · 98%`；壓縮判斷 `INFERENCE · 99%`。
- **Official sources：**[Waterloo 1815 official site](https://waterloo1815.be/en) `[curl -sIL: 200]`；[Official Waterloo tourism listing](https://waterloo-tourisme.be/en/the-domain-of-the-battle-of-waterloo-1815/) `[curl -sIL: 200]`。
- **Maps：**[Route du Lion 1815](https://www.google.com/maps/search/?api=1&query=Route+du+Lion+1815%2C+1420+Braine-l%27Alleud%2C+Belgium) `[curl -sIL: 200]`。

**V1 可用 copy**

> Waterloo 1815 實際喺 Braine-l’Alleud，完整體驗要預半日至全日。9–10 月現行 site hours 係 10:00–18:30；Hougoumont 到 18:00。今日仲要去 Atomium，所以出發前先定主次，唔好將「到門口影相」當成完成整個 Waterloo。

Copy evidence：`FACT · 97%`；主次提示 `INFERENCE · 99%`。

### Day 5 動線壓力測試／建議排序

- `INFERENCE · 99%` PDF 同日塞「Roermond → Brussels、Grand-Place、Atomium、Waterloo、horse carriage、酒店」，但 Waterloo 官方本身已建議半日至全日，Atomium 17:30 last entry，屬結構性過載。
- `INFERENCE · 96%` 較合理順序：**Roermond → Waterloo 1815（早段）→ Atomium（守 17:30）→ Grand-Place 夜景 → 酒店。**
- `INFERENCE · 95%` 如果到 Waterloo 已遲過約 11:30，完整半日 Waterloo 同有 buffer 嘅 Atomium 好難兼得；V1 應即時彈出「Waterloo／Atomium 二選一」而唔係全部延遲。
- `UNKNOWN · 100%` PDF「horse carriage」冇提供 operator、官方產品頁、上落點或預約；V1 唔應顯示為已確認活動。只可放「未驗證／有空先現場睇」，或者 V1 暫時移除。

### Brussels LEZ — 自駕必查

- `FACT · 100%` Brussels Region 係 Low Emission Zone。由 2026-01-01 起，Euro 5 diesel 同 Euro 2 petrol 車不再符合 access criteria；現時要至少 Euro 6 diesel／Euro 3 petrol、CNG、LPG 才可免罰進入。
- `FACT · 99%` 所有外國註冊車輛（荷蘭註冊車除外）進入 LEZ 前要登記；免費、有效 5 年。荷蘭註冊車只有不符合 access criteria、要買 day pass／申請 exemption 時才需登記。
- `UNKNOWN · 100%` 租車車牌國家、燃料、Euro standard 同登記狀態未知道；未確認前唔可導航車入 Brussels LEZ。
- **Official sources：**[Brussels LEZ official home／2026 criteria](https://lez.brussels/mytax/?lang=en) `[curl -sIL: 200]`；[Foreign-vehicle registration](https://www.lez.brussels/mytax/en/registration) `[curl -sIL: 200]`。

**V1 可用 copy**

> 揸車入 Brussels 前先用 LEZ simulator 對車牌、燃料同 Euro standard。外國牌一般要免費登記；荷蘭牌如果合規通常毋須登記。未確認結果前，唔好直接駛入 Brussels LEZ。

Copy evidence：`FACT · 98%`；「先確認先入」`INFERENCE · 100%`。

---

## PDF 所列酒店

> 共通 verdict：以下係 PDF 候選酒店，唔係已驗證 booking。2026-10 實際房型、價錢、取消條款、泊車位同 late-arrival arrangement，一律以 booking confirmation 為準。`UNKNOWN · 100%`

### H1. Grand Hotel Amrâth Amsterdam

- **正式名稱：Grand Hotel Amrâth Amsterdam。** `FACT · 100%`
- **地址：Prins Hendrikkade 108, 1011 AK Amsterdam, Netherlands。** `FACT · 99%`
- **座標：52.37464671, 4.90387920。** `FACT · 97%`
- **現行 check-in/out：官網 direct booking 14:00 check-in；其他渠道 15:00；checkout 11:00。Reception 24/7，可免費寄存行李。** `FACT · 97%`
- **預約限制：**信用卡作 guarantee；取消規則按個別 confirmation。2026-10-17 至 19 房況未能驗證。`FACT · 96%`；房況 `UNKNOWN · 100%`。
- **V1 操作價值：**接近 Centraal，落機日可以先寄存行李再做中央區活動。地理 `FACT · 96%`；操作建議 `INFERENCE · 97%`。
- **Official source：**[Hotel FAQ](https://www.amrathamsterdam.com/en/faq) `[curl -sIL: 200]`。
- **Maps：**[Prins Hendrikkade 108](https://www.google.com/maps/search/?api=1&query=Prins+Hendrikkade+108%2C+1011+AK+Amsterdam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Grand Hotel Amrâth Amsterdam reception 24 小時；官網 direct booking 現行 14:00 check-in，其他渠道可能 15:00，11:00 check-out。實際以你張 confirmation 為準；未到房鐘可以先寄存行李。

### H2. Suite Hotel Pincoffs

- **正式名稱：Suite Hotel Pincoffs。** `FACT · 100%`
- **地址：Stieltjesstraat 34, 3071 JX Rotterdam, Netherlands。** `FACT · 99%`
- **座標：51.91091980, 4.49694432（address register 以 34A 作 anchor）。** `FACT · 96%`
- **現行 check-in/out：15:00 check-in；11:30 checkout。** `FACT · 98%`
- **取消／泊車：**官方現行 FLEX rate 可於到達前 72 小時免費取消；Pay & Save 不可退款。酒店泊車必須預留。實際 rate rules 以 confirmation 為準。`FACT · 97%`
- **交通：**酒店 FAQ 指 Bus 32 可直達 Markthal／Cube Houses／Blaak。2026-10 exact timetable 未核。`FACT · 94%`；當日班次 `UNKNOWN · 100%`。
- **Official source：**[Hotel FAQ](https://www.hotelpincoffs.nl/en/faq-s) `[curl -sIL: 200]`。
- **Maps：**[Stieltjesstraat 34](https://www.google.com/maps/search/?api=1&query=Stieltjesstraat+34%2C+3071+JX+Rotterdam%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Suite Hotel Pincoffs 現行 15:00 check-in、11:30 check-out。揸車要預留酒店泊車；如果搭 public transport 去 Blaak cluster，出發當日再查 Bus 32 班次。

### H3. Hotel Dux

- **正式名稱：Hotel Dux。** `FACT · 100%`
- **地址：Roerkade 11, 6041 KZ Roermond, Netherlands。** `FACT · 99%`
- **座標：51.19559723, 5.98417987。** `FACT · 97%`
- **房型修正：**官方 Club Deluxe 頁列房型適合 2 位成人，並描述 2 張 boxspring 組成 king-size sleeping arrangement；所以 PDF「沒雙人房」唔可以當成酒店整體事實。實際要 twin 分床定一張 king 必須向 booking confirmation 核對。`FACT · 96%`；指定日期床型 `UNKNOWN · 100%`。
- **Reception／泊車：**reception 現行每日 07:00–23:00；酒店有限泊車要預約，garage 不適合大型 SUV。`FACT · 98%`
- **Exact check-in/out：未能喺採用嘅官方頁穩定驗證。** `UNKNOWN · 100%`
- **Official sources：**[Contact](https://www.hoteldux.nl/en/contact/) `[curl -sIL: 200]`；[Club Deluxe room](https://www.hoteldux.nl/en/hotelrooms/club-deluxe) `[curl -sIL: 200]`；[About／parking／reception](https://www.hoteldux.nl/en/about-dux) `[curl -sIL: 200]`。
- **Maps：**[Roerkade 11](https://www.google.com/maps/search/?api=1&query=Roerkade+11%2C+6041+KZ+Roermond%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Hotel Dux 有可住 2 位成人嘅 room type；PDF「冇雙人房」唔準確。床係 twin 分開定 king setup，要睇 confirmation。酒店泊車位有限、要預留，大型 SUV 亦未必入到 garage。

### H4. Van der Valk Hotel Het Arresthuis

- **正式名稱：Van der Valk Hotel Het Arresthuis／Het Arresthuis。** `FACT · 100%`
- **地址：Pollartstraat 7, 6041 GC Roermond, Netherlands。** `FACT · 99%`
- **座標：51.19483914, 5.98928660。** `FACT · 97%`
- **Arrival constraint：**官方 reservation info 要求 check-in 出示 ID；reservation guarantee 到 18:00，會遲到就要預先通知酒店。`FACT · 99%`
- **泊車：**酒店住客可由到達日 12:00 停至離開日 12:00。呢個泊車 window 唔等同 room check-in/out。`FACT · 98%`
- **Exact room check-in/out／2026-10-20 房況：未能驗證。** `UNKNOWN · 100%`
- **Official source：**[Reservation information](https://www.hetarresthuis.nl/en/reservation-information) `[curl -sIL: 200]`。
- **Maps：**[Pollartstraat 7](https://www.google.com/maps/search/?api=1&query=Pollartstraat+7%2C+6041+GC+Roermond%2C+Netherlands) `[curl -sIL: 200]`。

**V1 可用 copy**

> Het Arresthuis reservation 只 guarantee 到 18:00；如果 outlet 行到夜晚，出發前要按 confirmation 做 late-arrival 安排。Check-in 要帶 ID。泊車 12:00 window 唔等同房間 check-in 時間。

### H5. Le Plaza Hotel Brussels

- **正式名稱：Le Plaza Hotel Brussels／Hotel Le Plaza Brussels。** `FACT · 100%`
- **地址：Boulevard Adolphe Max 118–126, 1000 Brussels, Belgium。** `FACT · 99%`
- **座標：50.85445874, 4.35638979（UrbIS 以門牌 118 作 anchor）。** `FACT · 96%`
- **現行 check-in/out：15:00 check-in；12:00 checkout；酒店全年每日 24 小時開放。** `FACT · 98%`
- **取消／泊車：**官網／電話 eligible booking 現行可於到達前一日 16:00 前取消；實際 rate plan 以 confirmation 為準。酒店強烈建議預留泊車。`FACT · 96%`
- **2026-10-21 房況：未能驗證。** `UNKNOWN · 100%`
- **Official source：**[Official Stay page](https://www.leplaza-brussels.be/en/stay/) `[curl -sIL: 200]`。
- **Maps：**[Boulevard Adolphe Max 118–126](https://www.google.com/maps/search/?api=1&query=Boulevard+Adolphe+Max+118-126%2C+1000+Brussels%2C+Belgium) `[curl -sIL: 200]`。

**V1 可用 copy**

> Le Plaza 現行 15:00 check-in、12:00 check-out，24 小時開放。揸車住呢度最好預留泊車；取消條款以實際 rate confirmation 為準。

### H6. Warwick Brussels Grand-Place

- **正式名稱：Warwick Brussels Grand-Place。** `FACT · 100%`
- **地址：Rue Duquesnoy 5, 1000 Brussels, Belgium。** `FACT · 99%`
- **座標：50.84523575, 4.35444186。** `FACT · 97%`
- **位置：**酒店官方形容距離 Grand-Place 幾步，亦近 Brussels Central Station。`FACT · 96%`
- **Exact check-in/out、泊車、取消、late-arrival 及 2026-10-21 房況：未能以通過 URL gate 嘅官方頁面可靠驗證；全部用 booking confirmation。** `UNKNOWN · 100%`
- **Official source：**[Warwick Brussels official page](https://www.warwickhotels.com/warwick-brussels) `[curl -sIL: 200]`。
- **Maps：**[Rue Duquesnoy 5](https://www.google.com/maps/search/?api=1&query=Rue+Duquesnoy+5%2C+1000+Brussels%2C+Belgium) `[curl -sIL: 200]`。

**V1 可用 copy**

> Warwick Brussels Grand-Place 喺 Rue Duquesnoy 5，近 Grand-Place 同 Central Station。Check-in、泊車同取消時間未喺可驗證官網頁鎖定，全部跟你張 booking confirmation，網站唔填估算值。

---

## Must-confirm before trip

### 優先級 A — 唔確認就會直接破壞行程

1. **Oesterfestival ticket／到達時間**：確認 2026-10-19 ticket 已有、入場條件冇改；官方 exact hours 12:00–18:00。`FACT · 100%`
2. **Day 5 主次**：決定 Waterloo 完整半日，定 Atomium 17:30 last entry；唔好等當日延誤先臨場諗。`INFERENCE · 99%`
3. **Brussels LEZ**：攞到租車先查車牌國家、fuel、Euro standard；按 official simulator 結果完成所需 registration／day pass／exemption。`FACT · 99%`
4. **Day 1 真實航班／arrival**：用 airline confirmation 核到達時間；只 book 一間鑽石場，並核其 cancellation／late policy；Madame Tussauds slot 同樣要有改期 Plan B。`INFERENCE · 98%`
5. **酒店 booking confirmations**：逐晚鎖定 hotel、room/bed setup、地址、check-in/out、late arrival、parking、cancellation。Het Arresthuis 尤其要處理 18:00 guarantee cutoff。`FACT · 98%`

### 優先級 B — 出發前 7–14 日重查

6. Zaanse Schans 2026-10-18 逐 venue calendar；確認要入邊幾間風車／museum。`UNKNOWN · 100%`
7. Canal cruise operator、departure pier、報到時間、night schedule、無障礙／洗手間需要；未揀 operator 前唔設導航。`UNKNOWN · 100%`
8. Kijk-Kubus 2026-10-19 室內究竟開唔開、正確 opening hours、booking method；官網文字仍矛盾就只做 exterior。`UNKNOWN · 100%`
9. SkyView 2026-10-19 live status／weather／special hours。`UNKNOWN · 100%`
10. Designer Outlet Roermond 2026-10-20 special hours。`UNKNOWN · 100%`
11. Atomium 2026-10-21 special closure／last-entry policy；Waterloo guided-tour slot 同語言。`UNKNOWN · 100%`
12. Grand-Place 當晚 event／security closure；「horse carriage」只有搵到 official operator、上落點同可驗 URL 先加入。`UNKNOWN · 100%`

### 永久內容 guardrails

- Heerlijck Slaapen／Het Noorderhuis：只可外觀，不可寫成可住／可參觀。`FACT · 99%`
- Noordeinde Palace：10 月只做外觀，不可出現「入宮殿」CTA。`FACT · 99%`
- Blaaktoren 同 Twaalf Apostelenhofje：住宅 property；不可暗示可自由入內。`FACT · 97%`
- De Wallen：唔好叫「大蔴街」；唔好拍攝性工作者。`FACT · 98%`
- 任何 PDF 車程都只可做估算，不可當 hard promise；V1 要以當日 navigation ETA 驅動 cut-off。`INFERENCE · 100%`

## 五個最高風險

1. **Oesterij 原排序會撞 18:00 hard close**：2026-10-19 係要 ticket 嘅 Oesterfestival，唔係隨到隨玩的 farm tour。
2. **Day 5 結構性過載**：Waterloo 官方建議半日至全日，但 Atomium 17:30 last entry，仲加 Grand-Place／未核 horse carriage。
3. **Heerlijck Slaapen 被誤當景點／住宿**：官方現列 Het Noorderhuis 為有人住嘅住宅，不可入內。
4. **Day 1 arrival buffer 不足**：兩間鑽石 tour 約 17:00 截止，Madame Tussauds 星期六又要 time slot；只能二選一鑽石場並準備砍項。
5. **Brussels LEZ 未知車輛狀態**：2026 排放門檻已收緊，外國牌登記規則亦因是否荷蘭牌而不同；未查車牌／Euro standard 就入城有風險。

