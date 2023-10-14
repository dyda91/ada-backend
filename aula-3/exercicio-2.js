/*
    Você é um professor, e tem uma lista com alguns alunos (sendo objetos),
    que contém nome, nota1 e nota2. Use o for para percorer esse array
    e calcular a média das duas notas de cada aluno.
    Ao final, imprimir o nome do aluno e a sua média
*/

const prompt = require("prompt-sync")();
const colors = require("colors");

const listaDeAlunos = [
  { nome: "João", notas: [8, 7] },
  { nome: "Maria", notas: [9, 8] },
  { nome: "Carlos", notas: [6, 5] },
  { nome: "Ana", notas: [7, 6] },
  { nome: "Pedro", notas: [10, 9] },
  { nome: "Lúcia", notas: [8, 7] },
  { nome: "Fernando", notas: [7, 6] },
  { nome: "Camila", notas: [9, 8] },
  { nome: "Rafael", notas: [6, 5] },
  { nome: "Juliana", notas: [10, 9] },
];

// for (let i = 0; i < listaDeAlunos.length; i++) {
//     const aluno = listaDeAlunos[i];
//     const notas = aluno.notas;
//     const media = (notas[0] + notas[1]) / 2;

//     console.log(`${aluno.nome}: Média = ${media}`);
//   }

function encontraAluno(listaDeAlunos, nome) {
  for (let i = 0; i < listaDeAlunos.length; i++) {
    const alunos = listaDeAlunos[i];

    if (nome == alunos.nome) {
      const notas = alunos.notas;
      const media = (notas[0] + notas[1]) / 2;
      const status = media >= 6 ? "Aprovado(a)".green : "Reprovado(a)".red;
      return `
O aluno ${alunos.nome} teve a média ${media} = ${status}
        `;
    }
  }
  return `
nome inválido
  `.red;
}

const nome = prompt("Digite o nome do aluno: ");

console.log(encontraAluno(listaDeAlunos, nome));
