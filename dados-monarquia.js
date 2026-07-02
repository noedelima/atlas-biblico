/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F5 — Rute · Samuel · a monarquia
   Das espigas de Belém à cidade de Davi: Rute, a arca peregrina,
   Saul e a subida de Davi — com fonte e grau de confiança por
   identificação. Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR).
   ═══════════════════════════════════════════════════════════════════ */
window.MONARQUIA = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do Antigo Oriente", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-belem", fonte:"trad", conf:"att",
   txt:"Belém de Judá (Efrata): a casa de Rute e Boaz, o campo de Jessé, a unção de Davi — e a cidade do Messias (Mq 5:2; Mt 2:1)."},
  {id:"a-moabe", fonte:"anais", conf:"att",
   txt:"Os campos de Moabe, no planalto a leste do mar Salgado — a terra de Rute; Moabe é bem atestada (estela de Messa, séc. IX a.C.)."},
  {id:"a-silo", fonte:"anais", conf:"att",
   txt:"Siló = Khirbet Seilun; ali Ana orou e Samuel ouviu a voz — e de lá a arca saiu para nunca mais voltar (1Sm 4; Sl 78:60)."},
  {id:"a-afeca", fonte:"anais", conf:"att",
   txt:"Afeca = Tel Afek (Ras el-‘Ain), na via costeira; Ebenézer, o acampamento de Israel, fica próximo — sem sítio seguro."},
  {id:"a-asdode", fonte:"anais", conf:"att",
   txt:"Asdode = Tel Ashdod, uma das cinco cidades filisteias; escavada, com templos da era."},
  {id:"a-quiriate", fonte:"acad", conf:"prob",
   txt:"Quiriate-Jearim = Deir el-‘Azar (Abu Gosh), na identificação corrente; a arca esperou ali vinte anos (1Sm 7:2)."},
  {id:"a-mispa", fonte:"acad", conf:"prob",
   txt:"Mispa de Benjamim = Tell en-Nasbeh, a identificação dominante — o lugar do ‘Ebenézer’: ‘até aqui nos ajudou o SENHOR’."},
  {id:"a-rama", fonte:"acad", conf:"prob",
   txt:"Ramá, cidade de Samuel = er-Ram (identificação usual); ali os anciãos pediram um rei."},
  {id:"a-gibea", fonte:"acad", conf:"prob",
   txt:"Gibeá de Saul = Tell el-Ful, ao norte de Jerusalém — identificação corrente desde Albright, com debate."},
  {id:"a-ela", fonte:"anais", conf:"att",
   txt:"O vale de Elá (Wadi es-Sant), entre Socó e Azeca — a geografia do duelo com Golias; Khirbet Qeiyafa domina o vale."},
  {id:"a-engedi", fonte:"anais", conf:"att",
   txt:"En-Gedi, o oásis dos ‘esconderijos das cabras montesas’ (1Sm 24:2), junto ao mar Salgado — geografia segura."},
  {id:"a-gilboa", fonte:"anais", conf:"att",
   txt:"O monte Gilboa fecha o vale de Jezreel pelo sul — o campo da última batalha de Saul (1Sm 31)."},
  {id:"a-hebrom", fonte:"anais", conf:"att",
   txt:"Hebrom = Tell Rumeida; capital de Davi por sete anos e seis meses (2Sm 5:5), na herança de Judá."},
  {id:"a-jerusalem", fonte:"anais", conf:"att",
   txt:"Jerusalém: a fortaleza jebusita tomada por Davi é a colina sudeste — a ‘cidade de Davi’, intensamente escavada; a subida da arca prepara o Templo."},
  {id:"a-linhagem", fonte:"trad", conf:"att",
   txt:"A genealogia de Rt 4:18-22 (Perez → Boaz → Obede → Jessé → Davi) é retomada por Mt 1:3-6 — com Raabe e Rute, duas estrangeiras, na linhagem do Messias."},
  {id:"a-reinados", fonte:"calc", conf:"der",
   txt:"Números dos reinados: Saul ‘quarenta anos’ segundo At 13:21 (o TM de 1Sm 13:1 está truncado — crux textual clássico); Davi 40 anos: 7,5 em Hebrom e 33 em Jerusalém (2Sm 5:4-5)."}
];

/* lugares — ldx/ldy: ajuste fino do rótulo no mapa */
var LUG = [
  {id:"belem",    nome:"Belém",           lon:35.20, lat:31.70, conf:"att",  idl:"Efrata — de Rute a Davi", af:"a-belem", ldx:-46, ldy:12},
  {id:"moabe",    nome:"campos de Moabe", lon:35.75, lat:31.50, conf:"att",  idl:"planalto além do mar Salgado", af:"a-moabe", ldy:13},
  {id:"silo",     nome:"Siló",            lon:35.29, lat:32.05, conf:"att",  idl:"Khirbet Seilun — Ana e Samuel", af:"a-silo"},
  {id:"afeca",    nome:"Afeca · Ebenézer",lon:34.93, lat:32.10, conf:"att",  idl:"Tel Afek — a arca capturada", af:"a-afeca", ldx:-70, ldy:-8},
  {id:"asdode",   nome:"Asdode",          lon:34.65, lat:31.75, conf:"att",  idl:"Tel Ashdod — diante de Dagom", af:"a-asdode", ldx:-52, ldy:-6},
  {id:"quiriate", nome:"Quiriate-Jearim", lon:35.10, lat:31.80, conf:"prob", idl:"Deir el-‘Azar — vinte anos de espera", af:"a-quiriate", ldx:-108, ldy:-6},
  {id:"mispa",    nome:"Mispa",           lon:35.19, lat:31.90, conf:"prob", idl:"Tell en-Nasbeh — o Ebenézer", af:"a-mispa", ldx:-44, ldy:-8},
  {id:"rama",     nome:"Ramá",            lon:35.26, lat:31.92, conf:"prob", idl:"er-Ram — a cidade de Samuel", af:"a-rama", ldy:-8},
  {id:"gibea",    nome:"Gibeá de Saul",   lon:35.25, lat:31.82, conf:"prob", idl:"Tell el-Ful — a primeira capital", af:"a-gibea", ldy:13},
  {id:"ela",      nome:"vale de Elá",     lon:34.97, lat:31.69, conf:"att",  idl:"Wadi es-Sant — Davi e Golias", af:"a-ela", ldx:-78, ldy:4},
  {id:"engedi",   nome:"En-Gedi",         lon:35.39, lat:31.46, conf:"att",  idl:"o oásis dos esconderijos", af:"a-engedi", ldx:-56, ldy:10},
  {id:"gilboa",   nome:"monte Gilboa",    lon:35.42, lat:32.50, conf:"att",  idl:"a última batalha de Saul", af:"a-gilboa", ldy:13},
  {id:"hebrom",   nome:"Hebrom",          lon:35.10, lat:31.53, conf:"att",  idl:"capital de Davi por 7 anos", af:"a-hebrom", ldx:-58, ldy:4},
  {id:"jerusalem",nome:"Jerusalém",       lon:35.23, lat:31.77, conf:"att",  idl:"a cidade de Davi", af:"a-jerusalem", ldx:12, ldy:2}
];

var PERNAS = [
  {id:"rute", nome:"Rute", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"Nos dias dos juízes, uma família sai de Belém — e volta com uma moabita que entra na linhagem do Messias."},
  {id:"samuel", nome:"Samuel e a arca", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"De Siló a Mispa: o menino que ouve, a arca que peregrina — capturada, devolvida, esperando — e o pedido por um rei."},
  {id:"davi", nome:"Saul e Davi", cor:"#147a56", corUi:"#2ea87d",
   intro:"O primeiro rei e o pastor ungido: do vale de Elá ao Gilboa, de Hebrom à cidade de Davi — e a promessa de um trono eterno."}
];

var ETAPAS = [
  {perna:"rute", lugar:"belem", ref:"Rt 1:1-2", leitura:"Rt 1:1-5", titulo:"Nos dias em que os juízes julgavam",
   nota:"O livro abre onde Juízes fechou — e uma fome tira de Belém, ‘a casa do pão’, a família de Elimeleque."},
  {perna:"rute", lugar:"moabe", ref:"Rt 1:16-17", leitura:"Rt 1:6-18", titulo:"“O teu Deus é o meu Deus”",
   via:[[35.55,31.52],[35.65,31.48]],
   nota:"Dez anos, três viúvas. Orfa volta; Rute se apega — o voto mais citado do livro."},
  {perna:"rute", lugar:"belem", ref:"Rt 2:11-12", leitura:"Rt 2:1-17", titulo:"As espigas — Boaz",
   via:[[35.65,31.48],[35.55,31.52]],
   nota:"A lei da respiga (Lv 19:9-10; Dt 24:19) em ação: a provisão de Deus passa pela generosidade concreta."},
  {perna:"rute", lugar:"belem", ref:"Rt 4:13-17", leitura:"Rt 4:9-22", titulo:"A porta — resgate e genealogia",
   nota:"O goel (resgatador) compra o campo e recebe a estrangeira — e o livro termina numa genealogia: Obede, Jessé, Davi. Veja a linhagem abaixo do mapa."},

  {perna:"samuel", lugar:"silo", ref:"1Sm 1:27-28", leitura:"1Sm 1:9-20,24-28", titulo:"Ana — “pelo menino orava eu”",
   nota:"O cântico de Ana (1Sm 2:1-10) é o eco antigo do Magnificat (Lc 1:46-55)."},
  {perna:"samuel", lugar:"silo", ref:"1Sm 3:9-10", leitura:"1Sm 3:1-14,19-21", titulo:"“Fala, SENHOR”",
   nota:"‘A palavra do SENHOR era rara naqueles dias’ — e Deus chama um menino, à noite, junto à arca."},
  {perna:"samuel", lugar:"afeca", ref:"1Sm 4:10-11", leitura:"1Sm 4:1-11", titulo:"A arca capturada",
   via:[[35.15,32.09]],
   nota:"Icabô: ‘foi-se a glória de Israel’ (1Sm 4:21-22). Siló não volta a aparecer — Sl 78:60 e Jr 7:12 lembram sua ruína."},
  {perna:"samuel", lugar:"asdode", ref:"1Sm 5:3-4", leitura:"1Sm 5:1-12", titulo:"Diante de Dagom",
   via:[[34.75,31.95]],
   nota:"A arca não precisa de exército: Dagom cai de rosto em terra, duas vezes."},
  {perna:"samuel", lugar:"quiriate", ref:"1Sm 7:1-2", leitura:"1Sm 6:10-16; 7:1-2", titulo:"Vinte anos em Quiriate-Jearim",
   via:[[34.85,31.72]],
   nota:"As vacas que mugem rumo a Bete-Semes devolvem a arca — que espera em Quiriate-Jearim até Davi (2Sm 6)."},
  {perna:"samuel", lugar:"mispa", ref:"1Sm 7:12", leitura:"1Sm 7:3-14", titulo:"Ebenézer — “até aqui nos ajudou”",
   nota:"Samuel julga, o povo se converte, e uma pedra ganha nome: Ebenézer, ‘pedra da ajuda’."},
  {perna:"samuel", lugar:"rama", ref:"1Sm 8:5-7", leitura:"1Sm 8:1-22", titulo:"“Dá-nos um rei”",
   nota:"‘Não rejeitaram a ti, mas a mim’ — o pedido atendido com advertência: eis o direito do rei (1Sm 8:11-18)."},

  {perna:"davi", lugar:"gibea", ref:"1Sm 10:24", leitura:"1Sm 10:17-27", titulo:"Saul — o primeiro rei",
   nota:"Escondido entre a bagagem, mais alto que todos: o rei ‘segundo o coração do povo’. Gibeá vira a primeira capital."},
  {perna:"davi", lugar:"belem", ref:"1Sm 16:12-13", leitura:"1Sm 16:1-13", titulo:"Davi ungido",
   via:[[35.23,31.76]],
   nota:"‘O SENHOR não vê como vê o homem: o homem vê o exterior, o SENHOR vê o coração.’"},
  {perna:"davi", lugar:"ela", ref:"1Sm 17:48-50", leitura:"1Sm 17:38-51", titulo:"O vale de Elá — Golias",
   via:[[35.08,31.68]],
   nota:"‘Tu vens contra mim com espada e lança; eu vou contra ti em nome do SENHOR dos Exércitos’ (17:45)."},
  {perna:"davi", lugar:"engedi", ref:"1Sm 24:5-7", leitura:"1Sm 24:1-13", titulo:"A ponta do manto",
   via:[[35.15,31.55],[35.30,31.48]],
   nota:"Nos anos de fuga, Davi poupa Saul duas vezes (1Sm 24; 26): ‘não estenderei a mão contra o ungido do SENHOR’."},
  {perna:"davi", lugar:"gilboa", ref:"1Sm 31:3-4", leitura:"1Sm 31:1-13", titulo:"Gilboa — a morte de Saul",
   via:[[35.45,31.85],[35.48,32.20]],
   nota:"‘Como caíram os valentes!’ — o lamento de Davi por Saul e Jônatas (2Sm 1:19-27) é elegia, não celebração."},
  {perna:"davi", lugar:"hebrom", ref:"2Sm 2:4", leitura:"2Sm 2:1-7; 5:1-5", titulo:"Rei em Hebrom",
   via:[[35.35,32.00],[35.20,31.70]],
   nota:"Sete anos e seis meses sobre Judá; depois, todas as tribos: ‘tu apascentarás o meu povo Israel’."},
  {perna:"davi", lugar:"jerusalem", ref:"2Sm 5:9-10", leitura:"2Sm 5:6-12; 6:12-15", titulo:"A cidade de Davi",
   nota:"A fortaleza jebusita vira capital de todas as tribos — neutra, central, sua. E a arca sobe, dançando (2Sm 6)."},
  {perna:"davi", lugar:"jerusalem", ref:"2Sm 7:12-16", leitura:"2Sm 7:1-17", titulo:"“O teu trono será firme para sempre”", futura:true,
   nota:"Davi quer construir uma casa para Deus; Deus promete uma casa a Davi. A aliança davídica é a ponte para Salomão, o Templo — e o Filho de Davi (Lc 1:32-33). → F6"}
];

/* a linhagem de Rute a Davi (Rt 4:18-22 · Mt 1:3-6) */
var LINHAGEM = [
  {n:"Salmom", s:"e Raabe (Mt 1:5)"},
  {n:"Boaz",   s:"e Rute, a moabita"},
  {n:"Obede",  s:"Rt 4:17"},
  {n:"Jessé",  s:"o belemita"},
  {n:"Davi",   s:"o rei (Rt 4:22)"}
];

var lugById={}; LUG.forEach(function(l){lugById[l.id]=l;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var pernaById={}; PERNAS.forEach(function(p){pernaById[p.id]=p;});

return {FONTES:FONTES, CONF:CONF, AF:AF, LUG:LUG, PERNAS:PERNAS, ETAPAS:ETAPAS, LINHAGEM:LINHAGEM,
        lug:function(id){return lugById[id];},
        af:function(id){return afById[id];},
        perna:function(id){return pernaById[id];}};
})();
