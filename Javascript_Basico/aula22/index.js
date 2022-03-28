/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar verdadeiro
|| -> OR -> OU ->
! -> NOT -> NÃO ->
*/

const expressaoAnd = true && true && true && false;
console.log(`Todas as expressões são verdadeiras ? 
Resposta: ${expressaoAnd}
`);

const usuario = 'Tawan';
const senha = '123456';

// Ambas precisam ser Verdadeiro 
const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(`O usuario pode logar ? 
Resposta: ${vaiLogar}
`);


const expressaoOr = false || true;
console.log(`Ao menos uma expressão é verdadeira? 
Respposta: ${expressaoOr}
`);

console.log(!true) // False
console.log(!!true) // true
console.log(!!!true) // False
console.log(!!!!true) // true






