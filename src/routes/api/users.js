var express = require('express');
var router = express.Router();
var usersAPIController = require('../../controllers/api/usersControllers')

router.get('/', usersAPIController);

module.exports = router;