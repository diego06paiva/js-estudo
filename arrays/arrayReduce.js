const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce((a, b) => {
    return a + b
})

//console.log(total)


const Pessoas = [
    { nome: "July", idade: 21 },
    { nome: "Karen", idade: 20 },
    { nome: "Camilly", idade: 20 },
    { nome: "Kevin", idade: 22 },
    { nome: "Duarte", idade: 22 },
    { nome: "Daniel", idade: 22},
    { nome: "Gaby", idade: 21 }
]

const SomaIdade = Pessoas.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual.idade 
}, 0)

console.log(SomaIdade)

// Ele passa por cada indice do array e reduz a um unico resultado