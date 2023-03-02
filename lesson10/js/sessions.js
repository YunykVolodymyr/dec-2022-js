let sessionsDiv = document.getElementsByClassName('sessions')[0];
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];

for (const session of sessions) {
    let sessionDiv = document.createElement('div');
    sessionsDiv.appendChild(sessionDiv);
    let h1 = document.createElement('h1');
    sessionDiv.appendChild(h1);
    let date = new Date(+session);
    h1.innerText = String(date.getDate()).padStart(2,'0') + '.' +
        String(date.getMonth() + 1).padStart(2,'0') + '.' +
        date.getFullYear() + '   ' +
        String(date.getHours()).padStart(2,'0') + ':' +
        String(date.getMinutes()).padStart(2,'0') + ':' +
        String(date.getSeconds()).padStart(2,'0');
}