const inputEl = document.querySelector('#validation-input');

const callback = (event) => {
    if (event.currentTarget.value.length === +inputEl.dataset.length) {
        inputEl.classList.add('valid')
        inputEl.classList.replace('invalid', 'valid')

    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.replace('valid', 'invalid')
    }
}

inputEl.addEventListener('blur', callback);
