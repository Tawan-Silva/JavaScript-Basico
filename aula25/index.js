const numero = 10;

// Se (numero >= 0 && numero <= 5) ocorrer, faã isso {código}
// Se não faça isso {código}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} 
else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} 
/* else if (1 === 1) {
     console.log('Isso é LITERAL'); // Isso vai morgar com a lógica 
}
*/ 
else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} 
else {
    console.log('O número NÃQ está entre 0 e 11');
}