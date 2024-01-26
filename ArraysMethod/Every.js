//O metodo every teste se todos os elementos passam pelo teste imposto a eles

const arr = [123, 434, 546];

const resultTrue = arr.every((currentValue) => currentValue > 100);
const resultFalse = arr.every((currentValue) => currentValue > 500);

console.log(resultTrue);
console.log(resultFalse);

function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
