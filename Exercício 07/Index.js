
const nome = 'João Pedro';
const Sobrenome = 'Moreira';
const idade = 39;
const peso = 84;
const alturaEmMetro = 1.73;
let imc; //peso / (altura * Altura)
let anoNascimento;
imc = peso / (alturaEmMetro * alturaEmMetro);
anoNascimento = 2021 - idade;


console.log(nome, Sobrenome, 'tem', idade, 'anos de idade, pesa', peso+'Kg', 'e tem', alturaEmMetro+'M', 'de altura e seu IMC é de',imc,'E ele Nasceu em', anoNascimento,)
