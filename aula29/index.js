function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = ' - Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = ' - Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = ' - Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = ' - Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = ' - Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = ' - Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = ' - Sábado';
            return diaSemanaTexto;
        default:
        diaSemanaTexto = `${diaSemana} - Não existe esse dia na semana`

        return
    }
}

const data = new Date('2022-04-26 13:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana + diaSemanaTexto);

// switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = ' - Domingo';
//     break;
//     case 1:
//         diaSemanaTexto = ' - Segunda-Feira';
//     break;
//     case 2:
//         diaSemanaTexto = ' - Terça-Feira';
//     break;
//     case 3:
//         diaSemanaTexto = ' - Quarta-Feira';
//     break;
//     case 4:
//         diaSemanaTexto = ' - Quinta-Feira';
//     break;
//     case 5:
//         diaSemanaTexto = ' - Sexta-Feira';
//     break
//     case 6:
//         diaSemanaTexto = ' - Sábado';
//     break;
//     default:
//         diaSemanaTexto = `${diaSemana} - Não existe esse dia na semana`
// }

// if (diaSemana === 0) {
//     diaSemanaTexto = ' Domingo';
// }
// else if (diaSemana === 1) {
//     diaSemanaTexto = ' Segunda-fera';
// }
// else if (diaSemana === 2) {
//     diaSemanaTexto = ' Terça-Feira';
// }
// else if (diaSemana === 3) {
//     diaSemanaTexto = ' Quarta-Feira';
// }
// else if (diaSemana === 4) {
//     diaSemanaTexto = ' Quinta-Feira';
// }
// else if (diaSemana === 5) {
//     diaSemanaTexto = ' Sexta-Feira';
// }
// else if (diaSemana === 6) {
//     diaSemanaTexto = ' Sábado';
// } else {
//     diaSemanaTexto = `Não existe esse dia na Semana`;
// }

