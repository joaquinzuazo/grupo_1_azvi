const validations = {
	name: (name) => validator.isLength(name, { min: 3, max: 100 }),
	lastname: (lastname) => validator.isLength(lastname, { min: 3, max: 100 }),
	email: (email) => validator.isEmail(email),
	password: (psw) => validator.isStrongPassword(psw),
	localidad: (localidad) => validator.isLength(localidad, { min: 3, max: 100 }),
}

const ERROR_MESSAGES = {
	name: 'Minimo 3 caracteres !',
	lastname: 'Minimo 3 caracteres !',
	email: 'Formato de email invalido',
	password: 'Minimo 8 caracteres un numero y un caracter especial',
	localidad: 'Selecciona una localidad',
}

const printErrorInput = (input, callback) => {
	input.parentNode.insertAdjacentHTML(
		'beforeend',
		`<p class="validationMessage" style="font-size: 12px">
        <i class="validationMessage--i fas fa-exclamation-triangle"  ></i
        >${ERROR_MESSAGES[input.name]}
    </p>`
	)
}

const removeErrors = (input) => {
	const hasError = input.parentNode.querySelector('.validationMessage')
	if (hasError) {
		input.parentNode.removeChild(hasError)
	}
	input.classList.remove('moveError')
}

const checkOnInputPrintError = (input, arr) => {
	if (arr.length == 1) {
		console.log(input)
		input.classList.add('moveError')
	}
}

const getValidation = (inputs) => {
	const errors = { count: 0 }
	inputs.forEach((input, inx, arr) => {
		removeErrors(input)
		console.log(input.name, input.value)
		if (!validations[input.name](input.value)) {
			printErrorInput(input, checkOnInputPrintError(input, arr))
			errors.count++
		}
	})
	return errors.count
}

/*---------------------- DOM REFERENCES ---------------------*/
const inputs = document.querySelectorAll('.article-container-input')
console.log(inputs)
const form = document.getElementById('form-register')

inputs.forEach((input) => {
	input.addEventListener('blur', () => getValidation([input]))
})

inputs.forEach(input=>{
	input.addEventListener('focus',()=>removeErrors(input))
})

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const errors = getValidation(inputs)
	if (errors) {
		e.preventDefault()
		// console.log(errors)
	}
})
