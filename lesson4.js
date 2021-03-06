/*1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

function numberToObject(num) {
    if(num > 999) {
        console.log('Число превышает 999');
        return {};
    }
    num = num.toString();
    let a = num[num.length - 1];
    let b = num[num.length - 2];
    let c = num[num.length - 3];
    if(num.length < 3) {b = 0;}
    if(num.length < 2) {c = 0;}
    let obj = {
        'единицы': a, 
        'десятки': b, 
        'сотни': c
    }
    
    return obj;
}


/*2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

//Корзина с объектами в ней
let cart = [
    {
        name: 'item1',
        price: 180,
        amount: 2
    },
    {
        name: 'item2',
        price: 200,
        amount: 3
    }
]

// подсчет итоговой суммы
let sum = 0;
for(item in cart)
    {
      sum += cart[item].price * cart[item].amount;
    }
console.log(sum);

// или подсчет суммы итоговой в виде функции
function totalSum(cart) {
    let sum = 0;
    for(item in cart)
        {
        sum += cart[item].price * cart[item].amount;
        }
    return sum;
}

// Реализация преподавателя именно корзины как объекта + использование reduce

const basket = {
    goods: [
      {
        id_product: 123,
        product_name: "Ноутбук",
        price: 45600,
        quantity: 1
      },
      {
        id_product: 456,
        product_name: "Мышка",
        price: 1000,
        quantity: 3
      }
    ],
    countBasketPrice() {
      return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    }
  };

  console.log(basket.countBasketPrice());