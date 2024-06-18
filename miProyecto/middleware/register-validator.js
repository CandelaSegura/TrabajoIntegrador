const { body } = require("express-validator");
const db = require('../database/models');

const registerValidation = [
    body("email")
        .notEmpty()
        .withMessage("Completar este campo con un email")
        .isEmail()
        .withMessage("Tiene que tener formato email")
        .custom(function(value, {req}){
            return db.User.findOne({ where: { email: value } })
            .then(function(user) {
                if (user) {
                    throw new Error("Este email ya se encuentra registrado");
                }
            });
    }),

    body ("usuario")
        .notEmpty()
        .withMessage("Completar este campo con un nombre")
        .custom(function(value, { req }) {      //Campo Adicional 
            if (req.body.usuario[0] != req.body.usuario[0].toUpperCase()) {
                throw new Error("El nombre de usuario debe empezar con mayúscula");
            }
            return true;
        }), 

    body ("contrasena")
        .notEmpty()
        .withMessage("Completar este campo con una contraseña")
        .isLength({min:4})
        .withMessage("Debe tener al menos 4 caracteres"),
];

module.exports = registerValidation;

