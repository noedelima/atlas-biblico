/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F6 — Salomão e o Templo · o reino dividido
   1–2 Reis: do Templo à queda de Jerusalém. É aqui que a cronologia
   do atlas ancora em datas absolutas (a.C.), pelos sincronismos
   assírios e babilônicos — como prometido desde o primeiro protótipo.
   Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR).
   ═══════════════════════════════════════════════════════════════════ */
window.REIS = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do Antigo Oriente", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-gibeao", fonte:"anais", conf:"att",
   txt:"Gibeão = el-Jib (jarros inscritos); 'o grande alto' onde Salomão sacrificou antes do Templo (1Rs 3:4)."},
  {id:"a-templo", fonte:"trad", conf:"prob",
   txt:"O Templo de Salomão ficava no monte do templo — a localização é tradicional e segura, mas do edifício nada subsiste identificável (as plataformas posteriores recobrem tudo): conhecemo-lo pelo texto."},
  {id:"a-1rs61", fonte:"acad", conf:"deb",
   txt:"1Rs 6:1 — 'no ano 480 depois que os filhos de Israel saíram do Egito': a âncora interna que liga o atlas inteiro. Leitura direta → Êxodo no séc. XV a.C.; leitura simbólica (12 gerações × 40) → o debate segue aberto."},
  {id:"a-siquem", fonte:"anais", conf:"att",
   txt:"Siquém = Tell Balata — onde Abraão ergueu o primeiro altar, Josué renovou a aliança, e o reino se partiu (1Rs 12)."},
  {id:"a-betel-dan", fonte:"anais", conf:"att",
   txt:"Dos dois santuários de Jeroboão, o de Dã foi escavado (Tel Dan): a plataforma de culto é visível. Em Betel (Beitin), o sítio é conhecido; o santuário, não. Em Tel Dan apareceu também a estela que menciona a 'casa de Davi'."},
  {id:"a-samaria", fonte:"anais", conf:"att",
   txt:"Samaria = Sebastia, escavada (palácio de Onri/Acabe, marfins); nos anais assírios a região vira 'Bit-Humri', a 'casa de Onri'."},
  {id:"a-carmelo", fonte:"trad", conf:"prob",
   txt:"O Carmelo é geografia segura; o ponto tradicional do embate de Elias (el-Muhraqa, 'o lugar do fogo') é tradição monástica."},
  {id:"a-dota", fonte:"anais", conf:"att",
   txt:"Dotã = Tell Dothan — a mesma Dotã de José (Gn 37); aqui, Eliseu e os cavalos de fogo (2Rs 6)."},
  {id:"a-megido", fonte:"anais", conf:"att",
   txt:"Megido = Tel Megiddo, patrimônio mundial, dezenas de estratos; aqui caiu Josias (2Rs 23:29) — e o 'Har Magedon' de Ap 16:16 ecoa este nome."},
  {id:"a-cerco", fonte:"anais", conf:"att",
   txt:"O cerco de 701 a.C. é triplamente atestado: 2Rs 18–19, o prisma de Senaqueribe ('Ezequias… como pássaro em gaiola') e os relevos de Laquis. O túnel de Ezequias e a inscrição de Siloé seguem visíveis em Jerusalém."},
  {id:"a-queda", fonte:"anais", conf:"att",
   txt:"A queda de Jerusalém (586 a.C.) é registrada nas crônicas babilônicas; as óstracas de Laquis dão a voz das últimas semanas de Judá."},
  {id:"a-reinos", fonte:"calc", conf:"der",
   txt:"A fronteira entre Israel e Judá oscilou (Betel e Ramá trocaram de mãos mais de uma vez); a linha do mapa é esquemática."},
  {id:"a-datas", fonte:"anais", conf:"att",
   txt:"Neste período a cronologia do atlas ancora em datas absolutas: Qarqar (853), o obelisco negro com Jeú (841), a queda de Samaria (722), o cerco de 701 e a queda de Jerusalém (586 a.C.) são sincronismos firmes com os registros assírios e babilônicos; a divisão (~931) é derivada retrocedendo os reinados."}
];

/* lugares — ldx/ldy: ajuste fino do rótulo no mapa */
var LUG = [
  {id:"gibeao",   nome:"Gibeão",    lon:35.18, lat:31.85, conf:"att",  idl:"el-Jib — 'o grande alto'", af:"a-gibeao", ldx:-24, ldy:14},
  {id:"jerusalem",nome:"Jerusalém", lon:35.23, lat:31.77, conf:"prob", idl:"o monte do templo", af:"a-templo", ldx:12, ldy:2},
  {id:"siquem",   nome:"Siquém",    lon:35.28, lat:32.21, conf:"att",  idl:"Tell Balata — a divisão", af:"a-siquem", ldx:-60, ldy:8},
  {id:"betel",    nome:"Betel",     lon:35.24, lat:31.93, conf:"att",  idl:"o santuário do sul de Jeroboão", af:"a-betel-dan", ldx:-46, ldy:-8},
  {id:"samaria",  nome:"Samaria",   lon:35.20, lat:32.28, conf:"att",  idl:"Sebastia — a casa de Onri", af:"a-samaria", ldx:12, ldy:-4},
  {id:"carmelo",  nome:"monte Carmelo", lon:35.09, lat:32.67, conf:"prob", idl:"el-Muhraqa — o fogo que respondeu", af:"a-carmelo", ldx:-104, ldy:-4},
  {id:"dota",     nome:"Dotã",      lon:35.40, lat:32.42, conf:"att",  idl:"Tell Dothan — os cavalos de fogo", af:"a-dota"},
  {id:"megido",   nome:"Megido",    lon:35.18, lat:32.58, conf:"att",  idl:"Tel Megiddo — a morte de Josias", af:"a-megido", ldx:-56, ldy:10}
];

var PERNAS = [
  {id:"salomao", nome:"Salomão", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"O coração que ouve, a casa que a glória enche, a rainha que vem de longe — e a queda que parte o reino."},
  {id:"dividido", nome:"O reino dividido", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"'Que parte temos em Davi?' — Israel ao norte, Judá ao sul; Elias no Carmelo, Eliseu em Dotã, e Samaria cai."},
  {id:"juda", nome:"Judá até o exílio", cor:"#147a56", corUi:"#2ea87d",
   intro:"Ezequias e o cerco, Josias e o livro, Megido — e a queda de Jerusalém, com uma mesa posta na Babilônia."}
];

var ETAPAS = [
  {perna:"salomao", lugar:"gibeao", ref:"1Rs 3:9,12", leitura:"1Rs 3:4-15", titulo:"“Um coração que ouve”",
   nota:"No grande alto de Gibeão, o sonho: Salomão não pede riqueza nem vida longa — e recebe tudo."},
  {perna:"salomao", lugar:"jerusalem", ref:"1Rs 6:1,7", leitura:"1Rs 6:1-14", titulo:"O Templo — o ano 480",
   via:[[35.21,31.81]],
   nota:"‘No ano 480 depois que os filhos de Israel saíram do Egito’ — a âncora cronológica que liga o atlas inteiro, do Êxodo até aqui. E a casa sobe em silêncio: ‘nem martelo, nem machado’ (6:7)."},
  {perna:"salomao", lugar:"jerusalem", ref:"1Rs 8:10-11", leitura:"1Rs 8:22-30,54-61", titulo:"A glória enche a casa",
   nota:"A nuvem que encheu o tabernáculo (Êx 40:34) agora enche o Templo — e a oração de Salomão já sabe: ‘os céus não te podem conter; quanto menos esta casa’."},
  {perna:"salomao", lugar:"jerusalem", ref:"1Rs 10:6-9", leitura:"1Rs 10:1-13", titulo:"A rainha de Sabá",
   nota:"Do extremo sul da Arábia (a Sabá da Tábua das Nações, Gn 10), uma rainha vem ver — e ‘nem a metade me foi contada’."},
  {perna:"salomao", lugar:"jerusalem", ref:"1Rs 11:9-11", leitura:"1Rs 11:1-13", titulo:"A queda — outros deuses",
   nota:"O coração que ouvia se divide antes do reino: a divisão é anunciada aqui, no auge."},

  {perna:"dividido", lugar:"siquem", ref:"1Rs 12:16", leitura:"1Rs 12:1-20", titulo:"“Que parte temos em Davi?”",
   nota:"Em Siquém — onde Abraão ergueu o primeiro altar e Josué renovou a aliança — o reino se parte: Israel ao norte, Judá ao sul. Ative a camada dos dois reinos no mapa."},
  {perna:"dividido", lugar:"betel", ref:"1Rs 12:28-30", leitura:"1Rs 12:25-33", titulo:"Os bezerros — Betel e Dã",
   via:[[35.25,32.05]],
   nota:"Jeroboão refaz o pecado do Sinai em dose dupla; o santuário do norte, em Dã, foi escavado — a plataforma de culto é visível até hoje."},
  {perna:"dividido", lugar:"samaria", ref:"1Rs 16:23-24", leitura:"1Rs 16:23-33", titulo:"Onri e Samaria",
   via:[[35.22,32.10]],
   nota:"A nova capital do norte dá nome à região nos anais assírios: ‘Bit-Humri’, a casa de Onri. Com Acabe e Jezabel, o baalismo vira política de estado."},
  {perna:"dividido", lugar:"carmelo", ref:"1Rs 18:38-39", leitura:"1Rs 18:20-40", titulo:"Elias no Carmelo",
   nota:"‘Até quando coxeareis entre dois pensamentos?’ — o fogo responde, e o povo cai em terra. Depois do fogo, Elias ouvirá o cicio em Horebe (1Rs 19)."},
  {perna:"dividido", lugar:"dota", ref:"2Rs 6:15-17", leitura:"2Rs 6:8-23", titulo:"Eliseu — os cavalos de fogo",
   via:[[35.30,32.55]],
   nota:"Na mesma Dotã onde José foi vendido (Gn 37), o servo tem os olhos abertos: ‘mais são os que estão conosco’."},
  {perna:"dividido", lugar:"samaria", ref:"2Rs 17:5-8", leitura:"2Rs 17:1-14", titulo:"A queda de Samaria",
   nota:"722 a.C. — Sargão II registra a deportação nos seus anais. As dez tribos do norte saem da história… e entram na saudade dos profetas."},

  {perna:"juda", lugar:"jerusalem", ref:"2Rs 19:32-34", leitura:"2Rs 19:14-19,32-36", titulo:"Ezequias — o cerco de 701",
   nota:"O evento mais bem atestado do arco: 2Rs 18–19, o prisma de Senaqueribe (‘como pássaro em gaiola’) e os relevos de Laquis contam o mesmo cerco — e o túnel de Ezequias ainda leva água em Jerusalém."},
  {perna:"juda", lugar:"jerusalem", ref:"2Rs 22:8,11", leitura:"2Rs 22:8-13; 23:1-3", titulo:"Josias — o livro achado",
   nota:"Uma reforma que começa numa obra no Templo: o livro da lei é achado, lido, e o rei rasga as vestes."},
  {perna:"juda", lugar:"megido", ref:"2Rs 23:29-30", leitura:"2Rs 23:26-30", titulo:"Megido — a morte de Josias",
   via:[[35.15,32.20]],
   nota:"O melhor rei morre no vale mais disputado da terra. O nome de Megido ecoará até o ‘Har Magedon’ do Apocalipse (Ap 16:16)."},
  {perna:"juda", lugar:"jerusalem", ref:"2Rs 25:8-11", leitura:"2Rs 25:1-12", titulo:"A queda de Jerusalém",
   via:[[35.15,32.20]],
   nota:"586 a.C. — as crônicas babilônicas registram; as óstracas de Laquis dão a voz das últimas semanas. A casa arde; o povo parte."},
  {perna:"juda", lugar:"jerusalem", ref:"2Rs 25:27-30", leitura:"2Rs 25:27-30", titulo:"Uma mesa na Babilônia (→ F7)", futura:true, exilio:true,
   nota:"O livro dos Reis termina com um detalhe estranho e cheio de esperança: Joaquim, rei preso, come à mesa do rei da Babilônia. A lâmpada de Davi não se apagou. <a href='exilio.html' style='color:#e9c46a'>Seguir o exílio e o retorno →</a>"}
];

/* âncoras absolutas (a.C.) — onde o atlas encosta na história datada */
var ANCORAS = {
  af:"a-datas", min:950, max:550,
  eventos:[
    {t:931, txt:"a divisão do reino", conf:"der"},
    {t:853, txt:"Qarqar — Acabe nos anais", conf:"att"},
    {t:841, txt:"Jeú no obelisco negro", conf:"att"},
    {t:722, txt:"queda de Samaria", conf:"att"},
    {t:701, txt:"o cerco de Senaqueribe", conf:"att"},
    {t:622, txt:"o livro achado (Josias)", conf:"der"},
    {t:586, txt:"queda de Jerusalém", conf:"att"}
  ]
};

/* os dois reinos (camada) */
var REINOS = {
  af:"a-reinos",
  fronteira:[[34.70,31.98],[35.00,31.96],[35.25,31.97],[35.50,31.95]],
  rotulos:[{n:"ISRAEL", lon:35.32, lat:32.48},{n:"JUDÁ", lon:34.98, lat:31.42}]
};

var lugById={}; LUG.forEach(function(l){lugById[l.id]=l;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var pernaById={}; PERNAS.forEach(function(p){pernaById[p.id]=p;});

return {FONTES:FONTES, CONF:CONF, AF:AF, LUG:LUG, PERNAS:PERNAS, ETAPAS:ETAPAS, ANCORAS:ANCORAS, REINOS:REINOS,
        lug:function(id){return lugById[id];},
        af:function(id){return afById[id];},
        perna:function(id){return pernaById[id];}};
})();
