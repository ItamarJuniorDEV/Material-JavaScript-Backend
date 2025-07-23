// No caso o primeiro declarado será de índice0
// O segundo será indíce 1, e assim sucessivamente
// fica o primeiro array, 'Vírgula', segundo array
// 2 arrays dentro de 1
// Quando for chamar, [posição na primeira lista][posição da segunda]
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

console.log(
  `A aluna da posição 1 da lista é: ${lista[0][1]}.
A nota dessa aluna é ${lista[1][1]}`
);
