function rand(min = 0, max = 3) {
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

async function executa() {

    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
        console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
    
}

executa()

/*Estados da promises
peding -> Pendente
fullfilled -> resolvida
reject -> rejeitada*/