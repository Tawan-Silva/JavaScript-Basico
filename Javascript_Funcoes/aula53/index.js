// Clousures é habilidade acessar seu escopo léxico

function retornaFuncao() {
    const nome = 'Tawan';
    // funcao anônima
    return function () {
        console.log(`Chamou ${nome}!`); 
    };
}

const funcao = retornaFuncao('Tawan');
const funcao2 = retornaFuncao('Cátia');
console.dir(funcao());
console.dir(funcao2());


console.log(funcao(), funcao2());