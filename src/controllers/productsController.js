const fs = require('fs')
const path = require('path')
const getID = require('./helpers/getID')
const productsJson = fs.readFileSync(path.join(__dirname, '../data/products.json'))

const products = JSON.parse(productsJson)

const productsFilePath = path.join(__dirname, '../data/products.json')

const productsController = {
	/*----------------------1) facu/joaco ---------------------*/
	//hay que pasar parametro de procutos para que los pinte en views
	//hay que filtrar por categoria
	index: (req, res) => {
		const productsByCategory = products.filter((product) => product.category == req.params.category)

		res.render('lenderList', {
			title: `Azvi-${req.params.category}`,
			style: 'lenderList',
			products: productsByCategory,
			titleCategory: req.params.category.toUpperCase(),
		})
	},

	/*---------------------- 2) ya esta hecho ---------------------*/
	create: (req, res) => {
		res.render('adminAdd', { title: 'Agregar Producto', style: 'admin' })
	},

	/*----------------------3) ya esta hechoz ---------------------*/
	//buscar en products.json el id del producto que viene por parametro y llevarlo a productdetail

	productDetail: (req, res) => {
		const productId = products.filter((product) => product.id == req.params.id)

		res.render('productDetail', {
			title: `Azvi ${req.params.id}`,
			style: 'productos',
			product: productId,
			titleCategory: productId[0].category.toUpperCase(),
		})
	},

	/*---------------------- 4)hecho (POST)
Acción de creación (a donde se envía el formulario) ---------------------*/

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
		fs.writeFileSync(productsFilePath,productsJSon)

		res.redirect('/')
	},

	/*---------------------- ya esta heco ---------------------*/
	edit: (req, res) => {
		res.render('adminUpdate', { title: 'Editar', style: 'admin' })
	},

	/*---------------------- 6) facu/jaoco /products/ :id (PUT)
Acción de edición (a donde se envía el formulario): ---------------------*/


	update:(req,res)=>{

		console.log(req.files);
		res.send(req.body)
		





















	},





	/*---------------------- 7) tomi V /products/ :id (DELETE)
Acción de borrado ---------------------*/

delete:(req,res)=>{







	res.send('eliminado')
},

	productCart: (req, res, next) => {
		res.render('productCart', { title: 'AZVI PLANES', style: 'productCart' })
	},
}

module.exports = productsController
