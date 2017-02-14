//nome, idade e salario
var nome = "Victor Hugo";
var idade = 25;
var salario = 2000;
var cargo = "Tecnico de informatica";

	//o salario bruto teve reajuste de 38%
var reajuste = salario * (38/100);
	//o funcionário recebera uma gratificação de 20%
var gratificacao = salario * (20/100);
	//O salario total e descontado 15%
var salarioTotal = salario + reajuste + gratificacao;

var salarioLiquido = salarioTotal - (salarioTotal*(15/100));

console.log(nome  + idade +  cargo );
console.log(salario);
console.log(salarioLiquido);
