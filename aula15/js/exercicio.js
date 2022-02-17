let numero = Number(prompt('Digite um número:'));
numero = Number(numero);

// document.getElementById retorna referencia do elemento através do seu ID 
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const textoFirst = document.getElementById('texto-first');
const textoSecond = document.getElementById('texto-second');
const textoThird = document.getElementById('texto-third');
const textoFourth = document.getElementById('texto-fourth');
const textoFifth = document.getElementById('texto-fifth');

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>É um NaN ${isNaN(numero)} </p>`

textoFirst.innerHTML += `<p>A raiz quadrada deste número é: ${numero ** 0.5}</p>`;

textoSecond.innerHTML += `<p> ${numero} é um inteiro: ${Number.isInteger(numero)} </p>`;

textoThird.innerHTML += `<p> Arrendondando o número para baixo: ${Math.floor(numero)} </p>`;

textoFourth.innerHTML += `<p> Arrendondado o número para cima ${Math.ceil(numero)} </p>`;