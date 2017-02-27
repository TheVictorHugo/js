var novaJanela;
window.onload = function(){
  var botao = document.getElementById("botão");
  var outro = document.getElementById("botão");
  var fechar = document.getElementById("botão");
  var resposta = document.getElementById("botão");
  var modificar = document.getElementById("modificar");

  botao.onclick = janela;
  outro.onclick = diversos;
  fechar.onclick = fecharJanela;
}

function janela(){
  novaJanela = window.open("https://www.w3schools.com/js/js_loop_for.asp","janela","width=400,heigth=400");
}

function diversos(){
  resposta.innerHTML=(novaJanela.closed)? "Fechada":"Aberta";

}

function fecharJanela(){
  novaJanela.close();
}
