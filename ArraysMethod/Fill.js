//O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.

// [1, 2, 3].fill(4); // [4, 4, 4]s
// [1, 2, 3].fill(4, 1); // [1, 4, 4]
// [1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
// [1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
// [1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
// [1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
// Array(3).fill(4); // [4, 4, 4]
// [].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// arr.fill(valor[, ínicio = 0[, fim = this.length]])

const arr = [1, 2, 3];

//Primeiro vem o valor a ser preenchido, depois os indices, se o indice for negativo ele le os indices de tras pra frente
//Esse metodo altera o array original

const newArrOne = arr.fill(4, -2);
// const newArrTwo = arr.fill(4, 0, 1)
// const newArrThree = arr.fill(4)
// const newArrFour = arr.fill(3, 0)

//Os dois resultados sao iguais pq o array original foi alterado

console.log(arr);

console.log(newArrOne);
// console.log(newArrTwo)
// console.log(newArrThree)
// console.log(newArrFour)
