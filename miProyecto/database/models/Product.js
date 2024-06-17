
module.exports = function (sequelize, dataTypes){
    
    let alias = 'Product' //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type : dataTypes.INTEGER,
            allowNull: false
        },
        imagen_producto: {
            type: dataTypes.STRING(255)
        },
        nombre_producto:{
            type: dataTypes.STRING(200)
        },
        descripcion_producto: {
            type: dataTypes.STRING(1000)
        },
        created_at : {
            type: dataTypes.DATE,
            allowNull:true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true
        }

    };

    let config = {
        tableName: "tabla_productos",
        timestamps: false,
        underscored: true
    };

    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models) {
        Product.hasMany(models.Comment, {
            as: "tabla_comentarios",
            foreignKey: "id_producto"
        }),
        Product.belongsTo(models.User, {
            as:"tabla_usuario",
            foreignKey: "id_usuario"
        });
    };

    return Product;
   
}
