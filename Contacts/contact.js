// Animation on Scrool

const contactCard1 = document.querySelector('.contacts__head--cards');
const contactCard2 = document.querySelector('.contacts__head--cards2');
const contactCard3 = document.querySelector('.contacts__head--cards3');
const contactForm = document.querySelectorAll('.contacts__form--container')

const contactObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('contact__cards--observer');
        }else{
            entry.target.classList.remove('contact__cards--observer');
        }
    })
},
{
    threshold: 0.5,
}
)

contactObserver.observe(contactCard1);
contactObserver.observe(contactCard2);
contactObserver.observe(contactCard3);
contactObserver.observe(contactForm);