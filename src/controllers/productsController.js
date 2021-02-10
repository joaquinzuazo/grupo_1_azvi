

/*---------------------- db and sequelize required ---------------------*/
/*---------------------- Op required for operations ---------------------*/
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = db.Sequelize

/*---------------------- array de localidades para persistir la data en los forms ---------------------*/
const LOCATION_USERS_PROVIDERS = ['Rawson', 'Chubut', 'Cordoba Capital', 'La Plata']

const productsController = {
	index: (req, res) => {


		const categoryName = req.params.category
		db.categories
			.findOne({
				where: { name: categoryName },
				include: [{ association: 'providers' }],
			})
			.then(function (category) {
				res.render('lenderList', {
					category: category,
					title: `Azvi-${req.params.category}`,
					style: 'lenderList',
				})
			})
			.catch(function (err) {
				console.log(err)
			})

	},

	create: (req, res) => {
		res.render('adminAdd', { title: 'Agregar Producto', style: 'admin' })
	},

	productDetail: async (req, res) => {
		try {
			const providerId = req.params.id
			const providerFind = await db.providers.findByPk(providerId, {
				include: [{ association: 'categories' }, { association: 'services' }],
			})
			if (providerFind) {
				 
				res.render('productDetail', {
					title: `Azvi ${req.params.id}`,
					style: 'productos',
					product: providerFind,
				})
			} else {
				return res.render('error2', {
					title: 'Error',
					style: 'error',
					message: 'Lo sentimos no encontramos tu provedor',
				})
			}
		} catch (error) {
			res.render('error2', { title: 'Error', style: 'error', message: 'Lo sentimos algo salio mal' })
			console.log(error)
		}
 
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
		const { name, lastname, email, location, cellphone, description, categoryId, score, title } = req.body
		const updateTotal = { name, lastname, email, location, cellphone, categoryId, score }
		try {
			if (req.files[0]) {
				const image = req.files[0].filename
				await db.providers.update(
					{ ...updateTotal, image },
					{
						where: {
							id: providerId,
						},
					}
				)
			} else {
				await db.providers.update(updateTotal, {
					where: {
						id: providerId,
					},
				})
			}
			await db.services.update(
				{ description, title },
				{
					where: {
						providerId,
					},
				}
			)

			res.redirect('/products/edit')
		} catch (e) {
			res.render('error2', { title: 'Error', style: 'error', message: 'Lo sentimos algo salio mal' })
			console.log(e)
		}
	},

	delete: async (req, res) => {
		const providerId = req.params.providerId

		try {
			await db.services.destroy({ where: { providerId } })

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
			order: [['createdAt', 'DESC']],
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

				where: {
					[Op.or]: [
						{
							lastname: { [Op.like]: `%${req.body.lastname}%` },
						},
						{ name: { [Op.like]: `%${req.body.lastname}%` } },
					],
				},
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
			include: {
				association: 'services',
			},
		})

		res.locals.categories = await db.categories.findAll()
		res.locals.provider = provider
		res.locals.locations = LOCATION_USERS_PROVIDERS
		res.render('adminUpdateForm', { title: 'Edit', style: 'admin' })
	},

	buy: async (req, res) => {
		const providerId = req.params.providerId
		const userId = res.locals.userLog.id

		try{
			const user = await db.Users.findByPk(userId)
			await user.addProvider([providerId])

		}catch(error){
			res.render('error2', { title: 'Error', style: 'error', message: 'Lo sentimos algo salio mal' })
			console.log(error);
		}

		res.redirect('/users/shopping')
	},
}

module.exports = productsController
