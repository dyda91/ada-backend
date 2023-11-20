import { Autor } from "./autor/autor";
import { Livro } from "./livro/livro";
import { Usuario } from "./usuario/usuario";

class Biblioteca {
  private livros: Livro[];
  private autores: Autor[];
  private usuarios: Usuario[];

  constructor() {
    this.livros = [];
    this.autores = [];
    this.usuarios = [];
  }

  adicionarLivro(titulo: string, nomeAutor: string, anoPublicacao: number, genero: string): void {
    const autorExistente = this.autores.find(autor => autor.nome === nomeAutor);
    const autor = autorExistente ? autorExistente : this.adicionarNovoAutor(nomeAutor);

    const novoLivro = new Livro(titulo, autor.nome, anoPublicacao, genero);
    this.livros.push(novoLivro);
    console.log(`Livro "${titulo}" adicionado à biblioteca com o autor "${autor.nome}".`);
  }

  adicionarNovoAutor(nome: string): Autor {
    const novoAutor = new Autor(nome, new Date(), 'Nacionalidade padrão'); 
    this.autores.push(novoAutor);
    console.log(`Autor "${nome}" adicionado à biblioteca.`);
    return novoAutor;
  }


  adicionarAutor(nome: string, dataNascimento: Date, nacionalidade: string): void {
    const novoAutor = new Autor(nome, dataNascimento, nacionalidade);
    this.autores.push(novoAutor);
    console.log(`Novo autor "${nome}" adicionado à biblioteca.`);
  }

  listarLivrosPorAutor(nomeAutor: string): Livro[] {
    const autorEncontrado = this.autores.find(autor => autor.nome === nomeAutor);
    if (autorEncontrado) {
      return autorEncontrado.livros;
    } else {
      return [];
    }
  }

  
  removerLivro(livro: Livro): void {
    this.livros = this.livros.filter((liv) => liv !== livro);
  }

  removerAutor(autor: Autor): void {
    const index = this.autores.findIndex((aut) => aut === autor);
    if (index !== -1) {
      this.autores.splice(index, 1);
    }
  }

  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  removerUsuario(usuario: Usuario): void {
    const index = this.usuarios.findIndex((usr) => usr === usuario);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
    }
  }

  buscarLivrosPorAutor(nomeAutor: string): Livro[] {
    return this.livros.filter((livro) => livro.autor === nomeAutor);
  }

  listarLivrosEmprestados(): Livro[] {
    return this.livros.filter((livro) => livro.emprestado);
  }

  getLivros(): Livro[] {
    return this.livros;
  }

  getAutores(): Autor[] {
    return this.autores;
  }

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  carregarDados(dadosBiblioteca: any): void {
    this.livros = dadosBiblioteca.livros;
    this.autores = dadosBiblioteca.autores;
    this.usuarios = dadosBiblioteca.usuarios;
  }

  salvarDados(): string {
    const dadosParaSalvar = {
      livros: this.getLivros(),
      autores: this.getAutores(),
      usuarios: this.getUsuarios(),
    };

    return JSON.stringify(dadosParaSalvar, null, 2);
  }

}

export { Biblioteca };
