function numeroEhValido(numero) {
  return numero > 2 && numero < 1000;
}

function calculaTabuada(numDigi) {
    let contador = 1;
    while (contador <= 10) {
        let numCalculado = (contador * numDigi);
        console.log(`${contador} * ${numDigi} = ${numCalculado}`);
        contador++;
    }
}

let numero = prompt("Informe um número entre 2 a 1000");
numero = parseInt(numero, 10);

const ehValido = numeroEhValido(numero);

if (ehValido) {
  console.log("Calculo da tabuada para o nr: " + numero);
  calculaTabuada(numero);
} else {
  console.log("Numero inválido");
}
