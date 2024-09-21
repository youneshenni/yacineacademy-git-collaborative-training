const power = require("./power.js");
const modulo = require("./modulo");
const minus = require("./minus");
const plus = require("./plus");
const division = require("./division");
const factorial = require("./factorial");
const Bitwiseor = require("./Bitwiseor");
const xor = require("./xor");

console.log(Bitwiseor(1, 2));
console.log(plus(4, 4));
console.log(division(10, 3));
console.log(factorial(4));
console.log(minus(30, 7));
console.log(power(3, 2));
console.log(modulo(9, 2));
console.log(plus(4, 4));

console.log(xor(1, 1)); // 0
console.log(xor(1, 0)); // 1
console.log(xor(0, 1)); // 1
console.log(xor(0, 0)); // 0
