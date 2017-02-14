function calculaSalario(){
		var nome = document.getElementById("nome").value,
		idade = parseInt(document.getElementById("idade").value),
		cargo = document.getElementById("cargo").value,
		salario = parseFloat(document.getElementById("salario").value);

		var reajuste = 0.38 * salario;
		var gratificação = 0.20 * salario;
		var salarioBruto = salario + reajuste + gratificação;
		var salarioLiquido = salarioBruto - (0.15 * salarioBruto);


		var solução = "<hr><p> nome: " + nome + "</p>" +
									"<p> idade: " + idade + "</p>" +
									"<p> cargo: " + cargo + "</p>" +
									"<p> salario: " + salario + "</p>" +
									"<p> salarioBruto: " + salarioBruto + "</p>" +
									"<p> salarioLiquido: " + salarioLiquido + "</p>";


		document.getElementById("resultado").innerHTML = solução;

}
