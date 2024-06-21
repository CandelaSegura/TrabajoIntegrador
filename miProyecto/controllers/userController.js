const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = db.User;

const userController = {

register: function(req, res) {
    return res.render('register', { datos: db });
},

store: function(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log("Errores de validación:", JSON.stringify(errors.array(), null, 4));
        return res.render("register", {
            errors: errors.mapped(),
            oldData: req.body
        });
    }

    console.log('Solicitud recibida para registrar usuario');
    const hashedPassword = bcrypt.hashSync(req.body.contrasena, 10);
    const newUser = {
        id: req.body.id,
        usuario: req.body.usuario,
        email: req.body.email,
        contrasena: hashedPassword,
        fecha: req.body.fecha || null,
        dni: req.body.dni || null,
        foto_perfil: req.body.foto_perfil || null
    };

    User.create(newUser)
    .then(function(user) {
        console.log('Usuario creado correctamente:', user);
        return res.redirect("/user/login");
    })
    .catch(function(error) {
        console.log("Error al crear usuario:", error);
        return res.render("register", {
            errors: { general: { msg: "Error al intentar registrar usuario" } },
            oldData: req.body
        });
    });
},

login: function(req, res) {
    if (!req.session.user) {
        return res.render('login');
    } else {
        return res.redirect('/');
    }
  },

enterlogin: function (req, res) {

    let resultValidation = validationResult(req)
    if (!resultValidation.isEmpty()) {
      console.log("resultValidation", resultValidation);
      return res.render('login', { errors: resultValidation.mapped(), oldData: req.body })
    
    } else {
      //Busco el usuario que se quiere loguear
      User.findOne({
        where: [{
          email: req.body.email,
        }]
      })
        .then(function (usuario) {
          // console.log('PASSWORD : ', usuario.contrasenia);
          let validPassword = bcrypt.compareSync(req.body.contrasena, usuario.contrasena)
          console.log('validPassword? :', validPassword);
          req.session.user = usuario

          // si tildo recordarme --> creamos la cookie
          if (req.body.recordarme != undefined) {
            // console.log("aca",usuario);
            res.cookie("userId", user.id, { maxAge: 1000 * 60 * 5 })
          }
          return res.redirect('/')
        })
        .catch(function (error) {
          console.log(error);
        });

    }

  },

logout: function (req, res) {
  //Destruir la sesión
  req.session.destroy();
 //redireccionar a home
  return res.redirect("/");
  },
 
    
profile: function(req, res) {
        // Aquí deberías cargar los datos del usuario desde req.session.user
        // Suponiendo que los datos del usuario están en req.session.user
        const userData = req.session.user || {}; // Ajusta según tus necesidades

        return res.render('profile', { datos: { usuario: userData } });
    },

    profileEdit: function(req, res) {
        return res.render('profile-edit', { datos: db });
    }
};

module.exports = userController;


// CHEQUEAR ESTO:
// La página será accesible únicamente para los usuarios que no estén logueados. Queda a decisión del equipo a donde redirigirlo si quiere acceder.
// Al crear nuevos usuarios en la base de datos debe plasmarse la fecha de creación en el campo created_at (o createdAt si usan camel case).
