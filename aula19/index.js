/*
Tipos primitivos (imutáveis) - String, number, 
boolean, undefined, null (bigint, symbol)

Refentencia (mutável) - array, object, function
*/

let nome = 'Tawan';
nome[0] = 'Clorexidina'; // tentando alterar um primitivo imutável
console.log(`índex [0]: ${nome[0]} nome: ${nome}. Dado não foi alterado por ser um imutável`);

// let a = 'A'
// let b = a; // Cópia
// console.log(a, b);

// a = 'Agora é outra coisa';
// console.log(a, b)

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);


