// Crie um programa que calcule a média dos números presentes 
// em um array utilizando um loop for.

const lista = [8, 6.5, 4, 9, 20, 40, 333, 43];

let somaDosNumeros = 0;

for (let i = 0; i < lista.length; i++){
  somaDosNumeros += lista[i];
}

const media = somaDosNumeros / lista.length;
console.log(media);