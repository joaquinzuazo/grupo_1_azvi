 
const db = require('../database/models')

const authMiddleware = (req, res, next) => {
 

	if (req.session.user) {
		db.messages.count().then((mgs) => {
			res.locals.userLog = req.session.user
			if (res.locals.userLog.role == 'admin') {
				 
				res.locals.userLog.messages = mgs
			}

			 
			next()
		})
	} else {
		next()
	}
}

module.exports = authMiddleware

