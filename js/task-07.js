const inputControlEl = document.querySelector('#font-size-control');

const textSizeChangeEl = document.querySelector('#text');

inputControlEl.addEventListener('input', () => {
    textSizeChangeEl.style.fontSize = inputControlEl.value + 'px';
})