function calcularParcelas(campo){
  var valor = parseInt(document.getElementById(campo).value);
  var parcela1 = Math.floor(valor / 3) + (valor % 3);
  var parcela2 = Math.floor(valor / 3);

  var solucao = "<hr><p> valor" + valor +"</p"> +
                "<p> parcela 1" + parcela1 +"</p>"+
                "<p> parcela 2" + parcela2 +"</p>"+
                "<p> parcela 3" + parcela2 +"</p>";
                console.log(parcela1);
                console.log(parcela2);

document.getElementById("resultado").innerHTML = solucao;
  //console.log(resultado);
}
