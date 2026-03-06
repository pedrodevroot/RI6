import { Operacao } from "./operacao"

export class Potencia extends Operacao {

    calcular(): number {
        return Math.pow(this.num1, this.num2)
    }

}