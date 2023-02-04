console.clear();
//--створити масив з:
// - з 5 числових значень
let arr1 = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let arr2 = ['one', 'two', 'three', 'four', 'five'];
// - з 5 значень стрічкового, числового та булевого типу
let arr3 = [1, 'two', true, 4, 'five'];
// - та вивести його в консоль

for (const elem of arr1) {
    console.log(elem);
}
for (const elem of arr2) {
    console.log(elem);
}
for (const elem of arr3) {
    console.log(elem);
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = [];
for (let i = 0; i < 5; i++) {
    arr4[i] = i * 10;
}
for (const elem of arr4) {
    console.log(elem);
}


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < arr5.length) {
    console.log(arr5[i]);
    i++;
}
// 2. перебрати його циклом for
for (let j = 0; j < arr5.length; j++) {
    console.log(arr5[j]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr5.length) {
    if (i % 2 !== 0) {
        console.log(arr5[i]);
    }
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arr5.length; j++) {
    if (j % 2 !== 0) {
        console.log(arr5[j]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr5.length) {
    if (arr5[i] % 2 === 0) {
        console.log(arr5[i]);
    }
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (const number of arr5) {
    if (number % 2 === 0) console.log(number);
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < arr5.length; j++) {
    if (arr5[j] % 3 === 0) arr5[j] = 'okten';
}
// 8. вивести масив в зворотньому порядку.
for (let j = arr5.length - 1; j >= 0; j--) {
    console.log(arr5[j]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
arr5 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 9.1. перебрати його циклом while
i = arr5.length - 1;
while (i >= 0) {
    console.log(arr5[i]);
    i--;
}
// 9.2. перебрати його циклом for
for (let j = arr5.length - 1; j >= 0; j--) {
    console.log(arr5[j]);
}
// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = arr5.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) console.log(arr5[i]);
    i--;
}
// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = arr5.length - 1; j >= 0; j--) {
    if (j % 2 !== 0) console.log(arr5[j]);
}
// 9.5. перебрати циклом while та вивести  числа тільки парні  значення
i = arr5.length - 1;
while (i >= 0) {
    if (arr5[i] % 2 === 0) {
        console.log(arr5[i]);
    }
    i--;
}
// 9.6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = arr5.length; j >= 0; j--) {
    if (arr5[j] % 2 === 0) console.log(arr5[j]);
}
// 9.7. замінити кожне число кратне 3 на слово "okten"
for (let j = arr5.length - 1; j >= 0; j--) {
    if (arr5[j] % 3 === 0) arr5[j] = 'okten';
    console.log(arr5[j]);
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of arr6) {
    console.log(number);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr7 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (const string of arr7) {
    console.log(string);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr8 = [1, 'two', true, 4, 'five', false, 'seven', false, 9, 10];
for (const elem of arr8) {
    console.log(elem);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const elem of arr8) {
    if (typeof elem === 'boolean') console.log(elem);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const elem of arr8) {
    if (typeof elem === 'number') console.log(elem);
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const elem of arr8) {
    if (typeof elem === 'string') console.log(elem);
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
for (let j = 0; j < arr8.length; j++) {
    console.log(arr8[j]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 10; j++) {
    console.log(j);
    document.write(j + ' ');
}
document.write('<h1></h1>');
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 100; j++) {
    console.log(j);
    document.write(j + ' ');
}
document.write('<h1></h1>');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 1; j <= 100; j += 2) {
    console.log(j);
    document.write(j + ' ')
}
document.writeln('<h1></h1>');
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 1; j <= 100; j++) {
    if (j % 2 === 0) {
        console.log(j);
        document.write(j + ' ');
    }
}
document.writeln('<h1></h1>');
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 1; j < 100; j++) {
    if (j % 2 !== 0) {
        console.log(j);
        document.write(j + ' ');
    }
}

//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [{
    title: 'Harry Potter and the philosopher\'s stone', pageCount: 223, authors: [{
        name: 'J. K. Rowling', age: 57
    }], genres: ['fantasy', 'drama']
}, {
    title: 'The hunger games', pageCount: 384, authors: [{
        name: 'Suzanne Collins', age: 60
    }], genres: ['young adult', 'fiction', 'dystopia']
}, {
    title: 'The chronicles of Narnia', pageCount: 766,

    authors: [{
        name: 'C.S. Lewis', age: NaN
    }, {
        name: 'Pauline Baynes', age: NaN
    }], genres: ['fantasy', 'classics', 'fiction', 'young adult']
}, {
    title: 'The Picture of Dorian Gray', pageCount: 288, authors: [{
        name: 'Oscar Wilde', age: NaN
    }, {
        name: 'Jeffrey Eugenides', age: 62
    }], genres: ['classics', 'fiction', 'horror', 'fantasy']
}]
// -знайти наібльшу книжку.
if(books.length > 0) {
    let k = -1;
    for (let j = 0, maxPageCount = 0; j < books.length; j++) {
        if (books[j].pageCount >= maxPageCount) {
            maxPageCount = books[j].pageCount;
            k = j;
        }
    }
    console.log(`The largest book is ${books[k].title} - ${books[k].pageCount} pages`);
} else {
    console.log('There is no books over here');
}
// - знайти книжку/ки з найбільшою кількістю жанрів
let maxAmountGenresIndexes = [], maxAmountGenres = 0;
for (const book of books) {
    if (book.genres.length > maxAmountGenres) maxAmountGenres = book.genres.length;
}
for (let j = 0; j < books.length; j++) {
    if (books[j].genres.length === maxAmountGenres) maxAmountGenresIndexes[maxAmountGenresIndexes.length] = j;
}
if (maxAmountGenresIndexes.length === 1) {
    console.log(`The book with the largest amount of genres is "${books[maxAmountGenresIndexes[0]].title}" - ${maxAmountGenres} genres`);
} else if (maxAmountGenresIndexes.length > 1) {
    let msg = 'The books with the largest amount of genres are: ';
    for (let j = 0; j < maxAmountGenresIndexes.length; j++) {
        msg += `"${books[maxAmountGenresIndexes[j]].title}" `;
    }
    msg += ` ${maxAmountGenres} genres each`;
    console.log(msg);
} else {
    console.log('There is no books over here');
}
// - знайти книжку/ки з найдовшою назвою
let longestTitleBookIndexes = [], maxTitleLength = 0;
for (const book of books) {
    if (book.title.length > maxTitleLength) maxTitleLength = book.title.length;
}
for (let j = 0; j < books.length; j++) {
    if (books[j].title.length === maxTitleLength) longestTitleBookIndexes[longestTitleBookIndexes.length] = j;
}
if (longestTitleBookIndexes.length === 1) {
    console.log(`The book with the longest title is "${books[longestTitleBookIndexes[0]].title}" - ${maxTitleLength} symbols`);
} else if (longestTitleBookIndexes.length > 1) {
    let msg = 'The books with the longest titles are: ';
    for (let j = 0; j < longestTitleBookIndexes.length; j++) {
        msg += `"${books[longestTitleBookIndexes[j]].title}" `;
    }
    msg += ` ${maxTitleLength} symbols each`;
    console.log(msg);
} else {
    console.log('There is no books over here');
}
// - знайти книжку/ки які писали 2 автори
{
    let twoAuthorsBooksIndexes = [];
    for (let j = 0; j < books.length; j++) {
        if (books[j].authors.length === 2) {
            twoAuthorsBooksIndexes[twoAuthorsBooksIndexes.length] = j;
        }
    }
    if (twoAuthorsBooksIndexes.length === 1) {
        console.log(`The book with two authors is "${books[twoAuthorsBooksIndexes[0]].title}"`);
    } else if (twoAuthorsBooksIndexes.length > 1) {
        let msg = 'The books with two authors are: ';
        for (let j = 0; j < twoAuthorsBooksIndexes.length; j++) {
            msg += `"${books[twoAuthorsBooksIndexes[j]].title}" `;
        }
        console.log(msg);
    } else {
        console.log('There are no books written by two authors');
    }
}
// - знайти книжку/ки які писав 1 автор
let oneAuthorBooksIndexes = [];
for (let j = 0; j < books.length; j++) {
    if(books[j].authors.length === 1) {
        oneAuthorBooksIndexes[oneAuthorBooksIndexes.length] = j;
    }
}
if(oneAuthorBooksIndexes.length === 1) {
    console.log(`The book with one author is "${books[oneAuthorBooksIndexes[0]].title}"`);
} else if (oneAuthorBooksIndexes.length > 1) {
    let msg = 'The books with one author are: ';
    for (let j = 0; j < oneAuthorBooksIndexes.length; j++) {
        msg += `"${books[oneAuthorBooksIndexes[j]].title}" `;
    }
    console.log(msg);
} else {
    console.log('There are no books written by one authors');
}