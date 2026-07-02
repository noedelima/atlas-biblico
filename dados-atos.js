/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F9 — Atos · as viagens · o Apocalipse
   "Sereis minhas testemunhas… até os confins da terra" (At 1:8):
   de Pentecostes a Roma pelo Mediterrâneo — e de Patmos, as sete
   cartas e a nova Jerusalém, onde o cânon fecha o círculo do Éden.
   Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR).
   ═══════════════════════════════════════════════════════════════════ */
window.ATOS = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do mundo antigo", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-pentecostes", fonte:"trad", conf:"att",
   txt:"Pentecostes reverte Babel: em Gn 11 as línguas dispersam; em At 2, 'cada um os ouvia falar na sua própria língua'. O cenáculo é tradição; a lista de nações de At 2:9-11 é um mapa."},
  {id:"a-samaria-at", fonte:"anais", conf:"att",
   txt:"Samaria/Sebaste e a estrada de Gaza são geografia firme; com Filipe, o evangelho cruza a primeira fronteira (At 1:8 em ação)."},
  {id:"a-damasco", fonte:"anais", conf:"att",
   txt:"Damasco é das cidades mais antigas do mundo; a 'rua chamada Direita' (At 9:11) ainda atravessa a cidade velha."},
  {id:"a-cesareia-at", fonte:"anais", conf:"att",
   txt:"Cesareia Marítima, o porto de Herodes, foi amplamente escavada — ali apareceu a pedra com o nome de Pôncio Pilatos; ali Cornélio ouviu, e Paulo apelou."},
  {id:"a-antioquia", fonte:"anais", conf:"att",
   txt:"Antioquia do Orontes (Antakya), a terceira cidade do império — onde 'pela primeira vez os discípulos foram chamados cristãos' (At 11:26) e de onde as viagens partem."},
  {id:"a-listra", fonte:"acad", conf:"prob",
   txt:"Listra = região de Hatunsaray, na Licaônia (inscrições fixam a área); a cena de Zeus e Hermes (At 14) combina com o culto local conhecido."},
  {id:"a-filipos", fonte:"anais", conf:"att",
   txt:"Filipos foi escavada (fórum, bema, teatro); 'primeira cidade daquela parte da Macedônia' — a porta da Europa, aberta por uma visão em Trôade."},
  {id:"a-atenas", fonte:"anais", conf:"att",
   txt:"O Areópago e a ágora de Atenas dispensam identificação; altares 'a deus desconhecido' são citados também por autores antigos."},
  {id:"a-corinto", fonte:"anais", conf:"att",
   txt:"Corinto: o bema onde Paulo compareceu foi escavado — e a inscrição de Gálio em Delfos data o procônsul em 51/52 d.C.: a âncora absoluta de Atos."},
  {id:"a-efeso-at", fonte:"anais", conf:"att",
   txt:"Éfeso: o teatro do tumulto (At 19:29) está de pé, com ~24 mil lugares; o templo de Ártemis era maravilha do mundo."},
  {id:"a-malta", fonte:"trad", conf:"prob",
   txt:"Malta (Melita, At 28:1) é segura; a 'baía de São Paulo' como ponto do naufrágio é tradição plausível — a náutica de At 27 é elogiada por especialistas."},
  {id:"a-roma", fonte:"anais", conf:"att",
   txt:"Roma dispensa apresentação; Átios termina com Paulo pregando 'sem impedimento' — e a tradição situa seu martírio sob Nero (~67)."},
  {id:"a-patmos", fonte:"anais", conf:"att",
   txt:"Patmos, a ilha do desterro (Ap 1:9), é segura; a 'gruta do Apocalipse' é tradição bizantina. A data usual da visão é ~95 d.C. (Domiciano), com leitura alternativa sob Nero."},
  {id:"a-igrejas", fonte:"anais", conf:"att",
   txt:"As sete cidades de Ap 2–3 são todas identificadas e escavadas — Éfeso, Esmirna, Pérgamo, Tiatira, Sardes, Filadélfia, Laodiceia: um circuito postal natural na Ásia romana."},
  {id:"a-nova-jerusalem", fonte:"calc", conf:"der",
   txt:"A nova Jerusalém não é um sítio no mapa — ela 'desce do céu, da parte de Deus' (Ap 21:2); o ponto é simbólico. O rio e a árvore da vida (Ap 22:1-2) são os do Éden (Gn 2): o cânon fecha o círculo."},
  {id:"a-datas-atos", fonte:"anais", conf:"att",
   txt:"A âncora de Atos é a inscrição de Gálio em Delfos (51/52 d.C., Corinto — At 18:12); o edito de Cláudio (At 18:2) é citado por Suetônio (~49); o incêndio de Roma sob Nero é 64. As demais datas se encadeiam a partir daí (derivadas)."}
];

/* lugares — ldx/ldy: rótulo no mapa */
var LUG = [
  {id:"jerusalem", nome:"Jerusalém",  lon:35.23, lat:31.77, pl:687928, conf:"att",  idl:"Pentecostes · o concílio", af:"a-pentecostes", ldx:12, ldy:6},
  {id:"samaria",   nome:"Samaria",    lon:35.19, lat:32.28, pl:678370, conf:"att",  idl:"a primeira fronteira", af:"a-samaria-at", ldx:-58, ldy:-4},
  {id:"damasco",   nome:"Damasco",    lon:36.31, lat:33.51, pl:678106, conf:"att",  idl:"a rua Direita", af:"a-damasco", ldx:12, ldy:-2},
  {id:"cesareia",  nome:"Cesareia",   lon:34.89, lat:32.50, pl:678401, conf:"att",  idl:"o porto — a pedra de Pilatos", af:"a-cesareia-at", ldx:-64, ldy:-6},
  {id:"antioquia", nome:"Antioquia",  lon:36.18, lat:36.22, pl:658381, conf:"att",  idl:"onde 'cristãos' nasceu (At 11:26)", af:"a-antioquia", ldx:12, ldy:-2},
  {id:"listra",    nome:"Listra",     lon:32.34, lat:37.59, pl:648699, conf:"prob", idl:"Licaônia — 'deuses ou homens?'", af:"a-listra", ldy:-8},
  {id:"filipos",   nome:"Filipos",    lon:24.28, lat:41.01, pl:501482, conf:"att",  idl:"a porta da Europa", af:"a-filipos", ldy:-8},
  {id:"atenas",    nome:"Atenas",     lon:23.72, lat:37.97, pl:579885, conf:"att",  idl:"o Areópago", af:"a-atenas", ldx:10, ldy:12},
  {id:"corinto",   nome:"Corinto",    lon:22.88, lat:37.91, pl:570182, conf:"att",  idl:"o bema — e a âncora de Gálio", af:"a-corinto", ldx:-58, ldy:-4},
  {id:"efeso",     nome:"Éfeso",      lon:27.34, lat:37.94, pl:599612, conf:"att",  idl:"o teatro de At 19", af:"a-efeso-at", ldx:10, ldy:10},
  {id:"malta",     nome:"Malta",      lon:14.41, lat:35.90, pl:462311, conf:"prob", idl:"Melita — o naufrágio", af:"a-malta", ldy:-8},
  {id:"roma",      nome:"Roma",       lon:12.49, lat:41.89, pl:423025, conf:"att",  idl:"'sem impedimento algum'", af:"a-roma", ldx:12, ldy:-2},
  {id:"patmos",    nome:"Patmos",     lon:26.56, lat:37.33, pl:599872, conf:"att",  idl:"a ilha da visão", af:"a-patmos", ldx:-52, ldy:10}
];

/* as sete igrejas (Ap 2–3) — camada */
var IGREJAS = [
  {n:"Éfeso",      lon:27.34, lat:37.94, ldx:-40, ldy:12},
  {n:"Esmirna",    lon:27.14, lat:38.42, ldx:-52, ldy:2},
  {n:"Pérgamo",    lon:27.18, lat:39.13, ldx:-14, ldy:-8},
  {n:"Tiatira",    lon:27.84, lat:38.92, ldx:8,  ldy:-4},
  {n:"Sardes",     lon:28.04, lat:38.49, ldx:8,  ldy:2},
  {n:"Filadélfia", lon:28.52, lat:38.35, ldx:8,  ldy:10},
  {n:"Laodiceia",  lon:29.11, lat:37.84, ldx:8,  ldy:8}
];

var PERNAS = [
  {id:"jerusalem", nome:"Jerusalém e Judeia", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"Pentecostes reverte Babel; Estêvão testemunha; Filipe cruza fronteiras; Saulo cai na estrada — e as portas se abrem em Cesareia."},
  {id:"viagens", nome:"As viagens", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"De Antioquia ao Egeu: Listra, o concílio, a visão que abre a Europa, Atenas, Corinto — e Éfeso, onde a Palavra crescia."},
  {id:"roma", nome:"A Roma — e a Patmos", cor:"#147a56", corUi:"#2ea87d",
   intro:"Preso no Templo, dois anos em Cesareia, o naufrágio, Roma — e, décadas depois, Patmos: as sete cartas e a nova Jerusalém."}
];

var ETAPAS = [
  {perna:"jerusalem", lugar:"jerusalem", ref:"At 2:1-4", leitura:"At 2:1-13,36-41", titulo:"Pentecostes — Babel revertida",
   nota:"Em Gn 11 as línguas dispersaram; aqui, 'cada um os ouvia na sua própria língua' (At 2:6) — o atlas visitou Babel na F1; a lista de nações de At 2:9-11 é um mapa inteiro."},
  {perna:"jerusalem", lugar:"jerusalem", ref:"At 7:59-60", leitura:"At 7:54-60; 8:1-4", titulo:"Estêvão — a primeira testemunha",
   nota:"O discurso de Estêvão (At 7) recapitula o atlas inteiro — Abraão, José, Moisés, o tabernáculo, o Templo. E a dispersão que a morte dele provoca leva a semente adiante."},
  {perna:"jerusalem", lugar:"samaria", ref:"At 8:5-8", leitura:"At 8:4-8,26-39", titulo:"Filipe — Samaria e o caminho de Gaza",
   nota:"'Em Samaria… e até os confins' (At 1:8) começa a acontecer: os samaritanos creem, e um etíope volta para casa lendo Isaías."},
  {perna:"jerusalem", lugar:"damasco", ref:"At 9:3-5", leitura:"At 9:1-19", titulo:"O caminho de Damasco",
   via:[[35.7,32.8]],
   nota:"'Saulo, Saulo, por que me persegues?' — o perseguidor vira o apóstolo dos gentios, e a rua Direita ainda existe."},
  {perna:"jerusalem", lugar:"cesareia", ref:"At 10:44-45", leitura:"At 10:34-48", titulo:"Cornélio — as portas se abrem",
   via:[[35.5,32.9]],
   nota:"No porto de Herodes (onde a arqueologia achou o nome de Pilatos), o Espírito cai sobre gentios — 'a quem Deus purificou, não chames impuro'."},

  {perna:"viagens", lugar:"antioquia", ref:"At 13:2-3", leitura:"At 13:1-5", titulo:"Antioquia — 'separai-me Barnabé e Saulo'",
   via:[[35.4,34.3]],
   nota:"A base das viagens — a cidade onde 'os discípulos pela primeira vez foram chamados cristãos' (At 11:26)."},
  {perna:"viagens", lugar:"listra", ref:"At 14:14-15", leitura:"At 14:8-20", titulo:"Listra — 'também somos homens'",
   via:[[33.9,35.3],[33.0,36.3]],
   nota:"1ª viagem, via Chipre: tomados por Zeus e Hermes num dia, apedrejados no outro. Em Listra, Paulo encontrará Timóteo (At 16:1)."},
  {perna:"viagens", lugar:"jerusalem", ref:"At 15:8-11", leitura:"At 15:1-21", titulo:"O concílio",
   via:[[34.2,36.0],[35.0,33.5]],
   nota:"A pergunta que decidiria tudo: os gentios precisam virar judeus? 'Purificou os seus corações pela fé' — e o evangelho fica livre para o mundo."},
  {perna:"viagens", lugar:"filipos", ref:"At 16:9-10", leitura:"At 16:6-15,25-34", titulo:"A visão — e a Europa",
   via:[[35.0,35.5],[32.0,38.5],[26.2,39.9]],
   nota:"Barrados duas vezes pelo Espírito, até a visão em Trôade: 'passa à Macedônia'. Em Filipos: Lídia, o cárcere, hinos à meia-noite."},
  {perna:"viagens", lugar:"atenas", ref:"At 17:22-23", leitura:"At 17:16-34", titulo:"Atenas — o Deus desconhecido",
   via:[[24.0,40.0]],
   nota:"No Areópago, o evangelho fala grego: 'nele vivemos, nos movemos e existimos' — citando os poetas deles."},
  {perna:"viagens", lugar:"corinto", ref:"At 18:9-11", leitura:"At 18:1-11", titulo:"Corinto — ano e meio",
   nota:"'Tenho muito povo nesta cidade.' O bema foi escavado — e a inscrição de Gálio em Delfos (At 18:12) data a cena em 51/52 d.C.: a âncora absoluta de Atos."},
  {perna:"viagens", lugar:"efeso", ref:"At 19:18-20", leitura:"At 19:8-20", titulo:"Éfeso — 'a Palavra crescia'",
   via:[[24.5,37.5]],
   nota:"Dois anos na escola de Tirano, livros de magia queimados, e um tumulto num teatro que ainda está de pé (At 19:29). Daqui saem cartas — e para cá voltará uma (Ap 2:1)."},

  {perna:"roma", lugar:"jerusalem", ref:"At 21:30-33", leitura:"At 21:27-36", titulo:"Preso no Templo",
   nota:"A viagem a Jerusalém que Paulo sabia perigosa (At 20:22-24) termina em correntes — e as correntes viram púlpito."},
  {perna:"roma", lugar:"cesareia", ref:"At 25:11-12", leitura:"At 25:6-12", titulo:"'Apelo para César'",
   nota:"Dois anos preso no porto; Félix, Festo, Agripa — e o apelo que aponta o leme para Roma."},
  {perna:"roma", lugar:"malta", ref:"At 27:23-25", leitura:"At 27:13-26,39-44", titulo:"O Euroclidão — e Malta",
   via:[[32.0,33.8],[27.0,34.5],[21.0,34.8]],
   nota:"A narrativa náutica mais detalhada da Antiguidade, na avaliação de marinheiros modernos. 'Tem bom ânimo: é necessário que compareças perante César.'"},
  {perna:"roma", lugar:"roma", ref:"At 28:30-31", leitura:"At 28:11-16,23-31", titulo:"Roma — 'sem impedimento algum'",
   via:[[15.2,38.3],[14.0,40.6]],
   nota:"O livro termina aberto de propósito: o evangelho chegou ao centro do mundo, 'com toda a liberdade'. As cartas de Paulo cobrem o mapa que ele andou — Romanos, Coríntios, Gálatas, Efésios, Filipenses…"},
  {perna:"roma", lugar:"patmos", ref:"Ap 1:9-11", leitura:"Ap 1:9-20", titulo:"Patmos — 'eu, João'",
   via:[[15.5,38.0],[21.5,36.2]],
   nota:"Saltamos décadas: sob outro império e outro imperador (~95 d.C., na data usual), um desterrado ouve 'escreve num livro o que vês' — e o mar Egeu vira papel."},
  {perna:"roma", lugar:"efeso", ref:"Ap 2:4-5,7", leitura:"Ap 2:1-7", titulo:"As sete cartas",
   nota:"De Patmos, um circuito postal real: Éfeso, Esmirna, Pérgamo, Tiatira, Sardes, Filadélfia, Laodiceia — a camada no mapa mostra as sete, todas escavadas."},
  {perna:"roma", lugar:"jerusalem", ref:"Ap 21:3-5", leitura:"Ap 21:1-7; 22:1-5,20-21", titulo:"A nova Jerusalém — o fim que é começo", futura:true,
   lnome:"a nova Jerusalém", idl:"a que desce do céu (Ap 21:2) — ponto simbólico",
   via:[[29.5,35.5],[33.0,33.0]],
   nota:"O rio e a árvore da vida (Ap 22:1-2) são os do Éden (Gn 2:9-10) — o primeiro mapa deste atlas. O círculo se fecha: 'a graça do Senhor Jesus Cristo seja com todos' (Ap 22:21)."}
];

/* âncoras do período (d.C.) */
var ANCORAS = {
  af:"a-datas-atos", min:25, max:100,
  eventos:[
    {t:30, txt:"Pentecostes (30 ou 33)", conf:"deb"},
    {t:47, txt:"1ª viagem (~)", conf:"der", far:true},
    {t:49, txt:"edito de Cláudio", conf:"att"},
    {t:51, txt:"Gálio em Corinto — a âncora", conf:"att"},
    {t:60, txt:"Roma (~)", conf:"der"},
    {t:64, txt:"o incêndio — Nero", conf:"att"},
    {t:95, txt:"Patmos (~)", conf:"der"}
  ]
};

var lugById={}; LUG.forEach(function(l){lugById[l.id]=l;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var pernaById={}; PERNAS.forEach(function(p){pernaById[p.id]=p;});

return {FONTES:FONTES, CONF:CONF, AF:AF, LUG:LUG, IGREJAS:IGREJAS, PERNAS:PERNAS, ETAPAS:ETAPAS, ANCORAS:ANCORAS,
        lug:function(id){return lugById[id];},
        af:function(id){return afById[id];},
        perna:function(id){return pernaById[id];}};
})();
