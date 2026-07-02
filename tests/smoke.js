/* Teste de fumaça — Atlas Bíblico Interativo
   Abre cada página num Chromium real, exige console limpo e verifica
   invariantes do grafo de conhecimento (cronologias, texto integral,
   jornadas, rota do Êxodo). Roda local (CHROME_PATH opcional) e no CI. */
"use strict";
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const url = (f) => "file://" + path.join(ROOT, f);
const PAGES = ["index.html", "atlas.html", "patriarcas.html", "exodo.html", "conquista.html", "monarquia.html", "reis.html", "exilio.html", "panorama.html", "evangelhos.html", "genesis5.html", "tabua-nacoes.html"];

let failures = 0;
function check(name, ok, extra) {
  console.log((ok ? "  ✓ " : "  ✗ ") + name + (ok || extra === undefined ? "" : " — " + extra));
  if (!ok) failures++;
}

(async () => {
  const opts = process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {};
  const browser = await chromium.launch(opts);
  const page = await browser.newPage({ viewport: { width: 1360, height: 900 } });
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));

  for (const f of PAGES) {
    errors.length = 0;
    console.log("\n" + f);
    await page.goto(url(f));
    await page.waitForTimeout(400);
    check("console limpo", errors.length === 0, errors.join(" | "));

    if (f === "index.html") {
      const links = await page.$$eval(".mods a.mod", (as) => as.map((a) => a.getAttribute("href")));
      check("11 módulos na landing", links.length === 11, links.join(","));
      const logo = await page.$$eval('img[src="assets/logo.svg"]', (m) => m.length);
      check("logo na landing", logo === 1);
    }

    if (f === "atlas.html") {
      const crono = await page.evaluate(() => {
        const r = {};
        ["TM", "LXX", "PS"].forEach((k) => {
          const c = window.ATLAS.crono(k);
          r[k] = { d: c.diluvio, a: c.pessoas.abrao.nasce };
        });
        return r;
      });
      check("Dilúvio TM=1656", crono.TM.d === 1656, JSON.stringify(crono.TM));
      check("Dilúvio LXX=2242", crono.LXX.d === 2242, JSON.stringify(crono.LXX));
      check("Dilúvio PS=1307", crono.PS.d === 1307, JSON.stringify(crono.PS));
      check("Abrão TM=1948", crono.TM.a === 1948);
      const texto = await page.evaluate(() => {
        const n = (r) => {
          const p = window.TEXTO.passagem(r);
          return p ? p.reduce((s, g) => s + g.versos.length, 0) : -1;
        };
        return { gn5: n("Gn 5"), criacao: n("Gn 1:1–2:3"), diluvio: n("Gn 6:9–8:22"), fora: n("Sl 23"),
                 gn: Object.keys(window.TEXTO.livro("Gn").caps).length };
      });
      check("texto: Gn 5 = 32 versos", texto.gn5 === 32, texto.gn5);
      check("texto: Gn 1:1–2:3 = 34 versos", texto.criacao === 34, texto.criacao);
      check("texto: Gn 6:9–8:22 = 60 versos", texto.diluvio === 60, texto.diluvio);
      check("texto: fora do corpus → null", texto.fora === -1);
      check("Gênesis completo (50 capítulos)", texto.gn === 50, texto.gn);
      const leituras = await page.$$eval("#spine details.leitura", (d) => d.length);
      check("12 perícopes com leitura integral", leituras === 12, leituras);
    }

    if (f === "patriarcas.html") {
      const jorn = await page.evaluate(() =>
        window.PATRIARCAS.JORN.map((j) => ({ id: j.id, n: j.etapas.length })));
      check("3 jornadas", jorn.length === 3);
      check("Abraão 11 · Jacó 10 · José 6",
        jorn[0].n === 11 && jorn[1].n === 10 && jorn[2].n === 6, JSON.stringify(jorn));
      const js = await page.evaluate(() => {
        const p = window.TEXTO.passagem("Js 24:32");
        return p ? p[0].versos.length : -1;
      });
      check("texto: Js 24:32 disponível", js === 1, js);
      const leituras = await page.$$eval("#spine details.leitura", (d) => d.length);
      check("leitura integral nas etapas de Abraão", leituras >= 10, leituras);
      await page.click('.seg button[data-j="jose"]');
      await page.waitForTimeout(250);
      const ossos = await page.evaluate(() => {
        const arts = document.querySelectorAll("#spine .peri");
        const last = arts[arts.length - 1];
        return { titulo: last.textContent.includes("ossos"), leitura: !!last.querySelector("details.leitura") };
      });
      check("etapa dos ossos com leitura de Js 24:32", ossos.titulo && ossos.leitura, JSON.stringify(ossos));
      check("console limpo após interações", errors.length === 0, errors.join(" | "));
    }

    if (f === "exodo.html") {
      const dados = await page.evaluate(() => ({
        etapas: window.EXODO.ETAPAS.length,
        pernas: window.EXODO.PERNAS.length,
        porPerna: window.EXODO.PERNAS.map((p) => window.EXODO.ETAPAS.filter((e) => e.perna === p.id).length),
        livros: window.TEXTO.livros().join(","),
        decalogo: (window.TEXTO.passagem("Êx 20:1-21") || []).reduce((s, g) => s + g.versos.length, 0),
        dt34: (window.TEXTO.passagem("Dt 34") || []).reduce((s, g) => s + g.versos.length, 0)
      }));
      check("18 etapas em 3 pernas (7·3·8)", dados.etapas === 18 && dados.porPerna.join(",") === "7,3,8",
        JSON.stringify(dados.porPerna));
      check("livros Êx·Nm·Dt·Js carregados", dados.livros === "Êx,Nm,Dt,Js", dados.livros);
      check("texto: Êx 20:1-21 = 21 versos", dados.decalogo === 21, dados.decalogo);
      check("texto: Dt 34 = 12 versos", dados.dt34 === 12, dados.dt34);
      const leituras = await page.$$eval("#spine details.leitura", (d) => d.length);
      check("leitura integral nas etapas da saída", leituras === 7, leituras);
      // navegar até a última etapa (travessia) cruzando as pernas
      await page.evaluate(() => { location.hash = "#e18"; });
      await page.waitForTimeout(300);
      const fim = await page.evaluate(() => ({
        on: document.querySelector('[data-gi="17"]')?.dataset.on,
        perna: document.querySelector('.seg button[aria-checked="true"]')?.dataset.p
      }));
      check("deep link #e18 → travessia (perna 3)", fim.on === "1" && fim.perna === "terra", JSON.stringify(fim));
      check("console limpo após interações", errors.length === 0, errors.join(" | "));
    }

    if (f === "conquista.html") {
      const dados = await page.evaluate(() => ({
        etapas: window.CONQUISTA.ETAPAS.length,
        porPerna: window.CONQUISTA.PERNAS.map((p) => window.CONQUISTA.ETAPAS.filter((e) => e.perna === p.id).length),
        tribos: window.CONQUISTA.TRIBOS.length,
        jz: Object.keys(window.TEXTO.livro("Jz").caps).length,
        ultimo: (window.TEXTO.passagem("Jz 21:25") || []).reduce((s, g) => s + g.versos.length, 0)
      }));
      check("17 etapas em 3 atos (6·4·7)", dados.etapas === 17 && dados.porPerna.join(",") === "6,4,7",
        JSON.stringify(dados.porPerna));
      check("12 tribos na camada", dados.tribos === 12, dados.tribos);
      check("Juízes completo (21 capítulos)", dados.jz === 21, dados.jz);
      check("texto: Jz 21:25 disponível", dados.ultimo === 1, dados.ultimo);
      // etapa da terra repartida acende a camada das tribos
      await page.evaluate(() => { location.hash = "#e9"; });
      await page.waitForTimeout(300);
      const tribosOn = await page.evaluate(() =>
        document.getElementById("btntribos").getAttribute("aria-pressed") === "true");
      check("camada das tribos acende na etapa 9", tribosOn);
      const ciclo = await page.$$eval("#ciclo .cbox", (b) => b.length);
      check("diagrama do ciclo (4 fases)", ciclo === 4, ciclo);
      check("console limpo após interações", errors.length === 0, errors.join(" | "));
    }

    if (f === "monarquia.html") {
      const dados = await page.evaluate(() => ({
        etapas: window.MONARQUIA.ETAPAS.length,
        porPerna: window.MONARQUIA.PERNAS.map((p) => window.MONARQUIA.ETAPAS.filter((e) => e.perna === p.id).length),
        livros: window.TEXTO.livros().join(","),
        rt: (window.TEXTO.passagem("Rt 1:16-17") || []).reduce((s, g) => s + g.versos.length, 0),
        sm: (window.TEXTO.passagem("1Sm 3:1-14,19-21") || []).reduce((s, g) => s + g.versos.length, 0),
        promessa: (window.TEXTO.passagem("2Sm 7:12-16") || []).reduce((s, g) => s + g.versos.length, 0),
        linhagem: window.MONARQUIA.LINHAGEM.length
      }));
      check("19 etapas em 3 fios (4·7·8)", dados.etapas === 19 && dados.porPerna.join(",") === "4,7,8",
        JSON.stringify(dados.porPerna));
      check("livros Rt·1Sm·2Sm carregados", dados.livros === "Rt,1Sm,2Sm", dados.livros);
      check("texto: Rt 1:16-17 = 2 versos", dados.rt === 2, dados.rt);
      check("texto: 1Sm 3 (lista com vírgula) = 17 versos", dados.sm === 17, dados.sm);
      check("texto: 2Sm 7:12-16 = 5 versos", dados.promessa === 5, dados.promessa);
      const linh = await page.$$eval("#linhagem .lnode", (b) => b.length);
      check("linhagem Rute → Davi (5 nós)", linh === 5, linh);
      // navegar até a última etapa (a promessa) cruzando os fios
      await page.evaluate(() => { location.hash = "#e19"; });
      await page.waitForTimeout(300);
      const fim = await page.evaluate(() => ({
        on: document.querySelector('[data-gi="18"]')?.dataset.on,
        perna: document.querySelector('.seg button[aria-checked="true"]')?.dataset.p
      }));
      check("deep link #e19 → a promessa (fio Davi)", fim.on === "1" && fim.perna === "davi", JSON.stringify(fim));
      check("console limpo após interações", errors.length === 0, errors.join(" | "));
    }

    if (f === "reis.html") {
      const dados = await page.evaluate(() => ({
        etapas: window.REIS.ETAPAS.length,
        porPerna: window.REIS.PERNAS.map((p) => window.REIS.ETAPAS.filter((e) => e.perna === p.id).length),
        livros: window.TEXTO.livros().join(","),
        ancora: (window.TEXTO.passagem("1Rs 6:1") || [])[0]?.versos[0]?.t.includes("quatrocentos oitenta"),
        fim: (window.TEXTO.passagem("2Rs 25:27-30") || []).reduce((s, g) => s + g.versos.length, 0),
        ancoras: window.REIS.ANCORAS.eventos.length
      }));
      check("16 etapas em 3 atos (5·6·5)", dados.etapas === 16 && dados.porPerna.join(",") === "5,6,5",
        JSON.stringify(dados.porPerna));
      check("livros 1Rs·2Rs carregados", dados.livros === "1Rs,2Rs", dados.livros);
      check("texto: 1Rs 6:1 traz o ano 480", dados.ancora === true);
      check("texto: 2Rs 25:27-30 = 4 versos", dados.fim === 4, dados.fim);
      check("7 âncoras absolutas (a.C.)", dados.ancoras === 7, dados.ancoras);
      // e6 (divisão) acende a camada dos dois reinos
      await page.evaluate(() => { location.hash = "#e6"; });
      await page.waitForTimeout(300);
      const reinosOn = await page.evaluate(() =>
        document.getElementById("btnreinos").getAttribute("aria-pressed") === "true");
      check("camada Israel/Judá acende na divisão (e6)", reinosOn);
      // e16 (exílio) acende a seta para a Babilônia
      await page.evaluate(() => { location.hash = "#e16"; });
      await page.waitForTimeout(300);
      const fim2 = await page.evaluate(() => ({
        on: document.querySelector('[data-gi="15"]')?.dataset.on,
        perna: document.querySelector('.seg button[aria-checked="true"]')?.dataset.p
      }));
      check("deep link #e16 → o exílio (ato 3)", fim2.on === "1" && fim2.perna === "juda", JSON.stringify(fim2));
      check("console limpo após interações", errors.length === 0, errors.join(" | "));
    }

    if (f === "exilio.html") {
      const dados = await page.evaluate(() => ({
        etapas: window.EXILIO.ETAPAS.length,
        porPerna: window.EXILIO.PERNAS.map((p) => window.EXILIO.ETAPAS.filter((e) => e.perna === p.id).length),
        livros: window.TEXTO.livros().join(","),
        ossos: (window.TEXTO.passagem("Ez 37:1-14") || []).reduce((s, g) => s + g.versos.length, 0),
        fim: (window.TEXTO.passagem("Ml 4:5-6") || []).reduce((s, g) => s + g.versos.length, 0),
        ancoras: window.EXILIO.ANCORAS.eventos.length
      }));
      check("14 etapas em 3 movimentos (5·4·5)", dados.etapas === 14 && dados.porPerna.join(",") === "5,4,5",
        JSON.stringify(dados.porPerna));
      check("livros Dn·Ez·Ed·Ne·Et·Ml carregados", dados.livros === "Dn,Ez,Ed,Ne,Et,Ml", dados.livros);
      check("texto: Ez 37:1-14 = 14 versos", dados.ossos === 14, dados.ossos);
      check("texto: Ml 4:5-6 (o fecho do AT) = 2 versos", dados.fim === 2, dados.fim);
      check("8 âncoras do período", dados.ancoras === 8, dados.ancoras);
      await page.evaluate(() => { location.hash = "#e14"; });
      await page.waitForTimeout(300);
      const fim2 = await page.evaluate(() => ({
        on: document.querySelector('[data-gi="13"]')?.dataset.on,
        perna: document.querySelector('.seg button[aria-checked="true"]')?.dataset.p
      }));
      check("deep link #e14 → Malaquias (movimento 3)", fim2.on === "1" && fim2.perna === "muros", JSON.stringify(fim2));
      check("console limpo após interações", errors.length === 0, errors.join(" | "));
    }

    if (f === "panorama.html") {
      const eras = await page.$$eval("#pan a.era", (as) => as.map((a) => a.getAttribute("href")));
      check("7 eras clicáveis", eras.length === 7, eras.join(","));
      check("eras apontam para os 7 módulos",
        ["atlas.html","patriarcas.html","exodo.html","conquista.html","monarquia.html","reis.html","exilio.html"]
          .every((h) => eras.includes(h)), eras.join(","));
      const profs = await page.$$eval("#pan rect.prof", (r) => r.length);
      check("10 marcos proféticos posicionados", profs === 10, profs);
      const caps = await page.$$eval(".caps a", (as) => as.length);
      check("navegação em capítulos (9 links)", caps === 9, caps);
    }

    if (f === "evangelhos.html") {
      const dados = await page.evaluate(() => ({
        etapas: window.EVANGELHOS.ETAPAS.length,
        porPerna: window.EVANGELHOS.PERNAS.map((p) => window.EVANGELHOS.ETAPAS.filter((e) => e.perna === p.id).length),
        livros: window.TEXTO.livros().join(","),
        natal: (window.TEXTO.passagem("Lc 2:1-20") || []).reduce((s, g) => s + g.versos.length, 0),
        paixao: (window.TEXTO.passagem("Jo 19:16-30") || []).reduce((s, g) => s + g.versos.length, 0),
        verbo: (window.TEXTO.passagem("Jo 1:14") || [])[0]?.versos[0]?.t.includes("se fez carne")
      }));
      check("20 etapas em 3 movimentos (6·7·7)", dados.etapas === 20 && dados.porPerna.join(",") === "6,7,7",
        JSON.stringify(dados.porPerna));
      check("livros Mt·Mc·Lc·Jo carregados", dados.livros === "Mt,Mc,Lc,Jo", dados.livros);
      check("texto: Lc 2:1-20 = 20 versos", dados.natal === 20, dados.natal);
      check("texto: Jo 19:16-30 = 15 versos", dados.paixao === 15, dados.paixao);
      check("texto: Jo 1:14 — 'se fez carne'", dados.verbo === true);
      const insetPts = await page.$$eval("#cidade .lpt", (g) => g.length);
      check("esquema da Paixão com 6 pontos", insetPts === 6, insetPts);
      await page.evaluate(() => { location.hash = "#e18"; });
      await page.waitForTimeout(300);
      const fim = await page.evaluate(() => ({
        on: document.querySelector('[data-gi="17"]')?.dataset.on,
        perna: document.querySelector('.seg button[aria-checked="true"]')?.dataset.p
      }));
      check("deep link #e18 → Gólgota (Paixão)", fim.on === "1" && fim.perna === "paixao", JSON.stringify(fim));
      check("console limpo após interações", errors.length === 0, errors.join(" | "));
    }

    const og = await page.$$eval('meta[property="og:title"]', (m) => m.length);
    check("meta Open Graph presente", og === 1);
    const icone = await page.$$eval('link[rel="icon"][href="assets/icone.svg"]', (m) => m.length);
    check("favicon vetorial", icone === 1);
  }

  await browser.close();
  console.log("\n" + (failures ? "FALHOU: " + failures + " verificação(ões)" : "OK: todas as verificações passaram"));
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
