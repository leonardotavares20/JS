//O metodo some retorna se ao menos um elemento no array passar pelo teste imposto a ele

const arr = [123, 434, 546];

const resultTrue = arr.some((currentValue) => currentValue > 100);
const resultFalse = arr.some((currentValue) => currentValue > 600);

console.log(resultTrue);
console.log(resultFalse);
