"use strict";
const empresa = "Tutipalst";
// Tipo String
const numeros = 10;
// Tipo numérico
let pix;
pix = 12324;
pix = "diego@gmail.com";
// Tipo Union Tipes onde ele junta mais de um tipo,
// Ele funciona apenas com let
let admin;
admin = true;
admin = false;
// Tipo boolean pode ser true ou false, apenas isso
const files = ["comedia", "terror", "herois"];
// Tipo array que determina qual tipo vai dentro do array
const times = ["texto", 123];
// tipo array que aceita mais de um tipo
let Pessoa;
Pessoa = ["nome", 22];
// Tipo tuple onde eu defino qual tipo ele vai receber e tem que seguir a ordem
const servidor = {
    nome: "IPWIASI",
    IP: 253,
};
// Tipo object que é um objeto
var Permissao;
(function (Permissao) {
    Permissao[Permissao["ADMIN"] = 1] = "ADMIN";
    Permissao[Permissao["USER"] = 2] = "USER";
    Permissao[Permissao["ESTAGIARIO"] = 3] = "ESTAGIARIO";
})(Permissao || (Permissao = {}));
console.log(Permissao.ADMIN);
// tipo ENUM onde posso agrupar tipos de informações
const nulo = null;
let indenifinido;
// Tipo null e um tipo indefinido
const vasco = "Qualquer valor";
const flu = 12;
const fla = true;
const bot = null;
// Tipo any aceita qualquer coisa ai
let NaoSei;
// unknown serve para quando não se sabe qual tipo o valor vai receber
