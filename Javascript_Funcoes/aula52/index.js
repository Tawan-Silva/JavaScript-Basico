// escopo léxico

const nome = 'Tawan';

function falaNome () {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Cátia';
    
    falaNome()
}

usaFalaNome()