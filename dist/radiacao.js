"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radiciacao = void 0;
const operacao_1 = require("./operacao");
class Radiciacao extends operacao_1.Operacao {
    calcular() {
        return Math.pow(this.num1, 1 / this.num2);
    }
}
exports.Radiciacao = Radiciacao;
