 const pessoa = {
     nome: "João Pedro",
     idade: 25,

 };

 for(let key in pessoa) {
     console.log(key, pessoa['nome']);
 }

  const cores = ["Red", "Green", "Blue"];

 for (let index in cores) {
     console.log(index, cores[index])
 }

for (let index of cores) {
    console.log(index) 
}


