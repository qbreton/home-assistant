const { DataTypes, Model} = require('sequelize')
const sequelize = require('../config')

class Plant extends Model {}

Plant.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    wateringFrequency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pottingFrequency: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Plant'
})

module.exports = Plant;