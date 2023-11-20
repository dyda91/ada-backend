import { ConfiguracaoApp } from '../src/exercicios/exercicio7/exercicio7';

describe('ConfiguracaoApp', () => {
  it('deve retornar a mesma instância sempre que o método instancia() for chamado', () => {
    const configuracao1 = ConfiguracaoApp.instancia;
    const configuracao2 = ConfiguracaoApp.instancia;

    expect(configuracao1).toBe(configuracao2);
  });
  it('deve configurar e obter o nome corretamente', () => {
    const configuracao = ConfiguracaoApp.instancia;
    configuracao.nome = 'Novo nome';
    expect(configuracao.nome).toBe('Novo nome');
  });
  
  it('deve configurar e obter a versão corretamente', () => {
    const configuracao = ConfiguracaoApp.instancia;
    configuracao.versao = '2.0.0';
    expect(configuracao.versao).toBe('2.0.0');
  });
});


  
