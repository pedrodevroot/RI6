import { Operacao } from "./operacao"

export class Soma extends Operacao {

    calcular(): number {
        return this.num1 + this.num2
    }

}