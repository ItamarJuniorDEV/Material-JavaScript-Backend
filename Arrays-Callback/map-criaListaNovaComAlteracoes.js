// Exemplo 1 (com números).
const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(function (nota) {
//   return nota + 1;
// });

const notasAtualizadas = notas.map((nota) => {
  if (nota + 1 >= 10) {
    return 10;
  }
  return nota + 1;
});

console.log(notasAtualizadas);

// Exemplo 2 (com strings).
const alunos = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const alunosMaiusculo = alunos.map((aluno) => {
  return aluno.toUpperCase();
}); 
console.log(alunosMaiusculo);

// Exemplo 3 (com manipulação).
const arrayNums = [1,2,3,4];

const arrayAlterado = arrayNums.map((num) => {
return num * 10;
});

console.log(arrayAlterado);



// OBS: O MAP DIFERENTEMENTE DO FOREACH, ELE PODE TER RETORNO.

