module.exports = (sequelize, dataTypes) => {
	const Service = sequelize.define(
		'services',
		{
			id: {
				autoIncrement: true,
				primaryKey: true,
				type: dataTypes.INTEGER,
			},
			title: dataTypes.STRING(100),
			description: dataTypes.STRING(500),

			providerId: dataTypes.INTEGER,
		},
		{
            timestamps: false,
            paranoid:false
		}
	)

	Service.associate = (models) => {
		Service.belongsTo(models.providers, {
			as: 'providers',
			foreignKey: 'providerId',
		})
	}

	return Service
}
