//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
str = str.trim();
// console.log('/' + str + '/');
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let sentence = 'Ревуть воли як ясла повні';
let stringToarray = str => str.split(' ');

let words = stringToarray(sentence);// ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// console.log(words)
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(arr.map(elem => '' + elem));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
// console.log(sortNums(nums, 'descending'));// [21,11,3]

function sortNums(arr, direction) {
    if(direction === 'ascending') return arr.sort((a,b) => a - b);
    if(direction === 'descending') return arr.sort((a,b) => b - a);
}


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(({monthDuration}) => monthDuration > 5));
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// console.log(coursesAndDurationArray.map((elem, id) => {return {id, ...elem}}));
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
const VALUES = '6789TJQKA';
const SUITS = ['spades', 'diamonds', 'hearts', 'clubs'];
let deck = (() => {
    let arr = [];
    for (const suit of SUITS) {
        for (const value of VALUES) {
            let card = {value: value, suit};
            if (suit === 'diamonds' || suit === 'hearts')
                card.color = 'red';
            else
                card.color = 'black';
            arr.push(card);
        }
    }
    return arr;
})();

//  - знайти піковий туз
// console.log(deck.find(card => card.suit === 'clubs' && card.value === 'A'));
//  - всі шістки
// console.log(deck.filter(card => card.value === '6' ));
//  - всі червоні карти
// console.log(deck.filter(card => card.color === 'red'));
//  - всі буби
// console.log(deck.filter(card => card.suit === 'diamonds'));
//  - всі трефи від 9 та більше
// console.log(deck.filter(card => card.suit === 'clubs' && VALUES.indexOf(card.value) >= VALUES.indexOf('9')));
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// console.log(deck.reduce((reduced, card) => {
//      reduced[card.suit].push(card);
//      return reduced;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// }));
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
// console.log(coursesArray.filter(course => course.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
// console.log(coursesArray.filter(course => course.modules.includes('docker')));
