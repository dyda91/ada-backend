"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const autor_1 = require("./autor/autor");
const livro_1 = require("./livro/livro");
class Biblioteca {
    constructor() {
        this.livros = [];
        this.autores = [];
        this.usuarios = [];
    }
    adicionarLivro(titulo, nomeAutor, anoPublicacao, genero) {
        const autorExistente = this.autores.find(autor => autor.nome === nomeAutor);
        const autor = autorExistente ? autorExistente : this.adicionarNovoAutor(nomeAutor);
        const novoLivro = new livro_1.Livro(titulo, autor.nome, anoPublicacao, genero);
        this.livros.push(novoLivro);
        console.log(`Livro "${titulo}" adicionado à biblioteca com o autor "${autor.nome}".`);
    }
    adicionarNovoAutor(nome) {
        const novoAutor = new autor_1.Autor(nome, new Date(), 'Nacionalidade padrão');
        this.autores.push(novoAutor);
        console.log(`Autor "${nome}" adicionado à biblioteca.`);
        return novoAutor;
    }
    adicionarAutor(nome, dataNascimento, nacionalidade) {
        const novoAutor = new autor_1.Autor(nome, dataNascimento, nacionalidade);
        this.autores.push(novoAutor);
        console.log(`Novo autor "${nome}" adicionado à biblioteca.`);
    }
    listarLivrosPorAutor(nomeAutor) {
        const autorEncontrado = this.autores.find(autor => autor.nome === nomeAutor);
        if (autorEncontrado) {
            return autorEncontrado.livros;
        }
        else {
            return [];
        }
    }
    removerLivro(livro) {
        this.livros = this.livros.filter((liv) => liv !== livro);
    }
    removerAutor(autor) {
        const index = this.autores.findIndex((aut) => aut === autor);
        if (index !== -1) {
            this.autores.splice(index, 1);
        }
    }
    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    removerUsuario(usuario) {
        const index = this.usuarios.findIndex((usr) => usr === usuario);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
        }
    }
    buscarLivrosPorAutor(nomeAutor) {
        return this.livros.filter((livro) => livro.autor === nomeAutor);
    }
    listarLivrosEmprestados() {
        return this.livros.filter((livro) => livro.emprestado);
    }
    getLivros() {
        return this.livros;
    }
    getAutores() {
        return this.autores;
    }
    getUsuarios() {
        return this.usuarios;
    }
    carregarDados(dadosBiblioteca) {
        this.livros = dadosBiblioteca.livros;
        this.autores = dadosBiblioteca.autores;
        this.usuarios = dadosBiblioteca.usuarios;
    }
    salvarDados() {
        const dadosParaSalvar = {
            livros: this.getLivros(),
            autores: this.getAutores(),
            usuarios: this.getUsuarios(),
        };
        return JSON.stringify(dadosParaSalvar, null, 2);
    }
}
exports.Biblioteca = Biblioteca;
