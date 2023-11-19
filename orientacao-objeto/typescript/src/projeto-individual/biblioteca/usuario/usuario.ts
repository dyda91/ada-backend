import { Livro } from "../livro/livro";
  interface Usuario {
    nome: string;
    email: string;
    livrosEmprestados: Livro[];
  }

class Usuario implements Usuario {
    constructor(public nome: string, public email: string) {
      this.livrosEmprestados = [];
    }
  
    emprestarLivro(livro: Livro) {
      this.livrosEmprestados.push(livro);
      livro.emprestar();
    }
  
    devolverLivro(livro: Livro) {
      this.livrosEmprestados.splice(this.livrosEmprestados.indexOf(livro), 1);
      livro.devolver();
    }
  }

  export { Usuario }