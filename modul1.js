//Задача 1

Обьявляем переменые
const name = 'Генератор защитного поля';
let price = 2000;
const message = `Выбран ${name}, цена за штуку ${price} кредитов`;

console.log(message);

//Задача 2

const total = 100;
const ordered = 150;

if (ordered <= 100) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else if (ordered >= 100) {
    console.log('На складе недостаточно твоаров!')
}

//Задача 3

let message;

const ADMIN_PASSWORD = 'jqueryismyjam';

result = prompt('Введите пароль', '');

if (result === null) {
    message = 'Отменено пользователем!';
} else if (result === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';

}

alert(message);

//Задача 4

const credits = 23580;
const pricePerDroid = 3000;
const CANCEL = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';
let message;

result = prompt('Кол-во дроидов', '');

let totalPrice = result * pricePerDroid;
let differencePrice = credits - totalPrice;

if (result === null) {
    console.log(CANCEL);
} else if (differencePrice >= 0) {
    message = `Вы купили ${result} дроидов, на счету осталось ${differencePrice} кредитов.`
} else {
    message = ACCESS_DENIED;
}

console.log(message);
// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// Задача 5
                                         
let cost;

const country = prompt('Ведите название страну', '');


switch (country.toLowerCase()) {
    case 'china':
        cost = 100;
        break;
    
     case 'chile':
        cost = 250;
        break;
    
     case 'australia':
        cost = 170;
        break;
    
     case 'india':
        cost = 80;
        break;
    
     case 'jamaica':
        cost = 120;
        break;
    
    default:
        console.log('В вашей стране доставка не доступна');
}

console.log(`Доставка в ${country} будет стоить ${cost} кредитов`)

//Задача 6

let input;
let total = 0;


const result = prompt('Введите число', '');

for (let i = 0; i <=input; i += 1) {
    total += result;

};

console.log(total);

if (result) {
    for (let i = 0; i < input; i += 1) {
    total += result;
    
    };
} else if (result === null) {
    alert(`Общая сумма чисел равна ${total}`);
}