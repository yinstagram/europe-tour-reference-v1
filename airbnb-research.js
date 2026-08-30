(function () {
  'use strict';

  function searchUrl(city, checkin, checkout) {
    var q = 'https://www.airbnb.com/s/' + city + '/homes?adults=5';
    q += '&checkin=' + checkin + '&checkout=' + checkout;
    q += '&room_types%5B%5D=Entire%20home%2Fapt';
    return q;
  }

  window.EUROPE_AIRBNB_RESEARCH = {
    updatedAt: '2026-08-30 09:45',
    purpose: '旅行社現場即時比較用：每站一撳就開 Airbnb 搜尋（已設定 5 人＋全間屋＋日期）',
    headcount: '5 人（暫定：Yvonne＋Uncle＋Auntie Winnie＋Yin＋女兒未 confirm）',
    stops: [
      {
        city: 'Amsterdam',
        country: 'NL',
        dates: '10 月 19 – 21 日（2 晚）',
        checkin: '2026-10-19',
        checkout: '2026-10-21',
        priceRange: '€250–450／晚（5 人全間屋）',
        hotelCompare: '旅行社推薦酒店大概 €180–280／晚×2 房',
        pros: '運河景公寓多，可以一齊食早餐；Jordaan／De Pijp 區方便',
        cons: '舊樓多數冇 lift，Uncle 上落樓梯係一個問題；市中心停車難',
        searchUrl: searchUrl('Amsterdam--Netherlands', '2026-10-19', '2026-10-21')
      },
      {
        city: 'Rotterdam',
        country: 'NL',
        dates: '10 月 21 – 22 日（1 晚）',
        checkin: '2026-10-21',
        checkout: '2026-10-22',
        priceRange: '€180–300／晚',
        hotelCompare: 'Ibis Rotterdam 大概 €120–180／晚×2 房',
        pros: '新樓多有 lift；近 Mark Hall／Erasmus Bridge',
        cons: '住宅區離景點遠；一晚短住搬行李唔抵',
        searchUrl: searchUrl('Rotterdam--Netherlands', '2026-10-21', '2026-10-22')
      },
      {
        city: 'Roermond',
        country: 'NL',
        dates: '10 月 22 – 23 日（1 晚）',
        checkin: '2026-10-22',
        checkout: '2026-10-23',
        priceRange: '€150–250／晚',
        hotelCompare: 'Hotel De Moeleberg 大概 €100–150／晚×2 房',
        pros: '近 Outlet；可以搵到大型 holiday home',
        cons: '選擇少；一晚短住不如酒店',
        searchUrl: searchUrl('Roermond--Netherlands', '2026-10-22', '2026-10-23')
      },
      {
        city: 'Brussels',
        country: 'BE',
        dates: '10 月 23 – 24 日（1 晚）',
        checkin: '2026-10-23',
        checkout: '2026-10-24',
        priceRange: '€180–320／晚',
        hotelCompare: 'B&B 大概 €140–220／晚×2 房',
        pros: '大廣場附近有公寓；走路可以去 Grand-Place',
        cons: '布魯塞爾一晚短住，酒店可能更方便',
        searchUrl: searchUrl('Brussels--Belgium', '2026-10-23', '2026-10-24')
      },
      {
        city: 'Paris',
        country: 'FR',
        dates: '10 月 24 – 26 日（2 晚）',
        checkin: '2026-10-24',
        checkout: '2026-10-26',
        priceRange: '€300–600／晚',
        hotelCompare: 'EasyHotel 大概 €150–250／晚×2 房',
        pros: '兩晚以上值得；可以搵 Haussmann 公寓有 lift；Latin Quarter／7th arr. 方便',
        cons: '巴黎 Airbnb 貴；如果 Yvonne 個女唔去，4 人酒店 2 房可能更抵',
        searchUrl: searchUrl('Paris--France', '2026-10-24', '2026-10-26')
      },
      {
        city: 'Dijon / Bourgogne',
        country: 'FR',
        dates: '10 月 26 – 28 日（2 晚）',
        checkin: '2026-10-26',
        checkout: '2026-10-28',
        priceRange: '€200–350／晚',
        hotelCompare: 'Dijon 市區酒店大概 €120–200／晚×2 房',
        pros: '酒村周圍有大型 gîte（法式度假屋）；有車司機的話住郊區冇問題',
        cons: '一定要靠司機接送；Dijon 市中心公寓選擇少',
        searchUrl: searchUrl('Dijon--France', '2026-10-26', '2026-10-28')
      },
      {
        city: 'Montreux / Lavaux',
        country: 'CH',
        dates: '10 月 28 – 29 日（1 晚）',
        checkin: '2026-10-28',
        checkout: '2026-10-29',
        priceRange: 'CHF 280–450／晚',
        hotelCompare: 'Montreux 湖景酒店大概 CHF 250–400／晚×2 房',
        pros: '日內瓦湖景公寓；近 GoldenPass 車站',
        cons: '瑞士 Airbnb 好貴；一晚短住酒店可能更好',
        searchUrl: searchUrl('Montreux--Switzerland', '2026-10-28', '2026-10-29')
      },
      {
        city: 'Lucerne / Interlaken',
        country: 'CH',
        dates: '10 月 29 – 31 日（2 晚）',
        checkin: '2026-10-29',
        checkout: '2026-10-31',
        priceRange: 'CHF 300–500／晚',
        hotelCompare: 'Lucerne 酒店大概 CHF 220–380／晚×2 房',
        pros: '兩晚可以搵 chalet 式公寓；近 Titlis／湖區',
        cons: '瑞士整體好貴；偏遠公寓出入要靠司機',
        searchUrl: searchUrl('Lucerne--Switzerland', '2026-10-29', '2026-10-31')
      },
      {
        city: 'Zürich',
        country: 'CH',
        dates: '10 月 31 – 11 月 1 日（1 晚）',
        checkin: '2026-10-31',
        checkout: '2026-11-01',
        priceRange: 'CHF 300–450／晚',
        hotelCompare: 'Ibis Zürich 大概 CHF 180–250／晚×2 房',
        pros: '近機場可以有公寓；最後一晚方便',
        cons: '一晚過渡，酒店最簡單直接',
        searchUrl: searchUrl('Zürich--Switzerland', '2026-10-31', '2026-11-01')
      }
    ],
    quickCompare: {
      hotel: ['有 lift 同 reception', 'Uncle 出入最有保障', '旅行社可以直接 book', '兩間房 flexibility 低啲', '如果女兒突然加入要加第三間房'],
      airbnb: ['一間屋住晒 5 人', '有客廳可以一齊坐', '自己煮早餐', '通常平過 3 間酒店房', '但舊樓多數冇 lift', '住宅區叫車唔方便', '要自己同屋主溝通']
    }
  };
})();
