var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('register', { title: 'AZVI', style: 'register' })
})

module.exports = router
