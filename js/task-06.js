const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {

  if (event.currentTarget.value.length == input.dataset.length) {
    if(input.classList.contains("invalid")){
      input.classList.remove("invalid");
    }
    input.classList.add("valid");

  } else if (event.currentTarget.value.length === 0) {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }else if(input.classList.contains("invalid")){
      input.classList.remove("invalid");
    }

  } else {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    input.classList.add("invalid");
  }
}
