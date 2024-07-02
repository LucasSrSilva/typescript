import { Stack } from "../interfaces/Stacks";
import rl = require("readline-sync");

const pilha = new Stack<string>();
let loop: boolean = true;

console.log("\n**************************************************\n");
console.log("     1 - Adicionar Livro na pilha\n     2 - Listar todos os Livros\n     3 - Retirar Livro da pilha\n     0 - Sair")
console.log("\n**************************************************");

    while(loop){
        const opcao: number = rl.questionInt("\nDigite uma opcao: ");

        switch(opcao){
            case 1:
                pilha.push(rl.question("Digite o nome: "));
                console.log("\nPilha: \n")
                pilha.printStack();
                console.log("\nLivro adicionado!\n");
                break;
            case 2:
                console.log("\nLista de livros na pilha: \n")
                pilha.printStack();
                break;
            case 3:
                if(pilha.isEmpty()){
                    console.log("A pilha está vazia!\n");
                    break;
                }
                console.log("\nPilha: \n")
                pilha.pop();
                pilha.printStack();
                console.log("\n Um livro foi retirado da pilha!\n")
                break;
            case 0:
                console.log("\nPrograma finalizado!")
                loop = false;
                break;
            default:
                console.log("\nOpção inválida!");
        }
    }

