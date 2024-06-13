const { body } = require('express-validator');
const db = require('../db/models');
const bycryptjs = require('bcryptjs');
const user = db.User;

const register = [
    body("email")
    .notEmpty() //no se puede dejar vacio
    .withMessage("El email es un campo obligatorio")
    .bail()
    .isEmail()
    .withMessage("debes escribir un formato de correo valido")
    .custom(function(value, {req}){
        return db.User.findOne({
            where: email = value
        })
        .then(function (user) {
            console.log("user: ", JSON.stringify(user,null,4));
            if (user)
                throw new Error ("Ingresar un mail que no haya sido utilizado")
        })
    }),
    //value: de donde viene, trae lo que escribio el usuario
    
    body("usuario")
    .notEmpty()
    .withMessage("Nombre: campo obligatorio"),

    body("contraseña")
    .notEmpty()
    .withMessage("Contraseña: campo obligatorio")
    .isLength({min: 4})
    .withMessage("La contraseña debe contener como mínimo 4 caracteres")
    .custom((value, {req}){
        return db.User.findOne({
            where: {email:req.body.email}
        })
        .then(funtion(user){
            if(user){
                const password = req.password;
                const passwordOk = bycryptjs.compareSync(value,password)
                if(!passwordOk){
                    throw new Error('contraseña incorrecta')
                }
            }
        })
    }),
    //Debe almacenarse en la base de datos de forma encriptada. 
    //corregir

    body("fecha_nacimiento"),

    body("nro_documento"),

    body("foto_perfil"),
    //Es un campo de texto a donde se guardará el nombre de la imagen
];

module.exports = register;

// Al crear nuevos usuarios en la base de datos debe plasmarse la fecha de creación en el campo created_at (o createdAt si usan camel case).
//Queda a criterio del grupo agregar campos adicionales para los usuarios.
//La página será accesible únicamente para los usuarios que no estén logueados. Queda a decisión del equipo a donde redirigirlo si quiere acceder.