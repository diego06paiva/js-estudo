class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get NomeCompleto() {
    console.log("get");
    return `${this.nome} ${this.sobrenome}`;
  }

  set TrocarNome(valor) {
    console.log("setter");
    this.nome = valor;
  }
}

class Pessoa2 extends Pessoa {
  constructor(nome, sobrenome, idade) {
    super(nome, sobrenome);
    this.idade = idade;
  }
}

const P2 = new Pessoa2("Diego", "paiva", 22);
console.log(P2);

const P1 = new Pessoa("Diego", "Paiva");

P1.TrocarNome = "yanne hellen";

console.log(P1.NomeCompleto);

// Métodos getter e setter onde com get eu posso visualizar e com setter eu posso alterar
