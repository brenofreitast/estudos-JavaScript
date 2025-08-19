// Tratando e lançando erros (try, catch, throw)

try {   // SE ALGUM ERRO OCORRER DENTRO DO BLOCO TRY, CATCH SERÁ EXECUTADO.
    console.log(naoExisto); 
} catch(error){ 
    console.log('OCORREU UM ERRO')  
    console.log(error);     // -> NÃO RECOOMENDADO PARA O CLIENTE.
}

/* NÃO É RECOMENDADO MOSTRAR CODIGO DE ERRO PARA O CLIENTE FINAL, TROCAR POR UMA FRASE 'OCORREU UM ERRO',
     OU ALGO DO TIPO.*/


