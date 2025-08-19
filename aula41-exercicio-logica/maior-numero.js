const x = prompt('Digite um número: ');
const y = prompt('Digite outro número: ');

function numMaior(num1, num2) {
    if (x > y) {
        return x;
    }
    return y;
    //  Mesma funçao em Condição Ternária: 
    //  return x > y ? x : y;   -> Se x for maior que y retorna x, senão retorna y.
}

//  Ultilizando arrow function:
//  const max = (x, y) => {
//      return x > y ? x : y;
//  };
//  console.log(max(1,2));

alert(` Maior número: ${numMaior(x, y)} `);