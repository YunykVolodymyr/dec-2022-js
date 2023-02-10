//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function getRectangleArea(a, b) {
    return a * b;
}

// console.log(getRectangleArea(2,3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function getCircleArea(r) {
    return Math.PI * r ** 2;
}

// console.log(getCircleArea(2));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function getCylinderArea(h, r) {
    return 2 * Math.PI * r * (h + r);
}

// console.log(getCylinderArea(4,2));
// - створити функцію яка приймає масив та виводить кожен його елемент
function logArr(arr) {
    for (const elem of arr)
        console.log(elem);
}

// console.log(logArr([1,2,'three', true]));
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

// createParagraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae dolores ea labore molestias nulla odio, perspiciatis quo sed soluta temporibus vel, voluptatum.');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUlThree(text) {
    document.write(`<ul>
                        <li>${text}</li>
                        <li>${text}</li>
                        <li>${text}</li>
                    </ul>`);
}
// createUlThree('Lorem ipsum');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl(text, liAmount = 3) {
    document.write('<ul>');
    for (let i = 0; i < liAmount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
// createUl('lorem ipsum', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createList(arr) {
    document.write('<ul>');
    for (const elem of arr) {
        document.write(`<li>${elem}</li>`);
    }
    document.write('</ul>');
}
// createList([1, true, 'three', false, 5]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function showUsers(users) {
    document.write('<div class="users-container">');
        for(const user of users) {
            document.write(`<div class="users-box">${user.id} - ${user.name} - ${user.age}</div>`);
        }
    document.write('</div>');
}
// let users = [{id: 1, name: 'Ivan', age: 15}, {id: 2, name: 'Inna', age: 21}, {id: 3, name: 'Anton', age: 40}];
// showUsers(users);
// - створити функцію яка повертає найменьше число з масиву
function min(arr) {
    let min = arr[0];
    for(const elem of arr) {
        if(elem < min) min = elem;
    }
    return min;
}

// console.log(min([3,9,-3,34]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let total = 0;
    for(const elem of arr)
        total += elem;
    return total;
}

// console.log(sum([1,2,10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

// console.log(swap([11,22,33,44],0,1));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for(const currencyValue of currencyValues) {
        if(currencyValue.currency === exchangeCurrency)
            return sumUAH / currencyValue.value;
    }
}

// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
