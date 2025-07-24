


/*
    QUALQUER COISA DIFERENTE DISSO É TRUE EM JAVASCRIPT:

        false
        0
        '' "" ``
        null / undefined
        NaN

*/


/*
    const a = 0;
    const b = null;
    const c = false;
    const d = 'false'; // NAO É UMA STRING VAZIA, PORTANTO É TRUE.
    const e = NaN;

    // EXIBE A PRIMEIRA VARIAVEL TRUE.
    console.log(a || b || c || d || e);
*/


function falaOi(){
    return 'Oi';
}

const vaiExecutar = 'true';
console.log(vaiExecutar && falaOi()); // VARIAVEL vaiExercutar É TRUE ENTÃO EXECUTA A FUNCTION falaOi.




