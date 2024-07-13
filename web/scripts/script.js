document.addEventListener('DOMContentLoaded', ()=> {
    const body = document.body;
    const buttonContraste = document.getElementById('contraste');
    const formulario = document.getElementById('formulario');
    const botonEnviar = document.getElementById('form-submit');
    const card = document.getElementById('form-card');
    const nav = document.getElementById('nav');
    const footer = document.getElementById('footer');
    let modoContraste = false;
    let formularioCompleto = false;

    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); 
    });

    botonEnviar.addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const mail = document.getElementById("mail").value;
        const constraste = document.getElementById('contraste').value;
        validarFormulario(nombre, apellido, mail);
        });

    buttonContraste.addEventListener('click', () => {
     
        if (buttonContraste.textContent === 'Cambiar a original'){
         
            body.className  = 'original';
            card.className = 'card text-bg-light mx-auto';
            nav.className = 'navbar navbar-expand-lg bg-body-tertiary'; 
            footer.className = 'bg-body-tertiary text-center';

            buttonContraste.textContent = 'Cambiar a contraste';

        } else {
            buttonContraste.textContent = 'Cambiar a original';
            body.className  = 'contraste';
            card.className = 'card text-bg-dark mx-auto';
            nav.className = 'navbar navbar-expand-lg bg-dark'
            footer.className = 'text-bg-dark text-center'
            modoContraste = true;
        }
    });

});

function emptyAlert(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {  
        alert(`Hay campos sin completar. Por favor rellene los datos requeridos.`);
       return false;
    }else{
        return true;
    }


}  


function validarFormulario(nombre, apellido, mail){
    if(emptyAlert(nombre) &&
    emptyAlert(apellido) &&
    emptyAlert(mail)
){
    alert(`Formulario enviado con exito`);

}}


