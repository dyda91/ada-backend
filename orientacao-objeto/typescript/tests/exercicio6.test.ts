import { ContaBancaria } from '../src/exercicios/exercicio6/exercicio6';

describe('ContaBancaria', () => {
  it('deve permitir saques com saldo suficiente', () => {
    const conta = new ContaBancaria(100);
    conta.sacar(50);
    expect(conta.getSaldo()).toBe(50);
  });

  it('deve lançar exceção em caso de saldo insuficiente', () => {
    const conta = new ContaBancaria(100);
    expect(() => conta.sacar(150)).toThrow(Error);
  });

  it('deve permitir depósitos corretos', () => {
    const conta = new ContaBancaria(100);
    conta.depositar(50);
    expect(conta.getSaldo()).toBe(150);
  });
  
});
