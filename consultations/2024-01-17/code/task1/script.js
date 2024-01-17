// так как мы не собираемся переопределять массив arr, используем const
const arr = [1, -10, 21, 0, 1, 6, -11];

let sum = 0;
for (const item of arr) {
  // считаем сумму только положительных чётных чисел
  if (item > 0 && item % 2 === 0) {
    sum += item;
  }
}

console.log(sum);
