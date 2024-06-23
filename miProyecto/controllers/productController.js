//const db = require('../db/index'); 
const { validationResult } = require('express-validator');
const db = require('../database/models');
const product = db.Product;
const comment = db.Comment;

const productController = {

    detalleProducto: function (req, res) {
        product.findByPk(req.params.id,{
            include: [
                {association:"tabla_usuario"}, 
                {association:"tabla_comentarios", include:[{association:"tabla_usuario"}]}],
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

    add: function(req, res) {
        return res.render('product-add');
    
},

storeAdd: function(req,res) {
    const resultValidation = validationResult(req); 

    if (!resultValidation.isEmpty()) { 
        return res.render('product-add', { errors: resultValidation.mapped(), oldData: req.body })
    } else {
    const data = req.body;
    //console.log(data);
    const usuarioId = req.session.user.id;
    const productAdd = {
        id_usuario: usuarioId,
        imagen_producto: data.imagen,
        nombre_producto: data.producto,
        descripcion_producto: data.descripcion,
    };
    product.create(productAdd)
        .then ( function (data){
            return res.redirect('/')
        })
        
        .catch( function(error){
            console.log(error)
        }) }
         
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

    deleteProduct:  function (req, res) {
        let delprod = req.params.id;

        product.findByPk(delprod).then((data) => {
            if (req.session.user.id != data.id_usuario) {
                return res.redirect('/');
            }
            product.destroy({
                where: [{ id: delprod }],
            })
                .then(() => {
                    return res.redirect("/");
                })
                .catch((error) => {
                    console.log(error);
                });

        })
            .catch((error) => {
                console.log(error);
            });


    },

}

module.exports = productController;


