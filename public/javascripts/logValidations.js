window.addEventListener('load', function () {
	let formulario = document.querySelector('form')
	let campoPass = document.querySelector('#pass')
	formulario.addEventListener('submit', function (e) {
		e.preventDefault()
		let errores = []
		let ulErrores = document.querySelector('#article-container-form-regis-error')
		let campoEmail = document.querySelector('#email')
		let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

		if (campoPass.value == '') {
			errores.push('La contraseña no puede estar vacia.')
		}
		if (!emailRegex.test(campoEmail.value)) {
			errores.push('Ingrese un email con formato valido.')
		}

		if (errores.length > 0) {
			ulErrores.innerHTML = ''
			for (error of errores) {
				ulErrores.innerHTML += `<p style="font-size:14px"><i class="fas fa-exclamation-triangle" style="color: rgb(199, 199, 26); font-size:12px;"></i>  ${error}</p>`
			}

			;`<img src=${informacion.data[i].images.url}>`
		} else [this.submit()]
	})

	const formIconPassword = document.querySelector('.form-icon-password')

	formIconPassword.addEventListener('click', (e) => {
		e.target.classList.toggle('form-icon-efffect')
		campoPass.getAttribute('type') == 'Password'
			? (campoPass.setAttribute('type', 'text'), e.target.classList.replace('fa-eye-slash', 'fa-eye'))
			: (campoPass.setAttribute('type', 'Password'), e.target.classList.replace('fa-eye', 'fa-eye-slash'))
	})
})
