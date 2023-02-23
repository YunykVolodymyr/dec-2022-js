//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
users.push(new User(6, 'Ivanna', 'Vit', 'vit@gmail.com', '+38044838795'));
users.push(new User(0, 'Ivan', 'Shevchenko', 'shevchenko@gmail.com', '+380505339143'));
users.push(new User(7, 'Artem', 'Bily', 'bily@gmail.com', '+380669482492'));
users.push(new User(1, 'Petro', 'Ivanchuk', 'ivanchuk@gmail.com', '+380664382505'));
users.push(new User(2, 'Marko', 'Lyach', 'lyach@gmail.com', '+380502395852'));
users.push(new User(3, 'Maria', 'Lesyshyn', 'lesyshyn@gmail.com', '+380662362952'));
users.push(new User(4, 'Anna', 'Petrovych', 'petrovych@gmail.com', '+380662094347'));
users.push(new User(9, 'Inna', 'Noga', 'noga@gmail.com', '+380669789135'));
users.push(new User(5, 'Igor', 'Honko', 'honko@gmail.com', '+380507492467'));
users.push(new User(8, 'Stah', 'Schech', 'scheh@gmail.com', '+480555937158'));
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenIdUsers = users.filter(user => user.id % 2 === 0)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = users.sort((a, b) => a.id - b.id);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        User.apply(this, arguments);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let orders = [
    ['car', 'brush'],
    ['window', 'table', 'closet'],
    ['house'],
    ['floor', 'desk'],
    ['orange', 'banana', 'cherries', 'kiwi'],
    ['milk'],
    ['pokemon', 'cube'],
    ['book', 'plate', 'radio', 'TV'],
    ['parrot'],
    ['chair', 'lottery ticket', 'phone']
]
let clients = [];
for (let i = 0; i < 10; i++) {
    clients.push(new Client(...Object.values(users[i]), orders[i]));
}
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, manufactureYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.manufactureYear = manufactureYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}

//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    console.log(`модель - ${this.model}\n` +
        `виробник - ${this.manufacturer}\n` +
        `рік випуску - ${this.manufactureYear}\n` +
        `максимальна швидкість - ${this.maxSpeed}\n` +
        `об'єм двигуна - ${this.engineCapacity}`);
}
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = newSpeed;
};
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.manufactureYear = newValue;
};
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver;
};
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, manufacturer, manufactureYear, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.manufactureYear = manufactureYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         console.log(`модель - ${this.model}\n` +
//             `виробник - ${this.manufacturer}\n` +
//             `рік випуску - ${this.manufactureYear}\n` +
//             `максимальна швидкість - ${this.maxSpeed}\n` +
//             `об'єм двигуна - ${this.engineCapacity}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.manufactureYear = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = [
    new Cinderella('Anya',24,36),
    new Cinderella('Vika',21,35),
    new Cinderella('Sophia',31,26),
    new Cinderella('Roma',42,29),
    new Cinderella('Lida',14,40),
    new Cinderella('Halya',25,31),
    new Cinderella('Luba',23,34),
    new Cinderella('Marta',42,28),
    new Cinderella('Vira',41,37),
    new Cinderella('Ariel',18,32)
]
console.log(cinderellas)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Harold',24, {size: 28});
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let cinderella;
for(const girl of cinderellas) {
    if(girl.footSize === prince.shoe.size)
        cinderella = girl;
}
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
cinderella = cinderellas.find(girl => girl.footSize === prince.shoe.size);
