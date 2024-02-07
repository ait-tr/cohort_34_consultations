import { Product } from "./types/Product";
import { User } from "./types/User";

// создать массив из 5 произвольных товаров
const products:Product[] = [
    {title: "велосипед", price: 2300, count: 12, discount: 15},
    {title: "ролики", price: 700, count: 5},
    {title: "самокат", price: 850, count: 0, discount: 5},
    {title: "лыжи", price: 1200, count: 0, discount: 10},
    {title: "коньки", price: 550, count: 2}
];

// создать функцию getProduct, которая получает название товара и 
// возвращает объект с данными продукта

// getProduct("лыжи") -> {title: "лыжи", price: 1200, count: 7, discount: 10}

function getProduct(title: string): Product | undefined{
    return products.find((product:Product):boolean => product.title === title);
}

function getProductWithZeroCount():Product[]{
    return products.filter((product:Product):boolean => product.count === 0);
}


console.log(getProduct("лыжи"));
console.log(getProduct("сноуборд"));
console.log(getProductWithZeroCount());

// создать функцию getProductsWithRealPrice, которая возвращает 
// массив из продуктов с полями title, price (цена с учетом скидки)
type ShortProduct = { title: string, price: number };

const getProductWithRealPrice = (product: Product): ShortProduct => {
  // из каждого продукта берём скидку
  // const discount: number = product.discount === undefined ? 0 : product.discount;
    
  // оператор нулевого сравнения
  // если операнд слева undefined или null то возвращает операнд справа
  const discount: number = product.discount ?? 0;

  return {
    title: product.title,
    price: product.price - discount / 100 * product.price
  }
};

function getProductsWithRealPrice(): ShortProduct[]{
  // превращаем массив продуктов в массив тех же продуктов, но с применёнными скидками
  const result: ShortProduct[] = products.map(getProductWithRealPrice);

  return result
}

console.log(getProductsWithRealPrice());

// {title: "велосипед", price: 2300, count: 12, discount: 15},
// {title: "ролики", price: 700, count: 5},