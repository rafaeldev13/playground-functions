// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else if (valor1 === false && valor2 === false) {
    return false;
  }
  else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2))
console.log(calcArea(51, 1))

// Desafio 3


function splitSentence(exemplo1) {
  let exemplo = exemplo1.split(" ")
  return exemplo;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4

function concatName(String) {
  return String[String.length - 1] + ', ' + String[0]
}
console.log(concatName(['rafael', 'lucas', 'nicolas', 'joao']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitorias = 3 * wins;
  let pontosEmpate = 1 * ties;
  let score = pontosVitorias + pontosEmpate;
  return score;
}
console.log(footballPoints(14, 8))
console.log(footballPoints(1, 2))
console.log(footballPoints(0, 0))

// Desafio 6
function highestCount(numero) {

  let maiorNumero = numero[0];
  let maiorNumeroRepete = 0;
  for (index = 0; index < numero.length; index += 1) {
    if (numero[index] > maiorNumero) {
      maiorNumero = numero[index];
    }
  }
  for (index = 0; index < numero.length; index += 1) {
    if (numero[index] === maiorNumero) {
      maiorNumeroRepete += 1;
    }
  }
  return maiorNumeroRepete;
}
console.log(highestCount([1, 2, 3, 4, 5, 5, 4, 2, 3]))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
