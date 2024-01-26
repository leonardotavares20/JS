//copyWithin substitui um elemento selecionado por outro item do propio array, esse metodo altera o array original, mas ele nunca estende o array

//Ele pode receber tres argumentos
// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start, end)

const foods = ["Banana", "Apple", "Orange", "Pear", "Melon"];

// foods.copyWithin(0, 2);

foods.copyWithin(0, 1, 3);

console.log(foods);

//Com valores negativos ele pega os primeiros e substitui os ultimos

console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

//Vai substituir dois index no array sendo lido de tras pra frente, no caso os numeros 4 e 5, q no caso sao as ultimas posicoes
//E a partir do index 3; pq quando o valor é negativo ele ignora o index 0, pega o numero 3 que é o numero lido de tras pra frente
//E seleciona ate o index 1 lido de tras pra frente que no caso é o 5, entao ele pega os numeros 3 e 4
//E substitui os dois numeros finais pegando os numeros 3 e 4

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
