//exercicio 1

let num1 = 5;
let num2 = 10;
let num3 = 15;

//soma
let soma = num1 + num2;


//subtração
let subtracao = num1 - num2;


//divisão
let divisao = num1 / num2;


//multiplicação
let multiplicacao = num1 * num2;


//comparação
let comparacao = num1 > num2;

//resto da divisao (mod)
let restoDaDivisao = num1 % 2;
//console.log(restoDaDivisao);



//Exercicio 5 //condicional
let num1 = 70;
let num2 = 60;
let num3 = 60;

if(num1 + num2 + num3 == 180) {
  console.log("True");
} else if (num1 + num2 + num3 < 180 && num1 + num2 + num3 > 180) {
  console.log("False");
} else {
  console.log("Não é um triângulo válido");
}


//exercicio 7
let nota = 68;
if(nota >= 90 && nota <= 100) {
    console.log("A");
  } else if (nota >= 80 && nota < 89) {
    console.log("B");
  } else if (nota >= 70 && nota < 79) {
    console.log("C");
  } else if (nota >= 60 && nota < 69) {
    console.log("D");
  } else if (nota >= 50 && nota < 59) {
    console.log("E");
  } else if (nota < 50 && nota >= 0) {
    console.log("F");
  } else if (nota < 0) {
    console.log("Essa prova não é de Deus!");
  } else if (nota > 100) {
    console.log("Essa prova não é de Deus");
  }





//Como saber se o num1 + num2 é par?
//Utilizamos o sinal de % (MOD)
console.log(13%5);

let isEven = ((num1+num2) % 2) == 0;
console.log(isEven);


//switch e case: quando ha comparacao direta entre valores

let weekDay = 3;
switch(weekDay) {
  case 1:
    console.log("Segunda-feira")
    break;    //encerra o resto da execução do bloco
  case 2:
    console.log("Terça-feira")
    break;
  case 3:
    console.log("Quarta-feira")
    break;
  case 4:
    console.log("Quinta-feira")
    break;
  case 5:
    console.log("sexta-feira")
    break;
  case 6:
    console.log("Sábado")
    break;
  case 7:
    console.log("Domingo")
    break;
  
  default:
    console.log("Não existe esse dia ainda")

};


//exemplo:
let age = 17;

if(age >=18) {
  console.log("Habilitado");
} else {
  console.log("não habilitado");
}
