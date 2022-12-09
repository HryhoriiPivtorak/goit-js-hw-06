const listUl = document.querySelectorAll('.item');
console.log('Number of categories: ', listUl.length);

console.log('');

const firstElem = listUl[0].childNodes[1].textContent;
const numberOfFirstElem = listUl[0].childNodes[3].childElementCount;

console.log('Category: ', firstElem);
console.log('Elements: ', numberOfFirstElem);


console.log('');

const secondElem = listUl[1].childNodes[1].textContent;
const numberOfSecondElem = listUl[1].childNodes[3].childElementCount;

console.log('Category: ', secondElem);
console.log('Elements: ', numberOfSecondElem);

console.log('');

const thirdElem = listUl[2].childNodes[1].textContent;
const numberOfthirdElem = listUl[2].childNodes[3].childElementCount;

console.log('Category: ', thirdElem);
console.log('Elements: ', numberOfthirdElem);