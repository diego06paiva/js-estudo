function SomarImpares(lista) {
    let soma = 0 // define que soma começa com 0

    for (let i = 0; i < lista.length; i++){
        if (lista[i] % 2 !== 0) { // faz a verificação se os números do array são impar, se o resto do número for diferente de par então ele passa e soma
            soma += lista[i] // soma é 0 e ele verifica se os números impar (0 + 1 + 3 + 5 + 7 + 9)
        }

    }

    return soma; // retorna o valor da soma 
}

console.log(SomarImpares([1, 2, 3, 4, 5, 6, 7, 8, 9])); 