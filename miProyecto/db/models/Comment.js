module.exports = function (sequelize, dataTypes){

    let alias = 'Comment';

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
        id_producto:{
            type : dataTypes.INTEGER,
            allowNull: false
        },
        texto_comentario: {
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
        tableName: "tabla_comentarios",
        timestamps: false,
        underscored: true
    };

    const Comment = sequelize.define(alias, cols, config);
    //aca van las relaciones
    
    return Comment;
}
