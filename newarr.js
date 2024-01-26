const ramdomNumbers = [90, 4, 5, 45, 65, 75, 54, 23];

const getMinIndex = (arr, startIndex) => {
  let smallestNumber = arr[startIndex];
  let smallestIndex = startIndex;
  for (let index = startIndex + 1; index < arr.length; index++) {
    if (arr[index] < smallestNumber) {
      smallestNumber = arr[index];
      smallestIndex = index;
    }
  }
  return smallestIndex;
};

const bubbleSort = (arr) => {
  let copyArr = [...arr];
  for (let index = 0; index < copyArr.length; index++) {
    const smallestIndex = getMinIndex(copyArr, index);
    if (smallestIndex !== index) {
      let actualValueArray = copyArr[index];
      copyArr[index] = copyArr[smallestIndex];
      copyArr[smallestIndex] = actualValueArray;
    }
  }
  return copyArr;
};

const ordenatedItems = bubbleSort(ramdomNumbers);

console.log(ordenatedItems);
