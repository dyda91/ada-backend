import { Autor } from "./autor/autor";
import { Livro } from "./livro/livro";
import { Usuario } from "./usuario/usuario";

class Biblioteca {
  private livros: Livro[];
  private autores: Autor[];
  private usuarios: Usuario[];
  private livrosEmprestados: { livro: Livro; usuario: Usuario }[];

  constructor() {
    this.livros = [];
    this.autores = [];
    this.usuarios = [];
    this.livrosEmprestados = [];
  }

  adicionarLivro(titulo: string, nomeAutor: string, anoPublicacao: number, genero: string): void {
    const autorExistente = this.autores.find(autor => autor.nome === nomeAutor);
    const autor = autorExistente ? autorExistente : this.adicionarNovoAutor(nomeAutor);

    const novoLivro = new Livro(titulo, autor.nome, anoPublicacao, genero);
    this.livros.push(novoLivro);
    console.log(`Livro "${titulo}" adicionado à biblioteca com o autor "${autor.nome}".`);
  }
  
  removerLivro(livro: Livro): void {
    this.livros = this.livros.filter((liv) => liv !== livro);
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
  

  removerAutorPorNome(nomeAutor: string): void {
    const autorEncontrado = this.autores.find(autor => autor.nome === nomeAutor);
    if (autorEncontrado) {
      this.removerAutor(autorEncontrado);
      console.log(`Autor "${nomeAutor}" removido com sucesso.`);
    } else {
      console.log(`Autor "${nomeAutor}" não encontrado.`);
    }
  }
  removerAutor(autor: Autor): void {
    const index = this.autores.findIndex((aut) => aut === autor);
    if (index !== -1) {
      this.autores.splice(index, 1);
    }
  }

  adicionarNovoUsuario(nome: string, email: string): void {
    const novoUsuario = new Usuario(nome, email);
    this.adicionarUsuario(novoUsuario);
    console.log(`Novo usuário "${nome}" cadastrado com sucesso.`);
  }

  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  removerUsuario(usuario: Usuario): void {
    const index = this.usuarios.findIndex((usr) => usr === usuario);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      console.log(`Usuário "${usuario.nome}" removido da biblioteca.`);
    } else {
      console.log(`Usuário "${usuario.nome}" não encontrado na biblioteca.`);
    }
  }

  buscarLivrosPorAutor(nomeAutor: string): Livro[] {
    return this.livros.filter((livro) => livro.autor === nomeAutor);
  }

  emprestarLivroParaUsuario(tituloLivro: string, nomeUsuario: string): void {
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

  carregarLivrosEmprestados(livrosEmprestados: any[]): void {
    livrosEmprestados.forEach((livroEmprestado: any) => {
      const livro = this.livros.find((livro) => livro.titulo === livroEmprestado.titulo);
      const usuario = this.usuarios.find((usuario) => usuario.nome === livroEmprestado.usuario);

      if (livro && usuario) {
        this.livrosEmprestados.push({ livro, usuario });
      }
    });
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
