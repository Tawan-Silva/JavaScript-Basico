// const nomes = ['Eduardo', 'Maria', 'Joana'];

// Função contrutora de arrays
// const nomes2 = new Array('Eduardo', 'Maria', 'Joana');

// nomes[2] = 'João';
// delete nomes[2]

const nomes = ['Eduardo', 'Maria', 'Joana'];
// console.log(nomes);
// pop() -> Remove elemento do final do array
// const removidoEnd = nomes.pop();
// console.log(`${nomes} -> Joana foi removido com pop()`);

// shift() remove elemento do inicio do array
// const removidoStart = nomes.shift();
// console.log(`${nomes} -> Eduardo foi removido com shift() \n`);

// Adiciona elemento no incio do array
// nomes.unshift('João')
// nomes.unshift('Wallace');
// console.log(nomes);

// Fatia o array espeficiando o inicio e fim como paremetro
// const novo = nomes.slice(1, 3);
// console.log(novo);

// const nome = 'Tawan Silva Souza';
// Cria um array especificando a divisão entre cada elemento como parametro
// const nome1 = nome.split(' ');
// console.log(nome1);

const nomeArray = ['Tawan', 'Silva', 'Souza'];
const nome = nomeArray.join(' ');
console.log(nome);