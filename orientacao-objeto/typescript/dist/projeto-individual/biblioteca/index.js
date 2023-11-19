"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.livros = [];
        this.autores = [];
        this.usuarios = [];
    }
    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`O livro "${livro.titulo}" foi adicionado à biblioteca.`);
    }
    removerLivro(livro) {
        this.livros.splice(this.livros.indexOf(livro), 1);
    }
    obterLivros() {
        return this.livros;
    }
    adicionarAutor(autor) {
        this.autores.push(autor);
    }
    removerAutor(autor) {
        this.autores.splice(this.autores.indexOf(autor), 1);
    }
    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    removerUsuario(usuario) {
        this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
    }
    buscarLivrosPorAutor(nomeAutor) {
        return this.livros.filter((livro) => livro.autor === nomeAutor);
    }
    listarLivrosEmprestados() {
        return this.livros.filter((livro) => livro.emprestado === true);
    }
}
exports.Biblioteca = Biblioteca;
