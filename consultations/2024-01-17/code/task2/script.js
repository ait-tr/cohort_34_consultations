// найти индекс первого отрицательного числа
const arr = [1, -10, 21, 0, 1, 6, -11];

let index;

// цикл с счётчиком
for (let i = 0; i < arr.length; i++) {
  // i - индекс
  // arr[i] - элемент массива по этому индексу
  if (arr[i] < 0) {
    index = i;
    // прекратить выполнение цикла
    break;
  }
}

console.log('Найденный индекс: ' + index);