// IEEE 754-2008

// let num1 = 10; // number
// let num2 = 2.5; // number
// let num3 = 10.533344 // number do tipo Float

/*
console.log(num1.toString() + num2); // toString() converte number para string 
console.log(num1.toString(2)); // converte para binario
console.log(num3.toFixed(1)); // toFixed() reduz ou aumenta numero de casas decimais
console.log(Number.isInteger(num3)); // Number.isInteger() verifica se o number é inteiro
*/

let num1 = 0.7; // Number
let num2 = 0.1; // Number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

/*
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // Number.isNaN verifica se é um not a number/NaN 
*/