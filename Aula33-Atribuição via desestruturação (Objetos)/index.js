// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJETOS)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 49
    }
};

// console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade);

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);