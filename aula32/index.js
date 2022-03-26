// Atribuição via Desestruturação (ARRAYS)
// ... rest, ... spread
// const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [um, ,tres, , cinco, ,sete] = numeros;
// console.log(um, tres, cinco, sete);

const numeros =   [
//     1          2         3
//   0  1  2    0  1  2    0  1  2
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
// const [,[,,seis]] = numeros;

const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);