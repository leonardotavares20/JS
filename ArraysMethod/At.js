const array1 = [5, 12, 8, 130, 44];

//O metodo 'at' retorna o elemento do index selecionado entao por exemplo se vc passar o index 2 ele retorna o item do index 2 do array selecionado

const index = 3;

const result = array1.at(index);

console.log(result);

//Quando o index passado é negativo ele retorna o index reverso, ou seja o ultimo item, entao se fosse -2 ele retorna o penultimo item pq quando é negativo ele pega os items de tras pra frente

const implementarAt = (arr, position) => {
  const result = arr.at(position);

  return result;
};

let myArray = [10, 20, 30, 40, 50];

let position = -1;
let elemento = implementarAt(myArray, position);

console.log(`O elemento na posição ${position} é: ${elemento}`);

//Pegando o ultimo item

const cart = ["Banana", "Apple", "Orange"];

let positionCart = -3;

const lastItemCart = cart.at(positionCart)

console.log(lastItemCart)
