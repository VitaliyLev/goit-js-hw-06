const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createEl = document.querySelector('#ingredients');

const newElement = ingredients.map((ingredient) => {
  const newItemEl = document.createElement('li');
  newItemEl.classList.add('item');
  newItemEl.textContent = ingredient;
  console.log(newItemEl);
  return newItemEl;
});

createEl.append(...newElement);