//O método estático Array.fromAsyncArray.fromAsync() cria uma nova instância de Array copiada superficialmente a partir Array um objeto iterável, iterável ou semelhante a uma matriz assíncrona.

//Array.fromAsync() itera o iterável assíncrono de uma forma muito semelhante ao for await...of. Array.fromAsync()() é quase equivalente a Array.from() em termos de comportamento, exceto o seguinte:

// Array.fromAsync() manipula objetos iteráveis assíncronos.
// Array.fromAsync() retorna uma Promise que atende à instância da matriz.
// Se Array.fromAsync() for chamado com um objeto iterável não assíncrono, cada elemento a ser adicionado à matriz será aguardado primeiro.
// Se um mapFn for fornecido, sua entrada e saída serão aguardadas internamente.

const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]

Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ])
).then((array) => console.log(array));
// [[1, 2], [3, 4]]

Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]

function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2)
).then((array) => console.log(array));
// [2, 4, 6]
