// pop exclui o último elemento do array
// toFixed() arredonda para 2 casas após a vírgula
const notas = [10, 6, 8, 5.5, 10];

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2));