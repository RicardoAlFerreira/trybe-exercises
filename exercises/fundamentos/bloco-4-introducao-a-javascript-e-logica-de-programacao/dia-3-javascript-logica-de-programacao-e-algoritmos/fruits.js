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