var novaJanela;
window.onload = function(){
  var botao = document.getElementById("botao");
  var resposta = document.getElementById("resposta");
  var proximo = document.getElementById("proximo");
  var anterior = document.getElementById("anterior");

  //botao.onclick = tela;
  proximo.onclick = avancar;
  anterior.onclick = voltar;
}

function avancar(){
    history.forward();
}

function voltar(){
    history.back();
}
