let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const troca = varA;
varA = varB;
varB = varC;
varC = troca;

// forma mais moderna de se fazer a troca:
// -> [varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);