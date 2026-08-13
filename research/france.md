# France fact-check：Day 6–10（2026-10-22 至 2026-10-26）

> Audit date：2026-08-13（Asia/Hong_Kong）  
> Scope：只核查《Tour Specification 2 (2)》法國段；無落單、無登入、無聯絡商戶、無更改網站 code。  
> Source rule：最終事實只用景點／酒店官方、政府、城市或官方旅遊局。所有本文提供嘅外部 URL 都已用 `curl -sIL` 驗證最終 HTTP 200；Google Maps link 亦逐條驗證 200。官方頁如只支援一般開放時間，絕不當成 2026-10 指定日期保證。

## 0. 點讀呢份文件

- **FACT x%**：官方 primary source 有直接支持；百分比係對「呢句可直接落 V1」嘅信心。
- **INFERENCE x%**：由官方地址、營運限制同路線關係推算；唔係官方承諾。
- **UNKNOWN x%**：PDF 或官方尚未提供；V1 必須顯示「待確認」，唔可以自動補值。
- 「開放時間」係官方截至 audit date 公布嘅 regular hours；只有明確寫 2026 日期先叫「2026 schedule」。
- 法國座標主要以官方地址配對法國政府 BAN／Géoplateforme；方法說明：[Base Adresse Nationale API](https://adresse.data.gouv.fr/outils/api-doc/adresse) — **HTTP 200**。座標係導航 anchor，唔代表旅遊巴上落客位。

## 1. PDF 原文同整體 verdict

### 1.1 日期／星期核對

| Day | 日期 | 星期 | PDF 核心內容 | Verdict |
|---|---|---:|---|---|
| 6 | 2026-10-22 | Thu | Brussels → Paris、Eiffel Tower、Café de la Paix | **有條件可行／高預約風險**：鐵塔 time slot 仍係 TBD，而且 2026-09-29 起專業團新規生效。 |
| 7 | 2026-10-23 | Fri | Orangerie、午餐、Pierre Hermé；可加巴黎景點但「10 小時內」 | **可行但 10h 定義未清**：核心 4 站可排入；晚餐計唔計 10h 必須問旅行社。 |
| 8 | 2026-10-24 | Sat | Paris → Dijon、Palace、historic centre | **可行但偏緊**：4h 車程係 bare estimate；團體 museum 必須預約，宜用 16:00–18:00 group window。 |
| 9 | 2026-10-25 | Sun | Option 1 wine villages；Option 2 Lyon | **兩個 option 都有條件可行**：Option 1 不可把 tasting 當 walk-in；Option 2 Fourvière 12:30 前不可作一般旅遊參觀，而且當晚住宿城市未定。 |
| 10 | 2026-10-26 | Mon | 3–4h drive → Lavaux / Montreux | **路線未能鎖定**：10/25 住 Dijon、Beaune 定 Lyon 未知；「Lavaux Vineyards Montreux」亦唔係一個單一地址。 |

### 1.2 名稱／翻譯修正（可直接供 V1 data）

| PDF 寫法 | V1 應用正式名稱 | 核查 |
|---|---|---|
| Eiffel Tower | **Tour Eiffel / Eiffel Tower** | FACT 100% |
| Café De La Paix | **Café de la Paix** | FACT 100%；`de la` 唔應全大寫。 |
| l’Orangerie / 橘園藝術館 | **Musée de l’Orangerie** | FACT 100% |
| Pierre Hermes | **Pierre Hermé Paris 2e – Opéra** | FACT 98%；Hermé 有重音、無複數 s。 |
| 香水博物館 | **Musée du Parfum Fragonard** | INFERENCE 95%；PDF 無寫品牌，但同 Opéra 位置及官方名稱吻合；仍要旅行社確認係咪此館。 |
| Palais des Ducs de Bourgogne | **Palais des ducs et des États de Bourgogne / Musée des Beaux-Arts de Dijon** | FACT 100%；PDF 將 palace 同可參觀 museum 混成一項。 |
| Centre Historique | **Centre historique de Dijon**；步行建議可叫 **Parcours de la Chouette** | FACT 95% |
| Fresque des Lyonnais | **Fresque des Lyonnais Célèbres** | FACT 100% |
| Basilique Notre-Dame de Fourvière | 名稱正確 | FACT 100% |
| Terrass” Hotel | **Terrass'' Hotel** | FACT 98%；官方 legal page 用兩個 apostrophes，PDF 個 curly quote 錯。 |
| Lavaux Vineyards Montreux | **Lavaux Vineyard Terraces** 同 **Montreux** 應拆開 | FACT 95%；兩者係唔同地理 anchor，唔可以當一個 POI。 |

## 2. Day 6 — Thu 2026-10-22｜Brussels → Paris

### 2.1 行車同當日節奏

- **FACT 100%**：PDF 只寫「3 小時車程」、午餐、鐵塔時間待定、Café de la Paix 晚餐；無提供 Paris 抵達時間、鐵塔票、晚餐 booking 或 hotel confirmation。
- **INFERENCE 90%**：Brussels 市中心 → Paris 市中心約 310 km；「3h」未計 Brussels/Paris 市區塞車、休息、落客及安檢，V1 應用 **4–4.5h operational envelope**，唔應顯示 3h 倒數。
- **INFERENCE 88%**：合理次序係 Brussels 早上出發 → Paris 午餐／寄存行李 → Eiffel Tower → Café de la Paix → hotel。鐵塔同 Café 相隔幾個 arrondissement，需預留至少 45–60 分鐘作離場、集合及市內交通 buffer。
- **UNKNOWN 100%**：無法喺未有鐵塔 time slot、團體人數同旅遊巴落客安排之前定死鐘數。

### 2.2 Tour Eiffel / Eiffel Tower

- **正式名稱**：**FACT 100%** — Tour Eiffel / Eiffel Tower。
- **完整地址**：**FACT 100%** — 5 avenue Anatole France, 75007 Paris, France。
- **座標**：**FACT 96%** — `48.858819, 2.294597`（BAN address point；入口係 South / East Gardens，唔係巴士落客位）。
- **Official URL**：[Access map](https://www.toureiffel.paris/en/access-map) — **HTTP 200**；[rates & opening times](https://www.toureiffel.paris/en/rates-opening-times) — **HTTP 200**；[official ticketing](https://ticket.toureiffel.paris/en) — **HTTP 200**。
- **Google Maps**：[Tour Eiffel — deterministic search](https://www.google.com/maps/search/?api=1&query=Tour%20Eiffel%2C%205%20avenue%20Anatole%20France%2C%2075007%20Paris) — **HTTP 200**。

**開放／預約／timing**

- **UNKNOWN 100%**：2026-10-22 指定日 opening hours 尚未公布。官方 October calendar endpoint 截至 audit date 只回報 schedule validity 到 `2026-09-30`，無 10/22 時段：[official October calendar endpoint](https://www.toureiffel.paris/en/get-calendar-by-month?year=2026&month=10) — **HTTP 200**。
- **FACT 95%**：2026 visitor rules 寫一般全年 09:30–23:45、夏季 09:00–00:45，但官方亦明示可隨天氣、活動、人流更改；因此 V1 只可以顯示「一般參考」，不可當 10/22 保證。
- **FACT 100%**：10/22 落喺官方列出嘅 2026-10-17 至 11-02 school-vacation high-attendance period；官方建議 advance online ticket。來源：[attendance guidance](https://www.toureiffel.paris/en/planning-smooth-visit/attendance) — **HTTP 200**。
- **FACT 100%**：一般 individual elevator e-ticket 於 60 日前開售、2/F stairs e-ticket 於 30 日前開售；依日期推算 10/22 對應約 **2026-08-23** / **2026-09-22**，但實際 inventory 仍以 ticketing 為準。
- **FACT 100%**：有 time-stamped ticket 應於票面時間前 15–20 分鐘抵達 garden security。
- **FACT 100% / CRITICAL**：由 2026-09-29 起，**專業帶領而總人數多過 9 人（包括 guide）**不可現場買票、不可拆團規避；必須用 professional platform。每團最多 25 人包括 guide。來源：[tourism professionals](https://www.toureiffel.paris/en/tour-operators) — **HTTP 200**；[rule announcement](https://www.toureiffel.paris/en/news/visit/29-september-2026-groups-prohibited-ticket-office) — **HTTP 200**。
- **FACT 100%**：professional sales 最早 90 日前開、professional account 官方建議至少 4 個月前申請；10/22 嘅 90 日點約 2026-07-24，現時已進入可售窗口，但 PDF 無 booking proof。

**建議停留／動線 verdict**

- **INFERENCE 90%**：預留 **2.5–3.5h**（15–20m first security、排 lift、2/F／summit、落樓及集合）；大型團體或 summit 應取上限。
- **INFERENCE 92%**：Day 6 可以做到，但只限「已鎖 time slot＋Brussels 早出發」。如果 Paris ETA 追唔到 ticket check-in，唔應靠現場排隊作 Plan A，尤其 9+ 專業團已被禁止現場買票。

**V1 可用 copy**

> 鐵塔時間仲未鎖定。10 月 22 日屬官方預告高人流期；有票就喺票面時間前 20 分鐘到 East / South Garden 安檢。專業團多過 9 人唔可以現場買票。未見 booking reference 前，狀態保持「待確認」，唔好顯示已預約。

**Must-confirm before trip**

1. 參加人數連 guide 係咪 >9、travel agency professional account 是否已批。
2. 2/F 定 summit、stairs 定 lift、確實 entry time、booking reference / QR distribution。
3. 10/22 official calendar 一公布即重查 opening hours／exceptional closure。
4. Brussels departure、Paris bag drop、coach drop/pick-up 同 Café reservation 時間。

### 2.3 Café de la Paix

- **正式名稱**：**FACT 100%** — Café de la Paix。
- **完整地址**：**FACT 100%** — 5 Place de l’Opéra, 75009 Paris, France。
- **座標**：**FACT 90%** — `48.870940, 2.331740`（BAN exact address match）。
- **Official URL**：[Café & terrace](https://www.cafedelapaix.fr/en/cafe-and-terrace/) — **HTTP 200**；[official legal notice](https://www.cafedelapaix.fr/en/legal-notice/) — **HTTP 200**。
- **Google Maps**：[Café de la Paix — deterministic search](https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20de%20la%20Paix%2C%205%20Place%20de%20l%27Op%C3%A9ra%2C%2075009%20Paris) — **HTTP 200**。
- **FACT 100%**：官方 regular service 現為 Mon–Fri breakfast 07:00–10:30、Sat–Sun 07:00–11:00；lunch/dinner 11:30–23:00。
- **UNKNOWN 100%**：官方無提供「2026-10-22 date-specific service guarantee」；PDF 無 reservation proof。
- **INFERENCE 95%**：晚餐預留 **1.5–2h**；團體一定要預約，並將抵達時間放喺 Eiffel 完整離場 buffer 之後。
- **INFERENCE 93%**：Eiffel → Café → Terrass'' Hotel 方向合理；最大變數係鐵塔超時同 Paris traffic，唔係餐廳地址。

**V1 可用 copy**

> 晚餐地址係 Opéra 正對面嘅 Café de la Paix。官方一般供應晚餐至 23:00，但行程未見訂位證明；鐵塔離場後先按實時 ETA 更新到達時間。

**Must-confirm before trip**：reservation name/reference、party size、fixed menu／dietary needs、late-arrival policy、coach drop point。

## 3. Day 7 — Fri 2026-10-23｜Paris「10 小時內」

### 3.1 「10 小時」應點寫入 V1

- **FACT 100%**：PDF 原句只係「巴黎市內的景點可以添加，只要在 10 小時以內即可」，無講由幾點開始、晚餐／司機 standby／hotel transfer 計唔計。
- **INFERENCE 95%**：最安全解讀係 **hotel departure 至 hotel/restaurant final drop-off 嘅總 operating window**，唔係「核心行程以外再加 10 小時」。
- **INFERENCE 90%**：Orangerie 1.5h + lunch 1.5h + Pierre Hermé 0.5h + Fragonard 0.75h + 市內轉移／排隊 2–2.5h，核心約 6.25–6.75h；可留 2–3h buffer，但如果晚餐亦計入，唔應再硬塞大型景點。
- **UNKNOWN 100%**：旅行社未確認 10h 嘅 clock start/end；V1 應顯示「10h ceiling 待確認」，唔應自動倒數。

**建議動線（非 booking）**：**INFERENCE 92%** — Terrass'' Hotel → Musée de l’Orangerie → Breizh Café Montorgueil（如確認此分店）→ Pierre Hermé Opéra → Fragonard → dinner → hotel。由東向西／中部集中，避免跨城折返。

### 3.2 Musée de l’Orangerie

- **正式名稱**：**FACT 100%** — Musée de l’Orangerie。
- **完整地址**：**FACT 100%** — Jardin des Tuileries, Place de la Concorde (côté Seine), 75001 Paris, France。
- **座標**：**FACT 98%** — `48.863766, 2.322659`（museum official map anchor）。
- **Official URL**：[visit](https://www.musee-orangerie.fr/en/visit-orangerie) — **HTTP 200**；[groups practical information](https://www.musee-orangerie.fr/en/articles/groups-practical-information-281937) — **HTTP 200**。
- **Google Maps**：[Musée de l’Orangerie — deterministic search](https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20de%20l%27Orangerie%2C%20Jardin%20des%20Tuileries%2C%2075001%20Paris) — **HTTP 200**。
- **FACT 100%**：regular hours Mon、Wed–Sun 09:00–18:00；Tuesday closed；last admission 17:15、galleries clear 17:45。10/23 係 Friday，唔撞 regular closed day。
- **FACT 100%**：Friday 只喺 exhibition periods 先 late opening 到 21:00。
- **UNKNOWN 100%**：截至 audit date，未有足夠官方資料證明 2026-10-23 屬 late-opening exhibition Friday；V1 要以 **18:00 closure** 作 safe cutoff，唔可以用 21:00。
- **FACT 100% / GROUP**：7 人或以上（另加可 address group 嘅人）已屬 group，必須預約；adult group max 25。2026-10 group booking window 已按官方 calendar 於 2026-07-15 開放；group start slots Fri 09:00–16:00，並須早 15 分鐘到。
- **FACT 100%**：official self-guided / guided group duration 為 **1h30**。
- **INFERENCE 95%**：Day 7 第一站安排 1.5–2h 最穩陣；如果無 group confirmation，就唔可以將「09:00 入場」寫成 confirmed。

**V1 可用 copy**

> 星期五一般 09:00–18:00，17:15 後停止入場。今次未證實有 Friday late opening，所以用 18:00 做 hard cutoff。7+ 人團體一定要有預約，入場前 15 分鐘集合。

**Must-confirm before trip**：individual / group mode、time slot、reference、participant count、guide authorization、temporary exhibition／late-opening status。

### 3.3 Breizh Café（PDF 未指定分店）

- **UNKNOWN 100%**：PDF 只寫 brand「Breizh Café」，無分店、日期、時間或訂位。
- **V1 route candidate**：**INFERENCE 94%** — **Breizh Café Montorgueil**，因為喺 Orangerie → Opéra cluster 動線上，適合作 lunch；唔代表旅行社已選。
- **完整地址**：**FACT 100%** — 14 rue des Petits Carreaux, 75002 Paris, France。
- **座標**：**FACT 96%** — `48.866897, 2.347349`（BAN exact address match）。
- **Official URL**：[Montorgueil branch](https://www.breizhcafe.com/montorgueil) — **HTTP 200**；[official reservation hub](https://www.breizhcafe.com/reservation) — **HTTP 200**。
- **Google Maps**：[Breizh Café Montorgueil — deterministic search](https://www.google.com/maps/search/?api=1&query=Breizh%20Caf%C3%A9%20Montorgueil%2C%2014%20rue%20des%20Petits%20Carreaux%2C%2075002%20Paris) — **HTTP 200**。
- **FACT 100%**：官方 current regular hours Mon–Sun 11:00–22:30。
- **UNKNOWN 100%**：無 date-specific 2026-10-23 opening guarantee；無 booking proof。
- **INFERENCE 95%**：lunch 預留 **1.25–1.5h**，團體／Friday lunch 應預約。

**V1 可用 copy**

> PDF 未指定 Breizh Café 分店；V1 暫用 Montorgueil 做動線候選，未確認前卡片要顯示「分店待定」。如果落實此店，地址係 14 rue des Petits Carreaux。

**Must-confirm before trip**：branch、party size、booking reference、arrival window；如旅行社揀另一分店，地址、座標、Maps link 必須一齊換。

### 3.4 Pierre Hermé Paris 2e – Opéra

- **正式名稱**：**FACT 98%** — Pierre Hermé Paris 2e – Opéra。
- **完整地址**：**FACT 100%** — 39 avenue de l’Opéra, 75002 Paris, France。
- **座標**：**FACT 90%** — `48.868337, 2.333070`（BAN exact address result）。
- **Official URL**：[Pierre Hermé official store locator](https://www.pierreherme.com/nos-boutiques) — **HTTP 200**。
- **Google Maps**：[Pierre Hermé Opéra — deterministic search](https://www.google.com/maps/search/?api=1&query=Pierre%20Herm%C3%A9%20Paris%20Op%C3%A9ra%2C%2039%20avenue%20de%20l%27Op%C3%A9ra%2C%2075002%20Paris) — **HTTP 200**。
- **FACT 95%**：official locator 截至 audit date 顯示 current hours 11:00–20:00。
- **UNKNOWN 100%**：無 2026-10-23 date-specific schedule；retail stop 無門票，PDF 無 preorder／collection reference。
- **INFERENCE 96%**：預留 **20–40m**；如大團同時入店，需分批，唔好將佢當 seated dessert service。
- **INFERENCE 98%**：同 Fragonard／Café de la Paix 喺 Opéra cluster，動線合理。

**V1 可用 copy**

> 呢站係 Opéra 分店嘅外帶甜品／購物 stop，唔係 café 座位行程。官方目前顯示 11:00–20:00；10 月時間需出發前再查。

**Must-confirm before trip**：opening-hours recheck、團體分批安排、是否要預訂大額／大量 order。

### 3.5 Musée du Parfum Fragonard

- **正式名稱**：**FACT 100%** — Musée du Parfum Fragonard。
- **完整地址**：**FACT 100%** — 9 rue Scribe, 75009 Paris, France。
- **座標**：**FACT 96%** — `48.871470, 2.330268`（BAN exact address match）。
- **Official URL**：[museum](https://musee-parfum-paris.fragonard.com/en/) — **HTTP 200**；[free tours & group rules](https://musee-parfum-paris.fragonard.com/en/tours-and-activities/) — **HTTP 200**。
- **Google Maps**：[Musée du Parfum Fragonard — deterministic search](https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20du%20Parfum%20Fragonard%2C%209%20rue%20Scribe%2C%2075009%20Paris) — **HTTP 200**。
- **FACT 100%**：官方 current regular hours Mon–Sat 09:00–17:30、Sun 09:00–16:30；free entry。
- **FACT 100%**：individual self-guided visit 免費、無需預約，官方長度約 **30m**；professional group 必須預約。
- **UNKNOWN 100%**：PDF 無明示 Fragonard 品牌、亦無 group booking proof；無 2026-10-23 date-specific exception notice。
- **INFERENCE 95%**：連集合／shop buffer 預留 **45–60m**；最遲 16:30 左右開始較穩陣，唔好貼 17:30 cutoff 入場。

**V1 可用 copy**

> 香水博物館暫按 Fragonard Opéra 核查：個人自助參觀免費、約 30 分鐘；專業團體要預約。官方一般星期五 09:00–17:30，未有 booking reference 前保持「待確認」。

**Must-confirm before trip**：旅行社指嘅係咪 Fragonard、group booking、語言、arrival time、mobility needs。

### 3.6 Paris hotel — Terrass'' Hotel

- **狀態**：**UNKNOWN 100%** — PDF 酒店頁只係 proposal，無 confirmation number、rooming list 或付款證明；V1 不可顯示「已訂」。
- **正式名稱**：**FACT 98%** — Terrass'' Hotel。
- **完整地址**：**FACT 98%** — 12–14 rue Joseph de Maistre, 75018 Paris, France；legal entity address 寫 12 號，hotel contact page 寫 12–14 號。
- **座標**：**FACT 97%** — `48.886482, 2.333123`（12 號 BAN address point）。
- **Official URL**：[hotel](https://en.terrass-hotel.com/hotel) — **HTTP 200**；[official legal notice](https://www.terrass-hotel.com/mentions-legales) — **HTTP 200**。
- **Google Maps**：[Terrass'' Hotel — deterministic search](https://www.google.com/maps/search/?api=1&query=Terrass%27%27%20Hotel%2C%2012-14%20rue%20Joseph%20de%20Maistre%2C%2075018%20Paris) — **HTTP 200**。
- **FACT 100%**：official hotel page 提供 24h reception，並寫 parking only on reservation。
- **INFERENCE 95%**：Montmartre → Orangerie／Opéra 每朝需另預留市內交通；hotel parking 唔代表旅遊巴可泊。

**V1 可用 copy**

> Paris 酒店建議係 Terrass'' Hotel，地址已核實；但文件未有預訂證明，所以狀態係「酒店候選／待確認」，唔提供 check-in QR 或房號。

**Must-confirm before trip**：booking reference、stay nights（預期 22–24 Oct）、rooming list、breakfast、luggage、coach drop/parking、cancellation terms。

## 4. Day 8 — Sat 2026-10-24｜Paris → Dijon

### 4.1 行車同可行節奏

- **FACT 100%**：PDF 寫 4h drive、Palais、Centre Historique、Dijon Hotel；酒店無名。
- **INFERENCE 92%**：Paris hotel → Dijon centre 約 318 km；4h 係無大塞車概算。計 Paris exit、休息、落客，用 **4.5–5h operational envelope** 較安全。
- **INFERENCE 90%**：如 08:00 出發，午餐後做 1–1.5h 精簡 old-town walk，再用 16:00–18:00 museum group slot，當日可行；如 10:00 後先出發，完整 museum + 完整 1.5–2h walk + check-in 會過密。

### 4.2 Palais des ducs et des États de Bourgogne / Musée des Beaux-Arts de Dijon

- **正式名稱**：**FACT 100%** — Musée des Beaux-Arts de Dijon，位於 Palais des ducs et des États de Bourgogne。
- **入口地址**：**FACT 100%** — Place de la Sainte-Chapelle, 21000 Dijon, France。
- **座標**：**FACT 90%** — exact museum entrance coordinate 未由官方地址資料可靠返回；V1 route anchor 可用 palace exterior `Place de la Libération`：`47.321101, 5.041270`，卡片要標「外觀／集合點」，唔可冒充 museum door。
- **Official URL**：[Dijon Musées practical information](https://musees.dijon.fr/infos-pratiques-2/) — **HTTP 200**；[group visits](https://musees.dijon.fr/visiter/groupes/) — **HTTP 200**；[official City museums overview](https://www.dijon.fr/dijon-a-votre-service/culture/musees-dijonnais/) — **HTTP 200**。
- **Google Maps**：[Musée des Beaux-Arts de Dijon — deterministic search](https://www.google.com/maps/search/?api=1&query=Mus%C3%A9e%20des%20Beaux-Arts%20de%20Dijon%2C%20Place%20de%20la%20Sainte-Chapelle%2C%2021000%20Dijon) — **HTTP 200**。
- **FACT 100%**：1 Oct–31 May regular hours 09:30–18:00；closed Tuesdays、1 Jan、1/8 May、14 Jul、1/11 Nov、25 Dec。10/24 係 Saturday，唔撞 regular closure。
- **FACT 100%**：permanent collection 免費、individual visit 唔使預約；temporary exhibition 另計。
- **FACT 100% / GROUP**：groups 只接受預約；school-period group slots 11:00–13:30 及 16:00–18:00，external-guide groups亦偏好此時段。
- **FACT 95%**：官方 FAQ 建議 quick highlights 約 1h；深入 museum 需 3–4h。
- **INFERENCE 96%**：今個 transit day 應排 **1.5–2h highlights**，唔好向 user 聲稱係完整參觀。

**V1 可用 copy**

> 宮殿本身同 Musée des Beaux-Arts 要分清：可入場參觀嘅係美術館，入口喺 Place de la Sainte-Chapelle。星期六一般 09:30–18:00；團體必須預約。今次以 1.5–2h 精華路線為上限。

**Must-confirm before trip**：團體人數、16:00 slot／reference、guided or self-guided、temporary exhibition、coach drop、exact meeting point。

### 4.3 Centre historique de Dijon / historic-centre walk

- **正式名稱**：**FACT 100%** — Centre historique de Dijon；V1 可將自助步行模式叫「Parcours de la Chouette（Owl Trail）」但唔應把成個 historic centre 當一個有門票景點。
- **建議起點地址**：**FACT 95%** — Dijon tourist information anchor，11 rue des Forges, 21000 Dijon, France。
- **座標**：**FACT 98%** — `47.322068, 5.041013`（BAN exact address match）。
- **Official URL**：[City of Dijon — tourism & historic centre](https://www.dijon.fr/les-valeurs-de-dijon/dijon-ville-touristique-et-attractive/) — **HTTP 200**；[City heritage policy / walking resources](https://patrimoine.dijon.fr/dijon-ville-art-histoire/dijon-une-politique-patrimoniale/) — **HTTP 200**。
- **Google Maps**：[11 rue des Forges — deterministic search](https://www.google.com/maps/search/?api=1&query=Office%20de%20Tourisme%20de%20Dijon%2C%2011%20rue%20des%20Forges%2C%2021000%20Dijon) — **HTTP 200**。
- **FACT 100%**：historic centre 係戶外街區，無統一 opening hours／門票；個別教堂、courtyard、shop、tourist office 各自有時間。
- **FACT 95%**：官方 City page 描述 historic protected area 約 97 ha，包含 Rue de la Chouette、Palais、古老街巷及大量 listed buildings。
- **INFERENCE 95%**：transit day 建議 **1.5–2h**；如 museum 遲到，縮成 Rue des Forges → Notre-Dame / Owl → Rue Verrerie → Palais / Place de la Libération 45–75m loop。
- **INFERENCE 98%**：應落車後步行，唔應逐個 old-town POI 開車；石路／雨天要用步行鞋提示。

**V1 可用 copy**

> Dijon 老城係戶外步行區，唔需要門票。正常留 1.5–2 小時；如果由 Paris 到埗遲，改行 45–75 分鐘精簡圈，優先 Rue des Forges、Notre-Dame／貓頭鷹、Rue Verrerie 同 Place de la Libération。

**Must-confirm before trip**：museum slot 前／後行、步行能力、雨天 Plan B、tourist-office booklet 是否需要、coach meeting point。

### 4.4 Dijon hotel

- **UNKNOWN 100% / BLOCKER**：PDF 只寫「Dijon Hotel」，無正式名稱、地址、日期、booking reference。
- **UNKNOWN 100%**：無法提供 official URL、lat/lng 或 hotel-specific Google Maps；任何自動生成酒店地址都係作資料。
- **INFERENCE 100%**：呢個 missing field 直接影響 Day 8 check-in、Day 9 出發、coach parking，同 10/25 夜晚住 Dijon／Beaune／Lyon 嘅決策。

**V1 可用 copy**

> Dijon 酒店未指定，暫時不可導航。收到酒店正式名稱同 booking reference 後，先解鎖 check-in、停車同 Day 9 出發路線。

**Must-confirm before trip**：hotel、完整地址、24/25 Oct nights、rooming list、breakfast、luggage、coach access/parking、cancellation。

## 5. Day 9 — Sun 2026-10-25｜Option 1：Route des Grands Crus

### 5.1 Route des Grands Crus（selected northern section）

- **正式名稱**：**FACT 100%** — Route des Grands Crus de Bourgogne。
- **地址形式**：**FACT 100%** — 呢條係 Dijon → Santenay 約 60 km 嘅 route，唔係單一地址；PDF 實際只揀 Dijon → Gevrey-Chambertin → Vosne-Romanée → Beaune 嘅北段。
- **Official URL**：[official Beaune tourism route](https://www.beaune-tourisme.fr/explorer/la-route-des-grands-crus/une-viree-sur-la-route-des-grands-crus/) — **HTTP 200**；[official FAQ](https://www.beaune-tourisme.fr/explorer/la-route-des-grands-crus/faq-route-des-grands-crus/) — **HTTP 200**。
- **Google Maps route**：[Dijon → Gevrey → Vosne → Beaune](https://www.google.com/maps/dir/?api=1&origin=Dijon%2C%20France&destination=Place%20de%20la%20Halle%2C%2021200%20Beaune%2C%20France&waypoints=Halle%20Chambertin%2C%201%20rue%20Gaston%20Roupnel%2C%2021220%20Gevrey-Chambertin%7C1%20place%20de%20la%20Mairie%2C%2021700%20Vosne-Roman%C3%A9e&travelmode=driving) — **HTTP 200**。
- **FACT 100%**：official route follows north–south through vineyard villages；tourism office recommends north → south。
- **FACT 100%**：官方話完整 route 理想需 3–4 日，並建議預約 wine activities；有少量 cellars 接受 walk-in，但要逐間確認。
- **UNKNOWN 100% / CRITICAL**：PDF 無 winery、tasting、午餐、driver alcohol policy、booking reference；10/25 係 Sunday，絕不可寫「沿途可即場 tasting」做保證。
- **INFERENCE 93%**：只做三個 town anchors、景觀／拍照、午餐及最多一個**已預約** tasting，約 **7–9h** 可行；唔係一日完成全條 Route des Grands Crus。
- **INFERENCE 95%**：selected stops 車程本身唔長，真正時間成本係 parking、集合、village walking、lunch 同 tasting。

**V1 可用 copy**

> 今日只行 Route des Grands Crus 北段，唔係完成全條 60 km wine route。未指定酒莊就當「景觀＋村落」行程；星期日 tasting 只可以顯示已確認嘅 reservation，唔好鼓勵 walk-in。

**Must-confirm before trip**：winery／tasting（如需要）、Sunday slot、lunch、driver arrangement、10/25 夜晚酒店城市、返 Dijon 定留 Beaune。

### 5.2 Gevrey-Chambertin

- **正式名稱**：**FACT 100%** — Gevrey-Chambertin。
- **可靠 visitor anchor**：**FACT 100%** — Halle Chambertin / Office de Tourisme, 1 rue Gaston Roupnel, 21220 Gevrey-Chambertin, France。
- **座標**：**FACT 96%** — `47.226109, 4.969120`。
- **Official URL**：[Halle Chambertin](https://www.gevreynuitstourisme.com/ddata/halle-chambertin/) — **HTTP 200**；[tourist-office addresses/hours](https://www.gevreynuitstourisme.com/pratique/adresses-et-horaires/) — **HTTP 200**；[municipality](https://ville-gevrey-chambertin.fr/) — **HTTP 200**。
- **Google Maps**：[Halle Chambertin — deterministic search](https://www.google.com/maps/search/?api=1&query=Halle%20Chambertin%2C%201%20rue%20Gaston%20Roupnel%2C%2021220%20Gevrey-Chambertin) — **HTTP 200**。
- **UNKNOWN 100%**：official tourist-office hours page 只列到 Mar 2026，未有 2026-10-25 Sunday schedule；不可當 Halle 會開。
- **FACT 100%**：village outdoor streets 本身無統一 opening hours；wine cellar 係另一個需要逐間 booking 嘅 activity。
- **INFERENCE 95%**：純 village／photo stop **30–45m**；如有確認 tasting 再加 **45–75m**。

**V1 可用 copy**

> Gevrey-Chambertin 先當戶外村落＋Halle Chambertin 集合點。10 月 25 日遊客中心開放時間未公布；未有酒莊 booking 就唔顯示 tasting。

**Must-confirm before trip**：Halle Sunday hours、coach parking、winery（如有）及 reservation。

### 5.3 Vosne-Romanée

- **正式名稱**：**FACT 100%** — Vosne-Romanée。
- **可靠 village anchor**：**FACT 100%** — Mairie, 1 place de la Mairie, 21700 Vosne-Romanée, France。
- **座標**：**FACT 94%** — `47.158477, 4.954781`。
- **Official URL**：[official destination article](https://www.gevreynuitstourisme.com/du-village-de-vosne-romanee/) — **HTTP 200**；[French government directory](https://lannuaire.service-public.gouv.fr/bourgogne-franche-comte/cote-d-or/be2b0ddd-6413-46b6-9977-68ba3c169e8e) — **HTTP 200**。
- **Google Maps**：[Vosne-Romanée village anchor](https://www.google.com/maps/search/?api=1&query=1%20place%20de%20la%20Mairie%2C%2021700%20Vosne-Roman%C3%A9e) — **HTTP 200**。
- **FACT 100%**：Mairie regular hours 只列 Mon/Tue/Thu，Sunday 10/25 唔應預期可入；但 village streets 係戶外。
- **FACT 95%**：official tourism page提到 Romanée-Conti parcel 係 visitor interest，但無授權進入 vineyard／private property 嘅資訊。
- **INFERENCE 100%**：只可由 public road 合規觀望／拍照，唔入葡萄行、唔阻農務、唔將私人 domaine 當 public attraction。
- **INFERENCE 95%**：預留 **30–45m** village/photo stop。

**V1 可用 copy**

> Vosne-Romanée 係戶外村落 stop；星期日 mairie 唔係旅遊景點。Romanée-Conti 只可由公共道路尊重地觀看，唔好進入私人葡萄園。未有 domaine booking 就唔顯示 tasting。

**Must-confirm before trip**：legal coach drop、public-road photo point、任何 private visit reservation。

### 5.4 Beaune

- **正式名稱**：**FACT 100%** — Beaune。
- **可靠 central anchor**：**FACT 100%** — Place de la Halle / information point facing Hôtel-Dieu, rue de l’Hôtel-Dieu, 21200 Beaune, France。
- **座標**：**FACT 99%** — `47.022361, 4.836992`（official tourism map pin）。
- **Official URL**：[official Beaune destination page](https://www.beaune-tourisme.fr/explorer/villages-autour-beaune/a-cote-de-beaune/beaune/) — **HTTP 200**；[official information-office hours](https://www.beaune-tourisme.fr/s-informer/votre-office-de-tourisme/horaires/) — **HTTP 200**。
- **Google Maps**：[Place de la Halle — deterministic search](https://www.google.com/maps/search/?api=1&query=Place%20de%20la%20Halle%2C%2021200%20Beaune) — **HTTP 200**。
- **FACT 100% / DATE-SPECIFIC SEASON**：2026-09-21 至 11-01 時段，Place de la Halle information point Sunday 09:30–17:30；10/25 落喺此段。
- **FACT 100%**：PDF 只寫 Beaune，無指定 Hôtel-Dieu 或其他 paid attraction；old-town outdoor walk 無統一 opening hours／ticket。
- **INFERENCE 95%**：預留 **1.5–2h** 作 historic-centre walk、break、toilet／shopping；如要入 Hôtel-Dieu 必須另行加項及核票，唔可默認。

**V1 可用 copy**

> Beaune 先以 Place de la Halle 做中央集合點，星期日 10 月 25 日官方資料站季節時間係 09:30–17:30。PDF 無指定入 Hôtel-Dieu，V1 唔會自動加門票景點。

**Must-confirm before trip**：arrival/departure、coach parking、是否只行 old town、是否留宿 Beaune、任何 paid venue。

## 6. Day 9 — Sun 2026-10-25｜Option 2：Lyon

### 6.1 Vieux Lyon

- **正式名稱**：**FACT 100%** — Le Quartier du Vieux Lyon / Vieux Lyon。
- **可靠 walking anchor**：**FACT 98%** — Place Saint-Jean, 69005 Lyon, France。
- **座標**：**FACT 96%** — `45.761007, 4.826443`（BAN street anchor）。
- **Official URL**：[Lyon tourism — Vieux Lyon](https://www.visiterlyon.com/decouvrir/sites-et-monuments/renaissance/le-quartier-du-vieux-lyon) — **HTTP 200**。
- **Google Maps**：[Place Saint-Jean — deterministic search](https://www.google.com/maps/search/?api=1&query=Place%20Saint-Jean%2C%2069005%20Lyon) — **HTTP 200**。
- **FACT 100%**：Vieux Lyon 係約 24 ha 戶外 historic district，由 Saint-Georges、Saint-Jean、Saint-Paul 三部分組成；無統一 ticket／opening hours。
- **FACT 95%**：部分 traboules 係住宅 passage，實際開放可變；唔應將「一定入到 traboule」寫成保證。
- **INFERENCE 95%**：自助 walk 預留 **1.5–2h**；石路多，需防滑鞋／雨具。
- **INFERENCE 98%**：coach 應落客後 park once，以步行＋public transport 接 Fourvière，唔應逐點駕車。

**V1 可用 copy**

> Vieux Lyon 由 Place Saint-Jean 開始步行，正常留 1.5–2 小時。街區全天可行，但 traboules 可能因住宅管理而關門；見到關門就跳過，唔好硬闖。

**Must-confirm before trip**：coach drop/parking、walking accessibility、guided visit（如有）、雨天 route。

### 6.2 Fresque des Lyonnais Célèbres

- **正式名稱**：**FACT 100%** — Fresque des Lyonnais Célèbres。
- **完整地址**：**FACT 100%** — angle 49 quai Saint-Vincent et 2 rue de la Martinière, 69001 Lyon, France。
- **座標**：**FACT 99%** — `45.768140, 4.828059`（official tourism map）。
- **Official URL**：[Lyon tourism — Fresque](https://www.visiterlyon.com/decouvrir/sites-et-monuments/sites-et-monuments-remarquables/fresque-des-lyonnais-celebres) — **HTTP 200**。
- **Google Maps**：[Fresque — deterministic search](https://www.google.com/maps/search/?api=1&query=Fresque%20des%20Lyonnais%20C%C3%A9l%C3%A8bres%2C%2049%20quai%20Saint-Vincent%2C%2069001%20Lyon) — **HTTP 200**。
- **FACT 100%**：outdoor mural，無門票、無統一 opening hours。
- **INFERENCE 99%**：預留 **20–30m**；日光／天氣比開放時間重要。
- **INFERENCE 93%**：由 Vieux Lyon 步行可接，但若團隊步速慢，可安排 transit／coach drop；巴士停靠仍未核實。

**V1 可用 copy**

> 呢幅係戶外壁畫，唔使門票；預留 20–30 分鐘。正式名要寫 Fresque des Lyonnais Célèbres，唔好只寫「里昂壁畫」。

**Must-confirm before trip**：coach/drop logistics、daylight ETA、weather。

### 6.3 Basilique Notre-Dame de Fourvière

- **正式名稱**：**FACT 100%** — Basilique Notre-Dame de Fourvière。
- **完整地址**：**FACT 92%** — official Lyon tourism 寫 8 place de Fourvière, 69005 Lyon；venue own visit page寫 5 place de Fourvière。兩個門牌都指同一 sanctuary，V1 導航應用 venue name + **8 place de Fourvière**，並保留 address discrepancy note。
- **座標**：**FACT 96%** — `45.761915, 4.822541`（BAN no. 8 address point）。
- **Official URL**：[venue hours](https://www.fourviere.org/fr/horaires/) — **HTTP 200**；[Lyon tourism listing](https://www.visiterlyon.com/decouvrir/sites-et-monuments/sites-et-monuments-remarquables/basilique-notre-dame-de-fourviere) — **HTTP 200**；[official Lyon tourism PDF export](https://www.visiterlyon.com/pdf/44045) — **HTTP 200**。
- **Google Maps**：[Fourvière — deterministic search](https://www.google.com/maps/search/?api=1&query=Basilique%20Notre-Dame%20de%20Fourvi%C3%A8re%2C%208%20place%20de%20Fourvi%C3%A8re%2C%2069005%20Lyon) — **HTTP 200**。
- **FACT 100%**：Sunday basilica site regular access 07:00–21:00；Sunday masses include morning services。
- **FACT 95% / CRITICAL**：official Lyon tourism export明示 **Sunday 07:00–12:30 不准一般 tourist visit，access 留俾 pilgrims／services**。10/25 係 Sunday，因此 V1 必須將 interior tourism 排喺 **12:30 後**。
- **FACT 100%**：official tourism recommends F2 funicular from Vieux-Lyon；亦可步行上山。
- **INFERENCE 95%**：預留 **1–1.5h** 包括 interior、esplanade view 同 funicular buffer；宗教儀式或工程可隨時限制參觀。

**V1 可用 copy**

> 今日係星期日：12:30 前唔安排一般旅遊參觀 Fourvière 內部，上午只留俾朝聖者同禮儀。由 Vieux-Lyon 搭 F2 funicular 上山；12:30 後先按現場禮儀安排入內。

**Must-confirm before trip**：12:30 後實際 visit slot、mass／special event、funicular works、group rules、coach pick-up。

### 6.4 Lyon option route verdict

- **INFERENCE 93%**：Dijon centre → Lyon centre bare drive 約 2.1h；計 motorway stop、Lyon traffic、drop/parking，用 **2.5–3h each way** 較實際。
- **INFERENCE 95%**：如 10/25 **留宿 Lyon**，Vieux Lyon + Fresque + Fourvière after 12:30 可排成 8–9h travel day。
- **INFERENCE 98% / HIGH RISK**：如做完 Lyon **返 Dijon**，同日會有約 5–6h operational driving 加 4–5h sightseeing／meal，總日程約 10–12h；翌日再 3–4h 去 Montreux，唔適合當低風險方案。
- **UNKNOWN 100%**：PDF 無 Lyon hotel，亦無寫 Option 2 做完住邊；呢個係 Option 2 最大 blocker。
- **Google Maps route（只作 route preview）**：[Dijon → Vieux Lyon → Fresque → Fourvière](https://www.google.com/maps/dir/?api=1&origin=Dijon%2C%20France&destination=Basilique%20Notre-Dame%20de%20Fourvi%C3%A8re%2C%20Lyon&waypoints=Place%20Saint-Jean%2C%2069005%20Lyon%7CFresque%20des%20Lyonnais%20C%C3%A9l%C3%A8bres%2C%20Lyon&travelmode=driving) — **HTTP 200**。**INFERENCE 100%**：呢條 URL 唔代表 city-centre 每段都應揸車；落客後應步行／transit。

## 7. Day 9 Option 1 vs Option 2（唔代 user 揀 booking）

| 比較 | Option 1：Wine villages | Option 2：Lyon |
|---|---|---|
| Sunday closure exposure | **中**：村落戶外可到，但 winery／Halle 開放同 tasting 全部未鎖。 | **中**：戶外兩站可到；Fourvière 12:30 前禁一般旅遊參觀。 |
| Driving / parking | **較低**：Dijon → Gevrey → Vosne → Beaune 順向南；selected stops 相距短。 | **較高**：Dijon → Lyon 2.5–3h operational；Lyon parking／coach drop 未定。 |
| Booking dependency | **高（若要 tasting）**；無 winery 就只係景觀／村落。 | **中**；戶外 free，但任何 guided tour／hotel 未定。 |
| 10/25 night dependency | 住 Dijon 或 Beaune 都可，但必須確認；住 Beaune較順路但唔應自動假設。 | 最合理係住 Lyon；如返 Dijon，當日同翌日連續長車程。 |
| Day 10 Montreux | Dijon／Beaune 出發大致可落入 PDF 3–4h bare-road 概算，但需 border／stop buffer。 | Lyon 出發亦大致可落入 3–4h bare-road 概算；前提係真係住 Lyon。 |
| V1 可行 verdict | **有條件可行，營運風險較低**；當「scenic villages」就成立，tasting 必須另證。 | **有條件可行**；必須把 Fourvière 放 12:30 後，並先解決 Lyon overnight／coach plan。 |

- **INFERENCE 95%**：如果保持「Dijon hotel」作 10/25 夜晚住宿，Option 1 較少動線風險。
- **INFERENCE 95%**：如果 user 想揀 Lyon，先決條件係確認 10/25 Lyon hotel 或明確接受返 Dijon 嘅長日程。
- **UNKNOWN 100%**：呢兩句係 operational comparison，唔係代 user 作 definitive booking choice。

## 8. Day 10 — Mon 2026-10-26｜往 Montreux 嘅依賴

- **FACT 100%**：PDF 只寫「3–4 小時車程」同「Lavaux Vineyards Montreux」，無 10/25 hotel、出發地址、border route、車種。
- **INFERENCE 92%**：Dijon、Beaune 或 Lyon 去 Montreux 嘅 bare-road route 都大致可落喺約 3–3.25h；計休息、border、traffic，V1 應用 **4–5h operational envelope**。
- **UNKNOWN 100% / BLOCKER**：未決定 Option 1／2 同 10/25 睡邊度之前，唔可以生成唯一 Day 10 directions／departure time。
- **FACT 100%**：Swiss motorway 對不超過 3.5t 車輛用 vignette；超過 3.5t 係另一套 heavy-vehicle charge。官方 2026 vignette資料：[Swiss authorities](https://www.ch.ch/de/fahrzeuge-und-verkehr/autos-und-andere-fahrzeuge/autobahnvignette/) — **HTTP 200**。
- **UNKNOWN 100%**：tour coach 車重／營運商已否處理 Swiss road charge 未知；唔應叫旅客自行購買，應由 transport operator 確認。
- **FACT 95%**：Lavaux Vineyard Terraces 同 Montreux 係兩個不同 destination area；V1 要拆成 separate POI／route segment，再由 Swiss research 定地址同 visit plan。

**V1 可用 copy**

> 明日去 Montreux 嘅出發點未鎖，因為今晚住 Dijon、Beaune 定 Lyon 未決定。路線暫時只顯示「待 Day 9 option／酒店確認」。Lavaux 同 Montreux 要拆做兩站，唔好導航去一個虛構嘅「Lavaux Vineyards Montreux」地址。

## 9. Must-confirm before trip（按優先次序）

### 立即處理

1. **Eiffel Tower**：團體總人數連 guide、professional account、10/22 time slot、floor/access type、booking reference。
2. **Dijon hotel / 10/25 hotel city**：酒店正式名、地址、24/25 Oct nights；呢項決定 Day 9 同 Day 10 全部路線。
3. **Day 9 definitive option**：只確認 choice，唔代表自動預約；Option 1 要 winery，Option 2 要 Lyon overnight／coach plan。
4. **Orangerie group status**：7+ 人已必須預約；10 月 group window 已開。
5. **Day 7「10h」定義**：起點、終點、晚餐同司機 standby 是否計入。

### 出發前 2–4 星期重查

6. Eiffel 10/22 exact hours／exception；Orangerie 10/23 exhibition／late opening（仍以 18:00 safe cutoff）。
7. Pierre Hermé、Breizh Café、Fragonard regular hours 有無 holiday／private-event change。
8. Gevrey Halle Sunday hours、Route des Grands Crus winery Sunday reservation。
9. Fourvière Sunday services／works、F2 funicular service、Lyon coach drop。
10. 每間餐廳／酒店嘅 confirmation、late-arrival、group menu、accessibility、luggage／parking。

## 10. 五個最高風險（俾 root / V1 owner）

1. **Eiffel group booking**：10/22 exact hours未出；2026-09-29 新規令 9+ 專業團無 walk-in fallback。
2. **住宿斷層**：Dijon hotel未指定，10/25 夜晚城市亦未定，直接阻塞 Day 9 option 同 Day 10 directions。
3. **Sunday wine route誤導**：無 winery／reservation；只可以承諾戶外村落，唔可以承諾 tasting。
4. **Lyon Sunday constraint**：Fourvière 12:30 前唔可作一般旅遊參觀；如再返 Dijon，行程同翌日長車程過重。
5. **Day 7 10h ambiguity**：如果晚餐／司機時間計入，額外景點容量遠少過表面；要先定 clock start/end。

