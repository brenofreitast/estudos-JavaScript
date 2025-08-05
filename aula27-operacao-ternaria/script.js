// OPERAÇÃO TERNÁRIA SERVE PARA ENCURTAR O CÓDIGO.

const pontuacao = 999;

// if(pontuacao >= 1000){
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }

// ULTILIZANDO OPERAÇÃO TERNÁRIA
//                   (CONDIÇÃO)        ? 'VALOR VERDADEIRO' 'VALOR FALSO'
const nivelUsuario = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

