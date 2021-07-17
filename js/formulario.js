//Creando variables para los controles 
var nombre  = document.getElementById("nombre");
var email   = document.getElementById("email");
var asunto  = document.getElementById("asunto");
var mensaje = document.getElementById("mensaje");
var btnEnviar = document.getElementById("btnEnviar");

//creamos la funcion para limpiar
function Limpiar(){
    nombre.value = "";
    email.value = "";
    asunto.value = "";
    mensaje.value = "";
}

//Creamos la funcion para enviar los datos
function Enviar(){
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
        } else{
            Registro();
        }
        return ;
}

//Creamos una funcion para registrar los datos
function Registro(){
        //validando los controles 
    //capturando valores
    var nom = nombre.value;
    var ema = email.value;
    var asun = asunto.value;
    var men  =  mensaje.value;
    //Llamamos a la funcion del Firebase
    //seleccionamos la tabla
    //si la tabla no existe, automaticamente el firebase la crea
    var db = database.ref('registro de consultas clientes');
    //asignamos los valores a la tabla que ha sido creada
    var registros = db.push();
    //Los valores se deberan de pasar con la estructura de JSON
    registros.set({
        nombre: nom,
        correo: ema,
        asunto: asun,
        mensaje: men
    });
    alert("Se registro los datos");
    Limpiar();
}

//Le asignamos el boton Enviar
btnEnviar.addEventListener("click", Enviar);

