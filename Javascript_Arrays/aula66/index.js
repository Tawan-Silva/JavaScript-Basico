//               0  1   2   3  4  5  6  7  8  9  ...
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 9, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => {
    return valor * 2
});

// console.log(numerosEmDobro);
// console.log(numeros);


// Para cada elemento
// Retorne apenas uma string com o nome de cada pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const nomePessoa = pessoas.map(obj => obj.nome);

const idades = pessoas.map(obj => ({ idade: obj.idade }));

const comIds = pessoas.map((obj, indice) => {
    const newObj = {...obj };
    newObj.id = indice;
    return newObj;
});

// console.log(nomePessoa);
console.log(pessoas);
console.log(comIds);



