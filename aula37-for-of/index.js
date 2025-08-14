//  indice        0       1          2
const nomes = ['Luiz', 'Ótavio', 'Henrique'];

//  FOR COMUM ->
for(let i=0;i<nomes.length;i++){
    console.log(nomes[i]);         //  ITERAR(REPITIR) O INDICE DE UMA STRING.(array ou strings)
}

console.log('####')

//  FOR IN ->
for(let i in nomes){
    console.log(nomes[i]);         //  ITERAR(REPITIR) O INDICE DE UMA STRING.(string, array e objetos)
}                                 //  É POSSIVEL ITERAR A VARIAVEL(em caso de objeto) E O VALOR.

console.log('####')

//  FOR OF ->
for(let valor of nomes){
    console.log(valor);         //  ITERAR(REPITIR) APENAS O VALOR DE UMA STRING.(retorna o valor)
}                               //  FOR OF NÃO FUNCIONA COM OBJETO.

console.log('####')

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);              //  ITERAR(REPITIR) ARRAY COM forEach.
});                                                 //  É POSSIVEL TER RETORNO DO VALOR, INDICE E ARRAY.