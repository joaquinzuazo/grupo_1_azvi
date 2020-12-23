const express = require('express')

const router = express.Router()

router.get('/login', function (req, res, next) {
	res.render('login', { title: 'AZVI', style: 'login' })
})

router.get('/register', function (req, res, next) {
	res.render('register', { title: 'AZVI', style: 'register' })
})

router.get('/admin/create', (req, res) => {
	res.render('adminAdd', { style: 'admin' })
})

router.get('/admin/update', (req, res) => {
	res.render('adminUpdate', { style: 'admin' })
})

module.exports = router
