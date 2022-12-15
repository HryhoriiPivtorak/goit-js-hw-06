const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    if (formElements.email.value && formElements.password.value) {
        const array = {
            email: formElements.email.value,
            password: formElements.password.value
        }
        console.log ('array: ', array);
        form.reset();
    } else {
        alert('Please, complete all fields!')
    }
   
}