/*---------------------- dom references ---------------------*/

const headerMenu = document.querySelector('.header_floatmenu')
const headerContainer = document.querySelector('.header_containerfloat')

const body = document.querySelector('body')

headerContainer.addEventListener('click', (e) => {
	if (window.innerWidth < 680) {
		headerMenu.classList.toggle('showMenu')
	}
	e.stopPropagation()
})

body.addEventListener('click', (e) => {
	headerMenu.classList.remove('showMenu')
})

