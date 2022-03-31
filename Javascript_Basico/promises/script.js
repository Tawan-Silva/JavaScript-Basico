// Criação de promessa

const myPromise = new Promise((resolve, reject) => {

    const nome = "Tawan";

    if (nome === "Tawan") {
        resolve('Usuário Tawan encontrado!');

    } else {
        reject('O usuário Tawan não foi encontado!')
    }
});


myPromise.then((data) => {
    console.log(data);
});

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {

    const nome = "Tawan";

    if (nome === "Tawan") {
        resolve('Usuário Tawan encontrado!');

    } else {
        reject('O usuário Tawan não foi encontado!')
    }
});


myPromise2.then((data) => {
    return data.toLowerCase();
}).then((stingModificada) => {
    console.log(stingModificada);
});

// Retorno do catch
const myPromise3 = new Promise((resolve, reject) => {

    const nome = "Tawan";

    if (nome === "Tawan") {
        resolve('Usuário Tawan encontrado!');

    } else {
        reject('O usuário Tawan não foi encontado!')
    }
});

myPromise3.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('Aconteceu um erro ' + err);
});

// Resolver várias promessas

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok! Timeout');
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {

    const teste = "Saladu";

    setTimeout(() => {
        if (teste === 'Saladu') {
            resolve('Deu certo')
        } else {
            reject(' - Iiii deu merda')
        }

    }, 2000);

});

const p3 = new Promise((reolve, reject) => {
    reolve('P3 ok!')
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('Deu erro' + err);
});

// Fetch request na API do GitHub
// Fetch API

const userName = 'Tawan-Silva';

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'aplication/vnd.github.v3+json',
    },
}).then((response)=> {
    console.log(typeof response);
    console.log(response);
    return response.json()
}).then((data) => {
    console.log(`O nome de usuário é: ${data.login}`);
})
.catch((err) => {
    console.log(`Houve algum erro: ${err}`);
});