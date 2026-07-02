# Guia de voz — textos das páginas

Este guia separa dois registros que convivem no projeto e **não podem se misturar**:

| Registro | Onde vive | Para quem |
|---|---|---|
| **Especificação** | README, issues, PRs, comentários de código, prompts de desenvolvimento | quem constrói o atlas |
| **Copy** | títulos, subtítulos, cards, chips, rodapés, meta descriptions — tudo que o visitante lê | quem visita o atlas |

A regra de ouro: **nenhuma frase de especificação vai para a interface.** O texto de um prompt, de um debate de design ou de um requisito descreve *como o produto funciona por dentro*; o texto da página convida alguém a *entrar e usar*. São gêneros diferentes, mesmo quando falam da mesma coisa.

## O leitor das páginas

Escreva para alguém que chegou por um link compartilhado, **sem contexto nenhum**: um leitor da Bíblia curioso, um catequista, um professor, um estudante. Ele não sabe (nem precisa saber) o que é "espinha canônica", "camada", "proveniência por afirmação", "TM · LXX · PS" sem explicação, "mainstream", "WCAG".

## Como escrever

- **Convide, não especifique.** Em vez de descrever a arquitetura ("leitura mainstream sempre visível e camadas opcionais por cima"), diga o que a pessoa vai *fazer e ver* ("leia a Escritura enquanto o mapa e a linha do tempo caminham com o texto").
- **Concreto vence abstrato.** "Do Éden à nova Jerusalém", "o mar se abre, o Sinai fala" — cenas, nomes e números falam mais que categorias ("variantes textuais", "atestação arqueológica").
- **Benefício antes de mecanismo.** O visitante quer saber *o que ganha* ("a Bíblia inteira, verso a verso, gratuito"); o mecanismo ("texto carregado sob demanda") só aparece se ajudar a confiança.
- **A honestidade é um valor da casa — diga-a em linguagem de leitor.** Em vez de "proveniência por afirmação", escreva "cada lugar e cada data mostram o quanto são seguros". O rigor continua; o jargão sai.
- **Siglas só com escada.** TM · LXX · PS podem aparecer *depois* de "as três tradições antigas do texto", nunca sozinhas na primeira frase de uma página.

## Termos proibidos na interface

`mainstream` · `espinha canônica/narrativa` · `camadas` (no sentido de arquitetura) · `proveniência por afirmação` · `MVP` · `protótipo` · `roadmap` · `placeholder` · `WCAG`/`AA` · códigos internos de fase (F1…F12) · qualquer frase copiada de prompt, requisito ou discussão de design.

(Todos continuam bem-vindos no README e nos PRs — lá o leitor é quem constrói.)

## Antes / depois (exemplo real)

> **Antes (especificação vazada):** "Estudo interativo da Escritura com a leitura mainstream sempre visível e camadas opcionais por cima: variantes textuais, geografia histórica e atestação arqueológica — cada afirmação com sua proveniência e grau de confiança."
>
> **Depois (copy):** "Leia a Escritura de Gênesis ao Apocalipse enquanto o mapa, a linha do tempo e a árvore genealógica caminham com o texto. Uma história única — do Éden à nova Jerusalém — com cada povo, cada lugar e cada data no seu ponto da jornada."

## Checklist de acabamento (toda rodada que tocar páginas)

1. Leia em voz alta cada texto novo visível ao visitante: soaria natural dito a alguém que nunca viu o projeto?
2. Procure os termos proibidos nas páginas (`grep` neles antes do commit).
3. Meta description e `og:description` são a vitrine no WhatsApp/Google — escreva-as como convite, com números concretos quando houver (73 livros, 52 povos).
4. Números citados na copy (livros, capítulos, versículos, povos) devem bater com os dados carregados — contagens envelhecem a cada rodada.
