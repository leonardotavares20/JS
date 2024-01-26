let arr = ["a", "b", "c"];

let newArr = arr.entries();

console.log(newArr);

// console.log(newArr.next().value);
// console.log(newArr.next().value);
// console.log(newArr.next().value);

for (let e of newArr) {
  console.log(e);
}

// Exemplo mais pratico

const dicionary = {
  hello: "Ola",
  world: "Mundo",
};

const entriesArr = Object.entries(dicionary);

console.log(entriesArr);

for (let [englishWord, portugueseWord] of entriesArr) {
  console.log(`${englishWord} em Português é ${portugueseWord}`);
}
