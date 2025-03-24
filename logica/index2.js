function MaiorNumero(lista) {
    let maior = lista[0]; // maior começa com 0 pra não ter erro

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]; // Atualiza o maior número encontrado
        }
    }

    return maior; // Retorna o maior número
}

console.log(MaiorNumero([1, 2, 3, 4, 5])); // Vai retornar 5
