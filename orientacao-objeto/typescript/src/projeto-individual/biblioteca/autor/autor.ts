import { Livro } from "../livro/livro";

  interface Autor {
    nome: string;
    dataNascimento: Date;
    nacionalidade: string;
    livros: Livro[];
  }
  

class Autor implements Autor {
    constructor(public nome: string, public dataNascimento: Date, public nacionalidade: string) {
      this.livros = [];
    }
  
    adicionarLivro(livro: Livro) {
      this.livros.push(livro);
    }
  
    removerLivro(livro: Livro) {
      this.livros.splice(this.livros.indexOf(livro), 1);
    }
}

export { Autor }