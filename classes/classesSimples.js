class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    return `${this.nome} falou`;
  }

  beber() {
    return ` bebeu`;
  }
}

const P1 = new Pessoa("Diego", 22);

console.log(P1);
console.log(P1.beber());
console.log(P1.falar());
