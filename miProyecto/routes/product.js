var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

router.get('/id/:id', productController.detalleProducto)

module.exports = router;