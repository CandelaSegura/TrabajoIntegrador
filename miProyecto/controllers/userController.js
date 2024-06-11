const db = require('../db/index'); //hay que sacarlo?
const { validationResult } = require('express-validator');


const userController = {
    
    login: function(req,res) {
        return res.render ('login', {'datos':db});
    },

    register: function(req,res) {
        return res.render ('register', {'datos':db});
    },

    profile: function(req,res) {
        return res.render ('profile',{'datos':db});
    },

    profileEdit: function(req,res) {
        return res.render ('profile-edit', {'datos':db});
    }
}


module.exports = userController;

