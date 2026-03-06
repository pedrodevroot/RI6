import { Operacao } from "./operacao"

export class Radiciacao extends Operacao {

    calcular(): number {
        return Math.pow(this.num1, 1 / this.num2)
    }

}