const pessoa1 = {
    nome: 'Luiz',
     sobrenome: 'Miranda',
     idade: 24,

fala() {
     console.log(`${this.nome} ${this.sobrenome} Esta falando oi... `);
     console.log(`A minha idade atual é ${this.idade}`)
    },
Incremento() {
this.idade++;
    } 
};

pessoa1.fala();
pessoa1.Incremento();
pessoa1.fala();
pessoa1.Incremento();
pessoa1.fala();
pessoa1.Incremento();