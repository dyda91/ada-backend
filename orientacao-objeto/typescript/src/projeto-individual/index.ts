import * as readline from 'readline';
import { salvarDados, carregarDados } from './db/database';
import { Biblioteca } from './biblioteca/biblioteca';
import { Usuario } from './biblioteca/usuario/usuario';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function adicionarLivro() {
  console.log('Adicionar um novo livro:');
  rl.question('Digite o título do livro: ', (titulo) => {
    rl.question('Digite o ano de publicação do livro: ', (anoPublicacao) => {
      rl.question('Digite o gênero do livro: ', (genero) => {
        const livroTitulo = titulo;
        const livroAnoPublicacao = parseInt(anoPublicacao);
        const livroGenero = genero;

        mostrarOpcoesAutores(livroTitulo, livroAnoPublicacao, livroGenero);
      });
    });
  });
}

function listarLivros() {
  const livrosNaBiblioteca = biblioteca.getLivros();
  console.log("\n  Livros na Biblioteca:\n");
  livrosNaBiblioteca.forEach((livro, index) => {
    console.log(`  Livro ${index + 1}: ${livro.titulo}`);
  });
  exibirMenu();
}

function excluirLivro() {
  const livrosNaBiblioteca = biblioteca.getLivros();

  if (livrosNaBiblioteca.length === 0) {
    console.log('Não há livros para excluir.');
    exibirMenu();
    return;
  }

  console.log('\nEscolha um livro para excluir:');
  livrosNaBiblioteca.forEach((livro, index) => {
    console.log(`   ${index + 1} - ${livro.titulo}`);
  });

  rl.question('\nNúmero do livro a ser excluído: ', (numeroLivro) => {
    const indexLivro = parseInt(numeroLivro) - 1;
    if (indexLivro >= 0 && indexLivro < livrosNaBiblioteca.length) {
      const livroExcluir = livrosNaBiblioteca[indexLivro];
      biblioteca.removerLivro(livroExcluir);
      salvarDados(biblioteca);
      console.log(`Livro "${livroExcluir.titulo}" excluído com sucesso.`);
    } else {
      console.log('Número do livro inválido.');
    }
    exibirMenu();
  });
}

function mostrarOpcoesAutores(titulo, anoPublicacao, genero) {
  console.log('Escolha uma opção para o autor:');
  console.log('1 - Selecionar um autor existente');
  console.log('2 - Cadastrar um novo autor');
  rl.question('Opção escolhida: ', (opcao) => {
    switch (opcao) {
      case '1':
        console.log('Escolha um autor para o livro:');
        escolherAutor((autorEscolhido) => {
          biblioteca.adicionarLivro(titulo, autorEscolhido.nome, anoPublicacao, genero);
          salvarDados(biblioteca);
          exibirMenu();
        });
        break;
      case '2':
        cadastrarNovoAutor(titulo, anoPublicacao, genero);
        break;
      default:
        console.log('Opção inválida. Escolha novamente.');
        mostrarOpcoesAutores(titulo, anoPublicacao, genero);
        break;
    }
  });
}

function escolherAutor(callback) {
  console.log('Autores disponíveis:');
  biblioteca.getAutores().forEach((autor, index) => {
    console.log(`${index + 1} - ${autor.nome}`);
  });

  rl.question('Escolha o número do autor: ', (numeroAutor) => {
    const indexAutor = parseInt(numeroAutor) - 1;
    if (indexAutor >= 0 && indexAutor < biblioteca.getAutores().length) {
      const autorEscolhido = biblioteca.getAutores()[indexAutor];
      callback(autorEscolhido);
    } else {
      console.log('Número do autor inválido.');
      escolherAutor(callback);
    }
  });
}

function cadastrarNovoAutor(titulo, anoPublicacao, genero) {
  rl.question('Digite o nome do novo autor: ', (nomeAutor) => {
    rl.question('Digite a data de nascimento do novo autor (AAAA-MM-DD): ', (dataNascimento) => {
      rl.question('Digite a nacionalidade do novo autor: ', (nacionalidade) => {
        biblioteca.adicionarAutor(nomeAutor, new Date(dataNascimento), nacionalidade);
        console.log(`Novo autor "${nomeAutor}" cadastrado.`);
        biblioteca.adicionarLivro(titulo, nomeAutor, anoPublicacao, genero);
        salvarDados(biblioteca);
        exibirMenu();
      });
    });
  });
}


function adicionarAutor(biblioteca: Biblioteca): void {
  rl.question('Digite o nome do autor: ', (nome) => {
    rl.question('Digite a data de nascimento do autor (YYYY-MM-DD): ', (dataNascimento) => {
      rl.question('Digite a nacionalidade do autor: ', (nacionalidade) => {
        const dataNascimentoFormatada = new Date(dataNascimento);
        biblioteca.adicionarAutor(nome, dataNascimentoFormatada, nacionalidade);
        salvarDados(biblioteca);
        console.log(`Autor "${nome}" adicionado com sucesso.`);
        exibirMenu();
      });
    });
  });
}


function listarLivrosPorAutor() {
  listarAutores();

  rl.question('\nEscolha o número do autor para listar os livros: ', (numeroAutor) => {
    const indexAutor = parseInt(numeroAutor) - 1;
    if (indexAutor >= 0 && indexAutor < biblioteca.getAutores().length) {
      const autorEscolhido = biblioteca.getAutores()[indexAutor];
      const livrosDoAutor = biblioteca.listarLivrosPorAutor(autorEscolhido.nome);
      if (livrosDoAutor.length > 0) {
        console.log(`\nLivros do autor ${autorEscolhido.nome}:`);
        livrosDoAutor.forEach((livro, index) => {
          console.log(`${index + 1} - ${livro.titulo}`);
        });
      } else {
        console.log(`Não foram encontrados livros para o autor ${autorEscolhido.nome}.`);
      }
    } else {
      console.log('Número do autor inválido.');
    }
    exibirMenu();
  });
}


function listarAutores() {
  console.log('Autores disponíveis:');
  biblioteca.getAutores().forEach((autor, index) => {
    console.log(`${index + 1} - ${autor.nome}`);
  });
}

function excluirAutor() {
  console.log('Escolha um autor para excluir:');
  listarAutores();

  rl.question('Digite o número do autor a ser excluído: ', (numeroAutor) => {
    const indexAutor = parseInt(numeroAutor) - 1;
    if (indexAutor >= 0 && indexAutor < biblioteca.getAutores().length) {
      const autorExcluir = biblioteca.getAutores()[indexAutor];
      biblioteca.removerAutorPorNome(autorExcluir.nome);
      salvarDados(biblioteca);
    } else {
      console.log('Número do autor inválido.');
    }
    exibirMenu();
  });
}

function adicionarNovoUsuario() {
  console.log('Adicionar um novo usuário:');
  rl.question('Digite o nome do usuário: ', (nome) => {    
      rl.question('Digite o e-mail do usuário: ', (email) => {
        biblioteca.adicionarNovoUsuario(nome, email);
        salvarDados(biblioteca);
        exibirMenu();
      });
  });
}

function listarUsuarios() {
  const usuariosNaBiblioteca = biblioteca.getUsuarios();
  console.log("\n  Usuários na Biblioteca:\n");
  usuariosNaBiblioteca.forEach((usuario, index) => {
    console.log(`  Usuário ${index + 1}: ${usuario.nome}, E-mail: ${usuario.email}`);
  });
  exibirMenu();
}

function excluirUsuario() {
  const usuariosNaBiblioteca = biblioteca.getUsuarios();

  if (usuariosNaBiblioteca.length === 0) {
    console.log('Não há usuários para excluir.');
    exibirMenu();
    return;
  }

  console.log('\nEscolha um usuário para excluir:');
  usuariosNaBiblioteca.forEach((usuario, index) => {
    console.log(`   ${index + 1} - ${usuario.nome}`);
  });

  rl.question('\nNúmero do usuário a ser excluído: ', (numeroUsuario) => {
    const indexUsuario = parseInt(numeroUsuario) - 1;
    if (indexUsuario >= 0 && indexUsuario < usuariosNaBiblioteca.length) {
      const usuarioExcluir = usuariosNaBiblioteca[indexUsuario];
      biblioteca.removerUsuario(usuarioExcluir);
      salvarDados(biblioteca);
      console.log(`Usuário "${usuarioExcluir.nome}" excluído com sucesso.`);
    } else {
      console.log('Número do usuário inválido.');
    }
    exibirMenu();
  });
}

function emprestarLivroParaUsuario() {
  const livrosDisponiveis = biblioteca.getLivros().filter(livro => !livro.emprestado && livro.copias > 0);

  if (livrosDisponiveis.length === 0) {
    console.log('Não há livros disponíveis para empréstimo.');
    exibirMenu();
    return;
  }

  console.log('Livros disponíveis para empréstimo:');
  livrosDisponiveis.forEach((livro, index) => {
    console.log(`${index + 1} - ${livro.titulo} (${livro.autor})`);
  });

  rl.question('\nEscolha o número do livro para empréstimo: ', (numeroLivro) => {
    const indexLivro = parseInt(numeroLivro) - 1;

    if (indexLivro >= 0 && indexLivro < livrosDisponiveis.length) {
      const livroSelecionado = livrosDisponiveis[indexLivro];
      console.log('Livro selecionado para empréstimo:', livroSelecionado.titulo);

      const usuarios = biblioteca.getUsuarios();
      console.log('Usuários disponíveis:');
      usuarios.forEach((usuario, index) => {
        console.log(`${index + 1} - ${usuario.nome}`);
      });

      rl.question('\nEscolha o número do usuário para empréstimo: ', (numeroUsuario) => {
        const indexUsuario = parseInt(numeroUsuario) - 1;

        if (indexUsuario >= 0 && indexUsuario < usuarios.length) {
          const usuarioEncontrado = usuarios[indexUsuario];

          if (usuarioEncontrado instanceof Usuario) {
            usuarioEncontrado.emprestarLivro(livroSelecionado);
            salvarDados(biblioteca);
            console.log(`Livro "${livroSelecionado.titulo}" emprestado para "${usuarioEncontrado.nome}"`);
            exibirMenu();
          } else {
            console.log('O usuário é inválido.');
            exibirMenu();
          }
        } else {
          console.log('Número do usuário inválido.');
          exibirMenu();
        }
      });
    } else {
      console.log('Número do livro inválido.');
      exibirMenu();
    }
  });
}




function exibirMenu() {
  console.log('\n****  MENU PRINCIPAL  ****');
  console.log('1 - Adicionar livro');
  console.log('2 - Adicionar autor');  
  console.log('3 - Adcionar usuário');
  console.log('5 - Excluir livro');
  console.log('4 - Excluir autor');
  console.log('5 - Excluir usuário');
  console.log('6 - Emprestar livro para usuário');
  console.log('\n****  RELATORIOS  ****');
  console.log('7 - Listar livros');
  console.log('8 - Listar livros por autor'); 
  console.log('9 - Listar usuários')
  console.log('\n10 - Sair\n');


  rl.question('\nOpção escolhida: ', (opcao) => {
    switch (opcao) {
      case '1':
        adicionarLivro();
        break;
      case '2':
        adicionarAutor(biblioteca);
        break;
      case '3':
        adicionarNovoUsuario();
        break;
      case '4':
        excluirLivro();
        break;
      case '5':
        excluirAutor();
        break;
      case '6':
        emprestarLivroParaUsuario();
        break;
      case '7':
        excluirUsuario();
        break;
      case '8':
        listarLivros();
        break;
      case '9':
        listarLivrosPorAutor();
        break;
      case '10':
        listarUsuarios();
        break;
      case '11':
        rl.close();
        break;
      default:
        console.log('Opção inválida. Escolha novamente.');
        exibirMenu();
        break;
    }
  });
}


const biblioteca = carregarDados();
exibirMenu();
