function calculaTabuada(numDigi) {
    let contador = 1;
    while (contador <= 10) {
        let numCalculado = (contador * numDigi);
        console.log(`${contador} x ${numDigi} = ${numCalculado}`);
        contador++;
    }
}

var numInformado = prompt("Informe um número entre 2 a 1000");

if (numInformado <2 || numInformado > 1000) {
    console.log ("Numero inválido - aceitos somente no intervalo de 2 a 1000");
} else {
    calculaTabuada(numInformado);
}











