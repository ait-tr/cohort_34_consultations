// Определите, каких чисел в массиве больше: которые делятся на первый элемент массива или которые делятся на последний элемент массива.
const arr = [5, -10, 21, 4, 1, 6, 2];

let dividedByFirst = 0;
let dividedByLast = 0;

for (const item of arr) {
  if (item % arr[0] === 0) {
    dividedByFirst++;
  }
  // if (item % arr[arr.length - 1] === 0) {
  // arr.at(-1) - последний элемент массива
  if (item % arr.at(-1) === 0) {
    dividedByLast++;
  }
}

console.log('dividedByFirst', dividedByFirst);
console.log('dividedByLast', dividedByLast);

if (dividedByFirst > dividedByLast) {
  console.log('Элементов, которые делятся на первый элемент больше');
} else if (dividedByLast > dividedByFirst) {
  console.log('Элементов, которые делятся на последний элемент больше');
} else {
  console.log(
    'Элементов, которые делятся на последний и первый элемент по ровну'
  );
}
