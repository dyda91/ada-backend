const prompt = require("prompt-sync")()
const colors = require('colors');

const random = Math.random() * 100
let numero = random.toFixed()
let numeroEscolhido


while(numeroEscolhido != numero) {
  let numeroEscolhido = prompt("Digite um numero:  ".yellow)
  if(numeroEscolhido > numero){
    console.log(`O numero escolhido ${numeroEscolhido}, é maior que o numero secreto`.red)
  }else if(numeroEscolhido <numero){
    console.log(`O numero escolhido ${numeroEscolhido}, é menor que o numero secreto`.red)
  } else{
    console.log(`\nAcertou miseravi!!! O numero escolhido e o numero secreto são iguais "${numero}" \n`.green)
    process.exit(1)
  }
}
