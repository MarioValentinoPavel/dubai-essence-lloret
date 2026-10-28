// Luz de celosía: el sol entra por una celosía de estrellas de ocho puntas y su dibujo se proyecta en la pared, detrás del frasco.
// Rayos (copias del dibujo que se acercan al sol), motas de polvo dorado en el haz y la sombra del frasco recortada en la luz.
// El cursor mueve el sol (en táctil, deslizar sobre el escenario); sin puntero, el sol se mueve solo y muy despacio.
(() => {
  const cv = document.getElementById('light');
  if (!cv) return;
  const hero = cv.closest('.hero'), stage = document.getElementById('stage'), bottle = document.getElementById('bottle');
  const hint = document.getElementById('hint');
  const ctx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const Q = .5;                                     // media resolución: la luz es suave y va más ligera
  const BASE = { x: .9, y: -.28 };                  // sol en reposo (fracción del héroe), arriba a la derecha y fuera de pantalla
  const FROM = { x: 1.18, y: .5 };                  // al cargar el sol está bajo, a la derecha, y sube (amanece)
  const sun = { x: FROM.x, y: FROM.y, tx: BASE.x, ty: BASE.y };
  let W = 2, H = 2, pat = null, PW = 0, PH = 0, dot = null, B = { x: 0, y: 0, w: 0, h: 0 };
  let inten = 0, tInten = 1, intro = reduce ? 1 : 0, t0 = 0, last = 0, lastMove = 0, moved = false;
  let running = false, onScreen = true, started = false;
  const motes = [];
  const img = () => bottle.querySelector('.b-img');

  function star(g, x, y, r) {
    g.beginPath();
    for (let k = 0; k < 16; k++) { const a = k * Math.PI / 8, rr = k % 2 ? r * .765 : r; g[k ? 'lineTo' : 'moveTo'](x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
    g.closePath(); g.fill();
  }

  // la celosía: estrellas de ocho puntas y rombos pequeños en los cruces; la ventana se apaga hacia los bordes
  function buildPattern() {
    const cell = Math.max(16, Math.min(W * .5, H * .8) / 9);
    const cols = 6, rows = 8;
    PW = Math.round(cell * cols); PH = Math.round(cell * rows);
    pat = document.createElement('canvas'); pat.width = PW; pat.height = PH;
    const g = pat.getContext('2d');
    g.fillStyle = '#ffdc9c';
    if ('filter' in g) g.filter = `blur(${Math.max(.8, cell * .03).toFixed(1)}px)`;
    for (let r = 0; r <= rows; r++) for (let c = 0; c <= cols; c++) {
      if (r < rows && c < cols) star(g, (c + .5) * cell, (r + .5) * cell, cell * .31);
      const x = c * cell, y = r * cell, s = cell * .1;
      g.beginPath(); g.moveTo(x, y - s); g.lineTo(x + s, y); g.lineTo(x, y + s); g.lineTo(x - s, y); g.closePath(); g.fill();
    }
    g.filter = 'none';
    g.globalCompositeOperation = 'destination-in';
    const grd = g.createRadialGradient(PW / 2, PH * .42, 0, PW / 2, PH * .45, Math.max(PW, PH) * .6);
    grd.addColorStop(0, '#000'); grd.addColorStop(.5, 'rgba(0,0,0,.8)'); grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd; g.fillRect(0, 0, PW, PH);
  }

  function buildDot() {
    dot = document.createElement('canvas'); dot.width = dot.height = 32;
    const g = dot.getContext('2d'), r = g.createRadialGradient(16, 16, 0, 16, 16, 16);
    r.addColorStop(0, 'rgba(255,244,214,1)'); r.addColorStop(.3, 'rgba(255,220,160,.6)'); r.addColorStop(1, 'rgba(255,200,120,0)');
    g.fillStyle = r; g.fillRect(0, 0, 32, 32);
  }

  function seedMotes() {
    motes.length = 0;
    const n = W < 320 ? 34 : 70;
    for (let i = 0; i < n; i++) motes.push({ t: Math.random(), w: Math.random() * 2 - 1, s: .5 + Math.random() * 1.3, vt: (Math.random() - .5) * .0005 + .00012, vw: (Math.random() - .5) * .0008, ph: Math.random() * 6.28, sp: .5 + Math.random() * 1.5 });
  }

  function measure() {
    const r = hero.getBoundingClientRect(), b = img().getBoundingClientRect();
    const nw = Math.max(2, Math.round(r.width * Q)), nh = Math.max(2, Math.round(r.height * Q));
    const resized = nw !== W || nh !== H;
    W = cv.width = nw; H = cv.height = nh;
    B = { x: (b.left - r.left) * Q, y: (b.top - r.top) * Q, w: b.width * Q, h: b.height * Q };
    if (resized || !pat) { buildPattern(); seedMotes(); }
    if (!running) draw(performance.now());
  }

  function drawPat(px, py, sk, st) {
    ctx.save(); ctx.translate(px, py); ctx.transform(1, 0, sk, st, 0, 0); ctx.drawImage(pat, -PW / 2, -PH / 2); ctx.restore();
  }

  function draw(now) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1; ctx.filter = 'none';
    ctx.clearRect(0, 0, W, H);
    const sx = sun.x * W, sy = sun.y * H;
    const bx = B.x + B.w / 2, by = B.y + B.h * .45;
    if (pat && inten > .004) {
      // el dibujo se mueve al contrario que el sol y se alarga en la dirección de la luz
      const px = bx - (sun.x - BASE.x) * W * .4, py = by - (sun.y - BASE.y) * H * .4 - B.h * .06;
      const vx = px - sx, vy = py - sy, len = Math.hypot(vx, vy) || 1;
      const sk = Math.max(-1.1, Math.min(1.1, vx / Math.max(40, vy))) * .42;
      const st = 1.04 + Math.min(.3, Math.abs(vx) / len * .3);
      const breath = .92 + .08 * Math.sin(now * .0011);
      ctx.globalCompositeOperation = 'lighter';
      const N = W < 420 ? 8 : 13;
      for (let i = N; i >= 1; i--) {
        const s = 1 - i * (.52 / N);
        ctx.setTransform(s, 0, 0, s, sx * (1 - s), sy * (1 - s));
        ctx.globalAlpha = inten * .075 * (1 - i / (N + 3));
        drawPat(px, py, sk, st);
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = inten * .82 * breath;
      drawPat(px, py, sk, st);
      // sombra del frasco en la pared, desplazada lejos del sol
      const im = img();
      if (im.complete && im.naturalWidth && B.h > 0) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.globalAlpha = Math.min(1, inten * .95);
        if ('filter' in ctx) ctx.filter = `blur(${Math.max(2, B.w * .035).toFixed(1)}px)`;
        ctx.drawImage(im, B.x + vx / len * B.h * .2, B.y + vy / len * B.h * .05 - B.h * .03, B.w, B.h);
        ctx.filter = 'none';
      }
      // motas de polvo dorado dentro del haz
      ctx.globalCompositeOperation = 'lighter';
      const dt = Math.min(50, now - (last || now));
      const nx = -vy / len, ny = vx / len;
      for (const m of motes) {
        if (!reduce) {
          m.t += m.vt * dt * .06; m.w += m.vw * dt * .06 + Math.sin(now * .0006 + m.ph) * .0005;
          if (m.t > 1) m.t -= 1; if (m.t < 0) m.t += 1;
          if (m.w > 1 || m.w < -1) { m.vw *= -1; m.w = Math.max(-1, Math.min(1, m.w)); }
        }
        const tt = .3 + m.t * .85;
        const half = PW * .55 * tt;
        const x = sx + vx * tt + nx * m.w * half, y = sy + vy * tt + ny * m.w * half;
        if (x < -8 || y < -8 || x > W + 8 || y > H + 8) continue;
        const tw = .5 + .5 * Math.sin(now * .0018 * m.sp + m.ph);
        ctx.globalAlpha = inten * tw * (1 - Math.abs(m.w) * .75) * .85;
        const r = m.s * (W < 420 ? 2.4 : 3.2);
        ctx.drawImage(dot, x - r, y - r, r * 2, r * 2);
      }
    }
    last = now;
    vars(sx, sy, bx, by);
  }

  // variables para el frasco del DOM: brillo, dibujo de luz encima, borde iluminado y sombra en el suelo
  let pv = '';
  function vars(sx, sy, bx, by) {
    const dx = sx - bx, dy = sy - by;
    const ang = Math.atan2(dx, -dy) * 180 / Math.PI;
    const sk = Math.max(-62, Math.min(62, dx / (Math.abs(dy) + 1) * 40));
    const v = `${inten.toFixed(3)}|${((sun.x - BASE.x) / .3).toFixed(3)}|${((sun.y - BASE.y) / .3).toFixed(3)}|${ang.toFixed(1)}|${sk.toFixed(1)}`;
    if (v === pv) return; pv = v;
    const [l, lx, ly] = v.split('|');
    stage.style.setProperty('--lit', l); stage.style.setProperty('--lx', lx); stage.style.setProperty('--ly', ly);
    stage.style.setProperty('--ang', ang.toFixed(1) + 'deg'); stage.style.setProperty('--sk', sk.toFixed(1) + 'deg');
  }

  function tick(now) {
    if (!running) return;
    requestAnimationFrame(tick);
    if (intro < 1) {
      intro = Math.min(1, (now - t0) / 2800);
      const e = 1 - Math.pow(1 - intro, 3);
      sun.x = FROM.x + (BASE.x - FROM.x) * e; sun.y = FROM.y + (BASE.y - FROM.y) * e;
      sun.tx = sun.x; sun.ty = sun.y;
      inten = Math.min(1, intro * 1.5) * tInten;
      if (intro === 1) setTimeout(() => { if (!moved && hint) hint.classList.add('on'); }, 900);
    } else {
      if (!moved || now - lastMove > 6000) { sun.tx = BASE.x + Math.sin(now * .00012) * .17; sun.ty = BASE.y + Math.cos(now * .0001) * .07; }
      const k = 1 - Math.pow(.935, Math.min(50, now - (last || now)) / 16.7);
      sun.x += (sun.tx - sun.x) * k; sun.y += (sun.ty - sun.y) * k;
      inten += (tInten - inten) * k * .8;
    }
    draw(now);
  }

  function run(on) {
    on = on && onScreen && !document.hidden && started && !reduce;
    if (on === running) return;
    running = on; if (on) { last = 0; requestAnimationFrame(tick); }
  }

  function move(e) {
    const r = hero.getBoundingClientRect();
    const fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
    // el dibujo de luz va hacia donde está el cursor: el sol se mueve al lado contrario
    sun.tx = 1.24 - fx * .7; sun.ty = -.06 - fy * .5;
    moved = true; lastMove = performance.now();
    if (hint) hint.classList.remove('on');
    if (reduce) { sun.x = sun.tx; sun.y = sun.ty; draw(lastMove); }
  }
  if (fine) hero.addEventListener('pointermove', move, { passive: true });
  else stage.addEventListener('pointermove', (e) => { if (e.pointerType !== 'mouse') move(e); }, { passive: true });

  new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; run(true); }).observe(hero);
  document.addEventListener('visibilitychange', () => run(true));
  let rz = 0;
  new ResizeObserver(() => { cancelAnimationFrame(rz); rz = requestAnimationFrame(measure); }).observe(hero);

  function start() {
    if (started) return; started = true;
    buildDot(); measure();
    t0 = performance.now();
    if (reduce) { sun.x = BASE.x; sun.y = BASE.y; inten = 1; draw(t0); return; }
    run(true);
  }
  const im = img();
  (im.complete ? Promise.resolve() : im.decode().catch(() => {})).then(() => requestAnimationFrame(start));
  setTimeout(start, 2500);

  window.LIGHT = {
    measure,
    dim(v) { tInten = v; if (reduce) { inten = v; draw(performance.now()); } }
  };
})();
