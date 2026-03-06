import readline from "readline"
import { Soma } from "./soma"
import { Subtracao } from "./subtracao"
import { Divisao } from "./divisao"
import { Potencia } from "./potencia"
import { Radiciacao } from "./radiacao"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o primeiro número: ", (n1) => {

    rl.question("Digite o segundo número: ", (n2) => {

        const num1 = Number(n1)
        const num2 = Number(n2)

        console.log("Escolha a operação:")
        console.log("1 - Soma")
        console.log("2 - Subtração")
        console.log("3 - Divisão")
        console.log("4 - Potência")
        console.log("5 - Radiciação")

        rl.question("Opção: ", (op) => {

            let resultado

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

            }

            console.log("Resultado:", resultado)

            rl.close()

        })

    })

})