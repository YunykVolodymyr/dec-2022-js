//Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з
// полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився
// блок з вашим об'єктом

document.forms.task1.addEventListener('submit', function (eo) {
    eo.preventDefault();
    document.getElementsByClassName('result')[0].innerText =
        `name: ${this.name.value},
        surname: ${this.surname.value},
        age: ${this.age.value}`;
});

//є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
localStorage.setItem('number', String(+localStorage.getItem('number') + 1));
document.getElementsByClassName('task2')[0].innerText = localStorage.getItem('number');

//Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
// якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а
// побудувати дом структуру під кожну сессію

let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(new Date().getTime());
localStorage.setItem('sessions', JSON.stringify(sessions));

//=========================
//зробити масив на 100 об'єктів та дві кнопки prev next
//при завантажені сторінки з'являються перші 10 об'єктів.
//При натисканні next виводяться настпні 10 об'єктів
//При натисканні prev виводяться попередні 10 об'єктів
let users = [
    {name: 'John', surname: 'Doe', age: 25},
    {name: 'Jane', surname: 'Smith', age: 30},
    {name: 'Alice', surname: 'Johnson', age: 20},
    {name: 'Bob', surname: 'Lee', age: 35},
    {name: 'Emily', surname: 'Brown', age: 28},
    {name: 'David', surname: 'Clark', age: 22},
    {name: 'Sarah', surname: 'Davis', age: 29},
    {name: 'Mark', surname: 'White', age: 32},
    {name: 'Olivia', surname: 'Wilson', age: 26},
    {name: 'Brian', surname: 'Taylor', age: 31},
    {name: 'Victoria', surname: 'Walker', age: 27},
    {name: 'Max', surname: 'Garcia', age: 24},
    {name: 'Julia', surname: 'Anderson', age: 33},
    {name: 'Robert', surname: 'Scott', age: 36},
    {name: 'Sophia', surname: 'Green', age: 23},
    {name: 'Daniel', surname: 'Jackson', age: 27},
    {name: 'Mia', surname: 'Adams', age: 21},
    {name: 'Anthony', surname: 'Thomas', age: 29},
    {name: 'Isabella', surname: 'Mitchell', age: 32},
    {name: 'William', surname: 'Parker', age: 28},
    {name: 'Ava', surname: 'Turner', age: 26},
    {name: 'Michael', surname: 'Campbell', age: 30},
    {name: 'Elizabeth', surname: 'Cooper', age: 31},
    {name: 'David', surname: 'Edwards', age: 25},
    {name: 'Grace', surname: 'Collins', age: 27},
    {name: 'Christopher', surname: 'Stewart', age: 34},
    {name: 'Chloe', surname: 'Sanchez', age: 22},
    {name: 'Kevin', surname: 'Morris', age: 32},
    {name: 'Natalie', surname: 'Rogers', age: 28},
    {name: 'Matthew', surname: 'Reed', age: 26},
    {name: 'Hannah', surname: 'Cook', age: 24},
    {name: 'Andrew', surname: 'Morgan', age: 33},
    {name: 'Ella', surname: 'Bell', age: 31},
    {name: 'Joshua', surname: 'Murphy', age: 27},
    {name: 'Avery', surname: 'Rivera', age: 23},
    {name: 'Ryan', surname: 'Cooper', age: 30},
    {name: 'Sofia', surname: 'Gomez', age: 25},
    {name: 'Justin', surname: 'Perez', age: 29},
    {name: 'Taylor', surname: 'Reyes', age: 26},
    {name: 'Madison', surname: 'Scott', age: 32},
    {name: 'Kai', surname: 'Gallagher', age: 23},
    {name: 'Brielle', surname: 'Figueroa', age: 49},
    {name: 'Averie', surname: 'Acosta', age: 33},
    {name: 'Jada', surname: 'Boyd', age: 29},
    {name: 'Jaylen', surname: 'Ellison', age: 46},
    {name: 'Jovani', surname: 'Walters', age: 56},
    {name: 'Allan', surname: 'Lambert', age: 25},
    {name: 'Tristan', surname: 'Shepard', age: 61},
    {name: 'Livia', surname: 'Frost', age: 37},
    {name: 'Lila', surname: 'Ramirez', age: 54},
    {name: 'Jade', surname: 'Myers', age: 38},
    {name: 'Shayna', surname: 'Chen', age: 29},
    {name: 'Leandro', surname: 'Cox', age: 22},
    {name: 'Elianna', surname: 'Hartman', age: 50},
    {name: 'Malcolm', surname: 'Patrick', age: 40},
    {name: 'Briana', surname: 'Cooke', age: 31},
    {name: 'Gwendolyn', surname: 'Maldonado', age: 45},
    {name: 'Kadence', surname: 'Gregory', age: 29},
    {name: 'Lauryn', surname: 'Hoffman', age: 26},
    {name: 'Jaida', surname: 'Graham', age: 41},
    {name: 'Jasper', surname: 'Waters', age: 37},
    {name: 'Charli', surname: 'Byrd', age: 49},
    {name: 'Eliezer', surname: 'Manning', age: 60},
    {name: 'Giselle', surname: 'Colon', age: 34},
    {name: 'Colten', surname: 'Ballard', age: 57},
    {name: 'Nina', surname: 'Perez', age: 24},
    {name: 'Gunnar', surname: 'Rose', age: 30},
    {name: 'Emery', surname: 'Bryant', age: 47},
    {name: 'Emmy', surname: 'Vasquez', age: 44},
    {name: 'Landon', surname: 'Nichols', age: 34},
    {name: 'Livia', surname: 'Fields', age: 51},
    {name: 'Kobe', surname: 'Bentley', age: 25},
    {name: 'Samir', surname: 'Stephens', age: 28},
    {name: 'Kian', surname: 'Cameron', age: 39},
    {name: 'Amiya', surname: 'Harris', age: 52},
    {name: 'Alyssa', surname: 'Foster', age: 23},
];
update();
function update() {
    let ul = document.createElement('ul');
    document.getElementsByClassName('task3')[0].innerHTML = '';
    document.getElementsByClassName('task3')[0].appendChild(ul);
    for (let i = +localStorage.getItem('startNumber'), j = 0; j < 10 && i < users.length; j++, i++) {
        const user = users[i];
        let li = document.createElement('li');
        li.innerText = `${user.name} ${user.surname} ${user.age}`;
        ul.appendChild(li);
    }
}

document.getElementById('prev-button').addEventListener('click', function () {
    let startNumber = JSON.parse(localStorage.getItem('startNumber')) || 0;
    localStorage.setItem('startNumber', startNumber < 10 ? 0 : startNumber - 10);
    update();
});
document.getElementById('next-button').addEventListener('click', function () {
    let startNumber = JSON.parse(localStorage.getItem('startNumber')) || 0;
    if (startNumber + 10 < users.length) localStorage.setItem('startNumber', String(startNumber + 10));
    update();
});
//*** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)


document.forms.last.addEventListener('submit', function (eo){
    eo.preventDefault();
    let table = document.getElementsByTagName('table')[0] ||
        document.createElement('table');
    table.innerHTML = '';
    document.body.appendChild(table);
    for (let i = 0; i < this.rows.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < this.columns.value; j++) {
            let td = document.createElement('td');
            td.innerText = this.content.value;
            tr.appendChild(td);
        }
    }

})