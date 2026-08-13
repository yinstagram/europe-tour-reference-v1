/* Europe Tour 2026 — Reference V1 structured content.
 * `source` means the travel-agent PDF says it; it does not mean booked.
 */
(function () {
  const VERIFIED_AT = '2026-08-13';

  window.EUROPE_TOUR = {
    meta: {
      title: 'Europe Tour 2026 — Reference V1',
      startDate: '2026-10-16',
      endDate: '2026-10-31',
      dateRange: '2026/10/16–10/31',
      timeZone: 'Europe/Paris',
      verifiedAt: VERIFIED_AT,
      yearStatus: 'inference'
    },

    routeStops: [
      { city: 'Amsterdam', country: 'NL', date: '10/17–18' },
      { city: 'Rotterdam', country: 'NL', date: '10/19' },
      { city: 'Maastricht', country: 'NL', date: '10/20' },
      { city: 'Roermond', country: 'NL', date: '10/20' },
      { city: 'Brussels', country: 'BE', date: '10/21' },
      { city: 'Paris', country: 'FR', date: '10/22–23' },
      { city: 'Dijon', country: 'FR', date: '10/24–25' },
      { city: 'Montreux', country: 'CH', date: '10/26' },
      { city: 'Lucerne', country: 'CH', date: '10/27–28' },
      { city: 'Zürich', country: 'CH', date: '10/29–30' }
    ],

    days: [
      {
        id: 'd00', number: 0, date: '2026-10-16', dateLabel: '10 月 16 日', dayOfMonth: '16', monthLabel: 'OCT', dow: '星期五', country: 'HK', city: '香港',
        title: '出發前一晚 · 機場時間待確認',
        subtitle: 'PDF Day 0 嘅 10:00 同 00:40 起飛互相唔連貫',
        sourceSummary: 'PDF 寫 10:00 到達機場托運行李；首段 EK381 則寫 10 月 17 日 00:40 起飛。',
        assessment: '年份由 weekday 推斷為 2026；實際集合／check-in 時間一定要用旅行社 final notice 或機票確認。',
        risk: '唔好跟 PDF「10:00」自行去機場；先攞正式集合時間。',
        prep: '護照、正式機票／PNR、旅行社集合資料、保險、藥物、充電同轉機所需物品放手提。',
        activities: [
          {
            time: '待確認', title: '到香港國際機場托運行李', officialName: 'Hong Kong International Airport',
            address: '1 Sky Plaza Road, Chek Lap Kok, Hong Kong', mapsQuery: 'Hong Kong International Airport Terminal 1',
            description: 'PDF 寫 10:00，但未交代係上午定晚上，亦同翌日 00:40 航班唔吻合。',
            duration: '以 final assembly notice 為準', hours: '24 小時機場', booking: '需要正式集合通知／e-ticket',
            status: 'unknown', warning: '呢個係全程第一個 critical blocker；未確認前唔好當 10:00 係真實集合時間。', critical: true
          }
        ],
        hotelRefs: []
      },
      {
        id: 'd01', number: 1, date: '2026-10-17', dateLabel: '10 月 17 日', dayOfMonth: '17', monthLabel: 'OCT', dow: '星期六', country: 'NL', city: 'Amsterdam',
        title: '香港 → 杜拜 → 阿姆斯特丹',
        subtitle: '到步後酒店、鑽石工場二選一、Madame Tussauds',
        sourceSummary: 'EK381 00:40 HKG→DXB；EK147 08:05 DXB→AMS，13:15 抵達。入住酒店後 Royal Coster 或 GASSAN，再去 Madame Tussauds。',
        assessment: '13:15 係 PDF 原稿時間，未有 e-ticket 證實。即使準時，入境、行李、入市區同酒店亦會壓縮公開 tour 時段；V1 只保留一間鑽石場，唔安排兩間全做。',
        risk: 'Royal Coster／GASSAN 公開 tour 約 17:00 完結；酒店到達延誤就先取消鑽石站，保留可控制嘅 Madame Tussauds 時段。',
        prep: '機票截圖、酒店地址、薄外套；到 AMS 後先確認 coach meeting point。',
        activities: [
          { time: '00:40', title: 'EK381 香港 → 杜拜', officialName: 'Emirates EK381', address: 'Hong Kong International Airport, 1 Sky Plaza Road, Chek Lap Kok', mapsQuery: 'Hong Kong International Airport Terminal 1', description: 'PDF 航班表寫 00:40–04:25；時間算術係 7 小時 45 分，但未有指定日期 e-ticket／PNR 證實。', duration: 'PDF：7 小時 45 分', hours: '00:40–04:25（只屬 PDF 原稿）', booking: '必須用 e-ticket／PNR 確認', status: 'unknown', warning: '未收正式票證前，唔啟動去機場提醒。', critical: true },
          { time: '08:05', title: 'EK147 杜拜 → 阿姆斯特丹', officialName: 'Emirates EK147', address: 'Dubai International Airport, Dubai, United Arab Emirates', mapsQuery: 'Dubai International Airport Terminal 3', description: 'PDF 寫 3 小時 40 分鐘轉機；時間算術成立，但指定日航班未有 e-ticket 證實。', duration: 'PDF：7 小時 10 分', hours: '08:05–13:15（只屬 PDF 原稿）', booking: '必須用 e-ticket／PNR 確認', status: 'unknown' },
          { time: '13:15', title: 'PDF：抵達 Amsterdam Schiphol', officialName: 'Amsterdam Airport Schiphol', address: 'Evert van de Beekstraat 202, 1118 CP Schiphol, Netherlands', mapsQuery: 'Amsterdam Airport Schiphol Arrivals', description: '13:15 只屬未驗證 flight table；收到 e-ticket 後先啟動落機／接車提醒。', duration: '到步後建議至少 90–120 分鐘作入境、行李同集合 buffer', hours: '13:15（只屬 PDF 原稿）', booking: '確認 e-ticket 同旅行社接機點', status: 'unknown' },
          { time: '二選一', title: 'Royal Coster Diamonds', officialName: 'Royal Coster Diamonds — Diamond Factory Tour', address: 'Paulus Potterstraat 2, 1071 CZ Amsterdam, Netherlands', mapsQuery: 'Royal Coster Diamonds Paulus Potterstraat 2 Amsterdam', description: 'Factory Tour 約 30 分鐘；公開時段一般到 17:00。若 15:45 前仍未到酒店／寄存行李，就唔勉強塞入。', duration: 'tour 約 30 分鐘；連等候 45–60 分鐘', hours: '現行每日 09:00–17:00；17:00 後只限預約', booking: '同 GASSAN 二選一；tour 要先預約', status: 'verified', warning: 'tour 不適合輪椅進入；2026-10-17 特別時間仍要出發前重查。', officialUrl: 'https://www.royalcoster.com/en/tours-and-workshops/diamond-factory-tour/', verifiedAt: VERIFIED_AT },
          { time: '二選一', title: 'HOUSE of GASSAN', officialName: 'HOUSE of GASSAN — Diamond Experience Tour', address: 'Nieuwe Uilenburgerstraat 173–175, 1011 LN Amsterdam, Netherlands', mapsQuery: 'HOUSE of GASSAN Nieuwe Uilenburgerstraat 173 Amsterdam', description: '較近酒店／Centraal 一帶；Diamond Experience Tour 約 1 小時。只可同 Royal Coster 二選一。', duration: 'tour 約 1 小時；連等候 75 分鐘', hours: '現行 tour 每日 09:00–17:00；HQ 至 17:30', booking: '同 Royal Coster 二選一；預約優先', status: 'verified', warning: '2026-10-17 特別時間同 walk-in 位未有保證。', officialUrl: 'https://www.gassan.com/en/tours/diamond-experience-tour', verifiedAt: VERIFIED_AT },
          { time: '下午待定', title: 'Madame Tussauds Amsterdam', officialName: 'Madame Tussauds Amsterdam', address: 'Dam 20, 1012 NP Amsterdam, Netherlands', mapsQuery: 'Madame Tussauds Amsterdam Dam 20', description: '正式名稱已修正；由 Amsterdam Centraal 步行約 10 分鐘。星期六通常較繁忙，要按票面時段到場。', duration: '平均約 1 小時；V1 留 75–90 分鐘', hours: '2026-10-17 exact hours 尚未公布', booking: '先揀 time slot；現場票唔保證即時入場', status: 'verified', warning: '航班／行李延誤先睇票可否改期，唔好硬趕。', officialUrl: 'https://www.madametussauds.com/amsterdam/en/plan-your-visit/opening-hours-location-directions/opening-hours/', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['ams-amrath']
      },
      {
        id: 'd02', number: 2, date: '2026-10-18', dateLabel: '10 月 18 日', dayOfMonth: '18', monthLabel: 'OCT', dow: '星期日', country: 'NL', city: 'Amsterdam',
        title: 'Zaanse Schans · 運河 · 舊城夜色',
        subtitle: '風車村 → Canal Cruise → De Wallen & Zeedijk',
        sourceSummary: '上午風車村（PDF 同時寫 Heerlijck Slaapen op de Zaanse Schans）；下午運河船；黃昏至晚上 De Wallen 與 Zeedijk。',
        assessment: '方向合理；但「Heerlijck Slaapen」現時係有人居住嘅 Het Noorderhuis，唔係可住宿／入內景點。運河船 operator 同碼頭仍未指定。',
        risk: 'Zaanse Schans 各風車／museum 自訂時間；Canal cruise 冇 operator 就冇準確集合地址。',
        prep: '防雨外套、船上保暖層、手機低光模式；出發前記低 coach 集合點。',
        activities: [
          { time: '上午待定', title: 'Zaanse Schans 風車村', officialName: 'Zaanse Schans', address: 'Schansend 7, 1509 AW Zaandam, Netherlands', mapsQuery: 'Zaanse Schans Schansend 7 Zaandam', description: '公共村區全年 365 日可到訪，但每間風車、museum 同 shop 各自開門；唔代表全部都會開。', duration: '約 2.5–4 小時，視入幾多場館', hours: '村區全年可行；多數場館約 09:00–17:00但逐間不同', booking: '部分風車／博物館另購票', status: 'verified', warning: '出發前一晚睇官方逐日 calendar；10 月已冇 bicycle taxi。', officialUrl: 'https://www.dezaanseschans.nl/en/plan-your-visit/opening-hours/', verifiedAt: VERIFIED_AT },
          { time: '順路外觀', title: 'Het Noorderhuis', officialName: 'Het Noorderhuis（PDF：Heerlijck Slaapen）', address: 'Kalverringdijk 17, 1509 BT Zaandam, Netherlands', mapsQuery: 'Kalverringdijk 17 Zaandam Netherlands', description: 'PDF 用咗舊／混淆名稱；官方現列為有人居住嘅歷史住宅。', duration: '外觀 5–10 分鐘', hours: '私人住宅，無訪客時段', booking: '不可入內，亦唔係住宿 CTA', status: 'verified', warning: '只可由公共路段望外觀；唔好入院、敲門或當成民宿景點。', critical: true, officialUrl: 'https://www.zaanseschans.com/en/peaceful-slumber-in-the-zaanse-schans/', verifiedAt: VERIFIED_AT },
          { time: '下午待定', title: 'Amsterdam Canal Cruise', officialName: 'Amsterdam canal cruise — operator not specified', address: '上船碼頭待 operator 確認', mapsQuery: '', noMap: true, description: 'PDF 只寫 Canal Cruise。未揀船公司前，碼頭、班次、夜航、洗手間同無障礙安排全部未鎖。', duration: '船程通常至少 1 小時；連報到留 90 分鐘', hours: '視 operator；City Card 現行 included cruise 為 10:00–18:00', booking: '必須確認 operator／boarding pier／time', status: 'unknown', warning: '想坐黃昏／夜航要另揀有夜班嘅 operator；V1 刻意唔提供假碼頭。', officialUrl: 'https://www.iamsterdam.com/en/tickets/canal-cruise-ticket' },
          { time: '黃昏待定', title: 'De Wallen & Zeedijk', officialName: 'De Wallen and Zeedijk', address: 'De Wallen / Zeedijk, 1012 Amsterdam, Netherlands', mapsQuery: 'Zeedijk Amsterdam Netherlands', description: '舊城公共步行區，唔係 PDF 翻譯所指嘅「大蔴街」景點。商戶各自營業。', duration: '約 45–60 分鐘', hours: '公共街區，無統一關門時間', booking: '兩人自助步行不需門票', status: 'verified', warning: '唔好影或拍攝性工作者；人多時一齊行、手機銀包放好。', officialUrl: 'https://www.iamsterdam.com/en/explore/neighbourhoods/centrum/things-to-do-in-de-wallen-red-light-district', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['ams-amrath']
      },
      {
        id: 'd03', number: 3, date: '2026-10-19', dateLabel: '10 月 19 日', dayOfMonth: '19', monthLabel: 'OCT', dow: '星期一', country: 'NL', city: 'Rotterdam · Den Haag · Yerseke',
        title: '現代建築、Oesterfestival、王宮外觀、海岸',
        subtitle: 'Rotterdam → Yerseke → Den Haag → Scheveningen → Rotterdam',
        sourceSummary: 'Cube Houses、Blaaktoren、Markthal；半小時車程到 Noordeinde Palace；The Pier SkyView；1.5 小時去 Oesterij Yerseke；1 小時返 Rotterdam。',
        assessment: 'PDF 原順序將唯一 18:00 hard close 放喺後段。V1 改為先做 Rotterdam Blaak cluster，再去 Oesterfestival，之後先做 Noordeinde 外觀同較夜收嘅 SkyView。',
        risk: 'Oesterfestival 12:00–18:00 而且要 ticket；未有票就唔可以當成生蠔場導覽。四區多段車程仍屬高壓日。',
        prep: 'Oesterfestival ticket、Zaetepolder 泊車資料、防風外套；出發前查 SkyView live status。',
        moments: [
          { time: '12:00', title: 'Oesterfestival 開場', status: 'verified', warning: '入場要 ticket；今日唔係 drop-in farm tour。' },
          { time: '16:30', title: 'Oesterfestival 行程安全 cutoff', status: 'inference', warning: '呢個係 V1 安全線，唔係官方 last admission；仍未到就唔再壓縮後段車程。' },
          { time: '18:00', title: 'Oesterfestival 關門', status: 'verified', warning: 'SkyView 如正常營運可放日尾；先查 live notice。' }
        ],
        activities: [
          { time: '上午待定', title: 'Cube Houses', officialName: 'Kijk-Kubus (Show-Cube) / Cube Houses', address: 'Overblaak 70, 3011 MH Rotterdam, Netherlands', mapsQuery: 'Kijk-Kubus Overblaak 70 Rotterdam', description: '外觀保底；Kijk-Kubus 官網同頁殘留幾組互相衝突嘅 opening-hours 文案，V1 唔承諾入室。', duration: '外觀 10–15 分鐘；室內核實後合計約 30 分鐘', hours: '2026-10-19 室內 opening 未能可靠驗證', booking: '到訪前再核；未核到只影外觀', status: 'unknown', warning: 'Kijk-Kubus 室內係早段延誤時第一個砍項。', officialUrl: 'https://www.kubuswoning.nl/en/visit.html' },
          { time: '上午待定', title: 'Blaaktoren（Het Potlood）', officialName: 'Blaaktoren / Het Potlood', address: 'Kolk 46, 3011 MD Rotterdam, Netherlands', mapsQuery: 'Blaaktoren Kolk Rotterdam', description: '住宅塔樓，只睇外觀；同 Cube Houses、Markthal 係同一個步行 cluster。', duration: '外觀 5–10 分鐘', hours: '住宅建築，無一般 visitor interior', booking: '不需；勿進入私人住宅', status: 'verified', officialUrl: 'https://tile.gis.rotterdam.nl/gw2data/data/dsv/bestemmingsplannen_vig/voorschriften/1054.pdf', verifiedAt: VERIFIED_AT },
          { time: '上午待定', title: 'Markthal Rotterdam', officialName: 'Markthal Rotterdam', address: 'Ds. Jan Scharpstraat 298, 3011 GZ Rotterdam, Netherlands', mapsQuery: 'Markthal Rotterdam Ds Jan Scharpstraat 298', description: '室內 market／住宅拱形建築；三個 Blaak 點一次步行完成，各檔可以有自己時間。', duration: '30–60 分鐘；Blaak cluster 合計 45–90 分鐘', hours: '星期一現行 10:00–20:00；當日例外需重查', booking: '公共市場不需；個別餐廳另計', status: 'verified', officialUrl: 'https://markthal.nl/', verifiedAt: VERIFIED_AT },
          { time: '硬時段 · 12:00–18:00', title: 'Oesterfestival 2026', officialName: 'Oesterij — Oesterfestival', address: 'Havendijk 12, 4401 NS Yerseke, Netherlands', mapsQuery: 'Oesterij Havendijk 12 Yerseke', description: '2026-10-19 正值官方 Oesterfestival，唔係隨時到嘅 oyster farm tour。一般 4–9 月 Experience 今日亦唔適用。', duration: '建議 1.5–2.5 小時', hours: '2026-10-19 12:00–18:00', booking: '入場需要 Oesterfestival ticket', status: 'verified', warning: '建議最遲 16:30 到；未有 ticket 就唔當活動成立。泊車跟 festival 指示去 Zaetepolder。', critical: true, officialUrl: 'https://www.oesterij.nl/oesterfestival/info', verifiedAt: VERIFIED_AT },
          { time: '下午／傍晚', title: 'Noordeinde Palace 外觀', officialName: 'Paleis Noordeinde', address: 'Noordeinde 68, 2514 GL Den Haag, Netherlands', mapsQuery: 'Paleis Noordeinde Noordeinde 68 Den Haag', description: '荷蘭國王工作宮殿；10 月唔開放一般室內參觀。只由公共空間睇門面。', duration: '外觀 10–15 分鐘；另加花園先留 30–45 分鐘', hours: '10 月無一般 interior opening', booking: '無室內 tour；Palace Garden 時間另查', status: 'verified', warning: '唔需要為宮殿預留一個入內 tour slot。', officialUrl: 'https://www.royal-house.nl/topics/palaces/noordeinde-palace', verifiedAt: VERIFIED_AT },
          { time: '日尾候選', title: 'SkyView de Pier', officialName: 'SkyView de Pier', address: 'Strandweg 156, 2586 JW Scheveningen, Den Haag, Netherlands', mapsQuery: 'SkyView de Pier Strandweg 156 Den Haag', description: '一圈約 12–15 分鐘；密閉車廂全年營運，但天氣、安全或維修仍可臨時停駛。', duration: '連 Pier 步行／排隊 30–45 分鐘', hours: '星期一現行 11:00–21:00；售票處約早 10 分鐘關', booking: '可網上或現場買；團體安排待確認', status: 'verified', warning: '出發前睇 live notice；停駛就改做 Scheveningen 海邊短行。', officialUrl: 'https://skyviewdepier.nl/products/opening-hours/', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['rtm-pincoffs']
      },
      {
        id: 'd04', number: 4, date: '2026-10-20', dateLabel: '10 月 20 日', dayOfMonth: '20', monthLabel: 'OCT', dow: '星期二', country: 'NL', city: 'Maastricht · Roermond',
        title: 'Maastricht 巷弄 → Roermond Outlet',
        subtitle: 'Rotterdam 南下 · 歷史 courtyard · 購物',
        sourceSummary: '2 小時車程到 Maastricht Twaalf Apostelenhofje；午餐；45 分鐘到 Designer Outlet Roermond；住 Roermond。',
        assessment: '路線方向合理；Twaalf Apostelenhofje 係住宅 monument，官方冇公布訪客開放時間，只可當外觀站。Outlet 2026 平日 base hours 已核實。',
        risk: 'Outlet 離店時間受 closing hour；Hotel Dux／Het Arresthuis 未揀。',
        prep: '購物退稅資料、護照副本、行李空間；hotel choice 同 twin-room 要書面確認。',
        activities: [
          { time: '上午待定', title: '前往 Maastricht', officialName: 'Rotterdam to Maastricht by private coach', address: 'Maastricht, Netherlands', mapsQuery: 'Maastricht Netherlands', description: 'PDF 估 2 小時；V1 當 planning estimate，實際要加 traffic／rest stop。', duration: 'PDF 約 2 小時', hours: '道路交通視當日', booking: '包車安排待旅行社', status: 'inference' },
          { time: '中午待定', title: 'Twaalf Apostelenhofje 外觀', officialName: 'HUIS der Twaalf Apostelen, genaamd De Belick', address: 'Bogaardenstraat 1M-09, 6211 SM Maastricht, Netherlands', mapsQuery: 'Bogaardenstraat 1M-09 Maastricht Netherlands', description: '官方 monument register 列原始功能為住宅；今日只睇入口同外觀。', duration: '外觀 10–15 分鐘', hours: '無官方訪客 opening hours', booking: '閘門冇明確開放指示就唔入內', status: 'verified', warning: '唔好將 residential courtyard 當成自由入內景點。', officialUrl: 'https://monumentenregister.cultureelerfgoed.nl/monumenten/26722', verifiedAt: VERIFIED_AT },
          { time: '下午待定', title: 'Designer Outlet Roermond', officialName: 'Designer Outlet Roermond', address: 'Stadsweide 2, 6041 TD Roermond, Netherlands', mapsQuery: 'Designer Outlet Roermond Stadsweide 2', description: '2026 corporate portfolio 已列平日 base hours；shopping 時間可按興趣伸縮。', duration: '約 2–4 小時', hours: '2026 星期一至五 base hours 10:00–20:00；special hours 再查', booking: '一般入場不需；coach parking 另確認', status: 'verified', warning: '10/20 係星期二；出發前仍要查當日 special hours。', officialUrl: 'https://www.mcarthurglen.com/en/outlets/nl/designer-outlet-roermond/', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['roe-dux', 'roe-arresthuis']
      },
      {
        id: 'd05', number: 5, date: '2026-10-21', dateLabel: '10 月 21 日', dayOfMonth: '21', monthLabel: 'OCT', dow: '星期三', country: 'BE', city: 'Brussels · Waterloo',
        title: 'Waterloo 1815 + Brussels 核心地標',
        subtitle: '半日 Waterloo · Atomium 17:30 cutoff · Grand-Place 夜景',
        sourceSummary: 'Roermond 2 小時到 Brussels；Grand-Place、Atomium、Waterloo、Brussels 馬車體驗；住 Brussels。',
        assessment: 'V1 以 Domaine de la Bataille de Waterloo 1815 作明確地點；佢本身要半日至全日，而 Atomium 17:30 last entry，原稿五項結構性過載。馬車無 operator／官方頁，唔加入 active route。',
        risk: '如果到 Waterloo 已遲過約 11:30，就要即時決定保完整 Waterloo 定保 Atomium，唔好全部順延。',
        prep: 'Waterloo ticket／tour language、Atomium ticket、Brussels LEZ 車隊證明、酒店 alternative。',
        moments: [
          { time: '11:30', title: 'Waterloo／Atomium 取捨點', status: 'inference', warning: '如果而家先到 Waterloo，完整半日同有 buffer 嘅 Atomium 好難兼得；即刻揀主次。' },
          { time: '17:30', title: 'Atomium last-entry reference', status: 'verified', warning: '唔好賭最後一刻；指定日 exceptional closure 仍要當朝重查。' }
        ],
        activities: [
          { time: '上午／半日', title: 'Domaine de la Bataille de Waterloo 1815', officialName: 'Domaine de la Bataille de Waterloo 1815', address: 'Route du Lion 1815, 1420 Braine-l’Alleud, Belgium', mapsQuery: 'Domaine de la Bataille de Waterloo 1815 Route du Lion', description: '實際位於 Braine-l’Alleud，唔係 Brussels 市內。完整票涵蓋 Memorial、Lion’s Mound、Panorama 同 Hougoumont。', duration: '官方建議半日至全日', hours: '9–10 月現行 10:00–18:30；Hougoumont 11:00–18:00', booking: '自助 ticket 同 guided tour 要分清；tour 語言／時段另確認', status: 'verified', warning: '到門口影相唔等同完成 Waterloo；同 Atomium 必須先定主次。', critical: true, officialUrl: 'https://waterloo1815.be/en', verifiedAt: VERIFIED_AT },
          { time: '下午 · 17:30 前', title: 'Atomium', officialName: 'Atomium', address: 'Place de l’Atomium 1, 1020 Brussels, Belgium', mapsQuery: 'Atomium Place de l Atomium 1 Brussels', description: '官方現行每日開放；Waterloo 離開得遲就唔好賭最後一刻。', duration: '約 1.5–2 小時；繁忙另加排隊', hours: '現行 10:00–18:00；ticket office／last entry 17:30', booking: 'ticketed attraction；建議預購指定日期／時段', status: 'verified', warning: '17:30 係 hard last-entry reference；2026-10-21 特別安排要再查。', officialUrl: 'https://atomium.be/home/cover?lang=en', verifiedAt: VERIFIED_AT },
          { time: '黃昏／夜晚', title: 'Grand-Place', officialName: 'Grand-Place of Brussels / Grote Markt', address: 'Grand-Place, 1000 Brussels, Belgium', mapsQuery: 'Grand-Place Brussels Belgium', description: '公共廣場適合留到夜晚；City Hall 入內係另一個 ticketed visit，原稿冇另訂。', duration: '約 30–60 分鐘；餐飲另計', hours: '公共廣場，無一般 admission／opening hours', booking: '廣場不需；活動／保安可臨時限制', status: 'verified', officialUrl: 'https://www.brussels.be/grand-place-brussels', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['bru-leplaza', 'bru-warwick']
      },
      {
        id: 'd06', number: 6, date: '2026-10-22', dateLabel: '10 月 22 日', dayOfMonth: '22', monthLabel: 'OCT', dow: '星期四', country: 'FR', city: 'Paris',
        title: 'Brussels → Paris · Eiffel Tower',
        subtitle: '三小時車程 · 鐵塔待定時段 · Café de la Paix',
        sourceSummary: '3 小時車程；午餐；Eiffel Tower 參觀時間待定；Café de la Paix 晚餐；住 Paris。',
        assessment: '「3 小時」只係 bare estimate；連 Brussels／Paris 市區、休息、落客同安檢，V1 用 4–4.5 小時 operational envelope。Eiffel 同晚餐都要先攞 booking。',
        risk: '10/22 屬官方高人流期；由 2026-09-29 起，專業帶領而總人數多過 9 人不可現場買鐵塔票，冇 walk-in fallback。',
        prep: '護照、Eiffel ticket、晚餐 reservation、巴黎 coach drop-off／pickup 同酒店地址。',
        activities: [
          { time: '上午待定', title: 'Brussels → Paris', officialName: 'Private coach transfer', address: 'Paris, France', mapsQuery: 'Paris France', description: 'PDF 估 3 小時，但 V1 計埋 Brussels／Paris 市區、休息、落客同塞車。', duration: '建議 4–4.5 小時 operational envelope', hours: '道路交通視當日', booking: '包車 final routing、Crit’Air／ZFE 證明待確認', status: 'inference' },
          { time: '下午待定', title: 'Eiffel Tower', officialName: 'Tour Eiffel', address: '5 Avenue Anatole France, 75007 Paris, France', mapsQuery: 'Tour Eiffel 5 Avenue Anatole France Paris', description: '10/22 exact hours 尚未公布，而且係官方高人流期；有票要喺票面時間前 15–20 分鐘到 garden security。', duration: '建議 2.5–3.5 小時連安檢／排隊／集合', hours: '2026-10-22 exact hours／slot 未公布', booking: '必須鎖日期、時間、樓層、入口；9+ 專業團須 professional platform', status: 'unknown', warning: '2026-09-29 起，專業帶領而總人數 >9 不可現場買票或拆團規避。', critical: true, officialUrl: 'https://www.toureiffel.paris/en/rates-opening-times' },
          { time: '晚餐待定', title: 'Café de la Paix', officialName: 'Café de la Paix', address: '5 Place de l’Opéra, 75009 Paris, France', mapsQuery: 'Café de la Paix 5 Place de l Opéra Paris', description: '地址同一般服務已核實，但 PDF 未見訂位證明；鐵塔離場後要按實時 ETA 更新到達時間。', duration: '約 1.5–2 小時', hours: '現行 lunch／dinner 11:30–23:00；指定日例外再查', booking: '需要 reservation name／reference、party size 同 late-arrival policy', status: 'verified', warning: '官方 public hours 唔等同 2026-10-22 已有餐桌。', officialUrl: 'https://www.cafedelapaix.fr/en/cafe-and-terrace/', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['par-terrass']
      },
      {
        id: 'd07', number: 7, date: '2026-10-23', dateLabel: '10 月 23 日', dayOfMonth: '23', monthLabel: 'OCT', dow: '星期五', country: 'FR', city: 'Paris',
        title: '巴黎藝術、甜點同自由加點',
        subtitle: 'Orangerie · Pierre Hermé · Fragonard / Breizh reference',
        sourceSummary: 'Musée de l’Orangerie；午餐；Pierre Hermé Paris Opéra；可加巴黎景點但全日不超過 10 小時，例子 Breizh Café、香水博物館。',
        assessment: 'Orangerie → Montorgueil 候選午餐 → Pierre Hermé／Fragonard 屬集中動線；核心約 6.25–6.75 小時，但「10 小時」由邊度起計仍未定。',
        risk: '7+ 人 Orangerie 必須預約；星期五晚開只限特展期，V1 用 18:00／17:15 last entry 作安全 cutoff。Breizh 分店仍未落實。',
        prep: 'Orangerie group reference、舒適鞋；確認 10h 由 hotel departure 定其他時間開始、晚餐計唔計。',
        activities: [
          { time: '上午待定', title: 'Musée de l’Orangerie', officialName: 'Musée de l’Orangerie', address: 'Jardin des Tuileries, Place de la Concorde (côté Seine), 75001 Paris, France', mapsQuery: 'Musée de l Orangerie Jardin des Tuileries Paris', description: '星期五一般開放，但未證實屬有特展晚開日；V1 用正常閉館時間。官方 group visit 約 1 小時 30 分。', duration: '約 1.5–2 小時', hours: '一般 09:00–18:00；last entry 17:15；Tuesday closed', booking: '7+ 人必須預約；成人團 max 25，入場前 15 分鐘集合', status: 'verified', warning: '未見 2026-10-23 group reference 前，唔顯示固定入場鐘數。', officialUrl: 'https://www.musee-orangerie.fr/en/visit-orangerie', verifiedAt: VERIFIED_AT },
          { time: '午餐候選', title: 'Breizh Café Montorgueil', officialName: 'Breizh Café — branch not confirmed', address: '14 rue des Petits Carreaux, 75002 Paris, France', mapsQuery: 'Breizh Café Montorgueil 14 rue des Petits Carreaux Paris', description: 'PDF 只寫 brand，V1 暫用動線最順嘅 Montorgueil 做候選，唔代表旅行社已揀呢間。', duration: '約 1.25–1.5 小時', hours: '候選分店現行每日 11:00–22:30', booking: '先確認 branch／party size／reference', status: 'unknown', warning: '旅行社若揀另一分店，地址同 Maps 要一齊換。', officialUrl: 'https://www.breizhcafe.com/montorgueil' },
          { time: '下午待定', title: 'Pierre Hermé Paris Opéra', officialName: 'Pierre Hermé Paris 2e – Opéra', address: '39 avenue de l’Opéra, 75002 Paris, France', mapsQuery: 'Pierre Hermé Paris Opéra 39 avenue de l Opéra', description: '外帶甜品／購物 stop，唔係 seated café；大團需要分批入店。', duration: '約 20–40 分鐘', hours: '官方 locator 現行 11:00–20:00；指定日再查', booking: '一般購物不需；大量 order 可先預訂', status: 'verified', officialUrl: 'https://www.pierreherme.com/nos-boutiques', verifiedAt: VERIFIED_AT },
          { time: '可選', title: 'Musée du Parfum Fragonard', officialName: 'Musée du Parfum Fragonard（品牌待旅行社確認）', address: '9 rue Scribe, 75009 Paris, France', mapsQuery: 'Musée du Parfum Fragonard 9 rue Scribe Paris', description: '位置同 PDF「香水博物館」例子吻合，但 PDF 無寫 Fragonard 品牌，所以仍屬 V1 route inference。', duration: '自助約 30 分鐘；連集合／shop 留 45–60 分鐘', hours: '現行 Mon–Sat 09:00–17:30；Sunday 至 16:30', booking: '個人自助免費免預約；professional group 必須預約', status: 'inference', warning: '要先確認旅行社指嘅係咪 Fragonard，同埋 group booking／語言。', officialUrl: 'https://musee-parfum-paris.fragonard.com/en/tours-and-activities/' }
        ],
        hotelRefs: ['par-terrass']
      },
      {
        id: 'd08', number: 8, date: '2026-10-24', dateLabel: '10 月 24 日', dayOfMonth: '24', monthLabel: 'OCT', dow: '星期六', country: 'FR', city: 'Dijon',
        title: 'Paris → Dijon · 勃艮第古城',
        subtitle: '公爵宮 · Musée des Beaux-Arts 周邊 · 舊城步行',
        sourceSummary: 'Paris 到 Dijon 4 小時；Palais des Ducs de Bourgogne；Dijon old town；住 Dijon。',
        assessment: 'Paris 出城、休息、落客後應以 4.5–5 小時轉場計。Palais 內可參觀項目係 Musée des Beaux-Arts；團體必須預約，今個 transit day 只做精華。',
        risk: 'Dijon 酒店完全未指定；如果冇 museum group slot，就只做 palace exterior＋老城精簡圈。',
        prep: '確認 Dijon 酒店同 coach drop-off；博物館如入內要查最後入場時間。',
        activities: [
          { time: '上午待定', title: 'Paris → Dijon', officialName: 'Private coach transfer', address: 'Dijon, France', mapsQuery: 'Dijon France', description: 'PDF 估 4 小時；V1 計埋 Paris exit、休息、traffic 同落客。', duration: '建議 4.5–5 小時 operational envelope', hours: '道路交通視當日', booking: '包車 final routing／coach drop 待確認', status: 'inference' },
          { time: '下午待定', title: 'Musée des Beaux-Arts de Dijon', officialName: 'Musée des Beaux-Arts de Dijon — Palais des ducs et des États de Bourgogne', address: 'Place de la Sainte-Chapelle, 21000 Dijon, France', mapsQuery: 'Musée des Beaux-Arts de Dijon Place de la Sainte-Chapelle', description: 'PDF 將 palace 同 museum 混成一項；可入場參觀嘅係美術館，palace exterior 集合可用 Place de la Libération。', duration: '今個 transit day 建議 1.5–2 小時精華', hours: '10 月一般 09:30–18:00；Tuesday closed', booking: '永久展免費；團體必須預約，school-period slots 11:00–13:30／16:00–18:00', status: 'verified', warning: '未有 group reference 就唔將 16:00 入場寫成 confirmed。', officialUrl: 'https://musees.dijon.fr/infos-pratiques-2/', verifiedAt: VERIFIED_AT },
          { time: '傍晚待定', title: 'Dijon Historic Centre', officialName: 'Centre historique de Dijon / Parcours de la Chouette', address: 'Office de Tourisme, 11 rue des Forges, 21000 Dijon, France', mapsQuery: 'Office de Tourisme de Dijon 11 rue des Forges', description: '戶外步行區。正常行 Rue des Forges、Notre-Dame／貓頭鷹、Rue Verrerie、Place de la Libération。', duration: '正常 1.5–2 小時；遲到改 45–75 分鐘精簡圈', hours: '公共街區，個別教堂／商店各自開放', booking: '步行不需；guided tour 另計', status: 'verified', warning: '落雨／石路濕滑要縮短；唔逐點開車。', officialUrl: 'https://www.dijon.fr/les-valeurs-de-dijon/dijon-ville-touristique-et-attractive/', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['dij-unknown']
      },
      {
        id: 'd09', number: 9, date: '2026-10-25', dateLabel: '10 月 25 日', dayOfMonth: '25', monthLabel: 'OCT', dow: '星期日', country: 'FR', city: 'Bourgogne / Lyon',
        title: '二揀一：Route des Grands Crus 或 Lyon',
        subtitle: '同日亦係歐洲夏令時間結束日',
        sourceSummary: 'Option 1：Gevrey-Chambertin、Vosne-Romanée、Beaune。Option 2：Vieux Lyon、Fresque des Lyonnais、Fourvière。',
        assessment: '兩條線互斥。若 10/25 仍住 Dijon，Option A 風險較低；Option B 最合理係留宿 Lyon，做完再返 Dijon 會變成 10–12 小時長日。',
        risk: 'Option A 冇 winery 就只係景觀／村落，唔可以承諾 tasting；Option B Fourvière 星期日 12:30 前唔安排一般旅遊參觀。今晚酒店城市未定。',
        prep: '今晚歐洲由 CEST 轉 CET；所有手機一般自動慢一小時，但集合時間要同領隊口頭確認。',
        moments: [
          { time: '02:00', title: '冬令時間已回撥一小時', status: 'verified', warning: '手機通常自動更新；手錶、鬧鐘同集合時間要再望一次。' },
          { time: '12:30', title: 'Fourvière 一般旅遊參觀可開始', status: 'verified', warning: '只適用 Option B；上午留俾朝聖者／禮儀，仍要按現場宗教活動。' }
        ],
        options: ['A · Route des Grands Crus', 'B · Lyon'],
        activities: [
          { time: 'Option A', title: 'Gevrey-Chambertin', officialName: 'Gevrey-Chambertin — Halle Chambertin anchor', address: 'Halle Chambertin, 1 rue Gaston Roupnel, 21220 Gevrey-Chambertin, France', mapsQuery: 'Halle Chambertin 1 rue Gaston Roupnel Gevrey-Chambertin', description: '戶外村落／相片站；10/25 Sunday visitor-office hours未公布，亦冇指定 domaine。', duration: '純村落 30–45 分鐘；有確認 tasting 再加 45–75 分鐘', hours: '公共街道；Halle Sunday hours 未公布', booking: '未有 winery reservation 就唔顯示 tasting', status: 'unknown', officialUrl: 'https://www.gevreynuitstourisme.com/ddata/halle-chambertin/' },
          { time: 'Option A', title: 'Vosne-Romanée', officialName: 'Vosne-Romanée', address: 'Mairie, 1 place de la Mairie, 21700 Vosne-Romanée, France', mapsQuery: '1 place de la Mairie Vosne-Romanée', description: '戶外村落 stop；Romanée-Conti 只可由公共道路尊重地觀看，唔入私人葡萄園。', duration: '約 30–45 分鐘', hours: '公共村落；Sunday mairie 唔係旅遊景點', booking: '任何 domaine／cellar visit 必須另訂', status: 'verified', warning: '未有 domaine booking 就唔顯示 tasting。', officialUrl: 'https://www.gevreynuitstourisme.com/du-village-de-vosne-romanee/', verifiedAt: VERIFIED_AT },
          { time: 'Option A', title: 'Beaune', officialName: 'Beaune historic centre', address: 'Place de la Halle, rue de l’Hôtel-Dieu, 21200 Beaune, France', mapsQuery: 'Place de la Halle Beaune France', description: 'V1 用 Place de la Halle 作中央集合點；PDF 冇指定入 Hôtel-Dieu，唔自動加門票景點。', duration: '約 1.5–2 小時', hours: '10/25 資料站季節時間 09:30–17:30；街區戶外', booking: '如入 Hôtel-Dieu／tasting 要另訂', status: 'verified', officialUrl: 'https://www.beaune-tourisme.fr/s-informer/votre-office-de-tourisme/horaires/', verifiedAt: VERIFIED_AT },
          { time: 'Option B', title: 'Vieux Lyon', officialName: 'Le Quartier du Vieux Lyon', address: 'Place Saint-Jean, 69005 Lyon, France', mapsQuery: 'Place Saint-Jean Vieux Lyon', description: '由 Place Saint-Jean 開始步行；部分 traboules 係住宅 passage，開放可變。', duration: '約 1.5–2 小時', hours: '公共街區，無統一 opening hours', booking: '自助不需；guided tour 另計', status: 'verified', warning: '見到 traboule 關門就跳過，唔好硬闖。', officialUrl: 'https://www.visiterlyon.com/decouvrir/sites-et-monuments/renaissance/le-quartier-du-vieux-lyon', verifiedAt: VERIFIED_AT },
          { time: 'Option B', title: 'Fresque des Lyonnais Célèbres', officialName: 'Fresque des Lyonnais Célèbres', address: 'angle 49 quai Saint-Vincent et 2 rue de la Martinière, 69001 Lyon, France', mapsQuery: 'Fresque des Lyonnais Célèbres 49 quai Saint-Vincent Lyon', description: '戶外壁畫，無門票；日光同天氣比開放時間重要。', duration: '約 20–30 分鐘', hours: '戶外可見', booking: '不需', status: 'verified', officialUrl: 'https://www.visiterlyon.com/decouvrir/sites-et-monuments/sites-et-monuments-remarquables/fresque-des-lyonnais-celebres', verifiedAt: VERIFIED_AT },
          { time: 'Option B · 12:30 後', title: 'Basilique Notre-Dame de Fourvière', officialName: 'Basilique Notre-Dame de Fourvière', address: '8 place de Fourvière, 69005 Lyon, France', mapsQuery: 'Basilique Notre-Dame de Fourvière 8 place de Fourvière Lyon', description: '星期日 07:00–12:30 不安排一般旅遊參觀，上午留俾朝聖者／禮儀；由 Vieux-Lyon 可搭 F2 funicular。', duration: '約 1–1.5 小時連觀景／轉乘', hours: 'Sunday site 07:00–21:00；一般旅遊 interior 12:30 後', booking: '一般 basilica 不需；tour／special area 另計', status: 'verified', warning: '宗教儀式或工程可隨時限制入內；12:30 前唔當一般觀光站。', critical: true, officialUrl: 'https://www.fourviere.org/fr/horaires/', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['dij-unknown']
      },
      {
        id: 'd10', number: 10, date: '2026-10-26', dateLabel: '10 月 26 日', dayOfMonth: '26', monthLabel: 'OCT', dow: '星期一', country: 'CH', city: 'Lavaux · Montreux',
        title: '法國 → 瑞士 · Lavaux 湖畔梯田',
        subtitle: '跨境 4–5 小時 envelope · Vinorama anchor · Montreux 湖畔',
        sourceSummary: '3–4 小時車程；「Lavaux Vineyards Montreux」；住 Montreux。',
        assessment: 'Lavaux 係一大片 UNESCO 梯田；V1 用 Lavaux Vinorama 作可導航 anchor，再獨立排 Montreux 湖畔。Day 9 住宿城市仍會改變實際出發點。',
        risk: 'Vinorama 星期一一般開，但 tasting／酒莊接待未見預約；雨大或步道濕就只做室內＋湖畔短行。',
        prep: '護照、瑞士上網／付款；確認跨境起點、Lavaux 下車點同酒店。',
        activities: [
          { time: '上午待定', title: '法國 → Lavaux／Montreux', officialName: 'Cross-border private coach transfer', address: 'Lavaux Vinorama, Route du Lac 2, 1071 Rivaz, Switzerland', mapsQuery: 'Lavaux Vinorama Route du Lac 2 Rivaz', description: 'PDF 估 3–4 小時 bare drive；由 Dijon、Beaune 或 Lyon 出發都要計休息、border、traffic。', duration: '建議 4–5 小時 operational envelope', hours: '邊境／道路視當日', booking: '先鎖 Day 9 酒店城市、車隊 road-charge 證明同 final route', status: 'unknown', warning: 'Day 9 未揀／酒店未定前，唔生成唯一出發時間。' },
          { time: '下午待定', title: 'Lavaux Vineyard Terraces', officialName: 'Lavaux, Vineyard Terraces — Lavaux Vinorama anchor', address: 'Route du Lac 2, 1071 Rivaz, Switzerland', mapsQuery: 'Lavaux Vinorama Route du Lac 2 Rivaz', description: 'Vinorama 係可導航集合點，唔代表任何酒莊 tasting 已訂。梯田戶外步行受雨、風同路面影響。', duration: 'Vinorama 60–90 分鐘；天氣好再加步道 45–90 分鐘', hours: '10 月星期一官方資料顯示 10:30 開門；收舖資料有差異需重查', booking: 'tasting／酒莊接待只可憑 reservation 顯示', status: 'verified', warning: 'T-7 同當朝再查；落雨／濕滑只做室內觀景，唔硬行梯田。', officialUrl: 'https://www.vaud.ch/en/tourism/activites/lavaux-vinorama/', verifiedAt: VERIFIED_AT },
          { time: '傍晚待定', title: 'Montreux 湖畔散步', officialName: 'Montreux Lakeside', address: 'Quai Edouard-Jacoud, 1820 Montreux, Switzerland', mapsQuery: 'Montreux Lakeside Quai Edouard-Jacoud', description: '公共湖畔步道全長約 7 km，但今日只行短段，唔需要完成全程。', duration: '約 45–90 分鐘', hours: '公共戶外；受雨、風、日照影響', booking: '不需；coach drop／hotel check-in 次序待定', status: 'verified', warning: '落雨或天黑就縮短，直接返酒店。', officialUrl: 'https://www.montreuxriviera.com/en/P4876/montreux-lakeside', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['mtr-excelsior']
      },
      {
        id: 'd11', number: 11, date: '2026-10-27', dateLabel: '10 月 27 日', dayOfMonth: '27', monthLabel: 'OCT', dow: '星期二', country: 'CH', city: 'Montreux · Interlaken · Lucerne',
        title: 'GoldenPass 景觀列車 → Interlaken → Lucerne',
        subtitle: '09:32 Montreux → 12:48 Interlaken Ost · PDF 已更正',
        sourceSummary: 'Montreux 到 Interlaken「黃金列車」；同一行寫 09:32–10:22 同 3 小時 15 分；司機尾站接；Interlaken；1 小時到 Lucerne。',
        assessment: 'MOB 2026 官方 timetable 已解釋矛盾：GPX 4068 於 09:32 由 Montreux 開出，10:22 只係到 Montbovon，12:48 先到 Interlaken Ost，全程 3 小時 16 分。',
        risk: '班次已查明，但 seat reservation、實際車票、行李交收同司機 12:48 pickup 仍未有 booking evidence。',
        prep: '確認 GPX 4068／seat reservation；寫清楚行李如何交司機，同 12:48 Interlaken Ost pickup point。',
        moments: [
          { time: '08:55', title: '到 Montreux railway station', status: 'verified', warning: '預留搵月台、集合同行李安排。' },
          { time: '09:10', title: '全員上月台 cutoff', status: 'inference', warning: '未齊人立即聯絡領隊，唔好等到 09:32 先處理。' },
          { time: '09:32', title: 'GPX 4068 開出', status: 'verified', warning: '終點係 Interlaken Ost；確認車廂同座位。' },
          { time: '10:22', title: '到 Montbovon · 唔好落車', status: 'verified', warning: '唔好落車：呢個係 PDF 錯當終點嘅時間；繼續坐到 12:48。' },
          { time: '12:48', title: 'Interlaken Ost 到達', status: 'verified', warning: '全員集合後先搵司機；pickup 建議寫 13:00。' }
        ],
        activities: [
          { time: '09:32', title: 'GoldenPass Express Montreux → Interlaken Ost', officialName: 'GoldenPass Express GPX 4068', address: 'Montreux railway station, Avenue des Alpes 74, 1820 Montreux, Switzerland', mapsQuery: 'Montreux railway station Avenue des Alpes 74', description: '瑞士官方 2026 timetable：09:32 Montreux 出發，10:22 Montbovon，12:48 Interlaken Ost；PDF 將中途站時間誤當終點。', duration: '3 小時 16 分', hours: '09:32–12:48（2026 timetable）', booking: '團體預約必須；一般座位建議預約，車票／行李仍要 confirmation', status: 'verified', warning: '08:55 到站、09:10 前全員上月台；10:22 唔好落車。司機按 12:48 後接。', critical: true, officialUrl: 'https://widgets.oev-info.ch/publikation/jahresfpl/471.pdf', verifiedAt: VERIFIED_AT },
          { time: '12:48 後', title: 'Interlaken', officialName: 'Interlaken town centre / Höheweg', address: 'Interlaken Tourist Information, Marktgasse 1, 3800 Interlaken, Switzerland', mapsQuery: 'Interlaken Tourist Information Marktgasse 1', description: '12:48 後先到埗；先食午餐，再沿 Höheweg／Höhematte 做短行。', duration: '午餐 60 分鐘＋市中心 60–90 分鐘', hours: 'Höheweg 全年可行；商店／餐廳各自開放', booking: '午餐、司機集合點同 13:00 後 pickup 待確認', status: 'verified', warning: '列車遲到先縮短 town walk，唔壓縮司機集合。', officialUrl: 'https://www.interlaken.swiss/en/experiences/poi/hoeheweg', verifiedAt: VERIFIED_AT },
          { time: '下午待定', title: 'Interlaken → Lucerne', officialName: 'Private coach transfer', address: 'Lucerne, Switzerland', mapsQuery: 'Lucerne Switzerland', description: 'PDF 寫 1 小時；V1 當估算，實際要留道路／停車 buffer。', duration: 'PDF 1 小時', hours: '道路交通視當日', booking: '包車／酒店 drop-off 待確認', status: 'inference' }
        ],
        hotelRefs: ['luz-montana']
      },
      {
        id: 'd12', number: 12, date: '2026-10-28', dateLabel: '10 月 28 日', dayOfMonth: '28', monthLabel: 'OCT', dow: '星期三', country: 'CH', city: 'Lucerne · Engelberg',
        title: 'Lucerne 城市 → Mount Titlis',
        subtitle: '山區天氣／纜車狀態係 cut-off',
        sourceSummary: 'Lucerne city tour；午餐；1 小時車程去 Mount Titlis；Hotel Château Gütsch 晚餐；住 Lucerne。',
        assessment: 'TITLIS 官方 2026 文件確認 Rotair 於 8/17–12/11 停運，改用 TITLIS Connect；但指定日 exact 首尾班／其他設施未能由可達官網鎖定。Lucerne＋上山＋晚餐係全程最高壓山區日之一。',
        risk: '上山模式同 PDF 想像唔同；指定日風、能見度、設施同 Restaurant Lumières booking 都未確認。未確認 live status 就唔離開 Lucerne。',
        prep: '保暖、防滑鞋；T-7 同當朝睇官方 live status／MeteoSwiss；低能見度或強風就用 Lucerne Plan B。',
        activities: [
          { time: '上午待定', title: 'Lucerne Old Town', officialName: 'Lucerne self-guided sightseeing route', address: 'Tourist Information Lucerne, Zentralstrasse 5, 6002 Luzern, Switzerland', mapsQuery: 'Tourist Information Lucerne Zentralstrasse 5', description: 'PDF 冇 tour operator；V1 default 用官方 4.24 km easy 自助路線，只有見到 voucher 先顯示 guided tour。', duration: '自助約 2 小時；有確認 guided tour 則約 1.5 小時', hours: '公共街區；官方自助路線全年適用', booking: '自助不需；guided tour 要指定日 confirmation', status: 'verified', warning: '同日 TITLIS 開車時間要反推，唔可以兩邊同時塞滿。', officialUrl: 'https://www.luzern.com/en/tour/sightseeing-tour-lucerne', verifiedAt: VERIFIED_AT },
          { time: '下午待定', title: 'Mount TITLIS（TITLIS Connect）', officialName: 'TITLIS Cableways', address: 'Gerschnistrasse 14, 6390 Engelberg, Switzerland', mapsQuery: 'TITLIS valley station Gerschnistrasse 14 Engelberg', description: '官方 2026 文件確認 Rotair 8/17–12/11 停運，期間改由單線、非旋轉嘅 TITLIS Connect 到山頂；山頂重建中。', duration: 'valley station 起至少 4.5–5 小時；連 Lucerne 往返當 full-day 主活動', hours: '季節替代已確認；10/28 exact 首尾班／設施 live status 未鎖', booking: 'group ticket、boarding、coach parking、餐飲、mobility needs 要確認', status: 'verified', warning: '今日唔係 Rotair。未確認開放／低能見度／強風就留 Lucerne，唔出發去 Engelberg。', critical: true, officialUrl: 'https://assets.titlis.ch/files/f76gumfz/production/174b43324c139ac239e39686559cc32685c3d2e5.pdf', verifiedAt: VERIFIED_AT },
          { time: '晚餐待定', title: 'Restaurant Lumières', officialName: 'Restaurant Lumières — Hotel Château Gütsch', address: 'Hotel Château Gütsch, Kanonenstrasse, 6003 Luzern, Switzerland', mapsQuery: 'Restaurant Lumières Hotel Château Gütsch Luzern', description: 'PDF「dinner @ Hotel Château Gütsch」對應酒店正式餐廳；一般晚餐資料已核實，但未見 10/28 桌位。', duration: '約 2 小時', hours: '一般每日 dinner 18:00–22:00', booking: '需要日期、時間、人數、reference、團體餐單同 late-arrival policy', status: 'verified', warning: '只在有 booking confirmation 時顯示「已訂」；TITLIS 延誤要即按餐廳規則處理。', officialUrl: 'https://www.chateau-guetsch.ch/en/restaurant-lumieres/', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['luz-montana']
      },
      {
        id: 'd13', number: 13, date: '2026-10-29', dateLabel: '10 月 29 日', dayOfMonth: '29', monthLabel: 'OCT', dow: '星期四', country: 'CH', city: 'Zürich',
        title: 'Lucerne → Zürich · Old Town Walk',
        subtitle: 'Lindenhof · Augustinergasse · Bahnhofstrasse',
        sourceSummary: '1 小時車程；Lindenhof Hill、Augustine Lane (Augustinergasse)、Bainhof Street (Bahnhofstrasse)；住 Zurich。',
        assessment: '三個點喺 Zürich 舊城／市中心，可步行串連；PDF 英文拼法有誤，V1 已用正式德文名稱。',
        risk: '只需確認 hotel drop-off 同 free time；行程本身比前幾日鬆。',
        prep: '舒適鞋、薄外套；如果購物，記低 meeting point 同 closing time。',
        activities: [
          { time: '上午待定', title: 'Lucerne → Zürich', officialName: 'Private coach transfer', address: 'Zürich, Switzerland', mapsQuery: 'Zürich Switzerland', description: 'PDF 寫 1 小時車程。', duration: 'PDF 約 1 小時', hours: '道路交通視當日', booking: '酒店 drop-off 待確認', status: 'inference' },
          { time: '中午待定', title: 'Lindenhof', officialName: 'Lindenhof', address: 'Lindenhof, 8001 Zürich, Switzerland', mapsQuery: 'Lindenhof Zürich', description: '公共廣場／觀景點，官方列每日可到訪。', duration: '約 20–30 分鐘', hours: '戶外每日可到訪；受雨／路面／日照影響', booking: '不需', status: 'verified', warning: '落雨就縮短，石路濕滑慢行。', verifiedAt: VERIFIED_AT },
          { time: '下午待定', title: 'Augustinergasse', officialName: 'Augustinergasse', address: 'Augustinergasse 1, 8001 Zürich, Switzerland', mapsQuery: 'Augustinergasse 1 Zürich', description: 'PDF 寫 Augustine Lane；V1 用正式街名。公共街道開放唔等同每間商戶開門。', duration: '約 15–25 分鐘', hours: '公共街道；店舖各自時間', booking: '不需', status: 'verified', verifiedAt: VERIFIED_AT },
          { time: '下午待定', title: 'Bahnhofstrasse', officialName: 'Bahnhofstrasse', address: 'Bahnhofstrasse, 8001 Zürich, Switzerland', mapsQuery: 'Bahnhofstrasse Zürich', description: 'PDF 寫 Bainhof Street；正式街名已修正。全長約 1.4 km，唔需要硬走到底。', duration: '約 45–90 分鐘', hours: '星期四多數商店約 09:00–20:00；小店常較早收', booking: '街道不需；指定店舖逐間再查', status: 'verified', verifiedAt: VERIFIED_AT }
        ],
        hotelRefs: ['zrh-adler']
      },
      {
        id: 'd14', number: 14, date: '2026-10-30', dateLabel: '10 月 30 日', dayOfMonth: '30', monthLabel: 'OCT', dow: '星期五', country: 'CH', city: 'Zürich · Airport',
        title: 'Zürich 最後一日 · 回程時間嚴重矛盾',
        subtitle: 'Day table 寫 15:30 起飛；flight table 寫 EK86 21:50',
        sourceSummary: '12:30 到機場托運、15:30 從 Zürich 起飛；但航班表另寫 EK86 21:50 ZRH→DXB。',
        assessment: '兩套時間差 6 小時 20 分；只有正式 e-ticket／PNR 先可以決定酒店 checkout、自由時間同去機場時間。',
        risk: '未解決前任何 Day 14 timeline 都唔可靠。',
        prep: '先用 e-ticket／Manage Booking 核對 EK86；再由實際起飛時間倒推 3 小時抵達機場。',
        activities: [
          { time: '12:30', title: 'PDF 行程表：抵達 Zürich Airport', officialName: 'Zürich Airport', address: 'Zurich Airport, 8058 Kloten, Switzerland', mapsQuery: 'Zurich Airport Check-in 2', description: '只係 PDF Day 14 原稿；會因正式航班時間而改。', duration: '—', hours: '12:30（PDF day table）', booking: '待 e-ticket 確認', status: 'unknown' },
          { time: '15:30', title: 'PDF 行程表：從 Zürich 起飛', officialName: 'Conflicting departure time', address: 'Zurich Airport, 8058 Kloten, Switzerland', mapsQuery: 'Zurich Airport', description: '同 PDF flight table EK86 21:50 直接衝突。', duration: '—', hours: '15:30（PDF day table）', booking: '不可採用，直到 e-ticket 確認', status: 'unknown', warning: '15:30 同 21:50 只可以有一個係真。', critical: true },
          { time: '21:50', title: 'PDF 航班表：EK86 Zürich → Dubai', officialName: 'Emirates EK86', address: 'Zurich Airport, 8058 Zürich-Flughafen, Switzerland', mapsQuery: 'Zurich Airport Emirates check-in', description: 'PDF flight table 寫 21:50–07:05+1；時間算術係 6 小時 15 分，但指定日航班未由 e-ticket 證實。', duration: 'PDF：6 小時 15 分', hours: '21:50–07:05+1（只屬 PDF 原稿）', booking: '必須用 date-specific e-ticket／PNR', status: 'unknown' }
        ],
        hotelRefs: []
      },
      {
        id: 'd15', number: 15, date: '2026-10-31', dateLabel: '10 月 31 日', dayOfMonth: '31', monthLabel: 'OCT', dow: '星期六', country: 'HK', city: 'Dubai · Hong Kong',
        title: '杜拜轉機 → 香港 · 抵港時間待更正',
        subtitle: 'Day table 寫 14:45；flight table 寫 21:50',
        sourceSummary: 'EK380 10:40 DXB→HKG，flight table 寫 21:50 抵港；Day 15 表格則寫 14:45。',
        assessment: '抵港時間相差 7 小時 05 分；接機／交通安排一定要跟正式 e-ticket。',
        risk: '14:45 同 21:50 互相衝突。',
        prep: '抵港前確認行李直掛 HKG；任何接機只用 e-ticket arrival time。',
        activities: [
          { time: '07:05', title: 'PDF：EK86 抵達 Dubai', officialName: 'Dubai International Airport', address: 'Dubai International Airport, Dubai, United Arab Emirates', mapsQuery: 'Dubai International Airport Terminal 3', description: '以 PDF flight table 21:50 ZRH departure 為前提；未有票證，唔啟動轉機倒數。', duration: 'PDF 轉機 3 小時 35 分', hours: '07:05+1（只屬 PDF 原稿）', booking: '待 e-ticket 確認', status: 'unknown' },
          { time: '10:40', title: 'EK380 Dubai → Hong Kong', officialName: 'Emirates EK380', address: 'Dubai International Airport, Dubai, United Arab Emirates', mapsQuery: 'Dubai International Airport Terminal 3', description: 'PDF flight table 資料；指定日航班未有 e-ticket 證實。', duration: 'PDF：7 小時 10 分', hours: '10:40–21:50（只屬 PDF 原稿）', booking: '必須用 e-ticket／PNR 確認', status: 'unknown' },
          { time: '14:45', title: 'PDF Day 15：抵達香港', officialName: 'Conflicting arrival time', address: 'Hong Kong International Airport, 1 Sky Plaza Road, Chek Lap Kok', mapsQuery: 'Hong Kong International Airport Arrivals', description: '同 flight table 21:50 抵港矛盾。', duration: '—', hours: '14:45（PDF day table）', booking: '不可採用，直到 e-ticket 確認', status: 'unknown', warning: '接機安排唔好用 14:45。', critical: true },
          { time: '21:50', title: 'PDF 航班表：抵達香港', officialName: 'Hong Kong International Airport', address: 'Hong Kong International Airport, 1 Sky Plaza Road, Chek Lap Kok', mapsQuery: 'Hong Kong International Airport Arrivals', description: '同日表 14:45 衝突，仍要以 e-ticket 為準。', duration: '—', hours: '21:50（PDF flight table）', booking: '待 e-ticket 確認', status: 'unknown' }
        ],
        hotelRefs: []
      }
    ],

    hotels: [
      { id: 'ams-amrath', city: 'Amsterdam', country: 'NL', name: 'Grand Hotel Amrâth Amsterdam', nights: '10/17–18', status: 'proposed', address: 'Prins Hendrikkade 108, 1011 AK Amsterdam, Netherlands', mapsQuery: 'Grand Hotel Amrâth Amsterdam Prins Hendrikkade 108', officialUrl: 'https://www.amrathamsterdam.com/en/faq', note: 'Reception 24/7；direct booking 現行 14:00 check-in，其他渠道可能 15:00，11:00 check-out，可寄存行李。實際房晚／條款跟 confirmation。' },
      { id: 'rtm-pincoffs', city: 'Rotterdam', country: 'NL', name: 'Suite Hotel Pincoffs', nights: '10/19', status: 'proposed', address: 'Stieltjesstraat 34, 3071 JX Rotterdam, Netherlands', mapsQuery: 'Suite Hotel Pincoffs Stieltjesstraat 34', officialUrl: 'https://www.hotelpincoffs.nl/en/faq-s', note: '現行 15:00 check-in、11:30 check-out；酒店泊車要預留。房型、早餐同條款跟 confirmation。' },
      { id: 'roe-dux', city: 'Roermond', country: 'NL', name: 'Hotel Dux', nights: '10/20 · alternative A', status: 'alternative', address: 'Roerkade 11, 6041 KZ Roermond, Netherlands', mapsQuery: 'Hotel Dux Roerkade 11 Roermond', officialUrl: 'https://www.hoteldux.nl/en/about-dux', note: 'PDF「冇雙人房」唔準確：官方有可住 2 成人房型；要 twin 分床定 king setup 仍須 confirmation。Reception 現行 07:00–23:00，泊車要預留。' },
      { id: 'roe-arresthuis', city: 'Roermond', country: 'NL', name: 'Van der Valk Hotel Het Arresthuis', nights: '10/20 · alternative B', status: 'alternative', address: 'Pollartstraat 7, 6041 GC Roermond, Netherlands', mapsQuery: 'Het Arresthuis Pollartstraat 7 Roermond', officialUrl: 'https://www.hetarresthuis.nl/en/reservation-information', note: 'Reservation 只 guarantee 到 18:00；outlet 行得夜要預先通知。Check-in 要 ID；房型／時間跟 confirmation。' },
      { id: 'bru-leplaza', city: 'Brussels', country: 'BE', name: 'Le Plaza Hotel Brussels', nights: '10/21 · alternative A', status: 'alternative', address: 'Boulevard Adolphe Max 118–126, 1000 Brussels, Belgium', mapsQuery: 'Hotel Le Plaza Brussels Boulevard Adolphe Max 118', officialUrl: 'https://www.leplaza-brussels.be/en/stay/', note: '現行 15:00 check-in、12:00 check-out，酒店 24 小時開放；泊車建議預留。實際條款跟 confirmation。' },
      { id: 'bru-warwick', city: 'Brussels', country: 'BE', name: 'Warwick Brussels Grand-Place', nights: '10/21 · alternative B', status: 'alternative', address: 'Rue Duquesnoy 5, 1000 Brussels, Belgium', mapsQuery: 'Warwick Brussels Rue Duquesnoy 5', officialUrl: 'https://www.warwickhotels.com/warwick-brussels', note: '近 Grand-Place／Central Station；可驗證官網未鎖定 exact check-in、泊車同 late-arrival，全部跟 confirmation。' },
      { id: 'par-terrass', city: 'Paris', country: 'FR', name: "Terrass'' Hotel", nights: '10/22–23', status: 'proposed', address: '12–14 rue Joseph de Maistre, 75018 Paris, France', mapsQuery: "Terrass'' Hotel 12-14 rue Joseph de Maistre Paris", officialUrl: 'https://en.terrass-hotel.com/hotel', note: '24h reception；parking 只限預約，唔代表 coach 可泊。PDF 未有 booking reference／rooming list。' },
      { id: 'dij-unknown', city: 'Dijon', country: 'FR', name: 'Dijon hotel — 未指定', nights: '10/24–25', status: 'unknown', address: '', mapsQuery: '', noMap: true, officialUrl: '', note: 'PDF 只寫 Dijon Hotel，冇酒店名、地址、房型或 booking；V1 刻意唔提供假導航。' },
      { id: 'mtr-excelsior', city: 'Montreux', country: 'CH', name: 'Hôtel du Grand Lac Excelsior', nights: '10/26', status: 'proposed', address: 'Rue de Bon-Port 27, 1820 Montreux, Switzerland', mapsQuery: 'Hôtel du Grand Lac Excelsior Rue de Bon-Port 27', officialUrl: 'https://www.hotelexcelsiormontreux.com/', note: '目的地 listing 現行 check-in 15:00–00:00、check-out 至 12:00、reception 24h；酒店官網正 maintenance，房間仍須 voucher。' },
      { id: 'luz-montana', city: 'Lucerne', country: 'CH', name: 'ART DECO HOTEL MONTANA', nights: '10/27–28', status: 'proposed', address: 'Adligenswilerstrasse 22, 6006 Luzern, Switzerland', mapsQuery: 'ART DECO HOTEL MONTANA Adligenswilerstrasse 22 Luzern', officialUrl: 'https://www.hotel-montana.ch/en/contact-arrival', note: '現行 15:00 check-in、12:00 check-out；泊車要 reserve。房晚、早餐、city tax、coach 落客跟 voucher。' },
      { id: 'zrh-adler', city: 'Zürich', country: 'CH', name: 'Hotel Adler Zürich', nights: '10/29', status: 'proposed', address: 'Rosengasse 10, 8001 Zürich, Switzerland', mapsQuery: 'Hotel Adler Zürich Rosengasse 10', officialUrl: 'https://hotel-adler.ch/en/', note: 'Front desk 24/7；房型、早餐、city tax、coach access 同退房時間跟正式 voucher。' }
    ],

    issues: [
      { severity: 'high', status: 'open', title: '年份只係由 weekday 推斷', pdf: 'PDF 冇印年份；日期列 16 Oct Fri 至 31 Oct Sat。', resolution: '2026 calendar 完全吻合，所以 V1 用 2026；旅行社仍需書面確認。' },
      { severity: 'critical', status: 'open', title: '出發前機場時間不清', pdf: 'Day 0 寫 10:00 到機場，但 EK381 係 10/17 00:40 起飛。', resolution: '唔採用 10:00；向旅行社索取 final assembly notice。' },
      { severity: 'critical', status: 'open', title: 'Zürich 起飛時間衝突', pdf: 'Day 14 寫 15:30 起飛；flight table 寫 EK86 21:50。', resolution: '只用 date-specific e-ticket／PNR；未確認前 Day 14 timeline 無效。' },
      { severity: 'critical', status: 'open', title: '香港抵達時間衝突', pdf: 'Day 15 寫 14:45；flight table 寫 EK380 21:50。', resolution: '接機安排只可跟 e-ticket；V1 保留兩組時間並標紅。' },
      { severity: 'high', status: 'resolved', title: 'GoldenPass 終點時間已查明', pdf: '同一行同時寫 09:32–10:22 同 3 小時 15 分。', resolution: 'MOB 2026 timetable：GPX 4068 09:32 Montreux → 10:22 Montbovon → 12:48 Interlaken Ost（3h16）。車票／seat／行李同司機 pickup 仍要 booking confirmation。' },
      { severity: 'high', status: 'open', title: 'TITLIS 10/28 唔會坐到 Rotair', pdf: 'PDF 只寫 Mount Titlis，無提 2026 維修。', resolution: '官方確認 Rotair 8/17–12/11 停運，改搭 TITLIS Connect；指定日首尾班、天氣同設施仍要 T-7／當朝 live check。' },
      { severity: 'critical', status: 'open', title: 'Day 9 未揀路線', pdf: 'Option 1 Burgundy wine villages；Option 2 Lyon。', resolution: '兩條線互斥；先決定起點／住宿，再鎖 10/26 去 Montreux 動線。' },
      { severity: 'critical', status: 'open', title: 'Dijon 酒店／10 月 25 日留宿城市未指定', pdf: 'Dijon 只寫 Hotel；Day 9 完成後亦冇講住 Dijon、Beaune 定 Lyon。', resolution: '呢項直接阻塞 Day 8 check-in、Day 9 分支同 Day 10 出發路線，必須先攞正式酒店名／地址／voucher。' },
      { severity: 'high', status: 'open', title: '其餘酒店全部未見 booking evidence', pdf: '酒店以 OR／proposal list 形式列出，無 confirmation number。', resolution: '索取每晚酒店名、房型、早餐、city tax、late arrival、coach access 同 booking reference。' },
      { severity: 'critical', status: 'open', title: 'Eiffel Tower 時段及團體資格未定', pdf: 'PDF 已寫「參觀時間待定」。', resolution: '10/22 屬高人流期；專業團 >9 人不可現場買票。立即確認人數、professional account、樓層、入口、slot 同 reference。' },
      { severity: 'high', status: 'open', title: 'Oesterfestival 要票兼 18:00 關門', pdf: 'PDF 當成 Yerseke oyster farm stop，無提節慶／門票。', resolution: '2026-10-19 正值 Oesterfestival 12:00–18:00；先攞 ticket，再按最遲約 16:30 到場嘅安全線重排。' },
      { severity: 'high', status: 'open', title: 'Waterloo＋Atomium 同日結構性過載', pdf: '再加 Grand-Place 同未指定馬車，全部塞同一日。', resolution: 'Waterloo 官方建議半日至全日；Atomium 17:30 last entry。出發前定主次，延誤時二選一。' },
      { severity: 'high', status: 'open', title: 'Day 7「10 小時」起訖未定', pdf: '只寫巴黎景點可添加，只要在 10 小時以內。', resolution: '確認由 hotel departure 定其他時間起計、晚餐同司機 standby 是否計入；未定就唔啟動倒數。' },
      { severity: 'high', status: 'open', title: '星期日 wine route 無酒莊預約', pdf: '只列三個 wine villages，無 winery／tasting。', resolution: '未有 reservation 就只顯示景觀＋村落，唔承諾 Sunday tasting 或進入私人葡萄園。' },
      { severity: 'medium', status: 'resolved', title: 'Heerlijck Slaapen 已更正為私人住宅', pdf: '被放喺 Zaanse Schans 景點行。', resolution: '現名 Het Noorderhuis，有人居住；V1 只保留外觀同私隱提醒，無住宿／入內 CTA。' },
      { severity: 'medium', status: 'open', title: 'Brussels 馬車未有可核實供應商', pdf: '無 operator、上落點、route、時間或 booking reference。', resolution: 'V1 唔放入 active route；只有收到 official operator 同可驗 URL 先加入。' },
      { severity: 'high', status: 'open', title: 'Lavaux 已有導航 anchor，但 tasting 未落實', pdf: '只寫 Lavaux Vineyards Montreux。', resolution: 'V1 用 Lavaux Vinorama（Route du Lac 2）作集合點，再分開 Montreux；酒莊／tasting 仍要 reservation。' },
      { severity: 'high', status: 'open', title: 'ETIAS 可能喺 2026 Q4 啟動', pdf: '原稿無入境系統更新。', resolution: '截至 8/13 官方仍未開放申請，但行程正值 Q4；只查 EU 官方，T-30／T-7／T-1 重查。' },
      { severity: 'high', status: 'open', title: '包車道路合規未有車隊證明', pdf: '無車牌、車重、排放級別或跨境 road-charge 資料。', resolution: '向 operator 索取 Brussels LEZ、France Crit’Air／ZFE、Swiss vignette 或重型車費證明，同埋司機工時方案。' },
      { severity: 'medium', status: 'open', title: '旅行社聯絡地址出現版本差異', pdf: '本 PDF footer 係 Kwun Tong；18travel 網站另一份近期文件顯示 Fo Tan。', resolution: '牌照號 353928 可由旅監局登記冊再查；付款／文件往來前確認現行業務地址。' }
    ],

    flights: [
      { flight: 'EK381 · 17 OCT', from: 'HKG', to: 'DXB', depart: '00:40', arrive: '04:25', status: 'unknown', note: '只屬 PDF 原稿；時區算術 7h45 成立，但指定日航班／客票未驗證。' },
      { flight: 'EK147 · 17 OCT', from: 'DXB', to: 'AMS', depart: '08:05', arrive: '13:15', status: 'unknown', note: '只屬 PDF 原稿；時區算術 7h10、connection 3h40 成立，但客票未驗證。' },
      { flight: 'EK86 · 30 OCT', from: 'ZRH', to: 'DXB', depart: '21:50', arrive: '07:05 +1', status: 'unknown', note: '只屬 PDF flight table；同 Day 14 15:30 起飛衝突。時區算術 6h15 成立，唔代表 booking 成立。' },
      { flight: 'EK380 · 31 OCT', from: 'DXB', to: 'HKG', depart: '10:40', arrive: '21:50', status: 'unknown', note: '只屬 PDF flight table；同 Day 15 14:45 抵港衝突。時區算術 7h10、connection 3h35 成立。' }
    ],

    practical: [
      { title: '緊急電話', detail: '荷蘭、比利時、法國、瑞士均可撥 112；講所在位置、發生咩事、幾多人受傷，等接線員指示。出發前確認 roaming／eSIM 可打語音。', status: 'verified', officialUrl: 'https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency/indexamp_en.htm' },
      { title: '貨幣', detail: '荷蘭、比利時、法國用 EUR；瑞士用 CHF。唔好假設瑞士所有地方都收 EUR。', status: 'verified', officialUrl: 'https://european-union.europa.eu/institutions-law-budget/euro/countries-using-euro_en' },
      { title: '夏令時間轉換', detail: 'EU 規則係 10 月最後一個星期日結束夏令時間；2026-10-25 目的地由 CEST 轉回 CET，鐘慢一小時。集合時間要再口頭確認。', status: 'verified', officialUrl: 'https://transport.ec.europa.eu/transport-themes/summertime_en' },
      { title: 'HKSAR 護照／EES／ETIAS', detail: 'HKSAR passport 短期 Schengen 一般免簽，但入境唔係保證。Amsterdam 入境有 EES 生物特徵登記；ETIAS 截至 8/13 仲未開放、官方指向 2026 Q4，T-30／T-7／T-1 只查官方網站。', status: 'unknown', officialUrl: 'https://travel-europe.europa.eu/en/etias/about-etias/who-should-apply' },
      { title: 'Brussels LEZ', detail: '2026 排放門檻已收緊；外國牌一般要登記。呢項由車隊按車牌、燃料、Euro standard 處理，未有 simulator 結果唔好直接駛入 LEZ。', status: 'unknown', officialUrl: 'https://lez.brussels/mytax/?lang=en' },
      { title: 'France Crit’Air／Swiss road charge', detail: '入法國 ZFE 要合適 Crit’Air；入瑞士 motorway，輕型車用 vignette、重型旅遊巴用相應重型車費。旅客唔自行買，要求 operator 書面證明。', status: 'unknown', officialUrl: 'https://www.ch.ch/en/vehicles-and-traffic/how-to-behave-in-road-traffic/motorway-vignette/' },
      { title: 'Reference V1 唔係 confirmation', detail: '官方網站可以證實地址、一般開放政策同名稱，但唔可以證實旅行社已訂機票、酒店、餐廳、門票或包車。', status: 'verified' }
    ],

    sources: [
      { label: '18 Travel 官方網站（本地附件係原稿）', url: 'https://www.18travel.com.hk/' },
      { label: 'HK Travel Industry Authority register', url: 'https://www.tia.org.hk/tc/travel-agents.html' },
      { label: 'GoldenPass 2026 official timetable table 471', url: 'https://widgets.oev-info.ch/publikation/jahresfpl/471.pdf' },
      { label: 'TITLIS 2026 travel-planning update', url: 'https://assets.titlis.ch/files/f76gumfz/production/174b43324c139ac239e39686559cc32685c3d2e5.pdf' },
      { label: 'EU ETIAS official information', url: 'https://travel-europe.europa.eu/en/etias/about-etias/who-should-apply' },
      { label: 'European Commission summer-time rules', url: 'https://transport.ec.europa.eu/transport-themes/summertime_en' }
    ]
  };
})();
