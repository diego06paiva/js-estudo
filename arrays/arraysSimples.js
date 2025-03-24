const nomes = ['diego', 'july', 'luciana']
nomes[2] = 'maria'
delete nomes[2]
console.log(nomes)

// Criando uma array e modificando um item, depois deletanto esse mesmo item

const nomes2 = ['diego', 'moura', 'paiva']
const vasco = nomes2.join(' vasco ')
console.log(vasco)

// usando o método join para juntar o array com a palavra vasco

const nomes3 = ['juliana', 'marques', 'souza']
const flamengo = nomes3.slice(0, 2)
console.log(flamengo)

// usando o método slice para 'fatiar' o array

const nomes4 = "Rafael railton, vasco da gama";
const separado = nomes4.split(","); // Separa pelos espaços
console.log(separado);

// usando o método split para transformar uma string em um array e separando o array por virgula