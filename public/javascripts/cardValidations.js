const errorHtml = (errorMessage) => `<i class='fas fa-exclamation-triangle'></i>${errorMessage}`

const regexName = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/g

const cleanErrors = () => {
	const errors = document.querySelectorAll('.error')
	setTimeout(() => {
		errors.forEach((error) => (error.innerHTML = ''))
	}, 2000)
}

const validateCreditCard = (numbers, inp) => {
	// console.log(numbers,input)
	if (numbers.length < 16) {
		const errorElement = document.querySelector(`.error_${inp.name}`)
		errorElement.innerHTML = errorHtml(errorMessage.numbers)
		return true
	}
	return false
}

const validateName = (name, inp) => {
	// console.log(name)
	// console.log(regexName.test(name))
	const isValidName = regexName.test(name)
	if (!isValidName) {
		const errorElement = document.querySelector(`.error_${inp.name}`)
		errorElement.innerHTML = errorHtml(errorMessage.name)
		return true
	}
	return false
}
const errorMessage = {
	must_completed: 'El campo no puede estar vacio',
	name: 'Nombre invalido',
	numbers: 'Completa los 16 numeros de la tarjeta',
}

const validateCard = (inputs) => {
	const errors = {
		count: 0,
	}

	inputs.forEach((inp) => {
		if (!inp.value) {
			const errorElement = document.querySelector(`.error_${inp.name}`)
			errorElement.innerHTML = errorHtml(errorMessage.must_completed)
			// console.log(inp.name);
			errors.count++
		} else if (inp.name == 'name') {
			validateName(inp.value, inp) && errors.count++
		} else if (inp.name == 'numbers') {
			// console.log('errors')

			validateCreditCard(inp.value, inp) && errors.count++
		}
	})
	cleanErrors()
	return errors.count
}

export default validateCard
