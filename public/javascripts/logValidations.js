window.addEventListener('load', function(){
    
	let formulario=document.querySelector('form')
    formulario.addEventListener('submit', function(e){   
        e.preventDefault() 
        let errores=[]
        let ulErrores=document.querySelector('#article-container-form-regis-error')
        let campoEmail=document.querySelector('#email')
        let campoPass=document.querySelector('#pass')
        let emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        if(campoPass.value==''){
            errores.push('La contraseña no puede estar vacia.')
        }
        if(!emailRegex.test(campoEmail.value)){
            errores.push('Ingrese un email con formato valido.')
        }
        
        if(errores.length > 0){
            for(error of errores){
                ulErrores.innerHTML+='<i class="fas fa-exclamation-circle" style="color: rgb(231, 231, 23);"> </i>'+error
            }
        } else [
            this.submit()
        ]
    })
})