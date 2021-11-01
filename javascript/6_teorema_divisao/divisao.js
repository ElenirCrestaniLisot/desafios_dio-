let a = -7;
let b = -3;

q = parseInt(a / b);
r = a - (b * q); 


if (r < 0) {
  r += Math.abs(b);
  q = (q + 1);
  console.log(q);
} 

console.log(q + " " + r);