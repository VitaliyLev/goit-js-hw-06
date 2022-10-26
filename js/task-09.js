function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const bodyChangeColor = document.querySelector('body');
const textNameColor = document.querySelector('.color');

btnRef.addEventListener('click', handleBtnChange);

function handleBtnChange (event) {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
  textNameColor.textContent = getRandomHexColor();
}