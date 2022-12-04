// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let a = 'hello world';
console.log(a.length);
let b = 'lorem ipsum';
console.log(b.length);
let c = 'javascript is cool';
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let upper = 'hello world';
console.log(upper.toUpperCase());
let upperCase = 'lorem ipsum';
console.log(upperCase.toUpperCase());
let upperCs = 'javascript is cool';
console.log(upperCs.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let uper = 'HELLO WORLD';
console.log(uper.toLowerCase());
let uperCase = 'LOREM IPSUM';
console.log(uperCase.toLowerCase());
let uperCs = 'JAVASCRIPT IS COOL';
console.log(uperCs.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let string = 'Ревуть воли як ясла повні';
let arr = string.split(' ');
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let array = [10,8,-7,55,987,-1011,0,1050,0];
let toStr = array.map(value => value.toString());
console.log(toStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

const  numNum = (direction, mass) => {
    if (direction === 'ascending') {
        mass.sort((a , b) => a - b);
    }else if (direction === 'descending'){
        mass.sort((a , b) => b - a);
    }
    return mass;
}
console.log(numNum('ascending', nums));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a1, b1) =>  b1.monthDuration - a1.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);


// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const deckCard = [
    {cardSuit:'spade' ,color:'black'},
    {cardSuit:'diamond' ,color:'red'},
    {cardSuit:'heart' ,color:'red'},
    {cardSuit:'clubs' ,color:'black'}
]
const valueOfCard = [6,7,8,9,10,'ace','jack','queen','king'];
const deck =[];

for (const deckItem of deckCard) {
    for (const valueCard of valueOfCard) {
        const card = {
            cardSuit: deckItem.cardSuit,
            value: valueCard,
            color: deckItem.color
        }
        deck.push(card);
    }
}
deck.push({cardSuit: 'joker', value: 'strong', color: 'red'});
deck.push({cardSuit: 'joker', value: 'strong', color: 'black'});

// - знайти піковий туз
let spadeAce = deck.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(spadeAce);
// - всі шістки
let f6 = deck.filter(value => value.value === 6);
console.log(f6);
// - всі червоні карти
let redCard = deck.filter(value => value.color === 'red');
console.log(redCard);
// - всі буби
let diamondCard = deck.filter(value => value.cardSuit === 'diamond');
console.log(diamondCard);
// - всі трефи від 9 та більше
let clubsCard = deck.filter(value => (value.cardSuit === 'clubs' && value.value >= 9) ||
    (value.cardSuit === 'clubs' && typeof value.value === 'string'));
console.log(clubsCard);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    }else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    }else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    }else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
},{
    spades: [],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(reduce);


