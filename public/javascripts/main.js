/*---------------------- dom references ---------------------*/
 
const headerMenu = document.querySelector('.header_floatmenu')
const headerContainer = document.querySelector('.header_containerfloat')

const body = document.querySelector('body')


headerContainer.addEventListener('click',()=>{

    if(window.innerWidth<680){

        headerMenu.classList.toggle('showMenu')
    }
   
})

body.addEventListener('click',()=>{

    headerMenu.classList.remove('showMenu')
},true)