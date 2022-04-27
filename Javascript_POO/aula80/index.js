class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }


    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Pessoa2.prototype.falar = function() {
        console.log(`${this.nome} está falando`);
    }
}

const p5 = new Pessoa2('Tawan', 'Prototype');

const p1 = new Pessoa('Tawan', 'Silva');
const p2 = new Pessoa('Cátia', 'Camara');
const p3 = new Pessoa('Roseli', 'Barbosa');
const p4 = new Pessoa('Samara', 'Camara');