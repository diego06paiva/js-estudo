class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const P1 = new Produto("TV", 120);
console.log(P1);
