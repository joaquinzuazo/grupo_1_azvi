var express = require('express')
const productsController = require('../controllers/productsController')
var router = express.Router()

/*---------------------- multer y path ---------------------*/

const multer = require('multer')
const path = require('path')
const userCheck = require('../middlewares/userCheckMiddleware')
const { urlencoded } = require('express')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'src/data/imagesProfile')
	},
	filename: function (req, file, cb) {
		cb(null, req.body.name + req.body.lastname + path.extname(file.originalname))
	},
})

const upload = multer({ storage: storage })

router.get('/productCart', productsController.productCart)
router.post('/productCart', productsController.productCartJoin)
router.post('/productCart/join/unite', productsController.productCartJoinForm)

router.get('/detail/:id',userCheck.loged, productsController.productDetail)

router.get('/category/:category', productsController.index)

router.get('/create', userCheck.admin, productsController.create)
router.post('/create', upload.any(), productsController.save)

/* ADMIN PAGES */
 
router.get('/edit', userCheck.admin, productsController.edit) 
router.get('/edit/:providerId',userCheck.admin,  productsController.editForm)
router.put('/:providerId/edit', upload.any(), productsController.update)
router.post('/edit', userCheck.admin,  productsController.searchProducts)
router.delete('/:providerId/delete',userCheck.admin, productsController.delete)

router.get('/contact', userCheck.admin, productsController.messages)
router.get('/contact/:messageId', userCheck.admin, productsController.messageDeleted)

/*---------BUY PAGE => CUANDO EL USUARIO CONTRATA UN SERVICIO--------------*/

router.get('/buy/:providerId',userCheck.loged, productsController.buy)



module.exports = router
