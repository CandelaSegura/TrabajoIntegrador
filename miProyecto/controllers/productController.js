//const db = require('../db/index'); 
const db = require('../database/models');
const product = db.Product;
const comment = db.Comment;

const productController = {

    detalleProducto: function (req, res) {
        product.findByPk(req.params.id,{
            include: [{association:"tabla_usuario"}, {association:"tabla_comentarios", include:[{association:"tabla_usuario"}]}],
            order: [[{model: comment, as: "tabla_comentarios"}, "created_at", "DESC"]]
        })
        .then(function(productos){
            return res.render("product", {productos:productos})
        })
        .catch(function(error){
            console.log(error);
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
    },

    update: function(req,res){
        return res.render('product-edit')
    },
    
    updateProduct: function(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log("errors:", JSON.stringify(errors, null, 4));
            return res.render("product-edit", { 
                errors: errors.mapped(),
                oldData: req.body
            });
        } else {
    
            db.Product.update({
                imagen_producto: req.body.imagen,
                nombre_producto: req.body.producto,
                descripcion_producto: req.body.descripcion,
            },
                { where: { id: req.params.id }
            })

            .then(function(product) {
                return res.redirect('/product/id/${req.params.id}');
            })

            .catch(function(error) {
                console.log("Error al editar el producto", error);
            });
        }
    },
}

module.exports = productController;


