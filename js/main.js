//////////skills Tab starts////////
const tabs= document.querySelectorAll(['data-target']),
tabContent = document.querySelectorAll(['data-content'])
 
tabs.forEach(tab => {
    tab.addEventListener("click",() =>{
 const target = document.querySelector(tab.dataset.target)
tabContent.forEach( tabContents => {
tabContents.classList.remove('skills__active')
})
target.classList.add('skills__active')
tabs.forEach( tab =>{
tab.classList.remove('skills__acive')

})
tab.classList.add()

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
/////////links active work//////
const linkWork=document.querySelectorAll('.work__item')
function activeWork() {
    linkWork.forEach(L=>I.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(L=>I.addEventListener("click",activeWork))

/////popupjs///////

document.addEventListener('click',(e) =>{
if(e.target.classList.contains("work__button")){
    togglePortfoliopopup();
}
})
function   togglePortfoliopopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open")
}
document.querySelector(".portfolio__popup-close").addEventListener('click',togglePortfoliopopup)