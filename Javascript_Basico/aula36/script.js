// For in -> le os indices ou chaves do objeto
//                 1       2      3
// const frutas = ['Pera', 'Maça', 'Uva'];

// // for(let i = 0; i < frutas.length; i++) {
// //     console.log(frutas[i]);
// // }


// for (let i in frutas) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Tawan',
    sobrenome: 'Silva',
    idade: 20
};



for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}