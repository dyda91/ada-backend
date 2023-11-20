import { Calculadora } from '../src/exercicios/exercicio3/exercicio3';

describe('Calculadora', () => {
  it('deve somar dois números corretamente', () => {
    const calculadora = new Calculadora();
    const soma = calculadora.soma(10, 20);
    expect(soma).toBe(30);
  });

  it('deve subtrair dois números corretamente', () => {
    const calculadora = new Calculadora();
    const subtracao = calculadora.subtracao(20, 10);
    expect(subtracao).toBe(10);
  });

  it('deve multiplicar dois números corretamente', () => {
    const calculadora = new Calculadora();
    const multiplicacao = calculadora.multiplicacao(10, 5);
    expect(multiplicacao).toBe(50);
  });

  it('deve dividir dois números corretamente', () => {
    const calculadora = new Calculadora();
    const divisao = calculadora.divisao(20, 4);
    expect(divisao).toBe(5);
  });

  it('deve calcular o valor absoluto de um número corretamente', () => {
    const valorAbsoluto = Calculadora.valorAbsoluto(-10);
    expect(valorAbsoluto).toBe(10);
  });
});
