const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = db.User;
const product = db.Product;

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
          if (usuario) {
          // console.log('PASSWORD : ', usuario.contrasenia);
          let validPassword = bcrypt.compareSync(req.body.contrasena, usuario.contrasena)
          console.log('validPassword? :', validPassword);

          if (validPassword) {
          req.session.user = usuario
          // si tildo recordarme --> creamos la cookie
          if (req.body.recordarme != undefined) {
            // console.log("aca",usuario);
            res.cookie("userId", usuario.id, { maxAge: 1000 * 60 * 5 })
          }
          return res.redirect('/')
          } else {
            return res.render('login', { errors: resultValidation.mapped(), oldData: req.body })
          }
          } 
        })
        .catch(function (error) {
          console.log(error);
        });

    }

  },

logout: function (req, res) {
  //Destruir la sesión
  req.session.destroy();
  res.clearCookie('userId');
 //redireccionar a home
  return res.redirect("/");
  },
 
    
profile: function(req, res) {
    db.User.findByPk(req.params.id, {
      include: [{association: "tabla_productos"}],
      order: [[{model: product, as: 'tabla_productos'},'created_at', 'DESC']]
  })

  .then(function(user) {
      return res.render('profile', { user: user });
  })

  .catch(function(error) {
      console.log(error);
  }); 
  
},

profileEdit: function (req, res) {
  let id = req.params.id;

  User.findByPk(id)
    .then(function (user) {
      if (req.session.user && id == req.session.user.id) {
       
        return res.render('profile-edit', { usuario: user });
      } else {
        
        return res.redirect('/');
      }
    })
    .catch(function (error) {
      console.log(error);
      return res.redirect('/');
    });
},

update: function (req, res) {
  const id = req.params.id;
  db.User.findByPk(id)
  .then(function(usuario){
    let updatedUser = {
      usuario: req.body.usuario,
      email: req.body.email,
      fecha: req.body.fecha_nacimiento,
      dni: req.body.nro_documento,
      foto_perfil: req.body.foto_perfil,
    };
    if (req.body.contrasena) {
      updatedUser.contrasena = bcrypt.hashSync(req.body.contrasena, 10);
    } else {
      updatedUser.contrasena = usuario.contrasena
    }
    let errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      
      console.log("Errores de validación:", JSON.stringify(errors.array(), null, 4));
      return res.render('profile-edit', { errors: errors.mapped(), old: req.body, usuario:usuario });
    
    } else {
      
      User.update(updatedUser, {
        where: { id: id }
      })
        .then(function () {
          
          req.session.user = Object.assign(req.session.user, updatedUser);
          console.log('Actualizado:', req.session.user);
          return res.redirect('/');
        })
        .catch(function (error) {
          console.log("Error:", error);
          return res.redirect('/');
        });
    }
    
  })
  .catch(function (error) {
    console.log(error);
    return res.redirect('/');
  })
  
}

};




module.exports = userController;

