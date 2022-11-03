// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [];
arr[0] = true;
arr[1] = 24;
arr[2] = 'hello';
arr[3] = [76,14,63];
arr[4] = 'boolean';
arr[5] = "the best";
arr[6] = typeof 11;
arr[7] = false;
arr[8] = `object`;
arr[9] = [666];
console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1 = {
    title: 'White Fang',
    pageCount: 347,
    genre: 'detective',
    authors: [
        {name: 'Jack', age: 99}
    ]
}
console.log(book1);

let book2 = {
    title: 'Emotions',
    pageCount: 100,
    genre: 'classic',
    authors: [
        {name: 'Lionel', age: 55}
    ]
}
console.log(book2);

let book3 = {
    title: 'Crummy Week',
    pageCount: 215,
    genre: 'fantasy',
    authors: [
        {name: 'Mohamed', age: 34}
    ]
}
console.log(book3);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let bigArr = [
    {name:'jack', surname: 'jo', password: '123qwe'},
    {name:'bob', surname: 'b', password: '123asd'},
    {name:'lekro', surname: 'l', password: '123zxc'},
    {name:'van', surname: 'v', password: '321qwe'},
    {name:'taras', surname: 't', password: '321qwe'},
    {name:'wild', surname: 'w', password: '321qwe'},
    {name:'mark', surname: 'm', password: '54gv75'},
    {name:'frank', surname: 'f', password: 'w745we'},
    {name:'george', surname: 'g', password: 'we4g64'},
    {name:'hank', surname: 'h', password: '76i4n'}
]
console.log(bigArr[0].password);
console.log(bigArr[1].password);
console.log(bigArr[2].password);
console.log(bigArr[3].password);
console.log(bigArr[4].password);
console.log(bigArr[5].password);
console.log(bigArr[6].password);
console.log(bigArr[7].password);
console.log(bigArr[8].password);
console.log(bigArr[9].password);