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
        deleted_at: {
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
    Comment.associate = function(models){
        Comment.belongsTo(models.Product, {
            as:"tabla_productos",
            foreignKey: "id_producto"
        }),
        Comment.belongsTo(models.User, {
            as:"tabla_usuario",
            foreignKey: "id_usuario"
        })

    }
    
    return Comment;
}
