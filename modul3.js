//Задача 1 

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
console.log(user.mood);

user.hobby = 'skydiving';
console.log(user.hobby);

user.premium = false;
console.log(user.premium);

const keys = Object.keys(user)
for (const key of keys) {
    
 console.log(`${key} : ${user[key]}`);
    }


 //Задача 2

const countProps = function(obj) {
 
    const values = Object.values(obj);
    return values.length;
};


console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


//Задача 3


const findBestEmployee = function(employees) {
 
};


console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux


const countTotalSalary = function (employees) {
    const values = Object.values(employees);
    
    let total = 0;
    for (const value of values) {
        total += value;
    };
    return total;
};


console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400


//Задача 5

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
    const values = [];
    for (product of products) {
        if (prop in product) {
            values.push(product[prop]);
        }
    }

    return values;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []


//Задача 6

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function(allProdcuts, productName) {
    let totalPrice = 0;

    for (const product of products) {
        if (productName === product.name)
        totalPrice = product.price * product.quantity;
    }

    return totalPrice;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

function greet(name) {
  consle.log(`Добро пожаловать ${name}.`);
}

function registerGuest(name, callback) {
    console.log(`Регистрируем гостя ${name}.`);
    callback(name);
}

registerGuest("Mango", greet);