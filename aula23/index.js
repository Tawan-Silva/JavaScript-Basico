/*
&& -> Todas as Espressões precisam ser verdadeiras para retornar TRUE
|| -> true OR FALSE -> Ao menos uma exoressão precisa ser verdadeira para retornar TRUE

FALSY
0
'' "" ``
null / undefined
NaN
* false (literal)
*/

console.log('Tawan' && 'Silva'); // retorna true poque ambos são strings

function falaOi () {
    return 'Oi';
}

let vaiExecutar = false;

console.log(vaiExecutar && falaOi()); // vai ser avaliado se algum valor é false

console.log(0 || false || null || "Tawan" || true);

const corUsuario = 'vermelho'
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); // Vai retornar um primeiro que der TRUE

const a = 0;
const b = null;
const c = 'false'; // false
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

