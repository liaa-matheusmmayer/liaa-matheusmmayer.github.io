/* Desenha os gráficos e as tabelas do site a partir de window.DADOS (data.js). */
(() => {
  const D = window.DADOS;
  const NS = "http://www.w3.org/2000/svg";
  const fmt = (v, d = 2) => (v == null || Number.isNaN(v) ? "—" : Number(v).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d }));
  const pct = (v) => (v == null ? "—" : `${Math.round(v * 100)}%`);
  const hours = (v) => (v == null ? "—" : `${Math.round(v)} h`);
  const el = (tag, attrs = {}, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (parent) parent.appendChild(n);
    return n;
  };
  const SHORT = {
    "Regra do operador (-27 dBm)": "Regra -27 dBm",
    "Queda nas 24 h anteriores (ingênuo)": "Ingênuo",
    "Limiar fixo (regra)": "Limiar (treino)",
    "Z-score móvel 24 h": "Z-score",
    "Sazonal + resíduo": "Sazonal",
    "CUSUM": "CUSUM",
    "Isolation Forest": "Isolation Forest",
    "Random Forest (supervisionado)": "Random Forest",
    "Random Forest + histórico de quedas": "RF + histórico",
  };

  /* ---------------- técnicas */
  const TECHS = [
    ["regra", "Regra do operador", "Alerta quando o Rx fica abaixo de -27 dBm. É o que o provedor faz hoje."],
    ["linha de base", "Ingênuo", "A ONU caiu nas últimas 24 h? Então avisa. Não olha o sinal: mede quanto as outras acrescentam."],
    ["estatística", "Z-score móvel", "Quantos desvios-padrão o Rx da hora está abaixo da média das 24 h anteriores."],
    ["estatística", "Sazonal + resíduo", "Tira o nível da ONU e o perfil por hora do dia (tipo STL) e olha o que sobra."],
    ["estatística", "CUSUM", "Soma as quedas do resíduo ao longo do tempo: pega mudança de nível pequena e persistente."],
    ["não supervisionado", "Isolation Forest", "Aprende como é uma hora normal (nível, variação, tendência) e pontua o quão estranha cada hora é."],
    ["supervisionado", "Random Forest", "Aprende com as quedas do treino quais padrões vêm antes de um LINK LOSS; com e sem o histórico de quedas."],
    ["linguagem", "Gemini (filtro)", "Lê cada alerta com o contexto da hora e decide acionar ou não, explicando o tipo de problema.", true],
    ["nova", "Microcortes", "Conta as horas em que o mínimo cai 3 dB ou mais abaixo da média: piscadas que o status não registra.", true],
    ["nova", "Lista semanal", "Combina LINK LOSS recente, microcortes, Rx baixo, instabilidade e falta de leitura numa lista de risco por ONU.", true],
  ];
  const techs = document.getElementById("techs");
  for (const [fam, name, text, isNew] of TECHS) {
    const c = document.createElement("div");
    c.className = `tech reveal${isNew ? " new" : ""}`;
    c.innerHTML = `<span class="fam">${fam}</span><h4>${name}</h4><p>${text}</p>`;
    techs.appendChild(c);
  }

  /* ---------------- osciloscópio */
  const CAPTIONS = {
    microcortes: (s) => {
      const before = s.pontos.filter((p) => p.h < 0 && p.avg != null);
      const level = before.map((p) => p.avg).sort((a, b) => a - b)[Math.floor(before.length / 2)];
      const dip = before.reduce((a, p) => (p.min != null && (a == null || p.min < a.min) ? p : a), null);
      return `<b>${s.onu}</b>: opera em ${fmt(level, 1)} dBm, já abaixo da regra de -27. ${-dip.h} h antes do LINK LOSS, o mínimo da hora despenca para ${fmt(dip.min, 1)} dBm enquanto a média quase não muda: um microcorte, o precursor mais comum que encontramos.`;
    },
    subita: (s) => {
      const before = s.pontos.filter((p) => p.h < 0 && p.avg != null).map((p) => p.avg);
      return `<b>${s.onu}</b>: o sinal fica entre ${fmt(Math.max(...before), 1)} e ${fmt(Math.min(...before), 1)} dBm até o LINK LOSS. Nada no Rx anuncia a queda: é o caso mais comum, e nenhuma técnica hora a hora tem como avisar.`;
    },
  };
  const scope = document.getElementById("scope");
  function drawScope(i) {
    const s = D.sinais[i];
    scope.innerHTML = "";
    const W = 640, Hh = 300, m = { l: 44, r: 14, t: 16, b: 30 };
    // Hora com leitura sentinela (0 dBm) puxa a média para cima: fica fora do desenho.
    const avgs = s.pontos.map((p) => p.avg).filter((v) => v != null).sort((a, b) => a - b);
    const median = avgs[Math.floor(avgs.length / 2)];
    const pts = s.pontos.map((p) => (p.avg != null && p.avg > median + 6 ? { ...p, avg: null, min: null } : p));
    const vals = pts.flatMap((p) => [p.avg, p.min]).filter((v) => v != null && v < -5);
    let lo = Math.floor(Math.min(...vals) - 1), hi = Math.ceil(Math.max(...vals) + 1);
    if (hi - lo < 6) { const mid = (hi + lo) / 2; lo = Math.floor(mid - 3); hi = Math.ceil(mid + 3); }
    const h0 = pts[0].h, h1 = pts[pts.length - 1].h;
    const x = (h) => m.l + ((h - h0) / (h1 - h0)) * (W - m.l - m.r);
    const y = (v) => m.t + ((hi - v) / (hi - lo)) * (Hh - m.t - m.b);
    const g = el("g", { class: "grid" }, scope);
    for (let v = lo; v <= hi; v += 1) el("line", { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v) }, g);
    for (let h = Math.ceil(h0 / 6) * 6; h <= h1; h += 6) el("line", { x1: x(h), x2: x(h), y1: m.t, y2: Hh - m.b }, g);
    const ax = el("g", { class: "axis" }, scope);
    const step = hi - lo > 8 ? 2 : 1;
    for (let v = lo; v <= hi; v += step) el("text", { x: m.l - 8, y: y(v) + 3.5, "text-anchor": "end" }, ax).textContent = v;
    for (let h = Math.ceil(h0 / 6) * 6; h <= h1; h += 6) el("text", { x: x(h), y: Hh - 10, "text-anchor": "middle" }, ax).textContent = h === 0 ? "queda" : `${h} h`;
    // Cada trecho fora do ar (LINK LOSS) pintado à parte; a queda do exemplo começa em h = 0.
    let run = null;
    const runs = [];
    for (const p of pts) {
      if (p.los) run = run ? { ...run, to: p.h } : { from: p.h, to: p.h };
      else if (run) { runs.push(run); run = null; }
    }
    if (run) runs.push(run);
    for (const r of runs) {
      el("rect", { class: "los", x: x(r.from), y: m.t, width: Math.max(4, x(Math.min(r.to + 1, h1)) - x(r.from)), height: Hh - m.t - m.b, opacity: r.from === 0 ? 1 : 0.5 }, scope);
    }
    el("line", { class: "los-line", x1: x(0), x2: x(0), y1: m.t, y2: Hh - m.b }, scope);
    el("text", { class: "los-label", x: x(0) - 6, y: m.t + 12, "text-anchor": "end" }, scope).textContent = "LINK LOSS";
    const path = (key) => {
      let d = "", pen = false;
      for (const p of pts) {
        const v = p[key];
        if (v == null || v > -5 || p.los) { pen = false; continue; }
        d += `${pen ? "L" : "M"}${x(p.h).toFixed(1)},${y(v).toFixed(1)}`;
        pen = true;
      }
      return d;
    };
    el("path", { class: "trace-min", d: path("min") }, scope);
    const tr = el("path", { class: "trace draw", d: path("avg") }, scope);
    tr.style.setProperty("--len", Math.ceil(tr.getTotalLength ? tr.getTotalLength() : 2000));
    el("text", { class: "mark-label", x: W - m.r, y: Hh - m.b - 8, "text-anchor": "end", opacity: 0.6 }, scope).textContent = "— média   - - mínimo da hora";
    document.getElementById("scope-cap").innerHTML = CAPTIONS[s.tipo](s);
  }
  document.querySelectorAll("[data-sinal]").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll("[data-sinal]").forEach((o) => o.setAttribute("aria-selected", String(o === b)));
    drawScope(Number(b.dataset.sinal));
  }));
  drawScope(0);

  /* ---------------- 5.1 dispersão + tabela horária */
  function rodada(key) {
    if (key === "primeiro") {
      return D.primeiro.map((r) => ({
        nome: r.criterio.startsWith("regra") ? "Regra do operador (-27 dBm)" : r.detector,
        avisos: r.episodios, det: r.detectados, ev: r.eventos, fpd: r.falsos_por_dia, f1: r.f1, lead: r.antecedencia_mediana_h,
        prec: r.precisao,
      }));
    }
    return D.melhorias.filter((r) => r.etapa === "E0").map((r) => ({
      nome: r.tecnica, avisos: r.avisos, det: r.quedas_avisadas, ev: r.quedas, fpd: r.falsos_por_dia, f1: r.f1,
      lead: r.antecedencia_mediana_h, prec: r.precisao,
    }));
  }
  const scatter = document.getElementById("scatter");
  function drawScatter(rows) {
    scatter.innerHTML = "";
    const W = 900, Hh = 360, m = { l: 56, r: 24, t: 18, b: 44 };
    const svg = el("svg", { viewBox: `0 0 ${W} ${Hh}`, role: "img", "aria-label": "Quedas avisadas por falsos por dia" }, scatter);
    const lx = (v) => Math.log10(Math.max(v, 0.5));
    const x0 = lx(0.5), x1 = lx(150);
    const x = (v) => m.l + ((lx(v) - x0) / (x1 - x0)) * (W - m.l - m.r);
    const y = (v) => m.t + (1 - v) * (Hh - m.t - m.b);
    for (const t of [1, 3, 10, 30, 100]) {
      el("line", { class: "gl", x1: x(t), x2: x(t), y1: m.t, y2: Hh - m.b }, svg);
      el("text", { class: "lbl", x: x(t), y: Hh - m.b + 18, "text-anchor": "middle" }, svg).textContent = t;
    }
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      el("line", { class: "gl", x1: m.l, x2: W - m.r, y1: y(t), y2: y(t) }, svg);
      el("text", { class: "lbl", x: m.l - 10, y: y(t) + 4, "text-anchor": "end" }, svg).textContent = `${t * 100}%`;
    }
    el("text", { class: "lbl", x: (W + m.l) / 2, y: Hh - 6, "text-anchor": "middle" }, svg).textContent = "alarmes falsos por dia (escala log) →";
    el("text", { class: "lbl", x: 14, y: m.t + 4, transform: `rotate(-90 14 ${m.t + 4})`, "text-anchor": "end" }, svg).textContent = "← quedas avisadas";
    const placed = [];
    rows.forEach((r, i) => {
      const rec = r.ev ? r.det / r.ev : 0;
      const cx = x(r.fpd), cy = y(rec);
      const best = r.f1 === Math.max(...rows.map((o) => o.f1));
      const c = el("circle", { class: "pt", cx, cy, r: best ? 8 : 6, fill: best ? "var(--amber)" : "var(--blue)", "fill-opacity": best ? 1 : 0.75, stroke: "var(--bg)", "stroke-width": 2 }, svg);
      el("title", {}, c).textContent = `${r.nome}: ${r.det}/${r.ev} quedas, ${fmt(r.fpd, 1)} falsos/dia, F1 ${fmt(r.f1)}`;
      let ly = cy - 12;
      while (placed.some((p) => Math.abs(p.y - ly) < 13 && Math.abs(p.x - cx) < 110)) ly -= 13;
      placed.push({ x: cx, y: ly });
      const t = el("text", { x: cx, y: ly, "text-anchor": cx > W - 120 ? "end" : "middle" }, svg);
      t.textContent = SHORT[r.nome] || r.nome;
      if (best) t.setAttribute("fill", "var(--amber)");
    });
  }
  function drawHourlyTable(rows, key) {
    const best = Math.max(...rows.map((r) => r.f1));
    document.getElementById("tab-horaria").innerHTML = `
      <thead><tr><th>Técnica</th><th class="n">Avisos</th><th class="n">Quedas avisadas</th><th class="n">Falsos</th><th class="n">Falsos/dia</th><th class="n">Precisão</th><th class="n">F1</th><th class="n">Antecedência</th></tr></thead>
      <tbody>${rows.map((r) => `<tr class="${r.f1 === best ? "best" : ""}">
        <td class="tecnica">${r.nome}</td><td class="n">${r.avisos}</td><td class="n">${r.det}/${r.ev}</td>
        <td class="n">${Math.round(r.avisos * (1 - r.prec))}</td><td class="n">${fmt(r.fpd, 1)}</td><td class="n">${pct(r.prec)}</td>
        <td class="n">${fmt(r.f1)}</td><td class="n">${hours(r.lead)}</td></tr>`).join("")}</tbody>`;
    document.getElementById("nota-horaria").innerHTML = key === "primeiro"
      ? "7 dias de sinal (o que o Zabbix guardava), treino nos 3 primeiros. 24 quedas no teste. Isolation Forest com o melhor F1 (0,30), mas ainda 9 falsos por dia."
      : "Com 3 semanas (treino 27/10–03/11, teste 09–17/11), os resultados <b>pioraram</b>: 12 quedas avaliáveis no teste, de ONUs diferentes das do treino, e duas quedas de energia em massa que geraram centenas de alertas. O F1 de todas fica entre 0,00 e 0,05.";
  }
  function showRodada(key) {
    const rows = rodada(key);
    drawScatter(rows);
    drawHourlyTable(rows, key);
  }
  document.querySelectorAll("[data-rodada]").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll("[data-rodada]").forEach((o) => o.setAttribute("aria-selected", String(o === b)));
    showRodada(b.dataset.rodada);
  }));
  showRodada("primeiro");

  /* ---------------- 5.2 diagnóstico */
  const CAUSES = [
    ["cronico", "Sinal baixo crônico"], ["pos_retorno", "Logo após religar"], ["pon", "Variação da PON"],
    ["oscilacao", "Oscilação na hora"], ["repetitiva", "ONU repetitiva"], ["sem_causa", "Sem causa"],
  ];
  const heat = (v) => `background: rgba(245,165,36,${(v / 100) * 0.62}); color: ${v > 55 ? "#15110a" : "var(--ink)"}`;
  document.getElementById("tab-diag").innerHTML = `
    <thead><tr><th>Técnica</th><th class="n">Falsos</th><th class="n">ONUs</th>${CAUSES.map(([, l]) => `<th class="n">${l}</th>`).join("")}</tr></thead>
    <tbody>${D.diagnostico.map((r) => `<tr><td class="tecnica">${r.detector}</td><td class="n">${r.falsos}</td><td class="n">${r.onus_com_falso}</td>
      ${CAUSES.map(([k]) => `<td class="h" style="${heat(r[k])}">${r[k]}%</td>`).join("")}</tr>`).join("")}</tbody>`;

  /* ---------------- 5.3 ablação */
  const STAGE = { E0: "Original", E1: "+ sinal relativo", E2: "+ quarentena 6 h", E3: "+ aviso único 24 h" };
  const maxAv = Math.max(...D.melhorias.map((r) => r.avisos));
  let last = "";
  document.getElementById("tab-ablacao").innerHTML = `
    <thead><tr><th>Técnica</th><th>Etapa</th><th class="n">Avisos</th><th class="n">Quedas avisadas</th><th class="n">Falsos/dia</th><th class="n">F1</th></tr></thead>
    <tbody>${D.melhorias.map((r) => {
      const first = r.tecnica !== last;
      last = r.tecnica;
      return `<tr class="${first ? "group" : ""}"><td class="tecnica">${first ? r.tecnica : ""}</td><td>${STAGE[r.etapa]}</td>
        <td class="n">${r.avisos}<span class="mini" style="width:${Math.max(2, (r.avisos / maxAv) * 90)}px"></span></td>
        <td class="n">${r.quedas_avisadas}/${r.quedas}</td><td class="n">${fmt(r.falsos_por_dia, 1)}</td><td class="n">${fmt(r.f1)}</td></tr>`;
    }).join("")}</tbody>`;

  /* ---------------- 5.5 lista semanal */
  const bars = document.getElementById("bars");
  function drawBars(k) {
    bars.innerHTML = "";
    const rows = D.semanal.filter((r) => r.k === k).sort((a, b) => b.x_acaso - a.x_acaso || a.tecnica.localeCompare(b.tecnica));
    const mx = Math.max(...rows.map((r) => r.x_acaso), 1);
    bars.innerHTML = `<div class="hbars" role="list" aria-label="Lista semanal: vezes melhor que o acaso">${rows.map((r) => `
      <div class="hbar${r.x_acaso === mx ? " lead" : ""}" role="listitem">
        <span class="hb-name">${r.tecnica}</span>
        <span class="hb-track"><i style="width:${Math.max(0.5, (r.x_acaso / mx) * 100)}%"></i></span>
        <span class="hb-val">${fmt(r.x_acaso, 1)}× · ${r.acertos}/${r.caidas}</span>
      </div>`).join("")}</div>
      <p class="hb-axis">vezes melhor que uma lista sorteada · quedas na lista / quedas na semana</p>`;
  }
  document.querySelectorAll("[data-k]").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll("[data-k]").forEach((o) => o.setAttribute("aria-selected", String(o === b)));
    drawBars(Number(b.dataset.k));
  }));
  drawBars(10);

  /* ---------------- entrada ao rolar */
  document.querySelectorAll(".result, .timeline li, .rule, .fact, .next li, .sec-head").forEach((n) => n.classList.add("reveal"));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
})();
