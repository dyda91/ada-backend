/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  5
  Ex: 0, 1, 1, 2, 3, 5
*/

const n = 6;
let a = 0;
let b = 1;

function numero(n) {
  
 
    for (let i = 3; i <= n; i++) {
        const num = a;
        a = b;
        b = num + b;
        console.log(b);
    }
}


numero(n);