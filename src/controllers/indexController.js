const fs = require('fs');
const path = require('path');
const productsJson = fs.readFileSync(path.join(__dirname, '../data/products.json'))

const products = JSON.parse(productsJson)

const indexController = {
    index:(function (req, res, next) {

	 
        const bestServices = []
        products.forEach(product => {
            if(product.score==4||product.score==5){
                bestServices.push(product)
            }
    
        })
        bestServices.length=10
         
    
        res.render('index', { title: 'AZVI', style: 'index',bestest:bestServices  })
    }),
    help: (function(req,res, next){

        res.render('help',{title:'help', style:'help'})
    })
}

module.exports = indexController;