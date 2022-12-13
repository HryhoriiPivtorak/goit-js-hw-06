const input = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');


input.addEventListener('click', onClick);

function onClick(event) {
    console.log(input.value);
    textSpan.classList.add('font-size')
    textSpan.style.fontSize = input.value;
    console.log('textSpan.style.fontSize:', textSpan.style.fontSize)

}