// Não é possível redeclarar variável com 'let', mas é possível com var

nome = 'Tawan'; // Não Criar Variáveis sem especificar o tipo

var nome = 'Palito'; 
var nome = 'Palitinho'; // redeclarando uma variável, não recomendavel.
console.log(nome);

let numero = 1;
let numero = 2; // Erro ao redeclarar variável

console.log(numero);