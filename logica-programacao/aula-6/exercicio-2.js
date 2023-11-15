const prompt = require("prompt-sync")()



let a = parseInt(prompt("primeiro numero: "))
let b = parseInt(prompt("segundo numero: "))
let operacao = prompt("operação")

function calc(a, b, operacao){
    switch (operacao) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Inválido';
    }
}


console.log(calc(a,b,operacao))