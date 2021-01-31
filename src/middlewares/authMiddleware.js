 
const db = require('../database/models')

const authMiddleware = (req, res, next) => {
	// console.log(req.session);

	if (req.session.user) {
		db.messages.count().then((mgs) => {
			res.locals.userLog = req.session.user
			if (res.locals.userLog.role == 'admin') {
				console.log(mgs)
				res.locals.userLog.messages = mgs
			}

			console.log(res.locals.userLog)
			next()
		})
	} else {
		next()
	}
}

module.exports = authMiddleware
