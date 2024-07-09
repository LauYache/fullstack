document.addEventListener('DOMContentLoaded', ()=> {
    const body = document.body;
    const buttonContraste = document.getElementById('contraste');
    const formulario = document.getElementById('formulario');
    const botonEnviar = document.getElementById('enviar');
    let modoContraste = false;
    let formularioCompleto = false;

    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); 
    });

    botonEnviar.addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const nacimiento = document.getElementById('nacimiento').value;
        const mail = document.getElementById("mail").value;
        const constraste = document.getElementById('contraste').value;
        validarFormulario(nombre, apellido, nacimiento, mail);
        });

    buttonContraste.addEventListener('click', () => {
     
        if (buttonContraste.textContent === 'Cambiar a original'){
            formulario.className = 'original';
            body.className  = 'original';
            //modoContraste = false;
            buttonContraste.textContent = 'Cambiar a contraste';

        } else {
            buttonContraste.textContent = 'Cambiar a original';
            formulario.className = 'contraste';
            body.className  = 'contraste';
            modoContraste = true;
        }
    });

});

function emptyAlert(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {  
        alert(`Por favor ingrese un valor valido`);
       return false;
    }else{
        return true;
    }


}  


function validarFormulario(nombre, apellido, nacimiento, mail){
    if(emptyAlert(nombre) &&
    emptyAlert(apellido) &&
    emptyAlert(nacimiento) &&
    emptyAlert(mail)
){
    alert(`Formulario enviado con exito`);

}}


