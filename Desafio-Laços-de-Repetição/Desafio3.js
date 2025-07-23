// 3. Crie uma função que receba uma array de números inteiros
// e retorne a soma dos elementos.

function receberArray() {
  const numeros = [3, 5, 8, 9, 5, 4];

  let somaDosNumeros = 0;

  for (let i = 0; i < numeros.length; i++){
    somaDosNumeros += numeros[i];
  }

  return somaDosNumeros;
}
console.log(receberArray());