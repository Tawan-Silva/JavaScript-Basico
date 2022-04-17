//Filter - > Sempre retorna um array, com a mesma 
//quantidade de elementos ou menos.

//               0   2   3  4  5  6  7  8  9  ...
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 9, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter((valor, indice, array) => {
    return valor > 70;
})

console.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a


// Array de Objetos
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5); 
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50)
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquentaAnos);
console.log(nomeTerminaComA);