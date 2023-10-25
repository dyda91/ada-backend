// 1. Utilize o método "filter" novamente para criar um novo array com os alunos que têm idade menor que 20 anos.

// 2. Utilize o método "filter" mais uma vez para criar um novo array com os alunos cujo nome começa com a letra "J".


const alunos = [
    { nome: "Carlos", idade: 15 },
    { nome: "Julia", idade: 18 },
    { nome: "Pedro", idade: 12 },
    { nome: "Aline", idade: 23 },
    { nome: "Joana", idade: 16 },
    { nome: "Maisa", idade: 13 },
  ];


  const alunosMenosDe20 = alunos.filter((alunos) => alunos.idade < 20)
  console.log(alunosMenosDe20)


  const alunosComJ = alunos.filter((alunos) => alunos.nome[0] === "J")
  console.log(alunosComJ)
