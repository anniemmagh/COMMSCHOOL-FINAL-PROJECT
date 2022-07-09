//////////skills Tab starts////////
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
          tab.addEventListener("click", () => {
              const target = document.querySelector(tab.dataset.target)

              tabContent.forEach(tabContents => {
                  tabContents.classList.remove('skills__active')
              })

              target.classList.add('skills__active')


              tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
          })
      })


// /mixitup filter js///////
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


/////popupjs///////

document.addEventListener('click',(e) =>{
if(e.target.classList.contains("work__button")){
    togglePortfoliopopup();
    portfolioDetails(e.target.parentElement);
}
})
function   togglePortfoliopopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open")
}
document.querySelector(".portfolio__popup-close").addEventListener('click',togglePortfoliopopup)
function portfolioDetails(portfolioitem ) {
    document.querySelector('.pp_thumbnail img').src=portfolioitem.querySelector('.work__img').src;
document.querySelector('.portfolio__popup span').innerHTML=portfolioitem.querySelector(
    '.work__title'
).innerHTML;
document.querySelector('.portfolio__popup-body').innerHTML=portfolioitem.querySelector(
    '.portfolio__item-details'
).innerHTML;
}
/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

