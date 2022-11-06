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


const onLoad = e => {
  let savedSettings = localStorage.getItem(STORAGE_KEY);
 

  
  if (savedSettings !== null) {
    const parsedSettings = JSON.parse(savedSettings);
    inputEmail.value = parsedSettings.email;
    inputMessage.value = parsedSettings.message;
  } 

   };

window.addEventListener("load", onLoad);


// player.on('input', throttle(onTimeUpdate, 500));
// function onTimeUpdate(data) {
//   localStorage.setItem(STORAGE_KEY, data.seconds);
// }
