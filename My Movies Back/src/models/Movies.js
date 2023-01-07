const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('movies', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            atuoIncrement: true,
            primaryKey: true
        },
        rank:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        rating:{
            type: DataTypes.STRING,
            allowNull: false
        },
        year:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        thumbnail:{
            type: DataTypes.STRING,
            allowNull: false
        },
        genre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        writers:{
            type: DataTypes.STRING,
            allowNull: false
        },
        director:{
            type: DataTypes.STRING,
            allowNull: false
        },
        trailer:{
            type: DataTypes.STRING,
            allowNull: false
        },
        createdInDB: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
          }
        },
        {
        timestamps: false,
    });
}