// const db = require('../db/index'); 
const db = require('../database/models');
const { validationResult } = require('express-validator');
const op = db.Sequelize.Op;


const userController = {
    
    login: function(req,res) {
        return res.render ('login', {'datos':db});
    },

    register: function(req,res) {
        return res.render ('register', {'datos':db});
    },

    store: function(req,res) {
        const user = {
            id: req.body.id,
            usuario: req.body.usuario,
            email: req.body.email,
            contrasena:req.body.contrasena,
            fecha: req.body.fecha,
            dni: req.body.dni,
            foto_perfil: req.body.foto_perfil
        }
        db.User
        .create(user)
        .then(function(user){
            res.redirect("/users/login")
        })
        .catch(function(error){
            console.log(error)
        })
    },

    profile: function(req,res) {
        return res.render ('profile',{'datos':db});
    },

    profileEdit: function(req,res) {
        return res.render ('profile-edit', {'datos':db});
    }
}


module.exports = userController;

