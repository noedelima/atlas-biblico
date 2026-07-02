/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F12 — Os profetas · as vozes
   Treze livros, treze vozes: de Jonas (~780) a Joel (sem data,
   declarado assim) — cada profeta ancorado na linha dos reis pelos
   títulos e sincronismos, com o grau de confiança dito.
   Ezequiel, Daniel e Malaquias falam do exílio: estão no módulo 7.
   Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR).
   ═══════════════════════════════════════════════════════════════════ */
window.PROFETAS = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do mundo antigo", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-jonas", fonte:"trad", conf:"prob",
   txt:"2Rs 14:25 nomeia 'Jonas, filho de Amitai' sob Jeroboão II (~780) — a única âncora externa; o livro em si é narrativa sobre o profeta, e Nínive é um dos sítios mais escavados do mundo antigo."},
  {id:"a-amos", fonte:"anais", conf:"att",
   txt:"Amós data a si mesmo: 'dois anos antes do terremoto', sob Uzias e Jeroboão II (Am 1:1) — e um grande terremoto de ~760 a.C. deixou rastro nas escavações do norte (Hazor); Zc 14:5 ainda o lembrava séculos depois."},
  {id:"a-oseias", fonte:"trad", conf:"prob",
   txt:"O título percorre de Uzias a Ezequias e nomeia Jeroboão II: ministério longo, do auge do norte até a véspera de 722. O casamento de Oseias é a parábola viva do livro."},
  {id:"a-isaias", fonte:"anais", conf:"att",
   txt:"A visão data do 'ano em que o rei Uzias morreu' (~740, Is 6:1), e a crise de 701 é triplamente atestada (módulo 6). O Grande Rolo de Isaías (1QIsaᵃ, Qumran, ~125 a.C.) é o livro bíblico mais antigo que existe completo."},
  {id:"a-miqueias", fonte:"trad", conf:"prob",
   txt:"Contemporâneo de Isaías (título: Jotão a Ezequias) — e citado nominalmente um século depois, dentro do próprio cânon: 'Miqueias profetizou nos dias de Ezequias…' (Jr 26:18, citando Mq 3:12)."},
  {id:"a-naum", fonte:"anais", conf:"att",
   txt:"Naum celebra uma queda que aconteceu de verdade: Nínive caiu em 612 a.C. — o ano está na crônica babilônica. O livro se escreve entre a queda de Tebas (663, Na 3:8) e a de Nínive."},
  {id:"a-sofonias", fonte:"trad", conf:"prob",
   txt:"'Nos dias de Josias' (Sf 1:1), com genealogia de quatro gerações até Ezequias — o dia do Senhor pregado às vésperas da reforma de 622."},
  {id:"a-habacuque", fonte:"acad", conf:"prob",
   txt:"Os caldeus 'levantados' à vista (Hc 1:6) situam o livro entre 612 e 598. O comentário de Habacuque (1QpHab) está entre os manuscritos mais célebres de Qumran."},
  {id:"a-jeremias", fonte:"anais", conf:"att",
   txt:"Jeremias é dos livros mais ancorados do AT: do ano 13 de Josias (627) até depois de 586 — e selos de oficiais nomeados no livro (Jeucal filho de Selemias; Gedalias filho de Pasur — Jr 38:1) foram escavados na Cidade de Davi."},
  {id:"a-obadias", fonte:"acad", conf:"deb",
   txt:"Obadias não traz data. A leitura clássica o põe sobre 586 — Edom aplaudindo a queda do irmão (cf. Sl 137:7, 'lembra-te, SENHOR, dos filhos de Edom no dia de Jerusalém') — mas é datação por conteúdo, declarada como tal."},
  {id:"a-ageu", fonte:"anais", conf:"att",
   txt:"O profeta mais datado da Bíblia: ano, mês e dia do calendário de Dario I (Ag 1:1 = agosto/setembro de 520 a.C.) — a mesma âncora persa do módulo 7; o Templo fica pronto em 515 (Ed 6:15)."},
  {id:"a-zacarias", fonte:"anais", conf:"att",
   txt:"Zc 1:1 cai no mesmo outono de 520, ao lado de Ageu (Ed 5:1 os nomeia juntos). As visões noturnas carregam o Templo até o fim — e Zc 9:9 e 14:8 seguem ecoando até os módulos 8 e 9."},
  {id:"a-joel", fonte:"acad", conf:"deb",
   txt:"Joel não nomeia rei nem data — as propostas vão do século IX ao IV a.C. O atlas o declara em aberto; a barra dele é tracejada de ponta a ponta, de propósito."},
  {id:"a-vozes", fonte:"calc", conf:"der",
   txt:"As barras mostram o ministério aproximado de cada voz, pelos títulos dos livros e pelos sincronismos (barra tracejada = datação debatida ou aberta; losango cheio = âncora firme). Ezequiel, Daniel e Malaquias falam do exílio e do retorno — são o módulo 7; Lamentações é o módulo 11."}
];

/* as treze vozes — ini/fim em a.C. (aprox.); jl sem data */
var VOZES = [
  {id:"jn", sigla:"Jn", nome:"Jonas",     ini:790, fim:765, conf:"prob", af:"a-jonas",     alvo:"Nínive",
   tema:"a pena de Deus pela grande cidade"},
  {id:"am", sigla:"Am", nome:"Amós",      ini:765, fim:750, anc:760, conf:"att",  af:"a-amos",      alvo:"Israel (norte)",
   tema:"justiça como um ribeiro impetuoso"},
  {id:"os", sigla:"Os", nome:"Oseias",    ini:755, fim:722, conf:"prob", af:"a-oseias",    alvo:"Israel (norte)",
   tema:"o amor que não desiste"},
  {id:"is", sigla:"Is", nome:"Isaías",    ini:740, fim:690, anc:740, conf:"att",  af:"a-isaias",    alvo:"Judá",
   tema:"do trono alto ao servo sofredor"},
  {id:"mq", sigla:"Mq", nome:"Miqueias",  ini:735, fim:700, conf:"prob", af:"a-miqueias",  alvo:"Judá",
   tema:"Belém — e o que o Senhor pede"},
  {id:"na", sigla:"Na", nome:"Naum",      ini:660, fim:612, anc:612, conf:"att",  af:"a-naum",      alvo:"Nínive",
   tema:"a queda do império"},
  {id:"sf", sigla:"Sf", nome:"Sofonias",  ini:640, fim:622, conf:"prob", af:"a-sofonias",  alvo:"Judá",
   tema:"o dia do Senhor — e o canto"},
  {id:"hc", sigla:"Hc", nome:"Habacuque", ini:610, fim:598, conf:"prob", af:"a-habacuque", alvo:"Judá",
   tema:"o justo viverá pela fé"},
  {id:"jr", sigla:"Jr", nome:"Jeremias",  ini:627, fim:582, anc:627, conf:"att",  af:"a-jeremias",  alvo:"Judá",
   tema:"o novo pacto, dito entre ruínas"},
  {id:"ob", sigla:"Ob", nome:"Obadias",   ini:587, fim:583, conf:"deb",  af:"a-obadias",   alvo:"Edom",
   tema:"o dia do irmão"},
  {id:"ag", sigla:"Ag", nome:"Ageu",      ini:521, fim:519, anc:520, conf:"att",  af:"a-ageu",      alvo:"o retorno",
   tema:"'subi o monte, trazei madeira'"},
  {id:"zc", sigla:"Zc", nome:"Zacarias",  ini:521, fim:515, anc:520, conf:"att",  af:"a-zacarias",  alvo:"o retorno",
   tema:"'não por força, nem por violência'"},
  {id:"jl", sigla:"Jl", nome:"Joel",      ini:null, fim:null, conf:"deb", af:"a-joel",     alvo:"Judá (?)",
   tema:"o Espírito sobre toda carne"}
];

var PERNAS = [
  {id:"norte", nome:"Ao norte — antes de 722", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"Jonas, Amós e Oseias falam ao reino do norte no seu auge — e na sua véspera: Samaria cai em 722, como o módulo 6 mostrou."},
  {id:"juda", nome:"A Judá — antes de 586", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"De Isaías a Jeremias (e Obadias sobre Edom): um século e meio de avisos, com as âncoras de 701, 612 e 586 firmes nos registros."},
  {id:"retorno", nome:"Do retorno — e sem data", cor:"#147a56", corUi:"#2ea87d",
   intro:"Ageu e Zacarias, datados ao dia em 520, levantam o segundo Templo; Joel fica declaradamente sem data — e Pentecostes o cita inteiro."}
];

var ETAPAS = [
  {perna:"norte", voz:"jn", ref:"Jn 4:10-11", leitura:"Jn 1:1-4,15-17; 3:1-10; 4:5-11", titulo:"Jonas — a pena de Nínive",
   anc2:"Jeroboão II (2Rs 14:25) · ~780 a.C.", href2:"reis.html",
   nota:"O profeta que foge, o peixe, a cidade que se converte — e o rícino. O livro inteiro desemboca numa pergunta de Deus, e termina nela: 'não teria eu pena de Nínive?'"},
  {perna:"norte", voz:"am", ref:"Am 5:24", leitura:"Am 5:4-24; 7:10-15", titulo:"Amós — 'corra o juízo como as águas'",
   anc2:"'dois anos antes do terremoto' (Am 1:1) · ~760", href2:"reis.html",
   nota:"Um boiadeiro de Tecoa (Judá) mandado ao santuário real do norte: 'não sou profeta nem filho de profeta' (7:14). O terremoto que o data deixou rastro em Hazor — e memória em Zc 14:5."},
  {perna:"norte", voz:"os", ref:"Os 11:8", leitura:"Os 11:1-11; 14:1-9", titulo:"Oseias — o amor que não desiste",
   anc2:"do auge do norte até a véspera de 722", href2:"reis.html",
   nota:"O casamento de Oseias é a mensagem: amar quem trai. 'Quando Israel era menino, eu o amei; do Egito chamei o meu filho' (11:1) — o verso que Mateus lerá sobre outro Filho (Mt 2:15, módulo 8)."},

  {perna:"juda", voz:"is", ref:"Is 53:5", leitura:"Is 6:1-8; 9:2-7; 52:13–53:12", titulo:"Isaías — do trono ao servo",
   anc2:"'no ano em que o rei Uzias morreu' (Is 6:1) · 701 no módulo 6", href2:"reis.html",
   nota:"A visão do trono (~740), o menino de Is 9, o servo de Is 53 — o capítulo do AT mais citado no NT. E o Grande Rolo de Qumran guarda o livro inteiro desde ~125 a.C.: dá para ler hoje o que o etíope lia no carro (At 8, módulo 9)."},
  {perna:"juda", voz:"mq", ref:"Mq 6:8", leitura:"Mq 5:2-5; 6:6-8; 7:18-20", titulo:"Miqueias — Belém, e o que é bom",
   anc2:"Mq 5:2 é a resposta dos escribas em Mt 2", href2:"evangelhos.html",
   nota:"'E tu, Belém Efrata…' — a profecia que os escribas recitam a Herodes (módulo 8). E a síntese que ficou: 'praticar a justiça, amar a bondade, andar humildemente com o teu Deus'."},
  {perna:"juda", voz:"na", ref:"Na 1:7", leitura:"Na 1:1-8; 3:18-19", titulo:"Naum — a queda de Nínive",
   anc2:"612 a.C. — a crônica babilônica data a queda", href2:"reis.html",
   nota:"O alívio de um mundo oprimido: o império que Jonas viu poupado cai de verdade em 612 — 'todos os que ouvirem a tua fama baterão palmas'. Entre Jonas e Naum, a mesma cidade e as duas pontas da paciência de Deus."},
  {perna:"juda", voz:"sf", ref:"Sf 3:17", leitura:"Sf 1:14-18; 3:14-20", titulo:"Sofonias — o dia do Senhor, e o canto",
   anc2:"'nos dias de Josias' (Sf 1:1) — antes da reforma de 622", href2:"reis.html",
   nota:"Começa no dia 'grande e amargo' e termina no verso mais terno dos profetas: 'ele se alegrará em ti com júbilo… se regozijará em ti com canto'. Deus cantando sobre o seu povo."},
  {perna:"juda", voz:"hc", ref:"Hc 2:4", leitura:"Hc 1:1-4; 2:1-4,14; 3:17-19", titulo:"Habacuque — o justo viverá pela fé",
   anc2:"os caldeus à vista (Hc 1:6) · entre 612 e 598", href2:"reis.html",
   nota:"O profeta que reclama com Deus — e sobe à torre esperar resposta. 'O justo viverá pela sua fé' vira a espinha de Romanos (Rm 1:17, módulo 10); e Hc 3:17-19 é a fé quando a colheita falha inteira."},
  {perna:"juda", voz:"jr", ref:"Jr 31:31-33", leitura:"Jr 1:4-10; 29:10-14; 31:31-34", titulo:"Jeremias — o novo pacto",
   anc2:"de Josias (627) até depois de 586 — os 70 anos do módulo 7", href2:"exilio.html",
   nota:"Quarenta anos avisando, preso, jogado na cisterna — e é dele o verso mais aberto do exílio ('vos farei voltar', 29:10-14, a contagem do módulo 7) e o novo pacto que Hebreus cita inteiro (módulo 10). A tradição lhe dá também Lamentações (módulo 11)."},
  {perna:"juda", voz:"ob", ref:"Ob 1:15", leitura:"Ob 1", titulo:"Obadias — Edom, no dia do irmão",
   anc2:"lido sobre 586 — datação por conteúdo (debatida)", href2:"exilio.html",
   nota:"O livro mais curto do AT — 21 versos, inteiro na leitura. Edom (Esaú) aplaudindo a queda de Jacó: a rivalidade dos gêmeos do módulo 2, cobrada no dia de Jerusalém (cf. Sl 137:7)."},

  {perna:"retorno", voz:"ag", ref:"Ag 2:9", leitura:"Ag 1:1-11; 2:1-9", titulo:"Ageu — 'subi o monte, trazei madeira'",
   anc2:"520 a.C., datado ao dia (Ag 1:1) — o Templo do módulo 7", href2:"exilio.html",
   nota:"O profeta mais datado da Bíblia: ano, mês e dia de Dario. Quatro sermões em quatro meses, e o canteiro do Templo reabre — 'a glória desta última casa será maior que a da primeira'."},
  {perna:"retorno", voz:"zc", ref:"Zc 9:9", leitura:"Zc 4:1-10; 9:9-10; 14:8-9", titulo:"Zacarias — 'não por força'",
   anc2:"520–518 (Zc 1:1) · com Ageu (Ed 5:1)", href2:"exilio.html",
   nota:"As visões noturnas sustentam a obra: 'não por força nem por violência, mas pelo meu Espírito' (4:6). O rei manso sobre um jumento (9:9) é o Hosana do módulo 8 — e as águas vivas de 14:8 correm até Ap 22."},
  {perna:"retorno", voz:"jl", ref:"Jl 2:28", leitura:"Jl 2:12-13,25-32", titulo:"Joel — 'derramarei o meu Espírito'",
   anc2:"sem data — declarado em aberto · citado inteiro em At 2", href2:"atos.html",
   nota:"Sem rei no título e sem data — só os gafanhotos e a promessa: 'restituirei os anos que o gafanhoto comeu'. Pedro abre Pentecostes lendo Joel (At 2:16, módulo 9): a voz sem data acabou datando o dia mais datado da igreja."}
];

var vozById={}; VOZES.forEach(function(v){vozById[v.id]=v;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var pernaById={}; PERNAS.forEach(function(p){pernaById[p.id]=p;});

return {FONTES:FONTES, CONF:CONF, AF:AF, VOZES:VOZES, PERNAS:PERNAS, ETAPAS:ETAPAS,
        voz:function(id){return vozById[id];},
        af:function(id){return afById[id];},
        perna:function(id){return pernaById[id];}};
})();
