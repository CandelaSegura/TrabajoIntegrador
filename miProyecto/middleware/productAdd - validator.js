const { body } = require("express-validator");
const database= require('../database/models');


const productAddValidation = [
    body('imagen') 
        .notEmpty()
        .withMessage('Debe ingresar una imagen para el producto obligatoriamente'),
    body('producto')
        .notEmpty()
        .withMessage('Debes ingresar un nombre para el producto obligatoriamente'),
    body('descripcion')
        .notEmpty()
        .withMessage('Debe ingresar una descripcion para el producto obligatorimente')
    ];

module.exports= productAddValidation;