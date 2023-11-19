const fs = require('fs');
const path = require('path');
import { Biblioteca } from '../biblioteca/biblioteca';

function salvarDados(biblioteca: Biblioteca) {
  const dadosParaSalvar = {
    livros: biblioteca.obterLivros(),
    autores: biblioteca.autores, 
    usuarios: biblioteca.usuarios, 
  };

  const caminhoArquivo = path.join(__dirname, 'dados.json');
  fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosParaSalvar, null, 2));
}


function carregarDados(): Biblioteca {
  const caminhoArquivo = path.join(__dirname, 'dados.json');
  if (fs.existsSync(caminhoArquivo)) {
    const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
    const dadosBiblioteca = JSON.parse(dados);
    const biblioteca = new Biblioteca();
    biblioteca.livros = dadosBiblioteca.livros;
    biblioteca.autores = dadosBiblioteca.autores;
    biblioteca.usuarios = dadosBiblioteca.usuarios;
    return biblioteca;
  }
  return new Biblioteca();
}

export { salvarDados, carregarDados };
