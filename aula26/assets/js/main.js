function meuEscopo() {

    const form = document.getElementById('form');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');



    function recebeEvento(evento) {
        evento.preventDefault();

        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);


        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            form.innerHTML += `<p> Por favor, insira valores válidos. </p> `
            return;
        }

        const imc = (peso / (altura * altura)).toFixed(2);
        form.innerHTML += ` <p> Seu IMC é ${imc} </p> `
    }


    form.addEventListener('submit', recebeEvento);
}

meuEscopo();