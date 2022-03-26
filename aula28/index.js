// const tresHoras = 60 * 60 * 3 * 1000; // Tres horas
// const umDia = 60 * 60 * 24 * 1000; // 1 dia
// const data = new Date(0 + tresHoras - umDia): // 01/01/1970 Timetamp unix ou época unix

// const data = new Date(2019, 3, 20, 15, 59); // ANO, MES, DIA, HORA, MINUTO, SEGUNDO E MILISSEGUNDOS
// console.log(data.toString());

const data = new Date();
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()); // O mes começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milissegundos', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 é domingo, 6 é Sábado
console.log(data.toString());

console.log(Date.now()); // Imprime a data atual em forma de segundos

let zeroAEsquerda = num => num >= 10 ? num : `0${num}`;

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const segundos = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano}/${hora}/${segundos}`
}

const data1 = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)
