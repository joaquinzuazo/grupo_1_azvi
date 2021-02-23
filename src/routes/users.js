const express = require('express');
const validate = require('../controllers/helpers/getValidations');
const logValidate = require('../controllers/helpers/logValidations');
const router = express.Router()

const usersController = require('../controllers/usersController');
const path = require('path')

const multer=require('multer');
const userCheck = require('../middlewares/userCheckMiddleware');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage });
 

router.get('/users/login', userCheck.user, usersController.loginForm);

router.get('/register', userCheck.user, usersController.registerForm)

router.post('/register',validate() ,usersController.register , usersController.login)

router.post('/users/login', logValidate.login, usersController.login)

router.get('/logout',usersController.logout)

router.get('/users/data',userCheck.loged,usersController.profile)

router.post('/users/data',upload.any(),usersController.editProfile)

router.put('/user/data',usersController.editProfileFields)

/*---------------------- pagina de compras ---------------------*/

router.get('/users/shopping',userCheck.loged,usersController.showHistoryShopping)

module.exports = router
