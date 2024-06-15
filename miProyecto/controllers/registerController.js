const db = require('../db/models'); 
const { validationResult } = require('express-validator');
const op = db.Sequelize.Op; 
const users = db.User; 

let registerController = {
    index: function (req,res){
        //Mostar el formulario de registro
        return res.render('register');
    },
    store: function(req,res){
        const resultValidation = validationResult(req)

        if(!resultValidation.isEmpty()){
            return res.render("login", {
                errors:resultValidation.mapped(),
                oldData: req.body
            })
        } else {
            users.findOne({
                where: [{email: req.body.email}]
            })
            .then(function(user){
                return res.direct("/login")
            })
            .catch(function(error){
                console.log(error)
            })
        }

    }
}