// Usamos o for...of quando queremos percorrer valores de arrays, strings,...
// Sempre retorna os VALORES
// Muito usado para percorrer lista de dados

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0; 

for (nota of notas) {
  console.log(nota[1]);
  somaDasNotas += nota;
}

media = (somaDasNotas) / notas.length;
console.log(` A média das notas é ${media}`);

// IMPORTANTE: O "nota" guarda o valor de cada elemento
