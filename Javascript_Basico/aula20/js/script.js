const nome = document.querySelector('.nome');
const sobrenome = document.querySelector('.sobrenome');
const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');
const url = document.querySelector('.url');

let dados = [];

dados.push({
  nome: nome.value,
  sobrenome: sobrenome.value,
  url: url.value
});

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  resultado.innerHTML += `
  <h2>Dados Digitados:</h2><br>
  <p>Nome: ${nome.value}</p><br>
  <p>Sobrenome: ${sobrenome.value}</p><br>
  <img src="${url.value}">`

  resultado.classList.add('resultado');

  evento.preventDefault();
});
