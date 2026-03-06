"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisao = void 0;
const operacao_1 = require("./operacao");
class Divisao extends operacao_1.Operacao {
    calcular() {
        return this.num1 / this.num2;
    }
}
exports.Divisao = Divisao;
