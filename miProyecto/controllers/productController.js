//const db = require('../db/index'); 
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { where } = require('sequelize');
const product = db.Product;
const comment = db.Comment;
const { Op } = require('sequelize');

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
        let buscado = req.query.search;

        product.findAll({
            include:[
                {association: 'tabla_usuario'},
                {association: 'tabla_comentarios'}
            ],
            where: {
                [Op.or]: [
                    {
                        nombre_producto: {
                            [Op.like]: `%${buscado}%`
                        }
                    },
                    {
                        descripcion_producto: {
                            [Op.like]: `%${buscado}%`
                        }
                    }
                ]
            },
            order: [
                ['created_at', 'DESC']
            ]
        })
            .then(function(productos){
                if (productos.length >= 1){
                    return res.render('search-results', 
                    {productos:productos, existe:`Resultado de Busqueda: ${req.query.search}`})
                } else {
                    return res.render ('search-results', 
                    {productos:productos, existe:`No hay Resultado de Busqueda: ${req.query.search}`})
                }
            })
            .catch(function(error){
                console.log(error)
            })
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
        const id = req.params.id;
        return res.render('product-edit',{id:id})
    },
    
    updateProduct: function(req, res) {
        const resultValidation = validationResult(req); 

        if (!resultValidation.isEmpty()) { 
            //console.log("errors:", JSON.stringify(errors, null, 4));
            return res.render('product-edit', { errors: resultValidation.mapped(), oldData: req.body })
        } else {
            const data = req.body;
            product.update({
                imagen_producto: data.imagen,
                nombre_producto: data.producto,
                descripcion_producto: data.descripcion,
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

    addComment: function (req, res) {
        let errores = validationResult(req);
        if (req.session.user != undefined) {
            if (errores.isEmpty()) {
                let id = req.params.id

                db.Comment.create({
                    texto_comentario : req.body.comentario,
                    id_usuario : req.session.user.id,
                    id_producto : req.params.id,
                })
                .then(function(data){
                    res.redirect(`/product/id/${id}`)
                })
                .catch(function(error){
                    console.log(error)
                })
            }} 
    },

}

module.exports = productController;


