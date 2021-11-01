function gets() {
    let numDigi = prompt("Informe um número entre 2 a 1000");
    if (numDigi <2 || numDigi > 1000) {
        console.log ("Numero inválido");
    }
    return numDigi;
}

function calculaTabuada (arraytab,numero) {
    return arraytab.map (function (itemtab){
        numCalculado = itemtab * numero;
    })
}

var numInformado = gets()
console.log (numInformado);

const tabuada = [1,2,3,4,5,6,7,8,9,10];
console.log (tabuada);

calculaTabuada(...tabuada, numInformado);








