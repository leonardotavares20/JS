//Set é como um array, é uma lista com valores unicos, mas com metodos, e você não consegue acessar valores pelo index como no array

const set = new Set(["Pão", "Bolo", "Cafe", "Refrigerante", "Agua"]);

//Mas você consegue verificar se há ou não elementos dentro da lista
console.log(set.has("Agua"));

//A lista pode ser iterada
set.forEach((value) => console.log(value));

//Set não adiciona valores duplicados
set.add("Cerveja");
set.add("Cerveja");

console.log(set);

//Set pode remover valores pelo valor
set.delete("Cerveja");

console.log(set);

//Set pode remover todos os valores com clear
set.clear();

//Conversão
Array.from(set);

//Operacoes com Set
console.log("-----------------Operacoes com Set-----------------");

//Todos os items de um Set existem no outro Set?

const setOne = new Set(["A", "B", "C"]);
const setTwo = new Set(["A", "B", "C", "D", "E"]);

function isSuperSet(setOne, setTwo) {
  for (let value of setTwo) {
    if (!setOne.has(value)) {
      return false;
    }
  }
  return true;
}

const superSetResult = isSuperSet(setOne, setTwo);

console.log("-------------SuperSet");
console.log(superSetResult);

//Unindo Sets

function unionSets(setOne, setTwo) {
  let newUnion = new Set(setOne);
  for (let value of setTwo) {
    newUnion.add(value);
  }
  return newUnion;
}

const unionResult = (setOne, setTwo);

console.log("-------------Union");
console.log(unionResult);

//Intersection | Somente valores presentes nos dois Sets

function intersectionSets(setOne, setTwo) {
  const newIntersection = new Set([]);

  for (let value of setTwo) {
    if (setOne.has(value)) {
      newIntersection.add(value);
    }
  }

  return newIntersection;
}

const intersectionResult = intersectionSets(setOne, setTwo);

console.log("-------------Intersection");
console.log(intersectionResult);

//Difference

function differenceSets(setOne, setTwo) {
  let differenceSet = new Set(setOne);
  for (let value of setTwo) {
    if (differenceSet.has(value)) {
      differenceSet.delete(value);
    } else {
      differenceSet.add(value);
    }
  }
  return differenceSet;
}

const differenceResult = differenceSets(setOne, setTwo);

console.log("-------------Difference");
console.log(differenceResult);
