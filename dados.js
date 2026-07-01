/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F1 — grafo de conhecimento (Gn 1–11)
   A Afirmação é cidadã de primeira classe: toda identificação, data
   ou localização carrega fonte e grau de confiança.
   Conteúdo bíblico: Almeida (domínio público), transcrição provisória.
   ═══════════════════════════════════════════════════════════════════ */
window.ATLAS = (function(){
"use strict";

/* ── FONTES ─────────────────────────────────────────────────────── */
var FONTES = {
  tm:      {nome:"Texto Massorético",            tipo:"tradição textual"},
  lxx:     {nome:"Septuaginta (LXX)",            tipo:"tradição textual"},
  ps:      {nome:"Pentateuco Samaritano",        tipo:"tradição textual"},
  almeida: {nome:"Almeida (domínio público)",    tipo:"tradução"},
  trad:    {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais:   {nome:"Registros do Antigo Oriente",  tipo:"atestação histórica"},
  acad:    {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:    {nome:"Derivação aritmética interna", tipo:"cálculo do atlas"}
};

/* graus de confiança */
var CONF = {
  att:  {t:"atestado",   desc:"identificação/leitura amplamente atestada"},
  prob: {t:"provável",   desc:"identificação dominante, com reservas"},
  deb:  {t:"debatido",   desc:"questão aberta; leituras concorrentes"},
  der:  {t:"derivado",   desc:"calculado a partir do próprio texto"}
};

/* ── AFIRMAÇÕES (proveniência explícita) ────────────────────────── */
var AF = [
  {id:"a-crono-tm",  sobre:"cronologia", fonte:"tm",  conf:"att",
   txt:"Idades de paternidade e vida total de Gn 5 e Gn 11 conforme o Texto Massorético (base da numeração Almeida)."},
  {id:"a-crono-lxx", sobre:"cronologia", fonte:"lxx", conf:"att",
   txt:"A LXX soma ~100 anos à maioria das idades de paternidade; as somas de vida variam entre códices (Vaticano · Alexandrino)."},
  {id:"a-crono-ps",  sobre:"cronologia", fonte:"ps",  conf:"att",
   txt:"O Pentateuco Samaritano reduz três idades antediluvianas e segue a LXX em parte de Gn 11."},
  {id:"a-matusalem", sobre:"matusalem", fonte:"lxx", conf:"deb",
   txt:"LXX (Vaticano): Matusalém gera aos 167 — e 'sobreviveria' 14 anos ao Dilúvio. O Alexandrino corrige para 187, como o TM."},
  {id:"a-caina2", sobre:"caina2", fonte:"lxx", conf:"deb",
   txt:"Cainã (II) aparece apenas na LXX de Gn 11:13 — e daí em Lc 3:36. Está ausente do TM e do Pentateuco Samaritano."},
  {id:"a-sem502", sobre:"sem", fonte:"calc", conf:"der",
   txt:"Nascimento de Sem derivado: Arfaxade nasce 2 anos após o Dilúvio quando Sem tem 100 (Gn 11:10) → Sem nasce quando Noé tem 502; o '500' de Gn 5:32 abrange os três filhos."},
  {id:"a-tera", sobre:"tera", fonte:"acad", conf:"deb",
   txt:"Abrão nasce quando Terá tem 70 (leitura direta de Gn 11:26) ou 130 (harmonização de Gn 11:32 com At 7:4). O atlas exibe 70 e anota o crux."},
  {id:"a-babel-pelegue", sobre:"ev-babel", fonte:"trad", conf:"prob",
   txt:"“Nos seus dias repartiu-se a terra” (Gn 10:25): a leitura tradicional situa a dispersão de Babel dentro da vida de Pelegue."},
  {id:"a-eden", sobre:"eden", fonte:"acad", conf:"deb",
   txt:"Localização debatida: as hipóteses vão da cabeceira do Golfo Pérsico (Tigre e Eufrates, Gn 2:14) ao planalto armênio. Pisom e Giom não têm identificação segura."},
  {id:"a-node", sobre:"caim", fonte:"acad", conf:"deb",
   txt:"A “terra de Node” (Gn 4:16), “ao oriente do Éden”, não tem identificação geográfica — node é “errância”."},
  {id:"a-ararat", sobre:"ararat", fonte:"anais", conf:"att",
   txt:"“Montes de Ararate” = região de Urartu, reino atestado nos anais assírios (séc. IX–VI a.C.) — uma região montanhosa, não um pico específico."},
  {id:"a-babel-id", sobre:"sinar", fonte:"anais", conf:"att",
   txt:"Babel = Bāb-ilim, Babilônia, na terra de Sinar (baixa Mesopotâmia); cidade fartamente atestada em textos cuneiformes."},
  {id:"a-ereque", sobre:"ereque", fonte:"anais", conf:"att",
   txt:"Ereque = Uruk (Warka), uma das cidades mais antigas do mundo, amplamente escavada."},
  {id:"a-acade", sobre:"acade", fonte:"anais", conf:"prob",
   txt:"Acade (Agade) é fartamente atestada em textos cuneiformes, mas o sítio nunca foi localizado — a posição no mapa é aproximada."},
  {id:"a-ninive", sobre:"ninive", fonte:"anais", conf:"att",
   txt:"Nínive (Kuyunjik), capital assíria escavada desde o séc. XIX; “começo do reino” estendido por Ninrode (Gn 10:11)."},
  {id:"a-cala", sobre:"cala", fonte:"anais", conf:"att",
   txt:"Calá = Kalḫu (Nimrud), capital assíria sob Assurnasirpal II."},
  {id:"a-ur", sobre:"ur", fonte:"acad", conf:"prob",
   txt:"Ur dos Caldeus = Tell el-Muqayyar, na baixa Mesopotâmia (identificação dominante desde as escavações de Woolley); uma minoria propõe Ura/Urfa, no norte."},
  {id:"a-hara", sobre:"hara", fonte:"anais", conf:"att",
   txt:"Harã = Ḫarran, no alto rio Balique, bem atestada em textos do II milênio a.C.; centro do culto lunar, como Ur."},
  {id:"a-canaa", sobre:"canaa", fonte:"anais", conf:"att",
   txt:"Canaã como região do Levante meridional, atestada em fontes egípcias e nas cartas de Amarna."},
  {id:"a-texto", sobre:"corpus", fonte:"almeida", conf:"att",
   txt:"Transcrições da Almeida (domínio público), provisórias — a tradução de estudo (Bíblia de Jerusalém) entra como overlay privado, por direito autoral."}
];

/* ── TRADIÇÕES ──────────────────────────────────────────────────── */
var TRAD = {
  TM:  {label:"Texto Massorético",     curto:"TM"},
  LXX: {label:"Septuaginta",           curto:"LXX"},
  PS:  {label:"Pentateuco Samaritano", curto:"PS"}
};

/* ── PESSOAS ────────────────────────────────────────────────────────
   c: {TRAD:[idade ao gerar, vida total]} · null = sem números no texto
   linha: set (Gn 5) · sem (Gn 11) · caim · noe-filhos · outros        */
var PESSOAS = [
  /* Gn 5 — de Adão a Noé */
  {id:"adao", nome:"Adão", he:"אָדָם", sig:"humano; do solo (adamah)", ref:"Gn 5:3-5", linha:"set", pericope:"p5",
   c:{TM:[130,930],LXX:[230,930],PS:[130,930]}, gera:"sete",
   txt:"E viveu Adão cento e trinta anos, e gerou um filho à sua semelhança, conforme a sua imagem, e chamou o seu nome Sete. […] E foram todos os dias que Adão viveu novecentos e trinta anos; e morreu."},
  {id:"sete", nome:"Sete", he:"שֵׁת", sig:"concedido, posto", ref:"Gn 5:6-8", linha:"set", pericope:"p5", pai:"adao",
   c:{TM:[105,912],LXX:[205,912],PS:[105,912]}, gera:"enos",
   txt:"E viveu Sete cento e cinco anos, e gerou a Enos. […] E foram todos os dias de Sete novecentos e doze anos; e morreu."},
  {id:"enos", nome:"Enos", he:"אֱנוֹשׁ", sig:"homem mortal", ref:"Gn 5:9-11", linha:"set", pericope:"p5", pai:"sete",
   c:{TM:[90,905],LXX:[190,905],PS:[90,905]}, gera:"caina",
   txt:"E viveu Enos noventa anos, e gerou a Cainã. […] E foram todos os dias de Enos novecentos e cinco anos; e morreu."},
  {id:"caina", nome:"Cainã", he:"קֵינָן", sig:"possessão; ferreiro (?)", ref:"Gn 5:12-14", linha:"set", pericope:"p5", pai:"enos",
   c:{TM:[70,910],LXX:[170,910],PS:[70,910]}, gera:"maalalel",
   txt:"E viveu Cainã setenta anos, e gerou a Maalalel. […] E foram todos os dias de Cainã novecentos e dez anos; e morreu."},
  {id:"maalalel", nome:"Maalalel", he:"מַהֲלַלְאֵל", sig:"louvor de El", ref:"Gn 5:15-17", linha:"set", pericope:"p5", pai:"caina",
   c:{TM:[65,895],LXX:[165,895],PS:[65,895]}, gera:"jarede",
   txt:"E viveu Maalalel sessenta e cinco anos, e gerou a Jarede. […] E foram todos os dias de Maalalel oitocentos e noventa e cinco anos; e morreu."},
  {id:"jarede", nome:"Jarede", he:"יֶרֶד", sig:"descida", ref:"Gn 5:18-20", linha:"set", pericope:"p5", pai:"maalalel",
   c:{TM:[162,962],LXX:[162,962],PS:[62,847]}, gera:"enoque",
   txt:"E viveu Jarede cento e sessenta e dois anos, e gerou a Enoque. […] E foram todos os dias de Jarede novecentos e sessenta e dois anos; e morreu."},
  {id:"enoque", nome:"Enoque", he:"חֲנוֹךְ", sig:"dedicado, iniciado", ref:"Gn 5:21-24", linha:"set", pericope:"p5", pai:"jarede",
   c:{TM:[65,365],LXX:[165,365],PS:[65,365]}, gera:"matusalem", especial:"trasladado",
   txt:"E viveu Enoque sessenta e cinco anos, e gerou a Matusalém. E andou Enoque com Deus […] e já não apareceu, porquanto Deus para si o tomou."},
  {id:"matusalem", nome:"Matusalém", he:"מְתוּשֶׁלַח", sig:"homem do dardo (?); “quando morrer, virá” (leitura tradicional)", ref:"Gn 5:25-27", linha:"set", pericope:"p5", pai:"enoque",
   c:{TM:[187,969],LXX:[167,969],PS:[67,720]}, gera:"lameque", af:["a-matusalem"],
   txt:"E viveu Matusalém cento e oitenta e sete anos, e gerou a Lameque. […] E foram todos os dias de Matusalém novecentos e sessenta e nove anos; e morreu."},
  {id:"lameque", nome:"Lameque", he:"לֶמֶךְ", sig:"(etimologia incerta)", ref:"Gn 5:28-31", linha:"set", pericope:"p5", pai:"matusalem",
   c:{TM:[182,777],LXX:[188,753],PS:[53,653]}, gera:"noe",
   txt:"E viveu Lameque cento e oitenta e dois anos, e gerou um filho, e chamou o seu nome Noé, dizendo: Este nos consolará acerca de nossas obras […] E foram todos os dias de Lameque setecentos e setenta e sete anos; e morreu."},
  {id:"noe", nome:"Noé", he:"נֹחַ", sig:"descanso, consolo (Gn 5:29)", ref:"Gn 5:32; 9:29", linha:"set", pericope:"p7", pai:"lameque",
   c:{TM:[500,950],LXX:[500,950],PS:[500,950]}, gera:"sem",
   txt:"E era Noé da idade de quinhentos anos, e gerou Noé a Sem, Cão e Jafé. […] E foram todos os dias de Noé novecentos e cinquenta anos; e morreu."},

  /* Gn 11 — de Sem a Abrão */
  {id:"sem", nome:"Sem", he:"שֵׁם", sig:"nome, renome", ref:"Gn 11:10-11", linha:"sem", pericope:"p11", pai:"noe",
   c:{TM:[100,600],LXX:[100,600],PS:[100,600]}, gera:"arfaxade", af:["a-sem502"],
   txt:"Estas são as gerações de Sem: Sem era da idade de cem anos e gerou a Arfaxade, dois anos depois do dilúvio. E viveu Sem, depois que gerou a Arfaxade, quinhentos anos; e gerou filhos e filhas."},
  {id:"arfaxade", nome:"Arfaxade", he:"אַרְפַּכְשַׁד", sig:"(etimologia incerta)", ref:"Gn 11:12-13", linha:"sem", pericope:"p11", pai:"sem",
   c:{TM:[35,438],LXX:[135,565],PS:[135,438]}, gera:{TM:"sela",LXX:"caina2",PS:"sela"},
   txt:"E viveu Arfaxade trinta e cinco anos, e gerou a Selá. E viveu Arfaxade, depois que gerou a Selá, quatrocentos e três anos; e gerou filhos e filhas."},
  {id:"caina2", nome:"Cainã (II)", he:"Καϊνάμ", sig:"(grego; ausente do hebraico)", ref:"LXX Gn 11:13; Lc 3:36", linha:"sem", pericope:"p11", pai:"arfaxade",
   c:{LXX:[130,460]}, so:["LXX"], gera:"sela", af:["a-caina2"],
   txt:"“…filho de Salá, filho de Cainã, filho de Arfaxade, filho de Sem…” (Lc 3:35-36). Este segundo Cainã existe apenas na Septuaginta — e é por ela que entra na genealogia de Lucas."},
  {id:"sela", nome:"Selá", he:"שֶׁלַח", sig:"envio; broto (?)", ref:"Gn 11:14-15", linha:"sem", pericope:"p11", pai:{TM:"arfaxade",LXX:"caina2",PS:"arfaxade"},
   c:{TM:[30,433],LXX:[130,460],PS:[130,433]}, gera:"heber",
   txt:"E viveu Selá trinta anos, e gerou a Héber. E viveu Selá, depois que gerou a Héber, quatrocentos e três anos; e gerou filhos e filhas."},
  {id:"heber", nome:"Héber", he:"עֵבֶר", sig:"o que atravessa; “além”", ref:"Gn 11:16-17", linha:"sem", pericope:"p11", pai:"sela",
   c:{TM:[34,464],LXX:[134,504],PS:[134,404]}, gera:"pelegue",
   txt:"E viveu Héber trinta e quatro anos, e gerou a Pelegue. E viveu Héber, depois que gerou a Pelegue, quatrocentos e trinta anos; e gerou filhos e filhas."},
  {id:"pelegue", nome:"Pelegue", he:"פֶּלֶג", sig:"divisão — “porquanto nos seus dias se repartiu a terra” (Gn 10:25)", ref:"Gn 11:18-19", linha:"sem", pericope:"p11", pai:"heber",
   c:{TM:[30,239],LXX:[130,339],PS:[130,239]}, gera:"reu", af:["a-babel-pelegue"],
   txt:"E viveu Pelegue trinta anos, e gerou a Reú. E viveu Pelegue, depois que gerou a Reú, duzentos e nove anos; e gerou filhos e filhas."},
  {id:"reu", nome:"Reú", he:"רְעוּ", sig:"amigo (?)", ref:"Gn 11:20-21", linha:"sem", pericope:"p11", pai:"pelegue",
   c:{TM:[32,239],LXX:[132,339],PS:[132,239]}, gera:"serugue",
   txt:"E viveu Reú trinta e dois anos, e gerou a Serugue. E viveu Reú, depois que gerou a Serugue, duzentos e sete anos; e gerou filhos e filhas."},
  {id:"serugue", nome:"Serugue", he:"שְׂרוּג", sig:"ramo (?)", ref:"Gn 11:22-23", linha:"sem", pericope:"p11", pai:"reu",
   c:{TM:[30,230],LXX:[130,330],PS:[130,230]}, gera:"naor",
   txt:"E viveu Serugue trinta anos, e gerou a Naor. E viveu Serugue, depois que gerou a Naor, duzentos anos; e gerou filhos e filhas."},
  {id:"naor", nome:"Naor", he:"נָחוֹר", sig:"resfolegante (?)", ref:"Gn 11:24-25", linha:"sem", pericope:"p11", pai:"serugue",
   c:{TM:[29,148],LXX:[79,208],PS:[79,148]}, gera:"tera",
   txt:"E viveu Naor vinte e nove anos, e gerou a Terá. E viveu Naor, depois que gerou a Terá, cento e dezenove anos; e gerou filhos e filhas."},
  {id:"tera", nome:"Terá", he:"תֶּרַח", sig:"(etimologia incerta)", ref:"Gn 11:26-32", linha:"sem", pericope:"p12", pai:"naor",
   c:{TM:[70,205],LXX:[70,205],PS:[70,145]}, gera:"abrao", af:["a-tera"],
   txt:"E viveu Terá setenta anos, e gerou a Abrão, a Naor e a Harã. […] E foram os dias de Terá duzentos e cinco anos; e morreu Terá em Harã."},
  {id:"abrao", nome:"Abrão", he:"אַבְרָם", sig:"pai exaltado", ref:"Gn 11:26; 12:1-4", linha:"sem", pericope:"p12", pai:"tera",
   c:{TM:[100,175],LXX:[100,175],PS:[100,175]}, ponte:"F2",
   modulo:{href:"patriarcas.html#abraao", label:"seguir a jornada — Patriarcas (F2)"},
   txt:"Ora, o Senhor disse a Abrão: Sai-te da tua terra, e da tua parentela, e da casa de teu pai, para a terra que eu te mostrarei. E far-te-ei uma grande nação, e abençoar-te-ei […] e em ti serão benditas todas as famílias da terra."},

  /* fora das linhas numeradas */
  {id:"eva", nome:"Eva", he:"חַוָּה", sig:"vivente — “mãe de todos os viventes” (Gn 3:20)", ref:"Gn 2–4", linha:"outros", pericope:"p3", c:null,
   txt:"E chamou Adão o nome de sua mulher Eva, porquanto era a mãe de todos os viventes."},
  {id:"caim", nome:"Caim", he:"קַיִן", sig:"aquisição (Gn 4:1)", ref:"Gn 4:1-24", linha:"caim", pericope:"p4", pai:"adao", c:null, af:["a-node"],
   txt:"E conheceu Adão a Eva, sua mulher, e ela concebeu e deu à luz a Caim […] Onde está Abel, teu irmão? E ele disse: Não sei; sou eu guardador do meu irmão? […] E saiu Caim de diante da face do Senhor, e habitou na terra de Node, da banda do oriente do Éden."},
  {id:"abel", nome:"Abel", he:"הֶבֶל", sig:"sopro, vapor", ref:"Gn 4:2-10", linha:"caim", pericope:"p4", pai:"adao", c:null,
   txt:"E Abel foi pastor de ovelhas, e Caim foi lavrador da terra. […] E atentou o Senhor para Abel e para a sua oferta. […] A voz do sangue do teu irmão clama a mim desde a terra."},
  {id:"cam", nome:"Cam", he:"חָם", sig:"quente (?)", ref:"Gn 10:6-20", linha:"noe-filhos", pericope:"p9", pai:"noe", c:null,
   modulo:{href:"tabua-nacoes.html", label:"70 nações — módulo 2"},
   txt:"E os filhos de Cam são: Cuxe, e Mizraim, e Pute, e Canaã."},
  {id:"jafe", nome:"Jafé", he:"יֶפֶת", sig:"que Ele alargue (Gn 9:27)", ref:"Gn 10:2-5", linha:"noe-filhos", pericope:"p9", pai:"noe", c:null,
   modulo:{href:"tabua-nacoes.html", label:"70 nações — módulo 2"},
   txt:"Os filhos de Jafé são: Gomer, e Magogue, e Madai, e Javã, e Tubal, e Meseque, e Tiras."}
];

/* ── LUGARES (lon/lat · confiança · afirmação) ──────────────────── */
var LUGARES = [
  {id:"eden",   nome:"Éden (?)",       lon:47.8, lat:30.6, conf:"deb",  ref:"Gn 2:8-14",   pericope:"p2",  af:["a-eden"],
   idl:"Jardim “da banda do oriente” — hipótese: cabeceira do Golfo Pérsico (Tigre · Eufrates)"},
  {id:"ararat", nome:"Montes de Ararate", lon:44.3, lat:39.7, conf:"att", ref:"Gn 8:4",    pericope:"p7",  af:["a-ararat"],
   idl:"Região de Urartu — planalto armênio"},
  {id:"sinar",  nome:"Babel · Sinar",  lon:44.42,lat:32.54, conf:"att", ref:"Gn 10:10; 11:2-9", pericope:"p10", af:["a-babel-id"],
   idl:"Babilônia (Bāb-ilim), terra de Sinar — baixa Mesopotâmia"},
  {id:"ereque", nome:"Ereque",         lon:45.64,lat:31.32, conf:"att", ref:"Gn 10:10",    pericope:"p9",  af:["a-ereque"],
   idl:"Uruk (Warka)"},
  {id:"acade",  nome:"Acade",          lon:44.1, lat:33.4,  conf:"prob",ref:"Gn 10:10",    pericope:"p9",  af:["a-acade"],
   idl:"Agade — sítio ainda não localizado (posição aproximada)"},
  {id:"ninive", nome:"Nínive",         lon:43.15,lat:36.36, conf:"att", ref:"Gn 10:11",    pericope:"p9",  af:["a-ninive"],
   idl:"Kuyunjik — capital assíria"},
  {id:"cala",   nome:"Calá",           lon:43.33,lat:36.10, conf:"att", ref:"Gn 10:11-12", pericope:"p9",  af:["a-cala"],
   idl:"Kalḫu (Nimrud)"},
  {id:"ur",     nome:"Ur dos Caldeus", lon:46.10,lat:30.96, conf:"prob",ref:"Gn 11:28,31", pericope:"p12", af:["a-ur"],
   idl:"Tell el-Muqayyar — baixa Mesopotâmia (identificação dominante)"},
  {id:"hara",   nome:"Harã",           lon:39.03,lat:36.87, conf:"att", ref:"Gn 11:31-32", pericope:"p12", af:["a-hara"],
   idl:"Ḫarran, alto Balique — parada da família de Terá"},
  {id:"canaa",  nome:"Canaã",          lon:35.2, lat:31.8,  conf:"att", ref:"Gn 11:31",    pericope:"p12", af:["a-canaa"],
   idl:"Levante meridional — destino declarado da migração"}
];

/* ── EVENTOS ────────────────────────────────────────────────────── */
var EVENTOS = [
  {id:"ev-criacao", nome:"Criação",              tipo:"marco", pericope:"p1"},
  {id:"ev-diluvio", nome:"Dilúvio",              tipo:"marco", pericope:"p7",  lugar:"ararat"},
  {id:"ev-babel",   nome:"Babel — a dispersão",  tipo:"faixa", pericope:"p10", lugar:"sinar", af:["a-babel-pelegue"]},
  {id:"ev-ur",      nome:"Partida de Ur (→ F2)", tipo:"rota",  pericope:"p12", rota:["ur","hara","canaa"]}
];

/* ── PERÍCOPES — a espinha canônica de Gn 1–11 ──────────────────── */
var PERICOPES = [
  {id:"p1", ref:"Gn 1:1–2:3", titulo:"A Criação",
   resumo:"Sete dias ordenam o cosmos: da luz ao descanso.",
   texto:"No princípio criou Deus os céus e a terra. E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas. E disse Deus: Haja luz; e houve luz. […] E viu Deus tudo quanto tinha feito, e eis que era muito bom. […] E abençoou Deus o dia sétimo, e o santificou.",
   paralelos:[{r:"Jo 1:1-3",n:"o Verbo criador"},{r:"Sl 33:6",n:"pela palavra do Senhor"},{r:"Hb 11:3",n:"pela fé entendemos"},{r:"Cl 1:16-17",n:"nele tudo subsiste"}],
   pessoas:[], lugares:[], evento:"ev-criacao"},
  {id:"p2", ref:"Gn 2:4-25", titulo:"O jardim do Éden",
   resumo:"O homem é posto num jardim regado por quatro rios.",
   texto:"E plantou o Senhor Deus um jardim no Éden, da banda do oriente, e pôs ali o homem que tinha formado. […] E saía um rio do Éden para regar o jardim; e dali se dividia e se tornava em quatro cabeças — Pisom, Giom, Hidéquel (o Tigre) e o Eufrates.",
   paralelos:[{r:"Ez 28:13",n:"Éden, jardim de Deus"},{r:"Ap 2:7",n:"a árvore da vida restaurada"},{r:"Ap 22:1-2",n:"o rio e a árvore, no fim"}],
   pessoas:["adao","eva"], lugares:["eden"]},
  {id:"p3", ref:"Gn 3", titulo:"A Queda",
   resumo:"A serpente, o fruto, o exílio — e a primeira promessa.",
   texto:"Ora, a serpente era mais astuta que todas as alimárias do campo […] E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar. […] E lançou fora o homem, e pôs querubins ao oriente do jardim do Éden.",
   paralelos:[{r:"Rm 5:12-19",n:"Adão e Cristo"},{r:"1Co 15:21-22",n:"em Adão todos morrem"},{r:"Ap 12:9",n:"a antiga serpente"}],
   pessoas:["adao","eva"], lugares:["eden"]},
  {id:"p4", ref:"Gn 4", titulo:"Caim e Abel",
   resumo:"A primeira morte; a linhagem de Caim e a terra de Node.",
   texto:"E Abel foi pastor de ovelhas, e Caim foi lavrador da terra. […] Onde está Abel, teu irmão? E ele disse: Não sei; sou eu guardador do meu irmão? […] E saiu Caim de diante da face do Senhor, e habitou na terra de Node, da banda do oriente do Éden.",
   paralelos:[{r:"Hb 11:4",n:"a fé de Abel"},{r:"1Jo 3:12",n:"não como Caim"},{r:"Mt 23:35",n:"do sangue de Abel"},{r:"Jd 11",n:"o caminho de Caim"}],
   pessoas:["caim","abel","adao","eva"], lugares:[]},
  {id:"p5", ref:"Gn 5", titulo:"As gerações de Adão",
   resumo:"Dez patriarcas, dez longevidades — e Enoque, que não morreu.",
   texto:"Este é o livro das gerações de Adão. No dia em que Deus criou o homem, à semelhança de Deus o fez. […] E andou Enoque com Deus; e já não apareceu, porquanto Deus para si o tomou.",
   paralelos:[{r:"Lc 3:36-38",n:"genealogia de Jesus"},{r:"1Cr 1:1-4",n:"o espelho do cronista"},{r:"Hb 11:5",n:"Enoque trasladado"},{r:"Jd 14-15",n:"a profecia de Enoque"}],
   pessoas:["adao","sete","enos","caina","maalalel","jarede","enoque","matusalem","lameque","noe"], lugares:[], modulo:{href:"genesis5.html", label:"ver o módulo 1 — linha do tempo de Gn 5"}},
  {id:"p6", ref:"Gn 6:1-8", titulo:"A corrupção da terra",
   resumo:"A maldade se multiplica; Noé acha graça.",
   texto:"E viu o Senhor que a maldade do homem se multiplicara sobre a terra, e que toda imaginação dos pensamentos de seu coração era só má continuamente. […] Noé, porém, achou graça aos olhos do Senhor.",
   paralelos:[{r:"Mt 24:37-39",n:"como nos dias de Noé"},{r:"1Pe 3:19-20",n:"a longanimidade de Deus"},{r:"2Pe 2:5",n:"Noé, pregoeiro da justiça"}],
   pessoas:["noe"], lugares:[]},
  {id:"p7", ref:"Gn 6:9–8:22", titulo:"O Dilúvio",
   resumo:"A arca, as águas, e o repouso sobre os montes de Ararate.",
   texto:"Faze para ti uma arca da madeira de gofer […] No ano seiscentos da vida de Noé […] romperam-se todas as fontes do grande abismo, e as janelas dos céus se abriram. […] E repousou a arca, no sétimo mês, no dia dezessete do mês, sobre os montes de Ararate.",
   paralelos:[{r:"Hb 11:7",n:"a arca, pela fé"},{r:"2Pe 3:5-6",n:"o mundo de então pereceu"},{r:"Is 54:9",n:"as águas de Noé"},{r:"Sl 29:10",n:"entronizado sobre o dilúvio"}],
   pessoas:["noe","sem","cam","jafe"], lugares:["ararat"], evento:"ev-diluvio"},
  {id:"p8", ref:"Gn 9", titulo:"A aliança do arco",
   resumo:"Bênção renovada, o arco nas nuvens, e a maldição de Canaã.",
   texto:"E abençoou Deus a Noé e a seus filhos, e disse-lhes: Frutificai, e multiplicai-vos, e enchei a terra. […] O meu arco tenho posto nas nuvens; este será por sinal da aliança entre mim e a terra.",
   paralelos:[{r:"Is 54:9-10",n:"o juramento das águas"},{r:"Ap 4:3",n:"o arco ao redor do trono"},{r:"Gn 1:28",n:"a bênção do princípio, renovada"}],
   pessoas:["noe","sem","cam","jafe"], lugares:[]},
  {id:"p9", ref:"Gn 10", titulo:"A Tábua das Nações",
   resumo:"Setenta povos de três linhagens repovoam o mapa.",
   texto:"Estas, pois, são as gerações dos filhos de Noé: Sem, Cam e Jafé; e nasceram-lhes filhos depois do dilúvio. […] Destes foram repartidas as ilhas das nações nas suas terras, cada qual segundo a sua língua, segundo as suas famílias, entre as suas nações.",
   paralelos:[{r:"1Cr 1:5-23",n:"o espelho do cronista"},{r:"At 17:26",n:"de um só fez toda a raça"},{r:"Dt 32:8",n:"repartiu as heranças às nações"},{r:"Ap 7:9",n:"de todas as nações, no fim"}],
   pessoas:["sem","cam","jafe"], lugares:["sinar","ereque","acade","ninive","cala"], modulo:{href:"tabua-nacoes.html", label:"ver o módulo 2 — mapa da Tábua das Nações"}},
  {id:"p10", ref:"Gn 11:1-9", titulo:"Babel",
   resumo:"Uma língua, uma torre — e a confusão que dispersa.",
   texto:"E era toda a terra de uma mesma língua e de uma mesma fala. […] Eia, edifiquemos nós uma cidade e uma torre cujo cume toque nos céus […] Por isso se chamou o seu nome Babel, porquanto ali confundiu o Senhor a língua de toda a terra.",
   paralelos:[{r:"At 2:5-11",n:"Pentecostes — as línguas reunidas"},{r:"Sf 3:9",n:"lábios puros aos povos"},{r:"Gn 10:25",n:"“nos seus dias repartiu-se a terra”"}],
   pessoas:["pelegue"], lugares:["sinar"], evento:"ev-babel"},
  {id:"p11", ref:"Gn 11:10-26", titulo:"As gerações de Sem",
   resumo:"De Sem a Abrão: a segunda escada de longevidades.",
   texto:"Estas são as gerações de Sem: Sem era da idade de cem anos e gerou a Arfaxade, dois anos depois do dilúvio. […] E viveu Terá setenta anos, e gerou a Abrão, a Naor e a Harã.",
   paralelos:[{r:"Lc 3:34-36",n:"genealogia de Jesus — com o Cainã da LXX"},{r:"1Cr 1:24-27",n:"de Sem a Abrão"}],
   pessoas:["sem","arfaxade","caina2","sela","heber","pelegue","reu","serugue","naor","tera","abrao"], lugares:[]},
  {id:"p12", ref:"Gn 11:27-32", titulo:"Terá — de Ur a Harã",
   resumo:"A família parte de Ur rumo a Canaã e para em Harã. A ponte para Abraão.",
   texto:"E tomou Terá a Abrão, seu filho, e a Ló, filho de Harã, filho de seu filho, e a Sarai, sua nora […] e saíram com eles de Ur dos Caldeus, para irem à terra de Canaã; e vieram até Harã, e habitaram ali.",
   paralelos:[{r:"At 7:2-4",n:"Estêvão: da Mesopotâmia a Harã"},{r:"Js 24:2",n:"“dalém do rio” serviram a outros deuses"},{r:"Ne 9:7",n:"que escolheste a Abrão e o tiraste de Ur"},{r:"Hb 11:8",n:"saiu, sem saber para onde ia"}],
   pessoas:["tera","abrao"], lugares:["ur","hara","canaa"], evento:"ev-ur",
   modulo:{href:"patriarcas.html#abraao-1", label:"seguir a jornada — módulo Patriarcas (F2)"}}
];

/* ── CRONOLOGIA — nascimento/morte em Anno Mundi por tradição ───── */
var LINHA5 = ["adao","sete","enos","caina","maalalel","jarede","enoque","matusalem","lameque","noe"];
var LINHA11 = {
  TM:  ["sem","arfaxade","sela","heber","pelegue","reu","serugue","naor","tera","abrao"],
  LXX: ["sem","arfaxade","caina2","sela","heber","pelegue","reu","serugue","naor","tera","abrao"],
  PS:  ["sem","arfaxade","sela","heber","pelegue","reu","serugue","naor","tera","abrao"]
};
var byId = {};
PESSOAS.forEach(function(p){ byId[p.id]=p; });

function crono(key){
  var out={}, am=0, i, p, c;
  for(i=0;i<LINHA5.length;i++){
    p=byId[LINHA5[i]]; c=p.c[key];
    out[p.id]={nasce:am, gera:am+c[0], morre:am+c[1], total:c[1], beget:c[0]};
    am+=c[0];
  }
  var diluvio=out.noe.nasce+600;
  /* Sem nasce quando Noé tem 502 (derivado de Gn 11:10 — af a-sem502) */
  am=out.noe.nasce+502;
  var chain=LINHA11[key];
  for(i=0;i<chain.length;i++){
    p=byId[chain[i]]; c=p.c[key];
    out[p.id]={nasce:am, gera:c?am+c[0]:null, morre:c?am+c[1]:null, total:c?c[1]:null, beget:c?c[0]:null};
    am+=c?c[0]:0;
  }
  var max=0, id;
  for(id in out){ if(out[id].morre>max) max=out[id].morre; }
  return {key:key, label:TRAD[key].label, pessoas:out, diluvio:diluvio,
          babel:[out.pelegue.nasce,out.pelegue.morre], max:max, linha11:chain};
}

var afById={}; AF.forEach(function(a){ afById[a.id]=a; });
var lugarById={}; LUGARES.forEach(function(l){ lugarById[l.id]=l; });
var pericopeById={}; PERICOPES.forEach(function(pc){ pericopeById[pc.id]=pc; });
var eventoById={}; EVENTOS.forEach(function(e){ eventoById[e.id]=e; });

return {
  FONTES:FONTES, CONF:CONF, AF:AF, TRAD:TRAD,
  PESSOAS:PESSOAS, LUGARES:LUGARES, EVENTOS:EVENTOS, PERICOPES:PERICOPES,
  LINHA5:LINHA5, LINHA11:LINHA11,
  pessoa:function(id){return byId[id];},
  lugar:function(id){return lugarById[id];},
  pericope:function(id){return pericopeById[id];},
  evento:function(id){return eventoById[id];},
  af:function(id){return afById[id];},
  crono:crono
};
})();
