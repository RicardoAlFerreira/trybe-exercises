let fruits = [3, 4, 10, 1, 12];
let sum = 0;
for (let index = 0; index < fruits.length; index += 1) {
    total = (sum += fruits[index])
}
//console.log(total);
 if (total > 15) {
     console.log(total);
 } else {
     console.log("Valor menor que 16");
 }

 //Exercicio 1
 let n = 5;
 let quadrado = '*';
 let inputline = '';

 for(let index = 0; index < n; index += 1){
     inputline = inputline + quadrado;
 }

 for(let index = 0; index < n; index +=1){
     console.log(inputline);
 
 }

 //Exercicio 2
 let n = 5;
 let triangulo = '*';
 let inputline = '';

 for(let index = 0; index <= n; index += 1){
     inputline = inputline + triangulo;
     console.log(inputline);
 
 }

 //Exercicio 3
 let n = 5;
 let simbolo = '*';
 let inputline = '';
let baseTriangulo = n;

 for(let indexLinha = 0; indexLinha <= n; indexLinha += 1){
     for(let indexColuna = 0; indexColuna <= n; indexColuna +=1 ){
         if(indexColuna < baseTriangulo) {
          inputline = inputline + ' ';
         } else {
             inputline = inputline + simbolo;
         }
     }
    console.log(inputline);
    inputline = '';
    baseTriangulo -= 1

}