// Estrutura de repetição (FOR)

// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');


// USANDO for
for (let i=0; i<=5; i++) {      // VARIAVEL i RECEBE 0; i É MENOR OU IGUAL A 5? (caso seja prossiga);
    console.log(`Linha ${i}`);  // i É INCREMENTADO, PASSA DE 0 PARA 1, E EXECUTA OQUE TEM DETRO DO for.
}
console.log();
// AO INVES DE i++, USAR i += 10 PARA PULAR DE 10 EM 10.

for (let i=0; i<=5; i++) {      
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par)
}
console.log();

//                 0       1      2
const frutas = ['Maçã', 'Pera', 'Uva'];
for (let i=0; i<frutas.length; i++) {      
    console.log(frutas[i]);
}
console.log();
// .length mostra quantos valores existem no objeto.