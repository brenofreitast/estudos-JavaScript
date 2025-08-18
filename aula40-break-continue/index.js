//  CONTINUE - BREAK

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    if (numero === 2){
        console.log('###')
        continue;   //  PULA PARA O PROXIMO.
    }

    console.log(numero);

    if(numero === 7){
        console.log('###')
        break;  //  INTERROMPE O CODIGO.
    }

}

