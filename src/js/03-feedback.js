import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');


const dataChanges = () => {
  let data = {
    email: inputEmail.value,
    message: inputMessage.value
  }
localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

inputEmail.addEventListener('input', throttle(dataChanges, 500));
inputMessage.addEventListener('input', throttle(dataChanges, 500));


const onLoad = e => {
  let savedSettings = localStorage.getItem(STORAGE_KEY);

  if (savedSettings !== null) {
    const parsedSettings = JSON.parse(savedSettings);
    inputEmail.value = parsedSettings.email;
    inputMessage.value = parsedSettings.message;
  } 

   };

window.addEventListener("load", onLoad);

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let savedSettings = localStorage.getItem(STORAGE_KEY);
  
  if (savedSettings !== null) {
    const parsedData = JSON.parse(savedSettings);

    console.log(parsedData);
    localStorage.removeItem(STORAGE_KEY);
  }

  form.reset();
}

