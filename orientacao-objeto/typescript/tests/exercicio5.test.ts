import { Carro2, Motor } from '../src/exercicios/exercicio5/exercicio5';

describe('Carro2', () => {
  it('deve ligar o motor quando o método ligar() for chamado', () => {
    const motor = new Motor();
    const carro = new Carro2(motor);

    carro.ligar();

    expect(motor.ligado).toBe(true);
  });

  it('deve desligar o motor quando o método desligar() for chamado', () => {
    const motor = new Motor();
    const carro = new Carro2(motor);

    carro.ligar();
    carro.desligar();

    expect(motor.ligado).toBe(false);
  });
});
