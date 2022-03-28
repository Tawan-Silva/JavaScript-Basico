const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numeros) {
    let numero = numeros[i]

    if(numero === 2) {
        console.log('Pulei o número 2');
        continue; // Pula para a próxima iteração do laço
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; // Saí e termina o laço 
    }
    
    
}