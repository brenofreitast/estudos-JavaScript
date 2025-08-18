const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); // SELECIONA TODOS OS PARAGRAFOS DENTRO DA DIV.

const estilosBody = getComputedStyle(document.body); // SELECIONA TODOS OS ESTILOS COMPUTADOS NO BODY.
const backgroundColorBody = estilosBody.backgroundColor; // SELECIONA APENAS A COR DO BACKGROUND.


for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
    p.style.borderRadius = '10px';
    p.style.padding = '10px';
}
