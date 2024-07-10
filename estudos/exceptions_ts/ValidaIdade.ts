import { error } from "console";
import readline = require("readline-sync");

try{
let idade: number = readline.questionInt("Digite a idade: ")
validarIdade(idade)
}
catch(error: any){
        console.error(error.name);
        console.error(error.message)
}
function validarIdade(idade: number): void {
        if (idade > 18)
                console.log("A pessoa é maior de idade!")
        else {
                throw new Error("A pessoa e menor de idade!")
        }
}