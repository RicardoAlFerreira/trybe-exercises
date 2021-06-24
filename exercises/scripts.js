//Sistema mega Sena
let primeiroNumero = Math.ceil(Math.random()* 60);
let segundoNumero = Math.ceil(Math.random()* 60);
let terceiroNumero = Math.ceil(Math.random()* 60);
let quartoNumero = Math.ceil(Math.random()* 60);
let quintoNumero = Math.ceil(Math.random()* 60);
let sextoNumero = Math.ceil(Math.random()* 60);

let numeroMegaSena = [primeiroNumero,segundoNumero,terceiroNumero,quartoNumero,quintoNumero,sextoNumero];

console.log(numeroMegaSena);

//escrevendo de outra forma

let numeroMegaSena = [];

for (let index=0; index <6; index +=1) {
    numeroMegaSena[index] = Math.ceil(Math.random() * 60);
}
console.log(numeroMegaSena);

//comparativo dos jogos

let meuJogo = [14,55,44,22,33,15];
let acertos = 0;

for (let indexJogo = 0; indexJogo < meuJogo.length; indexJogo += 1) {
    for (let indexMega = 0; indexMega < numeroMegaSena.length; indexMega += 1) {
        if (meuJogo[indexJogo] === numeroMegaSena[indexMega]) {
        acertos += 1;
        }
    
    }
}
console.log("Você acertou", acertos, " numeros do seu jogo" );