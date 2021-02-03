module.exports = (sequelize, dataTypes) => {
	const Provider = sequelize.define('providers', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
        name: dataTypes.STRING(100),
        lastname: dataTypes.STRING(100),
        email: dataTypes.STRING(100),
        cellphone: dataTypes.STRING(100),
        location: dataTypes.STRING(100),
        score: dataTypes.INTEGER,
        categorieId: dataTypes.INTEGER,
        location: dataTypes.STRING(100),
        image: dataTypes.STRING(100), 
    },{paranoid:false})
 
    Provider.associate=function(models){
        Provider.hasOne(models.services,{
            as:'services',
            foreignKey:'providerId'
        })
        Provider.belongsTo(models.categories,{
            as: "categories",
            foreignKey: "categorieId"

        });

    }
    
 

	return Provider
}