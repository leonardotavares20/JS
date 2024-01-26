
// Se qualquer valor dentro do array independente se for decimal ou nao for igual a 7, retorne 'boom', senao retorne outra string

const fnBoom = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const numAsString = Math.abs(arr[i]).toString();
    
    if (numAsString.includes("7")) {
      return `Boom! O número 7 está no índice ${i} do array.`;
    }
  }
  return "There is no 7 in the array.";
};

const fnSeven = /7/.test(arr) ? "Boom" : "No 7";

const fnResult = fnSeven([8, 4, 3, 100]);

console.log(fnResult);






// const fnTest = (arr) => {
//   let valueFinal = 0;
//   for (let value of arr) {
//     if (value) {
//       valueFinal = valueFinal + 1;
//     }
//   }
//   return valueFinal;
// };

// const value = fnTest([true, false, false, true]);

// console.log(value);