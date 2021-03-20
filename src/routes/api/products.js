var express = require('express');
var router = express.Router();
var productsAPIController = require('../../controllers/api/productsControllers')

router.get('/', productsAPIController);

module.exports = router;