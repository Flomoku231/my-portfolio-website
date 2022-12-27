const cards = document.querySelectorAll('.portfolio__card');

const Portfolioobserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('section__card1--observer');
        }else{
            entry.target.classList.remove('section__card1--observer');
        }
    }))
},
{
    threshold: 0.2,
});

cards.forEach((card)=>{
    Portfolioobserver.observe(card);
})