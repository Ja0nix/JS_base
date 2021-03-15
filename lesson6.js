/*1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида*/

//Вывод и объект каталога
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
    
    catalogСreate() {
        let containerElement = document.getElementById('catalog');
        containerElement.innerHTML = '';
     
        Product.goods.forEach(element => {

            let insertedText = '<div><h2>Название: ' + element.product_name + '</h2><p>Price: ' + element.price + '</p><div id = "' + element.id_product + '">Добавить в корзину</div></div>';

            containerElement.insertAdjacentHTML('afterbegin', insertedText);
        });
      },

  };
 
Product.catalogСreate();

//Вывод и объект корзины
const basket = {
    goods: [
      {
        id_product: 123,
        product_name: "Ноутбук",
        price: 45600,
        quantity: 1,
      }, 
      {
        id_product: 456,
        product_name: "Мышка",
        price: 1000,
        quantity: 3,
      }
    ],

    countBasketPrice() {
      return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    }, 

    countBasketItems() {
        return this.goods.reduce((totaItems, cartItem) => totaItems + cartItem.quantity, 0);
    },

    cartDisplay() {
        const cartDiv = document.getElementById('cart');
    
        if (basket.countBasketItems() == 0) {
            cartDivContent = 'Корзина пуста';
        } else {
            cartDivContent = '<h3>В корзине: ' + basket.countBasketItems() + ' товара на сумму ' + basket.countBasketPrice() +' рублей</h3>';
    }
    cartDiv.insertAdjacentHTML('afterend', cartDivContent);

    basket.goods.forEach(element => {

        let insertedText = '<div><h2>Название: ' + element.product_name + '</h2><p>Цена: ' + element.price + '</p><p>Количество: ' + element.quantity + '</p></div>';

        cartDiv.insertAdjacentHTML('afterbegin', insertedText);
    });
    },

    initEventHandlers() {
        debugger;
        document.getElementById('catalog').addEventListener('click', function (event) {
           //console.log(event.target.id);
           this.goods.forEach(element => {
                if (element.id_product == event.target.id) {
                    element.quantity += 1;
                }
           });
        }.bind(this));

        this.cartDisplay();
    },

    init() {
        this.initEventHandlers();
    },
}

basket.init();