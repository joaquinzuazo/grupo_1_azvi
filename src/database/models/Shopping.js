module.exports = (sequelize, dataTypes) => {
	const Shopping = sequelize.define(
		'Shopping',
		{
			id: {
				autoIncrement: true,
				primaryKey: true,
				type: dataTypes.INTEGER,
			},
            
            userId: dataTypes.INTEGER,
            providerId: dataTypes.INTEGER,
		},
		{ tableName: 'shoppinghistory', timestamps: false }
	)

	return Shopping
}
