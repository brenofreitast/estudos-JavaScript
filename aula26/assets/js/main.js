function meuEscopo() {

    const form = document.getElementById('form');

    
    function recebeEvento(evento) {
        evento.preventDefault();

        let pesoInput = document.getElementById('peso');
        let alturaInput = document.getElementById('altura');

        let peso = parseFloat(pesoInput.value);
        let altura = parseFloat(alturaInput.value);


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