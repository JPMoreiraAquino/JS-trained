const nome = ["João Pedro", "otavio", "luiz"] ;


for (let i = 0; i < nome.length; i++) {
    console.log (nome[i])

}

console.log("###")

for (let i in nome) {
    console.log (nome[i]);
}

console.log("###")

for (let valor of nome) {
    console.log(valor)
}

nome.forEach(function(valor, ind, array) {
    console.log(valor, ind, array)
})