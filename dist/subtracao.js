"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtracao = void 0;
const operacao_1 = require("./operacao");
class Subtracao extends operacao_1.Operacao {
    calcular() {
        return this.num1 - this.num2;
    }
}
exports.Subtracao = Subtracao;
