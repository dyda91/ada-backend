"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(nome, dataNascimento, nacionalidade) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.nacionalidade = nacionalidade;
        this.livros = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    removerLivro(livro) {
        this.livros.splice(this.livros.indexOf(livro), 1);
    }
}
exports.Autor = Autor;
