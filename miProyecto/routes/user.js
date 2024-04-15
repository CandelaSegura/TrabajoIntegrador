var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController');

//login.ejs
router.get ('/login', userController.login);

//register.ejs
router.get ('/register', userController.register);

//profile.ejs
router.get ('/profile', userController.profile);

//profileedit.ejs
router.get ('/profile/edit', userController.profileEdit)


module.exports = router;

