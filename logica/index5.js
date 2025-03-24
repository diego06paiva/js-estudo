function ContarVogais(palavra) {
    let contador = 0
    const vogais = "aeiouAEIOU"

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++
        }

    }
    return contador

}

console.log(ContarVogais("javascript"))
console.log(ContarVogais("sdvonsdddvjewofnaonvoaeaeeaeeaeaeaeaeaeae"))
