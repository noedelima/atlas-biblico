/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · F2 — as migrações dos Patriarcas (Gn 12–50)
   Jornadas de Abraão, Jacó e José como narrativa concatenada e
   georreferenciada; identificações com fonte e grau de confiança.
   Conteúdo bíblico: Almeida (domínio público), transcrição provisória.
   ═══════════════════════════════════════════════════════════════════ */
window.PATRIARCAS = (function(){
"use strict";

var FONTES = {
  tm:      {nome:"Texto Massorético",            tipo:"tradição textual"},
  almeida: {nome:"Almeida (domínio público)",    tipo:"tradução"},
  trad:    {nome:"Leitura tradicional",          tipo:"interpretação"},
  anais:   {nome:"Registros e sítios do Antigo Oriente", tipo:"atestação histórica"},
  acad:    {nome:"Discussão acadêmica",          tipo:"estado da questão"},
  calc:    {nome:"Derivação aritmética interna", tipo:"cálculo do atlas"}
};
var CONF = {
  att:  {t:"atestado"},
  prob: {t:"provável"},
  deb:  {t:"debatido"},
  der:  {t:"derivado"}
};

var AF = [
  {id:"a-ur", fonte:"acad", conf:"prob",
   txt:"Ur dos Caldeus = Tell el-Muqayyar, na baixa Mesopotâmia (identificação dominante desde Woolley); uma minoria propõe Ura/Urfa, no norte."},
  {id:"a-hara", fonte:"anais", conf:"att",
   txt:"Harã = Ḫarran, no alto rio Balique, bem atestada em textos do II milênio a.C.; centro do culto lunar, como Ur."},
  {id:"a-siquem", fonte:"anais", conf:"att",
   txt:"Siquém = Tell Balata, junto à atual Nablus; amplamente escavada, ocupada no Bronze Médio — a época patriarcal da narrativa."},
  {id:"a-betel", fonte:"acad", conf:"prob",
   txt:"Betel = Beitin, a identificação usual desde Edward Robinson (1838); uma minoria propõe el-Bireh."},
  {id:"a-egito", fonte:"anais", conf:"att",
   txt:"O Egito faraônico dispensa apresentação; o ponto marca Mênfis, a capital tradicional do Reino Antigo e Médio."},
  {id:"a-gerar", fonte:"acad", conf:"prob",
   txt:"Gerar = Tell Haror (?), no noroeste do Neguebe — proposta corrente, não unânime."},
  {id:"a-berseba", fonte:"anais", conf:"att",
   txt:"Berseba = Tell es-Seba, escavada; os poços da região dão nome ao lugar (be'er = poço). O 'poço do juramento' de Gn 21."},
  {id:"a-moria", fonte:"trad", conf:"prob",
   txt:"A 'terra de Moriá' é ligada ao monte do templo, em Jerusalém, por 2Cr 3:1; a tradição samaritana aponta o Gerizim."},
  {id:"a-hebrom", fonte:"anais", conf:"att",
   txt:"Hebrom (Quiriate-Arba) = Tell Rumeida; a cova de Macpela é venerada sob o Haram el-Khalil, contínuo desde a Antiguidade."},
  {id:"a-belem", fonte:"trad", conf:"att",
   txt:"Efrata = Belém de Judá, ao sul de Jerusalém; o túmulo de Raquel é venerado no caminho desde a Antiguidade (localização exata debatida)."},
  {id:"a-peniel", fonte:"acad", conf:"deb",
   txt:"Peniel/Penuel, no vau do rio Jaboque; a proposta usual é Tulul adh-Dhahab — debatida. Maanaim e Sucote ficam na mesma região."},
  {id:"a-dota", fonte:"anais", conf:"att",
   txt:"Dotã = Tell Dothan, na rota de caravanas que descia ao Egito — coerente com os ismaelitas de Gn 37:25."},
  {id:"a-gosen", fonte:"acad", conf:"prob",
   txt:"Gósen, no delta oriental do Nilo (região do Wadi Tumilat?); área de pastagem adequada aos rebanhos de Israel (Gn 47:6)."},
  {id:"a-cronopat", fonte:"calc", conf:"der",
   txt:"Cronologia ancorada no TM (Abrão nasce em AM 1948 — ver o atlas Gn 1–11). Derivações tradicionais: José nasce ao fim dos 14 anos de serviço (Gn 30:25-26) e Jacó tem 130 ao descer ao Egito quando José tem 39 (Gn 41:46,53; 45:6; 47:9) → Jacó chega a Harã aos 77 e parte aos 97."}
];

/* lugares — ldx/ldy: ajuste fino do rótulo no mapa de detalhe */
var LUG = [
  {id:"ur",     nome:"Ur",        lon:46.10, lat:30.96, conf:"prob", idl:"Tell el-Muqayyar — baixa Mesopotâmia", af:"a-ur"},
  {id:"hara",   nome:"Harã",      lon:39.03, lat:36.87, conf:"att",  idl:"Ḫarran, alto Balique", af:"a-hara"},
  {id:"siquem", nome:"Siquém",    lon:35.28, lat:32.21, conf:"att",  idl:"Tell Balata (Nablus)", af:"a-siquem"},
  {id:"betel",  nome:"Betel",     lon:35.24, lat:31.93, conf:"prob", idl:"Beitin (identificação usual)", af:"a-betel", ldx:-52, ldy:-6},
  {id:"moria",  nome:"Moriá",     lon:35.23, lat:31.78, conf:"prob", idl:"Monte do templo, Jerusalém (2Cr 3:1)", af:"a-moria", ldx:-52, ldy:4},
  {id:"belem",  nome:"Belém",     lon:35.20, lat:31.70, conf:"att",  idl:"Efrata, Belém de Judá", af:"a-belem", ldy:12},
  {id:"hebrom", nome:"Hebrom",    lon:35.10, lat:31.53, conf:"att",  idl:"Tell Rumeida · Manre e Macpela", af:"a-hebrom", ldx:-62, ldy:6},
  {id:"gerar",  nome:"Gerar",     lon:34.60, lat:31.38, conf:"prob", idl:"Tell Haror (?)", af:"a-gerar", ldx:-48, ldy:-4},
  {id:"berseba",nome:"Berseba",   lon:34.79, lat:31.24, conf:"att",  idl:"Tell es-Seba — o poço do juramento", af:"a-berseba", ldy:12},
  {id:"peniel", nome:"Peniel",    lon:35.71, lat:32.19, conf:"deb",  idl:"Vau do Jaboque — Tulul adh-Dhahab (?)", af:"a-peniel", ldy:12},
  {id:"dota",   nome:"Dotã",      lon:35.40, lat:32.42, conf:"att",  idl:"Tell Dothan — rota de caravanas", af:"a-dota"},
  {id:"egito",  nome:"Egito",     lon:31.25, lat:29.85, conf:"att",  idl:"Mênfis — o Egito faraônico", af:"a-egito"},
  {id:"gosen",  nome:"Gósen",     lon:31.85, lat:30.75, conf:"prob", idl:"Delta oriental do Nilo", af:"a-gosen"}
];

/* jornadas — cada etapa: lugar, ref, título, texto (Almeida), via = pontos
   [lon,lat] entre a etapa anterior e esta; futura = ponte além de Gênesis  */
var JORN = [
  {id:"abraao", nome:"Abraão", cor:"#8a5f04", corUi:"#e9c46a",
   intro:"De Ur a Hebrom, pela estrada do Eufrates: a fé que caminha — e quatro altares no caminho.",
   etapas:[
    {lugar:"ur", ref:"Gn 11:31", titulo:"As origens",
     txt:"E tomou Terá a Abrão, seu filho […] e saíram com eles de Ur dos Caldeus, para irem à terra de Canaã; e vieram até Harã, e habitaram ali."},
    {lugar:"hara", ref:"Gn 12:1-4", leitura:"Gn 12:1-5", titulo:"A chamada", idade:"Abrão, 75 anos · AM 2023",
     via:[[44.5,32.9],[43,33.6],[41.2,35.2],[39.8,36.4]],
     txt:"Ora, o Senhor disse a Abrão: Sai-te da tua terra, e da tua parentela, e da casa de teu pai, para a terra que eu te mostrarei. […] E partiu Abrão, como o Senhor lhe tinha dito […] e era Abrão da idade de setenta e cinco anos, quando saiu de Harã."},
    {lugar:"siquem", ref:"Gn 12:6-7", titulo:"A promessa da terra",
     via:[[37.8,36.3],[36.5,34.8],[35.9,33.4],[35.6,32.7]],
     txt:"E passou Abrão por aquela terra até ao lugar de Siquém, até ao carvalho de Moré […] E apareceu o Senhor a Abrão, e disse: À tua semente darei esta terra. E edificou ali um altar ao Senhor, que lhe aparecera."},
    {lugar:"betel", ref:"Gn 12:8", titulo:"O altar entre Betel e Ai",
     txt:"E moveu-se dali para a montanha à banda do oriente de Betel, e armou a sua tenda, tendo Betel ao ocidente, e Ai ao oriente; e edificou ali um altar ao Senhor, e invocou o nome do Senhor."},
    {lugar:"egito", ref:"Gn 12:10", leitura:"Gn 12:10-20", titulo:"A fome e a descida",
     via:[[34.7,31.3],[33.6,30.9],[32.3,30.5]],
     txt:"E havia fome naquela terra; e desceu Abrão ao Egito, para peregrinar ali, porquanto a fome era grande na terra."},
    {lugar:"betel", ref:"Gn 13:3-4", leitura:"Gn 13:1-13", titulo:"O retorno — e a separação de Ló",
     via:[[32.3,30.5],[33.6,30.9],[34.7,31.2]],
     txt:"E fez as suas jornadas do sul até Betel […] até ao lugar do altar que outrora ali tinha feito; e Abrão invocou ali o nome do Senhor. […] E escolheu Ló para si toda a campina do Jordão."},
    {lugar:"hebrom", ref:"Gn 13:18", leitura:"Gn 13:14-18", titulo:"Os carvalhais de Manre",
     txt:"E Abrão armou as suas tendas, e veio, e habitou nos carvalhais de Manre, que estão junto a Hebrom; e edificou ali um altar ao Senhor.",
     nota:"É aqui que se dá a aliança das alianças (Gn 15), a visita dos três varões e a intercessão por Sodoma (Gn 18)."},
    {lugar:"gerar", ref:"Gn 20:1", leitura:"Gn 20", titulo:"Entre os filisteus",
     txt:"E partiu Abraão dali para a terra do sul, e habitou entre Cades e Sur; e peregrinou em Gerar."},
    {lugar:"berseba", ref:"Gn 21:33", leitura:"Gn 21:22-34", titulo:"O poço do juramento", idade:"Isaque nasce · Abraão, 100 anos · AM 2048",
     txt:"E plantou uma tamargueira em Berseba, e invocou lá o nome do Senhor, Deus eterno.",
     nota:"Isaque nasce nesta estação da vida de Abraão (Gn 21:1-5); o nome Berseba fica ligado ao juramento com Abimeleque (Gn 21:22-32)."},
    {lugar:"moria", ref:"Gn 22:2,14", leitura:"Gn 22:1-19", titulo:"O sacrifício de Isaque",
     txt:"Toma agora o teu filho, o teu único filho, Isaque, a quem amas, e vai-te à terra de Moriá, e oferece-o ali em holocausto […] E chamou Abraão o nome daquele lugar: O Senhor proverá."},
    {lugar:"hebrom", ref:"Gn 23:19; 25:8-10", leitura:"Gn 23:17-20; 25:7-10", titulo:"Macpela",
     txt:"E depois sepultou Abraão a Sara sua mulher na cova do campo de Macpela, em frente de Manre, que é Hebrom, na terra de Canaã. […] E expirou Abraão […] e Isaque e Ismael, seus filhos, o sepultaram na cova de Macpela."}
   ]},
  {id:"jaco", nome:"Jacó", cor:"#4a5fd0", corUi:"#7d8ef2",
   intro:"Ida e volta: Berseba → Harã → o vau do Jaboque — onde Jacó vira Israel — e, no fim, a descida ao Egito.",
   etapas:[
    {lugar:"berseba", ref:"Gn 28:10", titulo:"A fuga",
     txt:"Partiu, pois, Jacó de Berseba, e foi-se a Harã."},
    {lugar:"betel", ref:"Gn 28:12-19", leitura:"Gn 28:10-22", titulo:"A escada",
     txt:"E sonhou: e eis uma escada posta na terra, cujo topo tocava nos céus; e eis que os anjos de Deus subiam e desciam por ela. […] E chamou o nome daquele lugar Betel."},
    {lugar:"hara", ref:"Gn 29:20; 31:38-41", leitura:"Gn 29:15-30; 31:38-42", titulo:"Os vinte anos com Labão", idade:"chega aos 77 · parte aos 97 (derivado)",
     via:[[35.6,32.7],[35.9,33.4],[36.5,34.8],[37.8,36.3]],
     txt:"Assim serviu Jacó sete anos por Raquel; e estes lhe pareceram como poucos dias, pelo muito que a amava. […] Vinte anos estive eu contigo: de dia me consumia o calor, e de noite a geada."},
    {lugar:"peniel", ref:"Gn 32:28-30", leitura:"Gn 32:22-32", titulo:"A luta — Israel",
     via:[[38.5,36.0],[37.0,34.5],[36.2,33.2]],
     txt:"Não te chamarás mais Jacó, mas Israel, pois como príncipe lutaste com Deus e com os homens, e prevaleceste. […] E chamou Jacó o nome daquele lugar Peniel, porque dizia: Tenho visto a Deus face a face, e a minha alma foi salva.",
     nota:"No caminho ficam Maanaim (Gn 32:2) e, depois do vau, Sucote (Gn 33:17) — a mesma região do Jaboque."},
    {lugar:"siquem", ref:"Gn 33:18-20", titulo:"A chegada em paz",
     txt:"E chegou Jacó salvo à cidade de Siquém […] e armou a sua tenda diante da cidade. […] E levantou ali um altar, e chamou-lhe: Deus, o Deus de Israel."},
    {lugar:"betel", ref:"Gn 35:9-15", leitura:"Gn 35:1-15", titulo:"O nome confirmado",
     txt:"E apareceu Deus outra vez a Jacó […] O teu nome é Jacó; não se chamará mais o teu nome Jacó, mas Israel será o seu nome. […] E Jacó pôs uma coluna de pedra no lugar onde falara com ele."},
    {lugar:"belem", ref:"Gn 35:16-20", titulo:"Raquel",
     txt:"Assim morreu Raquel, e foi sepultada no caminho de Efrata, que é Belém. E Jacó pôs uma coluna sobre a sua sepultura."},
    {lugar:"hebrom", ref:"Gn 35:27-29", titulo:"De volta a Isaque",
     txt:"E Jacó veio a seu pai Isaque, a Manre, a Quiriate-Arba (que é Hebrom), onde peregrinaram Abraão e Isaque."},
    {lugar:"berseba", ref:"Gn 46:1-4", leitura:"Gn 46:1-7", titulo:"Os sacrifícios da descida", idade:"Jacó, 130 anos · AM 2238",
     txt:"E partiu Israel com tudo quanto tinha […] e chegou a Berseba, e ofereceu sacrifícios ao Deus de seu pai Isaque. […] Não temas descer ao Egito, porque eu te farei ali uma grande nação. Eu descerei contigo ao Egito, e certamente te farei tornar a subir."},
    {lugar:"gosen", ref:"Gn 47:27", leitura:"Gn 47:27-31", titulo:"Israel no Egito",
     via:[[34.0,31.0],[32.8,30.7]],
     txt:"Assim habitou Israel na terra do Egito, na terra de Gósen; e nela tomaram possessão, e frutificaram, e multiplicaram-se muito."}
   ]},
  {id:"jose", nome:"José", cor:"#147a56", corUi:"#2ea87d",
   intro:"Do poço em Dotã ao trono do Egito — e os ossos que, séculos depois, voltaram a Siquém.",
   etapas:[
    {lugar:"hebrom", ref:"Gn 37:13-14", leitura:"Gn 37:12-14", titulo:"O enviado",
     txt:"Disse, pois, Israel a José: Não apascentam os teus irmãos junto de Siquém? Vem, e enviar-te-ei a eles. […] E enviou-o do vale de Hebrom, e foi a Siquém."},
    {lugar:"siquem", ref:"Gn 37:15-17", titulo:"À procura dos irmãos",
     txt:"E achou-o um varão, porque eis que andava errante pelo campo […] E disse o varão: Foram-se daqui; porque ouvi-lhes dizer: Vamos a Dotã. José, pois, seguiu atrás de seus irmãos, e achou-os em Dotã."},
    {lugar:"dota", ref:"Gn 37:28", leitura:"Gn 37:18-28", titulo:"Vendido", idade:"José, 17 anos · AM 2216",
     txt:"E, passando os mercadores midianitas, tiraram e alçaram a José da cova, e venderam José por vinte peças de prata aos ismaelitas, os quais levaram José ao Egito."},
    {lugar:"egito", ref:"Gn 41:41-43", leitura:"Gn 41:37-46", titulo:"Do poço ao trono", idade:"governador aos 30 · AM 2229",
     via:[[34.5,31.5],[33.2,30.8],[32.0,30.2]],
     txt:"Disse mais Faraó a José: Vês aqui te tenho posto sobre toda a terra do Egito. […] E o fez subir no segundo carro que tinha, e clamavam diante dele: Ajoelhai."},
    {lugar:"gosen", ref:"Gn 45:9-10; 50:26", leitura:"Gn 45:4-13; 50:22-26", titulo:"A família preservada", idade:"morre aos 110 · AM 2309",
     txt:"Apressai-vos, e subi a meu pai […] E habitarás na terra de Gósen, e estarás perto de mim […] E morreu José da idade de cento e dez anos; e o embalsamaram, e o puseram num caixão no Egito."},
    {lugar:"siquem", ref:"Js 24:32", titulo:"Os ossos de José", futura:true,
     via:[[33.0,30.9],[34.3,31.3],[35.0,32.0]],
     txt:"Também enterraram em Siquém os ossos de José, que os filhos de Israel trouxeram do Egito, naquela parte do campo que Jacó comprara […] de Hamor, pai de Siquém.",
     nota:"A ponte para o Êxodo: José fez os filhos de Israel jurarem levar seus ossos (Gn 50:25; Êx 13:19) — e Josué fecha o arco."}
   ]}
];

/* cronologia patriarcal (Anno Mundi · ancorada no TM) */
var CRONO = {
  af:"a-cronopat",
  min:1900, max:2350,
  vidas:[
    {nome:"Abraão", n:1948, m:2123, ref:"Gn 25:7 — 175 anos"},
    {nome:"Isaque", n:2048, m:2228, ref:"Gn 35:28 — 180 anos"},
    {nome:"Jacó",   n:2108, m:2255, ref:"Gn 47:28 — 147 anos"},
    {nome:"José",   n:2199, m:2309, ref:"Gn 50:26 — 110 anos"}
  ],
  eventos:[
    {am:2023, t:"partida de Harã", linha:0},
    {am:2048, t:"nasce Isaque", linha:0},
    {am:2108, t:"nascem Esaú e Jacó", linha:1},
    {am:2185, t:"Jacó chega a Harã*", linha:2},
    {am:2199, t:"nasce José", linha:2},
    {am:2216, t:"José vendido", linha:3},
    {am:2229, t:"José governador", linha:3},
    {am:2238, t:"Israel desce ao Egito", linha:2}
  ]
};

var lugById={}; LUG.forEach(function(l){lugById[l.id]=l;});
var afById={};  AF.forEach(function(a){afById[a.id]=a;});
var jornById={}; JORN.forEach(function(j){jornById[j.id]=j;});

return {FONTES:FONTES, CONF:CONF, AF:AF, LUG:LUG, JORN:JORN, CRONO:CRONO,
        lug:function(id){return lugById[id];},
        af:function(id){return afById[id];},
        jornada:function(id){return jornById[id];}};
})();
