/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa T]tarde
Entre 18 - 23 - Boa noite
*/

// if pode ser executado sozinho
// sempre que utilizo else, eu preciso de um if antes
// posso ter vários else ifs na checagens 
// só posso ter um else na minha condição 
// posso usar condiçoes sem else if, utilizando apenas if e else

const hora = 18;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
}
else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
}
else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Hore Inválida');
}
