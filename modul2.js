
//Задача 1

const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
      console.log(`${[i + 1]} - ${array[i]}`);
  }
};


logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


//Задача 2

const calculateEngravingPrice = function(message, pricePerWord) {
    let total = 0;

    const string = message.split(' ').length;

    total = string * pricePerWord;

    console.log(total);
};


console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus', 10,),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus', 20),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120


//Задача 3


const findLongestWord = function (string) {

    //const string = 'Google do a roll' эта строка приходит в переменную string параметром при вызове ф-ции

    const array = string.split(' ');//в переменную array я записываю строку превращенную в массив
    console.log(array);//['Google', 'do', 'a', 'roll']

    let longestWord = '';//здесь будет лежать самое длинное слово

    for (const word of array) {
        if (word.length > longestWord.length ) {
            longestWord = word;
        }
    }
    return longestWord;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'



//Задача 4

const formatString = function(string) {

    const maxLength = 40;

    const stringSplite = string.split('');

    if (stringSplite.length > maxLength) {

        const stringSlice = stringSplite.slice(0, 40);

        stringSlice.push('...');

        console.log(stringSlice.join(''));

    } else {
        console.log(string);
    }

};



/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',),);

//Задача 5

const checkForSpam = function (message) {
    return (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale'));
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//Задача 6

let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Enter a number:");
    numbers.push(Number(input));
} while (input !== null);


if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
}

console.log(`Общая сумма чисел равна ${total}`);
