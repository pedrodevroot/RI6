export class Bhaskara {

    calcular(a: number, b: number, c: number): string {

        const delta = (b * b) - (4 * a * c);

        if (delta < 0) {
            return "A equação não possui raízes reais.";
        }

        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        return `x1 = ${x1} | x2 = ${x2}`;
    }

}