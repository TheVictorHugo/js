/*
salarioBruto = 12 *horas + 40 * dependentes
INSS = 0.085 *salariobruto
IR = 0.0.5 * salariobruto
salarioliquido = salariobruto -INSS -IR
*/

function calculaSalario(){
  var nome = document.getElementById("nome").value;
  var horas = parseInt(document.getElementById("horas").value);
  var dependentes = parseInt(document.getElementById("dependentes").value);

  var salarioBruto = 12 * horas + 40 * dependentes;
  var inss = 0.085 * salarioBruto;
  var ir = 0.05 * salarioBruto;
  var salarioLiquido = salarioBruto -inss -ir;

    console.log(salarioLiquido);
  document.getElementById("resultado").innerHTML = salarioLiquido;
}
