const largura = prompt('Digite a largura: ');
const altura = prompt('Digite a altura: ');

function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

//  Com Arrow function:
//  const ePaisagem = (largura, altura) => largura > altura ? true : false;

alert(ePaisagem(largura, altura));