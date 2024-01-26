const twoSum = (arr, target) => {
  for (let indexOne = 0; indexOne < arr.length; indexOne++) {
    for (let indexTwo = indexOne + 1; indexTwo < arr.length; indexTwo++) {
      if (arr[indexOne] + arr[indexTwo] === target) {
        const indexNumbers = [indexOne, indexTwo];
        return indexNumbers;
      }
    }
  }
};

let target = 9;
const array = [11, 15, 2, 7];

const result = twoSum(array, target);

console.log(result);
