"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const livro_1 = require("./biblioteca/livro/livro");
const database_1 = require("./db/database");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function adicionarLivro() {
    rl.question('Digite o nome do livro: ', (titulo) => {
        rl.question('Digite o nome do autor: ', (autor) => {
            rl.question('Digite o ano de lançamento: ', (anoPublicacao) => {
                rl.question('Digite o gênero: ', (genero) => {
                    const novoLivro = new livro_1.Livro(titulo, autor, parseInt(anoPublicacao), genero);
                    biblioteca.adicionarLivro(novoLivro);
                    (0, database_1.salvarDados)(biblioteca);
                    console.log('Livro adicionado com sucesso!');
                    exibirMenu();
                });
            });
        });
    });
}
function listarLivros() {
    const livrosNaBiblioteca = biblioteca.obterLivros();
    console.log("Livros na Biblioteca:");
    livrosNaBiblioteca.forEach((livro, index) => {
        console.log(`Livro ${index + 1}: ${livro.titulo}`);
    });
    exibirMenu();
}
function exibirMenu() {
    console.log('Escolha uma opção:');
    console.log('1 - Adicionar livro');
    console.log('2 - Listar livros');
    console.log('3 - Sair');
    rl.question('Opção escolhida: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarLivro();
                break;
            case '2':
                listarLivros();
                break;
            case '3':
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
