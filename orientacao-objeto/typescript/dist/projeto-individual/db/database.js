"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carregarDados = exports.salvarDados = void 0;
const fs = require('fs');
const path = require('path');
const biblioteca_1 = require("../biblioteca/biblioteca");
function salvarDados(biblioteca) {
    const dadosParaSalvar = {
        livros: biblioteca.obterLivros(),
        autores: biblioteca.autores,
        usuarios: biblioteca.usuarios,
    };
    const caminhoArquivo = path.join(__dirname, 'dados.json');
    fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosParaSalvar, null, 2));
}
exports.salvarDados = salvarDados;
function carregarDados() {
    const caminhoArquivo = path.join(__dirname, 'dados.json');
    if (fs.existsSync(caminhoArquivo)) {
        const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
        const dadosBiblioteca = JSON.parse(dados);
        const biblioteca = new biblioteca_1.Biblioteca();
        biblioteca.livros = dadosBiblioteca.livros;
        biblioteca.autores = dadosBiblioteca.autores;
        biblioteca.usuarios = dadosBiblioteca.usuarios;
        return biblioteca;
    }
    return new biblioteca_1.Biblioteca();
}
exports.carregarDados = carregarDados;
