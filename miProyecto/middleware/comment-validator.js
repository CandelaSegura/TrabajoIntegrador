const { body } = require('express-validator');
const db = require('../database/models');

let commentValidation = [
    body("comentario") 
        .notEmpty()
        .withMessage("No se puede enviar si el comentario esta vacio")
        .isLength({min:3})
        .withMessage("El comentario debe tener al menos 3 caracteres.")
];

module.exports = commentValidation