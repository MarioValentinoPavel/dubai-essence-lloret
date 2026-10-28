// Dubai Essence: frascos de la portada, catálogo con filtros, ficha de cada perfume, buscador en 3 preguntas y aromas de Oriente
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const LI = { es: 0, ca: 1, en: 2, fr: 3 };
  const li = () => LI[document.documentElement.lang] ?? 0;
  const tx = (a) => a[li()] ?? a[0];
  const T = (...v) => v[li()] ?? v[0];
  const byId = Object.fromEntries(PERFUMES.map((p) => [p.id, p]));
  const SIZE = { khamrah: [720, 937], asad: [426, 960], yara: [427, 960], 'oud-for-glory': [509, 960], eclaire: [355, 958], 'fakhar-black': [580, 957], 'noble-blush': [573, 944], haya: [430, 940], 'oud-mood': [392, 940], 'qaed-al-fursan': [694, 960], mayar: [385, 957], 'cdn-intense': [635, 960], untold: [600, 960], 'dubai-chocolat': [650, 960], '9pm': [572, 850], '9pm-femme': [460, 768] };
  const src = (id) => `assets/img/p/${id}.webp`;
  const abs = (id) => new URL(src(id), location.href).href;
  const noteList = (ids) => ids.map((n, i) => (i ? tx(NOTE[n]).toLowerCase() : tx(NOTE[n]))).join(', ');
  const keyNotes = (p) => p.key.map((n, i) => (i ? tx(NOTE[n]).toLowerCase() : tx(NOTE[n]))).join(' · ');
  const allNotes = (p) => [...p.top, ...p.mid, ...p.base];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const anim = () => typeof gsap !== 'undefined' && !reduce;
  // destino calculado con el scroll real: tras filtrar, la página cambia de alto y Lenis puede ir desfasado
  const scrollTo = (sel) => { const t = $(sel); if (!t) return; const y = t.getBoundingClientRect().top + scrollY - 70; if (window.P && P.lenis) { P.lenis.resize(); P.lenis.scrollTo(y, { duration: 1.4 }); } else window.scrollTo(0, y); };

  // WhatsApp: sin número, WhatsApp deja elegir a quién enviarlo
  const wa = (msg) => `https://wa.me/${SHOP.wa || ''}?text=${encodeURIComponent(msg)}`;
  const msgHello = () => T('Hola, he visto vuestra web y quería preguntaros por vuestros perfumes.', 'Hola, he vist la vostra web i volia preguntar-vos pels vostres perfums.', 'Hi, I saw your website and I’d like to ask about your perfumes.', 'Bonjour, j’ai vu votre site et j’aimerais vous poser une question sur vos parfums.');
  const msgOne = (p) => T(`Hola, ¿tenéis ${p.name} de ${p.brand}? Me gustaría probarlo.`, `Hola, teniu ${p.name} de ${p.brand}? M’agradaria provar-lo.`, `Hi, do you have ${p.name} by ${p.brand}? I’d like to try it.`, `Bonjour, avez-vous ${p.name} de ${p.brand} ? J’aimerais l’essayer.`);
  const msgList = (ps) => { const l = ps.map((p) => `${p.name} (${p.brand})`).join(', '); return T(`Hola, en vuestra web me han salido estos perfumes: ${l}. ¿Los tenéis para probarlos?`, `Hola, a la vostra web m’han sortit aquests perfums: ${l}. Els teniu per provar-los?`, `Hi, your website suggested these perfumes for me: ${l}. Do you have them so I can try them?`, `Bonjour, votre site m’a proposé ces parfums : ${l}. Les avez-vous pour que je puisse les essayer ?`); };
  function waLinks() { $$('[data-wa]').forEach((a) => { a.href = wa(msgHello()); }); }

  /* ---------- ficha de perfume ---------- */
  const sheet = $('#sheet'); let curSheet = null;
  sheet.setAttribute('data-lenis-prevent', '');
  function fillSheet() {
    const p = byId[curSheet]; if (!p) return;
    const im = $('#sImg'); im.src = src(p.id); im.width = SIZE[p.id][0]; im.height = SIZE[p.id][1]; im.alt = `${p.name}, ${p.brand}`;
    $('#sBrand').textContent = p.line ? `${p.brand} · ${p.line}` : p.brand;
    $('#sName').textContent = p.name;
    $('#sTags').textContent = [tx(LBL.g[p.g]), ...p.f.map((f) => tx(LBL.f[f]))].join(' · ');
    $('#sDesc').textContent = tx(p.d);
    $('#sTop').textContent = noteList(p.top); $('#sMid').textContent = noteList(p.mid); $('#sBase').textContent = noteList(p.base);
    $('#sWhen').textContent = p.w.map((w) => tx(LBL.w[w])).join(' · ');
    $('#sWa').href = wa(msgOne(p));
  }
  function openSheet(id) {
    curSheet = id; fillSheet();
    if (!sheet.open) { sheet.showModal(); window.P && P.lenis && P.lenis.stop(); }
    sheet.scrollTop = 0;
  }
  sheet.addEventListener('close', () => { window.P && P.lenis && P.lenis.start(); });
  sheet.addEventListener('click', (e) => { if (e.target === sheet) sheet.close(); });
  $('#sheetX').addEventListener('click', () => sheet.close());
  $('#sVisit').addEventListener('click', (e) => { e.preventDefault(); sheet.close(); setTimeout(() => scrollTo('#visita'), 60); });

  /* ---------- portada: cuatro frascos ---------- */
  const bottle = $('#bottle'), cap = $('#cap'), thumbs = $('#thumbs');
  let hi = 0, auto = null, pausedUntil = 0, swapping = false;
  thumbs.innerHTML = HERO.map((id, i) => `<button type="button" data-i="${i}" aria-pressed="${i === 0}"><img src="${src(id)}" alt="" width="${SIZE[id][0]}" height="${SIZE[id][1]}"></button>`).join('');
  function capText() {
    const p = byId[HERO[hi]];
    $('.cap-brand', cap).textContent = p.line ? `${p.brand} · ${p.line}` : p.brand;
    $('.cap-name', cap).textContent = p.name;
    $('.cap-notes', cap).textContent = keyNotes(p);
    $$('button', thumbs).forEach((b, i) => b.setAttribute('aria-label', byId[HERO[i]].name));
    $('.b-img', bottle).alt = `${p.name}, ${p.brand}`;
  }
  function setBottle(id) {
    $$('img', bottle).forEach((im) => { im.src = src(id); });
    const im = $('.b-img', bottle); im.width = SIZE[id][0]; im.height = SIZE[id][1];
    bottle.style.setProperty('--src', `url("${abs(id)}")`);
  }
  function showHero(i) {
    if (i === hi || swapping) return;
    swapping = true; hi = i;
    $$('button', thumbs).forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)));
    bottle.classList.add('out'); cap.classList.add('out'); window.LIGHT && LIGHT.dim(.3);
    setTimeout(() => {
      setBottle(HERO[i]); capText();
      $('.b-img', bottle).decode().catch(() => {}).then(() => {
        bottle.classList.remove('out'); cap.classList.remove('out'); window.LIGHT && LIGHT.dim(1);
        setTimeout(() => { window.LIGHT && LIGHT.measure(); swapping = false; }, 900);
      });
    }, reduce ? 0 : 560);
  }
  setBottle(HERO[0]); capText();
  thumbs.addEventListener('click', (e) => { const b = e.target.closest('button'); if (!b) return; pausedUntil = performance.now() + 20000; showHero(+b.dataset.i); });
  $('.cap-more', cap).addEventListener('click', () => openSheet(HERO[hi]));
  bottle.addEventListener('click', () => openSheet(HERO[hi]));
  bottle.style.cursor = 'pointer';
  let heroOn = true;
  new IntersectionObserver(([e]) => { heroOn = e.isIntersecting; }).observe($('.hero'));
  if (!reduce) auto = setInterval(() => { if (heroOn && !document.hidden && performance.now() > pausedUntil) showHero((hi + 1) % HERO.length); }, 7000);

  /* ---------- catálogo ---------- */
  const grid = $('#grid'), state = { g: 'all', f: null, ing: null };
  grid.innerHTML = PERFUMES.map((p) => `<li class="card" data-id="${p.id}"><button type="button" class="card-btn">
    <span class="card-stage"><span class="medal" aria-hidden="true"><svg viewBox="-50 -50 100 100"><use href="#khatam" x="-50" y="-50" width="100" height="100"/></svg></span>
    <span class="card-b" style='--src:url("${abs(p.id)}")'><img src="${src(p.id)}" alt="" width="${SIZE[p.id][0]}" height="${SIZE[p.id][1]}" loading="lazy"><span class="lit" aria-hidden="true"></span></span></span>
    <span class="card-txt"><span class="c-brand">${p.brand}</span><span class="c-name">${p.name}</span><span class="c-notes"></span><span class="c-tag"></span></span></button></li>`).join('');
  function cardText() {
    $$('.card', grid).forEach((c) => {
      const p = byId[c.dataset.id];
      $('.c-notes', c).textContent = keyNotes(p);
      $('.c-tag', c).textContent = `${tx(LBL.g[p.g])} · ${tx(LBL.f[p.f[0]])}`;
      $('.card-btn', c).setAttribute('aria-label', T(`${p.name} de ${p.brand}: ver notas`, `${p.name} de ${p.brand}: veure notes`, `${p.name} by ${p.brand}: see notes`, `${p.name} de ${p.brand} : voir les notes`));
    });
  }
  grid.addEventListener('click', (e) => { const c = e.target.closest('.card'); if (c) openSheet(c.dataset.id); });
  const ingOf = (id) => ING.find((i) => i.id === id);
  const hasIng = (p, id) => ingOf(id).notes.some((n) => allNotes(p).includes(n));
  const match = (p) => (state.g === 'all' || p.g === state.g || (state.g !== 'u' && p.g === 'u')) && (!state.f || p.f.includes(state.f)) && (!state.ing || hasIng(p, state.ing));
  function chipText() {
    const chip = $('#chipIng');
    chip.hidden = !state.ing;
    if (state.ing) { const n = tx(ingOf(state.ing).n); chip.textContent = T(`Con ${n.toLowerCase()}`, `Amb ${n.toLowerCase()}`, `With ${n.toLowerCase()}`, `Avec ${n.toLowerCase()}`); chip.setAttribute('aria-label', T('Quitar filtro: ', 'Treure filtre: ', 'Remove filter: ', 'Retirer le filtre : ') + n); }
  }
  function applyFilter(animate) {
    let n = 0; const fresh = [];
    $$('.card', grid).forEach((c) => { const ok = match(byId[c.dataset.id]); if (ok) { n++; if (c.hidden) fresh.push(c); } c.hidden = !ok; });
    $('#count').textContent = T(`${n} perfumes`, `${n} perfums`, `${n} perfumes`, `${n} parfums`);
    $('#none').hidden = n > 0;
    $$('.seg button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.g === state.g)));
    $$('.chips [data-f]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.f === state.f)));
    chipText();
    if (animate && anim()) {
      const vis = $$('.card:not([hidden])', grid);
      gsap.fromTo(vis, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: .8, ease: 'expo.out', stagger: .035, clearProps: 'opacity,transform' });
    }
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }
  $('.seg').addEventListener('click', (e) => { const b = e.target.closest('[data-g]'); if (!b) return; state.g = b.dataset.g; applyFilter(true); });
  $('.chips').addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.id === 'chipIng') state.ing = null; else state.f = state.f === b.dataset.f ? null : b.dataset.f;
    applyFilter(true);
  });
  $('#reset').addEventListener('click', () => { state.g = 'all'; state.f = null; state.ing = null; applyFilter(true); });
  // en táctil, la luz pasa una vez por cada frasco al aparecer
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('shine'), 250); io.unobserve(e.target); } }), { threshold: .6 });
    $$('.card', grid).forEach((c) => io.observe(c));
  }

  /* ---------- encuentra el tuyo ---------- */
  const quiz = $('#quiz'), qs = $$('.q', quiz), res = $('#res'), ans = {};
  let step = 0, shown = [];
  quiz.addEventListener('submit', (e) => e.preventDefault());
  quiz.addEventListener('change', (e) => { if (!e.target.name) return; ans[e.target.name] = e.target.value; setTimeout(() => go(step + 1), reduce ? 0 : 300); });
  function go(s) {
    step = Math.max(0, Math.min(3, s));
    qs.forEach((q, i) => q.classList.toggle('is-on', i === step));
    res.hidden = step < 3;
    $('#qBack').hidden = step === 0;
    $('#qBar').style.width = `${Math.min(3, step + 1) / 3 * 100}%`;
    stepText();
    if (step === 3) { results(); res.focus({ preventScroll: true }); }
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }
  function stepText() { $('#qStep').textContent = step < 3 ? T(`Pregunta ${step + 1} de 3`, `Pregunta ${step + 1} de 3`, `Question ${step + 1} of 3`, `Question ${step + 1} sur 3`) : T('Tu resultado', 'El teu resultat', 'Your result', 'Votre résultat'); }
  function score(p) {
    let sc = 0;
    if (ans.g === 'u') sc += p.g === 'u' ? .5 : 0;
    else { if (p.g !== ans.g && p.g !== 'u') return -1; sc += p.g === ans.g ? 1 : .4; }
    const fi = p.f.indexOf(ans.f); sc += fi === 0 ? 4 : fi > 0 ? 2.6 : 0;
    if (p.w.includes(ans.w)) sc += 1.5;
    return sc;
  }
  function results() {
    shown = PERFUMES.map((p, i) => ({ p, s: score(p) - i * .001 })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 3).map((x) => x.p);
    const order = shown.length === 3 ? [shown[1], shown[0], shown[2]] : shown;
    $('#resList').innerHTML = order.map((p) => {
      const why = [p.f.includes(ans.f) ? tx(LBL.f[ans.f]) : tx(LBL.f[p.f[0]]), p.w.includes(ans.w) ? tx(LBL.w[ans.w]) : ''].filter(Boolean).join(' · ');
      return `<li><span class="res-beam" aria-hidden="true"></span><button type="button" data-id="${p.id}">
        <img src="${src(p.id)}" alt="" width="${SIZE[p.id][0]}" height="${SIZE[p.id][1]}"><span class="pool" aria-hidden="true"></span>
        ${p === shown[0] ? `<span class="best">${T('Tu favorito', 'El teu preferit', 'Your best match', 'Votre favori')}</span>` : ''}
        <span class="r-brand">${p.brand}</span><span class="r-name">${p.name}</span><span class="r-why">${why}</span></button></li>`;
    }).join('');
    $('#resWa').href = wa(msgList(shown));
    if (anim()) gsap.fromTo($$('#resList li'), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: .1, clearProps: 'opacity,transform' });
  }
  $('#resList').addEventListener('click', (e) => { const b = e.target.closest('[data-id]'); if (b) openSheet(b.dataset.id); });
  $('#qBack').addEventListener('click', () => go(step - 1));
  $('#again').addEventListener('click', () => { quiz.reset(); Object.keys(ans).forEach((k) => delete ans[k]); go(0); });

  /* ---------- aromas de Oriente ---------- */
  const ingList = $('#ing');
  ingList.innerHTML = ING.map((g) => `<li data-up><button type="button" data-ing="${g.id}"><span class="ar" lang="ar" aria-hidden="true">${g.ar}</span><span class="nm"></span><span class="ds"></span><span class="go"><span></span><svg aria-hidden="true"><use href="#arrow"/></svg></span></button></li>`).join('');
  function ingText() {
    $$('[data-ing]', ingList).forEach((b) => {
      const g = ingOf(b.dataset.ing), n = tx(g.n), c = PERFUMES.filter((p) => hasIng(p, g.id)).length, low = n.toLowerCase();
      $('.nm', b).textContent = n; $('.ds', b).textContent = tx(g.d);
      $('.go span', b).textContent = T(`Ver ${c} perfumes con ${low}`, `Veure ${c} perfums amb ${low}`, `See ${c} perfumes with ${low}`, `Voir ${c} parfums avec ${low}`);
    });
  }
  ingList.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ing]'); if (!b) return;
    state.ing = b.dataset.ing; state.f = null; state.g = 'all'; applyFilter(false);
    // tras el refresh de ScrollTrigger, si no, corta el desplazamiento de Lenis
    setTimeout(() => scrollTo('#perfumes'), 60);
    if (anim()) setTimeout(() => gsap.fromTo($$('.card:not([hidden])', grid), { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: .8, ease: 'expo.out', stagger: .05, clearProps: 'opacity,transform' }), 700);
  });

  /* ---------- rótulo que se inclina con el cursor ---------- */
  const sign = $('.sign');
  if (sign && matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
    const plate = $('.sign-plate', sign);
    sign.addEventListener('pointermove', (e) => { const r = sign.getBoundingClientRect(); plate.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - .5) * 14}deg`); plate.style.setProperty('--rx', `${-((e.clientY - r.top) / r.height - .5) * 12}deg`); });
    sign.addEventListener('pointerleave', () => { plate.style.setProperty('--ry', '0deg'); plate.style.setProperty('--rx', '0deg'); });
  }

  /* ---------- textos que dependen del idioma ---------- */
  function texts() {
    waLinks(); capText(); cardText(); ingText(); applyFilter(false); stepText();
    if (step === 3) results();
    if (sheet.open) fillSheet();
  }
  document.addEventListener('langchange', texts);
  texts();

  /* ---------- movimiento al hacer scroll ---------- */
  if (anim() && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.why-star', { rotate: 45, ease: 'none', scrollTrigger: { trigger: '.why', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.to('.hero-txt', { yPercent: -10, opacity: .25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.fromTo('.foot-word', { letterSpacing: '0.32em', opacity: 0 }, { letterSpacing: '0.1em', opacity: .9, ease: 'expo.out', duration: 2, scrollTrigger: { trigger: '.foot', start: 'top 85%' } });
  }
})();
