import rl = require("readline-sync");
const numeros: Array<number> = new Array<number>;
let numeroBusca: number;

numeros.push(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

numeroBusca = rl.questionInt("Digite o numero que voce deseja buscar: ");

numeros.indexOf(numeroBusca) == -1 ?
    console.log(`O numero ${numeroBusca} não foi encontrado`) : console.log(`O número ${numeroBusca} está localizado na posição ${numeros.indexOf(numeroBusca)}`);