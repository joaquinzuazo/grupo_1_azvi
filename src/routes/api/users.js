var express = require('express');
var router = express.Router();
var usersAPIController=require('../../controllers/api/usersControllers')

router.get('/', usersAPIController.list);
router.get('/:id', usersAPIController.user);

module.exports = router;