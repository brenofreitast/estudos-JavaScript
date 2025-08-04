//  FORMAS DE CRIAR FUNÇÃO

/*
    function ola(nome) {
        console.log(`Bom dia ${nome}!`)
    }

    ola(`Ana`);
*/

/*
    function soma(x, y){
        const resultado = x + y;
        return resultado; // Dentro da funçao, abaixo de return, nada mais funciona.
    }

    const resultado = soma(2, 3);
    console.log(resultado);
*/

/*
    const raiz = function (n){
        return n ** 0.5;
    };

    console.log(raiz(9));
    console.log(raiz(16));
    console.log(raiz(25));
*/

// ARROW FUNCTION
    const raiz = n => n ** 0.5;

    console.log(raiz(9));
    console.log(raiz(16));
    console.log(raiz(25));