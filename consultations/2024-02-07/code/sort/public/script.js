"use strict";
const people = [
    { name: 'a', age: 34 },
    { name: 'b', age: 5 },
    { name: 'c', age: 10 },
    { name: 'd', age: 45 },
    { name: 'e', age: 9 },
];
// sort - мутирующий, то есть он меняет исходный массив
// коллбэк принимает два элемента массива и всегда возвращает число
people.sort((a, b) => {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    // if (a === b) {
    return 0;
});
console.log(people);
