// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 24;
if (x !== 0){
    console.log(true);
}else {
    console.log(false);
}
/*==========================*/
// let a = 1;
// if (a !== 0){
//     console.log(true);
// }else {
//     console.log(false);
// }
//
// let a = 0;
// if (a !== 0){
//     console.log(true);
// }else {
//     console.log(false);
// }
//
// let a = -3;
// if (a !== 0){
//     console.log(true);
// }else {
//     console.log(false);
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('choose a number from 0 to 59');
if (time <= 15){
    console.log('1 part');
}else if (time > 15 && time <= 30){
    console.log('2 part');
}else if (time > 30 && time <= 45){
    console.log('3 part');
}else if (time > 45 && time <= 59){
    console.log('4 part');
}else{
    console.log(false);
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('put the number from 1 to 31');
if (day >= 1 && day <= 11){
    console.log('1 part');
}else if (day > 11 && day < 21){
    console.log('2 part');
}else if (day >= 21 && day <= 31){
    console.log('3 part');
}



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let schedule = +prompt('Number of day');

switch (schedule) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('????????');
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let n1 = +prompt('put a number');
let n2 = +prompt('put second number');
let numSum = confirm('Is the n1 < n2');
switch (numSum){
    case n1 < n2:
        console.log(n2);
        break;
    case n1 > n2:
        console.log(n1);
        break;
    case n1 === n2:
        console.log('n1 = n2');
        break;
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xx = prompt() || 'default';
console.log(xx);

