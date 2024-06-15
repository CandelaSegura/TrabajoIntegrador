const { body } = require("express-validator");

const registerValidator = [
    body("email")
    .notEmpty()
    .withMessege("Completar este campo con un email")
    .bail()
    .isEmail()
    .withMessege()
];

module.exports = registerValidator;