function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

const P1 = new Pessoa("Derick", 19)
const P2 = new Pessoa("Whendy", 18)

console.log(P1, P2)

// Função construtora, pois precisa das palavras this e new para criar um objeto