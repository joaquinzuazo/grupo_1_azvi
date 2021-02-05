const fs = require('fs')
const path = require('path')
const getID = require('./helpers/getID')
const productsJson = fs.readFileSync(path.join(__dirname, '../data/products.json'))

const products = JSON.parse(productsJson)

const productsFilePath = path.join(__dirname, '../data/products.json')

/*---------------------- db and sequelize required ---------------------*/
/*---------------------- Op required for operations ---------------------*/
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = db.Sequelize

const productsController = {
	index: (req, res) => {
		const productsByCategory = products.filter((product) => product.category == req.params.category)

		res.render('lenderList', {
			title: `Azvi-${req.params.category}`,
			style: 'lenderList',
			products: productsByCategory,
			titleCategory: req.params.category.toUpperCase(),
		})
	},

	create: (req, res) => {
		res.render('adminAdd', { title: 'Agregar Producto', style: 'admin' })
	},

	productDetail: (req, res) => {
		const productId = products.find((product) => product.id == req.params.id)

		if (!productId) {
			return res.render('error2', { title: 'Error', style: 'error', message: 'Lo sentimos algo salio mal' })
		}

		res.render('productDetail', {
			title: `Azvi ${req.params.id}`,
			style: 'productos',
			product: productId,
			titleCategory: productId.category.toUpperCase(),
		})
	},

	save: (req, res) => {
		db.providers
			.create({
				name: req.body.name,
				lastname: req.body.lastname,
				email: req.body.email,
				cellphone: req.body.phone,
				location: req.body.localidad,
				score: 3,
				categorieId: req.body.category,
				image: req.files[0].filename,
			})
			.then((data) => {
				db.providers.findOne({ where: { email: req.body.email } }).then((user) => {
					db.services
						.create({
							title: req.body.title,
							description: req.body.description,
							providerId: user.id,
						})
						.then((service) => {
							res.redirect('/')
						})
				})
			})
			.catch((error) => {
				console.log(error)
			})
	},

	edit: (req, res) => {
		res.render('adminUpdate', { title: 'Editar', style: 'admin' })
	},

	update: async (req, res) => {
		const providerId = req.params.providerId
		const { name, lastname, email, location, cellphone, description, categoryId } = req.body
		const image = req.files[0].filename
		const updateTotal = { name, lastname, email, location, cellphone, image, categoryId }

		try {
			await db.providers.update(updateTotal, {
				where: {
					id: providerId,
				},
			})
			await db.services.update(
				{ description },
				{
					where: {
						id: providerId,
					},
				}
			)

			res.locals.adminMessage = 'Usuario modificado con exito'
			res.redirect('/products/edit')
		} catch (e) {
			res.render('error2', { title: 'Error', style: 'error', message: 'Lo sentimos algo salio mal' })
			console.log(e)
		}
	},

	delete: async (req, res) => {
		const providerId = req.params.providerId

		try {
			await db.services.destroy({ where: { providerId: providerId } })

			await db.providers.destroy({ where: { id: providerId } })
		} catch (error) {
			console.log(error)
		}

		res.redirect('/products/edit')
	},

	productCart: (req, res, next) => {
		res.render('productCart', { title: 'AZVI PLANES', style: 'productCart' })
	},
	productCartJoin: (req, res, next) => {
		res.render('productCartContact', {
			title: 'AZVI PLANES',
			style: 'productCart',
			plan: req.body.plan,
			price: req.body.price,
		})
	},

	productCartJoinForm: (req, res) => {
		db.messages.create(req.body)
		// console.log(req.body)
		res.locals.success = true
		res.render('productCartContact', { title: 'AZVI PLANES', style: 'productCart' })
	},
	messages: async (req, res) => {
		const messages = await db.messages.findAll({
			attributes: [
				'id',
				'name',
				'phone',
				[sequelize.fn('DATE_FORMAT', sequelize.col('createdAt'), '%d-%m-%Y %T'), 'dates'],
				'plan',
			],
		})
		if (messages.length != 0) {
			messages.forEach((mgs) => (mgs.plan = mgs.plan.replace('Plan seleccionado:', '')))
		}

		res.render('messages', { title: 'Admin mensajes', style: 'admin', messages: messages })
	},
	messageDeleted: (req, res) => {
		db.messages.destroy({ where: { id: req.params.messageId } }).then((mgs) => res.redirect('/products/contact'))
	},
	searchProducts: async (req, res) => {
		try {
			const providersFind = await db.providers.findAll({
				include: [
					{
						association: 'categories',
					},
				],

				where: { lastname: { [Op.like]: `%${req.body.lastname}%` } },
			})
			if (providersFind.length != 0) {
				res.locals.providers = providersFind
			} else {
				res.locals.adminMessage = req.body.lastname
			}
			res.render('adminUpdate', { title: 'Editar', style: 'admin' })
		} catch (e) {
			res.render('error2', { title: 'Error', style: 'error', message: 'Lo sentimos algo salio mal' })
			console.log(e)
		}
	},

	editForm: async (req, res) => {
		const providerId = req.params.providerId

		const provider = await db.providers.findByPk(providerId, {
			// include: {
			// 	association: 'categories',
			// },
			include: {
				association: 'services',
			},
		})
		// 	const providerTotal =await provider.getCategories()
		console.log(provider)
		res.locals.categories = await db.categories.findAll()
		res.locals.provider = provider

		res.render('adminUpdateForm', { title: 'Edit', style: 'admin' })
	},
}

module.exports = productsController
