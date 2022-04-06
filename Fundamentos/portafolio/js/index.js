const contactForm = getElementById('contacto')
const errorDiv = getElementById('error')

contactForm.onSubmit = function(event){
    event.preventDefault()
    const nombre = event.target.nombre.value
    const asunto = event.target.asunto.value
    const email = event.target.email.value
    const mensaje = event.target.mensaje.value

    if(nombre!="" && email!="" && asunto!="" && mensaje!=""){
        console.log("Datos correctos!")
        event.target.submit()
    }else{
        errorDiv.innerHTML=""
        const p = document.createElement("p")
        p.innerText = "Datos incorrectos! Favor de verificar"
        errorDiv.appendChild(p)
    }
}