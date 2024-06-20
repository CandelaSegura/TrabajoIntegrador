var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const registerValidation = require("../middleware/register-validator");
const loginValidation = require('../middleware/login-validator');

// Rutas para login
router.get('/login', userController.login);
router.post('/login', loginValidation, userController.enterlogin);

// Rutas para registro
router.get('/register', userController.register);
router.post('/register', registerValidation, userController.store);

// Rutas para perfil
router.get('/profile', userController.profile);
router.get('/profile/edit', userController.profileEdit);

module.exports = router;


// 2 PROBLEMAS --> SI NO PONGO NADA EN LA FECHA NO SE GUARDA
// UNA VEZ QUE SE GUARDA SALTA ERROR --> NO PUEDE REDIRIGIR 

