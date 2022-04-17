// IIFE -> Immediately invoked function expression
// Função imediata invocada

(function () {
    const sobrenome = 'Silva';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Tawan'));
    }

    falaNome();
})();
