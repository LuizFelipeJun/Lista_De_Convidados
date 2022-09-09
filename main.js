var nomes=[];
function enviar() {
   var nome=document.getElementById("convidado1").value;
   nomes.push(nome);
   document.getElementById("NomeConvidados").innerHTML=nomes.toString();
}

function mostrar() {
   var listaNova=nomes.join("<br>");
   document.getElementById("NomeConvidadoColuna").innerHTML=listaNova.toString();
   document.getElementById("buttonOrganizar").style.display="block";
}

function organiza() {
   nomes.sort();
   var listaOrganizada=nomes.join("<br>");
   document.getElementById("listaOrganizada").innerHTML=listaOrganizada.toString();
}

function pesquisarNome() {
   var nomePesquisado=document.getElementById("pesquisa").value;
   var indice;
   var ContadorDeNome=0;
   for(indice=0; indice<nomes.length; indice++) {
      if(nomePesquisado==nomes[indice]) {
         ContadorDeNome++;
      }
   }

   document.getElementById("nomeConvidadoPesquisado").innerHTML="Nome " + nomePesquisado + " foi encontrado " + ContadorDeNome + " vezes";
}