var express = require('express');
var router = express.Router();
var registerController = require('../controllers/registerController');
const registerValidations = require("../middleware/register-validator");


/* GET home page. */
router.get('/', registerController.index);
router.post('/', registerValidations, registerController.store);

module.exports = router;