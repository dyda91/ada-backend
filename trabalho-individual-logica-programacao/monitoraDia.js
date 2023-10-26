//função para monitorar o dia de hoje para validar se é segunda-feira 
// o metodo getUTCDay retorna o dia da semana em forma de inteiro, partindo do 1, assim a segunda deve retornar o numero 2
// esse numero é usado como indece na lista "dias" para retornar o nome do dia

function diaDaSemana() {
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const dataAtual = new Date();
    const diaDaSemana = diasDaSemana[dataAtual.getUTCDay()];
    return diaDaSemana;
  }
  
  const  diaHoje = diaDaSemana();


module.exports = diaHoje;