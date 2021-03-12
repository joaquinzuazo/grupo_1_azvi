const inputFile = document.getElementById('avatar_file')
const errorContainer = document.querySelector('.validationMessage')
const formAvatar = document.querySelector('.mainAdmin_personalImage_form')
const avatarImg = document.querySelector('.mainAdmin__avatarImg')
const buttona = document.querySelector('.mainAdmin__inputfileContainer--button')
buttona.addEventListener('click',e=> inputFile.click())
const checkSize = (element) => {
	errorContainer.innerHTML = ''
	if (element.files[0]?.size > 2097152) {
		errorContainer.innerHTML = `<i class="validationMessage--i fas fa-exclamation-triangle"></i>El archivo no puede superar los 2 Mb`
		return true
	}
}

const ORIGINAL_AVATAR_SRC = avatarImg.getAttribute('src')

inputFile.addEventListener('change', (e) => {
	const fileIsBig = checkSize(e.target)
	if (!fileIsBig) {
		const reader = new FileReader()
		// console.log(e.target.files);
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0])

			reader.addEventListener('load', () => {
				avatarImg.src = reader.result
			})
		} else {
			avatarImg.src = ORIGINAL_AVATAR_SRC
		}
	}
})

formAvatar.addEventListener('submit', (e) => {
	const fileIsBig = checkSize(inputFile)

	if (fileIsBig) {
		e.preventDefault()
	}
})
