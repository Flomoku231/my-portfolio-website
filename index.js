
// Popup logic
var popup = document.querySelector('.menu__popup--hide');
// Left Popup
var profilePopup = document.querySelector('.container__left');


function showMe(){
   popup.classList.add("menu__popup--show");
 };
 function hideMe(){
    popup.classList.remove("menu__popup--show");
 };
//  Profile Popup functions
function displayProfile(){
   profilePopup.classList.add('container__left__display');
   
}
function hideProfile(){
   profilePopup.classList.remove('container__left__display');
}

//  SWIPER LOGIC

//  Form Input
const form = document.querySelector('.contacts__form');
// const submitButton = document.querySelector('.form--button');
const Name = document.getElementById('input__name');
const Email = document.getElementById('input__email');
const message = document.getElementById('input__message');
const errMessage = document.querySelector('.error__message');
const emailError = document.querySelector('.error__email');
const messageError = document.querySelector('.message__error');


form.addEventListener('submit', function(e){
   e.preventDefault();
   validateInputs();
})

const validateInputs=()=>{
   if(Name.value == '' ){
      errMessage.innerHTML = "name is required."
   }
   if(Email.value == ''){
     emailError.innerHTML = "email is required."
   }
   else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(Email.value))
   {
      emailError.innerHTML = "email is not valid."
   }
   if(message.value == ''){
      messageError.innerHTML = "message is required."
   }
}




// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }



