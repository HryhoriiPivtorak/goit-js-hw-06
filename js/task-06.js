const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(input.dataset.length);
  console.log(event.currentTarget.value.length);

  if (event.currentTarget.value.length == input.dataset.length) {
    input.setAttribute("id", "validation-input.valid");
    console.log("Valid");
  } else if (event.currentTarget.value.length === 0) {
    input.setAttribute("id", "validation-input");
    console.log("Basic");
  } else {
    input.setAttribute("id", "validation-input.invalid");
    console.log("Invalid");
  }
}
