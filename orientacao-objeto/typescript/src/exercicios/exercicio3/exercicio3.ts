// Encapsulamento e Métodos Estáticos:
// • Crie uma classe Calculadora com métodos de operações matemáticas (soma, subtração,
// multiplicação, divisão).
// • Encapsule as operações matemáticas, permitindo apenas o acesso através dos métodos da
// classe.
// • Adicione um método estático que retorna o valor absoluto de um número.


class Calculadora {
    private _soma: (x: number, y: number) => number;
    private _subtracao: (x: number, y: number) => number;
    private _multiplicacao: (x: number, y: number) => number;
    private _divisao: (x: number, y: number) => number;
  
    constructor() {
      this._soma = (x, y) => x + y;
      this._subtracao = (x, y) => x - y;
      this._multiplicacao = (x, y) => x * y;
      this._divisao = (x, y) => x / y;
    }
   
    soma(x: number, y: number): number {
      return this._soma(x, y);
    }
  
    subtracao(x: number, y: number): number {
      return this._subtracao(x, y);
    }
  
    multiplicacao(x: number, y: number): number {
      return this._multiplicacao(x, y);
    }
  
    divisao(x: number, y: number): number {
      return this._divisao(x, y);
    }
  
  
    static valorAbsoluto(x: number): number {
      return x < 0 ? -x : x;
    }
  }

const calculadora = new Calculadora();

const soma = calculadora.soma(10, 20);
const subtracao = calculadora.subtracao(10, 20);
const multiplicacao = calculadora.multiplicacao(10, 20);
const divisao = calculadora.divisao(10, 20);
  
console.log(soma); 
console.log(subtracao); 
console.log(multiplicacao); 
console.log(divisao); 
  
const valorAbsoluto = Calculadora.valorAbsoluto(-10);
console.log(valorAbsoluto); 

export { Calculadora }
  
  