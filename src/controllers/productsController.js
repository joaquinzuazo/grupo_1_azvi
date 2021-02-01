const fs = require('fs')
const path = require('path')
const getID = require('./helpers/getID')
const productsJson = fs.readFileSync(path.join(__dirname, '../data/products.json'))

const products = JSON.parse(productsJson)

const productsFilePath = path.join(__dirname, '../data/products.json')

/*---------------------- db and sequelize required ---------------------*/
const db = require('../database/models')
const sequelize = db.sequelize

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
			return res.render('error2', { title: 'Error', style: 'error' })
		}

		res.render('productDetail', {
			title: `Azvi ${req.params.id}`,
			style: 'productos',
			product: productId,
			titleCategory: productId.category.toUpperCase(),
		})
	},

	save: (req, res) => {
		const ids = products.map((product) => product.id)
		const id = getID(ids)

		const product = {
			...req.body,
			id,
			image: req.files[0].filename,
			score: 3,
		}

		products.push(product)

		const productsJSon = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productsJSon)

		res.redirect('/')
	},

	edit: (req, res) => {
		// const id = req.params.id

		// const product = products.find((produc) => produc.id == id)

		// if (!product) {
		// 	return res.render('error2', { title: 'Error', style: 'error' })
		// }

		// res.render('adminUpdate', { title: 'Editar', style: 'admin', id, product })
		res.render('adminUpdate' ,{ title: 'Editar', style: 'admin'})
	},

	update: (req, res) => {
		const keys = Object.keys(req.body)
		const product = products.find((product) => product.id == req.params.id)
		keys.forEach((key) => (product[key] = req.body[key]))
		product.image = req.files[0].filename

		const productsJSon = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productsJSon)

		res.redirect('/')
	},

	delete: (req, res) => {
		// se almacena el parametro dinamico
		const idProduct = req.params.id

		//se retorna los que no se quieren eliminar y se almacenan en una variable
		const productFilter = products.filter(function (product) {
			return product.id != idProduct
		})

		//se modifica el JSON segun el id
		const productsJSon = JSON.stringify(productFilter)

		fs.writeFileSync(productsFilePath, productsJSon)

		res.redirect('/')
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
				'plan'
			],
		})
		   if(messages.length!=0){
			   messages.forEach(mgs=>mgs.plan=mgs.plan.replace('Plan seleccionado:',''))
		   }
console.log(messages);
		res.render('messages', { title: 'Admin mensajes', style: 'admin', messages: messages })
	},
	messageDeleted: (req, res) => {
		db.messages.destroy({ where: { id: req.params.messageId } }).then((mgs) => res.redirect('/products/contact'))
	},
	searchProducts:(req,res)=>{
		// fix => temporal probando con users para la modificacion de products/services
		console.log(req.body);

		const {Op}=db.Sequelize

		db.users.findAll({where:{lastname:{[Op.like]:`%${req.body.lastname}%`}}}).then(console.log)
	}
}

module.exports = productsController
