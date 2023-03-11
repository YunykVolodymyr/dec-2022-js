let url = new URL(window.location.href);
fetch(`https://jsonplaceholder.typicode.com/users/${url.searchParams.get('id')}`)
    .then(response => response.json())
    .then(user => {
        show.call(document.body, user);
    })

function show(obj) {
    let ul = document.createElement('ul');
    this.appendChild(ul);

    for (const field in obj) {
        let li = document.createElement('li');
        if (typeof obj[field] === 'object') {
            li.innerHTML += `${field}: {`;
            show.call(li, obj[field]);
            li.innerHTML += '}';
        } else
            li.innerText = `${field}: ${obj[field]}`
        ul.appendChild(li);
    }

}