const input = document.querySelector("#validation-input");

console.log(input.dataset.length);

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length == input.dataset.length) {
    input.setAttribute("id", "validation-input.valid");
  }
  if (event.currentTarget.value.length === 0) {
    input.setAttribute("id", "validation-input");
  } else {
    input.setAttribute("id", "validation-input.invalid");
  }
}
