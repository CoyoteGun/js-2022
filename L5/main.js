// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sPR = (a , b) => a * b;
console.log(sPR(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const sSircle = (r) => Math.PI * r ** 2;
console.log(sSircle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const sC = (r , h) =>  Math.PI * r ** 2 * h;
console.log(sC(2, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
function printArray(array) {
    for (const arrElement of array) {
        console.log(arrElement);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function par(text) {
    document.write(`<p>${text}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(text) {
    document.write(`<ul>
                         <li>${text}</li>
                         <li>${text}</li>
                         <li>${text}</li>
                    </ul>`);
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
function myPoorHead(text, number) {
    document.write(`<ul>`);
    for (let i = 0; i < number.length; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const massive = function (array) {
    document.write(`<ul>`);
    for (const arrElem of array) {
        document.write(`<li>${arrElem}</li>`);
    }
    document.write(`</ul>`);
}
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const arrmass = [
    {
        id: 1,
        name: 'Pedro',
        age: 24
    },
    {
        id: 2,
        name: 'Taras',
        age: 21
    },
    {
        id: 3,
        name: 'Valera',
        age: 26
    }
]
    const smthUsers = function (array) {
        for (const user of array) {
            document.write(`<div>${user.id} - ${user.name} - ${user.age}</div>`);
        }
    }
smthUsers(arrmass);
// - створити функцію яка повертає найменьше число з масиву

function smNum(array) {
    let minimum = array[0];
    for (const minEl of array) {
        if (minEl < minimum){
            minimum = minEl;
        }
    }
    return minimum;
}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function summ(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}