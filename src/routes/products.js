var express = require('express')
const productsController = require('../controllers/productsController')
var router = express.Router()



/*---------------------- multer y path ---------------------*/


const multer = require('multer');
const path = require('path');
const userCheck = require('../middlewares/userCheckMiddleware');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'src/data/imagesProfile')
	},
	filename: function (req, file, cb) {
		cb(null, req.body.name +req.body.lastname+  path.extname(file.originalname))
	},
})

const upload = multer({ storage: storage })




router.get('/productCart',productsController.productCart )
router.post('/productCart',productsController.productCartJoin )
router.post('/productCart/join/unite',productsController.productCartJoinForm )

router.get('/detail/:id',  productsController.productDetail)

router.get('/category/:category',productsController.index )


router.get('/create', userCheck.admin, productsController.create)
router.post('/create',upload.any(),productsController.save)
// router.get('/edit', userCheck.admin, productsController.edit) fix => temporal para que se refresquen cambios sin login
router.get('/edit' , productsController.edit)
router.put('/:id/edit',upload.any(),productsController.update)
router.delete('/:id/delete',productsController.delete)
router.post('/edit',productsController.searchProducts)

router.get('/contact',userCheck.admin , productsController.messages)
router.get('/contact/:messageId',userCheck.admin , productsController.messageDeleted)

module.exports = router
