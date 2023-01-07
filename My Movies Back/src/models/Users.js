const { DataTypes } = require('sequelize');

module.exports = ( sequelize ) => {
    sequelize.define('users', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            atuoIncrement: true,
            primaryKey: true
        },
        firstame:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        age:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        photo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        createdInDB: {
             type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },
    {timestamps: false,
    })
}