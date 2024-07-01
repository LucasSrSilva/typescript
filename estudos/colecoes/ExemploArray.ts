import rl = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(2);
numeros.push(4);
numeros.push(5);

numeros.unshift(2.5, 2, 5)

for(let numero of numeros){
    console.log(numero);
}

console.log("\nPosição do elemento 4 é:" + numeros.indexOf(4))
console.log("\nPosição do elemento:" + numeros.indexOf(200))

console.log("No array xiste elemento 5?: " + numeros.includes(5));

console.table(numeros);
numeros[numeros.indexOf(5)] = 10;
console.table(numeros);

numeros.splice(numeros.indexOf(10), 3)
console.table(numeros);