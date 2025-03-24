function MultiplicaImpares(lista) {
    multiplicacao = 1

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) {
            multiplicacao *= lista[i] 
        }
    }

    return multiplicacao
}

console.log(MultiplicaImpares([1, 2, 3, 4, 5]))