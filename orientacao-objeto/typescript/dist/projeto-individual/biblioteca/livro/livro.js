"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this.emprestado = false;
        this.copias = 1;
    }
    emprestar() {
        if (this.copias > 0) {
            this.emprestado = true;
            this.copias--;
        }
        else {
            throw new Error("Não há cópias disponíveis deste livro.");
        }
    }
    devolver() {
        this.emprestado = false;
        this.copias++;
    }
}
exports.Livro = Livro;
