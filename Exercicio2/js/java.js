/*Faça um programa que calcule quantos dias uma pessoa
já viveu.Para isso será informada a idade em ano,
 meses e dias (considere 1 ano = 365 dias
   e um mês = 30 dias)*/
function calcularViveu(){
  var nome = document.getElementById("nome").value;
  var idade = parseInt(document.getElementById("idade").value);
  var meses = parseInt(document.getElementById("meses").value);
  var dias =  parseInt(document.getElementById("dias").value);

  var cal1 = idade * 365;
  var cal2 = meses * 30;
  var resultado = cal1 + cal2 + dias;

  document.getElementById("resultado").innerHTML = resultado;

console.log(resultado);

}
