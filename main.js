var nomes=[];
function enviar() {
   var displaynome=[];
   for(var indice=1; indice<=4; indice++) {
      var nome=document.getElementById("convidado1"+indice).value;
   }

   var comprimentoListaNome=nomes.length;
   for(var indice=0; indice<comprimentoListaNome; indice++) {
      displaynome.push("<span> "+nomes[indice]+"</span>");
   }