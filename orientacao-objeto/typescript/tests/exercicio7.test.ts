import { ConfiguracaoApp } from '../src/exercicios/exercicio7/exercicio7';

describe('ConfiguracaoApp', () => {
  it('deve retornar a mesma instância sempre que o método instancia() for chamado', () => {
    const configuracao1 = ConfiguracaoApp.instancia;
    const configuracao2 = ConfiguracaoApp.instancia;

    expect(configuracao1).toBe(configuracao2);
  });
});
