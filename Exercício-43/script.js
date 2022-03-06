/*
function eMaior(x, y) {
    if (x > y) {
        return x
    }else {
        return y
    }
}


function eMaior(x, y) {
    if (x > y) {
        return x
    }
    return y
}

function eMaior(x, y) {
    return x > y ? x : y;
}
*/

const eMaior = (x, y) =>  x > y ? x : y;

const maior = eMaior(2, 20);  

console.log(maior)