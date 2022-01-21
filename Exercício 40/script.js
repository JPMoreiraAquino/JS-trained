for(let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) {
     
        console.log(i, "é impar")
    } 
    else {
        console.log(`${i} é par`)
    }
}

let i = 5

while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(`${i} é Ímpar`)  
    }
    i--
}

let i = 1;
do {
    console.log("Digitando", i)
    i++;
} while (i <= 20)