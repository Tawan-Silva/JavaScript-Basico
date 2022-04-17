const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 9, 11, 15, 22, 27];

const total = numeros.reduce((acc, valor) => {
    if(valor % 2 !== 0) {
        acc += valor;
        // console.log(valor);
    }
    // console.log(acc, valor);
    return acc;
}, 0);

// console.log(total);

// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (map)


// retorna a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Tawan', idade: 90 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 }
]

const maisVelha = pessoas.reduce((acc, valor) => {
    if(acc.idade > valor.idade) return acc;
    return valor;
});

console.log(maisVelha);

