import { Carro } from '../src/exercicios/exercicio1/exercicio1';

describe('Carro', () => {
  it('deve ter um modelo', () => {
    const carro = new Carro('Parati', 1995, 'Preta');
    expect(carro.modelo).toBe('Parati');
  });

  it('deve ter um ano', () => {
    const carro = new Carro('Parati', 1995, 'Preta');
    expect(carro.ano).toBe(1995);
  });

  it('deve ter uma cor', () => {
    const carro = new Carro('Parati', 1995, 'Preta');
    expect(carro.cor).toBe('Preta');
  });
});
