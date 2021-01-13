const express = require('express');
const validate = require('../controllers/helpers/getValidations');

const router = express.Router()

const usersController = require('../controllers/usersController');
 

router.get('/login',usersController.loginForm)

router.get('/register', usersController.registerForm)

router.post('/register',validate() ,usersController.register)

router.post('/users/login',usersController.login)

router.get('/logout',usersController.logout)

module.exports = router
