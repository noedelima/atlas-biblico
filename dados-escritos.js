/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F11 — Os Escritos · a estante da poesia
   Jó, Salmos, Provérbios, Eclesiastes, Cantares e Lamentações:
   os livros que não contam a história — cantam dentro dela.
   Cada etapa é uma porta de antologia; a ancoragem de cada livro
   na linha do tempo é declarada (inclusive quando não existe).
   Texto: Bíblia Livre (BLIVRE, CC-BY 3.0 BR).
   ═══════════════════════════════════════════════════════════════════ */
window.ESCRITOS = (function(){
"use strict";

var FONTES = {
  trad:  {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais: {nome:"Registros e sítios do mundo antigo", tipo:"atestação histórica"},
  acad:  {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:  {nome:"Derivação interna da narrativa", tipo:"cálculo do atlas"}
};
var CONF = { att:{t:"atestado"}, prob:{t:"provável"}, deb:{t:"debatido"}, der:{t:"derivado"} };

var AF = [
  {id:"a-jo", fonte:"acad", conf:"deb",
   txt:"Jó se passa num cenário patriarcal (riqueza em gado, sacrifícios sem templo nem sacerdote, vida contada em gerações — Jó 42:16), mas o livro não traz data nenhuma: as propostas vão da era de Moisés ao período persa. O atlas ancora o cenário, e deixa a composição em aberto."},
  {id:"a-salmos", fonte:"calc", conf:"der",
   txt:"O hinário foi compilado ao longo de séculos — e diz isso de si mesmo: 73 títulos ligam a Davi, outros a Asafe e aos filhos de Corá, um a Moisés (Sl 90) — e o Sl 137 se escreve 'junto aos rios da Babilônia'. Cinco livros, cada um fechado por uma doxologia."},
  {id:"a-titulos", fonte:"trad", conf:"deb",
   txt:"Os títulos dos salmos são antigos (já estavam na Septuaginta), mas não fazem parte do poema original — quando o Sl 51 diz 'quando Natã veio a ele' (2Sm 12), o atlas registra a ligação tradicional e marca o debate."},
  {id:"a-sl137", fonte:"calc", conf:"der",
   txt:"A ancoragem do Sl 137 é interna e explícita: 'junto aos rios da Babilônia nos sentamos e choramos' — o hinário atravessa o exílio e volta; é o mesmo cenário do módulo 7."},
  {id:"a-salomao", fonte:"acad", conf:"deb",
   txt:"Provérbios, Eclesiastes e Cantares se apresentam na órbita de Salomão (Pv 1:1; Ec 1:1 'filho de Davi, rei em Jerusalém'; Ct 1:1) — e o próprio livro declara compilação posterior: 'estes também são provérbios de Salomão, que os homens de Ezequias copiaram' (Pv 25:1). Atribuição tradicional; datação em debate."},
  {id:"a-lamentacoes", fonte:"anais", conf:"prob",
   txt:"Lamentações chora sobre uma ruína datável: os capítulos são acrósticos sobre a Jerusalém de 586 a.C. — a mesma âncora absoluta dos módulos 6 e 7. A tradição atribui a Jeremias (cf. 2Cr 35:25); o texto em si é anônimo."},
  {id:"a-estante", fonte:"calc", conf:"der",
   txt:"A estante mostra os seis livros em tamanho real — as alturas são os capítulos, os rótulos são os versículos do corpus. Salmos sozinho é metade da estante: 150 capítulos, 2.460 versículos."},
  {id:"a-ancoragem", fonte:"calc", conf:"der",
   txt:"Os Escritos não contam a história — cantam dentro dela. As barras mostram onde cada livro se ancora: Lamentações numa data firme (586), o Sl 137 no exílio, os salmões de Davi na monarquia (pelos títulos, debatidos), Jó num cenário sem data. Barra tracejada = ancoragem debatida ou aberta."}
];

/* os seis livros da estante */
var LIVROS = [
  {id:"jo", sigla:"Jó", nome:"Jó",           caps:42,  versos:1070, conf:"deb",  af:"a-jo",
   tema:"o sofrimento — e o redemoinho", anc:"cenário patriarcal · data em aberto"},
  {id:"sl", sigla:"Sl", nome:"Salmos",       caps:150, versos:2460, conf:"der",  af:"a-salmos",
   tema:"o hinário de todos os séculos", anc:"de Moisés (Sl 90) ao exílio (Sl 137)"},
  {id:"pv", sigla:"Pv", nome:"Provérbios",   caps:31,  versos:915,  conf:"deb",  af:"a-salomao",
   tema:"a sabedoria da casa e da rua", anc:"órbita de Salomão · compilação até Ezequias (Pv 25:1)"},
  {id:"ec", sigla:"Ec", nome:"Eclesiastes",  caps:12,  versos:222,  conf:"deb",  af:"a-salomao",
   tema:"a vaidade — e o dom de viver", anc:"'filho de Davi, rei em Jerusalém' · datação em debate"},
  {id:"ct", sigla:"Ct", nome:"Cantares",     caps:8,   versos:117,  conf:"deb",  af:"a-salomao",
   tema:"o amor, forte como a morte", anc:"na órbita de Salomão (Ct 1:1) · sem âncora narrativa"},
  {id:"lm", sigla:"Lm", nome:"Lamentações",  caps:5,   versos:154,  conf:"prob", af:"a-lamentacoes",
   tema:"o luto sobre as ruínas", anc:"586 a.C. — a queda de Jerusalém"}
];

var PERNAS = [
  {id:"hinario", nome:"O hinário — os Salmos", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"Seis portas para os 150: a entrada (Sl 1), o pastor (23), o arrependimento (51), a oração de Moisés (90), os rios da Babilônia (137) e o louvor final (150)."},
  {id:"sabedoria", nome:"A sabedoria — Jó · Pv · Ec", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"Jó pergunta pelo sofrimento e ouve o redemoinho; Provérbios ensina a casa e a rua; Eclesiastes pesa tudo — e termina no temor do Senhor."},
  {id:"cantico", nome:"O cântico — e o lamento", cor:"#147a56", corUi:"#2ea87d",
   intro:"Cantares canta o amor 'forte como a morte'; Lamentações chora as ruínas de 586 — e no meio do choro, 'as suas misericórdias se renovam a cada manhã'."}
];

var ETAPAS = [
  {perna:"hinario", livro:"sl", ref:"Sl 1:1-3", leitura:"Sl 1", titulo:"Salmo 1 — as duas veredas",
   nota:"A porta do hinário: dois caminhos, uma árvore plantada junto a ribeiros. Quem entra pelos Salmos entra por aqui — e os 149 seguintes são a vida inteira entre as duas veredas."},
  {perna:"hinario", livro:"sl", ref:"Sl 23:1-4", leitura:"Sl 23", titulo:"Salmo 23 — o pastor",
   anc2:"título davídico — a monarquia (módulo 5)", href2:"monarquia.html",
   nota:"'O Senhor é meu pastor.' O título liga a Davi — o pastor de Belém que o atlas seguiu no módulo 5; o vale da sombra da morte e a mesa preparada são a paisagem dele."},
  {perna:"hinario", livro:"sl", ref:"Sl 51:10-12", leitura:"Sl 51:1-17", titulo:"Salmo 51 — cria em mim",
   anc2:"título: 'quando Natã veio a ele' (2Sm 12)", href2:"monarquia.html",
   nota:"O título situa o salmo depois da visita de Natã (2Sm 12): o rei no chão, sem defesa — 'cria em mim, ó Deus, um coração puro'. Os títulos são antigos, não originais: ligação tradicional, marcada como debatida."},
  {perna:"hinario", livro:"sl", ref:"Sl 90:1-4", leitura:"Sl 90", titulo:"Salmo 90 — a oração de Moisés",
   anc2:"título mosaico — o deserto (módulo 3)", href2:"exodo.html",
   nota:"'Oração de Moisés, homem de Deus' — se o título vale, é o salmo mais antigo do hinário: mil anos aos olhos de Deus 'como o dia de ontem', escrito por quem contou quarenta anos no deserto."},
  {perna:"hinario", livro:"sl", ref:"Sl 137:1-4", leitura:"Sl 137", titulo:"Salmo 137 — junto aos rios da Babilônia",
   anc2:"ancoragem interna: o exílio (módulo 7)", href2:"exilio.html",
   nota:"A ancoragem mais explícita do hinário: as harpas nos salgueiros, a pergunta 'como cantaremos a canção do Senhor em terra estranha?' — o mesmo cenário dos canais do Quebar (módulo 7)."},
  {perna:"hinario", livro:"sl", ref:"Sl 150:1-6", leitura:"Sl 148; 150", titulo:"Salmo 150 — tudo quanto respira",
   nota:"O hinário termina em puro louvor: nenhum pedido, só instrumentos — trombeta, saltério, harpa, dança, flauta, címbalos. 'Todo ser que respira louve ao Senhor. Aleluia!'"},

  {perna:"sabedoria", livro:"jo", ref:"Jó 1:20-22", leitura:"Jó 1:1-22", titulo:"Jó — 'o Senhor deu, o Senhor tomou'",
   nota:"'Havia um homem na terra de Uz.' Riqueza em gado, sacrifícios sem templo, vida patriarcal — e a aposta que Jó não vê. No primeiro golpe, a resposta que atravessa o livro: adorar sem entender."},
  {perna:"sabedoria", livro:"jo", ref:"Jó 38:4-7", leitura:"Jó 38:1-21", titulo:"Jó — a voz do redemoinho",
   nota:"Depois de 35 capítulos de debate humano, Deus responde — com perguntas: 'onde estavas tu quando eu fundava a terra?' A resposta de Deus a Jó é um atlas do cosmos: terra, mar, aurora, neve, estrelas."},
  {perna:"sabedoria", livro:"jo", ref:"Jó 42:5-6", leitura:"Jó 42:1-17", titulo:"Jó — 'agora meus olhos te veem'",
   nota:"Jó não recebe a explicação — recebe a visão, e ela basta. O epílogo devolve em dobro e conta 140 anos, 'e viu os filhos dos seus filhos, até a quarta geração': o fôlego dos patriarcas."},
  {perna:"sabedoria", livro:"pv", ref:"Pv 1:7", leitura:"Pv 1:1-19", titulo:"Provérbios — o princípio",
   nota:"'O temor ao Senhor é o princípio do conhecimento.' A sabedoria de Provérbios não é abstrata: é a casa, a rua, o trabalho, a língua — a vida comum posta em paralelo poético."},
  {perna:"sabedoria", livro:"pv", ref:"Pv 8:22-31", leitura:"Pv 8:1-11,22-36", titulo:"Provérbios — a Sabedoria clama",
   nota:"A Sabedoria personificada, presente na criação como 'arquiteta' (8:30), alegrando-se com os filhos dos homens — a página do AT que o NT mais ecoa ao falar do Verbo (Jo 1; Cl 1:15-17, módulo 10)."},
  {perna:"sabedoria", livro:"pv", ref:"Pv 31:10-12", leitura:"Pv 31:10-31", titulo:"Provérbios — a mulher forte",
   nota:"O livro fecha com um acróstico completo (álefe a tau) em louvor da mulher forte — comércio, terra, mãos abertas ao pobre, 'força e dignidade são a sua roupa'."},
  {perna:"sabedoria", livro:"ec", ref:"Ec 1:2-5", leitura:"Ec 1:1-11", titulo:"Eclesiastes — vaidade de vaidades",
   nota:"'Névoa de névoas', diz o Pregador, 'filho de Davi, rei em Jerusalém' — e pesa tudo debaixo do sol: trabalho, prazer, sabedoria, riqueza. O livro mais inquieto do cânon, dentro do cânon."},
  {perna:"sabedoria", livro:"ec", ref:"Ec 3:1-8", leitura:"Ec 3:1-15", titulo:"Eclesiastes — tempo de nascer, tempo de morrer",
   nota:"O poema dos tempos: 28 tempos em 14 pares, tudo 'formoso no seu tempo' — 'e pôs a eternidade no coração do homem, sem que este possa descobrir a obra que Deus fez do princípio ao fim' (3:11)."},
  {perna:"sabedoria", livro:"ec", ref:"Ec 12:13-14", leitura:"Ec 12:1-14", titulo:"Eclesiastes — o fim do discurso",
   nota:"Depois de pesar tudo: 'teme a Deus e guarda os seus mandamentos, porque isto é o dever de todo homem'. A inquietação termina em casa — no mesmo temor onde Provérbios começou."},

  {perna:"cantico", livro:"ct", ref:"Ct 2:10-13", leitura:"Ct 2:8-17", titulo:"Cantares — 'levanta-te, minha amada'",
   nota:"O único livro da Bíblia inteiramente na voz de dois amantes — a primavera como convite: 'já passou o inverno, as flores apareceram na terra, chegou o tempo de cantar'."},
  {perna:"cantico", livro:"ct", ref:"Ct 8:6-7", leitura:"Ct 8:5-14", titulo:"Cantares — forte como a morte",
   nota:"O verso-síntese do livro: 'o amor é forte como a morte… as muitas águas não podem apagar o amor'. Israel e a igreja o leram séculos a fio também como figura — o poema aguenta os dois pesos."},
  {perna:"cantico", livro:"lm", ref:"Lm 1:1", leitura:"Lm 1:1-12", titulo:"Lamentações — 'como está sentada solitária'",
   anc2:"586 a.C. — a queda de Jerusalém (módulos 6–7)", href2:"exilio.html",
   nota:"O luto com forma: cada capítulo é um acróstico (álefe a tau) sobre as ruínas de 586 — a dor posta em ordem alfabética para poder ser dita inteira. 'Não vos comove isto, todos vós que passais pelo caminho?'"},
  {perna:"cantico", livro:"lm", ref:"Lm 3:22-26", leitura:"Lm 3:19-33", titulo:"Lamentações — novas a cada manhã",
   nota:"No exato centro do livro, o poema vira: 'as misericórdias do Senhor não têm fim, novas a cada manhã — grande é a tua fidelidade'. A esperança dita de dentro das ruínas, não de fora."},
  {perna:"cantico", livro:"lm", ref:"Lm 5:19-21", leitura:"Lm 5", titulo:"Lamentações — 'renova os nossos dias'",
   nota:"O último capítulo abandona o acróstico — o alfabeto acabou, a oração continua: 'converte-nos a ti, Senhor, e seremos convertidos; renova os nossos dias como dantes'. A estante fecha esperando o retorno (módulo 7)."}
];

var livroById={}; LIVROS.forEach(function(l){livroById[l.id]=l;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var pernaById={}; PERNAS.forEach(function(p){pernaById[p.id]=p;});

return {FONTES:FONTES, CONF:CONF, AF:AF, LIVROS:LIVROS, PERNAS:PERNAS, ETAPAS:ETAPAS,
        livro:function(id){return livroById[id];},
        af:function(id){return afById[id];},
        perna:function(id){return pernaById[id];}};
})();
