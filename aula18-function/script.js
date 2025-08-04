function meuEscopo (){

    const n = prompt('Digite um numero: ');

    function parImpar (){
        if (n%2===0){
            return 'par';
        }else{
            return 'impar';
        }
    }

    alert(` Seu numero é ${parImpar(n)} `);

}

meuEscopo();