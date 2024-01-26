//O meotod find retorna o primeiro elemento a satisfazer a condicao, se ele nao encontrar ele retorna undefined

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrResult = arr.find((number) => number > 5);

console.log(arrResult);

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cerejas", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cerejas";
}

console.log(inventory.find((fruit) => fruit.name === "cerejas"));
// { name: 'cerejas', quantity: 5 }
