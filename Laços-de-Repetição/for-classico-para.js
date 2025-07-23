//  Exemplo 1
// Usamos o for para percorrer uma lista.
const notas1 = [10, 8.5, 5, 6.5, 8, 7.5];

// primeira expressão: executada apenas uma vez
// segunda expressão: condição de execução
// terceira expressão: executada sempre ao final do bloco
// vai pegar o índice(i) e o valor do índice (notas[i]) 
// enquanto a condição for verdadeira

for (i = 0; i < notas1.length; i++) {
  console.log(i, notas1[i]);
}
// --------------------------------------------------- //
//  Exemplo 2

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];  
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}`);

// IMPORTANTE: O "i" guarda a posição do índice




