const binarySearch = (array, target) => {
  let numberLow = 0;
  let numberHigh = array.length - 1;

  while (numberLow <= numberHigh) {
    let middle = Math.floor((numberLow + numberHigh) / 2);
    let valueArray = array[middle];
    if (valueArray === target) {
      return middle;
    }
    if (valueArray > target) {
      numberHigh = middle - 1;
    } else {
      numberLow = middle + 1;
    }
  }

  return -1;
};

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const resultado = binarySearch(array, 11);

console.log(resultado);
