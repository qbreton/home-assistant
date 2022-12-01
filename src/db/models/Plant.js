const { DataTypes, DATE, Model} = require('sequelize')
const { sequelizeConnection } = require('../config')

class Plant extends Model {}

Plant.init({
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        type: DataTypes.TEXT
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

export default Plant;