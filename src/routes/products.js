var express = require('express')
const productsController = require('../controllers/productsController')
var router = express.Router()


/*---------------------- multer y path ---------------------*/


const multer = require('multer');
const path = require('path');

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

router.get('/detail/:id', productsController.productDetail)

router.get('/category/:category',productsController.index )


router.get('/create', productsController.create)
router.post('/create',upload.any(),productsController.save)
router.get('/:id/edit',productsController.edit)
router.put('/:id/edit',upload.any(),productsController.update)
router.delete('/:id/delete',productsController.delete)

module.exports = router
