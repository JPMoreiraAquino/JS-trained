const alunosDaTurmaA = [
    {
        nome: "João Pedro",
        nota: 2
    },
    {
        nome: "Talia",
        nota: 4
    },
    {
        nome: "Nalda",
        nota: 6
    },
    {
        nome: "Nalda",
        nota: 8.4
    },
    {
        nome: "Nalda",
        nota: 8.4
    },
    {
        nome: "Nalda",
        nota: 8.4
    },
    {
        nome: "Nalda",
        nota: 10
    },
    {
        nome: "Nalda",
        nota: 10
    },


];

 const alunosDaTurmaB = [
    {
         nome: "Magno",
         nota: 8.4
    },
     {
         nome: "Jamile",
         nota: 9.3
     },
     {
         nome: "Eduardo",
         nota: 7.4
     },

 ];

 const alunosDaTurmaC = [
    {
     nome: "Neide",
        nota: 3.4
    },
    {        nome: "Jose",
         nota: 5.3 },
    {
        nome: "Maria",
        nota: 3.4
   },
    

];

function calculaMedia(alunos) {
 let soma = 0
    for (let i = 0; i < alunos.length; i++) {  
        soma = soma + alunos[i].nota
    }
   
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
 const media2 = calculaMedia(alunosDaTurmaB)
const media3 = calculaMedia(alunosDaTurmaC)


function enviaMensagem(media, turma) {
    if (media > 6) {
        console.log(`A media da ${turma} foi ${media}. Parabéns.`)
        } else {
        console.log(`A media da ${turma} foi ${media}. Tente novamente na proxima.`)
        }; 
    };
enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')
enviaMensagem(media3, 'turma C')

 function marcarComoReprovado(aluno) {
         aluno.reprovado = false;
         if (aluno.nota < 6) {
             aluno.reprovado = true;  
     }
 }
 function enviarMensagemReprovado(aluno, turma) {
     if(aluno.reprovado) {
         console.log(`o Aluno ${aluno.nome} Da ${turma
        } Está REPROVADO!`)
     }


 }
 function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno)
    }
 }
 

 alunoReprovado(alunosDaTurmaA, 'turma A')
 alunoReprovado(alunosDaTurmaB, 'turma B')
 alunoReprovado(alunosDaTurmaC, 'turma C')