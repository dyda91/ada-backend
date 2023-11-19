import { Autor } from "./autor/autor";
import { Livro } from "./livro/livro";
import { Usuario } from "./usuario/usuario";
  
  interface Biblioteca {
    livros: Livro[];
    autores: Autor[];
    usuarios: Usuario[];
  }


  class Biblioteca implements Biblioteca {
    constructor() {
      this.livros = [];
      this.autores = [];
      this.usuarios = [];
    }
  
    adicionarLivro(livro: Livro) {
      this.livros.push(livro);
      console.log(`O livro "${livro.titulo}" foi adicionado à biblioteca.`);
    }
  
    removerLivro(livro: Livro) {
      this.livros.splice(this.livros.indexOf(livro), 1);
    }

    obterLivros(): Livro[] {
      return this.livros;
    }
  
    adicionarAutor(autor: Autor) {
      this.autores.push(autor);
    }
  
    removerAutor(autor: Autor) {
      this.autores.splice(this.autores.indexOf(autor), 1);
    }
  
    adicionarUsuario(usuario: Usuario) {
      this.usuarios.push(usuario);
    }
  
    removerUsuario(usuario: Usuario) {
      this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
    }
  
    buscarLivrosPorAutor(nomeAutor: string): Livro[] {
      return this.livros.filter((livro: Livro) => livro.autor === nomeAutor);
    }
  
    listarLivrosEmprestados(): Livro[] {
      return this.livros.filter((livro: Livro) => livro.emprestado === true);
    }

    
  }
  
export { Biblioteca }