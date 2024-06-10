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
        nombre_produdcto:{
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
        deletedAt: {
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
    //aca pueden ir las relaciones
    return Product;
   
}
