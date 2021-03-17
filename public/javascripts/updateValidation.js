
const qs = text => document.querySelector(text);
const qsa = text => document.querySelectorAll(text)

window.addEventListener("load", ()=>{

    let form = qs(".mainAdmin__form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        
        

        let name = qs("#name")
        let lastname =  qs("#lastname")
        let cellphone = qs("#cellphone")
        let email = qs("#email")
        let photo = qs("#photo")
        let errors = qs(".errors")

        let errores = []
        if (name.value == ""){
            errores.push ("El campo de Nombre tiene que estar completo") 
        } else if (name.value.length < 3){
            errores.push ("El campo de Nombre debe tener al menos 3 caracteres") ;
        }

        if (lastname.value == ""){
            errores.push ("El campo de Apellido tiene que estar completo") ;
        } else if (lastname.value.length < 3){
            errores.push ("El campo de Apellido debe tener al menos 3 caracteres") ;
        }

        if (cellphone.value == ''){
            errores.push ('El campo de celular no puede estar vacio ') 
        } else if ( isNaN(cellphone.value)){
            errores.push('El campo de celular acepta solo numeros')
        }

        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!emailRegex.test(email.value)){
            errores.push ( "Ingrese un email con formato valido.");
        }

        if (errores.length > 0) {
            errors.innerHTML =''
            errores.forEach((error)=>{
                errors.innerHTML +=  "<li>" + error + "</li>"
                errors.style.color ="white"
            })
        } else [form.submit()]
    })
})