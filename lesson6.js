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
      }, 
      {
        id_product: 421,
        product_name: "Тестовый",
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
        quantity: 0,
      }, 
      {
        id_product: 456,
        product_name: "Мышка",
        price: 1000,
        quantity: 0,
      }
    ],

    countBasketPrice() {
      return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
    }, 

    countBasketItems() {
        return this.goods.reduce((totaItems, cartItem) => totaItems + cartItem.quantity, 0);
    },

    cartDisplay() {
        this.basketTextDisplay();
        this.basketItemsDisplay();
    },

    basketItemsDisplay() {
        if (basket.countBasketItems() != 0) {
        const itemsDiv = document.getElementById('itemsDiv');
    
        basket.goods.forEach(element => {
            if(element.quantity > 0) {
                let insertedText = '<div><h2>Название: ' + element.product_name + '</h2><p>Цена: ' + element.price + '</p><p>Количество: ' + element.quantity + '</p></div>';
                itemsDiv.insertAdjacentHTML('afterbegin', insertedText);
            }
        });
    }
        
    },
    
    basketTextDisplay() {
        const basketText = document.getElementById('basketText');
    
        if (basket.countBasketItems() == 0) {
            basketTextContent = 'Корзина пуста';
            basketText.innerHTML = basketTextContent;
        } else {
            basketTextContent = '<h3>В корзине: ' + basket.countBasketItems() + ' товара на сумму ' + basket.countBasketPrice() +' рублей</h3><button id = "delete">Очистить корзину</button>';
            basketText.innerHTML = basketTextContent;
            this.deleteItemsFromCart();
        }
    },

    clearBasket() {
        const itemsDiv = document.getElementById('itemsDiv');
        itemsDiv.innerText = '';

        const basketText = document.getElementById('basketText');
        basketText.innerHTML = 'Корзина пуста';
    },

    deleteItemsFromCart() {
        document.getElementById('delete').addEventListener('click', this.clearBasket.bind(this)); 
    },

  
    initEventHandlers() {
        document.getElementById('catalog').addEventListener('click', function (event) {
           //console.log(event.target.id);
           let isInGoods = this.goods.find(item => item.id_product == event.target.id);

           if (isInGoods) {
            this.goods.forEach(element => {
                if (event.target.id == element.id_product) {
                    this.clearBasket();
                    element.quantity += 1;
                    this.cartDisplay();
           
                    } 
                })
            } else {
                    this.clearBasket();

                    let newItem = Product.goods.find(item => item.id_product == event.target.id);

                    this.goods.push({
                        id_product: newItem.id_product,
                        product_name: newItem.product_name,
                        price: newItem.price,
                        quantity: 1,
                    });

                    this.cartDisplay();
            }
           
        }.bind(this));
    },

    init() {
        this.cartDisplay();  //первоначально вызывем, потом хэнделер перерисовывает элементы
        this.initEventHandlers();
    },
}

basket.init();