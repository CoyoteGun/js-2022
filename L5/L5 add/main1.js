// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function threeN(a, b, c) {
    if (a > b && b < c) {
        console.log(b);
    }else if (a < b && a < c) {
        console.log(a);
    }else if (c < a && c < b){
        console.log(c);
    }else {
        'error'
    }
}

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function threeNum(a, b, c) {
    if (a < b && b > c) {
        console.log(b);
    }else if (a > b && a > c) {
        console.log(a);
    }else if (c > a && c > b){
        console.log(c);
    }else {
        console.log('error');
    }
}

// - створити функцію яка повертає найбільше число з масиву

const max = (array) => {
    let max = array[0];
    for (const item of array) {
        if (item > max) {
            max = item
        }
    }
    return max;
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function middleValue(array) {
    let sum = 0;
    for (const arrayEl of array) {
        sum += arrayEl;
    }
    return sum/array.length;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function maxmin(...arguments) {
    let min = arguments[0];
    let maxval = arguments[0];
    for (const item of arguments) {
        if (item > maxval){
            maxval = item;
        }
        if (item < min){
            min = item;
        }
    }
    console.log(maxval);
    return min;
}

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arrow = [];
function fillArr(array) {
    for (let i = 0; i < 24; i++) {
        arrow[i] = Math.floor(Math.random()*100);
    }
    console.log(arrow);
}

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let arro = [];
function fillArrow(limit) {
    for (let i = 0; i < limit; i++) {
        arro[i] = Math.floor(Math.random()*100);
    }
    console.log(arro);
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const row = [1, 2, 3]
function newArr(array) {
    let newMass = [];
    for (let i = array.length - 1, q = 0; i >= 0; i--) {
        newMass[q++] = array[i];
    }
    return newMass;
}

console.log(newArr(row));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
const arg = (...arguments) => arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
let arg1 = arg('hello');
console.log(arg1);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
const a = [1,2,3,4];
const b = [4,3,2,1];
function sum(array1, array2) {
    let newArrays = [];
    let newAr = array1.length >= array2.length ? array1 : array2;
    for (let i = 0; i < newAr.length; i++) {
        newArrays[i] = (array1[i] || 0) + (array2[i] || 0)
    }
    return newArrays;
}

