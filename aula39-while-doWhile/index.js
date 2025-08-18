//  WHILE - (ENQUANTO) - CHECA A CONDIÇÃO DEPOIS EXECUTA O CODIGO ->

// let controle = 0;

// while(controle <= 10){  //  ENQUANTO (WHILE) controle FOR MENOR OU IGUAL A 10, EXECUTA O CODIGO.
//     console.log(controle);
//     controle++;
// }

function random(min, max){  //  FUNÇÃO PARA GERAR UM NUMERO ALEATORIO.
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); //    Math.floor -> Numero inteiro.
}


const max = 50;
const min = 1;
let rand = random(min, max);


// while (rand !== 10){
//     rand = random(min, max);
//     console.log(rand);
// }

// --------------------------------------------------------------------------------

//  DO WHILE - EXECUTA O CODIGO DEPOIS CHECA A CONDIÇÃO ->
do{
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10);
