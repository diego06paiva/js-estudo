function Soma(a, b) {
    return a + b
}

console.log(Soma(10, 10))

// Função com parametro que retorna um valor passado pelo usuario

function Soma3(a, b, c = 0) {
    return a + b + c
}

console.log(Soma3(10, 30))

// Função com valor definido, mesmo que eu não passe nada, já é um valor padrão