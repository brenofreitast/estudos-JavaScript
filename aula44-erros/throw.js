// Tratando e lançando erros (try, catch, throw)

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Não é possível dividir por zero");
  }
  return a / b;
}

console.log(dividir(1, 0));

// (THROW) Interrompe o fluxo normal do programa quando algo inesperado acontece.