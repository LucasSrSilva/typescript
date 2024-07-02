import { Queue } from "../interfaces/Queue";
import rl = require("readline-sync");

const fila = new Queue<string>();
let loop: boolean = true;

console.log("\n**************************************************\n");
console.log("     1 - Adicionar Cliente na Fila\n     2 - Listar todos os Clientes da Fila\n     3 - Retirar Cliente da Fila\n     0 - Sair")
console.log("\n**************************************************");

while (loop) {

    const opcao: number = rl.questionInt("\nSelecione a opcao desejada: ");

    switch (opcao) {
        case 1:
            fila.enqueue(rl.question("Digite o nome: "));
            console.log("Fila: \n");
            fila.printQueue();
            console.log("\nCliente adicionado!");
            break;
        case 2:
            console.log("\nLista de clientes da fila: \n")
            fila.printQueue();
            break;
        case 3:
            if(fila.isEmpty()){
                console.log("A fila está vazia!");
                break;
            }
            fila.dequeue();
            console.log("Fila: ");
            fila.printQueue();
            console.log("O cliente foi chamado");
            break;
        case 0:
            console.log("\nPrograma finalizado!")
            loop = false;
            break;
        default:
            console.log("\nOpção inválida!")
            break;
    }
}