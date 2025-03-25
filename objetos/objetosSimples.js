const pessoa = {
  nome: "Diego",
  idade: 22,
};
console.log(pessoa);

// objeto literal

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const P1 = new Pessoa("Yanne", 25);
console.log(P1);

// função construtora, onde o objeto é criado a apartir de uma função
