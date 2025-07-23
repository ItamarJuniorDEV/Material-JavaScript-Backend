// slice divide o array tendo que dar o número inicial e final
// Pode se usar só com um número 
const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara',
    'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos',
    'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata',
    'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

console.log(sala1);
console.log(sala2);