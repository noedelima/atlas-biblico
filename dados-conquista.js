/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F4 — Conquista e Juízes (Js · Jz)
   Da travessia do Jordão ao "não havia rei em Israel": as campanhas,
   a herança das tribos e o ciclo dos juízes — com fonte e grau de
   confiança por identificação (inclusive os problemas clássicos,
   como Ai/et-Tell). Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR).
   ═══════════════════════════════════════════════════════════════════ */
window.CONQUISTA = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do Antigo Oriente", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-gilgal", fonte:"acad", conf:"deb",
   txt:"Gilgal, ‘ao oriente de Jericó’ (Js 4:19), ainda não foi identificada com segurança."},
  {id:"a-jerico", fonte:"anais", conf:"att",
   txt:"Jericó = Tell es-Sultan, um dos sítios mais escavados do mundo — mas a datação das muralhas caídas é um debate clássico (Garstang × Kenyon)."},
  {id:"a-ai", fonte:"acad", conf:"deb",
   txt:"Ai = et-Tell na identificação usual — e aí está o problema clássico: o sítio parece desocupado na época da conquista. Propostas alternativas (Khirbet el-Maqatir) seguem debatidas."},
  {id:"a-ebal", fonte:"acad", conf:"prob",
   txt:"Ebal e Gerizim flanqueiam Siquém — geografia segura; a estrutura de el-Burnat, no Ebal, é proposta como o altar de Josué (Zertal) — debatida."},
  {id:"a-gibeao", fonte:"anais", conf:"att",
   txt:"Gibeão = el-Jib: as asas de jarro inscritas ‘gb‘n’ encontradas no local praticamente assinam a identificação."},
  {id:"a-hazor", fonte:"anais", conf:"att",
   txt:"Hazor = Tell el-Qedah, a maior cidade da era em Canaã (‘a cabeça de todos estes reinos’, Js 11:10), com camada de destruição por fogo no Bronze Final."},
  {id:"a-hebrom", fonte:"anais", conf:"att",
   txt:"Hebrom (Quiriate-Arba) = Tell Rumeida; a herança de Calebe liga a conquista à promessa de Nm 14:24."},
  {id:"a-silo", fonte:"anais", conf:"att",
   txt:"Siló = Khirbet Seilun, escavada; ali a tenda do encontro repousou da conquista a Samuel (Js 18:1 → 1Sm 4)."},
  {id:"a-siquem", fonte:"anais", conf:"att",
   txt:"Siquém = Tell Balata; a renovação da aliança de Js 24 acontece onde Abraão ergueu o primeiro altar (Gn 12:6-7) — e onde os ossos de José repousam (Js 24:32)."},
  {id:"a-debir", fonte:"acad", conf:"prob",
   txt:"Debir = Khirbet Rabud, no alto Neguebe de Judá (identificação corrente); ligada a Otniel por Jz 1:12-13."},
  {id:"a-jerico2", fonte:"trad", conf:"att",
   txt:"A ‘cidade das palmeiras’ (Jz 3:13) é Jericó — a geografia do golpe de Eúde contra Eglom de Moabe."},
  {id:"a-tabor", fonte:"anais", conf:"att",
   txt:"O monte Tabor e o ribeiro Quisom emolduram a batalha de Débora e Baraque (Jz 4–5) — geografia segura do vale de Jezreel."},
  {id:"a-harode", fonte:"acad", conf:"prob",
   txt:"A fonte de Harode = ‘Ain Jalud, aos pés do Gilboa — identificação corrente para o teste dos trezentos (Jz 7)."},
  {id:"a-mispa-g", fonte:"acad", conf:"deb",
   txt:"A Mispa de Gileade, base de Jefté, não tem sítio seguro; a região é o norte da Transjordânia."},
  {id:"a-zora", fonte:"acad", conf:"prob",
   txt:"Zorá, terra de Sansão, na Sefelá junto ao vale de Soreque (Tel Tzora); Timna e Gaza completam a sua geografia filisteia."},
  {id:"a-belem", fonte:"trad", conf:"att",
   txt:"Belém de Judá — nos dias dos juízes, é de lá que sai a família de Rute e é para lá que a história volta: a ponte para Davi."},
  {id:"a-tribos", fonte:"calc", conf:"der",
   txt:"Posições aproximadas das heranças tribais (Js 13–19): o texto descreve fronteiras por listas de cidades, não por linhas — a camada é esquemática, um rótulo por tribo."},
  {id:"a-crono-jz", fonte:"acad", conf:"deb",
   txt:"A cronologia dos juízes é aberta: somados, os períodos de opressão e descanso passam de 400 anos — mais do que cabe entre o Êxodo e Salomão (1Rs 6:1). Sobreposições regionais são a explicação usual; o atlas não força uma linha única."}
];

/* lugares — ldx/ldy: ajuste fino do rótulo no mapa */
var LUG = [
  {id:"gilgal", nome:"Gilgal",   lon:35.47, lat:31.87, conf:"deb",  idl:"ao oriente de Jericó (Js 4:19)", af:"a-gilgal", ldy:13},
  {id:"jerico", nome:"Jericó",   lon:35.44, lat:31.87, conf:"att",  idl:"Tell es-Sultan", af:"a-jerico", ldx:-48, ldy:-9},
  {id:"ai",     nome:"Ai",       lon:35.26, lat:31.92, conf:"deb",  idl:"et-Tell (?) — o problema clássico", af:"a-ai", ldx:-24, ldy:-6},
  {id:"ebal",   nome:"Ebal · Gerizim", lon:35.27, lat:32.23, conf:"prob", idl:"os montes que flanqueiam Siquém", af:"a-ebal", ldx:12, ldy:-4},
  {id:"gibeao", nome:"Gibeão",   lon:35.18, lat:31.85, conf:"att",  idl:"el-Jib — jarros inscritos", af:"a-gibeao", ldx:-24, ldy:14},
  {id:"hazor",  nome:"Hazor",    lon:35.57, lat:33.02, conf:"att",  idl:"Tell el-Qedah — ‘a cabeça destes reinos’", af:"a-hazor"},
  {id:"hebrom", nome:"Hebrom",   lon:35.10, lat:31.53, conf:"att",  idl:"Tell Rumeida — a herança de Calebe", af:"a-hebrom", ldx:-60, ldy:4},
  {id:"silo",   nome:"Siló",     lon:35.29, lat:32.05, conf:"att",  idl:"Khirbet Seilun — a tenda do encontro", af:"a-silo"},
  {id:"siquem", nome:"Siquém",   lon:35.28, lat:32.21, conf:"att",  idl:"Tell Balata — a aliança renovada", af:"a-siquem", ldx:-60, ldy:8},
  {id:"debir",  nome:"Debir",    lon:34.99, lat:31.42, conf:"prob", idl:"Khirbet Rabud — Otniel", af:"a-debir", ldx:-46, ldy:10},
  {id:"tabor",  nome:"monte Tabor", lon:35.39, lat:32.69, conf:"att", idl:"Débora e Baraque — o Quisom", af:"a-tabor", ldx:12, ldy:-4},
  {id:"harode", nome:"fonte de Harode", lon:35.36, lat:32.55, conf:"prob", idl:"‘Ain Jalud — os trezentos de Gideão", af:"a-harode", ldy:13},
  {id:"mispa-g",nome:"Mispa de Gileade", lon:35.78, lat:32.18, conf:"deb", idl:"base de Jefté — Transjordânia", af:"a-mispa-g"},
  {id:"zora",   nome:"Zorá",     lon:34.98, lat:31.77, conf:"prob", idl:"vale de Soreque — Sansão", af:"a-zora", ldx:-42, ldy:-6},
  {id:"belem",  nome:"Belém",    lon:35.20, lat:31.70, conf:"att",  idl:"a ponte para Rute e Davi", af:"a-belem", ldy:12}
];

/* rótulos aproximados das doze tribos (camada opcional) */
var TRIBOS = [
  {n:"Judá",     lon:34.95, lat:31.35},
  {n:"Simeão",   lon:34.65, lat:31.10},
  {n:"Benjamim", lon:34.98, lat:31.93},
  {n:"Dã",       lon:34.78, lat:32.02},
  {n:"Efraim",   lon:35.05, lat:32.12},
  {n:"Manassés", lon:35.30, lat:32.40},
  {n:"Issacar",  lon:35.45, lat:32.62},
  {n:"Zebulom",  lon:35.22, lat:32.78},
  {n:"Aser",     lon:35.10, lat:33.00},
  {n:"Naftali",  lon:35.52, lat:33.10},
  {n:"Gade",     lon:35.75, lat:32.05},
  {n:"Rúben",    lon:35.75, lat:31.45}
];

var PERNAS = [
  {id:"campanhas", nome:"A conquista", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"Da travessia do Jordão à queima de Hazor: Jericó, o tropeço de Ai, a lei lida no Ebal e o dia em que o sol se deteve."},
  {id:"heranca", nome:"A herança", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"A terra repartida: Calebe recebe Hebrom, a tenda repousa em Siló — e ‘nem uma só palavra falhou’."},
  {id:"juizes", nome:"Os juízes", cor:"#147a56", corUi:"#2ea87d",
   intro:"O ciclo: apostasia, opressão, clamor, libertação — de Otniel a Sansão, até ‘não havia rei em Israel’."}
];

var ETAPAS = [
  {perna:"campanhas", lugar:"gilgal", ref:"Js 4:20-24", leitura:"Js 3:9-17; 4:19-24", titulo:"As doze pedras",
   nota:"O memorial da travessia: ‘para que todos os povos da terra conheçam a mão do SENHOR’. A ponte que o Êxodo deixou armada."},
  {perna:"campanhas", lugar:"jerico", ref:"Js 6:20", leitura:"Js 6:1-21", titulo:"Jericó — as muralhas",
   nota:"Sete voltas, as trombetas, o grito. Raabe e sua casa são poupadas (Js 6:25) — e ela entra na genealogia de Jesus (Mt 1:5)."},
  {perna:"campanhas", lugar:"ai", ref:"Js 7:4-5", leitura:"Js 7:1-12; 8:14-23", titulo:"Ai — a derrota e a tomada",
   nota:"O pecado de Acã ensina que a conquista não é automática; a segunda investida toma a cidade por emboscada."},
  {perna:"campanhas", lugar:"ebal", ref:"Js 8:30-33", leitura:"Js 8:30-35", titulo:"A lei lida no Ebal",
   nota:"Metade do povo defronte do Gerizim, metade defronte do Ebal — como Moisés ordenara (Dt 27). A conquista pausa para ouvir a Torá."},
  {perna:"campanhas", lugar:"gibeao", ref:"Js 10:12-14", leitura:"Js 10:1-15", titulo:"Gibeão — o sol detido",
   nota:"A astúcia gibeonita (Js 9) vira aliança; a coalizão do sul é desfeita na descida de Bete-Horom."},
  {perna:"campanhas", lugar:"hazor", ref:"Js 11:10-11", leitura:"Js 11:1-15", titulo:"Hazor — o norte",
   nota:"Junto às águas de Merom cai a coalizão do norte; só Hazor é queimada — e a arqueologia encontrou o incêndio."},

  {perna:"heranca", lugar:"hebrom", ref:"Js 14:13-14", leitura:"Js 14:6-15", titulo:"Hebrom a Calebe",
   nota:"Quarenta e cinco anos depois de Cades, Calebe cobra a promessa: ‘dá-me este monte’ — aos oitenta e cinco anos."},
  {perna:"heranca", lugar:"silo", ref:"Js 18:1", leitura:"Js 18:1-10", titulo:"Siló — a tenda do encontro",
   nota:"O centro religioso de Israel da conquista até Samuel; as sete tribos restantes recebem a herança por sortes."},
  {perna:"heranca", lugar:"silo", ref:"Js 21:43-45", leitura:"Js 21:43-45; 23:14", titulo:"Nem uma só palavra falhou",
   nota:"O capstone teológico da conquista — repetido por Josué no discurso de despedida (Js 23:14). Ative a camada das tribos no mapa."},
  {perna:"heranca", lugar:"siquem", ref:"Js 24:15", leitura:"Js 24:1-28", titulo:"Siquém — “eu e a minha casa”",
   nota:"A aliança renovada onde Abraão ergueu o primeiro altar (Gn 12:6-7). E os ossos de José, enfim, descansam (Js 24:32) — o arco aberto em Gn 50 se fecha."},

  {perna:"juizes", lugar:"debir", ref:"Jz 3:9-11", leitura:"Jz 2:11-19; 3:7-11", titulo:"Otniel — o primeiro juiz",
   nota:"Jz 2:11-19 descreve o ciclo inteiro: apostasia → opressão → clamor → libertação → recaída. Veja o diagrama abaixo do mapa."},
  {perna:"juizes", lugar:"jerico", ref:"Jz 3:28-30", leitura:"Jz 3:12-30", titulo:"Eúde e a cidade das palmeiras",
   nota:"O canhoto de Benjamim e o tributo a Eglom de Moabe — a história mais picaresca do livro."},
  {perna:"juizes", lugar:"tabor", ref:"Jz 4:14-16", leitura:"Jz 4:4-16", titulo:"Débora e Baraque",
   nota:"‘Os ribeiros de Quisom os arrastaram’ — o cântico de Jz 5 é um dos textos mais antigos da Bíblia."},
  {perna:"juizes", lugar:"harode", ref:"Jz 7:7", leitura:"Jz 7:1-22", titulo:"Gideão — os trezentos",
   nota:"O exército é reduzido de 32.000 a 300 ‘para que Israel não se glorie’. Trombetas, cântaros e tochas contra Midiã."},
  {perna:"juizes", lugar:"mispa-g", ref:"Jz 11:32-33", leitura:"Jz 11:1-11,29-33", titulo:"Jefté, o gileadita",
   nota:"O rejeitado que vira libertador — e o voto trágico (Jz 11:34-40) que o atlas não esconde."},
  {perna:"juizes", lugar:"zora", ref:"Jz 13:24-25", leitura:"Jz 13:2-5,24-25; 16:28-30", titulo:"Sansão — de Zorá a Gaza",
   nota:"O nazireu do vale de Soreque: Timna, Léhi, Gaza — força e fraqueza, até o templo de Dagom."},
  {perna:"juizes", lugar:"belem", ref:"Jz 21:25", leitura:"Jz 21:25", titulo:"“Não havia rei em Israel” (→ F5)", futura:true,
   nota:"O livro fecha em anarquia — e a esperança sai de Belém: nos dias dos juízes, a família de Rute parte para Moabe, e de Belém virá o rei. A ponte para Rute, Samuel e a monarquia."}
];

/* o ciclo dos juízes (Jz 2:11-19) — diagrama */
var CICLO = [
  {t:"apostasia",  s:"“fizeram o que era mau” (Jz 2:11)"},
  {t:"opressão",   s:"“entregou-os na mão dos inimigos” (2:14)"},
  {t:"clamor",     s:"“gemiam por causa dos opressores” (2:18)"},
  {t:"libertação", s:"“o SENHOR suscitava juízes” (2:16)"}
];

var lugById={}; LUG.forEach(function(l){lugById[l.id]=l;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var pernaById={}; PERNAS.forEach(function(p){pernaById[p.id]=p;});

return {FONTES:FONTES, CONF:CONF, AF:AF, LUG:LUG, TRIBOS:TRIBOS, PERNAS:PERNAS, ETAPAS:ETAPAS, CICLO:CICLO,
        lug:function(id){return lugById[id];},
        af:function(id){return afById[id];},
        perna:function(id){return pernaById[id];}};
})();
