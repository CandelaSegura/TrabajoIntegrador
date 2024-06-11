const db = require('../db/index'); //cambiar con los modelos
const op = db.Sequelize.Op; 
const users = db.User; 

let registerController = {
    index: function (req,res){
        //Mostar el formulario de registro
        return res.render('register');
    },
    store: function(req,res){
        //falta la parte del controller del punto 2, verlo en la clase de express validator
        let user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        users.create(user)
        .then(function(user){
            return res.direct("/login")
        })
        .catch(function(error){
            console.log(error)
        })

    }
}