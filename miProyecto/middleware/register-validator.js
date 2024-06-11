const { body } = require('express-validator');

const register = [
    body("email")
    .notEmpty() //no se puede dejar vacio
    .withMessage("El email es un campo obligatorio")
    .bail()
    .isEmail()
    .withMessage("debes escribir un formato de correo valido"),
    //Falta: No podrán registrarse emails duplicados
    
    body("usuario")
    .notEmpty()
    .withMessage("Nombre: campo obligatorio"),

    body("contraseña")
    .notEmpty()
    .withMessage("Contrasena: campo obligatorio"),
    //Consigna: debe tener al menos 4 caracteres. 
    //Debe almacenarse en la base de datos de forma encriptada. 
    //Si el usuario envía el campo vacío o con menos de 4 caracteres debe recibir un mensaje especificando el error.

    body("fecha_nacimiento"),

    body("nro_documento"),

    body("foto_perfil"),
    //Es un campo de texto a donde se guardará el nombre de la imagen
];

module.exports = register;

// Al crear nuevos usuarios en la base de datos debe plasmarse la fecha de creación en el campo created_at (o createdAt si usan camel case).
//Queda a criterio del grupo agregar campos adicionales para los usuarios.
//La página será accesible únicamente para los usuarios que no estén logueados. Queda a decisión del equipo a donde redirigirlo si quiere acceder.