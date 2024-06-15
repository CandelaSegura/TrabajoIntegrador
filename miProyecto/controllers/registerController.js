const db = require('../db/models'); 
const { validationResult } = require('express-validator');
const op = db.Sequelize.Op; 
const users = db.User; 

let registerController = {
    index: function (req,res){
        //Mostar el formulario de registro
        return res.render('register');
    },
    store: 
}