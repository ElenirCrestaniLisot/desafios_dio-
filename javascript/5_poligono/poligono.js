function ladoEhValido(numero) {
  return numero >= 3 && numero <= 1000000;
}

function comprimentoEhValido(numero) {
  return numero >= 1 && numero <= 4000;
}

let N = 5000000000; /* numero de lados */
let L = 8; /*comprimento de cada lado */


const ladoValido = ladoEhValido(N);
const comprimentoValido = comprimentoEhValido(L);

if (ladoValido && comprimentoValido) {
  let P = (N * L);
  console.log(P);
} else {
  console.log("Informe somente: Intervalo p/ lado (3 ≤ N ≤ 1000000) e Intervalo p/comprimento ( 1 ≤ L ≤ 4000)");
}