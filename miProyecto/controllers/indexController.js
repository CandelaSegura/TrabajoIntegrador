// const db = require('../db/index');
const db = require('../database/models')
const productos = db.Product

// Mostrar los productos de forma descente segun su fecha de creacion
const indexController = {
    index: function(req, res){
        productos.findAll({
            order: [
                ['createdAt','DESC']
            ],
            limit: 15
        })
        .then(function(productos){
            res.render("index", {'productos': productos}) //preguntar si productos productos 
        })
        .catch(function(error){
            console.log(error);
        })
    }
}

//Falta ver del punto 7 
// Clickear sobre cada producto debe redirigir al detalle del mismo.
// En cada producto debe figurar el usuario que lo cargó. El dato a mostrar puede ser el email o el username dependiendo lo que cada equipo tenga en su tabla de la base de datos. Hacer click sobre el usuario debe redirigir a la página de perfil.


module.exports = indexController



