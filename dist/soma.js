"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soma = void 0;
const operacao_1 = require("./operacao");
class Soma extends operacao_1.Operacao {
    calcular() {
        return this.num1 + this.num2;
    }
}
exports.Soma = Soma;
