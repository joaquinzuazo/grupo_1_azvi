const express = require('express')

const app = express()

app.use(express.static('public'))

// Rutas

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
	console.log(__dirname)
})

app.get('/productDetail', (req, res) => {
	res.sendFile(__dirname + '/views/productDetail.html')
})

app.get('/productCart', (req, res) => {
	res.sendFile(__dirname + '/views/productCart.html')
})

app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/views/login.html')
})

app.get('/register', (req, res) => {
	res.sendFile(__dirname + '/views/register.html')
})
console.log(__dirname);
app.listen(3000)
