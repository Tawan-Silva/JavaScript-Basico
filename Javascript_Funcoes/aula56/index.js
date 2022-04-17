// Factory function (Função Fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return  {
        nome, 
        sobrenome,

        // Getter 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = "está falando nadica de nada...") {
            return `${this.nome} está ${assunto}`
        },

        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); 
        }
    };
}

const p1 = criaPessoa('Tawan', 'Silva', 1.70, 65);
const p2 = criaPessoa('Roseli', 'Barbosa', 1.67, 80);
const p3 = criaPessoa('Cátia', 'Camara', 1.63, 60);

console.log(p1);
console.log(p2);
console.log(p3);