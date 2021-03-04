//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let count = 2;
let numbers = [];
while (count < 100) {
    if (count == 2 || count == 3 || count == 5 ||count == 7) {
        numbers.push(count);
    }
    if (count % 2 != 0 && count % 3 != 0 && count % 5 != 0 && count % 7 != 0) {
        numbers.push(count);
    }
    count++;
}
console.log(numbers);


/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

let cart = [
    ['item1', 560, 3],
    ['item2', 320, 2],
    ['item3', 180, 1]
]

function countBasketPrice(cart) {
    let totalSum = 0;
    cart.forEach(item => {
        let itemSum = item[1] * item[2];
        totalSum = totalSum + itemSum;
    });
    return totalSum;
}

console.log(countBasketPrice(cart));