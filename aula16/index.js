//  index dos arrays
//               1        2        3
const alunos = ['Tawan', 'Cátia', 'Samara']; 

alunos[0] = 'Taw';
alunos[3] = 'Silva'; // adiciona mais elementos ao array
console.log(alunos.length); // ver tamanho do array
alunos[alunos.length] = 'Rhanielly'; // adiciona elemento no fim do array
alunos.push('Roseli'); // adiciona elemento no final do array
console.log(alunos.slice(0, 2)) // retorna uma cópia de parte de um array apatir de posição inicio e fim (0, 1)
console.log(typeof alunos);
console.log(`É uma instancia de array: ${alunos instanceof Array} ` ); // Verificando se alunos é umaa instacia de array

console.log(alunos)
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);

alunos.unshift('Karla');  // adiciona elementos no começo do array
alunos.unshift('Cacilda'); // adiciona elementos no começo do array

// alunos.pop(); remove último elementos do array
console.log(alunos);
const removido = alunos.shift();
console.log(`${removido} foi removido do ínicio docfdd array`);
console.log(alunos);

const deleta = delete alunos[1]; 
console.log(`índece [1] foi deletado ${deleta}`);
console.log(alunos)

console.log(`Retorna -> ${alunos[50]}, pelo fato de não existir esse índice no Array`);  // tentando acessar elemento que nao existe no array