const aluno01 = {
    nome: "João Pedro",
    nota: 7
}


const aluno02 = {
    nome: "João Pedro",
    nota: 9.0
}
const aluno03 = {
    nome: "João Pedro",
    nota: 9
}

const MediaGeral = (aluno01.nota + aluno02.nota + aluno03.nota ) /3

if (MediaGeral > 6 )
{
    console.log(`Sua media foi ${MediaGeral} Você Passou, Parabens!`)

}
else
{
    console.log(`Sua media foi ${MediaGeral} Você NÂO Passou, Parabens!`)
}

console.log(MediaGeral)
console.log(MediaGeral < 6)
