// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> sempre inicia nome com a primeira letra maiúscula
// -> new Pessoa()


function Pessoa(nome, sobrenome) {
   // Variável privadas ou atributos
    const ID = 123456;

    const metodoInterno = () => {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ':  Sou um método');
    }
}

const p1 = new Pessoa('Tawan', 'Silva');
const p2 = new Pessoa('Magu', 'Miranza');
p1.metodo();
console.log(p2.nome);

