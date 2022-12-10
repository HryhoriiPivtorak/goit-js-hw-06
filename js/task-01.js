const listUl = document.querySelector('#categories');
console.log('Number of categories: ', listUl.children.length);

console.log('');

const listLi = document.querySelectorAll('.item');

const firstElem = listLi[0].children[0].textContent;
const numberOfFirstElem = listLi[0].children[1].children.length;

console.log('Category: ', firstElem);
console.log('Elements: ', numberOfFirstElem);


console.log('');

const secondElem = listLi[1].children[0].textContent;
const numberOfSecondElem = listLi[1].children[1].children.length;

console.log('Category: ', secondElem);
console.log('Elements: ', numberOfSecondElem);

console.log('');

const thirdElem = listLi[2].children[0].textContent;
const numberOfthirdElem = listLi[2].children[1].children.length;

console.log('Category: ', thirdElem);
console.log('Elements: ', numberOfthirdElem);