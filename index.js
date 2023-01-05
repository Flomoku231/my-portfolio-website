
const servicesCards = document.querySelectorAll('.row1__card');
const pricesCards = document.querySelectorAll('.prices__content--card');

const observer = new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
      if(entry.isIntersecting){
         entry.target.classList.add('servicesCards--observer');
      }else{
         entry.target.classList.remove('servicesCards--observer');
      }
   })
},
{
   threshold: 0.2,
}
)

servicesCards.forEach((servicesCard)=>{
   observer.observe(servicesCard);
});

const pricesObserver = new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
      if(entry.isIntersecting){
         entry.target.classList.toggle('price--observer');
      }else{
         entry.target.classList.remove('price--observer');
      }
   })
},
{
   threshold: 0.2,
}
)

pricesCards.forEach((pricesCard)=>{
   pricesObserver.observe(pricesCard)
})

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

const Form = document.querySelector('.contacts__form');
const Name = document.getElementById('input__name');
const Email = document.getElementById('input__email');
const message = document.getElementById('input__message');

function sendEmail(e){
   let tempParams = {
      user_name: Name.value,
      user_email: Email.value,
      message: message.value,
   };

   emailjs.send('contact_service', 'contact_template',tempParams)
            .then(function() {
               console.log('SUCCESS!');
            }, function(error) {
               console.log('FAILED...', error);
            });
}
//  SWIPER LOGIC

//  Form Input
// const submitButton = document.querySelector('.form--button');
const errMessage = document.querySelector('.error__message');
const emailError = document.querySelector('.error__email');
const messageError = document.querySelector('.message__error');


Form.addEventListener('submit', function(e){
   e.preventDefault()

   if(Name.value == '' ){
      errMessage.innerHTML = "name is required."
   }
   if(Email.value == ''){
     emailError.innerHTML = "email is required."
   }else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(Email.value)){
      emailError.innerHTML = "enter a valid email"
   }
   if(message.value == ''){
      messageError.innerHTML = "message is required."
   }
   else{
      sendEmail();

      alert("Message Sent")

      Name.value = ''
      Email.value = ''
      message.value = ''
      errMessage.innerHTML = ""
      emailError.innerHTML = ""
      messageError.innerHTML = ""
   }
  
})



// Intersection Observer


// cards.forEach((card)=>{
//     observer.observe(card);
// })
// Adding Portfolio
// const getBlogs = () => {
//    // localStorage.removeItem("blogs");
//    var result = localStorage.getItem("test");
//    var fromStorage = localStorage.getItem("portfolio");
//    var portfolioResult = JSON.parse(fromStorage);
//    if (portfolioResult){
//      document.getElementById("portfolio__card").innerHTML = portfolioResult.map((item)=>`
//    <img id="portfolio__card--image" src=${item.image} alt="Portfolio Image" />
//    <h2 id="portfolio--title">${item.title}</h2>
//    `)
//    }
   
//  }
 
//  function handleSubmitBlog(patrick){
//    patrick.preventDefault();
//    var ourform = document.getElementById("blogInput");
//    var title = ourform["title"].value;
//    var image = ourform["blogImage"].value;
  
//    if(localStorage.getItem("portfolio") == null){
//    let array = [];
//      const blog = {
//      title,
//      image,
//    }
//    array.push(blog);
//    localStorage.setItem("portfolio", JSON.stringify(array));
//    window.alert("Portfolio added successfuly");
//      getBlogs();
//    } else {
     
//      let array = JSON.parse(localStorage.getItem("portfolio"));
//      const blog = {
//      title,
//      image,
//    }
//      array.push(blog);
//      localStorage.setItem("portfolio", JSON.stringify(array));
//    window.alert("Portfolio added successfuly");
//    }
//    getBlogs();
//  }