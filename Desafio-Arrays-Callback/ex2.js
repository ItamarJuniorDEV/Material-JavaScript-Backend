// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros:
// um array e uma função de callback que executa alguma operação matemática. 
// Essa função deve iterar por cada elemento do array e aplicar 
// a função de callback em cada um dos elementos, 
// imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcaoCallback) {
  return array.map(funcaoCallback);
}

function operacaoMultiplica(num){
  return num * 20;
}
const listaNumeros = [1,2,3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, operacaoMultiplica);
  console.log(listaNumerosDobrados);
