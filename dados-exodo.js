/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F3 — o Êxodo: a rota do deserto
   Do Egito às planícies de Moabe em três pernas e 18 etapas.
   A geografia da rota é a mais debatida da Bíblia — e o atlas diz isso:
   cada estação carrega fonte e grau de confiança.
   Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR), via texto/*.js.
   ═══════════════════════════════════════════════════════════════════ */
window.EXODO = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do Antigo Oriente", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-rota", fonte:"acad", conf:"deb",
   txt:"A rota do deserto é a geografia mais debatida da Bíblia. O atlas desenha a rota tradicional do sul (Sinai = Jebel Musa); existem propostas ao norte e na Arábia. Estações sem sítio seguro estão marcadas como debatidas."},
  {id:"a-data", fonte:"acad", conf:"deb",
   txt:"A data do Êxodo é debatida: a leitura direta de 1Rs 6:1 aponta o séc. XV a.C.; a leitura arqueológica corrente prefere o séc. XIII (era de Ramessés II). O atlas usa apenas o tempo interno da narrativa — anos desde a saída."},
  {id:"a-ramesses", fonte:"anais", conf:"att",
   txt:"Ramessés = Pi-Ramessés (Qantir), no delta oriental do Nilo; capital de Ramessés II, extensamente escavada."},
  {id:"a-sucote-eg", fonte:"acad", conf:"prob",
   txt:"Sucote (o egípcio Tjeku) = região de Tell el-Maskhuta, no Wadi Tumilat."},
  {id:"a-mar", fonte:"acad", conf:"deb",
   txt:"O yam suf (‘mar dos Juncos’) da travessia é debatido: lagos Amargos, lago Balah ou o golfo de Suez."},
  {id:"a-mara", fonte:"trad", conf:"deb",
   txt:"Mara e Elim são tradicionalmente postas na costa ocidental do Sinai (‘Ain Hawwara e Wadi Gharandel) — sem confirmação."},
  {id:"a-sim", fonte:"trad", conf:"deb",
   txt:"O deserto de Sim, ‘entre Elim e o Sinai’ (Êx 16:1), acompanha a hipótese da rota do sul."},
  {id:"a-refidim", fonte:"acad", conf:"deb",
   txt:"Refidim é usualmente posta no Wadi Feiran, o grande oásis do Sinai meridional — debatido."},
  {id:"a-sinai", fonte:"trad", conf:"prob",
   txt:"O monte Sinai/Horebe = Jebel Musa, tradição contínua desde o séc. IV (mosteiro de Santa Catarina); há propostas alternativas (Jebel Serbal, Har Karkom, Arábia)."},
  {id:"a-quibrote", fonte:"trad", conf:"deb",
   txt:"Quibrote-Taavá e Hazerote seguem a rota hipotética entre o Sinai e Cades."},
  {id:"a-cades", fonte:"acad", conf:"prob",
   txt:"Cades-Barneia = oásis de Ein el-Qudeirat, a identificação dominante desde o séc. XX."},
  {id:"a-hor", fonte:"trad", conf:"deb",
   txt:"O monte Hor é ligado pela tradição (de Josefo em diante) ao Jebel Harun, junto a Petra; leituras modernas preferem sítios perto de Cades."},
  {id:"a-punom", fonte:"acad", conf:"deb",
   txt:"Punom = Feinan, a região de cobre do Arabá; a serpente de bronze é associada à região pela lista de Nm 33:42-43."},
  {id:"a-moabe", fonte:"anais", conf:"att",
   txt:"As ‘planícies de Moabe’ ficam na margem oriental do Jordão, defronte de Jericó — geografia segura."},
  {id:"a-nebo", fonte:"trad", conf:"prob",
   txt:"O monte Nebo = Ras es-Siyagha, tradição bizantina contínua (o memorial de Moisés)."},
  {id:"a-gilgal", fonte:"acad", conf:"deb",
   txt:"Gilgal, ‘ao oriente de Jericó’ (Js 4:19), ainda não foi identificada com segurança."},
  {id:"a-crono-ex", fonte:"calc", conf:"der",
   txt:"Tempo interno da narrativa: Sinai no mês 3 do ano 1 (Êx 19:1); partida no ano 2, mês 2 (Nm 10:11); morte de Arão no ano 40, mês 5 (Nm 33:38); discurso de Moisés no ano 40, mês 11 (Dt 1:3); travessia no ano 41, dia 10 do mês 1 (Js 4:19). Os ~38 anos entre Cades e o Zerede: Dt 2:14."}
];

/* lugares — ldx/ldy: ajuste fino do rótulo no mapa */
var LUG = [
  {id:"ramesses",  nome:"Ramessés",       lon:31.83, lat:30.80, conf:"att",  idl:"Pi-Ramessés (Qantir), delta oriental", af:"a-ramesses", ldx:-70, ldy:-6},
  {id:"sucote-eg", nome:"Sucote",         lon:32.10, lat:30.55, conf:"prob", idl:"Tell el-Maskhuta, Wadi Tumilat", af:"a-sucote-eg", ldy:12},
  {id:"mar-juncos",nome:"mar dos Juncos", lon:32.45, lat:30.25, conf:"deb",  idl:"yam suf — lagos Amargos (?)", af:"a-mar"},
  {id:"mara",      nome:"Mara · Elim",    lon:32.78, lat:29.75, conf:"deb",  idl:"‘Ain Hawwara · Wadi Gharandel (?)", af:"a-mara"},
  {id:"sim",       nome:"deserto de Sim", lon:33.15, lat:29.10, conf:"deb",  idl:"entre Elim e o Sinai (Êx 16:1)", af:"a-sim", ldx:-98, ldy:-2},
  {id:"refidim",   nome:"Refidim",        lon:33.60, lat:28.68, conf:"deb",  idl:"Wadi Feiran (?)", af:"a-refidim", ldx:-58, ldy:-4},
  {id:"sinai",     nome:"monte Sinai",    lon:33.98, lat:28.54, conf:"prob", idl:"Jebel Musa — tradição desde o séc. IV", af:"a-sinai", ldy:14},
  {id:"quibrote",  nome:"Quibrote-Taavá", lon:34.20, lat:29.15, conf:"deb",  idl:"rota Sinai → Cades (hipotética)", af:"a-quibrote"},
  {id:"cades",     nome:"Cades-Barneia",  lon:34.42, lat:30.69, conf:"prob", idl:"Ein el-Qudeirat", af:"a-cades", ldx:-96, ldy:-4},
  {id:"hor",       nome:"monte Hor",      lon:35.41, lat:30.32, conf:"deb",  idl:"tradição: Jebel Harun, junto a Petra", af:"a-hor", ldy:13},
  {id:"punom",     nome:"Punom",          lon:35.49, lat:30.63, conf:"deb",  idl:"Feinan — a serpente de bronze (Nm 33:42-43)", af:"a-punom"},
  {id:"moabe",     nome:"planícies de Moabe", lon:35.60, lat:31.85, conf:"att", idl:"defronte de Jericó, além do Jordão", af:"a-moabe", ldx:-125, ldy:-6},
  {id:"nebo",      nome:"monte Nebo",     lon:35.73, lat:31.77, conf:"prob", idl:"Ras es-Siyagha — o memorial de Moisés", af:"a-nebo", ldy:13},
  {id:"gilgal",    nome:"Gilgal",         lon:35.47, lat:31.87, conf:"deb",  idl:"ao oriente de Jericó (Js 4:19)", af:"a-gilgal", ldx:-46, ldy:-8}
];

var PERNAS = [
  {id:"saida", nome:"A saída",      cor:"#8a5f04", corUi:"#e9c46a",
   intro:"Da noite da Páscoa à chegada ao monte: o mar se abre, o maná desce, a rocha dá água."},
  {id:"sinai", nome:"No Sinai",     cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"Onze meses diante do monte: o Decálogo, a queda do bezerro, e a glória enchendo o tabernáculo."},
  {id:"terra", nome:"Rumo à terra", cor:"#147a56", corUi:"#2ea87d",
   intro:"De Cades aos campos de Moabe: os espias, os quarenta anos, a serpente — e Moisés vendo a terra do Nebo."}
];

/* etapas — ref: destaque (renderizado do texto integral) · leitura: passagem ampliada */
var ETAPAS = [
  {perna:"saida", lugar:"ramesses", ref:"Êx 12:37", leitura:"Êx 12:29-42", titulo:"A noite da Páscoa", quando:"ano 1 · mês 1",
   nota:"O cordeiro, o sangue nos umbrais, a partida ‘apressadamente’ — 1Co 5:7 lê Cristo como ‘nossa Páscoa’."},
  {perna:"saida", lugar:"sucote-eg", ref:"Êx 13:21-22", leitura:"Êx 13:17-22", titulo:"Coluna de nuvem e de fogo",
   nota:"Deus não os leva pelo ‘caminho da terra dos filisteus’ (a estrada costeira): a rota do deserto começa aqui. E os ossos de José vão junto (Êx 13:19)."},
  {perna:"saida", lugar:"mar-juncos", ref:"Êx 14:21-22", leitura:"Êx 14:5-31", titulo:"O mar se abre",
   nota:"Na outra margem responde o cântico de Moisés e Miriã (Êx 15)."},
  {perna:"saida", lugar:"mara", ref:"Êx 15:23-25", leitura:"Êx 15:22-27", titulo:"Mara e Elim", via:[[32.6,30.0]]},
  {perna:"saida", lugar:"sim", ref:"Êx 16:4", leitura:"Êx 16:1-18", titulo:"O maná", quando:"ano 1 · mês 2 (Êx 16:1)", via:[[32.9,29.4]],
   nota:"Jo 6:31-35 retoma o maná: ‘eu sou o pão da vida’."},
  {perna:"saida", lugar:"refidim", ref:"Êx 17:5-6", leitura:"Êx 17:1-16", titulo:"Água da rocha — e Amaleque",
   nota:"1Co 10:4 relê a rocha; em Refidim, Josué entra em cena pela primeira vez."},
  {perna:"saida", lugar:"sinai", ref:"Êx 19:4-6", leitura:"Êx 19:1-9", titulo:"A chegada ao monte", quando:"ano 1 · mês 3 (Êx 19:1)"},

  {perna:"sinai", lugar:"sinai", ref:"Êx 20:1-3", leitura:"Êx 20:1-21", titulo:"O Decálogo"},
  {perna:"sinai", lugar:"sinai", ref:"Êx 32:1", leitura:"Êx 32:1-14", titulo:"O bezerro — e a intercessão"},
  {perna:"sinai", lugar:"sinai", ref:"Êx 40:34-38", leitura:"Êx 40:16-38", titulo:"A glória enche o tabernáculo", quando:"ano 2 · mês 1 (Êx 40:17)",
   nota:"Onze meses acampados diante do monte: quase todo o Levítico acontece aqui."},

  {perna:"terra", lugar:"quibrote", ref:"Nm 11:4-6", leitura:"Nm 11:4-25", titulo:"As sepulturas do desejo", quando:"ano 2 · mês 2 — a nuvem se levanta (Nm 10:11)", via:[[34.05,28.85]]},
  {perna:"terra", lugar:"cades", ref:"Nm 13:30-33", leitura:"Nm 13:17-33; 14:26-35", titulo:"Os espias — e os quarenta anos", quando:"ano 2", via:[[34.3,29.9]],
   nota:"Dez espias veem gigantes; Calebe e Josué veem a promessa. A geração fica pelo caminho — Hb 3–4 relê o episódio."},
  {perna:"terra", lugar:"cades", ref:"Nm 20:10-12", leitura:"Nm 20:1-13", titulo:"Meribá — as águas da contenda", quando:"ano 40",
   nota:"Entre a etapa anterior e esta passam-se ~38 anos (Dt 2:14) — o grande silêncio narrativo do deserto. Miriã morre em Cades (Nm 20:1)."},
  {perna:"terra", lugar:"hor", ref:"Nm 20:28-29", leitura:"Nm 20:22-29", titulo:"A morte de Arão", quando:"ano 40 · mês 5 (Nm 33:38)", via:[[34.9,30.45]]},
  {perna:"terra", lugar:"punom", ref:"Nm 21:8-9", leitura:"Nm 21:4-9", titulo:"A serpente de bronze", via:[[35.35,30.2],[35.5,30.4]],
   nota:"‘Como Moisés levantou a serpente no deserto…’ — Jo 3:14-15. A rota contorna Edom pelo Arabá."},
  {perna:"terra", lugar:"moabe", ref:"Nm 22:1", leitura:"Dt 1:1-8", titulo:"As planícies de Moabe", quando:"ano 40 · mês 11 (Dt 1:3)", via:[[35.55,31.0],[35.58,31.5]],
   nota:"Defronte de Jericó: Balaão (Nm 22–24), Baal-Peor (Nm 25) e todo o Deuteronômio acontecem aqui."},
  {perna:"terra", lugar:"nebo", ref:"Dt 34:1,4-5", leitura:"Dt 34", titulo:"Moisés vê a terra"},
  {perna:"terra", lugar:"gilgal", ref:"Js 3:15-17", leitura:"Js 3:9-17; 4:19-24", titulo:"A travessia do Jordão (→ F4)", futura:true, quando:"ano 41 · mês 1 · dia 10 (Js 4:19)",
   nota:"A ponte para a Conquista: as doze pedras de Gilgal são o memorial da passagem. <a href='conquista.html' style='color:#e9c46a'>Seguir a Conquista →</a>"}
];

/* cronologia — anos desde a saída (eixo com quebra nos ~38 anos) */
var CRONO = {
  af:"a-crono-ex",
  zonas:[{a:0,b:2.2},{a:2.2,b:38.8,quebra:true,rotulo:"≈38 anos (Dt 2:14)"},{a:38.8,b:41.2}],
  eventos:[
    {t:0.04, txt:"a Páscoa — saída"},
    {t:0.21, txt:"chegada ao Sinai"},
    {t:1.09, txt:"partida do Sinai"},
    {t:1.35, txt:"os espias em Cades"},
    {t:39.1, txt:"Meribá"},
    {t:39.37,txt:"morte de Arão"},
    {t:39.87,txt:"Moabe — Dt 1:3"},
    {t:40.03,txt:"travessia do Jordão"}
  ]
};

var lugById={}; LUG.forEach(function(l){lugById[l.id]=l;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var pernaById={}; PERNAS.forEach(function(p){pernaById[p.id]=p;});

return {FONTES:FONTES, CONF:CONF, AF:AF, LUG:LUG, PERNAS:PERNAS, ETAPAS:ETAPAS, CRONO:CRONO,
        lug:function(id){return lugById[id];},
        af:function(id){return afById[id];},
        perna:function(id){return pernaById[id];}};
})();
