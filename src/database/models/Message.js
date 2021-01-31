module.exports = (sequelize, dataTypes) => {
	const Message = sequelize.define('messages', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER,
		},
		name: dataTypes.STRING(100),

        phone: dataTypes.STRING(100),
		 

        
 
	},{timestamps:false})

	return Message
}
