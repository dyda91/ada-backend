// Criação de Classe e Instância:
// • Crie uma classe Carro com propriedades como modelo, ano e cor.
// • Instancie dois objetos dessa classe com diferentes valores.
// • Imprima no console os detalhes de cada carro.


class Carro {
    modelo: string;
    ano: number;
    cor: string;
  
    constructor(modelo: string, ano: number, cor: string) {
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }
  }
  
let carro1: Carro = new Carro("Parati", 1995, "Preta");
let carro2: Carro = new Carro("Gol", 2009, "Cinza");
  
 
function imprimirDetalhesCarro(carro: Carro): void {
    console.log(`Modelo: ${carro.modelo}`);
    console.log(`Ano: ${carro.ano}`);
    console.log(`Cor: ${carro.cor}`);
    console.log("\n");
}

console.log("Detalhes do Carro 1:");
imprimirDetalhesCarro(carro1);
  
console.log("Detalhes do Carro 2:");
imprimirDetalhesCarro(carro2);

export { Carro }