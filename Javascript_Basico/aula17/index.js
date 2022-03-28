function saudacao(nome) {
    return `${nome} está testando essa função`;
}

const variavel = saudacao('Tawan');
console.log(variavel)

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(`4 + 2 é igual a: ${soma(4, 2)}`);
console.log(`6 + 2 é igual a: ${soma(6, 2)}`);
console.log(`9 + 2 é igual a: ${soma('Tawan', 5)}`);

const raiz = function (n) { // Function anônima
    return n ** 0.5;
}

console.log(raiz(9));

const raiz = (n) => n ** 0.5; // Arrow function 

console.log(raiz(8));
