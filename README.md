# Atlas Bíblico Interativo — protótipos

Estudo interativo da Escritura que consolida **texto, tempo, território e genealogia** num só ambiente, com a leitura *mainstream* sempre visível e camadas opcionais por cima — variantes textuais, geografia histórica, atestação arqueológica — cada afirmação com **proveniência explícita** e grau de confiança.

**Site:** https://noedelima.github.io/atlas-biblico/

## Módulos (fase F0 — protótipos de prova)

| Módulo | Página | O que mostra |
|---|---|---|
| 1 · Gênesis 5 | [`genesis5.html`](https://noedelima.github.io/atlas-biblico/genesis5.html) | Longevidades dos patriarcas antediluvianos em *Anno Mundi*, com as três tradições textuais (TM · LXX · Pentateuco Samaritano) como camadas selecionáveis e os *cruxes* clássicos anotados (Matusalém 167/187 na LXX) |
| 2 · Gênesis 10 | [`tabua-nacoes.html`](https://noedelima.github.io/atlas-biblico/tabua-nacoes.html) | A Tábua das Nações (~29 dos 70 povos) sobre mapa físico do mundo antigo, sem fronteiras modernas; controle de tempo desliza da leitura de Gênesis à atestação na Idade do Ferro |

## Princípios

1. **Espinha canônica** — a leitura tradicional está sempre visível; o resto é opcional.
2. **Proveniência por afirmação** — nada é anônimo: cada identificação carrega fonte e confiança (cheio = atestado · tracejado = provável).
3. **Cronologia plural** — TM, LXX e PS são camadas, nunca um número único; datas em *Anno Mundi*.
4. **Acessibilidade** — WCAG 2.1 AA: operação completa por teclado (Tab/Enter/Esc/setas), leitor de tela, contraste verificado programaticamente, formas além de cor nas linhagens (● Jafé · ■ Cam · ▲ Sem), `prefers-reduced-motion`.

Os protótipos são **HTML autocontidos, sem dependências e sem build** — abra e use.

## Roadmap

- ✅ **F0** — protótipos de prova (este repositório)
- **F1** — MVP Gênesis 1–11: grafo de conhecimento (Afirmação como cidadã de primeira classe) + três visões sincronizadas (tempo, mapa, genealogia)
- **F2** — Patriarcas (Gn 12–50): migrações no mapa-tempo
- **F3+** — expansão progressiva, Gênesis → Apocalipse

## Fontes e licenças de conteúdo

| Fonte | Uso | Licença |
|---|---|---|
| Bíblia Almeida (edição em domínio público) | transcrições provisórias dos versículos | Domínio público |
| [Natural Earth](https://www.naturalearthdata.com/) | geometria de costas/rios do basemap | Domínio público |
| Identificações dos povos | tradicionais/debatidas, sinalizadas por confiança | — |

As identificações históricas são as tradicionais e estão marcadas por grau de confiança; o refinamento contra fontes acadêmicas (gazetteer Pleiades, OpenBible, STEPBible) está planejado para a F1.

## Licença

Código sob [licença MIT](LICENSE). Conteúdo de terceiros conforme a tabela acima.

---

© 2026 [Noé de Lima Bezerra](https://github.com/noedelima)
