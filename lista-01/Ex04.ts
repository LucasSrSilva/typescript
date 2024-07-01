import rl = require("readline-sync");
const colecao: Set<number> = new Set<number>;
const numBusca: number = rl.questionInt("Digite o numero que voce deseja encontrar: ");

colecao.add(2);
colecao.add(5);
colecao.add(1);
colecao.add(3);
colecao.add(4);
colecao.add(9);
colecao.add(7);
colecao.add(8);
colecao.add(10);
colecao.add(6);

colecao.has(numBusca) ? console.log(`O número ${numBusca} foi encontrado!`) : console.log(`O número ${40} não foi encontrado`);
