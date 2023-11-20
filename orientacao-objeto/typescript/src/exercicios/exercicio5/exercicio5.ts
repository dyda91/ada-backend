// Composição de Objetos:
// • Crie uma classe Motor com métodos como ligar e desligar.
// • Em seguida, crie uma classe Carro que possui uma instância de Motor.
// • Implemente métodos em Carro que delegam chamadas aos métodos correspondentes em
// Motor.
// • Teste a funcionalidade ligando e desligando o carro.


class Motor {
  public ligado: boolean = false;

  ligar(): void {
    this.ligado = true;
    console.log('Motor ligado');
  }

  desligar(): void {
    this.ligado = false;
    console.log('Motor desligado');
  }
}  

class Carro2 {
    private motor: Motor;
  
    constructor(motor: Motor) {
        this.motor = motor;
    }
  
    ligar(): void {
        this.motor.ligar();
    }
  
    desligar(): void {
        this.motor.desligar();
    }  
}

const motor = new Motor();
const carro = new Carro2(motor);

carro.ligar();
carro.desligar();

export { Carro2, Motor }