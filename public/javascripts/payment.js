import validateCard from './cardValidations.js'

/*---------------------- CONSTANT DATA ---------------------*/

const DEFAULT_CARD_NAME = 'Nombre y apellido'

const DEFAULT_CARD_NUMBERS = 'XXXX - XXXX - XXXX - XXXX'

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
const ACTUAL_YEAR = new Date().getFullYear()

/*---------------------- COMPLETED INPUT SELECT FOR MONTHS AND YEARS ---------------------*/
const monthInput = document.getElementById('monthSelect')
const yearSelect = document.getElementById('yearSelect')

MONTHS.forEach((month, inx) => {
	const valueMonth = inx + 1 < 10 ? `0${inx + 1}` : inx + 1
	monthInput.innerHTML += `<option value=${valueMonth} >${valueMonth}</option>`
})

for (let i = 0; i < 6; i++) {
	yearSelect.innerHTML += `<option>${ACTUAL_YEAR + i}</option>`
}

/*---------------------- DOM REFERENCES ---------------------*/

const cardNumbers = document.getElementById('numbers')
const cardName = document.getElementById('name')
const cardCvv = document.getElementById('cvv')

const nameInput = document.getElementById('nameInput')
const numbersInput = document.getElementById('numbersInput')

const container = document.querySelector('.cardForm__container')

const cardMonth = document.getElementById('month')
const cardYear = document.getElementById('year')

const payButton = document.getElementById('payButton')
const cardForm = document.getElementById('cardForm')
const cvvInput = document.getElementById('cvvInput')
const cardsInputs = document.querySelectorAll('input , select')

/*---------------------- functions---------------------*/

const freezeCard = () => {
	cardsInputs.forEach((inp) => (inp.disabled = 'true'))
}

/*---------------------- event handler---------------------*/

nameInput.addEventListener('input', (e) => {
	// console.log('e.tar')
	if (e.target.value.length == 0) {
		cardName.innerText = DEFAULT_CARD_NAME
	} else if (e.target.value.length < 30) {
		cardName.innerText = e.target.value
	}
})

const formatInput = (valueInput) => {
	const value = [...valueInput]

	const valueWhitSpaces = value.map((element, idx) => ((idx + 1) % 4 == 0 && idx + 1 != 16 ? `${element}-` : element))
	//   console.log(valueWhitSpaces.length);
	return valueWhitSpaces.join('')
}

numbersInput.addEventListener('input', (e) => {
	if (e.target.value.length == 0) {
		cardNumbers.innerText = DEFAULT_CARD_NUMBERS
	} else if (e.target.value.length <= 16) {
		cardNumbers.innerText = formatInput(e.target.value)
	} else if (e.target.value.length >= 16) {
		e.target.value = numbersInput.value.slice(0, 16)
	}
})

/*---------------------- set month---------------------*/

monthInput.addEventListener('change', (e) => {
	month.innerText = e.target.value
})

yearSelect.addEventListener('change', (e) => {
	cardYear.innerText = e.target.value.slice(2)
})

/*---------------------- button pay ---------------------*/

payButton.addEventListener('click', (e) => {
	const errors = validateCard(cardsInputs)

	if (errors) return
	e.target.classList.add('payShow')
	e.target.disabled = 'true'
	container.style.opacity = '0.5'
	freezeCard()
	setTimeout(() => {
		swal('Pago existoso!', 'Ponete en contacto con tu provedor!', 'success').then(() => cardForm.submit())
	}, 3300)
})
/*---------------------- input cvv ---------------------*/

cvvInput.addEventListener('input', (e) => {
	e.target.value = e.target.value.slice(0, 3)
	cardCvv.innerHTML = e.target.value
	//si no tiene nada el value evalua falso el string vacio y agrega el texto por default a la card
	!e.target.value && (cardCvv.innerHTML = 'xxx')
})

/*---------------------- form submit ---------------------*/

cardForm.addEventListener('submit', (e) => {
	e.preventDefault()
})
