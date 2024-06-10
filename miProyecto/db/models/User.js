module.exports = function (sequelize, dataTypes) {
    
    let alias = 'User';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING(500)
        },
        constrasena: {
            type: dataTypes.STRING(100)
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni:{
            type: dataTypes.INTEGER
        },
        foto_perfil: {
            type: dataTypes.STRING(255)
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
        tableName: "tabla_usuario",
        timestamps: false,
        underscored: true
    }

    const User= sequelize.define(alias, cols, config);
    //aca van las relaciones
    return User;
}
