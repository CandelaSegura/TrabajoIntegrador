const db = require('../db/index');

const indexController = {
    index: function(req, res){
        return res.render("index", {'data': data })
    }
}

module.exports = indexController

