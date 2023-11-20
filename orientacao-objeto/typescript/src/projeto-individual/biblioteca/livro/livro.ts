interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
  genero: string;
  emprestado: boolean;
  copias: number;
}

class Livro implements Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public anoPublicacao: number,
    public genero: string
  ) {
    this.emprestado = false;
    this.copias = 1;
  }

  emprestar() {
    if (this.copias > 0) {
      this.emprestado = true;
      this.copias--;
    } else {
      throw new Error("Não há cópias disponíveis deste livro.");
    }
  }

  devolver() {
    this.emprestado = false;
    this.copias++;
  }
}

export { Livro };