'use strict';

/* 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%,
можете использовать метод forEach https://mzl.la/1AOMMWX : */

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let products_discounted = [];

products.forEach(function (product) {
    for (let property in product) {
        if (property == "price") {
            product[property] *= 0.85;
            products_discounted.push(product);
        }
    }
});

console.log(products_discounted);