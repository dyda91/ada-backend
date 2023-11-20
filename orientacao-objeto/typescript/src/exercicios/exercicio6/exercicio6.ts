// Tratamento de Exceções:
// • Crie uma classe ContaBancaria com propriedades como saldo e métodos como sacar e
// depositar.
// • Implemente uma verificação para garantir que o saldo não fique negativo após um saque.
// • Utilize exceções para lidar com situações em que o saque não pode ser realizado devido a saldo
// insuficiente.
// • Teste a classe com casos que resultem em exceções



class ContaBancaria {
    private saldo: number;
  
    constructor(saldo: number) {
      this.saldo = saldo;
    }
  
    getSaldo(): number {
      return this.saldo;
    }
  
    sacar(valor: number): void {
      if (valor > this.saldo) {
        throw new Error('Saldo insuficiente');
      }
  
      this.saldo -= valor;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
    }
  }
  

export { ContaBancaria }
  
  