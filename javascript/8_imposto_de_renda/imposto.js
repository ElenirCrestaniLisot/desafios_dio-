function calcularImposto(valor) {

  let imposto = 0;
  let montante;
  let salario = valor;

    if (salario > 4500.00) {
      montante = salario - 4500.00;
      imposto = (montante * 0.28) + 350;
    } else if (salario > 3000.00) {
      montante = salario - 3000.00;
      imposto += (montante * 0.18) + 80;
    } else if (salario > 2000.00) {
      montante = salario - 2000; 
      imposto += (montante * 0.08);
    }
    
    return imposto;

}

let salario = 4520.00;

if (salario < 2000) {
  console.log("Isento");
} else {
  let resultado = calcularImposto(salario);
  /*let resultado = resultado.toFixed(2) */;
  console.log("R$ " + resultado.toFixed(2));
}