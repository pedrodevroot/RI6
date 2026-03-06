import { Operacao } from "./operacao"

export class Subtracao extends Operacao {

    calcular(): number {
        return this.num1 - this.num2
    }

}