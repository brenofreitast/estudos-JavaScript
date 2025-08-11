// // ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAY)

// // EX =
//     let a = 'A'; // -> B
//     let b = 'B'; // -> C
//     let c = 'C'; // -> A

//     const letras = [b, c, a];
//     [a, b, c] = letras;

//     console.log(a, b, c);


// REST OPERATOR (...)

//                0    1    2    3    4    5    6    7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [primeiroNumero, segundoNumero, ...resto] = numeros; // TRÊS PONTOS (...) PARA PEGAR RESTO, CASO NECESSARIO.
console.log(primeiroNumero, segundoNumero);
console.log(resto);

// ESPAÇO EM BRANCO ENTRE VIRGULAS PARA PULAR UM VALOR:

//const [primeiroNumero, , terceiroNumero, , quintoNumero] = numeros;
//console.log(primeiroNumero, terceiroNumero, quintoNumero);

// ARRAY DENTRO DE OUTRO ARRAY:

//                     0          1          2
//                  0  1  2    0  1  2    0  1  2
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros2[1][2]);
