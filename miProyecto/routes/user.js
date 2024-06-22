var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const registerValidation = require("../middleware/register-validator");
const loginValidation = require('../middleware/login-validator');

// Rutas para login
router.get('/login', userController.login);
router.post('/login', loginValidation, userController.enterlogin);
router.post('/logout', userController.logout);


// Rutas para registro
router.get('/register', userController.register);
router.post('/register', registerValidation, userController.store);

// Rutas para perfil
router.get('/profile/id/:id', userController.profile);
router.get('/profile/edit', userController.profileEdit);

module.exports = router;



