const inputFile = document.getElementById('avatar_file')
const errorContainer = document.querySelector('.validationMessage')
const formAvatar = document.querySelector('.mainAdmin_personalImage_form')

const checkSize = (element) => {
	errorContainer.innerHTML = ''
	if (element.files[0].size > 2097152) {
		errorContainer.innerHTML = `<i class="validationMessage--i fas fa-exclamation-triangle"></i>El archivo no puede superar los 2 Mb`
		return true
	}
}

inputFile.addEventListener('change', (e) => {
	checkSize(e.target)
})

formAvatar.addEventListener('submit', (e) => {
	const fileIsBig = checkSize(inputFile)

	if (fileIsBig) {
		e.preventDefault()
	}
})
