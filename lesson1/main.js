// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let hello, owu, com, ua, num1, num10, num_999, num123, num3_14, num2_7, num16, b_true, b_false;
hello = 'hello';
owu = 'owu';
com = 'com';
ua = 'ua';
num1 = 1;
num10 = 10;
num_999 = -999;
num123 = 123;
num3_14 = 3.14;
num2_7 = 2.7;
num16 = 16;
b_true = true;
b_false = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(num1);
console.log(num10);
console.log(num_999);
console.log(num123);
console.log(num3_14);
console.log(num2_7);
console.log(num16);
console.log(b_true);
console.log(b_false);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Volodymyr', middleName = 'Vasylovych', lastName = 'Yunyk';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100, b = '100', c = true;
console.log(typeof a, typeof b, typeof c);

//Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
console.log(prompt('Enter your first name', firstName));
console.log(prompt('Enter your middle name', middleName));
console.log(prompt('Enter your age', '20'));
