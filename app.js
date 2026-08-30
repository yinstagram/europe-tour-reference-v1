(function () {
  'use strict';

  const DATA = window.EUROPE_TOUR;
  const DECISION = window.EUROPE_DECISION_DATA;
  const MEDIA = window.EUROPE_MEDIA || {};
  const view = document.getElementById('view');
  const root = document.documentElement;
  const params = new URLSearchParams(location.search);
  const ROUTE_DECISION_KEY = 'europe_route_pace_decision';
  const state = {
    tab: 'decide',
    country: 'all',
    search: '',
    selectedDay: null
  };

  if (window.EUROPE_QUESTIONNAIRE_APP?.matchesCurrentUrl()) {
    window.EUROPE_QUESTIONNAIRE_APP.start();
    window.addEventListener('hashchange', () => {
      if (!window.EUROPE_QUESTIONNAIRE_APP?.matchesCurrentUrl()) window.location.reload();
    });
    return;
  }

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

  function mediaFor(item) {
    return item && MEDIA[item.title] ? MEDIA[item.title] : null;
  }

  function mediaBlock(item) {
    const media = mediaFor(item);
    if (!media) return '';
    const image = safeUrl(media.image);
    const source = safeUrl(media.source);
    const menu = safeUrl(media.menuUrl);
    if (!image) return '';
    return `<figure class="activity-media ${media.kind === 'food' ? 'is-food' : ''}">
      <img src="${esc(image)}" alt="${esc(media.alt || item.title)}" loading="lazy" decoding="async">
      <figcaption><span>${esc(media.caption || '相片參考')} · ${esc(media.author || 'Wikimedia Commons')} · ${esc(media.license || '')}</span><span class="media-links">${source ? `<a href="${esc(source)}" target="_blank" rel="noopener">出處 ↗</a>` : ''}${menu ? `<a href="${esc(menu)}" target="_blank" rel="noopener">餐牌／官方頁 ↗</a>` : ''}</span></figcaption>
    </figure>`;
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
      headline = day.number === 0 ? '出發前一晚' : `旅程第 ${day.number} 日`;
      subline = `${day.dateLabel} · ${countryOf(day.country).flag} ${day.title}`;
    } else if (before > 0) {
      headline = `出發前 ${before} 日`;
      subline = `${DATA.meta.dateRange} · 四國 15 日行程決策版`;
    } else if (after > 0) {
      headline = '旅程已完成';
      subline = `${DATA.meta.dateRange} · 保留作詳細行程記錄`;
    } else {
      headline = '15 日歐洲行程';
      subline = `${DATA.meta.dateRange} · 荷蘭 → 比利時 → 法國 → 瑞士`;
    }

    return `<section class="hero">
      <div class="hero-stamp">部分官方資料<br>已核對<br>訂位仍未證實</div>
      <div class="hero-inner">
        <p class="eyebrow">EUROPE 2026</p>
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
            <div class="now-cell is-focus"><span>下一個固定動作</span><p><b>向旅行社確認</b> 正式去回日期、逐站住宿、暫定 10 月 27 日法國主線同全程車務。</p></div>
            <div class="now-cell"><span>航班</span><p>PDF 列出 4 段 Emirates，但回程時間互相矛盾。</p></div>
            <div class="now-cell"><span>住宿</span><p>修訂版住宿建議有 ${DATA.hotels.filter(h => h.status === 'revised-pdf').length} 間候選，其中 ${DATA.hotels.filter(h => h.access === 'red').length} 間已建議換走；另有 ${DATA.hotels.filter(h => h.status === 'unknown').length} 個住宿問題未解決。</p></div>
            <div class="now-cell is-alert"><span>待確認</span><p><b>${unresolved.length}</b> 個關鍵問題未有書面證明。</p></div>
          </div>
          <div class="prep-row"><b>點睇資料狀態</b><span>藍色係 PDF／通話原稿；綠色係官方查證；橙色係規劃推斷；紅色一定要再確認。</span></div>
          <div class="button-row">
            <button class="button primary" type="button" data-go="days">睇 ${DATA.days.length} 個日程</button>
            <button class="button ghost" type="button" data-go="verify">先睇矛盾同待確認</button>
          </div>
        </div>
      </section>`;
    }

    const live = timelineState(day, info);
    const attention = live.current?.warning || live.next?.warning || day.risk || (day.activities || []).find(item => item.warning)?.warning || '跟當日時間線行；所有安排以最新書面確認為準。';
    return `<section class="section">
      <div class="card now-panel">
        <div class="now-kicker"><span>${info.mock ? '🧪 測試此刻' : '⌁ 此刻助手'}</span><time>${esc(day.dateLabel)} ${esc(info.time)}</time></div>
        <div class="now-grid">
          <div class="now-cell is-focus"><span>而家</span><p>${compactActivity(live.current, '今日第一項未開始')}</p></div>
          <div class="now-cell"><span>下一步</span><p>${compactActivity(live.next, '今日固定項目已完成')}</p></div>
          <div class="now-cell"><span>今晚</span><p>${compactActivity(live.tonight, day.hotelSummary || '跟最新酒店確認')}</p></div>
          <div class="now-cell is-alert"><span>即時關注</span><p>${esc(attention)}</p></div>
        </div>
        <div class="prep-row"><b>出門／轉場前</b><span>${esc(day.prep || '護照、手機、充電、當日確認文件截圖同薄外套。')}</span></div>
        <div class="button-row">
          <button class="button primary" type="button" data-day="${esc(day.id)}">睇今日全部</button>
          <button class="button ghost" type="button" data-notify="${esc(day.id)}">測試今日通知</button>
        </div>
        <p class="muted tiny">呢個按鈕只會即時測試一個 notification；真正時間提示要保持 app 開住睇「此刻」。靜態 PWA 無 closed-app push。</p>
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
        <div class="card summary-card"><div class="number">${DATA.meta.tripDays}</div><div class="label">日旅程 · ${esc(DATA.meta.dateRange)}</div><div class="mini">另有出發前一晚準備</div></div>
        <div class="card summary-card"><div class="number">${activities.length}</div><div class="label">行程節點</div><div class="mini">每項有地址／Maps</div></div>
        <div class="card summary-card"><div class="number" style="color:var(--green)">${verified}</div><div class="label">已連官方來源</div><div class="mini">核查日 ${esc(DATA.meta.verifiedAt)}</div></div>
        <div class="card summary-card"><div class="number" style="color:var(--red)">${unknown}</div><div class="label">待確認訊號</div><div class="mini">冇書面證明就唔當完成</div></div>
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
      ${renderCallUpdate()}
      ${critical ? `<section class="section"><div class="card notice is-critical"><span class="notice-icon">!</span><div><strong>${critical} 個出發前一定要解決嘅矛盾</strong><p>包括航班時間、巴黎鐵塔、暫定 10 月 27 日法國主線同逐站住宿；已經集中放喺「查證」。</p></div></div></section>` : ''}
      ${renderNowPanel(day, info)}
      ${renderSummary()}
      ${renderCountryStrip()}`;
    bindDynamic();
  }

  function routeDecisionById(id) {
    const decision = DATA.routeDecision;
    return decision && decision.options ? decision.options.find(option => option.id === id) || null : null;
  }

  function savedRouteDecision() {
    try {
      return routeDecisionById(localStorage.getItem(ROUTE_DECISION_KEY));
    } catch (_) {
      return null;
    }
  }

  function renderRouteDecision() {
    const decision = DATA.routeDecision;
    if (!decision || !Array.isArray(decision.options)) return '';
    const selected = savedRouteDecision();
    return `<section class="section decision-panel" id="route-decision" aria-labelledby="route-decision-title">
      <div class="card decision-card">
        <div class="decision-head">
          <p class="decision-kicker">你而家只要做一件事</p>
          <h2 id="route-decision-title">${esc(decision.title)}</h2>
          <p>${esc(decision.intro)}</p>
        </div>
        <fieldset class="decision-options">
          <legend class="sr-only">揀今次行程節奏</legend>
          ${decision.options.map(option => `<label class="decision-option ${selected?.id === option.id ? 'is-selected' : ''}">
            <input type="radio" name="route-pace" value="${esc(option.id)}" data-route-decision ${selected?.id === option.id ? 'checked' : ''}>
            <span class="decision-option-copy">
              <span class="decision-option-title">${esc(option.title)}${option.recommended ? '<span class="decision-recommended">我建議</span>' : ''}</span>
              <span class="decision-option-summary">${esc(option.summary)}</span>
              <span class="decision-points">${option.points.map(point => `<span>${esc(point)}</span>`).join('')}</span>
            </span>
          </label>`).join('')}
        </fieldset>
        <div class="decision-answer" aria-live="polite">
          <div>
            <span class="decision-answer-label">你嘅答案</span>
            <strong data-route-answer-title>${selected ? esc(selected.title) : '未揀'}</strong>
            <p data-route-answer-copy>${selected ? esc(selected.answer) : '撳上面其中一個選擇，我會幫你整理成一句可以直接回覆嘅答案。'}</p>
          </div>
          <div class="decision-answer-action">
            <button class="button primary" type="button" data-copy-route-decision ${selected ? '' : 'disabled'}>複製答案，貼返呢個對話</button>
            <span class="muted tiny" data-route-copy-feedback>選擇只會留喺你部裝置，唔會自動訂位、付款或送出。</span>
          </div>
        </div>
        <details class="decision-later">
          <summary>之後仲有 ${decision.later.length} 樣資料，唔使而家一次過答</summary>
          <div class="decision-later-list">${decision.later.map((item, index) => `<div><b>${index + 1}</b><span><strong>${esc(item.title)}</strong><small>${esc(item.detail)}</small></span></div>`).join('')}</div>
        </details>
      </div>
    </section>`;
  }

  function renderCallUpdate() {
    const update = DATA.callUpdate;
    if (!update) return '';
    return `<details class="section card call-summary">
      <summary>通話已經幫你答咗嘅資料</summary>
      <div class="call-summary-body">
        <p>${esc(update.source)}</p>
        <ul>${update.confirmed.map(item => `<li>${esc(item)}</li>`).join('')}</ul>
      </div>
    </details>`;
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
      statuses.has('unknown') ? '! 有待確認' : '資料已整理｜預訂未確認'
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
    view.innerHTML = `<header class="page-head"><h1>行程總覽</h1><p>Day 0 至 Day ${DATA.days.length - 1}；每一日保留 PDF／通話原稿，再疊加正確名稱、完整地址、官方連結、開放／預約提示同可行性判斷。</p></header>
      <div class="card notice is-critical"><span class="notice-icon">!</span><div><strong>全部日期同星期幾都只係暫定</strong><p>目前未有正式電子機票；每日資料整理好，唔代表航班、車、住宿或門票已確認。</p></div></div>
      <label class="search-wrap"><span>⌕</span><input id="daySearch" class="search-input" type="search" value="${esc(state.search)}" placeholder="搜尋城市、景點、地址…" aria-label="搜尋行程"></label>
      <div class="filterbar">${countries.map(code => {
        const label = code === 'all' ? '全部行程' : `${countryOf(code).flag} ${countryOf(code).name}`;
        return `<button class="filter-chip ${state.country === code ? 'is-active' : ''}" type="button" data-country="${code}">${label}</button>`;
      }).join('')}</div>
      <div class="day-list">${filtered.length ? filtered.map(dayCard).join('') : '<div class="card empty"><strong>搵唔到相符行程</strong><p>試下清除搜尋字或轉返「全部日程」。</p></div>'}</div>`;
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
      ${mediaBlock(item)}
      <div class="activity-body">
        ${body ? `<p>${esc(body)}</p>` : ''}
        <div class="fact-grid">
          ${fact('行程角色', item.priority)}
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
        <div class="source-note">${item.status === 'source' ? '舊文件資料，唔等同正式確認。' : item.status === 'verified' ? `官方公開資料核查：${esc(item.verifiedAt || DATA.meta.verifiedAt)}；唔代表指定日期可用。` : item.status === 'inference' ? '行程推論：只用嚟判斷動線，唔係供應商承諾。' : '未能由官方資料確認；出發前必須再問旅行社／供應商。'}${source ? ` <a href="${esc(source)}" target="_blank" rel="noopener">來源</a>` : ''}</div>
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
        ${options.print ? '' : '<button class="button ghost back-button" type="button" data-go="days">‹ 返回行程</button>'}
        <p class="eyebrow">DAY ${day.number} · ${esc(day.dateLabel)} · ${country.flag} ${esc(country.name)}</p>
        <h1>${esc(day.title)}</h1>
        <div class="detail-meta"><span>${esc(day.subtitle || '')}</span><span>${(day.activities || []).length} 個節點</span><span>${esc(day.city || '')}</span></div>
      </section>
      <section class="section"><div class="card notice is-critical"><span class="notice-icon">!</span><div><strong>${esc(day.dateLabel)} 同 ${esc(day.dow)} 只係暫定</strong><p>未有正式電子機票；下面嘅時間、車、住宿同門票仍要逐項攞書面確認。</p></div></div></section>
      <section class="section day-overview">
        <div class="card overview-card"><h3>PDF 原稿</h3><p>${esc(day.sourceSummary || 'PDF 未提供額外細節。')}</p></div>
        <div class="card overview-card"><h3>目前判斷</h3><p>${esc(day.assessment || '跟書面確認同當日實際交通再調整。')}</p>${day.risk ? `<ul><li>${esc(day.risk)}</li></ul>` : ''}</div>
      </section>
      ${day.options?.length ? `<section class="section"><div class="card notice"><span class="notice-icon">↔</span><div><strong>呢一日有互斥選項</strong><p>${esc(day.options.join(' ／ '))}。未有決定前，兩條線都只係候選，唔代表已預訂。</p></div></div></section>` : ''}
      <section class="section">
        <div class="section-head"><h2>當日時間線</h2><p>時間未有證據就標「待定」，唔會硬填</p></div>
        <div class="timeline">${(day.activities || []).map(item => `<div class="timeline-item"><div class="timeline-time">${esc(item.time || '待定')}</div>${activityCard(item)}</div>`).join('')}</div>
      </section>
      ${hotels.length ? `<section class="section"><div class="section-head"><h2>當晚住宿</h2><p>候選住宿唔代表已確認預訂</p></div><div class="hotel-grid">${hotels.map(hotelCard).join('')}</div></section>` : ''}
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
    view.innerHTML = `<header class="page-head"><h1>全程地圖</h1><p>離線時先用簡化路線圖睇全程脈絡；每一站都有固定 Google Maps 搜尋，連線後可直接導航。</p></header>
      <div class="card notice is-critical"><span class="notice-icon">!</span><div><strong>路線次序同日期只係暫定</strong><p>未有正式電子機票、逐段車務同實際住宿證明，唔可以當已落實路線。</p></div></div>
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
    const statusText = hotel.status === 'confirmed' ? '已確認' : hotel.status === 'revised-pdf' ? '修訂版 PDF 候選' : hotel.status === 'agency-proposal' ? '旅行社舊方案' : hotel.status === 'alternative' ? 'PDF 後備候選' : hotel.status === 'proposed' ? 'PDF 建議' : '未指定／待確認';
    const truth = hotel.status === 'confirmed' ? 'verified' : hotel.status === 'unknown' ? 'unknown' : 'source';
    const accessText = hotel.access === 'green' ? '官網稱有相關房型｜今次房未證' : hotel.access === 'yellow' ? '出入條件待問' : hotel.access === 'red' ? '建議換走' : '';
    const accessStyle = hotel.access === 'green' || hotel.access === 'yellow' ? 'color:var(--amber)' : hotel.access === 'red' ? 'color:var(--red)' : '';
    return `<article class="card hotel-card">
      <div class="hotel-top"><div class="hotel-city">${countryOf(hotel.country).flag} ${esc(hotel.city)} · ${esc(hotel.nights || '')}</div><h2>${esc(hotel.name)}</h2></div>
      <div class="hotel-body"><div class="hotel-status"><span class="chip">${esc(statusText)}</span>${hotel.price ? `<span class="chip">舊方案片段價，不可比較／付款：${esc(hotel.price)}</span>` : ''}${accessText ? `<span class="chip" style="${accessStyle}">${esc(accessText)}</span>` : ''}${truthBadge(truth)}</div>
        <p>${esc(hotel.address || 'PDF 未提供酒店地址。')}</p>
        ${hotel.note ? `<p>${esc(hotel.note)}</p>` : ''}
        <div class="button-row">${map ? `<a class="button ghost" href="${esc(map)}" target="_blank" rel="noopener">⌖ Maps</a>` : ''}${official ? `<a class="button ghost" href="${esc(official)}" target="_blank" rel="noopener">↗ 官網</a>` : ''}</div>
      </div>
    </article>`;
  }

  function renderStays() {
    const bases = DECISION?.stayBases || [];
    const airbnb = window.EUROPE_AIRBNB_RESEARCH;
    const airbnbSection = airbnb ? `
      <section class="section"><div class="section-head"><h2>Airbnb 即時比較</h2><p>每張卡一撳就開預設好 5 人＋日期＋全間屋嘅 Airbnb 搜尋；現場同旅行社酒店報價直接比較</p></div>
      <div class="quick-compare card" style="margin-bottom:16px;padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div><b>🏨 酒店</b><ul style="margin:8px 0 0 16px;padding:0">${airbnb.quickCompare.hotel.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>
        <div><b>🏠 Airbnb</b><ul style="margin:8px 0 0 16px;padding:0">${airbnb.quickCompare.airbnb.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>
      </div>
      <div class="hotel-grid">${airbnb.stops.map(stop => `<article class="card hotel-card" style="border-left:3px solid #e05b5b">
        <div class="hotel-top"><div class="hotel-city">${esc(stop.country)} · ${esc(stop.dates)}</div><h2>${esc(stop.city)}</h2></div>
        <div class="hotel-body">
          <div class="hotel-status"><span class="chip">Airbnb</span><span class="chip">~${esc(stop.priceRange)}</span></div>
          <p><b>酒店比較：</b>${esc(stop.hotelCompare)}</p>
          <p><b>👍：</b>${esc(stop.pros)}</p>
          <p><b>👎：</b>${esc(stop.cons)}</p>
          <div class="button-row"><a class="button primary" style="text-decoration:none" href="${esc(stop.searchUrl)}" target="_blank" rel="noopener">🔍 開 Airbnb 搜尋</a></div>
        </div>
      </article>`).join('')}</div></section>` : '';

    view.innerHTML = `<header class="page-head"><h1>逐站住宿研究</h1><p>以下全部只係按「可能五位成人」工作假設做嘅研究候選；唔代表最終同行人數已定、指定日期有房、可合法入住、適合 Uncle 或最後價錢已確認。</p></header>
      <div class="card notice is-critical"><span class="notice-icon">!</span><div><strong>${bases.length} 個住宿基地仍未完成</strong><p>每站都要獨立核實實際物業、分房床位、Uncle 由落車位到浴室嘅完整路線、最後總價、取消條款同書面證明。</p></div></div>
      ${airbnbSection}
      <section class="section"><div class="hotel-grid">${bases.map(base => `<article class="card hotel-card"><div class="hotel-top"><div class="hotel-city">${esc(base.workingNights)}</div><h2>${esc(base.city)}</h2></div><div class="hotel-body"><div class="hotel-status"><span class="chip">研究候選</span>${truthBadge('unknown')}</div><p><b>目前判斷：</b>${esc(base.recommendation)}</p><p><b>酒店比較：</b>${esc(base.hotel)}</p><p><b>整套住宅比較：</b>${esc(base.home)}</p><p><b>仍未證實：</b>${esc(base.researchState)}</p>${base.links?.length ? `<div class="button-row">${base.links.map(link => `<a class="button ghost" href="${esc(safeUrl(link.url))}" target="_blank" rel="noopener">${esc(link.label)} ↗</a>`).join('')}</div>` : ''}</div></article>`).join('')}</div></section>
      <section class="section"><div class="button-row"><button class="button primary" type="button" data-go="agency">去旅行社逐站記答案同證明</button></div></section>`;
    bindDynamic();
  }

  function issueCard(issue, index) {
    return `<article class="card issue-card"><span class="issue-number">${index + 1}</span><div><div style="display:flex;justify-content:space-between;gap:10px"><h3>${esc(issue.title)}</h3>${truthBadge(issue.status === 'resolved' ? 'verified' : 'unknown')}</div><p>${esc(issue.pdf)}</p><p class="resolution"><b>目前處理：</b>${esc(issue.resolution || issue.verified || '待旅行社確認。')}</p></div></article>`;
  }

  function flightCard(flight) {
    const source = safeUrl(flight.officialUrl);
    return `<article class="card flight-card"><div class="flight-no"><span>${esc(flight.flight)}</span>${truthBadge(flight.status)}</div><div class="flight-route"><div><b>${esc(flight.from)}</b><span>${esc(flight.depart)}</span></div><i>→</i><div><b>${esc(flight.to)}</b><span>${esc(flight.arrive)}</span></div></div><div class="flight-note">${esc(flight.note || '')}${source ? ` · <a href="${esc(source)}" target="_blank" rel="noopener">航空公司官方航線頁</a>` : ''}</div></article>`;
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

  function mediaSources() {
    const seen = new Set();
    return Object.values(MEDIA).filter(media => {
      const source = safeUrl(media.source);
      if (!source || seen.has(source)) return false;
      seen.add(source);
      return true;
    });
  }

  function renderVerify() {
    const unresolved = DATA.issues.filter(issue => issue.status !== 'resolved');
    const references = referenceSources();
    const imageSources = mediaSources();
    view.innerHTML = `<header class="page-head"><h1>查證中心</h1><p>「已查證」只代表某項官方公開資料；正式機票、司機、車輛、實際房間、門票同指定日期可用狀態仍要書面確認。</p></header>
      <section class="card notice ${unresolved.length ? 'is-critical' : 'is-good'}"><span class="notice-icon">${unresolved.length ? '!' : '✓'}</span><div><strong>${unresolved.length ? `${unresolved.length} 個核心問題未解決` : '核心問題已解決'}</strong><p>最後資料核查：${esc(DATA.meta.verifiedAt)}。目前版本冇做任何訂位、付款或對外聯絡。</p></div></section>
      <section class="section"><div class="section-head"><h2>矛盾／待確認</h2><p>先處理紅色，先可以鎖定行程</p></div><div class="issue-list">${DATA.issues.map(issueCard).join('')}</div></section>
      <section class="section"><div class="section-head"><h2>舊航班資料同目前暫定日期對照</h2><p>舊文件航班號／鐘數加上目前暫定日期，唔等於正式電子機票</p></div><div class="flight-grid">${DATA.flights.map(flightCard).join('')}</div></section>
      <section class="section"><div class="section-head"><h2>實用資料</h2><p>跨國共通</p></div><div class="issue-list">${(DATA.practical || []).map((item, index) => `<article class="card issue-card"><span class="issue-number">${index + 1}</span><div><div style="display:flex;justify-content:space-between;gap:10px"><h3>${esc(item.title)}</h3>${truthBadge(item.status)}</div><p>${esc(item.detail)}</p>${item.officialUrl ? `<div class="button-row"><a class="button ghost" href="${esc(safeUrl(item.officialUrl))}" target="_blank" rel="noopener">↗ 官方來源</a></div>` : ''}</div></article>`).join('')}</div></section>
      <section class="section"><div class="section-head"><h2>相片出處／授權</h2><p>${imageSources.length} 張 Wikimedia Commons 相片；每張行程卡片亦有獨立列明出處</p></div><div class="reference-list">${imageSources.map(media => `<article class="card reference-row"><b>${esc(media.caption || '相片參考')}</b><span>${esc(media.author || '')} · ${esc(media.license || '')}</span><a href="${esc(safeUrl(media.source))}" target="_blank" rel="noopener">原始頁 ↗</a></article>`).join('')}</div></section>
      <section class="section"><div class="section-head"><h2>官方來源索引</h2><p>${references.length} 條已驗證 URL</p></div><div class="reference-list">${references.map(source => `<article class="card reference-row"><b>${esc(source.label)}</b><span>${esc(source.url)}</span><a href="${esc(source.url)}" target="_blank" rel="noopener">開啟 ↗</a></article>`).join('')}</div></section>`;
    bindDynamic();
  }

  function renderPrint() {
    const info = nowInfo();
    const references = referenceSources();
    view.innerHTML = `<section class="hero print-cover"><div class="hero-inner"><p class="eyebrow">EUROPE · 通話整合版</p><h1>荷蘭 · 比利時<br>法國 · 瑞士</h1><div class="hero-sub"><span>${esc(DATA.meta.dateRange)}</span><span>官方資料核查 ${esc(DATA.meta.verifiedAt)}</span></div></div></section>
      <section><h1>使用說明</h1><div class="card notice"><span class="notice-icon">i</span><div><strong>呢份係目前暫定行程，唔係訂位確認</strong><p>綠色＝官方公開資料；藍色＝旅行社舊文件／通話原稿；橙色＝行程推論；紅色＝一定要再確認。</p></div></div></section>
      <section class="print-section"><h1>核心矛盾</h1><div class="issue-list">${DATA.issues.map(issueCard).join('')}</div></section>
      ${DATA.days.map(day => renderDayDetail(day.id, { print: true, returnHtml: true })).join('')}
      <section class="print-section"><h1>住宿總覽</h1><div class="hotel-grid">${DATA.hotels.map(hotelCard).join('')}</div></section>
      <section class="print-section"><h1>航班資料對照</h1><div class="flight-grid">${DATA.flights.map(flightCard).join('')}</div></section>
      <section class="print-section"><h1>官方來源索引</h1><div class="reference-list">${references.map(source => `<article class="card reference-row"><b>${esc(source.label)}</b><span>${esc(source.url)}</span><a href="${esc(source.url)}">來源</a></article>`).join('')}</div></section>`;
  }

  function go(tab) {
    state.tab = tab;
    state.selectedDay = null;
    if (location.hash !== `#${tab}`) location.hash = tab;
    document.querySelectorAll('.tab').forEach(button => {
      const active = button.dataset.tab === tab;
      button.classList.toggle('is-active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    ({
      now: renderNow,
      decide: () => window.EUROPE_DECISION_CHECKLIST?.render(view),
      agency: () => window.EUROPE_DECISION_CHECKLIST?.renderAgency(view),
      days: renderDays,
      route: renderRoute,
      stays: renderStays,
      verify: renderVerify
    }[tab] || renderNow)();
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
    document.querySelectorAll('[data-route-decision]').forEach(input => input.onchange = () => selectRouteDecision(input.value));
    const copyDecision = document.querySelector('[data-copy-route-decision]');
    if (copyDecision) copyDecision.onclick = copyRouteDecision;
  }

  function updateRouteDecisionUI(decision) {
    document.querySelectorAll('[data-route-decision]').forEach(input => {
      const selected = Boolean(decision && input.value === decision.id);
      input.checked = selected;
      input.closest('.decision-option')?.classList.toggle('is-selected', selected);
    });
    const title = document.querySelector('[data-route-answer-title]');
    const answer = document.querySelector('[data-route-answer-copy]');
    const copyButton = document.querySelector('[data-copy-route-decision]');
    const feedback = document.querySelector('[data-route-copy-feedback]');
    if (title) title.textContent = decision ? decision.title : '未揀';
    if (answer) answer.textContent = decision ? decision.answer : '撳上面其中一個選擇，我會幫你整理成一句可以直接回覆嘅答案。';
    if (copyButton) copyButton.disabled = !decision;
    if (feedback) feedback.textContent = decision ? '已暫存在你部裝置。撳複製，再貼返呢個對話。' : '選擇只會留喺你部裝置，唔會自動訂位、付款或送出。';
  }

  function selectRouteDecision(id) {
    const decision = routeDecisionById(id);
    if (!decision) return;
    try {
      localStorage.setItem(ROUTE_DECISION_KEY, decision.id);
    } catch (_) {}
    updateRouteDecisionUI(decision);
  }

  async function copyRouteDecision() {
    const decision = savedRouteDecision();
    if (!decision) return;
    const feedback = document.querySelector('[data-route-copy-feedback]');
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(decision.answer);
      if (feedback) feedback.textContent = '已複製。返去 Codex 對話貼上就得。';
    } catch (_) {
      window.prompt('請複製呢句，再貼返 Codex 對話：', decision.answer);
      if (feedback) feedback.textContent = '已打開答案，請複製後貼返 Codex 對話。';
    }
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
    new Notification('Europe Tour 通知測試', { body: upcoming.length ? `測試成功：此刻讀到 ${upcoming.length} 個之後行程。呢個唔係排程通知。` : '測試成功：今日未有更多固定時間。' });
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
  document.querySelector('.brand').onclick = () => go('decide');
  document.getElementById('themeBtn').onclick = () => {
    const current = localStorage.europe_theme || 'auto';
    applyTheme(current === 'auto' ? 'dark' : current === 'dark' ? 'light' : 'auto');
  };
  document.getElementById('fontDown').onclick = () => applyFont(fontSize - 1);
  document.getElementById('fontUp').onclick = () => applyFont(fontSize + 1);
  applyTheme(localStorage.europe_theme || 'auto');
  applyFont(fontSize);
  window.addEventListener('hashchange', () => {
    if (window.EUROPE_QUESTIONNAIRE_APP?.matchesCurrentUrl()) {
      window.location.reload();
      return;
    }
    const target = location.hash.replace('#', '');
    if (['now', 'decide', 'agency', 'days', 'route', 'stays', 'verify'].includes(target) && target !== state.tab) go(target);
  });

  const initialTab = location.hash.replace('#', '');
  if (params.get('print') === '1') {
    document.body.classList.add('print-mode');
    renderPrint();
  } else if (['now', 'decide', 'agency', 'days', 'route', 'stays', 'verify'].includes(initialTab)) {
    go(initialTab);
  } else {
    go('decide');
  }
})();
