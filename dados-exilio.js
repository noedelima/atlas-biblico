/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F7 — Exílio e retorno
   Da mesa na Babilônia ao "sol da justiça": Daniel e Ezequiel no
   cativeiro, o edito de Ciro, o segundo Templo, Ester, Neemias —
   e Malaquias, o último verso do Antigo Testamento.
   Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR).
   ═══════════════════════════════════════════════════════════════════ */
window.EXILIO = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do Antigo Oriente", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-levas", fonte:"anais", conf:"att",
   txt:"As deportações são história datada: a crônica babilônica registra a tomada de Jerusalém de 597 a.C. (a 2ª leva, com o rei Joaquim — cujas rações aparecem em tablets de Babilônia)."},
  {id:"a-babilonia", fonte:"anais", conf:"att",
   txt:"Babilônia é dos sítios mais célebres do mundo: o portão de Ishtar, a Via Processional e o zigurate Etemenanki (a memória de Babel) foram escavados."},
  {id:"a-quebar", fonte:"anais", conf:"att",
   txt:"O rio Quebar (Ez 1:1) = o canal Kabaru, junto a Nippur — nomeado nos arquivos comerciais de Murashu, onde abundam nomes judaítas."},
  {id:"a-queda-bab", fonte:"anais", conf:"att",
   txt:"A queda da Babilônia (539 a.C.) é registrada pela crônica de Nabonido e pelo cilindro de Ciro — a noite de Dn 5 tem data."},
  {id:"a-ciro", fonte:"anais", conf:"prob",
   txt:"O cilindro de Ciro documenta a política geral de repatriação de povos e cultos; o edito de Ed 1 é o caso judeu dessa política — o documento bíblico em si não foi achado."},
  {id:"a-templo2", fonte:"acad", conf:"prob",
   txt:"O segundo Templo (dedicado em 515 a.C.) é historicamente firme; fisicamente, o que se vê hoje é a plataforma posterior de Herodes."},
  {id:"a-susa", fonte:"anais", conf:"att",
   txt:"Susã = Shush, no Irã: a apadana e o palácio persa de Ester e Neemias foram amplamente escavados."},
  {id:"a-ester", fonte:"acad", conf:"prob",
   txt:"O Assuero de Ester é usualmente identificado com Xerxes I (486–465); a historicidade dos detalhes é debatida — a geografia de Susã, não."},
  {id:"a-neemias", fonte:"anais", conf:"prob",
   txt:"O ano 20 de Artaxerxes I (Ne 2:1) = 445 a.C. — sincronismo persa firme; papiros de Elefantina citam personagens do círculo de Neemias (Sambalate)."},
  {id:"a-70anos", fonte:"acad", conf:"deb",
   txt:"Os '70 anos' de Jeremias (Jr 25:11) admitem duas contagens: 605→536 (da 1ª leva ao retorno) ou 586→515 (do Templo destruído ao Templo dedicado). O atlas mostra as duas sem escolher."},
  {id:"a-malaquias", fonte:"calc", conf:"der",
   txt:"Malaquias fecha o cânon profético por volta de ~430 a.C. (derivado do contexto pós-Neemias); depois, os ~400 anos sem profeta — até João Batista (Mt 11:13-14)."},
  {id:"a-rota-ex", fonte:"calc", conf:"der",
   txt:"As rotas de ida e volta seguem o arco do Eufrates (a rota de sempre — a de Abraão, na direção contrária); o traçado é esquemático."},
  {id:"a-datas-persa", fonte:"anais", conf:"att",
   txt:"O período persa é bem datado: 539 (queda da Babilônia), 538 (repatriações), 520–515 (Ageu/Zacarias e a dedicação), 445 (Neemias) — sincronismos com as crônicas e a cronologia aquemênida."}
];

/* lugares — ldx/ldy: ajuste fino do rótulo no mapa */
var LUG = [
  {id:"jerusalem", nome:"Jerusalém", lon:35.23, lat:31.77, conf:"att",  idl:"a cidade em ruínas — e reerguida", af:"a-templo2", ldx:-74, ldy:-6},
  {id:"babilonia", nome:"Babilônia", lon:44.42, lat:32.54, conf:"att",  idl:"portão de Ishtar · Etemenanki", af:"a-babilonia", ldy:14},
  {id:"quebar",    nome:"rio Quebar",lon:45.23, lat:32.13, conf:"att",  idl:"canal Kabaru, junto a Nippur", af:"a-quebar", ldy:14},
  {id:"susa",      nome:"Susã",      lon:48.25, lat:32.19, conf:"att",  idl:"Shush — a apadana persa", af:"a-susa"}
];

var PERNAS = [
  {id:"babilonia", nome:"Na Babilônia", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"As levas descem, mas os céus se abrem no cativeiro: Daniel na corte, a fornalha, Ezequiel junto ao Quebar — e a escrita na parede."},
  {id:"retorno", nome:"O retorno", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"O edito de Ciro, o altar entre as ruínas, a obra parada e retomada — e o segundo Templo dedicado."},
  {id:"muros", nome:"Os muros e a espera", cor:"#147a56", corUi:"#2ea87d",
   intro:"Ester em Susã, Neemias e os muros em 52 dias, a Lei lida na praça — e Malaquias fecha o AT esperando."}
];

var ETAPAS = [
  {perna:"babilonia", lugar:"jerusalem", ref:"Dn 1:1-2", leitura:"Dn 1:1-7", titulo:"As levas — 605 · 597 · 586",
   nota:"Três ondas de deportação; a segunda (597, com o rei Joaquim) está na crônica babilônica — e as rações do rei preso aparecem em tablets da própria Babilônia."},
  {perna:"babilonia", lugar:"babilonia", ref:"Dn 1:8", leitura:"Dn 1:8-21", titulo:"Daniel na corte",
   via:[[36.8,35.6],[39.5,36.2],[42.0,34.9]],
   nota:"Resolver no coração: a fidelidade começa no cardápio. Deus dá aos quatro jovens saber — e a Daniel, o entendimento de visões."},
  {perna:"babilonia", lugar:"babilonia", ref:"Dn 3:17-18", leitura:"Dn 3:13-28", titulo:"A fornalha — “mas, se não…”",
   nota:"A fé que não negocia: ‘o nosso Deus pode nos livrar; mas, se não, fica sabendo que não serviremos aos teus deuses’."},
  {perna:"babilonia", lugar:"quebar", ref:"Ez 37:4-6", leitura:"Ez 37:1-14", titulo:"Ezequiel — os ossos secos",
   nota:"Junto ao canal Kabaru os céus se abrem no exílio (Ez 1): a glória não ficou presa em Jerusalém. E o vale de ossos responde: ‘vivereis’."},
  {perna:"babilonia", lugar:"babilonia", ref:"Dn 5:26-28", leitura:"Dn 5:1-9,24-31", titulo:"A escrita na parede — 539",
   nota:"Mene, mene, tequel, parsim. Naquela noite a Babilônia caiu — a crônica de Nabonido data a noite."},

  {perna:"retorno", lugar:"babilonia", ref:"Ed 1:2-3", leitura:"Ed 1:1-11", titulo:"O edito de Ciro — 538",
   nota:"‘Para que se cumprisse a palavra do SENHOR pela boca de Jeremias’ — a política persa de repatriação (cilindro de Ciro) vira, para Judá, promessa cumprida."},
  {perna:"retorno", lugar:"jerusalem", ref:"Ed 3:11", leitura:"Ed 3:1-13", titulo:"O altar entre as ruínas",
   via:[[42.0,34.9],[39.5,36.2],[36.8,35.6]],
   nota:"Choro e júbilo no mesmo grito: os velhos que viram o primeiro Templo choram; os jovens gritam de alegria — ‘e não se podia distinguir’."},
  {perna:"retorno", lugar:"jerusalem", ref:"Ed 5:1-2", leitura:"Ed 4:24; 5:1-5", titulo:"A obra parada — e os profetas",
   nota:"Dezesseis anos de obra parada, até Ageu e Zacarias (520 a.C.): ‘subi ao monte, trazei madeira, edificai a casa’ (Ag 1:8)."},
  {perna:"retorno", lugar:"jerusalem", ref:"Ed 6:15-16", leitura:"Ed 6:13-22", titulo:"A dedicação — 515",
   nota:"Setenta anos depois: de 586 a 515 — ou de 605 a 536, na outra contagem. As duas leituras dos ‘70 anos’ de Jeremias ficam declaradas abaixo."},

  {perna:"muros", lugar:"susa", ref:"Et 4:14", leitura:"Et 4:10-17", titulo:"Ester — “para um tempo como este”",
   nota:"O livro onde Deus não é nomeado — e está em toda parte. Na Susã escavada (a apadana persa), a festa de Purim nasce de um decreto revertido."},
  {perna:"muros", lugar:"susa", ref:"Ne 1:3-4", leitura:"Ne 1:1-11", titulo:"Neemias ouve — e ora",
   nota:"O copeiro do rei chora por muros que nunca viu. Ano 20 de Artaxerxes: 445 a.C. — sincronismo persa firme."},
  {perna:"muros", lugar:"jerusalem", ref:"Ne 6:15-16", leitura:"Ne 4:15-23; 6:15-16", titulo:"Os muros em 52 dias",
   via:[[44.5,34.0],[40.0,36.0],[36.8,35.4]],
   nota:"Com a trolha numa mão e a lança na outra: ‘e até os nossos inimigos perceberam que esta obra foi feita pelo nosso Deus’."},
  {perna:"muros", lugar:"jerusalem", ref:"Ne 8:8", leitura:"Ne 8:1-12", titulo:"A Lei lida na praça",
   nota:"O eco do Ebal e de Josias: o livro aberto, o povo em pé, o sentido explicado — ‘e a alegria do SENHOR é a vossa força’."},
  {perna:"muros", lugar:"jerusalem", ref:"Ml 4:5-6", leitura:"Ml 3:1-4; 4:1-6", titulo:"O sol da justiça — Malaquias (→ NT)", futura:true,
   nota:"O Antigo Testamento fecha esperando: ‘eis que eu vos envio o profeta Elias’. Seguem-se ~400 anos sem profeta — até um homem vestido de pelos de camelo junto ao Jordão (Mt 11:13-14). A ponte para o Novo Testamento."}
];

/* âncoras do período (a.C.) */
var ANCORAS = {
  af:"a-datas-persa", min:620, max:420,
  eventos:[
    {t:605, txt:"1ª leva — Daniel", conf:"att"},
    {t:597, txt:"2ª leva — crônica babilônica", conf:"att"},
    {t:586, txt:"queda de Jerusalém", conf:"att"},
    {t:539, txt:"a Babilônia cai", conf:"att"},
    {t:538, txt:"o edito de Ciro", conf:"prob"},
    {t:515, txt:"o 2º Templo dedicado", conf:"att"},
    {t:445, txt:"os muros de Neemias", conf:"prob"},
    {t:430, txt:"Malaquias (~)", conf:"der"}
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
