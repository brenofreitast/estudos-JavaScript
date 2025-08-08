const text = document.querySelector('.container h1');
const data = new Date();

const getDia = data.getDate(); // getDate(): Retorna o dia do mês (1-31).
const getDiaSemana = data.getDay(); // getDay(): Retorna o dia da semana (0-6), 0 é domingo e 6 é sábado.
const getMes = data.getMonth(); // getMonth(): Retorna o mês (0-11), onde 0 é janeiro e 11 é dezembro.
const getAno = data.getFullYear(); // getMonth(): Retorna o mês (0-11), onde 0 é janeiro e 11 é dezembro.
const getHora = String(data.getHours()).padStart(2, '0'); // getHours(): Retorna a hora (0-23)
const getMin = String(data.getMinutes()).padStart(2, '0'); // getMinutes(): Retorna os minutos (0-59).
let diaSemanaTexto;
let mesTexto;



function getDiaSemanaF(getDiaSemana) {
    let diaSemanaTexto;
    switch (getDiaSemana) {

        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;

    }
}

function getMesF(getMes) {
    let mesTexto;
    switch (getMes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
    }
}


text.innerHTML = '';
text.innerHTML =  `<p> ${getDiaSemanaF(getDiaSemana)}, ${getDia} de ${getMesF(getMes)} de ${getAno} ${getHora}:${getMin} </p>` ;


// MANEIRA MAIS SIMPLES DE FAZER O MESMO

// const text = document.querySelector('.container h1');
// const data = new Date();
// text.innerHTML = data.toLocaleString('pt-BR', {
//      dateStyle: 'full', 
//      timeStyle: 'short' 
//     });