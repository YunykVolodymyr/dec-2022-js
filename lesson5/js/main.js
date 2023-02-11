//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareArea = (a, b) => a * b;
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = r => Math.PI * r * r;
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (h, r) => 2 * Math.PI * r * (h + r);
// - створити функцію яка приймає масив та виводить кожен його елемент
let showArr = arr => {for(const item of arr) console.log(item);};
// showArr([1,2,3,4,true, 'six']);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createP = text => {document.write(`<p>${text}</p>`)};
// createP('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque enim impedit magni molestiae vero. Amet architecto facilis id inventore nobis.');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUlThree = text => {
  document.write(`<ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                </ul>`);
};
// createUlThree('lorem ipsum');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUl = (text, number = 3) => {
  document.write('<ul>');
  for (let i = 0; i < number; i++) {
    document.write(`<li>${text}</li>`)
  }
  document.write('</ul>');
}
// createUl('lorem ipsum', 4);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createList = arr => {
  document.write('<ul>');
  for (const elem of arr) {
    document.write(`<li>${elem}</li>`);
  }
  document.write('</ul>');
}
// createList([1, 'two', false]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let showUsers = users => {
  for (const user of users)
    document.write(`<div class="user-box">${user.id} - ${user.name} - ${user.age}</div>`)
};
let users = [{id: 1, name: 'Ihor', age: 32}, {id: 2, name: 'Nina', age: 13}, {id:3, name: 'Victor', age: 23}];
// showUsers(users);
// - створити функцію яка повертає найменьше число з масиву
let min = arr => {
  let min = arr[0];
  for (const elem of arr) {
    if(min > elem) min = elem;
  }
  return min;
};
// console.log(min([2,5,4,-3,3]));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = arr => {
  let total = 0;
  for (const elem of arr) {
    total += elem;
  }
  return total;
}
// console.log(sum([1,2,10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};
//console.log(swap([11, 22, 33, 44], 0, 1));
// => [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  for (const currencyValue of currencyValues) {
    if(currencyValue.currency === exchangeCurrency)
      return sumUAH / currencyValue.value;
  }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
// => 250