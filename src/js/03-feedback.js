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


form.addEventListener('submit', () => { 
  
});

inputEmail.addEventListener('input', dataChanges);
inputMessage.addEventListener('input', dataChanges);


const onFormSubmit = e => {
  e.preventDefault();
  let storedTime = localStorage.getItem(STORAGE_KEY);
  
  if (storedTime !== null) {
    console.log(localStorage.getItem(STORAGE_KEY));
  } 
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  

};

window.addEventListener("load", onFormSubmit);


// player.on('input', throttle(onTimeUpdate, 500));
// function onTimeUpdate(data) {
//   localStorage.setItem(STORAGE_KEY, data.seconds);
// }
