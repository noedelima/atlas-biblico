/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F10 — As cartas · Romanos a Judas
   As 21 cartas do Novo Testamento sobre o mapa que Paulo andou:
   cada etapa é uma carta — de onde partiu, para onde foi, quando —
   com as datas penduradas na mesma âncora de Gálio (51/52 d.C.).
   Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR).
   ═══════════════════════════════════════════════════════════════════ */
window.CARTAS = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do mundo antigo", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-tessalonica", fonte:"anais", conf:"att",
   txt:"Tessalônica, na via Egnácia, é geografia firme; 1 Tessalonicenses (~50/51, de Corinto) é possivelmente o documento cristão mais antigo que existe — datado pela âncora de Gálio."},
  {id:"a-galacia", fonte:"acad", conf:"deb",
   txt:"'Galácia' é debatido: a região étnica ao norte, ou a província ao sul (Antioquia da Pisídia, Icônio, Listra, Derbe — At 13–14)? A data acompanha o debate: ~48 (antes do concílio) × ~55."},
  {id:"a-corinto-cartas", fonte:"anais", conf:"att",
   txt:"Corinto: o bema foi escavado e Gálio (51/52) data a estadia. 1 Coríntios foi escrita de Éfeso ('ficarei em Éfeso até Pentecostes', 1Co 16:8); Romanos, de Corinto — Febe, de Cencreia, a leva (Rm 16:1-2)."},
  {id:"a-prisao", fonte:"acad", conf:"prob",
   txt:"As 'cartas da prisão' (Ef, Fp, Cl, Fm) falam de cadeias (Ef 6:20; Fp 1:13; Cl 4:18). Roma (~60–62, At 28) é a leitura tradicional; Cesareia e Éfeso são alternativas discutidas."},
  {id:"a-colossos", fonte:"anais", conf:"att",
   txt:"Colossos está identificada (a colina em Honaz, no vale do Lico), vizinha de Laodiceia e Hierápolis (Cl 4:13) — mas segue praticamente não escavada. Paulo nunca a visitou (Cl 2:1)."},
  {id:"a-pastorais", fonte:"acad", conf:"deb",
   txt:"As pastorais (1–2Tm, Tt) supõem viagens depois de At 28; parte da academia as situa depois de Paulo. O atlas registra a cronologia tradicional (~62–67) e marca o debate."},
  {id:"a-creta", fonte:"anais", conf:"att",
   txt:"Creta e suas cidades (Gortina, Cnossos) são geografia firme; 'te deixei em Creta para pores em ordem o que falta' (Tt 1:5) é o registro da missão de Tito."},
  {id:"a-hebreus", fonte:"acad", conf:"deb",
   txt:"Hebreus é anônima já para a igreja antiga — 'quem escreveu, só Deus sabe' (Orígenes). 'Os da Itália vos saúdam' (Hb 13:24) sugere Roma como destino (ou origem); é anterior a ~96, quando Clemente de Roma a cita."},
  {id:"a-tiago", fonte:"trad", conf:"prob",
   txt:"Tiago, o irmão do Senhor, presidia em Jerusalém (At 15; Gl 2:9); a carta sai 'às doze tribos da Dispersão' (Tg 1:1) — o endereço é difuso de propósito: vai aonde a sinagoga da diáspora estiver."},
  {id:"a-babilonia", fonte:"trad", conf:"prob",
   txt:"'A que está em Babilônia vos saúda' (1Pe 5:13) é lida desde a igreja antiga como Roma. O endereço de 1Pe 1:1 — Ponto, Galácia, Capadócia, Ásia e Bitínia — é a camada do mapa: cinco províncias romanas reais."},
  {id:"a-joaninas", fonte:"trad", conf:"prob",
   txt:"As três cartas de João não trazem endereço — mas Irineu (que ouviu Policarpo, discípulo de João) situa o apóstolo em Éfeso. O 'círculo joanino', ~85–95: a mesma cidade de At 19 e Ap 2."},
  {id:"a-dispersao", fonte:"anais", conf:"att",
   txt:"Ponto, Galácia, Capadócia, Ásia e Bitínia (1Pe 1:1): cinco províncias romanas reais, meio milhão de km² — o endereço mais largo do Novo Testamento."},
  {id:"a-efeso-cartas", fonte:"anais", conf:"att",
   txt:"Éfeso, amplamente escavada, é a cidade mais 'endereçada' do NT: 1 Coríntios partiu daqui, Efésios e 1–2 Timóteo vieram para cá, a tradição situa João aqui — e Ap 2:1 abre as sete cartas por aqui."},
  {id:"a-roma-cartas", fonte:"anais", conf:"att",
   txt:"Roma: destino de Romanos (uma igreja que Paulo ainda não conhecia), origem tradicional das cartas da prisão, de 2 Timóteo e de 1 Pedro ('Babilônia'). O centro para onde tudo converge."},
  {id:"a-datas-cartas", fonte:"anais", conf:"att",
   txt:"A âncora continua sendo Gálio (51/52 d.C.): 1–2 Tessalonicenses caem em ~50/51, e a sequência se encadeia — 1Co ~55, Rm ~57, prisão ~60–62. Das gerais, só as pontas são firmes (Hb antes de ~96; as de João até ~100); o resto vai marcado como debatido."}
];

/* lugares — ldx/ldy: rótulo no mapa */
var LUG = [
  {id:"roma",        nome:"Roma",        lon:12.49, lat:41.89, conf:"att",  idl:"para onde Romanos foi — e de onde a prisão escreve", af:"a-roma-cartas", ldx:12, ldy:-2},
  {id:"corinto",     nome:"Corinto",     lon:22.93, lat:37.94, conf:"att",  idl:"de onde Romanos partiu", af:"a-corinto-cartas", ldx:-58, ldy:-4},
  {id:"tessalonica", nome:"Tessalônica", lon:22.94, lat:40.64, conf:"att",  idl:"a via Egnácia — a carta mais antiga", af:"a-tessalonica", ldx:-84, ldy:-4},
  {id:"filipos",     nome:"Filipos",     lon:24.29, lat:41.01, conf:"att",  idl:"a igreja da alegria", af:"a-prisao", ldx:8, ldy:-6},
  {id:"galacia",     nome:"Galácia",     lon:32.20, lat:39.20, conf:"deb",  idl:"as igrejas da região — norte × sul", af:"a-galacia", ldx:10, ldy:2},
  {id:"efeso",       nome:"Éfeso",       lon:27.34, lat:37.94, conf:"att",  idl:"a cidade mais endereçada do NT", af:"a-efeso-cartas", ldx:10, ldy:10},
  {id:"colossos",    nome:"Colossos",    lon:29.26, lat:37.79, conf:"att",  idl:"no vale do Lico — nunca visitada (Cl 2:1)", af:"a-colossos", ldx:10, ldy:6},
  {id:"creta",       nome:"Creta",       lon:24.95, lat:35.20, conf:"att",  idl:"a ilha de Tito", af:"a-creta", ldx:-8, ldy:16},
  {id:"jerusalem",   nome:"Jerusalém",   lon:35.23, lat:31.77, conf:"att",  idl:"Tiago — 'às doze tribos da Dispersão'", af:"a-tiago", ldx:12, ldy:6}
];

/* a Dispersão (1Pe 1:1) — camada: as cinco províncias */
var DISPERSAO = [
  {n:"PONTO",     lon:36.20, lat:41.00},
  {n:"GALÁCIA",   lon:32.20, lat:39.60},
  {n:"CAPADÓCIA", lon:34.80, lat:38.60},
  {n:"ÁSIA",      lon:28.30, lat:39.10},
  {n:"BITÍNIA",   lon:30.40, lat:40.55}
];

var PERNAS = [
  {id:"caminho", nome:"No caminho", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"As cartas das viagens: 1–2 Tessalonicenses (as mais antigas), Gálatas, 1–2 Coríntios — e Romanos, o evangelho por escrito, mandado na frente."},
  {id:"prisao", nome:"Da prisão — e as pastorais", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"De cadeias: Efésios, Filipenses, Colossenses e Filemom. Depois, as pastorais: 1 Timóteo, Tito — e 2 Timóteo, o testamento."},
  {id:"gerais", nome:"As gerais — e as de João", cor:"#147a56", corUi:"#2ea87d",
   intro:"Hebreus, Tiago, 1–2 Pedro, Judas — cartas para todos — e as três de João, do círculo de Éfeso: 'Deus é amor'."}
];

var ETAPAS = [
  {perna:"caminho", lugar:"tessalonica", de:"corinto", ref:"1Ts 4:13-14", leitura:"1Ts 1:2-10; 4:13-18", titulo:"1 Tessalonicenses — a esperança",
   nota:"Provavelmente o texto cristão mais antigo que existe (~50/51, de Corinto — a âncora de Gálio vale para ela também): consolo para quem perdeu os seus, 'para que não vos entristeçais como os que não têm esperança'."},
  {perna:"caminho", lugar:"tessalonica", de:"corinto", ref:"2Ts 3:11-13", leitura:"2Ts 2:13-17; 3:6-13", titulo:"2 Tessalonicenses — firmeza",
   curva:-1,
   nota:"Pouco depois da primeira: contra o boato de que 'o dia já chegou', a receita é sobriedade — 'não vos canseis de fazer o bem'."},
  {perna:"caminho", lugar:"galacia", ref:"Gl 2:20", leitura:"Gl 2:15-21; 5:1,13-25", titulo:"Gálatas — a liberdade",
   nota:"Destino debatido (a região ao norte × a província ao sul) e data debatida (~48 × ~55) — pode ser a carta mais antiga de Paulo. O conteúdo não é debatido: 'para a liberdade Cristo nos libertou' (Gl 5:1)."},
  {perna:"caminho", lugar:"corinto", de:"efeso", ref:"1Co 13:4-7", leitura:"1Co 1:10-17; 13; 15:1-8", titulo:"1 Coríntios — o amor",
   nota:"Escrita de Éfeso (1Co 16:8) para a cidade do bema: divisões, mesa, dons — e no meio, o capítulo 13 inteiro na leitura. Em 15:3-8, o credo mais antigo do cristianismo."},
  {perna:"caminho", lugar:"corinto", de:"filipos", ref:"2Co 12:9-10", leitura:"2Co 4:5-18; 12:1-10", titulo:"2 Coríntios — o tesouro em vasos",
   nota:"Da Macedônia (2Co 7:5-6), a mais pessoal das cartas: lágrimas, ironia, o espinho — e 'a minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza'."},
  {perna:"caminho", lugar:"roma", de:"corinto", ref:"Rm 8:38-39", leitura:"Rm 1:16-17; 8:31-39; 12:1-2", titulo:"Romanos — o evangelho por escrito",
   nota:"De Corinto (~57), levada por Febe de Cencreia (Rm 16:1-2), para uma igreja que Paulo ainda não tinha visto: a exposição mais completa do evangelho — mandada na frente, preparando a chegada que At 28 contará."},

  {perna:"prisao", lugar:"efeso", de:"roma", ref:"Ef 2:8-10", leitura:"Ef 2:1-10; 3:14-21", titulo:"Efésios — pela graça",
   nota:"'Embaixador em cadeias' (Ef 6:20). Alguns manuscritos antigos não trazem 'em Éfeso' (1:1) — talvez uma circular para toda a Ásia; o atlas a pendura na cidade-mãe."},
  {perna:"prisao", lugar:"filipos", de:"roma", ref:"Fp 2:6-11", leitura:"Fp 1:12-21; 2:1-11; 4:4-13", titulo:"Filipenses — a alegria na cadeia",
   curva:-1,
   nota:"Para a primeira igreja da Europa (At 16), a carta que mais repete 'alegria' — escrita preso. No coração, o hino de Fp 2:6-11: a descida e a exaltação."},
  {perna:"prisao", lugar:"colossos", de:"roma", ref:"Cl 1:15-17", leitura:"Cl 1:13-23; 3:1-4,12-17", titulo:"Colossenses — a imagem do invisível",
   nota:"Para uma igreja que Paulo nunca viu (Cl 2:1), plantada por Epafras no vale do Lico — vizinha de Laodiceia, com quem devia trocar cartas (Cl 4:16). O hino: 'nele tudo subsiste'."},
  {perna:"prisao", lugar:"colossos", de:"roma", ref:"Fm 1:15-16", leitura:"Fm 1:1-25", titulo:"Filemom — a carta de um fôlego",
   curva:-1,
   nota:"A mais curta de Paulo — 25 versos, inteira na leitura: Onésimo, escravo fugido, volta a Filemom 'não já como escravo, mas como irmão amado'. Uma revolução em uma página."},
  {perna:"prisao", lugar:"efeso", de:"filipos", ref:"1Tm 1:15", leitura:"1Tm 3:14-16; 6:6-16", titulo:"1 Timóteo — a casa de Deus",
   curva:-1,
   nota:"Paulo seguira para a Macedônia; Timóteo ficara em Éfeso (1Tm 1:3). As pastorais supõem viagens depois de At 28 — cronologia debatida, registrada como tal."},
  {perna:"prisao", lugar:"creta", ref:"Tt 3:4-7", leitura:"Tt 2:11-14; 3:3-8", titulo:"Tito — em Creta",
   nota:"'Te deixei em Creta para pores em ordem o que falta' (Tt 1:5) — igrejas novas, presbíteros, e duas das sínteses mais límpidas do evangelho (2:11-14; 3:4-7). À frente, inverno em Nicópolis (3:12)."},
  {perna:"prisao", lugar:"efeso", de:"roma", ref:"2Tm 4:6-8", leitura:"2Tm 1:3-14; 4:1-8,16-18", titulo:"2 Timóteo — o testamento",
   nota:"Da segunda prisão romana (tradição, ~66/67), a última voz de Paulo no cânon: 'combati o bom combate, acabei a carreira, guardei a fé' — e o pedido humaníssimo: 'traze a capa e os pergaminhos' (4:13)."},

  {perna:"gerais", lugar:"roma", ref:"Hb 12:1-2", leitura:"Hb 1:1-4; 11:1-10; 12:1-3", titulo:"Hebreus — a nuvem de testemunhas",
   pre:"para", idl:"destino provável — 'os da Itália vos saúdam' (Hb 13:24)",
   nota:"Anônima desde sempre ('quem escreveu, só Deus sabe' — Orígenes). O capítulo 11 percorre este atlas inteiro: Abel, Noé, Abraão, Moisés, Raabe, Davi — 'uma tão grande nuvem de testemunhas'."},
  {perna:"gerais", lugar:"jerusalem", ref:"Tg 1:22", leitura:"Tg 1:2-8,22-27; 2:14-26", titulo:"Tiago — fé que age",
   pre:"de", idl:"'às doze tribos da Dispersão' (Tg 1:1)",
   nota:"De Tiago, o irmão do Senhor, que presidia em Jerusalém (At 15), para a diáspora inteira: 'sede praticantes da palavra, e não somente ouvintes' — o provérbio feito carta."},
  {perna:"gerais", lugar:"roma", ref:"1Pe 2:9-10", leitura:"1Pe 1:3-9; 2:4-10,21-25", titulo:"1 Pedro — peregrinos da Dispersão",
   pre:"de", idl:"'a que está em Babilônia' (1Pe 5:13) — Roma, provavelmente",
   nota:"'Aos eleitos peregrinos de Ponto, Galácia, Capadócia, Ásia e Bitínia' (1Pe 1:1) — a camada no mapa mostra as cinco províncias: o endereço mais largo do NT, escrito da 'Babilônia' que saúda no fim."},
  {perna:"gerais", lugar:"roma", ref:"2Pe 3:13", leitura:"2Pe 1:3-11,16-21; 3:8-13", titulo:"2 Pedro — a promessa",
   pre:"de", idl:"'a que está em Babilônia' (1Pe 5:13) — Roma, provavelmente",
   nota:"'Aguardamos novos céus e nova terra, em que habita a justiça' — a mesma promessa que fecha o Apocalipse. Foi a carta mais discutida do cânon na igreja antiga; entrou, e fechou a porta por dentro."},
  {perna:"gerais", lugar:"jerusalem", ref:"Jd 1:24-25", leitura:"Jd 1:1-4,17-25", titulo:"Judas — a doxologia",
   pre:"de", idl:"'irmão de Tiago' (Jd 1:1) — origem debatida",
   nota:"'Judas, servo de Jesus Cristo e irmão de Tiago': 25 versos contra os que 'convertem a graça em libertinagem' — fechando num dos louvores mais citados da liturgia (24-25)."},
  {perna:"gerais", lugar:"efeso", ref:"1Jo 4:7-8", leitura:"1Jo 1:1-4; 4:7-21", titulo:"1 João — Deus é amor",
   pre:"de", idl:"o círculo joanino — tradição de Éfeso",
   nota:"Sem remetente nem endereço — mas a tradição antiga (Irineu, por Policarpo) situa João em Éfeso, onde o atlas já esteve em At 19 e Ap 2. 'O que vimos e ouvimos, isso vos anunciamos.'"},
  {perna:"gerais", lugar:"efeso", ref:"2Jo 1:5-6", leitura:"2Jo 1", titulo:"2 João — 'à senhora eleita'",
   pre:"de", idl:"o círculo joanino — tradição de Éfeso",
   nota:"Treze versos — cabia num só pedaço de papiro: talvez uma igreja saudada como 'senhora eleita'; o recado é o de sempre, 'que nos amemos uns aos outros'."},
  {perna:"gerais", lugar:"efeso", ref:"3Jo 1:4", leitura:"3Jo 1", titulo:"3 João — a Gaio",
   pre:"de", idl:"o círculo joanino — tradição de Éfeso",
   nota:"O livro mais curto da Bíblia (14 versos): Gaio abre a casa aos missionários, Diótrefes fecha a porta — hospitalidade como doutrina. 'Não tenho maior alegria do que ouvir que os meus filhos andam na verdade.'"}
];

/* âncoras do período (d.C.) */
var ANCORAS = {
  af:"a-datas-cartas", min:45, max:100,
  eventos:[
    {t:48, txt:"Gálatas? (48 × 55)", conf:"deb"},
    {t:51, txt:"1–2Ts · Gálio — a âncora", conf:"att"},
    {t:55, txt:"1Co (de Éfeso)", conf:"der", far:true},
    {t:57, txt:"Rm (de Corinto)", conf:"der", far:true},
    {t:61, txt:"da prisão (~60–62)", conf:"der"},
    {t:66, txt:"2Tm (~66/67)", conf:"deb"},
    {t:90, txt:"as de João (~85–95)", conf:"der"}
  ]
};

var lugById={}; LUG.forEach(function(l){lugById[l.id]=l;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var pernaById={}; PERNAS.forEach(function(p){pernaById[p.id]=p;});

return {FONTES:FONTES, CONF:CONF, AF:AF, LUG:LUG, DISPERSAO:DISPERSAO, PERNAS:PERNAS, ETAPAS:ETAPAS, ANCORAS:ANCORAS,
        lug:function(id){return lugById[id];},
        af:function(id){return afById[id];},
        perna:function(id){return pernaById[id];}};
})();
