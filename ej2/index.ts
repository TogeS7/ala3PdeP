
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

class Calculadora {
  private num1: number;
  private num2: number;
  private operador: string;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.operador = "";
  }

  public ingresarDatos(): void {
    this.num1 = parseFloat(prompt("Ingrese el primer número: ") || "0");
    this.operador = prompt("Ingrese el operador (+, -, *, /): ") || "";
    this.num2 = parseFloat(prompt("Ingrese el segundo número: ") || "0");
  }

  public calcular(): number | string {
    switch (this.operador) {
      case "+":
        return this.num1 + this.num2;
      case "-":
        return this.num1 - this.num2;
      case "*":
        return this.num1 * this.num2;
      case "/":
        return this.num2 !== 0
          ? this.num1 / this.num2
          : "Error: división por cero";
      default:
        return "Operador no válido";
    }
  }

  public mostrarResultado(resultado: number | string): void {
    console.log("Resultado:", resultado);
  }
}

const calc = new Calculadora();
calc.ingresarDatos();
const resultado = calc.calcular();
calc.mostrarResultado(resultado);
