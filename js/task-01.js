const listUl = document.querySelector('#categories');
console.log('Number of categories: ', listUl.children.length);

console.log('');

const firstElem = listUl.children[0].children[0].textContent;
const numberOfFirstElem = listUl.children[0].children[1].children.length;

console.log('Category: ', firstElem);
console.log('Elements: ', numberOfFirstElem);


console.log('');

const secondElem = listUl.children[1].children[0].textContent;
const numberOfSecondElem = listUl.children[1].children[1].children.length;

console.log('Category: ', secondElem);
console.log('Elements: ', numberOfSecondElem);

console.log('');

const thirdElem = listUl.children[2].children[0].textContent;
const numberOfthirdElem = listUl.children[2].children[1].children.length;

console.log('Category: ', thirdElem);
console.log('Elements: ', numberOfthirdElem);