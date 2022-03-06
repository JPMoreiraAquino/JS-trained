
const mostraHora = () => {
    let data = new Date;
    return data.toLocaleTimeString('pt-Br', {
        hour12: false
    });
}

const timer = setInterval(() =>{
    console.log(mostraHora());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 4000)

setTimeout(() => {
    console.log('Hello World!');
}, 5000)