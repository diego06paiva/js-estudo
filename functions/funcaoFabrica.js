function Pessoa(nome, idade) {
    return {nome, idade}
}

const P1 = Pessoa("Diego", 22)
const P2 = Pessoa("Yanne", 25)
console.log(P1, P2)

// Função de fabrica, pois cria um objeto