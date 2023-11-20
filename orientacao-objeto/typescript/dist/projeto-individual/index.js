"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const database_1 = require("./db/database");
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
                    (0, database_1.salvarDados)(biblioteca);
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
        }
        else {
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
                (0, database_1.salvarDados)(biblioteca);
                exibirMenu();
            });
        });
    });
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
            (0, database_1.salvarDados)(biblioteca);
            console.log(`Livro "${livroExcluir.titulo}" excluído com sucesso.`);
        }
        else {
            console.log('Número do livro inválido.');
        }
        exibirMenu();
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
function adicionarAutor(biblioteca) {
    rl.question('Digite o nome do autor: ', (nome) => {
        rl.question('Digite a data de nascimento do autor (YYYY-MM-DD): ', (dataNascimento) => {
            rl.question('Digite a nacionalidade do autor: ', (nacionalidade) => {
                const dataNascimentoFormatada = new Date(dataNascimento);
                biblioteca.adicionarAutor(nome, dataNascimentoFormatada, nacionalidade);
                (0, database_1.salvarDados)(biblioteca);
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
            }
            else {
                console.log(`Não foram encontrados livros para o autor ${autorEscolhido.nome}.`);
            }
        }
        else {
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
function exibirMenu() {
    console.log('\n****  MENU PRINCIPAL  ****');
    console.log('1 - Adicionar livro');
    console.log('2 - Listar livros');
    console.log('3 - Excluir livro');
    console.log('4 - Adicionar autor');
    console.log('5 - Listar livros por autor');
    console.log('6 - Sair');
    rl.question('\nOpção escolhida: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarLivro();
                break;
            case '2':
                listarLivros();
                break;
            case '3':
                excluirLivro();
                break;
            case '4':
                adicionarAutor(biblioteca);
                break;
            case '5':
                listarLivrosPorAutor();
                break;
            case '6':
                rl.close();
                break;
            default:
                console.log('Opção inválida. Escolha novamente.');
                exibirMenu();
                break;
        }
    });
}
const biblioteca = (0, database_1.carregarDados)();
exibirMenu();
