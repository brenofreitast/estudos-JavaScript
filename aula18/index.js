// OBJETOS BÁSICO

// const pessoal []; --> array
// const pessoal {}; --> objeto

/*  
    const pessoa1 = {
        nome: 'Maria',
        sobrenome: 'Oliveira',
        idade: 44
    };

    const pessoa2 = {
        nome: 'Ana',
        sobrenome: 'Tavares',
        idade: 24
    };

    console.log(pessoa1.nome);
    console.log(pessoa1.idade)
*/

/* FUNCTION + OBJETO

    function criaPessoa (nome, sobrenome, idade){
        return {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        };

    }

    const pessoa1 = criaPessoa('Luiz', 'Miranda', 26);
    const pessoa2 = criaPessoa('Ana', 'Tavares', 23);
    const pessoa3 = criaPessoa('Laise', 'Freitas', 22);

    console.log(pessoa1.nome, pessoa1.sobrenome);
    console.log(pessoa1.idade)
*/

const pessoa1 ={
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 26,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }

};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
