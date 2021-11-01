function calculaTabuada(numDigi) {
    let contador = 1;
    while (contador <= 10) {
        let numCalculado = (contador * numDigi);
        console.log(`${contador} x ${numDigi} = ${numCalculado}`);
        contador++;
    }
}

var numInformado = 200;

calculaTabuada(numInformado);
