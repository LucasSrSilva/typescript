import { Queue } from "../../interfaces/Queue";

const fila = new Queue<number>();

for(let i = 1; i <=10; i++){
    fila.enqueue(i);
}

console.log("Exibir todos os Elementos da fila");
fila.printQueue();

console.log("\nRemover elemento " + fila.dequeue())
fila.printQueue();

console.log("Exibir primeiro da fila: " + fila.peek())

console.log("Checar se existe o elemento 4 na fila: " + fila.contains(4))

