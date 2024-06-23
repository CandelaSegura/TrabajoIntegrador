// const db = require('../db/index');
const db = require('../database/models');
const product = db.Product;

// Mostrar los productos de forma descente segun su fecha de creacion
const indexController = {
    index: function(req, res){
        product.findAll({
            order: [['created_at','DESC']],
            limit: 12
        })
        .then(function(productos){
            //console.log("productos:",productos)
            res.render("index", {productos: productos}); 
        })
        .catch(function(error){
            console.log(error);
        })
    }
}



module.exports = indexController



