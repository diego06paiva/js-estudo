"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa um decorator chamado "debug" de um arquivo externo
const debug_1 = require("./utils/debug");
// Aplica o decorator "debug" na classe "PrimeiraClasse"
// Esse decorator pode estar adicionando logs, alterando a classe ou algo semelhante
let PrimeiraClasse = class PrimeiraClasse {
    constructor() { }
};
PrimeiraClasse = __decorate([
    debug_1.debug
], PrimeiraClasse);
// Função decorator chamada "log"
// Recebe como parâmetro o "constructor" da classe decorada
function log(constructor) {
    // Retorna uma nova classe que herda da original e adiciona um novo atributo
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.create = new Date("2025-03-31"); // Adiciona uma propriedade "create" com uma data fixa
        }
    };
}
// Aplica o decorator "log" na classe "SegundaClasse"
// Isso faz com que a classe receba a modificação feita pelo decorator
let SegundaClasse = class SegundaClasse {
    constructor() { }
};
SegundaClasse = __decorate([
    log
], SegundaClasse);
// Cria uma instância de "SegundaClasse" e exibe no console
console.log(new SegundaClasse());
