// Herança e Polimorfismo:
// • Crie uma classe base chamada Animal com métodos como emitirSom e mover.
// • Derive duas classes, Cachorro e Pássaro, que herdam da classe Animal.
// • Sobrescreva o método emitirSom em ambas as classes derivadas.
// • Crie instâncias de Cachorro e Pássaro e chame seus métodos.

class Animal {
    constructor(public nome: string) {}
  
    emitirSom(): void {
      console.log('Emitindo Som');
    }
  
    mover(): void {
      console.log('Se movendo');
    }
  }

  
  class Cachorro extends Animal {
    constructor(public nome: string) {
      super(nome);
    }
  
    override emitirSom(): void {
      console.log('Latindo');
    }
  }

  class Passaro extends Animal {
    constructor(public nome: string) {
      super(nome);
    }
  
    override emitirSom(): void {
      console.log('Piando');
    }
  }

  const cachorro = new Cachorro('Scooby');
  const passaro = new Passaro('Piupiu');
  
  cachorro.emitirSom();
  passaro.emitirSom();

  export { Animal, Cachorro, Passaro }