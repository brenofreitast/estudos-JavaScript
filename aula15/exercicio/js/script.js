const num1 = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num1;
texto.innerHTML = ' ';
texto.innerHTML += `<p> Raiz quadrada: <strong>${num1 ** 0.5}</strong> </p>`
texto.innerHTML += `<p> ${num1} é inteiro: <strong>${Number.isInteger(num1)}</strong> </p>`
texto.innerHTML += `<p> É NaN: <strong>${Number.isNaN(num1)}</strong> </p>`
texto.innerHTML += `<p> Arredondando para baixo: <strong>${Math.floor(num1)}</strong> </p>`
texto.innerHTML += `<p> Arredondando para cima: <strong>${Math.ceil(num1)}</strong> </p>`
texto.innerHTML += `<p> Com duas casas decimais: <strong>${num1.toFixed(2)}</strong> </p>`

