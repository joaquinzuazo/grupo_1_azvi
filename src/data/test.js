const fs = require('fs')

const products = JSON.parse(fs.readFileSync(__dirname+'/products.json','utf-8'))

 

 
console.log(products);