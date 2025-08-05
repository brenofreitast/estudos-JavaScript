// FUNÇÃO CONSTRUTORA Date();
// const data = new Date(); -> Data atual.
// TODA FUNÇÃO CONTRUTORA COMEÇA COM new

const tresHoras = 60 * 60 * 3 * 1000; // TRÊS HORAS EM MILESIMOS DE SEGUNDOS.
const umDia = 60 * 60 * 24 * 1000; // UM DIA EM MILESIMOS DE SEGUNDOS.

const data = new Date(0 + tresHoras + umDia);
console.log(data.toString());

