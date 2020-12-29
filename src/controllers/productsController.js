const fs = require('fs')
const path = require('path');
const productsJson = fs.readFileSync(path.join(__dirname,'../data/products.json'))

const products = JSON.parse(productsJson)


const productsController = {





    /*----------------------1) facu/joaco ---------------------*/
    //hay que pasar parametro de procutos para que los pinte en views
    //hay que filtrar por categoria
    index:   (req, res) => {




        const productsByCategory = products.filter(product =>product.category==req.params.category)














        res.render('lenderList', { title: `Azvi-${req.params.category}`, 
        style:'lenderList', products : productsByCategory , titleCategory: req.params.category.toUpperCase() })
    },


    /*---------------------- 2) ya esta hecho ---------------------*/
    create:(req, res) => {
        res.render('adminAdd', {title:'Agregar Producto' ,style: 'admin' })
    },


    /*----------------------3) ya esta hechoz ---------------------*/
    //buscar en products.json el id del producto que viene por parametro y llevarlo a productdetail


    productDetail: (req, res) => {
        const productId=products.filter(product =>product.id==req.params.id)
        




















        res.render('productDetail', { title: `Azvi ${req.params.id}`, style: 'productos', product:productId, titleCategory:productId[0].category.toUpperCase() })
    },



  /*---------------------- 4)facu/joaco /products (POST)
Acción de creación (a donde se envía el formulario) ---------------------*/

















/*---------------------- ya esta heco ---------------------*/
 edit:(req, res) => {
	res.render('adminUpdate', {title:'Editar', style: 'admin' })
},


 /*---------------------- 6) facu/jaoco /products/ :id (PUT)
Acción de edición (a donde se envía el formulario): ---------------------*/

















/*---------------------- 7) tomi V /products/ :id (DELETE)
Acción de borrado ---------------------*/
















productCart:  (req, res, next) => {
	res.render('productCart', { title: 'AZVI PLANES', style: 'productCart' })
}



}

module.exports = productsController
