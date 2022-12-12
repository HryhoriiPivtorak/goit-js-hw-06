let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action = decrement]');
const buttonIncrement = document.querySelector('[data-action = increment]');
const value = document.querySelector('#value');

buttonDecrement.addEventListener('click', onClickDecrement);
buttonIncrement.addEventListener('click', onClickIncrement);

function onClickDecrement(event) {
    
    counterValue -= 1;
    value.textContent = counterValue;
}

function onClickIncrement(event) {
    
    counterValue += 1;
    value.textContent = counterValue;
}