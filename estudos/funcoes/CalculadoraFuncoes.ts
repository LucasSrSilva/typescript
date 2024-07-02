import rl = require("readline-sync");

let numero1: number;
let numero2: number;

numero1 = rl.questionFloat("Digite o primeiro numero: ");
numero2 = rl.questionFloat("Digite o segundo numero: ");

console.log("A Soma dos dois numeros é: " + somar(numero1, numero2));

function somar(num1: number, num2: number): number{
    return num1 + num2;
}