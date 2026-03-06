"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potencia = void 0;
const operacao_1 = require("./operacao");
class Potencia extends operacao_1.Operacao {
    calcular() {
        return Math.pow(this.num1, this.num2);
    }
}
exports.Potencia = Potencia;
