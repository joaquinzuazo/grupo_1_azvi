const express = require('express')

const router = express.Router()

router.get('/create', (req, res) => {
	res.render('adminAdd', { style: 'admin' })
})

router.get('/update', (req, res) => {
	res.render('adminUpdate', { style: 'admin' })
})

module.exports = router
