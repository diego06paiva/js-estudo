"use strict";
class Permissao2 {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    get Falar() {
        return `${this.nome} falou`;
    }
    set nomeNovo(novoNome) {
        this.nome = novoNome;
    }
}
const per = new Permissao2("Diego", 12);
console.log(per.Falar);
per.nomeNovo = "Maria";
console.log(per);
// Classe normal, declara os parametros e depois referencia cada objeto com this
// get é para acessar, set é para modificar
class Aluno extends Permissao2 {
    constructor(nome, idade, email, senha) {
        super(nome, idade);
        this.email = email;
        this.senha = senha;
    }
}
// Herança, o uso de extends já comprova isso
class Casa {
    constructor(cor, ano, porta) {
        this.cor = cor;
        this.ano = ano;
        this.porta = porta;
    }
    tocarInterfone() {
        console.log("interfone ligou");
    }
}
class Domicilio extends Casa {
    chamarInterfone() {
        this.tocarInterfone();
    }
}
const minhaCasa = new Domicilio("cinza", 2024, "fechada");
console.log(minhaCasa.chamarInterfone());
// Aqui é o uso do protected, ele só pode ser acessado e usado pela propria classe ou de quem ela herda
// note que não se chama ela direto na classe filho, é preciso referencia com this
class segredo {
    constructor(nome) {
        this.nome = nome;
    }
    segredo() {
        console.log("segredo");
    }
    contarSegredo() {
        this.segredo();
    }
}
class fofoca extends segredo {
}
const fofo = new fofoca("fulana");
fofo.contarSegredo();
// Aqui eu nem vou explicar, private só consegue acessar os métodos dentro da propria classe
