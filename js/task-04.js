const btnDecrement = document.querySelector('[data-action="decrement"]');

const btnIncrement = document.querySelector('[data-action="increment"]');

const valueEl = document.querySelector('#value');

let counterValue = 0;

const handleClickDec = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const handleClickInc = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

btnDecrement.addEventListener('click', handleClickDec);

btnIncrement.addEventListener('click', handleClickInc);
