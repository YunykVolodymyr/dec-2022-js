let userDetailsDiv = document.getElementsByClassName('user-details')[0];
let user = JSON.parse(new URL(location.href).searchParams.get('user'));
show.call(userDetailsDiv, user);
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
            li.innerHTML = `${field}: ${obj[field]}`
        ul.appendChild(li);
    }

}
//show posts
let flag = false;
document.body.getElementsByClassName('show-posts')[0]
    .addEventListener('click', function (){
        let postsDiv = document.getElementsByClassName('posts')[0];
        if(flag) {
            this.innerText = 'Posts of current user';
            postsDiv.innerHTML = '';
            flag = false;
        } else {
            flag = true;
            this.innerText = 'Hide the posts';
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => {
                    let buttons = [];
                    for (const post of posts) {
                        let div = document.createElement('div');
                        let p = document.createElement('p');
                        let button = document.createElement('button');

                        p.innerText = post.title;
                        button.innerText = 'show more information'

                        buttons.push([button, post])
                        postsDiv.appendChild(div);
                        div.append(p, button)
                    }

                    return buttons;
                })
                .then(buttons => {
                    for (const [button, post] of buttons) {
                        button.addEventListener('click', () => {
                            location.href = `post-details.html?post=${JSON.stringify(post)}`;
                        })
                    }
                })
        }
    })