//Creando variables para los controles 
var nombre  = document.getElementById("nombre");
var email   = document.getElementById("email");
var asunto  = document.getElementById("asunto");
var mensaje = document.getElementById("mensaje");

function Enviar(){
//validando el ingreso de los datos
if(nombre.value==""){
    alert("Ingresa tu Nombre y Apellidos");
    nombre.focus();
}else if(email.value==""){
    alert("Ingresa tu Correo");
    email.focus();
}else if(asunto.value==""){
    alert("Ingresa el Asunto");
    asunto.focus();
}else if(mensaje.value==""){
    alert("Ingresa tu Mensaje");
    mensaje.focus();
}else {
    alert("Enviado con Exito")
}
return ;
}

