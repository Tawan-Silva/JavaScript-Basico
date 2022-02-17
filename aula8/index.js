// Exercício 

const nome = 'Tawan';
const sobrenome = 'Silva';
const idade = 20;
const peso = 68;
const altura = 1.69;

let imc = peso / (altura * altura);
let anoNascimento = 2021 - idade;

console.log(nome, sobrenome, 'tem ' + idade + ' anos,' + ' pesa ' + peso + 'Kg' + ' e tem ' + altura + ' de altura');
console.log(nome, sobrenome + ' nasceu em ' + anoNascimento);

