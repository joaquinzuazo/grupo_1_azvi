const { check, body } = require('express-validator')

const allValidations = {
	email: check('email').isEmail().withMessage('Formato de email invalido'),
	name: check('name').isAlpha().withMessage('El nombre solo tiene que contener letras  '),
	lastname: check('lastname').isAlpha().withMessage('El apellido solo tiene que contener letras  '),
    password:check('password').isStrongPassword({minLength:6 ,minSymbols:0}).withMessage('Minimo 6 caracteres, 1 mayuscula y 1 numero '),
    location:check('localidad').isLength({min:3}).withMessage('Selecciona una localidad')
}

const validate = (...validations) => {
	const chosenValidations = validations

	const resul = chosenValidations.reduce((obj, val) => {
		obj.push(allValidations[val])

		return obj
	}, [])

	return resul.length ? resul : Object.values(allValidations)
}

module.exports = validate
