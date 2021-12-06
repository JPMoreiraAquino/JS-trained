function criapessoa (nome, sobrenome, idade) { 
    return{nome, sobrenome, idade };
}
const pessoa1 = criapessoa('João', 'Talia', 25);
const pessoa2 = criapessoa('maria', 'oliveira', 66);
const pessoa3 = criapessoa('Ruan', 'Silva', 43);
const pessoa4 = criapessoa('Gustavo', 'Torry', 23);
const pessoa5 = criapessoa('kelly', 'deiceds', 28);
console.log(pessoa1.nome, pessoa2.nome)