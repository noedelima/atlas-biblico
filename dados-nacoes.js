/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · A Tábua das Nações, expandida
   Os povos de Gn 10 (e os desdobramentos de Abraão e Ló) rastreados
   por cinco períodos: da dispersão de Babel ao horizonte profético.
   Cada período de cada povo traz o nome da época, a identificação
   (com grau de confiança) e as referências — clicáveis na biblioteca.
   ═══════════════════════════════════════════════════════════════════ */
window.NACOES = (function(){
"use strict";

var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var PERIODOS = [
  {id:"tabua", nome:"A Tábua", sub:"a dispersão de Babel · Gn 10–11",
   intro:"O mapa como Gênesis 10 o desenha: setenta famílias saindo de Sinar 'segundo as suas línguas, nas suas terras' (Gn 10:31). As posições são as identificações tradicionais dos primeiros assentamentos."},
  {id:"patriarcas", nome:"Os patriarcas", sub:"~2000–1500 a.C. · Gn 12–50",
   intro:"O mundo que Abraão atravessa: Egito e Elão já são potências, os heteus vendem sepulturas, os filisteus guardam poços — e nascem os povos-irmãos de Israel: Ismael, Midiã, Edom, Moabe e Amom."},
  {id:"reinos", nome:"Os reinos e os profetas", sub:"~900–540 a.C. · a Idade do Ferro",
   intro:"O período em que quase todos os nomes da Tábua reaparecem — nos profetas e nos anais assírios e babilônicos, muitas vezes com nome novo: Gômer virou os cimérios, Madai é a Média, Javã é a Jônia."},
  {id:"imperios", nome:"Os impérios", sub:"~540 a.C.–100 d.C. · da Pérsia a Roma",
   intro:"As nações da Tábua em escala imperial: Madai e Elão viram a Medo-Pérsia de Ester e Daniel; Javã, o império de Alexandre; Quitim, os 'navios' que Daniel viu — Roma. E Edom termina no trono de Herodes."},
  {id:"horizonte", nome:"O horizonte profético", sub:"as profecias de escopo aberto",
   intro:"Onde os profetas apontam para além do já cumprido, usando os nomes da Tábua como mapa: a coalizão de Gogue (Ez 38–39), os que questionam (Sabá, Dedã, Társis), e as promessas — o Egito 'meu povo', a Assíria 'obra das minhas mãos', Quedar aceito no altar. Papel de cada povo indicado por cor; toda leitura escatológica vai marcada como leitura."}
];

/* papéis no horizonte profético */
var PAPEIS = {
  coalizao:{t:"na companhia de Gogue", cor:"#f0a8c0"},
  pergunta:{t:"os que questionam",     cor:"#9fc6ea"},
  bencao:  {t:"promessa de bênção",    cor:"#7ee0b0"},
  simbolo: {t:"virou símbolo",         cor:"#e9c46a"}
};

/* ── os povos ──
   lin: J (Jafé) · C (Cam) · S (Sem) · A (desdobramentos de Abraão e Ló)
   per.<periodo>: {nome?, lon?, lat?, conf?, id, txt, refs[], papel?}
   (nome/posição/conf herdam do período anterior quando omitidos)     */
var POVOS = [

/* ═══ JAFÉ — "as ilhas das nações" (Gn 10:5) ═══ */
{id:"gomer", nome:"Gômer", lin:"J", pai:"Jafé", conf:"prob", per:{
  tabua:{lon:35, lat:40.3, id:"tronco dos povos do norte (Anatólia/estepe)",
    txt:"Primeiro filho de Jafé, pai de Asquenaz, Rifate e Togarma — o tronco setentrional da Tábua.",
    refs:["Gn 10:2-3","1Cr 1:5-6"]},
  reinos:{nome:"Cimérios", lon:33.5, lat:40.0, ldy:-7, conf:"att", id:"Gimirrai dos anais assírios",
    txt:"Os cimérios (Gimirrai de Sargão II e Assurbanípal) irrompem do norte no séc. VIII–VII a.C., derrubam a Frígia e sacodem a Lídia — o nome de Gômer reaparecendo nos arquivos do império.",
    refs:["Ez 38:6"]},
  horizonte:{papel:"coalizao", id:"'Gômer e tôdas as suas tropas'",
    txt:"Ezequiel o alista, com Bete-Togarma, 'dos lados do norte' na coalizão de Gogue — profecia de escopo aberto, lida como futura por boa parte da tradição.",
    refs:["Ez 38:6"]}
}},
{id:"asquenaz", nome:"Asquenaz", lin:"J", pai:"Jafé › Gômer", conf:"prob", per:{
  tabua:{lon:38.5, lat:41.5, id:"norte do Ararate / estepe",
    txt:"Filho de Gômer; assentado entre o mar Negro e o Cáucaso na leitura tradicional.",
    refs:["Gn 10:3","1Cr 1:6"]},
  reinos:{nome:"Citas (Ashkuza)", lon:41, lat:42.5, conf:"att", id:"Ashkuza/Ishkuza dos textos assírios",
    txt:"Jeremias convoca 'os reinos de Ararate, Mini e Asquenaz' contra a Babilônia — a tríade bate com Urartu, Manneia e os citas (Ashkuza) dos arquivos assírios: geografia real da guerra de 539.",
    refs:["Jr 51:27"]}
}},
{id:"togarma", nome:"Togarma", lin:"J", pai:"Jafé › Gômer", conf:"prob", per:{
  tabua:{lon:38, lat:39.6, ldx:9, ldy:13, id:"Anatólia oriental",
    txt:"Filho de Gômer; ligado a Tegarama/Til-garimmu dos textos hititas e assírios, na alta Anatólia.",
    refs:["Gn 10:3","1Cr 1:6"]},
  reinos:{nome:"Bete-Togarma", conf:"att", id:"feira de cavalos e mulas de Tiro",
    txt:"Ezequiel o conhece como fornecedor de 'cavalos, cavaleiros e mulas' ao mercado de Tiro — o comércio anatólio de cavalos é bem documentado.",
    refs:["Ez 27:14"]},
  horizonte:{papel:"coalizao", id:"'da banda do norte, com tôdas as suas tropas'",
    txt:"Alistado com Gômer na companhia de Gogue (Ez 38:6).",
    refs:["Ez 38:6"]}
}},
{id:"magogue", nome:"Magogue", lin:"J", pai:"Jafé", conf:"deb", per:{
  tabua:{lon:44, lat:43.5, id:"extremo norte (Cítia, na leitura tradicional)",
    txt:"Filho de Jafé. Josefo o identificou com os citas; a localização exata é aberta — 'o extremo norte' é o que o texto sustenta.",
    refs:["Gn 10:2","1Cr 1:5"]},
  horizonte:{papel:"coalizao", id:"a terra de Gogue — e o debate de 'Rôs'",
    txt:"Ezequiel: 'Gogue, da terra de Magogue, príncipe e chefe de Meseque e Tubal'. O atlas registra o debate honesto: ler 'rôs' como nome próprio (LXX) ou como 'chefe' (hebraico comum) muda tudo — e a identificação com nações modernas é leitura, não dado. Em Ap 20:8, 'Gogue e Magogue' já é símbolo universalizado: 'as nações dos quatro cantos da terra'.",
    refs:["Ez 38:2-3","Ez 39:6","Ap 20:8"]}
}},
{id:"madai", nome:"Madai", lin:"J", pai:"Jafé", conf:"att", per:{
  tabua:{lon:47.5, lat:35.5, id:"noroeste do planalto iraniano",
    txt:"Filho de Jafé, epônimo dos medos — atestados desde o séc. IX a.C. nos anais assírios (Amadai).",
    refs:["Gn 10:2","1Cr 1:5"]},
  reinos:{nome:"Média", lon:48.5, lat:34.8, id:"as 'cidades dos medos' — destino do exílio do norte",
    txt:"Para cá foram deportadas as tribos do norte em 722 ('nas cidades dos medos', 2Rs 17:6); Isaías anuncia os medos como flagelo da Babilônia um século e meio antes de 539.",
    refs:["2Rs 17:6","Is 13:17","Jr 51:11"]},
  imperios:{nome:"Medo-Pérsia", lon:50, lat:33, id:"o império da 'lei dos medos e persas'",
    txt:"Com Elão/Pérsia, o segundo império de Daniel: 'PERES — dividido e dado aos medos e persas' (Dn 5:28). É o mundo de Ester, de Ciro e do retorno.",
    refs:["Dn 5:28","Dn 8:20","Et 1:19","Ed 6:2"]},
  horizonte:{papel:"coalizao", id:"a 'Pérsia' de Ez 38:5",
    txt:"O nome persa aparece na coalizão de Gogue — leitura de escopo aberto.",
    refs:["Ez 38:5"]}
}},
{id:"java", nome:"Javã", lin:"J", pai:"Jafé", conf:"att", per:{
  tabua:{lon:26.5, lat:38.2, id:"Jônia — a costa grega do Egeu",
    txt:"Filho de Jafé, pai de Elisá, Társis, Quitim e Rodanim: a família marítima — 'por êstes foram repartidas as ilhas das nações'.",
    refs:["Gn 10:2","Gn 10:4-5"]},
  reinos:{nome:"Jônia (gregos)", lon:25, lat:38.2, id:"mercadores de gente e bronze",
    txt:"Ezequiel vê Javã no mercado de Tiro (escravos e bronze); Isaías o põe entre as 'ilhas remotas que não ouviram a minha fama'; Joel denuncia a venda de judeus 'aos filhos dos gregos'.",
    refs:["Ez 27:13","Is 66:19","Jl 3:6"]},
  imperios:{nome:"Grécia (Alexandre)", lon:23, lat:38, id:"o bode veloz de Daniel",
    txt:"Daniel nomeia: 'o bode peludo é o rei da Grécia [Javã]' — Alexandre; Zacarias vê Sião guerreando 'contra os teus filhos, ó Grécia' (a era dos Macabeus, 1Mc 1:1: Alexandre 'que saiu da terra de Cetim').",
    refs:["Dn 8:21","Dn 11:2","Zc 9:13","1Mc 1:1"]},
  horizonte:{papel:"bencao", id:"anunciadores 'às ilhas remotas'",
    txt:"Em Is 66:19, sobreviventes são enviados 'a Társis, Pul e Lude… a Tubal e Javã, às ilhas remotas' para anunciar a glória — as nações da Tábua viram missão.",
    refs:["Is 66:19"]}
}},
{id:"elisa", nome:"Elisá", lin:"J", pai:"Jafé › Javã", conf:"prob", per:{
  tabua:{lon:33, lat:35.3, ldx:-44, ldy:-6, id:"Alasia — Chipre (nos arquivos de Amarna)",
    txt:"Filho de Javã; Alasia é o nome de Chipre nos arquivos do Bronze (Amarna, Ugarit).",
    refs:["Gn 10:4","1Cr 1:7"]},
  reinos:{id:"a púrpura das 'ilhas de Elisá'",
    txt:"Tiro compra de Elisá o tecido azul e púrpura — o corante das costas cipriotas e egeias.",
    refs:["Ez 27:7"]}
}},
{id:"tarsis", nome:"Társis", lin:"J", pai:"Jafé › Javã", conf:"deb", per:{
  tabua:{lon:-6, lat:37.2, id:"Tartesso (Ibéria)? — o extremo oeste",
    txt:"Filho de Javã. A identificação clássica é Tartesso, na foz do Guadalquivir — o fim do mundo conhecido; Tarso e 'frota de longo curso' são leituras concorrentes, declaradas.",
    refs:["Gn 10:4","1Cr 1:7"]},
  reinos:{nome:"navios de Társis", id:"prata, ferro, estanho e chumbo",
    txt:"A frota proverbial: Salomão e Josafá armam 'navios de Társis'; Jonas foge num deles; Ezequiel lista os metais que Társis punha nas feiras de Tiro — o perfil bate com o comércio atlântico de Tartesso.",
    refs:["1Rs 10:22","1Rs 22:48","Jn 1:3","Ez 27:12"]},
  horizonte:{papel:"pergunta", id:"'os mercadores de Társis' — e os navios que voltam",
    txt:"Em Ez 38:13, Társis questiona Gogue ('vens tu para tomar o despojo?'); em Is 60:9, 'os navios de Társis' trazem os filhos de longe com prata e ouro — e o Sl 72:10 põe seus reis trazendo presentes ao Rei.",
    refs:["Ez 38:13","Is 60:9","Sl 72:10"]}
}},
{id:"quitim", nome:"Quitim", lin:"J", pai:"Jafé › Javã", conf:"att", per:{
  tabua:{lon:33.6, lat:34.9, id:"Kition — Chipre",
    txt:"Filho de Javã; a cidade de Kition (Lárnaca) deu nome à ilha inteira no uso hebraico.",
    refs:["Gn 10:4","Nm 24:24"]},
  reinos:{id:"as costas do ocidente",
    txt:"'Passai às ilhas de Quitim' (Jeremias); Isaías traz de lá a notícia da queda de Tiro — o horizonte marítimo ocidental de Israel.",
    refs:["Jr 2:10","Is 23:1","Is 23:12"]},
  imperios:{nome:"'navios de Quitim' (Roma)", lon:16, lat:38.5, id:"o nome esticado até Roma",
    txt:"Em Dn 11:30, 'navios de Quitim' detêm o rei do norte — o ultimato romano a Antíoco IV (168 a.C., C. Popílio Lenas); 1Mc chama Alexandre 'o que saiu da terra de Cetim' e Roma segue no horizonte: a nomenclatura da Tábua esticada de Chipre ao ocidente inteiro.",
    refs:["Dn 11:30","Nm 24:24","1Mc 1:1","1Mc 8:5"]}
}},
{id:"rodanim", nome:"Rodanim", lin:"J", pai:"Jafé › Javã", conf:"prob", per:{
  tabua:{lon:28, lat:36.4, id:"Rodes e o Egeu",
    txt:"Filho de Javã (grafado Dodanim em parte dos manuscritos de Gênesis; Rodanim em 1Cr) — Rodes e as ilhas.",
    refs:["Gn 10:4","1Cr 1:7"]}
}},
{id:"tubal", nome:"Tubal", lin:"J", pai:"Jafé", conf:"att", per:{
  tabua:{lon:36.5, lat:39.6, ldy:-7, id:"Tabal — Anatólia centro-oriental",
    txt:"Filho de Jafé; o reino de Tabal aparece nos anais assírios de Salmanasar III em diante.",
    refs:["Gn 10:2","1Cr 1:5"]},
  reinos:{id:"escravos e bronze no mercado de Tiro",
    txt:"Par constante de Meseque: 'Javã, Tubal e Meseque negociavam contigo; por tuas mercadorias davam homens e objetos de bronze'.",
    refs:["Ez 27:13","Is 66:19"]},
  horizonte:{papel:"coalizao", id:"sob o 'príncipe de Meseque e Tubal'",
    txt:"Gogue é titulado 'príncipe e chefe de Meseque e Tubal' — os dois reinos anatólios dão o título da coalizão; e Tubal também aparece entre os anunciadores de Is 66:19.",
    refs:["Ez 38:2-3","Ez 39:1","Is 66:19"]}
}},
{id:"meseque", nome:"Meseque", lin:"J", pai:"Jafé", conf:"att", per:{
  tabua:{lon:33, lat:39.2, ldx:-66, id:"Mushki — Anatólia central (Frígia)",
    txt:"Filho de Jafé; os Mushki dos anais assírios (o rei Mitā de Mushki é o Midas frígio das fontes gregas).",
    refs:["Gn 10:2","1Cr 1:5"]},
  reinos:{id:"'ai de mim, que peregrino em Meseque'",
    txt:"No Sl 120, Meseque é o proverbial 'longe, entre gente hostil'; em Ezequiel, negocia gente e bronze com Tiro.",
    refs:["Sl 120:5","Ez 27:13","Ez 32:26"]},
  horizonte:{papel:"coalizao", id:"o outro nome no título de Gogue",
    txt:"'Príncipe e chefe de Meseque e Tubal' (Ez 38:2-3; 39:1).",
    refs:["Ez 38:2-3"]}
}},
{id:"tiras", nome:"Tirás", lin:"J", pai:"Jafé", conf:"deb", per:{
  tabua:{lon:26.5, lat:41.2, id:"trácios? tirrenos? — o Egeu norte",
    txt:"Filho de Jafé de identificação aberta: trácios (tradicional), ou os Tursha/tirrenos dos 'povos do mar' egípcios.",
    refs:["Gn 10:2","1Cr 1:5"]}
}},

/* ═══ CAM — Egito, África e o Levante ═══ */
{id:"cuxe", nome:"Cuxe", lin:"C", pai:"Cam", conf:"att", per:{
  tabua:{lon:32.5, lat:18.5, id:"Núbia — o alto Nilo (Kush egípcio)",
    txt:"Primogênito de Cam; a Núbia dos egípcios. Dele descem povos africanos e árabes — e Ninrode.",
    refs:["Gn 10:6-8","Gn 2:13"]},
  patriarcas:{id:"a fronteira sul do mundo patriarcal",
    txt:"'Terra de Cuxe' já cerca um dos rios do Éden; Moisés casa com uma cuxita (Nm 12:1).",
    refs:["Gn 2:13","Nm 12:1"]},
  reinos:{nome:"Cuxe (25ª dinastia)", lon:31.8, lat:21, id:"quando a Núbia governou o Egito",
    txt:"Tiraca (Taharqa), 'rei de Cuxe', marcha contra Senaqueribe em 701 — a 25ª dinastia núbia no trono do Egito, exatamente como Reis e Isaías o titulam; Zerá, o cuxita, já enfrentara Asa (2Cr 14).",
    refs:["2Rs 19:9","Is 37:9","Is 18:1-2","2Cr 14:9","Jr 13:23"]},
  imperios:{nome:"Etiópia (Candace)", id:"o tesoureiro que voltou lendo Isaías",
    txt:"Em Atos 8, um alto oficial 'de Candace, rainha dos etíopes' — o reino de Meroé, herdeiro de Cuxe — volta de Jerusalém lendo Is 53: a primeira fronteira africana do evangelho.",
    refs:["At 8:27-39","Sl 68:31"]},
  horizonte:{papel:"bencao", id:"'dalém dos rios de Cuxe, os meus adoradores'",
    txt:"Sofonias vê adoradores vindo 'dalém dos rios de Cuxe'; o Sl 68:31 apressa 'a Etiópia estenderá as mãos para Deus'; Is 11:11 inclui Cuxe no segundo ajuntamento. (E Ez 38:5 também a alista com Gogue — os dois fios declarados.)",
    refs:["Sf 3:10","Sl 68:31","Is 11:11","Ez 38:5"]}
}},
{id:"mizraim", nome:"Mizraim", lin:"C", pai:"Cam", conf:"att", per:{
  tabua:{lon:31, lat:27, id:"o Egito (forma dual hebraica)",
    txt:"Filho de Cam; o Egito das duas terras. Pai dos ludim, anamim… e dos casluim 'de onde saíram os filisteus'.",
    refs:["Gn 10:6","Gn 10:13-14"]},
  patriarcas:{nome:"Egito", id:"celeiro e cadinho",
    txt:"Abraão desce ao Egito na fome; José governa-o; Israel entra livre e sai do cadinho da escravidão — 'do Egito chamei o meu filho'.",
    refs:["Gn 12:10","Gn 41:41","Êx 1:8","Os 11:1"]},
  reinos:{id:"a cana quebrada — Sisaque, Neco e os profetas",
    txt:"Sisaque saqueia o Templo (925); Neco mata Josias em Megido (609); os profetas chamam o Egito de 'cana quebrada' e 'Raabe que não se move'.",
    refs:["1Rs 14:25-26","2Rs 23:29","Is 30:7","2Rs 18:21"]},
  imperios:{nome:"Egito (Ptolomeus)", id:"o 'rei do sul' — e o refúgio do Menino",
    txt:"Em Dn 11, o Egito ptolemaico é o 'rei do sul' em guerra com o norte selêucida; em Mt 2, a Sagrada Família refaz o caminho: 'do Egito chamei o meu Filho'.",
    refs:["Dn 11:5-8","Mt 2:13-15"]},
  horizonte:{papel:"bencao", id:"'bendito seja o Egito, meu povo'",
    txt:"A profecia mais generosa da Tábua: uma estrada do Egito à Assíria, altar ao Senhor no meio do Egito, e a bênção tripla — 'bendito seja o Egito, meu povo, e a Assíria, obra das minhas mãos, e Israel, a minha herança' (Is 19:23-25).",
    refs:["Is 19:19-25"]}
}},
{id:"pute", nome:"Pute", lin:"C", pai:"Cam", conf:"prob", per:{
  tabua:{lon:18, lat:30.5, id:"Líbia (identificação tradicional)",
    txt:"Filho de Cam; a Líbia, a oeste do Egito.",
    refs:["Gn 10:6","1Cr 1:8"]},
  reinos:{id:"mercenários de escudo",
    txt:"Pute aparece nos exércitos do Egito e de Tiro — 'Pute e Lude, que manejam o escudo' — e ao lado de Cuxe na queda de Tebas (Na 3:9).",
    refs:["Jr 46:9","Ez 27:10","Na 3:9"]},
  horizonte:{papel:"coalizao", id:"alistada com Gogue",
    txt:"'Pérsia, Cuxe e Pute com êles' (Ez 38:5) — e também entre os que ouvirão a fama (Is 66:19, 'Pul').",
    refs:["Ez 38:5","Is 66:19"]}
}},
{id:"canaa", nome:"Canaã", lin:"C", pai:"Cam", conf:"att", per:{
  tabua:{lon:35, lat:31.9, id:"o Levante meridional — de Sidom a Gaza",
    txt:"Filho de Cam, pai de onze povos (Sidom, Hete, jebuseu, amorreu…) — a terra que levará seu nome e a maldição de Noé.",
    refs:["Gn 9:25","Gn 10:15-19"]},
  patriarcas:{id:"'o cananeu estava então na terra'",
    txt:"A terra prometida ocupada: Abraão a percorre de Siquém ao Neguebe entre cananeus, e a promessa fica 'para a tua descendência'.",
    refs:["Gn 12:5-7","Gn 15:18-21"]},
  reinos:{nome:"Fenícia (cananeus)", lon:35.3, lat:33.2, ldx:-124, ldy:2, id:"quando 'cananeu' virou 'mercador'",
    txt:"O resto de Canaã concentrado na costa — Tiro e Sidom — fez do nome um ofício: em Oseias e Provérbios, 'cananeu' já significa comerciante (de balança enganosa, acusa o profeta).",
    refs:["Os 12:7","Is 23:8","Jz 1:27-33"]},
  imperios:{id:"a mulher 'cananeia' dos evangelhos",
    txt:"Mateus ainda chama 'cananeia' a mulher siro-fenícia de fé grande — o nome da Tábua vivo no séc. I.",
    refs:["Mt 15:22","Mc 7:26"]},
  horizonte:{papel:"simbolo", id:"'não haverá mais mercador na casa'",
    txt:"Zacarias fecha o arco com o trocadilho: no dia do Senhor 'não haverá mais cananeu [mercador] na casa do SENHOR dos exércitos'.",
    refs:["Zc 14:21"]}
}},
{id:"ninrode", nome:"Ninrode", lin:"C", pai:"Cam › Cuxe", conf:"att", per:{
  tabua:{lon:44.4, lat:32.5, id:"Babel, Ereque, Acade — Sinar",
    txt:"'O primeiro poderoso na terra': seu reino começa em Babel, Ereque (Uruk) e Acade, e se estende a Nínive — as capitais reais da Mesopotâmia, todas escavadas.",
    refs:["Gn 10:8-12","1Cr 1:10"]},
  reinos:{nome:"Babilônia", id:"a herdeira de Babel",
    txt:"A cidade de Ninrode em escala de império: Nabucodonosor leva Judá em 586. Miqueias chama a Assíria de 'terra de Ninrode' — o nome ainda era mapa.",
    refs:["2Rs 25:8-11","Mq 5:6","Jr 50:1"]},
  imperios:{id:"'caiu, caiu a Babilônia'",
    txt:"Ciro a toma sem batalha em 539 (Dn 5, a escrita na parede); Isaías e Jeremias já cantavam sua queda.",
    refs:["Dn 5:28-31","Is 21:9","Jr 51:8"]},
  horizonte:{papel:"simbolo", id:"a Babilônia do Apocalipse",
    txt:"O nome vira o símbolo maior do sistema que se opõe a Deus: 'caiu, caiu a grande Babilônia' — o Apocalipse reusa o grito de Isaías para o fim de todo império-ídolo.",
    refs:["Ap 17:5","Ap 18:2","1Pe 5:13"]}
}},
{id:"sidom", nome:"Sidom", lin:"C", pai:"Cam › Canaã", conf:"att", per:{
  tabua:{lon:35.37, lat:33.56, ldx:-46, id:"a cidade-porto, primogênita de Canaã",
    txt:"Primogênito de Canaã; a fronteira norte da terra cananeia ('em direção a Sidom', Gn 10:19).",
    refs:["Gn 10:15","Gn 10:19"]},
  reinos:{nome:"Sidom e Tiro (Fenícia)", ldx:-122, ldy:-2, id:"cedro, púrpura — e Jezabel",
    txt:"Hirão de Tiro constrói com Salomão; Jezabel 'filha do rei dos sidônios' importa Baal; Elias é sustentado em Sarepta 'de Sidom'; Ezequiel dedica capítulos ao esplendor e à queda de Tiro.",
    refs:["1Rs 5:1-10","1Rs 16:31","1Rs 17:9","Ez 28:21-22"]},
  imperios:{id:"'Tiro e Sidom' nos evangelhos",
    txt:"Jesus percorre a região, elogia a fé fora de Israel e usa as duas cidades como réplica: 'seria mais suportável a Tiro e Sidom no juízo'.",
    refs:["Mt 11:21-22","Mc 7:24-31","Lc 4:26","At 12:20"]}
}},
{id:"hete", nome:"Hete", lin:"C", pai:"Cam › Canaã", conf:"att", per:{
  tabua:{lon:34, lat:39, ldx:10, ldy:13, id:"Hatti — os hititas da Anatólia",
    txt:"Filho de Canaã, pai dos heteus — nome que cobre tanto clãs no Levante quanto, depois, o império de Hattusa.",
    refs:["Gn 10:15","1Cr 1:13"]},
  patriarcas:{id:"a sepultura comprada dos filhos de Hete",
    txt:"Abraão compra Macpela 'dos filhos de Hete' em Hebrom — o primeiro palmo legal da promessa; Esaú desgosta os pais casando com heteias.",
    refs:["Gn 23:3-20","Gn 26:34-35"]},
  reinos:{nome:"Heteus (neo-hititas)", id:"Urias, o heteu — e 'os reis dos heteus'",
    txt:"Urias serve na guarda de Davi; Salomão comercia cavalos com 'os reis dos heteus' — os reinos neo-hititas da Síria do norte (Carquemis, Hamate), bem documentados.",
    refs:["2Sm 11:3","1Rs 10:29","2Rs 7:6"]}
}},
{id:"caftor", nome:"Caftor", lin:"C", pai:"Cam › Mizraim", conf:"att", per:{
  tabua:{lon:25, lat:35.2, id:"Creta (Caftorim)",
    txt:"Dos filhos de Mizraim; Caftor é Creta (Keftiu dos egípcios) — e a Bíblia lembra: dali 'saíram os filisteus'.",
    refs:["Gn 10:14","Dt 2:23"]},
  reinos:{id:"a memória da origem",
    txt:"Amós e Jeremias citam a travessia: 'não fiz eu subir… os filisteus de Caftor?' — o êxodo dos outros, dito por Deus.",
    refs:["Am 9:7","Jr 47:4"]}
}},
{id:"filisteus", nome:"Filisteus", lin:"C", pai:"Cam › Mizraim › Casluim", conf:"att", per:{
  tabua:{lon:34.5, lat:31.6, ldx:-58, ldy:-9, id:"a pentápole da costa (Gaza, Asdode, Ascalom, Gate, Ecrom)",
    txt:"Saídos de Casluim/Caftor: os 'povos do mar' assentados na costa sul — os Peleset dos registros egípcios de Ramsés III.",
    refs:["Gn 10:14","Js 13:3"]},
  patriarcas:{id:"os poços de Gerar",
    txt:"Abraão e Isaque negociam poços com Abimeleque 'rei dos filisteus' em Gerar — presença costeira anterior à grande onda do mar (cronologia declarada em aberto).",
    refs:["Gn 21:32-34","Gn 26:1-33"]},
  reinos:{nome:"Filístia", id:"de Golias a Sofonias — e os 'quereteus'",
    txt:"O inimigo da era dos juízes e de Saul (Sansão, a arca, Golias); os profetas tratam cidade por cidade — e Sofonias os chama 'nação dos quereteus' (cretenses!), lembrando Caftor.",
    refs:["Jz 16:21","1Sm 17:4","Am 1:6-8","Sf 2:4-7"]},
  imperios:{id:"o nome que sobrou no mapa",
    txt:"As cidades viram helenísticas (Asdode = Azoto, At 8:40); dos filisteus restou, pela pena de gregos e romanos, o nome da região: 'Palestina' vem de Filístia.",
    refs:["At 8:40","Zc 9:5-7"]},
  horizonte:{papel:"bencao", id:"'um resto para o nosso Deus'",
    txt:"Zacarias, depois do juízo cidade a cidade, surpreende: o filisteu 'será um resto para o nosso Deus, e será como chefe em Judá; e Ecrom como o jebuseu' — absorvido, como Jerusalém absorveu Jebus.",
    refs:["Zc 9:7","Sl 87:4"]}
}},
{id:"saba-dedan", nome:"Sabá e Dedã", lin:"C", pai:"Cam › Cuxe › Raamá (× Sem › Joctã)", conf:"deb", per:{
  tabua:{lon:45, lat:16.5, id:"o sul da Arábia — e o crux da dupla genealogia",
    txt:"Sabá e Dedã aparecem como netos de Cuxe (Gn 10:7) E Sabá como filho de Joctã (10:28), e Dedã como neto de Abraão por Quetura (25:3) — a Tábua registrando, com honestidade, o entrelaçamento das rotas árabes.",
    refs:["Gn 10:7","Gn 10:28","Gn 25:3"]},
  reinos:{nome:"Sabá (sabeus) · Dedã", lon:44, lat:17.5, id:"a rota do incenso — e a rainha",
    txt:"A rainha de Sabá sobe a Jerusalém 'com ouro e pedras e especiarias em grande abundância'; Ezequiel lista Sabá e Dedã (o oásis de al-ʿUla) nas feiras de Tiro; Jó já conhecia as caravanas de ambos.",
    refs:["1Rs 10:1-10","Ez 27:20-22","Jó 6:19"]},
  horizonte:{papel:"pergunta", id:"'Sabá, Dedã e os mercadores de Társis' — e o ouro que sobe",
    txt:"Em Ez 38:13, são êles que questionam Gogue; em Is 60:6 e Sl 72:10-15, 'todos os de Sabá virão, trarão ouro e incenso e anunciarão os louvores do SENHOR' — a rota da rainha refeita para o Rei.",
    refs:["Ez 38:13","Is 60:6","Sl 72:10-15","Mt 2:11"]}
}},

/* ═══ SEM — de Elão ao epônimo dos hebreus ═══ */
{id:"elao", nome:"Elão", lin:"S", pai:"Sem", conf:"att", per:{
  tabua:{lon:49.3, lat:31.8, id:"Elam — o sudoeste do Irã (capital Susã)",
    txt:"Primogênito de Sem; a civilização elamita, das mais antigas do mundo, com capital em Susã.",
    refs:["Gn 10:22","1Cr 1:17"]},
  patriarcas:{id:"Quedorlaomer, rei de Elão",
    txt:"Na guerra dos reis de Gn 14, Elão lidera a coalizão que Abraão persegue até Dã — a primeira guerra internacional da Bíblia tem Elão no comando.",
    refs:["Gn 14:1-17"]},
  reinos:{id:"arqueiros — e um trono prometido",
    txt:"Isaías convoca 'sobe, ó Elão' contra a Babilônia; Jeremias quebra 'o arco de Elão' mas fecha com promessa rara: 'nos últimos dias farei voltar os cativos de Elão'.",
    refs:["Is 21:2","Jr 49:34-39"]},
  imperios:{nome:"Pérsia (Susã)", ldx:10, ldy:11, id:"a cidadela de Ester e Daniel",
    txt:"Susã de Elão vira capital persa: Daniel tem visões 'em Susã, na província de Elão'; Ester e Neemias servem ali — e em Pentecostes há 'elamitas' ouvindo na própria língua.",
    refs:["Dn 8:2","Et 1:2","Ne 1:1","At 2:9"]},
  horizonte:{papel:"coalizao", id:"a 'Pérsia' de Gogue — e os cativos que voltam",
    txt:"A Pérsia (herdeira de Elão) é alistada em Ez 38:5; e a promessa de Jr 49:39 segue aberta: 'farei voltar os cativos de Elão'.",
    refs:["Ez 38:5","Jr 49:39"]}
}},
{id:"assur", nome:"Assur", lin:"S", pai:"Sem", conf:"att", per:{
  tabua:{lon:43.2, lat:35.5, id:"Assur e Nínive — o alto Tigre",
    txt:"Filho de Sem; na terra dele Ninrode edificou Nínive, Reobote-Ir, Calá e Resém — 'a grande cidade'.",
    refs:["Gn 10:11-12","Gn 10:22"]},
  reinos:{nome:"Assíria", lon:43.1, lat:36.3, id:"'a vara da minha ira' — 722 e 701",
    txt:"O império que apagou Samaria (722) e cercou Jerusalém (701): Jonas pregou-lhe, Naum cantou sua queda (612, na crônica babilônica), Isaías o chamou 'vara da minha ira' — instrumento, não dono.",
    refs:["2Rs 17:6","2Rs 19:35-36","Is 10:5","Jn 3:2","Na 3:18-19"]},
  horizonte:{papel:"bencao", id:"'a Assíria, obra das minhas mãos'",
    txt:"O mesmo império do terror entra na bênção tripla de Is 19:23-25, com estrada aberta até o Egito — e Miqueias vê pastores levantados 'contra a terra de Ninrode' antes da paz.",
    refs:["Is 19:23-25","Mq 5:5-6"]}
}},
{id:"arfaxade", nome:"Arfaxade", lin:"S", pai:"Sem", conf:"prob", per:{
  tabua:{lon:44, lat:35, id:"norte da Mesopotâmia (Arrapkha?)",
    txt:"Filho de Sem, tronco da linha que leva a Héber, Pelegue e Abraão (Gn 11) — a espinha genealógica do resto da Bíblia.",
    refs:["Gn 10:22-24","Gn 11:10-26","Lc 3:36"]},
  reinos:{nome:"Caldeus", lon:45.5, lat:31.5, id:"de Ur 'dos caldeus' à dinastia de Nabucodonosor",
    txt:"A tradição liga a linha a 'Ur dos caldeus' de onde Abraão saiu; na Idade do Ferro, os caldeus do sul tomam o trono da Babilônia — os 'levantados' que Habacuque vê vir.",
    refs:["Gn 11:28-31","Hc 1:6","Dn 1:4"]}
}},
{id:"lude", nome:"Lude", lin:"S", pai:"Sem", conf:"deb", per:{
  tabua:{lon:28, lat:38.6, id:"Lídia? (Sardes) — com o crux dos dois Ludes",
    txt:"Filho de Sem — mas há também 'ludim' filhos de Mizraim (Gn 10:13): dois Ludes na Tábua, semita e camita; a Lídia de Sardes é a identificação tradicional do primeiro.",
    refs:["Gn 10:22","Gn 10:13"]},
  reinos:{nome:"Lídia", id:"arqueiros de aluguel — e Creso",
    txt:"'Lude, que maneja o arco' serve a Egito e Tiro; o reino de Sardes (Giges, Creso) cai ante Ciro em ~546 — e Sardes reaparecerá com uma carta do Apocalipse.",
    refs:["Ez 27:10","Jr 46:9","Is 66:19","Ap 3:1"]}
}},
{id:"ara", nome:"Arã", lin:"S", pai:"Sem", conf:"att", per:{
  tabua:{lon:38.5, lat:35.5, id:"os arameus — da Síria ao Eufrates",
    txt:"Filho de Sem, pai de Uz. Os arameus dominarão a Síria — e a língua deles, meio mundo.",
    refs:["Gn 10:22-23","1Cr 1:17"]},
  patriarcas:{nome:"Padã-Arã", lon:39.2, lat:36.7, id:"a família que ficou",
    txt:"Rebeca, Labão, Lia e Raquel são de Padã-Arã; Israel confessará para sempre: 'arameu prestes a perecer foi meu pai'.",
    refs:["Gn 24:10","Gn 28:5","Dt 26:5"]},
  reinos:{nome:"Arã-Damasco", lon:36.31, lat:33.51, ldx:12, ldy:-4, id:"Ben-Hadade, Hazael, Rezim",
    txt:"O reino de Damasco, rival do norte de Israel (Elias unge Hazael; Rezim sobe contra Acaz em Is 7); e o aramaico já é língua de diplomacia: 'fala aos teus servos em aramaico' (2Rs 18:26).",
    refs:["1Rs 20:1","2Rs 8:12-13","Is 7:1-9","2Rs 18:26"]},
  imperios:{nome:"Síria (aramaico)", id:"a língua franca — até na cruz",
    txt:"Do exílio em diante, o aramaico é a língua comum (Ed 4:7; Dn 2:4); é a fala de Jesus — 'Talitá cumi', 'Eloí, Eloí' — e Paulo se converte na estrada da velha capital araméia.",
    refs:["Ed 4:7","Dn 2:4","Mc 5:41","At 9:3"]}
}},
{id:"uz", nome:"Uz", lin:"S", pai:"Sem › Arã", conf:"prob", per:{
  tabua:{lon:37.5, lat:32, id:"entre Edom e a Arábia do norte",
    txt:"Filho de Arã; a 'terra de Uz' fica, pelas pistas internas, entre Edom e o deserto.",
    refs:["Gn 10:23","1Cr 1:17"]},
  reinos:{id:"a terra de Jó",
    txt:"'Havia um homem na terra de Uz…' — o cenário do maior poema de sabedoria; Lamentações a associa a Edom.",
    refs:["Jó 1:1","Lm 4:21","Jr 25:20"]}
}},
{id:"heber", nome:"Héber", lin:"S", pai:"Sem › Arfaxade › Salá", conf:"att", per:{
  tabua:{lon:39.2, lat:36.4, id:"o epônimo dos hebreus (ʿEber)",
    txt:"Bisneto de Sem; em seus dias 'a terra se repartiu' (Pelegue). Dele vem o gentílico que definirá um povo.",
    refs:["Gn 10:24-25","Gn 11:14-17"]},
  patriarcas:{nome:"Hebreus", lon:35.1, lat:31.5, ldx:-58, id:"'Abrão, o hebreu'",
    txt:"O nome estreia em Gn 14:13 — 'Abrão, o hebreu'; no Egito, 'hebreu' é como José e as parteiras são chamados: o nome de Héber virou identidade.",
    refs:["Gn 14:13","Gn 39:14","Êx 1:15","Êx 2:6"]},
  reinos:{nome:"Israel e Judá", lon:35.23, lat:31.77, ldx:-84, ldy:-8, id:"o povo da promessa, em dois reinos",
    txt:"A linha de Héber, por Abraão e Jacó, vira nação e monarquia — e depois dois reinos, cuja história os módulos 5–7 percorrem.",
    refs:["2Sm 7:12-16","1Rs 12:16-20"]},
  imperios:{nome:"Judeus", id:"'a salvação vem dos judeus'",
    txt:"Do exílio em diante, 'judeu' (de Judá) é o nome corrente — o de Mardoqueu, o de Paulo, e o que Jesus assume: 'a salvação vem dos judeus'.",
    refs:["Et 2:5","Jo 4:22","Rm 1:16","Rm 9:4-5"]},
  horizonte:{papel:"bencao", id:"a orla do manto — e a oliveira",
    txt:"Zacarias vê dez homens de tôdas as línguas pegando 'na orla do manto de um judeu: iremos convosco, porque ouvimos que Deus está convosco'; Paulo guarda o mistério da oliveira: 'todo o Israel será salvo'.",
    refs:["Zc 8:23","Rm 11:25-29","Is 2:2-4"]}
}},
{id:"jocta", nome:"Joctã", lin:"S", pai:"Sem › Héber", conf:"prob", per:{
  tabua:{lon:46.5, lat:17, id:"treze clãs do sul da Arábia",
    txt:"Irmão de Pelegue; seus treze filhos (Sabá, Ofir, Havilá, Hazarmavé…) mapeiam a Arábia do sul, 'de Messa até Sefar'.",
    refs:["Gn 10:25-30","1Cr 1:19-23"]}
}},
{id:"ofir", nome:"Ofir", lin:"S", pai:"Sem › Héber › Joctã", conf:"deb", per:{
  tabua:{lon:45, lat:19, id:"Arábia? África? — a terra do ouro",
    txt:"Filho de Joctã; localização debatida (Arábia, costa africana, ou além).",
    refs:["Gn 10:29"]},
  reinos:{id:"'ouro de Ofir' — o padrão-ouro da Bíblia",
    txt:"A frota de Salomão traz de Ofir 420 talentos; 'ouro de Ofir' vira expressão para o mais fino — em Jó, nos Salmos, em Isaías. Um óstraco de Tell Qasile registra 'ouro de Ofir para Bete-Horom': o nome em tinta da Idade do Ferro.",
    refs:["1Rs 9:28","1Rs 10:11","Jó 28:16","Sl 45:9","Is 13:12"]}
}},
{id:"hazarmave", nome:"Hazarmavé", lin:"S", pai:"Sem › Héber › Joctã", conf:"att", per:{
  tabua:{lon:49, lat:15.5, id:"o Hadramaute — o vale do incenso",
    txt:"Filho de Joctã; o Hadramaute (Ḥaḍramawt) do Iêmen conserva o nome até hoje — uma das identificações mais firmes da Tábua.",
    refs:["Gn 10:26","1Cr 1:20"]}
}},

/* ═══ DESDOBRAMENTOS DE ABRAÃO E LÓ — os povos-irmãos ═══ */
{id:"ismael", nome:"Ismael", lin:"A", pai:"Abraão › Ismael", conf:"att", per:{
  patriarcas:{lon:38, lat:29.5, id:"doze príncipes no deserto",
    txt:"O filho de Agar, abençoado com dozes príncipes 'de Havilá até Sur' — entre êles Quedar e Nebaiote, que darão nome às tribos árabes do norte.",
    refs:["Gn 16:10-12","Gn 21:13-21","Gn 25:12-18"]},
  reinos:{nome:"Quedar e Nebaiote", lon:39.5, lat:28.5, id:"as tendas escuras — e os arqueiros",
    txt:"'Formosa como as tendas de Quedar' (Cantares); os arqueiros de Quedar aparecem em Isaías, e os Qedarites/Nabaiate nos anais de Assurbanípal — os árabes do norte com o nome dos filhos de Ismael.",
    refs:["Ct 1:5","Is 21:16-17","Is 42:11","Jr 49:28-29"]},
  imperios:{nome:"Árabes (nabateus)", lon:35.4, lat:30.3, ldx:11, ldy:9, id:"Petra — e a Arábia de Paulo",
    txt:"Os nabateus (de Nebaiote, na leitura tradicional) erguem Petra; Geshem 'o árabe' já se opusera a Neemias; 'árabes' ouvem em Pentecostes, e Paulo se recolhe 'à Arábia'.",
    refs:["Ne 2:19","At 2:11","Gl 1:17","2Co 11:32"]},
  horizonte:{papel:"bencao", id:"os rebanhos de Quedar 'com aceitação ao meu altar'",
    txt:"Is 60:7: 'tôdas as ovelhas de Quedar se congregarão a ti, os carneiros de Nebaiote te servirão; com aceitação subirão ao meu altar' — os filhos de Ismael dentro da glória.",
    refs:["Is 60:7","Is 42:11-12"]}
}},
{id:"midia", nome:"Midiã", lin:"A", pai:"Abraão › Quetura", conf:"att", per:{
  patriarcas:{lon:37, lat:28.2, id:"caravaneiros — e a família de Moisés",
    txt:"Filho de Abraão com Quetura. Midianitas compram José; Moisés foge para Midiã, casa com Zípora e ouve a sarça na terra de Jetro.",
    refs:["Gn 25:1-4","Gn 37:28","Êx 2:15-21","Êx 3:1"]},
  reinos:{id:"os camelos de Gideão",
    txt:"Na era dos juízes, Midiã e os 'filhos do oriente' engolem as colheitas em camelos 'inumeráveis' — até os trezentos de Gideão; 'o dia de Midiã' vira provérbio de vitória impossível (Is 9:4).",
    refs:["Jz 6:1-6","Jz 7:19-25","Is 9:4","Sl 83:9"]},
  horizonte:{papel:"bencao", id:"'a multidão de camelos te cobrirá'",
    txt:"Is 60:6: 'a multidão de camelos te cobrirá, os dromedários de Midiã e Efá; todos virão de Sabá — trarão ouro e incenso e anunciarão os louvores do SENHOR'.",
    refs:["Is 60:6"]}
}},
{id:"edom", nome:"Edom", lin:"A", pai:"Isaque › Esaú", conf:"att", per:{
  patriarcas:{lon:35.6, lat:30.6, id:"Esaú, o irmão — o monte Seir",
    txt:"Esaú é Edom (Gn 36:8): o gêmeo que vendeu a primogenitura, reconciliado com lágrimas em Gn 33, assentado no monte Seir.",
    refs:["Gn 25:30","Gn 33:4","Gn 36:8-9","Dt 2:4-5"]},
  reinos:{id:"a estrada negada — e o aplauso de 586",
    txt:"Edom nega passagem no Êxodo, guerreia com Saul e Davi, sacode o jugo de Judá — e aplaude na queda de Jerusalém: contra isso escrevem Obadias inteiro e o Sl 137:7.",
    refs:["Nm 20:14-21","2Sm 8:14","2Rs 8:20-22","Ob 1:10-14","Sl 137:7"]},
  imperios:{nome:"Idumeia (Herodes)", lon:34.9, lat:31.2, ldx:-114, ldy:6, id:"o edomita no trono de Judá",
    txt:"Empurrados para o Neguebe (Idumeia), os edomitas são judaizados pelos Macabeus — e um idumeu, Herodes, acaba rei em Jerusalém: é um filho de Esaú quem manda matar os meninos de Belém. Malaquias abrira o livro com 'amei a Jacó, e aborreci a Esaú'.",
    refs:["Ml 1:2-4","Mt 2:16","Mc 3:8"]},
  horizonte:{papel:"simbolo", id:"'o resto de Edom' — citado no concílio",
    txt:"Am 9:12 ('para que possuam o resto de Edom e tôdas as nações sôbre as quais se invoca o meu nome') é o verso que Tiago cita em At 15:17 para abrir a igreja aos gentios — na LXX, 'Edom' lido como 'adam', a humanidade: o irmão hostil virando figura de todos os alcançáveis.",
    refs:["Am 9:12","At 15:16-17","Ob 1:21"]}
}},
{id:"moabe", nome:"Moabe", lin:"A", pai:"Ló", conf:"att", per:{
  patriarcas:{lon:35.75, lat:31.3, ldx:10, ldy:11, id:"o filho de Ló, a leste do mar Morto",
    txt:"Nascido da filha mais velha de Ló; Israel é proibido de tomar sua terra ('dei Ar aos filhos de Ló').",
    refs:["Gn 19:36-37","Dt 2:9"]},
  reinos:{id:"Balaque, Eglom, Mesa — e Rute",
    txt:"Balaque contrata Balaão; Eglom oprime até Eúde; a pedra de Mesa (a Estela Moabita, escavada) conta a guerra de 2Rs 3 do lado moabita. E no meio disso, Rute, a moabita, entra na genealogia de Davi — e de Jesus.",
    refs:["Nm 22:2-6","Jz 3:12-30","2Rs 3:4-27","Rt 1:16","Rt 4:17","Mt 1:5"]},
  horizonte:{papel:"simbolo", id:"o lamento — e o trono de benignidade",
    txt:"Isaías chora por Moabe dois capítulos e Jeremias um inteiro; mas no meio do oráculo brilha Is 16:5: 'um trono se firmará em benignidade… na tenda de Davi, um que julgue com retidão' — dito a Moabe, terra de Rute.",
    refs:["Is 15:1-9","Is 16:5","Jr 48:47","Sf 2:9"]}
}},
{id:"amom", nome:"Amom", lin:"A", pai:"Ló", conf:"att", per:{
  patriarcas:{lon:35.95, lat:31.95, ldx:10, ldy:-5, id:"Ben-Ami — Rabá dos amonitas",
    txt:"O outro filho de Ló, no planalto do Jaboque (Rabá = a Amã de hoje, que guarda o nome).",
    refs:["Gn 19:38","Dt 2:19"]},
  reinos:{id:"de Jefté a Naamá",
    txt:"Jefté e Saul os enfrentam; Davi toma Rabá; e Naamá, 'a amonita', mãe de Roboão, põe sangue de Amom na linhagem real de Judá. Jeremias fecha o oráculo com 'depois farei voltar os cativos dos filhos de Amom'.",
    refs:["Jz 11:12-33","1Sm 11:1-11","2Sm 12:26-31","1Rs 14:21","Jr 49:1-6"]},
  horizonte:{papel:"simbolo", id:"a promessa curta de Jr 49:6",
    txt:"Como Moabe (48:47) e Elão (49:39), Amom recebe a nota de esperança no fim do oráculo — as três promessas curtas que mantêm os povos-irmãos no horizonte.",
    refs:["Jr 49:6"]}
}},
{id:"amaleque", nome:"Amaleque", lin:"A", pai:"Esaú › Elifaz", conf:"att", per:{
  patriarcas:{lon:34.4, lat:30.4, ldx:-76, ldy:4, id:"o neto de Esaú — o Neguebe",
    txt:"Neto de Esaú (Gn 36:12); tribo do deserto do sul, 'a primeira das nações' a atacar Israel na saída do Egito.",
    refs:["Gn 36:12","Nm 24:20"]},
  reinos:{id:"Refidim, Saul, Agague — e Hamã",
    txt:"'Guerra de geração em geração' desde Refidim; Saul poupa Agague e perde o reino; séculos depois, Hamã 'o agagueu' quase consuma em Susã o que Amaleque começou — e Ester fecha o arco.",
    refs:["Êx 17:8-16","Dt 25:17-19","1Sm 15:8-23","Et 3:1","Et 9:24-25"]},
  horizonte:{papel:"simbolo", id:"'apagarei totalmente a memória'",
    txt:"A sentença de Êx 17:14 cumpriu-se à letra: Amaleque desapareceu da história — o único povo da lista cujo 'futuro' profetizado era não ter futuro.",
    refs:["Êx 17:14","Nm 24:20"]}
}},

/* ═══ montanhas de Ararate — o ponto de partida ═══ */
{id:"ararate", nome:"Ararate", lin:"J", pai:"(ponto de partida)", conf:"att", per:{
  tabua:{lon:44.3, lat:39.7, id:"Urartu — onde a arca pousou",
    txt:"'As montanhas de Ararate' (Gn 8:4) = Urartu dos anais assírios, o reino do lago Vã. É o marco zero da dispersão — e reaparece em 2Rs 19:37 (os filhos de Senaqueribe fogem 'para a terra de Ararate') e em Jr 51:27.",
    refs:["Gn 8:4","2Rs 19:37","Jr 51:27"]},
  reinos:{nome:"Urartu", id:"o reino rival da Assíria",
    txt:"Urartu, potência do norte nos séc. IX–VII, rival da Assíria — exatamente o refúgio plausível para os regicidas de Nínive.",
    refs:["2Rs 19:37","Is 37:38","Jr 51:27"]}
}}
];

var povoById={}; POVOS.forEach(function(p){povoById[p.id]=p;});
var perById={}; PERIODOS.forEach(function(p){perById[p.id]=p;});

return {CONF:CONF, PERIODOS:PERIODOS, PAPEIS:PAPEIS, POVOS:POVOS,
        povo:function(id){return povoById[id];},
        periodo:function(id){return perById[id];}};
})();
