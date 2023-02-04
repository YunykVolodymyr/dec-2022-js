console.clear();
//1. Створити пустий масив та :
let arr = [];
//        a. заповнити його 50 парними числами за допомоги циклу.
// {
//     for (let i = 0, a = 2; i < 50; i++, a += 2) {
//         arr[arr.length] = a;
//     }
//     console.log(arr);
// }
//        b. заповнити його 50 непарними числами за допомоги циклу.
// {
//     for (let i = 0, a = 1; i < 50; i++, a += 2) {
//         arr[arr.length] = a;
//     }
//     console.log(arr);
// }
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// {
//     for (let i = 0; i < 20; i++) {
//         arr[arr.length] = Math.floor(Math.random() * 100);
//     }
//     console.log(arr);
// }
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
{
    for (let i = 0; i < 20; i++) {
        arr[arr.length] = Math.floor(Math.random() * (732 - 8)) + 8;
    }
    console.log(arr);
}

//  2. Вивести за допомогою console.log кожен третій елемен
// {
//     for (let i = 0; i < arr.length; i += 3) {
//         console.log(arr[i]);
//     }
// }
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// {
//     for (let i = 0; i < arr.length; i += 3) {
//         if(arr[i] % 2 === 0) console.log(arr[i]);
//     }
// }
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// {
//     let arr1= [];
//     for (let i = 0; i < arr.length; i += 3) {
//         if(arr[i] % 2 === 0) {
//             console.log(arr[i]);
//             arr1[arr1.length] = arr[i];
//         }
//     }
//     console.log(arr1)
// }
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] % 2 === 0) console.log(arr[i]);
//     }
// }
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// {
//     let arr1 = [100,250,50,168,120,345,188], sum = 0;
//     for (const number of arr1) {
//         sum += number;
//     }
//     console.log(sum / arr1.length);
// }
//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// {
//     let arr1 = [], arr2 = [];
//     for (let i = 0; i < 20; i++) {
//         arr1[arr1.length] = Math.floor(Math.random() * 10);
//     }
//     console.log(arr1);
//     for (let i = 0; i < arr1.length; i++) {
//         arr1[i] *= 5;
//         arr2[arr2.length] = arr1[i];
//     }
//     console.log(arr2);
// }
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// {
//     let arr1 = [1, 'two', false, 'four', true, 6, 7, 'eight', false, 10];
//     let numbers = [];
//     for (const elem of arr1) {
//         if (typeof elem === 'number')
//             numbers[numbers.length] = elem;
//     }
//     console.log(numbers);
// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

// {
//     let usersWithCities = [];
//     for (const userWithId of usersWithId) {
//         for (const cityWithId of citiesWithId) {
//             if(cityWithId.user_id === userWithId.id) {
//                 userWithId.address = cityWithId;
//                 usersWithCities[usersWithCities.length] = userWithId;
//             }
//         }
//     }
//     console.log(usersWithCities);
// }

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// {
//     let arr1 = [];
//     for (let i = 0; i < 10; i++) {
//         arr1[arr1.length] = Math.floor(Math.random() * 100);
//     }
//     console.log(arr1);
//     for (const arr1Element of arr1) {
//         if (arr1Element % 2 === 0)
//             console.log(arr1Element);
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// {
//     let arr1 = [];
//     for (let i = 0; i < 10; i++) {
//         arr1[arr1.length] = Math.floor(Math.random() * 100);
//     }
//     console.log(arr1);
//     let arr2 = [];
//     for (const elem of arr1) {
//         arr2[arr2.length] = elem;
//     }
//     console.log(arr2);
// }
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
    let letters = [ 'a', 'b', 'c'];
{
    let word = '';
    for (let i = 0; i < letters.length; i++) {
        word += letters[i];
    }
    console.log(word);
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
{
    let i = 0, word = '';
    while (i < letters.length) {
        word += letters[i];
        i++;
    }
    console.log(word);
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
{
    let word = '';
    for (const letter of letters) {
        word += letter;
    }
    console.log(word);
}