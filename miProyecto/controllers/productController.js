// const db = require('../db/index');

// const productController = {

//     detalleProducto: function (req, res) {
//         let idEnviado = req.params.id;
//         let detalleProducto = [];
//         let comentariosProducto = [];
//         for (let i = 0; i < data.productos.length; i++) {
//             if (idEnviado == data.productos[i].id) {
//                 detalleProducto.push(data.productos[i]);
//                 comentariosProducto = data.productos[i].comentarios; 
//                 break;
//             }
//         }
//         return res.render('product', {
//             index: detalleProducto,
//             comentarios: comentariosProducto 
//         })
//     },

//     index: function(req, res){
//         return res.render("product", {'data': data
//         })
//     },
//     resultadosDeBusqueda: function(req, res){
//         return res.render("search-results", {'data': data
//         })
//     },
//     add: function(req,res) {
        
//         return res.render("product-add", {
//             productos: data.productos
//         })
//     }
// }

// module.exports = productController


