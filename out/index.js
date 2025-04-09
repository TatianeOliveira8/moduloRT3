import { Somador, Subtrador, Divisor, Multiplicador } from "./operacao";
const somador = new Somador();
const subtrador = new Subtrador();
const multiplicador = new Multiplicador();
const divisor = new Divisor();
// Testando as operações
console.log("Soma:", somador.calcular(10, 5)); // 15
console.log("Subtração:", subtrador.calcular(10, 5)); // 5
console.log("Multiplicação:", multiplicador.calcular(10, 5)); // 50
try {
    console.log("Divisão:", divisor.calcular(10, 5)); // 2
    console.log("Divisão por zero:", divisor.calcular(10, 0)); // Lança erro
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error("An unknown error occurred");
    }
}
