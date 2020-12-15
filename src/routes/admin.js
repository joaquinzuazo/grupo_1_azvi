const express = require('express')

const router = express.Router()

router.get('/create', (req, res) => {
	res.render('adminAdd')
})

router.get('/update', (req, res) => {
	res.render('adminUpdate')
})

module.exports = router
