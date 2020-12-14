var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var registerRouter = require('./routes/register')
var loginRouter = require('./routes/login')
var productDetailRouter = require('./routes/productDetail')
var productCartRouter = require('./routes/productCart')
const adminRouter = require('./routes/admin')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/*---------------------- ROUTES ---------------------*/

app.use('/', indexRouter)
app.use('/index', indexRouter)
app.use('/productDetail', productDetailRouter)
app.use('/productCart', productCartRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/admin', adminRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

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
