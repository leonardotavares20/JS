const ramdomNumbers = [90, 4, 5, 45, 65, 75, 54, 23];

const searchMin = (array, start) => {
  let minNumber = array[start];
  let minIndex = start;
  for (let i = 1 + start; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
      minIndex = i;
    }
  }
  return minIndex;
};

const bubbleSort = (array) => {
  let newArr = [...array];
  for (let i = 0; i < array.length; i++) {
    let minIndex = searchMin(newArr, i);
    if (minIndex !== i) {
      const valueArr = newArr[i];
      newArr[i] = newArr[minIndex];
      newArr[minIndex] = valueArr;
    }
  }
  return newArr;
};

const orderedArray = bubbleSort(ramdomNumbers);


const sortArr = ramdomNumbers.sort((a, b) => a - b);

console.log(orderedArray);
console.log(sortArr);
