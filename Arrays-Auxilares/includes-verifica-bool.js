// includes verifica se um valor existe dentro do array ou string
// se achar retorna true, se não, false.
// includes geralmente é usado com o if
// indexOf serve pra achar a posição de um elemento
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
  if(lista[0].includes(aluno)) {
    const indice = lista[0].indexOf(aluno);
    const mediaAluno = lista[1][indice];
    console.log(`${aluno} tem a média ${mediaAluno}`);
  } else {
    console.log('Estudante não existente na lista');
  }
}

exibeNomeENota('Juliana');
exibeNomeENota('Vini');