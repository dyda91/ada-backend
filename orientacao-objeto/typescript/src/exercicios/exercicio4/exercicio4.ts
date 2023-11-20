// Interfaces e Implementação:
// • Crie uma interface FormaGeometrica com métodos como calcularArea e calcularPerimetro.
// • Implemente a interface em classes como Quadrado e Círculo.
// • Instancie objetos dessas classes e chame seus métodos.


interface FormaGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
  }

class Quadrado implements FormaGeometrica {
private lado: number;
  
constructor(lado: number) {
    this.lado = lado;
}
  
calcularArea(): number {
    return this.lado * this.lado;
}
  
calcularPerimetro(): number {
    return 4 * this.lado;
}
}



class Circulo implements FormaGeometrica {
    private raio: number;
  
    constructor(raio: number) {
      this.raio = raio;
    }
  
    calcularArea(): number {
      return Math.PI * this.raio * this.raio;
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.raio;
    }
  }

  
  const quadrado = new Quadrado(10);
  const circulo = new Circulo(5);
  
  console.log(quadrado.calcularArea()); 
  console.log(quadrado.calcularPerimetro());
  
  console.log(circulo.calcularArea());
  console.log(circulo.calcularPerimetro());

  export { Quadrado, Circulo }