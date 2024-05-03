const arr = [1, 2, 3, 5, 4, 9, 5, 10, 7];

const isEven = (x) => {
  if (x % 2 === 0) {
    return x;
  }
};

const numbersEven = arr.filter((number) => {
  return number % 2 === 0;
});

console.log(numbersEven);
