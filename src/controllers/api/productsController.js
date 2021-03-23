let db = require('../../database/models')

const { request, response } = require('express')
const refactorCategorie = require('../helpers/refactorCategorie')
const refactorProduct = require('../helpers/refactorProduct')

let productsControllers = {
	allProducts: async (req = request, res = response) => {
		try {
			const { count, rows: products } = await db.providers.findAndCountAll({
				include: [{ association: 'categories' }, { association: 'services' }],
			})
			const categories = await db.categories.findAll({
				include: [{ association: 'providers' }],
			})
			const response = {
				url: req.originalUrl,
				count,
				countByCategory: refactorCategorie(categories),
				products: refactorProduct(products),
			}
			// return res.send(products)
			res.status(200).json(response)
		} catch (error) {
			console.log(error)
			res.status(500).json({ msg: 'Algo salio mal intenta mas tarde' })
		}
	},
}

module.exports = productsControllers
