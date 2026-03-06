import readline from "readline"
import { Soma } from "./soma"
import { Subtracao } from "./subtracao"
import { Divisao } from "./divisao"
import { Potencia } from "./potencia"
import { Radiciacao } from "./radiacao"
import { Bhaskara } from "./bhaskara";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Escolha a operação:")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Divisão")
console.log("4 - Potência")
console.log("5 - Radiciação")
console.log("6 - Bhaskara")

rl.question("Opção: ", (op) => {

    const pedirNumero = (msg: string): Promise<number> => {
        return new Promise(resolve => {
            rl.question(msg, (valor) => resolve(Number(valor)))
        })
    }

    const executar = async () => {

        let resultado

        
        if (op === "6") {

            const qtd = await pedirNumero("Quantos números deseja informar? (mínimo 3): ")

            if (qtd < 3 || isNaN(qtd)) {
                console.log("Bhaskara requer pelo menos 3 números.")
                rl.close()
                return
            }

            const numeros: number[] = []

            for (let i = 0; i < qtd; i++) {
                const num = await pedirNumero(`Digite o número ${i + 1}: `)
                numeros.push(num)
            }

            resultado = new Bhaskara().calcular(
                numeros[0],
                numeros[1],
                numeros[2]
)
        }
        else {

            const num1 = await pedirNumero("Digite o primeiro número: ")
            const num2 = await pedirNumero("Digite o segundo número: ")

            if (num1 === 0 && num2 === 0) {
                console.log("Professor, não consegui rodar o seu projeto de auxílio")
                rl.close()
                return
            }

            switch (op) {

                case "1":
                    resultado = new Soma(num1, num2).calcular()
                    break

                case "2":
                    resultado = new Subtracao(num1, num2).calcular()
                    break

                case "3":
                    resultado = new Divisao(num1, num2).calcular()
                    break

                case "4":
                    resultado = new Potencia(num1, num2).calcular()
                    break

                case "5":
                    resultado = new Radiciacao(num1, num2).calcular()
                    break

                default:
                    console.log("Opção inválida")
                    rl.close()
                    return
            }
        }

        console.log("Resultado:", resultado)
        rl.close()
    }

    executar()
})