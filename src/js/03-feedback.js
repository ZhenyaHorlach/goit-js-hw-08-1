import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextareaInput() {
  const formDataStringified = JSON.stringify({ email: form.email.value, message: form.message.value })
  localStorage.setItem('feedback-form-state', formDataStringified)
}

function populateTextarea() {
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    form.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    form.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
  }
}