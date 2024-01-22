const cats = [
  {
    name: 'Sima',
    age: 10,
    gender: 'female',
  },
  {
    name: 'Alisa',
    age: 5,
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

// filter - [🙂, 🙂, 😟] => [🙂, 🙂]
// map - [🙂, 🙂, 🙂] => [😟, 😟, 😟]
// reduce - [🙂, 🙂, 😟] => 😟 либо 10 либо что-то одно единственное
// forEach - [🙂, 🙂, 😟] => undefined

// если массив numbers пустой
// const sum = numbers.reduce((acc, el) => acc + el, 0)
// const product = numbers.reduce((acc, el) => acc * el, 1)

// вывести на экран самого молодого котика
// const youngCat = cats.reduce((acc, cat) => {
//   if (acc === undefined) {
//     return cat;
//   } else if (cat.age < acc.age) {
//     return cat;
//   } else {
//     return acc;
//   }
// }, undefined);

const youngCat = cats.reduce(
  (acc, cat) => (acc === undefined ? cat : cat.age < acc.age ? cat : acc),
  undefined
);

console.log(youngCat);

// 1: acc = undefined, cat = { name: 'Sima', age: 10, ... }, return { name: 'Sima', age: 10, ... }
// 2: acc = { name: 'Sima', age: 10, ... }, cat = { name: 'Alisa', age: 5, ... }
// 3: acc = { name: 'Alisa', age: 5, ... }, cat = { name: 'Kasper', age: 9, ... }
// 4: acc = { name: 'Alisa', age: 5, ... }, cat = { name: 'Marusya', age: 15, ... }
// acc = { name: 'Alisa', age: 5, ... }
