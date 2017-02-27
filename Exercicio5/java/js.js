/*faça um programa que leia dois números e imprimir
qual é o maior e qual éo menor*/
function verificar(){
  var numero = parseInt(document.getElementById("num").value);
  var numero2 = parseInt(document.getElementById("num2").value);

  if(numero > numero2){
    var resultado = "O número " + numero +" é maior do que o " + numero2;
  }else{
    var resultado = "O número " + numero2 +" é maior do que o " + numero;
  }


document.getElementById("resultado").innerHTML = resultado;


}
