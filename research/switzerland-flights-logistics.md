# Europe Tour PWA V1 — 瑞士、航班、跨境共通 logistics 官方核查

- 核查日期：2026-08-13（Asia/Hong_Kong）
- 推定旅程日期：2026-10-16 至 2026-10-31
- 範圍：只核查提供 PDF 內瑞士段、四段 Emirates 航班及四國共通實用資料；沒有登入、付款、訂位或聯絡任何供應商。
- 來源政策：景點／酒店／交通營辦商、政府、EU、官方旅遊局及瑞士官方地理資料；不以第三方 flight tracker、OTA 或一般網誌補空白。
- 標籤：`FACT`＝來源直接支持；`INFERENCE`＝由已知資料推算／V1 編排建議；`UNKNOWN`＝截至核查日未能由可接受官方來源確認。
- URL 狀態：除明確列作「不採納」的受阻頁面外，下列連結均已在 2026-08-13 用 `curl -sIL` 驗證，最終 HTTP `200`。Google Maps 連結亦全部為 deterministic search URL 並驗證 `200`。

## Executive verdict

1. `FACT｜100%` GoldenPass Express 的 PDF 時間有實質錯誤：2026-10-27 正確應為 **Montreux 09:32 → Interlaken Ost 12:48（3 小時 16 分）**；`10:22` 是 Montbovon 到站時間，不是 Interlaken。
2. `FACT｜100%` 2026-10-28 TITLIS Rotair 在 2026-08-17 至 2026-12-11 維修期內；山頂仍可由 **TITLIS Connect** 抵達，但不能把行程寫成「乘坐旋轉纜車 Rotair」。
3. `UNKNOWN｜100%` PDF 所列 EK381／EK147／EK86／EK380 的 2026-10 指定日航班時間，未有日期鎖定的 Emirates 官方頁面或 e-ticket／PNR 可核實；只可當「待確認資料」。
4. `FACT｜100%` PDF 的 Day 0、Day 14、Day 15 與航班表互相矛盾，不能直接照抄入提醒頁。
5. `FACT｜100%` ETIAS 截至 2026-08-13 尚未投入運作，但 EU 已指向 2026 年第四季，旅程正正在該時段；必須設 T-30／T-7 官方覆核。

---

## Day 10 — 2026-10-26（一）：Lavaux＋Montreux

### 1. Lavaux UNESCO Vineyard Terraces（以 Lavaux Vinorama 作可導航 anchor）

- **Verdict**
  - `FACT｜100%` 正式世界遺產名稱為 **Lavaux, Vineyard Terraces**；葡萄園梯田沿日內瓦湖岸延伸，並非單一有門牌的景點。
  - `FACT｜100%` PWA 應以可導航及有營業資料的 **Lavaux Vinorama** 作集合點，而不是只寫「Lavaux vineyards」。
- **地址**：Lavaux Vinorama, Route du Lac 2, 1071 Rivaz, Switzerland。
- **可靠座標**：`46.4749259949, 6.7774381638`（瑞士官方建築地址資料）。
- **2026-10 開放／預約／季節限制**
  - `FACT｜95%` Vaud 官方旅遊頁列 2026-10-01 至 10-31：星期一 10:30–19:30、星期三至日 10:30–19:30；星期二沒有列出。
  - `FACT｜95%` Lausanne 官方旅遊頁則列 2026-04-30 至 10-30：星期一至六 10:30–20:00、星期日 10:30–19:00。兩個官方旅遊頁的星期二／收舖時間互有差異；本次到訪是星期一 26 Oct，兩者均支持當日開放，但仍須行前再核對。
  - `FACT｜100%` 露台只在天氣合適時開放；葡萄園本身為戶外地景，品酒／酒莊接待不可由「到訪 Lavaux」自動推定。
- **建議停留**：`INFERENCE｜90%` Vinorama 60–90 分鐘；若天氣及步道狀況合適，再加附近梯田短行 45–90 分鐘。
- **V1 copy 建議**：
  > **Lavaux 葡萄園梯田**｜先到 Lavaux Vinorama 集合。今日星期一，官方資料顯示 10:30 開門。落雨或步道濕滑就只做室內品酒／觀景，不硬行梯田；酒莊接待要有預約先當成立。
- **Must-confirm before trip**
  - T-7 及當朝重新看 Vinorama 當日營業狀態。
  - 跟團／包車供應商確認有沒有已訂 tasting、酒莊名稱、人數與確實到達時間；未有確認就不要在 PWA 顯示「已預約品酒」。
- **官方來源**
  - [Montreux Riviera：Lavaux UNESCO](https://www.montreuxriviera.com/en/PA452/lavaux-unesco) — HTTP `200`。
  - [Vaud Tourism：Lavaux Vinorama](https://www.vaud.ch/en/tourism/activites/lavaux-vinorama/) — HTTP `200`。
  - [Lavaux Vinorama 官方聯絡頁](https://www.lavaux-vinorama.ch/kontakt-de13.html) — HTTP `200`。
  - [Lausanne Tourism：Lavaux Vinorama 2026 時段](https://www.lausanne-tourisme.ch/fr/decouvrir/lavaux-vinorama/) — HTTP `200`。
  - [瑞士 geo.admin 搜尋 API 文件](https://docs.geo.admin.ch/access-data/search.html) — HTTP `200`；地址 query 回應 `200`。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=Lavaux%20Vinorama%2C%20Route%20du%20Lac%202%2C%201071%20Rivaz%2C%20Switzerland) — HTTP `200`。

### 2. Montreux Lakeside

- **Verdict**
  - `FACT｜100%` 官方名稱為 **Montreux Lakeside**；官方地址拼法是 **Quai Edouard-Jacoud**，湖畔步道全長約 7 km，毋須全走。
- **地址**：Quai Edouard-Jacoud, 1820 Montreux, Switzerland。
- **可靠座標**：`46.4362502248, 6.9083184600`（Montreux Riviera 官方頁）。
- **2026-10 開放／預約／季節限制**
  - `FACT｜95%` 公共湖畔沒有門票／預約或所列關門時間；屬戶外行程，實際體驗受雨、風、日照影響。
- **建議停留**：`INFERENCE｜95%` 45–90 分鐘，以湖畔短段＋相片為目標。
- **V1 copy 建議**：
  > **Montreux 湖畔散步**｜沿 Quai Edouard-Jacoud 行 45–90 分鐘，唔需要完成 7 km。落雨／天黑就縮短，直接返酒店。
- **Must-confirm before trip**：當日天氣、包車落客／上客位及酒店 check-in 順序。
- **官方來源**
  - [Montreux Riviera：Montreux Lakeside](https://www.montreuxriviera.com/en/P4876/montreux-lakeside) — HTTP `200`。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=Montreux%20Lakeside%2C%20Quai%20Edouard-Jacoud%2C%201820%20Montreux%2C%20Switzerland) — HTTP `200`。

### 3. Hôtel du Grand Lac Excelsior

- **Verdict**
  - `FACT｜100%` 正式名稱及地址已由酒店官網 maintenance page 與目的地官方頁交叉確認。
  - `UNKNOWN｜100%` 提供的 Tour Specification 只有酒店名稱，沒有 booking reference／voucher，不能視為房間已落實。
- **地址**：Rue de Bon-Port 27, 1820 Montreux, Switzerland（官方地址資料把同一門牌標作 `1820 Territet`；兩者均指同一區域門牌）。
- **可靠座標**：`46.4293441772, 6.9197115898`（瑞士官方建築地址）；目的地頁另給酒店 POI `46.4296399150, 6.9189373672`，有細微 POI／門牌差異，導航應以完整酒店名稱＋門牌搜尋。
- **2026-10 開放／預約／季節限制**
  - `FACT｜90%` Montreux 官方 booking listing 列 check-in 15:00–00:00、check-out 至 12:00、reception 24 小時。
  - `UNKNOWN｜100%` 酒店自己官網截至核查日只顯示 maintenance page，因此未能由 operator 頁確認 2026-10 房況／當日服務。
- **建議停留**：`INFERENCE｜95%` check-in 預留 20–30 分鐘；住宿晚數按最終 voucher，不從 PDF 猜。
- **V1 copy 建議**：
  > **今晚酒店｜Hôtel du Grand Lac Excelsior**  
  > 地址：Rue de Bon-Port 27。到埗先向領隊／司機取房卡安排；房型、早餐、泊車及退房時間以 voucher 為準。
- **Must-confirm before trip**：住宿日期、房型、住客姓名、早餐、city tax、團體行李、coach parking、正式 booking reference。
- **官方來源**
  - [酒店官網（maintenance page）](https://www.hotelexcelsiormontreux.com/) — HTTP `200`。
  - [Montreux Riviera 酒店頁](https://www.montreuxriviera.com/en/VE224/hotel-du-grand-lac-excelsior) — HTTP `200`。
  - [Montreux Riviera booking listing](https://shop.montreuxriviera.com/MVT/ukv/house/TDS00020010000439018?lang=fr) — HTTP `200`。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=Hotel%20du%20Grand%20Lac%20Excelsior%2C%20Rue%20de%20Bon-Port%2027%2C%201820%20Montreux%2C%20Switzerland) — HTTP `200`。

---

## Day 11 — 2026-10-27（二）：GoldenPass＋Interlaken＋Lucerne

### 4. GoldenPass Express — Montreux → Interlaken Ost

- **Verdict：PDF 時間錯，必須修正**
  - `FACT｜100%` 官方 2026 年 timetable（狀態日期 2025-09-30、2026 timetable year）顯示 GPX 4068：**Montreux 09:32 → Montbovon 10:22 → Château-d’Oex 10:39 → Gstaad 10:58 → Zweisimmen 11:27／11:39 → Spiez 12:21／12:22 或 12:23 → Interlaken Ost 12:48**。
  - `FACT｜100%` 全程是 **3 小時 16 分**。Tour Specification 的「09:32–10:22 / 3h15」把 Montbovon 到站時間錯當 Interlaken 終點，文字與時長互相矛盾。
  - `FACT｜100%` GoldenPass Express 該季節服務標示為 2026-02-13 至 2026-12-12，10 月 27 日落在運行期內。
  - `FACT｜100%` timetable 明示團體預約必須、一般座位預約建議。
  - `UNKNOWN｜100%` 未有 ticket／group reservation／coach pickup voucher，所以不能聲稱已訂位或司機已確認 12:48 接車。
- **起點**：Montreux railway station, Avenue des Alpes 74, 1820 Montreux, Switzerland。
- **終點**：Interlaken Ost railway station, Untere Bönigstrasse 5, 3800 Interlaken, Switzerland。
- **可靠座標**
  - Montreux station：`46.4358406067, 6.9102759361`（官方建築地址）。
  - Interlaken Ost：`46.6903991699, 7.8690428734`（官方建築地址）。
- **2026-10 開放／預約／季節限制**：見上述 timetable；營辦商同時提醒時間表可變，行程前應再查 live timetable。
- **建議停留／buffer**：`INFERENCE｜98%` 08:55 到 Montreux station、最遲 09:10 全員在月台候車；12:48 到 Interlaken Ost；司機 pickup 寫 13:00 較穩妥。
- **V1 copy 建議**：
  > **GoldenPass Express｜09:32 Montreux 開出 → 12:48 Interlaken Ost 到達**  
  > 08:55 到車站，09:10 前全員上月台。全程約 3 小時 16 分；10:22 只係 Montbovon，唔係落車站。到 Interlaken Ost 先集合，再搵司機。
- **Must-confirm before trip**
  - T-30：團體票、列車 GPX 4068、座位／車廂、人數、行李安排。
  - T-7／T-1：官方 live timetable、工程／替代交通、月台。
  - 把司機書面接車點改成 **Interlaken Ost 12:48 後**；不可再用 10:22。
- **官方來源**
  - [GoldenPass Express timetable 頁](https://www.gpx.swiss/en/pages/timetable) — HTTP `200`。
  - [瑞士官方公共交通 2026 timetable PDF：表 471](https://widgets.oev-info.ch/publikation/jahresfpl/471.pdf) — HTTP `200`；本項 exact 時間的主要證據。
  - [Google Maps：Montreux station](https://www.google.com/maps/search/?api=1&query=Montreux%20railway%20station%2C%20Avenue%20des%20Alpes%2074%2C%201820%20Montreux%2C%20Switzerland) — HTTP `200`。
  - [Google Maps：Interlaken Ost](https://www.google.com/maps/search/?api=1&query=Interlaken%20Ost%20railway%20station%2C%20Untere%20Boenigstrasse%205%2C%203800%20Interlaken%2C%20Switzerland) — HTTP `200`。

### 5. Interlaken town（Höheweg／市中心短行）

- **Verdict**
  - `FACT｜100%` 官方目的地頁把 **Höheweg** 列為 Interlaken 核心 boulevard，全年可到訪。
  - `INFERENCE｜95%` GoldenPass 12:48 才到站，合理次序是先 lunch，再做 60–90 分鐘市中心短行；不能在 10:22 開始 Interlaken 午膳。
- **導航 anchor**：Interlaken Tourist Information, Marktgasse 1, 3800 Interlaken, Switzerland。
- **可靠座標**：`46.6850662231, 7.8538699150`（瑞士官方建築地址）。
- **2026-10 開放／預約／季節限制**
  - `FACT｜95%` Tourist Information 在 2026-10-05 起的星期一至五時段為 08:00–12:00、13:30–18:00；27 Oct 是星期二。
  - `FACT｜100%` Höheweg 為公共街道／戶外地點，全年可行；商店、餐廳需個別確認。
- **建議停留**：`INFERENCE｜95%` 午餐 60 分鐘＋市中心 60–90 分鐘。
- **V1 copy 建議**：
  > **Interlaken｜12:48 後先到埗**  
  > 先食午餐，再沿 Höheweg／Höhematte 做 60–90 分鐘短行。若 GoldenPass 遲到，保留午餐同司機集合，先縮短行街時間。
- **Must-confirm before trip**：午餐餐廳及 booking、司機集合點、實際開車往 Lucerne 的時間；「1 小時車程」只當粗略估算，不當 cutoff。
- **官方來源**
  - [Interlaken Tourism：Höheweg](https://www.interlaken.swiss/en/experiences/poi/hoeheweg) — HTTP `200`。
  - [Interlaken Tourist Information](https://www.interlaken.swiss/en/info-service/tourist-offices-in-the-region/interlaken-tourist-information) — HTTP `200`。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=Interlaken%20Tourist%20Information%2C%20Marktgasse%201%2C%203800%20Interlaken%2C%20Switzerland) — HTTP `200`。

### 6. ART DECO HOTEL MONTANA

- **Verdict**
  - `FACT｜100%` 酒店正式名稱、地址及入住／退房時間由酒店官網確認。
  - `UNKNOWN｜100%` PDF 沒有 booking voucher，因此房間、晚數與餐飲未證實。
- **地址**：Adligenswilerstrasse 22, 6006 Luzern, Switzerland。
- **可靠座標**：`47.0564804077, 8.3196496964`（瑞士官方建築地址）。
- **2026-10 開放／預約／季節限制**
  - `FACT｜100%` Check-in 由 15:00 起；check-out 至 12:00。
  - `FACT｜100%` 酒店提醒車位需預先 reserve；由 `Casino/Palace` 巴士站可乘酒店 funicular 約 1 分鐘上山。
- **建議停留**：`INFERENCE｜95%` check-in 20–30 分鐘；兩晚住宿與否以 voucher 為準。
- **V1 copy 建議**：
  > **Lucerne 酒店｜ART DECO HOTEL MONTANA**  
  > 地址：Adligenswilerstrasse 22。15:00 後可入住；包車泊位同大件行李落客要按酒店／司機安排。
- **Must-confirm before trip**：booking reference、27–29 Oct 晚數、房型、早餐、city tax、coach 落客／泊車、行李上落方式。
- **官方來源**
  - [酒店：Contact & Arrival](https://www.hotel-montana.ch/en/contact-arrival) — HTTP `200`。
  - [酒店：FAQ](https://www.hotel-montana.ch/en/about-us/faq) — HTTP `200`。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=ART%20DECO%20HOTEL%20MONTANA%2C%20Adligenswilerstrasse%2022%2C%206006%20Luzern%2C%20Switzerland) — HTTP `200`。

---

## Day 12 — 2026-10-28（三）：Lucerne＋TITLIS＋Château Gütsch

### 7. Lucerne city

- **Verdict**
  - `FACT｜100%` Luzern Tourism 的 self-guided sightseeing route 約 4.24 km／2 小時、easy，並列為 1–12 月都合適。
  - `FACT｜95%` 公開 guided city tour 一般為 1.5 小時；5–10 月逢星期三有英文場，但指定 2026-10-28 場次／名額仍需在 booking calendar 確認。
- **導航 anchor**：Tourist Information Lucerne, Zentralstrasse 5, 6002 Luzern, Switzerland（在 Lucerne station 內）。
- **可靠座標**：`47.0483961619, 8.3097746084`（Luzern Tourism 官方 POI）。
- **2026-10 開放／預約／季節限制**：自助路線毋須預約；public guided tour 需有指定日 ticket 才視為成立。
- **建議停留**：自助 2 小時；若已訂 guided tour 則 1.5 小時。
- **V1 copy 建議**：
  > **Lucerne 老城｜預設自助 2 小時**  
  > 由火車站 Tourist Information 起步，行 Chapel Bridge、舊城核心再返回。只有見到 28 Oct booking confirmation，先顯示英文導賞集合時間。
- **Must-confirm before trip**：有沒有 guided-tour voucher；沒有就用 self-guided；同日 TITLIS 開車時間要反推，不能兩邊同時塞滿。
- **官方來源**
  - [Luzern Tourism：Self-guided sightseeing tour](https://www.luzern.com/en/tour/sightseeing-tour-lucerne) — HTTP `200`。
  - [Luzern Tourism：Tourist Information](https://www.luzern.com/en/poi/tourist-information-lucerne) — HTTP `200`。
  - [Luzern Tourism：Lucerne city tour](https://www.luzern.com/en/event/lucerne-city-tour) — HTTP `200`。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=Tourist%20Information%20Lucerne%2C%20Zentralstrasse%205%2C%206002%20Luzern%2C%20Switzerland) — HTTP `200`。

### 8. TITLIS Cableways / Mount TITLIS

- **Verdict：可上山，但 2026 秋季不是標準 Rotair 體驗**
  - `FACT｜100%` TITLIS 官方 2026 partner update PDF（2026-03-12）確認：**TITLIS Rotair 由 2026-08-17 至 2026-12-11 停運**；期間山頂改由單線、非旋轉的 **TITLIS Connect**（每車 65 人）抵達。
  - `FACT｜100%` 同一 PDF 確認 2026 山頂重建安排：戶外冰川改經 Southwest Bypass；部分設施移到 Trübsee；輪椅／嬰兒車設施受限並需預先通知。
  - `UNKNOWN｜100%` TITLIS 即時 timetable 官方 HTML 在本次 `curl -sIL` 一直回 HTTP `429`，所以其中 2026-10-28 的 exact 首班／尾班、Section 1 替代路線及 Ice Flyer 時段沒有按硬規矩採納為已驗證事實。
  - `UNKNOWN｜100%` 指定日天氣、能見度、所有設施開放狀態及 group booking 尚未能預知。
- **地址**：TITLIS Cableways valley station, Gerschnistrasse 14, 6390 Engelberg, Switzerland。
- **可靠座標**：`46.8161201477, 8.3953256607`（瑞士官方建築地址；這是落客／乘纜車的 valley station，不是山頂）。
- **2026-10 開放／預約／季節限制**
  - `FACT｜100%` Rotair 不運行；TITLIS Connect 是已確認替代。
  - `UNKNOWN｜100%` 28 Oct exact operating plan 要靠官方 timetable 恢復可達後及行前 live status 確認。
- **建議停留／buffer**
  - `INFERENCE｜95%` 從 Engelberg valley station 計至少 4.5–5 小時；連 Lucerne 往返包車應當 full-day 主活動，不宜排成午餐後「順便」上山。
  - `INFERENCE｜98%` 如當朝能見度差、強風或山頂 access 受限，應在離開 Lucerne 前決定 Plan B，避免完成長途來回後才取消。
- **V1 copy 建議**：
  > **TITLIS｜今日唔係 Rotair**  
  > 2026 秋季旋轉纜車維修，改搭 TITLIS Connect 上山。出發前先睇今日纜車／天氣狀態；未確認開放就唔離開 Lucerne。山頂重建中，部分設施同無障礙路線受限。
- **Must-confirm before trip**
  - T-30：group ticket／boarding arrangement、28 Oct 維修 routing、餐飲安排、輪椅／行動需要。
  - T-7：官方 timetable、TITLIS Connect、山頂設施及 Ice Flyer 開放。
  - 當朝：live mountain report、風／能見度；設定「最遲離開 Lucerne」及「最遲上山」cutoff。
- **官方來源**
  - [TITLIS：2026 travel-planning update PDF](https://assets.titlis.ch/files/f76gumfz/production/174b43324c139ac239e39686559cc32685c3d2e5.pdf) — HTTP `200`；本項季節維修的主要證據。
  - TITLIS exact timetable endpoint：`https://www.titlis.ch/en/information/timetable-lifts` — `curl -sIL` HTTP `429`；**不採納為硬證據，必須行前人工重試**。
  - [MeteoSwiss：Engelberg local forecast](https://www.meteoswiss.admin.ch/local-forecasts/engelberg/6390.html) — HTTP `200`；只供臨近日期看預報，不代表 28 Oct 現在已有天氣預測。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=TITLIS%20Cableways%2C%20Gerschnistrasse%2014%2C%206390%20Engelberg%2C%20Switzerland) — HTTP `200`。

### 9. Restaurant Lumières — Hotel Château Gütsch

- **Verdict**
  - `FACT｜100%` PDF 的「dinner @ Hotel Château Gütsch」對應酒店內正式餐廳 **Restaurant Lumières**。
  - `FACT｜100%` 餐廳官方頁列晚餐每日 18:00–22:00，座位有限並要求提早預約。
  - `UNKNOWN｜100%` 沒有 2026-10-28 的餐桌 confirmation；不能寫成已訂。
- **地址**：Hotel Château Gütsch, Kanonenstrasse, 6003 Luzern, Switzerland（營辦商及 Luzern Tourism 均不列門牌，故不自行補號碼）。
- **可靠座標**：`47.052885, 8.2896128`（Luzern Tourism 官方酒店頁 POI）。
- **2026-10 開放／預約／季節限制**：一般晚餐每日 18:00–22:00；指定日菜單、桌位及臨時活動未知。
- **建議停留**：`INFERENCE｜95%` 2 小時；若同日去 TITLIS，建議訂 19:30 或更後並留回程／換衫 buffer。
- **V1 copy 建議**：
  > **晚餐｜Restaurant Lumières, Château Gütsch**  
  > 一般晚餐 18:00–22:00；只在有 booking confirmation 時顯示為「已訂」。TITLIS 回程一有延誤，即按餐廳 cancellation／late-arrival 規則處理。
- **Must-confirm before trip**：日期、時間、人數、booking name/reference、團體餐單、飲食限制、遲到／取消規則及包車接送點。
- **官方來源**
  - [Restaurant Lumières 官方頁](https://www.chateau-guetsch.ch/en/restaurant-lumieres/) — HTTP `200`。
  - [Luzern Tourism：Hotel Château Gütsch](https://www.luzern.com/de/hotel/hotel-chateau-guetsch) — HTTP `200`。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=Restaurant%20Lumieres%2C%20Hotel%20Chateau%20Guetsch%2C%20Kanonenstrasse%2C%206003%20Luzern%2C%20Switzerland) — HTTP `200`。

---

## Day 13 — 2026-10-29（四）：Zürich

### 10. Lindenhof

- **Verdict**：`FACT｜100%` 公共廣場／觀景點，官方頁列每日可到訪，毋須預約。
- **地址**：Lindenhof, 8001 Zürich, Switzerland。
- **可靠座標**：`47.372996, 8.540799`（Zürich Tourism 官方頁）。
- **2026-10 限制**：戶外；受雨、路面及日照影響，沒有指定關門時間。
- **建議停留**：`INFERENCE｜95%` 20–30 分鐘。
- **V1 copy 建議**：
  > **Lindenhof**｜上觀景台停 20–30 分鐘；落雨就縮短，石路濕滑時慢行。
- **Must-confirm before trip**：只需當日天氣／臨時封路。
- **官方來源**：[Zürich Tourism](https://www.zuerich.com/en/visit/nature/lindenhof) — HTTP `200`；[Google Maps](https://www.google.com/maps/search/?api=1&query=Lindenhof%2C%208001%20Zurich%2C%20Switzerland) — HTTP `200`。

### 11. Augustinergasse

- **Verdict**：`FACT｜100%` Zürich Tourism 正式景點名稱 **Augustinergasse**；公共街道，每日可到訪，毋須預約。
- **地址**：Augustinergasse 1, 8001 Zürich, Switzerland（官方 POI anchor）。
- **可靠座標**：`47.371948, 8.539881`（Zürich Tourism 官方頁）。
- **2026-10 限制**：街道本身沒有門票／所列關門時間；個別商戶時間不同。
- **建議停留**：`INFERENCE｜95%` 15–25 分鐘。
- **V1 copy 建議**：
  > **Augustinergasse**｜由 Lindenhof 落去舊城彩色窗街，預留 15–25 分鐘；唔將街道開放等同所有商舖開門。
- **Must-confirm before trip**：如有指定店舖，逐店另查。
- **官方來源**：[Zürich Tourism](https://www.zuerich.com/en/visit/attractions/augustinergasse) — HTTP `200`；[Google Maps](https://www.google.com/maps/search/?api=1&query=Augustinergasse%201%2C%208001%20Zurich%2C%20Switzerland) — HTTP `200`。

### 12. Bahnhofstrasse

- **Verdict**
  - `FACT｜100%` Bahnhofstrasse 是約 1.4 km 的公共購物街，由 Zürich Hauptbahnhof 伸延至湖邊。
  - `FACT｜95%` Zürich Tourism 一般資料列星期一至五多數商店約 09:00–20:00、小店常至 18:30；星期六通常 09:00–17:00；星期日主要只剩車站／機場商店。29 Oct 是星期四，但指定商戶仍需個別核對。
- **地址**：Bahnhofstrasse, 8001 Zürich, Switzerland。
- **可靠座標**：`47.374295, 8.538576`（Zürich Tourism 官方頁 POI）。
- **建議停留**：`INFERENCE｜95%` 45–90 分鐘；不用硬走全長。
- **V1 copy 建議**：
  > **Bahnhofstrasse**｜今日星期四，預留 45–90 分鐘行街。想去指定店就用該店時間；街道本身開放唔代表每間舖都開。
- **Must-confirm before trip**：指定品牌／餐廳營業時間、包車集合點及最終回酒店時間。
- **官方來源**
  - [Zürich Tourism：Bahnhofstrasse](https://www.zuerich.com/en/visit/attractions/bahnhofstrasse) — HTTP `200`。
  - [Zürich Tourism：shopping hours overview](https://www.zuerich.com/en/sightseeing-activities/shopping) — HTTP `200`。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=Bahnhofstrasse%2C%208001%20Zurich%2C%20Switzerland) — HTTP `200`。

### 13. Hotel Adler Zürich

- **Verdict**
  - `FACT｜100%` 正式名稱、地址及 24/7 front desk 由酒店官網確認。
  - `UNKNOWN｜100%` PDF 沒有 voucher；房間／早餐／指定 check-in-out 未確認。
- **地址**：Rosengasse 10, 8001 Zürich, Switzerland。
- **可靠座標**：`47.3731651306, 8.5435438156`（瑞士官方建築地址）。
- **2026-10 開放／預約／季節限制**：front desk 24/7；指定日房況未知。
- **建議停留**：`INFERENCE｜95%` check-in 20–30 分鐘；由此步行到三個市中心景點合理，但仍按行李／團體安排。
- **V1 copy 建議**：
  > **Zürich 酒店｜Hotel Adler Zürich**  
  > 地址：Rosengasse 10，front desk 24 小時。房型、早餐、city tax 同退房時間以正式 voucher 為準。
- **Must-confirm before trip**：29–30 Oct booking reference、房型、早餐、city tax、coach access／行李落客、退房與機場行李安排。
- **官方來源**
  - [Hotel Adler Zürich 官方頁](https://hotel-adler.ch/en/) — HTTP `200`。
  - [Google Maps](https://www.google.com/maps/search/?api=1&query=Hotel%20Adler%20Zurich%2C%20Rosengasse%2010%2C%208001%20Zurich%2C%20Switzerland) — HTTP `200`。

---

## 四段 Emirates 航班核查＋PDF 時間矛盾

### 航班總 verdict

- `UNKNOWN｜100%` 沒有 e-ticket、PNR、ticket number 或 Emirates 指定日期 itinerary，故四段 **未能由日期鎖定官方來源確認**。
- `UNKNOWN｜100%` Emirates 官方 route／flight-status endpoints 在本次 `curl -sIL` 均無法完成（HTTP `000`／連線受阻），不符合「URL 必須 200／301」的採納門檻；因此沒有把其可見的 generic 班次頁當成 2026-10 證據。
- `FACT｜100%` 下表時間只代表 Tour Specification 原文；「時間算術成立」不等於「航班 booking 成立」。

| 段落 | Tour Specification 原文 | 時間算術核查 | 官方核查 verdict |
|---|---|---|---|
| EK381 | 17 Oct HKG 00:40 → DXB 04:25；7h45 | `FACT｜100%` 以 HKG UTC+8、DXB UTC+4 計，7h45 成立 | `UNKNOWN`：指定日班次／客票未驗證 |
| EK147 | 17 Oct DXB 08:05 → AMS 13:15；7h10 | `FACT｜100%` 17 Oct Amsterdam 仍為 CEST UTC+2，7h10 成立；DXB 轉機 3h40 成立 | `UNKNOWN`：指定日班次／客票未驗證 |
| EK86 | 30 Oct ZRH 21:50 → DXB 07:05+1；6h15 | `FACT｜100%` 30 Oct Zürich 已為 CET UTC+1，6h15 成立 | `UNKNOWN`：指定日班次／客票未驗證 |
| EK380 | 31 Oct DXB 10:40 → HKG 21:50；7h10 | `FACT｜100%` 以 DXB UTC+4、HKG UTC+8 計，7h10 成立；DXB 轉機 3h35 成立 | `UNKNOWN`：指定日班次／客票未驗證 |

### PDF 內部矛盾（不可直接放入 PWA）

1. `FACT｜100%` Day 0 標成 **16-Oct Fri**，又寫 **10:00 到機場 check-in**、**00:40 起飛**；航班表卻寫 EK381 **17OCT 00:40**。16 Oct 10:00 到機場會早 14 小時 40 分，明顯不合理。
   - `INFERENCE｜90%` 很可能原意是 **16 Oct 22:00** 到 HKG，但未有票證，不能擅自修成事實。
2. `FACT｜100%` Day 14（30 Oct）寫 **12:30 到 Zürich Airport、15:30 起飛**；航班表寫 EK86 **21:50 起飛**。同一日相差 6 小時 20 分，兩者不能同時作正式 departure time。
3. `FACT｜100%` Day 15（31 Oct）寫 **14:45 到 Hong Kong**；航班表 EK380 寫 **21:50 到 Hong Kong**，相差 7 小時 05 分。
4. `FACT｜100%` 兩個 Dubai layover 算術（3h40、3h35）與航班表原文相符；仍須待 e-ticket 確認 terminal／connection status。

### 機場 navigation anchors

- Hong Kong International Airport（HKG）, 1 Sky Plaza Road, Chek Lap Kok, Hong Kong — [Google Maps](https://www.google.com/maps/search/?api=1&query=Hong%20Kong%20International%20Airport) HTTP `200`。
- Dubai International Airport（DXB）, Dubai, United Arab Emirates — [Google Maps](https://www.google.com/maps/search/?api=1&query=Dubai%20International%20Airport) HTTP `200`。
- Amsterdam Airport Schiphol（AMS）, Evert van de Beekstraat 202, 1118 CP Schiphol, Netherlands — [Google Maps](https://www.google.com/maps/search/?api=1&query=Amsterdam%20Airport%20Schiphol) HTTP `200`。
- Zurich Airport（ZRH）, 8058 Zürich-Flughafen, Switzerland — [Google Maps](https://www.google.com/maps/search/?api=1&query=Zurich%20Airport) HTTP `200`。
- `UNKNOWN｜100%` 本核查沒有以官方地理 source 取得四個機場一致口徑的可靠 lat/lng，故不填座標，避免假精確；Maps 使用正式機場名稱／IATA 搜尋。

### V1 copy 建議（直至收到 e-ticket 前）

> **航班時間待票證確認**  
> Tour Specification 入面 Day 0／14／15 同航班表互相撞時間。未見 Emirates e-ticket／PNR 前，不會啟動「去機場」提醒。請以最終票證顯示的日期、當地時間同航班號為準。

收到 e-ticket 後才建立兩組 deterministic reminders：

- 去程：HKG check-in cutoff → EK381 → DXB connection → EK147 → AMS 入境／EES。
- 回程：ZRH check-in cutoff → EK86 → DXB connection → EK380 → HKG。

### Must-confirm before trip

- **立即**：取得 Emirates e-ticket receipt／PNR，逐段核對日期、local departure／arrival、機場、terminal、ticket status、行李是否 through-check、兩位旅客姓名。
- **收到票後**：以 e-ticket 重建 Day 0／14／15，不保留兩套互相衝突時間。
- **T-72／T-24／出門前**：Emirates app／Manage Booking／官方 flight status 再核對；如旅行社出票，要求正式 ticket number，不只 itinerary PDF。
- Emirates 官方 flight-status endpoint（核查但不採納）：`https://www.emirates.com/english/manage-booking/flight-status/` — `curl -sIL` HTTP `000`。

---

## 四國共通 logistics（Netherlands／Belgium／France／Switzerland）

### 14. 緊急電話 112

- **Verdict**
  - `FACT｜100%` 112 可由固定／流動電話在 EU 全境免費接通 emergency services；EU 官方亦明確列 Switzerland 使用 112。
  - `FACT｜100%` 瑞士另有 117 police、118 fire、144 ambulance；V1 主按鈕仍以跨四國一致的 112 為優先。
- **V1 copy 建議**：
  > **緊急求助：112**｜荷蘭、比利時、法國、瑞士都可用。講所在位置、發生咩事、幾多人受傷；唔好收線，等接線員指示。
- **Must-confirm before trip**：旅客手機 roaming／eSIM 能打語音；離線頁保存酒店地址、領隊／司機電話及保險 assistance number。
- **官方來源**
  - [EU Your Europe：112](https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency/indexamp_en.htm) — HTTP `200`。
  - [Bern Cantonal Police：Living safely together PDF](https://www.police.be.ch/content/dam/police/dokumente/police-be-ch/d/praevention/zusammen-sicher/broschuere_zusammen_sicher_englisch.pdf) — HTTP `200`；明列在瑞士有危險即打 112。

### 15. 貨幣

- **Verdict**
  - `FACT｜100%` Netherlands、Belgium、France 使用 euro（EUR）。
  - `FACT｜100%` Switzerland 法定貨幣是 Swiss franc（CHF）；不可假設每個瑞士商戶都接受 EUR 或按有利匯率找續。
- **V1 copy 建議**：
  > **付款**｜荷蘭／比利時／法國用 EUR；入瑞士後用 CHF。卡係主力，另留少量當地現金；瑞士唔好當 EUR 一定通用。
- **Must-confirm before trip**：信用卡 overseas／PIN、外幣手續費、團費未包項目；不要在 V1 寫死匯率。
- **官方來源**
  - [EU：Countries using the euro](https://european-union.europa.eu/institutions-law-budget/euro/countries-using-euro_en) — HTTP `200`。
  - [Swiss National Bank：Legal framework](https://www.snb.ch/en/the-snb/organisation/legal-framework) — HTTP `200`。

### 16. 時區／2026-10-25 冬令時間

- **Verdict**
  - `FACT｜100%` EU 夏令時間規則為 3 月最後一個星期日至 10 月最後一個星期日；瑞士採 CET（UTC+1）／CEST（UTC+2）並同樣在 10 月最後星期日轉換。
  - `INFERENCE｜100%` 2026-10-25 是 10 月最後一個星期日；當地凌晨 03:00 CEST 撥回 02:00 CET，當晚多一小時。四個行程國同步，跨國包車不用再改一小時。
  - `INFERENCE｜100%` 轉換前 Hong Kong 比歐洲快 6 小時；轉換後快 7 小時。Dubai 全年 UTC+4，返程 ZRH／DXB 時差是 3 小時。
- **V1 copy 建議**：
  > **25 Oct 冬令時間**｜今朝歐洲時間已撥慢一個鐘；荷／比／法／瑞士同步。手機通常自動更新，但鬧鐘、手錶同集合時間要再望一次。
- **Must-confirm before trip**：PWA itinerary timestamps 要帶 IANA timezone，不可只存固定 UTC offset；25 Oct 當朝顯示 DST 提醒並做 mock-time QA。
- **官方來源**
  - [European Commission：Summertime](https://transport.ec.europa.eu/transport-themes/summertime_en) — HTTP `200`。
  - [METAS Switzerland：Time scales](https://www.metas.ch/metas/en/home/fabe/zeit-und-frequenz/time-scales.html) — HTTP `200`。

### 17. 香港特區護照／Schengen／EES／ETIAS

- **Verdict**
  - `FACT｜100%` EEAS Hong Kong 官方頁列 **Hong Kong SAR passport holders** 短期進入 Schengen 不需要 visa；這個陳述只適用於有效 HKSAR passport，不代表任何個別旅客一定獲准入境。
  - `FACT｜100%` 一般短期免簽上限為 180 日內 90 日，並受旅行證件、入境目的、資金及邊境審查等條件約束。
  - `FACT｜100%` EES 已於 2026-04-10 全面運作；在 Amsterdam 作首次外部邊境入境時，非 EU 短期旅客可能需登記面容／指紋，應預留排隊。
  - `FACT｜100%` 截至 2026-08-13，官方 ETIAS 頁仍寫 **ETIAS 尚未運作，暫時不能申請**；EU 同時指向 **2026 年第四季**啟動，exact date 尚待公布。
  - `FACT｜100%` Hong Kong 在 ETIAS future visa-exempt list，且 France／Belgium／Netherlands／Switzerland 均在 ETIAS 適用目的地內；旅程 17–30 Oct 正在第四季，屬必查風險。
  - `UNKNOWN｜100%` ETIAS 到 2026-10-17 是否已生效，現階段不能定論；也不能現在叫旅客用非官方網站付款。
- **V1 copy 建議**：
  > **入境文件**｜持有效香港特區護照短期 Schengen 一般免簽，但入境唔係保證。ETIAS 截至 13 Aug 仲未開放，官方預計 2026 Q4；出發前 30 日同 7 日再查官方網站。Amsterdam 入境有 EES 生物特徵登記，預留額外時間。
- **Must-confirm before trip**
  - 每位旅客實際 passport 類型、有效期（一般須在離開 Schengen 後至少 3 個月）、簽發不超過 10 年、姓名與機票一致、空白頁及損壞情況。
  - T-30／T-7／T-1 只查 EU 官方 ETIAS；如正式啟動，按當時 transition／grace-period 官方規則處理，不靠舊截圖。
  - 90/180 計算要包括每位旅客此前 Schengen 逗留；本檔不判定個別旅客資格。
- **官方來源**
  - [EEAS Hong Kong：Travel & Study](https://www.eeas.europa.eu/hong-kong/travel-study_en) — HTTP `200`。
  - [EU ETIAS：Who should apply](https://travel-europe.europa.eu/en/etias/about-etias/who-should-apply) — HTTP `200`。
  - [European Commission：EES 與 ETIAS 差異／2026 時序](https://home-affairs.ec.europa.eu/news/main-differences-between-ees-and-etias-what-travellers-need-know-2026-04-28_en) — HTTP `200`。
  - [EU ETIAS：What you need to apply](https://www.travel-europe.europa.eu/etias/how-to-apply/what-you-need-to-apply) — HTTP `200`。

### 18. 包車道路合規：Switzerland motorway＋France Crit’Air／ZFE

- **Verdict**
  - `FACT｜100%` Switzerland 3.5 tonnes 或以下車輛／拖架使用 motorway／expressway 需要 vignette；2026 vignette 為 CHF 40、有效 2025-12-01 至 2027-01-31，沒有短期 vignette。超過 3.5 tonnes 的重型車用另一 heavy-vehicle charge，而不是普通 vignette。
  - `FACT｜100%` France 的 Crit’Air sticker 在 ZFE 或污染臨時限制區內屬必要；Paris ZFE 包括 A86 內（A86 本身除外），coach／bus 亦受其車種規則影響。
  - `FACT｜100%` 外國註冊車可走官方 Crit’Air 網上程序；官方提醒郵寄需時，臨近出發才處理有風險。
  - `INFERENCE｜100%` 這是包車公司／車主責任，旅客不應重複購買；但 PWA 應有 operator checklist，因缺貼／錯車種可直接影響 Paris、Dijon、France→Switzerland 路線。
- **V1 copy 建議**：
  > **司機／車隊確認**｜入法國市區前要有合適 Crit’Air；入瑞士 motorway 前要有 2026 vignette，重型旅遊巴則用相應 heavy-vehicle charge。呢啲由車隊處理，旅客唔需要自己買，但出發前要見到書面確認。
- **Must-confirm before trip**
  - 向 operator 收：車牌、註冊國、車輛總重、Euro/emission class、Crit’Air 證明、Swiss vignette 或 heavy-vehicle charge 證明。
  - T-30／T-7 再查 Paris／Dijon／實際行車城市的 ZFE 和臨時 pollution rules；如換車，證明必須跟新車牌／新車。
  - 司機提供跨境行車及每日 driving/rest-hours 可行性；PDF 的「3–4 小時」「1 小時」只屬行程草案，不等同營運承諾。
- **官方來源**
  - [Swiss authorities ch.ch：Motorway vignette 2026](https://www.ch.ch/en/vehicles-and-traffic/how-to-behave-in-road-traffic/motorway-vignette/) — HTTP `200`。
  - [France Ministry：Crit’Air](https://www.ecologie.gouv.fr/politiques-publiques/certificats-qualite-lair-critair) — HTTP `200`。
  - [France Ministry：ZFE](https://www.ecologie.gouv.fr/politiques-publiques/zones-faibles-emissions-zfe) — HTTP `200`。
  - [Ville de Paris：Paris ZFE](https://www.paris.fr/pages/la-zone-a-faibles-emissions-zfe-pour-lutter-contre-la-pollution-de-l-air-16799) — HTTP `200`。
  - [France official Crit’Air application portal](https://www.certificat-air.gouv.fr/certificat) — HTTP `200`。

---

## V1 的「此刻」／提醒規格（交給整合者）

| 觸發時間 | 顯示動作 | Cutoff／fallback |
|---|---|---|
| 26 Oct 朝早 | Lavaux Vinorama 營業＋天氣核對 | 雨大／步道濕：只做室內＋Montreux 短行 |
| 27 Oct 08:55 | 到 Montreux station | 09:10 全員上月台；09:32 開車 |
| 27 Oct 10:22 | 顯示「Montbovon，唔好落車」 | 終點是 12:48 Interlaken Ost |
| 27 Oct 12:48 | Interlaken Ost 集合＋搵司機 | 列車遲到先縮短 town walk，不壓縮司機集合 |
| 28 Oct 出發前 | TITLIS live status＋天氣＋Connect routing | 未確認／低能見度／強風：留 Lucerne Plan B |
| 28 Oct 回程 | 對 Restaurant Lumières booking time | 會遲到即按確認信聯絡流程；未訂不顯示「已訂」 |
| 25 Oct 02:00 mock | DST 回撥提示 | app 使用 `Europe/Amsterdam`／`Europe/Paris`／`Europe/Zurich` timezone |
| T-30／T-7 | ETIAS official status | 未開放不付款；已啟動按官方 transition 規則 |
| 收到 e-ticket 後 | 重建 Day 0／14／15 | 未收票前不啟動 airport reminders |

---

## 7 個最高風險（按影響排序）

1. **航班尚未由 e-ticket／PNR 證實**：Day 0／14／15 各有互撞時間，錯誤 airport reminder 可造成誤機。
2. **GoldenPass 錯終點時間**：10:22 是 Montbovon；真正 Interlaken Ost 是 12:48，影響午餐、司機接車與 Lucerne 到達。
3. **TITLIS 體驗描述失真**：28 Oct Rotair 停運，改 TITLIS Connect；山頂重建、無障礙及部分設施受限。
4. **ETIAS 可能在旅程前後啟動**：官方只定 2026 Q4、未有 exact date，現在不能申請也不能假定不需要。
5. **酒店／晚餐只見名稱、無 voucher**：三間酒店及 Restaurant Lumières 都未有 booking reference，房間／桌位不能標「confirmed」。
6. **包車法規／車輛資料未見**：Crit’Air、France ZFE、Swiss vignette／重型車費會跟車牌、車種和路線變；換車尤其危險。
7. **28 Oct 日程過滿及受天氣支配**：Lucerne city＋往返 Engelberg＋TITLIS＋Château Gütsch dinner 需要 deterministic cutoff／Plan B，不能只寫「1 小時 drive」。

## 交付時仍為 UNKNOWN 的項目

- 四段航班的實際 ticketed schedule、terminal、PNR、行李 through-check。
- 三間酒店及 Château Gütsch dinner 的真正 booking confirmation。
- TITLIS 2026-10-28 exact operating timetable／所有設施 live status（官方 timetable endpoint 本次 HTTP 429）。
- GoldenPass group reservation／座位／月台及 driver pickup confirmation。
- 包車車牌、車型、重量、司機工時及 France／Switzerland 道路合規證明。
- 每位旅客的個人入境資格、90/180 使用量及 passport condition。
