window.addEventListener('load', function () {
	let formulario = document.querySelector('form')
	formulario.addEventListener('submit', function (e) {
		e.preventDefault()
		let errores = {
				nombre: "",
				apellido: "",
				phone: "",
				email: "",
				descripcion: "",
		}


		let campoNombre = document.querySelector(".name");
		if (campoNombre.value == ""){
			errores.nombre = "El campo de Nombre tiene que estar completo";
		} else if (campoNombre.value.length < 5){
			errores.nombre = "El campo de Nombre debe tener al menos 5 caracteres";
		}

		let campoApellido = document.querySelector(".lastname")
		if (campoApellido.value == ""){
			errores.apellido = "El campo de Apellido tiene que estar completo";
		} else if (campoApellido.value.length < 5){
			errores.nombre = "El campo de Apellido debe tener al menos 5 caracteres";
		}

		let campoCelular = document.querySelector(".phone")
		if (campoCelular.value == '' || campoCelular != Number){
			errores.phone = 'El campo no puede estar vacio y tiene que ser solo numeros'
		}

		let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		if (!emailRegex.test(campoEmail.value)){
			errores.email = "Ingrese un email con formato valido.";
		}

		let campoDescripcion = document.querySelector(".description");
		if (campoDescripcion.value == ""){
			errores.descripcion = "El campo de Descripcion tiene que estar completo";
		} else if (campoNombre.value.length < 40){
			errores.nombre = "El campo de Descripcion debe tener al menos 40 caracteres";
		}

		if (errores.length > 0) {
			errores.innerHTML = ''
			for (error of errores) {
				ulErrores.innerHTML += `Error`
			}
		} else [this.submit()]
	})
})
