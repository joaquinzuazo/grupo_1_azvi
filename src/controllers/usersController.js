const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const db = require('../database/models') // PARA SEQUELIZE

/*---------------------- array de localidades para persistir la data en los forms ---------------------*/

const usersController = {
	loginForm: (req, res) => {
		res.render('users/login', { title: 'AZVI', style: 'login' })
	},

	registerForm: (req, res) => {
		res.render('users/register', { title: 'AZVI', style: 'register', errors: {}, body: {} })
	},

	register: (req, res, next) => {
		const errors = validationResult(req)

		if (!errors.isEmpty()) {
			return res.render('users/register', {
				title: 'AZVI',
				style: 'register',
				errors: errors.mapped(),
				body: req.body,
			})
		}
		// sequelize -------------
		db.Users.findOne({ where: { email: req.body.email } })
			.then((data) => {
				if (data == null) {
					let pass = bcrypt.hashSync(req.body.password, 10)
					db.Users.create({
						name: req.body.name,
						lastname: req.body.lastname,
						email: req.body.email,
						password: pass,
						role: 'user',
						image: 'generalAvatar.png',
					})
						.then((data) => {
							// comment => si esta todo ok pasa al next que si se ve el route de user va al login asi lo loguea automaticamente
							next()
						})
						.catch((error) => {
							console.log(error)
						})
				} else {
					res.render('users/register', {
						title: 'AZVI',
						style: 'register',
						mensaje: 'El email ya se encuentra registrado.',
						body: req.body,
						errors: {},
					})
				}
			})
			.catch((error) => {
				console.log(error)
			})
	},

	login: (req, res) => {
		let errores = validationResult(req)
		if (!errores.isEmpty()) {
			return res.render('users/login', { mensaje: errores.errors[0].msg, style: 'login', title: 'AZVI' })
		}

		db.Users.findOne({ where: { email: req.body.email } }).then((user) => {
			if (user) {
				const passIsTrue = bcrypt.compareSync(req.body.password, user.password)
				if (passIsTrue) {
					req.session.user = { ...user['dataValues'], password: '' }
					if (req.body.remember) {
						res.cookie('remember', req.session.user, { maxAge: 90000 })
					}
					res.redirect('/')
				} else {
					res.render('users/login', { mensaje: 'Credenciales invalidas', style: 'login', title: 'AZVI' })
				}
			} else {
				res.render('users/login', { mensaje: 'Credenciales invalidas', style: 'login', title: 'AZVI' })
			}
		})
	},
	logout: (req, res) => {
		res.clearCookie('remember')
		req.session.destroy((err) => {
			res.redirect('/')
		})
	},
	profile: (req, res, next) => {
		res.render('users/userData', { title: 'Mis Datos', style: 'userDataForm', session: res.locals.userLog })
	},
	editProfile: (req, res, next) => {
		db.Users.update({ image: req.files[0].filename }, { where: { id: req.session.user.id } })
			.then((dato) => {
				db.Users.findOne({ where: { email: req.session.user.email } })
					.then((user) => {
						req.session.user = { ...user['dataValues'], password: '' }
						res.redirect('/')
					})
					.catch((error) => {
						console.log(error)
					})
			})
			.catch((error) => {
				console.log(error)
			})
	},

	editProfileFields: (req, res) => {
		db.Users.update(
			{ name: req.body.name, lastname: req.body.lastname, email: req.body.email, localidad: req.body.localidad },
			{ where: { id: req.session.user.id } }
		)
			.then((dato) => {
				db.Users.findOne({ where: { email: req.session.user.email } })
					.then((user) => {
						req.session.user = { ...user['dataValues'], password: '' }
						res.redirect('/')
					})
					.catch((error) => {
						console.log(error)
					})
			})
			.catch((error) => {
				console.log(error)
			})
	},

	showHistoryShopping: async (req, res) => {
		const userId = res.locals.userLog.id

		try {
			const userProviders = await db.Users.findByPk(userId, {
				include: { association: 'providers', include: { association: 'categories' } },
			})

			res.locals.providers = userProviders.providers

			res.render('users/shopping', { title: 'Mis Compras', style: 'shopping' })
		} catch (error) {
			res.render('error2', { title: 'Error', style: 'error', message: 'Lo sentimos algo salio mal' })
			console.log(error)
		}
	},
	checkEmail: async (req, res) => {
		console.log(req.query)

		const user = await db.Users.findOne({ where: { email: req.query.email } })
		// console.log(user);
		res.send({ emailExists: user ? true : false })
	},
}

module.exports = usersController
