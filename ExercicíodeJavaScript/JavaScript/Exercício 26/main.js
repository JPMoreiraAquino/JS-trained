const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = 'Pink'

const corPadrao = corUsuario ||'Black';


console.log(nivelUsuario, corPadrao)