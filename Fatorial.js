function fat(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * fat(x - 1);
  }
}

const fatorial = fat(3);

console.log(fatorial);
