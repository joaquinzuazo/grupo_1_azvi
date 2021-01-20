const express = require('express');
const validate = require('../controllers/helpers/getValidations');

const router = express.Router()

const usersController = require('../controllers/usersController');
const path = require('path')

const multer=require('multer')
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage });
 

router.get('/login',usersController.loginForm)

router.get('/register', usersController.registerForm)

router.post('/register',validate() ,usersController.register)

router.post('/users/login',  usersController.login)

router.get('/logout',usersController.logout)

router.get('/users/:idUser/data',usersController.profile)

router.post('/users/:idUser/data',upload.any(),usersController.editProfile)

module.exports = router
