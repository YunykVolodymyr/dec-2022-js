let postDetailsDiv = document.getElementsByClassName('post-details')[0];
let post = JSON.parse(new URL(location.href).searchParams.get('post'));
show.call(postDetailsDiv, post);

//show comments
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
.then(response => response.json())
.then(comments => {
    let commentsDiv = document.body.getElementsByClassName('comments')[0];
    for (const comment of comments) {
        let div = document.createElement('div');
        div.innerHTML = comment.body;
        commentsDiv.appendChild(div);
    }
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
            li.innerHTML = `${field}: ${obj[field]}`
        ul.appendChild(li);
    }

}
