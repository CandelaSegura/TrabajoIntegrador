var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');


//product.ejs
router.get ('/id/:id', productController.detalleProducto);

//productadd.ejs
router.get ('/add', productController.add);

//search.ejs
router.get ('/search', productController.resultadosDeBusqueda);



module.exports = router;

