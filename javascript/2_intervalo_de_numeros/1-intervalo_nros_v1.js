function listaIntervalo(limite) {
  console.log(`Intervalo ${limite}`);
}

let X = parseFloat(gets());

if (X>=0 && X<=25) {
  listaIntervalo("[0,25]")

}else if(X > 25 && X <= 50){
    listaIntervalo("(25,50]")

}else if(X > 50 && X<= 75){
    listaIntervalo("(50,75]")

}else if(X > 75 && X<=100){
    listaIntervalo("(75,100]")

}else{console.log("Fora de intervalo");

}