import { log } from "console";

try{
    const resultado = converte(123);
    
    console.log(resultado);
}
catch(error: any){
    if(error instanceof TypeError){
        console.error("\nVocê digitou um número. Digite um texto e tente novamente");
    }
    else{
        console.error("Erro inesperado? o que aconteceu?")
    }
}
finally{
    console.log("Fim do programa");
    
}

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}