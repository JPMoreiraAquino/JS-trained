
const fizzbuzz = (x) => {
    if (typeof x !== "number") return x
    if (x % 3 === 0 && x % 5 === 0 ) return  x  + ' FizzBuzz'; 
    if (x % 3 === 0 ) return x + ' Fizz';
    if (x % 5 === 0 ) return x + ' Buzz';
    return x

    
}
for (let i = 0; i <= 100; i++){
console.log(fizzbuzz(i))
}