const pessoa = {
    nome: 'João',    
    sobrenome:'Pedro',
    idade: '19',
    endereco: {
        rua: 'Rua Maria Rivanda sá',
        numero: 230
    }
};
const {nome, sobrenome, idade, endereco: {rua, numero}} = pessoa;

console.log(nome, sobrenome);
console.log(`Idade: ${idade}`)
console.log(`Endereço: ${rua} ${numero}`)