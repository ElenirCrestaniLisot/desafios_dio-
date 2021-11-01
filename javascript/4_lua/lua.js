let inicio = 97;
let final = 100;
if (inicio > final && inicio <= 96 && final >= 3 ) {
    console.log('minguante');
} else if (inicio >= 0 && final <= 2) {
    console.log('nova');
} else  if (inicio >= 3 && final <= 96) {
    console.log('crescente');
} else {
    console.log('cheia');
}