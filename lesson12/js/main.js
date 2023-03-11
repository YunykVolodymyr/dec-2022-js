//зробити файл users.html
//з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
//при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let usersUl = document.body.getElementsByClassName('users')[0];

fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let li = document.createElement('li');
            li.innerText = `${user.id} - ${user.name}`
            usersUl.appendChild(li);
        }
    })
    .then(()=> {
        for (const li of usersUl.getElementsByTagName('li')) {
            li.addEventListener('click', function (){
                window.location.href = `user-details.html?id=${parseInt(li.innerText)}`;})
        }
    })
