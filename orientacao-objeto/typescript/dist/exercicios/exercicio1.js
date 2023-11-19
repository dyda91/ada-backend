// Criação de Classe e Instância:
// • Crie uma classe Carro com propriedades como modelo, ano e cor.
// • Instancie dois objetos dessa classe com diferentes valores.
// • Imprima no console os detalhes de cada carro.
class Carro {
    constructor(modelo, ano, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
}
let carro1 = new Carro("Parati", 1995, "Preta");
let carro2 = new Carro("Gol", 2009, "Cinza");
function imprimirDetalhesCarro(carro) {
    console.log(`Modelo: ${carro.modelo}`);
    console.log(`Ano: ${carro.ano}`);
    console.log(`Cor: ${carro.cor}`);
    console.log("\n");
}
console.log("Detalhes do Carro 1:");
imprimirDetalhesCarro(carro1);
console.log("Detalhes do Carro 2:");
imprimirDetalhesCarro(carro2);
