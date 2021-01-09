const express = require('express')

const router = express.Router()

const usersController = require('../controllers/usersController');
 

router.get('/login',usersController.loginForm)

router.get('/register', usersController.registerForm)

 router.post('/users/login',usersController.login)

 router.get('/logout',usersController.logout)

module.exports = router
