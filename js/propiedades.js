function ValidaNombre(){
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("msgNombre");

    if(nombre.length < 5){
        mensaje.innerText = "El nombre debe de tener almenos 5 caracteres"
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El nombre es correcto";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }

}
function ValidarCorreo(){
    var correo = document.getElementById("correo").value;
    var msgCorreo = document.getElementById("msgCorreo");

    if( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo)) ) {
        msgCorreo.innerText = "Ingrese un correo valido";
        msgCorreo.classList.add("error");
    }else{
        msgCorreo.innerText = "Correo ingresado es correcto";
        msgCorreo.classList.remove("error");
        msgCorreo.classList.add("exito");
    }
}

 function ValidaTelefono(){
    var numero = document.getElementById("numero").value;
    var mensaje = document.getElementById("msgNumero");

    if( !(/^\d{9}$/.test(numero)) ) {
        mensaje.innerText = "El numero debe de tener 9 caracteres"
        mensaje.classList.add("error");
}else{
       mensaje.innerText = "Telefono correcto";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }

}

