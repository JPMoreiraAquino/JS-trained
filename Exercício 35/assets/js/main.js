const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const backgroundColorbody = estilosBody.backgroundColor;

console.log(backgroundColorbody);


for (let p of ps) {
    p.style.backgroundColor = backgroundColorbody;
    p.style.color = '#FFFFFF';
    
    console.log(p)
}