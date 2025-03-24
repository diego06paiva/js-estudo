function NumerosPares(lista) {
    let par = 0 // começa com 0

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) { // Verifica se o resto de um número é igual a 0
            par += 1 // incrementa 1 sempre que for 
        }
    }

    return par;
}

console.log(NumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// log é 5
// lógica
// 1 -> resto não é 0, portanto par ainda é 0
// 2 -> resto é 0, portanto par agora passa a ser 1
// 3 -> resto não é 0, portanto par ainda é 1
// 4 -> resto é 0, portanto par agora é 2

// vai assim até percorrer toda lista

