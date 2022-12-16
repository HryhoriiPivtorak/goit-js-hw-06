const input = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');


input.addEventListener('input', onClick);

function onClick(event) {
    textSpan.style.fontSize = `${input.value}px`;
    }