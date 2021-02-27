window.addEventListener('load', function () {
	let formulario = document.querySelector('form')
	formulario.addEventListener('submit', function (e) {
		e.preventDefault()
		let errores = []
		let ulErrores = document.querySelector('#article-container-form-regis-error')
        let campoNombre= document.querySelector('.name')
        let campoCelular = document.querySelector('.phone')
		let campoEmail = document.querySelector('#email')
		let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

		if (campoNombre.value == '') {
			errores.push('El nombre no puede estar vacio.')
		}
        if(campoNombre.length < 5){
            errores.push('El nombre deberá tener al menos 5 caracteres')
        }
        if (campoCelular == ''){
            errores.push('Colocar un número de celular')
        }

		if (!emailRegex.test(campoEmail.value)) {
			errores.push('Ingrese un email con formato valido.')
		}

		if (errores.length > 0) {
			ulErrores.innerHTML = ''
			for (error of errores) {
				ulErrores.innerHTML += `<p style="font-size:14px"><i class="fas fa-exclamation-triangle" style="color: rgb(199, 199, 26); font-size:12px;"></i>  ${error}</p>`
			}
            
            `<img src=${informacion.data[i].images.url}>`
		} else [this.submit()]
	})
})
