import rl = require("readline-sync");

const colecao: Set<number> = new Set<number>;
let numSelecionado: number;

for (let i = 1; i <= 10; i++) {
    numSelecionado = rl.questionInt("Digite um numero nao repetido: ");

    if (colecao.has(numSelecionado)) {
        console.log("Esse número já foi inserido");
        i--
    }
    else {
        colecao.add(numSelecionado)
    }

}

console.table(colecao);
const array = Array.from(colecao);
array.sort(function(a, b){return a - b});
colecao.clear();
for(let jorge of array){
    colecao.add(jorge);
}

console.log("Set ordenado")
console.table(colecao)