function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

// Promisse.all Promise.race Promise.resolve Promise.reject

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
            if (typeof msg !== 'string') {
                reject('CAIR NO ERRO')
                return;
            }
            return;
        }, tempo);
    });
}

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));


// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(1000, 1000),
//     'Outro valor'
// ];

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor);
//     }).catch(function (erro) {
//         console.log(erro);
//     });

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });