module.exports = (sequelize, dataTypes) => {
	const User = sequelize.define('users', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		name: dataTypes.STRING(100),

        lastname: dataTypes.STRING(100),
		email: dataTypes.STRING(100),
		password: dataTypes.STRING(100),
        role: dataTypes.STRING ,
        image: dataTypes.STRING(100),

 
	})

	return User
}
