"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const autor_1 = require("./autor/autor");
const livro_1 = require("./livro/livro");
const usuario_1 = require("./usuario/usuario");
class Biblioteca {
    constructor() {
        this.livros = [];
        this.autores = [];
        this.usuarios = [];
        this.livrosEmprestados = [];
    }
    adicionarLivro(titulo, nomeAutor, anoPublicacao, genero) {
        const autorExistente = this.autores.find(autor => autor.nome === nomeAutor);
        const autor = autorExistente ? autorExistente : this.adicionarNovoAutor(nomeAutor);
        const novoLivro = new livro_1.Livro(titulo, autor.nome, anoPublicacao, genero);
        this.livros.push(novoLivro);
        console.log(`Livro "${titulo}" adicionado à biblioteca com o autor "${autor.nome}".`);
    }
    removerLivro(livro) {
        this.livros = this.livros.filter((liv) => liv !== livro);
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
    removerAutorPorNome(nomeAutor) {
        const autorEncontrado = this.autores.find(autor => autor.nome === nomeAutor);
        if (autorEncontrado) {
            this.removerAutor(autorEncontrado);
            console.log(`Autor "${nomeAutor}" removido com sucesso.`);
        }
        else {
            console.log(`Autor "${nomeAutor}" não encontrado.`);
        }
    }
    removerAutor(autor) {
        const index = this.autores.findIndex((aut) => aut === autor);
        if (index !== -1) {
            this.autores.splice(index, 1);
        }
    }
    adicionarNovoUsuario(nome, email) {
        const novoUsuario = new usuario_1.Usuario(nome, email);
        this.adicionarUsuario(novoUsuario);
        console.log(`Novo usuário "${nome}" cadastrado com sucesso.`);
    }
    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    removerUsuario(usuario) {
        const index = this.usuarios.findIndex((usr) => usr === usuario);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
            console.log(`Usuário "${usuario.nome}" removido da biblioteca.`);
        }
        else {
            console.log(`Usuário "${usuario.nome}" não encontrado na biblioteca.`);
        }
    }
    buscarLivrosPorAutor(nomeAutor) {
        return this.livros.filter((livro) => livro.autor === nomeAutor);
    }
    emprestarLivroParaUsuario(tituloLivro, nomeUsuario) {
        const livroEncontrado = this.livros.find(livro => livro.titulo === tituloLivro);
        const usuarioEncontrado = this.usuarios.find(usuario => usuario.nome === nomeUsuario);
        if (!livroEncontrado) {
            console.log(`Livro "${tituloLivro}" não encontrado na biblioteca.`);
            return;
        }
        if (!usuarioEncontrado) {
            console.log(`Usuário "${nomeUsuario}" não encontrado na biblioteca.`);
            return;
        }
        if (livroEncontrado.emprestado) {
            console.log(`Livro "${tituloLivro}" já está emprestado.`);
            return;
        }
        if (livroEncontrado.copias === 0) {
            console.log(`Não há cópias disponíveis do livro "${tituloLivro}".`);
            return;
        }
        livroEncontrado.emprestado = true;
        livroEncontrado.copias--;
        usuarioEncontrado.emprestarLivro(livroEncontrado);
        console.log(`Livro "${tituloLivro}" emprestado para o usuário "${nomeUsuario}" com sucesso.`);
    }
    carregarLivrosEmprestados(livrosEmprestados) {
        livrosEmprestados.forEach((livroEmprestado) => {
            const livro = this.livros.find((livro) => livro.titulo === livroEmprestado.titulo);
            const usuario = this.usuarios.find((usuario) => usuario.nome === livroEmprestado.usuario);
            if (livro && usuario) {
                this.livrosEmprestados.push({ livro, usuario });
            }
        });
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
