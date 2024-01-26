//O método Array.from() cria uma nova instância de um Array quando for passado um array-like ou um iterable object como argumento.

function f() {
  return Array.from(arguments);
}

f(1, 2, 3);
// [1, 2, 3]

// Qualquer iterable object ...
// com Set
var s = new Set(["foo", window]);
Array.from(s);
// ["foo", window]

// Map
var m = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

// String
Array.from("foo");
// ["f", "o", "o"]

// Usando um arrow function como função map para
// manipular os elementos
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Gerando uma sequência de números
Array.from({ length: 5 }, (v, k) => k);
// [0, 1, 2, 3, 4]
