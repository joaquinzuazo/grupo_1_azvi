const fs = require('fs')

const products = JSON.parse(fs.readFileSync(__dirname+'/products.json','utf-8'))

 
const randoNum = (min,max)=>{

    const score =   Math.floor(Math.random() * (max -min)) + min;
    return score
}

 
 
// console.log(products);

let i = 1

products.forEach(product=>product.id = i++)
products.forEach(product=>product.score = randoNum(2,6))
products.forEach(product=>product.image =`user_${randoNum(1,16)}.jpg`)

const productJson = JSON.stringify(products)

fs.writeFileSync(__dirname+'/products.json',productJson)

// console.log(products);

