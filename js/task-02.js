const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
console.dir(list);
const li = document.createElement('li');
li.textContent = 'Potatoes';
li.classList.add('item');
list.style.listStyle = 'none';
console.dir(li);
list.append(li);