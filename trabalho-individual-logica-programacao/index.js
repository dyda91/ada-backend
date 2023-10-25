const enviarEmail = require('./enviarEmail'); 
const clientes = require('./clientes')
const dia1 = require('./monitoraDia')

console.log(dia1)

  function enviarEmailSegundaFeira(clientes, dia1) {
  
    if (dia1 === 'Segunda-feira') {
        const hoje = new Date(); 
        const clientesElegiveis = clientes.filter((cliente) => {
            const ultimoAcessoData = new Date(cliente.ultimoAcesso);
            const diferencaDias = (hoje - ultimoAcessoData)/ (1000 * 60 * 60 * 24); 
            diferencaDias <= 30&& cliente.receberEmails? console.log("Enviando email para: "+cliente.nome): console.log("Não enviar email para: "+cliente.nome)
            
            return cliente.receberEmails && diferencaDias <= 30;
      });
  
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


enviarEmailSegundaFeira(clientes, dia1);