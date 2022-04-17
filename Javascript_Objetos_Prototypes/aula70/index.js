// função contrutora de objeto
// Quado funções estão dentro de objetos são chamadas de methods
/*
const pessoa1 = new Object();

pessoa1.nome = 'Tawan';
pessoa1.sobrenome = 'Silva';
pessoa1.idade = 20;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};


for(let chave in pessoa1) {
    console.log(pessoa1[chave]);
} */

// Factory functions / Constructor functions / Classes


// Factory functions 

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome, 
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Tawan', 'Silva')
// console.log(p1.nomeCompleto()); 


// Constructor functions 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze trava, não deixa criar tampouco alterar nada no objeto
    Object.freeze(this);
}

// {} <- this.
// const p1 = new Pessoa('Tawan', 'Silva');
// console.log(p1);

// const p2 = {};
// p2.nome = 'Tawan'

// p1 = (ENDERECO DE MEMORIA) -> 'Valor'
// p1.ENDERECODEMEMORIA = {nome: 'Outra coisa'}
const p1 = new Pessoa('Tawan', 'Silva');

p1.nome = 'Outra coisa'
const p2 = new Pessoa('Tawan', 'Silva');