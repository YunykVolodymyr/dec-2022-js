let usersDiv = document.body.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = `${user.id} - ${user.name}`
            let a = document.createElement('a');
            a.href = `user-details.html?user=${JSON.stringify(user)}`;
            a.innerText = 'Show more information'
            div.append(p, a);
            usersDiv.appendChild(div);
        }
    })

