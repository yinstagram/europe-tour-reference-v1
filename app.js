(function () {
  'use strict';

  const DATA = window.EUROPE_TOUR;
  const view = document.getElementById('view');
  const root = document.documentElement;
  const params = new URLSearchParams(location.search);
  const state = {
    tab: 'now',
    country: 'all',
    search: '',
    selectedDay: null
  };

  if (!DATA) {
    view.innerHTML = '<div class="card empty"><strong>行程資料未載入</strong><p>請確認 data.js 同 index.html 放喺同一個 folder。</p></div>';
    return;
  }

  const truthMeta = {
    verified: ['✓', '已查證'],
    source: ['PDF', '原稿資料'],
    inference: ['≈', '規劃推斷'],
    unknown: ['!', '待確認']
  };

  const countryMeta = {
    NL: { flag: '🇳🇱', name: '荷蘭', color: '#b7782d' },
    BE: { flag: '🇧🇪', name: '比利時', color: '#8a4a38' },
    FR: { flag: '🇫🇷', name: '法國', color: '#315b7f' },
    CH: { flag: '🇨🇭', name: '瑞士', color: '#8f3f3b' },
    HK: { flag: '🇭🇰', name: '香港', color: '#7f343f' },
    AE: { flag: '🇦🇪', name: '杜拜轉機', color: '#456a61' }
  };

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char]);
  }

  function safeUrl(value) {
    if (!value) return '';
    try {
      const url = new URL(value, location.href);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
    } catch (_) {
      return '';
    }
  }

  function mapsUrl(item) {
    if (item.noMap) return '';
    const query = item.mapsQuery || item.address || item.officialName || item.title;
    return query ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}` : '';
  }

  function truthBadge(status) {
    const key = truthMeta[status] ? status : 'unknown';
    const [icon, label] = truthMeta[key];
    return `<span class="truth-badge ${key}">${icon} ${label}</span>`;
  }

  function dateParts(date) {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: DATA.meta.timeZone,
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return {
      date: `${parts.year}-${parts.month}-${parts.day}`,
      time: `${parts.hour}:${parts.minute}`,
      minutes: Number(parts.hour) * 60 + Number(parts.minute)
    };
  }

  function nowInfo() {
    const raw = params.get('mockNow') || params.get('now') || localStorage.europe_mock_now || '';
    if (raw) {
      const date = new Date(raw.replace(' ', 'T'));
      if (!Number.isNaN(Number(date))) return { date, mock: true, raw, ...dateParts(date) };
    }
    const date = new Date();
    return { date, mock: false, raw: '', ...dateParts(date) };
  }

  function dateDistance(a, b) {
    const [ay, am, ad] = a.split('-').map(Number);
    const [by, bm, bd] = b.split('-').map(Number);
    return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 86400000);
  }

  function clockMinutes(value) {
    const match = String(value || '').match(/(\d{1,2}):(\d{2})/);
    return match ? Number(match[1]) * 60 + Number(match[2]) : Number.POSITIVE_INFINITY;
  }

  function currentDay(info = nowInfo()) {
    return DATA.days.find(day => day.date === info.date) || null;
  }

  function countryOf(code) {
    return countryMeta[code] || { flag: '•', name: code || '跨境', color: '#607174' };
  }

  function renderHero(info, day) {
    let headline;
    let subline;
    const before = dateDistance(info.date, DATA.meta.startDate);
    const after = dateDistance(DATA.meta.endDate, info.date);

    if (day) {
      headline = `旅程第 ${day.number + 1} 日`;
      subline = `${day.dateLabel} · ${countryOf(day.country).flag} ${day.title}`;
    } else if (before > 0) {
      headline = `出發前 ${before} 日`;
      subline = `${DATA.meta.dateRange} · 四國 16 日 Reference V1`;
    } else if (after > 0) {
      headline = '旅程已完成';
      subline = `${DATA.meta.dateRange} · 保留作詳細行程記錄`;
    } else {
      headline = '16 日歐洲行程';
      subline = `${DATA.meta.dateRange} · 荷蘭 → 比利時 → 法國 → 瑞士`;
    }

    return `<section class="hero">
      <div class="hero-stamp">OFFICIAL<br>SOURCES<br>CHECKED</div>
      <div class="hero-inner">
        <p class="eyebrow">EUROPE · REFERENCE VERSION 1</p>
        <h1>${esc(headline)}</h1>
        <div class="hero-sub"><span>${esc(subline)}</span><span>最後核查 ${esc(DATA.meta.verifiedAt)}</span></div>
      </div>
    </section>`;
  }

  function timelineState(day, info) {
    const items = (day.moments || day.activities || [])
      .filter(item => item.reminder !== false && item.status !== 'unknown' && clockMinutes(item.time) !== Number.POSITIVE_INFINITY)
      .sort((a, b) => clockMinutes(a.time) - clockMinutes(b.time));
    let currentIndex = -1;
    items.forEach((item, index) => {
      if (clockMinutes(item.time) <= info.minutes) currentIndex = index;
    });
    return {
      current: items[currentIndex] || null,
      next: items[currentIndex + 1] || null,
      tonight: items.find(item => clockMinutes(item.time) >= Math.max(info.minutes, 17 * 60)) || null
    };
  }

  function compactActivity(item, fallback) {
    if (!item) return `<span class="muted">${esc(fallback)}</span>`;
    return `${item.time ? `<b>${esc(item.time)}</b> ` : ''}${esc(item.title)}`;
  }

  function renderNowPanel(day, info) {
    if (!day) {
      const unresolved = DATA.issues.filter(issue => issue.status !== 'resolved');
      return `<section class="section">
        <div class="card now-panel">
          <div class="now-kicker"><span>${info.mock ? '🧪 測試時刻' : '⌁ 行前總覽'}</span><time>${esc(info.date)} ${esc(info.time)}</time></div>
          <div class="now-grid">
            <div class="now-cell is-focus"><span>下一個固定動作</span><p><b>向旅行社確認</b> 年份、酒店選擇、Day 9 分支同正式 booking。</p></div>
            <div class="now-cell"><span>航班</span><p>PDF 列出 4 段 Emirates，但回程時間互相矛盾。</p></div>
            <div class="now-cell"><span>住宿</span><p>${DATA.hotels.filter(h => h.status === 'unknown' || h.status === 'alternative').length} 項仍屬 alternative／未指定。</p></div>
            <div class="now-cell is-alert"><span>待確認</span><p><b>${unresolved.length}</b> 個關鍵問題未有 booking evidence。</p></div>
          </div>
          <div class="prep-row"><b>V1 用法</b><span>藍色係 PDF 原稿；綠色係官方查證；橙色係規劃推斷；紅色一定要再確認。</span></div>
          <div class="button-row">
            <button class="button primary" type="button" data-go="days">睇 16 日詳細行程</button>
            <button class="button ghost" type="button" data-go="verify">先睇矛盾同待確認</button>
          </div>
        </div>
      </section>`;
    }

    const live = timelineState(day, info);
    const attention = live.current?.warning || live.next?.warning || day.risk || (day.activities || []).find(item => item.warning)?.warning || '跟當日時間線行；所有 booking 以最新確認文件為準。';
    return `<section class="section">
      <div class="card now-panel">
        <div class="now-kicker"><span>${info.mock ? '🧪 測試此刻' : '⌁ 此刻助手'}</span><time>${esc(day.dateLabel)} ${esc(info.time)}</time></div>
        <div class="now-grid">
          <div class="now-cell is-focus"><span>而家</span><p>${compactActivity(live.current, '今日第一項未開始')}</p></div>
          <div class="now-cell"><span>下一步</span><p>${compactActivity(live.next, '今日固定項目已完成')}</p></div>
          <div class="now-cell"><span>今晚</span><p>${compactActivity(live.tonight, day.hotelSummary || '跟最新酒店確認')}</p></div>
          <div class="now-cell is-alert"><span>即時關注</span><p>${esc(attention)}</p></div>
        </div>
        <div class="prep-row"><b>出門／轉場前</b><span>${esc(day.prep || '護照、手機、充電、當日 booking 截圖同薄外套。')}</span></div>
        <div class="button-row">
          <button class="button primary" type="button" data-day="${esc(day.id)}">睇今日全部</button>
          <button class="button ghost" type="button" data-notify="${esc(day.id)}">開今日提醒</button>
        </div>
        <p class="muted tiny">提醒屬 best-effort；靜態 PWA 無 backend，關閉 app 後唔保證仍會響。</p>
      </div>
    </section>`;
  }

  function renderSummary() {
    const activities = DATA.days.flatMap(day => day.activities || []);
    const verified = activities.filter(item => item.status === 'verified').length;
    const unknown = activities.filter(item => item.status === 'unknown').length + DATA.issues.filter(issue => issue.status !== 'resolved').length;
    return `<section class="section">
      <div class="section-head"><h2>一眼睇晒</h2><p>原稿同官方資料分開保存</p></div>
      <div class="summary-grid">
        <div class="card summary-card"><div class="number">16</div><div class="label">日 · 2026/10/16–31</div><div class="mini">4 國 + 杜拜轉機</div></div>
        <div class="card summary-card"><div class="number">${activities.length}</div><div class="label">行程節點</div><div class="mini">每項有地址／Maps</div></div>
        <div class="card summary-card"><div class="number" style="color:var(--green)">${verified}</div><div class="label">已連官方來源</div><div class="mini">核查日 ${esc(DATA.meta.verifiedAt)}</div></div>
        <div class="card summary-card"><div class="number" style="color:var(--red)">${unknown}</div><div class="label">待確認訊號</div><div class="mini">唔會假裝已 booking</div></div>
      </div>
    </section>`;
  }

  function renderCountryStrip() {
    const codes = ['NL', 'BE', 'FR', 'CH'];
    return `<section class="section">
      <div class="section-head"><h2>路線章節</h2><p>撳入完整行程再按國家篩選</p></div>
      <div class="card country-strip">${codes.map(code => {
        const meta = countryOf(code);
        const days = DATA.days.filter(day => day.country === code);
        const cities = [...new Set(days.map(day => day.city).filter(Boolean))];
        return `<div><b>${meta.flag} ${esc(meta.name)}</b><span>${days.length} 日 · ${esc(cities.join(' · '))}</span><i>${meta.flag}</i></div>`;
      }).join('')}</div>
    </section>`;
  }

  function renderNow() {
    const info = nowInfo();
    const day = currentDay(info);
    const critical = DATA.issues.filter(issue => issue.severity === 'critical' && issue.status !== 'resolved').length;
    view.innerHTML = `${renderHero(info, day)}
      ${critical ? `<section class="section"><div class="card notice is-critical"><span class="notice-icon">!</span><div><strong>${critical} 個出發前一定要解決嘅矛盾</strong><p>包括航班時間、Eiffel 團體票、Dijon／Day 9 住宿同未決路線；已經集中放喺「查證」。</p></div></div></section>` : ''}
      ${renderNowPanel(day, info)}
      ${renderSummary()}
      ${renderCountryStrip()}`;
    bindDynamic();
  }

  function daySearchText(day) {
    return [day.title, day.city, day.subtitle, day.country, ...(day.activities || []).flatMap(item => [item.title, item.officialName, item.address, item.description])]
      .filter(Boolean).join(' ').toLowerCase();
  }

  function dayCard(day) {
    const country = countryOf(day.country);
    const statuses = new Set((day.activities || []).map(item => item.status));
    const chips = [
      `${country.flag} ${country.name}`,
      `${(day.activities || []).length} 個節點`,
      statuses.has('unknown') ? '! 有待確認' : '✓ 已整理'
    ];
    return `<button class="day-card" type="button" data-day="${esc(day.id)}">
      <span class="day-date"><small>DAY ${day.number}</small><strong>${esc(day.dayOfMonth)}</strong><span>${esc(day.monthLabel)} · ${esc(day.dow)}</span></span>
      <span class="day-main"><h2>${esc(day.title)}</h2><p>${esc(day.subtitle || day.sourceSummary || '')}</p><span class="chips">${chips.map(chip => `<span class="chip">${esc(chip)}</span>`).join('')}</span></span>
      <span class="day-arrow" aria-hidden="true">›</span>
    </button>`;
  }

  function renderDays() {
    const countries = ['all', 'NL', 'BE', 'FR', 'CH'];
    const filtered = DATA.days.filter(day => {
      const countryOk = state.country === 'all' || day.country === state.country;
      const searchOk = !state.search || daySearchText(day).includes(state.search.toLowerCase());
      return countryOk && searchOk;
    });
    view.innerHTML = `<header class="page-head"><h1>16 日行程</h1><p>每一日保留 PDF 原稿，再疊加正確名稱、完整地址、官方連結、開放／預約提示同可行性判斷。</p></header>
      <label class="search-wrap"><span>⌕</span><input id="daySearch" class="search-input" type="search" value="${esc(state.search)}" placeholder="搜尋城市、景點、地址…" aria-label="搜尋行程"></label>
      <div class="filterbar">${countries.map(code => {
        const label = code === 'all' ? '全部 16 日' : `${countryOf(code).flag} ${countryOf(code).name}`;
        return `<button class="filter-chip ${state.country === code ? 'is-active' : ''}" type="button" data-country="${code}">${label}</button>`;
      }).join('')}</div>
      <div class="day-list">${filtered.length ? filtered.map(dayCard).join('') : '<div class="card empty"><strong>搵唔到相符行程</strong><p>試下清除搜尋字或轉返「全部 16 日」。</p></div>'}</div>`;
    bindDynamic();
    const search = document.getElementById('daySearch');
    if (search) search.addEventListener('input', event => {
      state.search = event.target.value;
      renderDays();
      const next = document.getElementById('daySearch');
      if (next) { next.focus(); next.setSelectionRange(next.value.length, next.value.length); }
    });
  }

  function fact(label, value) {
    return value ? `<div class="fact"><span>${esc(label)}</span>${esc(value)}</div>` : '';
  }

  function activityCard(item) {
    const official = safeUrl(item.officialUrl);
    const map = mapsUrl(item);
    const source = safeUrl(item.sourceUrl || item.officialUrl);
    const body = item.description || item.verifiedNote || item.sourceNote || '';
    return `<article class="card activity">
      <div class="activity-head"><div><h3>${esc(item.title)}</h3>${item.officialName && item.officialName !== item.title ? `<small>${esc(item.officialName)}</small>` : ''}</div>${truthBadge(item.status)}</div>
      <div class="activity-body">
        ${body ? `<p>${esc(body)}</p>` : ''}
        <div class="fact-grid">
          ${fact('地址', item.address)}
          ${fact('建議停留', item.duration)}
          ${fact('開放／季節', item.hours)}
          ${fact('預約', item.booking)}
        </div>
        ${item.warning ? `<div class="warning-line ${item.critical ? 'critical' : ''}">${esc(item.warning)}</div>` : ''}
        <div class="activity-links">
          ${map ? `<a class="button ghost" href="${esc(map)}" target="_blank" rel="noopener">⌖ Google Maps</a>` : ''}
          ${official ? `<a class="button ghost" href="${esc(official)}" target="_blank" rel="noopener">↗ 官方網站</a>` : ''}
        </div>
        <div class="source-note">${item.status === 'source' ? 'PDF 原稿資料，未等同正式 booking。' : item.status === 'verified' ? `官方資料核查：${esc(item.verifiedAt || DATA.meta.verifiedAt)}。` : item.status === 'inference' ? '規劃推斷：用嚟判斷動線，唔係供應商承諾。' : '未能由官方資料確認；出發前必須再問旅行社／供應商。'}${source ? ` <a href="${esc(source)}" target="_blank" rel="noopener">來源</a>` : ''}</div>
      </div>
    </article>`;
  }

  function dayNavigation(day, options = {}) {
    if (options.print) return '';
    const index = DATA.days.findIndex(item => item.id === day.id);
    const previous = index > 0 ? DATA.days[index - 1] : null;
    const next = index >= 0 && index < DATA.days.length - 1 ? DATA.days[index + 1] : null;
    const button = (item, direction, edgeLabel) => item ? `
      <button class="day-nav-button ${direction}" type="button" data-day="${esc(item.id)}" aria-label="${direction === 'previous' ? '前往上一日' : '前往下一日'}：${esc(item.title)}">
        <span>${direction === 'previous' ? '‹ 上一日' : '下一日 ›'}</span>
        <strong>DAY ${esc(item.number)} · ${esc(item.dateLabel)}</strong>
        <b>${esc(item.title)}</b>
      </button>` : `
      <button class="day-nav-button ${direction}" type="button" disabled aria-disabled="true">
        <span>${direction === 'previous' ? '‹ 上一日' : '下一日 ›'}</span>
        <strong>${esc(edgeLabel)}</strong>
      </button>`;
    return `<nav class="day-nav" aria-label="前後日行程">
      ${button(previous, 'previous', '已經係第一日')}
      ${button(next, 'next', '已經係最後一日')}
    </nav>`;
  }

  function renderDayDetail(id, options = {}) {
    const day = DATA.days.find(item => item.id === id);
    if (!day) { renderDays(); return; }
    state.selectedDay = day.id;
    const hotels = DATA.hotels.filter(hotel => (day.hotelRefs || []).includes(hotel.id));
    const country = countryOf(day.country);
    const content = `<section class="detail-hero">
        ${options.print ? '' : '<button class="button ghost back-button" type="button" data-go="days">‹ 返回 16 日行程</button>'}
        <p class="eyebrow">DAY ${day.number} · ${esc(day.dateLabel)} · ${country.flag} ${esc(country.name)}</p>
        <h1>${esc(day.title)}</h1>
        <div class="detail-meta"><span>${esc(day.subtitle || '')}</span><span>${(day.activities || []).length} 個節點</span><span>${esc(day.city || '')}</span></div>
      </section>
      <section class="section day-overview">
        <div class="card overview-card"><h3>PDF 原稿</h3><p>${esc(day.sourceSummary || 'PDF 未提供額外細節。')}</p></div>
        <div class="card overview-card"><h3>V1 判斷</h3><p>${esc(day.assessment || '跟 booking 同當日實際交通再調整。')}</p>${day.risk ? `<ul><li>${esc(day.risk)}</li></ul>` : ''}</div>
      </section>
      ${day.options?.length ? `<section class="section"><div class="card notice"><span class="notice-icon">↔</span><div><strong>呢一日有互斥選項</strong><p>${esc(day.options.join(' ／ '))}。未有決定前，兩條線都只係 reference。</p></div></div></section>` : ''}
      <section class="section">
        <div class="section-head"><h2>當日時間線</h2><p>時間未有證據就標「待定」，唔會硬填</p></div>
        <div class="timeline">${(day.activities || []).map(item => `<div class="timeline-item"><div class="timeline-time">${esc(item.time || '待定')}</div>${activityCard(item)}</div>`).join('')}</div>
      </section>
      ${hotels.length ? `<section class="section"><div class="section-head"><h2>當晚住宿</h2><p>alternative 唔等同 confirmed</p></div><div class="hotel-grid">${hotels.map(hotelCard).join('')}</div></section>` : ''}
      ${day.prep ? `<section class="section"><div class="card notice is-good"><span class="notice-icon">＋</span><div><strong>出門／轉場前</strong><p>${esc(day.prep)}</p></div></div></section>` : ''}
      ${dayNavigation(day, options)}`;

    if (options.returnHtml) return `<article class="print-day">${content}</article>`;
    view.innerHTML = content;
    window.scrollTo(0, 0);
    bindDynamic();
  }

  function routeStops() {
    if (DATA.routeStops?.length) return DATA.routeStops;
    const seen = new Set();
    return DATA.days.filter(day => day.city).filter(day => {
      if (seen.has(day.city)) return false;
      seen.add(day.city);
      return true;
    }).map(day => ({ city: day.city, country: day.country, date: day.dateLabel }));
  }

  function allPlaces() {
    return DATA.days.flatMap(day => (day.activities || [])
      .filter(item => !item.noMap && (item.address || item.mapsQuery))
      .map(item => ({ ...item, day, country: day.country })));
  }

  function renderRoute() {
    const stops = routeStops();
    const places = allPlaces();
    view.innerHTML = `<header class="page-head"><h1>全程地圖</h1><p>V1 用離線 schematic route 保留全程脈絡；每一站都有 deterministic Google Maps search，開網絡時直接導航。</p></header>
      <section class="card route-board"><div class="route-scroll"><div class="route-track">${stops.map(stop => {
        const country = countryOf(stop.country);
        return `<div class="route-stop"><div class="route-dot">${country.flag}</div><b>${esc(stop.city)}</b><small>${esc(stop.date || '')}</small></div>`;
      }).join('')}</div></div></section>
      <section class="section"><div class="section-head"><h2>${places.length} 個地址入口</h2><p>按行程次序</p></div><div class="place-list">${places.map((place, index) => `<article class="card place-row"><span class="place-index">${index + 1}</span><div><h3>${esc(place.title)}</h3><p>${esc(place.address || place.day.city)} · Day ${place.day.number}</p></div><a href="${esc(mapsUrl(place))}" target="_blank" rel="noopener" aria-label="在 Google Maps 開啟 ${esc(place.title)}">開啟 ↗</a></article>`).join('')}</div></section>`;
    bindDynamic();
  }

  function hotelCard(hotel) {
    const map = mapsUrl(hotel);
    const official = safeUrl(hotel.officialUrl);
    const statusText = hotel.status === 'confirmed' ? '已確認' : hotel.status === 'alternative' ? 'PDF alternative' : hotel.status === 'proposed' ? 'PDF 建議' : '未指定／待確認';
    const truth = hotel.status === 'confirmed' ? 'verified' : hotel.status === 'unknown' ? 'unknown' : 'source';
    return `<article class="card hotel-card">
      <div class="hotel-top"><div class="hotel-city">${countryOf(hotel.country).flag} ${esc(hotel.city)} · ${esc(hotel.nights || '')}</div><h2>${esc(hotel.name)}</h2></div>
      <div class="hotel-body"><div class="hotel-status"><span class="chip">${esc(statusText)}</span>${truthBadge(truth)}</div>
        <p>${esc(hotel.address || 'PDF 未提供酒店地址。')}</p>
        ${hotel.note ? `<p>${esc(hotel.note)}</p>` : ''}
        <div class="button-row">${map ? `<a class="button ghost" href="${esc(map)}" target="_blank" rel="noopener">⌖ Maps</a>` : ''}${official ? `<a class="button ghost" href="${esc(official)}" target="_blank" rel="noopener">↗ 官網</a>` : ''}</div>
      </div>
    </article>`;
  }

  function renderStays() {
    view.innerHTML = `<header class="page-head"><h1>住宿總覽</h1><p>旅行社 PDF 列出嘅酒店只當 proposed／alternative；除非有 booking evidence，網站唔會顯示「已訂」。</p></header>
      <div class="card notice is-critical"><span class="notice-icon">!</span><div><strong>${DATA.hotels.filter(h => h.status !== 'confirmed').length} 間未有 booking evidence</strong><p>Dijon 更加只寫咗「Dijon Hotel」，V1 保留為未指定。</p></div></div>
      <section class="section"><div class="hotel-grid">${DATA.hotels.map(hotelCard).join('')}</div></section>`;
    bindDynamic();
  }

  function issueCard(issue, index) {
    return `<article class="card issue-card"><span class="issue-number">${index + 1}</span><div><div style="display:flex;justify-content:space-between;gap:10px"><h3>${esc(issue.title)}</h3>${truthBadge(issue.status === 'resolved' ? 'verified' : 'unknown')}</div><p>${esc(issue.pdf)}</p><p class="resolution"><b>V1：</b>${esc(issue.resolution || issue.verified || '待旅行社確認。')}</p></div></article>`;
  }

  function flightCard(flight) {
    const source = safeUrl(flight.officialUrl);
    return `<article class="card flight-card"><div class="flight-no"><span>${esc(flight.flight)}</span>${truthBadge(flight.status)}</div><div class="flight-route"><div><b>${esc(flight.from)}</b><span>${esc(flight.depart)}</span></div><i>→</i><div><b>${esc(flight.to)}</b><span>${esc(flight.arrive)}</span></div></div><div class="flight-note">${esc(flight.note || '')}${source ? ` · <a href="${esc(source)}" target="_blank" rel="noopener">航空公司 route page</a>` : ''}</div></article>`;
  }

  function referenceSources() {
    const entries = [...(DATA.sources || [])];
    DATA.days.forEach(day => (day.activities || []).forEach(item => {
      if (safeUrl(item.officialUrl)) entries.push({ label: `${day.dateLabel} · ${item.title}`, url: item.officialUrl });
    }));
    DATA.hotels.forEach(hotel => {
      if (safeUrl(hotel.officialUrl)) entries.push({ label: `住宿 · ${hotel.name}`, url: hotel.officialUrl });
    });
    (DATA.practical || []).forEach(item => {
      if (safeUrl(item.officialUrl)) entries.push({ label: `實用資料 · ${item.title}`, url: item.officialUrl });
    });
    const seen = new Set();
    return entries.filter(source => {
      const url = safeUrl(source.url);
      if (!url || seen.has(url)) return false;
      seen.add(url);
      source.url = url;
      return true;
    });
  }

  function renderVerify() {
    const unresolved = DATA.issues.filter(issue => issue.status !== 'resolved');
    const references = referenceSources();
    view.innerHTML = `<header class="page-head"><h1>查證中心</h1><p>所有「已查證」只代表官方 public information；機票、酒店、包車同門票仍要以你收到嘅正式 booking record 為準。</p></header>
      <section class="card notice ${unresolved.length ? 'is-critical' : 'is-good'}"><span class="notice-icon">${unresolved.length ? '!' : '✓'}</span><div><strong>${unresolved.length ? `${unresolved.length} 個核心問題未解決` : '核心問題已解決'}</strong><p>最後資料核查：${esc(DATA.meta.verifiedAt)}。V1 無做任何 booking、付款或對外聯絡。</p></div></section>
      <section class="section"><div class="section-head"><h2>矛盾／待確認</h2><p>先處理紅色，先至可以升級 V2</p></div><div class="issue-list">${DATA.issues.map(issueCard).join('')}</div></section>
      <section class="section"><div class="section-head"><h2>航班原稿</h2><p>route page ≠ date-specific ticket</p></div><div class="flight-grid">${DATA.flights.map(flightCard).join('')}</div></section>
      <section class="section"><div class="section-head"><h2>實用資料</h2><p>跨國共通</p></div><div class="issue-list">${(DATA.practical || []).map((item, index) => `<article class="card issue-card"><span class="issue-number">${index + 1}</span><div><div style="display:flex;justify-content:space-between;gap:10px"><h3>${esc(item.title)}</h3>${truthBadge(item.status)}</div><p>${esc(item.detail)}</p>${item.officialUrl ? `<div class="button-row"><a class="button ghost" href="${esc(safeUrl(item.officialUrl))}" target="_blank" rel="noopener">↗ 官方來源</a></div>` : ''}</div></article>`).join('')}</div></section>
      <section class="section"><div class="section-head"><h2>官方來源索引</h2><p>${references.length} 條已驗證 URL</p></div><div class="reference-list">${references.map(source => `<article class="card reference-row"><b>${esc(source.label)}</b><span>${esc(source.url)}</span><a href="${esc(source.url)}" target="_blank" rel="noopener">開啟 ↗</a></article>`).join('')}</div></section>`;
    bindDynamic();
  }

  function renderPrint() {
    const info = nowInfo();
    const references = referenceSources();
    view.innerHTML = `<section class="hero print-cover"><div class="hero-inner"><p class="eyebrow">EUROPE · REFERENCE VERSION 1</p><h1>荷蘭 · 比利時<br>法國 · 瑞士</h1><div class="hero-sub"><span>${esc(DATA.meta.dateRange)}</span><span>官方資料核查 ${esc(DATA.meta.verifiedAt)}</span></div></div></section>
      <section><h1>使用說明</h1><div class="card notice"><span class="notice-icon">i</span><div><strong>呢份係 reference V1，唔係 booking confirmation</strong><p>綠色＝官方 public information；藍色＝旅行社 PDF 原稿；橙色＝規劃推斷；紅色＝一定要再確認。</p></div></div></section>
      <section class="print-section"><h1>核心矛盾</h1><div class="issue-list">${DATA.issues.map(issueCard).join('')}</div></section>
      ${DATA.days.map(day => renderDayDetail(day.id, { print: true, returnHtml: true })).join('')}
      <section class="print-section"><h1>住宿總覽</h1><div class="hotel-grid">${DATA.hotels.map(hotelCard).join('')}</div></section>
      <section class="print-section"><h1>航班原稿</h1><div class="flight-grid">${DATA.flights.map(flightCard).join('')}</div></section>
      <section class="print-section"><h1>官方來源索引</h1><div class="reference-list">${references.map(source => `<article class="card reference-row"><b>${esc(source.label)}</b><span>${esc(source.url)}</span><a href="${esc(source.url)}">來源</a></article>`).join('')}</div></section>`;
  }

  function go(tab) {
    state.tab = tab;
    state.selectedDay = null;
    document.querySelectorAll('.tab').forEach(button => button.classList.toggle('is-active', button.dataset.tab === tab));
    ({ now: renderNow, days: renderDays, route: renderRoute, stays: renderStays, verify: renderVerify }[tab] || renderNow)();
    window.scrollTo(0, 0);
  }

  function bindDynamic() {
    document.querySelectorAll('[data-go]').forEach(button => button.onclick = () => go(button.dataset.go));
    document.querySelectorAll('[data-day]').forEach(button => button.onclick = () => renderDayDetail(button.dataset.day));
    document.querySelectorAll('[data-country]').forEach(button => button.onclick = () => {
      state.country = button.dataset.country;
      renderDays();
    });
    document.querySelectorAll('[data-notify]').forEach(button => button.onclick = () => enableNotifications(button.dataset.notify));
  }

  async function enableNotifications(dayId) {
    const day = DATA.days.find(item => item.id === dayId);
    if (!day || !('Notification' in window)) {
      alert('呢個瀏覽器唔支援通知；請用「此刻」頁面睇即時提示。');
      return;
    }
    const permission = Notification.permission === 'granted' ? 'granted' : await Notification.requestPermission();
    if (permission !== 'granted') {
      alert('通知未開到；「此刻」頁面仍可正常使用。');
      return;
    }
    const info = nowInfo();
    const upcoming = (day.activities || []).filter(item => clockMinutes(item.time) > info.minutes).slice(0, 8);
    new Notification('Europe Tour 今日提醒', { body: upcoming.length ? `已讀取 ${upcoming.length} 個之後行程；app 開住時最可靠。` : '今日未有更多固定時間。' });
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    localStorage.europe_theme = theme;
  }

  let fontSize = Number(localStorage.europe_font_size || 16);
  function applyFont(next) {
    fontSize = Math.max(13, Math.min(21, next));
    root.style.setProperty('--font-size', `${fontSize}px`);
    localStorage.europe_font_size = String(fontSize);
  }

  document.querySelectorAll('.tab').forEach(button => button.onclick = () => go(button.dataset.tab));
  document.querySelector('.brand').onclick = () => go('now');
  document.getElementById('themeBtn').onclick = () => {
    const current = localStorage.europe_theme || 'auto';
    applyTheme(current === 'auto' ? 'dark' : current === 'dark' ? 'light' : 'auto');
  };
  document.getElementById('fontDown').onclick = () => applyFont(fontSize - 1);
  document.getElementById('fontUp').onclick = () => applyFont(fontSize + 1);
  applyTheme(localStorage.europe_theme || 'auto');
  applyFont(fontSize);

  if (params.get('print') === '1') {
    document.body.classList.add('print-mode');
    renderPrint();
  } else {
    renderNow();
  }
})();
