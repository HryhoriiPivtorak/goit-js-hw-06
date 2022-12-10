const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredients = (options) => {
  return options.map(elem => {
    const newLiElem = document.createElement('li');
    newLiElem.textContent = elem;
    newLiElem.classList.add('item');
  
    return newLiElem;
  })
}
const newElements = makeIngredients(ingredients);
ingredientsList.append(...newElements);