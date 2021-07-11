// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Sunday'
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Monday'
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Tuesday'
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Wednesday'
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Thursday'
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Friday'
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Saturday'
//             return diaSemanaTexto;
//     }
// }

// function getNomeMes(numeroMes) {
//     let nomeMes;
//     switch (numeroMes) {
//         case 0:
//             nomeMes = 'January'
//             return nomeMes;
//         case 1:
//             nomeMes = 'February '
//             return nomeMes;
//         case 2:
//             nomeMes = 'March'
//             return nomeMes;
//         case 3:
//             nomeMes = 'April'
//             return nomeMes;
//         case 4:
//             nomeMes = 'May'
//             return nomeMes;
//         case 5:
//             nomeMes = 'June'
//             return nomeMes;
//         case 6:
//             nomeMes = 'July'
//             return nomeMes;
//         case 7:
//             nomeMes = 'August'
//             return nomeMes;
//         case 8:
//             nomeMes = 'September'
//             return nomeMes;
//         case 9:
//             nomeMes = 'October'
//             return nomeMes;
//         case 10:
//             nomeMes = 'November'
//             return nomeMes;
//         case 11:
//             nomeMes = 'December'
//             return nomeMes;
//     }
// }


//     if( data.getHours() >= 12) {
//        hours = 'PM'
//     } else {
//        hours = 'AM'
//     }
//     function criaZero (num) {
//         return num >= 10 ? num : `0${num}`;
//     }


// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     console.log(nomeDia, nomeMes)
    
//     return `${nomeDia},  ${nomeMes} ${data.getDate()},   ${data.getFullYear()} at `+` ${criaZero(data.getHours())}:${criaZero(data.getMinutes())} ${hours}`

//     console.log(hours) 
// }

// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container h1');
const data = new Date();

 h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});

