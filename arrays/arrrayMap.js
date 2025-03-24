const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosDobrados = numeros.map(valor => {
    return valor * 2
})
console.log(numerosDobrados)

const Pessoas = [
    { nome: "Mauricio", idade: 27 },
    { nome: "Nadie", idade: 26 },
    { nome: "Eduarda", idade: 22 },
    { nome: "Rafael", idade: 26 },
    { nome: "Will", idade: 25 },
    { nome: "Renato", idade: 18 },
    { nome: "Bruno", idade: 22 }
]

const NomePessoa = Pessoas.map(valor => {
    return `Idade: ${valor.idade}` 
})

console.log(NomePessoa)

// Map altera os valores, mas retorna um array do mesmo tamanho
// Diferente de Filter que pode retornar uma array de tamanho diferente