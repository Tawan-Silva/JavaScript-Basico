function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chabe quando usamos for in ou object.keys
        // value: estoque,  // valor
        // writable: false, // pode alterar ?
        configurable: true, // pode reconfigurar a chave?
        get: function() {
            return estoque
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1);
