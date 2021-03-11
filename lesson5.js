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

initCells(); //выводим поле 9х9
darkCellColor(); //закрашиваем черным

//document.addEventListener('DOMContentLoaded', function () {
//    initCells();
//});

/*3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/