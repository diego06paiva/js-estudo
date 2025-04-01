// Importa um decorator chamado "debug" de um arquivo externo
import { debug } from "./utils/debug";

// Aplica o decorator "debug" na classe "PrimeiraClasse"
// Esse decorator pode estar adicionando logs, alterando a classe ou algo semelhante
@debug
class PrimeiraClasse {
  constructor() {}
}

// Função decorator chamada "log"
// Recebe como parâmetro o "constructor" da classe decorada
function log(constructor: any) {
  // Retorna uma nova classe que herda da original e adiciona um novo atributo
  return class extends constructor {
    create: Date = new Date("2025-03-31"); // Adiciona uma propriedade "create" com uma data fixa
  };
}

// Aplica o decorator "log" na classe "SegundaClasse"
// Isso faz com que a classe receba a modificação feita pelo decorator
@log
class SegundaClasse {
  constructor() {}
}

// Cria uma instância de "SegundaClasse" e exibe no console
console.log(new SegundaClasse());
