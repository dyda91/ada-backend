"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = [];
    }
    emprestarLivro(livro) {
        this.livrosEmprestados.push(livro);
        livro.emprestar();
    }
    devolverLivro(livro) {
        this.livrosEmprestados.splice(this.livrosEmprestados.indexOf(livro), 1);
        livro.devolver();
    }
}
exports.Usuario = Usuario;
