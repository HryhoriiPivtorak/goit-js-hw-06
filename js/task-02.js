const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector('#ingredients');

const newElements = ingredients.map(elem => {
  const newLiElem = document.createElement('li');
  newLiElem.textContent = elem;
  newLiElem.classList.add('item');

  return newLiElem;
})

ingredientsList.append(...newElements);

