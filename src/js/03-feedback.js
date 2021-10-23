import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const feedbackForm = document.querySelector(".feedback-form");
const inputForm = document.querySelector(".feedback-form input");
const textareaForm = document.querySelector(".feedback-form textarea");

const formValues = {
    email: "",
    message: ""
}
    
feedbackForm.addEventListener('input', throttle(onMessageInput, 500));

function onMessageInput(event) {

    if (event.target === inputForm) {
        formValues.email = event.target.value;
    }
    else if (event.target === textareaForm) {
        formValues.message = event.target.value;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));

}

const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (localData) {
    inputForm.value = localData.email;
    textareaForm.value = localData.message;
}


feedbackForm.addEventListener('submit', onSubmit);

function onSubmit(event) {

    event.preventDefault();
    console.log(formValues);
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
 }