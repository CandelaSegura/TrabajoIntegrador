var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
const productEditValidation = require('../middleware/productEdit - validator')


//product.ejs
router.get ('/id/:id', productController.detalleProducto);

//productadd.ejs
router.get ('/add', productController.add);

//search.ejs
router.get ('/search', productController.resultadosDeBusqueda);

//product-edit
router.get ('/edit/id/:id', productController.update);
router.post ('/edit/id/:id', productEditValidation, productController.updateProduct);



module.exports = router;

