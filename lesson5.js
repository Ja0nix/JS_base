/*1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. */

// схема работы:
// создать поле 9х9
// закрасить черным часть клеток
// расставить цифры
// расставить буквы

// создаем поле 9х9
function initCells() {
    let containerElement = document.getElementById('field');
    containerElement.innerHTML = '';
    let cellElements = [];

    for (let row = 0; row < 9; row++) {
        const tr = document.createElement('tr');
        containerElement.appendChild(tr);

        for (let col = 0; col < 9; col++) {
            const td = document.createElement('td');
            tr.appendChild(td);

            cellElements.push(td);
        }
    }
};

// закрашиваем черным часть клеток и оставляем по справа и снизу поля для подписей
function darkCellColor() {
    for (let row = 1; row < 9; row++) { // закрашиваем только 8 рядов, нижний для подписи
        if (row%2===0) {  // для чередования структуры закраса отдельно четные и нечетные ряды берем
            for (let count = 1; count < 8; count++) { // 8, потому что 9-ый нам для подписей остался
                let darkCell = document
            
                .querySelector('tr:nth-child(' + (row) + ')')
                        .querySelector('td:nth-child(' + (count + 1) + ')');
            
                darkCell.style.backgroundColor = '#000';
                count++; //каунт и тут тоже увеличиваем, чтобы пропустить 1 клетку
            }
        } else {
            for (let count = 1; count < 9; count++) {
                let darkCell = document
            
                .querySelector('tr:nth-child(' + (row) + ')')
                        .querySelector('td:nth-child(' + (count) + ')');
            
                darkCell.style.backgroundColor = '#000';
                count++;
            }
        }
    }
    
};

// функция для расстановки цифры
function cellNumber() {
    for (let row = 1; row < 9; row++) { 
            for (let count = 1; count < 8; count++) { 
                let numberell = document
            
                .querySelector('tr:nth-child(' + (row) + ')')
                        .querySelector('td:last-child');
            
                numberell.textContent = row;
            }
        } 
};

// функция для расстановки буквы
function cellLetters() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        for (let col = 1; col < 9; col++) { 
            let numberell = document
        
            .querySelector('tr:last-child')
                    .querySelector('td:nth-child(' + (col) + ')');
        
            numberell.textContent = letters[col - 1];
        }
};


// вызываем все функции подряд
initCells(); //выводим поле 9х9
darkCellColor(); //закрашиваем черным
cellNumber(); //добавляем цифры
cellLetters(); // расставляем буквы


/*3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

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
    },
    countBasketItems() {
        return this.goods.reduce((totaItems, cartItem) => totaItems + cartItem.quantity, 0);
      }
  };

 // console.log(basket.countBasketItems());

function cartDisplay() {
    const cartDiv = document.getElementById('cart');

    if (basket.countBasketItems() == 0) {
        cartDiv.textContent = 'Корзина пуста';
    } else {
        cartDiv.textContent = 'В корзине: ' + basket.countBasketItems() + ' товара на сумму ' + basket.countBasketPrice() +' рублей';
    }
};
cartDisplay();

/*
4*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
4.1. Создать массив товаров (сущность Product);
4.2. При загрузке страницы на базе данного массива генерировать вывод из него. 
HTML-код должен содержать только div id=”catalog” без вложенного кода. 
Весь вид каталога генерируется JS.*/

const Product = {
    goods: [
      {
        id_product: 123,
        product_name: "Ноутбук",
        price: 45600
      },
      {
        id_product: 456,
        product_name: "Мышка",
        price: 1000
      }
    ],
    //тут будут какие-то методы для каталога
  };
 
  //функция для вывода всех продуктов из объекта 
  // вывела название и цену продукта
  function catalogСreate() {
    let containerElement = document.getElementById('catalog');
    containerElement.innerHTML = '';
 
    Product.goods.forEach(element => {
        const productDiv = document.createElement('div'); //каждому продукту свой див
        containerElement.appendChild(productDiv);

        const name = document.createElement('h2');
        productDiv.appendChild(name);
        name.textContent = 'Название: ' + element.product_name;

        const price = document.createElement('p');
        productDiv.appendChild(price);
        price.textContent = 'Price: ' + element.price;
    });
  };
  catalogСreate();
