let db = require('../../database/models')

let categoryControllers = {
    list: async function(req, res){
        const categories= await db.categories.findAll()
        res.send(categories)
    },
}

module.exports = categoryControllers