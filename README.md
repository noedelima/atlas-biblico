# Atlas Bíblico Interativo

Estudo interativo da Escritura que consolida **texto, tempo, território e genealogia** num só ambiente, com a leitura *mainstream* sempre visível e camadas opcionais por cima — variantes textuais, geografia histórica, atestação arqueológica — cada afirmação com **proveniência explícita** e grau de confiança.

**Site:** https://noedelima.github.io/atlas-biblico/

## O ambiente de estudo (MVP F1 — Gênesis 1–11)

| Página | O que mostra |
|---|---|
| [`atlas.html`](https://noedelima.github.io/atlas-biblico/atlas.html) | A **espinha narrativa**: as doze perícopes de Gn 1–11 em leitura contínua (Almeida), com **paralelos do cânon** por perícope, sincronizadas com **três visões** — **Tempo** (Adão → Abrão em *Anno Mundi*, com Dilúvio e a faixa de Babel nos dias de Pelegue), **Mapa** (do Éden a Harã sobre o mundo antigo, com a rota de Terá Ur → Harã → Canaã) e **Genealogia** (as duas escadas de gerações, Gn 5 e Gn 11). O seletor TM · LXX · PS reorganiza tudo ao vivo. |

Os dados vivem fora do HTML, em [`dados.js`](dados.js) — o primeiro passo do **grafo de conhecimento**: pessoas, lugares, eventos, perícopes e **Afirmações como cidadãs de primeira classe** (cada identificação/data carrega fonte e confiança: *atestado · provável · debatido · derivado*). Os *cruxes* clássicos estão anotados: Matusalém 167/187 na LXX, o **Cainã (II)** que só existe na LXX (e em Lc 3:36), o nascimento de Sem derivado de Gn 11:10, o crux Terá 70/130 (At 7:4).

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

Tudo é **HTML + JS puro, sem dependências e sem build** — abra e use (funciona até de `file://`).

## Roadmap

- ✅ **F0** — protótipos de prova (Gn 5 · Gn 10)
- ✅ **F1** — MVP Gênesis 1–11: grafo de conhecimento (`dados.js`) + três visões sincronizadas (tempo, mapa, genealogia) sobre a espinha narrativa
- **F1.1** — refinamento: gazetteers acadêmicos (Pleiades · OpenBible · STEPBible), texto integral por perícope, mais afirmações estruturadas
- **F2** — Patriarcas (Gn 12–50): as migrações de Abraão, Isaque e Jacó no mapa-tempo
- **F3+** — expansão progressiva, Gênesis → Apocalipse

## Fontes e licenças de conteúdo

| Fonte | Uso | Licença |
|---|---|---|
| Bíblia Almeida (edição em domínio público) | transcrições provisórias dos versículos | Domínio público |
| [Natural Earth](https://www.naturalearthdata.com/) | geometria de costas/rios do basemap | Domínio público |
| Identificações dos povos e lugares | tradicionais/debatidas, sinalizadas por confiança | — |

As identificações históricas são as tradicionais e estão marcadas por grau de confiança; o refinamento contra fontes acadêmicas (gazetteer Pleiades, OpenBible, STEPBible) está planejado para a F1.1. A tradução de estudo (Bíblia de Jerusalém) entra como *overlay privado*, por direito autoral.

## Licença

Código sob [licença MIT](LICENSE). Conteúdo de terceiros conforme a tabela acima.

---

© 2026 [Noé de Lima Bezerra](https://github.com/noedelima)
