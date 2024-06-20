const { body } = require('express-validator');
const db = require('../database/models');


const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Obligatorio completar email")
        .isEmail()
        .withMessage("Escribir un formato de correo valido"),
        //buscar en la base de datos y fijarse si existe
    body ("contrasena")
        .notEmpty()
        .withMessage("Completar este campo con una contraseña")
]

module.exports = loginValidation;