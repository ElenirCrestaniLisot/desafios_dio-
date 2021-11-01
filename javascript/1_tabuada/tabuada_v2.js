function gets() {
    let num = prompt("Informe um número entre 2 a 1000");
    if (num <2 || num > 1000) {
        console.log ("Numero inválido");
    } else {
        return num;
    }
}

const numInformado = gets();

console.log(num);
console.log(numInformado);

function calculaTabuada(numDigi) {
    let contador = 1;
    while (contador <= 10) {
        let numCalculado = (contador * numDigi);
        console.log(contador);
        console.log(numDigi);
        console.log(numCalculado);
    
        //console.log `${contador} x ${numDigitado} = ${numCalculado}`;
        contador++;
    }
}

calculaTabuada(numInformado);







