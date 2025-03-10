const value1 = "8";
const value2 = 0;
let sum = value1 + value2; //coercion 0 to string 

console.log(sum); //and the output is 80

sum = Number(value1) + value2; //to coercion 8 to number use Number()
console.log(sum); //and the output is 8