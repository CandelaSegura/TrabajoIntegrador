const { body } = require('express-validator');
const db = require('../database/models');

const productEditValidation = [
    body('imagen') 
        .notEmpty()
        .withMessage('Debe ingresar una imagen para el producto obligatoriamente'),
    body('producto')
        .notEmpty()
        .withMessage('Debes ingresar un nombre para el producto obligatoriamente'),
    body('descripcion')
        .notEmpty()
        .withMessage('Debe ingresar una descripcion para el producto obligatorimente')
]

module.exports = productEditValidation;