// 4. Crie uma função que receba uma array de números inteiros
// e retorne o menor valor e o maior valor da array,
// no seguinte formato: 'o menor número é X e o maior número é Y'.

function receberArray() {
  const lista = [4, 6, 3, 9, 24, 33];
  
  let menor = lista[0];
  let maior = lista[0];

  for (const valor of lista) {
    if (valor < menor) {
      menor = valor;
    }
    if (valor > maior) {
      maior = valor;
    }
  }

  console.log(`O menor valor é ${menor} e o maior valor é ${maior}`);
}

receberArray();
