const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');


inputEl.addEventListener('input', writeMessage);

function writeMessage(event) {
    event.currentTarget.value.trim().length === 0 ?
        outputEl.textContent = 'Anonymous' :
        outputEl.textContent = event.currentTarget.value;
}
