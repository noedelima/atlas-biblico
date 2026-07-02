/* ═══════════════════════════════════════════════════════════════════
   ATLAS BÍBLICO INTERATIVO · texto integral — núcleo do corpus
   Livros registrados por texto/<livro>.js (Bíblia Livre, CC-BY 3.0 BR).
   API: TEXTO.passagem("Gn 1:1\u20132:3") \u2192 [{livro, nome, cap, versos:[{v,t}]}]
   Suporta: "Gn 5" \u00b7 "\u00cax 14:5-31" \u00b7 "Gn 1:1\u20132:3" (entre cap\u00edtulos) \u00b7
   "Gn 22:2,14" \u00b7 "Nm 13:17-33; 14:26-35" \u00b7 "Gn 2\u20134" (cap\u00edtulos inteiros)
   ═══════════════════════════════════════════════════════════════════ */
window.TEXTO = (function(){
"use strict";
var META = {
  nome: "Bíblia Livre", sigla: "BLIVRE",
  licenca: "CC-BY 3.0 BR",
  nota: "revisão moderna e livre da Almeida (1819) — texto integral"
};
var LIVROS = {};
function registrar(sigla, nome, caps){ LIVROS[sigla] = {nome:nome, caps:caps}; }
function livro(sigla){ return LIVROS[sigla] || null; }
function passagem(ref){
  if(!ref) return null;
  var m = String(ref).trim().match(/^([1-3]?[A-Za-z\u00c0-\u00ff]+)\s+(.+)$/);
  if(!m) return null;
  var sigla = m[1], lv = LIVROS[sigla];
  if(!lv) return null;
  var corpo = m[2], out = [], ok = false;
  function capArr(c){ return lv.caps[String(c)] || null; }
  function push(c, v, t){
    var g = out[out.length-1];
    if(!g || g.cap !== c){ g = {livro:sigla, nome:lv.nome, cap:c, versos:[]}; out.push(g); }
    g.versos.push({v:v, t:t}); ok = true;
  }
  corpo.split(";").forEach(function(part){
    part = part.trim();
    var mm = part.match(/^(\d+):(\d+)\s*[\u2013-]\s*(\d+):(\d+)$/);
    if(mm){ /* entre capítulos: c1:v1 → c2:v2 */
      var c1=+mm[1], v1=+mm[2], c2=+mm[3], v2=+mm[4];
      for(var c=c1;c<=c2;c++){
        var arr=capArr(c); if(!arr) continue;
        var a=(c===c1)?v1:1, b=(c===c2)?v2:arr.length;
        for(var v=a;v<=b&&v<=arr.length;v++) push(c,v,arr[v-1]);
      }
      return;
    }
    mm = part.match(/^(\d+)\s*[\u2013-]\s*(\d+)$/);
    if(mm){ /* capítulos inteiros: c1–c2 */
      for(var c=+mm[1];c<=+mm[2];c++){
        var arr=capArr(c); if(!arr) continue;
        for(var v=1;v<=arr.length;v++) push(c,v,arr[v-1]);
      }
      return;
    }
    mm = part.match(/^(\d+)$/);
    if(mm){ /* capítulo inteiro */
      var arr=capArr(+mm[1]); if(!arr) return;
      for(var v=1;v<=arr.length;v++) push(+mm[1],v,arr[v-1]);
      return;
    }
    mm = part.match(/^(\d+):(.+)$/);
    if(mm){ /* lista de versos: v, v-v2, ... */
      var c=+mm[1], arr=capArr(c); if(!arr) return;
      mm[2].split(",").forEach(function(seg){
        var r=seg.trim().match(/^(\d+)(?:\s*[\u2013-]\s*(\d+))?$/);
        if(!r) return;
        var a=+r[1], b=r[2]?+r[2]:a;
        for(var v=a;v<=b&&v<=arr.length;v++) push(c,v,arr[v-1]);
      });
    }
  });
  return ok ? out : null;
}
return {META:META, registrar:registrar, livro:livro,
        livros:function(){return Object.keys(LIVROS);}, passagem:passagem};
})();
