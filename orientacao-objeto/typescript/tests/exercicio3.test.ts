import { Calculadora } from '../src/exercicios/exercicio3/exercicio3';

describe('Calculadora', () => {
    let calculadora: Calculadora;
  
    beforeEach(() => {
      calculadora = new Calculadora();
    });
  
    it('deve somar dois números corretamente', () => {
      const soma = calculadora.soma(10, 20);
      expect(soma).toBe(30);
    });
  
    it('deve subtrair dois números corretamente', () => {
      const subtracao = calculadora.subtracao(20, 10);
      expect(subtracao).toBe(10);
    });
  
    it('deve multiplicar dois números corretamente', () => {
      const multiplicacao = calculadora.multiplicacao(10, 5);
      expect(multiplicacao).toBe(50);
    });
  
    it('deve dividir dois números corretamente', () => {
      const divisao = calculadora.divisao(20, 4);
      expect(divisao).toBe(5);
    });
  
    it('deve lançar exceção ao tentar dividir por zero', () => {
      expect(() => calculadora.divisao(10, 0)).toThrowError('Divisão por zero');
    });
  
    it('deve calcular o valor absoluto de um número corretamente', () => {
      const valorAbsolutoPositivo = Calculadora.valorAbsoluto(10);
      const valorAbsolutoNegativo = Calculadora.valorAbsoluto(-10);
      const valorAbsolutoZero = Calculadora.valorAbsoluto(0);
  
      expect(valorAbsolutoPositivo).toBe(10);
      expect(valorAbsolutoNegativo).toBe(10);
      expect(valorAbsolutoZero).toBe(0);
    });
  });