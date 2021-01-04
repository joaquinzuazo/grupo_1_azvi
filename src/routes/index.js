var express = require('express')
var router = express.Router()
const fs = require('fs');
const path = require('path');
const productsJson = fs.readFileSync(path.join(__dirname, '../data/products.json'))

const products = JSON.parse(productsJson)


/* GET home page. */
router.get('/', function (req, res, next) {

	const bestServices = []
	products.forEach(product => {
		if(product.score==4||product.score==5){
			bestServices.push(product)
		}

	})
	bestServices.length=10
	console.log(bestServices);


	res.render('index', { title: 'AZVI', style: 'index',bestest:bestServices })
})

module.exports = router
