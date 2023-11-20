"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carregarDados = exports.salvarDados = void 0;
const biblioteca_1 = require("../biblioteca/biblioteca");
const fs = require('fs');
const path = require('path');
function salvarDados(biblioteca) {
    const caminhoArquivo = path.join(__dirname, 'dados.json');
    const dadosParaSalvar = biblioteca.salvarDados();
    fs.writeFileSync(caminhoArquivo, dadosParaSalvar);
}
exports.salvarDados = salvarDados;
function carregarDados() {
    const caminhoArquivo = path.join(__dirname, 'dados.json');
    if (fs.existsSync(caminhoArquivo)) {
        const dados = fs.readFileSync(caminhoArquivo, 'utf-8');
        const dadosBiblioteca = JSON.parse(dados);
        const biblioteca = new biblioteca_1.Biblioteca();
        biblioteca.carregarDados(dadosBiblioteca);
        return biblioteca;
    }
    return new biblioteca_1.Biblioteca();
}
exports.carregarDados = carregarDados;
