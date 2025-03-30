"use strict";
function Soma(a, b) {
    return a + b;
}
// Função normal com tipos nos parametros
console.log(Soma(10, 10));
function CPF(cpf) {
    return cpf;
}
console.log(CPF("069.463.532.43"));
console.log(CPF(123456));
// função que aceita mais de um tipo de parametro, como se fosse union tipes
const Alunos = (nome, idade) => {
    return { nome, idade };
};
console.log(Alunos("Diego", 22));
// Mesma coisa, mas é arrowFunction
function Email(para, assunto = "Qualquer assunto", remetente) {
    console.log({ para, assunto, remetente });
}
console.log(Email("Fulano"));
// Função que aceita um parametro com algo salvo e passa caso o usuario não passe nada
// Outro parametro que é opcional, se o usuario não passar nada, tudo bem
