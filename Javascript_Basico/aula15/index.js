let numero1 = 9.54578;
let numero2 = `${Math.floor(numero1)} Arrondado para baixo`; // Math.floor() arrenda os numeros para baixo

console.log(numero2);

let numero3 = `${Math.ceil(numero1)} Arredondado para cima`; // Math.ceil arredonda numero para cima

console.log(numero3);

let numero4 =  `${Math.round(numero1)} Arredonda da da metade para "cima" e abaixo da metade para "baixo" `; // Math.round arredonda numero da metade para cima e abaixo da metade para baixo

console.log(Math.max(1,2,3,4,5,-10 -50, 1500, 9,8,)); // Retorna o maior numero passado como argumento

console.log(Math.min(1,2,3,4,5,-10 -50, 1500, 9,8,)); // Retorna o menor numero passado como argumento

console.log(numero4);

const numeroAleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(numeroAleatorio);
// console.log(Math.random()); Math.random gera numeros aleatórios

console.log(Math.PI); // Exibe o valor de PI

console.log(Math.pow(2, 10)); // Potênciação

let num1 = 25;
console.log(num1 ** 0.5); // Retorna a raiz quadrada da variável

console.log(100/0)
