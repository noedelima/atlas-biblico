/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F8 — Os Evangelhos
   "E a Palavra se fez carne" (Jo 1:14): de Belém à ascensão, na
   geografia da Galileia e da Judeia — com o esquema de Jerusalém da
   Paixão e a cronologia cruzando a fronteira a.C./d.C.
   Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR).
   ═══════════════════════════════════════════════════════════════════ */
window.EVANGELHOS = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do mundo antigo", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-belem-nt", fonte:"trad", conf:"att",
   txt:"Belém, 'a cidade de Davi' — Mq 5:2 cumprida (Mt 2:5-6); a basílica da Natividade guarda a tradição desde o séc. IV (Justino a cita já no II)."},
  {id:"a-censo", fonte:"acad", conf:"deb",
   txt:"O recenseamento de Lc 2:2 ('sendo Quirino governador da Síria') é um crux clássico de cronologia: o censo conhecido de Quirino é de 6 d.C. — as harmonizações propostas seguem debatidas."},
  {id:"a-nazare", fonte:"anais", conf:"att",
   txt:"Nazaré era uma aldeia pequena — e existia: casas e silos do séc. I foram escavados sob a cidade moderna. 'Pode vir algo bom de Nazaré?' (Jo 1:46)."},
  {id:"a-batismo", fonte:"trad", conf:"prob",
   txt:"'Betânia, além do Jordão' (Jo 1:28) é tradicionalmente posta em Al-Maghtas/Wadi al-Kharrar, na margem oriental — tradição bizantina contínua; a localização exata é discutida."},
  {id:"a-deserto", fonte:"calc", conf:"der",
   txt:"O 'deserto' da tentação é a região árida da Judeia, acima de Jericó; o monte da Quarentena é tradição posterior — a região é segura, o ponto não."},
  {id:"a-cana", fonte:"acad", conf:"deb",
   txt:"Caná da Galileia: Kafr Kanna (tradição dos peregrinos) × Khirbet Qana (preferência acadêmica corrente) — debate aberto."},
  {id:"a-cafarnaum", fonte:"anais", conf:"att",
   txt:"Cafarnaum foi escavada: a sinagoga (sobre a de basalto do séc. I) e a casa octogonal venerada como 'casa de Pedro' — 'a sua cidade' (Mt 9:1) tem chão."},
  {id:"a-bemav", fonte:"trad", conf:"prob",
   txt:"O 'monte' do sermão é tradicionalmente a encosta sobre Tabga/Cafarnaum (monte das Bem-aventuranças) — geografia plausível, tradição posterior."},
  {id:"a-lago", fonte:"anais", conf:"att",
   txt:"O lago da Galileia (Genesaré, Tiberíades) é a geografia mais firme dos evangelhos; o 'barco do séc. I' achado em 1986 é contemporâneo das cenas."},
  {id:"a-betsaida", fonte:"acad", conf:"deb",
   txt:"Betsaida: et-Tell × el-Araj — as escavações recentes reacenderam o debate sobre qual tell é a cidade de Pedro, André e Filipe (Jo 1:44)."},
  {id:"a-sicar", fonte:"anais", conf:"att",
   txt:"O poço de Jacó, junto a Sicar/Siquém (Jo 4:5-6), é dos pontos mais seguros da geografia evangélica — o mesmo chão de Gn 33:19."},
  {id:"a-cfilipe", fonte:"anais", conf:"att",
   txt:"Cesareia de Filipe = Banias, junto às fontes do Jordão e à gruta de Pã — o cenário da confissão de Pedro é bem conhecido."},
  {id:"a-tabor-nt", fonte:"trad", conf:"deb",
   txt:"O 'monte alto' da transfiguração: o Tabor é a tradição desde o séc. IV; o Hermom (perto de Cesareia de Filipe, no contexto de Mc 8–9) é a alternativa moderna."},
  {id:"a-betania-nt", fonte:"anais", conf:"att",
   txt:"Betânia = el-Azariyeh ('a de Lázaro'), na encosta oriental das Oliveiras — o nome árabe guarda a memória."},
  {id:"a-getsemani", fonte:"trad", conf:"prob",
   txt:"Getsêmani ('lagar de azeite'), no sopé das Oliveiras, é tradição contínua; oliveiras milenares seguem no lugar."},
  {id:"a-golgota", fonte:"acad", conf:"prob",
   txt:"Gólgota: o Santo Sepulcro (fora da muralha da época, pedreira antiga, túmulos do séc. I — o caso forte) × o Calvário de Gordon (proposta do séc. XIX, hoje minoritária). O atlas marca o primeiro e declara o segundo."},
  {id:"a-emaus", fonte:"acad", conf:"deb",
   txt:"Emaús (Lc 24:13): quatro candidatos concorrem (Nicópolis, el-Qubeibeh, Abu Ghosh, Motza) — os 'sessenta estádios' não decidem sozinhos."},
  {id:"a-datas-nt", fonte:"anais", conf:"att",
   txt:"As âncoras do período: Herodes morre em 4 a.C. (o nascimento é antes — não há ano zero no calendário); o 'ano 15 de Tibério' (Lc 3:1) cai em 28/29 d.C.; Pilatos governa 26–36 (pedra de Cesareia); a crucificação é 30 ou 33 d.C. — as duas datas seguem em debate."}
];

/* lugares — ldx/ldy: rótulo no mapa geral · inset:{x,y}: posição no esquema de Jerusalém */
var LUG = [
  {id:"belem",     nome:"Belém",              lon:35.20, lat:31.70, conf:"att",  idl:"a cidade de Davi (Mq 5:2)", af:"a-belem-nt", ldx:-46, ldy:12},
  {id:"nazare",    nome:"Nazaré",             lon:35.30, lat:32.70, conf:"att",  idl:"a aldeia dos anos ocultos", af:"a-nazare", ldx:-52, ldy:-6},
  {id:"jordao",    nome:"Betânia do Jordão",  lon:35.55, lat:31.84, conf:"prob", idl:"Al-Maghtas — o batismo", af:"a-batismo", ldy:13},
  {id:"deserto",   nome:"deserto da Judeia",  lon:35.33, lat:31.72, conf:"der",  idl:"a quarentena", af:"a-deserto", ldx:-108, ldy:6},
  {id:"cana",      nome:"Caná",               lon:35.34, lat:32.75, conf:"deb",  idl:"Kafr Kanna × Khirbet Qana", af:"a-cana", ldy:-8},
  {id:"cafarnaum", nome:"Cafarnaum",          lon:35.57, lat:32.88, conf:"att",  idl:"'a sua cidade' — sinagoga escavada", af:"a-cafarnaum", ldx:12, ldy:-4},
  {id:"bemav",     nome:"m. das Bem-aventuranças", lon:35.53, lat:32.87, conf:"prob", idl:"a encosta do sermão", af:"a-bemav", ldx:-148, ldy:2},
  {id:"lago",      nome:"lago da Galileia",   lon:35.59, lat:32.80, conf:"att",  idl:"Genesaré — a tempestade", af:"a-lago", ldy:14},
  {id:"betsaida",  nome:"Betsaida",           lon:35.63, lat:32.91, conf:"deb",  idl:"et-Tell × el-Araj", af:"a-betsaida", ldx:12, ldy:-6},
  {id:"sicar",     nome:"Sicar — o poço",     lon:35.28, lat:32.21, conf:"att",  idl:"o poço de Jacó", af:"a-sicar", ldx:-96, ldy:-4},
  {id:"cfilipe",   nome:"Cesareia de Filipe", lon:35.69, lat:33.25, conf:"att",  idl:"Banias — a confissão", af:"a-cfilipe", ldx:-130, ldy:-4},
  {id:"tabor",     nome:"monte Tabor",        lon:35.39, lat:32.69, conf:"deb",  idl:"transfiguração — Tabor × Hermom", af:"a-tabor-nt", ldy:13},
  {id:"betania",   nome:"Betânia",            lon:35.26, lat:31.77, conf:"att",  idl:"el-Azariyeh — Lázaro", af:"a-betania-nt", ldx:12, ldy:8, inset:{x:900,y:210}},
  {id:"oliveiras", nome:"monte das Oliveiras",lon:35.245,lat:31.78, conf:"att",  idl:"a entrada — e a ascensão", af:"a-datas-nt", ldx:12, ldy:-6, inset:{x:775,y:140}},
  {id:"jerusalem", nome:"Jerusalém",          lon:35.23, lat:31.77, conf:"att",  idl:"o Templo · o cenáculo", af:"a-datas-nt", ldx:-74, ldy:-6, inset:{x:505,y:150}},
  {id:"getsemani", nome:"Getsêmani",          lon:35.24, lat:31.779,conf:"prob", idl:"o lagar de azeite", af:"a-getsemani", inset:{x:668,y:180}},
  {id:"golgota",   nome:"Gólgota",            lon:35.229,lat:31.779,conf:"prob", idl:"Santo Sepulcro (× Gordon)", af:"a-golgota", inset:{x:185,y:48}},
  {id:"tumulo",    nome:"o túmulo",           lon:35.229,lat:31.780,conf:"prob", idl:"'num jardim, perto' (Jo 19:41)", af:"a-golgota", inset:{x:120,y:42}}
];

var PERNAS = [
  {id:"encarnacao", nome:"O Verbo se fez carne", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"De Belém a Caná: o nascimento, a fuga, os anos ocultos de Nazaré, o batismo, o deserto — e o primeiro sinal."},
  {id:"galileia", nome:"Galileia", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"Cafarnaum como base, o lago como palco: o sermão, a tempestade, os cinco mil, a samaritana, a confissão e a glória no monte."},
  {id:"paixao", nome:"A Paixão e a glória", cor:"#147a56", corUi:"#2ea87d",
   intro:"A semana em Jerusalém: Lázaro, o Hosana, o cenáculo, Getsêmani, o Gólgota — e o túmulo vazio. Veja o esquema da cidade abaixo do mapa."}
];

var ETAPAS = [
  {perna:"encarnacao", lugar:"belem", ref:"Lc 2:10-12", leitura:"Lc 2:1-20", titulo:"O nascimento",
   nota:"A linhagem que o atlas seguiu desde Rute chega ao seu alvo (Mt 1). O recenseamento de Lc 2:2 é um crux declarado — ver a proveniência abaixo. Paralelo: Mt 1:18-25."},
  {perna:"encarnacao", lugar:"belem", ref:"Mt 2:13-15", leitura:"Mt 2:1-18", titulo:"Os magos — e a fuga",
   nota:"'Do Egito chamei o meu Filho' (Os 11:1): a seta pontilhada do mapa refaz, na contramão, o caminho de José — o do Gênesis e o da fuga.", egito:true},
  {perna:"encarnacao", lugar:"nazare", ref:"Lc 2:51-52", leitura:"Lc 2:39-52", titulo:"Nazaré — os anos ocultos", via:[[35.08,32.20]],
   nota:"Trinta anos numa aldeia que a arqueologia conhece: casas, silos, uma vida comum. 'Não é este o carpinteiro?' (Mc 6:3)."},
  {perna:"encarnacao", lugar:"jordao", ref:"Mt 3:16-17", leitura:"Mt 3:13-17", titulo:"O batismo", via:[[35.52,32.35]],
   nota:"'No ano 15 do império de Tibério César' (Lc 3:1) — a âncora que data o início do ministério: 28/29 d.C. Paralelos: Mc 1:9-11; Lc 3:21-22; Jo 1:29-34."},
  {perna:"encarnacao", lugar:"deserto", ref:"Mt 4:3-4", leitura:"Mt 4:1-11", titulo:"A tentação",
   nota:"Quarenta dias ecoando os quarenta anos: as três respostas vêm todas de Deuteronômio (Dt 8:3; 6:16; 6:13) — o deserto do Êxodo relido."},
  {perna:"encarnacao", lugar:"cana", ref:"Jo 2:9-11", leitura:"Jo 2:1-11", titulo:"Caná — o primeiro sinal", via:[[35.50,32.20],[35.45,32.55]],
   nota:"'Manifestou a sua glória' — a água dos ritos vira vinho de festa. A identificação do sítio é debatida; o sinal, central."},

  {perna:"galileia", lugar:"cafarnaum", ref:"Mc 2:10-12", leitura:"Mc 2:1-12", titulo:"Cafarnaum — 'a sua cidade'",
   nota:"O telhado aberto, o paralítico, a autoridade para perdoar. A sinagoga e a 'casa de Pedro' foram escavadas — o evangelho tem endereço.", via:[[35.45,32.78]]},
  {perna:"galileia", lugar:"bemav", ref:"Mt 5:3-10", leitura:"Mt 5:1-16", titulo:"O sermão do monte",
   nota:"As bem-aventuranças sobre o lago: a Torá relida da encosta — 'ouvistes o que foi dito… eu, porém, vos digo'. Paralelo: Lc 6:20-26."},
  {perna:"galileia", lugar:"lago", ref:"Mc 4:39-41", leitura:"Mc 4:35-41", titulo:"A tempestade — 'quem é este?'",
   nota:"O lago que os pescadores conheciam de cor obedece a uma palavra. O 'barco do séc. I' achado no lodo em 1986 é contemporâneo da cena."},
  {perna:"galileia", lugar:"betsaida", ref:"Lc 9:16-17", leitura:"Lc 9:10-17", titulo:"Os cinco mil",
   nota:"O único milagre nos quatro evangelhos (Mt 14 · Mc 6 · Lc 9 · Jo 6) — e o eco do maná: pão no deserto, doze cestos."},
  {perna:"galileia", lugar:"sicar", ref:"Jo 4:13-14", leitura:"Jo 4:5-26", titulo:"A samaritana",
   nota:"No poço que Jacó deu a José (Gn 33:19; Js 24:32 — o atlas já esteve aqui duas vezes), a água viva — e a adoração 'em espírito e em verdade'.", via:[[35.40,32.50]]},
  {perna:"galileia", lugar:"cfilipe", ref:"Mt 16:15-18", leitura:"Mt 16:13-20", titulo:"'Tu és o Cristo'",
   nota:"Diante da gruta de Pã e dos templos do império, a pergunta e a confissão. Paralelos: Mc 8:27-30; Lc 9:18-21.", via:[[35.45,32.70],[35.60,33.00]]},
  {perna:"galileia", lugar:"tabor", ref:"Mc 9:2-4", leitura:"Mc 9:2-13", titulo:"A transfiguração",
   nota:"Moisés e Elias — a Lei e os Profetas que o atlas percorreu — conversam com ele. Tabor (tradição) × Hermom (contexto): o debate fica declarado.", via:[[35.55,33.00],[35.45,32.80]]},

  {perna:"paixao", lugar:"betania", ref:"Jo 11:25-26", leitura:"Jo 11:17-44", titulo:"Lázaro — 'eu sou a ressurreição'",
   nota:"A quatro estádios de Jerusalém, o sétimo sinal de João — e a decisão do sinédrio (Jo 11:53). O esquema da cidade abaixo acompanha esta semana."},
  {perna:"paixao", lugar:"oliveiras", ref:"Mc 11:9-10", leitura:"Mc 11:1-11", titulo:"A entrada — Hosana",
   nota:"Do monte das Oliveiras, montado num jumentinho (Zc 9:9), descendo para a cidade que 'não conheceu o tempo da sua visitação' (Lc 19:41-44)."},
  {perna:"paixao", lugar:"jerusalem", ref:"Lc 22:19-20", leitura:"Lc 22:7-23", titulo:"O Templo — e o cenáculo",
   nota:"A purificação do Templo (Mc 11:15-17) e, na quinta-feira, a Páscoa ressignificada: 'isto é o meu corpo… este cálice é a nova aliança'."},
  {perna:"paixao", lugar:"getsemani", ref:"Mc 14:35-36", leitura:"Mc 14:32-42", titulo:"Getsêmani",
   nota:"'Aba, Pai… não o que eu quero, mas o que tu queres.' No lagar de azeite, a obediência é prensada — e oliveiras milenares seguem no lugar."},
  {perna:"paixao", lugar:"golgota", ref:"Jo 19:17-18,30", leitura:"Jo 19:16-30", titulo:"Gólgota — 'está consumado'",
   nota:"Fora da porta (Hb 13:12), 'o lugar da Caveira'. As duas propostas de localização ficam declaradas na proveniência — a cruz não depende delas."},
  {perna:"paixao", lugar:"tumulo", ref:"Mt 28:5-6", leitura:"Mt 28:1-10", titulo:"O túmulo vazio",
   nota:"'Não está aqui: ressuscitou.' No caminho de volta, Emaús (Lc 24:13-35) — cuja localização é tão debatida quanto o coração dos dois discípulos era lento."},
  {perna:"paixao", lugar:"oliveiras", ref:"Lc 24:50-51", leitura:"Lc 24:44-53", titulo:"A ascensão — e a promessa (→ Atos)", futura:true,
   nota:"'Sereis minhas testemunhas… até os confins da terra' (At 1:8). A grande comissão (Mt 28:18-20) arma a ponte. <a href='atos.html' style='color:#e9c46a'>Seguir até os confins — Atos e o Apocalipse →</a>"}
];

/* a cronologia cruzando a fronteira a.C./d.C. */
var ANCORAS = {
  af:"a-datas-nt", min:-8, max:36,
  eventos:[
    {t:-5, txt:"nascimento (antes de 4 a.C.)", conf:"der"},
    {t:-4, txt:"morte de Herodes", conf:"att"},
    {t:28, txt:"ano 15 de Tibério (Lc 3:1)", conf:"att"},
    {t:30, txt:"crucificação — 30", conf:"deb"},
    {t:33, txt:"— ou 33", conf:"deb"}
  ]
};

var lugById={}; LUG.forEach(function(l){lugById[l.id]=l;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var pernaById={}; PERNAS.forEach(function(p){pernaById[p.id]=p;});

return {FONTES:FONTES, CONF:CONF, AF:AF, LUG:LUG, PERNAS:PERNAS, ETAPAS:ETAPAS, ANCORAS:ANCORAS,
        lug:function(id){return lugById[id];},
        af:function(id){return afById[id];},
        perna:function(id){return pernaById[id];}};
})();
