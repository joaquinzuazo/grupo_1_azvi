var express = require('express');
var router = express.Router();
var categoryAPIControllers = require('../../controllers/api/categoryControllers')

router.get('/', categoryAPIControllers.list);

module.exports = router;