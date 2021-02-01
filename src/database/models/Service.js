module.exports = (sequelize, dataTypes) => {
	const Service = sequelize.define('services', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		title: dataTypes.STRING(100),
        description: dataTypes.STRING(500),
		email: dataTypes.STRING(100),
		providerId: dataTypes.INTEGER,       
    },{
        
        timestamps:false
    })
/*
    Service.associate=function(models){
        Service.belongsTo(models.User,{
            as:"",
            foreignKey:"",
            
        });
    }
    }
*/
	return Service
}