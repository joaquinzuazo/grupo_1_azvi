var express = require('express')
const productsController = require('../controllers/productsController')
var router = express.Router()

router.get('/productCart',productsController.productCart )

router.get('/detail/:id', productsController.productDetail)

router.get('/category/:category',productsController.index )


router.get('/create',productsController.create)
router.get('/:id/edit',productsController.edit)

module.exports = router
