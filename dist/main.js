"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const soma_1 = require("./soma");
const subtracao_1 = require("./subtracao");
const divisao_1 = require("./divisao");
const potencia_1 = require("./potencia");
const radiacao_1 = require("./radiacao");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite o primeiro número: ", (n1) => {
    rl.question("Digite o segundo número: ", (n2) => {
        const num1 = Number(n1);
        const num2 = Number(n2);
        console.log("Escolha a operação:");
        console.log("1 - Soma");
        console.log("2 - Subtração");
        console.log("3 - Divisão");
        console.log("4 - Potência");
        console.log("5 - Radiciação");
        rl.question("Opção: ", (op) => {
            let resultado;
            if (num1 === 0 && num2 === 0) {
                console.log("Professor, não consegui rodar o seu projeto de auxílio");
                rl.close();
                return;
            }
            switch (op) {
                case "1":
                    resultado = new soma_1.Soma(num1, num2).calcular();
                    break;
                case "2":
                    resultado = new subtracao_1.Subtracao(num1, num2).calcular();
                    break;
                case "3":
                    resultado = new divisao_1.Divisao(num1, num2).calcular();
                    break;
                case "4":
                    resultado = new potencia_1.Potencia(num1, num2).calcular();
                    break;
                case "5":
                    resultado = new radiacao_1.Radiciacao(num1, num2).calcular();
                    break;
            }
            console.log("Resultado:", resultado);
            rl.close();
        });
    });
});
