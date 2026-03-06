import { Operacao } from "./operacao"

export class Divisao extends Operacao {

    calcular(): number {
        return this.num1 / this.num2
    }

}   