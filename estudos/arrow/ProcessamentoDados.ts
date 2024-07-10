let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log("\n Multiplicar por 3");
let numerosMultiplicadosPor3 = numeros.map(n => n * 3);
console.dir(numerosMultiplicadosPor3);

console.log("\n Filtrar os Estados que contém a palavra Rio");
let estadosContemRio = estados.filter(e => e.includes("Rio"));
console.dir(estadosContemRio);

console.log("\nChecar se existe o Estado do Paraná\n");
let estadoParana = estados.some(e => e === "Paraná");
console.log(estadoParana);

console.log("\nChecar se todos os números da lista são menores ou iguais a 10\n");
let numerosMenoresIgual10 = numeros.every(n => n <= 10);
console.dir(numerosMenoresIgual10);

console.log("\nChecar se existe na lista o Estado de Minas Gerais\n");
let estadoMinasGerais = estados.includes("Minas Gerais");
console.log(estadoMinasGerais);

console.log("\nRemover todos os elementos repetidos do array estados\n");
let estadosSemRepeticoes = estados.reduce((acumulador: string[], estado) => {
    if(acumulador.indexOf(estado) === -1){
        acumulador.push(estado);
    }
    return acumulador;
}, []);
console.dir(estadosSemRepeticoes);

console.log("\nEncontrar o primeiro número da lista maior do que 9\n");
let numeroMaior9 = numerosRepetidos.find(n => n > 9);
console.log(numeroMaior9);

console.log("\nEncontrar o Índice do primeiro número da lista maior do que 9\n");
let posicaoNumeroMaior9 = numerosRepetidos.findIndex(n => n > 9);
console.log(posicaoNumeroMaior9);

console.log("\n Spread - Combinar 2 arrays");
const arrayCombinado: number[] = [...numeros, ...numerosDesordenados];
console.log(arrayCombinado);

function listarPessoa(nome: string, idade: number) {
    return {
      nome,
      idade,
    };
  }
  const pessoa: [string, number] = ['Márcia da Silva', 30];
  const resultado = listarPessoa(...pessoa);
  console.log(resultado);

