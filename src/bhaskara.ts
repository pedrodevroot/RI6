export class Bhaskara {

    calcular(a: number, b: number, c: number) {

        const delta = (b * b) - (4 * a * c)

        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)

        return { x1, x2 }

    }

}