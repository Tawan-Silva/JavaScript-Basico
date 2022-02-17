// Não pode declarar o valor da contante depois
// Não podemos criar constantes com palavras reservadas
// Costantes precisam ter nomes significativos
// Não podem começar o nome de uma constante com um número 
// Não podem conter espaços ou traços
// Ultilizamos camelCase
// Não pode modificar o valor de uma constante
// NÃO ILTILIZAR VAR, ULTILIZAR CONST.
// String  = Text | Number = Número
// typeof verifica o tipo de dado 

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(resultadoDuplicado);
console.log(typeof segundoNumero, typeof primeiroNumero);