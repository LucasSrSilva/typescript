import rl = require("readline-sync");

const cores: Array<String> = new Array<String>;

for(let i = 1; i <=5; i++){
    cores.push(rl.question(`Digite a cor  ${i}: `));
}

console.log("\n\nLista de cores");
console.table(cores)
cores.sort()
console.log("Cores ordenadas")
console.table(cores)