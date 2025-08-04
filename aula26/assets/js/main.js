function meuEscopo() {

    const form = document.querySelector('#form');

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        const inputPeso = evento.target.querySelector('#peso');
        const inputAltura = evento.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
    });

    function criaP() {
        const p = document.createElement('p'); // Criou elemento <p> </p>
        return p;

    }

    function setResultado(msg) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        
        const p = criaP();
        
    }


}
meuEscopo();