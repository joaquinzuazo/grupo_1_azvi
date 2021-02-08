module.exports = (sequelize, dataTypes) => {
	const User = sequelize.define('Users', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		name: dataTypes.STRING(100),
		lastname: dataTypes.STRING(100),
		email: dataTypes.STRING(100),
		password: dataTypes.STRING(100),
		role: dataTypes.STRING,
		image: dataTypes.STRING(100),
	})

	User.associate = (models) => {
		//RELACION DE MUCHOS A MUCHOS
		User.belongsToMany(models.providers, {
			as: 'providers',
			through: 'shoppinghistory',
			foreignKey: 'userId',
			otherKey: 'providerId',
			timestamps: false,
		})
	}

	return User
}
