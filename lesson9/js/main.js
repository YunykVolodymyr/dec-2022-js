console.clear();
// - створити блок,
let div = document.createElement('div');
div.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur distinctio dolores harum' +
    ' iste iure laboriosam libero nulla odit, pariatur perferendis provident quo, ratione reprehenderit sapiente sed' +
    ' tempora unde veniam.';
// - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap', 'colapse', 'alpha', 'beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = 'silver';
div.style.color = 'yellow';
div.style.fontSize = '20px';
div.style.margin = '20px 0';
// - додати цей блок в body.
document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div.cloneNode(true));


// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul = document.createElement('ul');
document.body.appendChild(ul);
for (const string of arr) {
    let li = document.createElement('li');
    li.innerText = string;
    ul.appendChild(li);
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDuration = document.createElement('div');
coursesAndDuration.classList.add('courses');
document.body.appendChild(coursesAndDuration);

for (const course of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${course.title} - ${course.monthDuration}`;
    coursesAndDuration.appendChild(div);
}


// =========================
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let updatedCourseDuration = document.createElement('div');
document.body.appendChild(updatedCourseDuration);
updatedCourseDuration.style.display = 'flex';
updatedCourseDuration.style.columnGap = '10px';

for (const course of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    updatedCourseDuration.appendChild(div);
    div.style.border = '2px solid black';
    div.style.padding = '5px';

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = course.title;
    div.appendChild(h1);

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = course.monthDuration;
    div.appendChild(p);
}


// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
let simpsonsContainer = document.createElement('div');
simpsonsContainer.classList.add('simpsons');
simpsonsContainer.style.display = 'flex';
document.body.appendChild(simpsonsContainer);

for (const simpson of simpsons) {
    let member = document.createElement('div');
    member.classList.add('member');
    member.style.display = 'flex';
    member.style.flexDirection = 'column';
    member.style.justifyContent = 'center';
    member.style.height = '100%';
    simpsonsContainer.appendChild(member);

    let h3 = document.createElement('h3');
    h3.innerText = `${simpson.name} ${simpson.surname} - ${simpson.age}`;

    let p = document.createElement('p');
    p.innerText = simpson.info;

    let img = document.createElement('img');
    img.setAttribute('src', simpson.photo);
    img.setAttribute('alt', `${simpson.name} ${simpson.surname}`);

    member.append(h3, p, img);
}


// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
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

let coursesContainer = document.createElement('div');
coursesContainer.classList.add('courses-container');
document.body.appendChild(coursesContainer);
let link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'css/main.css');
document.head.appendChild(link);

for (const course of coursesArray) {
    let div = document.createElement('div');
    div.classList.add('course');
    coursesContainer.appendChild(div);

    let title = document.createElement('div');
    title.innerText = course.title;

    let container = document.createElement('div');
    let monthDuration = document.createElement('div');
    let hourDuration = document.createElement('div');

    container.append(monthDuration, hourDuration);
    container.classList.add('container');

    monthDuration.innerText = `Month duration ${course.monthDuration}`;
    hourDuration.innerText = `Month duration ${course.hourDuration}`;

    let ul = document.createElement('ul');
    for (const module of course.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }

    div.append(title, container, ul);
}


// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let container = document.createElement('div');
document.body.appendChild(container);

let p = document.createElement('p');
let button = document.createElement('button');

p.id = 'text';
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aspernatur assumenda error incidunt ' +
    'iusto maxime modi perferendis quaerat qui quod repellat sapiente, sint, sit tempora tempore tenetur totam vero. Illo!';
button.innerText = 'Hide Text';
container.append(p, button);

button.onclick = () => {
    p.classList.toggle('collapse');
    if(button.innerText === 'Hide Text')
        button.innerText = 'Show Text';
    else
        button.innerText = 'Hide Text';
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageContainer = document.createElement('div');
ageContainer.classList.add('form');
document.body.appendChild(ageContainer);
let ageInput = document.createElement('input');
let checkButton = document.createElement('button');
ageContainer.append(ageInput, checkButton);

ageInput.placeholder = 'Your age';
checkButton.innerText = 'Check';

checkButton.onclick = () => {
    let message = ageContainer.getElementsByClassName('message')[0];
    if(!message) {
        message = document.createElement('p');
        message.classList.add('message');
        ageContainer.appendChild(message);
    }
    message.innerText = `You are ${+ageInput.value < 18?'yonger':'older'} than 18`;
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let tableBuilder = document.createElement('div');
tableBuilder.classList.add('form');
document.body.appendChild(tableBuilder);
let rowInput = document.createElement('input');
let columnInput = document.createElement('input');
let contentInput = document.createElement('input');
let createButton = document.createElement('button');
tableBuilder.append(rowInput, columnInput, contentInput , createButton);

rowInput.placeholder = 'Number of rows';
columnInput.placeholder = 'Number of columns';
contentInput.placeholder = 'Content';
createButton.innerText = 'Build';

createButton.onclick = () => {
    let table = tableBuilder.getElementsByTagName('table')[0];
    if(!table) {
        table = document.createElement('table');
        tableBuilder.appendChild(table);
    } else table.innerHTML = '';
    tableBuilder.appendChild(table);
    for (let i = 0; i < rowInput.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < columnInput.value; j++) {
            let td = document.createElement('td');
            td.innerText = contentInput.value;
            tr.appendChild(td);
        }

    }
}

// (Додатковачастина для завдання)