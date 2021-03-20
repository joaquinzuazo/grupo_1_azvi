var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const method = require('method-override');
const session = require('express-session')

/*---api-sprint-8---*/
var apiUsersRouter = require('./routes/api/users');
var apiProductsRouter = require('./routes/api/products');

/*---------------------- routes required ---------------------*/

var indexRouter = require('./routes/index')

const usersRouter = require('./routes/users')

const productsRouter = require('./routes/products')
const authMiddleware = require('./middlewares/authMiddleware')
const cookieMiddleware = require('./middlewares/cookieMiddleware')
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


/*---------------------- azvi Middlewares ---------------------*/

// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(method('_method'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '/data/imagesProfile')))
app.use(session({secret:'azviSecret',resave:false, saveUninitialized:true}))
app.use(cookieMiddleware)
app.use(authMiddleware)


/*---------------------- ROUTES ---------------------*/
app.use('/', indexRouter)
app.use('/products', productsRouter)
app.use('/', usersRouter)

/*---api-sprint-8---*/
app.use('/api/users', apiUsersRouter);
app.use('/api/products', apiProductsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {

	res.render('error2',{ title: 'Error', style: 'error' ,message:'Pagina no encontrada'})
	// next(createError(404))
})

// error handler
// app.use(function (err, req, res, next) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message
// 	res.locals.error = req.app.get('env') === 'development' ? err : {}

// 	// render the error page
// 	res.status(err.status || 500)
// 	// res.render('error',{title:'Error',style:'error'})
// })


// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})


module.exports = app
