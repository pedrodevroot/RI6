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
const bhaskara_1 = require("./bhaskara");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Escolha a operação:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Divisão");
console.log("4 - Potência");
console.log("5 - Radiciação");
console.log("6 - Bhaskara");
rl.question("Opção: ", (op) => {
    const pedirNumero = (msg) => {
        return new Promise(resolve => {
            rl.question(msg, (valor) => resolve(Number(valor)));
        });
    };
    const executar = async () => {
        let resultado;
        if (op === "6") {
            const qtd = await pedirNumero("Quantos números deseja informar? (mínimo 3): ");
            if (qtd < 3 || isNaN(qtd)) {
                console.log("Bhaskara requer pelo menos 3 números.");
                rl.close();
                return;
            }
            const numeros = [];
            for (let i = 0; i < qtd; i++) {
                const num = await pedirNumero(`Digite o número ${i + 1}: `);
                numeros.push(num);
            }
            resultado = new bhaskara_1.Bhaskara().calcular(numeros[0], numeros[1], numeros[2]);
        }
        else {
            const num1 = await pedirNumero("Digite o primeiro número: ");
            const num2 = await pedirNumero("Digite o segundo número: ");
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
                default:
                    console.log("Opção inválida");
                    rl.close();
                    return;
            }
        }
        console.log("Resultado:", resultado);
        rl.close();
    };
    executar();
});
