const fs = require('fs')
const path = require('path')
const productsJson = fs.readFileSync(path.join(__dirname, '../data/products.json'))

const products = JSON.parse(productsJson)

/*---------------------- db and sequelize required ---------------------*/

const db = require('../database/models')

const indexController = {
	index: async (req, res, next) =>{

		const providersFind = await db.providers.findAll({
			include:{
				association:'categories'
			}
		})


		const bestServices = []
		providersFind.forEach((provider) => {
			if ( provider.score == 5) {
				bestServices.push(provider)
			}
		})
		bestServices.length = 10
		// res.send(bestServices)
		res.render('home/index', { title: 'AZVI', style: 'index', bestest: bestServices })
	},
	help: function (req, res, next) {
		res.render('home/help', { title: 'help', style: 'help' })
	},
}

module.exports = indexController
