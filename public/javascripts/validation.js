const validations = {
	name: (name) => validator.isLength(name,{ min: 3, max: 100 }),
	lastname: (lastname) => validator.isLength(lastname,{ min: 3, max: 100 }),
	 
}

const ERROR_MESSAGES = {
	name: 'Minimo 3 caracteres maximo 100 !',
	lastname: 'Minimo 3 caracteres maximo 100 !',
	 
}

const printErrorInput = (input) => {
	input.parentNode.insertAdjacentHTML(
		'beforeend',
		`<p class="validationMessage" style="font-size: 12px">
        <i class="validationMessage--i fas fa-exclamation-triangle"  ></i
        >${ERROR_MESSAGES[input.name]}
    </p>`
	)
}

const getValidation = (inputs) => {
	const errors = { count: 0 }
	inputs.forEach((input) => {
		const hasError = input.parentNode.querySelector('.validationMessage')
		if (hasError) {
			input.parentNode.removeChild(hasError)
		}
		console.log(input.name, input.value);
		if (!validations[input.name](input.value)) {
			printErrorInput(input)
			errors.count++
		}
	})
	return errors.count
}

/*---------------------- DOM REFERENCES ---------------------*/
const inputs = document.querySelectorAll('.article-container-input')
console.log(inputs);
const form = document.getElementById('form-register')

inputs.forEach(input=>{
	input.addEventListener('blur',()=>getValidation([input]))
})

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const errors = getValidation(inputs)
	if (errors) {
		e.preventDefault()
		console.log(errors)
	}
})
