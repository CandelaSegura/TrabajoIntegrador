module.exports = function (sequelize, dataTypes) {
    
    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
            type: dataTypes.INTEGER
        },
        usuario:{
            type: dataTypes.STRING(500)
        },
        email: {
            type: dataTypes.STRING(500)
        },
        contrasena: {
            type: dataTypes.STRING(100)
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull:true,
        },
        dni:{
            type: dataTypes.INTEGER,
            allowNull:true,
        },
        foto_perfil: {
            type: dataTypes.STRING(255),
            allowNull:true,
        },
        created_at: {
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
        tableName: "tabla_usuario",
        timestamps: false,
        underscored: true
    }

    const User= sequelize.define(alias, cols, config);
    //aca van las relaciones
    User.associate = function(models) {
        User.hasMany(models.Comment, {
            as: "tabla_comentarios",
            foreignKey: "id_usuario"
        }),
        User.hasMany(models.Product, {
            as: "tabla_productos",
            foreignKey: "id_usuario"
        })
    }
    return User;
}
