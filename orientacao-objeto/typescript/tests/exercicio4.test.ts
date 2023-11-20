import { Quadrado, Circulo } from '../src/exercicios/exercicio4/exercicio4';

describe('Formas Geométricas', () => {
  describe('Quadrado', () => {
    it('deve calcular a área de um quadrado corretamente', () => {
      const lado = 10;
      const quadrado = new Quadrado(lado);
      const area = quadrado.calcularArea();
      expect(area).toBe(lado * lado);
    });

    it('deve calcular o perímetro de um quadrado corretamente', () => {
      const lado = 10;
      const quadrado = new Quadrado(lado);
      const perimetro = quadrado.calcularPerimetro();
      expect(perimetro).toBe(4 * lado);
    });
  });

  describe('Circulo', () => {
    it('deve calcular a área de um círculo corretamente', () => {
      const raio = 5;
      const circulo = new Circulo(raio);
      const area = circulo.calcularArea();
      expect(area).toBeCloseTo(Math.PI * raio * raio, 4);
    });

    it('deve calcular o perímetro de um círculo corretamente', () => {
      const raio = 5;
      const circulo = new Circulo(raio);
      const perimetro = circulo.calcularPerimetro();
      expect(perimetro).toBeCloseTo(2 * Math.PI * raio, 4);
    });
  });
});