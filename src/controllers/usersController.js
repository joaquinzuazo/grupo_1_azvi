const fs = require('fs')
const path = require('path')
const usersPathFile = path.join(__dirname, '..', 'data', 'users.json')
const users = JSON.parse(fs.readFileSync(usersPathFile, { encoding: 'utf-8' }))
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const db = require('../database/models') // PARA SEQUELIZE

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
			return res.render('register', { title: 'AZVI', style: 'register', errors: errors.mapped(), body: req.body })
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
					res.render('login', { mensaje: 'Credenciales invalidas', style: 'login', title: 'AZVI' })
				}
			} else {
				res.render('login', { mensaje: 'Credenciales invalidas', style: 'login', title: 'AZVI' })
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
		res.render('userData', { title: 'Mis Datos', style: 'userDataForm', session: res.locals.userLog })
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
}

module.exports = usersController
