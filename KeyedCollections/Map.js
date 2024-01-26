let animals = new Map();

animals.set("dog", "woof");
animals.set("cat", "meow");
animals.set("cow", "moo");
animals.set("horse", "neigh");

for (let [key, value] of animals) {
  console.log(key, value);
}

const getSize = () => console.log(animals.size);

getSize();

const getAnimal = (animal) => {
  return animals.get(animal);
};

const result = getAnimal("dog");

console.log(result);

console.log(animals.has("horse"));

console.log(animals.delete("cow"));

console.log(animals);

//Metodos iterativos

const cars = new Map();

cars.set("mercedes", "amg");
cars.set("ferrari", "enzo");

//iterator: Retorna um novo objeto iterador que contèm um array de [chave, valor] para cada elemento do objeto Map na ordem em que foram inseridos.

const iterator = cars[Symbol.iterator]();

console.log("Iterator:", iterator);

for (const [key, value] of iterator) {
  console.log(`marca: ${key}, linha: ${value}`);
}

//keys: Retorna um novo objeto iterador que contém todas as chaves do Map.

const keys = cars.keys();

console.log("Keys:", keys);

for (const key of keys) {
  console.log(key);
}

//values: Retorna um novo objeto iterador que contém todos os valores do Map.

const values = cars.values();

console.log("Values:", values);

for (const value of values) {
  console.log(value);
}

//entries: Retorna um novo objeto iterador que contém pares [key, value] de cada elemento no objeto Map na ordem em que foram inseridos.

const entries = cars.entries();

console.log("Entries:", entries);

for (const entry of entries) {
  console.log(entry);
}

//forEach: Executa uma funcão para cada elemento do Map.

const logMapElements = (value, key, map) => {
  console.log('ForEach:', key, value);
};

new Map(cars).forEach(logMapElements);
