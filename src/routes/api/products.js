var express = require('express');
var router = express.Router();
var productsAPIController = require('../../controllers/api/productsController')

router.get('/all', productsAPIController.allProducts);

module.exports = router;