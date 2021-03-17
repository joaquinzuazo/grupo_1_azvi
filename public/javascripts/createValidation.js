window.addEventListener('load', function () {
	let formulario = document.querySelector('form')
	formulario.addEventListener('submit', function (e) {
		e.preventDefault()
		let errores = [];
		let ulErrores = document.querySelector('#article-container-form-regis-error')

		let campoNombre = document.querySelector("#name");
		if (campoNombre.value == ""){
			errores.push("El campo de Nombre tiene que estar completo");
		} else if (campoNombre.value.length < 5){
			errores.push("El campo de Nombre debe tener al menos 5 caracteres");
		}


		let campoApellido = document.querySelector("#lastname")
		if (campoApellido.value == ""){
			errores.push("El campo de Apellido tiene que estar completo");
		} else if (campoApellido.value.length < 5){
			errores.push("El campo de Apellido debe tener al menos 5 caracteres");
		}

		let campoCelular = document.querySelector("#phone")
		if (campoCelular.value == '' || campoCelular != Number){
			errores.push('El campo no puede estar vacio y tiene que ser solo numeros');
		} 

		let campoEmail = document.querySelector("#email")
		let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		if (!emailRegex.test(campoEmail.value)){
			errores.push("Ingrese un email con formato valido");
		}

		let campoDescripcion = document.querySelector("#description");
		if (campoDescripcion.value == ""){
			errores.push("El campo de Descripcion tiene que estar completo");
		} else if (campoNombre.value.length < 40){
			errores.push("El campo de Descripcion debe tener al menos 40 caracteres");
		}

		if (errores.length > 0) {
		ulErrores.innerHTML = ''
			for (error of errores) {
				ulErrores.innerHTML += `<p style="font-size:14px"><i class="fas fa-exclamation-triangle" style="color: rgb(199, 199, 26); font-size:12px;"></i>  ${error}</p>`;
			}
		} else [this.submit()]
	})
})
