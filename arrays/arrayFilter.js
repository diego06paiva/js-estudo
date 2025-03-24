const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosMaiorQueDez = numeros.filter((obj) => obj < 10)

console.log(numerosMaiorQueDez)

const Pessoas = [
    { nome: "Diego", idade: 22 },
    { nome: "Derick", idade: 19 },
    { nome: "Debora", idade: 21 },
    { nome: "Vinicius", idade: 25 },
    { nome: "Maria", idade: 12 },
    { nome: "Murilo", idade: 11 },
    { nome: "Riseuda", idade: 48 }
]

const NomeGrande = Pessoas.filter((valor) => valor.nome.length >= 5)
console.log(NomeGrande)

const MenorIdade = Pessoas.filter((valor) => valor.idade > 18)
console.log(MenorIdade)

// Maneira de usar o método filter com array, ele é acessado diretamente no array
// É preciiso passar um valor para ele, ele tem 3, mas apenas o primeiro é obrigatorio
// Filter pode modificar o tamanho do array
// Os métodos são: valores, indices, arrays