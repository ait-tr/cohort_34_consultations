const cats = [
  {
    name: 'Alisa',
    age: 5,
    gender: 'female',
  },
  {
    name: 'Sima',
    age: 10,
    gender: 'female',
  },
  {
    name: 'Kasper',
    age: 9,
    gender: 'male',
  },
  {
    name: 'Marusya',
    age: 15,
    gender: 'female',
  },
];

// filter - отфильтровать массив (выкинуть лишние элементы)
// map - преобразовать каждый элемент массива
// reduce - получить некое аккумулированное значение из массива (сумма, минимум, максимум и т.д.)
// forEach - выполнить какое-то действие (при этом нам не нужен новый массив)

// получить массив объектов {name: '...', age: 15}, только девочек
const females = cats
  .filter((c) => c.gender === 'female')
  // так как возвращаем объект оборачиваем его в круглые скобки
  .map((c) => ({
    name: c.name,
    age: c.age,
  }));

console.log(females);
