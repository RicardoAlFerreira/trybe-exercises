let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

// exercicio 1
console.log(numbers);



//exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
   sum += numbers[index]
}
console.log (sum);


//exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    total = (sum += numbers[index])/10
}
console.log(total);

//exercicio 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    total = (sum += numbers[index])/10
}
//console.log(total);
 if (total > 20) {
     console.log("Valor maior que 20");
 } else {
     console.log("Valor menorou igual a 20")
 }

 //exercicio 5
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let maior = Math.max.apply(null, numbers);
 console.log(maior);
