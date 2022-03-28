function criarPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        fala() {
            console.log(`Meu nome é: ${this.nome} ${sobrenome} e tenho: ${this.idade}  `)
        }
    };
}

const pessoa1 = criarPessoa('Tawan', 'Silva', 20);
const pessoa2 = criarPessoa('Cátia', 'Camara', 38);
const pessoa3 = criarPessoa('Samara', 'Camara', 6);


console.log(pessoa1.nome, pessoa1.sobrenome);

const pessoa4 = {
        nome: 'Roseli',
        sobrenome: 'Barbosa',
        idade: 41,

        fala() {
            console.log(`${this.nome} ${this.sobrenome} está dando as boas vindas`)
        },

        indecrementaIdade() {
            this.idade++;
            console.log(`minha idade atual é ${this.idade}`);
        }
};

pessoa4.fala();
pessoa4.indecrementaIdade();
