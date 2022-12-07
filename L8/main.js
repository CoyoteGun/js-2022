// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this. email =  email;
    this.phone = phone;
}

let user1 = new User(1, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647 );
let user2 = new User(2, 'Dvayne', 'Depp', 'jjdepp@gmail.com', 235682647 );
let user3 = new User(3, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647 );
let user4 = new User(4, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647 );
let user5 = new User(5, 'Jack', 'Depp', 'jjdepp@gmail.com', 235682647 );
let user6 = new User(6, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647 );
let user7 = new User(7, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647 );
let user8 = new User(8, 'Rayan', 'Depp', 'jjdepp@gmail.com', 235682647 );
let user9 = new User(9, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647 );
let user10 = new User(10, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647 );
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const allUsers = [];
allUsers.push(user1, user2, user3, user4, user5 ,user6, user7, user8, user9, user10);
let filter = allUsers.filter(value => value.id % 2 === 0);
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = allUsers.sort((a, b) => b.id - a.id );
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this. email =  email;
        this.phone = phone;
        this.order = order;
    }
}

const user11 = new Client(1, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647, [1,2,3,4,5]);
const user22 = new Client(2, 'Dvayne', 'Depp', 'jjdepp@gmail.com', 235682647, [1,2,3,4,5,6,7,8]);
const user33 = new Client(3, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647, [1,2,3,4]);
const user44 = new Client(4, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647, [1,2,3,4,5,6,7,8,9,10]);
const user55 = new Client(5, 'Jack', 'Depp', 'jjdepp@gmail.com', 235682647, [1,2,3,4,5,6]);
const user66 = new Client(6, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647, [1,2,3,4,5,6,7]);
const user77 = new Client(7, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647, [1,2,3]);
const user88 = new Client(8, 'Rayan', 'Depp', 'jjdepp@gmail.com', 235682647, [1,2,3,4,5,6,7,8,9]);
const user99 = new Client(9, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647, [1]);
const user100 = new Client(10, 'Johney', 'Depp', 'jjdepp@gmail.com', 235682647, [1,2,3,4,5,6,7,8,9,10,11]);

const allArr = [];
allArr.push(user11, user22, user33, user44, user55 ,user66, user77, user88, user99, user100);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(allArr.sort((a, b) => a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function fastAndFurios(model, producer, year, maxSpeed, engineW) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineW = engineW;

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const carInfo in this) {
            if (typeof this[carInfo] !== 'function'){
                console.log(`${carInfo} - ${this[carInfo]}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue){
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const fast = new fastAndFurios('Audi', 'Germany', 2017, 300, 3.0);
console.log(fast);
fast.drive();
fast.info();
fast.increaseMaxSpeed(24);
fast.changeYear(2021);
fast.addDriver({name: 'August'},{surname: 'Gorh'});
console.log(fast);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class fastFurios {
    constructor(model, producer, year, maxSpeed, engineW) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineW = engineW;
    }

    drive(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        for (const carInfo in this) {
            if (typeof this[carInfo] !== 'function'){
                console.log(`${carInfo} - ${this[carInfo]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed){
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue){
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const fastF = new fastFurios('Audi', 'Germany', 2017, 300, 3.0);
console.log(fastF);
fastF.drive();
fastF.info();
fastF.increaseMaxSpeed(24);
fastF.changeYear(2021);
fastF.addDriver({name: 'August'},{surname: 'Gorh'});
console.log(fastF);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, sizeFoot) {
    this.name = name;
    this.age = age;
    this.sizeFoot = sizeFoot;
}
const cin1 = new Cinderella('Margo', 19, 34);
const cin2 = new Cinderella('Olga', 29, 38);
const cin3 = new Cinderella('Iryna', 20, 39);
const cin4 = new Cinderella('Marry', 30, 38);
const cin5 = new Cinderella('Lara', 18, 35);
const cin6 = new Cinderella('Olena', 21, 37);
const cin7 = new Cinderella('Naomi', 22, 38);
const cin8 = new Cinderella('Lera', 24, 40);
const cin9 = new Cinderella('Viktoria', 31, 40);
const cin10 = new Cinderella('Scarlet', 27, 39);

const cindArr = [];
cindArr.push(cin1,cin2,cin3,cin4,cin5,cin6, cin7,cin8,cin9,cin10);

class Prince{
    constructor(name, age, shoeFind) {
        this.name = name;
        this.age = age;
        this.shoeFind = shoeFind;
    }
}

const prince = new Prince('Johney', 24, 37);

const cinderFind = (array, man) => {
    for (const element of array) {
        if (element.sizeFoot === man.shoeFind){
            console.log(`Cinderella ${element.name} was find`);
        }
    }
}

cinderFind(cindArr, prince);