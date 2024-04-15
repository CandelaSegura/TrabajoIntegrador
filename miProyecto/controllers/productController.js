const db = require('../db/index');

const productController = {

    detalleProducto: function (req, res) {
        let idEnviado = req.params.id;
        let detalleProducto = [];
        let comentariosProducto = [];
        for (let i = 0; i < db.productos.length; i++) {
            if (idEnviado == db.productos[i].id) {
                detalleProducto.push(db.productos[i]);
                comentariosProducto = db.productos[i].comentarios; 
            }
        }
        return res.render('product', {
            index: detalleProducto,
            comentarios: comentariosProducto 
        })
     },

    resultadosDeBusqueda: function(req, res){
        return res.render("search-results", {'data': db
        })
    },


    add: function(req,res) {
        
        return res.render("product-add", {
            productos: db.productos
        })
    }
}

module.exports = productController;


