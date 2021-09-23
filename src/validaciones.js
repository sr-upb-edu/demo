function validar_nombre_usuario(string) {

    var validacion = false;
    var caracteresPermitidos= /[A-Z\s]+/i;
    var espacioMayuscula=/^[A-Z]\D+\s?[A-Z]?/;
    var espaciosNoPermitidos= /\s+$/;

    var string = document.getElementById("dato_nombre_usuario").value;

    if(!caracteresPermitidos.test(string)){
        validacion;
    }else if (!espacioMayuscula.test(string)) {
        validacion;
    }else if (espaciosNoPermitidos.test(string)) {
        validacion;
    }else{
        validacion = true;
    }
    //alert(validacion);
    return(validacion);
  
}

function validar_edad_usuario(edad) {

}

function validar_contrasena(string) {

}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_contrasena = validar_contrasena;
