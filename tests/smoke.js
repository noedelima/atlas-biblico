/* Teste de fumaça — Atlas Bíblico Interativo
   Abre cada página num Chromium real, exige console limpo e verifica
   invariantes do grafo de conhecimento (cronologias, texto integral,
   jornadas, rota do Êxodo). Roda local (CHROME_PATH opcional) e no CI. */
"use strict";
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const url = (f) => "file://" + path.join(ROOT, f);
const PAGES = ["index.html", "atlas.html", "patriarcas.html", "exodo.html", "genesis5.html", "tabua-nacoes.html"];

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
      check("5 módulos na landing", links.length === 5, links.join(","));
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

    const og = await page.$$eval('meta[property="og:title"]', (m) => m.length);
    check("meta Open Graph presente", og === 1);
  }

  await browser.close();
  console.log("\n" + (failures ? "FALHOU: " + failures + " verificação(ões)" : "OK: todas as verificações passaram"));
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
