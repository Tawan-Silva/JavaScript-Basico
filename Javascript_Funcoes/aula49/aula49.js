// Declaração de função (Function hoisting)
falaOi();
function falaOi () {
    console.log('Oie');
}

// Objetos de primeira classe (First-class objects)
// Function expression
const souUmdado = function() {
    console.log('Sou um dado');
};
souUmdado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo');
    funcao();
}

executaFuncao(souUmdado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

// Dentro de um abjeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar()