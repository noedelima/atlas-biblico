# Atlas Bíblico Interativo

Estudo interativo da Escritura que consolida **texto, tempo, território e genealogia** num só ambiente, com a leitura *mainstream* sempre visível e camadas opcionais por cima — variantes textuais, geografia histórica, atestação arqueológica — cada afirmação com **proveniência explícita** e grau de confiança.

**Site:** https://noedelima.github.io/atlas-biblico/

## O ambiente de estudo

| Módulo | Página | O que mostra |
|---|---|---|
| **F1 · Gênesis 1–11** | [`atlas.html`](https://noedelima.github.io/atlas-biblico/atlas.html) | A **espinha narrativa**: as doze perícopes de Gn 1–11 em leitura contínua (Almeida), com **paralelos do cânon** por perícope, sincronizadas com **três visões** — **Tempo** (Adão → Abrão em *Anno Mundi*, com Dilúvio e a faixa de Babel nos dias de Pelegue), **Mapa** (do Éden a Harã, com a rota de Terá) e **Genealogia** (as duas escadas de gerações, Gn 5 e Gn 11). O seletor TM · LXX · PS reorganiza tudo ao vivo. |
| **F2 · Patriarcas (Gn 12–50)** | [`patriarcas.html`](https://noedelima.github.io/atlas-biblico/patriarcas.html) | As **migrações no mapa-tempo**: as jornadas de **Abraão** (11 etapas, de Ur a Macpela), **Jacó** (10 etapas, ida e volta a Harã — Peniel, o nome Israel — e a descida ao Egito) e **José** (do poço em Dotã ao trono — e os ossos de volta a Siquém, Js 24:32). O texto conduz etapa por etapa; o mapa geral (Eufrates → Nilo), o detalhe de Canaã e a cronologia patriarcal respondem. |
| **F3 · Êxodo** | [`exodo.html`](https://noedelima.github.io/atlas-biblico/exodo.html) | A **rota do deserto** em três pernas e **18 etapas**: a saída (da Páscoa ao Sinai), a aliança no monte, e o caminho de Cades ao Nebo. Texto **integral** por etapa, mapa Egito–Sinai–Moabe com confiança por estação (a rota é a geografia mais debatida da Bíblia — e o atlas diz isso) e a **cronologia dos 40 anos** com eixo quebrado nos ~38 anos de silêncio narrativo (Dt 2:14). |

Os dados vivem fora do HTML, em [`dados.js`](dados.js), [`dados-patriarcas.js`](dados-patriarcas.js) e [`dados-exodo.js`](dados-exodo.js) — o **grafo de conhecimento**: pessoas, lugares, eventos, perícopes, jornadas e **Afirmações como cidadãs de primeira classe** (cada identificação/data carrega fonte e confiança: *atestado · provável · debatido · derivado*). Os *cruxes* clássicos estão anotados: Matusalém 167/187 na LXX, o **Cainã (II)** que só existe na LXX (e em Lc 3:36), o nascimento de Sem derivado de Gn 11:10, o crux Terá 70/130 (At 7:4), as idades derivadas de Jacó em Harã.

**Texto integral**: o diretório [`texto/`](texto/) é o corpus — [`core.js`](texto/core.js) (registro de livros + parser de referências: `"Gn 1:1–2:3"`, `"Nm 13:17-33; 14:26-35"`, `"Gn 22:2,14"`…) e um arquivo por livro. Hoje: **Gênesis, Êxodo, Números, Deuteronômio e Josué completos** (5.651 versículos, Bíblia Livre — revisão moderna e livre da Almeida, CC-BY 3.0 BR); cada página carrega só os livros de que precisa. Cada perícope, etapa e card oferece **“Ler o texto completo”** com numeração de versículos.

## Protótipos F0 (mantidos)

| Módulo | Página | O que mostra |
|---|---|---|
| 1 · Gênesis 5 | [`genesis5.html`](https://noedelima.github.io/atlas-biblico/genesis5.html) | Longevidades dos patriarcas antediluvianos em *Anno Mundi*, com as três tradições textuais como camadas e os *cruxes* clássicos anotados |
| 2 · Gênesis 10 | [`tabua-nacoes.html`](https://noedelima.github.io/atlas-biblico/tabua-nacoes.html) | A Tábua das Nações (~29 dos 70 povos) sobre mapa físico do mundo antigo; controle de tempo desliza da leitura de Gênesis à atestação na Idade do Ferro |

## Princípios

1. **Espinha canônica** — a leitura tradicional está sempre visível; o resto é opcional.
2. **Proveniência por afirmação** — nada é anônimo: cada identificação carrega fonte e confiança (cheio = atestado · tracejado = provável/debatido).
3. **Cronologia plural** — TM, LXX e PS são camadas, nunca um número único; datas em *Anno Mundi*.
4. **Acessibilidade** — WCAG 2.1 AA: operação completa por teclado (Tab/Enter/Esc/setas), leitor de tela, contraste verificado, formas além de cor, `prefers-reduced-motion`.

O site é **HTML + JS puro, sem build e sem dependências em runtime** — abra e use (funciona até de `file://`). O repositório tem **CI**: um teste de fumaça com navegador real ([`tests/smoke.js`](tests/smoke.js), Playwright/Chromium) roda a cada PR e valida console limpo, as cronologias das três tradições, o parser do texto integral e as jornadas.

## Roadmap

- ✅ **F0** — protótipos de prova (Gn 5 · Gn 10)
- ✅ **F1** — MVP Gênesis 1–11: grafo de conhecimento (`dados.js`) + três visões sincronizadas (tempo, mapa, genealogia) sobre a espinha narrativa
- ✅ **F2** — MVP Patriarcas (Gn 12–50): as jornadas de Abraão, Jacó e José no mapa-tempo
- ✅ **F3** — MVP Êxodo: a rota do deserto (Egito → Sinai → Cades → Moabe), com a cronologia dos 40 anos
- **Refinamento** — gazetteers acadêmicos (Pleiades · OpenBible · STEPBible), Isaque/Ismael/Esaú, mais afirmações estruturadas
- **F4** — Conquista e Juízes
- **F5+** — expansão progressiva, Gênesis → Apocalipse

## Fontes e licenças de conteúdo

| Fonte | Uso | Licença |
|---|---|---|
| [Bíblia Livre](https://sites.google.com/site/biblialivre/) (BLIVRE) | **texto integral** de Gn · Êx · Nm · Dt · Js, via eBible/getBible | CC-BY 3.0 BR |
| Bíblia Almeida (edição em domínio público) | trechos em destaque nas perícopes e cards | Domínio público |
| [Natural Earth](https://www.naturalearthdata.com/) | geometria de costas/rios do basemap | Domínio público |
| Identificações dos povos e lugares | tradicionais/debatidas, sinalizadas por confiança | — |

As identificações históricas são as tradicionais e estão marcadas por grau de confiança; o refinamento contra fontes acadêmicas (gazetteer Pleiades, OpenBible, STEPBible) está planejado como fase própria do roadmap. A tradução de estudo (Bíblia de Jerusalém) entra como *overlay privado*, por direito autoral.

## Licença

Código sob [licença MIT](LICENSE). Conteúdo de terceiros conforme a tabela acima.

---

© 2026 [Noé de Lima Bezerra](https://github.com/noedelima)
