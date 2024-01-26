//O metodo findIndex retorna indice do primeiro item a satisfazer a condicao

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cerejas", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cerejas";
}

const fruit = inventory.find((fruit) => fruit.name === "cerejas");
const indexFruit = inventory.findIndex((fruit) => fruit.name === "cerejas");

console.log(`${fruit.quantity} ${fruit.name} no index ${indexFruit}`);
