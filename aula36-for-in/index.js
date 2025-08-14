//  VETOR OU ARRAY ->
// const frutas = ['Pera', 'Maçã', 'Uva'];

//  for(let i=0;i<frutas.length;i++){
//      console.log(frutas[i]);
//  }

//  FOR IN -> LÊ OD ÍNDICES OU CHAVES DO OBJETO
// for (let i in frutas){
//     console.log(i);
// }

//  OBJETO ->
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Ótavio',
    idade: 30
};

for(let chave in pessoa){
    console.log(chave);        // ITERAR(REPITIR) AS CHAVES.
}

console.log()

for(let valor in pessoa){
    console.log(pessoa[valor]); // ITERAR(REPITIR) O CONTEUDO DAS CHAVES.
}

console.log()

for(let chave in pessoa){
    console.log(`${chave} : ${pessoa[chave]}`); // ITERAR(REPITIR) CHAVE E CONTEUDO.
}