var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');
const registerValidation = require("../middleware/register-validator");

//login.ejs
router.get ('/login', userController.login);

//register.ejs
router.get ('/register', userController.register);
router.post ('/register', registerValidation, userController.store);

//profile.ejs
router.get ('/profile', userController.profile);

//profileedit.ejs
router.get ('/profile/edit', userController.profileEdit)



module.exports = router;

// 2 PROBLEMAS --> SI NO PONGO NADA EN LA FECHA NO SE GUARDA
// UNA VEZ QUE SE GUARDA SALTA ERROR --> NO PUEDE REDIRIGIR 