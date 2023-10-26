// FUNÇÂO QUE GERA LISTA DE CLIENTES ALEATORIOS:
// Baseado no aprendido na aula 5 e estudos extras, criei essa função que faz cria uma lista de clientes aleatorios para executar o trabalho de enviar emails
// 1 - captura a data atual e com base nela cria um range de dias (que pode ser alterado na variavel "intervaloDias"), deixei setado 35 dias
// 2 - cria uma lista de clientes, com o numero de clientes definidos na variavel "numeroClientes", deixei setado 20 clientes mas pode ser alterado
// 4 - gera um booleano aleatorio para dizer se o cliente aceita ou não receber emails
// 5 - cria uma data de ultimo acesso aleatorio, essa data estara dentro do renge de datas que comentei no passo 1, por padrao esta 35 dias (pode ser mudado),
// então a data de ultimo acesso cairá aleatoriamente dentro desses 35 dias pra cada cliente, para que assim alguns clientes não receba o email por esta fora dos 30 dias pedido no enunciado do trabalho


function aceitaReceberEmail() {
    return Math.random() < 0.5;
  }
  
  function getRandomDate(intervaloDias) {
    const dataAtual = new Date();
    const diasAcessos = Math.floor(Math.random() * intervaloDias);
    dataAtual.setDate(dataAtual.getDate() - diasAcessos);
    const dd = String(dataAtual.getDate()).padStart(2, '0');
    const mm = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const yyyy = dataAtual.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  }
  
  function gerarClientes(numeroClientes) {
    const clients = [];
    const intervaloDias = 35;
  
    const nomes = ['Larissa', 'Lucas', 'Pedro', 'Maria', 'João', 'Mariana', 'Fernando', 'Camila', 'Carlos', 'Julia'];
    for (let i = 0; i < numeroClientes; i++) {
      const nome = nomes[Math.floor(Math.random() * nomes.length)];
      const email = `${nome.toLowerCase()}${i}@gmail.com`;
      const receberEmails = aceitaReceberEmail();
      const ultimoAcesso = getRandomDate(intervaloDias);
  
      const client = {
        nome,
        email,
        receberEmails,
        ultimoAcesso,
      };
  
      clients.push(client);
    }
  
    return clients;
  }
  
  const numeroClientes = 20;
  const clientesAleatorios = gerarClientes(numeroClientes);

  module.exports = clientesAleatorios;