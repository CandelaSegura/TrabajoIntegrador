const db = require('../db/index');

const indexController = {
    index: function(req, res){
        return res.render("index", {'db': db })
    }
}

module.exports = indexController



