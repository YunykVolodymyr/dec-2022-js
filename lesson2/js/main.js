console.clear();
//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, true, 'fourth', false, 'sixth', 7, -8, 'ninth', false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log('\n');
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Harry Potter',
    pageCount: 600,
    genre: 'fiction'
}

let book2 = {
    title: 'Kobzar',
    pageCount: 300,
    genre: 'poem'
}

let book3 = {
    title: 'Zahar Berkut',
    pageCount: 300,
    genre: 'historical fiction'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book2_1 = {
    title: 'Справа Василя Стуса. Збірка документів з архіву колишнього КДБ УРСР',
    pageCount: 688,
    genre: 'history',
    authors: [
        {
            name: 'Вахтанг Кіпіані',
            age: 51
        },
        {
            name: 'unknown',
            age: 100
        }
    ]
}
let book2_2 = {
    title: 'Доця',
    pageCount: 285,
    genre: 'fiction',
    authors: [
        {
            name: 'Тамара Горіха Зерня',
            age: 47
        },
        {
            name: 'unknown',
            age: 100
        }
    ]
}
let book2_3 = {
    title: 'УСІ ЇХНІ ДЕМОНИ',
    pageCount: 208,
    genre: 'fiction',
    authors: [
        {
            name: 'Поліна Кулакова',
            age: 33
        }
    ]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Oleg', username: 'oleg1', password: 'oleg123'},
    {name: 'Ivan', username: 'ivan', password: 'qwerty'},
    {name: 'Olena', username: 'olena23', password: '12345435'},
    {name: 'Marko', username: 'deadpool', password: 'adfJ23Jdf'},
    {name: 'Maria', username: 'maria', password: 'maw324daf'},
    {name: 'Anna', username: 'anna', password: '23efsdsf23'},
    {name: 'Paul', username: 'paul2', password: 'asdfj2343s'},
    {name: 'Inna', username: 'inna4', password: 'saffewew3'},
    {name: 'Andriy', username: 'andrew', password: '12andrew23'},
    {name: 'Milana', username: 'milana', password: 'smdfsmdsa'},
]

console.log(users[0].password);
console.log(users[1]['password']);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
console.log('\n');

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
console.log('\n')
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 23;
let quarter;
if (time >= 0 && time <= 14) {
    quarter = 'first';
} else if (time >= 15 && time <= 29) {
    quarter = 'second';
} else if (time >= 30 && time <= 44) {
    quarter = 'third';
} else if (time >= 45 && time <= 59) {
    quarter = 'fourth';
} else {
    quarter = 'ERROR: time value is incorrect';
}
console.log(quarter);
console.log('\n');
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 9;
if (day > 0 && day <= 10) {
    console.log('first');
} else if (day >= 11 && day <= 20) {
    console.log('second');
} else if (day >= 21 && day <= 31) {
    console.log('third');
} else {
    console.log('ERROR: day value is incorrect');
}
console.log('\n');
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
day = +prompt('Enter the serial number of the day of the week', '1');
let day_name;
switch (day) {
    case 1:
        day_name = 'Monday';
        break;
    case 2:
        day_name = 'Tuesday';
        break;
    case 3:
        day_name = 'Wednesday';
        break;
    case 4:
        day_name = 'Thursday';
        break;
    case 5:
        day_name = 'Friday';
        break;
    case 6:
        day_name = 'Saturday';
        break;
    case 7:
        day_name = 'Sunday';
        break;
    default:
        day_name = "You entered a wrong number."
}
confirm(day_name);
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = 3, number2 = 2;
if(number1 > number2) {
    console.log(number1);
} else if (number2 > number1) {
    console.log(number2);
} else {
    console.log(`${number1} is equal with ${number2}`);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

x = 0;
if(x === '' || x === 0 || x === undefined || isNaN(x) || x === null) {
    x = 'default';
}
console.log(x);
console.log('\n');


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер!');
}if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер!');
}if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер!');
}if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер!');
}if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер!');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер!');
}