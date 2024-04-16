const db = require('../db/index');

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

