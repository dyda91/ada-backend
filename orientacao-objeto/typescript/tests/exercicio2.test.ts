import { Cachorro, Passaro } from '../src/exercicios/exercicio2/exercicio2';

describe('Exercício 2', () => {
  let originalConsoleLog: any;

  beforeAll(() => {
    originalConsoleLog = console.log;
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = originalConsoleLog;
  });

  it('deve emitir o som correto para um cachorro', () => {
    const cachorro = new Cachorro('Scooby');
    cachorro.emitirSom();
    expect(console.log).toHaveBeenCalledWith('Latindo');
  });

  it('deve emitir o som correto para um pássaro', () => {
    const passaro = new Passaro('Piupiu');
    passaro.emitirSom();
    expect(console.log).toHaveBeenCalledWith('Piando');
  });
});
