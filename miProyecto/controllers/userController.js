// const db = require('../db/index'); 
const db = require('../database/models');
const { validationResult } = require('express-validator');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
const dayjs = require('dayjs');


const userController = {
    
    login: function(req,res) {
        return res.render ('login', {'datos':db});
    },

    register: function(req,res) {
        return res.render ('register', {'datos':db});
    },

    store: function(req,res) {
        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
           console.log("errors:", JSON.stringify(errors,null,4));
           return res.render("register", { 
               errors: errors.mapped(),
               oldData: req.body
            }) 
        } else {        
         console.log('Solicitud recibida para registrar usuario');
           const user = {
            id: req.body.id,
            usuario: req.body.usuario,
            email: req.body.email,
            contrasena: bcrypt.hashSync(req.body.contrasena, 10), 
            fecha: req.body.fecha || null , 
            dni: req.body.dni || null , //Unica manera de solucionar que quede invaliddate
            foto_perfil: req.body.foto_perfil || null 
        }
        db.User.create(user)
        .then(function(user){
            console.log('Usuario creado correctamente:', user);
            return res.redirect("/user/login")
        })
        .catch(function(error){
            console.log(error)
        })
        }
    },

    profile: function(req,res) {
        return res.render ('profile',{'datos':db});
    },

    profileEdit: function(req,res) {
        return res.render ('profile-edit', {'datos':db});
    }
}


module.exports = userController;

// CHEQUEAR ESTO:
// La página será accesible únicamente para los usuarios que no estén logueados. Queda a decisión del equipo a donde redirigirlo si quiere acceder.
// Al crear nuevos usuarios en la base de datos debe plasmarse la fecha de creación en el campo created_at (o createdAt si usan camel case).
