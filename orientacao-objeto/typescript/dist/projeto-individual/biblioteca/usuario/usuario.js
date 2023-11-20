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
        const index = this.livrosEmprestados.indexOf(livro);
        if (index !== -1) {
            this.livrosEmprestados.splice(index, 1);
            livro.devolver();
        }
    }
}
exports.Usuario = Usuario;
