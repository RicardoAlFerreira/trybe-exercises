
// Exercícios 4.4

// Exercício 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

console.log('Bem vinda,', info.personagem);

// Exercicio 2
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
} ;

console.log(info);

//Exercicio 3
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};
for (let chave in info) {
    console.log(info[chave]);
}

//Exercicio 4 e 5
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let propriedades in info) {
    if (
        propriedades === 'recorrente' &&
        info[propriedades] === 'Sim' &&
        info2[propriedades] === 'Sim'

    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[propriedades], 'e', info2[propriedades]);
    }
}

// Exercicio 1 Funções (Função que determina se uma palavra no array é um Palindromo contabilizando se ela se escreve igual de traz pra frente)

function verificaPalindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
        return true;
}
function verificaPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));



//Exercicio 2 Qual indice possui maior valor? no caso indice 1
function indiceDoMaior(numeros) {
  let maiorNumero = 0;
  for (let indice in numeros) {
    if (numeros[maiorNumero] < numeros[indice]) {
      maiorNumero = indice;
    }
  }
  return maiorNumero;
}

console.log(indiceDoMaior([2, 30, 6, 7, 10, 21]));

//Exercicio 3 Qual o indice possui menor valor?
function indiceDoMaior(numeros) {
    let maiorNumero = 0;
    for (let indice in numeros) {
      if (numeros[maiorNumero] > numeros[indice]) {
        maiorNumero = indice;
      }
    }
    return maiorNumero;
  }
  
  console.log(indiceDoMaior([2, 30, 6, 7, -2, 21]));

//Exercício 4 (Qual palavra possui maior quantidade de caracteres?)
function maiorNome(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorNome(['José', 'Lucas', 'Ricardo', 'Bruno', 'Cairo', 'Joana']));

//Exercício 6 (Somatório de todos os numeros) no caso resposta 210
function somatorio(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index += 1) {
    total = total + index;
  }
  return total;
}
console.log(somatorio(20));