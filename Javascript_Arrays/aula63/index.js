//
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes);
// nomes.splice(indice, delete, elem1, elem2, elem3)
// simulando pop() com (splice()) -> que REMOVE elem no final do array.

// const removidos = nomes.splice(3, 2);
// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');
// console.log(nomes, removidos);

// simulando shift() com (splice()) -> que REMOVE elem no ínicio do array.
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

// simulando unshift() com (splice()) -> que ADICIONA elems no ínicio do array.
// nomes.splice(0, 0, 'Luiz', 'Carlos', 'Tawan');
// console.log(nomes);

// simulando push() com (splice()) -> que que ADICIONA elems no final array.
// nomes.splice(nomes.length, 0, 'Luiz', 'Carlos', 'Tawan');
// console.log(nomes);


const primeiroLugar = setTimeout(() => {
    return 'Ana em primeiro'
}, 1000);

const segundoLugar = setTimeout(() => {
    return 'Pedro em segundo'
}, 2000);

const terceiroLugar = setTimeout(() => {
    return 'Roberta em terceiro'
}, 3000);


function podio() {
    
}
