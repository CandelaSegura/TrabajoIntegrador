const db = require('../db/index');

const productController = {

    detalleProducto: function (req, res) {
        let id = req.params.id;
        let detalleProducto = [];
        let comentariosProducto = [];
        for (let i = 0; i < db.productos.length; i++) {
            if (id == db.productos[i].id) {
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
        let buscado = req.query.search
        let resultado = []

        for (let i = 0; i < db.productos.length; i++) {
            if (buscado.toLowerCase() == db.productos[i].nombre.toLowerCase()) {
                resultado.push(db.productos[i])
            } 
        }

        if (resultado.length >= 1) {
            return res.render("search-results", {
                mensaje: `Resultados de busqueda: ${buscado}`,
                resultado:resultado
            })
        } else {
            return res.render("search-results", {
                mensaje: `No se ha encontrado: ${buscado}`,
                resultado:resultado
            })
        }
    },

    add: function(req,res) {
        return res.render("product-add", {
            productos: db.productos
        })
    }
}

module.exports = productController;


