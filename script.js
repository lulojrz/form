const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", validarFormulario)
function validarFormulario() {
    const respuesta = document.getElementById("respuesta")



    setTimeout(() => {
        respuesta.innerHTML += `
          <p style="text-align:center">Enviado!</p>
          
          `

    }, 1000);


}
