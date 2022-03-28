function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }

    return x + y;
}

// Se occorer algum erro dentro do bloco try catch será executado
// Se não ocorrer nenhum erro no bloco try, try será executado
try {
    console.log(soma(1, 3));
    console.log(soma('2', 3));
}  catch(error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável pro usuário.');
}