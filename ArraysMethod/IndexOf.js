//IndexOf retorna o index do primeiro elemento que atende a condicao passada
//Se ele não achar ele retorna -1
//Tbm da de colocar qual index a busca inicia

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));

// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1

var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var elemento = "a";
var idx = array.indexOf(elemento);

while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);
// [0, 2, 4]s
