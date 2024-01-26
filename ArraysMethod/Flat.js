// O metodo flat achata um array se ele tiver 1 ou mais arrays dentro de um array, ele nao altera o array original e retorna um novo array

const arr = [0, 1, 2, [3, 4]];

const flatArr = arr.flat();

console.log(flatArr);

var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8]

//O metodo tbm remove espaços vazios em um array

var arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
