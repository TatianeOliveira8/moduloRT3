"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    return Pessoa;
}());
exports.default = Pessoa;
var pessoa = new Pessoa('pessoa');
console.log(pessoa.nome);
