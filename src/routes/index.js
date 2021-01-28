var express = require('express')
var indexController = require('../controllers/indexController')
var router = express.Router()
/*

const fs = require('fs');
const path = require('path');
const productsJson = fs.readFileSync(path.join(__dirname, '../data/products.json'))

const products = JSON.parse(productsJson)
*/

/* GET home page. */
router.get('/', indexController.index)
router.get('/help', indexController.help)

module.exports = router
