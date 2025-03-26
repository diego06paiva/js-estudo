class Animal {
  constructor(nome, raça) {
    this.nome = nome;
    this.raça = raça;
  }
}

class Gato extends Animal {
  constructor(nome, raça, nacionalidade) {
    super(nome, raça);
    this.nacionalidade = nacionalidade;
  }
}

const cat = new Gato("miu", "gato", "BR");
console.log(cat);

// Herança é quando uma classe herda os métodos de uma outra classe que pode ser chamada de classe pai
// A palavra extends é reservada só pra isso

console.log(Math.ceil(Math.random() * 100));
