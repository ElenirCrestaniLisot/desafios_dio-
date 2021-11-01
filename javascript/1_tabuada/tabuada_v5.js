function calculaTabuada(numDigi) {
    let contador = 1;
    while (contador <= 10) {
        let numCalculado = (contador * numDigi);
        console.log(`${contador} x ${numDigi} = ${numCalculado}`);
        contador++;
    }
}

let N = parseInt(gets());

calculaTabuada(N);