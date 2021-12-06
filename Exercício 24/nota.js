const alunosDaTurmaA = [
    {
        nome: "João Pedro",
        nota: 9.4
    },
    {
        nome: "Talia",
        nota: 9.3
    },
    {
        nome: "Nalda",
        nota: 8.4
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
    {
        nome: "Jose",
        nota: 5.3
    },
    {
        nome: "Maria",
        nota: 3.4
    },

];

function calculaMedia(alunos) {
return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
};

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)
const media3 = calculaMedia(alunosDaTurmaC)


function enviaMensagem(media, turma) {
    if (media > 6) {
        console.log(`A media da ${turma} foi ${media }. Parabéns.`)
        } else {
        console.log(`A media da ${turma} foi ${media}. Tente novamente na proxima.`)
        }; 
    };
enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')
enviaMensagem(media3, 'turma C') 

