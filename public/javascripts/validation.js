const validations = {
	name: (name) => validator.isLength(name, { min: 2, max: 100 }),
	lastname: (lastname) => validator.isLength(lastname, { min: 2, max: 100 }),
	email: (email) => validator.isEmail(email),
	password: (psw) => validator.isStrongPassword(psw),
	localidad: (localidad) => validator.isLength(localidad, { min: 3, max: 100 }),
}

const ERROR_MESSAGES = {
	name: 'Minimo 2 caracteres !',
	lastname: 'Minimo 2 caracteres !',
	email: 'Formato de email invalido',
	password: 'Minimo 8 caracteres un numero y un caracter especial',
	localidad: 'Selecciona una localidad',
	emailExists: 'El email ya existe en nuestra base de datos',
}

/*---------------------- error block ---------------------*/

const errorBlock = (errorMessage) => `<p class="validationMessage" style="font-size: 12px">
<i class="validationMessage--i fas fa-exclamation-triangle"  ></i
>${errorMessage}
</p>`

/*---------------------- print error ---------------------*/

const printErrorInput = (input, callback) => {
	input.parentNode.insertAdjacentHTML('beforeend', errorBlock(ERROR_MESSAGES[input.name]))
}

/*---------------------- check email ---------------------*/

const checkEmail = async (email, input) => {
	console.log(email)
	const response = await fetch(`users/emailExists`, {
		method: 'POST',
		body: JSON.stringify({ email: email }),
		headers: {
			'Content-Type': 'application/json',
		},
	})
	 
	const { emailExists } = await response.json()

	if (emailExists) {
		input.parentNode.insertAdjacentHTML('beforeend', errorBlock(ERROR_MESSAGES.emailExists))
	}
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
		// console.log(input)
		input.classList.add('moveError')
	}
}

const getValidation = (inputs) => {
	const errors = { count: 0 }
	inputs.forEach((input, inx, arr) => {
		removeErrors(input)
		// console.log(input.name, input.value)
		if (!validations[input.name](input.value)) {
			printErrorInput(input, checkOnInputPrintError(input, arr))
			errors.count++
		} else {
			if (input.name == 'email') {
				checkEmail(input.value, input)
			}
		}
	})
	return errors.count
}

/*---------------------- DOM REFERENCES ---------------------*/
const inputs = document.querySelectorAll('.article-container-input')
// console.log(inputs)
const form = document.getElementById('form-register')

inputs.forEach((input) => {
	input.addEventListener('blur', () => getValidation([input]))
})

inputs.forEach((input) => {
	input.addEventListener('focus', () => removeErrors(input))
})

form.addEventListener('submit', (e) => {
	const errors = getValidation(inputs)
	if (errors) {
		e.preventDefault()
		// console.log(errors)
	}
})
