const { body } = require('express-validator');
const db = require('../database/models');
const bcryptjs = require("bcryptjs")



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
        .custom(function(value, { req }) {     
            return db.User.findOne({
                where:{email:req.body.email}
            })
            .then(function(usuario){
                if(usuario){
                    const contraCorrecta = bcryptjs.compareSync(value, usuario.contrasena)
                    if(!contraCorrecta){
                        throw new Error("Contrasena Incorrecta")
                    }
                }
            })
        }),
]

module.exports = loginValidation;