var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
const productEditValidation = require('../middleware/productEdit - validator')
const productAddValidation = require('../middleware/productAdd - validator')


//product.ejs
router.get ('/id/:id', productController.detalleProducto);

//productadd.ejs
router.get ('/add', productController.add);
router.post('/add', productAddValidation, productController.storeAdd);

//search.ejs
router.get ('/search', productController.resultadosDeBusqueda);

//product-edit
router.get ('/edit/id/:id', productController.update);
router.post ('/edit/id/:id', productEditValidation, productController.updateProduct);

router.post('/destroy/id/:id', productController.deleteProduct);



module.exports = router;

