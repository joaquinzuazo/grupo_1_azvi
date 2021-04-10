let db = require('../../database/models')

const { request, response } = require('express')
const refactorCategorie = require('../helpers/refactorCategorie')
const refactorProduct = require('../helpers/refactorProduct')

let productsControllers = {
	allProducts: async (req = request, res = response) => {
		try {
			const { page = null } = req.query
			console.log({ page })
			const { count, rows: products } = await db.providers.findAndCountAll({
				include: [{ association: 'categories' }, { association: 'services' }],
				offset: page * 10,
				limit: page && 10,
			})
			const pages = Math.ceil(count / 10) - 1
			const categories = await db.categories.findAll({
				include: [{ association: 'providers' }],
			})

			const response = {
				url: req.originalUrl,
				count,
				previous: page > 0,
				next: page != pages,
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
	productDetail: async (req, res) => {
		try {
			const providerId = req.params.id
			const providerDetail={id, name, lastname, categories, services,image} = await db.providers.findByPk(providerId, {
				include: [{ association: 'categories' }, { association: 'services' }],
			})


			const answer = {
				meta:{
					status:200,
					url:req.originalUrl
				},
				data:{
					id,
					name,
					image,
					lastname,
					categories,
					description: services.description,
					detail:`api/products/${id}`
				}
			}

			if (providerDetail) {
				 
				res.json(answer)
			} 
		} catch (error) {
			res.render('error2', { title: 'Error', style: 'error', message: 'Lo sentimos algo salio mal' })
			console.log(error)
		}
 
	},
	 latest: async (req, res)=>{

		try{
        const ultimos = await db.providers.findAll({
			order: [
				['createdAt', 'DESC']
			],
			limit: 1
		});

        ultimos.forEach(last => {
            last.setDataValue("endpoint", "/api/products/latest/" + last.id)
        });

        let answer = ultimos
        res.json(answer)
        }
        catch{
            (err)=> console.log(err)
        }
	}
}

module.exports = productsControllers
