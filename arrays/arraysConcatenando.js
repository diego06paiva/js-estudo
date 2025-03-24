// Essa é uma forma de concatenar listas, com o método concat
const lista1 = [1, 2, 3]
const lista2 = [3, 4, 5]
const lista3 = [6, 7, 8]
const lista4 = [9, 10, 11]

const listasJunstas = lista1.concat(lista2, lista3, lista4)
console.log(listasJunstas)


// Essa é uma outra maneira de concatenar listas, com spread
const a = [100, 200, 300]
const b = [400, 500, 600]
const ab = [...a, ...b]
console.log(ab)