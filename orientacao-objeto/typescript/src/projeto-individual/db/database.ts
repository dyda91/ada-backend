import { Biblioteca } from '../biblioteca/biblioteca';
const fs = require('fs');
const path = require('path');

function salvarDados(biblioteca: Biblioteca) {
  const caminhoArquivo = path.join(__dirname, 'dados.json');
  const dadosParaSalvar = biblioteca.salvarDados();
  fs.writeFileSync(caminhoArquivo, dadosParaSalvar);
}

function carregarDados(): Biblioteca {
  const caminhoArquivo = path.join(__dirname, 'dados.json');
  if (fs.existsSync(caminhoArquivo)) {
    const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
    const dadosBiblioteca = JSON.parse(dados);
    const biblioteca = new Biblioteca();
    biblioteca.carregarDados(dadosBiblioteca);
    return biblioteca;
  }
  return new Biblioteca();
}

export { salvarDados, carregarDados };

