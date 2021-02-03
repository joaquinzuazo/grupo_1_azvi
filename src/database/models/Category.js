
module.exports = (sequelize, dataTypes) =>{

        const Category = sequelize.define('categories',{
            id:{
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            name: dataTypes.STRING(100)
            },{
                tableName:'categories',
            timestamps: false
            });

    


        Category.associate =  function(models) {

            Category.hasMany(models.providers,{

                as:"providers",
                foreignKey: "categorieId"
            })
        }
              

        return Category;
}

/*



*/