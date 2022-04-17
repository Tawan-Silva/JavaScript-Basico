/* Função definida com a palavra function 
tem uma paralavra especial que sustantenta 
todos os argumentos enviadors */

// function funcaoUm({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }

// function funcaoDois([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }

// funcaoUm({nome: 'Tawan', sobrenome: 'Silva', idade: 20});
// funcaoDois(['Tawan Silva', 'Souza', 20]);

// ...rest - spread operator
const conta = (...args) => {
    console.log(args);
   

    // console.log(acumulador);
    console.log(arguments);
};

conta('+', 0, 20, 30, 40, 50);