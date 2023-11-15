// importa a lista de clientes do arquivo clientes.js,
// importa o dia da semana do arquivo monitoraDia.js
// faz todas as validações, monta e envia os emails
// caso não apareça os emails enviados rodar novamente, pois pode não ter nenhum cliente que atenda os requisitos

// ATENÇÂO = para simular que é uma segunda feira, caso esteja rodando em outro dia, basta descomentar a linha 12 e comentar a linha 13 para mudar o valor da variavel "dia" para "Segunda-feira"

const enviarEmail = require('./enviarEmail'); 
const clientes = require('./clientes')
const diaHoje = require('./monitoraDia')

// const dia = "Segunda-feira"
const dia = diaHoje


// console.log(clientes)

console.log(dia)

  function enviarEmailSegundaFeira(clientes, dia) {

  
    if (dia === 'Segunda-feira') {
        const vaiReceberEmail = []
        const naoVaiReceberEmail = []
        const hoje = new Date(); 
        const clientesElegiveis = clientes.filter((cliente) => {
            const ultimoAcessoData = new Date(cliente.ultimoAcesso);
            const diferencaDias = (hoje - ultimoAcessoData)/ (1000 * 60 * 60 * 24);
            diferencaDias <= 30 && cliente.receberEmails? vaiReceberEmail.push(cliente.nome): naoVaiReceberEmail.push(cliente.nome)
            
            return cliente.receberEmails && diferencaDias <= 30;
      });
      console.log(`
      Será enviado email para: ${vaiReceberEmail.length} clientes
      `)
      console.log(`
      Não será enviado email para: " ${naoVaiReceberEmail.length} clientes
      `)
  
      clientesElegiveis.forEach((cliente) => {
        const subject = `Temos uma oferta especial para você ${cliente.nome}`;
        const body = `Olá ${cliente.nome}, vimos que você acessou nosso site recentimente.
        Que tal aproveitar as ultimas ofertas que acabamos de lançar?`;
  
        enviarEmail(cliente.email, subject, body);
      });
    } else {
      console.log('Hoje não é segunda-feira. Não foram enviados e-mails.');
    }

  }


enviarEmailSegundaFeira(clientes, dia);