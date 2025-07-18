
// String é um texto iterável, ou seja, pode ser percorrido em sequência.

//    Índice ->  01234567
let umaString = 'Um texto'
let test = 'O rato roeu a roupa do rei de Roma.'

console.log(umaString[5]) // -> será exibido apenas o quinto caractere da string.
// umaString.charAt(5) -> É possivel ter  mesmo resultado usando a função .charAt().
console.log(umaString.indexOf('texto')) // .indexOf(texto) -> exibe em qual indice começa a palavra texto.
console.log(test.replace(/r/g, '#'))
console.log(test.length)
console.log(test.slice(2,6))
console.log(test.split(' '))

// console.log(umaString.indexOf('x' , 3)) -> buscar a letra 'x' apartir do indice 3.
// .lastIndexOf() -> Faz a busca de trás para frente.
// .replace('Um', 'Outro') -> Substitui a palavra 'Um' por 'Outro'.
// .replace(/r/g, '#') -> Dessa forma, todas as letras 'r' serão substituidas por '#'.
// .length -> Exibe tamanho da String.
// .slice(2,6) -> Fatia a String do índice 2 até 6. - .slice(-3) -> Exibe as ultimas 3 letras.
// .split(' ') ->  Divide a String a cada espaço ' '. Pode ser dividido por letra ou palavra tambem.
// .split(' ', 2) -> Divide a String a cada espaço ' ' por duas vezes.


// console.log(umaString.toUpperCase()) -> Função que exibe a String em letras maiusculas .toUpperCase().
// .toLowerCase() -> Exibe em letras minusculas.
