const pessoa = {
    nome: 'Tawan',
    sobrenome: 'Souza',
    idade: 20,
    endereco: {
        // rua: 'Rua  nova',
        numero: 320
    }
};

// Atruibuição via desestruturação objetos
 
// const { endereco: { rua: salada = 'Não existe', numero}, endereco } = pessoa;
const { nome, ...resto} = pessoa;
console.log(nome, resto);