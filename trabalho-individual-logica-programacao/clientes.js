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
    return `${dd}-${mm}-${yyyy}`;
  }
  
  function gerarClientes(numeroClientes) {
    const clients = [];
    const intervaloDias = 40;
  
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

  console.log(clientesAleatorios)
  module.exports = clientesAleatorios;