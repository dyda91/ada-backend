// Padrões de Projeto: Singleton:
// • Implemente uma classe ConfiguracaoApp usando o padrão Singleton, garantindo que exista
// apenas uma instância dessa classe.
// • Adicione propriedades de configuração à classe e métodos para acessá-las.
// • Tente criar várias instâncias da classe e verifique se todas se referem à mesma instância.


class ConfiguracaoApp {
    private static _instancia: ConfiguracaoApp | null = null;
  
    private _nome: string;
    private _versao: string;
  
    constructor(nome: string, versao: string) {
      this._nome = nome;
      this._versao = versao;
    }
  
    static get instancia(): ConfiguracaoApp {
      if (ConfiguracaoApp._instancia === null) {
        ConfiguracaoApp._instancia = new ConfiguracaoApp('Configuração do App', '1.0.0');
      }
  
      return ConfiguracaoApp._instancia;
    }
  
    get nome(): string {
      return this._nome;
    }
  
    set nome(nome: string) {
      this._nome = nome;
    }
  
    get versao(): string {
      return this._versao;
    }
  
    set versao(versao: string) {
      this._versao = versao;
    }
  }

const configuracao1 = ConfiguracaoApp.instancia;
const configuracao2 = ConfiguracaoApp.instancia;
  
console.log(configuracao1 === configuracao2); 

export { ConfiguracaoApp }
  