const data = new Date();
const diaSemana = data.getDay();
const diaMais1 = diaSemana + 1

let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
        
    default:
        diaSemanaTexto = '';
        break;
}

 if(diaSemana === 0){
    diaSemanaTexto = 'Domingo';
}else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda-Feira';
}else if(diaSemana === 2){
    diaSemanaTexto = 'Terça-Feira';
}else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta-Feira';
}else if(diaSemana === 4){
    diaSemanaTexto = 'Quinta-Feira';
}else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta-Feira';
}else if(diaSemana === 6){
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '';
}

console.log(diaMais1)
console.log(diaSemanaTexto)