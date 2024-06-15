var express = require('express');
var router = express.Router();
const { body } = require("express-validator");
var registerController = require('../controllers/registerController');


/* GET home page. */
router.get('/', registerController.index);
router.post('/', registerValidations, registerController.store);

module.exports = router;