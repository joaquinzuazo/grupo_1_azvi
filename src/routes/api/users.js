var express = require('express');
var router = express.Router();
var usersAPIController = require('../../controllers/api/usersControllers')

router.get('/', usersAPIController.list);

module.exports = router;