var express = require('express');
var router = express.Router();
var categoriesAPIControllers = require('../../controllers/api/categoriesControllers')

router.get('/', categoriesAPIControllers.list);

module.exports = router;