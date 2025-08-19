// Numero divisivel por 3 = Fizz.
// Numero divisivel por 5 = Buzz.
// Numero divisivel por 3 e 5 = FizzBuzz.
// Numero NAO é divisivel por 3 e 5 = Retorna o próprio numero.
// Checar se o numero é realmente um numero, se nao for = retorna o próprio numero.
// Use a funçao com numeros de 0 a 100.

function divisivel(x) {
    if (typeof x !== 'number') return x;
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if (x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';
    return x;

}

for (let i=0;i<=100;i++){
    console.log(i, divisivel(i));
}
