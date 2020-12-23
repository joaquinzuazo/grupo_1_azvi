var express = require('express')
var router = express.Router()

router.get('/productCart', function (req, res, next) {
	res.render('productCart', { title: 'AZVI', style: 'productCart' })
})

router.get('/productDetail', function (req, res, next) {
	res.render('productDetail', { title: 'AZVI', style: 'productos' })
})

router.get('/lenderList', function (req, res, next) {
	res.render('lenderList', { title: 'AZVI' })
})

module.exports = router
