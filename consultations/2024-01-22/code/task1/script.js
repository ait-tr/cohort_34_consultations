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

// вывести имена всех девочек

// массив кошечек
// const females = cats.filter(({ gender }) => gender === 'female');
// const females = cats.filter((c) => c.gender === 'female');

// массив имён кошечек
// const femalesNames = females.map(({ name }) => name);
// console.log(femalesNames);

cats
  .filter((c) => c.gender === 'female')
  .forEach(({ name }) => console.log(name));
